import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Image } from "./index";
import "../../styles.scss";

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
O **Image** é um wrapper fino ao redor do elemento nativo \`<img>\` que adiciona
um estado de skeleton correspondente às dimensões da imagem.

Todos os atributos HTML padrão de \`<img>\` (ex: \`loading\`, \`decoding\`, \`crossOrigin\`)
são repassados ao elemento subjacente via rest spread — pode ser usado como
substituto direto do \`<img>\` nativo.

### Quando usar
- Sempre que uma imagem precisar de um placeholder skeleton durante o carregamento
- Para garantir a classe \`image-root\` consistente em todas as imagens do sistema

### Quando não usar
- Para ícones ou SVGs — use o componente \`Icon\`
- Para avatares de usuário — use o componente \`Avatar\`, que já gerencia fallbacks

### Boas práticas
- Sempre forneça um \`alt\` descritivo para imagens não decorativas (WCAG 2.1 SC 1.1.1)
- Use \`alt=""\` apenas para imagens puramente decorativas
- Forneça \`width\` e \`height\` para evitar layout shift (CLS)
- Use \`skeleton\` enquanto a URL da imagem está sendo buscada, não enquanto o browser carrega a imagem
        `,
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1338-8872",
    },
  },
  argTypes: {
    src: {
      control: "text",
      description: "URL da imagem a exibir.",
      table: { type: { summary: "string" } },
    },
    alt: {
      control: "text",
      description:
        "Descrição acessível da imagem. Obrigatória para imagens não decorativas.",
      table: { type: { summary: "string" } },
    },
    width: {
      control: "text",
      description:
        "Largura renderizada. Também usada para dimensionar o `<Skeleton>` quando `skeleton` é `true`.",
      table: { type: { summary: "string" } },
    },
    height: {
      control: "text",
      description:
        "Altura renderizada. Também usada para dimensionar o `<Skeleton>` quando `skeleton` é `true`.",
      table: { type: { summary: "string" } },
    },
    skeleton: {
      control: "boolean",
      description:
        "Renderiza um placeholder `<Skeleton>` no lugar da imagem. Use durante estados de carregamento.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Imagem padrão com dimensões explícitas.
 * Use os Controls para explorar as props disponíveis.
 */
export const Default: Story = {
  name: "Default",
  args: {
    src: "https://picsum.photos/seed/ds/400/200",
    alt: "Foto de paisagem de exemplo",
    width: "400",
    height: "200",
  },
};

// ─── 2. Variações de proporção ────────────────────────────────────────────────

/**
 * Imagem quadrada — proporção comum em thumbnails e cards de produto.
 */
export const Square: Story = {
  name: "Proporção — quadrada",
  args: {
    src: "https://picsum.photos/seed/ds2/240/240",
    alt: "Thumbnail quadrado",
    width: "240",
    height: "240",
  },
};

/**
 * Imagem em proporção 16:9 — padrão para banners, heroes e capas de artigo.
 */
export const Widescreen: Story = {
  name: "Proporção — 16:9 (banner)",
  args: {
    src: "https://picsum.photos/seed/ds4/480/270",
    alt: "Banner em proporção 16:9",
    width: "480",
    height: "270",
  },
};

/**
 * Imagem pequena — dimensões compactas para thumbnails em listas e tabelas.
 */
export const Thumbnail: Story = {
  name: "Proporção — thumbnail compacto",
  args: {
    src: "https://picsum.photos/seed/ds5/80/80",
    alt: "Thumbnail compacto",
    width: "80",
    height: "80",
  },
};

// ─── 3. Estado skeleton ───────────────────────────────────────────────────────

/**
 * Estado de carregamento — skeleton com as mesmas dimensões da imagem.
 * Evita layout shift quando a imagem real carrega.
 */
export const SkeletonState: Story = {
  name: "Estado — skeleton (carregando)",
  args: {
    src: "https://picsum.photos/seed/ds/400/200",
    alt: "Foto de exemplo",
    width: "400",
    height: "200",
    skeleton: true,
  },
};

/**
 * Comparativo entre a imagem carregada e o skeleton com as mesmas dimensões.
 * Valida que não há layout shift entre os dois estados.
 */
export const SkeletonComparison: Story = {
  name: "Estado — comparativo skeleton vs imagem",
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "var(--s-spacing-medium)",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-nano)",
        }}
      >
        <Image
          src="https://picsum.photos/seed/ds/200/120"
          alt="Imagem carregada"
          width="200"
          height="120"
          skeleton
        />
        <small>skeleton</small>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-nano)",
        }}
      >
        <Image
          src="https://picsum.photos/seed/ds/200/120"
          alt="Imagem carregada"
          width="200"
          height="120"
        />
        <small>carregada</small>
      </div>
    </div>
  ),
};

// ─── 4. Atributos nativos ─────────────────────────────────────────────────────

/**
 * Carregamento lazy via atributo nativo `loading="lazy"`.
 * Todos os atributos HTML do `<img>` são repassados via rest spread.
 */
export const LazyLoaded: Story = {
  name: "Atributo nativo — loading lazy",
  args: {
    src: "https://picsum.photos/seed/ds3/400/200",
    alt: "Imagem com carregamento lazy",
    width: "400",
    height: "200",
    loading: "lazy",
  },
};

// ─── 5. Contexto real ─────────────────────────────────────────────────────────

/**
 * Grade de imagens com skeleton — simula uma listagem de produtos
 * em estado de carregamento inicial.
 */
export const LoadingGrid: Story = {
  name: "Contexto real — grade em carregamento",
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--s-spacing-small)",
      }}
    >
      {Array.from({ length: 6 }, (_, i) => (
        <Image
          key={i}
          src={`https://picsum.photos/seed/${i}/160/120`}
          alt={`Produto ${i + 1}`}
          width="160"
          height="120"
          skeleton
        />
      ))}
    </div>
  ),
};

/**
 * Grade de imagens carregadas — mesmo layout da story de carregamento,
 * para comparar o estado final com o skeleton.
 */
export const LoadedGrid: Story = {
  name: "Contexto real — grade carregada",
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--s-spacing-small)",
      }}
    >
      {Array.from({ length: 6 }, (_, i) => (
        <Image
          key={i}
          src={`https://picsum.photos/seed/${i}/160/120`}
          alt={`Produto ${i + 1}`}
          width="160"
          height="120"
        />
      ))}
    </div>
  ),
};
