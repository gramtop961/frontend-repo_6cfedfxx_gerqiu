import React from 'react';
import Hero3D from './components/Hero3D';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero with interactive 3D Spline and parallax content */}
      <Hero3D />

      {/* Summary section */}
      <section className="relative w-full bg-gradient-to-b from-black to-slate-950 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_10%,rgba(56,189,248,0.12),transparent),radial-gradient(400px_200px_at_90%_30%,rgba(217,70,239,0.12),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Professional Summary</h2>
          <p className="mt-4 max-w-3xl text-white/80">
            Frontend Developer with 2+ years building responsive web applications using React, JavaScript,
            and modern frontend technologies. Proven impact on engagement (+40%), performance (-5s load time),
            and team leadership. Expertise in performance optimization, API integration, mobile‑first design,
            and agile development.
          </p>
        </div>
      </section>

      {/* Skills grid */}
      <Skills />

      {/* Experience timeline */}
      <Experience />

      {/* Contact and footer */}
      <Contact />
    </div>
  );
}

export default App;
