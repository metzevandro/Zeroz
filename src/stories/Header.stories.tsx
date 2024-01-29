import React, { useState } from "react";
import type { Meta, Story } from "@storybook/react";
import { Header, HeaderProfile } from "../app/components/Header/Header";
import {
  DropDownMenu,
  DropDownMenuItem,
  DropDownMenuTitle,
} from "../app/components/DropdownMenu/DropdownMenu";
import {
  Breadcrumb,
  BreadcrumbRoot,
} from "../app/components/Breadcrumb/Breadcrumb";
import "./css/main.scss";

const meta: Meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "padded",
  },
  args: {
    toggle: false,
  },
  tags: ["autodocs"],
};

export default meta;

type DefaultProps = {};

const Template: Story<DefaultProps> = (args) => {
  const [isOpenHeader, setIsOpenHeader] = useState(false);

  const toggleHeader = () => {
    setIsOpenHeader(!isOpenHeader);
  };

  return (
    <>
      <Header
        breadcrumb={
          <>
            <BreadcrumbRoot pageName="Breadcrumb">
              <Breadcrumb pageName="Breadcrumb" />
            </BreadcrumbRoot>
          </>
        }
        onClick={() => {}}
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
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
