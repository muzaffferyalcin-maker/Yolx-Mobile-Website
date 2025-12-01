"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
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
              İletişim
            </motion.h1>

            <p className="text-sm md:text-base text-slate-600 max-w-3xl">
              YOLX Mobile ürünleri, teknik destek ve iş ortaklıkları hakkında bilgi almak için bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </section>

        {/* Adresler + Maps */}
        <section className="px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* İstanbul Ofis */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  Genel Müdürlük (İstanbul)
                </h2>

                <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                  Yeşilköy Mah. Atatürk Cad.
                  <br />
                  EGS Business Park Blokları
                  <br />
                  No:12/86 Bakırköy / İstanbul
                </p>

                <p className="text-sm text-slate-600">
                  Tel:{" "}
                  <a href="tel:08503079919" className="text-blue-600">
                    0850 307 99 19
                  </a>
                  <br />
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/908503079919"
                    className="text-blue-600"
                  >
                    0850 307 99 19
                  </a>
                </p>
              </div>

              {/* Google Maps - İstanbul */}
              <iframe
                src="https://www.google.com/maps?q=EGS%20Business%20Park%20İstanbul&output=embed"
                width="100%"
                height="260"
                className="rounded-xl border-0"
                loading="lazy"
              ></iframe>

              {/* Rota Oluştur */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=EGS+Business+Park+Istanbul"
                target="_blank"
                className="mt-3 inline-flex justify-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
              >
                İstanbul Ofise Rota Oluştur
              </a>
            </div>

            {/* Kayseri Ofis */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  Teknopark Ofis (Kayseri)
                </h2>

                <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                  Erciyes Teknopark
                  <br />
                  Yıldırım Beyazıt Mahallesi
                  <br />
                  Aşık Veysel Bulvarı No:63V
                  <br />
                  Melikgazi / Kayseri
                </p>

                <p className="text-sm text-slate-600">
                  Tel:{" "}
                  <a href="tel:08503079919" className="text-blue-600">
                    0850 307 99 19
                  </a>
                  <br />
                  Destek:{" "}
                  <a
                    href="https://wa.me/908503079919"
                    className="text-blue-600"
                  >
                    WhatsApp Destek
                  </a>
                </p>
              </div>

              {/* Google Maps - Kayseri */}
              <iframe
                src="https://www.google.com/maps?q=Erciyes%20Teknopark%20Kayseri&output=embed"
                width="100%"
                height="260"
                className="rounded-xl border-0"
                loading="lazy"
              ></iframe>

              {/* Rota Oluştur */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Erciyes+Teknopark"
                target="_blank"
                className="mt-3 inline-flex justify-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
              >
                Kayseri Ofise Rota Oluştur
              </a>
            </div>
          </div>
        </section>

        {/* Teklif Formu */}
        <section className="px-4 md:px-8">
          <div className="max-w-6xl mx_auto">
            <ContactForm />
          </div>
        </section>

        {/* Sosyal Medya */}
        <section className="px-4 md:px-8 pb-10">
          <div className="max-w-6xl mx-auto bg-[#f5f7fb] border border-slate-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Sosyal Medya
            </h2>

            <div className="flex items-center gap-6">
              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/company/yolx-mobile/"
                target="_blank"
                className="hover:opacity-80 transition"
              >
                <Image
                  src="/linkedin.svg"
                  width={34}
                  height={34}
                  alt="LinkedIn"
                />
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/yolxmobile/"
                target="_blank"
                className="hover:opacity-80 transition"
              >
                <Image
                  src="/instagram.svg"
                  width={34}
                  height={34}
                  alt="Instagram"
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
