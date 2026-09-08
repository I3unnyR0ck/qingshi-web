import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-[clamp(4rem,10vw,7rem)] text-center">
      <div className="wrap">
        <p className="section-label text-center">404</p>
        <h1 className="section-title mb-4 text-center">找不到這一頁</h1>
        <p className="mx-auto mb-8 max-w-sm text-sm font-light tracking-wide text-charcoal-mute">
          也許連結舊了，或頁面還在籌備。回首頁看看正在想的物件吧。
        </p>
        <Link href="/" className="btn-primary">
          回首頁
        </Link>
      </div>
    </section>
  );
}
