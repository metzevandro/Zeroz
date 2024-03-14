import { Preview } from '@storybook/react';
import { SchemeMode, scheme } from "./decorators/scheme-mode";
import { brand, BrandMode } from './decorators/brand-mode';

const preview: Preview = {
  
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      disable: true,
    },
  },
  decorators: [
    SchemeMode,
    BrandMode
  ],
  globalTypes: {
    scheme,
    brand
  },
}


export default preview;
