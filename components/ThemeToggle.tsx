'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="w-8 h-8" />
  }

  const cycle = () => {
    if (theme === 'system') setTheme('light')
    else if (theme === 'light') setTheme('dark')
    else setTheme('system')
  }

  return (
    <button
      onClick={cycle}
      className="w-8 h-8 flex items-center justify-center rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-150"
      aria-label={`Current theme: ${theme}. Click to switch.`}
      title={`Theme: ${theme}`}
    >
      {theme === 'light' && <Sun size={16} />}
      {theme === 'dark' && <Moon size={16} />}
      {theme === 'system' && <Monitor size={16} />}
    </button>
  )
}
