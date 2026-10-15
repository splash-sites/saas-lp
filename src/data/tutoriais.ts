// Conteúdo da página /tutorial. Cada passo aponta para um print de
// src/assets/tutoriais/ e para os alvos (rótulos do manifest.json) que a
// página destaca por cima do print. O primeiro alvo é o principal.
//
// texto: HTML simples (<b>, <a>). É conteúdo nosso, renderizado com set:html.

export type Passo = {
  titulo: string;
  texto: string;
  print?: string;
  alvos?: string[];
  /** Marca os alvos com números (formulários) em vez de cursor e etiqueta. */
  numerar?: boolean;
  /** Texto da etiqueta do alvo principal. Sem ele, usa o rótulo do manifest. */
  etiqueta?: string;
  /** Recorte vertical do print, em px CSS: [topo, base]. */
  recorte?: [number, number];
};

export type Tutorial = {
  slug: string;
  categoria: CategoriaId;
  titulo: string;
  resumo: string;
  destaque?: boolean;
  antes?: string;
  passos: Passo[];
  dica?: string;
};

export type CategoriaId =
  | "inicio"
  | "pacientes"
  | "agenda"
  | "prontuario"
  | "financeiro"
  | "lembretes"
  | "privacidade"
  | "assinatura";

export const CATEGORIAS: { id: CategoriaId; nome: string }[] = [
  { id: "inicio", nome: "Primeiros passos" },
  { id: "pacientes", nome: "Pacientes" },
  { id: "agenda", nome: "Agenda" },
  { id: "prontuario", nome: "Prontuário" },
  { id: "financeiro", nome: "Financeiro" },
  { id: "lembretes", nome: "Lembretes" },
  { id: "privacidade", nome: "Privacidade e dados" },
  { id: "assinatura", nome: "Assinatura" },
];

const link = (slug: string, texto: string) => `<a href="/tutorial/${slug}">${texto}</a>`;

