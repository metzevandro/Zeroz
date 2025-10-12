import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Modal, { ContentModal, FooterModal } from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import { useState } from "react";
import Icon from "../../components/Icon/Icon";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <div>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong> Modals </strong> are overlays strategically designed to
            focus the user's attention on a specific task or piece of
            information.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </div>
      ),
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "The title of the modal.",
      table: {
        category: "Content",
      },
    },
    description: {
      control: "text",
      description: "The description text displayed in the modal.",
      table: {
        category: "Content",
      },
    },
    dismissible: {
      control: "boolean",
      description: "If true, the modal can be dismissed by the user.",
      table: {
        category: "State",
      },
    },
    content: {
      control: "object",
      description: "The content of the modal.",
      table: {
        category: "Content",
      },
    },
    footer: {
      control: "object",
      description: "The footer of the modal.",
      table: {
        category: "Content",
      },
    },
    hideModal: {
      action: "hideModal",
      description: "Callback function to hide the modal.",
      table: {
        category: "Actions",
      },
    },
    isOpen: {
      control: "boolean",
      description: "If true, the modal is open.",
      table: {
        category: "State",
      },
    },
  },
};

export default meta;

type Args = {
  title: string;
  description: string;
  dismissible: boolean;
  content: React.ReactNode;
  footer: React.ReactNode;
};

const Template: StoryFn<Args> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ height: "100vh", padding: "var(--s-spacing-small)" }}>
      <div style={{ width: "min-content" }}>
        <Button size="md" variant="primary" onClick={toggleModal}>
          Click here!
        </Button>
      </div>

      <Modal
        dismissible={args.dismissible}
        description={args.description}
        hideModal={toggleModal}
        title={args.title}
        isOpen={isOpen}
        content={args.content}
        footer={args.footer}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  description: "Description",
  dismissible: false,
  content: (
    <ContentModal>
      <div className="slot">
        <Icon icon="refresh" size="md" />
        Slot Content
      </div>
    </ContentModal>
  ),
  footer: (
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
  ),
};

export const Dismissible = Template.bind({});
Dismissible.args = {
  title: "Title",
  description: "Description",
  dismissible: true,
  content: (
    <ContentModal>
      <div className="slot">
        <Icon icon="refresh" size="md" />
        Slot Content
      </div>
    </ContentModal>
  ),
  footer: (
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
  ),
};
