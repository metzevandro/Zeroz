import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import TableList from "./TableList";
import "../../styles.scss";
import Badge from "../Badge";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof TableList> = {
  title: "Components/TableList",
  component: TableList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**TableList** renders a column-oriented data table with header labels,
configurable cell density, and automatic horizontal scroll detection.

Each cell accepts any \`React.ReactNode\`, so you can render icons, badges,
links, or any custom component alongside plain text.

### When to use
- Displaying structured records (users, orders, settings)
- Any tabular data that benefits from consistent column alignment

### Best practices
- Ensure \`columns.length\` matches the length of every row in \`data\`
- Use \`size="sm"\` for dense dashboards and \`size="md"\` for general content
- Wrap complex cell content in a small component rather than inline JSX
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md"],
      description: "Cell density — `sm` is compact, `md` is comfortable.",
    },
    columns: {
      control: "object",
      description: "Column header labels.",
    },
    data: {
      control: false,
      description: "Row data as a 2D array of `ReactNode`.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableList>;

// ─── Fixtures ─────────────────────────────────────────────────────────────────

const columns = ["Name", "Role", "Department", "Status"];

const data = [
  ["Alice Martin", "Engineer", "Product", "Active"],
  ["Bob Chen", "Designer", "Design", "Active"],
  ["Carol Smith", "Product Manager", "Product", "On leave"],
  ["David Park", "Engineer", "Platform", "Active"],
  ["Eva Rodrigues", "Data Analyst", "Analytics", "Active"],
];

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Medium density — comfortable row height. */
export const Medium: Story = {
  args: { columns, data, size: "md" },
};

/** Small density — compact row height for dense views. */
export const Small: Story = {
  args: { columns, data, size: "sm" },
};

/** Narrow container that triggers horizontal overflow detection. */
export const Overflow: Story = {
  name: "Horizontal overflow",
  render: () => (
    <div style={{ width: "320px", overflow: "hidden" }}>
      <TableList columns={columns} data={data} size="md" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "When the table overflows its container, the `overflow-ativo` class is applied — typically used to show a scroll shadow or indicator via CSS.",
      },
    },
  },
};

/** Cells with ReactNode content — badges and custom elements. */
export const RichCells: Story = {
  name: "Rich cell content",
  render: () => {
    return (
      <TableList
        size="sm"
        columns={["Name", "Role", "Status"]}
        data={[
          [
            "Alice Martin",
            "Engineer",
            <Badge label="Active" type="light" variant="success" />,
          ],
          [
            "Bob Chen",
            "Designer",
            <Badge label="Away" type="light" variant="warning" />,
          ],
          [
            "Carol Smith",
            "PM",
            <Badge label="On leave" type="light" variant="default" />,
          ],
        ]}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Each cell accepts any `ReactNode` — render badges, icons, links, or custom components directly inside the table.",
      },
    },
  },
};

/** Single column edge case. */
export const SingleColumn: Story = {
  name: "Single column",
  args: {
    columns: ["Name"],
    data: [["Alice"], ["Bob"], ["Carol"]],
    size: "md",
  },
};
