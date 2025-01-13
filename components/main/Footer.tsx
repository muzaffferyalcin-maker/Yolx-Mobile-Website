import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-start justify-around flex-wrap gap-y-8 md:gap-y-4">
          {/* Güvenlik Bölümü */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[20px] mb-4">Güvenlik</div>
            <Link
              href="/safety/forklift-agv"
              className="text-[15px] hover:text-gray-400 transition-colors mb-3"
            >
              Forklift/AGV Güvenliği & Kaza Önleme
            </Link>
            <Link
              href="/safety/machine-safety"
              className="text-[15px] hover:text-gray-400 transition-colors mb-3"
            >
              Makine Sahası Güvenliği
            </Link>
            <Link
              href="/safety/working-alone"
              className="text-[15px] hover:text-gray-400 transition-colors mb-3"
            >
              Yalnız Çalışan Güvenliği
            </Link>
            <Link
              href="/safety/loading-ramp"
              className="text-[15px] hover:text-gray-400 transition-colors mb-3"
            >
              Güvenli Yükleme Rampası
            </Link>
            <Link
              href="/safety/crane-safety"
              className="text-[15px] hover:text-gray-400 transition-colors mb-3"
            >
              Vinç Güvenliği
            </Link>
          </div>

          {/* Verimlilik Bölümü */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[20px] mb-4">Verimlilik</div>
            <Link
              href="/productivity/forklift-fleet"
              className="text-[15px] hover:text-gray-400 transition-colors mb-3"
            >
              Forklift Filo Yönetimi
            </Link>
            <Link
              href="/productivity/forklift-agv-efficiency"
              className="text-[15px] hover:text-gray-400 transition-colors mb-3"
            >
              Forklift/AGV Verimliliği ve Takibi (RTLS)
            </Link>
            <Link
              href="/productivity/personnel-efficiency"
              className="text-[15px] hover:text-gray-400 transition-colors mb-3"
            >
              Personel Verimliliği ve Takibi (RTLS)
            </Link>
            <Link
              href="/productivity/object-tracking"
              className="text-[15px] hover:text-gray-400 transition-colors mb-3"
            >
              Nesne Takibi için RTLS Sistemi
            </Link>
          </div>

          {/* Yasal Bölümü */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[20px] mb-4">Yasal</div>
            <Link
              href="/privacy-notice"
              className="text-[15px] hover:text-gray-400 transition-colors mb-3"
            >
              Yasal Bildirim ve Uyarılar
            </Link>
          </div>

          {/* Hakkımızda & Kaynaklar Bölümü */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[20px] mb-4">
              Hakkımızda & Kaynaklar
            </div>
            <Link
              href="/blog"
              className="text-[15px] hover:text-gray-400 transition-colors mb-3"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-[15px] hover:text-gray-400 transition-colors mb-3"
            >
              Hakkımızda
            </Link>
            <Link
              href="/contact"
              className=" hover:text-gray-400  font-medium py-2 px-4 rounded-md transition-colors"
            >
              İletişim
            </Link>
          </div>
        </div>

        <div className="mb-[20px] text-[20px] text-center mt-4">
          Müşteri Hizmetleri: 0850 307 9919
        </div>
        <div className="mb-[20px] text-[15px] text-center font-bold">
          &copy; YolX Mobile GPS 2024 | Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
