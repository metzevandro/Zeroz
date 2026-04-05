import React from "react";
import { DocsContainer } from "@storybook/addon-docs/blocks";
import { themes } from "storybook/theming";
import { useIsDarkMode } from "../hooks/useDarkMode";

const brandBase = "#9333ea";
const brandMedium = "#7e22ce";

const lightTheme = {
  ...themes.light,
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appBorderColor: "#dfe3eb",
  textColor: "#0e1524",
  textInverseColor: "#ffffff",
  barBg: "#ffffff",
  barSelectedColor: brandBase,
  barHoverColor: brandMedium,
  inputBg: "#ffffff",
  inputBorder: "#dfe3eb",
  inputTextColor: "#0e1524",
  colorPrimary: brandBase,
  colorSecondary: brandBase,
  brandTitle: "ZeroZ",
  brandUrl: "https://github.com/metzevandro/Zeroz",
};

const darkTheme = {
  ...themes.dark,
  appBg: "#0e1524",
  appContentBg: "#0e1524",
  appBorderColor: "#323c4d",
  textColor: "#f6f8fb",
  textInverseColor: "#ffffff",
  barBg: "#1d2736",
  barSelectedColor: brandBase,
  barHoverColor: brandMedium,
  inputBg: "#1d2736",
  inputBorder: "#323c4d",
  inputTextColor: "#f6f8fb",
  colorPrimary: brandBase,
  colorSecondary: brandBase,
  brandTitle: "ZeroZ",
  brandUrl: "https://github.com/metzevandro/Zeroz",
};

export function ThemedDocsContainer(props: any) {
  const isDarkMode = useIsDarkMode();

  return (
    <DocsContainer
      theme={isDarkMode ? darkTheme : lightTheme}
      context={props.context}
    >
      {props.children}
    </DocsContainer>
  );
}
