import React from "react";

export function SchemeMode(story, context) {
  const targetBg = document.querySelector(".sb-show-main");
  const listTargetInDocs = document.querySelectorAll(".docs-story");
  const backgrounds = {
    dark: "#22262f",
    light: "#ffffff",
  };

  document.documentElement.setAttribute("data-theme", context.globals.scheme);
  targetBg.style.backgroundColor = backgrounds[context.globals.scheme];

  listTargetInDocs.forEach((item) => {
    item.style.backgroundColor = backgrounds[context.globals.scheme];
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
  toolbar: {
    title: "Theme",
    items: [
      { title: "Light", value: "light", icon: "sun" },
      { title: "Dark", value: "dark", icon: "moon" },
    ],
    dynamicTitle: true,
  },
};
