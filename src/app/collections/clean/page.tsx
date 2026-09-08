import type { Metadata } from "next";
import CollectionPage from "@/components/CollectionPage";

export const metadata: Metadata = {
  title: "清潔",
  description: "晴室｜清潔選物。清潔用具也值得好看一點、好抓一點。",
};

export default function CleanCollectionPage() {
  return <CollectionPage category="clean" />;
}
