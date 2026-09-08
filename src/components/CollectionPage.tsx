import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import {
  CATEGORIES,
  getProductsByCategory,
  type CategoryId,
} from "@/data/products";

export default function CollectionPage({ category }: { category: CategoryId }) {
  const meta = CATEGORIES[category];
  const list = getProductsByCategory(category);
  const count = list.length;

  return (
    <section className="py-[clamp(3rem,7vw,5rem)]">
      <div className="wrap max-w-full overflow-x-hidden">
        <nav className="mb-8 text-xs tracking-wide text-charcoal-mute">
          <Link href="/" className="hover:text-wood-deep">
            首頁
          </Link>
          <span className="mx-2 text-mist">/</span>
          <span className="text-charcoal-soft">{meta.label}</span>
        </nav>

        <div className="mb-10 max-w-2xl">
          <p className="section-label">COLLECTION</p>
          <h1 className="section-title">{meta.label}</h1>
          <p className="mb-4 text-[0.9375rem] font-light leading-[1.9] tracking-wide text-charcoal-soft">
            {meta.lead}
          </p>
          <p className="mb-5 text-sm font-light leading-[1.85] tracking-wide text-charcoal-mute">
            {meta.intro}
          </p>
          <p className="text-[0.6875rem] font-medium tracking-wider text-wood">
            目前 {count} 件・還在蒐集興趣
          </p>
        </div>

        <div className="mb-9 flex flex-wrap gap-[0.55rem]">
          {(
            Object.values(CATEGORIES) as Array<{
              id: CategoryId;
              label: string;
              path: string;
            }>
          ).map((cat) => (
            <Link
              key={cat.id}
              href={cat.path}
              className={`rounded-full border px-[1.05rem] py-[0.45rem] text-xs tracking-wide transition-all duration-200 ease-qing ${
                cat.id === category
                  ? "border-charcoal bg-charcoal text-paper"
                  : "border-mist text-charcoal-soft hover:border-wood-soft hover:text-charcoal"
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        {list.length === 0 ? (
          <p className="py-8 text-center text-sm tracking-wide text-charcoal-mute">
            這個分類暫時還沒有物件。
          </p>
        ) : (
          <div className="grid max-w-full grid-cols-1 gap-6 min-[560px]:grid-cols-2 min-[560px]:gap-7 min-[900px]:grid-cols-3 min-[900px]:gap-8">
            {list.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}

        <div className="mt-14 rounded-qing border border-mist-soft bg-paper-deep px-6 py-10 text-center sm:px-10">
          <p className="section-label text-center">INTEREST</p>
          <h2 className="mb-3 text-[clamp(1.125rem,2.5vw,1.375rem)] font-normal tracking-wider">
            對{meta.label}有興趣嗎？
          </h2>
          <p className="mx-auto mb-7 max-w-md text-sm font-light leading-[1.85] tracking-wide text-charcoal-mute">
            開賣前先登記就好。大家比較想要的，我們會優先上架——不催促、不堆貨。
          </p>
          <Link href="/interest/" className="btn-primary">
            去登記興趣
          </Link>
        </div>
      </div>
    </section>
  );
}
