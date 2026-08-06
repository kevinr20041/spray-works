"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const points = [
  "Factory-quality, sprayed-on finish",
  "Free, no-obligation quotations",
  "Bespoke colour matching for every project",
  "Kitchens, furniture, uPVC, aluminium & commercial spaces",
];

export default function About() {
  return (
    <section id="about" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="relative order-2 lg:order-1 lg:col-span-5"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/portfolio/kitchen-island-after.jpg"
              alt="Professionally resprayed black kitchen island"
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7 lg:pt-6"
        >
          <h2 className="text-balance font-display text-5xl leading-[1.02] tracking-tight text-ink sm:text-6xl">
            Transform,
            <br />
            don&apos;t replace.
          </h2>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink/65">
            Spray Works specialises in premium spray finishing for kitchens,
            furniture, uPVC &amp; aluminium doors and windows, and commercial
            shop fronts across Dublin &amp; Nationwide. Every project is
            professionally prepared and precision masked before spraying, for
            a smooth, factory-style finish that transforms a space without
            the cost or disruption of a full replacement.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {points.map((point) => (
              <li
                key={point}
                className="border-t border-ink/15 pt-3 text-sm text-ink/70"
              >
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
