import Link from "next/link";
import { business } from "@/lib/data";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center bg-ink px-5 py-24 text-center">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-gold">
        {business.name}
      </p>
      <h1 className="mt-6 font-display text-[22vw] leading-[0.9] tracking-tight text-ivory sm:text-[10rem]">
        404
      </h1>
      <p className="mt-6 max-w-sm text-balance text-lg text-ivory/60">
        This page has been resprayed into oblivion. Let&apos;s get you back
        on track.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-gold px-8 py-4 text-[13px] uppercase tracking-[0.12em] text-ink transition-[background-color,transform] duration-200 hover:bg-ivory active:scale-[0.97]"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center border border-ivory/25 px-8 py-4 text-[13px] uppercase tracking-[0.12em] text-ivory transition-[border-color,transform] duration-200 hover:border-ivory active:scale-[0.97]"
        >
          Get a Free Quote
        </Link>
      </div>
    </main>
  );
}
