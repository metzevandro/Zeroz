import { Meta, Story } from "@storybook/react";
import Modal, {
  ContentModal,
  FooterModal,
} from "../app/components/Modal/Modal";
import Button from "../app/components/Button/Button";
import { useState } from "react";
import Icon from "../app/components/Icon/Icon";
import "./css/slot.scss";
import ButtonGroup from "../app/components/ButtonGroup/ButtonGroup";

const meta: Meta = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Args = {
  title: string;
  description: string;
  dismissible: boolean;
};

const Template: Story<Args> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div style={{ width: "min-content" }}>
        <Button
          size="md"
          variant="primary"
          label="Click here!"
          onClick={toggleModal}
        />
      </div>

      <Modal
        dismissible={args.dismissible}
        description={args.description}
        hideModal={toggleModal}
        title={args.title}
        isOpen={isOpen}
        content={
          <ContentModal>
            <div className="slot">
              <Icon icon="refresh" size="md" />
              Slot Content
            </div>
          </ContentModal>
        }
        footer={
          <FooterModal>
            <div style={{ width: "min-content" }}>
              <ButtonGroup
                direction="row"
                variantFirstButton="primary"
                variantSecondButton="secondary"
                contentFirstButton="Button"
                contentSecondButton="Button"
              />
            </div>
          </FooterModal>
        }
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  description: "Description",
  dismissible: false,
};

export const dismissible = Template.bind({});
dismissible.args = {
  title: "Title",
  description: "Description",
  dismissible: true,
};