"use client";

import type { CSSProperties } from "react";
import { PortfolioCarousel } from "@/components/carousel";

const reenvioSolutionSlides = [
  {
    title: "Problema na entrega",
    description: "O produto comunica que o pedido retornou para a farmácia.",
    desktop: { src: "/figma/reenvio-solution-figma-desktop-1.png", width: 348, height: 606 },
    mobile: { src: "/figma/reenvio-solution-cropped-mobile-1.png", width: 300, height: 477 },
  },
  {
    title: "Pedido não entregue",
    description: "Dentro do Tracking, o problema deixa de ser ambíguo e já apresenta uma próxima ação.",
    desktop: { src: "/figma/reenvio-solution-figma-desktop-2.png", width: 360, height: 606 },
    mobile: { src: "/figma/reenvio-solution-cropped-mobile-2.png", width: 382, height: 607 },
  },
  {
    title: "Conferir endereço e confirmar reenvio",
    description: "Antes de solicitar uma nova tentativa, o cliente confere o endereço de entrega e confirma o reenvio na mesma tela.",
    desktop: { src: "/figma/reenvio-solution-figma-desktop-3.png", width: 348, height: 607 },
    mobile: { src: "/figma/reenvio-solution-cropped-mobile-3.png", width: 382, height: 608 },
  },
  {
    title: "Reenvio solicitado",
    description: "O produto confirma que a solicitação foi recebida e informa que o status será atualizado.",
    desktop: { src: "/figma/reenvio-solution-figma-desktop-4.png", width: 348, height: 612 },
    mobile: { src: "/figma/reenvio-solution-figma-desktop-4.png", width: 348, height: 612 },
  },
] as const;

function ReenvioFigmaSlide({ slide }: { slide: typeof reenvioSolutionSlides[number] }) {
  return (
    <article
      className="reenvio-figma-artifact"
      aria-label={slide.title}
      style={{
        "--artifact-width": `${slide.desktop.width}px`,
        "--artifact-height": `${slide.desktop.height}px`,
        "--artifact-mobile-width": `${slide.mobile.width}px`,
        "--artifact-mobile-height": `${slide.mobile.height}px`,
      } as CSSProperties}
    >
      <div className="reenvio-figma-artifact__media">
        <picture>
          <source media="(max-width: 767px)" srcSet={slide.mobile.src} />
          <img
            src={slide.desktop.src}
            alt=""
            width={slide.desktop.width}
            height={slide.desktop.height}
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>
      <h3>{slide.title}</h3>
      <p>{slide.description}</p>
    </article>
  );
}

export function ReenvioSolutionCarousel() {
  return (
    <PortfolioCarousel
      label="Sequência de telas da solução de reenvio"
      className="reenvio-native-carousel"
      slideClassName="reenvio-native-slide"
      containScroll={false}
      mobileContainScroll="trimSnaps"
      showCounter={false}
    >
      {reenvioSolutionSlides.map((slide) => (
        <ReenvioFigmaSlide slide={slide} key={slide.title} />
      ))}
    </PortfolioCarousel>
  );
}

function PushPreview() {
  return (
    <div className="channel-preview channel-preview--push">
      <div className="push-card">
        <div className="push-logo">✦</div>
        <div className="push-copy">
          <div><strong>Seu pedido foi ajustado</strong><span>há 34m</span></div>
          <p>Seu pedido passou por ajustes na separação. O reembolso já foi realizado. Confira no app ou site.</p>
        </div>
      </div>
    </div>
  );
}

function LivePreview() {
  return (
    <div className="channel-preview">
      <div className="live-activity">
        <div className="live-brand"><strong>✦ DROGASIL</strong><span>Chega até 13:10</span></div>
        <div className="live-alert">ⓘ Seu pedido passou por alterações</div>
        <strong>A caminho</strong>
        <p>Seu pedido já está com quem vai<br />fazer a entrega.</p>
        <div className="live-progress"><i /><i /><i /></div>
        <small>Pedido nº 123456789012</small>
      </div>
    </div>
  );
}

