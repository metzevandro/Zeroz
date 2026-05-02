import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Sidebar, SidebarItem, SidebarSubItem, SidebarTitle } from "./index";
import { AppShell } from "../AppShell";
import { Header, HeaderProfile } from "../Header";
import { Dropdown, DropdownItem } from "../Dropdown";
import Breadcrumb from "../Breadcrumb";
import { Page } from "../Page";
import { Button } from "../Button";
import "../../styles.scss";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
O **Sidebar** é o drawer de navegação principal da aplicação.

Componha com os subcomponentes para construir a estrutura de navegação:

| Subcomponente     | Descrição                                                          |
|-------------------|--------------------------------------------------------------------|
| \`SidebarTitle\`   | Cabeçalho de seção exibido acima de um grupo de itens              |
| \`SidebarItem\`    | Item de navegação com ícone — pode conter sub-itens (acordeão)     |
| \`SidebarSubItem\` | Item de navegação aninhado dentro de um \`SidebarItem\` expandido   |

### Acordeão
Itens com \`children\` se comportam como acordeões — apenas um item pode
estar expandido por vez. O estado é gerenciado centralmente pelo \`Sidebar\`
e injetado nos itens via \`React.cloneElement\`.

### Responsividade
Em viewports \`≤ 768px\` a sidebar muda para modo overlay:
- Entra pela esquerda com transição de 0.5s
- Exibe um overlay semitransparente atrás
- Pode ser fechada pelo overlay ou pelo botão X no canto superior direito

### Quando usar
- Como estrutura de navegação primária em dashboards e painéis administrativos
- Sempre em conjunto com \`<Header>\` e \`<AppShell>\` para o frame completo da aplicação

### Boas práticas
- Use \`<SidebarTitle>\` para agrupar itens por contexto
- Mantenha os labels curtos — uma ou duas palavras
- Marque o \`<SidebarSubItem>\` ativo para refletir a rota atual
- Conecte \`setToggleSidebar\` ao \`onClick\` do hambúrguer do \`<Header>\`
        `,
      },
    },
    design: {
      type: 'figma',
       url: 'https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10079',
    },
  },
  argTypes: {
    toggle: {
      control: "boolean",
      description: "Controla o estado aberto/fechado da sidebar.",
      table: { type: { summary: "boolean" } },
    },
    brand: {
      control: "text",
      description: "URL ou caminho da imagem do logotipo exibido no topo.",
      table: { type: { summary: "string" } },
    },
    brandSize: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Tamanho do logotipo da marca.",
      table: { type: { summary: '"sm" | "md" | "lg"' } },
    },
    children: {
      control: false,
      description:
        "Conteúdo da navegação — componha com `SidebarTitle`, `SidebarItem` e `SidebarSubItem`.",
      table: { type: { summary: "React.ReactNode" } },
    },
    setToggleSidebar: {
      action: "setToggleSidebar",
      description: "Callback disparado quando a sidebar deve mudar de estado.",
      table: { type: { summary: "(toggle: boolean) => void" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const LOGO = "https://placehold.co/300x120/png";

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Sidebar com navegação completa — títulos de seção, itens com e sem
 * sub-itens, e acordeão funcional. Clique nos itens com seta para expandir.
 */
export const Default: Story = {
  name: "Default",
  render: () => {
    const [open, setOpen] = useState(true);
    const [active, setActive] = useState("dashboard");
    return (
      <div style={{ height: "100vh", position: "relative" }}>
        <Sidebar brand={LOGO} brandSize="md" toggle={open} setToggleSidebar={setOpen}>
          <SidebarTitle title="Principal" />
          <SidebarItem title="Dashboard" icon="home" fillIcon={false} onClick={() => setActive("dashboard")} />
          <SidebarItem title="Analytics" icon="bar_chart" fillIcon={false} onClick={() => setActive("analytics")} />

          <SidebarTitle title="Configurações" />
          <SidebarItem title="Conta" icon="manage_accounts" fillIcon={false}>
            <SidebarSubItem title="Perfil" active={active === "perfil"} onClick={() => setActive("perfil")} />
            <SidebarSubItem title="Segurança" active={active === "seguranca"} onClick={() => setActive("seguranca")} />
            <SidebarSubItem title="Faturamento" active={active === "faturamento"} onClick={() => setActive("faturamento")} />
          </SidebarItem>
          <SidebarItem title="Integrações" icon="extension" fillIcon={false}>
            <SidebarSubItem title="Chaves de API" active={active === "api"} onClick={() => setActive("api")} />
            <SidebarSubItem title="Webhooks" active={active === "webhooks"} onClick={() => setActive("webhooks")} />
          </SidebarItem>
        </Sidebar>
      </div>
    );
  },
};

// ─── 2. Navegação plana ───────────────────────────────────────────────────────

/**
 * Sidebar com itens simples sem sub-níveis.
 * Use quando a hierarquia de navegação é plana — sem seções aninhadas.
 */
export const FlatNavigation: Story = {
  name: "Navegação plana (sem sub-itens)",
  render: () => {
    const [open, setOpen] = useState(true);
    const [active, setActive] = useState("inicio");
    return (
      <div style={{ height: "100vh", position: "relative" }}>
        <Sidebar brand={LOGO} brandSize="md" toggle={open} setToggleSidebar={setOpen}>
          <SidebarTitle title="Navegação" />
          <SidebarItem title="Início" icon="home" fillIcon={active === "inicio"} onClick={() => setActive("inicio")} />
          <SidebarItem title="Usuários" icon="people" fillIcon={active === "usuarios"} onClick={() => setActive("usuarios")} />
          <SidebarItem title="Pedidos" icon="shopping_bag" fillIcon={active === "pedidos"} onClick={() => setActive("pedidos")} />
          <SidebarItem title="Relatórios" icon="description" fillIcon={active === "relatorios"} onClick={() => setActive("relatorios")} />
          <SidebarItem title="Configurações" icon="settings" fillIcon={active === "configuracoes"} onClick={() => setActive("configuracoes")} />
        </Sidebar>
      </div>
    );
  },
};

// ─── 3. Variações de logo ─────────────────────────────────────────────────────

const SidebarSm = () => (
  <Sidebar brand={LOGO} brandSize="sm" toggle={true} setToggleSidebar={() => {}}>
    <SidebarTitle title="brand: sm" />
    <SidebarItem title="Início" icon="home" fillIcon={false} />
    <SidebarItem title="Usuários" icon="people" fillIcon={false} />
  </Sidebar>
);

const SidebarMd = () => (
  <Sidebar brand={LOGO} brandSize="md" toggle={true} setToggleSidebar={() => {}}>
    <SidebarTitle title="brand: md" />
    <SidebarItem title="Início" icon="home" fillIcon={false} />
    <SidebarItem title="Usuários" icon="people" fillIcon={false} />
  </Sidebar>
);

const SidebarLg = () => (
  <Sidebar brand={LOGO} brandSize="lg" toggle={true} setToggleSidebar={() => {}}>
    <SidebarTitle title="brand: lg" />
    <SidebarItem title="Início" icon="home" fillIcon={false} />
    <SidebarItem title="Usuários" icon="people" fillIcon={false} />
  </Sidebar>
);

/**
 * Comparativo dos três tamanhos de logo disponíveis.
 * Use `sm` em sidebars compactas, `md` como padrão e `lg` para destaque.
 */
export const BrandSizes: Story = {
  name: "Tamanhos de logo — sm / md / lg",
  render: () => (
    <div style={{ display: "flex", height: "100vh" }}>
      <SidebarSm />
      <SidebarMd />
      <SidebarLg />
    </div>
  ),
};

// ─── 4. Mobile ────────────────────────────────────────────────────────────────

/**
 * Sidebar no modo overlay mobile (≤ 768px).
 * Inicia fechada — clique em "Abrir sidebar" para ver a entrada pela esquerda
 * com overlay semitransparente. Feche pelo X ou clicando no overlay.
 */
export const MobileOverlay: Story = {
  name: "Mobile — overlay (≤ 768px)",
  globals: {
    viewport: { value: "mobile5", isRotated: false },
  },
  render: () => {
    const [toggle, setToggle] = useState(false);
    return (
      <AppShell>
        <Header
          onClick={() => setToggle((prev) => !prev)}
          breadcrumb={
            <Breadcrumb
              items={[
                { pageName: "Settings", href: "#" },
              ]}
            />
          }
        >
          <HeaderProfile name="Jane Doe" letter="J">
            <Dropdown visible>
              <DropdownItem label="Sair" onClick={() => {}} />
            </Dropdown>
          </HeaderProfile>
        </Header>

        <Sidebar
          brand="/logo-sm.svg"
          brandSize="md"
          toggle={toggle}
          setToggleSidebar={setToggle}
        >
          <SidebarTitle title="Principal" />
          <SidebarItem title="Configurações" icon="settings" fillIcon={false} isActive/>
        </Sidebar>

        <Page
          namePage="Configurações"
        />
      </AppShell>
    );
  },
};

// ─── 5. Dentro do AppShell ────────────────────────────────────────────────────

/**
 * Sidebar integrada ao layout completo do AppShell.
 * O `onClick` do Header controla o toggle da Sidebar via `useState`.
 */
export const WithAppShell: Story = {
  name: "Contexto real — dentro do AppShell",
  render: () => {
    const [toggle, setToggle] = useState(false);
    return (
      <AppShell>
        <Header
          onClick={() => setToggle((prev) => !prev)}
          breadcrumb={
            <Breadcrumb
              items={[
                { pageName: "Settings", href: "#" },
                { pageName: "Account", href: "#" },
                { pageName: "Billing", href: "#" },
              ]}
            />
          }
        >
          <HeaderProfile name="Jane Doe" letter="J">
            <Dropdown visible>
              <DropdownItem label="Sair" onClick={() => {}} />
            </Dropdown>
          </HeaderProfile>
        </Header>

        <Sidebar
          brand="/logo-sm.svg"
          brandSize="md"
          toggle={toggle}
          setToggleSidebar={setToggle}
        >
          <SidebarTitle title="Principal" />
          <SidebarItem title="Dashboard" icon="home" fillIcon={false} />
          <SidebarItem title="Configurações" icon="settings" fillIcon={false}>
            <SidebarSubItem title="Perfil" active={false} onClick={() => {}} />
            <SidebarSubItem title="Conta" active={false} onClick={() => {}} />
            <SidebarSubItem title="Faturamento" active={true} onClick={() => {}} />
          </SidebarItem>
        </Sidebar>

        <Page
          namePage="Faturamento"
          description="Gerencie sua assinatura e métodos de pagamento."
          withBackButton
        />
      </AppShell>
    );
  },
};