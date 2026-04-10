import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";
import { Modal, FooterModal, ContentModal } from "../Modal/index.ts";
import "../../styles.scss";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
O **Button** é o elemento interativo principal para acionar ações na interface.

Suporta quatro variantes semânticas, dois tamanhos, ícone opcional e estados
de loading e skeleton integrados.

> Nunca use \`icon\` sem \`children\` — o componente lança um erro em desenvolvimento
> nesse caso. Para botões somente-ícone, use o componente \`ButtonIcon\`.

### Variantes
| variant     | uso recomendado                                              |
|-------------|--------------------------------------------------------------|
| \`primary\`   | Ação principal da página ou formulário (CTA)                 |
| \`secondary\` | Ações de suporte: "Cancelar", "Voltar", "Ver mais"           |
| \`success\`   | Confirmações positivas: "Confirmar", "Marcar como concluído" |
| \`warning\`   | Ações destrutivas ou cautelosas: "Excluir", "Sobrescrever"   |

### Estados
- **\`disabled\`** — desativa nativamente via atributo HTML; define \`aria-disabled\`
- **\`isLoading\`** — exibe spinner, bloqueia interação e define \`aria-busy="true"\`
- **\`isSkeleton\`** — substitui o botão por um \`<Skeleton>\` com as mesmas dimensões

### Acessibilidade
- Sempre forneça um label descritivo em \`children\`
- Use \`ariaLabel\` quando o label visual não for autoexplicativo para leitores de tela
- \`isLoading\` define \`aria-busy\` automaticamente — não é necessário fazer isso manualmente
        `,
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10010",
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning"],
      description:
        "Estilo visual e semântico do botão. Define cor de fundo, texto e comportamento de hover.",
      table: {
        defaultValue: { summary: "primary" },
        type: { summary: '"primary" | "secondary" | "success" | "warning"' },
      },
    },
    size: {
      control: "radio",
      options: ["sm", "md"],
      description:
        "Tamanho do botão. `sm` = 32px de altura (UIs compactas). `md` = 40px (padrão).",
      table: {
        defaultValue: { summary: "md" },
        type: { summary: '"sm" | "md"' },
      },
    },
    icon: {
      control: "text",
      description:
        "Nome do ícone renderizado antes do label. Deve sempre ser combinado com `children`.",
      table: { type: { summary: "string" } },
    },
    isLoading: {
      control: "boolean",
      description:
        "Exibe spinner de carregamento e bloqueia interação. Define `aria-busy` automaticamente.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    isSkeleton: {
      control: "boolean",
      description:
        "Substitui o botão por um `<Skeleton>` com as mesmas dimensões. Use para preservar layout durante carregamento da página.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    disabled: {
      control: "boolean",
      description:
        "Desativa o botão nativamente. Define `aria-disabled` e bloqueia interação.",
      table: { type: { summary: "boolean" } },
    },
    ariaLabel: {
      control: "text",
      description:
        "Label acessível para leitores de tela. Use quando o label visual não for suficientemente descritivo.",
      table: { type: { summary: "string" } },
    },
    children: {
      control: "text",
      description:
        "Texto do label do botão. Sempre obrigatório — inclusive quando `icon` é fornecido.",
      table: { type: { summary: "React.ReactNode" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ─── Helper de layout ─────────────────────────────────────────────────────────

const Wrap = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: "fit-content" }}>{children}</div>
);

// ─── 1. Playground ────────────────────────────────────────────────────────────

/**
 * Story interativa para explorar todas as props via Controls.
 * Ponto de entrada recomendado para inspecionar o componente.
 */
export const Playground: Story = {
  name: "Playground",
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    isLoading: false,
    isSkeleton: false,
    disabled: false,
  },
  render: (args) => (
    <Wrap>
      <Button {...args} />
    </Wrap>
  ),
};

// ─── 2. Variantes ─────────────────────────────────────────────────────────────

/**
 * Variante primária — ação principal da página ou formulário (CTA).
 * Use apenas uma vez por contexto visual para manter hierarquia clara.
 */
export const Primary: Story = {
  name: "Primary",
  args: { children: "Salvar alterações", variant: "primary" },
  render: (args) => (
    <Wrap>
      <Button {...args} />
    </Wrap>
  ),
};

/**
 * Variante secundária — ações de suporte ou alternativas à ação principal.
 * Use para "Cancelar", "Voltar" ou qualquer ação de menor prioridade.
 */
