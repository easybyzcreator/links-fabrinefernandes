import { ServiceCardItem, VideoItem } from '../types';

export const WHATSAPP_NUMBER = "5519971242720";
export const WHATSAPP_PATI_NUMBER = "5519997474575";

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const getWhatsAppLinkPati = (message: string) => {
  return `https://wa.me/${WHATSAPP_PATI_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const FABRINE_PROFILE = {
  name: "Fabrine Fernandes",
  title: "Neuropsicopedagoga Clínica & Institucional",
  registration: "ABPp 1242",
  avatarUrl: "https://raw.githubusercontent.com/easybyzcreator/imagens/2c0cfe5d80a4fecbb9c924492e54ad1548290f58/fabrine.png",
  logoUrl: "https://raw.githubusercontent.com/easybyzcreator/imagens/760f541bfc53287fe80e3b73d99869979d00d02f/logo%20fabrine%20-%20fundo%20transparente.png",
  tagline: "Avaliação e Atendimento Especializado a crianças com TEA (Autismo) e TDAH, com olhar para além do diagnóstico.",
  experienceYears: "24+",
  shortBio: "Mãe, palestrante e especialista em desenvolvimento humano e aprendizagem. Mais de 24 anos dedicados à educação inclusiva e acolhimento familiar.",
  fullBio: `Sou mãe coruja da Júlia e do Júlio, líder de projetos com crianças, apaixonada por música, Palestrante e Neuropsicopedagoga Clínica e Institucional com mais de 24 anos de experiência em educação.

Minha atuação foca na área da aprendizagem, área em que sou dedicada, criteriosa e intensa. Acredito que mais do que rótulos ou diagnósticos, minha missão é com pessoas, gosto de olhar para o que está por trás do diagnóstico.

Possuo ampla formação nas áreas de Educação Inclusiva, Neuropsicopedagogia/Psicopedagogia, AEE – Atendimento Educacional Especializado, com certificações em TDAH, Dislexia, Alfabetização, capacitação em ABA (AT, ABA na prática, Manejo de comportamentos), Sistema de Avaliação/Rastreio Padronizado do TEA (Autismo) e em constante capacitação, pois acredito que devemos sempre buscar aprimoramento e atendimento de excelência em tudo que fazemos.`,
  socials: {
    instagram: "https://www.instagram.com/psicofabrinefernandes/",
    facebook: "https://www.facebook.com/fabrineneuropsico",
    spotify: "https://open.spotify.com/episode/5tU1QrpxNiZkqp1MDT2HtR",
    website: "https://fabrinefernandes.vercel.app/",
    whatsapp: getWhatsAppLink("Olá Fabrine, estava navegando no seu site e gostaria de tirar uma dúvida."),
    youtube: "https://www.youtube.com/@psicopedagoga.fabrine9631"
  }
};

export const SERVICES_DATA: ServiceCardItem[] = [
  {
    id: "avaliacao-infantil",
    title: "Agende uma Avaliação para seu Filho(a)",
    subtitle: "Investigação neuropsicopedagógica completa e humanizada",
    badge: "Atendimento Clínico",
    category: "atendimento",
    iconName: "CalendarCheck",
    accentColor: "#C5A059", // Dourado
    shortDescription: "Investigação neuropsicopedagógica completa para compreender os desafios de aprendizagem, atenção e comportamento com acolhimento e ciência.",
    fullDescription: "A Avaliação Neuropsicopedagógica Clínica é um processo estruturado e afetuoso que identifica potencialidades e barreiras no desenvolvimento infantil (TDAH, TEA, Dislexia, Dificuldades de Aprendizagem).",
    features: [
      "Anamnese aprofundada com a família e histórico escolar",
      "Sessões lúdicas e científicas de rastreio cognitivo e comportamental",
      "Análise de funções executivas, atenção, memória e regulação emocional",
      "Devolutiva completa com Laudo/Relatório e Plano de Intervenção personalizado"
    ],
    primaryActionLabel: "Agendar Avaliação no WhatsApp",
    primaryActionUrl: getWhatsAppLink("Olá Fabrine, estava navegando no seu site e gostaria de saber mais sobre a Avaliação Neuropsicopedagógica para meu filho(a)."),
  },
  {
    id: "mapa-acolhimento",
    title: "M.A.P.A. do Acolhimento®",
    subtitle: "Transforme o Primeiro Contato em Conexão",
    badge: "3 Versões Disponíveis",
    category: "mapa",
    iconName: "Compass",
    accentColor: "#16A34A", // Verde Oficial
    targetAudienceText: "ESCOLAS, AEE, CLÍNICAS, TERAPEUTAS, ESPAÇOS RECREATIVOS, ACADEMIAS, PROFISSIONAIS LIBERAIS",
    shortDescription: "Mapeamento digital estratégico para eliminar por completo as lacunas de informação e o risco de provocar reações sensoriais, comportamentais ou emocionais no primeiro contato.",
    fullDescription: `O primeiro encontro com uma pessoa neurodivergente pode ser determinante para o sucesso do vínculo terapêutico ou pedagógico. Sem as informações certas, profissionais caminham no escuro, correndo o risco de provocar reações sensoriais, comportamentais ou emocionais de forma não intencional. O M.A.P.A. do Acolhimento® foi criado para mudar essa realidade. Baseado na metodologia da Fabrine, este mapeamento digital estratégico é preenchido pelas famílias ou responsáveis e foi desenvolvido com um objetivo claro: eliminar por completo as lacunas de informação no primeiro contato profissional.`,
    features: [
      "Eliminação de gatilhos sensoriais e comportamentais antes mesmo da 1ª sessão",
      "Uso estratégico de hiperfocos para conexão imediata com o paciente ou aluno",
      "Painel visual de leitura ágil (menos de 3 minutos para alinhar toda a equipe)"
    ],
    subOptions: [
      {
        id: "mapa-kids-teens",
        title: "1. M.A.P.A. Kids & Teens",
        tag: "Para Crianças e Adolescentes",
        description: "Perfeito para profissionais e instituições que lidam com o neurodesenvolvimento infanto-juvenil e precisam de um protocolo claro e seguro de acolhimento e manejo diário.",
        targetAudience: "Clínicas de Psicopedagogia, Psicologia, Terapia Ocupacional, Fonoaudiologia, Escolas (Sala de aula comum e AEE), Professores e Auxiliares de Inclusão.",
        deliverables: [
          {
            title: "Eliminação de Gatilhos",
            description: "Saiba exatamente o que a criança abomina (sons, luzes, toques específicos) antes mesmo de ela entrar pela porta."
          },
          {
            title: "Uso Estratégico de Hiperfocos",
            description: "Descubra os interesses específicos (ex: dinossauros, carros) para engajar e conectar com o paciente imediatamente."
          },
          {
            title: "Protocolo de Segurança Anticrise",
            description: "Mapeia os sinais sutis de alerta (como agitar as mãos ou cobrir ouvidos) e define estratégias de autorregulação imediata, evitando abordagens inadequadas."
          }
        ],
        linkUrl: getWhatsAppLinkPati("Olá Pati, estava navegando no site da Fabrine Fernandes e quero adquirir o M.A.P.A. Kids & Teens. Você me dar maiores informações?")
      },
      {
        id: "mapa-adultos",
        title: "2. M.A.P.A. Adultos",
        tag: "Para Adultos Neurodivergentes",
        description: "Estruturação estratégica e mapeamento de perfil para o público adulto. Focado em autonomia, regulação sensorial e respeito à individualidade, otimizando o tempo de consulta e direcionando a conduta profissional com máxima precisão.",
        targetAudience: "Terapeutas, Psicólogos, Psiquiatras, Neurologistas e Profissionais de Saúde e Desenvolvimento Humano que atendem adultos neurodivergentes (TEA, TDAH, TPS).",
        deliverables: [
          {
            title: "Otimização de Tempo",
            description: "Substitui anamneses longas por um painel visual de leitura rápida com o que realmente importa para a conduta diária."
          },
          {
            title: "Mapeamento de Sensibilidades",
            description: "Identifica fatores ambientais e corporais (hiper ou hiposensibilidade) que afetam o foco e a regulação emocional do adulto no ambiente."
          },
          {
            title: "Aliança Terapêutica Acelerada",
            description: "Ajusta os canais preferenciais de interação desde a primeira sessão, diminuindo a ansiedade do cliente."
          }
        ],
        linkUrl: getWhatsAppLinkPati("Olá Pati, estava navegando no site da Fabrine Fernandes e quero adquirir o M.A.P.A. Adultos. Você me dar maiores informações?")
      },
      {
        id: "mapa-hibrido",
        title: "3. M.A.P.A. Híbrido",
        tag: "Versão Completa & Integrada",
        description: "A solução definitiva e completa para profissionais e clínicas que atendem todas as faixas etárias. Flexibilidade total para alternar entre perfis infanto-juvenis e adultos dentro de uma única plataforma centralizada.",
        targetAudience: "Centros de Atendimento Multidisciplinar, Clínicas Integradas, Escolas de grande porte e profissionais autônomos com esteira de atendimento mista.",
        deliverables: [
          {
            title: "Centralização Absoluta",
            description: "Reúne as ferramentas de segurança infanto-juvenil e os critérios de regulação e autonomia adulta em uma única interface."
          },
          {
            title: "Fim da Desorganização Visual",
            description: "Toda a sua equipe alinhada. Qualquer profissional consegue ler e compreender o histórico e o manejo de qualquer paciente em menos de 3 minutos."
          },
          {
            title: "Escalabilidade do Negócio",
            description: "Permite expandir o escopo da sua clínica sem a necessidade de assinar múltiplos sistemas diferentes."
          }
        ],
        linkUrl: getWhatsAppLinkPati("Olá Pati, estava navegando no site da Fabrine Fernandes e quero adquirir o M.A.P.A. Híbrido. Você me dar maiores informações?")
      }
    ],
    primaryActionLabel: "Quero Adquirir",
    primaryActionUrl: getWhatsAppLinkPati("Olá Pati, estava navegando no site da Fabrine Fernandes e quero adquirir o M.A.P.A. do Acolhimento®. Você me dar maiores informações?"),
  },
  {
    id: "capacitacao-tea",
    title: "TEA na Sala de Aula",
    subtitle: "Tenho um aluno com características de TEA. E agora?",
    badge: "Para Educadores",
    category: "capacitacao",
    iconName: "GraduationCap",
    accentColor: "#68C9EA", // Azul
    shortDescription: "Formação introdutória e baseada em evidências para professores e profissionais que desejam atuar com segurança e inclusão consciente com estudantes com TEA.",
    fullDescription: "Esta capacitação foi desenvolvida para professores e profissionais da educação que desejam ampliar seus conhecimentos sobre o Transtorno do Espectro Autista (TEA) e compreender como esse estudante pode se apresentar no contexto escolar. Trata-se de uma formação introdutória, baseada em evidências e voltada à realidade da sala de aula, oferecendo fundamentos para uma atuação pedagógica mais consciente e inclusiva.",
    features: [
      "8 aulas gravadas com acesso por 12 meses",
      "Materiais de apoio complementares inclusos",
      "Certificado de participação para quem concluir 90% do curso",
      "Canal de suporte pelo WhatsApp durante 30 dias para esclarecimento de dúvidas relacionadas ao conteúdo do curso"
    ],
    schedule: [
      "Aula 1: Introdução à Educação Inclusiva",
      "Aula 2: Legislação e direitos do estudante com TEA",
      "Aula 3: Características frequentemente observadas em estudantes com TEA e sinais que merecem atenção da equipe escolar",
      "Aula 4: Estratégias iniciais para favorecer a participação do estudante com TEA",
      "Aula 5: Comportamentos desafiadores: o que precisamos compreender?",
      "Aula 6: O papel do Atendimento Educacional Especializado (AEE)",
      "Aula 7: PAEE e PEI: diferenças, objetivos e responsabilidades",
      "Aula 8: Estudo de caso: princípios para elaboração do PEI"
    ],
    primaryActionLabel: "Garantir Vaga no Curso",
    primaryActionUrl: getWhatsAppLink("Olá Fabrine, estava navegando no seu site e quero garantir minha vaga na Capacitação: TEA na Sala de Aula."),
  },
  {
    id: "curso-professora-inclusiva",
    title: "Curso: Professora Inclusiva: Primeiros Passos",
    subtitle: "Segurança e conhecimento prático para iniciar na Educação Inclusiva.",
    badge: "Curso Prático & Ao Vivo",
    category: "capacitacao",
    iconName: "BookOpenCheck",
    accentColor: "#F9DC3F", // Amarelo
    shortDescription: "Capacitação prática e dinâmica com encontros ao vivo, estudo de casos reais, modelos de documentos e foco em TEA e Deficiência Intelectual.",
    fullDescription: "Dar os primeiros passos na Educação Inclusiva exige conhecimento e segurança. Neste curso, você conhecerá os principais conceitos da Educação Inclusiva, aspectos da legislação, características gerais de algumas deficiências e transtornos frequentemente encontrados no contexto escolar e estratégias iniciais para organizar práticas pedagógicas mais inclusivas. O foco será estudar TEA e Deficiência Intelectual como exemplos para compreender princípios aplicáveis a diferentes necessidades educacionais. Trata-se de uma capacitação dinâmica e interativa com encontros e materiais inclusos.",
    features: [
      "Encontros ao vivo e acesso às gravações e materiais de apoio",
      "Modelos de documentos e certificado de curso livre para quem completar 90% do curso",
      "Dois encontros ao vivo para discussão de casos reais",
      "Espaço para perguntas e troca de experiências",
      "Acompanhamento pelo WhatsApp para esclarecimento de dúvidas sobre os conteúdos do curso e discussão de situações vivenciadas na prática escolar"
    ],
    schedule: [
      "Aula 1: Fundamentos da Educação Inclusiva",
      "Aula 2: Legislação e direitos educacionais",
      "Aula 3: Compreendendo o estudante com TEA",
      "Aula 4: Deficiência Intelectual: características e necessidades de apoio",
      "Aula 5 (AO VIVO): Comportamentos desafiadores: o que eles comunicam?",
      "Aula 6: Estratégias simples que qualquer professor pode aplicar amanhã",
      "Aula 7 (AO VIVO): Construção coletiva de um estudo de caso",
      "Aula 8: PEI e PAEE: Entendendo as diferenças e quando cada documento é utilizado"
    ],
    primaryActionLabel: "Acessar Curso Primeiros Passos",
    primaryActionUrl: getWhatsAppLink("Olá Fabrine, estava navegando no seu site e gostaria de mais informações sobre o Curso Professora Inclusiva: Primeiros Passos."),
  },
  {
    id: "palestras",
    title: "Palestra | Online ou Presencial",
    subtitle: "Além da disciplina: entendendo os comportamentos desafiadores na sala de aula",
    badge: "Escolas & Instituições",
    category: "palestra",
    iconName: "Mic",
    accentColor: "#C5A059", // Dourado
    shortDescription: "Palestra transformadora sobre a função dos comportamentos desafiadores, prevenção de crises e práticas inclusivas positivas em sala de aula.",
    fullDescription: "Os comportamentos desafiadores são uma das principais preocupações dos profissionais da educação e, muitas vezes, são interpretados apenas como problemas de disciplina. Nesta palestra, propomos um olhar mais amplo sobre o tema, considerando os fatores que podem influenciar esses comportamentos, especialmente no contexto da Educação Inclusiva e do Transtorno do Espectro Autista (TEA). Uma palestra voltada a professores, gestores, equipes pedagógicas e demais profissionais da educação que desejam ampliar seus conhecimentos sobre o tema e refletir sobre possibilidades de atuação no cotidiano escolar.",
    features: [
      "Discussão de conceitos fundamentais e estratégias baseadas em evidências",
      "Compreensão profunda da função do comportamento",
      "Prevenção de situações de maior tensão e agitação",
      "Construção de práticas pedagógicas que favorecem a participação dos estudantes e uma convivência mais positiva em sala de aula"
    ],
    idealFor: [
      "Professores de Educação Infantil, Ensino Fundamental e Médio",
      "Gestores e Coordenadores Pedagógicos",
      "Profissionais de Atendimento Educacional Especializado (AEE)",
      "Equipes multidisciplinares e de apoio escolar"
    ],
    primaryActionLabel: "Solicitar Proposta de Palestra",
    primaryActionUrl: getWhatsAppLink("Olá Fabrine, estava navegando no seu site e gostaria de solicitar uma proposta para a Palestra: Além da Disciplina (Online/Presencial)."),
  },
  {
    id: "comunidade-whatsapp",
    title: "Comunidade Educadores Inclusivos 🧩",
    subtitle: "Comunidade Oficial de Educação Inclusiva | Fabrine Fernandes 🧩",
    badge: "Gratuito & Exclusivo",
    category: "comunidade",
    iconName: "Users",
    accentColor: "#56C45F", // Verde
    shortDescription: "Espaço gratuito de troca, materiais complementares, avisos e atualização contínua para professores e profissionais da educação.",
    fullDescription: `Comunidade Oficial de Educação Inclusiva | Fabrine Fernandes 🧩

Bem-vinda(o)! Este é o nosso espaço de troca e atualização para professores e profissionais da educação.

📍 Aqui você terá acesso a:
- Materiais complementares e resumos de capacitações
- Avisos em primeira mão sobre cursos, mentorias e eventos
- Conteúdos práticos sobre TEA, TDAH e inclusão na sala de aula
- 💡 Mantenha as notificações ativas para não perder nenhum aviso!`,
    features: [
      "Materiais complementares e resumos de capacitações",
      "Avisos em primeira mão sobre cursos, mentorias e eventos",
      "Conteúdos práticos sobre TEA, TDAH e inclusão na sala de aula",
      "Espaço seguro de troca e atualização contínua"
    ],
    primaryActionLabel: "Entrar na Comunidade Oficial",
    primaryActionUrl: "https://chat.whatsapp.com/K0tt0o8O3yX762YF0GxbTq",
  }
];

export const FEATURED_VIDEOS: VideoItem[] = [
  {
    id: "video-1",
    title: "Seu filho te desafia? Entenda o que está por trás do comportamento",
    description: "Desmistificando o TDAH, Dislexia e Autismo com afeto, ciência e orientação prática para pais e educadores.",
    thumbnailUrl: "https://i.ibb.co/qYrG89fb/cap1.png",
    videoUrl: "https://youtube.com/live/ZA2v_umEblo",
    type: "youtube",
    duration: "YouTube",
    tag: "Neurodesenvolvimento"
  },
  {
    id: "video-2",
    title: "O psicopedagogo trabalha conteúdos escolares?",
    description: "Técnicas de regulação emocional e ambiente seguro para crianças com TEA e sobrecarga sensorial.",
    thumbnailUrl: "https://i.ibb.co/ks3cYYyp/cap2.jpg",
    videoUrl: "https://www.youtube.com/watch?v=ktN3YGMG83E",
    type: "youtube",
    duration: "YouTube",
    tag: "TEA na Prática"
  },
  {
    id: "video-3",
    title: "Como funciona a Metodologia M.A.P.A. do Acolhimento®",
    description: "Passo a passo da rotina visual e eliminação de pontos cegos no acolhimento neurodivergente.",
    thumbnailUrl: "https://i.ibb.co/B5T2Qpjs/capa-video.png",
    videoUrl: "https://youtu.be/kkZLmdGEXe8",
    type: "youtube",
    duration: "YouTube",
    tag: "Metodologia M.A.P.A."
  }
];

export const SPOTIFY_EPISODE = {
  title: "A criança por trás do rótulo - o que muda quando olhamos para além do diagnóstico?",
  show: "Neuroacolhimento Podcast | Fabrine Fernandes",
  duration: "Ouvir no Spotify",
  releaseDate: "Episódio Oficial",
  spotifyUrl: "https://open.spotify.com/episode/62zM6h2XVadrnVefgALeRr?si=gwEY1pChQzWFP5wLC49KGw&utm_source=copy-link",
  coverUrl: "https://raw.githubusercontent.com/easybyzcreator/imagens/2c0cfe5d80a4fecbb9c924492e54ad1548290f58/fabrine.png",
  summary: "Neste episódio, Fabrine explica a importância de enxergar a singularidade da criança além de laudos e diagnósticos, construindo pontes sólidas de desenvolvimento e afeto."
};

