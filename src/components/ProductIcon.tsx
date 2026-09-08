import type { ReactNode } from "react";
import type { Product } from "@/data/products";

const ICONS: Record<string, ReactNode> = {
  "wood-matte-tray": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <rect x="18" y="42" width="84" height="36" rx="3" fill="#D4B896" opacity="0.55" />
      <rect x="22" y="46" width="76" height="28" rx="2" fill="#B8956C" opacity="0.35" />
      <rect x="28" y="52" width="28" height="16" rx="1.5" fill="#EFEBE4" />
    </svg>
  ),
  "cable-organizer-box": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <rect x="28" y="30" width="64" height="60" rx="4" fill="#D9D4CC" opacity="0.7" />
      <rect x="34" y="36" width="52" height="8" rx="1" fill="#EFEBE4" />
      <rect x="34" y="50" width="52" height="8" rx="1" fill="#EFEBE4" />
      <rect x="34" y="64" width="52" height="8" rx="1" fill="#EFEBE4" />
      <line x1="28" y1="48" x2="92" y2="48" stroke="#C8C2B8" strokeWidth="1" />
    </svg>
  ),
  "ceramic-matte-pen-holder": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <ellipse cx="60" cy="88" rx="22" ry="6" fill="#D9D4CC" opacity="0.5" />
      <path d="M38 88 L42 38 Q60 28 78 38 L82 88" fill="#C8C2B8" opacity="0.65" />
      <ellipse cx="60" cy="38" rx="18" ry="5" fill="#E8E4DC" />
      <ellipse cx="60" cy="38" rx="12" ry="3" fill="#F7F5F1" />
    </svg>
  ),
  "glass-spray-bottle-set": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <rect x="32" y="28" width="28" height="64" rx="14" fill="#D9D4CC" opacity="0.45" />
      <rect x="36" y="36" width="20" height="48" rx="10" fill="#E8E4DC" opacity="0.8" />
      <rect x="60" y="28" width="28" height="64" rx="14" fill="#C8C2B8" opacity="0.55" />
      <circle cx="46" cy="42" r="3" fill="#B8956C" opacity="0.6" />
      <circle cx="74" cy="42" r="3" fill="#9A7A52" opacity="0.5" />
    </svg>
  ),
  "wood-silicone-brush": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <rect x="52" y="22" width="16" height="48" rx="3" fill="#B8956C" opacity="0.7" />
      <rect x="48" y="68" width="24" height="8" rx="2" fill="#D4B896" />
      <path d="M40 78 Q60 96 80 78" stroke="#D9D4CC" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M44 82 Q60 94 76 82" stroke="#E8E4DC" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  ),
  "minimal-storage-jar": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <rect x="30" y="35" width="60" height="55" rx="6" fill="#E8E4DC" />
      <rect x="36" y="41" width="48" height="43" rx="3" fill="#F7F5F1" />
      <circle cx="60" cy="28" r="8" fill="#D9D4CC" opacity="0.8" />
      <circle cx="60" cy="28" r="4" fill="#EFEBE4" />
    </svg>
  ),
  "aluminum-device-stand": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <rect x="35" y="28" width="50" height="70" rx="4" fill="#C8C2B8" opacity="0.55" />
      <rect x="40" y="34" width="40" height="54" rx="2" fill="#D9D4CC" opacity="0.4" />
      <path d="M50 98 L60 88 L70 98" stroke="#9A7A52" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="60" y1="88" x2="60" y2="102" stroke="#9A7A52" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  "woven-cable-gatherer": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <ellipse cx="60" cy="60" rx="32" ry="28" fill="none" stroke="#D4B896" strokeWidth="8" opacity="0.5" />
      <ellipse cx="60" cy="60" rx="20" ry="16" fill="none" stroke="#B8956C" strokeWidth="5" opacity="0.4" />
      <circle cx="60" cy="60" r="6" fill="#EFEBE4" />
    </svg>
  ),
  "minimal-desk-pad": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <rect x="18" y="48" width="84" height="28" rx="4" fill="#E8E4DC" />
      <rect x="22" y="52" width="76" height="20" rx="2" fill="#F7F5F1" />
      <rect x="30" y="58" width="36" height="8" rx="1.5" fill="#D9D4CC" opacity="0.6" />
    </svg>
  ),
  "magnetic-cable-clip": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <rect x="38" y="45" width="44" height="30" rx="6" fill="#C8C2B8" opacity="0.65" />
      <rect x="44" y="51" width="32" height="18" rx="3" fill="#D9D4CC" opacity="0.5" />
      <circle cx="60" cy="60" r="5" fill="#9A7A52" opacity="0.45" />
      <path d="M48 38 Q60 32 72 38" stroke="#B8956C" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
    </svg>
  ),
};

export default function ProductIcon({
  slug,
  className = "",
}: {
  slug: string;
  className?: string;
}) {
  return (
    <div
      className={`aspect-square w-full max-w-full bg-paper-deep flex items-center justify-center p-6 relative overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {ICONS[slug] ?? (
        <div className="h-12 w-12 rounded-full border border-mist opacity-40" />
      )}
    </div>
  );
}

export function productHasIcon(product: Product): boolean {
  return product.slug in ICONS;
}
