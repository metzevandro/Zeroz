import React from "react";
import { FormData } from "../SavebarTrigger.types";
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
export declare function useFormTracker({ initialValues, }: UseFormTrackerOptions): UseFormTrackerReturn;
export {};
