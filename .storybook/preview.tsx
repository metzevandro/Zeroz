import React from "react";
import { addons } from "@storybook/preview-api";
import { DocsContainer } from "@storybook/addon-docs";
import { themes } from "@storybook/theming";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
import { Preview } from "@storybook/react";
import { SchemeMode, scheme } from "./decorators/scheme-mode";
import { brand, BrandMode } from "./decorators/brand-mode";
import "./global-storybook.css";

const channel = addons.getChannel();

const CustomDocsContainer = (props: any) => {
  const [isDark, setDark] = React.useState();

  React.useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.removeListener(DARK_MODE_EVENT_NAME, setDark);
  }, [channel, setDark]);

  return (
    <div>
      <DocsContainer {...props} />
    </div>
  );
};

const GlobalStyleDecorator = (Story: any) => {
  const [isLight, setIsLight] = React.useState(true);
  React.useEffect(() => {
    const html = document.documentElement;
    const checkMode = () => {
      const classList = html.classList;
      const light =
        classList.contains("lights-on") && classList.contains("bar");
      setIsLight(light);
      html.classList.toggle("storybook-light", light);
      html.classList.toggle("storybook-dark", !light);
    };
    checkMode();
    const observer = new MutationObserver(checkMode);
    observer.observe(html, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => {
      observer.disconnect();
      html.classList.remove("storybook-light", "storybook-dark");
    };
  }, []);
  return <Story />;
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
      disable: true,
    },
    darkMode: {
      dark: { ...themes.dark, appBg: "rgb(27, 28, 29)" },
      light: { ...themes.normal, appBg: "#ffffff" },
      current: "light",
      darkClass: ["lights-out", "foo"],
      lightClass: ["lights-on", "bar", "storybook-light"],
      classTarget: "html",
      stylePreview: true,
      toolbar: true,
    },
    docs: {
      container: CustomDocsContainer,
    },
  },

  decorators: [GlobalStyleDecorator, SchemeMode, BrandMode],

  globalTypes: {
    scheme,
    brand,
  },

  tags: ["autodocs", "autodocs", "autodocs"],
};

export default preview;
