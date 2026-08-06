"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { business } from "@/lib/data";

type Props = {
  heading?: string;
  subheading?: string;
};

export default function CTABanner({
  heading = "Ready to start your project?",
  subheading = `Get a free, no-obligation quote covering ${business.area}.`,
}: Props) {
  return (
    <section className="relative border-t border-ivory/10 bg-charcoal py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="mx-auto flex max-w-[1400px] flex-col items-center gap-8 px-5 text-center sm:px-8"
      >
        <div>
          <h2 className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-ivory sm:text-5xl">
            {heading}
          </h2>
          <p className="mt-4 text-ivory/55">{subheading}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink transition-[background-color,transform] duration-200 hover:bg-ivory active:scale-[0.97]"
          >
            Get a Free Quote
          </Link>
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center border border-ivory/25 px-8 py-4 text-[13px] uppercase tracking-[0.12em] text-ivory transition-[border-color,transform] duration-200 hover:border-ivory active:scale-[0.97]"
          >
            Call {business.phone}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
