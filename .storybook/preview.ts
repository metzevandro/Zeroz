import { Preview } from '@storybook/react';
import { SchemeMode, scheme } from "./decorators/scheme-mode";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      autodocs: true,
    },
    backgrounds: { disable: true },
  },
  decorators: [
    SchemeMode,
  ],
  globalTypes: {
    scheme,
  }

};

export default preview;
