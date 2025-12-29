type Scheme = "dark" | "light";

export function SchemeMode(story: any, context: any) {
  const scheme = (context.globals.scheme ?? "light") as Scheme;

  const backgrounds: Record<Scheme, string> = {
    dark: "#111827",
    light: "#ffffff",
  };

  document.documentElement.setAttribute("data-theme", scheme);

  const targetBg = document.querySelector(".sb-show-main");
  const listTargetInDocs = document.querySelectorAll(".docs-story");

  if (targetBg)
    (targetBg as HTMLElement).style.backgroundColor = backgrounds[scheme];

  listTargetInDocs.forEach((item) => {
    (item as HTMLElement).style.backgroundColor = backgrounds[scheme];
  });

  return (
    <div style={{ backgroundColor: backgrounds[scheme] }}>
      {story()}
    </div>
  );
}

export const scheme = {
  description: "Theme",
  defaultValue: "light",
  toolbar: false,
};
