import { useState, useEffect, useId } from "react";

interface UseCheckboxOptions {
  modelValue?: boolean;
  id?: string;
  disabled?: boolean;
  onUpdate?: (value: boolean) => void;
}

interface UseCheckboxReturn {
  checked: boolean;
  uid: string;
  handleChange: () => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLLabelElement>) => void;
}

/**
 * Manages the internal state and interaction logic of `Checkbox`:
 * - Syncs internal checked state when `modelValue` changes externally
 * - Generates a stable unique `id` when none is provided
 * - Handles toggle on change and on Enter key press
 */
export function useCheckbox({
  modelValue,
  id,
  disabled,
  onUpdate,
}: UseCheckboxOptions): UseCheckboxReturn {
  const [checked, setChecked] = useState(modelValue ?? false);
  const generatedId = useId();
  const uid = id ?? `ui-form-checkbox-${generatedId}`;

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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLabelElement>) => {
    if (event.key === "Enter") {
      handleChange();
    }
  };

  return { checked, uid, handleChange, handleKeyDown };
}
