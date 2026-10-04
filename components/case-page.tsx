import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CaseData } from "@/lib/cases";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { HorizontalCarousel } from "@/components/horizontal-carousel";

export function CasePage({ data }: { data: CaseData }) {
  return (
    <>
      <SiteHeader compact />
      <main>
        <section className="case-hero">
          <div className="case-hero__back">
            <Link href="/#projetos"><ArrowLeft size={16} /> Voltar para projetos</Link>
          </div>
          <div className="case-hero__grid">
            <Reveal className="case-hero__copy">
              <p className="eyebrow">{data.context}</p>
              <h1>{data.title}</h1>
              <p className="case-hero__headline">{data.headline}</p>
              <div className="case-hero__body">
                {data.description.map((p) => <p key={p}>{p}</p>)}
              </div>
              <div className="tag-list">
                {data.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
              </div>
            </Reveal>
            <Reveal className="case-hero__visual" delay={0.08}>
              <Image src={data.cover} alt="" fill priority sizes="(max-width: 900px) 100vw, 55vw" />
            </Reveal>
          </div>
        </section>

        <section className="quick-facts">
          {data.quickFacts.map((fact) => (
            <article key={fact.label}>
              <p>{fact.label}</p>
              <strong>{fact.value}</strong>
            </article>
          ))}
        </section>

        {data.sections.map((section) => (
          <section className="case-section" key={section.eyebrow}>
            <Reveal className="case-section__heading">
              <p className="eyebrow">{section.eyebrow}</p>
              <h2>{section.title}</h2>
            </Reveal>
            {section.paragraphs?.length ? (
              <Reveal className="case-copy">
                {section.paragraphs.map((p) => <p key={p}>{p}</p>)}
              </Reveal>
            ) : null}
            {section.flow ? <Flow items={section.flow} /> : null}
            {section.decisions ? (
              <div className="decision-grid">
                {section.decisions.map((decision) => (
                  <Reveal className="decision" key={decision.kicker}>
                    <p className="decision__kicker">{decision.kicker}</p>
                    {decision.title ? <h3>{decision.title}</h3> : null}
                    {decision.body.map((p) => <p key={p}>{p}</p>)}
                  </Reveal>
                ))}
              </div>
            ) : null}
            {section.split ? (
              <div className="split-cards">
                {[section.split.left, section.split.right].map((item) => (
                  <Reveal className="split-card" key={item.label}>
                    <p className="eyebrow">{item.label}</p>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </Reveal>
                ))}
              </div>
            ) : null}
            {section.callout ? <Reveal className="editorial-note">{section.callout}</Reveal> : null}
          </section>
        ))}

        <section className="case-section case-solution">
          <Reveal className="case-section__heading">
            <p className="eyebrow">{data.solution.eyebrow}</p>
            <h2>{data.solution.title}</h2>
            <p>{data.solution.intro}</p>
          </Reveal>

          <HorizontalCarousel label={"Galeria do case " + data.title}>
            {[
              <GalleryImage key="cover" src={data.cover} />,
              <GalleryImage key="hero" src="/images/case-hero.webp" />,
              <GalleryImage key="solution" src="/images/case-solution.webp" />
            ]}
          </HorizontalCarousel>

          <div className="solution-modules">
            {data.solution.modules.map((module) => (
              <Reveal className="solution-module" key={module.index}>
                <div className="solution-module__number">{module.index}</div>
                <div>
                  <p className="decision__kicker">{module.kicker}</p>
                  <h3>{module.title}</h3>
                  <p>{module.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="case-section">
          <Reveal className="case-section__heading">
            <p className="eyebrow">{data.beforeAfter.eyebrow}</p>
            <h2>{data.beforeAfter.title}</h2>
          </Reveal>
          <div className="before-after">
            <Journey title="ANTES" items={data.beforeAfter.before} />
            <Journey title="DEPOIS" items={data.beforeAfter.after} />
          </div>
          <Reveal className="case-copy case-copy--closing">
            {data.beforeAfter.closing.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
        </section>

        <section className="case-section results-section">
          <Reveal className="case-section__heading">
            <p className="eyebrow">07 / Resultados</p>
            <h2>O impacto apareceu na experiência e na operação.</h2>
            <p>{data.resultsIntro}</p>
          </Reveal>
          <div className="metric-grid">
            {data.metrics.map((metric) => (
              <Reveal className="metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <h3>{metric.label}</h3>
                <p>{metric.detail}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="editorial-note editorial-note--large">{data.resultsClosing}</Reveal>
          {data.slug === "reenvio" ? (
            <p className="source-note">Fonte: Power BI + SAP Transportes + BI Torre de Controle + ServiceNow · Ativação do reenvio automático: 15/07</p>
          ) : null}
        </section>

        <section className="next-case">
          <p className="eyebrow">PRÓXIMO CASE</p>
          <Link href={data.next.href}>
            <span>{data.next.label}</span>
            <ArrowRight size={30} />
          </Link>
          <p>{data.next.description}</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function Flow({ items }: { items: string[] }) {
  return (
    <Reveal className="flow">
      {items.map((item, index) => (
        <div className="flow__item" key={item}>
          <span>{item}</span>
          {index < items.length - 1 ? <b>→</b> : null}
        </div>
      ))}
    </Reveal>
  );
}

function Journey({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal className="journey">
      <p className="eyebrow">{title}</p>
      {items.map((item, index) => (
        <div key={item + index}>
          <span>{item}</span>
          {index < items.length - 1 ? <b>↓</b> : null}
        </div>
      ))}
    </Reveal>
  );
}

function GalleryImage({ src }: { src: string }) {
  return (
    <div className="gallery-image">
      <Image src={src} alt="" fill sizes="(max-width: 900px) 82vw, 600px" />
    </div>
  );
}
