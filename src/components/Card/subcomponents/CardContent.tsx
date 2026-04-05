import React from "react";
import type { CardContentProps } from "../Card.types";

/**
 * Main body content slot of the card.
 * Use for forms, text, lists, or any primary card content.
 *
 * @example
 * <CardContent>
 *   <p>Some descriptive content here.</p>
 * </CardContent>
 */
const CardContent: React.FC<CardContentProps> = ({ children, ...rest }) => (
  <div className="card-content" {...rest}>
    {children}
  </div>
);

CardContent.displayName = "CardContent";

export default CardContent;
