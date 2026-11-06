# Gradatim: contexto da landing page

Documento para retomar o trabalho de qualquer computador (ou numa sessão nova do Claude). Se for usar o Claude, peça para ele ler este arquivo antes de qualquer coisa.

Última atualização: 6 de novembro de 2026.

## O que é o Gradatim

Sistema online de gestão de consultório para psicólogos que atendem por conta própria, online ou presencial: pacientes, agenda, prontuário, financeiro, atendimento online (Google Meet) e lembretes num painel só, por um preço único sem add-ons. Só o profissional usa; o paciente não tem login nem app. O nome é latim para "passo a passo".

A aplicação já existe e fica em outro repositório: [splash-sites/saas-psicologia](https://github.com/splash-sites/saas-psicologia). O `CLAUDE.md` de lá é a fonte de verdade do produto (escopo, compliance CFP/LGPD, o que está fora do MVP). Desde 05/11/2026 o teste grátis é de 7 dias (eram 14).

Este repositório ([splash-sites/saas-lp](https://github.com/splash-sites/saas-lp)) é só a landing page pública, publicada em gradatim.com.br. Os botões levam para `https://app.gradatim.com.br/cadastro` (testar grátis, cria a conta direto) e `https://app.gradatim.com.br/login` (Entrar).

## Onde estamos

1. Montamos uma primeira versão em Astro com visual sóbrio (serifa, fundo claro). Foi descartada por parecer clássica demais.
2. Desenhamos três direções num canvas do Claude (bento colorido, "um dia de consultório" em azul cobalto e "noite, celular primeiro"). A escolhida foi a C, recolorida com a paleta do app.
3. A direção C está implementada neste repositório e publicada na Vercel, com gradatim.com.br apontado para o projeto.

Canvas com as três direções (privado, só abre na conta do Bernardo): https://claude.ai/artifact/9zqkrwcQqfd6YnSr1SaZVP

## Decisões já tomadas

Não reabrir sem motivo novo.

| Tema | Decisão |
|---|---|
| Domínio | gradatim.com.br (já comprado). App em app.gradatim.com.br |
| Stack | Astro estático, CSS puro, hospedagem na Vercel |
| Visual | Direção C: fundo verde-tinta `#12302B`, âmbar `#F0B93B` nas ações, teal `#0F766E` e névoa `#DFEBE7` nas telas claras, fonte Onest |
| Gênero | Neutro: falar com "você" no texto. Exceção de SEO (06/11/2026): título da aba, descrição, H1 ("Sistema para psicólogos autônomos": termo exato de busca + o nicho, para não disputar com sistemas de clínica) e alguns subtítulos usam os termos que as pessoas pesquisam |
| SEO | Termos-alvo: "sistema para psicólogos", "software para psicólogos", "prontuário psicológico", "agenda online para psicólogos". Home com dados estruturados de Organization (com `sameAs` do Instagram), WebSite, SoftwareApplication e FAQPage. Modelo copiado do PsicoManager (1º no Google em 06/11/2026): uma página por recurso, com H1 de benefício, H2 com a pergunta da dor, 4 dores, solução em cards, FAQ e CTA. Onde superamos: título e descrição únicos por página (eles repetem o mesmo nas 15), HTML estático com o texto (o deles é React e chega vazio, invisível para robôs de IA), canonical, breadcrumb e FAQ em dados estruturados, robots.txt liberando robôs de IA |
| Páginas de recurso | `/prontuario-psicologico`, `/agenda-para-psicologos`, `/atendimento-online-psicologos`, `/lembrete-de-consulta-whatsapp`, `/financeiro-para-psicologos` e `/seguranca`. Conteúdo em `src/data/recursos.ts`, página em `src/pages/[recurso].astro`. Ligadas pelo rodapé (coluna Recursos), pelos links "→" das seções da home e entre si |
| Instagram | @usegradatim (rodapé e `sameAs`) |
| Preço | Card único com seletor mensal / trimestral / semestral, mensal selecionado por padrão |
| Cancelamento | "Cancele quando quiser, sem multa" |
| Pagamento | Pix, boleto ou cartão (Asaas) |
| Fluxo | Botão leva direto ao teste grátis de 7 dias, sem cartão. Sem lista de espera |
| Responsável no rodapé | Só "Gradatim" (sem nome de pessoa física) |
| Contato | Só WhatsApp (51) 8213-5882 (8 dígitos, sem o 9), segunda a sexta, das 9h às 18h |
| Rodapé completo | Igual ao da Prestio: marca, "Fale com a gente", "Documentos" e "Desenvolvido por Splash Sistemas" |
| Telas | Prints reais do app (conta de teste com dados fictícios), recortados sem a barra lateral, em `src/assets/prints/`. O Astro gera AVIF e WebP com PNG de fallback. Topo: painel no computador + agenda do dia no celular. Agenda: semana inteira + cartão da videochamada. Prontuário, Financeiro, Lembretes e Modo privado (par normal/borrado que alterna com o botão e o Alt+O) ao lado do texto. Para refazer os recortes: `node scripts/recortar-prints.mjs <pasta dos prints>` |
| Fundadores | Não entram na página por enquanto |
| Analytics | Vercel Analytics, sem cookies e sem banner. Sem anúncios |
| Privacidade e Termos | Copiados do app para `/privacidade` e `/termos` na landing |

## O que não pode aparecer na página

O produto não tem nada disto hoje, então não prometer, nem como "em breve":

- Inteligência artificial, transcrição ou evolução automática.
- Lembrete 100% automático pelo WhatsApp (hoje é um clique do profissional) ou confirmação automática pelo paciente.
- Portal, app ou autoagendamento do paciente; paciente pagando pela plataforma.
- Recibo ou nota fiscal; app nas lojas; clínicas com vários profissionais; importar eventos do Google Agenda.
- Selos ou certificações. Usar "pensado para a Resolução CFP 01/2009" e "dados tratados conforme a LGPD", nunca "certificado".
- Depoimentos, número de clientes ou logos de parceiros (ainda não há clientes).

## Requisito do Google

O app pede acesso ao Google Agenda, e o Google exige uma página inicial pública que explique o produto, diga por que e como usa a Agenda e tenha links para Privacidade e Termos no mesmo domínio. Isso está no bloco de sigilo da home (âncora `#google-agenda`, linkada no rodapé) e nas páginas `/privacidade` e `/termos`. Não remover.

## Pendências

- [x] Privacidade e Termos atualizados (15/10/2026) com o texto novo do app e contato contato@splashsistemas.com.br.
- [x] A seção "Este site" da Política de Privacidade (hoje a 10, sobre não usar cookies e usar Vercel Analytics) fica só na landing (decidido em 06/11/2026). O app não usa o Vercel Analytics, então a política dele termina na seção 9.
- FAQ da home tem 5 perguntas (cartão, assinatura vencida, cancelamento e exportação, celular, paciente instalar). O resto está coberto no bloco de sigilo.
- [x] Teste grátis trocado de 14 para 7 dias em todos os textos e na imagem de compartilhamento (06/11/2026). O print `src/assets/tutoriais/assinatura-planos.png` ainda mostra "13 dias" restantes; atualizar quando os prints forem refeitos.
- [x] Prints reais no lugar dos mockups (14/10/2026). Ao mudar a interface do app, gerar de novo (ver `PRINTS.md`) e rodar `scripts/recortar-prints.mjs`.
- [x] Publicado na Vercel com gradatim.com.br apontado.
- [x] SEO fase 1 (06/11/2026): 6 páginas de recurso, links internos, robots.txt e Instagram.
- [ ] SEO: enviar `https://gradatim.com.br/sitemap-index.xml` no Search Console (o domínio já está verificado pelo TXT no registro.br) e pedir indexação das páginas novas.
- [ ] SEO fase 2: `/planos` (comparativo e FAQ) e `/quem-somos` (só a empresa, sem fundadores).
- [ ] SEO fase 3: blog em `/blog` no próprio domínio, programa de indicação, Capterra e listas de "melhores sistemas".
- [ ] Quando houver CNPJ, atualizar Privacidade e Termos aqui e no app. Até lá o serviço roda como pessoa física (Bernardo).

## Como rodar

Precisa de Node 20 ou mais novo.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run og       # regenera public/og.png
```

Nesta máquina o servidor de desenvolvimento roda na porta 4330 (configurado em `.claude/launch.json`) porque a 4321 estava ocupada.

## Onde fica cada coisa

| Arquivo | O que tem |
|---|---|
| `src/consts.ts` | URLs, WhatsApp e preços. Mudou um valor, muda aqui |
| `src/pages/index.astro` | A home: ordem das seções, textos, FAQ e estilos da página |
| `src/components/Navegador.astro`, `Celular.astro` | Molduras em volta dos prints |
| `src/assets/prints/` | Prints recortados usados na home |
| `src/styles/global.css` | Cores, fonte, botões e o modo privado (Alt+O) |
| `src/components/` | Cabeçalho, rodapé e logo |
| `src/layouts/Base.astro` | `<head>` com SEO, Open Graph, dados estruturados e Vercel Analytics |
| `src/pages/privacidade.astro`, `termos.astro` | Cópias das páginas do app; manter as duas versões iguais |
| `scripts/og.mjs` | Gera a imagem de prévia de compartilhamento |

## Tom dos textos

Próximo, claro, sem jargão de tecnologia, respeitoso com a profissão. Frases curtas, sem travessão e sem cara de texto de IA. Apresentar recursos como benefício, não como lista técnica.

## Identidade visual

Pacote completo em `gradatim-marca.zip` (mesmo formato do `prestio-marca.zip`), com `LEIA-ME.txt` dentro.

- **Símbolo:** escada de três degraus em verde-tinta dentro de um círculo âmbar.
- **Logo:** símbolo + "gradatim" em Onest Bold, sempre em minúsculas, texto convertido em contorno.
- **Versões:** `gradatim-logo` (fundo claro), `-fundo-claro`, `-negativo` (fundo escuro), `-fundo-escuro` e `gradatim-simbolo`, em SVG e PNG de 2000 px.
- **Foto de perfil 1080×1080:** `gradatim-perfil` (símbolo sobre verde-tinta) e `gradatim-perfil-ambar` (escada sobre âmbar).
- **Favicons:** svg, ico, 32, apple-touch 180, 192 e 512. Já estão em `public/` e ligados no `<head>`.
- **Onde ficam:** os SVGs das logos estão em `public/marca/`. Para regenerar tudo, rode `npm run marca` (sai em `marca-gerada/`).

## Tutoriais (/tutorial)

- Página `/tutorial`: lista dos 36 tutoriais com busca (ignora acentos, aceita `?q=`), filtro por área, "Comece por aqui" e ícones do Lucide por área. Cada tutorial tem sua página em `/tutorial/<slug>`.
- Conteúdo em `src/data/tutoriais.ts`: passos, texto e, em cada passo, o print e os alvos (rótulos do manifest). O primeiro alvo é o principal (destaque pulsando, cursor e etiqueta); `numerar: true` marca vários alvos com números.
- Prints em `src/assets/tutoriais/` com o `manifest.json` (coordenadas dos botões). O componente `src/components/PrintTutorial.astro` desenha as marcações por cima e corta a barra lateral e o fundo vazio quando eles não importam para o passo.
- Para atualizar os prints: gere de novo no app com o prompt de `PROMPT-PRINTS-TUTORIAIS.md` e rode `node scripts/preparar-tutoriais.mjs <pasta prints-tutoriais>`. O script copia os prints, cobre o e-mail da conta de teste no rodapé da barra lateral e mede onde termina o conteúdo de cada tela.
- Se um alvo citado em `tutoriais.ts` sumir do manifest, o build falha com o nome do alvo e do print.
