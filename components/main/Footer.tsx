import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-start justify-around flex-wrap gap-y-8 md:gap-y-4">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[20px]">Güvenlik</div>
            <p className="flex flex-row items-center my-[5px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                Forklift/AGV Güvenliği & Kaza Önleme
              </span>
            </p>
            <p className="flex flex-row items-center my-[5px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                Makine Sahası Güvenliği
              </span>
            </p>
            <p className="flex flex-row items-center my-[5px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                Yalnız Çalışan Güvenliği
              </span>
            </p>
            <p className="flex flex-row items-center my-[5px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                Güvenli Yükleme Rampası
              </span>
            </p>
            <p className="flex flex-row items-center my-[5px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Vinç Güvenliği</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[20px]">Verimlilik</div>
            <p className="flex flex-row items-center my-[5px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                Forklift Filo Yönetimi
              </span>
            </p>
            <p className="flex flex-row items-center my-[5px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                Forklift/AGV Verimliliği ve Takibi (RTLS)
              </span>
            </p>
            <p className="flex flex-row items-center my-[5px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                Personel Verimliliği ve Takibi (RTLS)
              </span>
            </p>
            <p className="flex flex-row items-center my-[5px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                Nesne Takibi için RTLS Sistemi
              </span>
            </p>
          </div>
          <div className="w-full md:w-auto min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[20px]">Yasal</div>
            <p className="flex flex-row items-center my-[5px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                Yasal Bildirim ve Uyarılar
              </span>
            </p>
          </div>

          <div className="w-full md:w-auto min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[20px]">Hakkımızda & Kaynaklar</div>
            <p className="flex flex-row items-center my-[5px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Blog</span>
            </p>
            <p className="flex flex-row items-center my-[5px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Hakkımızda</span>
            </p>
            <p className="flex flex-row items-center my-[5px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">İletişim</span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center mt-8">
          &copy; YolX Mobile GPS 2024 | Tüm hakları saklıdır.
        </div>
      </div>
    </div>
  );
};

export default Footer;
