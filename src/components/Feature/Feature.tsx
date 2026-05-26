"use client";
import { useState } from "react";

export interface Project {
  title: string;
  desc: string;
  image?: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  learnMoreHref?: string;
  projects: Project[];
}

const PER_PAGE = 4;

export default function Feature({ title, description, learnMoreHref = "#", projects }: FeatureProps) {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(projects.length / PER_PAGE);
  const visible = projects.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="px-4 sm:px-6 py-10 sm:py-14 md:py-16">
      <div className="max-w-6xl mx-auto">

        {/* Title row */}
        <div className="flex items-center justify-between gap-3 mb-4">
          {/* Title: smaller on mobile, scales up */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-black leading-none">
            {title}
          </h2>

          {/* Mobile: compact circle arrow button | sm+: full pill */}
          <a
            href={learnMoreHref}
            aria-label={`Learn more about ${title}`}
            className="
              shrink-0
              sm:hidden
              w-9 h-9 bg-orange-400 hover:bg-orange-500 active:bg-orange-600
              rounded-full flex items-center justify-center
              text-white font-bold text-base transition-colors
            "
          >
            ›
          </a>
          <a
            href={learnMoreHref}
            className="
              hidden sm:flex
              shrink-0 items-center
              bg-orange-400 hover:bg-orange-500 active:bg-orange-600
              text-white text-xs font-bold uppercase tracking-widest
              px-6 py-3 rounded-full transition-colors
            "
          >
            Learn More ›
          </a>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mb-6 sm:mb-10 leading-relaxed">
          {description}
        </p>

        {/* Project cards — 2 cols always, with pagination below */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4">
          {visible.map((p, i) => (
            <div key={i}>
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full aspect-square object-cover rounded-2xl mb-2"
                />
              ) : (
                <div className="w-full aspect-square bg-black rounded-2xl mb-2" />
              )}
              <p className="text-xs sm:text-sm font-bold text-black leading-snug">{p.title}</p>
              <p className="text-[11px] sm:text-xs text-gray-500 leading-snug">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Pagination row — arrows + dots, all inline below the grid */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-2">
            {/* Prev */}
            <button
              aria-label="Previous projects"
              onClick={() => setPage((p) => p - 1)}
              disabled={page === 0}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors shadow-sm
                disabled:opacity-30 disabled:cursor-not-allowed
                bg-orange-400 hover:bg-orange-500 active:bg-orange-600 text-white"
            >
              ‹
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Page ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === page ? "bg-orange-400" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              aria-label="Next projects"
              onClick={() => setPage((p) => p + 1)}
              disabled={page === totalPages - 1}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors shadow-sm
                disabled:opacity-30 disabled:cursor-not-allowed
                bg-orange-400 hover:bg-orange-500 active:bg-orange-600 text-white"
            >
              ›
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
