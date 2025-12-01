"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <motion.div
          variants={slideInFromLeft(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-slate-900 text-white rounded-3xl px-6 md:px-10 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Filonuz için YOLX çözümlerini birlikte planlayalım.
            </h2>
            <p className="text-sm md:text-base text-slate-200">
              Araç takip, kamera, solar ve iş makinesi çözümlerimiz hakkında
              detaylı bilgi almak, canlı demo görmek veya fiyat teklifi
              oluşturmak için bizimle iletişime geçin.
            </p>
          </div>

          <motion.div
            variants={slideInFromRight(0.3)}
            className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 w-full sm:w-auto"
            >
              Demo / Teklif Talebi
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-400 text-sm font-semibold text-slate-100 hover:bg-slate-800 w-full sm:w-auto"
            >
              Bayilik / İş Ortağı Başvurusu
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
