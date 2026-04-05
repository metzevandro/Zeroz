import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./Breadcrumb";
import type { BreadcrumbItem } from "./Breadcrumb.types";
import "../../styles.scss";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays a horizontal navigation trail showing the user's current location within the application hierarchy. The last item always represents the current page and is never a link.",
      },
    },
  },
  argTypes: {
    items: {
      control: "object",
      description:
        "Ordered array of breadcrumb steps. The last item is the current page (rendered as text, not a link).",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

// --- Shared fixtures ---

const SHORT_TRAIL: BreadcrumbItem[] = [
  { pageName: "Home", href: "/" },
  { pageName: "Products", href: "/products" },
];

const MEDIUM_TRAIL: BreadcrumbItem[] = [
  { pageName: "Home", href: "/" },
  { pageName: "Products", href: "/products" },
  { pageName: "Laptops", href: "/products/laptops" },
];

const LONG_TRAIL: BreadcrumbItem[] = [
  { pageName: "Home", href: "/" },
  { pageName: "Store", href: "/store" },
  { pageName: "Electronics", href: "/store/electronics" },
  { pageName: "Laptops", href: "/store/electronics/laptops" },
  { pageName: "MacBook Pro", href: "/store/electronics/laptops/macbook-pro" },
];

// --- Playground ---

export const Playground: Story = {
  name: "Playground",
  args: {
    items: [
      {
        pageName: "Home",
        href: "/",
      },
      {
        pageName: "Products",
        href: "/products",
      },
      {
        pageName: "Laptops",
        href: "/products/laptops",
      },
    ],
  },
};

// --- Depth variations ---

export const TwoLevels: Story = {
  name: "Two levels",
  args: { items: SHORT_TRAIL },
  parameters: {
    docs: {
      description: {
        story: "Minimum useful breadcrumb — root and current page.",
      },
    },
  },
};

export const ThreeLevels: Story = {
  name: "Three levels",
  args: { items: MEDIUM_TRAIL },
  parameters: {
    docs: {
      description: {
        story: "Standard depth for most application hierarchies.",
      },
    },
  },
};

export const FiveLevels: Story = {
  name: "Five levels (deep hierarchy)",
  args: { items: LONG_TRAIL },
  parameters: {
    docs: {
      description: {
        story:
          "Deep hierarchy trail. Consider truncating middle items for very long paths.",
      },
    },
  },
};

// --- Edge cases ---

export const SingleItem: Story = {
  name: "Single item (edge case)",
  args: {
    items: [{ pageName: "Home", href: "/" }],
  },
  parameters: {
    docs: {
      description: {
        story:
          'A single item renders as plain text with `aria-current="page"`. Avoid this in production — a one-item breadcrumb has no navigational value.',
      },
    },
  },
};

export const LongLabels: Story = {
  name: "Long page names",
  args: {
    items: [
      { pageName: "Home", href: "/" },
      { pageName: "Enterprise Solutions", href: "/enterprise" },
      {
        pageName: "Cloud Infrastructure Management",
        href: "/enterprise/cloud",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Tests layout with longer page name labels. Keep names short in production for best UX.",
      },
    },
  },
};

// --- Real-world context ---

export const EcommerceTrail: Story = {
  name: "Real-world — E-commerce",
  render: () => (
    <div style={{ padding: "16px" }}>
      <Breadcrumb
        items={[
          { pageName: "Home", href: "/" },
          { pageName: "Electronics", href: "/electronics" },
          { pageName: "Laptops", href: "/electronics/laptops" },
          {
            pageName: 'MacBook Pro 14"',
            href: "/electronics/laptops/macbook-pro-14",
          },
        ]}
      />
      <h1 style={{ marginTop: "16px", fontSize: "24px", fontWeight: 700 }}>
        MacBook Pro 14"
      </h1>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Breadcrumb in a typical e-commerce product page context, paired with a page heading.",
      },
    },
  },
};

export const DashboardTrail: Story = {
  name: "Real-world — Dashboard",
  render: () => (
    <div style={{ padding: "16px" }}>
      <Breadcrumb
        items={[
          { pageName: "Dashboard", href: "/dashboard" },
          { pageName: "Settings", href: "/dashboard/settings" },
          {
            pageName: "Notifications",
            href: "/dashboard/settings/notifications",
          },
        ]}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Breadcrumb used within a settings or configuration section of a dashboard.",
      },
    },
  },
};
