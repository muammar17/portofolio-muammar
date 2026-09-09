import { useState } from 'react'
import Section from './Section'
import Reveal from './Reveal'
import ProjectModal from './ProjectModal'
import { projects } from '../data/profile'
import type { Project } from '../data/profile'

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <Section
      id="projects"
      title="Key Projects"
      subtitle="Selected products I have built and shipped in production."
      className="relative overflow-hidden"
    >
      <div className="grid gap-px bg-ink-200/80 dark:bg-ink-800/80 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const hasDetails = Boolean(p.modules?.length || p.features?.length)
          const card = (
            <article className="group flex h-full flex-col bg-[#f2f3f5] p-6 transition-colors dark:bg-ink-950 hover:bg-white dark:hover:bg-ink-900/60 sm:p-7">
              {/* Docket index + action */}
              <div className="flex items-start justify-between gap-4">
                <span
                  aria-hidden
                  className="font-mono text-sm text-ink-400 transition-colors duration-200 group-hover:text-signal-600 dark:text-ink-600 dark:group-hover:text-signal-400"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                {hasDetails ? (
                  <span className="meta inline-flex items-center gap-2 text-signal-600 dark:text-signal-400">
                    Details
                    <svg
                      aria-hidden
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                ) : (
                  <span className="meta inline-flex items-center gap-2 text-ink-500 dark:text-ink-400">
                    Visit
                    <svg
                      aria-hidden
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                )}
              </div>

              <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-ink-950 transition-colors duration-200 group-hover:text-signal-600 dark:text-ink-50 dark:group-hover:text-signal-400">
                {p.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                {p.description}
              </p>

              <div className="mt-6 border-t border-ink-200/80 pt-4 dark:border-ink-800/80">
                <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {p.tools.slice(0, 4).map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                  {p.tools.length > 4 && (
                    <span className="font-mono text-[11px] text-ink-400 dark:text-ink-600">
                      +{p.tools.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </article>
          )

          return hasDetails ? (
            <Reveal key={p.name} delay={(i % 3) * 60}>
              <button onClick={() => setSelected(p)} className="h-full w-full text-left focus-ring rounded-md">
                {card}
              </button>
            </Reveal>
          ) : (
            <Reveal key={p.name} delay={(i % 3) * 60}>
              <a href={p.link} target="_blank" rel="noreferrer" className="block h-full focus-ring rounded-md">
                {card}
              </a>
            </Reveal>
          )
        })}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </Section>
  )
}
