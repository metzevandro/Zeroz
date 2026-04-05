import React from "react";
import ButtonIcon from "../../ButtonIcon/ButtonIcon";

interface ModalHeaderProps {
  title: string;
  description: string;
  dismissible: boolean;
  onClose: () => void;
}

/**
 * Renders the modal header with title, description, and optional close button.
 */
export function ModalHeader({
  title,
  description,
  dismissible,
  onClose,
}: ModalHeaderProps) {
  return (
    <div className="modal-header">
      <div className="modal-title">
        <div>{title}</div>
        {dismissible && (
          <ButtonIcon
            variant="primary"
            size="md"
            icon="close"
            appearance="plain"
            onClick={onClose}
          />
        )}
      </div>
      <div className="modal-description">{description}</div>
    </div>
  );
}
