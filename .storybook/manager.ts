import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";
import { DARK_MODE_EVENT_NAME } from "@vueless/storybook-dark-mode";

const purpleLight = "#9333ea";
const neutralLight = "#f6f8fb";
const neutralDark = "#0e1524";

const lightTheme = create({
  base: "light",
  fontBase: '"Inter", sans-serif',
  fontCode: '"Inter", sans-serif',
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
  brandTitle: "ZeroZ",
  brandImage: "/logo-sm.svg",
  brandTarget: "_blank",
  brandUrl: "https://github.com/metzevandro/Zeroz",
  colorSecondary: purpleLight,
  colorPrimary: purpleLight,
});

const darkTheme = create({
  base: "dark",
  fontBase: '"Inter", sans-serif',
  fontCode: '"Inter", sans-serif',
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
  brandTitle: "ZeroZ",
  brandImage: "/logo-sm.svg",
  brandTarget: "_blank",
  brandUrl: "https://github.com/metzevandro/Zeroz",
  colorSecondary: purpleLight,
  colorPrimary: purpleLight,
});

addons.setConfig({
  theme: lightTheme,
});

const channel = addons.getChannel();
channel.on(DARK_MODE_EVENT_NAME, (isDarkMode: boolean) => {
  addons.setConfig({
    theme: isDarkMode ? darkTheme : lightTheme,
  });
});
