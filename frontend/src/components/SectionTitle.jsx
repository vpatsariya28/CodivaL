export default function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mb-10">
      <p className="text-brand-500 uppercase tracking-widest text-xs">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">{title}</h2>
      {desc && <p className="text-slate-300 mt-3 max-w-2xl">{desc}</p>}
    </div>
  );
}
