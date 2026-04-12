import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { EmptyState } from "./index";
import { Button } from "../Button";
import "../../styles.scss";

const meta: Meta<typeof EmptyState> = {
  title: "Templates/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
O **EmptyState** comunica que uma seção não tem conteúdo a exibir,
orientando o usuário para uma próxima ação relevante.

A prop \`actions\` aceita qualquer \`ReactNode\`, dando controle total
sobre quais botões, links ou elementos customizados aparecem no rodapé.

### Quando usar
- Uma lista, tabela ou feed não tem itens a exibir
- Uma busca ou filtro retorna zero resultados
- Uma funcionalidade ainda não foi configurada
- Ocorreu um erro ao carregar dados e o usuário pode tentar novamente

### Quando não usar
- Como substituto de estado de loading — use skeleton ou spinner
- Quando há conteúdo parcial a exibir — reserve para ausência total de dados

### Boas práticas
- Use um \`title\` descritivo que deixe claro o que está faltando
- Use \`description\` para explicar o porquê e/ou o que o usuário pode fazer
- Limite \`actions\` a 1–2 botões — evite sobrecarregar com muitas opções
- Use um ícone contextualmente relevante (\`"inbox"\` para caixa vazia, \`"search_off"\` para sem resultados)
- Omita \`actions\` quando não houver ação significativa disponível
        `,
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=2416-4558",
    },
  },
  argTypes: {
    icon: {
      control: "text",
      description:
        "Nome do ícone Material Symbol exibido no topo do componente.",
      table: { type: { summary: "string" } },
    },
    title: {
      control: "text",
      description:
        "Título principal descrevendo o estado vazio. Renderizado como `<h3>`.",
      table: { type: { summary: "string" } },
    },
    description: {
      control: "text",
      description:
        "Texto de suporte com contexto ou dica de ação. Renderizado como `<p>`.",
      table: { type: { summary: "string" } },
    },
    actions: {
      control: false,
      description:
        "Conteúdo do rodapé — tipicamente `<Button>`. Quando omitido, o rodapé não é renderizado.",
      table: { type: { summary: "React.ReactNode" } },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px", width: "100%" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Estado base com ícone, título, descrição e uma ação primária.
 * Ponto de entrada recomendado para inspecionar o componente via Controls.
 */
export const Default: Story = {
  name: "Default",
  args: {
    icon: "folder_open",
    title: "Nenhum projeto ainda",
    description: "Crie seu primeiro projeto para começar.",
    actions: (
      <div style={{ width: "fit-content" }}>
        <Button variant="primary" size="md">
          Novo projeto
        </Button>
      </div>
    ),
  },
};

// ─── 2. Variações de ações ────────────────────────────────────────────────────

/**
 * Ação única — padrão mais comum.
 * Use quando há uma única próxima ação clara para o usuário.
 */
export const SingleAction: Story = {
  name: "Ações — ação única",
  args: {
    icon: "add_circle",
    title: "Nenhum membro no time",
    description: "Convide pessoas para colaborar neste workspace.",
    actions: (
      <div style={{ width: "fit-content" }}>
        <Button variant="primary" size="md">
          Convidar membro
        </Button>
      </div>
    ),
  },
};

/**
 * Duas ações — primária e secundária.
 * Use quando há duas opções igualmente válidas para o usuário.
 * Limite a no máximo duas ações para não sobrecarregar.
 */
export const TwoActions: Story = {
  name: "Ações — primária + secundária",
  args: {
    icon: "inbox",
    title: "Caixa de entrada vazia",
    description:
      "Você não tem mensagens. Inicie uma conversa ou aguarde respostas.",
    actions: (
      <>
        <div style={{ width: "fit-content" }}>
          <Button variant="primary" size="md">
            Escrever mensagem
          </Button>
        </div>
        <div style={{ width: "fit-content" }}>
          <Button variant="secondary" size="md">
            Atualizar
          </Button>
        </div>
      </>
    ),
  },
};

/**
 * Sem ações — apenas informativo.
 * Use quando não há nenhuma ação significativa disponível para o usuário.
 * O rodapé não é renderizado quando `actions` é omitido.
 */
export const NoActions: Story = {
  name: "Ações — sem ações",
  args: {
    icon: "search_off",
    title: "Nenhum resultado encontrado",
    description: "Tente ajustar os termos de busca ou os filtros aplicados.",
  },
};

// ─── 3. Contexto real ─────────────────────────────────────────────────────────

/**
 * Busca sem resultados — o ícone e o texto orientam o usuário a ajustar
 * os filtros ou limpar a busca.
 */
export const SearchEmpty: Story = {
  name: "Contexto real — busca sem resultados",
  args: {
    icon: "manage_search",
    title: "Nenhuma correspondência",
    description: "Não encontramos nada com os filtros atuais.",
    actions: (
      <div style={{ width: "fit-content" }}>
        <Button variant="secondary" size="md">
          Limpar filtros
        </Button>
      </div>
    ),
  },
};

/**
 * Tabela vazia — estado inicial antes de qualquer dado ser cadastrado.
 * Padrão comum em listagens de produtos, clientes, pedidos, etc.
 */
export const EmptyTable: Story = {
  name: "Contexto real — tabela vazia",
  args: {
    icon: "table_rows",
    title: "Nenhum registro cadastrado",
    description:
      "Adicione o primeiro registro para começar a visualizar os dados.",
    actions: (
      <div style={{ width: "fit-content" }}>
        <Button variant="primary" size="md">
          Adicionar registro
        </Button>
      </div>
    ),
  },
};

/**
 * Erro ao carregar — falha na requisição com opção de tentar novamente.
 * Use `icon="cloud_off"` ou `"error"` para indicar visualmente a falha.
 */
export const LoadError: Story = {
  name: "Contexto real — erro ao carregar",
  args: {
    icon: "cloud_off",
    title: "Falha ao carregar",
    description:
      "Ocorreu um erro ao buscar os dados. Verifique sua conexão e tente novamente.",
    actions: (
      <div style={{ width: "fit-content" }}>
        <Button variant="primary" size="md">
          Tentar novamente
        </Button>
      </div>
    ),
  },
};

/**
 * Funcionalidade não configurada — estado inicial de onboarding.
 * Comum em módulos que dependem de configuração prévia pelo usuário.
 */
export const NotConfigured: Story = {
  name: "Contexto real — não configurado",
  args: {
    icon: "settings_suggest",
    title: "Integração não configurada",
    description:
      "Configure a integração para começar a sincronizar seus dados automaticamente.",
    actions: (
      <>
        <div style={{ width: "fit-content" }}>
          <Button variant="primary" size="md">
            Configurar agora
          </Button>
        </div>
        <div style={{ width: "fit-content" }}>
          <Button variant="secondary" size="md">
            Ver documentação
          </Button>
        </div>
      </>
    ),
  },
};

// ─── 4. Edge cases ────────────────────────────────────────────────────────────

/**
 * Textos longos — valida o comportamento de quebra de linha no título
 * e na descrição quando o conteúdo excede o espaço disponível.
 */
export const LongContent: Story = {
  name: "Edge case — textos longos",
  args: {
    icon: "folder_off",
    title:
      "Nenhum documento encontrado nesta pasta ou nas subpastas relacionadas",
    description:
      "Os documentos que você procura podem ter sido movidos, excluídos ou você pode não ter permissão para acessá-los. Entre em contato com o administrador para mais informações.",
    actions: (
      <div style={{ width: "fit-content" }}>
        <Button variant="secondary" size="md">
          Voltar
        </Button>
      </div>
    ),
  },
};
