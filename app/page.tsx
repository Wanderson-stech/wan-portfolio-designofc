import Image from "next/image";
import { GlobalFooter, PortfolioHeader, ProjectCard } from "@/components/portfolio";
import { Reveal } from "@/components/reveal";
import { contact } from "@/lib/site";

export default function Home() {
  return (
    <>
      <PortfolioHeader />

      <main>
        <section className="home-hero">
          <Reveal className="home-hero__content">
            <p className="figma-kicker">Product Designer</p>
            <h1>Produto, experiência e operação precisam funcionar juntos.</h1>
            <div className="home-hero__intro">
              <p>Trabalho em produtos digitais envolvendo pós-compra, autoatendimento, tracking e comunicação com clientes.</p>
              <div className="home-hero__meta">
                <span>São Paulo, Brasil</span>
                <span>Atualmente na Platform builders alocado no cliente RD Saúde</span>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="home-projects" id="projetos">
          <div className="home-projects__intro">
            <h2>Projetos selecionados</h2>
            <p>Casos em que transformei problemas complexos em experiências mais claras.</p>
          </div>

          <div className="home-projects__list">
            <ProjectCard
              href="/ruptura"
              desktopImage="/figma/home-ruptura-desktop.png"
              mobileImage="/figma/home-ruptura-mobile.png"
              meta="01 / Pós-compra / Squad Tracking"
              title="Ruptura Parcial"
              description="Tornando visíveis as mudanças de um pedido antes que elas se transformassem em surpresa na entrega."
              desktopTags={["Discovery", "Produto", "UX/UI"]}
              mobileTags={["Discovery", "Produto", "UX/UI"]}
              buttonLabel="Explorar Ruptura Parcial"
            />

            <ProjectCard
              href="/reenvio"
              desktopImage="/figma/home-reenvio-desktop.png"
              mobileImage="/figma/home-reenvio-mobile.png"
              meta="02 / Pós-compra / autoatendimento / Squad Tracking"
              title="Reenvio automático de pedidos"
              description="Transformando uma falha de entrega em uma jornada que o próprio cliente consegue resolver."
              desktopTags={["Autoatendimento", "User Flow", "MVP", "App + Web"]}
              mobileTags={["Autoatendimento", "User Flow", "MVP", "App + Web"]}
              buttonLabel="Explorar Reenvio automático"
            />
          </div>
        </section>

        <section className="home-thinking">
          <Reveal className="home-thinking__intro">
            <h2>Meu trabalho não começa na tela.</h2>
            <p>Antes de desenhar uma solução, tento entender o que está acontecendo entre usuário, produto, tecnologia e operação.</p>
          </Reveal>

          <div className="home-thinking__rows">
            {[
              ["01", "Entender", "Separar sintomas do problema e buscar evidências antes de definir uma solução."],
              ["02", "Estruturar", "Transformar regras, dependências e restrições em uma experiência compreensível."],
              ["03", "Acompanhar", "Entender o que acontece depois que a solução chega ao usuário."],
            ].map(([index, title, description]) => (
              <Reveal className="home-thinking__row" key={index}>
                <span>{index}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="home-about" id="sobre">
          <h2>Sobre</h2>
          <div className="home-about__body">
            <Reveal className="home-about__copy">
              <p>Sou Product Designer e atualmente trabalho na Platform Builders alocado no cliente RD Saúde com produtos digitais das marcas Raia e Drogasil.</p>
              <p>Minha experiência recente passa principalmente por pós-compra, autoatendimento, assinaturas e Martech.</p>
              <p>Também sou formado em Análise e Desenvolvimento de Sistemas, o que contribui para minha relação com tecnologia e para entender melhor as restrições das soluções que desenho.</p>
            </Reveal>

            <Reveal className="home-about__photo">
              <Image
                className="desktop-only"
                src="/figma/home-profile-desktop.png"
                alt="Foto de Wanderson Silva"
                width={279}
                height={283}
                sizes="279px"
              />
              <Image
                className="mobile-only"
                src="/figma/home-profile-mobile.png"
                alt="Foto de Wanderson Silva"
                width={342}
                height={346}
                sizes="342px"
              />
            </Reveal>
          </div>
        </section>

        <section className="home-contact" id="contato">
          <Reveal>
            <h2>Vamos conversar sobre produto?</h2>
            <p>Estou aberto a conhecer novos times, produtos e problemas interessantes para resolver.</p>
            <div className="home-contact__links">
              <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={contact.email}>E-mail ↗</a>
            </div>
          </Reveal>

          <div className="home-contact__mini-footer">
            <div>
              <strong>Wanderson Silva (Wan)</strong>
              <span>Product Designer</span>
            </div>
            <div>
              <span>São Paulo, Brasil</span>
              <span>2026</span>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </>
  );
}
