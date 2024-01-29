import React, { useState } from "react";
import type { Meta, Story } from "@storybook/react";
import {
  Sidebar,
  SidebarList,
  SidebarItem,
  SidebarSubItem,
} from "../app/components/Sidebar/Sidebar";
import "./css/main.scss";

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

type DefaultProps = {};

const Template: Story<DefaultProps> = (args) => {
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
        <SidebarList title="Sidebar">
          <SidebarItem icon="settings" title="Item 1">
            <SidebarSubItem title="Sub Item 1" />
          </SidebarItem>
          <SidebarItem icon="settings" title="Item 2">
            <SidebarSubItem title="Sub Item 1" />
          </SidebarItem>
        </SidebarList>
      </Sidebar>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
