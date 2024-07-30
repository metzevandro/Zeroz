import React, { useState, useEffect } from "react";
import Icon from "../Icon/Icon";
import "./InputNumber.scss";

interface InputNumberProps {
  max?: number;
  min?: number;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  onChange?: (value: string) => void;
  error?: boolean;
  textError?: string;
  value?: string;
}

const InputNumber: React.FC<InputNumberProps> = ({
  max,
  min,
  placeholder,
  disabled,
  label,
  onChange,
  error,
  textError,
  value: propValue,
}) => {
  const [isHover, setIsHover] = useState(false);

  const [numero, setNumero] = useState<number | undefined>(() => {
    if (min !== undefined) {
      return min;
    }
    return undefined;
  });

  useEffect(() => {
    if (propValue !== undefined) {
      const parsedValue = parseInt(propValue, 10);
      if (!isNaN(parsedValue)) {
        setNumero(parsedValue);
      }
    }
  }, [propValue]);

  const addNum = () => {
    setNumero((prevNumero) => {
      if (prevNumero === undefined) return min !== undefined ? min : 1;
      const newNum = prevNumero + 1;
      if (max !== undefined && newNum > max) {
        return prevNumero;
      }
      if (onChange) {
        onChange(newNum.toString());
      }
      return newNum;
    });
  };

  const subtractNum = () => {
    setNumero((prevNumero) => {
      if (prevNumero === undefined) return min !== undefined ? min : -1;
      const newNum = prevNumero - 1;
      if (min !== undefined && newNum < min) {
        return prevNumero;
      }
      if (onChange) {
        onChange(newNum.toString());
      }
      return newNum;
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    let newNum: number | undefined;

    if (inputValue === "") {
      // Se o input estiver vazio, defina como undefined
      newNum = undefined;
    } else {
      newNum = parseInt(inputValue, 10);
      if (!isNaN(newNum)) {
        if (max !== undefined && newNum > max) {
          newNum = max;
        } else if (min !== undefined && newNum < min) {
          newNum = min;
        }
      } else {
        newNum = min !== undefined ? min : undefined;
      }
    }

    setNumero(newNum);

    if (onChange) {
      onChange(newNum !== undefined ? newNum.toString() : "");
    }
  };

  return (
    <div className="input-number-root">
      {label && <label className="input-number-label">{label}</label>}
      <div className={`input-number ${disabled ? "disabled" : ""}`}>
        <button disabled={disabled} className="subtract" onClick={subtractNum}>
          <Icon size="md" icon="remove" />
        </button>
        <input
          style={{
            borderRight: isHover
              ? "var(--s-border-width-hairline) solid var(--s-color-border-default-hover)"
              : "",
          }}
          className={`input ${error ? "error" : ""}`}
          type="number"
          placeholder={placeholder}
          onChange={handleInputChange}
          value={numero !== undefined ? numero : ""}
          max={max}
          min={min}
          disabled={disabled}
          inputMode="numeric"
        />
        <button
          disabled={disabled}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="add"
          onClick={addNum}
        >
          <Icon size="md" icon="add" />
        </button>
      </div>
      {error && <div className="textError">{textError}</div>}
    </div>
  );
};

export default InputNumber;
