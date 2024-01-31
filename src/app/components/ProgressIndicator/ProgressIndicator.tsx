import React from "react";
import Icon from "../Icon/Icon";
import "./ProgressIndicator.scss";
import { widthFull } from '../../../stories/Tab.stories';

interface ProgressIndicatorProps {
  step: string;
  description?: string;
  state: "default" | "current" | "error" | "completed" | "disable";
  direction: "row" | "column";
  onClick?: () => void;
  widthFull?: boolean;
}

const stateNames: Record<string, string> = {
  default: "circle",
  current: "trip_origin",
  error: "error",
  completed: "check_circle",
  disable: "circle",
};

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  step,
  description,
  state,
  direction,
  onClick,
  widthFull,
}) => {
  const displayName = stateNames[state] || state;

  const customizeWidthFull = (widthFull: boolean = false) => {
    if (widthFull) {
      return {
        width: "100%",
      };
    }
  };
  return (
    <>
      <div
        className={`progress-indicator  ${direction} ${state}`}
        onClick={onClick}
        style={customizeWidthFull(widthFull)}
      >
        <div className="header">
          <div className={state}>
            <Icon
              icon={displayName}
              size="sm"
              fill={
                displayName === "check_circle" || displayName === "error"
                  ? 1
                  : 0
              }
            />
          </div>
          <h1>{step}</h1>
        </div>
        <p>{description}</p>
      </div>
    </>
  );
};

export default ProgressIndicator;
