import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import ProductIcon from "@/components/ProductIcon";
import {
  CATEGORIES,
  getAllSlugs,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "找不到商品" };
  return {
    title: product.name,
    description: product.why,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const collection = CATEGORIES[product.category];
  const related = getRelatedProducts(product, 3);

  return (
    <section className="py-[clamp(3rem,7vw,5rem)]">
      <div className="wrap max-w-full overflow-x-hidden">
        <nav className="mb-8 text-xs tracking-wide text-charcoal-mute">
          <Link href="/" className="hover:text-wood-deep">
            首頁
          </Link>
          <span className="mx-2 text-mist">/</span>
          <Link href={collection.path} className="hover:text-wood-deep">
            {collection.label}
          </Link>
          <span className="mx-2 text-mist">/</span>
          <span className="text-charcoal-soft">{product.shortName}</span>
        </nav>

        {/* Hero */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14 md:items-start">
          <div className="relative overflow-hidden rounded-qing border border-mist-soft bg-cream">
            <ProductIcon
              slug={product.slug}
              className="min-h-[280px] md:min-h-[400px]"
            />
            <span className="absolute top-4 left-4 rounded-full border border-wood-soft bg-paper-deep/95 px-3 py-1 text-[0.625rem] tracking-wide text-wood-deep backdrop-blur-[4px]">
              興趣蒐集中
            </span>
          </div>

          <div className="min-w-0">
            <p className="mb-3 text-[0.6875rem] font-medium tracking-widest text-wood uppercase">
              {product.categoryLabel}
            </p>
            <h1 className="mb-4 text-[clamp(1.375rem,3vw,1.75rem)] font-normal tracking-wider leading-snug">
              {product.name}
            </h1>

            <span className="mb-5 inline-block rounded-full border border-wood-soft bg-paper-deep px-3 py-[0.35rem] text-[0.6875rem] tracking-wide text-wood-deep">
              還在蒐集興趣・尚未販售
            </span>

            <p className="mb-8 text-[0.9375rem] font-light leading-[1.9] tracking-wide text-charcoal-soft">
              {product.why}
            </p>

            {/* CTA early for mobile */}
            <div className="mb-2 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/interest/" className="btn-primary text-center">
                登記興趣
              </Link>
              <Link
                href={collection.path}
                className="text-center text-[0.8125rem] tracking-wide text-wood-deep hover:text-charcoal"
              >
                ← 回到{collection.label}
              </Link>
            </div>
          </div>
        </div>

        {/* Detail sections */}
        <div className="mt-14 grid grid-cols-1 gap-0 border-t border-mist-soft md:mt-16">
          <DetailBlock title="為什麼放進來">
            <p className="mb-3 text-[0.9375rem] font-light leading-[1.9] tracking-wide text-charcoal-soft">
              {product.why}
            </p>
            <p className="text-sm font-light leading-[1.85] tracking-wide text-charcoal-mute">
              {product.description}
            </p>
          </DetailBlock>

          <DetailBlock title="材質與細節">
            <p className="text-sm font-light leading-[1.85] tracking-wide text-charcoal-mute">
              {product.materials}
            </p>
            <p className="mt-3 text-xs font-light leading-relaxed tracking-wide text-charcoal-mute">
              <span className="text-charcoal-soft">保養／注意　</span>
              {product.care}
            </p>
          </DetailBlock>

          <DetailBlock title="使用場景">
            <p className="text-sm font-light leading-[1.85] tracking-wide text-charcoal-mute">
              {product.scenes}
            </p>
          </DetailBlock>

          <DetailBlock title="怎麼擺比較搭" last>
            <p className="text-sm font-light leading-[1.85] tracking-wide text-charcoal-mute">
              {product.styleNote}
            </p>
          </DetailBlock>
        </div>

        {/* CTA block */}
        <div className="mt-12 rounded-qing border border-mist-soft bg-paper-deep px-6 py-10 text-center sm:px-10">
          <p className="section-label text-center">INTEREST</p>
          <h2 className="mb-3 text-[clamp(1.125rem,2.5vw,1.375rem)] font-normal tracking-wider">
            這件還在蒐集興趣
          </h2>
          <p className="mx-auto mb-7 max-w-md text-sm font-light leading-[1.85] tracking-wide text-charcoal-mute">
            開賣前，先告訴我們你喜不喜歡。大家比較想要的，我們會優先上架——不催促、不堆貨。
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/interest/" className="btn-primary">
              登記興趣
            </Link>
            <Link
              href={collection.path}
              className="text-[0.8125rem] tracking-wide text-wood-deep border-b border-transparent pb-[0.15rem] hover:border-mist hover:text-charcoal"
            >
              回到{collection.label}分類
            </Link>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-14 md:mt-16">
            <div className="mb-8">
              <p className="section-label">SAME COLLECTION</p>
              <h2 className="section-title">同分類還有這些</h2>
              <p className="section-lead">
                同樣是{collection.label}，也還在蒐集興趣。
              </p>
            </div>
            <div className="grid max-w-full grid-cols-1 gap-6 min-[560px]:grid-cols-2 min-[900px]:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function DetailBlock({
  title,
  children,
  last = false,
}: {
  title: string;
  children: ReactNode;
  last?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-1 gap-3 py-8 md:grid-cols-[10rem_1fr] md:gap-10 md:py-9 ${
        last ? "" : "border-b border-mist-soft"
      }`}
    >
      <h2 className="text-xs font-medium tracking-wider text-charcoal md:pt-0.5">
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
