const services = [
  { title: "Designed to Evolve", desc: "Rapid Progress, Real Impact." },
  { title: "Seamless Partnership", desc: "We align deeply with your vision." },
  { title: "Built to Convert", desc: "Craft that drives business growth." },
  { title: "Brand Strategy", desc: "Direction that defines your market." },
  { title: "Visual Identity", desc: "Looks that leave a lasting impression." },
  { title: "Digital Presence", desc: "Online impact, built to scale." },
];

export default function Service() {
  return (
    <section className="px-4 sm:px-6 py-10 sm:py-14 md:py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black mb-8">
          we also do
        </h2>

        {/* Service grid — 1 col mobile, 3 col sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 mb-10">
          {services.map((s, i) => (
            <div key={i} className="border-t border-gray-300 py-4 sm:pr-6">
              <p className="text-sm font-semibold text-black mb-1">{s.title}</p>
              <p className="text-xs text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Media */}
        <div className="w-full h-40 sm:h-52 md:h-64 rounded-2xl overflow-hidden">
          <img
            src="/assets/images/img03.webp"
            alt="Artigan — We Also Do"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
