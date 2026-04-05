import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import "../../styles.scss";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A contained surface for grouping related content and actions. Use the Card subcomponents (`Card.Image`, `Card.Header`, `Card.Content`, `Card.Footer`) as children to compose the layout.",
      },
    },
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

const PLACEHOLDER_IMAGE = "https://placehold.co/600x300";

// --- Playground ---

export const Playground: Story = {
  name: "Playground",
  render: () => (
    <div style={{ maxWidth: "360px" }}>
      <Card>
        <Card.Image>
          <img src={PLACEHOLDER_IMAGE} alt="Placeholder" />
        </Card.Image>
        <Card.Header>
          <h2>Card Title</h2>
          <p>Supporting description text for the card.</p>
        </Card.Header>
        <Card.Content>
          <p>Main body content goes here.</p>
        </Card.Content>
        <Card.Footer>
          <p>Footer content</p>
        </Card.Footer>
      </Card>
    </div>
  ),
};

// --- Composition variations ---

export const HeaderOnly: Story = {
  name: "Header only",
  render: () => (
    <div style={{ maxWidth: "360px" }}>
      <Card>
        <Card.Header>
          <h2>Minimal card</h2>
          <p>Only a header — useful for notices or summaries.</p>
        </Card.Header>
      </Card>
    </div>
  ),
};

export const HeaderAndContent: Story = {
  name: "Header + Content",
  render: () => (
    <div style={{ maxWidth: "360px" }}>
      <Card>
        <Card.Header>
          <h2>Settings</h2>
          <p>Manage your account preferences.</p>
        </Card.Header>
        <Card.Content>
          <p>Content area for form fields or detailed information.</p>
        </Card.Content>
      </Card>
    </div>
  ),
};

export const HeaderContentAndFooter: Story = {
  name: "Header + Content + Footer",
  render: () => (
    <div style={{ maxWidth: "360px" }}>
      <Card>
        <Card.Header>
          <h2>Confirm action</h2>
          <p>This action cannot be undone.</p>
        </Card.Header>
        <Card.Content>
          <p>Are you sure you want to proceed?</p>
        </Card.Content>
        <Card.Footer>
          <p>Action buttons here</p>
        </Card.Footer>
      </Card>
    </div>
  ),
};

export const WithImage: Story = {
  name: "With Image",
  render: () => (
    <div style={{ maxWidth: "360px" }}>
      <Card>
        <Card.Image>
          <img src={PLACEHOLDER_IMAGE} alt="Card visual" />
        </Card.Image>
        <Card.Header>
          <h2>Product name</h2>
          <p>Short product description goes here.</p>
        </Card.Header>
        <Card.Content>
          <p>Additional product details or specifications.</p>
        </Card.Content>
      </Card>
    </div>
  ),
};

export const FullCard: Story = {
  name: "Full — All slots",
  render: () => (
    <div style={{ maxWidth: "360px" }}>
      <Card>
        <Card.Image>
          <img src={PLACEHOLDER_IMAGE} alt="Card visual" />
        </Card.Image>
        <Card.Header>
          <h2>Getting started</h2>
          <p>Set up your workspace in minutes.</p>
        </Card.Header>
        <Card.Content>
          <p>Step-by-step onboarding flow with helpful guidance.</p>
        </Card.Content>
        <Card.Footer>
          <p>Footer actions</p>
        </Card.Footer>
      </Card>
    </div>
  ),
};

// --- Real-world examples ---

export const PricingCard: Story = {
  name: "Real-world — Pricing",
  render: () => (
    <div style={{ maxWidth: "320px" }}>
      <Card>
        <Card.Header>
          <h2>Pro Plan</h2>
          <p>Everything you need to scale your team.</p>
        </Card.Header>
        <Card.Content>
          <p style={{ fontSize: "32px", fontWeight: 700 }}>
            $49
            <span style={{ fontSize: "16px", fontWeight: 400 }}>/mo</span>
          </p>
          <ul style={{ paddingLeft: "16px" }}>
            <li>Unlimited projects</li>
            <li>Priority support</li>
            <li>Advanced analytics</li>
          </ul>
        </Card.Content>
        <Card.Footer>
          <p>Get started</p>
        </Card.Footer>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Card used as a pricing tier block." },
    },
  },
};

export const ProfileCard: Story = {
  name: "Real-world — Profile",
  render: () => (
    <div style={{ maxWidth: "320px" }}>
      <Card>
        <Card.Image>
          <img src="https://i.pravatar.cc/600?img=12" alt="User avatar" />
        </Card.Image>
        <Card.Header>
          <h2>Sarah Johnson</h2>
          <p>Senior Product Designer · San Francisco</p>
        </Card.Header>
        <Card.Footer>
          <p>Message · Follow</p>
        </Card.Footer>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Card used as a user profile display." },
    },
  },
};

// --- Card grid ---

export const CardGrid: Story = {
  name: "Card grid layout",
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
      }}
    >
      {["Starter", "Pro", "Enterprise"].map((plan) => (
        <Card key={plan}>
          <Card.Header>
            <h2>{plan}</h2>
            <p>The {plan.toLowerCase()} plan for your needs.</p>
          </Card.Header>
          <Card.Content>
            <p>Plan features go here.</p>
          </Card.Content>
          <Card.Footer>
            <p>Choose plan</p>
          </Card.Footer>
        </Card>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Cards naturally fill their grid cell width.",
      },
    },
  },
};
