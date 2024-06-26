import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Header, { HeaderProfile } from "./Header";
import DropDownMenu, {
  DropDownMenuItem,
  DropDownMenuTitle,
} from "../DropdownMenu/DropdownMenu";
import BreadcrumbRoot, { Breadcrumb } from "../Breadcrumb/Breadcrumb";
import "../../styles.scss";

const meta: Meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        height: "500px",
      },
    },
  },
  args: {
    toggle: false,
  },
};

export default meta;

type DefaultProps = {
  skeleton: boolean;
};

const Template: StoryFn<DefaultProps> = (args) => {
  const [isOpenHeader, setIsOpenHeader] = useState(false);

  const toggleHeader = () => {
    setIsOpenHeader(!isOpenHeader);
  };

  return (
    <>
      <Header
        skeleton={args.skeleton}
        breadcrumb={
          <>
            <BreadcrumbRoot href="" pageName="Breadcrumb">
              <Breadcrumb href="" pageName="Breadcrumb" />
            </BreadcrumbRoot>
          </>
        }
        onClick={toggleHeader}
      >
        <HeaderProfile skeleton={args.skeleton} name="Username">
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
Default.args = {
  skeleton: false,
};

export const Loading = Template.bind({});
Loading.args = {
  skeleton: true,
};
