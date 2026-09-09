import Section from './Section'
import Reveal from './Reveal'
import { profile, strengths } from '../data/profile'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-ink-700 dark:text-ink-200">{profile.summary}</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="border-t border-ink-200/80 pt-6 dark:border-ink-800/80 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-8">
            <h3 className="meta text-ink-500 dark:text-ink-400">Strengths</h3>
            <ul className="mt-4 space-y-3">
              {strengths.map((s) => (
                <li key={s} className="flex gap-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  <span aria-hidden className="mt-[7px] h-1 w-3 shrink-0 bg-signal-500" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
