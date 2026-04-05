import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Brand from "./Brand";
import type { BrandSize } from "./Brand.types";
import "../../styles.scss";

// Placeholder logos for story rendering
const LOGO_SVG = "/logo-sm.svg";

const meta: Meta<typeof Brand> = {
  title: "Components/Brand",
  component: Brand,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Displays a brand identity asset (logo) at a controlled, consistent size. Accepts any valid HTML `<img>` attribute for full flexibility.",
      },
    },
  },
  argTypes: {
    src: {
      control: "text",
      description: "Path or URL to the brand image or logo",
    },
    alt: {
      control: "text",
      description:
        'Accessible description. Use "" for decorative logos, or a meaningful label when the logo is the primary brand identifier.',
      table: { defaultValue: { summary: '""' } },
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"] satisfies BrandSize[],
      description: "Controls the height of the brand container",
      table: { defaultValue: { summary: "md" } },
    },
    loading: {
      control: "radio",
      options: ["eager", "lazy"],
      description: "Native img loading strategy (from ImgHTMLAttributes)",
      table: { category: "HTML img attributes" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Brand>;

// --- Playground ---

export const Playground: Story = {
  name: "Playground",
  args: {
    src: LOGO_SVG,
    alt: "Brand logo",
    size: "md",
  },
};

// --- Size variations ---

export const Small: Story = {
  name: "Small (sm — 24px)",
  args: {
    src: LOGO_SVG,
    alt: "Brand logo",
    size: "sm",
  },
};

export const Medium: Story = {
  name: "Medium (md — 32px)",
  args: {
    src: LOGO_SVG,
    alt: "Brand logo",
    size: "md",
  },
};

export const Large: Story = {
  name: "Large (lg — 40px)",
  args: {
    src: LOGO_SVG,
    alt: "Brand logo",
    size: "lg",
  },
};

// --- Format variations ---

export const WithSVG: Story = {
  name: "SVG Source",
  args: {
    src: LOGO_SVG,
    alt: "Brand logo (SVG)",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story:
          "SVG is the recommended format — crisp at all sizes and screen densities.",
      },
    },
  },
};

// --- Accessibility ---

export const DecorativeLogo: Story = {
  name: "Decorative (alt empty)",
  args: {
    src: LOGO_SVG,
    alt: "",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use `alt=""` when the logo is decorative and nearby text already identifies the brand. This hides the image from screen readers.',
      },
    },
  },
};

// --- Native img attribute passthrough ---

export const LazyLoaded: Story = {
  name: "Lazy Loaded",
  args: {
    src: LOGO_SVG,
    alt: "Brand logo",
    size: "md",
    loading: "lazy",
  },
  parameters: {
    docs: {
      description: {
        story:
          'Brand forwards all `ImgHTMLAttributes` to the underlying `<img>`. Here, `loading="lazy"` defers the image until it enters the viewport.',
      },
    },
  },
};

// --- All sizes showcase ---

const ALL_SIZES: BrandSize[] = ["sm", "md", "lg"];

export const AllSizes: Story = {
  name: "All Sizes",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
      {ALL_SIZES.map((size) => (
        <Brand
          key={size}
          src={LOGO_SVG}
          alt={`Brand logo ${size}`}
          size={size}
        />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All available sizes rendered side by side for visual comparison.",
      },
    },
  },
};

// --- Real-world usage ---

export const InNavbar: Story = {
  name: "Real-world — Navbar",
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "12px 24px",
        borderBottom: "1px solid #e5e7eb",
        background: "#fff",
      }}
    >
      <Brand src={LOGO_SVG} alt="Acme Corp logo" size="md" />
      <span style={{ fontSize: "16px", fontWeight: 600 }}>Acme Corp</span>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Example of Brand used in a navigation bar alongside a brand name.",
      },
    },
  },
};
