'use strict';

var jsxRuntime = require('react/jsx-runtime');

/**
 * Optional image slot rendered at the top of the card.
 * The image fills the full card width with a fixed max-height of 288px.
 *
 * @example
 * <CardImage>
 *   <img src="/product.jpg" alt="Product photo" />
 * </CardImage>
 */
const CardImage = ({ children, ...rest }) => (jsxRuntime.jsx("div", { className: "card-image", ...rest, children: children }));
CardImage.displayName = "CardImage";

/**
 * Header slot containing a title and supporting description.
 * The title is rendered as an `<h2>` — correct for card components
 * that appear within a larger page context.
 *
 * @example
 * <CardHeader title="Plan name" description="Everything you need to get started." />
 */
const CardHeader = ({ children, ...rest }) => (jsxRuntime.jsx("div", { className: "card-header", ...rest, children: children }));
CardHeader.displayName = "CardHeader";

/**
 * Main body content slot of the card.
 * Use for forms, text, lists, or any primary card content.
 *
 * @example
 * <CardContent>
 *   <p>Some descriptive content here.</p>
 * </CardContent>
 */
const CardContent = ({ children, ...rest }) => (jsxRuntime.jsx("div", { className: "card-content", ...rest, children: children }));
CardContent.displayName = "CardContent";

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
const CardFooter = ({ children, ...rest }) => (jsxRuntime.jsx("div", { className: "card-footer", ...rest, children: children }));
CardFooter.displayName = "CardFooter";

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
const Card = ({ children, ...rest }) => (jsxRuntime.jsx("div", { className: "card-root", ...rest, children: children }));
Card.displayName = "Card";
// Attach subcomponents as static properties for compound component pattern
Card.Image = CardImage;
Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

exports.Card = Card;
exports.CardContent = CardContent;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardImage = CardImage;
