import Image from "next/image";
import Link from "next/link";
import { business, navLinks } from "@/lib/data";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "./icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="relative bg-ink border-t border-ivory/10 pt-16 pb-8">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-8 w-8 overflow-hidden bg-ink ring-1 ring-ivory/10">
                <Image
                  src="/images/brand/logo-mark.png"
                  alt={`${business.name} logo`}
                  fill
                  sizes="32px"
                  className="object-contain p-1"
                />
              </span>
              <span className="font-display text-lg tracking-tight text-ivory">
                Spray Works
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-ivory/45">
              Premium spray finishing for kitchens, furniture, uPVC &amp;
              aluminium and commercial spaces across {business.area}.
            </p>
            <div className="mt-6 flex gap-5 text-ivory/55">
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-gold"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={business.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-colors hover:text-gold"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="transition-colors hover:text-gold"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-gold">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/55 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-gold">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory/55">
              <li>
                <a href={business.phoneHref} className="hover:text-ivory">
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="hover:text-ivory break-all">
                  {business.email}
                </a>
              </li>
              <li>{business.areaTag}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/35 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. All rights
            reserved.
          </p>
          <p>Kitchen &middot; Furniture &middot; uPVC Spraying</p>
        </div>
      </div>
    </footer>
  );
}