function WhatsappPreview() {
  return (
    <div className="channel-preview">
      <div className="whatsapp-sheet">
        <div className="whatsapp-top"><span>←</span><strong>Drogasil</strong><span>⋮</span></div>
        <div className="whatsapp-bubble">
          <p>Olá, Jessica!</p>
          <p>Identificamos que 1 ou mais itens do pedido nº <b>1234523</b> foram ajustados.</p>
          <p><b>Produto(s) ajustado(s)</b><br />Fralda Pampers Confort Sec...<br />Fralda Pampers Confort Sec...<br /><b>E mais 3 produtos.</b></p>
          <p>O valor será <b>reembolsado automaticamente</b> e você receberá os demais itens do seu pedido.</p>
          <p><b>Sua compra</b><br />- Escova Dental Oral-B Indicador Bla...<br />- Buscopan Composto Butilbrometo...<br />E mais 3 produtos.</p>
          <p>📱 Você também pode consultar mais informações do seu pedido através do aplicativo.</p>
          <button>Acompanhar pedido</button>
        </div>
        <small>Esta é uma mensagem automática. Por favor, não responda.</small>
      </div>
    </div>
  );
}

function EmailPreview() {
  return (
    <div className="channel-preview">
      <div className="email-sheet">
        <div className="email-brand">✦ DROGASIL</div>
        <h4>Alguns itens do seu pedido foram alterados</h4>
        <p>Olá, identificamos que alguns itens do pedido nº 12345678901 foram alterados.</p>
        <div className="email-table">
          <div className="email-row email-row--head"><span>Item</span><span>Qtd.</span><span>Valor</span></div>
          <div className="email-row"><span><b className="email-tag email-tag--red">Removido</b>NIVEA BODY BYE BYE</span><span>0</span><span>R$ 0,00</span></div>
          <div className="email-row"><span><b className="email-tag email-tag--yellow">Ajustado</b>DORFLEX 1X10CP</span><span>1</span><span>R$ 35,40</span></div>
          <div className="email-row"><span><b className="email-tag email-tag--green">Adicionado</b>AUTOTESTE COVID-19</span><span>2</span><span>R$ 58,80</span></div>
        </div>
        <div className="email-summary">
          <strong>Atualizamos o valor do pedido</strong>
          <p>Subtotal dos produtos <span>R$ 123,40</span></p>
          <p>Alterações de itens <span>- R$ 35,40</span></p>
          <p><b>Total atualizado</b><span><b>R$ 88,00</b></span></p>
        </div>
        <button>Acompanhar pedido</button>
      </div>
    </div>
  );
}

const channels = [
  {
    name: "PUSH",
    reason: "Alerta rápido e leva o cliente para o detalhe do pedido.",
    preview: <PushPreview key="push" />,
  },
  {
    name: "LIVE ACTIVITIES",
    reason: "Mantém a alteração visível durante o acompanhamento sem interromper a jornada.",
    preview: <LivePreview key="live" />,
  },
  {
    name: "WHATSAPP",
    reason: "Resume os itens alterados e direciona para o app quando o contexto precisa de mais detalhe.",
    preview: <WhatsappPreview key="whatsapp" />,
  },
  {
    name: "E-MAIL",
    reason: "Suporta conteúdo mais completo: itens, valores e registro da alteração em uma única comunicação.",
    preview: <EmailPreview key="email" />,
  },
];

export function MultichannelCarousel() {
  return (
    <PortfolioCarousel
      label="Comunicações multicanal"
      className="multichannel-carousel"
      slideClassName="multichannel-slide"
    >
      {channels.map((channel) => (
        <article className="channel-card" key={channel.name}>
          <p className="channel-card__name">{channel.name}</p>
          <div className="channel-card__layout">
            {channel.preview}
            <div className="channel-reason">
              <span>POR QUE ESTE CANAL?</span>
              <p>{channel.reason}</p>
            </div>
          </div>
        </article>
      ))}
    </PortfolioCarousel>
  );
}

