import SectionTitle from '../components/SectionTitle';

export default function About() {
  return (
    <section className="section py-16 space-y-12">
      <SectionTitle eyebrow="About Us" title="Vision, Mission, Team" desc="We combine engineering discipline and design thinking to deliver measurable business outcomes." />
      <div className="grid md:grid-cols-3 gap-6">
        {['Vision: Build future-ready software.', 'Mission: Accelerate digital transformation.', 'Team: Senior architects and product engineers.'].map((text) => (
          <div key={text} className="gradient-card p-6 text-slate-200">{text}</div>
        ))}
      </div>
    </section>
  );
}
