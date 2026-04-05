import "./Carddropdown.scss";
import React from "react";
import { CardDropdownProps } from "./Carddropdown.types";
/**
 * `CardDropdown` is an expandable card that displays a persistent header
 * and reveals additional content (body and footer) when clicked.
 *
 * Best suited for displaying grouped information in a compact form, such as
 * summaries, collapsible settings, or lists with on-demand details.
 *
 * @example
 * ```tsx
 * <CardDropdown
 *   title="Order details"
 *   description="Click to expand"
 *   content={<OrderDetails />}
 *   footer={<Button>View more</Button>}
 * />
 * ```
 */
declare const CardDropdown: React.FC<CardDropdownProps>;
export default CardDropdown;
