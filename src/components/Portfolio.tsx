"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { portfolio } from "@/lib/data";
import { cn } from "@/lib/utils";
import BeforeAfterSlider from "./BeforeAfterSlider";
import Lightbox from "./Lightbox";

export default function Portfolio() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(portfolio.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    active === "All" ? portfolio : portfolio.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-xl">
            <h2 className="text-balance font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl">
              Our work
            </h2>
            <p className="mt-5 text-ink/55">
              Drag the slider to compare before &amp; after, or tap a photo
              for a closer look.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 border-b border-ink/10 sm:border-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={cn(
                  "border-b-2 pb-1 text-sm uppercase tracking-[0.1em] transition-[color,border-color,transform] duration-200 active:scale-95",
                  active === cat
                    ? "border-gold text-ink"
                    : "border-transparent text-ink/40 hover:text-ink/70"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
              className="group"
            >
              {item.before && item.after ? (
                <BeforeAfterSlider
                  before={item.before}
                  after={item.after}
                  alt={item.title}
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setLightboxIndex(portfolio.indexOf(item))}
                  className="relative block aspect-[4/3] w-full overflow-hidden transition-transform duration-200 active:scale-[0.98]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
                  <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-ivory/90 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Expand size={16} />
                  </span>
                </button>
              )}

              <div className="mt-4 flex items-baseline justify-between gap-3 border-t border-ink/10 pt-3">
                <h3 className="font-display text-lg tracking-tight text-ink">
                  {item.title}
                </h3>
                <span className="shrink-0 text-xs uppercase tracking-[0.1em] text-ink/40">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        items={portfolio}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
