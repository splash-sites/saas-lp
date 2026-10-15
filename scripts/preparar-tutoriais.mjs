// Copia os prints dos tutoriais (gerados no repositório saas-psicologia) para a
// landing e cobre o e-mail da conta de teste que aparece no rodapé da barra
// lateral, com o branco da própria barra.
// Uso: node scripts/preparar-tutoriais.mjs <pasta prints-tutoriais>
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const origem = process.argv[2];
if (!origem) throw new Error("Informe a pasta prints-tutoriais.");
const destino = "src/assets/tutoriais";
fs.mkdirSync(destino, { recursive: true });

const manifest = JSON.parse(fs.readFileSync(path.join(origem, "manifest.json"), "utf8"));

// Bordas horizontais cinza-claras (botões e divisória da barra lateral).
const ehBorda = (r, g, b) => r >= 190 && r <= 235 && g >= 200 && g <= 242 && b >= 210 && b <= 248;

// O e-mail fica entre a borda de baixo do bloco de cima (botão "Ocultar dados"
// ou a divisória, no celular) e a borda de cima do botão "Sair".
async function cobrirEmail(arquivo, regiaoX) {
  const img = sharp(path.join(origem, arquivo));
  const { height } = await img.metadata();
  const top = Math.max(0, height - 320);
  const largura = regiaoX[1] - regiaoX[0];
  const { data, info } = await img.clone().extract({ left: regiaoX[0], top, width: largura, height: height - top }).raw().toBuffer({ resolveWithObject: true });
  const linhas = [];
  for (let y = 0; y < info.height; y++) {
    let n = 0;
    for (let x = 0; x < info.width; x++) {
      const i = (y * info.width + x) * info.channels;
      if (ehBorda(data[i], data[i + 1], data[i + 2])) n++;
    }
    if (n > info.width * 0.6) {
      const ultima = linhas[linhas.length - 1];
      if (ultima && y - ultima.fim <= 2) ultima.fim = y;
      else linhas.push({ ini: y, fim: y });
    }
  }
  if (linhas.length < 3) return null;
  const [acima, sairTopo] = linhas.slice(-3);
  const caixa = { left: regiaoX[0], top: top + acima.fim + 6, width: largura, height: sairTopo.ini - acima.fim - 12 };
  if (caixa.height < 20 || caixa.height > 90) return null;
  return caixa;
}

// Cobre a caixa com a cor do fundo naquele ponto (branco na barra normal,
// cinza quando um painel escurece a tela por trás).
async function faixaDaCor(arquivo, caixa) {
  const { data } = await sharp(path.join(origem, arquivo)).extract({ left: caixa.left + 2, top: caixa.top + 2, width: 1, height: 1 }).raw().toBuffer({ resolveWithObject: true });
  return sharp({ create: { width: caixa.width, height: caixa.height, channels: 3, background: { r: data[0], g: data[1], b: data[2] } } }).png().toBuffer();
}

for (const p of manifest.prints) {
  const de = path.join(origem, p.arquivo);
  const para = path.join(destino, p.arquivo);
  const celular = p.viewport[0] < 500;
  let regiao = null;
  if (!celular && !p.arquivo.startsWith("login")) regiao = [36, 440];
  if (p.arquivo === "celular-menu.png") regiao = [222, 740];
  let caixa = regiao ? await cobrirEmail(p.arquivo, regiao) : null;
  if (regiao && !caixa && !celular) {
    // Sem bordas visíveis (painel aberto por cima ou botão em outro estado):
    // o e-mail fica na mesma altura em relação ao rodapé em todos os prints.
    const { height } = await sharp(de).metadata();
    caixa = { left: 36, top: height - 171, width: 404, height: 53 };
  }
  if (caixa) {
    await sharp(de).composite([{ input: await faixaDaCor(p.arquivo, caixa), left: caixa.left, top: caixa.top }]).png({ compressionLevel: 9 }).toFile(para);
    console.log(p.arquivo, "e-mail coberto em", caixa);
  } else {
    fs.copyFileSync(de, para);
    console.log(p.arquivo, regiao ? "AVISO: e-mail não encontrado" : "copiado");
  }
}

// Onde termina o conteúdo de cada print (à direita e embaixo), para a página
// cortar o fundo vazio. Em px CSS. A barra lateral (240 px) fica de fora da conta.
for (const p of manifest.prints) {
  const celular = p.viewport[0] < 500;
  if (celular) continue;
  const { data, info } = await sharp(path.join(destino, p.arquivo)).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const px = (x, y) => (y * info.width + x) * info.channels;
  const fundo = [data[px(info.width - 4, info.height - 4)], data[px(info.width - 4, info.height - 4) + 1], data[px(info.width - 4, info.height - 4) + 2]];
  const difere = (i) => Math.abs(data[i] - fundo[0]) + Math.abs(data[i + 1] - fundo[1]) + Math.abs(data[i + 2] - fundo[2]) > 18;
  const inicio = p.arquivo.startsWith("login") ? 0 : 490;
  let direita = 0, base = 0, esquerda = info.width;
  for (let y = 0; y < info.height; y += 2) {
    for (let x = inicio; x < info.width; x += 2) {
      if (difere(px(x, y))) {
        if (x > direita) direita = x;
        if (y > base) base = y;
        if (x < esquerda) esquerda = x;
      }
    }
  }
  p.conteudo = { esquerda: Math.floor(esquerda / p.escala), direita: Math.ceil(direita / p.escala), base: Math.ceil(base / p.escala) };
}

fs.writeFileSync(path.join(destino, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log("manifest copiado");
