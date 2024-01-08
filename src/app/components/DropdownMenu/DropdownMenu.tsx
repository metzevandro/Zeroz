import Icon from "../Icon/Icon";
import "./DropdownMenu.scss";

interface DropDownMenuProps {
  children: React.ReactNode;
  dropDownMenu: boolean;
}

export const DropDownMenu: React.FC<DropDownMenuProps> = ({
  children,
  dropDownMenu,
}) => {
  return (
    <>
      {dropDownMenu === true && (
        <div className="dropdown-menu-root">
          <div className="dropdown-menu">{children}</div>
        </div>
      )}
    </>
  );
};

interface DropDownMenuTitleProps {
  content: string;
}

export const DropDownMenuTitle: React.FC<DropDownMenuTitleProps> = ({
  content,
}) => {
  return (
    <>
      <div className="dropdown-menu-title">{content}</div>
    </>
  );
};

interface DropDownMenuItemProps {
  typeIcon?: string | undefined;
  content: string;
  onClick?: () => void;
}

export const DropDownMenuItem: React.FC<DropDownMenuItemProps> = ({
  typeIcon,
  content,
  onClick,
}) => {
  return (
    <>
      <button className="dropdown-menu-item" onClick={onClick}>
        {typeIcon && <Icon size="sm" icon={typeIcon} />}
        {content}
      </button>
    </>
  );
};
