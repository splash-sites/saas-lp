// Páginas de recurso (SEO): uma por assunto que as pessoas pesquisam no Google.
// Modelo copiado do PsicoManager (/individual/agenda-inteligente, /individual/prontuario):
// H1 com o benefício, H2 com a pergunta da dor, 4 dores em H3, solução em cards e CTA.
// Regras: só o que o produto faz hoje (ver "O que não pode aparecer" no CONTEXTO.md),
// título e descrição únicos por página e o termo de busca no título, no H1 e num H2.

import type { ImageMetadata } from "astro";
import imgProntuario from "../assets/prints/prontuario.png";
import imgAgenda from "../assets/prints/agenda.png";
import imgAgendaConsulta from "../assets/prints/agenda-consulta.png";
import imgFinanceiro from "../assets/prints/financeiro.png";
import imgLembretes from "../assets/prints/lembretes.png";
import imgPacientesPrivado from "../assets/prints/pacientes-privado.png";
import type { CategoriaId } from "./tutoriais";

export type Item = { titulo: string; texto: string };

export type Recurso = {
  slug: string;
  /** Nome curto, usado no menu, no rodapé e na trilha. */
  nome: string;
  /** <title>: termo de busca primeiro, marca no fim, até ~60 caracteres. */
  title: string;
  description: string;
  /** Linha pequena acima do H1, com o termo de busca exato. */
  sobre: string;
  h1: string;
  lede: string;
  print: { img: ImageMetadata; url: string; alt: string };
  dorTitulo: string;
  dores: Item[];
  solucaoTitulo: string;
  solucaoLede: string;
  itens: Item[];
  faq: { p: string; r: string }[];
  /** Categorias de tutorial ligadas a esta página. */
  tutoriais: CategoriaId[];
};

