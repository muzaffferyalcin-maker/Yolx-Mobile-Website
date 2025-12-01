"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import Link from "next/link";

type Product = {
  name: string;
  tag: string;
  desc: string;
  bullets: string[];
};

const cameraProducts: Product[] = [
  {
    name: "YOLX Poyraz Pro",
    tag: "AI Sürücü Kamerası (6 Kanal)",
    desc: "Gelişmiş yapay zeka sürücü analizi, 6 kameraya kadar destek ve yüksek kapasiteli kayıt sistemi.",
    bullets: [
      "2 × 512 GB hafıza kartı ile uzun süreli 1080p kayıt",
      "6 adede kadar kamera (ön, iç, yan, arka vb.)",
      "Şerit ihlali, takip mesafesi, ani fren/hızlanma uyarıları",
      "Sigara, kemer, telefon kullanımı ve dikkatsizlik algılama",
      "Panik butonu, bas-konuş ve ses kaydı fonksiyonları",
    ],
  },
  {
    name: "YOLX Poyraz",
    tag: "AI Sürücü Kamerası (5 Kanal)",
    desc: "AI destekli sürücü analizi ve çok kameralı kayıt ile filo güvenliğini artıran çözüm.",
    bullets: [
      "5 kameraya kadar destek",
      "Kemersiz sürüş, sigara, telefon ve dikkat dağınıklığı tespiti",
      "Şerit takibi ve öndeki araca yaklaşma uyarıları",
      "G-sensör ile hırsızlık ve darbe algılama",
    ],
  },
  {
    name: "YOLX 2",
    tag: "Çift Kamera Araç İçi Sistem",
    desc: "Ön + iç kamera, 4G bağlantı ve ses kaydı özellikli kompakt araç içi çözüm.",
    bullets: [
      "Tek gövdede 2 adet 1080p kamera",
      "256 GB hafıza kartı desteği",
      "4G SIM kart ile canlı izleme",
      "G-sensör ve ses kaydı desteği",
    ],
  },
  {
    name: "YOLX 2 Pro",
    tag: "Üç Kameralı Araç İçi Sistem",
    desc: "3 kanala kadar kamera desteği ve geniş hafıza imkanı sağlayan araç içi kamera çözümü.",
    bullets: [
      "3 adet 1080p kamera girişi",
      "512 GB hafıza kartı desteği",
      "4G SIM üzerinden uzaktan erişim",
      "G-sensör ve panik butonu desteği",
    ],
  },
  {
    name: "YOLX TEK",
    tag: "Tek Kameralı Araç Kamerası",
    desc: "Tek kanallı, ekonomik ve basit kurulumlu araç içi kamera çözümü.",
    bullets: [
      "1080p tek kamera kaydı",
      "128 GB hafıza kartı desteği",
      "4G bağlantı ve gece görüşü",
      "G-sensör ile olay bazlı kayıt",
    ],
  },
];

const mnvrProducts: Product[] = [
  {
    name: "YOLX MNVR TS-920",
    tag: "AİTM & UKOME 2025 Uyumlu Araç İçi Kayıt",
    desc: "Toplu taşıma ve servis araçları için çok kameralı kayıt, canlı izleme ve filo entegrasyonuna sahip MNVR sistemi.",
    bullets: [
      "4 IP kamera (opsiyonel 8–12 kanal)",
      "H.265 sıkıştırma ile yüksek verimlilik",
      "4 TB SSD + SD kart kayıt desteği",
      "Wi-Fi hotspot, GPS ve 4G bağlantı",
      "Panik butonu, bas-konuş ve ortam dinleme",
    ],
  },
  {
    name: "YOLX MNVR TS-610",
    tag: "Kompakt MNVR Çözümü",
    desc: "AİTM EKXVI ve UKOME şartlarını karşılayacak şekilde tasarlanmış kompakt araç içi kayıt cihazı.",
    bullets: [
      "4 IP kamera desteği",
      "2 TB SSD kapasitesi",
      "Panik butonu ve sensör girişleri",
      "Yakıt ve kapı sensörleri ile entegrasyon opsiyonu",
    ],
  },
  {
    name: "YOLX MDVR PRO",
    tag: "Profesyonel Çok Kanallı MDVR",
    desc: "Yüksek kanal sayısı ve yapay zeka desteği ile ağır hizmet filoları için gelişmiş araç içi kayıt sistemi.",
    bullets: [
      "8 kanal (opsiyonel 16 kanal) kamera desteği",
      "4 TB SSD + 1 TB SD kart kapasitesi",
      "AI sürücü analizi ve çoklu sensör girişleri",
      "9–36 V geniş besleme aralığı",
    ],
  },
  {
    name: "YOLX MDVR MINI",
    tag: "Kompakt MDVR Çözümü",
    desc: "4 kameraya kadar destek sunan, yapay zeka özellikli kompakt MDVR çözümü.",
    bullets: [
      "4 adet 1080p kamera girişi",
      "1 TB SD kart desteği",
      "4G SIM kart ile uzaktan erişim",
      "AI destekli sürücü analizi fonksiyonları",
    ],
  },
];

