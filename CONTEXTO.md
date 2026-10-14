# Gradatim: contexto da landing page

Documento para retomar o trabalho de qualquer computador (ou numa sessão nova do Claude). Se for usar o Claude, peça para ele ler este arquivo antes de qualquer coisa.

Última atualização: 14 de outubro de 2026.

## O que é o Gradatim

Sistema online de gestão de consultório para psicólogos que atendem por conta própria, online ou presencial: pacientes, agenda, prontuário, financeiro, atendimento online (Google Meet) e lembretes num painel só, por um preço único sem add-ons. Só o profissional usa; o paciente não tem login nem app. O nome é latim para "passo a passo".

A aplicação já existe e fica em outro repositório: [splash-sites/saas-psicologia](https://github.com/splash-sites/saas-psicologia). O `CLAUDE.md` de lá é a fonte de verdade do produto (escopo, compliance CFP/LGPD, o que está fora do MVP).

Este repositório ([splash-sites/saas-lp](https://github.com/splash-sites/saas-lp)) é só a landing page pública, que vai ficar em gradatim.com.br. Os botões levam para `https://app.gradatim.com.br/login`, que serve tanto para criar conta quanto para entrar.

## Onde estamos

1. Montamos uma primeira versão em Astro com visual sóbrio (serifa, fundo claro). Foi descartada por parecer clássica demais.
2. Desenhamos três direções num canvas do Claude (bento colorido, "um dia de consultório" em azul cobalto e "noite, celular primeiro"). A escolhida foi a C, recolorida com a paleta do app.
3. A direção C está implementada neste repositório e o build passa. Ainda não foi publicada na Vercel.

Canvas com as três direções (privado, só abre na conta do Bernardo): https://claude.ai/artifact/9zqkrwcQqfd6YnSr1SaZVP

## Decisões já tomadas

Não reabrir sem motivo novo.

| Tema | Decisão |
|---|---|
| Domínio | gradatim.com.br (já comprado). App em app.gradatim.com.br |
| Stack | Astro estático, CSS puro, hospedagem na Vercel |
| Visual | Direção C: fundo verde-tinta `#12302B`, âmbar `#F0B93B` nas ações, teal `#0F766E` e névoa `#DFEBE7` nas telas claras, fonte Onest |
| Gênero | Neutro: falar com "você", evitar "psicólogo/psicóloga" na página |
| Preço | Card único com seletor mensal / trimestral / semestral, mensal selecionado por padrão |
| Cancelamento | "Cancele quando quiser, sem multa" |
| Pagamento | Pix, boleto ou cartão (Asaas) |
| Fluxo | Botão leva direto ao teste grátis de 14 dias, sem cartão. Sem lista de espera |
| Responsável no rodapé | Só "Gradatim" (sem nome de pessoa física) |
| Contato | Só WhatsApp (51) 8213-5882 (8 dígitos, sem o 9), segunda a sexta, das 9h às 18h |
| Rodapé completo | Igual ao da Prestio: marca, "Fale com a gente", "Documentos" e "Desenvolvido por Splash Sistemas" |
| Telas | Ilustrações em HTML/CSS com dados fictícios (trocar por prints reais quando houver) |
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

- [ ] Confirmar se as páginas legais mantêm "Bernardo Dornelles, Torres/RS" e o Gmail como contato. Estão assim porque vieram do app; o rodapé da home mostra só "Gradatim".
- [ ] A seção 8 da Política de Privacidade ("Este site", sobre não usar cookies e usar Vercel Analytics) existe só na landing. Levar para o app ou manter só aqui.
- FAQ da home tem 5 perguntas (cartão, assinatura vencida, cancelamento e exportação, celular, paciente instalar). O resto está coberto no bloco de sigilo.
- [ ] Trocar as telas desenhadas por prints reais do app com dados fictícios.
- [ ] Publicar na Vercel: importar este repositório, apontar gradatim.com.br e www para o projeto e ativar o Analytics no painel.
- [ ] Quando houver CNPJ, atualizar Privacidade e Termos aqui e no app.

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
| `src/pages/index.astro` | A home inteira: textos, telas dos celulares, FAQ e estilos da página |
| `src/styles/global.css` | Cores, fonte, botões e o modo privado (Alt+O) |
| `src/components/` | Cabeçalho, rodapé e logo |
| `src/layouts/Base.astro` | `<head>` com SEO, Open Graph, dados estruturados e Vercel Analytics |
| `src/pages/privacidade.astro`, `termos.astro` | Cópias das páginas do app; manter as duas versões iguais |
| `scripts/og.mjs` | Gera a imagem de prévia de compartilhamento |

## Tom dos textos

Próximo, claro, sem jargão de tecnologia, respeitoso com a profissão. Frases curtas, sem travessão e sem cara de texto de IA. Apresentar recursos como benefício, não como lista técnica.
