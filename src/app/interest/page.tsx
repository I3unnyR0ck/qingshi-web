import type { Metadata } from "next";
import InterestForm from "@/components/InterestForm";

export const metadata: Metadata = {
  title: "興趣登記",
  description:
    "晴室｜開賣前，想先知道你喜歡什麼。興趣熱度會決定優先上架。",
};

export default function InterestPage() {
  return (
    <section className="py-[clamp(3.75rem,8vw,6.25rem)]">
      <div className="wrap">
        <div className="mb-6 text-center">
          <p className="section-label text-center">INTEREST</p>
          <h1 className="section-title text-center">興趣登記</h1>
          <p className="section-lead mx-auto text-center">
            開賣前，想先知道你喜歡什麼。本頁送出只存在這個瀏覽器，方便本機預覽；正式彙整請用下方 Notion。
          </p>
        </div>

        <p className="mx-auto mb-7 max-w-lg text-center text-[0.8125rem] font-light leading-[1.85] tracking-wide text-charcoal-mute">
          登記後我們會在 Notion 彙整「方向」跟「商品」熱度，用來決定先上架什麼。
        </p>

        <div className="mx-auto max-w-xl rounded-qing border border-mist-soft bg-cream p-[clamp(1.85rem,4vw,2.65rem)]">
          <InterestForm />
        </div>
      </div>
    </section>
  );
}
