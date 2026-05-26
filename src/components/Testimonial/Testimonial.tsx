"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, NovaBrand Co.",
    text: "Artigan completely transformed our brand identity. Their strategic approach and creative execution exceeded every expectation. We saw a 40% increase in brand recognition within three months.",
  },
  {
    name: "James Okafor",
    role: "Founder, GreenLeaf Organics",
    text: "Working with Artigan was seamless from day one. They understood our vision instantly and delivered a brand that truly speaks to our audience. Highly recommend their branding and growth marketing services.",
  },
  {
    name: "Priya Nair",
    role: "Marketing Director, Lumex Tech",
    text: "The team at Artigan is exceptional. Their attention to detail and commitment to quality is unmatched. Our new identity has received incredible feedback from clients and partners alike.",
  },
  {
    name: "Carlos Rivera",
    role: "Co-Founder, Urbane Collective",
    text: "From logo design to full package design, Artigan delivered everything on time and beyond brief. They are a true creative partner, not just a vendor.",
  },
];

function TestimonialCard({ name, role, text }: { name: string; role: string; text: string }) {
  return (
    <div className="flex-1 bg-black rounded-2xl p-5 sm:p-7 flex flex-col justify-between">
      <p className="text-white text-[13px] sm:text-sm leading-relaxed mb-5">
        &ldquo;{text}&rdquo;
      </p>
      <div>
        <p className="text-white font-semibold text-sm">{name}</p>
        <p className="text-gray-400 text-xs">{role}</p>
      </div>
    </div>
  );
}

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <>
      {/* ── Testimonial Section ─────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-8 sm:py-12 md:py-14 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">

          {/* Layout: stacked on mobile/tablet, side-by-side on lg+ */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-5 lg:gap-14">

            {/* ── Left: heading ─────────────────────────────────────────────── */}
            <div className="w-full lg:w-[36%] lg:shrink-0">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-light tracking-tight text-black leading-snug mb-1.5">
                What Our Clients are Saying
              </h2>
              <p className="text-xs text-gray-400">
                No ChatGPT was used in the crafting of these honest testimonials.
              </p>
            </div>

            {/* ── Right: cards ──────────────────────────────────────────────── */}
            <div className="w-full lg:flex-1 flex flex-col gap-4">

              {/* Cards row — always contained, arrows sit BELOW on mobile */}
              <div className="flex gap-3 sm:gap-5 items-stretch">
                {/* Card 1 — always visible */}
                <TestimonialCard
                  name={testimonials[current].name}
                  role={testimonials[current].role}
                  text={testimonials[current].text}
                />

                {/* Card 2 — hidden below md, shown md+ */}
                <div className="hidden md:flex flex-1">
                  <TestimonialCard
                    name={testimonials[(current + 1) % testimonials.length].name}
                    role={testimonials[(current + 1) % testimonials.length].role}
                    text={testimonials[(current + 1) % testimonials.length].text}
                  />
                </div>
              </div>

              {/* Controls row: prev · dots · next — always below cards, never overlapping */}
              <div className="flex items-center justify-center gap-4 pt-1">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-orange-400 hover:bg-orange-500 active:bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl transition-colors shadow-sm shrink-0"
                >
                  ‹
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === current ? "bg-orange-400" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-orange-400 hover:bg-orange-500 active:bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl transition-colors shadow-sm shrink-0"
                >
                  ›
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────────────────────────────────── */}
      <section className="bg-orange-400 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white leading-tight text-center sm:text-left">
            We would love<br />to hear about start<br />your new journey
          </h2>
          <button className="bg-white text-black text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap shrink-0">
            Start Project
          </button>
        </div>
      </section>
    </>
  );
}
