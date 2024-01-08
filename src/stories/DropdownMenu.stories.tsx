import React, { useState } from "react";
import type { Meta, Story } from "@storybook/react";
import {
  DropDownMenu,
  DropDownMenuItem,
  DropDownMenuTitle,
} from "../app/components/DropdownMenu/DropdownMenu";
import Button from "../app/components/Button/Button";

const meta: Meta = {
  title: "Components/DropdownMenu",
  component: DropDownMenu,
  parameters: {
    layout: "padded",
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
      <div>
        <Button
          size="md"
          variant="primary"
          label="Click here!"
          onClick={toggleDropDown}
        />
        <div>
          <DropDownMenu dropDownMenu={isDropDownOpen}>
            <DropDownMenuTitle content="Settings" />
            <DropDownMenuItem content="Item 1" />
            <DropDownMenuItem content="Item 2" />
            <DropDownMenuItem content="Item 3" typeIcon="ac_unit" />
          </DropDownMenu>
        </div>
      </div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
