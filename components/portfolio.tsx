import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { PortfolioCarousel } from "@/components/carousel";
import { contact } from "@/lib/site";

export type Fact = { label: string; value: string };
export type Metric = { value: string; label: string; detail: string };

export function PortfolioHeader({ casePage = false }: { casePage?: boolean }) {
  return (
    <header className={casePage ? "figma-header figma-header--case" : "figma-header"}>
      <Link href="/" className="figma-brand" aria-label="Wan — início">
        <span className="desktop-only">WANDERSON SILVA</span>
        <span className="mobile-only">WAN</span>
      </Link>

      <nav className="figma-nav desktop-only" aria-label="Navegação principal">
        <Link href="/#projetos">Projetos</Link>
        <Link href="/#sobre">Sobre</Link>
        <Link href="/#contato">Contato</Link>
      </nav>

      <nav className="figma-nav-mobile mobile-only" aria-label="Navegação principal">
        {casePage ? (
          <Link href="/#projetos">Projetos</Link>
        ) : (
          <>
            <Link href="/#projetos">Projetos</Link>
            <span aria-hidden="true">·</span>
            <Link href="/#sobre">Sobre</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export function GlobalFooter() {
  return (
    <footer className="figma-footer">
      <div className="figma-footer__rule" />
      <div className="figma-footer__row">
        <div className="figma-footer__identity">
          <strong>Wanderson Silva (Wan)</strong>
          <span>Product Designer</span>
        </div>
        <div className="figma-footer__links">
          <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
          <a href={contact.email}>E-mail ↗</a>
        </div>
        <div className="figma-footer__meta">
          <span>São Paulo, Brasil</span>
          <span>2026</span>
        </div>
      </div>
    </footer>
  );
}

export function ProjectCard({
  href,
  desktopImage,
  mobileImage,
  meta,
  title,
  description,
  desktopTags,
  mobileTags,
}: {
  href: string;
  desktopImage: string;
  mobileImage: string;
  meta: string;
  title: string;
  description: string;
  desktopTags: string[];
  mobileTags: string[];
}) {
  return (
    <article className="home-project">
      <Link href={href} className="home-project__image" aria-label={"Ver case " + title}>
        <picture>
          <source media="(max-width: 767px)" srcSet={mobileImage} />
          <img src={desktopImage} alt="" width={720} height={720} loading="lazy" decoding="async" />
        </picture>
      </Link>

      <div className="home-project__copy">
        <p className="figma-kicker home-project__meta">{meta}</p>
        <h3>{title}</h3>
        <p className="home-project__description">{description}</p>

        <div className="home-project__tags desktop-only">
          {desktopTags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        <div className="home-project__mobile-tags mobile-only">
          {mobileTags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        <Link href={href} className="figma-brand-button">
          Ver case
        </Link>
      </div>
    </article>
  );
}

export function CaseHero({
  title,
  headline,
  paragraphs,
  tags,
  desktopImage,
  mobileImage,
}: {
  title: string;
  headline: string;
  paragraphs: string[];
  tags: string[];
  desktopImage: string;
  mobileImage: string;
}) {
  return (
    <section className="case-hero">
      <div className="case-hero__inner">
        <Link href="/#projetos" className="case-back">
          ← Voltar para projetos
        </Link>

        <div className="case-hero__composition">
          <Reveal className="case-hero__copy">
            <p className="case-legend">RD Saúde · Pós-compra · Tracking</p>
            <h1>{title}</h1>
            <p className="case-headline">{headline}</p>
            <div className="case-paragraphs">
              {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="case-tags">
              {tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </Reveal>

          <div className="case-hero__media">
            <picture>
              <source media="(max-width: 767px)" srcSet={mobileImage} />
              <img src={desktopImage} alt="" width={672} height={839} fetchPriority="high" decoding="async" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

function FactCard({ item }: { item: Fact }) {
  return (
    <article className="quick-fact">
      <p>{item.label}</p>
      <strong>{item.value}</strong>
    </article>
  );
}

export function QuickFacts({ items }: { items: Fact[] }) {
  return (
    <section className="quick-facts" aria-label="Visão rápida">
      <div className="quick-facts__desktop desktop-only">
        {items.map((item) => <FactCard item={item} key={item.label} />)}
      </div>

      <div className="quick-facts__mobile mobile-only">
        <p className="quick-facts__mobile-title">VISÃO RÁPIDA</p>
        <PortfolioCarousel label="Visão rápida" slideClassName="quick-facts__mobile-slide">
          {items.map((item) => <FactCard item={item} key={item.label} />)}
        </PortfolioCarousel>
      </div>
    </section>
  );
}

export function DecisionRows({
  rows,
}: {
  rows: { title: string; paragraphs: string[] }[];
}) {
  return (
    <div className="decision-rows">
      {rows.map((row) => (
        <Reveal className="decision-row" key={row.title}>
          <h3>{row.title}</h3>
          <div>{row.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </Reveal>
      ))}
    </div>
  );
}

function JourneyColumn({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="journey-column">
      <p className="figma-kicker">{label}</p>
      <div className="journey-column__items">
        {items.map((item, index) => (
          <div className="journey-state" key={item}>
            <span className={index === 2 || index === 3 || index === 4 ? "journey-state--emphasis" : ""}>{item}</span>
            {index < items.length - 1 ? <b aria-hidden="true">↓</b> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function BeforeAfter({ before, after }: { before: string[]; after: string[] }) {
  return (
    <>
      <div className="before-after desktop-only">
        <JourneyColumn label="ANTES" items={before} />
        <JourneyColumn label="DEPOIS" items={after} />
      </div>
      <div className="before-after-mobile mobile-only">
        <PortfolioCarousel label="Comparação antes e depois" slideClassName="before-after-mobile__slide">
          {[<JourneyColumn label="ANTES" items={before} key="before" />, <JourneyColumn label="DEPOIS" items={after} key="after" />]}
        </PortfolioCarousel>
      </div>
    </>
  );
}

export function MetricRow({ metrics, green = true }: { metrics: Metric[]; green?: boolean }) {
  return (
    <div className={green ? "metric-row metric-row--green" : "metric-row"}>
      {metrics.map((metric) => (
        <article className="metric-block" key={metric.label}>
          <strong>{metric.value}</strong>
          <h3>{metric.label}</h3>
          <p>{metric.detail}</p>
        </article>
      ))}
    </div>
  );
}

export function NextCase({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <section className="next-case">
      <div className="next-case__rule" />
      <p className="next-case__eyebrow">PRÓXIMO CASE</p>
      <div className="next-case__row">
        <div className="next-case__copy">
          <h2>{title}</h2>
          <p>{description}</p>
          <Link href={href} className="figma-brand-button">Ver case</Link>
        </div>
      </div>
      <div className="next-case__rule" />
    </section>
  );
}
