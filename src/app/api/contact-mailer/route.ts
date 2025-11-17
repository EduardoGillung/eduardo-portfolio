import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Validação de email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sanitização básica de HTML
function sanitizeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br>");
}

export async function POST(req: NextRequest) {
  try {
    // Parse do body
    const body = await req.json();
    const { name, email, message } = body;

    // Validações
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Nome inválido" },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Email inválido" },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Mensagem muito curta (mínimo 10 caracteres)" },
        { status: 400 }
      );
    }

    // Verifica variáveis de ambiente
    if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
      console.error("Variáveis de ambiente MAIL_USER ou MAIL_PASS não configuradas");
      return NextResponse.json(
        { success: false, error: "Configuração de email não encontrada" },
        { status: 500 }
      );
    }

    const mailTo = process.env.MAIL_TO || "gillung100@gmail.com";

    // Configuração do transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Verifica a conexão
    await transporter.verify();

    // Sanitiza os dados
    const sanitizedName = sanitizeHtml(name.trim());
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedMessage = sanitizeHtml(message.trim());

    // Template HTML profissional
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: #f9fafb;
              padding: 30px;
              border: 1px solid #e5e7eb;
              border-top: none;
            }
            .field {
              margin-bottom: 20px;
            }
            .label {
              font-weight: 600;
              color: #4b5563;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 5px;
            }
            .value {
              background: white;
              padding: 12px;
              border-radius: 6px;
              border: 1px solid #e5e7eb;
              font-size: 15px;
            }
            .message-box {
              background: white;
              padding: 20px;
              border-radius: 6px;
              border: 1px solid #e5e7eb;
              min-height: 100px;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
            .footer {
              text-align: center;
              padding: 20px;
              color: #6b7280;
              font-size: 12px;
              border-top: 1px solid #e5e7eb;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">📬 Nova Mensagem do Portfolio</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Nome</div>
              <div class="value">${sanitizedName}</div>
            </div>
            <div class="field">
              <div class="label">Email</div>
              <div class="value">
                <a href="mailto:${sanitizedEmail}" style="color: #667eea; text-decoration: none;">
                  ${sanitizedEmail}
                </a>
              </div>
            </div>
            <div class="field">
              <div class="label">Mensagem</div>
              <div class="message-box">${sanitizedMessage}</div>
            </div>
          </div>
          <div class="footer">
            <p>Mensagem recebida através do formulário de contato do portfolio</p>
            <p>Eduardo Gillung - Portfolio</p>
          </div>
        </body>
      </html>
    `;

    // Texto plano como fallback
    const textTemplate = `
Nova Mensagem do Portfolio
==========================

Nome: ${name.trim()}
Email: ${email.trim()}

Mensagem:
${message.trim()}

---
Mensagem recebida através do formulário de contato do portfolio
Eduardo Gillung - Portfolio
    `;

    // Envia o email
    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
      to: mailTo,
      replyTo: sanitizedEmail,
      subject: `📬 Contato do Portfolio: ${name.trim()}`,
      text: textTemplate,
      html: htmlTemplate,
    });

    console.log("Email enviado com sucesso:", info.messageId);

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
    });

  } catch (error) {
    console.error("Erro ao enviar email:", error);
    
    // Retorna erro genérico para o cliente (segurança)
    return NextResponse.json(
      {
        success: false,
        error: "Erro ao enviar mensagem. Tente novamente mais tarde.",
      },
      { status: 500 }
    );
  }
}

// Bloqueia outros métodos HTTP
export async function GET() {
  return NextResponse.json(
    { error: "Método não permitido" },
    { status: 405 }
  );
}
