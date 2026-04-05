import { useState, useEffect, useId } from "react";

interface UseSwitchOptions {
  modelValue?: boolean;
  id?: string;
  disabled?: boolean;
  onUpdate?: (value: boolean) => void;
}

interface UseSwitchReturn {
  uid: string;
  checked: boolean;
  handleChange: () => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

/**
 * Manages the internal state and interaction logic for `Switch`:
 * - Syncs internal checked state when `modelValue` changes externally
 * - Generates a stable unique `id` via `useId()` when none is provided
 * - Handles toggle on change and on Enter key press
 * - Guards `handleChange` against disabled state
 */
export function useSwitch({
  modelValue,
  id,
  disabled,
  onUpdate,
}: UseSwitchOptions): UseSwitchReturn {
  const [checked, setChecked] = useState(modelValue ?? false);
  const generatedId = useId();
  const uid = id ?? `ui-form-switch-${generatedId}`;

  useEffect(() => {
    if (modelValue !== undefined && modelValue !== checked) {
      setChecked(modelValue);
    }
  }, [modelValue]);

  const handleChange = () => {
    if (disabled) return;
    const newValue = !checked;
    setChecked(newValue);
    onUpdate?.(newValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleChange();
  };

  return { uid, checked, handleChange, handleKeyDown };
}
