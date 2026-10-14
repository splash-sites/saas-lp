// Recorta os prints reais do app (gerados no repositório saas-psicologia) para
// a landing: tira a barra lateral, que ainda mostra o nome antigo e o e-mail da
// conta de teste. Uso: node scripts/recortar-prints.mjs <pasta-dos-prints>
import sharp from "sharp";
import path from "node:path";

const origem = process.argv[2];
if (!origem) throw new Error("Informe a pasta dos prints.");
const destino = "src/assets/prints";

// [arquivo de origem, arquivo de saída, left, top, width, height] em pixels do print (2x).
const recortes = [
  ["painel.png", "painel.png", 500, 0, 2060, 1600],
  ["agenda.png", "agenda.png", 500, 0, 2060, 1600],
  ["agenda-consulta.png", "agenda-consulta.png", 515, 690, 1400, 340],
  ["prontuario.png", "prontuario.png", 500, 0, 1300, 1000],
  ["financeiro.png", "financeiro.png", 500, 0, 1300, 1745],
  ["lembretes.png", "lembretes.png", 500, 0, 1300, 980],
  ["pacientes.png", "pacientes.png", 500, 0, 1300, 1060],
  ["pacientes-privado.png", "pacientes-privado.png", 500, 0, 1300, 1060],
  ["agenda-celular.png", "agenda-celular.png", 0, 112, 780, 1576],
];

for (const [de, para, left, top, width, height] of recortes) {
  await sharp(path.join(origem, de))
    .extract({ left, top, width, height })
    .png({ compressionLevel: 9 })
    .toFile(path.join(destino, para));
  console.log(para, `${width}x${height}`);
}
