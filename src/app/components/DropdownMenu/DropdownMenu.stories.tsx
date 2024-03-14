import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import DropDownMenu, {
  DropDownMenuItem,
  DropDownMenuTitle,
} from "./DropdownMenu";
import Button from "../Button/Button";
import "../../styles.scss";

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

const Template: StoryFn<DefaultProps> = (args) => {
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
