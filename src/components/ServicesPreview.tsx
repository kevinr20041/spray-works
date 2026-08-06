"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, DoorOpen, Sofa, Store, ArrowRight, type LucideIcon } from "lucide-react";
import { services } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  home: Home,
  door: DoorOpen,
  sofa: Sofa,
  store: Store,
};

export default function ServicesPreview() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-wrap items-end justify-between gap-6 border-b border-ivory/10 pb-10"
        >
          <h2 className="text-balance font-display text-5xl font-bold leading-[1.02] tracking-tight text-ivory sm:text-6xl">
            What we spray
          </h2>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.12em] text-ivory/60 transition-colors hover:text-gold"
          >
            View all services
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
                className="border-t border-ivory/10 py-8 pr-6 lg:border-t-0 lg:border-l lg:first:border-l-0 lg:pl-8 lg:first:pl-0"
              >
                <Icon size={22} className="text-gold" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl tracking-tight text-ivory">
                  {service.title}
                </h3>
                <p className="mt-2 text-ivory/55">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
