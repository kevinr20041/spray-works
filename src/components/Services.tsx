"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";

const MotionLink = motion.create(Link);

export default function Services() {
  return (
    <section id="services" className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-2xl border-b border-ivory/10 pb-10"
        >
          <h2 className="text-balance font-display text-5xl font-bold leading-[1.02] tracking-tight text-ivory sm:text-6xl">
            Spray finishing services
          </h2>
          <p className="mt-5 max-w-lg text-ivory/50">
            Professional spray finishing for homes and businesses, built on
            careful preparation and a factory-style result.
          </p>
        </motion.div>

        <div>
          {services.map((service, i) => (
            <MotionLink
              key={service.id}
              href="/contact"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
              className="group grid grid-cols-1 items-center gap-4 border-b border-ivory/10 py-9 transition-transform duration-200 active:scale-[0.99] sm:grid-cols-[70px_1fr_auto] sm:gap-8"
            >
              <span className="font-display text-lg font-semibold text-ivory/30">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="font-display text-2xl tracking-tight text-ivory transition-colors group-hover:text-gold sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-xl text-ivory/55">
                  {service.description}
                </p>
                <p className="mt-1 max-w-xl text-sm text-ivory/35">
                  {service.detail}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="border border-ivory/15 px-3 py-1.5 text-xs text-ivory/60"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <ArrowUpRight
                size={22}
                className="hidden shrink-0 text-ivory/30 transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold sm:block"
              />
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
