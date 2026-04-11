import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import { Button } from "../Button";
import Badge from "../Badge/Badge";
import Avatar from "../Avatar/Avatar";
import "../../styles.scss";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
O **Card** é uma superfície contida para agrupar conteúdo e ações relacionadas.

Implementado como **compound component** — a composição é feita via subcomponentes
passados como \`children\`, na ordem desejada.

### Subcomponentes
| Subcomponente   | Descrição                                                                 |
|-----------------|---------------------------------------------------------------------------|
| \`Card.Image\`    | Imagem de largura total no topo do card (máx. 288px de altura)            |
| \`Card.Header\`   | Título e descrição do card                                                |
| \`Card.Content\`  | Corpo principal — formulários, listas, texto, dados                       |
| \`Card.Footer\`   | Rodapé com fundo distinto — ações, botões ou metadados                    |

### Regras de composição
- **\`Card.Header\` e/ou **\`Card.Content\` é obrigatório** — é o mínimo aceitável; os demais slots são opcionais e complementares
- A ordem visual recomendada é: **Image → Header → Content → Footer**
- \`Card.Image\` e \`Card.Footer\` nunca devem ser usados sem \`Card.Header\` e/ou \`Card.Content\`
- Nunca passe slots como props — componha sempre via \`children\`
- O card ocupa 100% da largura do container pai — controle o tamanho pelo layout externo

### Quando usar
- Cards de produto, funcionalidade ou plano de preços
- Widgets de resumo em dashboards
- Cards de perfil ou entidade
- Painéis de configuração ou seleção de opção

### Quando não usar
- Para exibir uma única linha de dado — prefira um item de lista ou linha de tabela
- Como substituto de modal — se o conteúdo requer foco total, use \`Aside\` ou \`Modal\`
- Com muitos slots vazios — um card sem conteúdo significativo não agrega valor
        `,
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10014",
    },
  },
  argTypes: {
    children: {
      control: false,
      description:
        "Conteúdo do card. Componha usando os subcomponentes `Card.Image`, `Card.Header`, `Card.Content` e `Card.Footer`.",
      table: { type: { summary: "React.ReactNode" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

const PLACEHOLDER_IMAGE = "https://placehold.co/600x288";

// ─── 1. Playground ────────────────────────────────────────────────────────────

/**
 * Card completo com todos os subcomponentes ativos.
 * Ponto de entrada recomendado para inspecionar a composição do componente.
 */
export const Playground: Story = {
  name: "Playground",
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "300px" }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <Card>
      <Card.Image>
        <img src={PLACEHOLDER_IMAGE} alt="Imagem de exemplo" />
      </Card.Image>
      <Card.Header style={{ gap: "var(--s-spacing-xx-small)" }}>
        <h2>Título do card</h2>
        <p>Texto de suporte descrevendo o conteúdo do card.</p>
      </Card.Header>
      <Card.Content>
        <p>Conteúdo principal do card.</p>
      </Card.Content>
      <Card.Footer>
        <div
          style={{
            display: "flex",
            gap: "var(--s-spacing-xx-small)",
            width: "fit-content",
          }}
        >
          <Button variant="primary" size="md">
            Confirmar
          </Button>
          <Button variant="secondary" size="md">
            Cancelar
          </Button>
        </div>
      </Card.Footer>
    </Card>
  ),
};

// ─── 2. Variações de composição ───────────────────────────────────────────────

/**
 * Apenas o Header — composição mínima com valor informacional.
 * Útil para avisos, resumos curtos ou notificações sem ação.
 */
export const HeaderOnly: Story = {
  name: "Composição — somente Header",
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "300px" }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <Card>
      <Card.Header style={{ gap: "var(--s-spacing-xx-small)" }}>
        <h2>Card mínimo</h2>
        <p>Apenas o cabeçalho — útil para avisos ou resumos simples.</p>
      </Card.Header>
    </Card>
  ),
};

/**
 * Header + Content — composição para conteúdo informativo sem ação no rodapé.
 * Padrão comum em widgets de dashboard e painéis de configuração.
 */
export const HeaderAndContent: Story = {
  name: "Composição — Header + Content",
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "300px" }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <Card>
      <Card.Header style={{ gap: "var(--s-spacing-xx-small)" }}>
        <h2>Configurações</h2>
        <p>Gerencie as preferências da sua conta.</p>
      </Card.Header>
      <Card.Content>
        <p>
          Área de conteúdo para campos de formulário ou informações detalhadas.
        </p>
      </Card.Content>
    </Card>
  ),
};

/**
 * Header + Content + Footer — composição padrão para cards com ação.
 * Use quando o card precisa de botões ou links de ação no rodapé.
 */
export const HeaderContentAndFooter: Story = {
  name: "Composição — Header + Content + Footer",
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "300px" }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <Card>
      <Card.Header style={{ gap: "var(--s-spacing-xx-small)" }}>
        <h2>Confirmar ação</h2>
        <p>Deseja fazer esta ação?</p>
      </Card.Header>
      <Card.Content>
        <p>Tem certeza que deseja prosseguir com a operação?</p>
      </Card.Content>
      <Card.Footer>
        <div
          style={{
            display: "flex",
            gap: "var(--s-spacing-xx-small)",
            width: "fit-content",
          }}
        >
          <Button variant="primary" size="md">
            Confirmar
          </Button>
          <Button variant="secondary" size="md">
            Cancelar
          </Button>
        </div>
      </Card.Footer>
    </Card>
  ),
};

