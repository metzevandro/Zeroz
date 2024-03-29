import React from "react";
import "./BemVindo.scss";
import PackageInfo from "../../../../package.json";
import Icon from "../Icon/Icon";

export const BemVindo = () => {
  return (
    <div
      className="welcome"
      style={{
        background: `url(favicon.svg)  center center fixed`,
        backgroundSize: "cover",
      }}
    >
      <div>
        <h2>@design-system-zeroz</h2>
        <h4>{`v${PackageInfo.version}`}</h4>
      </div>
      <div className="welcome-container">
        <a
          href="https://github.com/metzevandro/Zeroz"
          style={{ display: "flex" }}
        >
          <p>Github</p>
          <Icon icon="arrow_forward" size="sm" />
        </a>
        <a
          href="https://www.figma.com/file/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?type=design&node-id=21-4682&mode=design&t=a2ofpy8lnxJjcG1Z-0"
          style={{ display: "flex" }}
        >
          <p>Figma</p>
          <Icon icon="arrow_forward" size="sm" />
        </a>
      </div>
    </div>
  );
};
