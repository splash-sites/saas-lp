// Gera public/og.png (1200x630) a partir de um SVG. Rodar com `npm run og`.
// As fontes do sistema substituem as da página; o resultado é só a prévia de
// compartilhamento.
import sharp from "sharp";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f4f7f6"/>
  <g transform="translate(80 80)">
    <rect width="56" height="56" rx="12" fill="#0f766e"/>
    <path d="M12 42h11v-9h11v-9h11V13" fill="none" stroke="#f4f7f6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" transform="translate(0 0)"/>
    <text x="74" y="42" font-family="Georgia, serif" font-size="40" fill="#12302b">gradatim</text>
  </g>
  <g font-family="Georgia, serif" font-size="78" fill="#12302b">
    <text x="80" y="300">Seu consultório</text>
    <text x="160" y="390">organizado,</text>
    <text x="240" y="480" fill="#0f766e">passo a passo.</text>
  </g>
  <text x="80" y="566" font-family="Segoe UI, Arial, sans-serif" font-size="26" fill="#46605b">Agenda, prontuário, financeiro e lembretes num painel só. 14 dias grátis.</text>
  <path d="M960 630V520h120V410h120" fill="none" stroke="#dfebe7" stroke-width="26"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og.png");
console.log("public/og.png gerado");
