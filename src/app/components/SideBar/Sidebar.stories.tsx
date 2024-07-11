import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Sidebar, { SidebarTitle, SidebarItem, SidebarSubItem } from "./Sidebar";
import "../../styles.scss";

const meta: Meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    toggle: false,
  },
  tags: ["autodocs"],
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
