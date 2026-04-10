import type { Meta, StoryObj } from "@storybook/react";
import { Aside, AsideContent, AsideFooter, useAside } from "./index";
import type { AsideProps } from "./Aside.types";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "../../styles.scss";
import { DatePicker } from "../DataPicker";

const meta: Meta<typeof Aside> = {
  title: "Components/Aside",
  component: Aside,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
O **Aside** é um painel lateral deslizante (overlay) para exibir conteúdo complementar
à tela atual — detalhes de um registro, formulários de criação, configurações e filtros —
sem redirecionar o usuário para outra página.

> ⚠️ Não use o Aside para fluxos de decisão destrutiva (ex: confirmação de exclusão).
> Nesses casos, prefira um **Modal**.

### Sub-componentes
- \`AsideContent\` — slot para o corpo rolável; aplica espaçamento padrão do design system
- \`AsideFooter\` — slot para as ações do rodapé; máximo recomendado de 2 botões

### Hook
\`useAside(initialState?)\` — gerencia o estado aberto/fechado.
Retorna \`isOpen\`, \`openAside\`, \`closeAside\` e \`toggleAside\`.

### Responsividade
Em viewports \`≤ 490px\` o painel ocupa \`96%\` da largura da tela.
Em viewports maiores, ocupa \`50%\`.

### Acessibilidade
- O painel usa \`role="dialog"\` e \`aria-modal="true"\`
- O overlay usa \`aria-hidden="true"\`
- O \`title\` é mapeado diretamente para \`aria-label\` do dialog — sempre forneça um título descritivo
        `,
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10008",
    },
  },
  argTypes: {
    title: {
      control: "text",
      description:
        "Título exibido no cabeçalho do painel. Também usado como `aria-label` para acessibilidade.",
      table: {
        category: "Conteúdo",
        type: { summary: "string" },
      },
    },
    description: {
      control: "text",
      description:
        "Subtítulo opcional exibido abaixo do título. Quando omitido, a linha de descrição não é renderizada.",
      table: {
        category: "Conteúdo",
        type: { summary: "string" },
      },
    },
    isOpen: {
      control: "boolean",
      description:
        "Controla a visibilidade do painel. Gerencie externamente via `useAside` ou `useState`.",
      table: {
        category: "Estado",
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    toggleAside: {
      action: "toggleAside",
      description:
        "Callback chamado quando o usuário fecha o painel (botão de fechar ou clique no overlay).",
      table: {
        category: "Eventos",
        type: { summary: "() => void" },
      },
    },
    content: {
      control: false,
      description:
        "Conteúdo principal rolável. Use `AsideContent` para aplicar o espaçamento padrão.",
      table: {
        category: "Slots",
        type: { summary: "React.ReactNode" },
      },
    },
    footer: {
      control: false,
      description:
        "Área de ações do rodapé. Use `AsideFooter` para aplicar o estilo padrão.",
      table: {
        category: "Slots",
        type: { summary: "React.ReactNode" },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "600px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Aside>;

// ─── Helper: wrapper com botão de trigger ─────────────────────────────────────

/**
 * Encapsula o Aside com um botão de abertura e o hook `useAside`,
 * reproduzindo o padrão de uso real sem expor o estado interno nas stories.
 */
const AsideWithTrigger = ({
  isOpen: _isOpen,
  toggleAside: _toggle,
  title,
  ...rest
}: Partial<AsideProps>) => {
  const { isOpen, toggleAside } = useAside(false);
  return (
    <>
      <div style={{ padding: "24px", width: "fit-content" }}>
        <Button onClick={toggleAside}>Abrir painel</Button>
      </div>
      <Aside
        {...rest}
        isOpen={isOpen}
        toggleAside={toggleAside}
        title={title ?? "Título do painel"}
      />
    </>
  );
};

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Estado base do componente com título e descrição.
 * Nenhum slot de conteúdo ou rodapé é fornecido — o painel aparece vazio.
 * Use os Controls do painel para explorar todas as props disponíveis.
 */
export const Default: Story = {
  name: "Default",
  render: (args) => <AsideWithTrigger {...args} />,
  args: {
    title: "Título do painel",
    description: "Uma breve descrição sobre o que este painel exibe.",
  },
};

// ─── 2. Variações de conteúdo do cabeçalho ───────────────────────────────────

/**
 * Painel sem descrição — apenas o título e o botão de fechar no cabeçalho.
 * Use quando o título já fornece contexto suficiente por si só.
 */
export const WithoutDescription: Story = {
  name: "Sem descrição",
  render: (args) => (
    <AsideWithTrigger
      {...args}
      content={
        <AsideContent>
          <p style={{ margin: 0 }}>
            Este painel é renderizado sem descrição. O título sozinho fornece
            contexto suficiente para o usuário.
          </p>
        </AsideContent>
      }
    />
  ),
  args: {
    title: "Configurações de notificação",
  },
};

/**
 * Painel sem slots de conteúdo nem rodapé.
 * Útil para representar o estado enquanto os dados ainda estão sendo carregados.
 */
export const EmptyState: Story = {
  name: "Estado vazio (sem slots)",
  render: (args) => <AsideWithTrigger {...args} />,
  args: {
    title: "Carregando detalhes",
    description:
      "O conteúdo aparecerá aqui assim que os dados forem carregados.",
  },
};

// ─── 3. Casos de uso — contextual ────────────────────────────────────────────

/**
 * Exibe detalhes de um registro selecionado (ex: pedido em uma tabela).
 * Padrão contextual — sem ações de edição, apenas leitura.
 */
export const RecordDetails: Story = {
  name: "Contextual — detalhes do registro",
  render: (args) => (
    <AsideWithTrigger
      {...args}
      content={
        <AsideContent>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {[
              { label: "ID do pedido", value: "#ORD-20481" },
              { label: "Cliente", value: "Jane Doe" },
              { label: "Status", value: "Enviado" },
              { label: "Total", value: "R$ 129,90" },
              { label: "Forma de pagamento", value: "Visa •••• 4242" },
              {
                label: "Endereço de entrega",
                value: "Rua Principal, 123 – São Paulo, SP",
              },
              { label: "Criado em", value: "21 mar. 2025 – 14:32" },
              { label: "Última atualização", value: "22 mar. 2025 – 09:15" },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{ display: "flex", flexDirection: "column", gap: "2px" }}
              >
                <small style={{ color: "#888" }}>{label}</small>
                <p style={{ margin: 0 }}>{value}</p>
              </div>
            ))}
          </div>
        </AsideContent>
      }
    />
  ),
  args: {
    title: "Detalhes do pedido",
    description: "Informações completas sobre o pedido selecionado.",
  },
};

/**
 * Log de atividades com muitos itens — valida o comportamento de scroll
 * da área `AsideContent` quando o conteúdo excede a altura do painel.
 */
export const ActivityLog: Story = {
  name: "Contextual — log de atividades (rolável)",
  render: (args) => (
    <AsideWithTrigger
      {...args}
      content={
        <AsideContent>
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              style={{
                padding: "10px 0",
                borderBottom: "1px solid #eee",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={{ margin: 0 }}>Registro de atividade #{i + 1}</p>
              <p style={{ color: "#888", fontSize: "13px", margin: 0 }}>
                {(i % 28) + 1} mar. 2025
              </p>
            </div>
          ))}
        </AsideContent>
      }
      footer={
        <AsideFooter>
          <Button variant="primary">Exportar tudo</Button>
          <Button variant="secondary">Fechar</Button>
        </AsideFooter>
      }
    />
  ),
  args: {
    title: "Log de atividades",
    description: "Todos os eventos registrados para o item selecionado.",
  },
};

// ─── 4. Casos de uso — criação ────────────────────────────────────────────────

/**
 * Formulário de criação de novo usuário.
 * Demonstra o uso de `AsideContent` para o formulário e `AsideFooter` para as ações.
 */
export const CreateUser: Story = {
  name: "Criação — novo usuário",
  render: (args) => (
    <AsideWithTrigger
      {...args}
      content={
        <AsideContent>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Input placeholder="Ex: Jane" label="Nome" type="text" />
            <Input placeholder="Ex: Doe" label="Sobrenome" type="text" />
            <Input
              placeholder="Ex: jane@exemplo.com"
              label="E-mail"
              type="email"
            />
            <Input
              placeholder="Ex: Product Designer"
              label="Cargo"
              type="text"
            />
          </div>
        </AsideContent>
      }
      footer={
        <AsideFooter>
          <Button variant="primary">Criar usuário</Button>
          <Button variant="secondary">Cancelar</Button>
        </AsideFooter>
      }
    />
  ),
  args: {
    title: "Novo usuário",
    description:
      "Preencha as informações abaixo para adicionar um novo usuário.",
  },
};

/**
 * Formulário de convite para novo membro do time.
 * Similar ao de criação de usuário, mas com campos voltados ao convite por e-mail.
 */
export const InviteTeamMember: Story = {
  name: "Criação — convidar membro",
  render: (args) => (
    <AsideWithTrigger
      {...args}
      content={
        <AsideContent>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Input
              label="E-mail"
              type="email"
              placeholder="Ex: jane@exemplo.com"
            />
            <Input
              label="Nome completo"
              type="text"
              placeholder="Ex: Jane Doe"
            />
            <Input
              label="Cargo"
              type="text"
              placeholder="Ex: Product Designer"
            />
          </div>
        </AsideContent>
      }
      footer={
        <AsideFooter>
          <Button variant="primary">Enviar convite</Button>
          <Button variant="secondary">Cancelar</Button>
        </AsideFooter>
      }
    />
  ),
  args: {
    title: "Convidar membro",
    description: "Envie um convite para um novo membro ingressar no workspace.",
  },
};

// ─── 5. Casos de uso — edição e configurações ────────────────────────────────

/**
 * Formulário de edição de usuário com valores pré-preenchidos.
 * Demonstra o padrão de edição inline sem navegação para outra página.
 */
export const EditUser: Story = {
  name: "Configurações — editar usuário",
  render: (args) => (
    <AsideWithTrigger
      {...args}
      content={
        <AsideContent>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Input
              placeholder="Ex: Jane"
              label="Nome"
              type="text"
              defaultValue="Jane"
            />
            <Input
              placeholder="Ex: Doe"
              label="Sobrenome"
              type="text"
              defaultValue="Doe"
            />
            <Input
              placeholder="Ex: jane@exemplo.com"
              label="E-mail"
              type="email"
              defaultValue="jane@example.com"
            />
            <Input
              placeholder="Ex: Product Designer"
              label="Cargo"
              type="text"
              defaultValue="Product Designer"
            />
          </div>
        </AsideContent>
      }
      footer={
        <AsideFooter>
          <Button variant="primary">Salvar alterações</Button>
          <Button variant="secondary">Cancelar</Button>
        </AsideFooter>
      }
    />
  ),
  args: {
    title: "Editar usuário",
    description: "Atualize as informações do usuário selecionado.",
  },
};

/**
 * Painel de configurações de conta com múltiplas seções agrupadas.
 * Demonstra como organizar campos em grupos semânticos dentro do `AsideContent`.
 */
export const AccountSettings: Story = {
  name: "Configurações — preferências de conta",
  render: (args) => (
    <AsideWithTrigger
      {...args}
      content={
        <AsideContent>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <p
                style={{
                  margin: "0 0 12px",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "#444",
                }}
              >
                Informações pessoais
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <Input
                  placeholder="Ex: Jane"
                  label="Nome de exibição"
                  type="text"
                  defaultValue="Jane Doe"
                />
                <Input
                  placeholder="Ex: jane@exemplo.com"
                  label="E-mail"
                  type="email"
                  defaultValue="jane@example.com"
                />
              </div>
            </div>
            <div>
              <p
                style={{
                  margin: "0 0 12px",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "#444",
                }}
              >
                Segurança
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <Input label="Senha atual" type="password" />
                <Input label="Nova senha" type="password" />
                <Input label="Confirmar nova senha" type="password" />
              </div>
            </div>
          </div>
        </AsideContent>
      }
      footer={
        <AsideFooter>
          <Button variant="primary">Salvar alterações</Button>
          <Button variant="secondary">Descartar</Button>
        </AsideFooter>
      }
    />
  ),
  args: {
    title: "Configurações de conta",
    description:
      "Gerencie suas informações pessoais e preferências de segurança.",
  },
};

/**
 * Painel de filtros com campos de texto e seletores de data.
 * Demonstra o uso de `DatePicker` dentro do `AsideContent`.
 */
export const FilterPanel: Story = {
  name: "Configurações — painel de filtros",
  render: (args) => (
    <AsideWithTrigger
      {...args}
      content={
        <AsideContent>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Input label="Buscar por nome" type="text" />
            <Input label="Filtrar por status" type="text" />
            <DatePicker
              label="Data inicial"
              value="12/03/2026"
              onChange={() => {}}
            />
            <DatePicker
              label="Data final"
              value="12/03/2026"
              onChange={() => {}}
            />
          </div>
        </AsideContent>
      }
      footer={
        <AsideFooter>
          <Button variant="primary">Aplicar filtros</Button>
          <Button variant="secondary">Limpar</Button>
        </AsideFooter>
      }
    />
  ),
  args: {
    title: "Filtrar pedidos",
    description: "Refine os resultados usando os filtros abaixo.",
  },
};

// ─── 6. Edge cases ────────────────────────────────────────────────────────────

/**
 * Título excepcionalmente longo.
 * Valida que o cabeçalho lida com strings longas sem quebrar o layout
 * nem sobrepor o botão de fechar.
 */
export const LongTitle: Story = {
  name: "Edge case — título longo",
  render: (args) => (
    <AsideWithTrigger
      {...args}
      content={
        <AsideContent>
          <p style={{ margin: 0 }}>
            Valida que o cabeçalho lida corretamente com um título longo sem
            quebrar o layout do painel nem sobrepor o botão de fechar.
          </p>
        </AsideContent>
      }
    />
  ),
  args: {
    title:
      "Configurações avançadas de preferências de notificação e entrega de mensagens",
    description:
      "Valida o comportamento de overflow com um título muito longo.",
  },
};

/**
 * Descrição excepcionalmente longa.
 * Valida que a área de descrição lida com múltiplas linhas sem comprimir
 * o restante do cabeçalho nem ocultar o botão de fechar.
 */
export const LongDescription: Story = {
  name: "Edge case — descrição longa",
  render: (args) => (
    <AsideWithTrigger
      {...args}
      content={
        <AsideContent>
          <p style={{ margin: 0 }}>
            Valida que a área de descrição lida com textos longos sem comprimir
            o restante do cabeçalho nem ocultar elementos interativos.
          </p>
        </AsideContent>
      }
    />
  ),
  args: {
    title: "Configurações",
    description:
      "Esta é uma descrição intencionalmente longa para testar como o cabeçalho do painel lida com conteúdo que ultrapassa uma única linha e quebra em múltiplas linhas sem quebrar o layout nem ocultar elementos interativos como o botão de fechar.",
  },
};
