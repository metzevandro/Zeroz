import React from "react";

export interface HeaderProps {
  /**
   * Right-side content of the header — typically a `<HeaderProfile>` component.
   */
  children: React.ReactNode;

  /**
   * Breadcrumb navigation rendered in the center of the header.
   * Accepts any `ReactNode`, giving consumers full control over the breadcrumb structure.
   */
  breadcrumb: React.ReactNode;

  /**
   * Callback fired when the hamburger menu `ButtonIcon` is clicked.
   * Typically used to toggle a sidebar or navigation drawer.
   */
  onClick: () => void;

  /**
   * When `true`, renders child content in skeleton/loading state.
   * Passed down to `HeaderProfile` when used as a child.
   * @default false
   */
  skeleton?: boolean;
}

export interface HeaderProfileProps {
  /**
   * Display name shown next to the avatar.
   * Hidden and replaced by a skeleton when `skeleton` is `true`.
   */
  name: string;

  /**
   * Dropdown content revealed when the profile is clicked.
   * Typically composed of `<DropdownTitle>` and `<DropdownItem>` components.
   */
  children: React.ReactNode;

  /**
   * URL of the avatar image. When omitted, the avatar falls back to `letter`.
   */
  avatar_src?: string;

  /**
   * Fallback letter displayed in the avatar when no `avatar_src` is provided.
   */
  letter?: string;

  /**
   * When `true`, replaces the name and avatar with skeleton placeholders.
   * @default false
   */
  skeleton?: boolean;
}
