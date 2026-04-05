'use strict';

var jsxRuntime = require('react/jsx-runtime');
var Icon = require('./Icon-BUoiqqF-.js');

/**
 * Renders the title and description block of an `EmptyState`.
 */
function EmptyStateContent({ title, description, }) {
    return (jsxRuntime.jsxs("div", { className: "empty-state-content", children: [jsxRuntime.jsx("h3", { children: title }), jsxRuntime.jsx("p", { children: description })] }));
}

/**
 * `EmptyState` communicates that a section has no content to display,
 * guiding users toward a relevant action.
 *
 * The `actions` prop accepts any `ReactNode`, giving consumers full control
 * over which buttons, links, or other elements appear in the footer.
 *
 * @example
 * ```tsx
 * // Single primary action
 * <EmptyState
 *   icon="folder_open"
 *   title="No projects yet"
 *   description="Create your first project to get started."
 *   actions={
 *     <Button variant="primary" onClick={createProject}>New project</Button>
 *   }
 * />
 *
 * // Two actions
 * <EmptyState
 *   icon="inbox"
 *   title="No messages"
 *   description="Your inbox is empty."
 *   actions={
 *     <>
 *       <Button variant="primary" onClick={compose}>Compose</Button>
 *       <Button variant="secondary" onClick={refresh}>Refresh</Button>
 *     </>
 *   }
 * />
 *
 * // No actions
 * <EmptyState
 *   icon="search_off"
 *   title="No results"
 *   description="Try adjusting your search filters."
 * />
 * ```
 */
const EmptyState = ({ icon, title, description, actions, }) => (jsxRuntime.jsxs("div", { className: "empty-state-root", children: [jsxRuntime.jsx(Icon.Icon, { icon: icon, size: "lg" }), jsxRuntime.jsx(EmptyStateContent, { title: title, description: description }), actions && jsxRuntime.jsx("div", { className: "empty-state-footer", children: actions })] }));

exports.EmptyState = EmptyState;
