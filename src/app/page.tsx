import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products, CATEGORIES } from "@/data/products";

const PROPOSALS = [
  {
    num: "01",
    title: "剛好就好",
    text: "功能清楚就好，不多餘。問自己一句：少了它會不會不方便？會，才留下。",
  },
  {
    num: "02",
    title: "觸感優先",
    text: "木、霧面、玻璃、鋁——耐看、好摸。看起來安靜，摸起來舒服，就對了。",
  },
  {
    num: "03",
    title: "慢慢上架",
    text: "代理精選、慢慢淘。寧可空一格，也不為了填滿而隨便放。",
  },
];

const TRUST = [
  "風格固定、不亂漂",
  "樣品確認後才上架",
  "興趣熱度決定先賣什麼",
  "不靠折扣堆貨",
];

export default function HomePage() {
  const preview = products.slice(0, 5);

  return (
    <>
      {/* Hero */}
      <header className="py-[clamp(3.5rem,10vw,6.5rem)] pb-[clamp(3.5rem,9vw,6rem)] text-center">
        <div className="wrap">
          <div
            className="mx-auto mb-8 h-px w-10 bg-wood"
            aria-hidden="true"
          />
          <h1 className="mb-[1.15rem] pl-[0.42em] text-[clamp(2.75rem,8vw,4.5rem)] font-light leading-tight tracking-hero">
            晴室
          </h1>
          <p className="mb-[1.35rem] text-[clamp(1.05rem,2.5vw,1.25rem)] font-normal tracking-wider text-charcoal-soft">
            少一點東西，多一點剛好。
          </p>
          <p className="mx-auto mb-9 max-w-lg text-[0.9375rem] font-light leading-[1.9] tracking-wide text-charcoal-mute">
            精選帶有無印質感的家居小物——燈具、廚房、寵物、3C 與清潔用具，慢慢挑。
            <br />
            不堆貨、不催促——只留會讓日常變順手的那幾樣。
          </p>
          <div className="flex flex-col items-center gap-[1.1rem]">
            <Link href="/interest/" className="btn-primary">
              登記我有興趣的方向
            </Link>
            <Link
              href="#products"
              className="border-b border-transparent pb-[0.15rem] text-[0.8125rem] tracking-wide text-wood-deep transition-colors duration-200 ease-qing hover:border-mist hover:text-charcoal"
            >
              看看我們正在想的物件
            </Link>
          </div>
        </div>
      </header>

      {/* 選物提案 */}
      <section
        className="border-y border-mist-soft bg-cream py-[clamp(3.75rem,8vw,6.25rem)]"
        aria-labelledby="proposals-title"
      >
        <div className="wrap">
          <div className="mb-10">
            <p className="section-label">LIFE PROPOSAL</p>
            <h2 className="section-title" id="proposals-title">
              選物提案
            </h2>
            <p className="section-lead">
              三步想清楚：要不要進門、手感對不對、能不能慢慢等。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
            {PROPOSALS.map((p) => (
              <article
                key={p.num}
                className="rounded-qing border border-mist-soft bg-paper px-7 pb-8 pt-[2.15rem] transition-all duration-300 ease-qing hover:border-mist hover:shadow-[0_8px_32px_rgba(58,54,50,0.04)]"
              >
                <p className="mb-[1.35rem] text-xs font-medium tracking-wider text-wood">
                  {p.num}
                </p>
                <h3 className="mb-[0.85rem] text-[1.0625rem] font-medium tracking-wide">
                  {p.title}
                </h3>
                <p className="text-sm font-light leading-[1.85] tracking-wide text-charcoal-mute">
                  {p.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <aside
        className="border-b border-mist-soft bg-paper-deep py-7"
        aria-label="選物原則"
      >
        <div className="wrap">
          <ul className="grid list-none grid-cols-1 gap-4 text-center min-[560px]:grid-cols-2 min-[900px]:grid-cols-4 min-[900px]:gap-4">
            {TRUST.map((item) => (
              <li
                key={item}
                className="px-2 py-[0.35rem] text-xs leading-relaxed tracking-wide text-charcoal-soft before:mx-auto before:mb-[0.65rem] before:block before:h-px before:w-4 before:bg-wood-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Products preview */}
      <section
        id="products"
        className="py-[clamp(3.75rem,8vw,6.25rem)]"
        aria-labelledby="products-title"
      >
        <div className="wrap">
          <div className="mb-10">
            <p className="section-label">THIS WEEK</p>
            <h2 className="section-title" id="products-title">
              我們正在想的物件
            </h2>
            <p className="section-lead">
              細節跟到貨還在確認中。先讓你看看我們正在想的方向。
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-[0.55rem]">
            {(
              Object.values(CATEGORIES) as Array<{
                id: string;
                label: string;
                path: string;
              }>
            ).map((cat) => (
              <Link
                key={cat.id}
                href={cat.path}
                className="rounded-full border border-mist px-[1.05rem] py-[0.45rem] text-xs tracking-wide text-charcoal-soft transition-all duration-200 ease-qing hover:border-wood-soft hover:text-charcoal"
              >
                {cat.label}
              </Link>
            ))}
          </div>

          <div className="grid max-w-full grid-cols-1 gap-6 min-[560px]:grid-cols-2 min-[900px]:grid-cols-3 min-[1100px]:grid-cols-5 min-[1100px]:gap-[1.35rem]">
            {preview.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>

          <p className="mt-6 text-center text-xs font-light tracking-wide text-charcoal-mute">
            點進商品，看看它適不適合你
          </p>

          <div className="mt-8 text-center">
            <Link
              href="/collections/home/"
              className="text-[0.8125rem] tracking-wide text-wood-deep border-b border-transparent pb-[0.15rem] hover:border-mist hover:text-charcoal"
            >
              看全部分類選物
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-mist-soft bg-paper-deep py-[clamp(3.75rem,8vw,5rem)] text-center">
        <div className="wrap">
          <p className="section-label text-center">INTEREST</p>
          <h2 className="section-title mb-4 text-center">開賣前，先告訴我們你喜歡什麼</h2>
          <p className="section-lead mx-auto mb-8 text-center">
            大家有興趣的，我們會優先上架。不催促、不堆貨。
          </p>
          <Link href="/interest/" className="btn-primary">
            去登記興趣
          </Link>
        </div>
      </section>
    </>
  );
}
