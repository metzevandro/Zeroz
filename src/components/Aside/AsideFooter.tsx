import React from "react";
import { AsideSlotProps } from "./Aside.types";

/**
 * ## AsideFooter
 *
 * Footer slot for the `Aside` component.
 * Intended for primary and secondary actions such as confirmation and cancel buttons.
 *
 * ### Best practices
 * - Keep a maximum of 2 actions in the footer to avoid overwhelming the user
 * - The primary action should always be on the right
 *
 * @example
 * ```tsx
 * <Aside
 *   footer={
 *     <AsideFooter>
 *       <Button variant="secondary">Cancel</Button>
 *       <Button variant="primary">Confirm</Button>
 *     </AsideFooter>
 *   }
 * />
 * ```
 */
const AsideFooter: React.FC<AsideSlotProps> = ({ children }) => <>{children}</>;

AsideFooter.displayName = "Aside.Footer";

export default AsideFooter;
