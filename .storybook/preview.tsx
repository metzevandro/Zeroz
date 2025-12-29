import { Preview } from "@storybook/nextjs";
import { SchemeMode, scheme } from "./decorators/scheme-mode";
import { brand, BrandMode } from "./decorators/brand-mode";
import "./global-storybook.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disabled: true,
    },
  },

  decorators: [SchemeMode, BrandMode],

  globalTypes: {
    scheme,
    brand,
  },

  tags: ["autodocs"],
};

export default preview;
