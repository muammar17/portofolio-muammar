import { profile } from '../data/profile'
import Reveal from './Reveal'

const stats = [
  { value: '5+', label: 'Years in production' },
  { value: '80+', label: 'Modules on one admin platform' },
  { value: '6', label: 'Products shipped live' },
]

function SocialLink({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="focus-ring rounded-md text-ink-500 transition-colors hover:text-signal-600 dark:text-ink-400 dark:hover:text-signal-400"
    >
      {children}
    </a>
  )
}

export default function Hero() {
  const [first, ...rest] = profile.name.split(' ')
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Faint survey grid, anchored to the top-left corner */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(93,103,121,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(93,103,121,0.5) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Status line */}
        <Reveal>
          <p className="meta flex items-center gap-2.5 text-ink-500 dark:text-ink-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-500" />
            </span>
            Open to new opportunities
            <span aria-hidden className="text-ink-300 dark:text-ink-700">/</span>
            {profile.location}
          </p>
        </Reveal>

        {/* The one bold moment: the name, stacked full-width */}
        <Reveal delay={80}>
          <h1 className="mt-6 font-display font-extrabold uppercase leading-[0.95] tracking-tight text-ink-950 dark:text-ink-50">
            <span className="block text-[13vw] sm:text-7xl lg:text-8xl">{first}</span>
            <span className="block text-[13vw] sm:text-7xl lg:text-8xl text-ink-300 dark:text-ink-800">
              {rest.join(' ')}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8 flex flex-col gap-6 border-t border-ink-200/80 pt-8 dark:border-ink-800/80 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="font-display text-lg font-semibold text-ink-900 dark:text-ink-100">
                {profile.role}
              </p>
              <p className="mt-2 leading-relaxed text-ink-600 dark:text-ink-300">{profile.tagline}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a href={profile.cvFile} download className="btn-solid focus-ring">
                Download CV
              </a>
              <a href="#contact" className="btn-outline focus-ring">
                Get in touch
              </a>
            </div>
          </div>
        </Reveal>

        {/* Manifest strip: stats left, socials right */}
        <Reveal delay={240}>
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <dl className="flex flex-wrap gap-x-10 gap-y-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-bold text-ink-950 dark:text-ink-50">{s.value}</dt>
                  <dd className="meta mt-1 text-ink-500 dark:text-ink-400 normal-case tracking-normal">{s.label}</dd>
                </div>
              ))}
            </dl>
            <div className="flex items-center gap-5">
              <SocialLink label="LinkedIn" href={profile.linkedin}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5A2.49 2.49 0 1 1 0 3.5a2.49 2.49 0 0 1 4.98 0zM.24 8.31h4.72V24H.24V8.31zM8.34 8.31h4.52v2.14h.06c.63-1.19 2.17-2.45 4.46-2.45 4.77 0 5.65 3.14 5.65 7.22V24h-4.72v-7.79c0-1.86-.03-4.25-2.59-4.25-2.6 0-3 2.03-3 4.12V24H8.34V8.31z" />
                </svg>
              </SocialLink>
              <SocialLink label="GitHub" href={profile.github}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-1.97c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.05.78 2.13v3.16c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </SocialLink>
              <SocialLink label="WhatsApp" href={profile.whatsapp}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 3.51 17.13L2 22l4.99-1.48A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-2.96.88.89-2.89-.2-.31A8.2 8.2 0 1 1 12 20.2zm4.5-6.14c-.25-.12-1.46-.72-1.68-.8-.23-.09-.39-.13-.56.12s-.64.8-.78.97c-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.35-2.93c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.42s-.56-1.35-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48a.92.92 0 0 0-.66.31c-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
                </svg>
              </SocialLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
