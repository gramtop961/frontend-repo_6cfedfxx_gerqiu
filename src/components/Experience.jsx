import React from 'react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ role, company, period, location, bullets }) => (
  <motion.div
    className="relative pl-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-400 shadow" />
    <h3 className="text-xl font-semibold text-white">{role}</h3>
    <p className="text-white/70">{company} • {location}</p>
    <p className="text-sm text-white/50">{period}</p>
    <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  </motion.div>
);

const Experience = () => {
  const items = [
    {
      role: 'Frontend Developer',
      company: 'Ango Digital Technologies',
      period: 'January 2025 – Present',
      location: 'Bengaluru',
      bullets: [
        'Led a 4-member cross-functional team to build a B2B marketplace with role-based dashboards and real-time WebSocket updates, reducing order fulfillment time by 25%.',
        'Engineered hotel management web and mobile apps with bookings, payments (Razorpay), and analytics dashboards.',
        'Built SEO-optimized marketing websites in Next.js using structured data and performance best practices.',
        'Developed multi-agent AI chatbot workflows using OpenAI, LangChain, CrewAI, and RAG with vector databases.'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'Code Nimbus Solutions',
      period: 'January 2024 – December 2024',
      location: 'Bengaluru',
      bullets: [
        'Delivered an enterprise e‑invitation platform from concept to launch, increasing active users by 60%.',
        'Improved page load by 3–5s and boosted Lighthouse scores from 70 to 90+ via code splitting and lazy loading.',
        'Implemented AWS S3 for image workflows, reducing hosting costs by 30%.'
      ]
    },
    {
      role: 'Design Engineer',
      company: 'Foreintel Solutions',
      period: 'March 2023 – December 2023',
      location: 'Bengaluru',
      bullets: [
        'Designed VTOL drone systems achieving 1-hour sustained flight through aerodynamic optimization.',
        'Built telemetry dashboards and GPS tracking with real-time data visualization.',
        'Developed real-time control UIs integrating hardware with multi-sensor interfaces.'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'Big Buddy',
      period: 'August 2022 – January 2023',
      location: 'Bengaluru',
      bullets: [
        'Built AI-based video editing and conferencing with WebRTC, interactive whiteboards, and live chat.',
        'Integrated multiple third-party services to deliver a complete collaboration platform.'
      ]
    }
  ];

  return (
    <section id="experience" className="relative w-full bg-gradient-to-b from-slate-900 to-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_80%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(217,70,239,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <motion.p
          className="mt-3 max-w-2xl text-white/70"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          2+ years building responsive, high-performance web apps with a focus on UX and scalability.
        </motion.p>

        <div className="mt-10 space-y-10 border-l border-white/10">
          {items.map((item, idx) => (
            <ExperienceItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
