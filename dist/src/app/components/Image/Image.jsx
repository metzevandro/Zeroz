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
import Skeleton from "../Skeleton/Skeleton";
import "./Image.scss";
import React from "react";
var Image = function (_a) {
  var src = _a.src,
    alt = _a.alt,
    width = _a.width,
    height = _a.height,
    skeleton = _a.skeleton,
    props = __rest(_a, ["src", "alt", "width", "height", "skeleton"]);
  return (
    <>
      {skeleton ? (
        <Skeleton width={"".concat(width)} height={"".concat(height)} />
      ) : (
        <img
          className="image-root"
          width={width}
          height={height}
          src={src}
          alt={alt}
          {...props}
        />
      )}
    </>
  );
};
export default Image;
