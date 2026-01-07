"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
    interface Window {
        renderMathInElement: (element: HTMLElement, options: any) => void
    }
}

export function KatexInit() {
    const pathname = usePathname()

    useEffect(() => {
        if (typeof window !== 'undefined' && window.renderMathInElement) {
            window.renderMathInElement(document.body, {
                delimiters: [
                    { left: '\u0024\u0024', right: '\u0024\u0024', display: true },
                    { left: '\u0024', right: '\u0024', display: false },
                    { left: '\\(', right: '\\)', display: false },
                    { left: '\\[', right: '\\]', display: true }
                ],
                throwOnError: false
            })
        }
    }, [pathname])

    return null
}
