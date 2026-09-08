import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "實體門市",
  description: "晴室｜實體門市籌備中。",
};

export default function StoresPage() {
  return (
    <section className="py-[clamp(4rem,10vw,7rem)] text-center">
      <div className="wrap">
        <div
          className="mx-auto mb-8 h-px w-10 bg-wood"
          aria-hidden="true"
        />
        <p className="section-label text-center">STORES</p>
        <h1 className="section-title mb-6 text-center">實體門市</h1>
        <p className="mx-auto mb-4 max-w-md text-[clamp(1.05rem,2.5vw,1.25rem)] font-light tracking-wider text-charcoal-soft">
          實體門市籌備中
        </p>
        <p className="mx-auto mb-10 max-w-sm text-sm font-light leading-[1.9] tracking-wide text-charcoal-mute">
          先把線上選物跟興趣走穩。門市位置跟開放時間確定後，會在這裡更新。
        </p>
        <Link href="/interest/" className="btn-primary">
          先登記興趣
        </Link>
      </div>
    </section>
  );
}
