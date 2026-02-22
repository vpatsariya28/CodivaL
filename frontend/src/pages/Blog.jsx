import { useEffect, useState } from 'react';
import api from '../api/client';
import SectionTitle from '../components/SectionTitle';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => { api.get('/blogs?published=true').then((r) => setPosts(r.data.data)); }, []);

  return (
    <section className="section py-16">
      <SectionTitle eyebrow="Insights" title="Blog & Thought Leadership" />
      <div className="space-y-4">{posts.map((p) => <div key={p.id} className="gradient-card p-6"><h3 className="text-xl font-semibold">{p.title}</h3><p className="text-slate-300 mt-2">{p.excerpt}</p><p className="text-xs text-slate-400 mt-3">By {p.author}</p></div>)}</div>
    </section>
  );
}
