import Icon from "../Icon/Icon";
import "./Avatar.scss";

type IconSize = "sm" | "md" | "lg";

interface AvatarProps {
  size: IconSize;
  src?: string;
}

export function Avatar(props: AvatarProps) {
  return (
    <>
      <div className="avatar">
        {props.src ? (
          <label className="avatar-image">
            <img className={props.size} src={props.src} />
          </label>
        ) : (
          <label className={`avatar-icon ${props.size}`}>
            <Icon size={props.size} icon="person" />
          </label>
        )}
      </div>
    </>
  );
}
