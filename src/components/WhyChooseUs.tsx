"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whyChoose } from "@/lib/data";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const spans = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-2",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-2",
  "sm:col-span-2",
];

const visuals: Record<number, { type: "image" | "gradient"; src?: string; alt?: string }> = {
  0: {
    type: "image",
    src: "/images/portfolio/kitchen-island-after.jpg",
    alt: "Professionally resprayed black kitchen island",
  },
  1: { type: "gradient" },
  5: {
    type: "image",
    src: "/images/portfolio/door-after-2.jpg",
    alt: "Aluminium door and window respray, finished in anthracite grey",
  },
};

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
          <h2 className="text-balance font-display text-5xl font-bold leading-[1.02] tracking-tight text-ivory sm:text-6xl">
            Why choose a professional respray
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-4 sm:auto-rows-[180px]">
          {whyChoose.map((item, i) => {
            const visual = visuals[i];
            const hasImage = visual?.type === "image";
            const hasGradient = visual?.type === "gradient";

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: [0.23, 1, 0.32, 1] }}
                className={cn(
                  "relative overflow-hidden border border-ivory/10 p-7",
                  spans[i],
                  hasImage ? "min-h-[220px]" : "min-h-[140px]",
                  hasGradient && "bg-gradient-to-br from-gold/20 via-charcoal to-charcoal"
                )}
              >
                {hasImage && (
                  <>
                    <Image
                      src={visual.src!}
                      alt={visual.alt ?? ""}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/10" />
                  </>
                )}

                <GlowingEffect
                  disabled={false}
                  proximity={80}
                  spread={30}
                  blur={0}
                  borderWidth={1.5}
                />

                <div className="relative flex h-full flex-col justify-end">
                  <span className="font-display text-sm font-bold text-ivory/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl tracking-tight text-ivory">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-ivory/55">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