export const Secondary: Story = {
  name: "Secondary",
  args: { children: "Cancelar", variant: "secondary" },
  render: (args) => (
    <Wrap>
      <Button {...args} />
    </Wrap>
  ),
};

/**
 * Variante de sucesso — confirmações e ações com resultado positivo.
 * Use para "Confirmar", "Marcar como concluído", "Aprovar".
 */
export const Success: Story = {
  name: "Success",
  args: { children: "Confirmar", variant: "success" },
  render: (args) => (
    <Wrap>
      <Button {...args} />
    </Wrap>
  ),
};

/**
 * Variante de atenção — ações destrutivas ou que requerem cautela.
 * Use para "Excluir", "Sobrescrever", "Revogar acesso".
 */
export const Warning: Story = {
  name: "Warning",
  args: { children: "Excluir", variant: "warning" },
  render: (args) => (
    <Wrap>
      <Button {...args} />
    </Wrap>
  ),
};

// ─── 3. Tamanhos ──────────────────────────────────────────────────────────────

/**
 * Tamanho padrão — 40px de altura.
 * Indicado para a maioria dos contextos: formulários, modais, páginas.
 */
export const SizeMd: Story = {
  name: "Tamanho — md (padrão)",
  args: { children: "Botão médio", size: "md", variant: "primary" },
  render: (args) => (
    <Wrap>
      <Button {...args} />
    </Wrap>
  ),
};

/**
 * Tamanho compacto — 32px de altura.
 * Indicado para toolbars, filtros, tabelas e UIs com espaço reduzido.
 */
export const SizeSm: Story = {
  name: "Tamanho — sm",
  args: { children: "Botão pequeno", size: "sm", variant: "primary" },
  render: (args) => (
    <Wrap>
      <Button {...args} />
    </Wrap>
  ),
};

/**
 * Comparativo visual dos dois tamanhos disponíveis lado a lado.
 */
export const SizeComparison: Story = {
  name: "Comparativo de tamanhos",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ width: "fit-content" }}>
          <Button size="md" variant="primary">
            md · 40px
          </Button>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ width: "fit-content" }}>
          <Button size="sm" variant="primary">
            sm · 32px
          </Button>
        </div>
      </div>
    </div>
  ),
};

// ─── 4. Estados ───────────────────────────────────────────────────────────────

/**
 * Estado desabilitado — bloqueia interação nativamente.
 * Define `aria-disabled` e aplica opacidade reduzida.
 * Use quando a ação não está disponível no contexto atual.
 */
export const Disabled: Story = {
  name: "Estado — desabilitado",
  args: { children: "Indisponível", disabled: true, variant: "primary" },
  render: (args) => (
    <Wrap>
      <Button {...args} />
    </Wrap>
  ),
};

/**
 * Estado de loading — exibe spinner e bloqueia interação.
 * Define `aria-busy="true"` automaticamente.
 * Use vinculado à operação assíncrona que o acionou (ex: submit de formulário).
 */
export const Loading: Story = {
  name: "Estado — loading",
  args: { children: "Salvando…", isLoading: true, variant: "primary" },
  render: (args) => (
    <Wrap>
      <Button {...args} />
    </Wrap>
  ),
};

/**
 * Estado skeleton — substitui o botão por um placeholder com as mesmas dimensões.
 * Use para preservar o layout durante carregamento inicial da página,
 * antes dos dados e ações estarem disponíveis.
 */
export const Skeleton: Story = {
  name: "Estado — skeleton",
  args: { children: "Enviar", isSkeleton: true, variant: "primary" },
  render: (args) => (
    <Wrap>
      <Button {...args} />
    </Wrap>
  ),
};

// ─── 5. Com ícone ─────────────────────────────────────────────────────────────

/**
 * Botão primário com ícone antes do label.
 * O ícone reforça visualmente a ação sem substituir o texto.
 */
export const WithIconPrimary: Story = {
  name: "Com ícone — Primary",
  args: { children: "Adicionar item", icon: "add", variant: "primary" },
  render: (args) => (
    <Wrap>
      <Button {...args} />
    </Wrap>
  ),
};

/**
 * Botão secundário com ícone — padrão comum em ações de exportação e download.
 */
export const WithIconSecondary: Story = {
  name: "Com ícone — Secondary",
  args: { children: "Exportar", icon: "download", variant: "secondary" },
  render: (args) => (
    <Wrap>
      <Button {...args} />
    </Wrap>
  ),
};

