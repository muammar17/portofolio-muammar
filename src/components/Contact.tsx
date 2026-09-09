import Section from './Section'
import Reveal from './Reveal'
import { profile } from '../data/profile'

const contacts = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone / WhatsApp', value: profile.phone, href: profile.whatsapp },
  { label: 'LinkedIn', value: 'muammar-bintang-abdillah', href: profile.linkedin },
  { label: 'GitHub', value: profile.github.replace('https://github.com/', ''), href: profile.github },
]

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Feel free to reach out — I'm open to new opportunities and collaborations."
      className="relative overflow-hidden"
    >
      <div className="grid sm:grid-cols-2">
        {contacts.map((c, i) => (
          <Reveal key={c.label} delay={(i % 2) * 80}>
            <a
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="focus-ring group flex h-full items-baseline gap-6 border-t border-ink-200/80 py-6 transition-colors dark:border-ink-800/80 sm:pr-8"
            >
              <span className="meta w-40 shrink-0 text-ink-500 dark:text-ink-400">{c.label}</span>
              <span className="font-display font-semibold text-ink-900 break-words transition-colors group-hover:text-signal-600 dark:text-ink-50 dark:group-hover:text-signal-400">
                {c.value}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
