import "./Carddropdown.scss";
import React from "react";
import { CardDropdownProps } from "./Carddropdown.types";
import { useCardDropdown } from "./hooks/useCardDropdown";
import { getDropdownState } from "./utils/cardDropdown.utils";
import {
  CardDropdownBody,
  CardDropdownHeader,
} from "./subcomponents/CardDropdown.parts";

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
const CardDropdown: React.FC<CardDropdownProps> = ({
  title,
  description,
  content,
  footer,
}) => {
  const { isOpen, contentHeight, contentRef, toggle } = useCardDropdown();
  const state = getDropdownState(isOpen);

  return (
    <div className="card-dropdown">
      <CardDropdownHeader
        title={title}
        description={description}
        state={state}
        onClick={toggle}
      />
      <CardDropdownBody
        content={content}
        footer={footer}
        state={state}
        height={contentHeight}
        contentRef={contentRef}
      />
    </div>
  );
};

export default CardDropdown;
