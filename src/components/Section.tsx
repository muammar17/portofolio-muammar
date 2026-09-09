import Reveal from './Reveal'

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
}: {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-16 sm:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 dark:text-ink-50 sm:text-4xl">
            {title}
          </h2>
          <div className="index-rule" aria-hidden />
          {subtitle && (
            <p className="mt-5 max-w-2xl leading-relaxed text-ink-600 dark:text-ink-300">{subtitle}</p>
          )}
        </Reveal>
        <div className="mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  )
}
