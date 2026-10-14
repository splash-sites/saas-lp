// Gera o pacote de marca do Gradatim (mesmo formato do prestio-marca.zip).
// Uso: npm run marca  (gera em marca-gerada/; depois copiar para public/ e zipar)
import fs from "node:fs";
import path from "node:path";
import opentype from "opentype.js";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const OUT = process.argv[2];
const COR = { ink: "#12302B", paper: "#F4F7F6", marigold: "#F0B93B" };

const font = opentype.loadSync("node_modules/@fontsource/onest/files/onest-latin-700-normal.woff");

// Símbolo: escada de três degraus num círculo âmbar (mesmo desenho do site).
function simbolo(x, y, d, corEscada = COR.ink) {
  const s = d / 32;
  return `<g transform="translate(${x} ${y}) scale(${s})"><circle cx="16" cy="16" r="16" fill="${COR.marigold}"/><path d="M8 23h5v-5h5v-5h5V9" fill="none" stroke="${corEscada}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>`;
}

// Wordmark "gradatim" em Onest Bold, convertido em contorno, com -0.03em de espaçamento.
function wordmark(fontSize) {
  const glyphs = font.stringToGlyphs("gradatim");
  const scale = fontSize / font.unitsPerEm;
  const track = -0.03 * fontSize;
  let x = 0;
  const partes = [];
  glyphs.forEach((g, i) => {
    const p = g.getPath(x, 0, fontSize);
    partes.push(p.toPathData(2));
    const kern = i < glyphs.length - 1 ? font.getKerningValue(g, glyphs[i + 1]) * scale : 0;
    x += g.advanceWidth * scale + kern + track;
  });
  const bbox = font.getPath("gradatim", 0, 0, fontSize).getBoundingBox();
  return { d: partes.join(""), largura: x - track, topo: bbox.y1, base: bbox.y2 };
}

function logoSvg({ texto, fundo }) {
  const pad = 16;
  const d = 120; // diâmetro do símbolo
  const fs = 112;
  const w = wordmark(fs);
  const xHeight = (font.tables.os2.sxHeight || 500) * (fs / font.unitsPerEm);
  // Alinha o centro da altura-x do texto ao centro do símbolo.
  const cy = pad + d / 2;
  const baseline = cy + xHeight / 2;
  const gap = 28;
  const tx = pad + d + gap;
  const largura = Math.ceil(tx + w.largura + pad);
  const altura = Math.ceil(Math.max(pad * 2 + d, baseline + w.base + pad));
  const bg = fundo ? `<rect width="${largura}" height="${altura}" rx="24" fill="${fundo}"/>` : "";
  return {
    largura,
    altura,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${largura} ${altura}" width="${largura}" height="${altura}">${bg}${simbolo(pad, pad, d)}<path fill="${texto}" transform="translate(${tx} ${baseline})" d="${w.d}"/></svg>`,
  };
}

const simboloSvg = (tam, fundo, raio = 0, margem = 0.18) => {
  const d = tam * (1 - margem * 2);
  const bg = fundo ? `<rect width="${tam}" height="${tam}" rx="${raio}" fill="${fundo}"/>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${tam} ${tam}" width="${tam}" height="${tam}">${bg}${simbolo((tam - d) / 2, (tam - d) / 2, d)}</svg>`;
};

const png = (svg, arquivo, largura) =>
  sharp(Buffer.from(svg), { density: 300 }).resize({ width: largura }).png().toFile(arquivo);

fs.mkdirSync(path.join(OUT, "logo"), { recursive: true });
fs.mkdirSync(path.join(OUT, "favicon"), { recursive: true });
fs.mkdirSync(path.join(OUT, "perfil"), { recursive: true });

// Logos
const variantes = {
  "gradatim-logo": logoSvg({ texto: COR.ink }),
  "gradatim-logo-fundo-claro": logoSvg({ texto: COR.ink, fundo: COR.paper }),
  "gradatim-logo-negativo": logoSvg({ texto: COR.paper }),
  "gradatim-logo-fundo-escuro": logoSvg({ texto: COR.paper, fundo: COR.ink }),
};
for (const [nome, v] of Object.entries(variantes)) {
  fs.writeFileSync(path.join(OUT, "logo", `${nome}.svg`), v.svg);
  await png(v.svg, path.join(OUT, "logo", `${nome}.png`), 2000);
}
const simboloSolto = simboloSvg(512, null, 0, 0);
fs.writeFileSync(path.join(OUT, "logo", "gradatim-simbolo.svg"), simboloSolto);
await png(simboloSolto, path.join(OUT, "logo", "gradatim-simbolo.png"), 1024);

// Favicons
const fav = simboloSvg(32, null, 0, 0);
fs.writeFileSync(path.join(OUT, "favicon", "favicon.svg"), fav);
await png(fav, path.join(OUT, "favicon", "favicon-32.png"), 32);
const tmp16 = path.join(OUT, "favicon", "_16.png");
const tmp48 = path.join(OUT, "favicon", "_48.png");
await png(fav, tmp16, 16);
await png(fav, tmp48, 48);
const ico = await pngToIco([tmp16, path.join(OUT, "favicon", "favicon-32.png"), tmp48]);
fs.writeFileSync(path.join(OUT, "favicon", "favicon.ico"), ico);
fs.rmSync(tmp16);
fs.rmSync(tmp48);
// Ícones de tela inicial: fundo verde-tinta cheio (o iOS não aceita transparência).
const app = simboloSvg(512, COR.ink, 0, 0.2);
await png(app, path.join(OUT, "favicon", "apple-touch-icon.png"), 180);
await png(app, path.join(OUT, "favicon", "icon-192.png"), 192);
await png(app, path.join(OUT, "favicon", "icon-512.png"), 512);

// Foto de perfil (Instagram, WhatsApp, Google): símbolo centralizado,
// com folga para o corte redondo das redes.
const perfilEscuro = simboloSvg(1080, COR.ink, 0, 0.22);
const perfilAmbar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080"><rect width="1080" height="1080" fill="${COR.marigold}"/><g transform="translate(75 60) scale(30)"><path d="M8 23h5v-5h5v-5h5V9" fill="none" stroke="${COR.ink}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`;
await png(perfilEscuro, path.join(OUT, "perfil", "gradatim-perfil.png"), 1080);
await png(perfilAmbar, path.join(OUT, "perfil", "gradatim-perfil-ambar.png"), 1080);

console.log("ok", Object.fromEntries(Object.entries(variantes).map(([k, v]) => [k, `${v.largura}x${v.altura}`])));
