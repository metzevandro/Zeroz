import { useState, useEffect, useRef, useCallback } from "react";
import { TextAreaProps } from "../TextArea.types";

interface UseTextAreaOptions {
  value: TextAreaProps["value"];
  onChange: TextAreaProps["onChange"];
}

interface UseTextAreaReturn {
  internalValue: string;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  handleContainerClick: () => void;
  handleContainerKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
}

/**
 * Encapsula o estado interno e os handlers do TextArea.
 * Mantém sincronização com o valor externo (prop `value`)
 * e centraliza as interações de foco.
 */
export function useTextArea({
  value = "",
  onChange,
}: UseTextAreaOptions): UseTextAreaReturn {
  const [internalValue, setInternalValue] = useState(value);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInternalValue(event.target.value);
      onChange?.(event);
    },
    [onChange],
  );

  const handleContainerClick = useCallback(() => {
    textareaRef.current?.focus();
  }, []);

  const handleContainerKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        textareaRef.current?.focus();
      }
    },
    [],
  );

  return {
    internalValue,
    textareaRef,
    handleChange,
    handleContainerClick,
    handleContainerKeyDown,
  };
}
