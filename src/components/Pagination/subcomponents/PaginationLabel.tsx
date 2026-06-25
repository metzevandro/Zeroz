import React, { useLayoutEffect, useRef, useState } from "react";
import Skeleton from "../../Skeleton/Skeleton";

interface PaginationLabelProps {
  label: string;
  skeleton: boolean;
}

/**
 * Renders the pagination label or a skeleton placeholder during loading.
 */
export function PaginationLabel({ label, skeleton }: PaginationLabelProps) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  const boxRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();

      setSize({
        width: rect.width,
        height: rect.height,
      });
    }
  }, [label]);

  return (
    <>
      {/* Render tag 'p' to get the sizes for the skeleton component */}
      <p
        ref={boxRef}
        style={{
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none",
        }}
      >
        {label}
      </p>
      {skeleton ? (
        <Skeleton width={`${size.width}px`} height={`${size.height}px`} />
      ) : (
        <p>{label}</p>
      )}
    </>
  );
}