const trackingProducts: Product[] = [
  {
    name: "YOLX GP360",
    tag: "GPS Araç Takip Cihazı",
    desc: "Binek ve ticari araçlar için kompakt, ekonomik ve güçlü araç takip cihazı.",
    bullets: [
      "2G / 4G seçenekleri",
      "GPS + GLONASS + GALILEO uydu desteği",
      "Ani hızlanma / ani yavaşlama ve rölanti takibi",
      "Gerçek zamanlı konum, hız ve rota raporları",
    ],
  },
  {
    name: "YOLX Lighting",
    tag: "Çakmak Girişli Takip Cihazı",
    desc: "Araç çakmak girişine takılarak kullanılan pratik araç takip çözümü.",
    bullets: [
      "Tak-çalıştır yapı, montaj gerektirmez",
      "180 mAh dahili batarya",
      "Çoklu uydu desteği ile hassas konum",
      "Mobil uygulama ve SMS bildirimleri",
    ],
  },
  {
    name: "YOLX MotoGPS",
    tag: "Motosiklet Takip Cihazı",
    desc: "Motosikletler için çalınma ve hareket takibi odaklı GPS cihazı.",
    bullets: [
      "650 mAh batarya ile uzun bekleme süresi",
      "90 saate kadar park modu izleme",
      "Konum ve hareket alarmı",
      "Suya dayanıklı gövde yapısı",
    ],
  },
  {
    name: "YOLX TAKO",
    tag: "Takograf Uzaktan Okuma Cihazı",
    desc: "Takograf verilerini uzaktan okumak isteyen filolar için geliştirilmiş çözüm.",
    bullets: [
      "Gerçek zamanlı takograf verisi indirme",
      "RS232 / RS485 cihazlar ile uyum",
      "FMS bağlantısı ile filo sistemlerine entegrasyon",
    ],
  },
  {
    name: "YOLX CANBUS Modülü",
    tag: "CAN Veri Okuma ve Kontrol",
    desc: "Araç CAN hattından detaylı veri okuma ve bazı fonksiyonları kontrol etmeye yarayan modül.",
    bullets: [
      "J1939 protokolü üzerinden CAN okuma",
      "KM, yakıt seviyesi, kapı, immobilizer verileri",
      "Uzaktan kapı kilitleme vb. fonksiyonlar",
      "Geniş araç marka/model uyumluluğu",
    ],
  },
];

const longLifeProducts: Product[] = [
  {
    name: "YOLX Solar",
    tag: "Solar Takip Cihazı",
    desc: "Elektrik altyapısının kısıtlı olduğu alanlarda, özellikle balıkçı tekneleri ve iç deniz hatlarında uzun ömürlü takip.",
    bullets: [
      "12.000 mAh batarya ve solar panel ile yıllara yayılan kullanım",
      "Günde 1–2 rapor ile 5–10 yıla kadar izleme senaryosu",
      "IP67 koruma sınıfı dayanıklı gövde",
      "4G altyapısı ile deniz ve kara bölgelerinde veri iletimi",
    ],
  },
  {
    name: "YOLX Konteyner",
    tag: "Uzun Ömürlü Konteyner Takip",
    desc: "Konteyner ve benzeri ekipmanlar için batarya odaklı takip çözümü.",
    bullets: [
      "7.500 mAh batarya ile uzun süreli kullanım",
      "1–3 yıl arası kullanım senaryoları",
      "Hız ve hareket alarmı",
      "Type-C ile kolay şarj",
    ],
  },
  {
    name: "YOLX Menhole",
    tag: "Rögar Kapağı Sensörü",
    desc: "Altyapı hatlarının güvenliği için rögar kapaklarına takılan IoT güvenlik sensörü.",
    bullets: [
      "Kapak açılma ve eğim sensörü",
      "Su baskını algılama",
      "Yaklaşık 5 yıl pil ömrü",
      "Şebeke ve altyapı güvenliği için ideal",
    ],
  },
];

