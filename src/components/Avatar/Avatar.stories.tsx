import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";
import "../../styles.scss";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente de identidade visual do usuário. Exibe, em ordem de prioridade, uma imagem, as iniciais do nome ou um ícone padrão como fallback — com suporte a estado de carregamento via skeleton.\n\n**Hierarquia de renderização:** `skeleton` → `src` (imagem) → `letter` (iniciais) → ícone padrão (fallback)",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-9992",
    },
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description:
        "Define o tamanho do avatar. `sm` = 24 px (listas compactas), `md` = 40 px (uso geral), `lg` = 64 px (perfis e cabeçalhos).",
      table: {
        defaultValue: { summary: "md" },
        type: { summary: '"sm" | "md" | "lg"' },
      },
    },
    src: {
      control: "text",
      description:
        "URL da imagem a exibir. Tem prioridade sobre `letter` e o ícone padrão.",
      table: { type: { summary: "string" } },
    },
    letter: {
      control: "text",
      description:
        "Nome ou string de onde as iniciais são extraídas. `'João Silva'` → `'JS'`. Ignorado quando `src` é fornecido.",
      table: { type: { summary: "string" } },
    },
    skeleton: {
      control: "boolean",
      description:
        "Exibe o estado de carregamento (skeleton circular). Quando `true`, nenhum outro conteúdo é renderizado.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// ─── 1. Default ──────────────────────────────────────────────────────────────

/**
 * Estado base do componente sem nenhuma prop opcional.
 * Renderiza o ícone padrão de pessoa (fallback automático).
 * Use os Controls do painel para explorar todas as combinações de props.
 */
export const Default: Story = {
  name: "Default (Ícone Fallback)",
  args: {
    size: "md",
  },
};

// ─── 2. Variações por conteúdo ────────────────────────────────────────────────

/**
 * Avatar com imagem fornecida via URL.
 * Prioridade máxima na hierarquia de renderização — sobrepõe `letter` e o ícone.
 */
export const WithImage: Story = {
  name: "Com Imagem",
  args: {
    size: "md",
    src: "https://i.pravatar.cc/150?img=3",
  },
};

/**
 * Avatar com iniciais extraídas de um nome completo.
 * Quando `letter` contém espaço, exibe o primeiro e o último caractere em maiúsculo.
 * Ex: "João Silva" → "JS"
 */
export const WithInitials: Story = {
  name: "Com Iniciais (nome completo)",
  args: {
    size: "md",
    letter: "João Silva",
  },
};

/**
 * Avatar com inicial única.
 * Quando `letter` não contém espaço, exibe apenas o primeiro caractere em maiúsculo.
 * Ex: "Carlos" → "C"
 */
export const WithSingleInitial: Story = {
  name: "Com Inicial Única",
  args: {
    size: "md",
    letter: "Carlos",
  },
};

// ─── 3. Variações de tamanho ──────────────────────────────────────────────────

/**
 * Tamanho pequeno — 24 px.
 * Indicado para listas densas, tabelas e layouts compactos.
 */
export const SizeSmall: Story = {
  name: "Tamanho — sm (24 px)",
  args: {
    size: "sm",
    letter: "Anna Lee",
  },
};

/**
 * Tamanho médio — 40 px.
 * Tamanho recomendado para uso geral (comentários, cards, navbars).
 */
export const SizeMedium: Story = {
  name: "Tamanho — md (40 px)",
  args: {
    size: "md",
    letter: "Anna Lee",
  },
};

/**
 * Tamanho grande — 64 px.
 * Indicado para páginas de perfil, cabeçalhos de conta e apresentações de usuário.
 */
export const SizeLarge: Story = {
  name: "Tamanho — lg (64 px)",
  args: {
    size: "lg",
    letter: "Anna Lee",
  },
};

/**
 * Comparativo visual dos três tamanhos disponíveis lado a lado.
 * Útil para validar proporções e espaçamentos no design system.
 */
export const SizeComparison: Story = {
  name: "Comparativo de Tamanhos",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar size="sm" letter="Anna Lee" />
        <small>sm · 24px</small>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar size="md" letter="Anna Lee" />
        <small>md · 40px</small>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar size="lg" letter="Anna Lee" />
        <small>lg · 64px</small>
      </div>
    </div>
  ),
};

// ─── 4. Estado de loading (skeleton) ─────────────────────────────────────────

/**
 * Estado de carregamento no tamanho padrão (md).
 * Use enquanto os dados do usuário estão sendo buscados da API
 * para evitar layout shift e melhorar a percepção de performance.
 */
export const SkeletonDefault: Story = {
  name: "Skeleton (Loading)",
  args: {
    size: "md",
    skeleton: true,
  },
};

/**
 * Skeleton aplicado nos três tamanhos disponíveis.
 * Use em listas ou grids onde avatares de tamanhos distintos aparecem em carregamento simultâneo.
 */
export const SkeletonAllSizes: Story = {
  name: "Skeleton — Todos os Tamanhos",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Avatar size="sm" skeleton />
      <Avatar size="md" skeleton />
      <Avatar size="lg" skeleton />
    </div>
  ),
};

// ─── 5. Vitrine completa ──────────────────────────────────────────────────────

/**
 * Exibe todas as variantes visuais possíveis (imagem, iniciais, ícone, skeleton)
 * no tamanho md. Use para validação visual rápida do componente em conjunto.
 */
export const AllVariants: Story = {
  name: "Todas as Variantes",
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Avatar size="md" src="https://i.pravatar.cc/150?img=5" />
        <small>Imagem</small>
      </div>
      <div style={{ textAlign: "center" }}>
        <Avatar size="md" letter="João Silva" />
        <small>Iniciais</small>
      </div>
      <div style={{ textAlign: "center" }}>
        <Avatar size="md" />
        <small>Ícone</small>
      </div>
      <div style={{ textAlign: "center" }}>
        <Avatar size="md" skeleton={true} />
        <small>Skeleton</small>
      </div>
    </div>
  ),
};

// ─── 6. Composição — Avatar Stack ─────────────────────────────────────────────

/**
 * Pilha de avatares sobrepostos (avatar stack).
 * O componente não gerencia z-index internamente;
 * o consumidor controla o empilhamento via CSS externo conforme demonstrado.
 */
export const AvatarStack: Story = {
  name: "Composição — Avatar Stack",
  render: () => (
    <div style={{ display: "flex", alignItems: "center" }}>
      {[3, 5, 7, 8, 10].map((img, i) => (
        <div
          key={img}
          style={{
            marginLeft: i === 0 ? 0 : "-6px",
            zIndex: 5 - i,
            position: "relative",
            outline: "1px solid white",
            borderRadius: "50%",
          }}
        >
          <Avatar size="sm" src={`https://i.pravatar.cc/150?img=${img}`} />
        </div>
      ))}
    </div>
  ),
};