export function ResultsBars() {
  return (
    <div className="results-bars">
      <article className="results-bar-chart">
        <div className="results-bar-chart__heading">
          <div><strong>SAC</strong><span>Média diária de reenvios</span></div>
          <b>−37,1%</b>
        </div>
        <div className="bar-row"><span>Antes</span><i style={{ width: "100%" }} /><strong>≈1.020</strong></div>
        <div className="bar-row"><span>Depois</span><i style={{ width: "62.9%" }} /><strong>≈641</strong></div>
      </article>
      <article className="results-bar-chart">
        <div className="results-bar-chart__heading">
          <div><strong>Todos os canais</strong><span>Média diária de reenvios</span></div>
          <b>−29,1%</b>
        </div>
        <div className="bar-row"><span>Antes</span><i style={{ width: "100%" }} /><strong>≈2.500</strong></div>
        <div className="bar-row"><span>Depois</span><i style={{ width: "70.9%" }} /><strong>≈1.773</strong></div>
      </article>
    </div>
  );
}


function ArtifactNote({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="artifact-note">
      <span>{title}</span>
      <p>{children}</p>
    </div>
  );
}

function RuptureNotice({ label, copy }: { label: string; copy: string }) {
  return (
    <div className="rupture-notice-wrap">
      <span className="artifact-label">{label}</span>
      <div className="rupture-notice">
        <div className="rupture-notice__icon">🛍️</div>
        <div>
          <strong>Alterações no pedido</strong>
          <p>{copy}</p>
        </div>
        <button>Ver alterações</button>
      </div>
    </div>
  );
}

function MiniTrackingDetail() {
  return (
    <div className="mini-tracking">
      <div className="mini-tracking__top"><span>9:41</span><small>Detalhes do pedido</small><small>Ajuda</small></div>
      <div className="mini-tracking__notice">
        <span>🛍️</span>
        <div><strong>Alterações no pedido</strong><p>1 ou mais itens foram removidos.</p></div>
      </div>
      <div className="mini-tracking__ghost" />
      <div className="mini-tracking__ghost mini-tracking__ghost--small" />
      <div className="mini-tracking__products">
        <span /><span /><span />
      </div>
      <div className="mini-tracking__ghost" />
    </div>
  );
}

export function RupturaEntryArtifact() {
  const notices = [
    ["Item removido", "1 ou mais itens foram removidos."],
    ["Quantidade ajustada", "1 ou mais itens tiveram ajuste na quantidade."],
    ["Cenário de incerteza", "1 ou mais itens podem ter sido removidos, adicionados ou ajustados."],
  ] as const;

  return (
    <div className="ruptura-native ruptura-entry-native">
      <div className="desktop-only rupture-entry-native__desktop">
        <div>
          <span className="artifact-label">DETALHE DO PEDIDO</span>
          <MiniTrackingDetail />
        </div>
        <div className="rupture-entry-native__variants">
          <span className="artifact-label">VARIAÇÕES DE AVISO</span>
          {notices.map(([label, copy]) => <RuptureNotice key={label} label={label} copy={copy} />)}
        </div>
        <div className="rupture-entry-native__notes">
          <ArtifactNote title="POR QUE NO TOPO?">O cliente entende primeiro que o pedido mudou; depois lê produtos, valores e pagamento já com esse contexto.</ArtifactNote>
          <ArtifactNote title="POR QUE A COPY MUDA?">Quando sabemos o evento, dizemos exatamente o que ocorreu. A mensagem genérica fica para combinações de alterações.</ArtifactNote>
          <ArtifactNote title="POR QUE “VER ALTERAÇÕES”?">O tracking continua enxuto e o detalhe fica disponível sob demanda, sem transformar o status em uma tela de exceções.</ArtifactNote>
        </div>
      </div>
      <div className="mobile-only">
        <PortfolioCarousel label="Variações do aviso de ruptura" slideClassName="ruptura-entry-native__mobile-slide">
          {notices.map(([label, copy]) => <RuptureNotice key={label} label={label} copy={copy} />)}
        </PortfolioCarousel>
        <ArtifactNote title="POR QUE NO TOPO?">O cliente entende primeiro que o pedido mudou; depois lê produtos, valores e pagamento já com esse contexto.</ArtifactNote>
      </div>
    </div>
  );
}

type ProductLine = { name: string; meta: string; price: string; changed?: "removed" | "adjusted" | "added" };

