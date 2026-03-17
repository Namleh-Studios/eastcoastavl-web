import Link from 'next/link'
import { ArrowRight, Mic, Video, Lightbulb, Calendar, Settings, Radio } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Audio · Video · Lighting</p>
            <h1
              className="font-display font-black text-white leading-[0.95] mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', letterSpacing: '-0.02em' }}
            >
              EASTCOAST
              <br />
              <span style={{ color: '#1a7fe8' }}>AVL</span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-10 max-w-xl">
              Professional audio, video, and lighting for churches, live events,
              and broadcast production. Serving Jacksonville, NC and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="btn-primary">
                Our Services <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
        <div className="wave-bottom">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z" />
          </svg>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-24" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-3">What We Do</p>
            <h2 className="section-title">Full-Service AVL Production</h2>
            <p className="text-[var(--text-secondary)] mt-4 max-w-xl mx-auto">
              From Sunday morning services to large-scale live events, we deliver
              professional audio, video, and lighting solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mic size={28} />,
                title: 'Audio',
                description: 'Live sound mixing, system design, installation, and technical direction for churches and live events.',
              },
              {
                icon: <Video size={28} />,
                title: 'Video',
                description: 'Live broadcast, streaming, camera operation, video production, and display system integration.',
              },
              {
                icon: <Lightbulb size={28} />,
                title: 'Lighting',
                description: 'Stage lighting design, programming, installation, and operation for worship and live productions.',
              },
            ].map((service) => (
              <div key={service.title} className="card p-8">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-[#1a7fe8]"
                  style={{ background: 'rgba(26,127,232,0.08)' }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Why Eastcoast AVL</p>
              <h2 className="section-title mb-6">Built by People Who Do This</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                We&apos;re not a vendor — we&apos;re working professionals with years of hands-on
                experience behind the console, on the lighting rig, and behind the camera.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                Whether it&apos;s a weekly church service or a large-scale production, we bring
                the same level of expertise and attention to detail to every project.
              </p>
              <Link href="/about" className="btn-primary">
                About Us <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-[#0a0f2e] dark:bg-[#050a1a] rounded-3xl p-10">
              <div className="grid grid-cols-2 gap-8 text-center">
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

      {/* CTA */}
      <section className="py-24" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-label mb-3">Get In Touch</p>
          <h2 className="section-title mb-5">Ready to Work Together?</h2>
          <p className="text-[var(--text-secondary)] mb-8 text-lg">
            Whether it&apos;s a Sunday service, a live event, or a full system installation —
            let&apos;s talk about what you need.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