/**
 * Header + Image — demonstra que `Card.Image` é um complemento opcional ao Header,
 * não um substituto. A imagem sempre acompanha ao menos o `Card.Header`.
 * Padrão comum para cards de produto, artigo ou funcionalidade visual.
 */
export const WithImage: Story = {
  name: "Composição — Header + Image",
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "300px" }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <Card>
      <Card.Image>
        <img src={PLACEHOLDER_IMAGE} alt="Visual do card" />
      </Card.Image>
      <Card.Header style={{ gap: "var(--s-spacing-xx-small)" }}>
        <h2>Nome do produto</h2>
        <p>Breve descrição do produto ou funcionalidade.</p>
      </Card.Header>
    </Card>
  ),
};

/**
 * Todos os slots ativos — Image + Header + Content + Footer.
 * Use para validar o layout completo e a proporção entre as seções.
 */
export const FullCard: Story = {
  name: "Composição — todos os slots",
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "300px" }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <Card>
      <Card.Image>
        <img src={PLACEHOLDER_IMAGE} alt="Visual do card" />
      </Card.Image>
      <Card.Header style={{ gap: "var(--s-spacing-xx-small)" }}>
        <h2>Primeiros passos</h2>
        <p>Configure seu workspace em poucos minutos.</p>
      </Card.Header>
      <Card.Content>
        <p>Fluxo de onboarding guiado com instruções passo a passo.</p>
      </Card.Content>
      <Card.Footer>
        <div
          style={{
            display: "flex",
            gap: "var(--s-spacing-xx-small)",
            width: "fit-content",
          }}
        >
          <Button variant="primary" size="md">
            Começar agora
          </Button>
          <Button variant="secondary" size="md">
            Ver mais tarde
          </Button>
        </div>
      </Card.Footer>
    </Card>
  ),
};

// ─── 3. Contexto real ─────────────────────────────────────────────────────────

/**
 * Card de plano de preços — exibe nome do plano, preço e lista de benefícios.
 * Padrão comum em páginas de pricing com CTAs de conversão.
 */
export const PricingCard: Story = {
  name: "Contexto real — plano de preços",
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "300px" }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <Card>
      <Card.Header style={{ gap: "var(--s-spacing-xx-small)" }}>
        <h2>Plano Pro</h2>
        <p>Tudo que você precisa para escalar seu time.</p>
      </Card.Header>
      <Card.Content>
        <p
          style={{
            fontSize: "32px",
            fontWeight: 700,
            margin: "0 0 12px",
            color: "var(--s-color-content-default)",
          }}
        >
          R$ 249
          <small style={{ fontSize: "16px", fontWeight: 400 }}>/mês</small>
        </p>
        <ul
          style={{
            paddingLeft: "16px",
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            color: "var(--s-color-content-default)",
          }}
        >
          <li style={{ font: "var(--s-typography-paragraph-regular)" }}>
            Projetos ilimitados
          </li>
          <li style={{ font: "var(--s-typography-paragraph-regular)" }}>
            Suporte prioritário
          </li>
          <li style={{ font: "var(--s-typography-paragraph-regular)" }}>
            Analytics avançado
          </li>
          <li style={{ font: "var(--s-typography-paragraph-regular)" }}>
            Integrações premium
          </li>
        </ul>
      </Card.Content>
      <Card.Footer>
        <div
          style={{
            display: "flex",
            gap: "var(--s-spacing-xx-small)",
            width: "fit-content",
          }}
        >
          <Button variant="primary">Assinar agora</Button>
        </div>
      </Card.Footer>
    </Card>
  ),
};

/**
 * Card de perfil de usuário — avatar, nome, cargo e ações de contato.
 * Padrão típico em diretórios de time, listagens de membros e CRMs.
 */
export const ProfileCard: Story = {
  name: "Contexto real — perfil de usuário",
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "300px" }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <Card>
      <Card.Image>
        <img
          src="https://i.pravatar.cc/600?img=12"
          alt="Foto de Sarah Johnson"
        />
      </Card.Image>
      <Card.Header style={{ gap: "var(--s-spacing-xx-small)" }}>
        <Avatar size="md" src="https://i.pravatar.cc/150?img=12" />
        <div>
          <h2 style={{ margin: 0 }}>Sarah Johnson</h2>
          <p style={{ margin: 0 }}>Product Designer Sênior</p>
        </div>
      </Card.Header>
      <Card.Footer>
        <div
          style={{
            display: "flex",
            gap: "var(--s-spacing-xx-small)",
            width: "fit-content",
          }}
        >
          <Button variant="primary" size="md">
            Mensagem
          </Button>
          <Button variant="secondary" size="md">
            Ver perfil
          </Button>
        </div>
      </Card.Footer>
    </Card>
  ),
};

