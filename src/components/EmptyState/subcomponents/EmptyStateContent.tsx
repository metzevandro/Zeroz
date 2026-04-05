import React from "react";

interface EmptyStateContentProps {
  title: string;
  description: string;
}

/**
 * Renders the title and description block of an `EmptyState`.
 */
export function EmptyStateContent({
  title,
  description,
}: EmptyStateContentProps) {
  return (
    <div className="empty-state-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
