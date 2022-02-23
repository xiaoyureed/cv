/* Import ---------------------------------------------------------------------- */ // - x70

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

/* ---------------------------------------------------------------------- */

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // - When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title="Toggle light/dark theme"
      aria-label="Toggle light/dark theme"
      data-ga-event-action={theme}
      style={{
        width: '1.5rem',
        height: '1.5rem',

        backgroundColor: 'transparent',
        border: 'none',

        margin: '0.625rem',
      }}
    >
      {theme === 'light' ? (
        <i className="bx bx-moon bx-sm" />
      ) : (
        <i className="bx bxs-sun bx-sm" />
      )}
    </button>
  )
}
