import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Notification from "./Notification";
import { NotificationContainer } from "./subcomponents/NotificationContainer";
import type { NotificationEntry, NotificationVariant } from "./Notification.types";
import { Button } from "../Button";
import "../../styles.scss";

const meta: Meta<typeof Notification> = {
  title: "Components/Notification",
  component: Notification,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
O **Notification** exibe uma mensagem contextual com ícone, título, descrição opcional,
ação opcional e botão de fechar.

Suporta dois modos de exibição:

| type       | comportamento                                                                     |
|------------|-----------------------------------------------------------------------------------|
| \`"inline"\` | Renderiza no fluxo do documento — sem container necessário                        |
| \`"float"\`  | Toast sobreposto — **sempre use dentro de \`<NotificationContainer>\`**            |

### Float — sempre use NotificationContainer
O \`NotificationContainer\` é um portal fixo que gerencia empilhamento,
animações de entrada/saída e reordenação suave quando um toast é dispensado.

\`\`\`tsx
const [toasts, setToasts] = useState<NotificationEntry[]>([]);

const adicionar = () =>
  setToasts((prev) => [...prev, { id: crypto.randomUUID(), variant: "success", ... }]);

const remover = (id: string) =>
  setToasts((prev) => prev.filter((t) => t.id !== id));

<Button onClick={adicionar}>Notificar</Button>

<NotificationContainer
  notifications={toasts.map((t) => ({ ...t, onClose: () => remover(t.id) }))}
/>
\`\`\`

### Variantes
| variant      | ícone sugerido    | uso                                       |
|--------------|-------------------|-------------------------------------------|
| \`primary\`   | \`info\`           | Informações neutras, atualizações         |
| \`secondary\` | \`campaign\`       | Avisos de sistema, manutenção             |
| \`success\`   | \`check_circle\`   | Operação concluída com êxito              |
| \`warning\`   | \`warning\`        | Erros, expiração de sessão, atenção       |

### Dismissible vs auto-dismiss
- **\`dismissible: true\`** — exibe botão X; o toast permanece até ser fechado manualmente
- **\`dismissible: false\`** — sem botão X; o toast desaparece automaticamente após ~5s
        `,
      },
    },
     design: {
      type: 'figma',
     url: 'https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=942-8970',
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Texto do título exibido no cabeçalho colorido.",
      table: { type: { summary: "string" } },
    },
    description: {
      control: "text",
      description: "Texto descritivo exibido abaixo do cabeçalho. Opcional.",
      table: { type: { summary: "string" } },
    },
    icon: {
      control: "text",
      description: "Nome do ícone Material Symbol exibido no cabeçalho.",
      table: { type: { summary: "string" } },
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "warning", "success"] satisfies NotificationVariant[],
      description: "Intenção semântica de cor do cabeçalho.",
      table: { type: { summary: '"primary" | "secondary" | "warning" | "success"' } },
    },
    type: {
      control: "radio",
      options: ["float", "inline"],
      description:
        "`inline` = fluxo do documento. `float` = toast sobreposto (requer `NotificationContainer`).",
      table: { type: { summary: '"float" | "inline"' } },
    },
    isOpen: {
      control: "boolean",
      description: "Controla a visibilidade da notificação.",
      table: { defaultValue: { summary: "false" }, type: { summary: "boolean" } },
    },
    dismissible: {
      control: "boolean",
      description:
        "Exibe o botão de fechar. Quando `false`, o float desaparece automaticamente após ~5s.",
      table: { defaultValue: { summary: "false" }, type: { summary: "boolean" } },
    },
    withAction: {
      control: "boolean",
      description: "Exibe um botão de ação dentro do corpo da notificação.",
      table: { defaultValue: { summary: "false" }, type: { summary: "boolean" } },
    },
    buttonLabel: {
      control: "text",
      description: "Label do botão de ação. Requer `withAction: true`.",
      table: { type: { summary: "string" } },
    },
    disableButton: {
      control: "boolean",
      description: "Desativa o botão de ação.",
      table: { defaultValue: { summary: "false" }, type: { summary: "boolean" } },
    },
    onClose: {
      action: "onClose",
      description: "Callback disparado ao clicar no botão de fechar.",
      table: { type: { summary: "() => void" } },
    },
    onClickButton: {
      action: "onClickButton",
      description: "Callback disparado ao clicar no botão de ação.",
      table: { type: { summary: "() => void" } },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Notification>;

// ─── 1. Variantes inline ──────────────────────────────────────────────────────

/**
 * Notificação inline de sucesso — operação concluída com êxito.
 */
export const InlineSuccess: Story = {
  name: "Inline — success",
  args: {
    isOpen: true,
    type: "inline",
    variant: "success",
    icon: "check_circle",
    title: "Alterações salvas",
    description: "Seu perfil foi atualizado com sucesso.",
    dismissible: true,
  },
};

/**
 * Notificação inline de atenção — com botão de ação.
 * Use para alertas que requerem resposta do usuário, como sessão expirando.
 */
export const InlineWarning: Story = {
  name: "Inline — warning",
  args: {
    isOpen: true,
    type: "inline",
    variant: "warning",
    icon: "warning",
    title: "Sessão expirando",
    description: "Você será desconectado em 5 minutos.",
    withAction: true,
    buttonLabel: "Manter sessão",
    dismissible: true,
  },
};

/**
 * Notificação inline primária — informações neutras ou atualizações disponíveis.
 */
export const InlinePrimary: Story = {
  name: "Inline — primary",
  args: {
    isOpen: true,
    type: "inline",
    variant: "primary",
    icon: "info",
    title: "Atualização disponível",
    description: "Uma nova versão está pronta para instalação.",
    dismissible: true,
  },
};

/**
 * Notificação inline secundária — avisos de sistema como manutenção programada.
 */
export const InlineSecondary: Story = {
  name: "Inline — secondary",
  args: {
    isOpen: true,
    type: "inline",
    variant: "secondary",
    icon: "campaign",
    title: "Manutenção programada",
    description: "Sistema indisponível domingo das 02:00 às 04:00 UTC.",
    dismissible: true,
  },
};

// ─── 2. Matriz inline ─────────────────────────────────────────────────────────

const inlineVariants: { variant: NotificationVariant; icon: string; title: string; description: string }[] = [
  { variant: "primary", icon: "info", title: "Informação", description: "Texto de suporte informativo." },
  { variant: "secondary", icon: "campaign", title: "Aviso de sistema", description: "Texto de suporte secundário." },
  { variant: "warning", icon: "warning", title: "Atenção necessária", description: "Texto de suporte de alerta." },
  { variant: "success", icon: "check_circle", title: "Operação concluída", description: "Texto de suporte de sucesso." },
];

const InlineVariantItem = ({ variant, icon, title, description }: typeof inlineVariants[0]) => (
  <Notification
    isOpen
    type="inline"
    variant={variant}
    icon={icon}
    title={title}
    description={description}
    dismissible
  />
);

/**
 * Todas as variantes inline empilhadas para validação visual rápida de tokens e tema.
 */
export const AllInlineVariants: Story = {
  name: "Inline — todas as variantes",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)" }}>
      {inlineVariants.map((v) => (
        <InlineVariantItem key={v.variant} {...v} />
      ))}
    </div>
  ),
};

