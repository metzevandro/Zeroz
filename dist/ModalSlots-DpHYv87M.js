'use strict';

var jsxRuntime = require('react/jsx-runtime');
var ButtonIcon = require('./ButtonIcon-D_zBPQVl.js');

/**
 * Renders the modal header with title, description, and optional close button.
 */
function ModalHeader({ title, description, dismissible, onClose, }) {
    return (jsxRuntime.jsxs("div", { className: "modal-header", children: [jsxRuntime.jsxs("div", { className: "modal-title", children: [jsxRuntime.jsx("div", { children: title }), dismissible && (jsxRuntime.jsx(ButtonIcon.ButtonIcon, { variant: "primary", size: "md", icon: "close", appearance: "plain", onClick: onClose }))] }), jsxRuntime.jsx("div", { className: "modal-description", children: description })] }));
}

/**
 * Returns the CSS class string for a modal element based on its open state.
 */
function getModalClass(base, isOpen) {
    return isOpen ? `${base} visible` : base;
}

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
const Modal = ({ title, description, content, footer, hideModal, isOpen, dismissible = false, }) => (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", { className: getModalClass("modal-root", isOpen), children: [jsxRuntime.jsx(ModalHeader, { title: title, description: description, dismissible: dismissible, onClose: hideModal }), content, footer] }), jsxRuntime.jsx("div", { className: getModalClass("modal-ghost", isOpen), onClick: dismissible ? hideModal : undefined })] }));

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
const ContentModal = ({ children }) => (jsxRuntime.jsx("div", { className: "modal-content", children: children }));
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
const FooterModal = ({ children }) => (jsxRuntime.jsx("div", { className: "modal-footer", children: children }));

exports.ContentModal = ContentModal;
exports.FooterModal = FooterModal;
exports.Modal = Modal;
