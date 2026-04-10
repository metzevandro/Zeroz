import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../src/stories/welcome/Welcome.mdx",
    "../src/stories/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/charts/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  staticDirs: ["../public"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@vueless/storybook-dark-mode",
    "@storybook/addon-designs"
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
