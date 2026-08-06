"use client";

import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeImage } from "@/components/ui/fade-image";

type Props = {
  before: string;
  after: string;
  alt: string;
  className?: string;
};

export default function BeforeAfterSlider({ before, after, alt, className }: Props) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative aspect-[4/3] w-full select-none overflow-hidden bg-ink",
        className
      )}
      onMouseMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
      onTouchEnd={() => (dragging.current = false)}
    >
      <div className="absolute inset-0">
        <FadeImage
          src={after}
          alt={`${alt} (after)`}
          fill
          sizes="(min-width: 1024px) 33vw, 90vw"
          className="object-cover"
        />
        <span className="absolute right-3 top-3 bg-gold px-2.5 py-1 text-[11px] uppercase tracking-[0.1em] text-ink">
          After
        </span>
      </div>

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <FadeImage
          src={before}
          alt={`${alt} (before)`}
          fill
          sizes="(min-width: 1024px) 33vw, 90vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 bg-ink/85 px-2.5 py-1 text-[11px] uppercase tracking-[0.1em] text-ivory ring-1 ring-ivory/20">
          Before
        </span>
      </div>

      <div
        className="absolute inset-y-0 z-10 flex w-px -translate-x-1/2 cursor-ew-resize flex-col items-center justify-center bg-ivory"
        style={{ left: `${position}%` }}
        onMouseDown={() => (dragging.current = true)}
        onTouchStart={() => (dragging.current = true)}
        role="slider"
        aria-label="Drag to compare before and after"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
          if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
        }}
      >
        <span className="flex h-9 w-9 items-center justify-center bg-ivory text-ink shadow-md transition-transform duration-150 ease-out active:scale-110">
          <MoveHorizontal size={15} />
        </span>
      </div>
    </div>
  );
}