export const TUTORIAIS: Tutorial[] = [
  // ---------- Primeiros passos ----------
  {
    slug: "criar-conta",
    categoria: "inicio",
    titulo: "Criar sua conta",
    resumo: "Com Google ou com e-mail e senha. O teste de 14 dias começa na hora.",
    destaque: true,
    passos: [
      {
        titulo: "Abra a tela de entrada",
        texto:
          "Acesse <b>app.gradatim.com.br</b>. Para usar sua conta Google, clique em <b>Entrar com Google</b>: é o jeito mais rápido e já libera a integração com a Agenda. Para usar e-mail e senha, clique em <b>Não tem conta? Criar uma</b>.",
        print: "login.png",
        alvos: ["Não tem conta? Criar uma", "Entrar com Google"],
        etiqueta: "Criar conta com e-mail",
      },
      {
        titulo: "Preencha o cadastro",
        texto:
          "Informe ① <b>Nome completo</b>, ② <b>E-mail</b>, ③ <b>Senha</b> e ④ <b>Confirmar senha</b>, e clique em ⑤ <b>Criar conta</b>.",
        print: "login-criar-conta.png",
        alvos: ["Nome completo", "E-mail", "Senha", "Confirmar senha", "Criar conta"],
        numerar: true,
      },
      {
        titulo: "Confirme o e-mail",
        texto:
          "Abra o e-mail de confirmação que chega na sua caixa de entrada e clique no link. Depois é só entrar. O teste grátis de 14 dias começa no cadastro, sem cartão.",
      },
    ],
  },
  {
    slug: "conhecer-o-painel",
    categoria: "inicio",
    titulo: "Conhecer o painel",
    resumo: "O que cada cartão mostra e os atalhos do dia a dia.",
    passos: [
      {
        titulo: "Os quatro números do dia",
        texto:
          "No topo do <b>Painel</b> ficam ① as consultas de hoje, ② as evoluções pendentes, ③ os lembretes a enviar e ④ quanto você já recebeu no mês, comparado ao previsto. Cada cartão leva à tela correspondente.",
        print: "painel.png",
        alvos: ["Cartão Consultas hoje", "Cartão Evoluções pendentes", "Cartão Lembretes a enviar", "Cartão Recebido no mês"],
        numerar: true,
        recorte: [0, 470],
      },
      {
        titulo: "Os atalhos",
        texto:
          "Logo abaixo ficam os atalhos para o que você mais faz: <b>Nova consulta</b>, <b>Novo paciente</b> e <b>Novo lançamento</b>. Quando há pagamento atrasado, um aviso aparece ao lado.",
        print: "painel.png",
        alvos: ["Nova consulta", "Novo paciente", "Novo lançamento"],
        numerar: true,
        recorte: [0, 470],
      },
      {
        titulo: "As evoluções que ficaram para trás",
        texto:
          "O bloco <b>Evoluções pendentes</b> lista as sessões dos últimos 14 dias sem registro no prontuário. Clique em <b>Registrar evolução</b> para preencher na hora.",
        print: "painel.png",
        alvos: ["Registrar evolução", "Bloco Evoluções pendentes"],
      },
    ],
  },
  {
    slug: "usar-no-celular",
    categoria: "inicio",
    titulo: "Usar no celular",
    resumo: "Menu, modo privado e a agenda do dia na palma da mão.",
    antes: "O Gradatim funciona no navegador do celular. Não precisa instalar nada.",
    passos: [
      {
        titulo: "Abra o menu",
        texto: "No celular, o menu fica no botão <b>☰</b>, no canto de cima.",
        print: "celular-menu-fechado.png",
        alvos: ["Botão do menu (☰)"],
        etiqueta: "Toque no menu",
      },
      {
        titulo: "Escolha a área",
        texto: "O menu traz as mesmas áreas do computador: Painel, Agenda, Pacientes, Lembretes, Financeiro, Assinatura e Configurações.",
        print: "celular-menu.png",
        alvos: ["Menu: Agenda"],
        etiqueta: "Toque na área",
      },
      {
        titulo: "Esconda os dados quando precisar",
        texto: "O botão com o olho riscado, ao lado do menu, liga o modo privado e borra nomes e valores na tela.",
        print: "celular-menu-fechado.png",
        alvos: ["Ocultar dados"],
        etiqueta: "Modo privado",
      },
      {
        titulo: "Use a agenda do dia",
        texto:
          "No celular a agenda mostra um dia por vez. Troque o dia no seletor da semana. Nas consultas online, o botão <b>Entrar no Meet</b> aparece direto na lista.",
        print: "celular-agenda.png",
        alvos: ["Entrar no Meet", "Seletor de dias"],
      },
    ],
  },
  {
    slug: "conectar-google-agenda",
    categoria: "inicio",
    titulo: "Conectar o Google Agenda",
    resumo: "Para as consultas irem para a sua agenda e o link do Meet ser criado.",
    destaque: true,
    passos: [
      {
        titulo: "Abra as Configurações",
        texto: "No menu, clique em <b>Configurações</b>.",
        print: "configuracoes-google.png",
        alvos: ["Menu: Configurações"],
      },
      {
        titulo: "Conecte sua conta Google",
        texto:
          "Clique em <b>Conectar Google Calendar</b> e autorize o acesso à Agenda na tela do Google. A partir daí, cada consulta marcada no Gradatim vira um evento na sua agenda, com link do Meet nas online.",
        print: "configuracoes-google.png",
        alvos: ["Conectar Google Calendar"],
      },
      {
        titulo: "Pronto: conta conectada",
        texto:
          "Com a conta conectada, aparecem <b>Reconectar</b>, para quando o Google pedir de novo a permissão, e <b>Desconectar</b>. A via é de mão única: o Gradatim não lê nem importa os outros eventos da sua agenda.",
        print: "configuracoes-google-conectado.png",
        alvos: ["Reconectar", "Desconectar"],
      },
    ],
  },

  // ---------- Pacientes ----------
  {
    slug: "cadastrar-paciente",
    categoria: "pacientes",
    titulo: "Cadastrar um paciente",
    resumo: "Dados, contato e a autorização para receber lembretes.",
    destaque: true,
    passos: [
      {
        titulo: "Comece um novo cadastro",
        texto: "No menu, abra <b>Pacientes</b> e clique em <b>Novo paciente</b>. O atalho também fica no Painel.",
        print: "pacientes.png",
        alvos: ["Novo paciente", "Menu: Pacientes"],
      },
      {
        titulo: "Preencha os dados",
        texto:
          "Só o ① <b>Nome</b> é obrigatório. Telefone, e-mail, CPF, data de nascimento e endereço são opcionais. Deixe marcado ② <b>Aceita receber lembretes de consulta</b>, a não ser que o paciente não queira ser contatado. Depois clique em ③ <b>Salvar</b>.",
        print: "paciente-novo.png",
        alvos: ["Nome", "Aceita receber lembretes de consulta", "Salvar"],
        numerar: true,
      },
    ],
    dica: "Para o lembrete pelo WhatsApp funcionar, o paciente precisa de telefone com DDD.",
  },
  {
    slug: "preencher-anamnese",
    categoria: "pacientes",
    titulo: "Preencher a anamnese",
    resumo: "Demanda, objetivos do trabalho e histórico relevante.",
    passos: [
      {
        titulo: "Abra a ficha do paciente",
        texto: "Em <b>Pacientes</b>, clique no nome do paciente.",
        print: "pacientes.png",
        alvos: ["Item da lista (Marina Souza)"],
        etiqueta: "Clique no paciente",
      },
      {
        titulo: "Preencha e salve",
        texto:
          "Na ficha, o bloco da avaliação inicial tem <b>Demanda / queixa inicial</b>, <b>Objetivos do trabalho</b> e <b>Histórico relevante</b>. Preencha e clique em <b>Salvar anamnese</b>.",
        print: "paciente-ficha.png",
        alvos: ["Salvar anamnese", "Bloco da anamnese"],
      },
    ],
  },
  {
    slug: "mudar-status-paciente",
    categoria: "pacientes",
    titulo: "Mudar o status: ativo, inativo ou alta",
    resumo: "Onde fica e como mudar.",
    passos: [
      {
        titulo: "Edite o cadastro",
        texto: "Na ficha do paciente, clique em <b>Editar</b>.",
        print: "paciente-ficha.png",
        alvos: ["Editar"],
      },
      {
        titulo: "Escolha o status",
        texto: "No campo <b>Status</b>, escolha <b>Ativo</b>, <b>Inativo</b> ou <b>Alta</b> e salve.",
        print: "paciente-editar.png",
        alvos: ["Status"],
      },
    ],
  },
  {
    slug: "whatsapp-do-paciente",
    categoria: "pacientes",
    titulo: "Chamar o paciente no WhatsApp",
    resumo: "Um botão na ficha abre a conversa.",
    passos: [
      {
        titulo: "Use o botão da ficha",
        texto:
          "Na ficha do paciente, clique em <b>WhatsApp</b>. A conversa abre no seu WhatsApp, com o número cadastrado. Para lembretes de consulta, veja " +
          link("enviar-lembretes-whatsapp", "Enviar os lembretes de amanhã") +
          ".",
        print: "paciente-ficha.png",
        alvos: ["WhatsApp"],
      },
    ],
  },
  {
    slug: "excluir-paciente",
    categoria: "pacientes",
    titulo: "Excluir um paciente",
    resumo: "O registro é arquivado, não apagado.",
    passos: [
      {
        titulo: "Use o botão no fim da ficha",
        texto:
          "Na ficha do paciente, clique em <b>Excluir paciente</b>. O cadastro sai das listas, mas o registro é arquivado, não apagado: o prontuário tem guarda mínima de 5 anos.",
        print: "paciente-ficha.png",
        alvos: ["Excluir paciente"],
      },
    ],
  },

  // ---------- Agenda ----------
  {
    slug: "marcar-consulta",
    categoria: "agenda",
    titulo: "Marcar uma consulta",
    resumo: "Pelo botão ou clicando num horário vazio da semana.",
    destaque: true,
    passos: [
      {
        titulo: "Comece uma nova consulta",
        texto:
          "Na <b>Agenda</b>, clique em <b>Nova consulta</b>. Ou clique num horário vazio da grade, que abre o formulário com a data e a hora preenchidas.",
        print: "agenda.png",
        alvos: ["Nova consulta", "Horário vazio"],
      },
      {
        titulo: "Preencha e agende",
        texto:
          "Escolha ① o <b>Paciente</b>, confira ② <b>Data</b>, ③ <b>Hora</b> e ④ <b>Duração</b> (50 minutos por padrão) e escolha ⑤ a <b>Modalidade</b>: online ou presencial. Depois clique em ⑥ <b>Agendar</b>.",
        print: "consulta-nova.png",
        alvos: ["Paciente", "Data", "Hora", "Duração", "Modalidade", "Agendar"],
        numerar: true,
      },
    ],
    dica: "Consulta que se repete toda semana? Veja " + link("consulta-recorrente", "Consulta recorrente") + ".",
  },
  {
    slug: "consulta-recorrente",
    categoria: "agenda",
    titulo: "Consulta recorrente",
    resumo: "Semanal, quinzenal ou mensal, de uma vez só.",
    passos: [
      {
        titulo: "Abra uma nova consulta",
        texto: "Na <b>Agenda</b>, clique em <b>Nova consulta</b> e preencha paciente, data e hora.",
        print: "agenda.png",
        alvos: ["Nova consulta"],
      },
      {
        titulo: "Escolha a repetição",
        texto:
          "Em ① <b>Recorrência</b>, escolha <b>Semanal</b>, <b>Quinzenal</b> ou <b>Mensal</b>. Em ② <b>Nº de ocorrências</b>, diga quantas consultas criar (de 2 a 52). Depois clique em <b>Agendar</b>.",
        print: "consulta-nova-recorrente.png",
        alvos: ["Recorrência", "Nº de ocorrências"],
        numerar: true,
      },
    ],
    dica: "Para cancelar a série inteira depois, veja " + link("remarcar-ou-cancelar", "Remarcar ou cancelar") + ".",
  },
  {
    slug: "consulta-online-meet",
    categoria: "agenda",
    titulo: "Consulta online com link do Google Meet",
    resumo: "O link é criado sozinho e fica pronto para copiar.",
    destaque: true,
    antes:
      "O link do Meet depende do Google Agenda conectado. Se ainda não conectou, veja " +
      link("conectar-google-agenda", "Conectar o Google Agenda") +
      ".",
    passos: [
      {
        titulo: "Marque a consulta como online",
        texto:
          "Ao criar a consulta, escolha <b>Modalidade: Online</b> e clique em <b>Agendar</b>. O Gradatim cria o evento na sua Agenda Google com o link do Meet.",
        print: "consulta-nova.png",
        alvos: ["Modalidade"],
        etiqueta: "Online",
      },
      {
        titulo: "Copie o link para o paciente",
        texto:
          "Abra a consulta e clique em <b>Mais detalhes</b>. Em Videochamada, use <b>Copiar link</b> e mande para o paciente. <b>Sincronizada com o Google</b> indica que a consulta já está na sua agenda. Se o link ainda não apareceu, clique em <b>Sincronizar agora</b>.",
        print: "agenda-consulta.png",
        alvos: ["Copiar link", "Sincronizada com o Google"],
      },
      {
        titulo: "Na hora, entre no Meet",
        texto:
          "Clique na consulta na agenda e use <b>Entrar no Meet</b>. O botão fica em destaque 10 minutos antes do horário.",
        print: "painel-consulta-online.png",
        alvos: ["Entrar no Meet"],
      },
      {
        titulo: "Ou entre pelo celular",
        texto: "Na agenda do celular, o botão <b>Entrar no Meet</b> aparece direto na consulta.",
        print: "celular-agenda.png",
        alvos: ["Entrar no Meet"],
      },
    ],
  },
  {
    slug: "confirmar-presenca-e-falta",
    categoria: "agenda",
    titulo: "Confirmar presença e marcar falta",
    resumo: "Tudo pelo painel da consulta, sem sair da agenda.",
    passos: [
      {
        titulo: "Abra a consulta",
        texto: "Na <b>Agenda</b>, clique na consulta. O painel dela abre na lateral.",
        print: "agenda.png",
        alvos: ["Uma consulta"],
        etiqueta: "Clique na consulta",
      },
      {
        titulo: "Registre a presença",
        texto:
          "Quando o paciente confirmar, clique em <b>Paciente confirmou</b>. Se ele não vier, use <b>Marcar falta</b>: a falta ocupa o horário e não pede evolução.",
        print: "painel-consulta.png",
        alvos: ["Paciente confirmou", "Marcar falta"],
      },
      {
        titulo: "Veja o resto da consulta",
        texto:
          "No mesmo painel você vê ① o <b>Pagamento</b> da sessão (ou lança na hora), ② se o <b>Lembrete</b> já foi enviado e ③ a situação do <b>Prontuário</b>.",
        print: "painel-consulta.png",
        alvos: ["Linha Pagamento", "Linha Lembrete", "Linha Prontuário"],
        numerar: true,
      },
      {
        titulo: "Depois da sessão",
        texto:
          "Quando a sessão já passou, o painel oferece <b>Registrar evolução</b> e ainda permite <b>Marcar falta</b>, se o paciente não veio.",
        print: "painel-consulta-encerrada.png",
        alvos: ["Registrar evolução", "Marcar falta"],
      },
    ],
  },
  {
    slug: "remarcar-ou-cancelar",
    categoria: "agenda",
    titulo: "Remarcar ou cancelar",
    resumo: "Uma consulta ou a série inteira.",
    passos: [
      {
        titulo: "Remarcar",
        texto: "No painel da consulta, clique em <b>Remarcar</b>.",
        print: "painel-consulta.png",
        alvos: ["Remarcar"],
      },
      {
        titulo: "Ajuste e salve",
        texto: "Mude ① a <b>Data</b> e ② a <b>Hora</b>, e ③ o <b>Status</b> se precisar. Depois clique em ④ <b>Salvar</b>.",
        print: "consulta-remarcar.png",
        alvos: ["Data", "Hora", "Status", "Salvar"],
        numerar: true,
      },
      {
        titulo: "Cancelar",
        texto:
          "No painel da consulta, <b>Cancelar</b> cancela só aquela consulta. Nas recorrentes, <b>Cancelar esta e as próximas da série</b> cancela da data dela em diante.",
        print: "painel-consulta.png",
        alvos: ["Cancelar", "Cancelar esta e as próximas da série"],
      },
    ],
  },
  {
    slug: "bloquear-horarios",
    categoria: "agenda",
    titulo: "Bloquear horários",
    resumo: "Almoço, férias e compromissos pessoais.",
    passos: [
      {
        titulo: "Abra os bloqueios",
        texto: "Na <b>Agenda</b>, clique em <b>Bloqueios</b>.",
        print: "agenda.png",
        alvos: ["Bloqueios"],
      },
      {
        titulo: "Crie um bloqueio",
        texto: "Clique no botão para criar um novo bloqueio.",
        print: "bloqueios.png",
        alvos: ["Novo bloqueio"],
      },
      {
        titulo: "Preencha o horário",
        texto:
          "Informe ① a <b>Data</b>, ② o <b>Início</b> e ③ o <b>Fim</b>, e se quiser ④ o <b>Motivo</b> (almoço, férias...). Depois clique em ⑤ <b>Bloquear horário</b>. Cada bloqueio vale para um dia.",
        print: "bloqueio-novo.png",
        alvos: ["Data", "Início", "Fim", "Motivo", "Bloquear horário"],
        numerar: true,
      },
      {
        titulo: "Para liberar o horário",
        texto: "Na lista de bloqueios, clique em <b>Remover</b>.",
        print: "bloqueios.png",
        alvos: ["Remover"],
      },
    ],
  },
  {
    slug: "entender-a-agenda",
    categoria: "agenda",
    titulo: "Entender a agenda",
    resumo: "Navegação, cores, ícones e contadores da semana.",
    passos: [
      {
        titulo: "Navegue pelas semanas",
        texto: "Use ① e ③ as setas para ir e voltar de semana, e ② <b>Hoje</b> para voltar à semana atual.",
        print: "agenda.png",
        alvos: ["Semana anterior", "Hoje", "Próxima semana"],
        numerar: true,
        recorte: [0, 420],
      },
      {
        titulo: "Leia cada consulta",
        texto:
          "Cada consulta mostra o horário, o status e o paciente. Borda tracejada é <b>a confirmar</b>, borda cheia é <b>confirmada</b>. Os ícones indicam online (câmera), presencial (prédio), recorrente (setas), pagamento pendente e evolução pendente.",
        print: "agenda.png",
        alvos: ["Uma consulta"],
        etiqueta: "Consulta",
      },
      {
        titulo: "No celular, um dia por vez",
        texto: "No celular, toque no dia da semana para ver as consultas daquele dia.",
        print: "celular-agenda.png",
        alvos: ["Seletor de dias"],
      },
    ],
  },

  // ---------- Prontuário ----------
  {
    slug: "registrar-evolucao",
    categoria: "prontuario",
    titulo: "Registrar a evolução de uma sessão",
    resumo: "Os quatro campos pensados para a Resolução CFP 01/2009.",
    destaque: true,
    passos: [
      {
        titulo: "Abra o registro",
        texto:
          "No <b>Painel</b>, em Evoluções pendentes, clique em <b>Registrar evolução</b>. O mesmo botão aparece no painel da consulta depois da sessão e, na ficha do paciente, em <b>Nova evolução</b>.",
        print: "painel.png",
        alvos: ["Registrar evolução"],
      },
      {
        titulo: "Preencha os campos",
        texto:
          "Confira ① a <b>Data da sessão</b> e preencha ② <b>Avaliação da demanda / objetivos</b>, ③ <b>Procedimentos aplicados</b>, ④ <b>Resultados</b> e ⑤ <b>Encaminhamentos</b>. Em ⑥ <b>Notas técnicas privadas</b> ficam anotações só suas, separadas da evolução. Depois clique em ⑦ <b>Salvar</b>.",
        print: "evolucao-nova.png",
        alvos: [
          "Data da sessão",
          "Avaliação da demanda / objetivos",
          "Procedimentos aplicados",
          "Resultados",
          "Encaminhamentos",
          "Notas técnicas privadas",
          "Salvar",
        ],
        numerar: true,
        recorte: [0, 1094],
      },
    ],
  },
  {
    slug: "historico-de-evolucoes",
    categoria: "prontuario",
    titulo: "Ver o histórico de evoluções",
    resumo: "A linha do tempo de cada paciente.",
    passos: [
      {
        titulo: "Abra as evoluções do paciente",
        texto:
          "Na ficha do paciente, a seção de evoluções lista as sessões registradas, da mais recente para a mais antiga. Clique numa sessão para ler o registro completo.",
        print: "evolucoes-lista.png",
        alvos: ["Item da lista"],
        etiqueta: "Abrir a sessão",
      },
    ],
  },
  {
    slug: "editar-ou-arquivar-evolucao",
    categoria: "prontuario",
    titulo: "Editar ou arquivar uma evolução",
    resumo: "Arquivar não apaga o registro.",
    passos: [
      {
        titulo: "Abra a evolução",
        texto: "Na lista de evoluções do paciente, clique na sessão.",
        print: "evolucoes-lista.png",
        alvos: ["Item da lista"],
        etiqueta: "Abrir a sessão",
      },
      {
        titulo: "Edite ou arquive",
        texto:
          "Use <b>Editar</b> para corrigir o registro. <b>Arquivar evolução</b> tira a sessão da linha do tempo, mas não apaga: o prontuário tem guarda mínima de 5 anos.",
        print: "evolucao-detalhe.png",
        alvos: ["Editar", "Arquivar evolução"],
      },
    ],
  },
  {
    slug: "evolucoes-pendentes",
    categoria: "prontuario",
    titulo: "Evoluções pendentes",
    resumo: "O que conta como pendente e onde aparece.",
    passos: [
      {
        titulo: "Onde aparecem",
        texto:
          "No <b>Painel</b>, o cartão <b>Evoluções pendentes</b> conta as sessões dos últimos 14 dias que já aconteceram e ainda não têm registro. Faltas não entram na conta.",
        print: "painel.png",
        alvos: ["Cartão Evoluções pendentes"],
        recorte: [0, 470],
      },
      {
        titulo: "Registre direto da consulta",
        texto: "No painel de uma consulta encerrada, o botão <b>Registrar evolução</b> abre o registro daquela sessão.",
        print: "painel-consulta-encerrada.png",
        alvos: ["Registrar evolução"],
      },
    ],
  },
  {
    slug: "prontuario-em-pdf",
    categoria: "prontuario",
    titulo: "Baixar o prontuário em PDF",
    resumo: "Um arquivo por paciente, quando quiser.",
    passos: [
      {
        titulo: "Baixe pela ficha",
        texto:
          "Na ficha do paciente, clique em <b>Prontuário (PDF)</b>. O arquivo traz o cadastro, a anamnese e as evoluções, incluindo as notas privadas.",
        print: "paciente-ficha.png",
        alvos: ["Prontuário (PDF)"],
      },
    ],
  },

  // ---------- Financeiro ----------
  {
    slug: "lancar-pagamento",
    categoria: "financeiro",
    titulo: "Lançar um pagamento",
    resumo: "Já recebi ou ainda vou receber, com ou sem consulta vinculada.",
    destaque: true,
    passos: [
      {
        titulo: "Comece um lançamento",
        texto:
          "Em <b>Financeiro</b>, clique em <b>Novo lançamento</b>. No painel de uma consulta, <b>lançar agora</b> já abre o lançamento ligado àquela sessão.",
        print: "financeiro.png",
        alvos: ["Novo lançamento"],
      },
      {
        titulo: "Já recebeu?",
        texto:
          "Escolha ① o <b>Paciente</b> e, se quiser, ② a <b>Consulta vinculada</b>. Informe ③ o <b>Valor</b>, marque ④ <b>Já recebi</b> e preencha ⑤ a <b>Data do pagamento</b> e ⑥ a <b>Forma de pagamento</b>. Clique em ⑦ <b>Salvar</b>.",
        print: "financeiro-novo-recebido.png",
        alvos: ["Paciente", "Consulta vinculada", "Valor", "Já recebi", "Data do pagamento", "Forma de pagamento", "Salvar"],
        numerar: true,
      },
      {
        titulo: "Ainda vai receber?",
        texto: "Marque ① <b>Ainda vou receber</b> e informe ② o <b>Vencimento</b>. O lançamento fica pendente até você marcar como pago.",
        print: "financeiro-novo-areceber.png",
        alvos: ["Ainda vou receber", "Vencimento"],
        numerar: true,
      },
    ],
  },
  {
    slug: "marcar-como-pago",
    categoria: "financeiro",
    titulo: "Marcar como pago",
    resumo: "E como desfazer, se precisar.",
    passos: [
      {
        titulo: "Marque na lista",
        texto: "No <b>Financeiro</b>, clique em <b>Marcar como pago</b> no lançamento pendente ou atrasado.",
        print: "financeiro.png",
        alvos: ["Marcar como pago"],
      },
      {
        titulo: "Para desfazer",
        texto: "Abra o lançamento e clique em <b>Desmarcar pagamento</b>.",
        print: "lancamento-detalhe.png",
        alvos: ["Desmarcar pagamento"],
      },
    ],
  },
  {
    slug: "numeros-do-mes",
    categoria: "financeiro",
    titulo: "Recebido, a receber e atrasado",
    resumo: "O que cada número do mês significa.",
    passos: [
      {
        titulo: "Os três cartões",
        texto:
          "① <b>Recebido no mês</b> soma o que já foi pago. ② <b>A receber</b> soma o que foi lançado no mês e ainda está pendente. ③ <b>Atrasados</b> conta os pendentes com o vencimento já passado.",
        print: "financeiro.png",
        alvos: ["Cartão Recebido no mês", "Cartão A receber", "Cartão Atrasados"],
        numerar: true,
        recorte: [0, 460],
      },
    ],
  },
  {
    slug: "historico-mensal",
    categoria: "financeiro",
    titulo: "Ver o histórico mensal",
    resumo: "Mês a mês, recebido e a receber.",
    passos: [
      {
        titulo: "Abra o histórico",
        texto: "No <b>Financeiro</b>, clique em <b>Histórico mensal</b>.",
        print: "financeiro.png",
        alvos: ["Histórico mensal"],
      },
      {
        titulo: "Compare os meses",
        texto: "A tabela mostra, para cada mês, o recebido, o que ficou a receber e o número de lançamentos.",
        print: "financeiro-historico.png",
        alvos: ["Tabela"],
        etiqueta: "Histórico",
      },
    ],
  },
  {
    slug: "editar-ou-arquivar-lancamento",
    categoria: "financeiro",
    titulo: "Editar ou arquivar um lançamento",
    resumo: "Corrigir valor, data ou forma de pagamento.",
    passos: [
      {
        titulo: "Abra o lançamento",
        texto:
          "No <b>Financeiro</b>, clique no lançamento. Use <b>Editar</b> para corrigir os dados ou <b>Arquivar lançamento</b> para tirá-lo das contas do mês.",
        print: "lancamento-detalhe.png",
        alvos: ["Editar", "Arquivar lançamento"],
      },
    ],
  },

  // ---------- Lembretes ----------
  {
    slug: "enviar-lembretes-whatsapp",
    categoria: "lembretes",
    titulo: "Enviar os lembretes de amanhã pelo WhatsApp",
    resumo: "Um clique abre a conversa com a mensagem pronta.",
    destaque: true,
    passos: [
      {
        titulo: "Abra os lembretes",
        texto: "No menu, clique em <b>Lembretes</b>. A lista mostra as consultas de amanhã.",
        print: "lembretes.png",
        alvos: ["Menu: Lembretes"],
      },
      {
        titulo: "Envie pelo seu WhatsApp",
        texto:
          "Clique em <b>Enviar no WhatsApp</b>. A conversa com o paciente abre com a mensagem pronta, saindo do seu número. É só enviar. Não há custo por mensagem.",
        print: "lembretes.png",
        alvos: ["Enviar no WhatsApp"],
      },
      {
        titulo: "Acompanhe o que já foi",
        texto:
          "Depois do envio, a consulta mostra <b>Enviado às…</b>. Se precisar mandar outra vez, use <b>Enviar de novo</b>.",
        print: "lembretes.png",
        alvos: ["Enviado às…", "Enviar de novo"],
      },
      {
        titulo: "Quando o botão não aparece",
        texto:
          "O Gradatim avisa o motivo: ① <b>Paciente não aceita lembretes</b> (desmarcado no cadastro) ou ② <b>Sem telefone válido</b>. Use ③ <b>Dia seguinte</b> para ver os próximos dias.",
        print: "lembretes.png",
        alvos: ["Paciente não aceita lembretes", "Sem telefone válido", "Dia seguinte"],
        numerar: true,
      },
    ],
  },
  {
    slug: "mensagem-do-lembrete",
    categoria: "lembretes",
    titulo: "Editar a mensagem e a antecedência",
    resumo: "Com nome, data, hora e link preenchidos sozinhos.",
    passos: [
      {
        titulo: "Abra a mensagem",
        texto: "Em <b>Lembretes</b>, clique em <b>Editar mensagem</b>.",
        print: "lembretes.png",
        alvos: ["Editar mensagem"],
      },
      {
        titulo: "Ajuste e salve",
        texto:
          "Em ① <b>Lembrar com antecedência de (horas)</b>, escolha quantas horas antes a consulta entra na lista (até 168). Em ② <b>Mensagem do lembrete no WhatsApp</b>, escreva o texto usando {nome}, {data}, {hora}, {modalidade} e {link}, que são preenchidos sozinhos. Clique em ③ <b>Salvar preferências</b>.",
        print: "configuracoes-lembretes.png",
        alvos: ["Lembrar com antecedência de (horas)", "Mensagem do lembrete no WhatsApp", "Salvar preferências"],
        numerar: true,
      },
    ],
    dica: "A mensagem não leva nenhum dado clínico.",
  },
  {
    slug: "convite-por-email",
    categoria: "lembretes",
    titulo: "Convite por e-mail pelo Google Agenda",
    resumo: "Para o paciente receber a consulta na agenda dele.",
    antes: "Precisa do Google conectado. Veja " + link("conectar-google-agenda", "Conectar o Google Agenda") + ".",
    passos: [
      {
        titulo: "Ligue o convite",
        texto:
          "Em <b>Configurações</b>, marque <b>Convidar o paciente pelo Google Agenda</b> e salve. O paciente recebe o convite da consulta por e-mail, com aviso de remarcação e cancelamento, desde que aceite lembretes e tenha e-mail no cadastro.",
        print: "configuracoes-lembretes.png",
        alvos: ["Convidar o paciente pelo Google Agenda"],
      },
    ],
  },

  // ---------- Privacidade ----------
  {
    slug: "modo-privado",
    categoria: "privacidade",
    titulo: "Modo privado para compartilhar a tela",
    resumo: "Alt+O borra nomes e valores.",
    passos: [
      {
        titulo: "Ligue o modo privado",
        texto: "Clique em <b>Ocultar dados</b>, no rodapé do menu, ou aperte <b>Alt+O</b>.",
        print: "privado-desligado.png",
        alvos: ["Ocultar dados"],
      },
      {
        titulo: "Compartilhe com tranquilidade",
        texto:
          "Nomes, telefones e valores ficam borrados em todas as telas. Para voltar, clique em <b>Mostrar dados</b> ou aperte Alt+O de novo. A escolha fica salva no navegador.",
        print: "privado-ligado.png",
        alvos: ["Mostrar dados"],
      },
    ],
  },
  {
    slug: "exportar-dados",
    categoria: "privacidade",
    titulo: "Exportar todos os dados",
    resumo: "Planilhas da conta inteira num arquivo .zip.",
    passos: [
      {
        titulo: "Baixe o arquivo",
        texto:
          "Em <b>Configurações</b>, clique em <b>Exportar todos os dados (.zip)</b>. O arquivo traz planilhas de pacientes, agenda, prontuário e financeiro. Funciona mesmo com a assinatura vencida.",
        print: "configuracoes-exportar.png",
        alvos: ["Exportar todos os dados (.zip)"],
      },
    ],
  },
  {
    slug: "desconectar-google",
    categoria: "privacidade",
    titulo: "Desconectar o Google",
    resumo: "A agenda do Gradatim continua funcionando.",
    passos: [
      {
        titulo: "Use Desconectar",
        texto:
          "Em <b>Configurações</b>, clique em <b>Desconectar</b>. As consultas param de ir para a sua Agenda Google, e o resto continua igual.",
        print: "configuracoes-google-conectado.png",
        alvos: ["Desconectar"],
      },
    ],
  },

  // ---------- Assinatura ----------
  {
    slug: "assinar",
    categoria: "assinatura",
    titulo: "Assinar depois do teste grátis",
    resumo: "Plano, CPF ou CNPJ e pagamento por Pix, boleto ou cartão.",
    passos: [
      {
        titulo: "Abra a assinatura",
        texto: "No menu, clique em <b>Assinatura</b>.",
        print: "assinatura-planos.png",
        alvos: ["Menu: Assinatura"],
      },
      {
        titulo: "Escolha o plano e assine",
        texto:
          "Escolha ① <b>Mensal</b>, ② <b>Trimestral</b> (10% off) ou ③ <b>Semestral</b> (15% off), informe ④ o <b>CPF ou CNPJ</b> e clique em ⑤ <b>Assinar plano</b>. O pagamento abre na página do Asaas, por Pix, boleto ou cartão.",
        print: "assinatura-planos.png",
        alvos: ["Plano Mensal", "Plano Trimestral", "Plano Semestral", "CPF ou CNPJ", "Assinar plano"],
        numerar: true,
      },
    ],
    dica: "Já pagou e o status não mudou? Na tela de assinatura, use “Já paguei, verificar agora”.",
  },
  {
    slug: "cobranca-e-vencimento",
    categoria: "assinatura",
    titulo: "Ver a cobrança e o vencimento",
    resumo: "Plano atual e próxima cobrança.",
    passos: [
      {
        titulo: "Confira a cobrança",
        texto:
          "Em <b>Assinatura</b> aparecem ① o <b>Plano</b> e ② o <b>Próximo vencimento</b>. Para pagar ou ver o boleto, clique em ③ <b>Ver / pagar cobrança</b>.",
        print: "assinatura-cobranca.png",
        alvos: ["Plano", "Próximo vencimento", "Ver / pagar cobrança"],
        numerar: true,
      },
    ],
  },
  {
    slug: "assinatura-vencida",
    categoria: "assinatura",
    titulo: "Se a assinatura vencer",
    resumo: "Somente leitura: você continua vendo e exportando tudo.",
    passos: [
      {
        titulo: "O que muda",
        texto:
          "Um aviso aparece no topo e a conta fica em somente leitura: você continua vendo e exportando pacientes, agenda, prontuário e financeiro, mas não cadastra nada novo. Clique em <b>Regularizar assinatura</b> para voltar ao normal.",
        print: "assinatura-vencida.png",
        alvos: ["Regularizar assinatura", "Aviso de assinatura vencida"],
      },
    ],
  },
  {
    slug: "cancelar-assinatura",
    categoria: "assinatura",
    titulo: "Cancelar a assinatura",
    resumo: "Quando quiser, sem multa.",
    passos: [
      {
        titulo: "Cancele pela tela de assinatura",
        texto: "Em <b>Assinatura</b>, clique em <b>Cancelar assinatura</b>. Antes, se quiser, " + link("exportar-dados", "exporte seus dados") + ".",
        print: "assinatura-cobranca.png",
        alvos: ["Cancelar assinatura"],
      },
    ],
  },
];

export const tutorialPorSlug = (slug: string) => TUTORIAIS.find((t) => t.slug === slug);
export const categoriaNome = (id: CategoriaId) => CATEGORIAS.find((c) => c.id === id)?.nome ?? "";
