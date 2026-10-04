"use client";

import { PortfolioCarousel } from "@/components/carousel";

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="product-phone">
      <div className="product-phone__status">
        <span>9:41</span>
        <span>● ● ●</span>
      </div>
      {children}
    </div>
  );
}

function OrderProducts() {
  return (
    <div className="product-box">
      <div className="product-box__row">
        <strong>Produtos</strong>
        <span>Exibir detalhes⌄</span>
      </div>
      <div className="product-thumbs">
        <span className="product-thumb product-thumb--purple">1x</span>
        <span className="product-thumb product-thumb--yellow">1x</span>
      </div>
      <small>Vendido e entregue por Drogasil</small>
    </div>
  );
}

function TrackingHeader() {
  return (
    <div className="product-phone__nav">
      <span>‹</span>
      <strong>Detalhes do pedido</strong>
      <span>Ajuda</span>
    </div>
  );
}

function ReenvioSlideOne() {
  return (
    <article className="journey-artifact">
      <p className="journey-artifact__number">01</p>
      <div className="recovery-home">
        <div className="recovery-home__push">
          <span className="mini-label">PUSH</span>
          <div className="os-notification">
            <strong>Problema na entrega</strong>
            <p>Seu pedido retornou para a farmácia. Mais detalhes no app ou site.</p>
            <span>há 34m</span>
          </div>
        </div>
        <div className="recovery-home__phone">
          <PhoneFrame>
            <div className="fake-search">Buscar na Drogasil</div>
            <div className="fake-home-card">
              <span className="status-dot status-dot--pink" />
              <div>
                <strong>Problema na entrega</strong>
                <p>Seu pedido retornou para a farmácia.</p>
              </div>
            </div>
            <div className="fake-home-grid">
              <span>Ofertas exclusivas</span><span>Meus pedidos</span>
              <span>Saúde</span><span>Mais vendidos</span>
            </div>
            <div className="fake-banner">Cuide do seu tratamento e pague do seu jeito</div>
          </PhoneFrame>
        </div>
        <div className="recovery-home__live">
          <span className="mini-label">LIVE IOS</span>
          <div className="live-activity live-activity--small">
            <div className="live-brand"><strong>DROGASIL</strong><span>Chega até 13:10</span></div>
            <div className="live-alert">Problema na entrega</div>
            <strong>Seu pedido retornou para a farmácia.</strong>
          </div>
        </div>
      </div>
      <h3>PROBLEMA NA ENTREGA</h3>
      <p>O produto comunica que o pedido retornou para a farmácia.</p>
    </article>
  );
}

function ReenvioSlideTwo() {
  return (
    <article className="journey-artifact">
      <p className="journey-artifact__number">02</p>
      <div className="journey-artifact__stage">
        <PhoneFrame>
          <TrackingHeader />
          <div className="tracking-alert">
            <strong>Não conseguimos entregar seu pedido</strong>
            <div className="tracking-state"><span className="status-dot status-dot--pink" />Pedido não entregue</div>
            <p>Confira seu endereço para uma nova tentativa de entrega.</p>
            <button>Conferir endereço</button>
          </div>
          <div className="product-box">
            <strong>Endereço de entrega</strong>
            <p><b>Roberto dos Santos Almeida</b><br />Rua Dr. Cardoso de Melo, 1524<br />Itaim Bibi - São Paulo, SP</p>
          </div>
          <OrderProducts />
          <div className="product-summary">
            <strong>Resumo de valores</strong><span>R$ 117,02</span>
          </div>
        </PhoneFrame>
      </div>
      <h3>PEDIDO NÃO ENTREGUE</h3>
      <p>Dentro do Tracking, o problema deixa de ser ambíguo e já apresenta uma próxima ação.</p>
    </article>
  );
}

function ReenvioSlideThree() {
  return (
    <article className="journey-artifact">
      <p className="journey-artifact__number">03</p>
      <div className="journey-artifact__stage">
        <PhoneFrame>
          <div className="product-phone__nav"><span>‹</span><strong>Endereço de entrega</strong><span /></div>
          <div className="address-check">
            <strong>Confira antes do reenvio</strong>
            <p>Este endereço será usado para a nova tentativa de entrega do seu pedido.</p>
          </div>
          <div className="address-card">
            <span>Endereço de entrega</span>
            <strong>Avenida Corifeu de Azevedo Marques, 3097</strong>
            <p>Vila Lageado, 05339-000<br />São Paulo - SP<br />Complemento...</p>
          </div>
          <div className="info-card">ⓘ Se preferir receber em outro endereço, você pode cancelar este pedido. O valor será estornado, e você pode fazer um novo.</div>
          <button className="phone-primary">Confirmar reenvio</button>
          <button className="phone-link">Cancelar pedido</button>
        </PhoneFrame>
      </div>
      <h3>CONFERIR ENDEREÇO E CONFIRMAR REENVIO</h3>
      <p>Antes de solicitar uma nova tentativa, o cliente confere o endereço de entrega e confirma o reenvio na mesma tela.</p>
    </article>
  );
}

function ReenvioSlideFour() {
  return (
    <article className="journey-artifact">
      <p className="journey-artifact__number">04</p>
      <div className="journey-artifact__stage">
        <PhoneFrame>
          <TrackingHeader />
          <div className="tracking-alert">
            <strong>Não conseguimos entregar seu pedido</strong>
            <div className="tracking-state"><span className="status-dot status-dot--pink" />Pedido não entregue</div>
            <p>O reenvio do pedido foi solicitado. Em breve, o status será atualizado.</p>
          </div>
          <div className="success-strip">✓ Endereço confirmado. Nova tentativa de entrega solicitada.</div>
          <div className="product-box">
            <strong>Endereço de entrega</strong>
            <p><b>Roberto dos Santos Almeida</b><br />Rua Dr. Cardoso de Melo, 1524<br />Itaim Bibi - São Paulo, SP</p>
          </div>
          <OrderProducts />
        </PhoneFrame>
      </div>
      <h3>REENVIO SOLICITADO</h3>
      <p>O produto confirma que a solicitação foi recebida e informa que o status será atualizado.</p>
    </article>
  );
}

export function ReenvioSolutionCarousel() {
  return (
    <PortfolioCarousel
      label="Sequência de telas da solução de reenvio"
      className="reenvio-native-carousel"
      slideClassName="reenvio-native-slide"
    >
      {[<ReenvioSlideOne key="1" />, <ReenvioSlideTwo key="2" />, <ReenvioSlideThree key="3" />, <ReenvioSlideFour key="4" />]}
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
          <b>−35,6%</b>
        </div>
        <div className="bar-row"><span>Antes</span><i style={{ width: "100%" }} /><strong>1.004</strong></div>
        <div className="bar-row"><span>Depois</span><i style={{ width: "64.3%" }} /><strong>646</strong></div>
      </article>
      <article className="results-bar-chart">
        <div className="results-bar-chart__heading">
          <div><strong>Todos os canais</strong><span>Média diária de reenvios</span></div>
          <b>−27,7%</b>
        </div>
        <div className="bar-row"><span>Antes</span><i style={{ width: "100%" }} /><strong>2.476</strong></div>
        <div className="bar-row"><span>Depois</span><i style={{ width: "72.3%" }} /><strong>1.789</strong></div>
      </article>
    </div>
  );
}
