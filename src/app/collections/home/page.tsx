import type { Metadata } from "next";
import CollectionPage from "@/components/CollectionPage";

export const metadata: Metadata = {
  title: "小家居",
  description: "晴室｜小家居選物。木、霧面、陶瓷——把日常零碎收成安靜的一小塊。",
};

export default function HomeCollectionPage() {
  return <CollectionPage category="home" />;
}
