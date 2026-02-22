import { useEffect, useState } from 'react';
import api from '../api/client';
import SectionTitle from '../components/SectionTitle';

export default function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => { api.get('/services').then((r) => setServices(r.data.data)); }, []);

  return (
    <section className="section py-16">
      <SectionTitle eyebrow="Services" title="What we deliver" />
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <article key={s.id} className="gradient-card p-6">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-slate-300 mt-2">{s.summary}</p>
            <p className="text-slate-400 mt-3">{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
