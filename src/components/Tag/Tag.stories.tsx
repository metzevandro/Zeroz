import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Tag from "./Tag";
import "../../styles.scss";
import {Button} from '../Button/index'

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1320-552",
    },
    docs: {
      description: {
        component: `
**Tag** é um rótulo compacto com botão de remoção opcional.

Quando \`onClose\` é fornecida, clicar no botão \`×\` dispara uma animação de saída
suave (fade + scale + colapso de largura em 200 ms) antes de remover o tag do DOM.
O callback \`onClose\` é executado **após** a animação terminar — não antes — evitando
saltos de layout no container pai.

### Quando usar
- Exibir filtros selecionados, categorias ou rótulos
- Mostrar itens removíveis em inputs de múltipla seleção
- Indicadores de status que podem ser descartados

### Quando **não** usar
- Elemento com ação de clique geral (navegar, acionar) → use \`Button\` ou \`Chip\`
- Indicador de status fixo com ícone semântico → use \`Badge\`
- Conteúdo longo (mais de 2–3 palavras) → pode ser truncado pelo \`max-width: 300px\`

### Boas práticas
- Mantenha \`content\` curto — uma ou duas palavras
- Use \`variant\` consistentemente com a semântica de cores do design system
- Omita \`onClose\` para tags estáticos, não descartáveis
        `,
      },
    },
  },
  argTypes: {
    content: {
      control: "text",
      description: "Texto exibido dentro do tag.",
      table: { type: { summary: "string" } },
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning"],
      description:
        "Variante visual que controla cor de fundo e de texto, seguindo a semântica do design system.",
      table: {
        type: {
          summary: '"primary" | "secondary" | "success" | "warning"',
        },
      },
    },
    onClose: {
      action: "onClose",
      description:
        "Disparado **após** a animação de saída (200 ms). Quando fornecida, renderiza o botão de fechar (×).",
      table: { type: { summary: "() => void" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Estado base do componente: tag primário descartável.
 * Clique no × para ver a animação de saída completa (fade + scale + colapso).
 */
export const Default: Story = {
  name: "Default",
  args: {
    content: "Design system",
    variant: "primary",
    onClose: () => {},
  },
};

// ─── 2. Variações principais ──────────────────────────────────────────────────

/**
 * Todas as variantes lado a lado — primária, secundária, sucesso e aviso.
 * Útil para validar contraste e identidade visual de cada variante.
 */
export const AllVariants: Story = {
  name: "All variants",
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Tag content="Primary" variant="primary" onClose={() => {}} />
      <Tag content="Secondary" variant="secondary" onClose={() => {}} />
      <Tag content="Success" variant="success" onClose={() => {}} />
      <Tag content="Warning" variant="warning" onClose={() => {}} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "As quatro variantes disponíveis. Use `primary` para destaque, `secondary` como neutro, `success` para itens concluídos e `warning` para itens que requerem atenção.",
      },
    },
  },
};

/**
 * Simulação de filtros ativos — cenário real de busca com múltiplos filtros aplicados.
 * Clicar em × remove o filtro e exibe uma mensagem ao esvaziar a lista.
 */
export const ActiveFilters: Story = {
  name: "Active filters (real-world scenario)",
  render: () => {
    const initial = [
      { id: 1, label: "Frontend", variant: "primary" as const },
      { id: 2, label: "São Paulo", variant: "secondary" as const },
      { id: 3, label: "Remoto", variant: "secondary" as const },
      { id: 4, label: "Pleno", variant: "primary" as const },
    ];
    const [filters, setFilters] = useState(initial);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <span style={{ fontSize: "12px", color: "gray" }}>
          Filtros ativos ({filters.length})
        </span>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {filters.length === 0 ? (
            <span style={{ fontSize: "12px", color: "gray" }}>
              Nenhum filtro ativo
            </span>
          ) : (
            filters.map((f) => (
              <Tag
                key={f.id}
                content={f.label}
                variant={f.variant}
                onClose={() =>
                  setFilters((prev) => prev.filter((x) => x.id !== f.id))
                }
              />
            ))
          )}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Cenário de filtros ativos em uma tela de busca. Demonstra o uso combinado de variantes `primary` e `secondary` em contexto real.",
      },
    },
  },
};

// ─── 4. Edge cases ────────────────────────────────────────────────────────────

/**
 * Conteúdo longo — valida o `max-width: 300px` e o `white-space: nowrap`.
 * Textos muito longos são cortados pelo container; confirme se isso é
 * o comportamento desejado ou se `text-overflow: ellipsis` deve ser adicionado.
 */
export const LongContent: Story = {
  name: "Long content (max-width edge case)",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Tag
        content="Texto curto"
        variant="primary"
        onClose={() => {}}
      />
      <Tag
        content="Texto médio para validar"
        variant="secondary"
        onClose={() => {}}
      />
      <Tag
        content="Texto bem longo que pode exceder o limite de max-width do componente"
        variant="warning"
        onClose={() => {}}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "O container tem `max-width: 300px` e `overflow: hidden`. Conteúdos muito longos são truncados — considere aplicar `text-overflow: ellipsis` se necessário.",
      },
    },
  },
};

/**
 * Animação de dismiss — demonstra o ciclo completo de saída.
 * O hook `useTagDismiss` executa: isClosing=true → 200ms → isDismissed=true → onClose().
 */
export const DismissAnimation: Story = {
  name: "Dismiss animation lifecycle",
  render: () => {
    const [visible, setVisible] = useState(true);
    const [log, setLog] = useState<string[]>([]);

    const addLog = (msg: string) =>
      setLog((prev) => [
        `${new Date().toLocaleTimeString("pt-BR")} — ${msg}`,
        ...prev.slice(0, 4),
      ]);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ minHeight: "32px" }}>
          {visible ? (
            <Tag
              content="Clique no × para animar"
              variant="primary"
              onClose={() => {
                addLog("onClose() disparado (após 200ms)");
                setVisible(false);
              }}
            />
          ) : (
            <Button
              style={{width: 'fit-content'}}
              size="sm"
              variant="secondary"
              onClick={() => {
                setVisible(true);
                addLog("Tag restaurado");
              }}
            >
              Restaurar tag
            </Button>
          )}
        </div>
        {log.length > 0 && (
          <div
            style={{
              fontSize: "11px",
              color: "gray",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {log.map((entry, i) => (
              <span key={i}>{entry}</span>
            ))}
          </div>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstra o ciclo de vida do dismiss: a animação ocorre primeiro, e `onClose` é chamado apenas após os 200 ms de transição. O log mostra o timestamp exato da chamada.",
      },
    },
  },
};