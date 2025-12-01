import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yasal Bildirim ve Uyarılar | YOLX Mobile",
  description:
    "YOLX Mobile web sitesi kullanımına ilişkin yasal bildirimler, sorumluluk reddi, gizlilik ve çerez politikası hakkında bilgilendirme.",
};

export default function LegalNoticesPage() {
  return (
    <main className="w-full h-full">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Yasal Bildirim ve Uyarılar
        </h1>

        <p className="text-sm md:text-base text-slate-600 mb-8">
          Bu sayfa, YOLX Mobile web sitesi{" "}
          <span className="font-mono text-xs">(www.yolxmobile.com</span>){" "}
          üzerinden sunulan bilgi, ürün ve hizmetlere ilişkin genel
          bilgilendirme ve yasal uyarıları içermektedir. Bu siteyi
          kullanmanız, aşağıdaki şartları kabul ettiğiniz anlamına gelir.
        </p>

        {/* 1. Genel Bilgiler */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            1. Genel Bilgiler
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            YOLX Mobile, araç takip sistemleri, kamera çözümleri, solar takip
            cihazları ve ilgili yazılım/hizmetleri sunan bir teknoloji
            şirketidir. Web sitemizde yer alan tüm içerik, genel bilgilendirme
            amaçlıdır ve herhangi bir taahhüt niteliği taşımaz. Ürün
            özellikleri, teknik detaylar ve kampanyalar, önceden haber verilmeksizin
            güncellenebilir.
          </p>
        </section>

        {/* 2. Marka ve Telif Hakları */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            2. Marka ve Telif Hakları
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-3">
            YOLX, YOLX Mobile ve sitede yer alan logo, marka ve tasarımların
            tüm hakları YOLX Mobile&apos;a aittir veya lisans kapsamında
            kullanılmaktadır. Web sitesinde yer alan yazı, görsel, logo, teknik
            doküman, katalog ve diğer tüm içerikler, ilgili mevzuat kapsamında
            telif hakkı koruması altındadır.
          </p>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Bu içeriklerin YOLX Mobile&apos;ın yazılı izni olmaksızın kısmen
            veya tamamen kopyalanması, çoğaltılması, değiştirilmesi, ticari
            amaçla kullanılması veya üçüncü taraflara sunulması yasaktır.
          </p>
        </section>

        {/* 3. Sorumluluk Reddi */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            3. Sorumluluk Reddi
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-3">
            Web sitemizde yer alan bilgiler; güncel, doğru ve eksiksiz olması
            amacıyla düzenli olarak kontrol edilmektedir. Ancak teknik
            sebepler, üçüncü taraf sistemler veya insan kaynaklı hatalar
            nedeniyle bilgi ve içeriklerde gecikme, eksiklik veya yanlışlıklar
            oluşabilir.
          </p>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-3">
            YOLX Mobile, web sitesinde yer alan bilgi ve içeriklerin
            kullanılmasından doğabilecek doğrudan veya dolaylı zararlardan,
            kar kaybından, veri kaybından veya iş kesintisinden sorumlu tutulamaz.
          </p>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Ürün ve çözümlerle ilgili nihai teknik ve hukuki değerlendirme,
            taraflar arasında imzalanan sözleşme, şartname ve teklif dokümanları
            üzerinden yapılmalıdır.
          </p>
        </section>

        {/* 4. Üçüncü Taraf Bağlantılar */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            4. Üçüncü Taraf Bağlantılar
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Web sitemiz, ürün entegrasyonları, referanslar veya bilgilendirme
            amacıyla üçüncü taraf web sitelerine bağlantılar içerebilir.
            Bağlantı verilen sitelerin içerik ve gizlilik politikalarından
            YOLX Mobile sorumlu değildir. Bu sitelerin kullanımı, ilgili üçüncü
            tarafların kullanım şartlarına tabidir.
          </p>
        </section>

        {/* 5. Kişisel Verilerin Korunması (KVKK) */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            5. Kişisel Verilerin Korunması (KVKK)
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-3">
            YOLX Mobile, 6698 sayılı Kişisel Verilerin Korunması Kanunu
            (&quot;KVKK&quot;) başta olmak üzere ilgili mevzuata uygun şekilde
            hareket etmeyi taahhüt eder. İletişim ve teklif formları üzerinden
            ilettiğiniz ad, soyad, telefon, e-posta gibi kişisel verileriniz;
            yalnızca talebinizi değerlendirmek, size dönüş yapmak ve gerektiğinde
            ticari iletişim izninize bağlı olarak bilgilendirme yapmak amacıyla
            işlenir.
          </p>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            KVKK kapsamındaki haklarınız ve detaylı aydınlatma metni için
            ayrıca hazırlanmış KVKK Aydınlatma Metni ve Gizlilik Politikası
            dokümanlarına başvurmanız gerekmektedir.
          </p>
        </section>

        {/* 6. Çerezler (Cookies) */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            6. Çerezler (Cookies)
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-3">
            Web sitemizde kullanıcı deneyimini iyileştirmek, performans
            ölçümü yapmak ve ziyaretçi istatistikleri oluşturmak amacıyla
            çerezler (cookies) kullanılabilir. Tarayıcı ayarlarınız üzerinden
            çerez kullanımını her zaman kısıtlayabilir veya tamamen
            devre dışı bırakabilirsiniz. Ancak bu durumda sitenin bazı
            fonksiyonları kısıtlı çalışabilir.
          </p>
        </section>

        {/* 7. Değişiklik Hakkı */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            7. Değişiklik Hakkı
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            YOLX Mobile, işbu &quot;Yasal Bildirim ve Uyarılar&quot; metnini
            dilediği zaman güncelleme veya yenileme hakkını saklı tutar.
            Güncellenmiş metinler, web sitesinde yayımlandığı tarihten itibaren
            geçerli olur. Bu sayfayı periyodik olarak kontrol etmeniz
            tavsiye edilir.
          </p>
        </section>

        {/* 8. İletişim */}
        <section className="mb-4">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            8. İletişim
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-2">
            İşbu metinle ilgili her türlü soru, görüş ve talepleriniz için
            bizimle aşağıdaki kanallardan iletişime geçebilirsiniz:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-slate-700 leading-relaxed">
            <li>E-posta: info@yolxmobile.com</li>
            <li>Telefon: 0850 307 99 19</li>
            <li>Adres: Yeşilköy Mah. Atatürk Cad. EGS Business Park Blokları No:12/86 Bakırköy / İstanbul</li>
          </ul>
        </section>

        <p className="mt-6 text-xs text-slate-500">
          Bu sayfada yer alan açıklamalar genel bilgilendirme amaçlıdır ve
          hukuki görüş veya danışmanlık niteliğinde değildir. Şirketinizin
          özel durumuna ilişkin hukuki değerlendirme için bir hukuk
          profesyoneline danışmanız tavsiye edilir.
        </p>
      </div>
    </main>
  );
}
