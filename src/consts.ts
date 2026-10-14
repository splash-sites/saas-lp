// Fonte única de URLs, contato e preços. Trocar aqui quando algo mudar.

export const SITE_URL = "https://gradatim.com.br";
export const APP_LOGIN_URL = "https://app.gradatim.com.br/login";

export const WHATSAPP_NUMERO = "555182135882";
export const WHATSAPP_EXIBICAO = "(51) 8213-5882";
export const WHATSAPP_HORARIO = "segunda a sexta, das 9h às 18h";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
  "Olá! Tenho uma dúvida sobre o Gradatim.",
)}`;

export const CTA_TEXTO = "Começar teste grátis de 14 dias";

export type Ciclo = {
  id: "mensal" | "trimestral" | "semestral";
  nome: string;
  porMes: string;
  cobranca: string;
  desconto: string | null;
};

export const CICLOS: Ciclo[] = [
  { id: "mensal", nome: "Mensal", porMes: "49,90", cobranca: "R$ 49,90 por mês", desconto: null },
  {
    id: "trimestral",
    nome: "Trimestral",
    porMes: "44,91",
    cobranca: "R$ 134,73 a cada 3 meses",
    desconto: "10% off",
  },
  {
    id: "semestral",
    nome: "Semestral",
    porMes: "42,42",
    cobranca: "R$ 254,49 a cada 6 meses",
    desconto: "15% off",
  },
];
