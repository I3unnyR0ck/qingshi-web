import type { Metadata } from "next";
import CollectionPage from "@/components/CollectionPage";

export const metadata: Metadata = {
  title: "燈具",
  description: "晴室｜燈具選物。霧面桌燈、紙布小夜燈、木座氣氛燈——光軟一點、慢一點。",
};

export default function LightsCollectionPage() {
  return <CollectionPage category="lights" />;
}
