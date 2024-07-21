import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Sidebar, { SidebarTitle, SidebarItem, SidebarSubItem } from "./Sidebar";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";

const meta: Meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong> Sidebar </strong> is the principal navigation to the
            pages.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  args: {
    toggle: false,
  },
  tags: ["autodocs"],
  argTypes: {
    toggle: {
      description: "Controls the sidebar visibility.",
      type: { name: "boolean" },
      defaultValue: { summary: false },
      table: {
        category: "Sidebar",
        type: { summary: "boolean" },
      },
    },
    setToggleSidebar: {
      description: "Function to control the sidebar visibility.",
      type: { name: "function" },
      table: {
        category: "Sidebar",
        type: { summary: "function" },
      },
    },
    titleSidebar: {
      description: "The title to display for the sidebar.",
      type: { name: "string" },
      defaultValue: { summary: "Sidebar" },
      table: {
        category: "Sidebar",
        type: { summary: "string" },
        defaultValue: { summary: "Sidebar" },
      },
    },
    brand: {
      name: "Brand",
      description: "URL or path to the brand/logo image.",
      type: { name: "string" },
      defaultValue: { summary: "/logo-sm.svg" },
      table: {
        category: "Appearance",
        type: { summary: "string" },
        defaultValue: { summary: "/logo-sm.svg" },
      },
    },
    brandSize: {
      name: "Brand Size",
      description: "The size of the brand/logo image.",
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      defaultValue: { summary: "sm" },
      table: {
        category: "Appearance",
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: "sm" },
      },
    },
  },
};

export default meta;

type DefaultProps = {
  titleSidebar: string;
  brand: string;
  brandSize: "sm" | "md" | "lg";
};

const Template: StoryFn<DefaultProps> = (args) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <>
      <Sidebar
        brandSize={args.brandSize}
        brand={args.brand}
        setToggleSidebar={toggleSidebar}
        toggle={true}
      >
        <SidebarTitle title={args.titleSidebar} />
        <SidebarItem isActive={true} fillIcon={true} icon="home" title="Home" />
        <SidebarItem fillIcon icon="settings" title="Settings">
          <SidebarSubItem active={false} title="Sub Item 1" />
        </SidebarItem>

        <SidebarTitle title={args.titleSidebar} />
        <SidebarItem fillIcon={true} icon="home" title="Home" />
        <SidebarItem fillIcon icon="settings" title="Settings">
          <SidebarSubItem active={false} title="Sub Item 1" />
          <SidebarSubItem active={false} title="Sub Item 2" />
          <SidebarSubItem active={false} title="Sub Item 3" />
        </SidebarItem>
      </Sidebar>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  titleSidebar: "Sidebar",
  brand: "/logo-sm.svg",
  brandSize: "sm",
};
