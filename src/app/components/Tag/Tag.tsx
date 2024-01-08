import { useState } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import "./Tag.scss";

type typeVariant = "primary" | "secondary" | "success" | "warning";

interface TagProps {
  content: string;
  variant: typeVariant;
}

export function Tag(props: TagProps) {
  const [closed, setClosed] = useState(false);

  const handleCloseTag = () => {
    setClosed(true);
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
              variant={props.variant === "secondary" ? "" : "on-color"}
              onClick={handleCloseTag}
            />
          </span>
        </div>
      )}
    </>
  );
}
