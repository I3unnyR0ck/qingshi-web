"use client";

import { useState, FormEvent } from "react";
import { products } from "@/data/products";

const NOTION_URL =
  "https://app.notion.com/p/1b0b0d508b6b48998953b33b9a4bc23f";

const DIRECTIONS = [
  { value: "小家居", label: "小家居" },
  { value: "燈具", label: "燈具" },
  { value: "小工具", label: "小工具" },
  { value: "廚房", label: "廚房" },
  { value: "清潔", label: "清潔" },
  { value: "3C", label: "3C" },
  { value: "寵物", label: "寵物" },
];

type FormState = {
  name: string;
  contact: string;
  interests: string[];
  productSlugs: string[];
  note: string;
};

const INITIAL: FormState = {
  name: "",
  contact: "",
  interests: [],
  productSlugs: [],
  note: "",
};

export default function InterestForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  function toggleList(key: "interests" | "productSlugs", value: string) {
    setForm((prev) => {
      const list = prev[key];
      const next = list.includes(value)
        ? list.filter((v) => v !== value)
        : [...list, value];
      return { ...prev, [key]: next };
    });
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const entry = {
      name: form.name.trim(),
      contact: form.contact.trim(),
      interests: form.interests,
      products: form.productSlugs.map((slug) => {
        const p = products.find((x) => x.slug === slug);
        return p?.shortName ?? slug;
      }),
      note: form.note.trim(),
      savedAt: new Date().toISOString(),
    };
    const key = "qingshi_interest_signups";
    let list: unknown[] = [];
    try {
      const raw = localStorage.getItem(key);
      list = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(list)) list = [];
    } catch {
      list = [];
    }
    list.push(entry);
    localStorage.setItem(key, JSON.stringify(list));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-8 px-4" role="status" aria-live="polite">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-paper-deep">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9A7A52"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-[22px] w-[22px]"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="mb-[0.65rem] text-[1.0625rem] tracking-wide">收到了，謝謝你</p>
        <p className="text-sm font-light leading-[1.8] tracking-wide text-charcoal-mute">
          本機預覽的資料會存在這個裝置。
          <br />
          正式統計「方向／商品」熱度，會用 Notion 彙整。
        </p>
        <a
          className="btn-secondary"
          href={NOTION_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          或到 Notion 登記（方便統計熱度）
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="mb-6">
        <label htmlFor="name" className="mb-[0.55rem] block text-xs tracking-wide text-charcoal-soft">
          稱呼 <span className="font-light tracking-wide text-charcoal-mute">（選填）</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="怎麼稱呼你"
          autoComplete="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-qing border border-mist-soft bg-paper px-4 py-[0.8rem] text-base outline-none transition-colors duration-200 ease-qing focus:border-wood focus:bg-cream"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="contact" className="mb-[0.55rem] block text-xs tracking-wide text-charcoal-soft">
          Email 或 LINE／IG <span className="font-light tracking-wide text-charcoal-mute">（選填）</span>
        </label>
        <input
          type="text"
          id="contact"
          name="contact"
          placeholder="hello@email.com 或 @yourid"
          autoComplete="email"
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
          className="w-full rounded-qing border border-mist-soft bg-paper px-4 py-[0.8rem] text-base outline-none transition-colors duration-200 ease-qing focus:border-wood focus:bg-cream"
        />
      </div>

      <div className="mb-6">
        <p id="interest-label" className="mb-[0.55rem] block text-xs tracking-wide text-charcoal-soft">
          感興趣方向
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-3" role="group" aria-labelledby="interest-label">
          {DIRECTIONS.map((d) => (
            <label
              key={d.value}
              className="flex cursor-pointer items-center gap-2 text-sm tracking-wide text-charcoal-soft"
            >
              <input
                type="checkbox"
                className="check-box peer sr-only"
                checked={form.interests.includes(d.value)}
                onChange={() => toggleList("interests", d.value)}
              />
              <span
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[2px] border transition-colors ${
                  form.interests.includes(d.value)
                    ? "border-wood bg-wood"
                    : "border-mist bg-paper"
                }`}
                aria-hidden
              >
                {form.interests.includes(d.value) && (
                  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="#FFFEFB" strokeWidth="1.5">
                    <path d="M2.5 6.5 L5 9 L9.5 3.5" />
                  </svg>
                )}
              </span>
              {d.label}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p id="product-label" className="mb-[0.55rem] block text-xs tracking-wide text-charcoal-soft">
          感興趣商品
        </p>
        <div
          className="grid grid-cols-1 gap-[0.65rem] sm:grid-cols-2"
          role="group"
          aria-labelledby="product-label"
        >
          {products.map((p) => (
            <label
              key={p.slug}
              className="flex cursor-pointer items-center gap-2 text-sm tracking-wide text-charcoal-soft"
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={form.productSlugs.includes(p.slug)}
                onChange={() => toggleList("productSlugs", p.slug)}
              />
              <span
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[2px] border transition-colors ${
                  form.productSlugs.includes(p.slug)
                    ? "border-wood bg-wood"
                    : "border-mist bg-paper"
                }`}
                aria-hidden
              >
                {form.productSlugs.includes(p.slug) && (
                  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="#FFFEFB" strokeWidth="1.5">
                    <path d="M2.5 6.5 L5 9 L9.5 3.5" />
                  </svg>
                )}
              </span>
              {p.shortName}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="note" className="mb-[0.55rem] block text-xs tracking-wide text-charcoal-soft">
          還想跟我們說的 <span className="font-light tracking-wide text-charcoal-mute">（選填）</span>
        </label>
        <textarea
          id="note"
          name="note"
          placeholder="例如：想看更多霧面收納、或特定尺寸……"
          value={form.note}
          onChange={(e) => setForm({ ...form, note: e.target.value })}
          className="min-h-[5.5rem] w-full resize-y rounded-qing border border-mist-soft bg-paper px-4 py-[0.8rem] text-base outline-none transition-colors duration-200 ease-qing focus:border-wood focus:bg-cream"
        />
      </div>

      <button type="submit" className="btn-full">
        送出登記
      </button>
      <a
        className="btn-secondary"
        href={NOTION_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        或到 Notion 登記（方便統計熱度）
      </a>
    </form>
  );
}
