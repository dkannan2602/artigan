const features = [
  { title: "Designed to Evolve", desc: "Rapid Progress, Real Impact." },
  { title: "Seamless Partnership", desc: "We align deeply with your vision." },
  { title: "Built to Convert", desc: "Craft that drives business growth." },
];

export default function About() {
  return (
    <section className="px-4 sm:px-6 py-10 sm:py-14 md:py-16">
      <div className="max-w-6xl mx-auto">

        {/* Title row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black">
            Idea to Identity
          </h2>
          <button className="self-start sm:self-auto bg-orange-400 hover:bg-orange-500 active:bg-orange-600 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-colors shrink-0">
            Learn More ›
          </button>
        </div>

        {/* Feature columns — stacks to 1 col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 mb-8">
          {features.map((f) => (
            <div key={f.title} className="border-t border-gray-300 py-4 sm:pr-6">
              <p className="text-sm font-semibold text-black mb-1">{f.title}</p>
              <p className="text-xs text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Subtext */}
        <p className="text-sm text-gray-400 mb-6 max-w-2xl">
          We&apos;re a creative and strategic team that builds brands with strong stories and standout digital presence.
        </p>

        {/* Media */}
        <div className="w-full h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden">
          <img
            src="/assets/images/img01.webp"
            alt="Artigan — Idea to Identity"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
