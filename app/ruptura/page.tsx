import Image from "next/image";
import type { Metadata } from "next";
import {
  BeforeAfter,
  CaseHero,
  DecisionRows,
  GlobalFooter,
  MetricRow,
  NextCase,
  PortfolioHeader,
  QuickFacts,
} from "@/components/portfolio";
import { MultichannelCarousel } from "@/components/product-artifacts";
import { PortfolioCarousel } from "@/components/carousel";

export const metadata: Metadata = {
  title: "Ruptura Parcial",
  description: "Tornando visíveis as mudanças de um pedido antes que elas se transformassem em surpresa na entrega.",
};

const facts = [
  { label: "MEU PAPEL", value: "Product Designer" },
  { label: "ONDE ENTREI", value: "Na evolução da jornada de pós-compra, estruturando como alterações durante a separação seriam comunicadas dentro e fora do Tracking." },
  { label: "DESAFIO", value: "Dar visibilidade ao que mudou no pedido antes que o cliente descobrisse a alteração na entrega." },
  { label: "MINHA ATUAÇÃO", value: "Análise da jornada e dados · Matriz CSD e benchmark · Personas sintéticas para exploração de hipóteses · Definição de estados e regras · Arquitetura de informação · UX/UI · UX Writing · Alinhamento com Produto, Tech e Operação" },
];

const metrics = [
  { value: "−18%", label: "Contact Rate", detail: "Redução de contatos relacionados à jornada de pedidos com ruptura." },
  { value: "↑", label: "Acesso aos detalhes via push", detail: "Mais clientes navegaram da comunicação até o detalhe do pedido. Variação não divulgada por confidencialidade." },
  { value: "↓", label: "Surpresa relatada no NSS", detail: "Redução das avaliações em que clientes relatavam descobrir só no recebimento que um item havia faltado." },
];

const solutionModules = [
  { number: "01", kicker: "ENTRADA NA RUPTURA", title: "Contextualizar antes de detalhar.", description: "A ruptura muda a expectativa do pedido. Por isso, o aviso entra cedo na hierarquia da tela e adapta a mensagem ao tipo de alteração.", image: "/figma/ruptura-stage-1.png", width: 940, height: 670, layout: "side" },
  { number: "02", kicker: "ITENS", title: "Explicar a ruptura no nível do produto.", description: "“Pedido ajustado” não basta. O cliente precisa reconhecer qual item mudou e qual foi o tipo de alteração.", image: "/figma/ruptura-stage-items.png", width: 1360, height: 992, layout: "wide" },
  { number: "03", kicker: "TIMELINE", title: "O CTA muda com o momento da jornada.", description: "A mesma ruptura precisa se comportar de forma diferente enquanto o pedido ainda está sendo acompanhado, depois da entrega e no Compre & Retire.", image: "/figma/ruptura-stage-timelines.png", width: 1360, height: 900, layout: "wide" },
  { number: "04", kicker: "VALORES", title: "Explicar de onde veio a diferença.", description: "Quando a ruptura muda o total, a interface precisa mostrar o impacto financeiro sem transformar o resumo em uma aula de regra de negócio.", image: "/figma/ruptura-stage-values.png", width: 1020, height: 915, layout: "side" },
  { number: "05", kicker: "COMPLEXIDADE", title: "Preservar contexto em pedidos mistos e pagamentos diferentes.", description: "A ruptura pode afetar apenas uma parte do pedido e o reembolso precisa refletir exatamente a origem do pagamento.", image: "/figma/ruptura-stage-complexity.png", width: 1049, height: 750, layout: "side" },
] as const;

