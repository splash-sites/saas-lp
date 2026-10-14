// Gera public/og.png (1200x630) a partir de um SVG. Rodar com `npm run og`.
// Usa fontes do sistema; o resultado é só a prévia de compartilhamento.
import sharp from "sharp";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#12302b"/>
  <g transform="translate(80 80)">
    <circle cx="28" cy="28" r="28" fill="#f0b93b"/>
    <path d="M14 40h9v-9h9v-9h9V15" fill="none" stroke="#12302b" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="74" y="40" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="38" fill="#f4f7f6">gradatim</text>
  </g>
  <g font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="74" fill="#f4f7f6" letter-spacing="-2">
    <text x="80" y="300">Menos burocracia</text>
    <text x="80" y="388">entre uma sessão</text>
    <text x="80" y="476">e outra.</text>
  </g>
  <text x="80" y="560" font-family="Segoe UI, Arial, sans-serif" font-size="26" fill="#b9cfc9">Agenda, prontuário, financeiro e lembretes. 14 dias grátis, sem cartão.</text>
  <g transform="translate(870 120) rotate(6)">
    <rect width="240" height="440" rx="36" fill="#1f4a43"/>
    <rect x="10" y="10" width="220" height="420" rx="28" fill="#f4f7f6"/>
    <text x="30" y="58" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="22" fill="#12302b">Hoje</text>
    <rect x="30" y="80" width="180" height="56" rx="12" fill="#fff"/><rect x="30" y="80" width="5" height="56" fill="#f0b93b"/>
    <rect x="30" y="148" width="180" height="56" rx="12" fill="#fff"/><rect x="30" y="148" width="5" height="56" fill="#0f766e"/>
    <rect x="30" y="216" width="180" height="56" rx="12" fill="#dfebe7"/>
    <rect x="30" y="284" width="180" height="56" rx="12" fill="#fff"/><rect x="30" y="284" width="5" height="56" fill="#0f766e"/>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og.png");
console.log("public/og.png gerado");
