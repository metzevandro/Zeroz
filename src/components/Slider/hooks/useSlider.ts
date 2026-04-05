import { useRef, useId } from "react";
import { snapToStep, pixelToValue } from "../utils/slider.utils";

interface UseSliderOptions {
  value: number;
  step: number;
  min: number;
  max: number;
  onChange?: (value: number) => void;
}

interface UseSliderReturn {
  uid: string;
  trackRef: React.RefObject<HTMLDivElement>;
  handleTrackInteraction: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Manages all interaction logic for `Slider`:
 * - Mouse drag (mousedown → mousemove → mouseup on `window`)
 * - Touch drag (touchstart → touchmove → touchend on `window`)
 * - Track click (resolves position instantly)
 * - Arrow key navigation (Left / Right with step)
 * - Direct numeric input
 *
 * Uses a single `trackRef` to measure the track rect — avoids the
 * brittle `document.getElementById("slider-background")` lookup from the original.
 */
export function useSlider({
  value,
  step,
  min,
  max,
  onChange,
}: UseSliderOptions): UseSliderReturn {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const uid = `slider-${useId()}`;

  const emit = (newValue: number) => onChange?.(newValue);

  const updateFromClientX = (clientX: number) => {
    if (!trackRef.current) return;
    const next = pixelToValue(
      clientX,
      trackRef.current.getBoundingClientRect(),
      step,
      min,
      max,
    );
    emit(next);
  };

  const handleMouseMove = (e: MouseEvent) => updateFromClientX(e.clientX);

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) updateFromClientX(e.touches[0].clientX);
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("mouseup", handleDragEnd);
    window.removeEventListener("touchend", handleDragEnd);
  };

  const startDrag = (clientX: number) => {
    isDragging.current = true;
    updateFromClientX(clientX);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mouseup", handleDragEnd);
    window.addEventListener("touchend", handleDragEnd);
  };

  const handleTrackInteraction = (e: React.MouseEvent<HTMLDivElement>) => {
    startDrag(e.clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const delta = e.key === "ArrowLeft" ? -step : step;
    const next = snapToStep(value + delta, step, min, max);
    emit(next);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = parseFloat(e.target.value);
    if (!isNaN(parsed)) emit(snapToStep(parsed, step, min, max));
  };

  return {
    uid,
    trackRef,
    handleTrackInteraction,
    handleKeyDown,
    handleInputChange,
  };
}
