import { Marquee } from "@/components/ui/marquee";
import { business } from "@/lib/data";

const items = [
  "Kitchen Respraying",
  "uPVC & Aluminium",
  "Furniture Spraying",
  "Shop Fronts",
  "Commercial Spraying",
  business.areaTag,
];

export default function ServiceMarquee() {
  return (
    <div className="relative border-y border-ivory/10 bg-ink py-4">
      <Marquee pauseOnHover className="[--duration:32s]">
        {items.map((item) => (
          <span
            key={item}
            className="flex items-center gap-8 font-display text-sm font-medium uppercase tracking-[0.1em] text-ivory/50"
          >
            {item}
            <span className="text-gold/50">&middot;</span>
          </span>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
