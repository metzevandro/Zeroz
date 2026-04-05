import React from "react";

export interface ModalProps {
  /**
   * Modal heading displayed in the header.
   */
  title: string;

  /**
   * Supporting text displayed below the title.
   */
  description: string;

  /**
   * When `true`, renders a close button in the header and allows
   * clicking the backdrop overlay to dismiss the modal.
   * @default false
   */
  dismissible?: boolean;

  /**
   * Controls whether the modal is visible.
   */
  isOpen: boolean;

  /**
   * Callback fired when the modal should close — either via the
   * close button or a backdrop click (when `dismissible` is `true`).
   */
  hideModal: () => void;

  /**
   * Main body content. Use `<ContentModal>` for consistent padding.
   */
  content?: React.ReactNode;

  /**
   * Footer content. Use `<FooterModal>` for consistent layout.
   * Typically contains action buttons.
   */
  footer?: React.ReactNode;
}

export interface ModalSlotProps {
  /** Content rendered inside the slot wrapper. */
  children: React.ReactNode;
}
