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
  initialValue?: number; // Adicionando initialValue
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
  value,
  initialValue, // Adicionando initialValue
}) => {
  const [numero, setNumero] = useState<number | undefined>(() => {
    if (initialValue !== undefined) {
      return initialValue;
    }
    if (min !== undefined) {
      return min;
    }
    return undefined;
  });

  useEffect(() => {
    if (initialValue !== undefined && onChange) {
      onChange(initialValue.toString());
    }
  }, [initialValue, onChange]);

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
    const newNum = parseInt(event.target.value, 10);
    if (!isNaN(newNum)) {
      if (max !== undefined && newNum > max) {
        setNumero(max);
      } else if (min !== undefined && newNum < min) {
        setNumero(min);
      } else {
        setNumero(newNum);
      }

      if (onChange) {
        onChange(newNum.toString());
      }
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
          className={`input ${error ? "error" : ""}`}
          type="number"
          placeholder={placeholder}
          onChange={handleInputChange}
          value={numero !== undefined ? numero : value}
          max={max}
          min={min}
          disabled={disabled}
          inputMode="numeric"
        />
        <button disabled={disabled} className="add" onClick={addNum}>
          <Icon size="md" icon="add" />
        </button>
      </div>
      {error && <div className="textError">{textError}</div>}
    </div>
  );
};

export default InputNumber;
