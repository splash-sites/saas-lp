# Prints reais do app para a landing

> Feito em 14/10/2026: os prints estão em `src/assets/prints/`, recortados por `scripts/recortar-prints.mjs`. Esta lista fica como referência para refazê-los quando a interface do app mudar.

A landing usa prints reais do app, tirados de uma conta de demonstração. Para refazê-los:

## Antes de tirar

- Crie uma conta só para isso, com **dados fictícios**. Nunca use paciente real, nem borrado.
- Use os mesmos nomes de exemplo da landing, para manter a coerência: Marina Souza, Caio Ferreira, Joana Martins, Helena Prado, Renata Alves, Marcos Vieira, Igor Duarte, Sofia Lima, Paulo Reis, Bruno Costa, Teresa Gomes, Ana Barros.
- Monte uma semana cheia na agenda: online e presencial, uma consulta recorrente, um horário bloqueado (almoço), uma falta e uma consulta confirmada.
- Lance alguns pagamentos: pagos, um pendente e um atrasado. Tente ter mais de um mês de histórico.
- Registre a evolução de pelo menos uma sessão com os 4 campos preenchidos.

## Como tirar

- Use o Chrome com zoom em 100%, sem extensões e sem a barra de favoritos.
- Para print com qualidade de tela retina, abra o DevTools (F12) e ative o modo dispositivo (Ctrl+Shift+M). Escolha "Responsive", digite a largura indicada abaixo, coloque o DPR em 2 e use o menu ⋮ › "Capture screenshot".
- Salve em PNG, só a área do app, sem a barra do navegador. A moldura de navegador é desenhada pela própria landing.
- Coloque os arquivos em `public/prints/` com os nomes abaixo.

## Lista

| Arquivo | Tela no app | Largura | O que precisa aparecer |
|---|---|---|---|
| `painel.png` | `/dashboard` | 1280 px | Saudação, os 4 números do topo, a lista de hoje e os avisos de evoluções pendentes e lembretes |
| `agenda.png` | `/agenda` (semana) | 1280 px | Semana cheia com online, presencial, bloqueio, falta e confirmada |
| `agenda-consulta.png` | detalhe de uma consulta online | 1280 px | Link do Google Meet, botão de copiar e "Sincronizada com o Google" |
| `prontuario.png` | evolução de uma sessão | 900 px | Os 4 campos preenchidos e o botão "Prontuário (PDF)" |
| `financeiro.png` | `/financeiro` | 900 px | Recebido no mês, a receber, atrasados e a lista com pago, pendente e atrasado |
| `lembretes.png` | `/lembretes` | 900 px | Consultas de amanhã com o botão "Enviar no WhatsApp" e uma já enviada |
| `lembretes-whatsapp.png` | celular, WhatsApp aberto pelo botão | tela do celular | A conversa com a mensagem pronta no campo, antes de enviar |
| `pacientes.png` | `/pacientes` | 900 px | Lista com nome, telefone e status |
| `pacientes-privado.png` | `/pacientes` com Alt+O | 900 px | A mesma lista, com o modo privado ligado |

Os prints de 1280 px entram com a largura toda na página (Painel e Agenda). Os de 900 px entram menores, ao lado do texto (Prontuário, Financeiro, Lembretes e Modo privado).

Quando os arquivos estiverem em `public/prints/`, peça para o Claude trocar os mockups pelos prints. O modo privado vira um par antes/depois que alterna com o botão.
