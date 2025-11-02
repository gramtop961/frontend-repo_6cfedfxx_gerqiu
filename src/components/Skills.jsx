import React from 'react';
import { motion } from 'framer-motion';

const Badge = ({ label }) => (
  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/90 backdrop-blur shadow-sm">
    {label}
  </span>
);

const Skills = () => {
  const skills = {
    Frontend: [
      'React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)',
      'HTML5', 'CSS3', 'Tailwind CSS', 'Shadcn UI', 'Redux', 'Material-UI', 'React Native'
    ],
    'Backend & Cloud': [
      'Node.js', 'REST APIs', 'GraphQL', 'WebSockets', 'AWS (S3, EC2)', 'Docker', 'Firebase', 'Python'
    ],
    Tools: [
      'Git', 'GitHub Actions', 'Webpack', 'Vite', 'Jest', 'React Testing Library', 'Figma', 'Postman'
    ],
    Other: [
      'Team Leadership', 'Agile Collaboration', 'Architecture Design', 'Code Review', 'Technical Documentation'
    ]
  };

  return (
    <section id="skills" className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(217,70,239,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Tools
        </motion.h2>
        <motion.p
          className="mt-3 max-w-2xl text-white/70"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Modern, scalable, and performance-focused stack to build engaging user experiences.
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([group, items], idx) => (
            <motion.div
              key={group}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-white">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} label={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
