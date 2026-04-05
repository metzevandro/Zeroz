import React, { useEffect } from "react";

interface BrandModeProps {
  children: React.ReactNode;
  brand: string;
}

function BrandModeContent({ children, brand }: BrandModeProps) {
  useEffect(() => {
    document.documentElement.setAttribute("data-company", brand);
  }, [brand]);

  return (
    <div data-company={brand}>
      <style>{`
        [style*="color: rgb(2, 156, 253)"] {
          color: var(--s-color-content-highlight) !important;
        }

        .css-1e3avu6 {
          color: var(--s-color-content-highlight) !important;
        }
      `}</style>
      {children}
    </div>
  );
}

export function BrandMode(story: any, context: any) {
  return (
    <BrandModeContent brand={context.globals.brand}>{story()}</BrandModeContent>
  );
}

export const brand = {
  description: "Brand",
  defaultValue: "zeroz",
  toolbar: {
    title: "Brand",
    icon: "admin" as any,
    items: [
      { title: "Zeroz", value: "zeroz" },
      { title: "Whitelabel", value: "whitelabel" },
    ],
    dynamicTitle: true,
  },
};
