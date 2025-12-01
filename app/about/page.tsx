import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "YOLX Mobile Hakkında | Araç Güvenliği ve Filo Teknolojileri",
  description:
    "YOLX Mobile; araç takip sistemleri, araç içi kamera çözümleri, yapay zekalı sürücü analiz kameraları ve IoT tabanlı filo yönetim teknolojileri geliştiren yenilikçi bir teknoloji şirketidir. Filolar için güvenlik, verimlilik ve mevzuata uyum odaklı çözümler sunar.",
};

export default function AboutPage() {
  return <AboutClient />;
}
