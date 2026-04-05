import type { Meta, StoryObj } from "@storybook/react";
import CardDropdown from "./Carddropdown";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof CardDropdown> = {
  title: "Components/CardDropdown",
  component: CardDropdown,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**CardDropdown** is an expandable card that displays a persistent header and reveals additional content when clicked.

### When to use
- Display grouped information in a compact layout
- Lists with on-demand details
- Collapsible settings or sections
- Summaries with optional expansion

### Best practices
- Keep \`title\` short and objective — it is always visible
- Use \`description\` to provide context without requiring the user to expand
- The \`footer\` slot is best suited for actions (buttons, links) related to the content
- Avoid overly dense content in \`content\` — prefer splitting into multiple cards
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Main title displayed in the card header.",
    },
    description: {
      control: "text",
      description: "Descriptive text displayed below the title. Optional.",
    },
    content: {
      control: false,
      description:
        "Primary content revealed when the card is expanded. Accepts any `ReactNode`.",
    },
    footer: {
      control: false,
      description:
        "Footer displayed at the bottom of the dropdown. Ideal for actions and buttons.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardDropdown>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default state with all props provided. */
export const Default: Story = {
  args: {
    title: "Order information",
    description: "Click to see the details",
    content: (
      <p>This is the detailed content revealed after expanding the card.</p>
    ),
    footer: <button>View full order</button>,
  },
};

/** Title only — the simplest valid usage. */
export const TitleOnly: Story = {
  name: "Title only",
  args: {
    title: "Configuration item",
  },
};

/** With title and description, no expandable content. */
export const WithDescription: Story = {
  name: "With description",
  args: {
    title: "Subscription summary",
    description: "Pro plan · Renewal on 08/15/2025",
  },
};

/** With content but no footer. */
export const WithContentOnly: Story = {
  name: "With content, no footer",
  args: {
    title: "Technical details",
    description: "Product specifications",
    content: (
      <ul>
        <li>Processor: Intel i7</li>
        <li>RAM: 16GB</li>
        <li>Storage: 512GB SSD</li>
      </ul>
    ),
  },
};

/** With footer but no content. */
export const WithFooterOnly: Story = {
  name: "With footer, no content",
  args: {
    title: "Quick action",
    description: "Expand to access the action",
    footer: <button>Execute action</button>,
  },
};

/** Simulates denser content to validate the height animation behavior. */
export const WithLongContent: Story = {
  name: "With long content",
  args: {
    title: "Terms and conditions",
    description: "Please read carefully before proceeding",
    content: (
      <div>
        {Array.from({ length: 6 }, (_, i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        ))}
      </div>
    ),
    footer: <button>Accept terms</button>,
  },
};

/** Multiple cards stacked to validate list usage. */
export const MultipleCards: Story = {
  name: "Multiple cards",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <CardDropdown
        title="Order #1042"
        description="Placed on 07/01/2025"
        content={<p>Product: Notebook Pro X · Qty: 1</p>}
        footer={<button>View details</button>}
      />
      <CardDropdown
        title="Order #1043"
        description="Placed on 07/05/2025"
        content={<p>Product: Ergonomic Mouse · Qty: 2</p>}
        footer={<button>View details</button>}
      />
      <CardDropdown
        title="Order #1044"
        description="Awaiting payment"
        content={<p>Product: Mechanical Keyboard · Qty: 1</p>}
        footer={<button>Pay now</button>}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates how multiple `CardDropdown` components behave in a list — useful for feeds, history logs, and grouped settings.",
      },
    },
  },
};
