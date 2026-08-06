"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/data";
import { Timeline } from "@/components/ui/timeline";

export default function Process() {
  const timelineData = process.map((item) => ({
    title: item.step,
    content: (
      <div>
        <h3 className="font-display text-xl tracking-tight text-ink">
          {item.title}
        </h3>
        <p className="mt-1.5 max-w-md text-ink/60">{item.description}</p>
      </div>
    ),
  }));

  return (
    <section id="process" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="text-balance font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl">
            Our process
          </h2>
        </motion.div>

        <div className="mt-8">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
}
