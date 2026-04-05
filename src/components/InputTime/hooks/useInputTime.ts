import { useState, useEffect, useCallback } from "react";
import { parseTime, applyTimeMask } from "../utils/inputTime.utils";

interface UseInputTimeOptions {
  value?: string;
  onChange: (value: string) => void;
}

interface UseInputTimeReturn {
  isOpen: boolean;
  selectedHour: string;
  selectedMinute: string;
  displayValue: string;
  togglePicker: () => void;
  closePicker: () => void;
  handleHourSelect: (hour: string) => void;
  handleMinuteSelect: (minute: string) => void;
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
}

/**
 * Manages all state and interaction logic for `InputTime`:
 * - Syncs internal hour/minute state from the controlled `value` prop
 * - Handles typed input with auto-masking (`HH:MM`)
 * - Coordinates picker open/close state
 * - Fires `onChange` on every mutation
 */
export function useInputTime({
  value,
  onChange,
}: UseInputTimeOptions): UseInputTimeReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedMinute, setSelectedMinute] = useState("");

  // Sync from controlled value
  useEffect(() => {
    if (value === undefined) {
      setSelectedHour("");
      setSelectedMinute("");
      return;
    }
    const { hour, minute } = parseTime(value);
    setSelectedHour(hour);
    setSelectedMinute(minute);
  }, [value]);

  const togglePicker = useCallback(() => setIsOpen((prev) => !prev), []);
  const closePicker = useCallback(() => setIsOpen(false), []);

  const handleHourSelect = useCallback(
    (hour: string) => {
      setSelectedHour(hour);
      onChange(`${hour}:${selectedMinute}`);
    },
    [onChange, selectedMinute],
  );

  const handleMinuteSelect = useCallback(
    (minute: string) => {
      setSelectedMinute(minute);
      onChange(`${selectedHour}:${minute}`);
    },
    [onChange, selectedHour],
  );

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const masked = applyTimeMask(e.target.value);
    e.target.value = masked;
    onChange(masked);
  };

  const displayValue =
    value !== undefined && value !== null
      ? value
      : selectedHour && selectedMinute
        ? `${selectedHour}:${selectedMinute}`
        : "";

  return {
    isOpen,
    selectedHour,
    selectedMinute,
    displayValue,
    togglePicker,
    closePicker,
    handleHourSelect,
    handleMinuteSelect,
    handleInputChange,
  };
}