// ─── 3. Float — toast ─────────────────────────────────────────────────────────

const TEMPLATES: Omit<NotificationEntry, "id">[] = [
  { variant: "success", icon: "check_circle", title: "Arquivo enviado", description: "relatorio_q3.pdf foi salvo.", dismissible: true },
  { variant: "warning", icon: "warning", title: "Erro de validação", description: "Revise os campos destacados.", dismissible: true },
  { variant: "primary", icon: "info", title: "Atualização disponível", description: "Nova versão pronta para instalar.", dismissible: true },
  { variant: "secondary", icon: "campaign", title: "Manutenção hoje", description: "Sistema indisponível 02:00–04:00 UTC.", dismissible: true },
  { variant: "success", icon: "cloud_done", title: "Sincronização completa", description: "Todas as alterações foram salvas.", dismissible: true },
  { variant: "warning", icon: "schedule", title: "Prazo se aproximando", description: "Tarefa vence em 30 minutos.", dismissible: true },
  { variant: "primary", icon: "person_add", title: "Novo membro", description: "Ana entrou no seu workspace.", dismissible: true },
  { variant: "success", icon: "payment", title: "Pagamento recebido", description: "Fatura #1042 foi paga.", dismissible: true },
];

/**
 * Toast único dispensável — entra com animação de mola e permanece até ser fechado.
 * Use o botão para disparar o toast.
 */
