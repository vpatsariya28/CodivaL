import { Link } from 'react-router-dom';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/portfolio', 'Portfolio'],
  ['/blog', 'Blog'],
  ['/careers', 'Careers'],
  ['/contact', 'Contact'],
  ['/admin', 'Admin']
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <nav className="section flex justify-between items-center py-4">
        <Link to="/" className="text-2xl font-bold text-brand-500">CodivaLab</Link>
        <div className="hidden md:flex gap-5 text-sm text-slate-300">
          {links.map(([href, label]) => <Link key={href} to={href} className="hover:text-white">{label}</Link>)}
        </div>
      </nav>
    </header>
  );
}
