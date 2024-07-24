import Image from "./Image";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
  title: "Components/Image",
  component: Image,
  parameters: {
    layout: "centered",
    docs: {
      page: function () {
        return (
          <>
            <Title />
            <Subtitle>Component</Subtitle>
            <p>
              The <strong>Image</strong> display a preview of the images.
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
    src: {
      description: "The URL of the image",
      control: {
        type: "text",
      },
      table: {
        category: "Content",
      },
    },
    width: {
      description: "The width of the image",
      control: {
        type: "text",
      },
      table: {
        category: "Appearance",
      },
    },
    height: {
      description: "The height of the image",
      control: {
        type: "text",
      },
      table: {
        category: "Appearance",
      },
    },
    alt: {
      description: "The alt text for the image",
      control: {
        type: "text",
      },
      table: {
        category: "Content",
      },
    },
    skeleton: {
      description: "Whether to display a skeleton loading state",
      control: {
        type: "boolean",
      },
      table: {
        category: "Behavior",
      },
    },
  },
};
export default meta;
export var Default = {
  args: {
    src: "https://picsum.photos/200",
    width: "200",
    height: "200",
    alt: "Image",
    skeleton: false,
  },
};
export var Skeleton = {
  args: {
    src: "https://picsum.photos/200",
    width: "200",
    height: "200",
    alt: "Image",
    skeleton: true,
  },
};
