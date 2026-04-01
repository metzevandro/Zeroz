import React from "react";
import { AsideSlotProps } from "./Aside.types";

/**
 * ## AsideContent
 *
 * Main content slot for the `Aside` component.
 * Applies the design system's standard spacing and layout to the panel body.
 *
 * ### When to use
 * Whenever you need to render content inside the scrollable area of the `Aside`.
 *
 * @example
 * ```tsx
 * <Aside
 *   content={
 *     <AsideContent>
 *       <Input label="Name" />
 *       <Input label="Email" />
 *     </AsideContent>
 *   }
 * />
 * ```
 */
const AsideContent: React.FC<AsideSlotProps> = ({ children }) => (
  <div className="aside-content">{children}</div>
);

AsideContent.displayName = "Aside.Content";

export default AsideContent;
