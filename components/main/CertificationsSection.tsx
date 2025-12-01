"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const badges = [
  {
    title: "AİTM Uyumlu Çözümler",
    desc: "Araç üstü ekipman ve kamera sistemleri için AİTM yönetmeliğine uygun donanım ve kurulum.",
  },
  {
    title: "UKOME 2025 Şartlarını Karşılayan Ürünler",
    desc: "Toplu taşıma ve servis araçları için UKOME kararlarına uygun araç içi kamera ve kayıt çözümleri.",
  },
  {
    title: "GSR II ve Güvenlik Standartları",
    desc: "Sürücü asistan sistemleri ve güvenlik fonksiyonlarında Avrupa Birliği gereksinimlerine uyum hedeflenmektedir.",
  },
  {
    title: "CE, RoHS ve Veri Güvenliği",
    desc: "Cihazlarımızda CE / RoHS uygunluğu ve filo verilerinin güvenli saklanması için modern altyapı kullanılır.",
  },
];

export default function CertificationsSection() {
  return (
    <section className="w-full bg-[#f5f7fb] border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <motion.h2
          variants={slideInFromLeft(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-slate-900 mb-6"
        >
          Sertifikalar ve Uyum
        </motion.h2>

        <p className="text-slate-600 max-w-2xl mb-10 text-sm md:text-base">
          YOLX Mobile, araç takip ve kamera sistemlerinde yerel ve uluslararası
          standartlara uyum için teknik ve idari süreçlerini sürekli
          geliştirmektedir.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {badges.map((b, i) => (
            <motion.div
              key={b.title}
              variants={slideInFromLeft(0.3 + i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
            >
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                {b.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-600">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
