import React, { useState } from "react";
import type { Meta, Story } from "@storybook/react";
import {
  SideBar,
  SideBarList,
  SidebarItem,
  SidebarSubItem,
} from "../app/components/SideBar/SideBar";

const meta: Meta = {
  title: "Components/SideBar",
  component: SideBar,
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
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const toggleSideBar = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };

  return (
    <>
      <SideBar
        brand="/logo-sm.svg"
        setToggleSideBar={toggleSideBar}
        toggle={true}
      >
        <SideBarList title="SideBar">
          <SidebarItem icon="settings" title="Item 1">
            <SidebarSubItem title="Sub Item 1" />
          </SidebarItem>
          <SidebarItem icon="settings" title="Item 2">
            <SidebarSubItem title="Sub Item 1" />
          </SidebarItem>
        </SideBarList>
      </SideBar>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
