import Link from 'next/link'
import { ArrowRight, Mic, Video, Lightbulb, Zap, FileText, Share2, Scissors, Music } from 'lucide-react'

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
              <Link href="/sermonai" className="btn-outline">
                SermonAI <Zap size={16} />
              </Link>
            </div>
          </div>
        </div>
        <div className="wave-bottom">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-3">What We Do</p>
            <h2 className="section-title">Full-Service AVL Production</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
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
                <h3 className="text-xl font-display font-bold text-[#0a0f2e] mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
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

      {/* SermonAI Feature Block */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#0a0f2e] rounded-3xl overflow-hidden relative">
            <div
              className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(26,127,232,0.2) 0%, transparent 70%)',
                transform: 'translate(30%, -30%)',
              }}
            />
            <div className="relative z-10 p-12 md:p-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a7fe8]/20 border border-[#1a7fe8]/30 mb-6">
                    <Zap size={12} className="text-[#1a7fe8]" />
                    <span className="text-[#1a7fe8] text-xs font-bold tracking-widest uppercase">
                      Introducing SermonAI
                    </span>
                  </div>
                  <h2
                    className="font-display font-black text-white leading-tight mb-5"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                  >
                    Upload Once.
                    <br />
                    <span style={{ color: '#1a7fe8' }}>Publish Everywhere.</span>
                  </h2>
                  <p className="text-white/60 leading-relaxed mb-8">
                    Upload your sermon video and receive a complete content package —
                    transcript, blog post, social captions, video clips, graphics,
                    podcast episode, and more. Automatically.
                  </p>
                  <Link href="/sermonai" className="btn-primary">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: <FileText size={16} />, label: 'Transcript & Summary' },
                    { icon: <Share2 size={16} />, label: 'Social Captions' },
                    { icon: <Scissors size={16} />, label: 'Short-Form Clips' },
                    { icon: <Music size={16} />, label: 'Podcast Episode' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 p-4 rounded-xl border"
                      style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(26,127,232,0.2)' }}
                    >
                      <span className="text-[#1a7fe8]">{item.icon}</span>
                      <span className="text-white/70 text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-label mb-3">Get In Touch</p>
          <h2 className="section-title mb-5">Ready to Work Together?</h2>
          <p className="text-gray-500 mb-8 text-lg">
            Whether it&apos;s a Sunday service, a live event, or church media automation —
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
