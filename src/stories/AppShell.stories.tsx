import React, { useState } from "react";
import type { Meta, Story } from "@storybook/react";
import AppShell from "../app/components/AppShell/AppShell";
import {
  Sidebar,
  SidebarList,
  SidebarItem,
} from "../app/components/Sidebar/Sidebar";
import { Header, HeaderProfile } from "../app/components/Header/Header";
import {
  DropDownMenu,
  DropDownMenuItem,
  DropDownMenuTitle,
} from "../app/components/DropdownMenu/DropdownMenu";
import Page from "../app/components/Page/Page";
import {
  Breadcrumb,
  BreadcrumbRoot,
} from "../app/components/Breadcrumb/Breadcrumb";

const meta: Meta = {
  title: "Templates/AppShell",
  component: AppShell,
  parameters: {
    layout: "fullscreen",
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
      <AppShell>
        <Sidebar
          setToggleSidebar={toggleSidebar}
          brand="/logo-sm.svg"
          toggle={isOpenSidebar}
        >
          <SidebarList title="Sidebar">
            <SidebarItem icon="settings" title="Settings" />
          </SidebarList>
        </Sidebar>
        <Header
          breadcrumb={
            <>
              <BreadcrumbRoot pageName="Breadcrumb">
                <Breadcrumb pageName="Breadcrumb" />
              </BreadcrumbRoot>
            </>
          }
          onClick={toggleSidebar}
        >
          <HeaderProfile name="Username">
            <DropDownMenu dropDownMenu>
              <DropDownMenuTitle content="Settings" />
              <DropDownMenuItem content="Item 1" />
              <DropDownMenuItem content="Item 2" />
              <DropDownMenuItem content="Settings" typeIcon="settings" />
            </DropDownMenu>
          </HeaderProfile>
        </Header>
        <Page
          columnLayout="1"
          namePage="Page Name"
          buttonContentSecondary="Secondary"
          withActionSecondary
          buttonContentPrimary="Primary"
          withActionPrimary
          withBackButton
        ></Page>
      </AppShell>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
