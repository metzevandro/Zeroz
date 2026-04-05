import "./EmptyState.scss";
import React from "react";
import { EmptyStateProps } from "./EmptyState.types";
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
declare const EmptyState: React.FC<EmptyStateProps>;
export default EmptyState;
