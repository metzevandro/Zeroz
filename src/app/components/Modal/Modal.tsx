import "./Modal.scss";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export interface ModalProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  hideModal: () => void;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({
  title,
  description,
  children,
  hideModal,
  isOpen,
}) => {
  return (
    <>
      {isOpen && (
        <>
          <div className="modal-ghost" onClick={hideModal} />
          <div className="modal-root">
            <div className="modal-header">
              <div className="modal-title">
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
              <div>
                <ButtonIcon
                  variant=""
                  size="md"
                  typeIcon="close"
                  type="plain"
                  onClick={hideModal}
                />
              </div>
            </div>
            {children}
          </div>
        </>
      )}
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
