import React from "react";
import "./InputSearch.scss";
interface InputSearchProps {
  disabled?: boolean;
  onChange?: (value: string) => void;
  placeholder: string;
}
declare const InputSearch: React.FC<InputSearchProps>;
export default InputSearch;
