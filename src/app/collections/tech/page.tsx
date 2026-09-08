import type { Metadata } from "next";
import CollectionPage from "@/components/CollectionPage";

export const metadata: Metadata = {
  title: "3C",
  description: "晴室｜設計感 3C。線材、支架與桌墊——桌面呼吸，節奏更穩。",
};

export default function TechCollectionPage() {
  return <CollectionPage category="tech" />;
}
