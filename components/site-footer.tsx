export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__rule" />
      <div className="site-footer__row">
        <div>
          <strong>Wanderson Silva (Wan)</strong>
          <span>Product Designer</span>
        </div>
        <div className="site-footer__links" aria-label="Redes sociais e contato">
          <a href="https://www.linkedin.com/in/wandersonsilvamiranda" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://wa.me/5511921748152" target="_blank" rel="noreferrer">WhatsApp ↗</a>
          <a href="mailto:fwsmiranda@gmail.com">E-mail ↗</a>
        </div>
        <div className="site-footer__meta">
          <span>São Paulo, Brasil</span>
          <span>2026</span>
        </div>
      </div>
    </footer>
  );
}
