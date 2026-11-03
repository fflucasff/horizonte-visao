/**
 * Conteúdo do Horizonte Visão.
 * Clínica fictícia criada como estudo de caso. Nenhum oftalmologista,
 * registro profissional, equipamento de marca específica ou resultado real
 * é citado. Sem promessa de independência de óculos.
 */

export const clinica = {
  nome: 'Horizonte',
  sobrenome: 'Visão',
  descritor: 'Oftalmologia e cirurgia refrativa',
}

export const navegacao = [
  { id: 'atendimentos', rotulo: 'Atendimentos' },
  { id: 'refrativa', rotulo: 'Cirurgia refrativa' },
  { id: 'jornada', rotulo: 'Jornada' },
  { id: 'tecnologia', rotulo: 'Tecnologia' },
  { id: 'duvidas', rotulo: 'Dúvidas' },
]

export const abertura = {
  medida: 'Avaliação completa',
  titulo: 'Nem todo olho pode operar. Descobrir isso é o trabalho da avaliação.',
  texto:
    'O Horizonte Visão faz consulta oftalmológica, exames de diagnóstico e cirurgia refrativa. A avaliação para cirurgia é um protocolo de exames que define se o seu olho tem indicação, e uma parte dos pacientes recebe a resposta de que não tem.',
  chamada: 'Solicitar avaliação',
}

export const atendimentos = {
  titulo: 'O que atendemos',
  intro:
    'Consulta e exames em um mesmo lugar, para que o diagnóstico não dependa de encaminhamento entre serviços.',
  itens: [
    {
      nome: 'Consulta oftalmológica completa',
      texto:
        'Medida de grau, exame da pressão ocular, avaliação do fundo de olho e checagem da saúde ocular geral. É a consulta de rotina que identifica a maior parte das alterações antes de dar sintoma.',
    },
    {
      nome: 'Erros refrativos',
      texto:
        'Miopia, hipermetropia, astigmatismo e presbiopia. Inclui prescrição de óculos, adaptação de lentes de contato e, quando há indicação, discussão sobre cirurgia.',
    },
    {
      nome: 'Avaliação para cirurgia refrativa',
      texto:
        'Protocolo de exames específico que mede espessura e formato da córnea, estabilidade do grau e condições da superfície ocular.',
    },
    {
      nome: 'Catarata',
      texto:
        'Diagnóstico, acompanhamento da evolução e orientação sobre o momento adequado para a cirurgia, que varia conforme o impacto na rotina.',
    },
    {
      nome: 'Glaucoma',
      texto:
        'Rastreio, medida de pressão intraocular e exames de campo visual. Condição que costuma não dar sintoma no início, por isso o acompanhamento periódico importa.',
    },
    {
      nome: 'Olho seco e superfície ocular',
      texto:
        'Investigação de ardência, sensação de areia e visão que oscila ao longo do dia. Também é uma condição que precisa estar controlada antes de qualquer cirurgia refrativa.',
    },
  ],
}

export const refrativa = {
  titulo: 'Como funciona a avaliação para cirurgia refrativa',
  intro:
    'A cirurgia refrativa corrige o grau remodelando a córnea ou implantando uma lente. Antes disso, existe um protocolo que define elegibilidade. Ele não é formalidade.',
  criterios: [
    {
      titulo: 'Grau estável',
      texto:
        'O grau precisa estar estável por um período, em geral cerca de um ano. Grau que ainda muda tende a voltar a mudar depois da cirurgia.',
    },
    {
      titulo: 'Espessura e formato da córnea',
      texto:
        'A topografia e a paquimetria medem a córnea em detalhe. Córnea fina demais ou com formato irregular pode contraindicar a técnica a laser.',
    },
    {
      titulo: 'Superfície ocular saudável',
      texto:
        'Olho seco não tratado piora depois da cirurgia. Quando há alteração, o tratamento vem antes e a avaliação é refeita.',
    },
    {
      titulo: 'Saúde ocular geral',
      texto:
        'Fundo de olho, pressão intraocular e ausência de outras condições que interfiram no procedimento ou na cicatrização.',
    },
    {
      titulo: 'Expectativa alinhada',
      texto:
        'A conversa sobre o que a cirurgia faz e o que ela não faz. Presbiopia, por exemplo, continua evoluindo com a idade independentemente do procedimento.',
    },
  ],
  aviso:
    'Nenhuma técnica garante dispensa total de óculos em toda situação. Resultado, necessidade de correção residual e evolução ao longo dos anos variam conforme cada olho.',
}

