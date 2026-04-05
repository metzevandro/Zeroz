import React from "react";
export interface EmptyStateProps {
    /**
     * Material Symbol icon name displayed at the top of the empty state.
     */
    icon: string;
    /**
     * Primary heading text describing the empty state context.
     */
    title: string;
    /**
     * Supporting text that provides more detail or a call to action hint.
     */
    description: string;
    /**
     * Optional footer content — typically one or more `<Button>` components.
     * Gives consumers full control over the actions rendered in the footer.
     *
     * @example
     * ```tsx
     * <EmptyState
     *   icon="inbox"
     *   title="No messages"
     *   description="Your inbox is empty."
     *   actions={
     *     <Button variant="primary" onClick={compose}>Compose</Button>
     *   }
     * />
     * ```
     */
    actions?: React.ReactNode;
}
