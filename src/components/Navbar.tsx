"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, business } from "@/lib/data";
import { cn } from "@/lib/utils";
import { InstagramIcon, FacebookIcon } from "./icons/SocialIcons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 border-b transition-[background-color,border-color,padding] duration-500",
        scrolled
          ? "bg-ink/95 backdrop-blur-md border-gold/25 py-2.5"
          : "bg-gradient-to-b from-ink/70 to-transparent border-transparent py-5"
      )}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative h-11 w-11 shrink-0 overflow-hidden bg-ink ring-1 ring-gold/40 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/brand/logo-mark.png"
              alt={`${business.name} logo`}
              fill
              sizes="44px"
              className="object-contain p-1.5"
              priority
            />
          </span>
          <span className="font-display text-xl tracking-tight text-ivory">
            Spray Works
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-9 text-[13px] font-medium uppercase tracking-[0.14em] text-ivory/70">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative py-1 transition-colors hover:text-gold",
                    isActive && "text-gold"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spray Works on Instagram"
            className="text-ivory/60 transition-colors hover:text-gold"
          >
            <InstagramIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={business.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spray Works on Facebook"
            className="text-ivory/60 transition-colors hover:text-gold"
          >
            <FacebookIcon className="h-[18px] w-[18px]" />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center bg-gold px-6 py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink transition-[background-color,transform] duration-200 hover:bg-ivory active:scale-[0.97]"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center text-ivory transition-transform active:scale-90"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-ink border-t border-gold/20"
          >
            <ul className="flex flex-col px-6 py-4 text-ivory/85">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3.5 text-lg font-display border-b border-ivory/10"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-6 pb-8 pt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block w-full bg-gold py-3 text-center text-[13px] font-semibold uppercase tracking-[0.12em] text-ink transition-transform active:scale-[0.97]"
              >
                Get a Free Quote
              </Link>
              <div className="mt-6 flex justify-center gap-6 text-ivory/60">
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Spray Works on Instagram"
                  className="transition-colors hover:text-gold"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href={business.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Spray Works on Facebook"
                  className="transition-colors hover:text-gold"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
