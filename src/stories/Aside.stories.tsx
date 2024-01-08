import React, { useState } from "react";
import type { Meta, Story } from "@storybook/react";
import Aside, {
  AsideContent,
  AsideFooter,
} from "../app/components/Aside/Aside";
import Button from "../app/components/Button/Button";
import Icon from "../app/components/Icon/Icon";
import "./css/slot.scss";

const meta: Meta = {
  title: "Components/Aside",
  component: Aside,
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Args = {
  title: string;
  description: string;
};

const Template: Story<Args> = (args) => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const toggleSideBar = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };

  return (
    <>
      <div style={{ width: "min-content" }}>
        <Button
          size="md"
          variant="primary"
          label="Click here!"
          onClick={toggleSideBar}
        />
      </div>
      <Aside
        isOpen={isOpenSideBar}
        toggleSidebar={toggleSideBar}
        title={args.title}
        description={args.description}
      >
        <AsideContent>
          <div className="slot">
            <Icon icon="refresh" size="md" />
            Slot Content
          </div>
        </AsideContent>
        <AsideFooter>
          <div style={{ width: "min-content" }}>
            <Button
              size="md"
              variant="warning"
              label="Close"
              onClick={toggleSideBar}
            />
          </div>
        </AsideFooter>
      </Aside>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  description: "Description",
};
