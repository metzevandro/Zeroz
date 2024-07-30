import "./Dropdown.scss";
import React from "react";
interface DropdownProps {
  children: React.ReactNode;
  dropdown: boolean;
}
declare const Dropdown: React.FC<DropdownProps>;
interface DropdownTitleProps {
  content: string;
}
export declare const DropdownTitle: React.FC<DropdownTitleProps>;
interface DropdownItemProps {
  typeIcon?: string | undefined;
  content: string;
  onClick?: () => void;
}
export declare const DropdownItem: React.FC<DropdownItemProps>;
export default Dropdown;