function ProductRow({ product }: { product: ProductLine }) {
  return (
    <div className={"native-product-row " + (product.changed ? "native-product-row--" + product.changed : "")}>
      <div className="native-product-row__thumb">▥</div>
      <div className="native-product-row__copy">
        <strong>{product.name}</strong>
        <span>{product.meta}</span>
        <b>{product.price}</b>
      </div>
      <div className="native-product-row__plus">+</div>
    </div>
  );
}

function ProductsScenario({
  label,
  message,
  products,
  noteTitle,
  note,
}: {
  label: string;
  message: string;
  products: ProductLine[];
  noteTitle: string;
  note: string;
}) {
  return (
    <article className="products-scenario">
      <span className="artifact-label">{label}</span>
      <div className="native-product-card">
        <div className="native-product-card__head"><strong>Produtos</strong><span>⚠︎ &nbsp; <u>Ocultar detalhes</u>⌃</span></div>
        <ProductRow product={{ name: "Limpador enzimático em pó Papaína + argila branca", meta: "1 unidade · 150 mg", price: "R$ 123,40" }} />
        <ProductRow product={{ name: "Dorflex Analgésico e Relaxante Muscular 50 comprimidos", meta: "2 unidades · 500 mg", price: "R$ 52,40" }} />
        <div className="native-product-card__change">
          <strong>⚠︎ Alterações no pedido</strong>
          <p>{message}</p>
        </div>
        {products.map((product) => <ProductRow product={product} key={product.name + product.meta} />)}
      </div>
      <ArtifactNote title={noteTitle}>{note}</ArtifactNote>
    </article>
  );
}

const itemScenarios = [
  {
    label: "REMOVIDO",
    message: "1 ou mais itens foram removidos.",
    products: [
      { name: "Amoxicilina 500mg 15 cápsulas EMS Genérico", meta: "1 unidade · 850 mg", price: "R$ 123,40", changed: "removed" as const },
      { name: "Amoxicilina 500mg 15 cápsulas EMS Genérico", meta: "1 unidade · 850 mg", price: "R$ 123,40", changed: "removed" as const },
    ],
    noteTitle: "POR QUE POR ITEM?",
    note: "Causa e consequência ficam juntas: o cliente vê o produto e imediatamente entende se ele foi removido, ajustado ou adicionado.",
  },
  {
    label: "QUANTIDADE AJUSTADA",
    message: "1 ou mais itens tiveram ajuste na quantidade.",
    products: [
      { name: "Dorflex Analgésico e Relaxante Muscular 50 comprimidos", meta: "2 unidades → 1 unidade · 500 mg", price: "R$ 52,40", changed: "adjusted" as const },
      { name: "Paracetamol 750mg 20 comprimidos Prati Donaduzzi", meta: "2 unidades → 1 unidade · 500 mg", price: "R$ 52,40", changed: "adjusted" as const },
    ],
    noteTitle: "POR QUE LIMITAR E ORDENAR?",
    note: "A ordem mantém consistência e evita ruído: itens confirmados preservam a referência do pedido e as alterações aparecem em sequência previsível.",
  },
  {
    label: "CENÁRIO COMBINADO",
    message: "1 ou mais itens podem ter sido removidos, adicionados ou ajustados.",
    products: [
      { name: "Di-Magnésio Malato 500mg bwell 60 Cápsulas", meta: "2 unidades · 500 mg", price: "R$ 52,40", changed: "added" as const },
      { name: "Dorflex Analgésico e Relaxante Muscular 50 comprimidos", meta: "2 unidades → 1 unidade · 500 mg", price: "R$ 52,40", changed: "adjusted" as const },
      { name: "Paracetamol 750mg 20 comprimidos Prati Donaduzzi", meta: "2 unidades → 1 unidade · 500 mg", price: "R$ 52,40", changed: "adjusted" as const },
    ],
    noteTitle: "POR QUE UM CENÁRIO DE INCERTEZA?",
    note: "A certeza é que o pedido mudou. A incerteza está em quais tipos de alteração aconteceram juntos. Por isso, usamos uma mensagem mais abrangente e deixamos o detalhamento para a lista de produtos.",
  },
];

