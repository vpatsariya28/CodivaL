export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-20">
      <div className="section py-8 text-slate-400 text-sm flex flex-col md:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} CodivaLab. All rights reserved.</p>
        <p>Enterprise-grade software delivery partner.</p>
      </div>
    </footer>
  );
}
