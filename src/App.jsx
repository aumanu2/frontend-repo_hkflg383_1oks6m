import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, ExternalLink, Code2, Sparkles, Cpu, Cloud, Rocket } from 'lucide-react'
import Spline from '@splinetool/react-spline'

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
    <div className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-black/30 shadow-lg shadow-blue-500/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-white font-semibold tracking-wide text-lg">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">DevPortfolio</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="group relative px-3 py-2 text-sm font-medium text-white/90 hover:text-white">
                {n.label}
                <span className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
            <a href="#contact" className="ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:shadow-indigo-600/30 transition">
              <Sparkles size={16} /> Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#05060a]">
      {/* Subtle animated gradient backdrop */}
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[700px] w-[900px] rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-indigo-600/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 bg-indigo-500/20 blur-3xl rounded-full" />
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
              <Sparkles size={14} className="text-cyan-300" />
              Full‑Stack Web Developer
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">I build interactive, modern</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">web experiences</span>
            </h1>
            <p className="mt-5 max-w-xl text-white/70">
              Crafting premium interfaces, scalable APIs, and cloud-native systems with a focus on performance and delightful UX.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:translate-y-[-1px] transition">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/15 transition border border-white/10">
                Contact Me
              </a>
              <div className="ml-2 flex items-center gap-2">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 hover:text-white border border-white/10">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 hover:text-white border border-white/10">
                  <Linkedin size={18} />
                </a>
                <a href="#contact" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 hover:text-white border border-white/10">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
          {/* a glass card floating over the 3D scene */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="absolute right-0 top-10 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-black/80">
                <Code2 size={22} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-white/60">Current Focus</p>
                <p className="font-semibold">Next.js • React • Node • FastAPI • MongoDB</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-xs text-white/80">
              {[
                { label: 'Frontend', Icon: Sparkles },
                { label: 'Backend', Icon: Cpu },
                { label: 'Cloud', Icon: Cloud },
              ].map(({ label, Icon }) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                  <Icon size={18} className="mx-auto mb-1 text-cyan-300" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const projects = useMemo(() => (
    [
      { title: 'Realtime Chat Platform', tag: 'Full‑stack', color: 'from-cyan-400/20 to-blue-500/10' },
      { title: 'E‑commerce Dashboard', tag: 'Frontend', color: 'from-indigo-400/20 to-fuchsia-500/10' },
      { title: 'AI Content Tools', tag: 'Backend', color: 'from-emerald-400/20 to-teal-500/10' },
      { title: 'Portfolio Engine', tag: 'Design', color: 'from-amber-400/20 to-orange-500/10' },
      { title: 'Analytics Studio', tag: 'Data', color: 'from-purple-400/20 to-violet-500/10' },
      { title: 'SaaS Starter', tag: 'Full‑stack', color: 'from-pink-400/20 to-rose-500/10' },
    ]
  ), [])

  return (
    <section id="projects" className="relative py-24 bg-[#07080f]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.08),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-white">
          Featured Projects
        </motion.h2>
        <p className="mt-2 text-white/60 max-w-2xl">A selection of work that blends thoughtful UX with robust engineering.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${p.color} p-5 backdrop-blur-xl`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/5" />
              <div className="relative">
                <div className="inline-flex items-center rounded-full bg-white/10 px-2 py-1 text-xs text-white/70 border border-white/10">{p.tag}</div>
                <h3 className="mt-4 text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/60">Click to explore the live demo and code.</p>
                <div className="mt-4 inline-flex items-center gap-2 text-cyan-300">
                  View Project <ExternalLink size={16} />
                </div>
              </div>
              <motion.div
                className="pointer-events-none absolute -right-6 -bottom-6 h-28 w-28 rounded-full bg-gradient-to-br from-white/10 to-white/0"
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
    <section id="about" className="relative py-24 bg-[#05060a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              I’m a full‑stack developer who loves turning ideas into polished digital products. I focus on clean architectures, seamless animations, and accessible design.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[{ label: 'Years Experience', value: '5+' }, { label: 'Projects Delivered', value: '40+' }, { label: 'Satisfaction', value: '100%' }, { label: 'Coffee / day', value: '2' }].map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 p-6 overflow-hidden">
              <div className="pointer-events-none absolute -top-6 -right-6 h-32 w-32 rounded-full bg-cyan-400/20 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-indigo-500/20 blur-2xl" />
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Frontend', desc: 'React, Next.js, Tailwind' },
                  { title: 'Backend', desc: 'Node, FastAPI' },
                  { title: 'Database', desc: 'MongoDB, Postgres' },
                  { title: 'Cloud', desc: 'Vercel, AWS' },
                ].map((c) => (
                  <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
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
    { name: 'MongoDB / SQL', level: 85 },
    { name: 'Tailwind / Framer', level: 92 },
  ]
  return (
    <section id="skills" className="relative py-24 bg-[#07080f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {skills.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>{s.name}</span>
                <span>{s.level}%</span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <motion.div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }} />
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
    <section id="contact" className="relative py-24 bg-[#05060a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something great</h2>
            <p className="mt-3 text-white/70 max-w-xl">Tell me about your project and timeline. I’ll get back within 24 hours.</p>
            <div className="mt-6 flex items-center gap-3 text-white/80">
              <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 border border-white/10 hover:bg-white/15">
                <Mail size={16} /> you@example.com
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 border border-white/10 hover:bg-white/15">
                <Github size={16} /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 border border-white/10 hover:bg-white/15">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/60">Name</label>
                <input className="mt-1 w-full rounded-xl bg-white/10 px-3 py-2 text-white placeholder:text-white/40 outline-none border border-white/10 focus:border-cyan-400/50" placeholder="John Doe" />
              </div>
              <div>
                <label className="text-xs text-white/60">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl bg-white/10 px-3 py-2 text-white placeholder:text-white/40 outline-none border border-white/10 focus:border-cyan-400/50" placeholder="john@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs text-white/60">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-xl bg-white/10 px-3 py-2 text-white placeholder:text-white/40 outline-none border border-white/10 focus:border-cyan-400/50" placeholder="Tell me about your project..." />
              </div>
            </div>
            <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-3 font-semibold text-black/90 shadow-lg hover:translate-y-[-1px] transition">
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
    <footer className="relative bg-[#04050a] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-sm">© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a className="text-white/60 hover:text-white" href="#home">Top</a>
          <span className="text-white/20">•</span>
          <a className="text-white/60 hover:text-white" href="#projects">Projects</a>
          <span className="text-white/20">•</span>
          <a className="text-white/60 hover:text-white" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white selection:bg-cyan-400/30 selection:text-white">
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
