import Link from 'next/link'
import { ArrowRight, Mic, Video, Lightbulb, Radio, Settings, Calendar } from 'lucide-react'

const services = [
  {
    icon: <Mic size={28} />,
    title: 'Live Sound Production',
    description: 'Front-of-house and monitor mixing for church services, conferences, concerts, and live events of any size.',
  },
  {
    icon: <Video size={28} />,
    title: 'Video Production & Broadcast',
    description: 'Multi-camera live production, streaming setup, IMAG, and broadcast-quality video for churches and live events.',
  },
  {
    icon: <Lightbulb size={28} />,
    title: 'Lighting Design & Operation',
    description: 'Stage lighting design, programming, and operation for worship environments, theatrical productions, and live events.',
  },
  {
    icon: <Radio size={28} />,
    title: 'Streaming & Online Services',
    description: 'End-to-end live streaming setup and operation for YouTube, Facebook, Vimeo, Resi, and custom RTMP destinations.',
  },
  {
    icon: <Settings size={28} />,
    title: 'System Installation',
    description: 'AVL system design and installation for churches and venues — from consoles and speakers to cameras and lighting rigs.',
  },
  {
    icon: <Calendar size={28} />,
    title: 'Event Technical Direction',
    description: 'Full technical direction for conferences, galas, and large-scale events — crew management, gear, logistics, and execution.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="hero-bg pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">What We Offer</p>
          <h1 className="font-display font-black text-white leading-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Professional AVL
            <br />
            <span style={{ color: '#1a7fe8' }}>Services</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            From weekly church services to large-scale live productions — we provide
            the technical expertise, gear, and crew to make it happen.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-[#1a7fe8]" style={{ background: 'rgba(26,127,232,0.08)' }}>
                  {service.icon}
                </div>
                <h3 className="font-display font-bold text-xl mb-3" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a0f2e]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-white mb-5" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
            Ready to Elevate Your Production?
          </h2>
          <p className="text-white/60 mb-8">Let&apos;s talk about how Eastcoast AVL can support your next event or service.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">Get In Touch <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
