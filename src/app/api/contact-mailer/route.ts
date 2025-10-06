import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Configure o transporte SMTP (exemplo com Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "gillung100@gmail.com",
      subject: `Contato do Portfolio: ${name}`,
      text: message,
      html: `<p><strong>Nome:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mensagem:</strong><br/>${message}</p>`
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
