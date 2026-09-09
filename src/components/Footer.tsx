import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-ink-200/80 py-8 dark:border-ink-800/80">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-ink-500 dark:text-ink-400">
          © {new Date().getFullYear()} {profile.name} · Built with React & Tailwind CSS
        </p>
        <a
          href="#top"
          className="focus-ring rounded text-sm font-medium text-signal-600 transition-colors hover:text-signal-500 dark:text-signal-400 dark:hover:text-signal-300"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
