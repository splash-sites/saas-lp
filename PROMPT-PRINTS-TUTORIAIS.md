# Prompt: prints para os tutoriais

Rodar numa sessão do Claude Code aberta no repositório do app (`saas-psicologia`), numa máquina com Docker. Colar o texto abaixo.

```text
Preciso dos prints do app para a página de Tutoriais da landing do Gradatim. Cada tutorial é um passo a passo, e cada passo mostra um print com uma marcação de onde clicar. Eu desenho as marcações depois, na landing. De você preciso dos prints e das coordenadas dos botões.

0. Antes de tudo
- Tudo LOCAL: Supabase local + next dev, como no `npm run visual`. Nada de Vercel nem conta real.
- Confira o nome no app. Se a barra lateral, o topo do celular ou o login ainda mostrarem "Gestão para Psicólogos", PARE e me pergunte se quero trocar o nome para "Gradatim" no app antes. Nesses prints a barra lateral aparece, porque mostra onde clicar no menu.
- Reaproveite a conta demo@teste.local e os dados fictícios da rodada anterior (pacientes Marina Souza, Caio Ferreira, Joana Martins, Helena Prado, Renata Alves, Marcos Vieira, Igor Duarte, Sofia Lima, Paulo Reis, Bruno Costa, Teresa Gomes, Ana Barros e Lucas Teixeira inativo). Complete o que faltar:
  - um paciente que NÃO aceita lembretes e outro sem telefone, ambos com consulta amanhã (para a tela de lembretes mostrar os dois avisos);
  - uma consulta futura recorrente (semanal) e uma consulta online futura e confirmada;
  - um bloqueio futuro com motivo "Almoço" e outro "Férias";
  - pelo menos 6 meses de histórico financeiro;
  - a Marina com anamnese preenchida e várias evoluções.
- Para os prints do Google, use o mesmo truque do banco local da rodada anterior (link fictício do Meet e status "sincronizada"). Para "Conectar Google Calendar", fotografe a tela no estado desconectado; não precisa autorizar de verdade.

1. Como tirar
- Playwright com Chrome/Edge, deviceScaleFactor 2, PNG.
- Computador: viewport 1280x800, com a barra lateral. Use página inteira só onde eu indicar.
- Celular: viewport 390x844.
- Espere a página carregar por completo antes de cada print.
- Para CADA print, grave no manifest as caixas dos elementos-alvo (getBoundingClientRect em px CSS, relativas ao topo da página inteira), com um rótulo curto:
  prints-tutoriais/manifest.json → [{ "arquivo": "agenda.png", "viewport": [1280,800], "paginaInteira": false, "alvos": [{ "rotulo": "Nova consulta", "x":0, "y":0, "w":0, "h":0 }] }]
- Salve tudo em prints-tutoriais/ (fora do src e no .gitignore). Não faça commit.

2. Lista (arquivo · tela · alvos)
Primeiros passos
- login.png · /login deslogado · "Entrar com Google", "Não tem conta? Criar uma"
- login-criar-conta.png · /login com o formulário de cadastro aberto e preenchido com dados fictícios · campos Nome completo, E-mail, Senha, Confirmar senha; botão "Criar conta"
- painel.png · /dashboard · os 4 cartões, "Nova consulta", "Novo paciente", "Novo lançamento", bloco "Evoluções pendentes" e o botão "Registrar evolução"
- celular-menu.png · celular, menu ☰ aberto · botão do menu, botão de ocultar dados, itens do menu
- celular-agenda.png · celular, /agenda no dia de hoje · "Entrar no Meet", seletor de dias
- configuracoes-google.png · /configuracoes, Google desconectado · "Conectar Google Calendar"
- configuracoes-google-conectado.png · /configuracoes, Google conectado (banco local) · botão de desconectar

Pacientes
- pacientes.png · /pacientes · "Novo paciente", um item da lista
- paciente-novo.png · /pacientes/novo preenchido (página inteira) · campo Nome, "Aceita receber lembretes de consulta", botão de salvar
- paciente-ficha.png · ficha da Marina (página inteira) · "WhatsApp", "Prontuário (PDF)", "Editar", bloco da anamnese, "Salvar anamnese", "Nova evolução", "Excluir paciente"
- paciente-editar.png · /pacientes/[id]/editar · campo Status

Agenda
- agenda.png · /agenda semana atual · "Nova consulta", "Bloqueios", "Hoje", setas de semana, um horário vazio, uma consulta qualquer
- consulta-nova.png · /agenda/nova preenchido, Modalidade Online (página inteira) · Paciente, Data, Hora, Duração, Modalidade, "Agendar"
- consulta-nova-recorrente.png · /agenda/nova com Recorrência = Semanal e "Nº de ocorrências" visível · Recorrência, Nº de ocorrências
- painel-consulta.png · /agenda?consulta=<id> de uma consulta FUTURA agendada e recorrente · "Paciente confirmou", "Marcar falta", linhas Pagamento, Lembrete e Prontuário, "Remarcar", "Cancelar", "Cancelar esta e as próximas da série", "Mais detalhes"
- painel-consulta-online.png · /agenda?consulta=<id> da consulta online confirmada de hoje ou próxima · "Entrar no Meet"
- agenda-consulta.png · /agenda/<id> da consulta online · link do Meet, "Copiar link", "Sincronizada com o Google", "Sincronizar agora"
- consulta-remarcar.png · /agenda/<id>/editar · Data, Hora, Status, botão de salvar
- bloqueios.png · /agenda/bloqueios · botão de novo bloqueio, "Remover"
- bloqueio-novo.png · /agenda/bloqueios/novo preenchido · Data, Início, Fim, Motivo, "Bloquear horário"

Prontuário
- evolucao-nova.png · nova evolução da Marina preenchida (página inteira) · Data da sessão, os 4 campos, "Notas técnicas privadas", botão de salvar
- evolucoes-lista.png · /pacientes/<id>/evolucoes · um item da lista
- evolucao-detalhe.png · uma evolução aberta · "Editar", "Arquivar evolução"

Financeiro
- financeiro.png · /financeiro (página inteira) · "Novo lançamento", "Histórico mensal", os 3 cartões, um "Marcar como pago"
- financeiro-novo-recebido.png · /financeiro/novo com "Já recebi" marcado e preenchido · Paciente, consulta, valor, "Já recebi", Data do pagamento, Forma de pagamento, botão de salvar
- financeiro-novo-areceber.png · o mesmo com "Ainda vou receber" · "Ainda vou receber", Vencimento
- lancamento-detalhe.png · /financeiro/<id> de um pago · "Editar", "Desmarcar pagamento", "Arquivar lançamento"
- financeiro-historico.png · /financeiro/historico · a tabela

Lembretes
- lembretes.png · /lembretes de amanhã (página inteira) · "Enviar no WhatsApp", "Enviado às…", "Enviar de novo", os avisos "Paciente não aceita lembretes" e "Sem telefone válido", "Editar mensagem", "Dia seguinte"
- configuracoes-lembretes.png · /configuracoes, preferências de lembrete · "Lembrar com antecedência de (horas)", "Mensagem do lembrete no WhatsApp", "Convidar o paciente pelo Google Agenda", "Salvar preferências"

Privacidade
- privado-desligado.png · /pacientes com o botão "Ocultar dados" visível · "Ocultar dados"
- privado-ligado.png · /pacientes com Alt+O ligado · "Mostrar dados"
- configuracoes-exportar.png · /configuracoes, seção Exportar dados · "Exportar todos os dados (.zip)"

Assinatura (use o modo simulado do Asaas)
- assinatura-planos.png · /assinatura no teste grátis · os 3 planos, CPF ou CNPJ, "Assinar plano"
- assinatura-cobranca.png · /assinatura depois de "Simular pagamento confirmado" · plano, Próximo vencimento, "Ver / pagar cobrança", "Cancelar assinatura"
- assinatura-vencida.png · qualquer tela com o aviso de assinatura vencida no topo (no banco local, ligue a trava e deixe a assinatura vencida só para o print, depois desfaça) · "Regularizar assinatura"

3. Entrega
- Abra cada print e confira: sem dado real, sem erro na tela, sem texto cortado, alvos dentro do print.
- Compacte prints-tutoriais/ (com o manifest.json) em prints-tutoriais.zip e me diga o caminho.
- Se alguma tela ou botão da lista não existir com esse nome, não invente: anote no fim do manifest em "faltando".
```
