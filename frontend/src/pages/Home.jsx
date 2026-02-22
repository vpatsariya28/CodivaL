import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const techs = ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Kubernetes'];

export default function Home() {
  return (
    <>
      <section className="section py-20 md:py-28">
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-bold leading-tight">
          Building Digital Products with <span className="text-brand-500">Precision</span>.
        </motion.h1>
        <p className="text-slate-300 mt-6 max-w-2xl">CodivaLab helps enterprises design, build, and scale software platforms through product engineering, cloud modernization, and AI acceleration.</p>
        <Link to="/contact" className="inline-block mt-8 bg-brand-500 hover:bg-brand-700 px-6 py-3 rounded-full font-semibold">Start Your Project</Link>
      </section>
      <section className="section py-16">
        <SectionTitle eyebrow="Capabilities" title="Services Overview" />
        <div className="grid md:grid-cols-3 gap-6">
          {['Web Platforms', 'Mobile Experiences', 'Cloud & DevOps'].map((s) => <div key={s} className="gradient-card p-6">{s}</div>)}
        </div>
      </section>
      <section className="section py-16">
        <SectionTitle eyebrow="Tech Stack" title="Modern technologies we use" />
        <div className="flex flex-wrap gap-3">{techs.map((t) => <span key={t} className="px-4 py-2 rounded-full border border-slate-700">{t}</span>)}</div>
      </section>
    </>
  );
}
