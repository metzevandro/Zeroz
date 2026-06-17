import { useLayoutEffect, useRef, useState } from "react";
import { LinkProps } from "./Link.types";
import { Skeleton } from "../Skeleton";
import './Link.scss'

const Link: React.FC<LinkProps> = ({
  content,
  disabled,
  children,
  skeleton,
  ...rest
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (linkRef.current) {
      const { offsetWidth, offsetHeight } = linkRef.current;
      setDimensions({
        width: offsetWidth,
        height: offsetHeight,
      });
    }
  }, [children, disabled, skeleton]);

  return (
    <>
      <a
        ref={linkRef}
        className={`link ${disabled ? "disabled" : ""}`}
        style={{
          position: skeleton ? "fixed" : "static",
          visibility: skeleton ? "hidden" : "visible",
          left: skeleton ? "-9999px" : "auto",
          ...(rest.style || {}),
        }}
        {...rest}
      >
        {children}
      </a>
      {skeleton && (
        <Skeleton
          width={`${dimensions.width}px`}
          height={`${dimensions.height}px`}
        />
      )}
    </>
  );
};

export default Link;
