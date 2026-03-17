import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <section className="hero-bg pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">About Us</p>
          <h1 className="font-display font-black text-white leading-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Built by People
            <br />
            <span style={{ color: '#1a7fe8' }}>Who Do This.</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            Eastcoast AVL was founded by working audio, video, and lighting professionals
            with years of hands-on experience in church production and live events.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Our Story</p>
              <h2 className="section-title mb-6">We Know What It Takes</h2>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Eastcoast AVL started with a simple belief: churches and live events deserve
                  the same quality of technical production that major touring acts and broadcast
                  networks expect — without the agency overhead.
                </p>
                <p>
                  We're based in Jacksonville, NC, and we've spent years behind the console,
                  on the lighting rig, and behind the camera for Sunday services, conferences,
                  and large-scale events up and down the East Coast.
                </p>
                <p>
                  Every project we take on is personal — we treat your venue, your service,
                  and your event like it's our own. That's the Eastcoast difference.
                </p>
              </div>
            </div>
            <div className="bg-[#0a0f2e] dark:bg-[#050a1a] rounded-3xl p-10 text-center">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: '100+', label: 'Events Produced' },
                  { value: '50+', label: 'Church Clients' },
                  { value: '8+', label: 'Years Experience' },
                  { value: '24/7', label: 'Support Available' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display font-black text-[#1a7fe8] mb-1" style={{ fontSize: '2.5rem' }}>
                      {stat.value}
                    </p>
                    <p className="text-white/50 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="section-title mb-5">Want to Work With Us?</h2>
          <Link href="/contact" className="btn-primary">
            Get In Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
