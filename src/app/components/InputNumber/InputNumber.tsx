import React, { useRef, useState } from "react";
import Icon from "../Icon/Icon";
import "./InputNumber.scss";

interface InputNumberProps {
  max?: number;
  min?: number;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  onSetValue?: (value: string) => void;
  error?: boolean;
  textError?: string;
}

const InputNumber: React.FC<InputNumberProps> = ({
  max,
  min,
  placeholder,
  disabled,
  label,
  onSetValue,
  error,
  textError,
}) => {
  const [numero, setNumero] = useState<undefined | number>(() => {
    if (min !== undefined) {
      return min;
    }
    return undefined;
  });

  const addNum = () => {
    setNumero((prevNumero) => {
      if (prevNumero === undefined) return 1;
      const newNum = prevNumero + 1;
      if (max !== undefined && newNum > max) {
        return prevNumero;
      }
      if (onSetValue) {
        onSetValue(newNum.toString());
      }
      return newNum;
    });
  };

  const subtractNum = () => {
    setNumero((prevNumero) => {
      if (prevNumero === undefined) return -1;
      const newNum = prevNumero - 1;
      if (min !== undefined && newNum < min) {
        return prevNumero;
      }
      if (onSetValue) {
        onSetValue(newNum.toString());
      }
      return newNum;
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setNumero(undefined);
    } else {
      const newNum = parseInt(event.target.value, 10);
      if (!isNaN(newNum)) {
        if (max !== undefined && newNum > max) {
          setNumero(max);
        } else if (min !== undefined && newNum < min) {
          setNumero(min);
        } else {
          setNumero(newNum);
        }

        if (onSetValue) {
          onSetValue(event.target.value);
        }
      }
    }
  };

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseDownSubtract = () => {
    intervalRef.current = setInterval(subtractNum, 100);
  };

  const handleMouseDownAdd = () => {
    intervalRef.current = setInterval(addNum, 100);
  };

  const handleMouseUp = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <>
      <div className="input-number-root">
        {label && <label className="input-number-label">{label}</label>}
        <div className={`input-number ${disabled ? "disabled" : ""}`}>
          <button
            disabled={disabled}
            className="subtract"
            onClick={subtractNum}
            onMouseDown={handleMouseDownSubtract}
            onMouseUp={handleMouseUp}
          >
            <Icon size="md" icon="remove" />
          </button>
          <input
            className={`input ${error && "error"}`}
            type="number"
            placeholder={placeholder}
            onChange={handleInputChange}
            value={numero !== undefined ? numero.toString() : ""}
            max={max}
            min={min}
            disabled={disabled}
          />
          <button
            disabled={disabled}
            onMouseUp={handleMouseUp}
            onMouseDown={handleMouseDownAdd}
            className="add"
            onClick={addNum}
          >
            <Icon size="md" icon="add" />
          </button>
        </div>
        {error && <div className="textError">{textError}</div>}
      </div>
    </>
  );
};

export default InputNumber;
