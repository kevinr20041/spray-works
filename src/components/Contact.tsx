"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { business, services } from "@/lib/data";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "./icons/SocialIcons";
import { BorderBeam } from "@/components/ui/border-beam";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<string>(services[0].title);
  const [message, setMessage] = useState("");

  const buildMessage = () =>
    [
      `Hi Spray Works, I'd like a free quote.`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      message ? `Details: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(
      `${business.whatsappHref}?text=${encodeURIComponent(buildMessage())}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const mailtoHref = () =>
    `mailto:${business.email}?subject=${encodeURIComponent(
      "Free quote request"
    )}&body=${encodeURIComponent(buildMessage())}`;

  const inputClass =
    "w-full border-b border-ivory/20 bg-transparent py-3 text-ivory outline-none transition-colors placeholder:text-ivory/30 focus:border-gold";

  return (
    <section id="contact" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-xl"
        >
          <h2 className="text-balance font-display text-5xl leading-[1.02] tracking-tight text-ivory sm:text-6xl">
            Get your free quote
          </h2>
          <p className="mt-5 text-ivory/55">
            Message Spray Works via WhatsApp, phone or the form below —
            covering {business.area}.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-4"
          >
            <dl className="border-t border-ivory/10">
              <div className="flex items-baseline justify-between border-b border-ivory/10 py-4">
                <dt className="text-sm text-ivory/45">Phone / WhatsApp</dt>
                <dd>
                  <a href={business.phoneHref} className="text-ivory hover:text-gold">
                    {business.phone}
                  </a>
                </dd>
              </div>
              <div className="flex items-baseline justify-between border-b border-ivory/10 py-4">
                <dt className="text-sm text-ivory/45">Email</dt>
                <dd>
                  <a
                    href={`mailto:${business.email}`}
                    className="break-all text-ivory hover:text-gold"
                  >
                    {business.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-baseline justify-between border-b border-ivory/10 py-4">
                <dt className="text-sm text-ivory/45">Area served</dt>
                <dd className="text-ivory">{business.area}</dd>
              </div>
            </dl>

            <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden border border-ivory/10">
              <iframe
                title="Spray Works — Dublin, Ireland"
                src="https://www.google.com/maps?q=Dublin,+Ireland&z=11&output=embed"
                width="100%"
                height="100%"
                className="grayscale invert-[0.92] contrast-[1.1]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <BorderBeam
                size={90}
                duration={8}
                colorFrom="#af8a3f"
                colorTo="#f2ede1"
              />
            </div>

            <div className="mt-8 flex gap-6 text-ivory/60">
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
              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Spray Works on WhatsApp"
                className="transition-colors hover:text-gold"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 lg:col-start-6"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm text-ivory/45">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm text-ivory/45">
                  Phone
                </label>
                <input
                  id="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClass}
                  placeholder="Your phone number"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="service" className="text-sm text-ivory/45">
                  Service
                </label>
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={inputClass}
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.title} className="bg-ink">
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm text-ivory/45">
                  Project details
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us a little about your project..."
                />
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink transition-[background-color,transform] duration-200 hover:bg-ivory active:scale-[0.97]"
              >
                Send via WhatsApp
              </button>
              <a
                href={mailtoHref()}
                className="inline-flex items-center justify-center border border-ivory/25 px-8 py-4 text-[13px] uppercase tracking-[0.12em] text-ivory transition-[border-color,transform] duration-200 hover:border-ivory active:scale-[0.97]"
              >
                Send via Email
              </a>
            </div>
            <p className="mt-3 text-xs text-ivory/35">
              WhatsApp opens with your details pre-filled, sent directly to
              Spray Works. Prefer email? Use the button above instead.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
