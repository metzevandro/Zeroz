import { Preview } from "@storybook/nextjs";
import { themes } from "storybook/theming";
import { brand, BrandMode } from "./decorators/brand-mode";
import { ThemeProvider } from "./providers/ThemeProvider";
import { ThemedDocsContainer } from "./containers/ThemedDocsContainer";
import "./global-storybook.css";
import { INITIAL_VIEWPORTS } from "storybook/viewport";

const purpleLight = "#9333ea";
const neutralLight = "#f6f8fb";
const neutralDark = "#0e1524";

const lightTheme = {
  ...themes.light,
  appBg: neutralLight,
  appContentBg: "#ffffff",
  appBorderColor: "#dfe3eb",
  textColor: "#323c4d",
  textInverseColor: "#ffffff",
  barBg: "#ffffff",
  barSelectedColor: purpleLight,
  barHoverColor: purpleLight,
  booleanBg: "#ffffff",
  booleanSelectedBg: purpleLight,
  inputBg: "#ffffff",
  inputBorder: "#dfe3eb",
  inputTextColor: "#323c4d",
  inputBorderRadius: 4,
  brandTitle: "ZeroZ",
  brandImage: "/logo-sm.svg",
  brandUrl: "https://github.com/metzevandro/Zeroz",
  colorSecondary: purpleLight,
  colorPrimary: purpleLight,
};

const darkTheme = {
  ...themes.dark,
  appBg: neutralDark,
  appContentBg: "#1d2736",
  appBorderColor: "#323c4d",
  textColor: "#f6f8fb",
  textInverseColor: "#1d2736",
  barBg: "#1d2736",
  barSelectedColor: purpleLight,
  barHoverColor: purpleLight,
  booleanBg: "#1d2736",
  booleanSelectedBg: purpleLight,
  inputBg: "#323c4d",
  inputBorder: "#485261",
  inputTextColor: "#f6f8fb",
  inputBorderRadius: 4,
  brandTitle: "ZeroZ",
  brandImage: "/logo-sm.svg",
  brandUrl: "https://github.com/metzevandro/Zeroz",
  colorSecondary: purpleLight,
  colorPrimary: purpleLight,
};

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
    darkMode: {
      dark: darkTheme,
      light: lightTheme,
      current: "light",
      stylePreview: false,
    },
    docs: {
      container: ThemedDocsContainer,
    },
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
  },

  decorators: [(story) => <ThemeProvider>{story()}</ThemeProvider>, BrandMode],

  globalTypes: {
    brand,
  },

  tags: ["autodocs"],
};

export default preview;
