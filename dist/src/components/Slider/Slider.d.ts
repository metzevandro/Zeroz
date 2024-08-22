import React from "react";
import "./Slider.scss";
interface SliderProps {
    step: number;
    min: number;
    max: number;
    value: string;
    label?: string;
    onChange?: (value: string) => void;
}
declare const Slider: React.FC<SliderProps>;
export default Slider;
