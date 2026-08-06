"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Camera,
  FileText,
  ShieldCheck,
  SprayCan,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { process } from "@/lib/data";
import { Timeline } from "@/components/ui/timeline";

const icons: Record<string, LucideIcon> = {
  message: MessageCircle,
  camera: Camera,
  file: FileText,
  shield: ShieldCheck,
  spray: SprayCan,
  check: CheckCircle2,
};

export default function Process() {
  const timelineData = process.map((item) => {
    const Icon = icons[item.icon];
    return {
      title: item.title,
      icon: <Icon size={18} className="text-gold-deep" strokeWidth={1.75} />,
      content: (
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-deep/70">
            Step {item.step}
          </span>
          <p className="mt-2 max-w-md text-ink/60">{item.description}</p>
        </div>
      ),
    };
  });

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
          <p className="mt-5 max-w-lg text-ink/55">
            From first message to final coat, here&apos;s what to expect when
            you book a spray finishing project with Spray Works.
          </p>
        </motion.div>

        <div className="mt-8">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
}
