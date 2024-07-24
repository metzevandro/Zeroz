import React, { useState } from "react";
import Dropdown, { DropdownItem, DropdownTitle } from "./Dropdown";
import Button from "../Button/Button";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
    docs: {
      page: function () {
        return (
          <>
            <Title />
            <Subtitle>Component</Subtitle>
            <p>
              The <strong>Dropdowns</strong> are activated by a button and show
              a list of choices, allowing users to select one or more options. A
              chosen option can either lead to a page or be utilized as an
              action to filter or sort existing content.{" "}
            </p>
            <Primary />
            <Controls />
            <Stories />
          </>
        );
      },
    },
  },
  argTypes: {
    dropdown: {
      description: "Controls the visibility of the dropdown menu.",
      control: { type: "boolean" },
      defaultValue: false,
      table: {
        category: "Behavior",
      },
    },
    children: {
      title: "Children",
      description:
        "Can be a title or an item to be displayed in the dropdown menu.",
      table: {
        category: "Content",
      },
    },
  },
};
export default meta;
var Template = function (args) {
  var _a = useState(false),
    isDropDownOpen = _a[0],
    setIsDropDownOpen = _a[1];
  var toggleDropDown = function () {
    setIsDropDownOpen(!isDropDownOpen);
  };
  return (
    <>
      <div style={{ width: "100px", height: "200px" }}>
        <Button
          size="md"
          variant="primary"
          label="Click here!"
          onClick={toggleDropDown}
        />
        <div>
          <Dropdown dropdown={isDropDownOpen || args.dropdown}>
            <DropdownTitle content="Title" />
            <DropdownItem content="Item 1" typeIcon="ac_unit" />
            <DropdownTitle content="Title" />
            <DropdownItem content="Item 1" />
          </Dropdown>
        </div>
      </div>
    </>
  );
};
export var Default = Template.bind({});
Default.args = {
  dropdown: false,
};
