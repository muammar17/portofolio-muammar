import Section from './Section'
import Reveal from './Reveal'
import { education } from '../data/profile'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-x-12 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 80}>
            <div className="border-t border-ink-200/80 py-6 dark:border-ink-800/80">
              <p className="meta text-signal-600 dark:text-signal-400">{e.period}</p>
              <h3 className="mt-2 font-display font-bold tracking-tight text-ink-950 dark:text-ink-50">
                {e.degree}
              </h3>
              <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">{e.school}</p>
              <p className="mt-2 text-sm font-medium text-ink-700 dark:text-ink-200">{e.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={160}>
        <p className="mt-6 text-sm text-ink-500 dark:text-ink-400">
          English proficiency: TOEFL Certificate (CEFR B1–B2, Writing C2).
        </p>
      </Reveal>
    </Section>
  )
}
