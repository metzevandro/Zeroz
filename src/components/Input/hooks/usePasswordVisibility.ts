import { useState } from "react";

interface UsePasswordVisibilityReturn {
  isPasswordVisible: boolean;
  togglePasswordVisibility: () => void;
  resolvedType: React.InputHTMLAttributes<HTMLInputElement>["type"];
}

/**
 * Manages the show/hide toggle state for password inputs.
 * Returns the effective `type` attribute value to apply to the `<input>`.
 */
export function usePasswordVisibility(
  type: React.InputHTMLAttributes<HTMLInputElement>["type"],
): UsePasswordVisibilityReturn {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);

  const resolvedType = type === "password" && isPasswordVisible ? "text" : type;

  return { isPasswordVisible, togglePasswordVisibility, resolvedType };
}
