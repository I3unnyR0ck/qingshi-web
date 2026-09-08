import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "關於我們",
  description:
    "晴室｜我們自己也討厭衝動買一堆用不順手的東西。代理精選、慢慢淘、慢慢上。",
};

export default function AboutPage() {
  return (
    <section className="bg-paper-deep py-[clamp(3.75rem,8vw,6.25rem)]">
      <div className="wrap">
        <div className="mx-auto max-w-xl text-center">
          <p className="section-label text-center">ABOUT</p>
          <h1 className="section-title mb-7 text-center">關於我們</h1>
          <p className="mb-6 text-[clamp(1rem,2.2vw,1.125rem)] font-light leading-[2.05] tracking-wide text-charcoal-soft">
            我們自己也討厭衝動買一堆用不順手的東西。所以想開這間店：代理精選、慢慢淘、慢慢上——希望你回購的是
            <em className="not-italic font-normal text-charcoal">
              「剛好需要的那一件」
            </em>
            ，不是折扣碼。
          </p>
          <p className="mx-auto max-w-lg text-sm font-light leading-[1.9] tracking-wide text-charcoal-mute">
            晴室偏安靜的材質跟清楚的功能：小家居、小工具、廚房、清潔、3C、寵物。上架節奏跟著樣品跟興趣走，寧可慢一點，也不堆一堆其實用不到的東西。
          </p>
          <div className="mt-10">
            <Link href="/interest/" className="btn-primary">
              告訴我們你有興趣的方向
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
