import React, { useState } from "react";
import type { Meta, Story } from "@storybook/react";
import "./css/main.scss";
import FormRegister from "../app/components/FormRegister/FormRegister";
import Input from "../app/components/Input/Input";
import AppShell from "../app/components/AppShell/AppShell";
import {
  Sidebar,
  SidebarItem,
  SidebarList,
} from "../app/components/Sidebar/Sidebar";
import { Header, HeaderProfile } from "../app/components/Header/Header";
import {
  Breadcrumb,
  BreadcrumbRoot,
} from "../app/components/Breadcrumb/Breadcrumb";
import {
  DropDownMenu,
  DropDownMenuItem,
  DropDownMenuTitle,
} from "../app/components/DropdownMenu/DropdownMenu";
import Page from "../app/components/Page/Page";
import InputNumber from "../app/components/InputNumber/InputNumber";
import Layout from "../app/components/Layout/Layout";
import DataPicker from "../app/components/DataPicker/DataPicker";
import InputSelect from "../app/components/InputSelect/InputSelect";

const meta: Meta = {
  title: "Components/Form Register",
  component: FormRegister,
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

  const options = ["Option 1", "Option 2", "Option 3"];

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
          buttonContentSecondary="Button"
          withActionSecondary
          buttonContentPrimary="Button"
          withActionPrimary
          withBackButton
        >
          <FormRegister>
            <Layout columns="2 - Symmetric">
              <Input label="Label" placeholder="Placeholder" />
              <InputNumber min={0} label="Label" placeholder="Placeholder" />
              <DataPicker label="Label" placeholder="Placeholder" />
              <InputSelect
                label="Label"
                placeholder="Placeholder"
                options={options}
              />
            </Layout>
          </FormRegister>
        </Page>
      </AppShell>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
