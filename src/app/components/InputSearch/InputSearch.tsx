import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import Icon from "../Icon/Icon";
import "./InputSearch.scss";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

interface InputSearchProps {
  disabled: boolean;
  onChange?: (value: string) => void;
}

const InputSearch: React.FC<InputSearchProps> = (props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    if (props.onChange) {
      props.onChange(value);
    }
  };

  const handleInputClick = () => {
    setIsActive(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputBlur = () => {
    setIsActive(false);
  };

  const handleClearClick = () => {
    setInputValue("");
    if (props.onChange) {
      props.onChange("");
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className={`input-search-root ${props.disabled ? "disabled" : ""}`}
      onSubmit={handleSubmit}
      onClick={handleInputClick}
    >
      <div className="input-search">
        <Icon size="md" icon="search" />
        <input
          disabled={props.disabled}
          size={1000}
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleInputBlur}
          ref={inputRef}
        />
        {inputValue && (
          <button
            className={`input-search-button-close ${inputValue && "visible"}`}
            onClick={handleClearClick}
          >
            <ButtonIcon variant="" typeIcon="close" type="plain" size="sm" />
          </button>
        )}
      </div>
    </form>
  );
};

export default InputSearch;
