"use client";

import { motion } from "framer-motion";
import { whyChoose } from "@/lib/data";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-xl"
        >
          <h2 className="text-balance font-display text-5xl leading-[1.02] tracking-tight text-ivory sm:text-6xl">
            Why choose a professional respray
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: [0.23, 1, 0.32, 1] }}
              className="relative border border-ivory/10 p-7"
            >
              <GlowingEffect
                disabled={false}
                proximity={80}
                spread={30}
                blur={0}
                borderWidth={1.5}
              />
              <span className="font-display text-sm italic text-ivory/35">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl tracking-tight text-ivory">
                {item.title}
              </h3>
              <p className="mt-2 max-w-sm text-ivory/55">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
