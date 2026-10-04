# Wan — Product Design Portfolio

Primeira implementação em código do portfólio desenhado no Figma.

## Stack

- Next.js + TypeScript
- Tailwind CSS v4 como infraestrutura de estilos (o visual principal usa CSS autoral para manter fidelidade ao Figma)
- Motion for React para reveals e microinterações
- Embla Carousel para carrosséis mobile e galerias de telas
- Lenis para smooth scroll no desktop, respeitando `prefers-reduced-motion`
- Radix Slot + CVA na base do componente Button
- Lucide para ícones utilitários

## Rotas

- `/` — Home
- `/ruptura` — Ruptura Parcial
- `/reenvio` — Reenvio automático de pedidos

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Decisões de implementação

- A interface é editorial e evita efeitos de landing page genérica.
- Motion é sutil: entrada de seção, hover e pequenos deslocamentos.
- Carrosséis preservam o tamanho das telas de produto no mobile em vez de reduzi-las até ficarem ilegíveis.
- Conteúdo e métricas são os valores validados no Figma. Não há métricas inventadas.
- O layout é fluido entre 390px e desktop, não apenas dois breakpoints fixos.
- LinkedIn, WhatsApp e e-mail estão conectados no footer e na seção de contato.

## Próximas etapas recomendadas

1. Rodar QA visual lado a lado com o Figma em desktop e mobile.
2. Ajustar crops e escolher quais screenshots de produto entram na versão final.
3. Adicionar analytics e domínio apenas depois do QA.
4. Publicar na Vercel.
