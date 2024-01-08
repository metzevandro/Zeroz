import "./AppShell.scss";

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return <div className="app-shell">{children}</div>;
};

export default AppShell;
