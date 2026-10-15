# Tutoriais: mapeamento dos artigos

Página `/tutorial` da landing: **Tutoriais**. Aprenda a usar o Gradatim com demonstrações e tutoriais.

Formato de blog com busca. Cada artigo é um passo a passo curto. Cada passo tem um print real do app, com uma marcação por cima (cursor grande, seta ou destaque) mostrando onde clicar.

Mapeado a partir do código do app (`splash-sites/saas-psicologia`, commit `33bbb9a`, 15/10/2026). Os nomes de botões e campos estão escritos como aparecem na tela.

Legenda: ★ = prioridade para o lançamento. 📸 = prints necessários.

---

## 1. Primeiros passos

### 1.1 ★ Criar sua conta
1. Abra app.gradatim.com.br e escolha **Entrar com Google**. Ou, para usar e-mail, clique em **Não tem conta? Criar uma**.
2. No cadastro por e-mail, preencha **Nome completo**, **E-mail**, **Senha** e **Confirmar senha** e clique em **Criar conta**.
3. Confirme o e-mail pelo link que chega na sua caixa de entrada e entre.
4. O teste grátis de 14 dias começa no cadastro, sem cartão.

📸 tela de login (botão Google + link de criar conta) · formulário de cadastro

### 1.2 ★ Conhecer o painel
- Os 4 cartões: **Consultas hoje**, **Evoluções pendentes**, **Lembretes a enviar**, **Recebido no mês** (com o previsto). Cada um leva à tela correspondente.
- Atalhos: **Nova consulta**, **Novo paciente**, **Novo lançamento** e o aviso de pagamento atrasado.
- O bloco **Evoluções pendentes**, com **Registrar evolução**.
- As listas **Hoje** e **Próximos dias**.

📸 painel (já existe: `painel.png`)

### 1.3 Usar no celular
- O menu fica no ícone ☰ no topo. O ícone de olho ao lado liga o modo privado.
- A agenda mostra um dia por vez. Toque no dia da semana para trocar.
- Nas consultas online, o botão **Entrar no Meet** aparece direto na lista.

📸 agenda no celular (já existe: `agenda-celular.png`) · menu aberto no celular

### 1.4 ★ Conectar o Google Agenda
1. Vá em **Configurações**.
2. Clique em **Conectar Google Calendar** e autorize o acesso à Agenda.
3. Se o Google não liberar a permissão da Agenda, use **Reconectar**.
4. Para parar a sincronização, use **Desconectar**. O app continua funcionando sem o Google.

📸 Configurações (seção Google) · tela de autorização do Google (opcional)

---

## 2. Pacientes

### 2.1 ★ Cadastrar um paciente
1. **Pacientes** → **Novo paciente** (ou o atalho no painel).
2. Preencha **Nome** (obrigatório) e, se quiser, **Telefone**, **E-mail**, **CPF**, **Data de nascimento**, **Endereço**, **Status** e **Observações**.
3. Deixe marcado **Aceita receber lembretes de consulta**. Desmarque se o paciente não quiser ser contatado.
4. Salve.

📸 lista de pacientes (já existe) · formulário de novo paciente

### 2.2 ★ Preencher a anamnese
1. Abra a ficha do paciente.
2. Na **Avaliação inicial (anamnese)**, preencha **Demanda / queixa inicial**, **Objetivos do trabalho** e **Histórico relevante**.
3. Clique em **Salvar anamnese**.

📸 ficha do paciente com a anamnese

### 2.3 Mudar o status: ativo, inativo ou alta
Ficha do paciente → **Editar** → campo **Status** → salvar.

📸 formulário de edição com o campo Status

### 2.4 Chamar o paciente no WhatsApp
Na ficha do paciente, o botão **WhatsApp** abre a conversa com o número cadastrado.

📸 ficha do paciente (botão WhatsApp)

### 2.5 Excluir um paciente
Ficha do paciente → **Excluir paciente**. O registro é arquivado, não apagado, por causa da guarda mínima de 5 anos do prontuário.

📸 fim da ficha com o botão

---

## 3. Agenda

### 3.1 ★ Marcar uma consulta
1. **Agenda** → **Nova consulta**. Ou clique num horário vazio da grade, que já preenche a data e a hora.
2. Escolha o **Paciente** e confira **Data**, **Hora** e **Duração (min)** (padrão de 50 min).
3. Escolha a **Modalidade**: Online ou Presencial.
4. Clique em **Agendar**.

📸 grade com o cursor num horário vazio · formulário de nova consulta

### 3.2 ★ Consulta recorrente (semanal, quinzenal ou mensal)
No formulário da consulta, em **Recorrência**, escolha **Semanal**, **Quinzenal** ou **Mensal** e informe o **Nº de ocorrências** (de 2 a 52).

