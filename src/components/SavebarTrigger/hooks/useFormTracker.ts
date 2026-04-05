import { useState, useRef, useCallback, ReactElement, useEffect } from "react";
import React from "react";
import { FormData } from "../SavebarTrigger.types";
import { isFormUnchanged } from "../utils/savebarTrigger.utils";

interface UseFormTrackerOptions {
  initialValues: FormData;
}

interface UseFormTrackerReturn {
  formData: FormData;
  formChanged: boolean;
  resetToInitial: () => void;
  commitSaved: () => void;
  injectControlledProps: (child: React.ReactNode) => React.ReactNode;
}

/**
 * Tracks form field values and derives `formChanged` by comparing
 * current values against `initialValues`.
 *
 * - Initializes `formData` from `initialValues`
 * - Re-syncs when `initialValues` changes (e.g. after a successful server fetch)
 * - `formChanged` is `true` when any field differs from `initialValues`
 * - `resetToInitial` restores all fields to `initialValues`
 * - `commitSaved` updates the baseline to the current values post-save
 */
export function useFormTracker({
  initialValues,
}: UseFormTrackerOptions): UseFormTrackerReturn {
  const [formData, setFormData] = useState<FormData>({ ...initialValues });
  const savedRef = useRef<FormData>({ ...initialValues });

  useEffect(() => {
    setFormData({ ...initialValues });
    savedRef.current = { ...initialValues };
  }, [JSON.stringify(initialValues)]);

  const formChanged = !isFormUnchanged(savedRef.current, formData);

  const handleInputChange = useCallback((name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const resetToInitial = useCallback(() => {
    setFormData({ ...savedRef.current });
  }, []);

  const commitSaved = useCallback(() => {
    savedRef.current = { ...formData };
  }, [formData]);

  const injectControlledProps = useCallback(
    (child: React.ReactNode): React.ReactNode => {
      if (!React.isValidElement(child)) return child;
      const { name } = child.props as { name?: string };
      if (!name) return child;

      return React.cloneElement(child as ReactElement, {
        value: formData[name] ?? "",
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(name, e.target.value),
        name,
      });
    },
    [formData, handleInputChange],
  );

  return {
    formData,
    formChanged,
    resetToInitial,
    commitSaved,
    injectControlledProps,
  };
}
