"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const solutions = [
  {
    title: "Lojistik & Filo Yönetimi",
    desc: "Tırlar, kamyonlar ve dağıtım filoları için gerçek zamanlı konum, canlı kamera ve sürücü davranış analizi.",
  },
  {
    title: "Belediye & Kamu Araçları",
    desc: "Çöp kamyonları, itfaiye, yol süpürme ve ambulans araçları için AİTM ve UKOME 2025 uyumlu takip ve kamera çözümleri.",
  },
  {
    title: "İş Makineleri & Şantiye",
    desc: "Ekskavatör, forklift, vinç gibi iş makineleri için çalışma süresi, verimlilik ve güvenlik takibi.",
  },
  {
    title: "Solar & Deniz Takip",
    desc: "Balıkçı tekneleri ve iç deniz hatları için uzun ömürlü solar takip cihazları ile 10 yıla kadar izleme.",
  },
];

export default function SolutionsSection() {
  return (
    <section
      id="cozumler"
      className="w-full bg-[#f5f7fb] border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <motion.h2
          variants={slideInFromLeft(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-slate-900 mb-6"
        >
          Çözümlerimiz
        </motion.h2>

        <p className="text-slate-600 max-w-2xl mb-10 text-sm md:text-base">
          YOLX Mobile; lojistikten belediyelere, iş makinelerinden deniz
          taşımacılığına kadar birçok sektöre özel takip ve kamera çözümleri
          sunar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              variants={slideInFromLeft(0.3 + i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
