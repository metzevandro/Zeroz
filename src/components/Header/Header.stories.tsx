import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Header, HeaderProfile } from "./index";
import { Dropdown, DropdownItem, DropdownTitle } from "../Dropdown";
import Breadcrumb from "../Breadcrumb";
import "../../styles.scss";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
O **Header** é a barra superior persistente da aplicação, composta por três zonas:

| Zona         | Conteúdo                                                        |
|--------------|-----------------------------------------------------------------|
| **Esquerda** | Botão hambúrguer — dispara \`onClick\` (toggle da sidebar)      |
| **Centro**   | Slot de breadcrumb — aceita qualquer \`ReactNode\`              |
| **Direita**  | Slot \`children\` — tipicamente um \`<HeaderProfile>\`          |

### HeaderProfile
Subcomponente que exibe o avatar e o nome do usuário no lado direito.
Ao ser clicado, abre o \`<Dropdown>\` passado como \`children\` —
o \`HeaderProfile\` injeta \`visible\` e \`align="right"\` automaticamente
via \`React.cloneElement\`, por isso **não é necessário passar \`visible\`** ao \`<Dropdown>\`.

### Responsividade
Em viewports \`≤ 768px\` o breadcrumb fica oculto, o botão hambúrguer aparece
e o avatar perde o nome e o chevron — exibindo apenas o ícone circular.

### Quando usar
- Como barra superior persistente em dashboards e painéis administrativos
- Sempre que precisar de um gatilho de navegação global (toggle de sidebar) e contexto de breadcrumb

### Boas práticas
- Mantenha o slot \`breadcrumb\` conciso — deve refletir o contexto da página atual
- Use \`<HeaderProfile>\` para identidade do usuário; evite colocar ações não relacionadas no slot direito
- Passe \`skeleton\` ao \`<HeaderProfile>\` enquanto os dados do usuário estão carregando para evitar layout shift
        `,
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10019",
    },
  },
  argTypes: {
    onClick: {
      action: "onClick",
      description:
        "Disparado quando o botão hambúrguer é clicado. Tipicamente usado para abrir/fechar a sidebar.",
      table: { type: { summary: "() => void" } },
    },
    breadcrumb: {
      control: false,
      description:
        "Conteúdo de breadcrumb renderizado no centro do header. Aceita qualquer `ReactNode`.",
      table: { type: { summary: "React.ReactNode" } },
    },
    children: {
      control: false,
      description:
        "Slot direito — tipicamente `<HeaderProfile>`. Aceita qualquer `ReactNode`.",
      table: { type: { summary: "React.ReactNode" } },
    },
    skeleton: {
      control: "boolean",
      description:
        "Quando `true`, repassa o estado de skeleton ao `ButtonIcon` do hambúrguer.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

// ─── Fixture compartilhada ────────────────────────────────────────────────────

const defaultBreadcrumb = (
  <Breadcrumb
    items={[
      { pageName: "Início", href: "#" },
      { pageName: "Dashboard", href: "#" },
    ]}
  />
);

const defaultDropdown = (
  <Dropdown>
    <DropdownTitle label="Conta" />
    <DropdownItem icon="person" label="Meu perfil" onClick={() => {}} />
    <DropdownItem icon="settings" label="Configurações" onClick={() => {}} />
    <DropdownTitle label="Sessão" />
    <DropdownItem icon="logout" label="Sair" onClick={() => {}} />
  </Dropdown>
);

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Header completo com perfil do usuário e dropdown.
 * Clique no perfil para abrir o menu — `visible` é injetado automaticamente
 * pelo `HeaderProfile` via `React.cloneElement`.
 */
export const Default: Story = {
  name: "Default",
  args: {
    onClick: () => {},
    breadcrumb: defaultBreadcrumb,
    children: (
      <HeaderProfile name="Jane Doe" letter="J">
        {defaultDropdown}
      </HeaderProfile>
    ),
  },
};

// ─── 2. Variações do HeaderProfile ────────────────────────────────────────────

/**
 * HeaderProfile com imagem de avatar via `avatar_src`.
 * Quando fornecido, o avatar exibe a foto no lugar das iniciais.
 */
export const WithAvatar: Story = {
  name: "HeaderProfile — com imagem de avatar",
  args: {
    onClick: () => {},
    breadcrumb: defaultBreadcrumb,
    children: (
      <HeaderProfile
        name="Jane Doe"
        avatar_src="https://i.pravatar.cc/150?img=47"
      >
        {defaultDropdown}
      </HeaderProfile>
    ),
  },
};

/**
 * HeaderProfile em estado skeleton — dados do usuário ainda não carregados.
 * Nome e avatar são substituídos por placeholders. O botão de perfil fica
 * desabilitado para bloquear interação durante o carregamento.
 */
export const Skeleton: Story = {
  name: "HeaderProfile — skeleton (carregando)",
  args: {
    onClick: () => {},
    breadcrumb: defaultBreadcrumb,
    children: (
      <HeaderProfile name="" letter="" skeleton>
        {defaultDropdown}
      </HeaderProfile>
    ),
  },
};

// ─── 3. Variações do Header ───────────────────────────────────────────────────

/**
 * Header sem perfil — apenas botão hambúrguer e breadcrumb.
 * O slot `children` é opcional — omita-o para um header mínimo.
 */
export const NoProfile: Story = {
  name: "Header — sem perfil",
  args: {
    onClick: () => {},
    breadcrumb: defaultBreadcrumb,
    children: null,
  },
};

/**
 * Header com breadcrumb aninhado de múltiplos níveis.
 * Valida o comportamento com rotas mais profundas na hierarquia.
 */
export const DeepBreadcrumb: Story = {
  name: "Header — breadcrumb aninhado",
  args: {
    onClick: () => {},
    breadcrumb: (
      <Breadcrumb
        items={[
          { pageName: "Início", href: "#" },
          { pageName: "Configurações", href: "#" },
          { pageName: "Conta", href: "#" },
          { pageName: "Faturamento", href: "#" },
        ]}
      />
    ),
    children: (
      <HeaderProfile name="Jane Doe" letter="J">
        {defaultDropdown}
      </HeaderProfile>
    ),
  },
};

// ─── 4. Mobile ────────────────────────────────────────────────────────────────

/**
 * Layout mobile (≤ 768px) — breadcrumb oculto, botão hambúrguer visível,
 * avatar sem nome e sem chevron.
 */
export const MobileLayout: Story = {
  name: "Layout mobile (≤ 768px)",
  globals: {
    viewport: { value: "mobile5", isRotated: false },
  },
  args: {
    onClick: () => {},
    breadcrumb: defaultBreadcrumb,
    children: (
      <HeaderProfile name="Jane Doe" letter="J">
        {defaultDropdown}
      </HeaderProfile>
    ),
  },
};