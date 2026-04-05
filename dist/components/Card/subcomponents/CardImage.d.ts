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
declare const CardImage: React.FC<CardImageProps>;
export default CardImage;
