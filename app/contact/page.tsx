'use client'

import { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // TODO: wire up to Resend API route
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <>
      <section className="hero-bg pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Get In Touch</p>
          <h1 className="font-display font-black text-white leading-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Let&apos;s Talk About
            <br />
            <span style={{ color: '#1a7fe8' }}>Your Project</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            Whether you need AVL production for an event, a church system installation,
            or need ongoing technical support — we&apos;d love to hear from you.
          </p>
        </div>
        <div className="wave-bottom">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z" />
          </svg>
        </div>
      </section>

      <section className="py-24" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-title mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-[#1a7fe8]" style={{ background: 'rgba(26,127,232,0.08)' }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>Email</p>
                    <a href="mailto:info@eastcoastavl.com" className="text-[var(--text-secondary)] hover:text-[#1a7fe8] transition-colors">
                      info@eastcoastavl.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-[#1a7fe8]" style={{ background: 'rgba(26,127,232,0.08)' }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>Location</p>
                    <p className="text-[var(--text-secondary)]">Jacksonville, NC</p>
                    <p className="text-[var(--text-muted)] text-sm">Serving the East Coast</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 p-6 rounded-2xl" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                <p className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Need a Quote?</p>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Tell us about your event or project and we&apos;ll get back to you
                  with a custom proposal within 24 hours.
                </p>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-[#1a7fe8]" style={{ background: 'rgba(26,127,232,0.1)' }}>
                    <Send size={28} />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-2" style={{ color: 'var(--text-primary)' }}>Message Sent!</h3>
                  <p className="text-[var(--text-secondary)]">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>First Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#1a7fe8] focus:border-transparent" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>Last Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#1a7fe8] focus:border-transparent" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>Email</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#1a7fe8] focus:border-transparent" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>Organization / Church</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#1a7fe8] focus:border-transparent" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>I&apos;m interested in</label>
                    <select className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#1a7fe8] focus:border-transparent" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}>
                      <option>Live Sound Production</option>
                      <option>Video Production & Broadcast</option>
                      <option>Lighting Design</option>
                      <option>System Installation</option>
                      <option>Event Technical Direction</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>Message</label>
                    <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#1a7fe8] focus:border-transparent resize-none" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                  </div>
                  <button type="submit" disabled={loading} className="w-full btn-primary justify-center py-4 disabled:opacity-50 disabled:cursor-not-allowed">
                    {loading ? 'Sending...' : 'Send Message'} <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
