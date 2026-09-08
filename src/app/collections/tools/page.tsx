import type { Metadata } from "next";
import CollectionPage from "@/components/CollectionPage";

export const metadata: Metadata = {
  title: "小工具",
  description: "晴室｜小工具選物。木柄刮刀、霧面夾組、簡約掛架——居家小工具好好握、好好放。",
};

export default function ToolsCollectionPage() {
  return <CollectionPage category="tools" />;
}
