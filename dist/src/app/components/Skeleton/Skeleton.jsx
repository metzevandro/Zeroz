import React from "react";
import "./Skeleton.scss";
export default function Skeleton(props) {
    return (<div className={"skeleton ".concat(props.circle === true ? "circle" : "no-circle")} style={{
            width: "".concat(props.width, "px"),
            height: "".concat(props.height, "px"),
            borderRadius: props.circle ? "var(--s-border-radius-pill)" : "",
            backgroundSize: "".concat(props.width, "px"),
        }}></div>);
}
