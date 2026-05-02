import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Link } from "./index";
import "../../styles.scss";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
O **Link** é um elemento âncora estilizado que estende o \`<a>\` nativo com
um estado visual de desabilitado e um tipo restrito para \`target\`.

Todos os atributos HTML padrão do \`<a>\` (\`href\`, \`rel\`, \`aria-label\`, etc.)
são repassados ao elemento subjacente via rest spread.

> ⚠️ **Acessibilidade:** elementos \`<a>\` nativos não suportam o atributo \`disabled\`.
> A prop \`disabled\` aplica apenas estilo visual via CSS — **não bloqueia a navegação**.
> Para bloquear completamente, combine com \`onClick={(e) => e.preventDefault()}\`.

### Quando usar
- Navegação para URLs internas ou externas
- Links inline dentro de parágrafos ou descrições
- Links de ação que abrem conteúdo em nova aba

### Boas práticas
- Forneça um label descritivo em \`children\` — evite textos genéricos como "clique aqui"
- Use \`target="_blank"\` com \`rel="noreferrer"\` em links externos (segurança)
- Para desabilitar completamente: \`disabled\` + \`onClick={(e) => e.preventDefault()}\`
        `,
      },
    },
     design: {
       type: 'figma',
      url: 'https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10077',
    },
  },
  argTypes: {
    href: {
      control: "text",
      description: "URL de destino. Repassado diretamente ao atributo `href` do `<a>` nativo.",
      table: { type: { summary: "string" } },
    },
    target: {
      control: "select",
      options: ["_self", "_blank", "_parent", "_top"],
      description: "Contexto de navegação para a URL vinculada.",
      table: {
        defaultValue: { summary: '"_self"' },
        type: { summary: '"_self" | "_blank" | "_parent" | "_top"' },
      },
    },
    disabled: {
      control: "boolean",
      description:
        "Aplica estilo visual de desabilitado. Não bloqueia a navegação nativamente — combine com `onClick={(e) => e.preventDefault()}` para bloquear por completo.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    children: {
      control: "text",
      description: "Label ou conteúdo do link. Aceita qualquer `ReactNode`.",
      table: { type: { summary: "React.ReactNode" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Link padrão com href e label descritivo.
 * Use os Controls para explorar todas as props disponíveis.
 */
export const Default: Story = {
  name: "Default",
  args: {
    href: "https://example.com",
    children: "Visitar example.com",
  },
};

// ─── 2. Estados ───────────────────────────────────────────────────────────────

/**
 * Estado desabilitado — estilo visual inativo via prop `disabled`.
 * A navegação é bloqueada aqui também via `onClick={(e) => e.preventDefault()}`.
 * Em produção, sempre combine os dois para garantir o bloqueio completo.
 */
export const Disabled: Story = {
  name: "Estado — desabilitado",
  args: {
    href: "/configuracoes",
    disabled: true,
    onClick: (e) => e.preventDefault(),
    children: "Configurações (indisponível)",
  },
};

// ─── 3. Variações ─────────────────────────────────────────────────────────────

/**
 * Abre em nova aba com `target="_blank"` e `rel="noreferrer"`.
 * O atributo `rel="noreferrer"` impede que a nova página acesse `window.opener`
 * — boa prática de segurança para links externos.
 */
export const NewTab: Story = {
  name: "Nova aba (target _blank)",
  args: {
    href: "https://example.com",
    target: "_blank",
    rel: "noreferrer",
    children: "Abrir em nova aba",
  },
};

// ─── 4. Contexto real ─────────────────────────────────────────────────────────

/**
 * Links inline dentro de um parágrafo de texto.
 * Demonstra o fluxo natural do link dentro do corpo de texto.
 */
export const InlineParagraph: Story = {
  name: "Contexto real — inline em parágrafo",
  render: () => (
    <p style={{ font: "var(--s-typography-paragraph-regular)" }}>
      Ao continuar, você concorda com os nossos{" "}
      <Link href="/termos">Termos de Uso</Link> e com a nossa{" "}
      <Link href="/privacidade">Política de Privacidade</Link>.
    </p>
  ),
};

/**
 * Link externo inline numa descrição de configuração.
 * Demonstra o uso com `target="_blank"` em contexto de documentação ou ajuda.
 */
export const InlineHelp: Story = {
  name: "Contexto real — inline em texto de ajuda",
  render: () => (
    <p style={{ font: "var(--s-typography-paragraph-regular)" }}>
      Não sabe como configurar sua integração?{" "}
      <Link href="https://docs.example.com" target="_blank" rel="noreferrer">
        Consulte a documentação
      </Link>{" "}
      para um guia passo a passo.
    </p>
  ),
};

// ─── 5. Edge cases ────────────────────────────────────────────────────────────

/**
 * Link sem `href` — renderiza como âncora sem destino.
 * Útil para links acionados programaticamente via `onClick`.
 */
export const NoHref: Story = {
  name: "Edge case — sem href",
  args: {
    onClick: (e) => e.preventDefault(),
    children: "Ação via onClick",
  },
};

/**
 * Label longo — valida o comportamento de quebra de linha e
 * o padding horizontal em textos que excedem uma linha.
 */
export const LongLabel: Story = {
  name: "Edge case — label longo",
  args: {
    href: "/relatorio",
    children: "Baixar relatório completo de vendas do terceiro trimestre de 2025",
  },
};