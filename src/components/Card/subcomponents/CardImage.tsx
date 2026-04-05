import React from "react";
import type { CardImageProps } from "../Card.types";

/**
 * Optional image slot rendered at the top of the card.
 * The image fills the full card width with a fixed max-height of 288px.
 *
 * @example
 * <CardImage>
 *   <img src="/product.jpg" alt="Product photo" />
 * </CardImage>
 */
const CardImage: React.FC<CardImageProps> = ({ children, ...rest }) => (
  <div className="card-image" {...rest}>
    {children}
  </div>
);

CardImage.displayName = "CardImage";

export default CardImage;
