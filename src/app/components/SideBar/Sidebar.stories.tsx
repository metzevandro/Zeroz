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
};

const Template: StoryFn<DefaultProps> = (args) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <>
      <Sidebar
        brand="/logo-sm.svg"
        setToggleSidebar={toggleSidebar}
        toggle={true}
      >
        <SidebarTitle title={args.titleSidebar} />
        <SidebarItem isActive={true} fillIcon={false} icon="home" title="Home" />
        <SidebarItem fillIcon icon="settings" title="Settings">
          <SidebarSubItem active={false} title="Sub Item 1" />
        </SidebarItem>

        <SidebarTitle title={args.titleSidebar} />
        <SidebarItem fillIcon={false} icon="home" title="Home" />
        <SidebarItem fillIcon icon="settings" title="Settings">
          <SidebarSubItem active={false} title="Sub Item 1" />
        </SidebarItem>
      </Sidebar>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  titleSidebar: "Sidebar",
};
