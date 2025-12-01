import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-200 mt-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Kısa Metin */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base md:text-lg font-semibold text-slate-900">
              YOLX Mobile
            </h3>
            <p className="text-xs md:text-sm text-slate-600">
              Araç takip, kamera sistemleri, AI sürücü analizi, iş makinesi ve
              solar takip çözümleri ile filolar için uçtan uca yönetim
              sunuyoruz.
            </p>
          </div>

          {/* Çözümler */}
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-slate-900">
              Çözümler
            </h4>
            <Link
              href="/#cozumler"
              className="text-xs md:text-sm text-slate-600 hover:text-blue-600"
            >
              Lojistik & Filo Yönetimi
            </Link>
            <Link
              href="/#cozumler"
              className="text-xs md:text-sm text-slate-600 hover:text-blue-600"
            >
              Belediye & Kamu Araçları
            </Link>
            <Link
              href="/#cozumler"
              className="text-xs md:text-sm text-slate-600 hover:text-blue-600"
            >
              İş Makineleri
            </Link>
            <Link
              href="/#cozumler"
              className="text-xs md:text-sm text-slate-600 hover:text-blue-600"
            >
              Solar & Deniz Takip
            </Link>
          </div>

          {/* Ürünler */}
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-slate-900">
              Ürünler
            </h4>
            <Link
              href="/products"
              className="text-xs md:text-sm text-slate-600 hover:text-blue-600"
            >
              YOLX Poyraz Pro
            </Link>
            <Link
              href="/products"
              className="text-xs md:text-sm text-slate-600 hover:text-blue-600"
            >
              YOLX Solar
            </Link>
            <Link
              href="/products"
              className="text-xs md:text-sm text-slate-600 hover:text-blue-600"
            >
              YOLX TS-920 MNVR
            </Link>
            <Link
              href="/products"
              className="text-xs md:text-sm text-slate-600 hover:text-blue-600"
            >
              YOLX GP360
            </Link>
          </div>

          {/* İletişim */}
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-slate-900">
              İletişim
            </h4>
            <p className="text-xs md:text-sm text-slate-600">
              Telefon: 0850 307 99 19
            </p>
            <p className="text-xs md:text-sm text-slate-600">
              E-posta: info@yolxmobile.com
            </p>
            <p className="text-xs md:text-sm text-slate-600">
              İstanbul / Türkiye
            </p>
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-600 text-white text-xs md:text-sm font-semibold hover:bg-blue-700 w-fit"
            >
              Teklif / Demo Talebi
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] md:text-xs text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} YOLX Mobile GPS | Tüm hakları
            saklıdır.
          </p>
          <p className="text-[11px] md:text-xs text-slate-400 text-center md:text-right">
            Gizlilik, KVKK ve sözleşme metinleri yakında burada yer alacaktır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
