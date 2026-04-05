import React from "react";
import { ModalSlotProps } from "../Modal.types";

/**
 * Wraps modal body content with consistent padding and layout.
 * Use as the direct child of `<Modal content={...}>` for structured content.
 *
 * @example
 * ```tsx
 * <Modal
 *   content={
 *     <ContentModal>
 *       <p>Are you sure you want to delete this item?</p>
 *     </ContentModal>
 *   }
 * />
 * ```
 */
export const ContentModal: React.FC<ModalSlotProps> = ({ children }) => (
  <div className="modal-content">{children}</div>
);

/**
 * Wraps modal footer content with consistent layout.
 * Typically contains action buttons (confirm / cancel).
 *
 * @example
 * ```tsx
 * <Modal
 *   footer={
 *     <FooterModal>
 *       <Button variant="secondary" onClick={hideModal}>Cancel</Button>
 *       <Button variant="primary" onClick={handleConfirm}>Confirm</Button>
 *     </FooterModal>
 *   }
 * />
 * ```
 */
export const FooterModal: React.FC<ModalSlotProps> = ({ children }) => (
  <div className="modal-footer">{children}</div>
);