export const FloatSingle: Story = {
  name: "Float — toast único (dismissível)",
  render: () => {
    const [toasts, setToasts] = useState<NotificationEntry[]>([]);
    const remover = (id: string) => setToasts((p) => p.filter((t) => t.id !== id));
    return (
      <>
        <div style={{ width: "fit-content" }}>
          <Button
            variant="primary"
            onClick={() => setToasts((p) => [...p, { ...TEMPLATES[0], id: crypto.randomUUID() }])}
          >
            Exibir toast
          </Button>
        </div>
        <NotificationContainer
          notifications={toasts.map((t) => ({ ...t, onClose: () => remover(t.id) }))}
        />
      </>
    );
  },
};

/**
 * Auto-dismiss — `dismissible: false`.
 * O toast aparece sem botão de fechar e desaparece automaticamente após ~5s.
 */
export const FloatAutoDismiss: Story = {
  name: "Float — auto-dismiss (5s)",
  render: () => {
    const [toasts, setToasts] = useState<NotificationEntry[]>([]);
    const remover = (id: string) => setToasts((p) => p.filter((t) => t.id !== id));
    return (
      <>
        <div style={{ width: "fit-content" }}>
          <Button
            variant="primary"
            onClick={() =>
              setToasts((p) => [
                ...p,
                {
                  id: crypto.randomUUID(),
                  variant: "primary",
                  icon: "sync",
                  title: "Sincronizando dados",
                  description: "Este toast desaparece automaticamente.",
                  dismissible: false,
                },
              ])
            }
          >
            Disparar auto-dismiss
          </Button>
        </div>
        <NotificationContainer
          notifications={toasts.map((t) => ({ ...t, onClose: () => remover(t.id) }))}
        />
      </>
    );
  },
};

/**
 * Stack de toasts com reordenação suave.
 * Adicione múltiplos toasts e dispense qualquer um — os restantes colapsam
 * suavemente para preencher o espaço liberado via animação `max-height` + `transform`.
 */
export const FloatStacked: Story = {
  name: "Float — stack com reordenação",
  render: () => {
    const [toasts, setToasts] = useState<NotificationEntry[]>([]);
    const remover = (id: string) => setToasts((p) => p.filter((t) => t.id !== id));
    const adicionarAleatorio = () => {
      const t = TEMPLATES[Math.floor(Math.random() * TEMPLATES.length)];
      setToasts((p) => [...p, { ...t, id: crypto.randomUUID() }]);
    };
    const adicionarTodos = () =>
      setToasts(TEMPLATES.map((t) => ({ ...t, id: crypto.randomUUID() })));

    return (
      <>
        <div style={{ display: "flex", gap: "var(--s-spacing-xx-small)", flexWrap: "wrap" }}>
          <div style={{ width: "fit-content" }}>
            <Button variant="primary" onClick={adicionarAleatorio}>
              Adicionar aleatório
            </Button>
          </div>
          <div style={{ width: "fit-content" }}>
            <Button variant="secondary" onClick={adicionarTodos}>
              Adicionar todos (8)
            </Button>
          </div>
          <div style={{ width: "fit-content" }}>
            <Button variant="secondary" onClick={() => setToasts([])}>
              Limpar todos
            </Button>
          </div>
        </div>
        <small style={{ display: "block", paddingTop: "var(--s-spacing-nano)" }}>
          Adicione todos e dispense o 5º — os demais colapsam suavemente.
        </small>
        <NotificationContainer
          notifications={toasts.map((t) => ({ ...t, onClose: () => remover(t.id) }))}
        />
      </>
    );
  },
};