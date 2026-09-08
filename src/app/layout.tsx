import type { Metadata, Viewport } from "next";
import { Noto_Sans_TC } from "next/font/google";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-noto-sans-tc",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "晴室 — 少一點東西，多一點剛好。",
    template: "%s｜晴室",
  },
  description:
    "晴室｜家居小物、清潔用具、設計感 3C。少一點東西，多一點剛好。目前開放興趣登記。",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className={notoSansTC.variable}>
      <body className={`${notoSansTC.className} min-h-screen flex flex-col`}>
        <AnnouncementBar />
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
