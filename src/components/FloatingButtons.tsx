"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { business } from "@/lib/data";
import { WhatsAppIcon } from "./icons/SocialIcons";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-[130] flex flex-col gap-2">
      <motion.a
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        href={business.phoneHref}
        aria-label={`Call ${business.name}`}
        className="hidden h-12 w-12 items-center justify-center bg-charcoal text-ivory ring-1 ring-ivory/15 transition-[background-color,transform] duration-150 hover:bg-charcoal-soft active:scale-90 sm:flex"
      >
        <Phone size={18} />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.55, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        href={business.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Message ${business.name} on WhatsApp`}
        className="flex h-12 w-12 items-center justify-center bg-gold text-ink transition-[background-color,transform] duration-150 hover:bg-ivory active:scale-90"
      >
        <WhatsAppIcon className="h-5 w-5" />
      </motion.a>
    </div>
  );
}
