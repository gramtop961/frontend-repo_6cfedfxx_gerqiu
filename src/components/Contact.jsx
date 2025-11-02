import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download, Linkedin, Github, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-slate-950 to-black py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(34,197,94,0.08),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(14,165,233,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let’s build something great
        </motion.h2>
        <motion.p
          className="mt-3 max-w-2xl text-white/70"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Open to frontend roles, product engineering, and building ambitious interfaces.
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <motion.a
            href="mailto:harshasrinivas1010@gmail.com"
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur transition hover:bg-white/10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Mail className="mb-3 text-cyan-400" />
            <div className="text-sm text-white/60">Email</div>
            <div className="font-medium">harshasrinivas1010@gmail.com</div>
          </motion.a>

          <motion.a
            href="tel:+919148434583"
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur transition hover:bg-white/10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.5 }}
          >
            <Phone className="mb-3 text-emerald-400" />
            <div className="text-sm text-white/60">Phone</div>
            <div className="font-medium">+91 9148434583</div>
          </motion.a>

          <motion.div
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <MapPin className="mb-3 text-fuchsia-400" />
            <div className="text-sm text-white/60">Location</div>
            <div className="font-medium">Bengaluru, India</div>
          </motion.div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-white/80">
          <a href="#" className="inline-flex items-center gap-2 hover:text-white transition">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href="#" className="inline-flex items-center gap-2 hover:text-white transition">
            <Github size={18} /> GitHub
          </a>
          <a href="#home" className="inline-flex items-center gap-2 hover:text-white transition">
            <Globe size={18} /> Portfolio
          </a>
          <a
            href="#"
            className="ml-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-blue-500/25 transition hover:brightness-110"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>

        <p className="mt-10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Harsha Srinivas. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
