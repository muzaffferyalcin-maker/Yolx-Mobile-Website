"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "YOLX Poyraz Pro",
    tag: "AI Sürücü Kamerası",
    short:
      "6 kameraya kadar destekleyen, gelişmiş yapay zeka sürücü analizi ve yüksek kapasiteli kayıt sistemi.",
    bullets: [
      "2 × 512 GB hafıza kartı ile uzun süreli 1080p kayıt",
      "6 adede kadar kamera bağlantısı (ön, iç, yan, arka vb.)",
      "Şerit ihlali, öndeki araca yaklaşma, ani fren/hızlanma uyarıları",
      "Sürücü davranış analizi: sigara, kemer, telefon, dikkatsizlik algılama",
      "Panik butonu, bas-konuş ve ses kaydı fonksiyonları",
    ],
  },
  {
    name: "YOLX TS-920 MNVR",
    tag: "Araç İçi Kayıt & Canlı İzleme",
    short:
      "Toplu taşıma ve servis araçları için AİTM EKXVI ve UKOME 2025 şartlarını karşılayan çok kameralı kayıt sistemi.",
    bullets: [
      "4 IP kamera (opsiyonel 8–12 kanal) ve H.265 sıkıştırma",
      "4 TB SSD + SD kart desteği ile uzun süreli kayıt",
      "Canlı izleme, geri izleme ve olay bazlı kayıt",
      "Wi-Fi hotspot, GPS takip ve 4G bağlantı desteği",
      "Panik butonu, bas-konuş ve ortam dinleme özellikleri",
    ],
  },
  {
    name: "YOLX GP360",
    tag: "GPS Araç Takip Cihazı",
    short:
      "Binek ve ticari araçlar için kompakt, ekonomik ve güçlü GPS araç takip çözümü.",
    bullets: [
      "2G / 4G opsiyonlu haberleşme",
      "GPS + GLONASS + GALILEO uydu desteği ile hassas konum",
      "Ani hızlanma, ani yavaşlama ve rölanti takibi",
      "Gerçek zamanlı konum, hız ve geçmiş rota raporları",
      "Mobil uygulama ve web paneli ile uzaktan yönetim",
    ],
  },
  {
    name: "YOLX Solar",
    tag: "Solar Takip Cihazı",
    short:
      "Elektrik altyapısının olmadığı sahalarda, özellikle deniz ve kıyı uygulamalarında uzun ömürlü takip.",
    bullets: [
      "12.000 mAh batarya ve solar panel ile yıllara yayılan kullanım",
      "Günde 1–2 rapor ile 5–10 yıla kadar izleme senaryosu",
      "IP67 koruma sınıfı dayanıklı gövde",
      "4G altyapısı ile deniz ve kara bölgelerinde veri iletimi",
      "Balıkçı tekneleri ve iç deniz hatlarında yoğun kullanım için tasarlanmış yapı",
    ],
  },
];

export default function ProductsSection() {
  return (
    <section className="w-full bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        {/* Başlık satırı */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">
          <motion.div
            variants={slideInFromLeft(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              AI Destekli Araç Kameraları, Araç Takip Cihazları ve Filo Yönetimi Ürünleri
            </h2>
            <p className="text-sm md:text-base text-slate-600">
              YOLX Mobile; AI sürücü kameraları, AİTM ve UKOME 2025 uyumlu
              MNVR/MDVR araç içi kayıt sistemleri, kompakt GPS araç takip cihazları
              ve solar GPS takip çözümleri ile filonuzun tüm ihtiyaçlarını tek marka
              altında toplar.
            </p>
          </motion.div>

          <motion.div
            variants={slideInFromRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-3 text-xs text-slate-500"
          >
            <div className="flex -space-x-2">
              <Image
                src="/yolx-logo.png"
                alt="YOLX"
                width={32}
                height={32}
                className="rounded-full border border-white"
              />
              <Image
                src="/yolx-logo.png"
                alt="YOLX"
                width={32}
                height={32}
                className="rounded-full border border-white opacity-70"
              />
            </div>
            <span>Türkiye genelinde farklı filolarda aktif kullanım.</span>
          </motion.div>
        </div>

        {/* Ürün kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              variants={slideInFromLeft(0.3 + i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#f8fafc] rounded-2xl border border-slate-200 p-6 md:p-7 flex flex-col gap-4"
            >
              <div>
                <span className="inline-flex w-fit text-[11px] font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-3">
                  {p.tag}
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">
                  {p.name}
                </h3>
                <p className="text-sm text-slate-600">{p.short}</p>
              </div>

              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm text-slate-600">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-2">
                <Link
                  href="/products"
                  className="text-xs md:text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Tüm teknik detayları gör
                </Link>
                <Link
                  href="/contact"
                  className="text-[11px] md:text-xs font-semibold px-3 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800"
                >
                  Teklif Al
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
