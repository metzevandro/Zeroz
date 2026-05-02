import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Savebar from "./Savebar";
import "../../styles.scss";

const meta: Meta<typeof Savebar> = {
  title: "Components/Savebar",
  component: Savebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
O **Savebar** é uma barra de ação persistente usada para confirmar ou descartar alterações não salvas.

Renderiza em largura total com o texto descritivo à esquerda e os botões de ação à direita.
Em viewports \`≤ 768px\` o padding lateral é ajustado automaticamente.

### Quando usar
- Sempre que o usuário realizar alterações em um formulário ou configuração ainda não persistidas
- Posicione no topo da área de edição, abaixo do \`<Header>\`, para máxima visibilidade

### Quando não usar
- Para confirmações pontuais de uma única ação — prefira um \`Modal\` de confirmação
- Quando as alterações são salvas automaticamente — o Savebar não é necessário

### Boas práticas
- Exiba o Savebar **somente** quando há alterações pendentes — oculte-o após salvar ou cancelar
- Mantenha o \`label\` curto e direto: "Você possui alterações não salvas"
- Use \`labelSave\` orientado à ação: "Salvar", "Salvar alterações"
- Use \`labelCancel\` orientado ao desfazimento: "Cancelar", "Descartar"
        `,
      },
    },
     design: {
      type: 'figma',
       url: 'https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10078',
     },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Texto descritivo exibido à esquerda da barra.",
      table: { type: { summary: "string" } },
    },
    labelSave: {
      control: "text",
      description: "Rótulo do botão de salvar.",
      table: { type: { summary: "string" } },
    },
    labelCancel: {
      control: "text",
      description: "Rótulo do botão de cancelar/descartar.",
      table: { type: { summary: "string" } },
    },
    onClickSave: {
      action: "onClickSave",
      description: "Callback disparado ao clicar em salvar. Recebe o `MouseEvent`.",
      table: { type: { summary: "(e: React.MouseEvent) => void" } },
    },
    onClickCancel: {
      action: "onClickCancel",
      description: "Callback disparado ao clicar em cancelar.",
      table: { type: { summary: "() => void" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Savebar>;

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Estado base da barra com label e botões padrão.
 * Use os Controls para explorar variações de texto.
 */
export const Default: Story = {
  name: "Default",
  args: {
    label: "Você possui alterações não salvas",
    labelSave: "Salvar",
    labelCancel: "Cancelar",
  },
};

// ─── 2. Variações de label ────────────────────────────────────────────────────

/**
 * Label longo — valida o comportamento de layout quando o texto descritivo
 * excede o espaço disponível antes dos botões.
 */
export const LongLabel: Story = {
  name: "Label longo",
  args: {
    label: "Existem alterações pendentes que ainda não foram salvas no servidor",
    labelSave: "Salvar alterações",
    labelCancel: "Descartar",
  },
};

// ─── 3. Mobile ────────────────────────────────────────────────────────────────

/**
 * Layout mobile (≤ 768px) — padding lateral reduzido automaticamente.
 * Valida que label e botões continuam visíveis e alinhados em viewports estreitos.
 */
export const MobileLayout: Story = {
  name: "Layout mobile (≤ 768px)",
  globals: {
    viewport: { value: "mobile5", isRotated: false },
  },
  args: {
    label: "Alterações não salvas",
    labelSave: "Salvar",
    labelCancel: "Cancelar",
  },
};

// ─── 4. Interativo ────────────────────────────────────────────────────────────

/**
 * Comportamento real — o Savebar aparece somente quando há alterações pendentes
 * e desaparece ao salvar ou cancelar.
 * Edite o campo e observe a barra aparecer. Salve ou descarte para ocultá-la.
 */
export const Interactive: Story = {
  name: "Interativo — aparece com alterações pendentes",
  render: () => {
    const [saved, setSaved] = useState("Texto salvo");
    const [draft, setDraft] = useState("Texto salvo");
    const isDirty = draft !== saved;

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {isDirty && (
          <Savebar
            label="Você possui alterações não salvas"
            labelSave="Salvar"
            labelCancel="Cancelar"
            onClickSave={() => setSaved(draft)}
            onClickCancel={() => setDraft(saved)}
          />
        )}
        <div style={{ padding: "var(--s-spacing-medium)", display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)" }}>
          <small><strong>Descrição</strong></small>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={4}
            style={{
              padding: "var(--s-spacing-xx-small) var(--s-spacing-x-small)",
              border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
              borderRadius: "var(--s-border-radius-medium)",
              background: "var(--s-color-fill-default)",
              font: "var(--s-typography-paragraph-regular)",
              color: "var(--s-color-content-default)",
              resize: "vertical",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
          {isDirty && (
            <small style={{ color: "var(--s-color-content-light)" }}>
              Alterações não salvas
            </small>
          )}
          {!isDirty && (
            <small style={{ color: "var(--s-color-content-light)" }}>
              ✓ Tudo salvo
            </small>
          )}
        </div>
      </div>
    );
  },
};
