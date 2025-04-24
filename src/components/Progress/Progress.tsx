import "./Progress.scss";
import React, { useState, useEffect } from "react";

interface ProgressProps {
  value: number;
  error?: boolean;
  indeterminate?: boolean;
}

const Progress: React.FC<ProgressProps> = ({ value, error, indeterminate }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(value);
  }, [value]);

  return (
    <div className="progress">
      {indeterminate === true ? (
        <div className="progress-bar-loading" />
      ) : (
        <div
          className={`progress-bar ${
            value === 100 ? "progress-bar-success" : ""
          } ${error ? "progress-bar-error" : ""}`}
          style={{ width: `${progress}%` }}
        ></div>
      )}
    </div>
  );
};

export default Progress;