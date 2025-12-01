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
