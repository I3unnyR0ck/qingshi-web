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
  "matte-ceramic-pet-bowl": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <ellipse cx="60" cy="88" rx="28" ry="7" fill="#D9D4CC" opacity="0.45" />
      <path d="M32 72 Q32 42 60 42 Q88 42 88 72 L84 88 Q60 96 36 88 Z" fill="#C8C2B8" opacity="0.65" />
      <ellipse cx="60" cy="72" rx="26" ry="8" fill="#E8E4DC" />
      <ellipse cx="60" cy="72" rx="16" ry="4" fill="#F7F5F1" />
    </svg>
  ),
  "linen-cat-scratch-pad": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <rect x="22" y="38" width="76" height="44" rx="4" fill="#D4B896" opacity="0.45" />
      <rect x="28" y="44" width="64" height="32" rx="2" fill="#EFEBE4" />
      <line x1="36" y1="52" x2="84" y2="52" stroke="#D9D4CC" strokeWidth="1.5" />
      <line x1="36" y1="60" x2="84" y2="60" stroke="#D9D4CC" strokeWidth="1.5" />
      <line x1="36" y1="68" x2="84" y2="68" stroke="#D9D4CC" strokeWidth="1.5" />
    </svg>
  ),
  "leash-toy-basket": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <path d="M30 48 L36 88 Q60 96 84 88 L90 48" fill="#D4B896" opacity="0.5" />
      <ellipse cx="60" cy="48" rx="30" ry="10" fill="#EFEBE4" />
      <ellipse cx="60" cy="48" rx="22" ry="6" fill="#F7F5F1" />
      <circle cx="52" cy="70" r="5" fill="#B8956C" opacity="0.4" />
      <circle cx="68" cy="74" r="4" fill="#C8C2B8" opacity="0.5" />
    </svg>
  ),
  "matte-desk-lamp": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <ellipse cx="60" cy="96" rx="22" ry="5" fill="#D9D4CC" opacity="0.5" />
      <rect x="54" y="70" width="12" height="26" rx="2" fill="#C8C2B8" opacity="0.7" />
      <path d="M40 48 Q60 28 80 48 L76 62 Q60 72 44 62 Z" fill="#D4B896" opacity="0.55" />
      <ellipse cx="60" cy="48" rx="18" ry="5" fill="#E8E4DC" />
    </svg>
  ),
  "paper-fabric-night-light": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <ellipse cx="60" cy="92" rx="18" ry="5" fill="#D9D4CC" opacity="0.4" />
      <rect x="48" y="78" width="24" height="14" rx="2" fill="#C8C2B8" opacity="0.55" />
      <ellipse cx="60" cy="52" rx="26" ry="32" fill="#EFEBE4" opacity="0.85" />
      <ellipse cx="60" cy="52" rx="18" ry="22" fill="#F7F5F1" opacity="0.7" />
      <circle cx="60" cy="52" r="4" fill="#D4B896" opacity="0.45" />
    </svg>
  ),
  "wood-base-mood-lamp": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <rect x="38" y="78" width="44" height="16" rx="3" fill="#B8956C" opacity="0.65" />
      <path d="M42 78 Q60 30 78 78" fill="#E8E4DC" opacity="0.75" />
      <path d="M48 78 Q60 42 72 78" fill="#F7F5F1" opacity="0.5" />
      <ellipse cx="60" cy="94" rx="24" ry="4" fill="#D9D4CC" opacity="0.4" />
    </svg>
  ),
  "wood-handle-scraper": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <rect x="52" y="22" width="16" height="46" rx="3" fill="#B8956C" opacity="0.7" />
      <path d="M40 68 L80 68 L72 92 Q60 98 48 92 Z" fill="#C8C2B8" opacity="0.65" />
      <rect x="48" y="64" width="24" height="6" rx="1.5" fill="#D4B896" />
    </svg>
  ),
  "matte-clip-set": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <rect x="34" y="36" width="20" height="48" rx="3" fill="#D9D4CC" opacity="0.7" />
      <rect x="38" y="42" width="12" height="8" rx="1" fill="#EFEBE4" />
      <rect x="50" y="42" width="20" height="48" rx="3" fill="#C8C2B8" opacity="0.6" />
      <rect x="54" y="48" width="12" height="8" rx="1" fill="#E8E4DC" />
      <rect x="66" y="48" width="20" height="48" rx="3" fill="#D4B896" opacity="0.5" />
      <rect x="70" y="54" width="12" height="8" rx="1" fill="#EFEBE4" />
    </svg>
  ),
  "tool-wall-rack": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <rect x="20" y="40" width="80" height="8" rx="2" fill="#C8C2B8" opacity="0.7" />
      <circle cx="36" cy="56" r="5" fill="#B8956C" opacity="0.55" />
      <circle cx="60" cy="56" r="5" fill="#9A7A52" opacity="0.5" />
      <circle cx="84" cy="56" r="5" fill="#B8956C" opacity="0.55" />
      <line x1="36" y1="61" x2="36" y2="78" stroke="#D9D4CC" strokeWidth="2" strokeLinecap="round" />
      <line x1="60" y1="61" x2="60" y2="82" stroke="#D9D4CC" strokeWidth="2" strokeLinecap="round" />
      <line x1="84" y1="61" x2="84" y2="74" stroke="#D9D4CC" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  "matte-ceramic-bowl-set": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <ellipse cx="48" cy="78" rx="22" ry="6" fill="#D9D4CC" opacity="0.4" />
      <path d="M28 62 Q28 42 48 42 Q68 42 68 62 L64 78 Q48 86 32 78 Z" fill="#C8C2B8" opacity="0.6" />
      <ellipse cx="48" cy="62" rx="20" ry="6" fill="#E8E4DC" />
      <ellipse cx="72" cy="70" rx="20" ry="5" fill="#D9D4CC" opacity="0.35" />
      <path d="M54 56 Q54 38 72 38 Q90 38 90 56 L86 70 Q72 78 58 70 Z" fill="#D4B896" opacity="0.5" />
      <ellipse cx="72" cy="56" rx="18" ry="5" fill="#EFEBE4" />
    </svg>
  ),
  "wood-handle-cutlery": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <rect x="40" y="28" width="8" height="52" rx="2" fill="#B8956C" opacity="0.7" />
      <rect x="38" y="78" width="12" height="18" rx="2" fill="#C8C2B8" opacity="0.6" />
      <rect x="56" y="28" width="8" height="52" rx="2" fill="#D4B896" opacity="0.65" />
      <path d="M52 78 L68 78 L64 96 L56 96 Z" fill="#C8C2B8" opacity="0.55" />
      <rect x="72" y="28" width="8" height="52" rx="2" fill="#B8956C" opacity="0.55" />
      <ellipse cx="76" cy="88" rx="8" ry="10" fill="#D9D4CC" opacity="0.6" />
    </svg>
  ),
  "glass-water-carafe": (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58%] h-auto opacity-90">
      <path d="M48 28 L44 40 Q36 52 36 72 L36 92 Q36 100 60 100 Q84 100 84 92 L84 72 Q84 52 76 40 L72 28" fill="#E8E4DC" opacity="0.65" />
      <rect x="48" y="22" width="24" height="10" rx="2" fill="#C8C2B8" opacity="0.55" />
      <path d="M44 70 L76 70 L76 88 Q60 94 44 88 Z" fill="#D9D4CC" opacity="0.35" />
      <line x1="52" y1="48" x2="52" y2="66" stroke="#EFEBE4" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
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
