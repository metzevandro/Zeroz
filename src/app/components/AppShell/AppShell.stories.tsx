import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import "../../styles.scss";

import AppShell from "./AppShell";
import Sidebar, { SidebarTitle, SidebarItem } from "../Sidebar/Sidebar";
import Header, { HeaderProfile } from "../Header/Header";
import DropDownMenu, {
  DropDownMenuItem,
  DropDownMenuTitle,
} from "../DropdownMenu/DropdownMenu";
import Page from "../Page/Page";
import BreadcrumbRoot, { Breadcrumb } from "../Breadcrumb/Breadcrumb";

const meta: Meta = {
  title: "Templates/AppShell",
  component: AppShell,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type DefaultProps = {};

const Template: StoryFn<DefaultProps> = (args) => {
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
          <SidebarTitle title="Sidebar" />
            <SidebarItem
              fillIcon={true}
              isActive={false}
              icon="settings"
              title="Settings"
            />
          
        </Sidebar>
        <Header
          breadcrumb={
            <>
              <BreadcrumbRoot href="" pageName="Breadcrumb">
                <Breadcrumb href="" pageName="Breadcrumb" />
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
          namePage="Page Name"
          buttonContentSecondary="Button"
          withActionSecondary
          buttonContentPrimary="Button"
          withActionPrimary
          withBackButton
        ></Page>
      </AppShell>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
