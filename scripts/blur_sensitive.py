"""
OCR-based partial blur for portfolio screenshots.

Detects text via RapidOCR, then blurs the RIGHT ~55% of each detected
text box (so data values are half-masked but the layout stays readable).
Outputs go to an output folder; originals are untouched.
"""

import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter
from rapidocr_onnxruntime import RapidOCR

FRACTION_BLUR = 0.55   # portion (from the right) of each text box to blur
DETECT_MAX_SIDE = 2500  # downscale factor for OCR detection speed


def pixelate_blur(img: Image.Image, box: tuple[int, int, int, int]) -> None:
    """Apply gaussian + pixelate blur inside box (l, t, r, b), in place."""
    l, t, r, b = box
    w, h = r - l, b - t
    if w <= 0 or h <= 0:
        return
    region = img.crop(box)
    # gaussian
    region = region.filter(ImageFilter.GaussianBlur(radius=max(3, min(w, h) // 6)))
    # pixelate
    small = region.resize((max(1, w // 12), max(1, h // 12)), Image.NEAREST)
    region = small.resize((w, h), Image.NEAREST)
    img.paste(region, (l, t))


def main(src_dir: str, out_dir: str) -> None:
    src, out = Path(src_dir), Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)
    ocr = RapidOCR()

    for path in sorted(src.glob('*.png')):
        print(f'== {path.name}')
        img = Image.open(path).convert('RGB')
        W, H = img.size

        # detect boxes on a downscaled copy, scale coords back up
        scale = min(1.0, DETECT_MAX_SIDE / max(W, H))
        det_img = img.resize((int(W * scale), int(H * scale)), Image.LANCZOS)
        result, _ = ocr(np.array(det_img))
        if not result:
            print('   no text detected, copying as-is')
            img.save(out / path.name)
            continue

        n = 0
        for item in result:
            pts, _text, _conf = item[0], item[1], item[2]
            xs = [p[0] / scale for p in pts]
            ys = [p[1] / scale for p in pts]
            l, r = int(min(xs)), int(max(xs))
            t, b = int(min(ys)), int(max(ys))
            # blur the right fraction of the text box
            split = int(l + (r - l) * (1 - FRACTION_BLUR))
            pixelate_blur(img, (split, t, r, b))
            n += 1
        print(f'   {n} text boxes blurred')
        img.save(out / path.name, optimize=True)


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
