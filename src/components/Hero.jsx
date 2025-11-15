import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90 dark:from-neutral-950/70 dark:via-neutral-950/20 dark:to-neutral-950/95 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur-md shadow-sm"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 animate-pulse" />
            Open to opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-br from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-200 bg-clip-text text-transparent"
          >
            Crafting polished web experiences with motion and 3D flair
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl"
          >
            I’m a frontend developer focused on building immersive, accessible, and fast interfaces. Explore selected projects and get in touch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a href="#projects" className="inline-flex items-center rounded-xl bg-neutral-900 text-white px-6 py-3 text-sm font-semibold shadow hover:bg-neutral-800 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center rounded-xl bg-white/70 backdrop-blur-md border border-white/60 text-neutral-900 px-6 py-3 text-sm font-semibold shadow hover:bg-white/90 transition-colors">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
