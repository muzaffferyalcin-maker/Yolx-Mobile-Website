"use client";

export default function About() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col items-center justify-center pt-20 pb-10 px-4 md:px-20">
          <h1 className="text-[40px] font-bold text-white mb-4">Hakkımızda</h1>
          <p className="text-gray-300 text-center mb-4">
            YOLX MOBİLE, Filo Yönetimi için Gps, 4G Android Araç DVR, 4G Mini
            Araç Kamerası tasarımı, geliştirilmesi ve üretimi ile ilgilenen
            profesyonel bir üretici ve ihracatçı firmadır.
          </p>
          <p className="text-gray-300 text-center mb-12">
            Başta Rusya, ABD olmak üzere 61&apos;den fazla ülkeye, bölgeye
            ihracat yapmaktadır. Fransa, Polonya, Güney Kore, Japonya, Vietnam,
            Tayland vb. YOLX MOBILE Şimdi Türkiye&apos;de. Ürünlerimiz CE, RoHS,
            CCC, E-mark, FCC sertifikaları ile yetkilendirilmiştir. Her zaman
            üstün kaliteli ürünler üretmek için hazır konumdayız.
          </p>
          <p className="text-white font-bold text-3xl md:text-4xl text-center max-w-2xl mb-6 leading-snug shadow-md">
            YOLX MOBİLE, neler sunar?
          </p>
          <ul className="list-disc list-inside text-gray-300 text-center">
            <li>
              Bir aracınızda olsa 1000 aracınızda olsa, araçlarınızı toplu bir
              şekilde tek ekrandan izleyebilirsiniz.
            </li>
            <li>
              Yaygın servis ağımız sayesinde kolay montaj ve servis
              anlayışımızla her noktada rahatlık sağlar.
            </li>
            <li>
              Ürünlerimizin tamamında 2 yıl birebir değişim garantisi sunulur.
            </li>
            <li>
              Hem araç içi kamera, hem araç takip, hem de araç içi modem
              özelliği sayesinde tek cihaz tüm ihtiyaçlarınızı karşılar.
            </li>
            <li>Bulut yedeklemesi sayesinde verileriniz asla kaybolmaz.</li>
            <li>
              Arttırılabilir hafıza sayesinde tüm verilerinizi
              saklayabilirsiniz.
            </li>
            <li>Ortam sesi dinleme ve bas konuş özelliği mevcuttur.</li>
            <li>
              Vücut kamerası ile araç kameralarını tek ekranda izleme imkanı
              sunar.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
