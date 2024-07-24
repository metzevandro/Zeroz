import Page from "./Page";
import Icon from "../Icon/Icon";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
    title: "Templates/Page",
    component: Page,
    parameters: {
        layout: "padded",
        docs: {
            page: function () { return (<>
          <Title />
          <Subtitle>Template</Subtitle>
          <p>
            The <strong>Page</strong> template helps you create pages. It gives
            you all the things you need to make different layouts.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>); },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        children: {
            name: "Children",
            description: "Content rendered inside the page.",
            control: {
                disable: true,
            },
            table: {
                category: "Content",
            },
        },
        namePage: {
            name: "Page Name",
            description: "Name of the page displayed.",
            table: {
                category: "Appearance",
            },
        },
        description: {
            name: "Page Description",
            description: "Description of the page content.",
            table: {
                category: "Appearance",
            },
        },
        withBackButton: {
            name: "Enable Back Button",
            description: "Determines if the back button is present.",
            table: {
                category: "Actions",
            },
        },
        onClickBackButton: {
            name: "Back Button Action",
            description: "Callback function for back button click.",
            action: "clicked",
            table: {
                category: "Actions",
            },
        },
        withActionPrimary: {
            name: "Enable Primary Action",
            description: "Determines if the primary action is enabled.",
            table: {
                category: "Actions",
            },
        },
        onClickActionPrimary: {
            name: "Primary Button Action",
            description: "Callback function for primary button click.",
            action: "clicked",
            table: {
                category: "Actions",
            },
        },
        withActionSecondary: {
            name: "Enable Secondary Action",
            description: "Determines if the secondary action is enabled.",
            table: {
                category: "Actions",
            },
        },
        onClickActionSecondary: {
            name: "Secondary Button Action",
            description: "Callback function for secondary button click.",
            action: "clicked",
            table: {
                category: "Actions",
            },
        },
        buttonContentPrimary: {
            name: "Primary Button Content",
            description: "Text displayed in the primary button.",
            table: {
                category: "Buttons",
            },
        },
        iconButtonPrimary: {
            name: "Primary Button Icon",
            description: "Icon displayed in the primary button.",
            table: {
                category: "Buttons",
            },
        },
        skeletonButtonPrimary: {
            name: "Primary Button Skeleton",
            description: "Determines if the primary button is in a loading state.",
            table: {
                category: "Buttons",
            },
        },
        buttonContentSecondary: {
            name: "Secondary Button Content",
            description: "Text displayed in the secondary button.",
            table: {
                category: "Buttons",
            },
        },
        iconButtonSecondary: {
            name: "Secondary Button Icon",
            description: "Icon displayed in the secondary button.",
            table: {
                category: "Buttons",
            },
        },
        skeletonButtonSecondary: {
            name: "Secondary Button Skeleton",
            description: "Determines if the secondary button is in a loading state.",
            table: {
                category: "Buttons",
            },
        },
    },
};
export default meta;
export var Default = {
    args: {
        namePage: "Name Page",
        description: "Description",
        buttonContentPrimary: "Button",
        buttonContentSecondary: "Button",
        withBackButton: true,
        withActionPrimary: true,
        iconButtonPrimary: "settings",
        iconButtonSecondary: "ac_unit",
        withActionSecondary: true,
        skeletonButtonPrimary: false,
        skeletonButtonSecondary: false,
        onClickActionPrimary: function () { return alert("Primary button clicked"); },
        onClickActionSecondary: function () { return alert("Secondary button clicked"); },
        onClickBackButton: function () { return alert("Back button clicked"); },
        children: (<>
        <div className="slot">
          <Icon icon="refresh" size="md"/>
          Slot Content
        </div>
        <div className="slot">
          <Icon icon="refresh" size="md"/>
          Slot Content
        </div>
        <div className="slot">
          <Icon icon="refresh" size="md"/>
          Slot Content
        </div>
        <div className="slot">
          <Icon icon="refresh" size="md"/>
          Slot Content
        </div>
      </>),
    },
};
