import Link from "next/link";

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className={compact ? "site-header site-header--case" : "site-header"}>
      <Link href="/" className="site-brand" aria-label="Wan — página inicial">
        {compact ? "WAN" : "WANDERSON SILVA"}
      </Link>
      <nav className="site-nav" aria-label="Navegação principal">
        <Link href="/#projetos">Projetos</Link>
        <Link href="/#sobre">Sobre</Link>
        <Link href="/#contato">Contato</Link>
      </nav>
    </header>
  );
}
