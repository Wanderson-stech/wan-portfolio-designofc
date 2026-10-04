import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="home-hero">
          <Reveal>
            <p className="eyebrow">Product Designer</p>
            <h1>Produto, experiência e operação precisam funcionar juntos.</h1>
            <p className="home-hero__intro">
              Trabalho transformando jornadas complexas em experiências que façam sentido para o cliente e para o negócio.
            </p>
            <div className="home-hero__meta">
              <span>São Paulo, Brasil</span>
              <span>Disponível para novas oportunidades</span>
            </div>
          </Reveal>
        </section>

        <section className="home-section home-projects" id="projetos">
          <Reveal className="home-section__intro">
            <p className="eyebrow">PROJETOS SELECIONADOS</p>
            <h2>Dois cases. Problemas diferentes. A mesma preocupação com clareza e decisão.</h2>
            <p>Cases completos de Product Design em pós-compra, tracking e autoatendimento.</p>
          </Reveal>

          <div className="project-list">
            <ProjectCard
              href="/ruptura"
              index="01"
              title="Ruptura Parcial"
              description="Tornando visíveis as mudanças de um pedido antes que elas se transformassem em surpresa na entrega."
              image="/images/ruptura-cover.webp"
              tags={["Discovery", "Arquitetura", "Repriorização", "Multicanal"]}
            />
            <ProjectCard
              href="/reenvio"
              index="02"
              title="Reenvio automático de pedidos"
              description="Transformando uma falha de entrega em uma jornada que o próprio cliente consegue resolver."
              image="/images/reenvio-cover.webp"
              tags={["Autoatendimento", "MVP", "Tracking", "Impacto operacional"]}
            />
          </div>
        </section>

        <section className="home-section thinking-section">
          <Reveal className="home-section__intro">
            <p className="eyebrow">COMO EU PENSO</p>
            <h2>Não começo pela tela.</h2>
            <p>Procuro entender o problema, as regras, os impactos e as restrições antes de decidir como a interface deve se comportar.</p>
          </Reveal>
          <div className="principles">
            {[
              ["01", "Problema antes da solução", "Voltar para a evidência é mais importante do que defender um desenho antigo."],
              ["02", "Complexidade fica por trás", "O produto pode ser complexo sem obrigar o cliente a aprender as regras internas."],
              ["03", "Impacto fecha a história", "Depois do lançamento, olho para comportamento, operação e percepção do cliente."]
            ].map(([n, title, body]) => (
              <Reveal key={n} className="principle">
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="home-section about-section" id="sobre">
          <Reveal className="about-section__content">
            <p className="eyebrow">SOBRE</p>
            <h2>Wan, Product Designer.</h2>
            <p>
              Atuo em produto digital com foco em pós-compra, tracking e experiências de autoatendimento.
              Meu trabalho passa por discovery, arquitetura de informação, UX/UI, UX Writing e decisões de MVP em parceria com Produto e Tecnologia.
            </p>
            <p>
              Gosto especialmente de problemas em que a interface precisa traduzir regras operacionais complexas em uma experiência simples e previsível.
            </p>
          </Reveal>
          <Reveal className="about-signature">
            <Image src="/images/profile.webp" alt="" fill sizes="(max-width: 900px) 100vw, 34vw" />
            <div className="about-signature__label">
              <strong>WAN</strong>
              <span>São Paulo · Brasil</span>
            </div>
          </Reveal>
        </section>

        <section className="home-section contact-section" id="contato">
          <Reveal>
            <p className="eyebrow">CONTATO</p>
            <h2>Quer conversar sobre produto, design ou uma oportunidade?</h2>
            <p>Me chama por onde for mais fácil.</p>
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/wandersonsilvamiranda" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={14} /></a>
              <a href="https://wa.me/5511921748152" target="_blank" rel="noreferrer">WhatsApp <ExternalLink size={14} /></a>
              <a href="mailto:fwsmiranda@gmail.com">E-mail <ExternalLink size={14} /></a>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
