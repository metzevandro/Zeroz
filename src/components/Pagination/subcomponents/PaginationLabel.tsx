import React from "react";
import Skeleton from "../../Skeleton/Skeleton";

interface PaginationLabelProps {
  label: string;
  skeleton: boolean;
}

/**
 * Renders the pagination label or a skeleton placeholder during loading.
 */
export function PaginationLabel({ label, skeleton }: PaginationLabelProps) {
  if (skeleton) return <Skeleton height="24" width="160" />;
  return <p>{label}</p>;
}
