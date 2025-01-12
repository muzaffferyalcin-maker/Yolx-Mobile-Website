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
        <div className="flex flex-col items-center justify-center pt-20 ">
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
                  YOLX MNVR TS-921
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
                    YOLX HD Dome Kamera
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <img
                    src="/mnvr-4.png"
                    alt="YOLX HD Bullet Kamera"
                    className="rounded-lg w-full h-[300px] object-contain"
                  />
                  <h3 className="text-lg font-semibold text-white mt-4 text-center">
                    YOLX HD Bullet Kamera
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <img
                    src="/mnvr-5.png"
                    alt="YOLX PTZ Kamera"
                    className="rounded-lg w-full h-[300px] object-contain"
                  />
                  <h3 className="text-lg font-semibold text-white mt-4 text-center">
                    YOLX PTZ Kamera
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
                        YOLX IP Kamera
                      </h3>
                    </div>

                    <div className="w-full flex flex-col items-center">
                      <img
                        src="/mnvr-7.png"
                        alt="YOLX 360° Kamera"
                        className="rounded-lg w-full h-[300px] object-contain"
                      />
                      <h3 className="text-lg font-semibold text-white mt-4 text-center">
                        YOLX 360° Kamera
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
          <h2 className="text-3xl font-semibold text-white mb-10">
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
                  src="/dashcam-1.png"
                  alt="YOLX MNVR TS-921"
                  className="rounded-lg w-full max-w-md h-[300px] object-contain"
                />
                <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                  YOLX MNVR TS-921
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

        {/* Araç & Nesne Takip Bölümü */}

        <div className="flex flex-col items-center px-4 md:px-20">
          <h2 className="text-3xl font-semibold text-white mb-10">
            Araç & Nesne Takip Ürünlerimiz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl mx-auto">
                {/* Üst sıra - ilk 2 resim */}
                <div className="w-full flex flex-col items-center">
                  <img
                    src="/car-1.png"
                    alt="YOLX MNVR TS-921"
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX MNVR TS-921
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <img
                    src="/car-2.png"
                    alt="YOLX MNVR TS-922"
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX MNVR TS-922
                  </h3>
                </div>

                {/* Alt sıra - son 2 resim */}
                <div className="w-full flex flex-col items-center">
                  <img
                    src="/car-3.png"
                    alt="YOLX MNVR TS-923"
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX MNVR TS-923
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <img
                    src="/car-4.png"
                    alt="YOLX MNVR TS-924"
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX MNVR TS-924
                  </h3>
                </div>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl mx-auto">
                {/* Üst sıra - ilk 2 resim */}
                <div className="w-full flex flex-col items-center">
                  <img
                    src="/car-5.png"
                    alt="YOLX MNVR TS-921"
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX MNVR TS-921
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <img
                    src="/car-6.png"
                    alt="YOLX MNVR TS-922"
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX MNVR TS-922
                  </h3>
                </div>

                {/* Alt sıra - son 2 resim */}
                <div className="w-full flex flex-col items-center">
                  <img
                    src="/car-7.png"
                    alt="YOLX MNVR TS-923"
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX MNVR TS-923
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <img
                    src="/car-8.png"
                    alt="YOLX MNVR TS-924"
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX MNVR TS-924
                  </h3>
                </div>
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

            <div className="flex flex-col items-center px-4 md:px-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                {/* Üst Sıra - 3 Kamera */}
                <div className="w-full flex flex-col items-center ">
                  <img
                    src="/car-9.png"
                    alt="YOLX HD Dome Kamera"
                    className="rounded-lg w-full h-[300px] object-contain"
                  />
                  <h3 className="text-lg font-semibold text-white mt-4 text-center">
                    YOLX HD Dome Kamera
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <img
                    src="/car-10.png"
                    alt="YOLX HD Bullet Kamera"
                    className="rounded-lg w-full h-[300px] object-contain"
                  />
                  <h3 className="text-lg font-semibold text-white mt-4 text-center">
                    YOLX HD Bullet Kamera
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <img
                    src="/car-11.png"
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
          <h2 className="text-3xl font-semibold text-white mb-10">
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
                    YOLX MNVR TS-610
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <img
                    src="/body-2.png"
                    alt="YOLX MNVR TS-921"
                    className="rounded-lg w-full max-w-md h-[300px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX MNVR TS-921
                  </h3>
                </div>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl mx-auto">
                {/* Üst sıra - ilk 2 resim */}
                <div className="w-full flex flex-col items-center">
                  <img
                    src="/body-3.png"
                    alt="YOLX MNVR TS-921"
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX MNVR TS-921
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <img
                    src="/body-4.png"
                    alt="YOLX MNVR TS-922"
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX MNVR TS-922
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
                    YOLX MNVR TS-923
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <img
                    src="/body-6.png"
                    alt="YOLX MNVR TS-924"
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX MNVR TS-924
                  </h3>
                </div>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                <div className="w-full flex flex-col items-center">
                  <img
                    src="/dvr-2.png"
                    alt="YOLX MNVR TS-920"
                    className="rounded-lg w-full max-w-md h-[300px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX MNVR TS-610
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <img
                    src="/dvr-3.png"
                    alt="YOLX MNVR TS-921"
                    className="rounded-lg w-full max-w-md h-[300px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX MNVR TS-921
                  </h3>
                </div>
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
          </div>
        </div>

        {/* Basic Araç Kameraları Bölümü */}

        <div className="flex flex-col items-center px-4 md:px-20 pb-20">
          <h2 className="text-3xl font-semibold text-white mb-10">
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
              <div className="  gap-8 w-full">
                <div className="w-full flex flex-col items-center">
                  <img
                    src="/basic-1.png"
                    alt="YOLX MNVR TS-920"
                    className="rounded-lg w-full max-w-md h-[300px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX MNVR TS-610
                  </h3>
                </div>
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
              <div className="  gap-8 w-full">
                <div className="w-full flex flex-col items-center">
                  <img
                    src="/basic-2.png"
                    alt="YOLX MNVR TS-920"
                    className="rounded-lg w-full max-w-md h-[300px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX MNVR TS-610
                  </h3>
                </div>
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
          </div>
        </div>
      </div>
    </main>
  );
}
