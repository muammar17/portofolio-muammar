import Section from './Section'
import Reveal from './Reveal'
import { experiences } from '../data/profile'

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="5+ years building production web applications across logistics, IoT, and fintech."
    >
      <ol>
        {experiences.map((exp, i) => (
          <li key={`${exp.company}-${exp.period}`}>
            <Reveal delay={i * 60}>
              <article className="grid gap-3 border-t border-ink-200/80 py-8 dark:border-ink-800/80 lg:grid-cols-[200px_1fr] lg:gap-10">
                <div className="lg:pt-1">
                  <p className="meta text-signal-600 dark:text-signal-400">{exp.period}</p>
                  <p className="mt-2 text-xs text-ink-500 dark:text-ink-400">{exp.location}</p>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-ink-950 dark:text-ink-50">
                    {exp.company}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-ink-600 dark:text-ink-300">{exp.role}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300"
                      >
                        <span aria-hidden className="mt-[7px] h-1 w-3 shrink-0 bg-ink-300 dark:bg-ink-700" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                    {exp.tools.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