/**
 * Card de artigo ou post — imagem de capa, categoria via Badge, título e resumo.
 * Padrão comum em blogs, bases de conhecimento e feeds de conteúdo.
 */
export const ArticleCard: Story = {
  name: "Contexto real — artigo ou post",
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "600px" }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <Card>
      <Card.Image>
        <img src={PLACEHOLDER_IMAGE} alt="Capa do artigo" />
      </Card.Image>
      <Card.Header style={{ gap: "var(--s-spacing-xx-small)" }}>
        <div style={{ marginBottom: "var(--s-spacing-nano)" }}>
          <Badge label="Design System" type="light" variant="primary" />
        </div>
        <h2>Como documentar componentes de forma eficiente</h2>
        <p>
          Boas práticas para Storybook, JSDoc e design tokens em projetos reais.
        </p>
      </Card.Header>
      <Card.Footer>
        <div
          style={{
            display: "flex",
            gap: "var(--s-spacing-xx-small)",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            variant="secondary"
            size="md"
            style={{ width: "fit-content" }}
          >
            Ler artigo
          </Button>
          <small
            style={{
              color: "var(--s-color-content-default)",
              whiteSpace: "nowrap",
            }}
          >
            5 min de leitura
          </small>
        </div>
      </Card.Footer>
    </Card>
  ),
};

/**
 * Card de widget de dashboard — métrica em destaque com variação de período.
 * Padrão comum em painéis administrativos e telas de análise.
 */
export const DashboardWidget: Story = {
  name: "Contexto real — widget de dashboard",
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "300px" }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <Card>
      <Card.Content>
        <p style={{ margin: 0 }}>Receita do mês</p>
        <h1
          style={{
            margin: "0 0 4px",
            color: "var(--s-color-content-default)",
          }}
        >
          R$ 48.290
        </h1>
        <div
          style={{
            display: "flex",
            gap: "var(--s-spacing-xx-small)",
            width: "fit-content",
          }}
        >
          <Badge label="+12,4%" type="light" variant="success" />
          <small style={{ color: "var(--s-color-content-default)" }}>
            em relação ao mês anterior
          </small>
        </div>
      </Card.Content>
    </Card>
  ),
};

// ─── 4. Grid de cards ─────────────────────────────────────────────────────────

/**
 * Cards em layout de grid — demonstra como os cards preenchem as colunas
 * do grid naturalmente sem necessidade de largura fixa.
 */
export const CardGrid: Story = {
  name: "Grid de cards",
  decorators: [
    (Story) => (
      <div style={{ width: "100%" }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div
      style={{
        display: "grid",
        width: "100%",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--s-spacing-medium)",
      }}
    >
      {[
        {
          plan: "Starter",
          price: "Grátis",
          desc: "Para projetos pessoais e experimentação.",
        },
        {
          plan: "Pro",
          price: "R$ 249/mês",
          desc: "Para times que precisam de mais poder.",
        },
        {
          plan: "Enterprise",
          price: "Sob consulta",
          desc: "Para grandes organizações com SLA.",
        },
      ].map(({ plan, price, desc }) => (
        <Card key={plan}>
          <Card.Header>
            <h2>{plan}</h2>
            <p>{desc}</p>
          </Card.Header>
          <Card.Content>
            <p
              style={{
                color: "var(--s-color-content-default)",
              }}
            >
              {price}
            </p>
          </Card.Content>
          <Card.Footer>
            <div
              style={{
                display: "flex",
                gap: "var(--s-spacing-xx-small)",
                width: "fit-content",
              }}
            >
              <Button
                variant={plan === "Pro" ? "primary" : "secondary"}
                size="md"
              >
                Escolher plano
              </Button>
            </div>
          </Card.Footer>
        </Card>
      ))}
    </div>
  ),
};

// ─── 5. Edge cases ────────────────────────────────────────────────────────────

/**
 * Card com conteúdo longo no Header — valida se o título e a descrição
 * com muitas linhas não comprometem o layout ou extrapolam os limites do card.
 */
export const LongContent: Story = {
  name: "Edge case — conteúdo longo",
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "500px" }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <Card>
      <Card.Header style={{ gap: "var(--s-spacing-xx-small)" }}>
        <h2>
          Título com texto longo para validar o comportamento de quebra de linha
          no cabeçalho
        </h2>
        <p>
          Esta é uma descrição intencionalmente longa para verificar se o
          espaçamento e a tipografia do Card.Header se comportam corretamente
          quando o conteúdo ultrapassa uma única linha — sem vazar para fora do
          card ou comprimir outros slots.
        </p>
      </Card.Header>
      <Card.Content>
        <p>Conteúdo principal permanece abaixo do header sem sobreposição.</p>
      </Card.Content>
      <Card.Footer>
        <div
          style={{
            display: "flex",
            gap: "var(--s-spacing-xx-small)",
            width: "fit-content",
          }}
        >
          <Button variant="secondary" size="md">
            Ação
          </Button>
        </div>
      </Card.Footer>
    </Card>
  ),
};
