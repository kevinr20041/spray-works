"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioItem } from "@/lib/data";

type Props = {
  items: PortfolioItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function Lightbox({ items, index, onClose, onNavigate }: Props) {
  const isOpen = index !== null;
  const item = index !== null ? items[index] : null;

  const goPrev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + items.length) % items.length);
  }, [index, items.length, onNavigate]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % items.length);
  }, [index, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose, goPrev, goNext]);

  if (!isOpen || !item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[180] flex items-center justify-center bg-ink/97 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 sm:right-8 sm:top-8 flex h-10 w-10 items-center justify-center text-ivory/70 transition-[color,transform] duration-150 hover:text-gold active:scale-90"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        className="absolute left-3 sm:left-6 flex h-10 w-10 items-center justify-center text-ivory/70 transition-[color,transform] duration-150 hover:text-gold active:scale-90"
        aria-label="Previous image"
      >
        <ChevronLeft size={22} />
      </button>

      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(min-width: 1024px) 800px, 90vw"
            className="object-cover"
          />
        </div>
        <div className="mt-6 flex items-baseline justify-between border-t border-ivory/15 pt-4 text-center sm:text-left">
          <div>
            <h3 className="font-display text-2xl tracking-tight text-ivory">
              {item.title}
            </h3>
            <p className="mt-1 max-w-xl text-ivory/55">{item.description}</p>
          </div>
          <span className="hidden shrink-0 text-xs uppercase tracking-[0.14em] text-gold sm:block">
            {item.category}
          </span>
        </div>
      </motion.div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        className="absolute right-3 sm:right-6 flex h-10 w-10 items-center justify-center text-ivory/70 transition-[color,transform] duration-150 hover:text-gold active:scale-90"
        aria-label="Next image"
      >
        <ChevronRight size={22} />
      </button>
    </motion.div>
  );
}
