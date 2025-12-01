import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      company,
      phone,
      email,
      vehicleCount,
      product,
      message,
    } = body;

    if (!name || !phone || !email || !product) {
      return NextResponse.json(
        { success: false, error: "Zorunlu alanlar eksik." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactTo = process.env.CONTACT_TO || smtpUser;
    const contactFrom = process.env.CONTACT_FROM || smtpUser;

    if (!smtpUser || !smtpPass) {
      console.error("SMTP env eksik");
      return NextResponse.json(
        { success: false, error: "Mail ayarları eksik." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailText = `
YOLX Website Teklif / Demo Talebi

Ad Soyad: ${name}
Firma: ${company || "-"}
Telefon: ${phone}
E-posta: ${email}
Araç Sayısı: ${vehicleCount || "-"}
İlgilendiği Ürün: ${product}

Mesaj:
${message || "-"}
    `.trim();

    const info = await transporter.sendMail({
      from: contactFrom,
      to: contactTo,
      subject: "YOLX Website - Teklif / Demo Talebi",
      text: mailText,
    });

    console.log("MAIL OK:", info.messageId);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("MAIL ERROR:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Hata oluştu" },
      { status: 500 }
    );
  }
}
