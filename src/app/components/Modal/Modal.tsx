import "./Modal.scss";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import { MouseEventHandler } from "react";

export interface ModalProps {
  title: string;
  description: string;
  content?: React.ReactNode;
  dismissible?: boolean;
  hideModal: () => void;
  isOpen: boolean;
  footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  title,
  description,
  content,
  hideModal,
  isOpen,
  footer,
  dismissible,
}) => {
  const modalClass = isOpen ? "modal-root visible" : "modal-root";
  const ghostClass = isOpen ? "modal-ghost visible" : "modal-ghost";

  return (
    <>
      <div className={modalClass}>
        <div className="modal-header">
          <div className="modal-title">
            <div>{title}</div>
            {dismissible && (
              <ButtonIcon
                variant="primary"
                size="md"
                typeIcon="close"
                type="plain"
                onClick={hideModal}
              />
            )}
          </div>
          <div className="modal-description">{description}</div>
        </div>
        {content}
        {footer}
      </div>
      <div
        className={ghostClass}
        onClick={
          (dismissible
            ? hideModal
            : undefined) as MouseEventHandler<HTMLDivElement>
        }
      />
    </>
  );
};

interface ContentModalProps {
  children: React.ReactNode;
}

export const ContentModal: React.FC<ContentModalProps> = ({ children }) => {
  return <div className="modal-content">{children}</div>;
};

export const FooterModal: React.FC<ContentModalProps> = ({ children }) => {
  return <div className="modal-footer">{children}</div>;
};

export default Modal;
ContentModal;
FooterModal;
