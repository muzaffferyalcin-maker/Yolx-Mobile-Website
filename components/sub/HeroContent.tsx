"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-between gap-10"
    >
      {/* Sol taraf: metin */}
      <motion.div
        variants={slideInFromLeft(0.3)}
        className="flex flex-col gap-6 max-w-xl"
      >
        <motion.div
          variants={slideInFromTop}
          className="inline-flex items-center text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1"
        >
          <SparklesIcon className="w-4 h-4 mr-2" />
          Araç Takip, Kamera ve Solar Çözümler Tek Platformda
        </motion.div>

        <motion.h1
  variants={slideInFromLeft(0.5)}
  className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight"
>
  Araç Takip, Yapay Zekalı Sürücü Kamerası ve Filo Yönetimi Çözümleri
</motion.h1>


        <motion.p
          variants={slideInFromLeft(0.6)}
          className="text-base md:text-lg text-slate-600"
        >
          AİTM ve UKOME 2025 uyumlu araç takip cihazları, yapay zeka destekli
          sürücü kameraları, iş makinesi ve solar çözümler ile tüm varlıklarınızı
          tek ekrandan izleyin, kayıt altına alın ve raporlayın.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(0.7)}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
          >
            Teklif Al
          </a>
          <a
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-300 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50"
          >
            Ürünleri İncele
          </a>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="flex flex-wrap gap-4 text-xs text-slate-500"
        >
          <span>✓ Araç Takip & Filo Yönetimi</span>
          <span>✓ AI Destekli Sürücü Kamerası</span>
          <span>✓ Solar & Deniz Çözümleri</span>
          <span>✓ İş Makinesi ve Özel Projeler</span>
        </motion.div>
      </motion.div>

      {/* Sağ taraf: görsel */}
      <motion.div
        variants={slideInFromRight(0.5)}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="relative w-full max-w-md">
          <Image
            src="/SpaceWebsite.png"
            alt="YOLX Filo Yönetim Ekranı"
            width={650}
            height={650}
            className="rounded-3xl shadow-xl border border-slate-200"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
