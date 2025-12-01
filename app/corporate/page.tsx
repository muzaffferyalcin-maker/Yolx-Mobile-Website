import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YOLX Mobile Hakkında | Araç Güvenliği ve Filo Teknolojileri",
  description:
    "YOLX Mobile, araç güvenliği, yapay zekalı araç içi kameralar, araç takip sistemleri ve filo yönetim yazılımları geliştiren teknoloji şirketidir. Belediyeler, kamu kurumları ve özel sektör için yönetmeliklere uyumlu çözümler sunar.",
};

export default function CorporatePage() {
  return (
    <main className="w-full h-full">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          YOLX Mobile Hakkında
        </h1>

        <p className="text-sm md:text-base text-slate-600 mb-8">
          YOLX Mobile; araç takip sistemleri, araç içi kamera çözümleri, yapay
          zeka destekli sürücü analiz kameraları ve filo yönetim yazılımları
          geliştiren bir teknoloji şirketidir. Belediyeler, kamu kurumları,
          lojistik şirketleri ve kurumsal filolar için yönetmeliklere uyumlu,
          ölçeklenebilir ve saha koşullarına dayanıklı çözümler sunar.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Vizyon ve Misyon
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-3">
            Vizyonumuz; akıllı araç ve filo güvenliği alanında, Türkiye ve
            bölgede referans kabul edilen teknoloji sağlayıcılarından biri
            olmaktır. Misyonumuz ise; sürüş güvenliğini artıran, operasyonel
            verimliliği yükselten ve mevzuata uyumu kolaylaştıran yenilikçi
            ürün ve yazılımlar geliştirmektir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Çözümlerimiz
          </h2>
          <ul className="list-disc list-inside text-sm md:text-base text-slate-700 leading-relaxed space-y-1">
            <li>AI sürücü analiz kameraları (YOLX Poyraz Pro ve türevleri)</li>
            <li>
              AİTM EKXVI ve UKOME 2025 uyumlu araç içi kayıt sistemleri (MNVR /
              MDVR)
            </li>
            <li>Araç takip ve filo yönetim çözümleri</li>
            <li>Solar ve uzun ömürlü takip cihazları (YOLX Solar vb.)</li>
            <li>Vücut kameraları ve saha güvenlik çözümleri</li>
            <li>IoT ve özel proje geliştirme hizmetleri</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Hedeflediğimiz Sektörler
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-3">
            YOLX çözümleri, özellikle aşağıdaki alanlarda aktif olarak
            kullanılmaktadır:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-slate-700 leading-relaxed space-y-1">
            <li>Belediye otobüsleri ve toplu taşıma filoları</li>
            <li>Servis araçları ve personel/öğrenci taşımacılığı</li>
            <li>Lojistik, dağıtım ve soğuk zincir filoları</li>
            <li>İnşaat ve iş makinesi filoları</li>
            <li>Balıkçı tekneleri ve deniz taşımacılığı</li>
            <li>Güvenlik güçleri ve saha ekipleri</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Teknoloji ve Altyapı
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-3">
            Ürünlerimizde LTE/4G haberleşme, GPS/GNSS çoklu uydu desteği,
            bulut tabanlı filo yönetim yazılımı, uzaktan cihaz yönetimi (FOTA)
            ve yapay zeka tabanlı sürücü analizi gibi modern teknolojiler
            kullanılmaktadır. YOLX Filo Yönetim Platformu ile araçlar; konum,
            kamera görüntüleri, sürücü davranışları ve sensör verileriyle
            birlikte tek ekrandan izlenebilir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Merkezlerimiz
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-2">
            YOLX Mobile, İstanbul ve Kayseri&apos;deki ofisleriyle Türkiye
            genelinde hizmet vermektedir:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-slate-700 leading-relaxed space-y-1">
            <li>
              Genel Müdürlük: Yeşilköy Mah. Atatürk Cad. EGS Business Park
              Blokları No:12/86 Bakırköy / İstanbul
            </li>
            <li>
              Teknopark Ofis: Erciyes Teknopark, Yıldırım Beyazıt Mahallesi,
              Aşık Veysel Bulvarı No:63V Melikgazi / Kayseri
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            İletişim
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-2">
            Ürünlerimiz ve çözümlerimiz hakkında daha fazla bilgi almak, demo
            talep etmek veya iş birliği fırsatlarını görüşmek için bizimle
            iletişime geçebilirsiniz:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-slate-700 leading-relaxed">
            <li>Telefon: 0850 307 99 19</li>
            <li>E-posta: info@yolxmobile.com</li>
            <li>Web: www.yolxmobile.com</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