📸 formulário com Recorrência aberta e o campo de ocorrências

### 3.3 ★ Consulta online e link do Google Meet
1. Marque a consulta como **Online**, com o Google Agenda conectado (ver 1.4).
2. O link do Meet é criado na sincronização com o Google. Em **Mais detalhes**, ele aparece com **Copiar link** e o aviso **Sincronizada com o Google**. Se precisar, use **Sincronizar agora**.
3. Na hora da sessão, use **Entrar no Meet** no painel da consulta. O botão fica em destaque 10 minutos antes.

📸 detalhe da consulta (já existe: `agenda-consulta.png`) · painel lateral com Entrar no Meet

### 3.4 ★ O painel da consulta: confirmar, marcar falta, ver pagamento
Clique numa consulta da agenda para abrir o painel lateral. Nele:
- **Presença**: **Paciente confirmou** (ou **Desfazer confirmação**), **Marcar realizada**, **Marcar falta** e **Voltar para agendada**.
- **Pagamento**: o lançamento da sessão, ou **lançar agora**.
- **Lembrete**: se o WhatsApp já foi enviado.
- **Prontuário**: se a evolução está registrada, pendente ou não é exigida (falta não exige evolução).

📸 painel lateral da consulta aberto sobre a agenda

### 3.5 Remarcar ou cancelar
- **Remarcar**: altere data, hora, duração, modalidade ou status e salve.
- **Cancelar**: cancela só esta consulta.
- **Cancelar esta e as próximas da série**: aparece nas consultas recorrentes.

📸 rodapé do painel lateral · formulário de remarcar

### 3.6 Bloquear horários (almoço, férias, compromissos)
1. **Agenda** → **Bloqueios** → **Bloquear horário**.
2. Informe **Data**, **Início**, **Fim** e o **Motivo**, se quiser.
3. Para liberar, use **Remover** na lista de bloqueios.

📸 lista de bloqueios · formulário de bloqueio

### 3.7 Entender a agenda
- Navegação por semana, botão **Hoje**, mostrar ou ocultar canceladas.
- Contadores: consultas, confirmadas, a confirmar, canceladas e faltas.
- Ícones de cada consulta: online, presencial, recorrente, pagamento pendente e evolução pendente.
- Cores: realizada, confirmada, a confirmar (borda tracejada) e faltou.

📸 agenda semanal (já existe: `agenda.png`), com legenda dos ícones

---

## 4. Prontuário

### 4.1 ★ Registrar a evolução de uma sessão
1. Use **Registrar evolução**, que aparece no painel, no painel da consulta e na agenda do celular. Ou vá à ficha do paciente → **Nova evolução**.
2. Confira a **Data da sessão**.
3. Preencha os quatro campos: **Avaliação da demanda / objetivos**, **Procedimentos aplicados**, **Resultados obtidos** e **Encaminhamentos / decisões**.
4. Se quiser, use **Notas técnicas privadas**, anotações só suas e separadas da evolução.
5. Salve.

📸 formulário de evolução preenchido · evolução salva (já existe: `prontuario.png`)

### 4.2 Ver o histórico de evoluções
Ficha do paciente → **Evoluções**: a lista de sessões em ordem.

📸 lista de evoluções do paciente

### 4.3 Editar ou arquivar uma evolução
Abra a evolução → **Editar** ou **Arquivar evolução**. Arquivar não apaga o registro.

📸 evolução com os botões Editar e Arquivar

### 4.4 O que conta como evolução pendente
Uma sessão encerrada sem registro no prontuário aparece como pendente no painel (últimos 14 dias). Falta não exige evolução.

📸 bloco de evoluções pendentes do painel (recorte do `painel.png`)

### 4.5 ★ Baixar o prontuário em PDF
Ficha do paciente → **Prontuário (PDF)**. O download inclui as notas privadas.

📸 ficha do paciente com o botão

---

## 5. Financeiro

### 5.1 ★ Lançar um pagamento
1. **Financeiro** → **Novo lançamento**. Ou, no painel da consulta, use **lançar agora**, que já vincula a sessão.
2. Escolha o **Paciente** e, se quiser, a consulta. Só aparecem as que ainda não têm lançamento; também dá para fazer um lançamento avulso.
3. Informe o valor e escolha **Já recebi** (data do pagamento) ou **Ainda vou receber** (vencimento).
4. Preencha a **Forma de pagamento** (Pix, dinheiro, cartão...) e as **Observações**, se quiser. Salve.

📸 formulário de novo lançamento com Já recebi / Ainda vou receber

### 5.2 ★ Marcar como pago
Na lista do Financeiro, clique em **Marcar como pago** no lançamento pendente ou atrasado. Para voltar atrás, abra o lançamento → **Desmarcar pagamento**.

📸 lista do financeiro (já existe: `financeiro.png`)

