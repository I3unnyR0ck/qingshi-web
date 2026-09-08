import Link from "next/link";
import type { Product } from "@/data/products";
import ProductIcon from "./ProductIcon";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}/`}
      className="group block max-w-full bg-cream border border-mist-soft rounded-qing overflow-hidden transition-all duration-300 ease-qing hover:border-mist hover:-translate-y-[3px] hover:shadow-[0_10px_28px_rgba(58,54,50,0.05)]"
    >
      <div className="relative">
        <ProductIcon slug={product.slug} />
        <span className="absolute top-3 left-3 text-[0.625rem] tracking-wide text-charcoal-soft bg-cream/90 border border-mist-soft px-[0.55rem] py-[0.28rem] rounded-full backdrop-blur-[4px]">
          {product.categoryLabel}
        </span>
      </div>
      <div className="px-[1.2rem] pt-[1.2rem] pb-[1.45rem]">
        <h3 className="text-[0.9rem] font-medium tracking-wide mb-[0.45rem] leading-snug text-charcoal">
          {product.name}
        </h3>
        <p className="text-xs font-light text-charcoal-mute tracking-wide leading-relaxed">
          {product.why}
        </p>
      </div>
    </Link>
  );
}
