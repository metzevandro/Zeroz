import React from "react";
import "./AppShell.scss";

// Props
interface AppShellProps {
  children: React.ReactNode;
}

// Declaração
const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return <div className="app-shell">{children}</div>;
};

// Exportação
export default AppShell;