### 5.3 Recebido, a receber e atrasado
- **Recebido no mês**: o que já foi pago.
- **A receber (lançado no mês)**: o que está pendente.
- **Atrasado**: pendente com o vencimento já passado.

📸 os 3 cartões do topo do Financeiro

### 5.4 Histórico mensal
**Financeiro** → **Histórico mensal**: recebido, a receber e lançamentos de cada mês.

📸 tela de histórico

### 5.5 Editar ou arquivar um lançamento
Abra o lançamento → **Editar** ou **Arquivar lançamento**.

📸 detalhe do lançamento

---

## 6. Lembretes

### 6.1 ★ Enviar os lembretes de amanhã pelo WhatsApp
1. Vá em **Lembretes**. A lista mostra as consultas do dia padrão (amanhã), e dá para navegar com **Dia anterior** e **Dia seguinte**.
2. Clique em **Enviar no WhatsApp**. A conversa abre com a mensagem pronta, no seu WhatsApp.
3. Envie a mensagem. O Gradatim marca **Enviado às…**, e **Enviar de novo** fica disponível.
4. Se não aparecer o botão, o motivo é mostrado: **Paciente não aceita lembretes** ou **Sem telefone válido**.

📸 lembretes (já existe: `lembretes.png`) · conversa aberta no WhatsApp (opcional)

### 6.2 Editar a mensagem e a antecedência
**Lembretes** → **Editar mensagem** (ou **Configurações**):
- **Mensagem do lembrete no WhatsApp**, com as variáveis **{nome}**, **{data}**, **{hora}**, **{modalidade}** e **{link}**.
- **Lembrar com antecedência de (horas)**, até 168 (7 dias).
- Salve em **Salvar preferências**.

📸 formulário de preferências de lembrete

### 6.3 Convite por e-mail pelo Google Agenda
Em **Configurações**, marque **Convidar o paciente pelo Google Agenda**. O paciente recebe o convite da consulta por e-mail, com remarcação e cancelamento, se:
- o Google estiver conectado;
- o paciente aceitar lembretes;
- o paciente tiver e-mail cadastrado.

📸 a opção nas preferências

---

## 7. Privacidade e seus dados

### 7.1 ★ Modo privado para compartilhar a tela
Clique em **Ocultar dados** na barra lateral ou aperte **Alt+O**. Nomes e valores ficam borrados. Para voltar, clique em **Mostrar dados** ou aperte Alt+O de novo. A preferência fica salva no navegador.

📸 pacientes normal e borrado (já existem)

### 7.2 Exportar todos os dados
**Configurações** → **Exportar dados** → **Exportar todos os dados (.zip)**. O arquivo traz planilhas CSV da conta inteira. Funciona mesmo com a assinatura vencida.

📸 seção de exportação nas Configurações

### 7.3 Desconectar o Google
**Configurações** → **Desconectar**. A agenda continua funcionando, só para de ir para o Google.

📸 seção do Google nas Configurações

---

## 8. Assinatura

### 8.1 ★ Assinar depois do teste grátis
1. Vá em **Assinatura**.
2. Escolha o plano: mensal, trimestral (10% off) ou semestral (15% off).
3. Informe **CPF ou CNPJ** e clique em **Assinar plano**.
4. Pague na página do Asaas, por Pix, boleto ou cartão. Se já pagou e o status não mudou, use **Já paguei, verificar agora**.

📸 tela de assinatura com os planos

### 8.2 Ver a cobrança e o vencimento
**Assinatura** → **Cobrança**: plano, **Próximo vencimento** e **Ver / pagar cobrança**.

📸 seção Cobrança

### 8.3 O que acontece se a assinatura vencer
A conta fica em modo somente leitura. Você continua vendo e exportando tudo, mas não cadastra nada novo até regularizar com **Regularizar assinatura**.

📸 aviso de assinatura no topo do app

### 8.4 Cancelar a assinatura
**Assinatura** → **Cancelar assinatura**.

📸 seção com o botão

---

## Pontos de atenção encontrados

- **Nome antigo no app:** a barra lateral, a tela de login e o topo do celular ainda mostram "Gestão para Psicólogos". Nos tutoriais a barra lateral aparece de propósito (é onde a pessoa clica), então vale trocar o nome para Gradatim no app antes de tirar esses prints.
- **Sem "Esqueci minha senha":** a tela de login por e-mail não tem recuperação de senha. Ou o app ganha isso, ou o tutorial de criar conta fica sem esse tópico.
- **Bloqueio de um dia por vez:** o bloqueio de horário vale para uma data. O almoço que aparece todos os dias nos prints foi cadastrado dia a dia. O tutorial 3.6 descreve exatamente isso.
- **Total:** 36 artigos, 16 com ★. Sugestão: lançar com os ★ e completar o resto depois.
