'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050a1a]/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Eastcoast AVL"
            width={140}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors duration-150 ${
                pathname === link.href ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/contact"
            className="flex items-center gap-2 px-4 py-2 bg-[#1a7fe8] text-white text-sm font-semibold rounded-lg hover:bg-[#2196f3] transition-colors duration-150"
          >
            Get A Quote
          </Link>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="text-white p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a0f2e]/98 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-semibold border-b border-white/10 last:border-0 text-white/80"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center px-4 py-3 bg-[#1a7fe8] text-white font-semibold rounded-lg"
            >
              Get A Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
