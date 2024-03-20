import type { Meta, StoryFn } from "@storybook/react";
import BreadcrumbRoot, { Breadcrumb } from "./Breadcrumb";
import "../../styles.scss";
import mdx from "./Breadcrumb.mdx";

const meta: Meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
    page: mdx,
  },
};

export default meta;

type Args = {
  pageName: string;
  initialPage: string;
  initialHref: string;
  href: string;
};

const Template: StoryFn<Args> = (args) => {
  return (
    <>
      <BreadcrumbRoot href={args.initialHref} pageName={args.initialPage}>
        <Breadcrumb href={args.href} pageName={args.pageName}></Breadcrumb>
      </BreadcrumbRoot>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  pageName: "Breadcrumb",
  initialPage: "Breadcrumb",
};
