'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

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
const AppShell = React.memo(({ children }) => (jsxRuntime.jsx("div", { className: "app-shell", children: children })));
AppShell.displayName = "AppShell";

exports.AppShell = AppShell;
