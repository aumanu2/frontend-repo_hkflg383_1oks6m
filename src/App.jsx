import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, ExternalLink, Code2, Sparkles, Cpu, Cloud, Rocket, Terminal, Flame, Grid3X3 } from 'lucide-react'
import Spline from '@splinetool/react-spline'

// Orange/Black "Cyber Dev" Theme
const ORANGE = '#f97316' // tailwind orange-500
const ORANGE_GLOW = 'rgba(249, 115, 22, 0.35)'
const BG = '#0b0b0c'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left"
    >
      <div className="h-full w-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 shadow-[0_0_20px_rgba(249,115,22,0.6)]" />
    </motion.div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-black/40 shadow-[0_10px_40px_rgba(249,115,22,0.12)] border-b border-orange-500/20' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-white font-semibold tracking-wide text-lg inline-flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-orange-500/10 ring-1 ring-orange-500/30">
              <Flame size={14} className="text-orange-400" />
            </span>
            <span className="bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-300 bg-clip-text text-transparent">DevForge</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="group relative px-3 py-2 text-sm font-medium text-white/90 hover:text-white">
                {n.label}
                <span className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
            <a href="#contact" className="ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(249,115,22,0.35)] hover:shadow-[0_10px_40px_rgba(249,115,22,0.55)] transition">
              <Sparkles size={16} className="text-black" /> Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  // parallax small tilt for the glass card
  const { scrollY } = useScroll()
  const tilt = useTransform(scrollY, [0, 600], [0, 8])

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden" style={{ backgroundColor: BG }}>
      {/* Dynamic grid + gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.12]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[780px] w-[980px] rounded-full bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-yellow-400/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 bg-orange-500/20 blur-3xl rounded-full" />
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* orange film to tune palette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/60" />
        <div className="absolute inset-0 mix-blend-screen bg-[radial-gradient(60%_60%_at_60%_40%,rgba(249,115,22,0.25),transparent)]" />
      </div>

      {/* Code rain (lightweight) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-[10px] sm:text-xs text-orange-400/30 select-none"
            style={{
              left: `${(i * 97) % 100}%`,
              animation: `fall ${6 + (i % 5)}s linear ${i * 0.25}s infinite`,
            }}
          >
            {'{</>};'.repeat(16)}
          </span>
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs text-orange-200 backdrop-blur-md shadow-[0_0_30px_rgba(249,115,22,0.15)]">
              <Terminal size={14} className="text-orange-300" />
              Full‑Stack Engineer
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">I craft animated, high‑impact</span>
              <br />
              <span className="bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-300 bg-clip-text text-transparent">developer experiences</span>
            </h1>
            <p className="mt-5 max-w-xl text-white/70">
              Complex UI motion, scalable APIs, and performance obsession. Let’s build software that feels alive.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:translate-y-[-1px] transition">
                Explore Builds <ArrowRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-5 py-3 font-semibold text-orange-200 hover:bg-orange-500/15 transition border border-orange-500/20">
                Contact Me
              </a>
              <div className="ml-2 flex items-center gap-2">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-200 hover:text-white border border-orange-500/20">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-200 hover:text-white border border-orange-500/20">
                  <Linkedin size={18} />
                </a>
                <a href="#contact" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-200 hover:text-white border border-orange-500/20">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
          <motion.div
            style={{ rotateX: tilt, rotateY: tilt }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="absolute right-0 top-10 w-full max-w-md rounded-2xl border border-orange-500/20 bg-black/60 p-6 backdrop-blur-xl shadow-[0_20px_80px_rgba(249,115,22,0.15)]"
          >
            <div className="flex items-center gap-3 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-black/80 ring-1 ring-orange-400/40">
                <Code2 size={22} className="text-black" />
              </div>
              <div>
                <p className="text-xs text-orange-200/80">Now Hacking On</p>
                <p className="font-semibold">Next.js • React • FastAPI • MongoDB</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-xs text-orange-100/90">
              {[
                { label: 'Frontend', Icon: Sparkles },
                { label: 'Backend', Icon: Cpu },
                { label: 'Cloud', Icon: Cloud },
              ].map(({ label, Icon }) => (
                <div key={label} className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-3 text-center">
                  <Icon size={18} className="mx-auto mb-1 text-orange-300" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* local keyframes for code rain */}
      <style>{`
        @keyframes fall { from { transform: translateY(-110%); } to { transform: translateY(110%); } }
      `}</style>
    </section>
  )
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="relative">
      <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-white">
        {title}
      </motion.h2>
      {subtitle && <p className="mt-2 text-white/60 max-w-2xl">{subtitle}</p>}
      <div className="mt-4 h-px w-32 bg-gradient-to-r from-orange-500 to-transparent" />
    </div>
  )
}

