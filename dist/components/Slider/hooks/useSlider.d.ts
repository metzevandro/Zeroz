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
export declare function useSlider({ value, step, min, max, onChange, }: UseSliderOptions): UseSliderReturn;
export {};
