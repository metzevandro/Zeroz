import React from "react";
import "./AppShell.scss";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShellContainer: React.FC<AppShellProps> = ({ children }) => (
  <div className="app-shell">{children}</div>
);

export const AppShell = React.memo(AppShellContainer);

export default AppShell;
