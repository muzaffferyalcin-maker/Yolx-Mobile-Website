"use client";

import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Products() {
  useEffect(() => {
    console.log("Products");
  }, []);

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 ">
        <div className="flex flex-col items-center justify-center pt-20 px-4 md:px-20 ">
          <h1 className="text-[40px] font-bold text-white mb-4 ">
            Ürünler & Servisler
          </h1>
          <p className="text-gray-300 text-center max-w-2xl">
            Araç takip sistemleri ve filo yönetimi çözümlerimiz ile işletmenizi
            daha verimli hale getirin
          </p>
        </div>

        <div className="flex flex-col items-center px-4 md:px-20">
          <h2 className="text-3xl font-semibold text-white mb-10">
            Mobil NVR Ürünlerimiz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            <div className="flex flex-col items-center">
              <div className="w-full flex flex-col items-center">
                <img
                  src="/mnvr-1.png"
                  alt="YOLX MNVR TS-920"
                  className="rounded-lg w-full max-w-md"
                />
                <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                  YOLX MNVR TS-610
                </h3>
              </div>

              <div className="w-full pt-5">
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Gerçek zamanlı konum takibi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Yakıt tüketim analizi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    AITM EKXVI ‘ya uygun
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    UKOME 2025 Onaylı
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Araç takip özelliği, panik butonu, wi-fi özelliği, uzaktan
                    izlenebilir
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    H265 Video sıkıştırma desteği
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    4 Kanal IP kamera bağlantısı (opsiyonel 8 -12 kanal
                    eklenebilir)
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full flex flex-col items-center">
                <img
                  src="/mnvr-2.png"
                  alt="YOLX MNVR TS-921"
                  className="rounded-lg w-full max-w-md"
                />
                <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                  YOLX MNVR TS-920
                </h3>
              </div>

              <div className="w-full pt-5">
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Gerçek zamanlı konum takibi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Yakıt tüketim analizi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    AITM EKXVI ‘ya uygun
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    UKOME 2025 Onaylı
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Araç takip özelliği, panik butonu, wi-fi özelliği, uzaktan
                    izlenebilir
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    4g Sim Kart (5g opsiyonel, 2. Sim opsiyonel)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Ekran istenirse opsiyonel eklenebilir.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center px-4 md:px-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                {/* Üst Sıra - 3 Kamera */}
                <div className="w-full  flex-col items-center md:block hidden">
                  <img
                    src="/mnvr-3.png"
                    alt="YOLX HD Dome Kamera"
                    className="rounded-lg w-full h-[300px] object-contain"
                  />
                  <h3 className="text-lg font-semibold text-white mt-4 text-center">
                    YOLX 121 IPCAM
                  </h3>
                </div>
                <div className="w-full flex flex-col items-center">
                  <img
                    src="/mnvr-4.png"
                    alt="YOLX HD Bullet Kamera"
                    className="rounded-lg w-full h-[300px] hidden sm:block object-contain"
                  />
                  <h3 className="text-lg font-semibold text-white hidden sm:block  mt-4 text-center">
                    YOLX 122 IP CAM
                  </h3>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                  <img
                    src="/mnvr-5.png"
                    alt="YOLX PTZ Kamera"
                    className="rounded-lg w-full sm:w-1/2 md:w-3/4 lg:w-full h-[300px] object-contain"
                  />
                  <h3 className="text-lg font-semibold text-white mt-4 text-center">
                    YOLX EKRAN
                  </h3>
                </div>

                {/* Alt Sıra - 2 Kamera */}
                <div className="w-full flex flex-col items-center col-span-3  justify-center gap-8">
                  <div className="grid grid-cols-2 gap-8 max-w-[800px]">
                    <div className="w-full flex flex-col items-center">
                      <img
                        src="/mnvr-6.png"
                        alt="YOLX IP Kamera"
                        className="rounded-lg w-full h-[300px] object-contain"
                      />
                      <h3 className="text-lg font-semibold text-white mt-4 text-center">
                        YOLX PANİK
                      </h3>
                    </div>

                    <div className="w-full flex flex-col items-center">
                      <img
                        src="/mnvr-7.png"
                        alt="YOLX 360° Kamera"
                        className="rounded-lg w-full h-[300px] object-contain"
                      />
                      <h3 className="text-lg font-semibold text-white mt-4 text-center">
                        YOLX 347 IP CAM
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashcam Bölümü */}

        <div className="flex flex-col items-center px-4 md:px-20">
          <h2 className="text-3xl font-semibold text-white mb-10 text-center">
            4G Araç Kameraları Ürünlerimiz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            <div className="flex flex-col items-center">
              <div className="w-full flex flex-col items-center">
                <img
                  src="/dashcam-2.png"
                  alt="YOLX MNVR TS-920"
                  className="rounded-lg w-full max-w-md h-[300px] object-contain"
                />
                <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                  YOLX POYRAZ PRO
                </h3>
              </div>

              <div className="w-full pt-5">
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Araç takip özelliği vardır
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Uzaktan izlenebilir
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    4 Kamera destekler
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    1 Kanal AHD 1080P(1290*1080) İkinci, üçüncü , dördüncü kanal
                    AHD 720P(1280*720)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    GPS + Google çift bantları, harici GPS anteni ile araç takip
                    özelliği
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    GSM BANTLARI: 4G (LTE FDD: B1/B3/B5/B8 ) LTE (TDD:
                    B34/B38/B39/B40/B41) 3G (WCDMA:B1/B5/B8) 2G (GSM:
                    900/1800MHZ)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Tek tuş panik butonu (isteğe bağlı)
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full flex flex-col items-center">
                <img
                  src="/dashcam-1.png"
                  alt="YOLX MNVR TS-921"
                  className="rounded-lg w-full max-w-md h-[300px] object-contain"
                />
                <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                  YOLX TAKSİM
                </h3>
              </div>

              <div className="w-full pt-5">
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Araç takip özelliği vardır
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Uzaktan izlenebilir
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    4 kamera desteklenir
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Taksimetre özelliği
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Nfc özelliği sayesinde sürücü tanıma
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Pos makinası entegrasyonu
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Geri görüş (Geri vites) kamerası olarak kullanılabilir
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Ortam Sesi Dinleme + Bas Konuş özelliği
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Yapay Zeka İşlevi (isteğe bağlı)
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center px-4 md:px-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                {/* Üst Sıra - 3 Kamera */}
                <div className="w-full flex flex-col items-center ">
                  <img
                    src="/dashcam-3.png"
                    alt="YOLX HD Dome Kamera"
                    className="rounded-lg w-full h-[300px] object-contain"
                  />
                  <h3 className="text-lg font-semibold text-white mt-4 text-center">
                    YOLX HD Dome Kamera
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <img
                    src="/dashcam-4.png"
                    alt="YOLX HD Bullet Kamera"
                    className="rounded-lg w-full h-[300px] object-contain"
                  />
                  <h3 className="text-lg font-semibold text-white mt-4 text-center">
                    YOLX HD Bullet Kamera
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <img
                    src="/dashcam-5.png"
                    alt="YOLX PTZ Kamera"
                    className="rounded-lg w-full h-[300px] object-contain"
                  />
                  <h3 className="text-lg font-semibold text-white mt-4 text-center">
                    YOLX PTZ Kamera
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vücut Kameraları Bölümü */}

        <div className="flex flex-col items-center px-4 md:px-20">
          <h2 className="text-3xl font-semibold text-white mb-10 text-center">
            Vücut Kameraları Ürünlerimiz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 w-full">
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                <div className="w-full flex flex-col items-center">
                  <img
                    src="/body-1.png"
                    alt="YOLX MNVR TS-920"
                    className="rounded-lg w-full max-w-md h-[300px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX B07
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <img
                    src="/body-2.png"
                    alt="YOLX MNVR TS-921"
                    className="rounded-lg w-full max-w-md h-[300px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX B07
                  </h3>
                </div>
              </div>

              <div className="w-full pt-5">
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    1440P yüksek kaliteli video kaydı
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    32 Megapixel fotoğraf çekimi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Dahili 4G ve WiFi 2.4Ghz internet hizmeti
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Dahili Gps anteni
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    IP66 sızdırmazlık sertifikası (Opsiyonel IP67)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    4400 Mah Batarya kapasitesi sayesinde 16+ saat kayıt ve
                    takip imkanı
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Opsiyonel NFC sayesinde kart okuma ve kart tanımlama
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl mx-auto">
                {/* Üst sıra - ilk 2 resim */}
                <div className="w-full flex flex-col items-center">
                  <img
                    src="/body-3.png"
                    alt="YOLX MNVR TS-921"
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX B01
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <img
                    src="/body-4.png"
                    alt="YOLX MNVR TS-922"
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX B01
                  </h3>
                </div>

                {/* Alt sıra - son 2 resim */}
                <div className="w-full flex flex-col items-center">
                  <img
                    src="/body-5.png"
                    alt="YOLX MNVR TS-923"
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX B01
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <img
                    src="/body-6.png"
                    alt="YOLX MNVR TS-924"
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX B01
                  </h3>
                </div>
              </div>

              <div className="w-full pt-5">
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    10 Saat Kayıt imkanı
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    120 Derece görüş
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    1080P Full HD Video Kaydı
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Dahili 1200 Mah batarya kapasitesi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Harici kart desteği 128 GB kadar yükseltebilme
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    100 Gram hafif tasarım
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Uzaktan izleme bulunmamaktadır.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobil DVR Bölümü */}

        <div className="flex flex-col items-center px-4 md:px-20">
          <h2 className="text-3xl font-semibold text-white mb-10">
            Mobil DVR Ürünlerimiz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 w-full">
            <div className="flex flex-col items-center">
              <div className="w-full flex flex-col items-center">
                <img
                  src="/dvr-1.png"
                  alt="YOLX MNVR TS-920"
                  className="rounded-lg w-full max-w-md  h-[300px] object-contain"
                />
                <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                  YOLX MİNİ
                </h3>
              </div>

              <div className="w-full pt-5">
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Araç takip özelliği vardır
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Uzaktan izlenebilir
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    8 kameraya kadar destekleyebilir
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Ekran istenirse opsiyonel eklenebilir.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    GPS + Google çift bantları, harici GPS anteni ile araç konum
                    takib
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Ortam Sesi Dinleme + Bas Konuş özelliği
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    9V-36 V için uygun, adaptör gerekmez
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                <div className="w-full flex flex-col items-center">
                  <img
                    src="/dvr-2.png"
                    alt="YOLX MNVR TS-920"
                    className="rounded-lg w-full max-w-md h-[300px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX 4 PLUS
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <img
                    src="/dvr-3.png"
                    alt="YOLX MNVR TS-921"
                    className="rounded-lg w-full max-w-md h-[300px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX 4 PLUS
                  </h3>
                </div>
              </div>

              <div className="w-full pt-5">
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Araç takip özelliği vardır
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Uzaktan izlenebilir
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    8 kameraya kadar destekleyebilir
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Ekran istenirse opsiyonel eklenebilir.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    GPS + Google çift bantları, harici GPS anteni ile araç konum
                    takib
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Ortam Sesi Dinleme + Bas Konuş özelliği
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    9V-36 V için uygun, adaptör gerekmez
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Basic Araç Kameraları Bölümü */}

        <div className="flex flex-col items-center px-4 md:px-20 pb-20">
          <h2 className="text-3xl font-semibold text-white mb-10 text-center">
            Basic Araç Kameraları Ürünlerimiz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            <div className="flex flex-col items-center">
              <div className="w-full flex flex-col items-center">
                <img
                  src="/basic-3.png"
                  alt="YOLX MNVR TS-920"
                  className="rounded-lg w-full max-w-md h-[300px] object-contain"
                />
                <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                  YOLX POYRAZ
                </h3>
              </div>

              <div className="w-full pt-5">
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Uzaktan izleme bulunmamaktadır
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Wifi desteği ile uygulama üzerinden konum geçmişi
                    görünebilir
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Maksimum 32GB SD kartı (dahildir)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    2 kamera desteklemektedir.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    3.0 inç ekran
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Video formatı: AVI
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Video çözünürlüğü: Ön 1080P+Arka 720P
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="  gap-8 w-full">
                <div className="w-full flex flex-col items-center">
                  <img
                    src="/basic-1.png"
                    alt="YOLX MNVR TS-920"
                    className="rounded-lg w-full max-w-md h-[300px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX 1Y
                  </h3>
                </div>
              </div>

              <div className="w-full pt-5">
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Uzaktan izleme bulunmamaktadır
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Maksimum 128 GB SD kartı (dahildir)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    2 kamera desteklemektedir.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    7.0 inç ekran
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Video formatı: AVI
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Video çözünürlüğü: Ön 1080P+Arka 720P
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Kamera ön FHD 1080P, arka AHD 720P 140° geniş açılı görünüm
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="  gap-8 w-full">
                <div className="w-full flex flex-col items-center">
                  <img
                    src="/basic-2.png"
                    alt="YOLX MNVR TS-920"
                    className="rounded-lg w-full max-w-md h-[300px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX 4Y
                  </h3>
                </div>
              </div>

              <div className="w-full pt-5">
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Uzaktan izleme bulunmamaktadır
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Maksimum 128 GB SD kartı (dahildir)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    4 kamera desteklemektedir.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    10.0 inç ekran
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    USB desteği ile ekrana telefon yansıtma özelliği (screen
                    mirroring)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Video çözünürlüğü: Ön 1080P+Arka 720P
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-[#4042f8] p-1.5 rounded-md w-6 h-6 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </span>
                    Kamera ön FHD 1080P, arka AHD 720P 140° geniş açılı görünüm
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
