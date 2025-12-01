import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YOLX Mobile | Araç Takip ve Filo Yönetimi",
  description:
    "YOLX Mobile araç takip, kamera ve filo yönetimi çözümleri. AİTM ve UKOME 2025 uyumlu ürünler.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body
        className={`${inter.className} bg-[#f5f7fb] text-[#111827] overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        <main className="pt-[72px] min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
