import type { HTMLAttributes } from "react";

import type CardImage from "./subcomponents/CardImage";
import type CardHeader from "./subcomponents/CardHeader";
import type CardContent from "./subcomponents/CardContent";
import type CardFooter from "./subcomponents/CardFooter";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the card. Compose using Card subcomponents:
   * `CardImage`, `CardHeader`, `CardContent`, `CardFooter`.
   *
   * @example
   * <Card>
   *   <CardImage><img src="..." alt="..." /></CardImage>
   *   <CardHeader>...</CardHeader>
   *   <CardContent>...</CardContent>
   *   <CardFooter>...</CardFooter>
   * </Card>
   */
  children?: React.ReactNode;
}

export interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
  /** Image element to display at the top of the card. */
  children: React.ReactNode;
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Header content of the card. */
  children: React.ReactNode;
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  /** Main body content of the card. */
  children: React.ReactNode;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  /** Footer content — typically actions, buttons, or metadata. */
  children: React.ReactNode;
}

export interface CardComposition {
  Image: typeof CardImage;
  Header: typeof CardHeader;
  Content: typeof CardContent;
  Footer: typeof CardFooter;
}
