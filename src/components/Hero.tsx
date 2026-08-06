"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { business } from "@/lib/data";
import { WordRotate } from "@/components/ui/word-rotate";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative bg-ink">
      <div className="grid grid-cols-1 lg:min-h-[100svh] lg:grid-cols-[1.05fr_1fr]">
        <div className="relative flex flex-col justify-center px-5 pt-32 pb-16 sm:px-8 lg:px-16 lg:pt-24">
          <motion.p
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="font-display text-sm italic text-gold"
          >
            {business.area}
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="mt-5 max-w-xl text-balance font-display text-[13vw] leading-[0.95] tracking-tight text-ivory sm:text-6xl lg:text-[4.6rem]"
          >
            Precision finish,
            <br />
            lasting impression.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-8 max-w-md text-lg leading-relaxed text-ivory/60"
          >
            Professional spray finishing for{" "}
            <WordRotate
              words={["kitchens", "furniture", "uPVC & aluminium", "commercial spaces"]}
              className="text-ivory"
            />{" "}
            — a factory-quality result without the cost of replacement.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-gold px-8 py-4 text-[13px] uppercase tracking-[0.12em] text-ink transition-[background-color,transform] duration-200 hover:bg-ivory active:scale-[0.97]"
            >
              Get a Free Quote
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center border border-ivory/25 px-8 py-4 text-[13px] uppercase tracking-[0.12em] text-ivory transition-[border-color,transform] duration-200 hover:border-ivory active:scale-[0.97]"
            >
              View Our Work
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="mt-16 flex flex-wrap gap-x-8 gap-y-2 border-t border-ivory/10 pt-6 text-xs uppercase tracking-[0.14em] text-ivory/40"
          >
            <span>Kitchens</span>
            <span>Furniture</span>
            <span>uPVC &amp; Aluminium</span>
            <span>Shop Fronts</span>
          </motion.div>
        </div>

        <div className="relative flex items-center justify-center gap-4 bg-charcoal px-6 py-14 sm:gap-5 sm:px-10 lg:px-12 lg:pt-32 lg:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="relative aspect-[4/5] w-1/2 self-start overflow-hidden"
          >
            <Image
              src="/images/portfolio/door-after-1.jpg"
              alt="Aluminium door and window system professionally resprayed in anthracite grey"
              fill
              priority
              sizes="(min-width: 1024px) 24vw, 45vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="relative aspect-[4/5] w-1/2 self-end overflow-hidden"
          >
            <Image
              src="/images/portfolio/kitchen-island-after.jpg"
              alt="Professionally resprayed black kitchen island"
              fill
              sizes="(min-width: 1024px) 24vw, 45vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
