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