export const jornada = {
  titulo: 'Jornada do paciente',
  passos: [
    {
      numero: '01',
      titulo: 'Consulta inicial',
      tempo: 'cerca de 40 minutos',
      texto:
        'Histórico, medida de grau e exame básico. Já indica se faz sentido seguir para o protocolo de cirurgia ou se o caso se resolve com correção óptica.',
    },
    {
      numero: '02',
      titulo: 'Exames de avaliação',
      tempo: 'cerca de 2 horas',
      texto:
        'Bateria de exames feita na clínica, com dilatação da pupila. A visão fica embaçada por algumas horas, então não é possível dirigir na volta.',
    },
    {
      numero: '03',
      titulo: 'Retorno com o laudo',
      tempo: 'consulta separada',
      texto:
        'Leitura dos exames, resposta sobre elegibilidade e, quando há indicação, qual técnica se aplica e por quê. Quando não há, qual o encaminhamento.',
    },
    {
      numero: '04',
      titulo: 'Procedimento',
      tempo: 'poucos minutos por olho',
      texto:
        'Realizado com anestesia em colírio, com alta no mesmo dia. O preparo e os cuidados posteriores são combinados antes da data.',
    },
    {
      numero: '05',
      titulo: 'Acompanhamento',
      tempo: 'primeiro dia, primeira semana, primeiro mês',
      texto:
        'Retornos programados para acompanhar a cicatrização e a estabilização da visão, que acontece gradualmente.',
    },
  ],
}

export const tecnologia = {
  titulo: 'Os exames, explicados',
  intro:
    'Cada exame responde a uma pergunta específica. Eles existem para dizer o que é possível, não para impressionar.',
  itens: [
    {
      nome: 'Topografia de córnea',
      pergunta: 'Qual o formato da sua córnea?',
      texto:
        'Mapeia a curvatura da superfície. Detecta irregularidades que contraindicam a cirurgia a laser, como o ceratocone em estágio inicial.',
    },
    {
      nome: 'Paquimetria',
      pergunta: 'Qual a espessura da córnea?',
      texto:
        'Mede em micrômetros. A espessura define quanto tecido pode ser remodelado com segurança e, portanto, qual grau pode ser corrigido.',
    },
    {
      nome: 'Aberrometria',
      pergunta: 'Como a luz se comporta dentro do seu olho?',
      texto:
        'Mede distorções ópticas além de grau comum, que explicam queixas como halos e dificuldade de visão noturna.',
    },
    {
      nome: 'Tonometria',
      pergunta: 'Qual a pressão dentro do olho?',
      texto:
        'Pressão intraocular elevada é o principal fator de risco para glaucoma e precisa ser verificada antes de qualquer procedimento.',
    },
    {
      nome: 'Mapeamento de retina',
      pergunta: 'Como está o fundo do olho?',
      texto:
        'Avalia retina, nervo óptico e vasos. Alterações periféricas podem exigir tratamento antes da cirurgia refrativa.',
    },
  ],
}

export const duvidas = [
  {
    pergunta: 'Vou parar de usar óculos?',
    resposta:
      'Não é possível prometer isso. A cirurgia refrativa reduz ou corrige o grau, e boa parte das pessoas passa a realizar a maioria das atividades sem correção. Ainda assim, pode permanecer um grau residual, e a presbiopia, que é a dificuldade de foco para perto que surge com a idade, continua evoluindo depois dos quarenta anos independentemente da cirurgia.',
  },
  {
    pergunta: 'Qualquer pessoa pode operar?',
    resposta:
      'Não. Uma parte dos pacientes avaliados recebe contraindicação, seja por córnea fina, formato irregular, grau instável, olho seco não controlado ou outra condição ocular. Essa é justamente a função do protocolo de exames.',
  },
  {
    pergunta: 'A cirurgia dói?',
    resposta:
      'O procedimento é feito com anestesia em colírio e dura poucos minutos por olho. Não há dor durante. Nas primeiras horas é comum sensação de areia, ardência e lacrimejamento, que diminuem ao longo do primeiro dia.',
  },
  {
    pergunta: 'Quando volto a enxergar bem?',
    resposta:
      'A recuperação varia conforme a técnica. Em geral há melhora já no primeiro dia, com estabilização gradual ao longo de semanas. O retorno a atividades específicas, como academia, piscina e maquiagem, é liberado em momentos diferentes e consta das orientações pós-operatórias.',
  },
  {
    pergunta: 'Preciso de acompanhante nos exames?',
    resposta:
      'Sim para os exames de avaliação, porque a dilatação da pupila deixa a visão embaçada por algumas horas e impede dirigir. Para a consulta inicial normalmente não é necessário.',
  },
  {
    pergunta: 'Com que frequência devo fazer consulta de rotina?',
    resposta:
      'Para adultos sem queixa e sem fator de risco, a orientação geral é uma avaliação periódica, com intervalo definido conforme idade e histórico. Quem tem diabetes, histórico familiar de glaucoma ou grau alto costuma precisar de acompanhamento mais frequente. O intervalo adequado para você é definido na consulta.',
  },
]

export const formulario = {
  motivos: [
    'Consulta de rotina',
    'Quero avaliar cirurgia refrativa',
    'Troca de grau de óculos ou lentes',
    'Catarata',
    'Glaucoma ou pressão ocular',
    'Olho seco ou desconforto',
  ],
}

export const rodape = {
  avisoMedico:
    'O conteúdo deste site é informativo e de caráter geral. Elegibilidade para cirurgia refrativa depende de exames específicos e de avaliação individual. Nenhuma informação aqui garante resultado ou dispensa do uso de óculos.',
  aviso:
    'Site de demonstração criado como estudo de caso. O Horizonte Visão é uma empresa fictícia. Nenhum dado preenchido no formulário é enviado ou armazenado.',
}
