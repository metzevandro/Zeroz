import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Modal, ContentModal, FooterModal } from "./index";
import { Button } from "../Button";
import "../../styles.scss";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
O **Modal** é um diálogo de overlay com header, corpo e rodapé opcionais.

Use os subcomponentes slot para garantir layout interno consistente:

| Subcomponente   | Descrição                                               |
|-----------------|---------------------------------------------------------|
| \`ContentModal\` | Envolve o conteúdo do corpo com padding padrão          |
| \`FooterModal\`  | Envolve os botões de ação no rodapé                     |

Quando \`dismissible\` é \`true\`, um botão de fechar aparece no header
e clicar no overlay também dispara \`hideModal\`.

> O Modal é **stateless** — o controle de visibilidade é sempre externo
> via \`isOpen\` + \`hideModal\`.

### Quando usar
- Confirmar ações destrutivas (excluir, descartar)
- Coletar input sem sair do contexto atual
- Exibir informações que exigem reconhecimento do usuário

### Quando não usar
- Para ações não destrutivas que podem ser feitas inline — prefira \`Aside\`
- Para notificações passivas — prefira um toast ou alerta inline

### Boas práticas
- Forneça um \`title\` claro e uma \`description\` concisa
- Use \`dismissible\` para modais informativos; omita para confirmações obrigatórias
- Limite o rodapé a 2 ações — ação primária à esquerda, cancelar à direita
- Nunca aninhe modais
        `,
      },
    },
     design: {
     type: 'figma',
     url: 'https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10081',
     },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Título exibido no header do modal.",
      table: { type: { summary: "string" } },
    },
    description: {
      control: "text",
      description: "Texto de suporte exibido abaixo do título.",
      table: { type: { summary: "string" } },
    },
    dismissible: {
      control: "boolean",
      description:
        "Exibe o botão de fechar e permite clicar no overlay para fechar o modal.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    isOpen: {
      control: "boolean",
      description: "Controla a visibilidade do modal.",
      table: { type: { summary: "boolean" } },
    },
    hideModal: {
      action: "hideModal",
      description: "Callback disparado quando o modal deve fechar.",
      table: { type: { summary: "() => void" } },
    },
    content: {
      control: false,
      description: "Corpo do modal — use `<ContentModal>` para padding consistente.",
      table: { type: { summary: "React.ReactNode" } },
    },
    footer: {
      control: false,
      description: "Rodapé do modal — use `<FooterModal>` para layout consistente.",
      table: { type: { summary: "React.ReactNode" } },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "160px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Modal>;

// ─── Helper: wrapper com trigger ─────────────────────────────────────────────

const ModalDemo = ({
  label = "Abrir modal",
  ...props
}: Omit<React.ComponentProps<typeof Modal>, "isOpen" | "hideModal"> & {
  label?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div style={{ width: "fit-content" }}>
        <Button variant="primary" size="md" onClick={() => setIsOpen(true)}>
          {label}
        </Button>
      </div>
      <Modal {...props} isOpen={isOpen} hideModal={() => setIsOpen(false)} />
    </>
  );
};

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Modal dispensável com conteúdo e ações no rodapé.
 * Clique no botão para abrir — feche pelo X, pelo overlay ou por "Cancelar".
 */
export const Default: Story = {
  name: "Default",
  render: () => (
    <ModalDemo
      title="Confirmar exclusão"
      description="Esta ação é permanente e não pode ser desfeita."
      dismissible
      content={
        <ContentModal>
          <p>
            Tem certeza que deseja excluir o <strong>Projeto Alpha</strong>?
          </p>
        </ContentModal>
      }
      footer={
        <FooterModal>
          <div style={{ width: "fit-content" }}>
            <Button variant="secondary" size="md">
              Cancelar
            </Button>
          </div>
          <div style={{ width: "fit-content" }}>
            <Button variant="warning" size="md">
              Excluir
            </Button>
          </div>
        </FooterModal>
      }
    />
  ),
};

// ─── 2. Variações de dismissible ──────────────────────────────────────────────

/**
 * Modal dispensável — `dismissible: true`.
 * O botão X é visível e clicar no overlay fecha o modal.
 * Use para modais informativos onde fechar é sempre permitido.
 */
export const Dismissible: Story = {
  name: "Dismissible — pode fechar",
  render: () => (
    <ModalDemo
      label="Abrir (dispensável)"
      title="Atalhos de teclado"
      description="Use estes atalhos para navegar mais rápido."
      dismissible
      content={
        <ContentModal>
          <ul style={{ paddingLeft: "var(--s-spacing-medium)", display: "flex", flexDirection: "column", gap: "var(--s-spacing-nano)" }}>
            <li><small><kbd>⌘ K</kbd> — Abrir paleta de comandos</small></li>
            <li><small><kbd>⌘ /</kbd> — Alternar sidebar</small></li>
            <li><small><kbd>Esc</kbd> — Fechar modal</small></li>
          </ul>
        </ContentModal>
      }
    />
  ),
};

/**
 * Modal não-dispensável — `dismissible: false` (padrão).
 * O botão X está oculto e clicar no overlay não fecha o modal.
 * Use para confirmações obrigatórias que exigem uma ação explícita.
 */
export const NonDismissible: Story = {
  name: "Dismissible — não pode fechar",
  render: () => (
    <ModalDemo
      label="Abrir (não dispensável)"
      title="Sessão expirada"
      description="Sua sessão expirou. Faça login novamente para continuar."
      footer={
        <FooterModal>
          <div style={{ width: "fit-content" }}>
            <Button variant="primary" size="md">
              Fazer login
            </Button>
          </div>
        </FooterModal>
      }
    />
  ),
};

// ─── 3. Variações de composição ───────────────────────────────────────────────

/**
 * Modal somente com header — título e descrição, sem corpo nem rodapé.
 * Adequado para avisos breves que não requerem ação específica.
 */
export const HeaderOnly: Story = {
  name: "Composição — somente header",
  render: () => (
    <ModalDemo
      title="Manutenção programada"
      description="O sistema estará indisponível no domingo das 02:00 às 04:00 UTC."
      dismissible
      footer={
        <FooterModal>
          <div style={{ width: "fit-content" }}>
            <Button variant="primary" size="md">
              Entendido
            </Button>
          </div>
        </FooterModal>
      }
    />
  ),
};

/**
 * Modal sem rodapé — apenas header e corpo.
 * Use para conteúdo informativo onde nenhuma ação é necessária.
 */
export const NoFooter: Story = {
  name: "Composição — sem rodapé",
  render: () => (
    <ModalDemo
      title="Atalhos de teclado"
      description="Use estes atalhos para navegar mais rápido."
      dismissible
      content={
        <ContentModal>
          <ul style={{ paddingLeft: "var(--s-spacing-medium)", display: "flex", flexDirection: "column", gap: "var(--s-spacing-nano)" }}>
            <li><small><kbd>⌘ K</kbd> — Abrir paleta de comandos</small></li>
            <li><small><kbd>⌘ /</kbd> — Alternar sidebar</small></li>
            <li><small><kbd>Esc</kbd> — Fechar modal</small></li>
          </ul>
        </ContentModal>
      }
    />
  ),
};

/**
 * Modal com ação única no rodapé.
 * Use quando há apenas uma resposta possível (ex: "Entendido", "Ok").
 */
export const SingleAction: Story = {
  name: "Composição — ação única",
  render: () => (
    <ModalDemo
      title="Importação concluída"
      description="428 registros foram importados com sucesso."
      dismissible
      footer={
        <FooterModal>
          <div style={{ width: "fit-content" }}>
            <Button variant="primary" size="md">
              Entendido
            </Button>
          </div>
        </FooterModal>
      }
    />
  ),
};

// ─── 4. Contexto real ─────────────────────────────────────────────────────────

/**
 * Modal de confirmação de exclusão — padrão mais comum para ações destrutivas.
 * `dismissible: false` força uma escolha explícita: cancelar ou confirmar.
 */
export const DeleteConfirmation: Story = {
  name: "Contexto real — confirmação de exclusão",
  render: () => (
    <ModalDemo
      label="Excluir registro"
      title="Excluir registro"
      description="Esta ação não pode ser desfeita. O registro será removido permanentemente."
      content={
        <ContentModal>
          <p>
            Tem certeza que deseja excluir <strong>Jane Doe</strong>?
            Todos os dados associados também serão removidos.
          </p>
        </ContentModal>
      }
      footer={
        <FooterModal>
          <div style={{ width: "fit-content" }}>
            <Button variant="secondary" size="md">
              Cancelar
            </Button>
          </div>
          <div style={{ width: "fit-content" }}>
            <Button variant="warning" size="md">
              Excluir permanentemente
            </Button>
          </div>
        </FooterModal>
      }
    />
  ),
};

/**
 * Modal de formulário inline — coleta dados sem sair do contexto atual.
 * `dismissible: true` permite fechar sem salvar.
 */
export const FormModal: Story = {
  name: "Contexto real — formulário inline",
  render: () => (
    <ModalDemo
      label="Novo usuário"
      title="Novo usuário"
      description="Preencha as informações para adicionar um novo membro."
      dismissible
      content={
        <ContentModal>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)" }}>
            {[
              { label: "Nome completo", placeholder: "Ex: Jane Doe" },
              { label: "E-mail", placeholder: "Ex: jane@exemplo.com" },
              { label: "Cargo", placeholder: "Ex: Product Designer" },
            ].map(({ label, placeholder }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-nano)" }}>
                <small><strong>{label}</strong></small>
                <input
                  placeholder={placeholder}
                  style={{
                    padding: "var(--s-spacing-xx-small) var(--s-spacing-x-small)",
                    border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
                    borderRadius: "var(--s-border-radius-medium)",
                    background: "var(--s-color-fill-default)",
                    font: "var(--s-typography-paragraph-regular)",
                    color: "var(--s-color-content-default)",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            ))}
          </div>
        </ContentModal>
      }
      footer={
        <FooterModal>
          <div style={{ width: "fit-content" }}>
            <Button variant="secondary" size="md">
              Cancelar
            </Button>
          </div>
          <div style={{ width: "fit-content" }}>
            <Button variant="primary" size="md">
              Criar usuário
            </Button>
          </div>
        </FooterModal>
      }
    />
  ),
};