export default function RupturaPage() {
  return (
    <>
      <PortfolioHeader casePage />
      <main className="case-page case-page--ruptura">
        <CaseHero
          title="Ruptura Parcial"
          headline="Tornando visíveis as mudanças de um pedido antes que elas se transformassem em surpresa na entrega."
          paragraphs={[
            "Durante a separação, um pedido podia mudar: itens removidos, quantidades ajustadas ou alterações na composição. Essas mudanças nem sempre chegavam ao cliente com clareza antes da entrega.",
            "Meu desafio foi transformar essa exceção operacional em uma experiência transparente, explicando o que mudou, o impacto no pedido e o que ainda seria entregue.",
          ]}
          tags={["Product Design", "Pós-compra", "Squad - Tracking", "Transparência", "Multicanal"]}
          desktopImage="/figma/ruptura-hero-desktop.png"
          mobileImage="/figma/ruptura-hero-mobile.png"
        />

        <QuickFacts items={facts} />

        <section className="case-section rupture-context">
          <p className="case-chapter">01 / Contexto e descoberta</p>
          <div className="case-context__intro">
            <h2>O pedido mudava depois da compra. A experiência precisava acompanhar essa mudança.</h2>
            <div className="case-body-copy">
              <p>Entrei na iniciativa dentro da jornada de pós-compra.</p>
              <p>Durante a separação, a farmácia podia remover um item indisponível, ajustar quantidades ou alterar a composição do pedido.</p>
              <p>A operação sabia o que havia mudado, mas o cliente nem sempre recebia essa informação no momento certo e com contexto suficiente.</p>
            </div>
          </div>
          <div className="context-flow">
            {["Compra concluída", "Pedido em separação", "Item é alterado", "Mudança pouco clara", "Surpresa / contato"].map((item, index, all) => (
              <div className="context-flow__step" key={item}><span>{item}</span>{index < all.length - 1 ? <b aria-hidden="true">→</b> : null}</div>
            ))}
          </div>
          <p className="case-big-statement">O problema não era só a ruptura. Era deixar uma mudança real no pedido virar surpresa para o cliente.</p>

          <div className="discovery">
            <p className="figma-kicker">COMO INVESTIGUEI</p>
            <h3>Antes de definir a solução, organizei hipóteses e tensionei como diferentes perfis poderiam perceber essas mudanças no pedido.</h3>
            <div className="discovery__desktop desktop-only">
              {[
                ["MATRIZ CSD", "Organizei certezas, suposições e dúvidas para separar o que já sabíamos daquilo que ainda precisava ser investigado."],
                ["BENCHMARK", "Analisei como outros produtos comunicavam alterações, indisponibilidade e impacto financeiro em jornadas de compra e pós-compra."],
                ["PERSONAS SINTÉTICAS", "Usei perfis sintéticos de forma exploratória para stress-testar mensagens e observar possíveis reações emocionais a cada cenário de ruptura."],
              ].map(([title, body]) => <article key={title}><p className="figma-kicker">{title}</p><p>{body}</p></article>)}
            </div>
            <div className="mobile-only discovery__mobile">
              <PortfolioCarousel label="Discovery" slideClassName="discovery__mobile-slide">
                {[
                  ["MATRIZ CSD", "Organizei certezas, suposições e dúvidas para separar o que já sabíamos daquilo que ainda precisava ser investigado."],
                  ["BENCHMARK", "Analisei como outros produtos comunicavam alterações, indisponibilidade e impacto financeiro em jornadas de compra e pós-compra."],
                  ["PERSONAS SINTÉTICAS", "Usei perfis sintéticos de forma exploratória para stress-testar mensagens e observar possíveis reações emocionais a cada cenário de ruptura."],
                ].map(([title, body]) => <article key={title}><p className="figma-kicker">{title}</p><p>{body}</p></article>)}
              </PortfolioCarousel>
            </div>
            <p className="discovery__note">As personas sintéticas serviram para explorar hipóteses e antecipar possíveis reações — não para substituir evidência de usuários reais.</p>
          </div>
        </section>

        <section className="case-section case-thinking">
          <p className="case-chapter">02 / Pensamento</p>
          <h2>Três decisões guiaram a experiência.</h2>
          <DecisionRows rows={[
            { title: "DECISÃO 01 / AVISAR QUE HOUVE ALTERAÇÃO NÃO ERA SUFICIENTE", paragraphs: ["Uma mensagem genérica como ‘seu pedido foi ajustado’ ainda deixava o cliente sem entender o que tinha acontecido.", "A experiência precisava explicar a mudança, não apenas sinalizar que ela existia."] },
            { title: "DECISÃO 02 / A MUDANÇA PRECISAVA APARECER NO NÍVEL DO ITEM", paragraphs: ["Remover um produto, reduzir uma quantidade ou adicionar uma substituição têm impactos diferentes.", "Por isso, cada cenário ganhou um estado próprio e uma explicação objetiva dentro do pedido."] },
            { title: "DECISÃO 03 / A MESMA LÓGICA PRECISAVA FUNCIONAR EM DIFERENTES CANAIS", paragraphs: ["O app concentra o detalhe da alteração e do impacto no pedido.", "Push, Live Activities, e-mail e WhatsApp antecipam o evento e levam o cliente para o contexto certo."] },
          ]} />
          <p className="case-emphasis">Meu papel foi transformar uma exceção operacional em um modelo de comunicação que mantivesse a mesma lógica ao longo da jornada.</p>
        </section>

        <section className="case-section reprioritization">
          <p className="case-chapter">03 / Repriorização</p>
          <h2>Quando o contexto técnico mudou, voltei para o problema antes de voltar para a solução.</h2>
          <p className="reprioritization__intro">A proposta inicial já havia sido construída e validada em outro momento do projeto. Com a saída do Tech Lead e a entrada de novas lideranças técnicas, parte do que antes parecia viável passou a exigir outra leitura de esforço e complexidade.</p>
          <div className="reprioritization__cards">
            <article><p className="figma-kicker">01 / MUDANÇA DE CONTEXTO</p><h3>A viabilidade técnica mudou.</h3><p>Em vez de tratar a solução anterior como definitiva, considerei o novo cenário técnico como um sinal para reavaliar o recorte.</p></article>
            <article><p className="figma-kicker">02 / VOLTA ÀS EVIDÊNCIAS</p><h3>Repriorizei pelo problema, não pelo desenho.</h3><p>Voltei para Voz do Cliente, NSS e contatos para separar o que era essencial para reduzir surpresa e dúvida do que poderia esperar.</p></article>
            <article><p className="figma-kicker">03 / NOVO RECORTE</p><h3>O MVP ficou menor, mas mais defensável.</h3><p>Priorizamos os cenários de maior valor para o cliente e deixamos situações de maior complexidade para evoluções posteriores.</p></article>
          </div>
          <p className="reprioritization__label figma-kicker">RECORTE PRIORIZADO</p>
          <div className="reprioritization__split">
            <article><p className="figma-kicker">MVP</p><h3>Removido · Quantidade ajustada · Item adicionado</h3><p>Cenários necessários para explicar o que mudou e reduzir surpresa no recebimento.</p></article>
            <article><p className="figma-kicker">EVOLUÇÕES POSTERIORES</p><h3>Cenários de maior complexidade</h3><p>Ex.: alterações que exigiam novas regras ou dependências técnicas, como mudanças mais específicas no item.</p></article>
          </div>
          <p className="case-emphasis">A prioridade deixou de ser preservar a solução original. Passou a ser proteger o valor essencial da experiência dentro do novo contexto técnico.</p>
        </section>

        <section className="case-section information-structure">
          <p className="case-chapter">04 / Estrutura</p>
          <h2>Como transformei diferentes tipos de ruptura em informação compreensível.</h2>
          <div className="structure-stack">
            <div className="structure-step"><p className="figma-kicker">PRINCÍPIO</p><h3>A mudança precisava ser explicada no nível do item</h3><span aria-hidden="true">↓</span></div>
            <div className="structure-step"><p className="figma-kicker">MODELO</p><h3>Removido · Quantidade ajustada · Item adicionado · Cenário de incerteza</h3><span aria-hidden="true">↓</span></div>
            <div className="structure-detail"><p className="figma-kicker">NO ITEM</p><div><strong>Estado da alteração</strong><span>→</span><strong>Explicação objetiva</strong></div><p>Removido, ajustado ou adicionado aparecem junto ao item e deixam explícito o que aconteceu.</p></div>
            <div className="structure-detail"><p className="figma-kicker">NO PEDIDO</p><div><strong>Impacto financeiro</strong><span>→</span><strong>Total atualizado</strong></div><p>O cliente entende o efeito da mudança no valor final, no reembolso e no restante do pedido.</p></div>
          </div>
          <p className="case-emphasis">A ruptura deixava de ser um status genérico e passava a explicar o que mudou e o que ainda seria entregue.</p>
        </section>

        <section className="ruptura-solution">
          <div className="ruptura-solution__header">
            <p className="case-chapter">05 / Solução</p>
            <h2>A complexidade ficava por trás. Para o cliente, cada estado precisava fazer sentido.</h2>
            <p>Mostro abaixo não só as telas, mas a lógica por trás delas: por que cada mensagem aparece, por que determinado CTA ganha prioridade e como a experiência muda conforme o estado do pedido.</p>
          </div>

          <div className="ruptura-solution__modules">
            {solutionModules.map((module) => (
              <article className={"ruptura-module ruptura-module--" + module.layout} key={module.kicker}>
                <div className="ruptura-module__rule" />
                <div className="ruptura-module__copy">
                  <div className="ruptura-module__meta"><span>{module.number}</span><span>{module.kicker}</span></div>
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                </div>
                <div className="ruptura-module__visual">
                  <Image src={module.image} alt="" width={module.width} height={module.height} sizes="(max-width: 767px) 342px, 1040px" />
                </div>
              </article>
            ))}

            <article className="ruptura-module ruptura-module--multichannel">
              <div className="ruptura-module__rule" />
              <div className="ruptura-module__copy">
                <div className="ruptura-module__meta"><span>06</span><span>COMUNICAÇÕES MULTICANAL</span></div>
                <h3>Cada canal tem um papel diferente.</h3>
                <p>A mensagem é a mesma, mas a profundidade muda: alguns canais alertam, outros acompanham e outros registram o detalhe completo.</p>
              </div>
              <MultichannelCarousel />
            </article>
          </div>

          <p className="ruptura-solution__closing">O objetivo não era fazer o cliente conhecer todas as regras. Era garantir que, em qualquer estado, ele entendesse o que mudou, o que acontece agora e o impacto daquela alteração.</p>
        </section>

        <section className="case-section case-change">
          <p className="case-chapter">06 / Mudança</p>
          <h2>De uma mudança pouco visível para uma experiência que explica exatamente o que aconteceu.</h2>
          <BeforeAfter
            before={["Pedido em separação", "Item indisponível / alterado", "Pedido é ajustado", "Cliente recebe pouco contexto", "Descobre a mudança tarde", "Surpresa / contato no pós-compra"]}
            after={["Pedido em separação", "Produto sinaliza a alteração", "Cliente entende item por item", "Visualiza impacto financeiro", "Acompanha o restante do pedido"]}
          />
          <div className="case-closing-copy">
            <p>A mudança mais importante não foi criar mais uma mensagem.</p>
            <p>Foi estruturar uma linguagem de produto capaz de explicar a ruptura antes da entrega, no nível do item e com o mesmo raciocínio em diferentes canais.</p>
          </div>
        </section>

        <section className="case-section case-results rupture-results">
          <p className="case-chapter">07 / Resultados</p>
          <h2>O impacto apareceu na compreensão e na operação.</h2>
          <p className="results-intro">Depois da evolução da comunicação de ruptura, acompanhamos sinais de menor dependência do atendimento e maior busca pelo contexto correto dentro do produto.</p>
          <MetricRow metrics={metrics} />
          <p className="results-final rupture-results__final">Os sinais indicam que antecipar e contextualizar a alteração ajudou a reduzir a necessidade de contato e a surpresa no recebimento.</p>
        </section>

        <NextCase href="/reenvio" title="Reenvio de pedidos" description="Como transformei uma falha de entrega em uma jornada que o próprio cliente consegue se auto resolver sozinho." />
      </main>
      <GlobalFooter />
    </>
  );
}
