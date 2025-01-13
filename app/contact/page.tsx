"use client";
import { Mail, Radar, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col items-center justify-center pt-20 px-4 md:px-20">
          <h1 className="text-[40px] font-bold text-white mb-4 ">İletişim</h1>
          <p className="text-gray-300 text-center max-w-2xl">
            Bize aşağıdaki iletişim kanallarından ulaşabilir ve profesyonel
            hizmetlerimizden sizlerde yararlanabilirsiniz.
          </p>
        </div>

        {/* İletişim Kanalları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-20  md:px-20">
          {/* Sosyal Medya */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-800/50">
            <Radar className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2 pb-10">
              Sosyal Medya
            </h3>
            <p className="text-gray-300 pb-10">
              Instagram:
              <a
                href="https://www.instagram.com/yolxmobile/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                @yolxmobile
              </a>
            </p>
            <p className="text-gray-300">
              Linkedin:{" "}
              <a
                href="https://www.linkedin.com/company/yolx-mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                yolxmobile
              </a>
            </p>
          </div>

          {/* Telefon */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-800/50">
            <Phone className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2 pb-10">
              WhatsApp Destek Hattı
            </h3>
            <p className="text-gray-300">0850 307 99 19</p>
          </div>

          {/* Adres */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-800/50">
            <MapPin className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Adres</h3>
            <p className="text-gray-300 pb-5">
              Genel Müdürlük -Yeşilköy Mah. Atatürk Cad. EGS Business Park
              Blokları No:12/86 Bakırköy / İSTANBUL
            </p>
            <p className="text-gray-300 pb-5">
              İstanbul Teknik Servis ve Depo Anadolu Yakası: Mimarsinan
              Mahallesi Mimarsinan Cad. No:7 /11 Çekmeköy İstanbul
            </p>
            <p className="text-gray-300">
              İç Anadolu Ofis: Mevlana Mah. Mehmet Timuçin Cad. No: 30 Talas /
              KAYSERİ
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
