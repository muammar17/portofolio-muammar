import Section from './Section'
import Reveal from './Reveal'
import { skillGroups } from '../data/profile'

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technologies and practices I work with day to day."
    >
      <dl className="grid gap-x-12 lg:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={(i % 2) * 80}>
            <div className="grid grid-cols-1 gap-1 border-t border-ink-200/80 py-5 dark:border-ink-800/80 sm:grid-cols-[180px_1fr] sm:gap-4">
              <dt className="meta pt-1 text-ink-500 dark:text-ink-400">{group.label}</dt>
              <dd className="flex flex-wrap gap-x-3 gap-y-1.5 text-sm font-medium text-ink-800 dark:text-ink-100">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
