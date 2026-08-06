"use client";

import { motion } from "framer-motion";
import { FadeImage } from "@/components/ui/fade-image";
import { NumberTicker } from "@/components/ui/number-ticker";

export default function Statement() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-ink py-24">
      <div className="absolute inset-0">
        <FadeImage
          src="/images/portfolio/door-after-2.jpg"
          alt="Aluminium door and window respray, finished in anthracite grey"
          fill
          sizes="100vw"
          className="scale-110 object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-ink/80" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="relative mx-auto max-w-4xl px-5 text-center sm:px-8"
      >
        <p className="text-balance font-display text-4xl font-medium leading-[1.15] tracking-tight text-ivory sm:text-5xl lg:text-6xl">
          A factory finish, sprayed on-site, for a fraction of the cost of
          replacement.
        </p>
        <p className="mt-8 font-display text-2xl text-gold">
          Kitchen resprays from &euro;
          <NumberTicker value={875} className="font-display text-gold" />
        </p>
      </motion.div>
    </section>
  );
}
