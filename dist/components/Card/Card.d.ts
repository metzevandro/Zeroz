import React from "react";
import type { CardComposition, CardProps } from "./Card.types";
import "./Card.scss";
/**
 * ## Card
 *
 * A contained surface for grouping related content and actions.
 * Built as a compound component — compose using the provided
 * subcomponents as `children`.
 *
 * ### Subcomponents
 * - `Card.Image` — full-width image at the top of the card
 * - `Card.Header` — title and description
 * - `Card.Content` — main body content
 * - `Card.Footer` — actions or metadata with distinct background
 *
 * ### Composition rules
 * - All subcomponents are optional — use only what the card needs
 * - Order matters visually: Image → Header → Content → Footer
 * - Do not pass slots as props — compose via `children` instead
 *
 * ### Recommended use cases
 * - Product, pricing, or feature showcase cards
 * - Dashboard summary widgets
 * - User profile or entity cards
 * - Settings or option selection panels
 *
 * ### Best practices
 * - Always include at least `CardHeader` or `CardContent` — an empty card has no value
 * - Use `CardFooter` for actions, not inside `CardContent`
 * - Provide meaningful `alt` text on images inside `CardImage`
 * - Cards stretch to fill their container width — control sizing via the parent layout
 *
 * @example
 * // Full card
 * <Card>
 *   <Card.Image><img src="/hero.jpg" alt="Hero" /></Card.Image>
 *   <Card.Header title="Getting started" description="Set up your workspace in minutes." />
 *   <Card.Content><p>Step-by-step onboarding flow.</p></Card.Content>
 *   <Card.Footer><Button variant="primary">Get started</Button></Card.Footer>
 * </Card>
 *
 * // Minimal card
 * <Card>
 *   <Card.Header title="Notice" description="Your trial expires in 3 days." />
 * </Card>
 */
declare const Card: React.FC<CardProps> & CardComposition;
export default Card;
