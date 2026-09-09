import { useEffect, useState } from 'react'
import { navItems, profile } from '../data/profile'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-200/70 bg-[#f2f3f5]/90 backdrop-blur-md dark:border-ink-800/70 dark:bg-ink-950/85'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
        <a href="#top" className="focus-ring group flex items-center gap-2.5 rounded-md">
          {/* Wayfinding mark: square tile with an amber corner tick */}
          <span className="relative grid place-items-center w-8 h-8 rounded-md bg-ink-950 dark:bg-signal-500">
            <span className="font-display text-[11px] font-bold text-signal-500 dark:text-ink-950">
              {profile.initials}
            </span>
          </span>
          <span className="hidden sm:inline font-display text-sm font-semibold tracking-tight text-ink-900 dark:text-ink-50">
            Muammar<span className="text-signal-500">.</span>dev
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-ink-600 dark:text-ink-300">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="focus-ring rounded transition-colors hover:text-signal-600 dark:hover:text-signal-400">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`#${navItems[navItems.length - 1].href.slice(1)}`}
            className="focus-ring hidden md:inline-flex items-center rounded-md bg-ink-950 px-4 py-2 font-display text-sm font-semibold text-white transition-colors hover:bg-signal-600 dark:bg-signal-500 dark:text-ink-950 dark:hover:bg-signal-400"
          >
            Hire Me
          </a>
        </div>

        <button
          className="focus-ring rounded-md p-2 text-ink-600 dark:text-ink-300 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="border-t border-ink-200/70 bg-[#f2f3f5]/95 px-4 py-3 space-y-1 backdrop-blur-md md:hidden dark:border-ink-800/70 dark:bg-ink-950/95">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-100 hover:text-ink-950 dark:text-ink-200 dark:hover:bg-ink-800/60 dark:hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
