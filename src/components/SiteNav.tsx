"use client";

import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/basePath";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/collections/home/", label: "小家居" },
  { href: "/collections/tools/", label: "小工具" },
  { href: "/collections/kitchen/", label: "廚房" },
  { href: "/collections/clean/", label: "清潔" },
  { href: "/collections/tech/", label: "3C" },
  { href: "/collections/pet/", label: "寵物" },
  { href: "/about/", label: "關於" },
  { href: "/interest/", label: "登記" },
];

function normalizePath(path: string) {
  if (!path || path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

export default function SiteNav() {
  const pathname = usePathname();
  const current = normalizePath(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    document.body.style.overflow = "";
  }, [open]);

  return (
    <nav
      className={`sticky top-0 z-[100] transition-all duration-300 ease-qing ${
        scrolled
          ? "border-b border-mist-soft bg-paper/[0.92] backdrop-blur-[12px]"
          : "border-b border-transparent bg-paper/[0.88] backdrop-blur-[12px]"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
      aria-label="主要導覽"
    >
      <div className="wrap flex h-16 items-center justify-between">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2.5 text-[1.125rem] font-medium tracking-brand text-charcoal"
          onClick={() => setOpen(false)}
        >
          <Image
            src={withBasePath("/brand/logo-circle-nav.png")}
            alt="晴室"
            width={40}
            height={40}
            className="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10"
            priority
          />
          <span>晴室</span>
        </Link>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center bg-transparent border-0 cursor-pointer md:hidden"
          aria-label={open ? "關閉選單" : "開啟選單"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-px w-[18px] bg-charcoal before:absolute before:left-0 before:top-[-6px] before:block before:h-px before:w-[18px] before:bg-charcoal after:absolute after:left-0 after:top-[6px] after:block after:h-px after:w-[18px] after:bg-charcoal" />
        </button>

        <ul
          className={`list-none gap-7 md:flex ${
            open
              ? "fixed inset-x-0 top-[calc(4rem+env(safe-area-inset-top))] flex max-h-[calc(100dvh-4rem-env(safe-area-inset-top))] flex-col gap-0 overflow-y-auto border-b border-mist-soft bg-paper py-2 pb-4 opacity-100 pointer-events-auto translate-y-0 overscroll-contain"
              : "fixed inset-x-0 top-[calc(4rem+env(safe-area-inset-top))] flex max-h-[calc(100dvh-4rem-env(safe-area-inset-top))] flex-col gap-0 overflow-y-auto border-b border-mist-soft bg-paper py-2 pb-4 opacity-0 pointer-events-none -translate-y-2 md:static md:max-h-none md:flex-row md:overflow-visible md:border-0 md:bg-transparent md:p-0 md:opacity-100 md:pointer-events-auto md:translate-y-0"
          } transition-all duration-200 ease-qing`}
        >
          {LINKS.map((link) => {
            const hrefNorm = normalizePath(link.href);
            const active =
              current === hrefNorm ||
              (hrefNorm.startsWith("/collections/") &&
                current.startsWith(hrefNorm));
            return (
              <li key={link.href} className="text-center md:text-left">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`inline-flex min-h-11 w-full items-center justify-center px-4 py-[0.85rem] text-[0.8125rem] font-normal tracking-wide transition-colors duration-200 ease-qing md:inline md:min-h-0 md:w-auto md:p-0 ${
                    active
                      ? "text-wood-deep"
                      : "text-charcoal-soft hover:text-wood-deep"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
