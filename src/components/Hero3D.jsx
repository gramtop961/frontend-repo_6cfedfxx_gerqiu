import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from 'lucide-react';

const Hero3D = () => {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 600], [0, -80]);
  const subtitleY = useTransform(scrollY, [0, 600], [0, -60]);
  const ctaY = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"
        style={{ y: useTransform(scrollY, [0, 600], [0, 120]) }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl"
        style={{ y: useTransform(scrollY, [0, 600], [0, -120]) }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.h1
          className="font-bold tracking-tight text-white drop-shadow-lg"
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="block text-3xl sm:text-4xl">Hi, I'm</span>
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-5xl sm:text-6xl md:text-7xl text-transparent">
            Harsha Srinivas
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-base sm:text-lg text-white/80"
          style={{ y: subtitleY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
        >
          Frontend Developer — crafting fast, delightful interfaces with React, TypeScript, and modern tooling.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
          style={{ y: ctaY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        >
          <a
            href="mailto:harshasrinivas1010@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/20"
          >
            <Mail size={16} /> harshasrinivas1010@gmail.com
          </a>
          <a
            href="tel:+919148434583"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/20"
          >
            <Phone size={16} /> +91 9148434583
          </a>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
            <MapPin size={16} /> Bengaluru
          </span>
        </motion.div>

        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
          style={{ y: ctaY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
        >
          <a
            href="#skills"
            className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-blue-500/25 transition hover:brightness-110"
          >
            Explore Skills
          </a>
          <a
            href="#experience"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            View Experience
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            <Globe size={16} /> Connect
          </a>
        </motion.div>

        <motion.div
          className="mt-6 flex items-center justify-center gap-4 text-white/80"
          style={{ y: ctaY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <a href="#" className="hover:text-white transition" aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href="#" className="hover:text-white transition" aria-label="GitHub">
            <Github size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
