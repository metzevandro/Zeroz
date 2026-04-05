import "./Modal.scss";
import React from "react";
import { ModalProps } from "./Modal.types";
import { ModalHeader } from "./subcomponents/ModalHeader";
import { getModalClass } from "./utils/modal.utils";

/**
 * `Modal` is a dialog overlay with a header, optional body content,
 * and an optional footer.
 *
 * When `dismissible` is `true`, a close button appears in the header
 * and clicking the backdrop overlay also fires `hideModal`.
 *
 * Compose with `<ContentModal>` and `<FooterModal>` for consistent
 * internal layout.
 *
 * @example
 * ```tsx
 * <Modal
 *   isOpen={isOpen}
 *   hideModal={() => setIsOpen(false)}
 *   title="Confirm deletion"
 *   description="This action cannot be undone."
 *   dismissible
 *   content={
 *     <ContentModal>
 *       <p>Are you sure you want to delete this item?</p>
 *     </ContentModal>
 *   }
 *   footer={
 *     <FooterModal>
 *       <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
 *       <Button variant="primary" onClick={handleDelete}>Delete</Button>
 *     </FooterModal>
 *   }
 * />
 * ```
 */
const Modal: React.FC<ModalProps> = ({
  title,
  description,
  content,
  footer,
  hideModal,
  isOpen,
  dismissible = false,
}) => (
  <>
    <div className={getModalClass("modal-root", isOpen)}>
      <ModalHeader
        title={title}
        description={description}
        dismissible={dismissible}
        onClose={hideModal}
      />
      {content}
      {footer}
    </div>

    <div
      className={getModalClass("modal-ghost", isOpen)}
      onClick={dismissible ? hideModal : undefined}
    />
  </>
);

export default Modal;
