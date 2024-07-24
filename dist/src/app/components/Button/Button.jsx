var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import React, { useRef, useEffect, useState } from "react";
import "./Button.scss";
import Icon from "../Icon/Icon";
import Loading from "../Loading/Loading";
import Skeleton from "../Skeleton/Skeleton";
var Button = function (_a) {
  var disabled = _a.disabled,
    label = _a.label,
    variant = _a.variant,
    typeIcon = _a.typeIcon,
    size = _a.size,
    skeleton = _a.skeleton,
    rest = __rest(_a, [
      "disabled",
      "label",
      "variant",
      "typeIcon",
      "size",
      "skeleton",
    ]);
  var buttonRef = useRef(null);
  var _b = useState(null),
    dimensions = _b[0],
    setDimensions = _b[1];
  useEffect(
    function () {
      if (buttonRef.current) {
        var _a = buttonRef.current,
          height = _a.offsetHeight,
          width = _a.offsetWidth;
        setDimensions({ height: height, width: width });
      }
    },
    [label, size, variant],
  );
  var buttonClass = "button ".concat(variant, " ").concat(size);
  return (
    <>
      {skeleton && dimensions ? (
        <Skeleton
          height={"".concat(dimensions.height)}
          width={"".concat(dimensions.width)}
        />
      ) : (
        label && (
          <button
            {...rest}
            ref={buttonRef}
            className={buttonClass}
            disabled={disabled}
          >
            {variant === "is-loading" && <Loading variant="default" />}
            {typeIcon && <Icon icon={typeIcon} size="sm" />}
            {label}
          </button>
        )
      )}
    </>
  );
};
export default Button;
