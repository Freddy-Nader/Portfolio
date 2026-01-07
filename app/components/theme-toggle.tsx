"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

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

    return (
        <button
            id="theme-toggle"
            aria-label="Toggle dark mode"
            aria-keyshortcuts="l"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            {/* Sun Icon */}
            <svg className="icon sun-icon">
                <use href="/img/icons.svg#sun"></use>
            </svg>
            {/* Moon Icon */}
            <svg className="icon moon-icon">
                <use href="/img/icons.svg#moon"></use>
            </svg>
        </button>
    )
}