export function RupturaItemsArtifact() {
  return (
    <div className="ruptura-native">
      <div className="desktop-only products-scenarios-grid">
        {itemScenarios.map((scenario) => <ProductsScenario {...scenario} key={scenario.label} />)}
      </div>
      <div className="mobile-only">
        <PortfolioCarousel label="Estados de itens em ruptura" slideClassName="products-scenario-mobile">
          {itemScenarios.map((scenario) => <ProductsScenario {...scenario} key={scenario.label} />)}
        </PortfolioCarousel>
      </div>
    </div>
  );
}

function TimelineCard({
  title,
  status,
  refund,
  cta,
  primary,
}: {
  title: string;
  status: string;
  refund: boolean;
  cta: string;
  primary?: boolean;
}) {
  return (
    <div className="timeline-native-card">
      <div className="timeline-native-card__title">{title}</div>
      <div className="timeline-native-card__body">
        <strong><span>✓</span>{status}</strong>
        <p>Com ajuste de 1 ou mais produtos.{refund ? <><br />O reembolso já foi realizado.</> : null}</p>
        <button className={primary ? "timeline-native-card__button timeline-native-card__button--primary" : "timeline-native-card__button"}>{cta}</button>
      </div>
    </div>
  );
}

const timelineGroups = [
  {
    label: "DELIVERY · PRIMEIROS 7 DIAS",
    title: "Já entregamos seu pedido",
    status: "Pedido entregue",
    cta: "Rastrear pedido",
    primary: true,
    note: "Rastrear pedido é a tarefa principal enquanto a jornada ainda está ativa. A ruptura aparece como contexto, sem competir com o acompanhamento.",
  },
  {
    label: "DELIVERY · APÓS 7 DIAS",
    title: "Já entregamos seu pedido",
    status: "Pedido entregue",
    cta: "Ver alterações",
    note: "Depois da janela de rastreio, “Ver alterações” passa a ser mais útil do que manter um CTA de acompanhamento já encerrado.",
  },
  {
    label: "COMPRE & RETIRE",
    title: "Seu pedido já foi retirado na farmácia",
    status: "Pedido retirado",
    cta: "Ver alterações",
    note: "Não existe rastreio de entrega. Após a retirada, a ação relevante é revisitar as alterações que aconteceram no pedido.",
  },
];

function TimelineGroup({ group }: { group: typeof timelineGroups[number] }) {
  return (
    <article className="timeline-group">
      <span className="artifact-label">{group.label}</span>
      <span className="timeline-group__state">Com reembolso</span>
      <TimelineCard title={group.title} status={group.status} refund cta={group.cta} primary={group.primary} />
      <span className="timeline-group__state">Sem reembolso</span>
      <TimelineCard title={group.title} status={group.status} refund={false} cta={group.cta} primary={group.primary} />
      <ArtifactNote title="POR QUE ESSE CTA?">{group.note}</ArtifactNote>
    </article>
  );
}

export function RupturaTimelinesArtifact() {
  return (
    <div className="ruptura-native">
      <div className="desktop-only timelines-grid">
        {timelineGroups.map((group) => <TimelineGroup group={group} key={group.label} />)}
      </div>
      <div className="mobile-only">
        <PortfolioCarousel label="Timelines por momento da jornada" slideClassName="timeline-group-mobile">
          {timelineGroups.map((group) => <TimelineGroup group={group} key={group.label} />)}
        </PortfolioCarousel>
      </div>
    </div>
  );
}

