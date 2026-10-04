export type Decision = {
  kicker: string;
  title?: string;
  body: string[];
};

export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type CaseSection = {
  eyebrow: string;
  title: string;
  paragraphs?: string[];
  callout?: string;
  flow?: string[];
  decisions?: Decision[];
  split?: {
    left: { label: string; title: string; body: string };
    right: { label: string; title: string; body: string };
  };
};

export type CaseData = {
  slug: string;
  title: string;
  context: string;
  headline: string;
  description: string[];
  tags: string[];
  cover: string;
  quickFacts: { label: string; value: string }[];
  sections: CaseSection[];
  solution: {
    eyebrow: string;
    title: string;
    intro: string;
    modules: { index: string; kicker: string; title: string; body: string }[];
  };
  beforeAfter: {
    eyebrow: string;
    title: string;
    before: string[];
    after: string[];
    closing: string[];
  };
  metrics: Metric[];
  resultsIntro: string;
  resultsClosing: string;
  next: { href: string; label: string; description: string };
};

export const ruptura: CaseData = {
  slug: "ruptura",
  title: "Ruptura Parcial",
  context: "RD Saúde · Pós-compra · Tracking",
  headline: "Tornando visíveis as mudanças de um pedido antes que elas se transformassem em surpresa na entrega.",
  description: [
    "Durante a separação, um pedido podia mudar: itens removidos, quantidades ajustadas ou alterações na composição. Essas mudanças nem sempre chegavam ao cliente com clareza antes da entrega.",
    "Meu desafio foi transformar essa exceção operacional em uma experiência transparente, explicando o que mudou, o impacto no pedido e o que ainda seria entregue."
  ],
  tags: ["Product Design", "Pós-compra", "Squad - Tracking", "Transparência", "Multicanal"],
  cover: "/images/ruptura-cover.webp",
  quickFacts: [
    { label: "MEU PAPEL", value: "Product Designer" },
    { label: "ONDE ENTREI", value: "Evolução da jornada de pós-compra e das comunicações de ruptura." },
    { label: "DESAFIO", value: "Dar visibilidade ao que mudou antes que o cliente descobrisse na entrega." },
    { label: "MINHA ATUAÇÃO", value: "Jornada e dados · CSD · benchmark · estados e regras · UX/UI · UX Writing · alinhamento com Produto, Tech e Operação" }
  ],
  sections: [
    {
      eyebrow: "01 / Contexto e descoberta",
      title: "O pedido mudava depois da compra. A experiência precisava acompanhar essa mudança.",
      paragraphs: [
        "Entrei na iniciativa dentro da jornada de pós-compra.",
        "Durante a separação, a farmácia podia remover um item indisponível, ajustar quantidades ou alterar a composição do pedido.",
        "O pedido mudava durante a operação, mas o cliente nem sempre recebia essa informação no momento certo e com contexto suficiente."
      ],
      flow: ["Compra concluída", "Pedido em separação", "Item é alterado", "Mudança pouco clara", "Surpresa / contato"],
      callout: "O problema não era só a ruptura. Era deixar uma mudança real no pedido virar surpresa para o cliente."
    },
    {
      eyebrow: "Como investiguei",
      title: "Antes de definir a solução, organizei hipóteses e tensionei como diferentes perfis poderiam perceber essas mudanças.",
      decisions: [
        {
          kicker: "MATRIZ CSD",
          body: ["Organizei certezas, suposições e dúvidas para separar o que já sabíamos daquilo que ainda precisava ser investigado."]
        },
        {
          kicker: "BENCHMARK",
          body: ["Analisei como outros produtos comunicavam alterações, indisponibilidade e impacto financeiro em jornadas de compra e pós-compra."]
        },
        {
          kicker: "PERSONAS SINTÉTICAS",
          body: ["Usei perfis sintéticos de forma exploratória para stress-testar mensagens e observar possíveis reações emocionais a cada cenário de ruptura."]
        }
      ],
      callout: "As personas sintéticas serviram para explorar hipóteses e antecipar possíveis reações — não para substituir evidência de usuários reais."
    },
    {
      eyebrow: "02 / Pensamento",
      title: "Três decisões guiaram a experiência.",
      decisions: [
        {
          kicker: "DECISÃO 01 / AVISAR NÃO ERA SUFICIENTE",
          body: [
            "Uma mensagem genérica como “seu pedido foi ajustado” ainda deixava o cliente sem entender o que tinha acontecido.",
            "A experiência precisava explicar a mudança, não apenas sinalizar que ela existia."
          ]
        },
        {
          kicker: "DECISÃO 02 / A MUDANÇA PRECISAVA APARECER NO NÍVEL DO ITEM",
          body: [
            "Remover um produto, reduzir uma quantidade ou adicionar uma substituição têm impactos diferentes.",
            "Por isso, cada cenário ganhou um estado próprio e uma explicação objetiva dentro do pedido."
          ]
        },
        {
          kicker: "DECISÃO 03 / A MESMA LÓGICA PRECISAVA FUNCIONAR EM DIFERENTES CANAIS",
          body: [
            "O app concentra o detalhe da alteração e do impacto no pedido.",
            "Push, Live Activities, e-mail e WhatsApp antecipam o evento e levam o cliente para o contexto certo."
          ]
        }
      ],
      callout: "Meu papel foi transformar uma exceção operacional em um modelo de comunicação que mantivesse a mesma lógica ao longo da jornada."
    },
    {
      eyebrow: "03 / Repriorização",
      title: "Quando o contexto técnico mudou, voltei para o problema antes de voltar para a solução.",
      paragraphs: [
        "A proposta inicial já havia sido construída e validada em outro momento do projeto. Com a saída do Tech Lead e a entrada de novas lideranças técnicas, parte do que antes parecia viável passou a exigir outra leitura de esforço e complexidade."
      ],
      decisions: [
        {
          kicker: "01 / MUDANÇA DE CONTEXTO",
          title: "A viabilidade técnica mudou.",
          body: ["Em vez de tratar a solução anterior como definitiva, considerei o novo cenário técnico como um sinal para reavaliar o recorte."]
        },
        {
          kicker: "02 / VOLTA ÀS EVIDÊNCIAS",
          title: "Repriorizei pelo problema, não pelo desenho.",
          body: ["Voltei para Voz do Cliente, NSS e contatos para separar o que era essencial para reduzir surpresa e dúvida do que poderia esperar."]
        },
        {
          kicker: "03 / NOVO RECORTE",
          title: "O MVP ficou menor, mas mais defensável.",
          body: ["Priorizamos os cenários de maior valor para o cliente e deixamos situações de maior complexidade para evoluções posteriores."]
        }
      ],
      split: {
        left: { label: "MVP", title: "Removido · Quantidade ajustada · Item adicionado", body: "Cenários necessários para explicar o que mudou e reduzir surpresa no recebimento." },
        right: { label: "EVOLUÇÕES POSTERIORES", title: "Cenários de maior complexidade", body: "Situações que exigiam novas regras ou dependências técnicas ficaram para uma evolução posterior." }
      },
      callout: "A prioridade deixou de ser preservar a solução original. Passou a ser proteger o valor essencial da experiência dentro do novo contexto técnico."
    },
    {
      eyebrow: "04 / Estrutura",
      title: "Como transformei diferentes tipos de ruptura em informação compreensível.",
      decisions: [
        {
          kicker: "PRINCÍPIO",
          title: "A mudança precisava ser explicada no nível do item.",
          body: ["Removido · Quantidade ajustada · Item adicionado · Cenário de incerteza"]
        },
        {
          kicker: "NO ITEM",
          title: "Estado da alteração → Explicação objetiva",
          body: ["Removido, ajustado ou adicionado aparecem junto ao item e deixam explícito o que aconteceu."]
        },
        {
          kicker: "NO PEDIDO",
          title: "Impacto financeiro → Total atualizado",
          body: ["O cliente entende o efeito da mudança no valor final, no reembolso e no restante do pedido."]
        }
      ],
      callout: "A ruptura deixava de ser um status genérico e passava a explicar o que mudou e o que ainda seria entregue."
    }
  ],
  solution: {
    eyebrow: "05 / Solução",
    title: "A complexidade ficava por trás. Para o cliente, cada estado precisava fazer sentido.",
    intro: "A solução organiza uma combinação extensa de regras de negócio, estados logísticos e impactos financeiros sem expor essa complexidade para o cliente.",
    modules: [
      { index: "01", kicker: "ENTRADA NA RUPTURA", title: "Contextualizar antes de detalhar.", body: "O aviso entra cedo na hierarquia. Primeiro o cliente entende que o pedido mudou; depois encontra o detalhe no contexto correto." },
      { index: "02", kicker: "ESTADOS DOS ITENS", title: "Explicar a ruptura no nível do produto.", body: "Cada item deixa claro se foi removido, ajustado ou adicionado. Em cenários de incerteza, a comunicação não cria uma falsa certeza." },
      { index: "03", kicker: "TIMELINE", title: "O CTA muda com o momento da jornada.", body: "Durante os primeiros dias de delivery, rastrear continua sendo a tarefa principal. Depois, revisar as alterações passa a ser mais útil. No Compre & Retire, o acesso direto às alterações é prioritário." },
      { index: "04", kicker: "VALORES", title: "Explicar de onde veio a diferença.", body: "Quando a ruptura muda o total, a interface mostra o impacto financeiro, o total ajustado e uma explicação sob demanda." },
      { index: "05", kicker: "COMPLEXIDADE", title: "Preservar contexto em pedidos mistos e pagamentos diferentes.", body: "A ruptura pode afetar apenas uma parte do pedido e o reembolso precisa refletir a origem real do pagamento." },
      { index: "06", kicker: "MULTICANAL", title: "Cada canal tem um papel diferente.", body: "Push alerta, Live Activities acompanha, WhatsApp resume e e-mail suporta o registro mais completo. A lógica é única; a profundidade muda por canal." }
    ]
  },
  beforeAfter: {
    eyebrow: "06 / Mudança",
    title: "De uma mudança pouco visível para uma experiência que explica exatamente o que aconteceu.",
    before: ["Pedido em separação", "Item indisponível / alterado", "Pedido é ajustado", "Cliente recebe pouco contexto", "Descobre a mudança tarde", "Surpresa / contato no pós-compra"],
    after: ["Pedido em separação", "Produto sinaliza a alteração", "Cliente entende item por item", "Visualiza impacto financeiro", "Acompanha o restante do pedido"],
    closing: [
      "A mudança mais importante não foi criar mais uma mensagem.",
      "Foi estruturar uma linguagem de produto capaz de explicar a ruptura antes da entrega, no nível do item e com o mesmo raciocínio em diferentes canais."
    ]
  },
  metrics: [
    { value: "−18%", label: "Contact Rate", detail: "Redução de contatos relacionados à jornada de pedidos com ruptura." },
    { value: "↑", label: "Acesso aos detalhes via push", detail: "Mais clientes navegaram da comunicação até o detalhe do pedido. Variação não divulgada por confidencialidade." },
    { value: "↓", label: "Surpresa relatada no NSS", detail: "Redução das avaliações em que clientes relatavam descobrir só no recebimento que um item havia faltado." }
  ],
  resultsIntro: "Depois da evolução da comunicação de ruptura, acompanhamos sinais de menor dependência do atendimento e maior busca pelo contexto correto dentro do produto.",
  resultsClosing: "Os sinais indicam que antecipar e contextualizar a alteração ajudou a reduzir a necessidade de contato e a surpresa no recebimento.",
  next: { href: "/reenvio", label: "Reenvio automático de pedidos →", description: "Como transformamos uma falha de entrega em uma jornada de autoatendimento." }
};