const bodycamProducts: Product[] = [
  {
    name: "YOLX B07",
    tag: "4G Destekli Vücut Kamerası",
    desc: "Güvenlik güçleri ve saha ekipleri için 4G bağlantılı, yüksek çözünürlüklü vücut kamerası.",
    bullets: [
      "1440p video ve 32 MP fotoğraf",
      "4G + WiFi bağlantısı ve GPS",
      "16 saate kadar kayıt süresi",
      "NFC opsiyonu ve telsiz benzeri bas-konuş",
    ],
  },
  {
    name: "YOLX B01",
    tag: "Kompakt Vücut Kamerası",
    desc: "Uzaktan bağlantı gerektirmeyen, lokal kayıt odaklı hafif vücut kamerası.",
    bullets: [
      "1080p video kaydı",
      "10 saate kadar çalışma süresi",
      "128 GB hafıza",
      "Hafif ve ergonomik tasarım",
    ],
  },
];

const iotProducts: Product[] = [
  {
    name: "YOLX PET",
    tag: "Hayvan Takip Cihazı",
    desc: "Evcil ve sokak hayvanlarını takip etmek, güvenlik ve bakım süreçlerini yönetmek için geliştirilmiş çözüm.",
    bullets: [
      "Coğrafi çit (güvenli alan) tanımlama",
      "Saniyelik takip ve evden uzaklaşma alarmı",
      "Bakım ve besleme kalitesi odaklı veri toplama",
    ],
  },
];

function SectionBlock({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) {
  return (
    <section className="px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          {title}
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {products.map((p, index) => (
            <motion.div
              key={p.name}
              variants={slideInFromLeft(0.2 + index * 0.05)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6"
            >
              <div className="flex-1">
                <span className="inline-flex text-[11px] font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-3">
                  {p.tag}
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">
                  {p.name}
                </h3>
                <p className="text-sm md:text-base text-slate-600 mb-4">
                  {p.desc}
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start justify-between gap-3 md:w-52">
                <p className="text-xs text-slate-500">
                  Detaylı teknik döküman ve fiyatlandırma için bizimle
                  iletişime geçebilirsiniz.
                </p>
                <div className="flex flex-col gap-2 w-full">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 w-full"
                  >
                    Teklif Al
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Products() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-16 py-16">
        {/* Başlık */}
        <section className="px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h1
              variants={slideInFromLeft(0.2)}
              initial="hidden"
              animate="visible"
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Ürünlerimiz
            </motion.h1>
            <p className="text-sm md:text-base text-slate-600 max-w-3xl">
              YOLX Mobile ürün ailesi; AI destekli sürücü kameralarından çok
              kameralı araç içi kayıt sistemlerine, araç takip cihazlarından
              solar ve vücut kameralarına kadar geniş bir yelpazede çözümler
              sunar. Aşağıda ürün gruplarımızı inceleyebilirsiniz.
            </p>
          </div>
        </section>

        <SectionBlock
          title="AI Sürücü Kameraları ve Araç İçi Kameralar"
          products={cameraProducts}
        />
        <SectionBlock
          title="Araç İçi Kayıt Sistemleri (MNVR / MDVR)"
          products={mnvrProducts}
        />
        <SectionBlock
          title="Araç Takip ve CANBUS Çözümleri"
          products={trackingProducts}
        />
        <SectionBlock
          title="Solar ve Uzun Ömürlü Takip Çözümleri"
          products={longLifeProducts}
        />
        <SectionBlock
          title="Vücut Kameraları"
          products={bodycamProducts}
        />
        <SectionBlock title="IoT ve Özel Çözümler" products={iotProducts} />
      </div>
    </main>
  );
}
