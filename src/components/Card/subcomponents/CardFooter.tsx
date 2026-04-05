import React from "react";
import type { CardFooterProps } from "../Card.types";

/**
 * Footer slot rendered at the bottom of the card with a distinct background.
 * Typically used for action buttons, links, or supplementary metadata.
 *
 * @example
 * <CardFooter>
 *   <Button variant="primary">Confirm</Button>
 *   <Button variant="secondary">Cancel</Button>
 * </CardFooter>
 */
const CardFooter: React.FC<CardFooterProps> = ({ children, ...rest }) => (
  <div className="card-footer" {...rest}>
    {children}
  </div>
);

CardFooter.displayName = "CardFooter";

export default CardFooter;
