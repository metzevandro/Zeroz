import "./AppShell.scss";
import React from "react";
import { AppShellProps } from "./AppShell.types";
/**
 * `AppShell` is the outermost layout wrapper for the application.
 *
 * It provides the root `app-shell` class and acts as the composition
 * boundary for the full page layout — typically containing a `<Header>`,
 * a sidebar, and the main content area.
 *
 * Memoized to prevent unnecessary re-renders when parent state changes
 * do not affect the shell's own props.
 *
 * @example
 * ```tsx
 * <AppShell>
 *   <Sidebar>
 *   </Sidebar>
 *
 *   <Header>
 *   </Header>
 *
 *   <Page>
 *   </Page>
 * </AppShell>
 * ```
 */
declare const AppShell: React.FC<AppShellProps>;
export default AppShell;
