"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [vehicleCount, setVehicleCount] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSubmitted(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company,
          phone,
          email,
          vehicleCount,
          product,
          message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Form gönderilemedi.");
      }

      setSubmitted(true);
      setName("");
      setCompany("");
      setPhone("");
      setEmail("");
      setVehicleCount("");
      setProduct("");
      setMessage("");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Bilinmeyen bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
        Teklif / Demo Talebi
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Adınız Soyadınız"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-slate-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
        />

        <input
          type="text"
          placeholder="Firma Adı (Opsiyonel)"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="border border-slate-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
        />

        <input
          type="tel"
          placeholder="Telefon Numaranız"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border border-slate-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
        />

        <input
          type="email"
          placeholder="E-posta Adresiniz"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-slate-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
        />

        <input
          type="number"
          placeholder="Araç Sayısı (Opsiyonel)"
          value={vehicleCount}
          onChange={(e) => setVehicleCount(e.target.value)}
          className="border border-slate-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
        />

        <select
          className="border border-slate-300 rounded-lg px-4 py-2 text-sm text-slate-700 focus:ring-2 focus:ring-blue-600 outline-none"
          required
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        >
          <option value="">İlgilendiğiniz Ürün</option>
          <option>YOLX Poyraz Pro</option>
          <option>YOLX TS-920 MNVR</option>
          <option>YOLX GP360 Araç Takip</option>
          <option>YOLX Solar</option>
          <option>Vücut Kamerası (B07)</option>
          <option>IoT / Özel Çözümler</option>
        </select>

        <textarea
          placeholder="Talebiniz / Mesajınız"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-slate-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 px-5 py-3 bg-blue-600 text-white font-semibold rounded-full text-sm hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Gönderiliyor..." : "Gönder"}
        </button>
      </form>

      {submitted && (
        <p className="text-green-600 text-sm font-medium mt-3">
          Talebiniz başarıyla gönderildi. Ekibimiz sizinle en kısa sürede
          iletişime geçecektir.
        </p>
      )}

      {error && (
        <p className="text-red-600 text-sm font-medium mt-3">
          Hata: {error}
        </p>
      )}
    </div>
  );
}
