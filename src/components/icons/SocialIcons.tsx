type IconProps = {
  className?: string;
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14.5 21v-7.6h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.5-1.46h1.6V4.35A21 21 0 0 0 15.2 4c-2.4 0-4 1.46-4 4.14v2.26H8.6v3h2.6V21h3.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12.02 2.5c-5.25 0-9.5 4.25-9.5 9.5 0 1.68.44 3.25 1.2 4.62L2.5 21.5l5.02-1.2a9.47 9.47 0 0 0 4.5 1.14h.01c5.25 0 9.5-4.25 9.5-9.5s-4.25-9.5-9.51-9.44Zm0 17.32h-.01a7.8 7.8 0 0 1-3.98-1.09l-.29-.17-2.97.71.71-2.89-.19-.3a7.78 7.78 0 0 1-1.2-4.17c0-4.32 3.52-7.83 7.85-7.83a7.8 7.8 0 0 1 7.83 7.85c0 4.32-3.52 7.83-7.85 7.83l.1-.02Zm4.28-5.87c-.23-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.53.11-.15.23-.6.76-.74.92-.13.15-.27.17-.5.06-.23-.12-.98-.36-1.87-1.15-.69-.62-1.16-1.38-1.29-1.6-.14-.24 0-.36.1-.48.1-.11.23-.28.34-.42.11-.14.15-.24.23-.4.08-.15.04-.29-.02-.41-.06-.11-.53-1.28-.73-1.75-.19-.46-.39-.4-.53-.4l-.45-.01c-.15 0-.4.06-.61.29-.21.23-.8.79-.8 1.92 0 1.13.82 2.23.93 2.38.12.15 1.61 2.47 3.91 3.46.55.24.97.38 1.3.48.55.17 1.05.15 1.45.09.44-.07 1.38-.56 1.57-1.11.2-.55.2-1.02.14-1.11-.06-.1-.21-.16-.44-.28Z"
        fill="currentColor"
      />
    </svg>
  );
}
