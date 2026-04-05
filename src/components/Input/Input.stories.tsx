import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Input from "./Input";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Input** is a flexible text input field with support for icons, password toggling,
inline validation feedback, and a skeleton loading state.

The \`label\` prop is automatically linked to the underlying \`<input>\` via \`htmlFor\` / \`id\`,
satisfying **WCAG 2.1 SC 1.3.1** (Form Labels) out of the box.

### When to use
- Any form field requiring free-text input
- Password fields with show/hide toggle
- Fields that need inline validation feedback
- Loading states where the form is not yet ready

### Best practices
- Always provide a \`label\` — it is required for accessibility
- Use \`error\` + \`textError\` together to communicate validation failures
- Use \`typeIcon\` to reinforce the field's purpose (e.g. \`"mail"\`, \`"search"\`)
- Use \`skeleton\` during async loading instead of hiding the field entirely
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label associated with the input via `htmlFor` / `id`.",
    },
    icon: {
      control: "text",
      description: "Material Symbol icon name rendered on the right side.",
    },
    fillIcon: {
      control: "boolean",
      description: "Renders the icon in its filled variant.",
    },
    error: {
      control: "boolean",
      description: "Applies error styling to the input.",
    },
    textError: {
      control: "text",
      description:
        "Validation message shown below the input when `error` is true.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the input field.",
    },
    skeleton: {
      control: "boolean",
      description: "Replaces the input with a skeleton placeholder.",
    },
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "tel", "url"],
      description: "Native HTML input type.",
    },
    value: {
      control: "text",
      description: "Controlled value of the input.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default text input with a label and trailing icon. */
export const Default: Story = {
  args: {
    label: "Email address",
    icon: "mail",
    placeholder: "you@example.com",
  },
};

/** Input without a trailing icon. */
export const NoIcon: Story = {
  name: "No icon",
  args: {
    label: "Full name",
    placeholder: "Jane Doe",
  },
};

/** Password input with show/hide toggle. */
export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Password inputs automatically render a visibility toggle instead of `typeIcon`. Clicking it switches between `text` and `password` input types.",
      },
    },
  },
};

/** Error state with a validation message. */
export const WithError: Story = {
  name: "Error state",
  args: {
    label: "Username",
    icon: "person",
    value: "taken_user",
    error: true,
    textError: "This username is already taken.",
  },
};

/** Disabled state — input is not interactive. */
export const Disabled: Story = {
  args: {
    label: "Account ID",
    value: "ACC-00421",
    icon: "badge",
    disabled: true,
  },
};

/** Skeleton loading state matching the input dimensions. */
export const Skeleton: Story = {
  args: {
    label: "Loading field...",
    skeleton: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The skeleton placeholder matches the real input's dimensions exactly, preventing layout shift when content loads.",
      },
    },
  },
};

/** Filled icon variant. */
export const FilledIcon: Story = {
  name: "Filled icon",
  args: {
    label: "Search",
    icon: "search",
    fillIcon: true,
    placeholder: "Search...",
  },
};

/** Multiple inputs in a form context to validate label association. */
export const FormContext: Story = {
  name: "Form context",
  render: () => (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "320px",
      }}
    >
      <Input label="First name" icon="person" placeholder="Jane" />
      <Input label="Last name" icon="person" placeholder="Doe" />
      <Input
        label="Email"
        icon="mail"
        type="email"
        placeholder="jane@example.com"
      />
      <Input label="Password" type="password" />
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Each input receives a unique `id` via `useId()`, ensuring independent label associations even when multiple instances are on the same page.",
      },
    },
  },
};
