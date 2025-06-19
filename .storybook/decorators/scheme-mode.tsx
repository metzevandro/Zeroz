import React, { useEffect } from "react";
import { addons } from "@storybook/preview-api";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";

export function SchemeMode(story, context) {
  useEffect(() => {
    const channel = addons.getChannel();
    const handler = (isDark) => {
      if (context.globals.scheme !== (isDark ? "dark" : "light")) {
        channel.emit("updateGlobals", {
          globals: { scheme: isDark ? "dark" : "light" },
        });
      }
    };
    channel.on(DARK_MODE_EVENT_NAME, handler);
    channel.emit("getDarkMode");
    return () => channel.off(DARK_MODE_EVENT_NAME, handler);
  }, [context.globals.scheme]);

  const targetBg = document.querySelector(".sb-show-main");
  const listTargetInDocs = document.querySelectorAll(".docs-story");
  const backgrounds = {
    dark: "#111827",
    light: "#ffffff",
  };

  document.documentElement.setAttribute("data-theme", context.globals.scheme);
  if (targetBg)
    (targetBg as HTMLElement).style.backgroundColor =
      backgrounds[context.globals.scheme];
  listTargetInDocs.forEach((item) => {
    (item as HTMLElement).style.backgroundColor =
      backgrounds[context.globals.scheme];
  });

  return (
    <div style={{ backgroundColor: backgrounds[context.globals.scheme] }}>
      {story()}
    </div>
  );
}

export const scheme = {
  description: "Theme",
  defaultValue: "light",
  toolbar: false,
};
