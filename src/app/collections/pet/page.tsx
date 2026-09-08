import type { Metadata } from "next";
import CollectionPage from "@/components/CollectionPage";

export const metadata: Metadata = {
  title: "寵物",
  description: "晴室｜寵物選物。霧面陶瓷、亞麻、簡約收納——貓狗用品也可以安靜一點。",
};

export default function PetCollectionPage() {
  return <CollectionPage category="pet" />;
}
