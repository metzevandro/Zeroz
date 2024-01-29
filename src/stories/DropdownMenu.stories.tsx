import React, { useState } from "react";
import type { Meta, Story } from "@storybook/react";
import {
  DropDownMenu,
  DropDownMenuItem,
  DropDownMenuTitle,
} from "../app/components/DropdownMenu/DropdownMenu";
import Button from "../app/components/Button/Button";
import "./css/main.scss";

const meta: Meta = {
  title: "Components/Dropdown Menu",
  component: DropDownMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type DefaultProps = {};

const Template: Story<DefaultProps> = (args) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  return (
    <>
      <div style={{ width: "288px" }}>
        <Button
          size="md"
          variant="primary"
          label="Click here!"
          onClick={toggleDropDown}
        />
        <div>
          <DropDownMenu dropDownMenu={isDropDownOpen}>
            <DropDownMenuTitle content="Title" />
            <DropDownMenuItem content="Item 1" typeIcon="ac_unit" />
            <DropDownMenuItem content="Item 2" typeIcon="ac_unit" />
            <DropDownMenuItem content="Item 3" typeIcon="ac_unit" />
            <DropDownMenuTitle content="Title" />
            <DropDownMenuItem content="Item 1" />
            <DropDownMenuItem content="Item 2" />
          </DropDownMenu>
        </div>
      </div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
