import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../api/client';

const sections = [
  ['services', ['title', 'summary', 'description', 'icon']],
  ['projects', ['title', 'category', 'summary', 'description', 'techStack']],
  ['blogs', ['title', 'excerpt', 'content', 'author']],
  ['jobs', ['title', 'location', 'type', 'description']]
];

export default function Admin() {
  const { user, login, logout } = useAuth();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [active, setActive] = useState('services');
  const [payload, setPayload] = useState({});
  const [status, setStatus] = useState('');

  if (!user) {
    return (
      <section className="section py-16 max-w-md">
        <h2 className="text-3xl font-bold mb-4">Admin Login</h2>
        <div className="space-y-3">
          <input className="w-full bg-slate-900 p-3 rounded" placeholder="Email" onChange={(e)=>setCredentials({...credentials,email:e.target.value})} />
          <input type="password" className="w-full bg-slate-900 p-3 rounded" placeholder="Password" onChange={(e)=>setCredentials({...credentials,password:e.target.value})} />
          <button className="bg-brand-500 px-5 py-2 rounded" onClick={() => login(credentials.email, credentials.password).catch(()=>setStatus('Login failed'))}>Login</button>
          <p className="text-slate-400 text-sm">{status}</p>
        </div>
      </section>
    );
  }

  const fields = sections.find(([k]) => k === active)[1];

  const createItem = async () => {
    try {
      await api.post(`/${active}`, payload);
      setStatus(`${active} item created`);
      setPayload({});
    } catch {
      setStatus('Failed to create item');
    }
  };

  return (
    <section className="section py-16 space-y-6">
      <div className="flex justify-between items-center"><h2 className="text-3xl font-bold">Admin Dashboard</h2><button onClick={logout}>Logout</button></div>
      <div className="flex gap-3">{sections.map(([k]) => <button key={k} onClick={() => setActive(k)} className="px-4 py-2 border border-slate-700 rounded">{k}</button>)}</div>
      <div className="gradient-card p-6 space-y-3">
        {fields.map((f) => <input key={f} className="w-full bg-slate-900 p-3 rounded" placeholder={f} value={payload[f] || ''} onChange={(e)=>setPayload({...payload,[f]:e.target.value})} />)}
        <button onClick={createItem} className="bg-brand-500 px-5 py-2 rounded">Create</button>
      </div>
      <p className="text-slate-300">{status}</p>
    </section>
  );
}
