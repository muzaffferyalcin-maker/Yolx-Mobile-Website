import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "YOLX Ürünler | Araç Kamerası, Araç Takip, Solar ve IoT Çözümleri",
  description:
    "YOLX araç içi kamera sistemleri, AİTM EKXVI uyumlu MNVR kayıt cihazları, araç takip cihazları, solar takip çözümleri ve IoT ürünleriyle filo güvenliğini ve verimliliği artırır. Detaylı ürün kataloğunu inceleyin.",
};

export default function ProductsPage() {
  return <ProductsClient />;
}