/**
 * Botão de sucesso com ícone — reforça visualmente o resultado positivo da ação.
 */
export const WithIconSuccess: Story = {
  name: "Com ícone — Success",
  args: { children: "Confirmar", icon: "check", variant: "success" },
  render: (args) => (
    <Wrap>
      <Button {...args} />
    </Wrap>
  ),
};

/**
 * Botão de atenção com ícone — o ícone amplifica o sinal de alerta da ação destrutiva.
 */
export const WithIconWarning: Story = {
  name: "Com ícone — Warning",
  args: { children: "Excluir", icon: "delete", variant: "warning" },
  render: (args) => (
    <Wrap>
      <Button {...args} />
    </Wrap>
  ),
};

// ─── 6. Matriz completa ───────────────────────────────────────────────────────

/**
 * Visão geral de todas as combinações de variante × tamanho,
 * incluindo os estados desabilitado e loading.
 * Use para validação visual rápida após alterações de token ou tema.
 */
export const AllVariants: Story = {
  name: "Matriz completa — variantes × tamanhos × estados",
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "120px repeat(4, auto)",
        gap: "12px 16px",
        alignItems: "start",
      }}
    >
      <span />
      <small>md</small>
      <small>sm</small>
      <small>disabled</small>
      <small>loading</small>

      {(["primary", "secondary", "success", "warning"] as const).map(
        (variant) => (
          <>
            <small key={`${variant}-label`}>{variant}</small>

            <Button variant={variant} size="md">
              {variant}
            </Button>

            <Button variant={variant} size="sm">
              {variant}
            </Button>

            <Button variant={variant} size="md" disabled>
              desabilitado
            </Button>

            <Button variant={variant} size="md" isLoading>
              loading
            </Button>
          </>
        ),
      )}
    </div>
  ),
};

// ─── 7. Contexto real ─────────────────────────────────────────────────────────

/**
 * Par de botões primário + secundário — padrão mais comum em formulários e modais.
 * Demonstra a hierarquia visual correta entre ação principal e ação de suporte.
 */
export const PrimarySecondaryPair: Story = {
  name: "Contexto real — par primário + secundário",
  render: () => (
    <div style={{ display: "flex", gap: "8px" }}>
      <div style={{ width: "fit-content" }}>
        <Button variant="primary">Salvar alterações</Button>
      </div>
      <div style={{ width: "fit-content" }}>
        <Button variant="secondary">Cancelar</Button>
      </div>
    </div>
  ),
};

/**
 * Rodapé de modal com ação de confirmação e cancelamento.
 * Demonstra o uso do Button em composição com outros elementos.
 */
export const ModalFooter: Story = {
  name: "Contexto real — rodapé de modal",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: "400px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  render: () => (
    <Modal
      hideModal={() => {}}
      isOpen
      dismissible={true}
      footer={
        <FooterModal>
          <div
            style={{
              width: "fit-content",
              display: "flex",
              gap: "var(--s-spacing-xx-small)",
            }}
          >
            <Button variant="warning">Excluir</Button>
            <Button variant="secondary">Cancelar</Button>
          </div>
        </FooterModal>
      }
      title="Excluir registro"
      description="Esta ação não pode ser desfeita. Tem certeza que deseja continuar?"
    />
  ),
};

/**
 * Toolbar compacta com botões sm e ícones.
 * Demonstra o uso do tamanho `sm` em contextos de alta densidade.
 */
export const CompactToolbar: Story = {
  name: "Contexto real — toolbar compacta",
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "var(--s-spacing-xx-small)",
        padding: "var(--s-spacing-xx-small) var(--s-spacing-x-small)",
        background: "var(--s-color-fill-default)",
        borderRadius: "var(--s-border-radius-medium)",
        border:
          "var(--s-border-width-hairline) solid var(--s-color-border-default)",
        width: "fit-content",
      }}
    >
      <div style={{ width: "fit-content" }}>
        <Button size="sm" variant="primary" icon="add">
          Novo
        </Button>
      </div>
      <div style={{ width: "fit-content" }}>
        <Button size="sm" variant="secondary" icon="download">
          Exportar
        </Button>
      </div>
      <div style={{ width: "fit-content" }}>
        <Button size="sm" variant="secondary" icon="filter_list">
          Filtros
        </Button>
      </div>
    </div>
  ),
};
