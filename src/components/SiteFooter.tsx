import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-mist-soft pt-[3.75rem] pb-10">
      <div className="wrap">
        <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <div className="mb-[0.85rem] flex items-center gap-2.5">
              <Image
                src="/brand/logo-circle-nav.png"
                alt="晴室"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
              />
              <p className="text-xs font-medium tracking-wider text-charcoal">
                晴室
              </p>
            </div>
            <p className="text-[0.8125rem] font-light leading-[1.85] tracking-wide text-charcoal-mute">
              少一點東西，多一點剛好。
              <br />
              小家居、廚房、寵物……慢慢挑。
            </p>
          </div>
          <div>
            <p className="mb-[0.85rem] text-xs font-medium tracking-wider text-charcoal">
              選物方向
            </p>
            <ul className="list-none space-y-1">
              <li>
                <Link
                  href="/collections/home/"
                  className="text-[0.8125rem] font-light tracking-wide text-charcoal-mute hover:text-wood-deep"
                >
                  小家居
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/tools/"
                  className="text-[0.8125rem] font-light tracking-wide text-charcoal-mute hover:text-wood-deep"
                >
                  小工具
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/kitchen/"
                  className="text-[0.8125rem] font-light tracking-wide text-charcoal-mute hover:text-wood-deep"
                >
                  廚房
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/clean/"
                  className="text-[0.8125rem] font-light tracking-wide text-charcoal-mute hover:text-wood-deep"
                >
                  清潔
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/tech/"
                  className="text-[0.8125rem] font-light tracking-wide text-charcoal-mute hover:text-wood-deep"
                >
                  設計 3C
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/pet/"
                  className="text-[0.8125rem] font-light tracking-wide text-charcoal-mute hover:text-wood-deep"
                >
                  寵物
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-[0.85rem] text-xs font-medium tracking-wider text-charcoal">
              聯絡
            </p>
            <p>
              <a
                href="https://instagram.com/qingshi.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.8125rem] font-light tracking-wide text-charcoal-mute hover:text-wood-deep"
              >
                IG @qingshi.studio
              </a>
            </p>
            <p className="mt-[0.35rem] text-[0.8125rem] font-light tracking-wide text-charcoal-mute">
              目前開放興趣登記
            </p>
            <p className="mt-2">
              <Link
                href="/stores/"
                className="text-[0.8125rem] font-light tracking-wide text-charcoal-mute hover:text-wood-deep"
              >
                實體門市
              </Link>
            </p>
          </div>
        </div>
        <p className="mb-5 border-t border-mist-soft pt-8 text-center text-[0.8125rem] font-light leading-[1.9] tracking-wide text-charcoal-mute">
          不求什麼都有，只求跟你的日常合拍。
        </p>
        <p className="text-center text-[0.6875rem] tracking-wide text-mist">
          © 晴室 QINGSHI
        </p>
      </div>
    </footer>
  );
}
