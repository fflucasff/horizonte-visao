# Horizonte Visão

Site conceitual de uma clínica de oftalmologia e cirurgia refrativa, criado
como estudo de caso de projeto para serviços de saúde de alto valor.

**Site:** https://fflucasff.github.io/horizonte-visao/

> O Horizonte Visão é uma empresa fictícia. Nenhum oftalmologista, registro
> profissional, equipamento de marca específica ou resultado real é citado. O
> site não agenda consultas e o formulário não envia dados.

## O desafio do projeto

Cirurgia refrativa é vendida com uma promessa simples e errada: largar os
óculos. A promessa converte bem e gera dois problemas. O paciente inelegível
agenda, faz exames e recebe uma negativa que não esperava. E o paciente
elegível opera esperando independência total, descobre que ainda precisa de
óculos para perto depois dos quarenta e se sente enganado.

O projeto inverte a mensagem. A abertura diz que **nem todo olho pode operar e
que descobrir isso é o trabalho da avaliação**. Isso qualifica o contato e
transforma o protocolo de exames, que é o custo inicial do paciente, no
próprio argumento de competência da clínica.

## Decisões de estratégia

**Elegibilidade como seção principal.** Os cinco critérios aparecem explícitos:
grau estável, espessura e formato da córnea, superfície ocular saudável, saúde
ocular geral e expectativa alinhada. O paciente consegue antecipar se tem
chance antes de marcar.

**Aviso sobre presbiopia em destaque.** A dúvida mais importante do segmento é
respondida sem rodeio, explicando que a dificuldade de foco para perto
continua evoluindo com a idade independentemente da cirurgia.

**Exames apresentados como pergunta.** Cada exame vem com a pergunta que ele
responde, como "qual a espessura da córnea?". Tecnologia explicada pela função
em vez de pelo nome do aparelho, e sem citar marca.

**Logística dita antes.** O site informa que os exames duram cerca de duas
horas, que a pupila é dilatada e que não é possível dirigir na volta. Esse é
exatamente o tipo de informação que gera remarcação quando aparece tarde.

**Nenhuma métrica, nenhum número de cirurgias, nenhum depoimento.**

## Decisões de design

**Anéis concêntricos com função.** O motivo óptico aparece no símbolo, nos
marcadores dos critérios e na figura de abertura, sempre representando foco e
eixos de medida. Não é ornamento, é o mesmo sistema visual em três escalas.

**Teal profundo no lugar do azul hospitalar.** A cor institucional é um verde
azulado escuro, que mantém a seriedade clínica sem o tom de plano de saúde. O
âmbar aparece em dose mínima, apenas marcando tempo e ponto de eixo.

**Manrope em família única.** Geométrica e de leitura limpa, trabalhada de 400
a 800. Numerais e rótulos de tempo ficam legíveis em corpo pequeno.

**Blocos alternados com borda arredondada discreta.** Diferente dos cantos
retos do Instituto Âncora e da ausência total de cartão na Vereda, aqui os
módulos têm raio pequeno e borda fina, coerente com instrumento de medição.

**Sem fotografia e sem olho em close.** A clínica é fictícia e a ilustração é
própria, em SVG. Evita o clichê do olho gigante e qualquer risco de usar
imagem de pessoa real.

## Conversão

- Chamada única, que é solicitar avaliação.
- Ao lado do formulário, três linhas de expectativa prática sobre preparo,
  dilatação e quando sai a resposta de elegibilidade.
- Botão fixo na base da tela no celular.
- Validação no navegador, com mensagem por campo e foco no primeiro inválido.
- Confirmação declarando que nenhum dado foi enviado.
- Nenhum botão de WhatsApp, já que não existe número real para atender.

## Referências consultadas

- [NHS digital service manual, "How we write"](https://service-manual.nhs.uk/content/how-we-write)
  Referência de comunicação em saúde. A regra de substituir termo vago por
  informação específica guiou decisões concretas, como dizer "cerca de duas
  horas" e "não é possível dirigir na volta" em vez de "procedimento rápido e
  prático". A orientação de dar o termo simples antes do técnico aparece na
  explicação de presbiopia.
- [Parsley Health](https://www.parsleyhealth.com/)
  Referência de estrutura. Vale estudar o uso das perguntas frequentes para
  resolver cedo as objeções que travam o agendamento. Aqui a mesma lógica foi
  aplicada a elegibilidade, dor, tempo de recuperação e necessidade de
  acompanhante. Nenhum layout, texto ou código foi copiado.

## Limitações reais

- A clínica não existe. Estrutura, equipe e endereço são fictícios.
- O formulário não envia dados. Não há servidor, e-mail ou integração.
- As descrições de exames e critérios são gerais e não substituem avaliação
  presencial. Nada no site determina elegibilidade.
- Não há área do paciente, agendamento on-line nem resultado de exame.

## Rodando localmente

```bash
npm install
npm run dev
```

```bash
npm run build   # checagem de tipos e build de produção
```

## Stack

React, TypeScript e Vite, sem dependências de interface. Tipografia Manrope
via Google Fonts. Publicado no GitHub Pages por GitHub Actions.
