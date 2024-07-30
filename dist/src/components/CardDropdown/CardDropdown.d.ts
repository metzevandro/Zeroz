import "./CardDropdown.scss";
import React from "react";
interface CardDropdownProps {
  title: string;
  content?: React.ReactNode;
  description?: string;
  footer?: React.ReactNode;
}
declare const CardDropdown: React.FC<CardDropdownProps>;
export default CardDropdown;
