import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";

import AppShell from "./AppShell";
import Sidebar, { SidebarTitle, SidebarItem } from "../Sidebar/Sidebar";
import Header, { HeaderProfile } from "../Header/Header";
import Dropdown, { DropdownItem, DropdownTitle } from "../Dropdown/Dropdown";
import Page from "../Page/Page";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const meta: Meta = {
  title: "Templates/AppShell",
  component: AppShell,
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Template</Subtitle>
          <p>
            The <strong>AppShell</strong> template serves as the primary outer
            framework for an application, furnishing the fundamental structure
            to develop applications.
          </p>
          <div></div>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  tags: ["autodocs"],
  argTypes: {
    username: {
      name: "Username",
      description: "Username displayed in the header profile.",
      type: { name: "string" },
      table: {
        category: "Data",
        type: { summary: "string" },
      },
    },
    pageName: {
      name: "Page Name",
      description: "Page name displayed in the header and sidebar item.",
      type: { name: "string" },
      table: {
        category: "Data",
        type: { summary: "string" },
      },
    },
    description: {
      name: "Page Description",
      description: "Page description displayed in the Page component.",
      type: { name: "string" },
      table: {
        category: "Data",
        type: { summary: "string" },
      },
    },
    sidebarItemIcon: {
      name: "Sidebar Icon",
      description: "Icon displayed in the sidebar item.",
      type: { name: "string" },
      table: {
        category: "Appearance",
        type: { summary: "string" },
      },
    },
    buttonContentPrimary: {
      name: "Primary Button Content",
      description: "Text displayed in the primary button.",
      type: { name: "string" },
      table: {
        category: "Actions",
        type: { summary: "string" },
      },
    },
    buttonContentSecondary: {
      name: "Secondary Button Content",
      description: "Text displayed in the secondary button.",
      type: { name: "string" },
      table: {
        category: "Actions",
        type: { summary: "string" },
      },
    },
    withActionPrimary: {
      name: "Enable Primary Action",
      description: "Determines if the primary action is enabled.",
      type: { name: "boolean" },
      table: {
        category: "Actions",
        type: { summary: "boolean" },
      },
    },
    withActionSecondary: {
      name: "Enable Secondary Action",
      description: "Determines if the secondary action is enabled.",
      type: { name: "boolean" },
      table: {
        category: "Actions",
        type: { summary: "boolean" },
      },
    },
    withBackButton: {
      name: "Enable Back Button",
      description: "Determines if the back button is present.",
      type: { name: "boolean" },
      table: {
        category: "Actions",
        type: { summary: "boolean" },
      },
    },
    onClick: {
      name: "On Click",
      description: "Callback function triggered when clicking on the header.",
      action: "clicked",
      table: {
        category: "Events",
        type: {
          summary: "(event: React.MouseEvent<HTMLButtonElement>) => void",
        },
      },
    },
  },
};

export default meta;

type DefaultProps = {
  username: string;
  pageName: string;
  description: string;
  sidebarItemIcon: string;
  buttonContentPrimary: string;
  buttonContentSecondary: string;
  withActionPrimary: boolean;
  withActionSecondary: boolean;
  withBackButton: boolean;
};

const Template: StoryFn<DefaultProps> = (args) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <>
      <AppShell>
        <Sidebar
          brandSize="sm"
          setToggleSidebar={toggleSidebar}
          brand="/logo-sm.svg"
          toggle={isOpenSidebar}
        >
          <SidebarTitle title="Pages" />
          <SidebarItem
            fillIcon={true}
            isActive={true}
            icon={args.sidebarItemIcon}
            title={args.pageName}
          />
        </Sidebar>
        <Header
          breadcrumb={
            <>
              <Breadcrumb items={[{ pageName: args.pageName, href: "/" }]} />
            </>
          }
          onClick={toggleSidebar}
        >
          <HeaderProfile letter={args.username} name={args.username}>
            <Dropdown dropdown>
              <DropdownTitle content="Settings" />
              <DropdownItem content="Settings" typeIcon="settings" />
            </Dropdown>
          </HeaderProfile>
        </Header>
        <Page
          namePage={args.pageName}
          buttonContentPrimary={args.buttonContentPrimary}
          buttonContentSecondary={args.buttonContentSecondary}
          withActionPrimary={args.withActionPrimary}
          withActionSecondary={args.withActionSecondary}
          withBackButton={args.withBackButton}
          description={args.description}
        ></Page>
      </AppShell>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  username: "Username",
  description: "Description",
  pageName: "Page name",
  sidebarItemIcon: "home",
  withBackButton: true,
  withActionPrimary: true,
  withActionSecondary: true,
  buttonContentPrimary: "Button",
  buttonContentSecondary: "Button",
};
