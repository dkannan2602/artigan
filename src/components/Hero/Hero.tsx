const tags = [
  "Branding", "Logo Design", "Growth Marketing", "Advertising", "Package Design",
  "Creatives Design", "Ad Shoot", "Print Products", "Identity", "Strategy",
  "Branding", "Logo Design", "Growth Marketing", "Advertising", "Package Design",
  "Creatives Design", "Ad Shoot", "Print Products", "Identity", "Strategy",
];

export default function Hero() {
  return (
    <section className="px-4 sm:px-6 py-10 sm:py-14 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Headline — sm:text-5xl keeps it readable on tablet, text-3xl on mobile is comfortable */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-black max-w-3xl mb-4">
          Driving business growth<br />with creative solutions.
        </h1>
        <p className="text-sm text-gray-400 mb-8 sm:mb-12 max-w-xl">
          From 500+ brand identities to powering the growth of 50+ brands, we shaping success stories.
        </p>

        {/* Tag rows */}
        <div className="overflow-hidden border-t border-b border-gray-200 py-4 space-y-2.5">
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex gap-2 flex-wrap">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-500 text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 rounded-full whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
