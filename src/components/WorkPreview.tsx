"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeImage } from "@/components/ui/fade-image";

const items = [
  {
    src: "/images/portfolio/shopfront-ba.jpg",
    alt: "Weathered bakery shop front resprayed in deep charcoal",
    label: "Shop Fronts",
  },
  {
    src: "/images/portfolio/kitchen-ba.jpg",
    alt: "Oak kitchen cabinets resprayed in dove grey",
    label: "Kitchens",
  },
  {
    src: "/images/portfolio/furniture-ba.jpg",
    alt: "Bedroom chest of drawers resprayed matte black",
    label: "Furniture",
  },
  {
    src: "/images/portfolio/upvc-ba.jpg",
    alt: "uPVC window frames resprayed anthracite grey",
    label: "uPVC & Aluminium",
  },
];

export default function WorkPreview() {
  return (
    <section className="relative border-t border-ivory/10 bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-xl">
            <h2 className="text-balance font-display text-5xl font-bold leading-[1.02] tracking-tight text-ivory sm:text-6xl">
              Recent transformations
            </h2>
            <p className="mt-5 text-ivory/50">
              A look at real before &amp; after results across Dublin &amp;
              Nationwide.
            </p>
          </div>
          <Link
            href="/our-work"
            className="group inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.12em] text-ivory/60 transition-colors hover:text-gold"
          >
            View all our work
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
            >
              <Link
                href="/our-work"
                className="group relative block aspect-[5/4] w-full overflow-hidden border border-ivory/10"
              >
                <FadeImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <span className="absolute bottom-4 left-4 text-sm uppercase tracking-[0.1em] text-ivory">
                  {item.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