export function RupturaValuesArtifact() {
  return (
    <div className="ruptura-native values-native">
      <div className="values-native__content">
        <span className="artifact-label">RESUMO DE VALORES</span>
        <div className="value-card-head"><strong>Resumo de valores</strong><u>Ver nota fiscal</u></div>
        <div className="value-card">
          <div><span>Subtotal dos produtos</span><b>R$ 123,40</b></div>
          <div><span>Alterações de itens &nbsp; ?</span><b className="value-negative">- R$ 35,40</b></div>
          <div><span>Frete</span><b>R$ 5,90</b></div>
          <div className="value-card__total"><strong>Total ajustado</strong><strong>R$ 93,90</strong></div>
        </div>
        <span className="artifact-label values-native__tooltip-label">TOOLTIP EXPLICATIVO</span>
        <div className="value-tooltip">
          <strong>Alterações de itens</strong><span>×</span>
          <p>Esse valor é referente ao ajuste dos itens. O reembolso já foi realizado.</p>
        </div>
      </div>
      <div className="values-native__notes">
        <ArtifactNote title="POR QUE A LINHA “ALTERAÇÕES DE ITENS”?">Ela só ganha destaque quando a mudança afeta o valor final e precisa ser compreendida como ajuste decorrente da ruptura.</ArtifactNote>
        <ArtifactNote title="POR QUE UM TOOLTIP?">Responde “de onde veio esse valor?” sem deixar o resumo pesado. A explicação aparece apenas quando o cliente demonstra dúvida.</ArtifactNote>
        <ArtifactNote title="POR QUE MOSTRAR O TOTAL AJUSTADO?">Fecha a conta entre o pedido original e o que de fato será cobrado ou devolvido, reduzindo dúvida sobre cobrança.</ArtifactNote>
      </div>
    </div>
  );
}

function PaymentCard({ brand, origin }: { brand: string; origin: string }) {
  return (
    <div className="payment-native-card">
      <strong>Detalhes de pagamento</strong>
      <div className="payment-native-card__brand"><span>▧</span><b>{brand}</b></div>
      <p>Os valores alterados foram <strong>reembolsados automaticamente</strong> na conta {origin}.</p>
    </div>
  );
}

export function RupturaComplexityArtifact() {
  const paymentSlides = [
    <PaymentCard brand="Apple Pay" origin="do cartão de crédito" key="apple" />,
    <PaymentCard brand="Pix" origin="de origem do PIX" key="pix" />,
    <PaymentCard brand="Nubank" origin="do cartão de crédito" key="nubank" />,
  ];

  return (
    <div className="ruptura-native complexity-native">
      <div className="mixed-order-native">
        <span className="artifact-label">PEDIDO MISTO</span>
        <div className="mixed-order-phone">
          <div className="mixed-order-phone__top">Meus pedidos</div>
          <div className="mixed-order-box">
            <strong>Pedido feito em 09/08/2025</strong>
            <div className="mixed-order-info">ⓘ Pedido dividido em <b>1 entrega</b> e <b>1 retirada</b></div>
            <div className="mixed-order-part">
              <span>Entrega 1 de 2</span><strong>A caminho</strong><small>Total parcial R$ 79,00</small>
              <div className="mixed-products"><i /><i /></div>
            </div>
            <div className="mixed-order-part">
              <span>Entrega 2 de 2</span><strong>Pronto para a retirada</strong><small>Total parcial R$ 79,00</small>
              <div className="mixed-alert">⚠ Seu pedido passou por alterações</div>
              <div className="mixed-products"><i /><i /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="complexity-payments">
        <span className="artifact-label">Formas de pagamento</span>
        <div className="desktop-only complexity-payments__stack">{paymentSlides}</div>
        <div className="mobile-only">
          <PortfolioCarousel label="Formas de pagamento" slideClassName="payment-slide">{paymentSlides}</PortfolioCarousel>
        </div>
      </div>

      <div className="complexity-native__notes">
        <ArtifactNote title="POR QUE SINALIZAR A ENTREGA AFETADA?">Em pedido misto, uma entrega pode ter ruptura e a outra não. Marcar o pedido inteiro criaria uma interpretação errada.</ArtifactNote>
        <ArtifactNote title="POR QUE A COPY DE PAGAMENTO MUDA?">O valor retorna para uma origem diferente em PIX, cartão, pontos ou combinações. A comunicação precisa refletir o caminho real do dinheiro.</ArtifactNote>
        <ArtifactNote title="POR QUE MOSTRAR ISSO NO DETALHE?">O cliente encontra a explicação no mesmo lugar em que confere o pedido, sem precisar recorrer ao atendimento para entender o estorno.</ArtifactNote>
      </div>
    </div>
  );
}
