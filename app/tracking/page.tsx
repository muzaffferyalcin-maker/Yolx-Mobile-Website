"use client";

import Image from "next/image";
import Encryption from "@/components/main/Encryption";

export default function Tracking() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col items-center justify-center pt-20 px-4 md:px-20">
          <h1 className="text-[40px] font-bold text-white mb-4 ">
            Araçlar & Nesne Takibi
          </h1>
          <p className="text-gray-300 text-center max-w-2xl">
            Araç takip sistemleri ve filo yönetimi çözümlerimiz ile işletmenizi
            daha verimli hale getirin
          </p>
        </div>

        <div className="flex flex-col items-center px-4 md:px-20 pb-20">
          <h2 className="text-3xl font-semibold text-white mb-10 text-center">
            Araç & Nesne Takip Ürünlerimiz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl mx-auto">
                {/* Üst sıra - ilk 2 resim */}
                <div className="w-full flex flex-col items-center">
                  <Image
                    src="/car-1.png"
                    alt="YOLX MNVR TS-921"
                    width={200}
                    height={100}
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX LİGHTER
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <Image
                    src="/car-2.png"
                    alt="YOLX MNVR TS-922"
                    width={200}
                    height={100}
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX PLUG
                  </h3>
                </div>

                {/* Alt sıra - son 2 resim */}
                <div className="w-full flex flex-col items-center">
                  <Image
                    src="/car-3.png"
                    alt="YOLX MNVR TS-923"
                    width={200}
                    height={100}
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX HYBRİT
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <Image
                    src="/car-4.png"
                    alt="YOLX MNVR TS-924"
                    width={200}
                    height={100}
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX 360
                  </h3>
                </div>
              </div>
              ...
            </div>
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl mx-auto">
                {/* Üst sıra - ilk 2 resim */}
                <div className="w-full flex flex-col items-center">
                  <Image
                    src="/car-5.png"
                    alt="YOLX MNVR TS-921"
                    width={200}
                    height={100}
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX LİGHTER
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <Image
                    src="/car-6.png"
                    alt="YOLX MNVR TS-922"
                    width={200}
                    height={100}
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX PLUG
                  </h3>
                </div>

                {/* Alt sıra - son 2 resim */}
                <div className="w-full flex flex-col items-center">
                  <Image
                    src="/car-7.png"
                    alt="YOLX MNVR TS-923"
                    width={200}
                    height={100}
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX HYBRİT
                  </h3>
                </div>

                <div className="w-full flex flex-col items-center">
                  <Image
                    src="/car-8.png"
                    alt="YOLX MNVR TS-924"
                    width={200}
                    height={100}
                    className="rounded-lg w-full max-w-md h-[100px] object-contain"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                    YOLX 360
                  </h3>
                </div>
              </div>
              ...
            </div>
            <div className="flex flex-col items-center px-4 md:px-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                <div className="flex flex-col items-center">
                  <div className="w-full flex flex-col items-center">
                    <img
                      src="/car-9.png"
                      alt="YOLX MNVR TS-920"
                      className="rounded-lg w-full max-w-md h-[300px] object-contain"
                    />
                    <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                      YOLX POYRAZ PRO
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full flex flex-col items-center">
                    <img
                      src="/car-10.png"
                      alt="YOLX MNVR TS-921"
                      className="rounded-lg w-full max-w-md h-[300px] object-contain"
                    />
                    <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                      YOLX TAKSİM
                    </h3>
                  </div>
                </div>{" "}
                <div className="flex flex-col items-center">
                  <div className="w-full flex flex-col items-center">
                    <img
                      src="/car-11.png"
                      alt="YOLX MNVR TS-921"
                      className="rounded-lg w-full max-w-md h-[300px] object-contain"
                    />
                    <h3 className="text-xl font-semibold text-white mt-4 pb-4">
                      YOLX TAKSİM
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
