import React from "react";
import type { CardHeaderProps } from "../Card.types";

/**
 * Header slot containing a title and supporting description.
 * The title is rendered as an `<h2>` — correct for card components
 * that appear within a larger page context.
 *
 * @example
 * <CardHeader title="Plan name" description="Everything you need to get started." />
 */
const CardHeader: React.FC<CardHeaderProps> = ({ children, ...rest }) => (
  <div className="card-header" {...rest}>
    {children}
  </div>
);

CardHeader.displayName = "CardHeader";

export default CardHeader;
