import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yolxmobile.com"),

  title: {
    default: "YOLX Mobile | Araç Takip ve Filo Yönetimi",
    template: "%s | YOLX Mobile",
  },

  description:
    "YOLX Mobile; araç takip, yapay zekalı sürücü kamera sistemleri, MNVR/MDVR çözümleri ve filo yönetim yazılımları geliştiren teknoloji şirketidir. AİTM ve UKOME 2025 uyumlu ürünler.",

  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.yolxmobile.com",
    siteName: "YOLX Mobile",
    title: "YOLX Mobile | Araç Takip, AI Kamera ve Filo Yönetimi",
    description:
      "Araç takip cihazları, yapay zekalı sürücü kameraları, MNVR/MDVR kayıt sistemleri ve filo yönetim çözümleri. AİTM ve UKOME 2025 uyumlu.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YOLX Mobile",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "YOLX Mobile | Araç Takip ve Kamera Sistemleri",
    description:
      "Yapay zekalı sürücü kamera sistemleri, araç takip cihazları ve filo yönetim çözümleri.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "YOLX Mobile",
            url: "https://www.yolxmobile.com",
            logo: "https://www.yolxmobile.com/yolx-logo.png",
            sameAs: [
              "https://www.linkedin.com/company/yolx-mobile/",
              "https://www.instagram.com/yolxmobile/",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+908503079919",
              contactType: "customer service",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Yeşilköy Mah. Atatürk Cad. EGS Business Park No:12/86",
              addressLocality: "Bakırköy",
              addressRegion: "İstanbul",
              postalCode: "34149",
              addressCountry: "TR",
            },
          }),
        }}
      />

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
