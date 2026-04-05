import React from "react";
export interface AppShellProps {
    /**
     * The full application content — typically composed of a `<Header>`,
     * a sidebar, and the main page content area.
     *
     * `AppShell` acts as the outermost layout wrapper and applies no
     * structural constraints on its children.
     */
    children: React.ReactNode;
}
