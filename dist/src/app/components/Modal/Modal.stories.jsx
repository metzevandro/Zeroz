import Modal, { ContentModal, FooterModal } from "./Modal";
import Button from "../Button/Button";
import { useState } from "react";
import Icon from "../Icon/Icon";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
    title: "Components/Modal",
    component: Modal,
    parameters: {
        layout: "fullscreen",
        docs: {
            page: function () { return (<>
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
        </>); },
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
var Template = function (args) {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var toggleModal = function () {
        setIsOpen(!isOpen);
    };
    return (<div style={{ height: "100vh", padding: "var(--s-spacing-small)" }}>
      <div style={{ width: "min-content" }}>
        <Button size="md" variant="primary" label="Click here!" onClick={toggleModal}/>
      </div>

      <Modal dismissible={args.dismissible} description={args.description} hideModal={toggleModal} title={args.title} isOpen={isOpen} content={args.content} footer={args.footer}/>
    </div>);
};
export var Default = Template.bind({});
Default.args = {
    title: "Title",
    description: "Description",
    dismissible: false,
    content: (<ContentModal>
      <div className="slot">
        <Icon icon="refresh" size="md"/>
        Slot Content
      </div>
    </ContentModal>),
    footer: (<FooterModal>
      <div style={{ width: "min-content" }}>
        <ButtonGroup direction="row" variantFirstButton="primary" variantSecondButton="secondary" contentFirstButton="Button" contentSecondButton="Button"/>
      </div>
    </FooterModal>),
};
export var Dismissible = Template.bind({});
Dismissible.args = {
    title: "Title",
    description: "Description",
    dismissible: true,
    content: (<ContentModal>
      <div className="slot">
        <Icon icon="refresh" size="md"/>
        Slot Content
      </div>
    </ContentModal>),
    footer: (<FooterModal>
      <div style={{ width: "min-content" }}>
        <ButtonGroup direction="row" variantFirstButton="primary" variantSecondButton="secondary" contentFirstButton="Button" contentSecondButton="Button"/>
      </div>
    </FooterModal>),
};
