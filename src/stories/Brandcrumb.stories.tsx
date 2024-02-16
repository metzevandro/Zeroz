import type { Meta, Story } from "@storybook/react";
import BreadcrumbRoot, {
  Breadcrumb,
} from "../app/components/Breadcrumb/Breadcrumb";
import "./css/main.scss";

const meta: Meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Args = {
  pageName: string;
  initialPage: string;
};

const Template: Story<Args> = (args) => {
  return (
    <>
      <BreadcrumbRoot pageName={args.initialPage}>
        <Breadcrumb pageName={args.pageName}></Breadcrumb>
      </BreadcrumbRoot>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  pageName: "Breadcrumb",
  initialPage: "Breadcrumb",
};
