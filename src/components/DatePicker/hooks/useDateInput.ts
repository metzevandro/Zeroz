import { useState, useEffect } from "react";
import {
  formatDate,
  parseDate,
  applyDateMask,
} from "../utils/datePicker.utils";

interface UseDateInputOptions {
  value?: string;
  onChange: (value: string) => void;
  onDateChange: (date: Date) => void;
}

interface UseDateInputReturn {
  inputValue: string;
  error: boolean;
  errorMessage: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  syncFromDate: (date: Date) => void;
}

/**
 * Manages the text input state for the DatePicker, including:
 * - Auto-masking as the user types (DD/MM/YYYY)
 * - Backspace handling with mask awareness
 * - Inline date validation with error feedback
 * - Syncing the input value from an externally selected date
 */
export function useDateInput({
  value,
  onChange,
  onDateChange,
}: UseDateInputOptions): UseDateInputReturn {
  const [inputValue, setInputValue] = useState(value || formatDate(new Date()));
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const next = value || formatDate(new Date());
    setInputValue(next);
    const parsed = parseDate(next);
    if (parsed) onDateChange(parsed);
  }, [value]);

  const clearError = () => {
    setError(false);
    setErrorMessage("");
  };

  const applyAndValidate = (formatted: string) => {
    setInputValue(formatted);
    onChange(formatted);

    if (formatted.length < 10) {
      clearError();
      return;
    }

    const parsed = parseDate(formatted);
    if (parsed) {
      onDateChange(parsed);
      clearError();
    } else {
      setError(true);
      setErrorMessage("Invalid date");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/[^\d]/g, "");
    const formatted = applyDateMask(digits);
    applyAndValidate(formatted);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Backspace") return;
    e.preventDefault();
    const digits = inputValue.replace(/[^\d]/g, "").slice(0, -1);
    const formatted = applyDateMask(digits);
    applyAndValidate(formatted);
  };

  const syncFromDate = (date: Date) => {
    const formatted = formatDate(date);
    setInputValue(formatted);
    clearError();
  };

  return {
    inputValue,
    error,
    errorMessage,
    handleInputChange,
    handleKeyDown,
    syncFromDate,
  };
}
