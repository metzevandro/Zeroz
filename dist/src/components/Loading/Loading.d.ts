import "./Loading.scss";
import React from "react";
interface LoadingProps {
    variant: "default" | "success" | "warning" | "large";
    message?: string;
}
declare const Loading: React.FC<LoadingProps>;
export default Loading;