export const reenvio: CaseData = {
  slug: "reenvio",
  title: "Reenvio automático de pedidos",
  context: "RD Saúde · Pós-compra · Tracking",
  headline: "Transformando uma falha de entrega em uma jornada que o próprio cliente consegue resolver.",
  description: [
    "Quando um pedido não era entregue e retornava para a farmácia, o cliente ainda dependia de atendimento e da operação para conseguir uma nova tentativa.",
    "Meu desafio foi transformar parte dessa recuperação em uma experiência de autoatendimento dentro do próprio produto."
  ],
  tags: ["Product Design", "Pós-compra", "Squad - Tracking", "Autoatendimento", "App + Web"],
  cover: "/images/reenvio-cover.webp",
  quickFacts: [
    { label: "MEU PAPEL", value: "Product Designer" },
    { label: "ONDE ENTREI", value: "Evolução da jornada de pós-compra, estruturando o reenvio dentro do Tracking." },
    { label: "DESAFIO", value: "Reduzir a dependência do atendimento para recuperar uma entrega que falhou." },
    { label: "MINHA ATUAÇÃO", value: "Jornada e dados · regras e estados · decisões de produto e MVP · UX/UI · alinhamento técnico e operacional" }
  ],
  sections: [
    {
      eyebrow: "01 / Contexto",
      title: "O problema já existia na operação. Meu trabalho foi transformar isso em uma experiência de produto.",
      paragraphs: [
        "Entrei no projeto dentro da jornada de Tracking.",
        "Quando a entrega falhava e o pedido retornava para a farmácia, a recuperação ainda dependia de atendimento e da operação.",
        "Meu papel foi entender esse processo, mapear seus estados e transformar uma recuperação assistida em uma jornada que o próprio cliente pudesse iniciar."
      ],
      flow: ["Entrega falha", "Pedido retorna", "Cliente procura ajuda", "Atendimento / operação", "Nova tentativa"],
      callout: "O problema não era só avisar que a entrega falhou. O cliente continuava sem conseguir fazer nada a respeito."
    },
    {
      eyebrow: "02 / Pensamento",
      title: "Três decisões guiaram a solução.",
      decisions: [
        {
          kicker: "DECISÃO 01 / COMUNICAÇÃO NÃO ERA SUFICIENTE",
          body: ["Explicar melhor o que aconteceu ainda deixaria o cliente dependente de atendimento.", "A experiência precisava terminar em uma ação, não apenas em uma mensagem."]
        },
        {
          kicker: "DECISÃO 02 / A PRÓXIMA AÇÃO PRECISAVA SER ÓBVIA",
          body: ["Se havia possibilidade de uma nova tentativa, o cliente precisava entender imediatamente o que fazer.", "Por isso, o estado “Pedido não entregue” já direciona para a conferência do endereço."]
        },
        {
          kicker: "DECISÃO 03 / O MVP PRECISAVA SER VIÁVEL",
          body: ["Eu precisava equilibrar a experiência ideal com o que era tecnicamente viável naquele momento.", "Essa decisão definiu o recorte do MVP e a evolução da solução."]
        }
      ],
      callout: "A experiência ideal continuava como direção. O MVP precisava colocar valor no ar sem ignorar as restrições do produto."
    },
    {
      eyebrow: "03 / MVP",
      title: "Como destravei a entrega mesmo com uma dependência externa.",
      decisions: [
        {
          kicker: "DEPENDÊNCIA",
          title: "API de edição de endereço criada por outro time",
          body: ["A edição de endereço dependia de uma capacidade que ainda não estava disponível para a squad."]
        },
        {
          kicker: "DECISÃO",
          title: "Não bloquear toda a iniciativa",
          body: ["A V1 permitiria visualizar o endereço atual e confirmar o reenvio. A edição entraria como evolução."]
        }
      ],
      split: {
        left: { label: "V1", title: "Visualizar endereço atual → Confirmar reenvio", body: "Cliente visualiza o endereço atual e confirma o reenvio." },
        right: { label: "V2", title: "Editar endereço → Confirmar reenvio", body: "Cliente pode editar o endereço antes de confirmar o reenvio." }
      },
      callout: "A V1 não precisava resolver todos os cenários. Precisava resolver bem o cenário que já conseguíamos viabilizar."
    }
  ],
  solution: {
    eyebrow: "04 / Solução",
    title: "A solução em poucos passos.",
    intro: "O produto transforma uma falha logística em uma jornada com próximo passo claro, reduzindo a necessidade de procurar atendimento.",
    modules: [
      { index: "01", kicker: "STATUS", title: "O problema aparece no contexto do pedido.", body: "O cliente entende que a entrega falhou e que o pedido retornou para a farmácia." },
      { index: "02", kicker: "ENDEREÇO", title: "A próxima ação fica explícita.", body: "A jornada direciona para a conferência do endereço antes de solicitar uma nova tentativa." },
      { index: "03", kicker: "CONFIRMAÇÃO", title: "O reenvio passa a ser iniciado pelo próprio cliente.", body: "A confirmação transforma uma etapa antes assistida em autoatendimento." },
      { index: "04", kicker: "ACOMPANHAMENTO", title: "O pedido volta para a jornada de tracking.", body: "Depois do reenvio, o cliente acompanha novamente o pedido no mesmo produto." }
    ]
  },
  beforeAfter: {
    eyebrow: "05 / Mudança",
    title: "De uma recuperação assistida para uma jornada de autoatendimento.",
    before: ["Entrega falha", "Pedido retorna", "Cliente procura ajuda", "Atendimento", "Operação", "Pedido era cancelado ou recebia nova tentativa"],
    after: ["Entrega falha", "Produto comunica o problema", "Cliente confere o endereço", "Solicita o reenvio", "Acompanha novamente o pedido"],
    closing: [
      "A mudança mais importante não foi uma nova tela.",
      "Foi levar para dentro do produto uma ação que antes dependia de outros canais e transformar uma falha logística em uma jornada com próximo passo claro."
    ]
  },
  metrics: [
    { value: "−35,6%", label: "SAC", detail: "1.004 → 646 casos/dia" },
    { value: "−27,7%", label: "Todos os canais", detail: "2.476 → 1.789 casos/dia" },
    { value: "−6,5%", label: "Pedidos captados", detail: "81.423 → 76.119 pedidos/dia" }
  ],
  resultsIntro: "Após a ativação do reenvio automático em app e site, o volume médio diário de solicitações de reenvio caiu tanto no SAC quanto no total dos canais.",
  resultsClosing: "Mesmo com 6,5% menos pedidos captados no período, a redução dos reenvios foi proporcionalmente maior — 35,6% no SAC e 27,7% considerando todos os canais.",
  next: { href: "/ruptura", label: "Ruptura Parcial →", description: "Como tornamos alterações no pedido mais transparentes durante a separação." }
};
