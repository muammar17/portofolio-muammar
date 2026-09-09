import { useEffect } from 'react'
import type { Project } from '../data/profile'

interface Props {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink-950/70 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} details`}
    >
      <div
        className="relative my-4 w-full max-w-3xl overflow-hidden rounded-md border border-ink-200 bg-white shadow-2xl dark:border-ink-800 dark:bg-ink-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-ink-200/80 p-6 dark:border-ink-800/80 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-ink-950 dark:text-ink-50 sm:text-3xl">
                {project.name}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                {project.description}
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close details"
              className="focus-ring shrink-0 rounded-md p-2 text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-800 dark:hover:bg-ink-800 dark:hover:text-ink-100"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
            {project.tools.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {project.modules && (
            <section>
              <h4 className="meta text-ink-500 dark:text-ink-400">Modules</h4>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                {project.modules.map((m) => (
                  <div key={m.title} className="border-t border-ink-200/80 pt-4 dark:border-ink-800/80">
                    <h5 className="font-display font-semibold text-ink-900 dark:text-ink-50">{m.title}</h5>
                    <ul className="mt-2 space-y-1.5">
                      {m.items.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm text-ink-600 dark:text-ink-300">
                          <span aria-hidden className="mt-[7px] h-1 w-3 shrink-0 bg-signal-500" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.features && (
            <section className="mt-8">
              <h4 className="meta text-ink-500 dark:text-ink-400">Technical Highlights</h4>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-ink-600 dark:text-ink-300">
                    <span aria-hidden className="mt-[7px] h-1 w-3 shrink-0 bg-signal-500" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-8 flex justify-end border-t border-ink-200/80 pt-6 dark:border-ink-800/80">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="btn-solid focus-ring"
            >
              Visit {project.name}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
