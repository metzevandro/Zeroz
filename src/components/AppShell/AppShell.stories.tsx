import type { Meta, StoryObj } from "@storybook/react";
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
**AppShell** is the outermost layout wrapper for the application.

It provides the root \`app-shell\` class and acts as the composition boundary
for the full page layout — typically containing a \`<Header>\`, a sidebar,
and the main content area.

Memoized via \`React.memo\` to prevent unnecessary re-renders when parent
state changes do not affect the shell's own props.

### When to use
- As the single root wrapper for the entire application layout
- To establish the outermost CSS grid or flex context defined in \`AppShell.scss\`

### Best practices
- Use \`AppShell\` once per application — it is not intended for nested layouts
- Place \`<Header>\` as the first child so it renders at the top of the shell
- Let the shell's CSS class handle the overall layout; avoid adding inline styles to it
        `,
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description:
        "Full application layout — typically `<Header>`, sidebar, and main content.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppShell>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Header
          onClick={() => {}}
          breadcrumb={
            <Breadcrumb items={[{ pageName: "Settings", href: "#" }]} />
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
          toggle={false}
          setToggleSidebar={() => {}}
        >
          <SidebarTitle title="Main" />
          <SidebarItem title="Dashboard" icon="home" fillIcon={false} />
          <SidebarItem title="Settings" icon="settings" fillIcon={false}>
            <SidebarSubItem title="Profile" active={true} onClick={() => {}} />
            <SidebarSubItem title="Account" active={false} onClick={() => {}} />
          </SidebarItem>
        </Sidebar>

        <Page
          namePage="Profile settings"
          description="Update your personal information."
          withBackButton
        ></Page>
      </>
    ),
  },
};
