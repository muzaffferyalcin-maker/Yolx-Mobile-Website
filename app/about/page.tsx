"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

export default function About() {
  return (
    <main className="w-full h-full">
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
              Hakkımızda
            </motion.h1>
            <p className="text-sm md:text-base text-slate-600 max-w-3xl">
              YOLX Mobile, araç takip, kamera sistemleri, yapay zeka sürücü
              analiz teknolojileri ve IoT çözümleri alanında faaliyet gösteren
              yenilikçi bir teknoloji şirketidir. Türkiye’nin dört bir yanında
              binlerce araç tarafından aktif olarak kullanılan sistemlerimiz;
              filo güvenliği, operasyonel verimlilik ve sürüş güvenliğini
              artırmak amacıyla geliştirilmiştir.
            </p>
          </div>
        </section>

        {/* Biz Kimiz & Ne Sunuyoruz */}
        <section className="px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Biz Kimiz?
              </h2>
              <p className="text-sm md:text-base text-slate-600 mb-3">
                Kurulduğumuz günden bu yana hedefimiz, filoların daha güvenli,
                ölçülebilir ve yönetilebilir hale gelmesini sağlayan
                bütünleşik çözümler sunmaktır. YOLX ekibi; Ar-Ge
                mühendislerinden yazılım geliştiricilere, sahada görev alan
                teknik ekiplerden çözüm ortaklarına kadar geniş bir yapıdan
                oluşur.
              </p>
              <p className="text-sm md:text-base text-slate-600">
                YOLX platformu; donanım, SIM/hat yönetimi, bulut altyapısı ve
                web/mobil yazılım tarafını tek çatı altında sunarak,
                kullanıcıların tek ekrandan tüm varlıklarını izleyebilmesini
                sağlar.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Ne Sunuyoruz?
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-600">
                <li>
                  <span className="font-semibold">
                    AI Destekli Sürücü Kameraları:
                  </span>{" "}
                  Sürücü dikkat dağınıklığı, telefon kullanımı, emniyet kemeri,
                  şerit ihlali, öndeki araca yaklaşma gibi durumların yapay zeka
                  ile analizi.
                </li>
                <li>
                  <span className="font-semibold">
                    Araç İçi Kayıt Sistemleri (MNVR / MDVR):
                  </span>{" "}
                  AİTM EKXVI ve UKOME 2025 uyumlu cihazlarla çok kameralı kayıt,
                  canlı izleme ve panik butonu entegrasyonu.
                </li>
                <li>
                  <span className="font-semibold">Araç Takip Sistemleri:</span>{" "}
                  GPS/GNSS tabanlı hassas konum izleme, rota/hız/ihlal
                  raporları, CANBUS veri okuma ve yakıt takibi.
                </li>
                <li>
                  <span className="font-semibold">
                    IoT & Uzun Ömürlü Çözümler:
                  </span>{" "}
                  Solar takip cihazları, menhole kapak sensörleri, konteyner
                  ve ekipman takip cihazları, hayvan takip çözümleri.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Neden YOLX Mobile? */}
        <section className="px-4 md:px-8">
          <div className="max-w-6xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
              Neden YOLX Mobile?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-2">
                  Gelişmiş Teknoloji
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Ürünlerimiz; 4G altyapısı, çoklu kamera desteği, yüksek
                  kapasiteli depolama, yapay zeka algılayıcıları ve güçlü
                  sensör entegrasyonları ile çalışır.
                </p>

                <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-2">
                  Filo Odaklı Yönetim Paneli
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  k.yolxmobile.com üzerinden araçlarınızı, kameralarınızı ve
                  sürücü davranış analizlerinizi tek bir ekrandan
                  yönetebilirsiniz.
                </p>
              </div>

              <div>
                <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-2">
                  Tam Uyumluluk
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Ürünlerimiz AİTM EKXVI, UKOME 2025 gereksinimleri, CE, RoHS
                  ve ilgili uluslararası standartlara uygun olarak
                  konumlandırılmaktadır.
                </p>

                <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-2">
                  Servis ve Destek
                </h3>
                <p className="text-sm text-slate-600">
                  Türkiye genelinde geniş bir servis ağı ve saha ekibi ile
                  müşterilerimize kurulum, eğitim ve satış sonrası destek
                  sunuyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Misyon, Vizyon, Değerler */}
        <section className="px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">
                Misyonumuz
              </h2>
              <p className="text-sm md:text-base text-slate-600">
                Geliştirdiğimiz teknolojilerle filo güvenliğini artırmak,
                sürücü kaynaklı kazaları azaltmak ve işletmelerin operasyonel
                verimliliğini yükseltmek.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">
                Vizyonumuz
              </h2>
              <p className="text-sm md:text-base text-slate-600">
                Türkiye’de geliştirilen filo güvenlik teknolojilerini dünya
                çapında kullanılabilir hale getirmek ve sektörün referans
                markalarından biri olmak.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">
                Değerlerimiz
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-slate-600">
                <li>Güvenilirlik</li>
                <li>İnovasyon</li>
                <li>Müşteri memnuniyeti</li>
                <li>Şeffaflık</li>
                <li>Sürekli gelişim</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ekibimiz */}
        <section className="px-4 md:px-8 pb-8">
          <div className="max-w-6xl mx-auto bg-[#f5f7fb] border border-slate-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
              Ekibimiz
            </h2>
            <p className="text-sm md:text-base text-slate-600">
              Ar-Ge mühendisleri, yazılım geliştiriciler, sahada görev alan
              teknik ekipler ve Türkiye genelinde faaliyet gösteren çözüm
              ortaklarımız ile her gün yüzlerce aracı takip eden, kaydeden ve
              analiz eden teknolojiler geliştiriyoruz. YOLX Mobile, filo
              güvenliği ve verimliliği konusunda uzun vadeli iş ortaklıkları
              kurmayı hedefler.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
