import React, { useState } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import "./Tag.scss";

type typeVariant = "primary" | "secondary" | "success" | "warning";

interface TagProps {
  content: string;
  variant: typeVariant;
  onClose?: () => void;
}

export function Tag(props: TagProps) {
  const [closed, setClosed] = useState(false);

  const handleCloseTag = () => {
    setClosed(true);
    if (props.onClose) {
      props.onClose();
    }
  };

  return (
    <>
      {!closed && (
        <div className={`tag-root ${props.variant}`}>
          {props.content}
          <span>
            <ButtonIcon
              type="plain"
              size="sm"
              typeIcon="close"
              variant={props.variant === "secondary" ? "primary" : "on-color"}
              onClick={handleCloseTag}
            />
          </span>
        </div>
      )}
    </>
  );
}