export const RECURSOS: Recurso[] = [
  {
    slug: "prontuario-psicologico",
    nome: "Prontuário",
    title: "Prontuário psicológico eletrônico | Gradatim",
    description:
      "Prontuário psicológico online pensado para a Resolução CFP 01/2009: anamnese, evolução por sessão, notas privadas, guarda de 5 anos e PDF por paciente.",
    sobre: "Prontuário psicológico eletrônico",
    h1: "O registro de cada sessão, completo e no lugar certo.",
    lede: "Anamnese, evolução sessão a sessão e notas privadas na linha do tempo de cada paciente. Os campos foram pensados para a Resolução CFP 01/2009, e nada some antes da guarda de 5 anos.",
    print: {
      img: imgProntuario,
      url: "app.gradatim.com.br/pacientes/evolucoes",
      alt: "Evolução da sessão de 12 de outubro com os quatro campos: avaliação da demanda e objetivos, procedimentos aplicados, resultados obtidos e encaminhamentos e decisões. Dados fictícios.",
    },
    dorTitulo: "Quantas evoluções ficaram para depois esta semana?",
    dores: [
      {
        titulo: "Anotação no caderno, no Word e no celular",
        texto: "Cada sessão foi registrada num lugar, e montar o histórico do paciente vira um quebra-cabeça.",
      },
      {
        titulo: "Sessão que ficou sem registro",
        texto: "O dia apertou, a evolução ficou para depois e depois não chegou.",
      },
      {
        titulo: "Dúvida sobre o que a CFP pede",
        texto: "Sem um modelo, cada registro sai de um jeito e fica difícil saber se está completo.",
      },
      {
        titulo: "Medo de perder o que foi escrito",
        texto: "Arquivo apagado sem querer, computador que estragou, pasta que ninguém acha.",
      },
    ],
    solucaoTitulo: "Prontuário psicológico organizado por paciente.",
    solucaoLede: "Tudo o que é registrado fica na ficha do paciente, em ordem de data, e sai em PDF quando você precisar.",
    itens: [
      {
        titulo: "Evolução com campos prontos",
        texto: "Demanda e objetivos, procedimentos, resultados e encaminhamentos. O registro sai completo sem você montar um modelo.",
      },
      {
        titulo: "Anamnese na ficha",
        texto: "A avaliação inicial, com a demanda e os objetivos do trabalho, fica junto dos dados do paciente.",
      },
      {
        titulo: "Notas privadas separadas",
        texto: "Suas anotações de trabalho ficam num campo à parte, fora da evolução.",
      },
      {
        titulo: "Aviso de evolução pendente",
        texto: "O painel mostra as sessões que já aconteceram e ainda não têm registro. Um clique e você registra.",
      },
      {
        titulo: "Guarda de 5 anos",
        texto: "Arquivar não apaga. A evolução continua guardada pelo prazo mínimo da resolução.",
      },
      {
        titulo: "Prontuário em PDF",
        texto: "Baixe o prontuário de um paciente em PDF, ou a conta inteira em planilhas.",
      },
    ],
    faq: [
      {
        p: "O prontuário segue a Resolução CFP 01/2009?",
        r: "Ele foi pensado para ela. A ficha guarda a identificação do paciente, a anamnese guarda a demanda e os objetivos, a evolução registra cada sessão e o status marca alta ou encerramento. A guarda mínima de 5 anos é respeitada: arquivar não apaga.",
      },
      {
        p: "Posso apagar uma evolução?",
        r: "Você pode arquivar. A evolução sai da linha do tempo, mas continua guardada, porque o registro precisa ficar disponível pelo prazo da resolução.",
      },
      {
        p: "Consigo exportar o prontuário?",
        r: "Sim. Cada paciente tem o prontuário em PDF, e a conta inteira sai em planilhas. A exportação funciona mesmo com a assinatura vencida.",
      },
      {
        p: "Quem consegue ler o que eu escrevo?",
        r: "Só você. Cada conta é isolada das outras e os dados ficam criptografados em repouso.",
      },
    ],
    tutoriais: ["prontuario"],
  },
  {
    slug: "agenda-para-psicologos",
    nome: "Agenda",
    title: "Agenda online para psicólogos | Gradatim",
    description:
      "Agenda online para psicólogos: consultas online e presenciais, repetição semanal ou quinzenal, horários bloqueados e sincronização com o Google Agenda.",
    sobre: "Agenda online para psicólogos",
    h1: "A semana inteira à vista, do computador ao celular.",
    lede: "Consultas online e presenciais na mesma agenda, com repetição semanal ou quinzenal, horários bloqueados e tudo copiado sozinho para o seu Google Agenda.",
    print: {
      img: imgAgenda,
      url: "app.gradatim.com.br/agenda",
      alt: "Agenda semanal do Gradatim de 12 a 18 de outubro com 23 consultas, online e presenciais, marcadas como realizada, confirmada, a confirmar e uma falta, e o almoço bloqueado todos os dias das 12h às 13h. Dados fictícios.",
    },
    dorTitulo: "Quanto tempo da sua semana vai para organizar horários?",
    dores: [
      {
        titulo: "Paciente fixo marcado um por um",
        texto: "Toda semana a mesma consulta, digitada de novo na agenda.",
      },
      {
        titulo: "Horário que mudou e a agenda não",
        texto: "Remarcou pelo WhatsApp, esqueceu de passar para a agenda e marcou outra pessoa no mesmo horário.",
      },
      {
        titulo: "Online e presencial misturados",
        texto: "Cada tipo de atendimento anotado num lugar diferente.",
      },
      {
        titulo: "Almoço e folga que somem",
        texto: "Sem bloquear o horário, alguém sempre acaba marcado nele.",
      },
    ],
    solucaoTitulo: "Agenda de consultório feita para quem atende sozinho.",
    solucaoLede: "Semana inteira no computador, o dia de hoje no celular. Cada consulta mostra o tipo e a situação de um jeito que se lê de longe.",
    itens: [
      {
        titulo: "Repetição semanal ou quinzenal",
        texto: "Marque o paciente fixo uma vez e a agenda preenche as próximas semanas.",
      },
      {
        titulo: "Online ou presencial",
        texto: "Cada consulta diz como vai ser. Nas online, o link do Google Meet já vem junto.",
      },
      {
        titulo: "Horários bloqueados",
        texto: "Almoço, supervisão, férias. O horário bloqueado fica fora da agenda.",
      },
      {
        titulo: "Confirmada, a confirmar ou falta",
        texto: "Marque quando o paciente confirmou e registre a falta. A situação aparece na própria consulta.",
      },
      {
        titulo: "Sincronizada com o Google Agenda",
        texto: "Consultas marcadas, remarcadas e canceladas vão sozinhas para o seu Google Agenda. A conexão é opcional.",
      },
      {
        titulo: "Feita para o celular",
        texto: "No celular, a visão do dia mostra só o que importa hoje, com o botão para entrar na chamada.",
      },
    ],
    faq: [
      {
        p: "Preciso ter conta Google para usar a agenda?",
        r: "Não. A agenda funciona sozinha. Conectar o Google Agenda é opcional e serve para copiar as consultas para lá e criar o link do Meet nas consultas online.",
      },
      {
        p: "Os eventos do meu Google Agenda aparecem no Gradatim?",
        r: "Não. A via é de mão única: as consultas vão do Gradatim para o Google, e seus outros eventos não são lidos.",
      },
      {
        p: "O paciente consegue marcar horário sozinho?",
        r: "Não. Só você mexe na agenda. O paciente não tem login nem app.",
      },
      {
        p: "Funciona no celular?",
        r: "Sim, pelo navegador do celular, tablet ou computador, sem instalar nada.",
      },
    ],
    tutoriais: ["agenda"],
  },
  {
    slug: "atendimento-online-psicologos",
    nome: "Atendimento online",
    title: "Atendimento online para psicólogos com Google Meet | Gradatim",
    description:
      "Atendimento online para psicólogos: o link do Google Meet é criado com a consulta, fica na agenda para copiar e o paciente recebe o convite por e-mail.",
    sobre: "Atendimento online para psicólogos",
    h1: "Marcou como online, o link do Meet já está lá.",
    lede: "Ao marcar uma consulta online, o Gradatim cria o evento no seu Google Agenda com o link do Google Meet. O link fica na consulta, pronto para copiar ou para entrar na chamada.",
    print: {
      img: imgAgendaConsulta,
      url: "app.gradatim.com.br/agenda/consulta",
      alt: "Videochamada de uma consulta online, com o link do Google Meet, o botão Copiar link e o aviso Sincronizada com o Google. Dados fictícios.",
    },
    dorTitulo: "Quantas vezes você já procurou o link minutos antes da sessão?",
    dores: [
      {
        titulo: "Link criado na hora, com pressa",
        texto: "A sessão vai começar e o link ainda não foi gerado nem enviado.",
      },
      {
        titulo: "Paciente pedindo o link de novo",
        texto: "A mensagem com o link ficou lá em cima na conversa.",
      },
      {
        titulo: "Link diferente a cada sessão",
        texto: "Copiado de um lugar, colado em outro, e às vezes o errado.",
      },
      {
        titulo: "Remarcou e o convite ficou velho",
        texto: "O paciente entra no horário antigo porque ninguém avisou da mudança.",
      },
    ],
    solucaoTitulo: "Atendimento online com o link no lugar certo.",
    solucaoLede: "O link nasce junto com a consulta e acompanha qualquer mudança de horário.",
    itens: [
      {
        titulo: "Link do Meet automático",
        texto: "Consulta marcada como online ganha o link do Google Meet na hora, sem abrir outro programa.",
      },
      {
        titulo: "Copiar ou entrar na chamada",
        texto: "O link fica na consulta, com um botão para copiar e outro para entrar.",
      },
      {
        titulo: "Convite por e-mail",
        texto: "Se o paciente autorizou e tem e-mail, ele recebe o convite do Google Agenda com o link.",
      },
      {
        titulo: "Remarcação avisada",
        texto: "Mudou o horário ou cancelou, o convite do paciente é atualizado junto.",
      },
      {
        titulo: "Link fixo, se preferir",
        texto: "Sem o Google Agenda conectado, você cadastra um link de sala fixa e ele aparece nas consultas online.",
      },
      {
        titulo: "Online e presencial na mesma agenda",
        texto: "Quem atende dos dois jeitos vê tudo junto, com o tipo de cada consulta marcado.",
      },
    ],
    faq: [
      {
        p: "Preciso pagar o Google Meet?",
        r: "Não. O link é criado na sua conta Google, a mesma do seu Google Agenda.",
      },
      {
        p: "O paciente precisa instalar alguma coisa?",
        r: "Não. Ele entra pelo link do Meet, pelo navegador ou pelo app do Google, se já usar.",
      },
      {
        p: "Posso usar outra plataforma de vídeo?",
        r: "Sim. Sem conectar o Google Agenda, você cadastra um link fixo da sua sala, de qualquer plataforma, e ele aparece nas consultas online.",
      },
      {
        p: "O Gradatim grava a sessão?",
        r: "Não. O Gradatim não grava nem transcreve sessões.",
      },
    ],
    tutoriais: ["agenda"],
  },
  {
    slug: "lembrete-de-consulta-whatsapp",
    nome: "Lembretes",
    title: "Lembrete de consulta pelo WhatsApp | Gradatim",
    description:
      "Lembrete de consulta pelo WhatsApp em um clique: a mensagem sai pronta do seu número, sem custo por envio e sem nenhum dado clínico.",
    sobre: "Lembrete de consulta pelo WhatsApp",
    h1: "Um clique e o lembrete já está escrito.",
    lede: "Todo dia o Gradatim lista as consultas de amanhã. O botão abre o WhatsApp com a mensagem pronta, saindo do seu número. Sem custo por mensagem.",
    print: {
      img: imgLembretes,
      url: "app.gradatim.com.br/lembretes",
      alt: "Lembretes de quinta-feira, 15 de outubro: 4 consultas e 3 lembretes a enviar, com o botão Enviar no WhatsApp em cada uma e um lembrete já enviado às 15:30. Dados fictícios.",
    },
    dorTitulo: "Quantas faltas começaram com um esquecimento?",
    dores: [
      {
        titulo: "Mensagem digitada uma por uma",
        texto: "Toda noite, o mesmo texto escrito de novo para cada paciente.",
      },
      {
        titulo: "Não lembrar quem já recebeu",
        texto: "Mandou para uns, esqueceu de outros e não sabe mais quem falta.",
      },
      {
        titulo: "Ferramenta que cobra por mensagem",
        texto: "Lembrete automático costuma ser adicional pago, cobrado por envio.",
      },
      {
        titulo: "Dado clínico onde não devia",
        texto: "Mensagem com detalhe do atendimento num aplicativo de conversa.",
      },
    ],
    solucaoTitulo: "Lembrete de consulta sem custo e sem trabalho de digitação.",
    solucaoLede: "A lista mostra quem precisa receber o lembrete e marca quem já recebeu.",
    itens: [
      {
        titulo: "Mensagem pronta",
        texto: "O botão Enviar no WhatsApp abre a conversa com o texto preenchido. É só enviar.",
      },
      {
        titulo: "Sai do seu número",
        texto: "O paciente recebe de quem ele já conhece, sem número de empresa.",
      },
      {
        titulo: "Mostra o que já foi enviado",
        texto: "Cada lembrete enviado fica marcado. Remarcou a consulta, o lembrete volta para a lista.",
      },
      {
        titulo: "Texto do seu jeito",
        texto: "Edite a mensagem padrão e escolha com quanta antecedência a lista aparece.",
      },
      {
        titulo: "Convite por e-mail",
        texto: "Quem autorizou e tem e-mail também recebe o convite da consulta pelo Google Agenda, sem você fazer nada.",
      },
      {
        titulo: "Sem nenhum dado clínico",
        texto: "A mensagem diz só dia e horário. Nada sobre o atendimento.",
      },
    ],
    faq: [
      {
        p: "O lembrete é enviado sozinho?",
        r: "Pelo WhatsApp, não: você clica e a mensagem abre pronta no seu WhatsApp. Pelo e-mail, sim: quem autorizou recebe o convite do Google Agenda automaticamente.",
      },
      {
        p: "Tem custo por mensagem?",
        r: "Não. A mensagem sai do seu próprio WhatsApp, então não há cobrança por envio. O lembrete está incluído no preço único.",
      },
      {
        p: "O paciente pode responder confirmando?",
        r: "Ele pode responder no seu WhatsApp, como em qualquer conversa. A confirmação você marca na consulta, com um clique.",
      },
      {
        p: "Preciso do WhatsApp Business?",
        r: "Não. Funciona com o WhatsApp que você já usa, no celular ou no computador.",
      },
    ],
    tutoriais: ["lembretes"],
  },
  {
    slug: "financeiro-para-psicologos",
    nome: "Financeiro",
    title: "Financeiro para psicólogos: controle de pagamentos | Gradatim",
    description:
      "Controle financeiro para psicólogos: pagamento de cada sessão como pago, pendente ou atrasado, total recebido no mês e histórico mês a mês.",
    sobre: "Financeiro para psicólogos",
    h1: "Quem pagou, quem falta e quanto entrou.",
    lede: "Lance o pagamento da sessão em segundos e marque como pago quando receber. O mês mostra o recebido, o que falta receber e o que está atrasado.",
    print: {
      img: imgFinanceiro,
      url: "app.gradatim.com.br/financeiro",
      alt: "Financeiro de outubro: R$ 9.780 recebidos, R$ 6.440 a receber e 1 atrasado, com a lista de lançamentos por paciente marcados como pago, atrasado e pendente. Dados fictícios.",
    },
    dorTitulo: "Você sabe agora quanto tem para receber este mês?",
    dores: [
      {
        titulo: "Planilha que ninguém atualiza",
        texto: "Começou organizada em janeiro e parou em março.",
      },
      {
        titulo: "Cobrança constrangedora",
        texto: "Sem certeza de quem pagou, fica difícil perguntar ao paciente.",
      },
      {
        titulo: "Pagamento misturado no extrato",
        texto: "Pix de paciente no meio das contas pessoais.",
      },
      {
        titulo: "Mês fechado no chute",
        texto: "Quanto entrou, quanto falta e se o mês foi melhor que o anterior.",
      },
    ],
    solucaoTitulo: "Controle financeiro do consultório em um lugar só.",
    solucaoLede: "Cada lançamento é ligado ao paciente e mostra a situação de um jeito simples.",
    itens: [
      {
        titulo: "Já recebi ou vou receber",
        texto: "O lançamento pergunta isso logo de cara e preenche o resto para você.",
      },
      {
        titulo: "Pago, pendente ou atrasado",
        texto: "Passou o vencimento sem pagamento, o lançamento aparece como atrasado.",
      },
      {
        titulo: "Marcar como pago com um clique",
        texto: "Recebeu o Pix, marque na lista. Sem abrir formulário.",
      },
      {
        titulo: "Resumo do mês",
        texto: "Recebido, a receber e atrasado no topo da tela.",
      },
      {
        titulo: "Histórico mês a mês",
        texto: "Veja os últimos meses lado a lado e compare.",
      },
      {
        titulo: "Exporte quando quiser",
        texto: "Os lançamentos saem em planilha para você ou para a contabilidade.",
      },
    ],
    faq: [
      {
        p: "O paciente paga pelo Gradatim?",
        r: "Não. O paciente paga direto a você, do jeito que vocês combinarem. No Gradatim você registra o pagamento para acompanhar.",
      },
      {
        p: "O Gradatim emite recibo ou nota fiscal?",
        r: "Não, por enquanto. O financeiro serve para controlar quem pagou e quanto entrou.",
      },
      {
        p: "Consigo ver meses anteriores?",
        r: "Sim. O histórico mostra mês a mês o que foi recebido e o que ficou pendente.",
      },
      {
        p: "Os valores aparecem se eu compartilhar a tela?",
        r: "Com o modo privado ligado (Alt+O), nomes e valores ficam borrados.",
      },
    ],
    tutoriais: ["financeiro"],
  },
  {
    slug: "seguranca",
    nome: "Segurança e sigilo",
    title: "Segurança, sigilo e LGPD no sistema para psicólogos | Gradatim",
    description:
      "Como o Gradatim protege o prontuário: contas isoladas, criptografia em repouso, guarda de 5 anos, modo privado e dados tratados conforme a LGPD.",
    sobre: "Segurança e LGPD",
    h1: "O sigilo vem antes de qualquer função.",
    lede: "Prontuário é obrigação ética e dado sensível. Cada conta é isolada, os dados ficam criptografados em repouso e só você tem acesso ao que registra.",
    print: {
      img: imgPacientesPrivado,
      url: "app.gradatim.com.br/pacientes",
      alt: "Lista de pacientes com o modo privado ligado: nomes e telefones borrados, só o status visível.",
    },
    dorTitulo: "Onde estão hoje os registros dos seus pacientes?",
    dores: [
      {
        titulo: "Arquivo no computador de casa",
        texto: "Sem senha, sem cópia e ao alcance de quem usa a mesma máquina.",
      },
      {
        titulo: "Prontuário em aplicativo de anotação",
        texto: "Ferramenta comum, sem cuidado com dado de saúde.",
      },
      {
        titulo: "Tela compartilhada com dado à vista",
        texto: "Na supervisão ou no suporte, o nome do paciente aparece para quem não devia.",
      },
      {
        titulo: "Medo de ficar sem acesso",
        texto: "Esqueceu de pagar e os registros ficaram presos no sistema.",
      },
    ],
    solucaoTitulo: "Dados tratados conforme a LGPD, do cadastro à exportação.",
    solucaoLede: "Dado de saúde é categoria sensível na LGPD. O Gradatim foi construído a partir disso.",
    itens: [
      {
        titulo: "Cada conta isolada",
        texto: "As regras de acesso ficam no próprio banco de dados. Uma conta nunca enxerga a outra.",
      },
      {
        titulo: "Criptografia em repouso",
        texto: "Os dados guardados ficam criptografados, e a conexão com o sistema é sempre segura.",
      },
      {
        titulo: "Guarda de 5 anos",
        texto: "Arquivar não apaga. A evolução fica guardada pelo prazo mínimo da Resolução CFP 01/2009.",
      },
      {
        titulo: "Modo privado (Alt+O)",
        texto: "Borra nomes, telefones e valores para você compartilhar a tela em supervisão, aula ou suporte.",
      },
      {
        titulo: "Somente leitura, nunca bloqueio",
        texto: "Se a assinatura vencer, você continua vendo e exportando tudo.",
      },
      {
        titulo: "Seus dados saem com você",
        texto: "Prontuário em PDF por paciente e a conta inteira em planilhas, quando quiser.",
      },
    ],
    faq: [
      {
        p: "O Gradatim é certificado?",
        r: "O Gradatim não tem selo ou certificação. O sistema foi pensado para a Resolução CFP 01/2009 e os dados são tratados conforme a LGPD. Os detalhes estão na Política de Privacidade.",
      },
      {
        p: "Outra conta consegue ver meus prontuários?",
        r: "Não. As regras de acesso ficam no próprio banco de dados e limitam cada conta aos seus dados. E o Gradatim não vende nem aluga dados a terceiros.",
      },
      {
        p: "O que acontece com meus dados se eu cancelar?",
        r: "A conta fica em somente leitura e você continua entrando para consultar e exportar o prontuário durante o prazo de guarda.",
      },
      {
        p: "O Gradatim lê meu Google Agenda?",
        r: "Não. A via é de mão única: o Gradatim cria e atualiza no seu Google Agenda só os eventos das consultas marcadas nele.",
      },
    ],
    tutoriais: ["privacidade"],
  },
];

export const recursoPorSlug = (slug: string) => RECURSOS.find((r) => r.slug === slug);
