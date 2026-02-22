import { useEffect, useState } from 'react';
import api from '../api/client';
import SectionTitle from '../components/SectionTitle';

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  useEffect(() => { api.get('/jobs?open=true').then((r) => setJobs(r.data.data)); }, []);

  return (
    <section className="section py-16 grid md:grid-cols-2 gap-8">
      <div>
        <SectionTitle eyebrow="Careers" title="Join our team" />
        <div className="space-y-4">{jobs.map((j) => <div key={j.id} className="gradient-card p-5"><h3>{j.title}</h3><p className="text-slate-300">{j.location} • {j.type}</p></div>)}</div>
      </div>
      <form className="gradient-card p-6 space-y-4">
        <h3 className="text-xl font-semibold">Apply Now</h3>
        <input className="w-full bg-slate-900 p-3 rounded" placeholder="Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} />
        <input className="w-full bg-slate-900 p-3 rounded" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} />
        <textarea className="w-full bg-slate-900 p-3 rounded" rows="4" placeholder="Tell us about your experience" value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})}/>
        <button type="button" className="bg-brand-500 px-5 py-2 rounded">Submit Application</button>
      </form>
    </section>
  );
}
