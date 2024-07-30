import React from "react";
import "./EmptyState.scss";
interface EmptyStateProps {
  title: string;
  description: string;
  icon: string;
  buttonContentPrimary?: string;
  buttonContentSecondary?: string;
  onClickActionPrimary?: () => void;
  onClickActionSecondary?: () => void;
}
declare const EmptyState: React.FC<EmptyStateProps>;
export default EmptyState;
