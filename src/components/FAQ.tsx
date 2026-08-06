"use client";

import { motion } from "framer-motion";
import { faqs } from "@/lib/data";

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="lg:col-span-4"
        >
          <div className="lg:sticky lg:top-32">
            <h2 className="text-balance font-display text-5xl font-bold leading-[1.02] tracking-tight text-ivory">
              Frequently asked
            </h2>
            <p className="mt-5 max-w-xs text-ivory/50">
              Common questions about spray finishing. For anything specific
              to your project, get in touch for a free quote.
            </p>
          </div>
        </motion.div>

        <div className="lg:col-span-7 lg:col-start-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05, ease: [0.23, 1, 0.32, 1] }}
              className="border-b border-ivory/10 py-7 first:border-t"
            >
              <h3 className="font-display text-xl tracking-tight text-ivory">
                {faq.question}
              </h3>
              <p className="mt-3 max-w-xl text-ivory/55">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
