import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Brand from "./Brand";
import type { BrandSize } from "./Brand.types";
import "../../styles.scss";

const LOGO_SVG = "/logo-sm.svg";

const meta: Meta<typeof Brand> = {
  title: "Components/Brand",
  component: Brand,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
O **Brand** exibe um ativo de identidade visual (logotipo) em tamanho controlado e consistente.

A prop \`size\` controla a altura do container — a largura escala automaticamente
para preservar a proporção original do logo. Todos os atributos HTML do \`<img>\`
são repassados ao elemento subjacente via rest spread.

### Tamanhos disponíveis
| size  | altura | uso recomendado                                              |
|-------|--------|--------------------------------------------------------------|
| \`sm\` | 24px   | Layouts densos, rodapés, referências inline                  |
| \`md\` | 32px   | Uso padrão — barras de navegação, cards                      |
| \`lg\` | 40px   | Destaque — headers, páginas de login, landing pages          |

### SVG vs raster
Quando um SVG é renderizado como \`<img>\`, seus estilos internos ficam isolados da página.
Se precisar controlar cores de fill via CSS, considere renderizar o SVG inline.

### Quando usar
- Barras de navegação e headers da aplicação
- Grids de logos de parceiros ou clientes
- Telas de login, onboarding e empty states
- Rodapés e páginas "sobre"

### Boas práticas
- Forneça um \`alt\` descritivo quando o logo é o principal identificador da marca na página
- Use \`alt=""\` para logos decorativos já descritos pelo texto ao redor (WCAG 2.1 SC 1.1.1)
- Prefira fontes SVG para renderização nítida em todos os tamanhos e densidades de tela
- Use \`size="md"\` como padrão; reserve \`lg\` para posicionamentos em destaque
        `,
      },
    },
   design: {
      type: 'figma',
      url: 'https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10009',
    },
  },
  argTypes: {
    src: {
      control: "text",
      description: "Caminho ou URL da imagem do logotipo.",
      table: { type: { summary: "string" } },
    },
    alt: {
      control: "text",
      description:
        'Descrição acessível da imagem. Use `""` para logos decorativos ou um label descritivo quando o logo é o principal identificador da marca.',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: "string" },
      },
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"] satisfies BrandSize[],
      description: "Controla a altura do container. A largura escala proporcionalmente.",
      table: {
        defaultValue: { summary: '"md"' },
        type: { summary: '"sm" | "md" | "lg"' },
      },
    },
    loading: {
      control: "radio",
      options: ["eager", "lazy"],
      description:
        "Estratégia nativa de carregamento da imagem, repassada ao `<img>` via rest spread.",
      table: {
        category: "Atributos HTML img",
        type: { summary: '"eager" | "lazy"' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Brand>;

// ─── 1. Playground ────────────────────────────────────────────────────────────

/**
 * Story interativa para explorar todas as props via Controls.
 * Ponto de entrada recomendado para inspecionar o componente.
 */
export const Playground: Story = {
  name: "Playground",
  args: {
    src: LOGO_SVG,
    alt: "Logo da marca",
    size: "md",
  },
};

// ─── 2. Tamanhos ──────────────────────────────────────────────────────────────

/**
 * Tamanho compacto — 24px de altura.
 * Use em layouts densos, rodapés e referências inline.
 */
export const Small: Story = {
  name: "Tamanho — sm (24px)",
  args: { src: LOGO_SVG, alt: "Logo da marca", size: "sm" },
};

/**
 * Tamanho padrão — 32px de altura.
 * Indicado para barras de navegação, headers e cards.
 */
export const Medium: Story = {
  name: "Tamanho — md (32px)",
  args: { src: LOGO_SVG, alt: "Logo da marca", size: "md" },
};

/**
 * Tamanho grande — 40px de altura.
 * Indicado para posicionamentos em destaque: headers, login, landing pages.
 */
export const Large: Story = {
  name: "Tamanho — lg (40px)",
  args: { src: LOGO_SVG, alt: "Logo da marca", size: "lg" },
};

// ─── 3. Comparativo de tamanhos ───────────────────────────────────────────────

const BrandSm = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--s-spacing-nano)" }}>
    <Brand src={LOGO_SVG} alt="Logo sm" size="sm" />
    <small>sm · 24px</small>
  </div>
);

const BrandMd = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--s-spacing-nano)" }}>
    <Brand src={LOGO_SVG} alt="Logo md" size="md" />
    <small>md · 32px</small>
  </div>
);

const BrandLg = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--s-spacing-nano)" }}>
    <Brand src={LOGO_SVG} alt="Logo lg" size="lg" />
    <small>lg · 40px</small>
  </div>
);

/**
 * Os três tamanhos lado a lado para comparação visual.
 * Use para validar proporções e espaçamentos após alterações de token.
 */
export const SizeComparison: Story = {
  name: "Comparativo — tamanhos",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--s-spacing-large)" }}>
      <BrandSm />
      <BrandMd />
      <BrandLg />
    </div>
  ),
};

// ─── 4. Acessibilidade ────────────────────────────────────────────────────────

/**
 * Logo decorativo com `alt=""`.
 * Use quando o logo é puramente decorativo e o texto ao redor já identifica a marca.
 * O atributo vazio oculta a imagem de leitores de tela (WCAG 2.1 SC 1.1.1).
 */
export const DecorativeLogo: Story = {
  name: "Acessibilidade — logo decorativo (alt vazio)",
  args: { src: LOGO_SVG, alt: "", size: "md" },
};

// ─── 5. Atributos nativos ─────────────────────────────────────────────────────

/**
 * Carregamento lazy via atributo nativo `loading="lazy"`.
 * O Brand repassa todos os `ImgHTMLAttributes` ao `<img>` subjacente —
 * use para otimizar o carregamento quando o logo não está acima da dobra.
 */
export const LazyLoaded: Story = {
  name: "Atributo nativo — loading lazy",
  args: { src: LOGO_SVG, alt: "Logo da marca", size: "md", loading: "lazy" },
};

// ─── 6. Contexto real ─────────────────────────────────────────────────────────

/**
 * Logo na barra de navegação — uso mais comum do componente.
 * O tamanho `md` mantém a proporção adequada ao lado do nome da marca.
 */
export const InNavbar: Story = {
  name: "Contexto real — barra de navegação",
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--s-spacing-x-small)",
        padding: "var(--s-spacing-x-small) var(--s-spacing-medium)",
        borderBottom: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
        background: "var(--s-color-fill-default)",
        width: "320px",
      }}
    >
      <Brand src={LOGO_SVG} alt="Logo Acme Corp" size="md" />
      <small><strong>Acme Corp</strong></small>
    </div>
  ),
};

/**
 * Logo em tela de login — tamanho `lg` para destaque máximo.
 * Padrão comum em páginas de autenticação e onboarding.
 */
export const InLogin: Story = {
  name: "Contexto real — tela de login",
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--s-spacing-medium)",
        padding: "var(--s-spacing-x-large)",
        background: "var(--s-color-fill-default)",
        borderRadius: "var(--s-border-radius-medium)",
        border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
        width: "280px",
      }}
    >
      <Brand src={LOGO_SVG} alt="Logo Acme Corp" size="lg" />
      <small><strong>Bem-vindo de volta</strong></small>
      <small>Entre na sua conta para continuar</small>
    </div>
  ),
};