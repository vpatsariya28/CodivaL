import { useState } from 'react';
import api from '../api/client';
import SectionTitle from '../components/SectionTitle';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/contacts', form);
      setStatus('Message sent successfully');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('Unable to send message');
    }
  };

  return (
    <section className="section py-16 grid md:grid-cols-2 gap-8">
      <form onSubmit={handleSubmit} className="gradient-card p-6 space-y-4">
        <SectionTitle eyebrow="Contact" title="Let’s discuss your roadmap" />
        {['name', 'email', 'subject'].map((f) => <input key={f} className="w-full bg-slate-900 p-3 rounded" placeholder={f} value={form[f]} onChange={(e)=>setForm({...form,[f]:e.target.value})} />)}
        <textarea rows="5" className="w-full bg-slate-900 p-3 rounded" placeholder="message" value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})}/>
        <button className="bg-brand-500 px-5 py-2 rounded">Send Message</button>
        <p className="text-sm text-slate-300">{status}</p>
      </form>
      <iframe className="w-full h-full min-h-[460px] rounded-2xl" title="map" src="https://maps.google.com/maps?q=San%20Francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" />
    </section>
  );
}
