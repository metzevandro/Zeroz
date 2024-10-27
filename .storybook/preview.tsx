import { Preview } from "@storybook/react";
import { SchemeMode, scheme } from "./decorators/scheme-mode";
import { brand, BrandMode } from "./decorators/brand-mode";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
  },

  decorators: [SchemeMode, BrandMode],

  globalTypes: {
    scheme,
    brand,
  },

  tags: ["autodocs", "autodocs", "autodocs"],
};

export default preview;
