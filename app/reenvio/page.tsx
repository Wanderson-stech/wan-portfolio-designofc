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
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Reenvio automático de pedidos",
  description: "Transformando uma falha de entrega em uma jornada que o próprio cliente consegue resolver.",
};

const facts = [
  { label: "MEU PAPEL", value: "Product Designer" },
  { label: "ONDE ENTREI", value: "Na evolução da jornada de pós-compra, estruturando a experiência de reenvio dentro do Tracking." },
  { label: "DESAFIO", value: "Reduzir a dependência do atendimento para recuperar uma entrega que falhou." },
  { label: "MINHA ATUAÇÃO", value: "Entendimento do problema · Análise da jornada e dados · Definição de regras e estados · Decisões de produto e MVP · UX/UI · Alinhamento técnico e operacional" },
];

const metrics = [
  { value: "-35,6%", label: "SAC", detail: "1.004 → 646 casos/dia" },
  { value: "-27,7%", label: "Todos os canais", detail: "2.476 → 1.789 casos/dia" },
  { value: "-6,5%", label: "Pedidos captados", detail: "81.423 → 76.119 pedidos/dia" },
];

export default function ReenvioPage() {
  return (
    <>
      <PortfolioHeader casePage />

      <main className="case-page case-page--reenvio">
        <CaseHero
          title="Reenvio automático de pedidos"
          headline="Transformando uma falha de entrega em uma jornada que o próprio cliente consegue resolver."
          paragraphs={[
            "Quando um pedido não era entregue e retornava para a farmácia, o cliente ainda dependia de atendimento e da operação para conseguir uma nova tentativa.",
            "Meu desafio foi transformar parte dessa recuperação em uma experiência de autoatendimento dentro do próprio produto.",
          ]}
          tags={["Product Design", "Pós-compra", "Squad - Tracking", "Autoatendimento", "App + Web"]}
          desktopImage="/figma/reenvio-hero-desktop.png"
          mobileImage="/figma/reenvio-hero-mobile.png"
        />

        <QuickFacts items={facts} />

        <section className="case-section case-context">
          <p className="case-chapter">01 / Contexto</p>
          <div className="case-context__intro">
            <h2>O problema já existia na operação. Meu trabalho foi transformar isso em uma experiência de produto.</h2>
            <div className="case-body-copy">
              <p>Entrei no projeto dentro da jornada de Tracking.</p>
              <p>Quando a entrega falhava e o pedido retornava para a farmácia, a recuperação ainda dependia de atendimento e da operação.</p>
              <p>Meu papel foi entender esse processo, mapear seus estados e transformar uma recuperação assistida em uma jornada que o próprio cliente pudesse iniciar.</p>
            </div>
          </div>

          <div className="context-flow">
            {["Entrega falha", "Pedido retorna", "Cliente procura ajuda", "Atendimento / operação", "Nova tentativa"].map((item, index, all) => (
              <div className="context-flow__step" key={item}>
                <span>{item}</span>
                {index < all.length - 1 ? <b aria-hidden="true">→</b> : null}
              </div>
            ))}
          </div>

          <p className="case-big-statement">O problema não era só avisar que a entrega falhou. O cliente continuava sem conseguir fazer nada a respeito.</p>
        </section>

        <section className="case-section case-thinking">
          <p className="case-chapter">02 / Pensamento</p>
          <h2>Três decisões guiaram a solução.</h2>

          <DecisionRows
            rows={[
              {
                title: "DECISÃO 01 / COMUNICAÇÃO NÃO ERA SUFICIENTE",
                paragraphs: [
                  "Explicar melhor o que aconteceu ainda deixaria o cliente dependente de atendimento.",
                  "A experiência precisava terminar em uma ação, não apenas em uma mensagem.",
                ],
              },
              {
                title: "DECISÃO 02 / A PRÓXIMA AÇÃO PRECISAVA SER ÓBVIA",
                paragraphs: [
                  "Se havia possibilidade de uma nova tentativa, o cliente precisava entender imediatamente o que fazer.",
                  "Por isso, o estado ‘Pedido não entregue’ já direciona para a conferência do endereço.",
                ],
              },
              {
                title: "DECISÃO 03 / O MVP PRECISAVA SER VIÁVEL",
                paragraphs: [
                  "Eu precisava equilibrar a experiência ideal com o que era tecnicamente viável naquele momento.",
                  "Essa decisão definiu o recorte do MVP e a evolução da solução.",
                ],
              },
            ]}
          />

          <p className="case-emphasis">A experiência ideal continuava como direção. O MVP precisava colocar valor no ar sem ignorar as restrições do produto.</p>
        </section>

        <section className="case-section case-mvp">
          <p className="case-chapter">03 / MVP</p>
          <h2>Como destravei a entrega mesmo com uma dependência externa.</h2>

          <div className="mvp-stack">
            <div className="mvp-step">
              <p className="figma-kicker">DEPENDÊNCIA</p>
              <h3>API de edição de endereço criada por outro time</h3>
              <span aria-hidden="true">↓</span>
            </div>

            <div className="mvp-step">
              <p className="figma-kicker">DECISÃO</p>
              <h3>Não bloquear toda a iniciativa</h3>
              <span aria-hidden="true">↓</span>
            </div>

            <div className="mvp-version">
              <p className="figma-kicker">V1</p>
              <div className="mvp-version__flow">
                <strong>Visualizar endereço atual</strong>
                <span>→</span>
                <strong>Confirmar reenvio</strong>
              </div>
              <p>Cliente visualiza o endereço atual e confirma o reenvio.</p>
            </div>

            <div className="mvp-version">
              <p className="figma-kicker">V2</p>
              <div className="mvp-version__flow">
                <strong>Editar endereço</strong>
                <span>→</span>
                <strong>Confirmar reenvio</strong>
              </div>
              <p>Cliente pode editar o endereço antes de confirmar o reenvio.</p>
            </div>
          </div>

          <p className="case-emphasis">A V1 não precisava resolver todos os cenários. Precisava resolver bem o cenário que já conseguíamos viabilizar.</p>
        </section>

        <section className="case-section reenvio-solution">
          <p className="case-chapter">04 / Solução</p>
          <h2>A solução em poucos passos.</h2>

          <div className="desktop-only reenvio-solution__desktop-rail" aria-label="Sequência de telas reais">
            {[
              ["/figma/reenvio-solution-desktop-1.png", "01", 382, 760],
              ["/figma/reenvio-solution-desktop-2.png", "02", 382, 796],
              ["/figma/reenvio-solution-desktop-3.png", "03", 382, 793],
              ["/figma/reenvio-solution-desktop-4.png", "04", 382, 792],
            ].map(([src, index, width, height]) => (
              <figure className="reenvio-screen" key={src as string}>
                <figcaption>{index}</figcaption>
                <Image src={src as string} alt="" width={width as number} height={height as number} sizes="382px" />
              </figure>
            ))}
          </div>

          <div className="mobile-only reenvio-solution__mobile">
            <p>Deslize para ver a sequência →</p>
            <div className="reenvio-solution__mobile-rail">
              {[
                ["/figma/reenvio-solution-mobile-1.png", 300, 597],
                ["/figma/reenvio-solution-mobile-2.png", 300, 625],
                ["/figma/reenvio-solution-mobile-3.png", 300, 623],
                ["/figma/reenvio-solution-mobile-4.png", 300, 622],
              ].map(([src, width, height]) => (
                <Image key={src as string} src={src as string} alt="" width={width as number} height={height as number} sizes="300px" />
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-change">
          <p className="case-chapter">05 / Mudança</p>
          <h2>De uma recuperação assistida para uma jornada de autoatendimento.</h2>

          <BeforeAfter
            before={["Entrega falha", "Pedido retorna", "Cliente procura ajuda", "Atendimento", "Operação", "Pedido era cancelado ou era solicitada uma nova tentativa"]}
            after={["Entrega falha", "Produto comunica o problema", "Cliente confere o endereço", "Solicita o reenvio", "Acompanha novamente o pedido"]}
          />

          <div className="case-closing-copy">
            <p>A mudança mais importante não foi uma nova tela.</p>
            <p>Foi levar para dentro do produto uma ação que antes dependia de outros canais e transformar uma falha logística em uma jornada com próximo passo claro.</p>
          </div>
        </section>

        <section className="case-section case-results reenvio-results">
          <p className="case-chapter">06 / Resultados</p>
          <h2>O impacto apareceu também na operação.</h2>
          <p className="results-intro">Após a ativação do reenvio automático em app e site, o volume médio diário de solicitações de reenvio caiu tanto no SAC quanto no total dos canais.</p>

          <MetricRow metrics={metrics} />

          <div className="results-graphs desktop-only">
            <Image src="/figma/reenvio-graph-sac.png" alt="" width={616} height={430} sizes="616px" />
            <Image src="/figma/reenvio-graph-all-channels.png" alt="" width={616} height={430} sizes="616px" />
          </div>

          <div className="results-graphs-mobile mobile-only">
            <Image src="/figma/reenvio-graph-sac-mobile.png" alt="" width={342} height={239} sizes="342px" />
            <Image src="/figma/reenvio-graph-all-channels-mobile.png" alt="" width={342} height={239} sizes="342px" />
          </div>

          <p className="results-reading">Mesmo com 6,5% menos pedidos captados no período, a redução dos reenvios foi proporcionalmente maior — 35,6% no SAC e 27,7% considerando todos os canais.</p>
          <p className="results-source">Fonte: Power BI + SAP Transportes + BI Torre de Controle + ServiceNow · Ativação do reenvio automático: 15/07</p>
          <div className="results-final-rule" />
          <p className="results-final">Saímos de uma experiência que explicava o problema para uma experiência que ajudava o cliente a resolvê-lo.</p>
        </section>

        <NextCase
          href="/ruptura"
          title="Ruptura Parcial →"
          description="Como tornamos alterações no pedido mais transparentes durante a separação."
          signature="Wanderson silva"
        />
      </main>

      <GlobalFooter />
    </>
  );
}
