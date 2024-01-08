import { Meta, Story } from "@storybook/react";
import Modal, {
  ContentModal,
  FooterModal,
} from "../app/components/Modal/Modal";
import Button from "../app/components/Button/Button";
import { useState } from "react";
import Icon from "../app/components/Icon/Icon";
import "./css/slot.scss";

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
        description={args.description}
        hideModal={toggleModal}
        title={args.title}
        isOpen={isOpen}
      >
        <ContentModal>
          <div className="slot">
            <Icon icon="refresh" size="md" />
            Slot Content
          </div>
        </ContentModal>
        <FooterModal>
          <div className="slot">
            <Icon icon="refresh" size="md" />
            Slot Content
          </div>
        </FooterModal>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  description: "Description",
};
