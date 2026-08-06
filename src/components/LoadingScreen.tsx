"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const fadeTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 1000);
    const unmountTimer = setTimeout(() => setMounted(false), 1500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-ink transition-opacity duration-500 ease-out",
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <Image
        src="/images/brand/logo-mark.png"
        alt=""
        fill
        sizes="100vw"
        className="scale-150 object-contain opacity-[0.06]"
        priority
      />
      <div
        className={cn(
          "relative h-24 w-24 transition-[transform,opacity] duration-700 ease-out sm:h-28 sm:w-28",
          visible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        )}
      >
        <Image
          src="/images/brand/logo-mark.png"
          alt="Spray Works"
          fill
          sizes="112px"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
