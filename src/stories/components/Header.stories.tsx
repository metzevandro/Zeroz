import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Header, { HeaderProfile } from "../../components/Header/Header";
import Dropdown, {
  DropdownItem,
  DropdownTitle,
} from "../../components/Dropdown/Dropdown";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";

const meta: Meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>header</strong> lets users view notifications, access
            menus, and navigate to the home page by clicking the logo. It's
            always there at the top of the screen.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    letter: {
      description:
        "Gets the first letter of the first and last name from the username property of the HeaderProfile component.",
      control: {
        type: "text",
      },
      table: {
        category: "HeaderProfile",
      },
    },
    breadcrumb: {
      description: "Breadcrumb items for navigation.",
      control: {
        type: "object",
      },
      table: {
        category: "Header",
      },
    },
    children: {
      description:
        "Content for the header profile including username and dropdown.",
      control: {
        type: "text",
      },
      table: {
        category: "HeaderProfile",
      },
    },
    onClick: {
      description: "Toggles the sidebar for mobile or tablet views.",
      table: {
        category: "Header",
      },
    },
    skeleton: {
      description: "Displays the skeleton loader.",
      control: {
        type: "boolean",
      },
      table: {
        category: "Header",
      },
    },
    username: {
      description: "The name of the user.",
      control: {
        type: "text",
      },
      table: {
        category: "HeaderProfile",
      },
    },
    avatar_src: {
      description: "The source URL for the user's avatar image.",
      control: {
        type: "text",
      },
      table: {
        category: "HeaderProfile",
      },
    },
  },
};

export default meta;

type DefaultProps = {
  skeleton: boolean;
  username: string;
  avatar_src: string;
  letter: string;
};

const Template: StoryFn<DefaultProps> = (args) => {
  const [isOpenHeader, setIsOpenHeader] = useState(false);

  const toggleHeader = () => {
    setIsOpenHeader(!isOpenHeader);
  };

  return (
    <div style={{ height: "300px" }}>
      <Header
        skeleton={args.skeleton}
        breadcrumb={<Breadcrumb items={[{ pageName: "Home", href: "/" }]} />}
        onClick={toggleHeader}
      >
        <HeaderProfile
          skeleton={args.skeleton}
          name={args.username}
          letter={args.letter}
          avatar_src={args.avatar_src}
        >
          <Dropdown dropdown>
            <DropdownTitle content="Settings" />
            <DropdownItem content="Item 1" />
            <DropdownItem content="Item 2" />
            <DropdownItem content="Settings" typeIcon="settings" />
          </Dropdown>
        </HeaderProfile>
      </Header>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  username: "Username",
  avatar_src: "",
  skeleton: false,
};

export const Loading = Template.bind({});
Loading.args = {
  username: "Username",
  avatar_src: "",
  skeleton: true,
};