function Projects() {
  const projects = useMemo(() => (
    [
      { title: 'Realtime Chat Platform', tag: 'Full‑stack', color: 'from-orange-500/15 to-amber-500/10' },
      { title: 'E‑commerce Dashboard', tag: 'Frontend', color: 'from-amber-400/15 to-yellow-500/10' },
      { title: 'AI Content Tools', tag: 'Backend', color: 'from-orange-400/15 to-amber-500/10' },
      { title: 'Portfolio Engine', tag: 'Design', color: 'from-yellow-400/15 to-orange-500/10' },
      { title: 'Analytics Studio', tag: 'Data', color: 'from-amber-400/15 to-orange-500/10' },
      { title: 'SaaS Starter', tag: 'Full‑stack', color: 'from-orange-400/15 to-amber-500/10' },
    ]
  ), [])

  return (
    <section id="projects" className="relative py-24" style={{ backgroundColor: '#0a0a0b' }}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(249,115,22,0.10),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.10),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" subtitle="Engineering‑heavy builds with deep animation and system design." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 18, rotateX: 6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ y: -6, rotateX: 2 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-orange-500/20 bg-gradient-to-br ${p.color} p-5 backdrop-blur-xl shadow-[0_20px_60px_rgba(249,115,22,0.10)]`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-orange-500/5" />
              <div className="relative">
                <div className="inline-flex items-center rounded-full bg-black/40 px-2 py-1 text-xs text-orange-200 border border-orange-500/20">{p.tag}</div>
                <h3 className="mt-4 text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/60">Click to explore the live demo and code.</p>
                <div className="mt-4 inline-flex items-center gap-2 text-orange-300">
                  View Project <ExternalLink size={16} />
                </div>
              </div>
              <motion.div
                className="pointer-events-none absolute -right-6 -bottom-6 h-28 w-28 rounded-full bg-gradient-to-br from-orange-300/20 to-transparent"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative py-24" style={{ backgroundColor: BG }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionHeading title="About Me" subtitle="I turn complex requirements into kinetic, production‑grade products." />
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[{ label: 'Years Experience', value: '5+' }, { label: 'Projects Delivered', value: '40+' }, { label: 'Uptime', value: '99.9%' }, { label: 'Animations', value: '∞' }].map((s) => (
                <div key={s.label} className="rounded-2xl border border-orange-500/20 bg-black/50 p-4 text-center shadow-[0_10px_40px_rgba(249,115,22,0.08)]">
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-orange-200/80">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="relative rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-amber-500/10 p-6 overflow-hidden shadow-[0_20px_70px_rgba(249,115,22,0.10)]">
              <div className="pointer-events-none absolute -top-6 -right-6 h-32 w-32 rounded-full bg-orange-400/25 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-amber-400/25 blur-2xl" />
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Frontend', desc: 'React, Next.js, Tailwind' },
                  { title: 'Backend', desc: 'Node, FastAPI' },
                  { title: 'Database', desc: 'MongoDB, Postgres' },
                  { title: 'Cloud', desc: 'Vercel, AWS' },
                ].map((c) => (
                  <div key={c.title} className="rounded-2xl border border-orange-500/20 bg-black/40 p-4">
                    <p className="font-semibold text-white">{c.title}</p>
                    <p className="text-sm text-white/60">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const skills = [
    { name: 'React / Next.js', level: 95 },
    { name: 'Node / FastAPI', level: 90 },
    { name: 'MongoDB / SQL', level: 88 },
    { name: 'Tailwind / Framer', level: 94 },
  ]
  return (
    <section id="skills" className="relative py-24" style={{ backgroundColor: '#0a0a0b' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Skills" subtitle="A balance of performance engineering, DX, and motion craft." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {skills.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-orange-500/20 bg-black/50 p-5 shadow-[0_10px_40px_rgba(249,115,22,0.08)]">
              <div className="flex items-center justify-between text-sm text-orange-200/90">
                <span>{s.name}</span>
                <span>{s.level}%</span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-orange-500/10 overflow-hidden">
                <motion.div className="h-full rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300 shadow-[0_0_20px_rgba(249,115,22,0.6)]" initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-24" style={{ backgroundColor: BG }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeading title="Let’s build something legendary" subtitle="Tell me about your idea, goals, and timeline. I’ll get back within 24 hours." />
            <div className="mt-6 flex flex-wrap items-center gap-3 text-orange-200/90">
              <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 border border-orange-500/20 hover:bg-orange-500/15">
                <Mail size={16} /> you@example.com
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 border border-orange-500/20 hover:bg-orange-500/15">
                <Github size={16} /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 border border-orange-500/20 hover:bg-orange-500/15">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-orange-500/20 bg-black/60 p-6 backdrop-blur-xl shadow-[0_20px_80px_rgba(249,115,22,0.12)]">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-orange-200/80">Name</label>
                <input className="mt-1 w-full rounded-xl bg-black/60 px-3 py-2 text-white placeholder:text-orange-200/40 outline-none border border-orange-500/20 focus:border-orange-400/60" placeholder="John Doe" />
              </div>
              <div>
                <label className="text-xs text-orange-200/80">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl bg-black/60 px-3 py-2 text-white placeholder:text-orange-200/40 outline-none border border-orange-500/20 focus:border-orange-400/60" placeholder="john@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs text-orange-200/80">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-xl bg-black/60 px-3 py-2 text-white placeholder:text-orange-200/40 outline-none border border-orange-500/20 focus:border-orange-400/60" placeholder="Tell me about your project..." />
              </div>
            </div>
            <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 px-5 py-3 font-semibold text-black shadow-[0_10px_30px_rgba(249,115,22,0.35)] hover:translate-y-[-1px] transition">
              Send Message <Rocket size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative py-10 border-t border-orange-500/10" style={{ backgroundColor: '#090909' }}>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(249,115,22,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} DevForge. Built with motion.</p>
        <div className="flex items-center gap-3 text-orange-200/80">
          <a className="hover:text-white" href="#home">Top</a>
          <span className="text-white/20">•</span>
          <a className="hover:text-white" href="#projects">Projects</a>
          <span className="text-white/20">•</span>
          <a className="hover:text-white" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen text-white selection:bg-orange-400/30 selection:text-white" style={{ backgroundColor: BG }}>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
