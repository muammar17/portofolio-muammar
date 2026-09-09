import Section from './Section'
import Reveal from './Reveal'
import { highlights } from '../data/profile'

export default function Highlights() {
  return (
    <Section
      id="highlights"
      title="Technical Highlights"
      subtitle="What I bring as a senior developer, proven on production enterprise systems."
    >
      <div className="grid gap-x-12 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((h, i) => (
          <Reveal key={h.title} delay={(i % 3) * 80}>
            <div className="border-t border-ink-200/80 py-6 dark:border-ink-800/80">
              <h3 className="font-display font-semibold text-ink-900 dark:text-ink-50">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{h.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
