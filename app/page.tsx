import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YOLX Mobile | Araç Takip, AI Araç Kamerası ve Filo Yönetim Sistemi",
  description:
    "YOLX Mobile; araç takip sistemi, AİTM EKXVI uyumlu araç içi kamera, yapay zekalı sürücü analiz sistemi ve filo yönetim yazılımı sunar. UKOME 2025 uyumlu çözümlerle belediyeler, lojistik ve kurumsal filolar için güvenli sürüş sağlar.",
};

import Hero from "@/components/main/Hero";
import SolutionsSection from "@/components/main/SolutionsSection";
import ProductsSection from "@/components/main/ProductsSection";
import CertificationsSection from "@/components/main/CertificationsSection";
import CTASection from "@/components/main/CTASection";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <SolutionsSection />
        <ProductsSection />
        <CertificationsSection />
        <CTASection />
      </div>
    </main>
  );
}
