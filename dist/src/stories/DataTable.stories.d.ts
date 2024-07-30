import React from "react";
import type { Meta } from "@storybook/react";
import "../styles.scss";
declare const meta: Meta;
export default meta;
type DefaultProps = {
  expandable: boolean;
  selectable: boolean;
  itemPerPage: number;
  pagesText: string;
  inputPlaceholder: string;
  typeIconFirstButton: string;
  typeIconSecondButton: string;
  labelFirstButton: string;
  labelSecondButton: string;
  onClickFirstButton?: () => void;
  onClickSecondButton?: () => void;
  selectableLabelFirstButton: string;
  selectableLabelSecondButton: string;
  selectableOnClickFirstButton?: () => void;
  selectableOnClickSecondButton?: () => void;
  firstButtonLabelAside: string;
  secondButtonLabelAside: string;
  titleNoDataMessage: string;
  labelButtonNoDataFilteredMessage: string;
  descriptionNoDataMessage: string;
  asideTitle: string;
  selectableIconFirstButton: string;
  selectableIconSecondButton: string;
  filters: {
    [key: string]: string[];
  };
  columns: string[];
  data: {
    id: string;
    [key: string]: any;
  }[];
  expandedData?: Array<{
    id: string;
    [key: string]: React.ReactNode;
  }>;
  descriptionNoDataFilteredMessage: string;
  titleNoDataFilteredMessage: string;
};
export declare const Default: import("@storybook/csf").AnnotatedStoryFn<
  import("@storybook/react").ReactRenderer,
  DefaultProps
>;
export declare const withSelectable: import("@storybook/csf").AnnotatedStoryFn<
  import("@storybook/react").ReactRenderer,
  DefaultProps
>;
export declare const withExpandable: import("@storybook/csf").AnnotatedStoryFn<
  import("@storybook/react").ReactRenderer,
  DefaultProps
>;
export declare const withSelectableAndWithExpandable: import("@storybook/csf").AnnotatedStoryFn<
  import("@storybook/react").ReactRenderer,
  DefaultProps
>;
export declare const withFilters: import("@storybook/csf").AnnotatedStoryFn<
  import("@storybook/react").ReactRenderer,
  DefaultProps
>;
