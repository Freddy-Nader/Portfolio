"use client"

import * as React from "react"
import { 
  useTheme,
  ThemeProvider as NextThemesProvider
} from "next-themes"

/**
 * A wrapper component for the NextThemesProvider.
 * It provides a convenient way to wrap your app with the theme provider.
 * @param {React.ComponentProps<typeof NextThemesProvider>} props - Props to be passed to the NextThemesProvider.
 * @returns {React.ReactElement} A NextThemesProvider component with the provided props.
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

/**
 * A component that toggles the theme when the 'l' or 'L' key is pressed.
 * @returns {null} A component that toggles the theme when the 'l' or 'L' key is pressed.
 */
export function ThemeToggle() {
  const { setTheme } = useTheme()

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (
        e.target instanceof HTMLElement &&
        (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')
      ) {
        return
      }

      if (e.key === 'l' || e.key === 'L') {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [setTheme])

  return null
}

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isLight = mounted ? resolvedTheme === "light" : false

  return (
    <button
      type="button"
      className={`theme-switch ${isLight ? "is-light" : "is-dark"}`}
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      aria-pressed={!isLight}
    >
      <span className="theme-switch-icon theme-switch-icon-light" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2.5v2.25M12 19.25v2.25M21.5 12h-2.25M4.75 12H2.5M18.72 5.28l-1.6 1.6M6.88 17.12l-1.6 1.6M18.72 18.72l-1.6-1.6M6.88 6.88l-1.6-1.6" />
        </svg>
      </span>
      <span className="theme-switch-icon theme-switch-icon-dark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.86 2.28a.75.75 0 0 1 .82.97A8.76 8.76 0 1 0 20.75 14.3a.75.75 0 0 1 .98.82A10.26 10.26 0 1 1 14.87 2.3Z" />
        </svg>
      </span>
      <span className="theme-switch-thumb" aria-hidden="true" />
    </button>
  )
}
