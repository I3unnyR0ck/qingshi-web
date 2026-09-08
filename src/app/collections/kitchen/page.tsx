import type { Metadata } from "next";
import CollectionPage from "@/components/CollectionPage";

export const metadata: Metadata = {
  title: "廚房",
  description: "晴室｜廚房選物。霧面陶瓷飯碗、木柄餐具、玻璃水瓶——吃飯也可以安靜一點。",
};

export default function KitchenCollectionPage() {
  return <CollectionPage category="kitchen" />;
}
