import { useEffect, useState } from 'react';
import api from '../api/client';
import SectionTitle from '../components/SectionTitle';

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('All');
  useEffect(() => { api.get('/projects').then((r) => setProjects(r.data.data)); }, []);
  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="section py-16">
      <SectionTitle eyebrow="Portfolio" title="Case Studies" />
      <div className="flex gap-3 flex-wrap mb-6">{categories.map((c) => <button key={c} className="px-4 py-2 border border-slate-700 rounded-full" onClick={() => setFilter(c)}>{c}</button>)}</div>
      <div className="grid md:grid-cols-2 gap-6">{visible.map((p) => <div key={p.id} className="gradient-card p-6"><h3 className="font-semibold text-xl">{p.title}</h3><p className="text-slate-300">{p.summary}</p><p className="text-xs mt-3 text-brand-500">{p.techStack.join(' • ')}</p></div>)}</div>
    </section>
  );
}
