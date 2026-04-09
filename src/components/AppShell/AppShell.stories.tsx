import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import AppShell from "./AppShell";
import Page from "../Page/Page";
import { Sidebar, SidebarItem, SidebarSubItem, SidebarTitle } from "../Sidebar";
import Breadcrumb from "../Breadcrumb";
import { Header, HeaderProfile } from "../Header";
import { Dropdown, DropdownItem } from "../Dropdown";
import "../../styles.scss";

const meta: Meta<typeof AppShell> = {
  title: "Templates/AppShell",
  component: AppShell,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
**AppShell** é o wrapper de layout mais externo da aplicação.

Fornece a classe raiz \`app-shell\` e atua como o limite de composição
para o layout completo — sempre composto por \`<Header>\`, \`<Sidebar>\` e área de conteúdo principal.

> ⚠️ A \`<Sidebar>\` é **obrigatória**: o grid CSS usa \`grid-template-areas: "aside header" / "aside main"\`
> e sem a área \`aside\` preenchida o layout quebra.

### Comportamento do toggle
O botão hambúrguer do \`<Header>\` (prop \`onClick\`) deve ser conectado ao mesmo
estado que controla a prop \`toggle\` da \`<Sidebar>\`. As stories abaixo demonstram
esse vínculo com \`useState\`.

### Responsividade
Em viewports \`≤ 768px\` o grid passa a coluna única (\`header / main\`).
A Sidebar se torna um overlay — controlada pelo mesmo estado de toggle.
        `,
      },
    },
    // Descomente e ajuste quando o link do Figma estiver disponível:
    // design: {
    //   type: 'figma',
    //   url: 'https://figma.com/file/SEU_FILE_KEY/AppShell?node-id=NODE_ID',
    // },
  },
  argTypes: {
    children: {
      control: false,
      description:
        "Layout completo — deve conter obrigatoriamente `<Header>`, `<Sidebar>` e área de conteúdo principal.",
      table: { type: { summary: "React.ReactNode" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppShell>;

// ─── 1. Default — sidebar expandida ──────────────────────────────────────────

/**
 * Layout padrão com sidebar expandida.
 * O `onClick` do Header está conectado ao estado de toggle da Sidebar —
 * clique no ícone hambúrguer para colapsar/expandir.
 */
export const Default: Story = {
  name: "Default (Sidebar Expandida)",
  render: () => {
    const [toggle, setToggle] = useState(false);

    return (
      <AppShell>
        <Header
          onClick={() => setToggle((prev) => !prev)}
          breadcrumb={
            <Breadcrumb items={[{ pageName: "Settings", href: "#" }]} />
          }
        >
          <HeaderProfile name="Jane Doe" letter="J">
            <Dropdown visible={true}>
              <DropdownItem label="My profile" onClick={() => {}} />
              <DropdownItem label="Sign out" onClick={() => {}} />
            </Dropdown>
          </HeaderProfile>
        </Header>

        <Sidebar
          brand="/logo-sm.svg"
          brandSize="md"
          toggle={toggle}
          setToggleSidebar={setToggle}
        >
          <SidebarTitle title="Main" />
          <SidebarItem title="Dashboard" icon="home" fillIcon={false} />
          <SidebarItem title="Analytics" icon="bar_chart" fillIcon={false} />
          <SidebarItem title="Settings" icon="settings" fillIcon={false}>
            <SidebarSubItem title="Profile" active={true} onClick={() => {}} />
            <SidebarSubItem title="Account" active={false} onClick={() => {}} />
            <SidebarSubItem title="Billing" active={false} onClick={() => {}} />
          </SidebarItem>
        </Sidebar>

        <Page
          namePage="Profile settings"
          description="Update your personal information."
          withBackButton
        />
      </AppShell>
    );
  },
};

// ─── 2. Sidebar colapsada ─────────────────────────────────────────────────────

/**
 * Layout com sidebar iniciando no estado colapsado (`toggle=true`).
 * O Header continua conectado ao mesmo estado — clique no ícone hambúrguer para expandir.
 * Esta story é renderizada em viewport mobile para demonstrar o comportamento
 * de overlay da Sidebar em telas estreitas (≤ 768px).
 */
export const CollapsedSidebar: Story = {
  name: "Sidebar Colapsada",
  globals: {
    viewport: { value: "mobile5", isRotated: false },
  },
  render: () => {
    const [toggle, setToggle] = useState(true);

    return (
      <AppShell>
        <Header
          onClick={() => setToggle((prev) => !prev)}
          breadcrumb={
            <Breadcrumb items={[{ pageName: "Dashboard", href: "#" }]} />
          }
        >
          <HeaderProfile name="Jane Doe" letter="J">
            <Dropdown visible={true}>
              <DropdownItem label="Sign out" onClick={() => {}} />
            </Dropdown>
          </HeaderProfile>
        </Header>

        <Sidebar
          brand="/logo-sm.svg"
          brandSize="md"
          toggle={toggle}
          setToggleSidebar={setToggle}
        >
          <SidebarTitle title="Main" />
          <SidebarItem title="Dashboard" icon="home" fillIcon={false} />
          <SidebarItem title="Analytics" icon="bar_chart" fillIcon={false} />
          <SidebarItem title="Settings" icon="settings" fillIcon={false}>
            <SidebarSubItem title="Profile" active={true} onClick={() => {}} />
            <SidebarSubItem title="Account" active={false} onClick={() => {}} />
          </SidebarItem>
        </Sidebar>

        <Page
          namePage="Dashboard"
          description="Overview of your account activity."
        />
      </AppShell>
    );
  },
};

// ─── 3. Breadcrumb aninhado ───────────────────────────────────────────────────

/**
 * Layout com breadcrumb de múltiplos níveis no Header.
 * Valida o comportamento com rotas mais profundas na navegação.
 */
export const NestedBreadcrumb: Story = {
  name: "Com Breadcrumb Aninhado",
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
            <Dropdown visible={true}>
              <DropdownItem label="Sign out" onClick={() => {}} />
            </Dropdown>
          </HeaderProfile>
        </Header>

        <Sidebar
          brand="/logo-sm.svg"
          brandSize="md"
          toggle={toggle}
          setToggleSidebar={setToggle}
        >
          <SidebarTitle title="Main" />
          <SidebarItem title="Dashboard" icon="home" fillIcon={false} />
          <SidebarItem title="Settings" icon="settings" fillIcon={false}>
            <SidebarSubItem title="Profile" active={false} onClick={() => {}} />
            <SidebarSubItem title="Account" active={false} onClick={() => {}} />
            <SidebarSubItem title="Billing" active={true} onClick={() => {}} />
          </SidebarItem>
        </Sidebar>

        <Page
          namePage="Billing"
          description="Manage your subscription and payment methods."
          withBackButton
        />
      </AppShell>
    );
  },
};

// ─── 4. Layout Mobile ─────────────────────────────────────────────────────────

/**
 * Layout renderizado em viewport mobile (375 × 812 px).
 * Em telas ≤ 768px o grid passa para coluna única (header → main)
 * e a Sidebar assume comportamento de overlay, controlada pelo toggle do Header.
 */
export const MobileLayout: Story = {
  name: "Layout Mobile (375 px)",
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
            <Breadcrumb items={[{ pageName: "Dashboard", href: "#" }]} />
          }
        >
          <HeaderProfile name="Jane Doe" letter="J">
            <Dropdown visible={true}>
              <DropdownItem label="Sign out" onClick={() => {}} />
            </Dropdown>
          </HeaderProfile>
        </Header>

        <Sidebar
          brand="/logo-sm.svg"
          brandSize="md"
          toggle={toggle}
          setToggleSidebar={setToggle}
        >
          <SidebarTitle title="Main" />
          <SidebarItem title="Dashboard" icon="home" fillIcon={false} />
          <SidebarItem title="Settings" icon="settings" fillIcon={false}>
            <SidebarSubItem title="Profile" active={true} onClick={() => {}} />
            <SidebarSubItem title="Account" active={false} onClick={() => {}} />
          </SidebarItem>
        </Sidebar>

        <Page
          namePage="Dashboard"
          description="Overview of your account activity."
        />
      </AppShell>
    );
  },
};