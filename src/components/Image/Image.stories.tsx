import type { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";
import React from "react";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Image** is a thin wrapper around the native \`<img>\` element that adds
a skeleton loading state matching the image dimensions.

All standard \`<img>\` HTML attributes (e.g. \`loading\`, \`decoding\`, \`crossOrigin\`)
are forwarded to the underlying element, so it can be used as a drop-in replacement.

### When to use
- Anywhere an image needs a skeleton placeholder during loading
- When you want a consistent \`image-root\` class applied across all images in the system

### Best practices
- Always provide a meaningful \`alt\` description for non-decorative images (WCAG 2.1 SC 1.1.1)
- Pass an empty string \`alt=""\` only for purely decorative images
- Provide both \`width\` and \`height\` to prevent layout shift (CLS)
- Use \`skeleton\` while the image URL is being fetched, not while the browser loads the image itself
        `,
      },
    },
  },
  argTypes: {
    src: {
      control: "text",
      description: "URL of the image to display.",
    },
    alt: {
      control: "text",
      description: "Accessible description of the image.",
    },
    width: {
      control: "text",
      description:
        "Rendered width (passed to both the `<img>` and `<Skeleton>`).",
    },
    height: {
      control: "text",
      description:
        "Rendered height (passed to both the `<img>` and `<Skeleton>`).",
    },
    skeleton: {
      control: "boolean",
      description: "Renders a skeleton placeholder instead of the image.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Standard image with explicit dimensions. */
export const Default: Story = {
  args: {
    src: "https://picsum.photos/seed/ds/400/200",
    alt: "Sample landscape photo",
    width: "400",
    height: "200",
  },
};

/** Square image — common for avatars or thumbnails. */
export const Square: Story = {
  args: {
    src: "https://picsum.photos/seed/ds2/120/120",
    alt: "Square thumbnail",
    width: "120",
    height: "120",
  },
};

/** Skeleton loading state matching the image dimensions. */
export const SkeletonState: Story = {
  name: "Skeleton (loading)",
  args: {
    src: "https://picsum.photos/seed/ds/400/200",
    alt: "Sample photo",
    width: "400",
    height: "200",
    skeleton: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The skeleton placeholder matches the same `width` and `height` as the image, preventing layout shift when the real image loads in.",
      },
    },
  },
};

/** Lazy-loaded image using native browser attribute. */
export const LazyLoaded: Story = {
  name: "Lazy loaded",
  args: {
    src: "https://picsum.photos/seed/ds3/400/200",
    alt: "Lazy loaded image",
    width: "400",
    height: "200",
    loading: "lazy",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Native `<img>` attributes like `loading` are forwarded directly to the underlying element via the rest spread.",
      },
    },
  },
};
