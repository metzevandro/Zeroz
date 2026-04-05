import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";
import "../../styles.scss";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",

    docs: {
      description: {
        component:
          "User identity visual component. Displays an image, initials, or default icon with skeleton support.",
      },
    },
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Defines the avatar size",
      table: { defaultValue: { summary: "md" } },
    },
    src: {
      control: "text",
      description: "Avatar image URL",
    },
    letter: {
      control: "text",
      description: "Name to generate initials from (e.g. 'John Smith' → 'JS')",
    },
    skeleton: {
      control: "boolean",
      description: "Displays the loading state",
      table: { defaultValue: { summary: "false" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// --- Individual stories ---

export const WithImage: Story = {
  name: "With Image",
  args: {
    size: "md",
    src: "https://i.pravatar.cc/150?img=3",
  },
};

export const WithInitials: Story = {
  name: "With Initials",
  args: {
    size: "md",
    letter: "John Smith",
  },
};

export const WithSingleLetter: Story = {
  name: "With Single Initial",
  args: {
    size: "md",
    letter: "Carlos",
  },
};

export const WithIcon: Story = {
  name: "Default Icon (Fallback)",
  args: {
    size: "md",
  },
};

export const Loading: Story = {
  name: "Skeleton (Loading)",
  args: {
    size: "md",
    skeleton: true,
  },
};

// --- Size showcase ---

export const Sizes: Story = {
  name: "Size Variations",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Avatar size="sm" letter="Anna Lee" />
      <Avatar size="md" letter="Anna Lee" />
      <Avatar size="lg" letter="Anna Lee" />
    </div>
  ),
};

// --- Variant showcase ---

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Avatar size="md" src="https://i.pravatar.cc/150?img=5" />
      <Avatar size="md" letter="John Smith" />
      <Avatar size="md" />
      <Avatar size="md" skeleton />
    </div>
  ),
};

// --- Skeleton across all sizes ---

export const SkeletonSizes: Story = {
  name: "Skeleton — Size Variations",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Avatar size="sm" skeleton />
      <Avatar size="md" skeleton />
      <Avatar size="lg" skeleton />
    </div>
  ),
};
