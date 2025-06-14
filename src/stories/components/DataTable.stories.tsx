import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";

import { DataTable } from "../../components/DataTable/DataTable";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";

const columns: string[] = ["Name", "Age", "Role", "Experience", "Company"];

const data: { [key: string]: any; id: string }[] = Array.from(
  { length: 500 },
  (_, i) => ({
    id: (i + 1).toString(),
    Name: `Person ${i + 1}`,
    Age: (20 + (i % 30)).toString(),
    Role: [
      "Developer",
      "Designer",
      "Data Analyst",
      "Product Owner",
      "Software Engineer",
      "UX Designer",
      "Data Scientist",
      "Project Manager",
      "Marketing Specialist",
      "HR Manager",
      "QA Engineer",
      "Business Analyst",
      "Cloud Engineer",
      "Cybersecurity Specialist",
      "DevOps Engineer",
    ][i % 15],
    Experience: `${(i % 10) + 1} ${i % 10 === 0 ? "month" : "years"}`,
    Company: [
      "Google",
      "Microsoft",
      "Netflix",
      "Instagram",
      "Amazon",
      "Apple",
      "Facebook",
      "Twitter",
      "Tesla",
      "Spotify",
    ][i % 10],
  }),
);

const meta: Meta = {
  title: "Components/Data Table",
  component: DataTable,
  parameters: {
    layout: "padded",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Data table</strong> help organize and display
            information in an easy-to-understand way. You can use filters and
            arrange the content to analyze and take action.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    withCheckbox: {
      description: "Enables selectable rows in the data table.",
      control: { type: "boolean" },
      defaultValue: false,
      table: {
        category: "Behavior",
      },
    },
    rowsPerPage: {
      description: "Number of rows to be displayed per page.",
      control: { type: "number" },
      defaultValue: 4,
      table: {
        category: "Pagination",
      },
    },
    columns: {
      description: "Columns to be displayed in the data table.",
      control: { type: "object" },
      defaultValue: ["Name", "Age", "Role", "Experience", "Company"],
      table: {
        category: "Data",
      },
    },
    data: {
      description: "Data to be displayed in the data table.",
      control: { type: "object" },
      defaultValue: data,
      table: {
        category: "Data",
      },
    },
    skeleton: {
      description: "Displays a loading skeleton instead of the data.",
      control: { type: "boolean" },
      defaultValue: false,
      table: {
        category: "Loading",
      },
    },
    onSelectedRowsChange: {
      description: "Action to see which collumn are selected.",
      action: "removed",
      table: {
        category: "Actions",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type DefaultProps = {
  skeleton: boolean;
  data: any[];
  columns: string[];
  rowsPerPage: number;
  withCheckbox?: boolean;
  headerSelectedChildren?: (
    handleModal: (title?: string, message?: string) => void,
  ) => React.ReactNode;
  textRowsSelected?: string;
};

const Template: StoryFn<DefaultProps> = (args) => {
  const [openModal, setIsOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const handleModal = (title?: string, message?: string) => {
    setIsOpenModal(!openModal);
    setModalTitle(title || "");
    setModalMessage(message || "");
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <DataTable
        columns={args.columns}
        data={args.data}
        skeleton={args.skeleton}
        rowsPerPage={args.rowsPerPage}
        withCheckbox={args.withCheckbox}
        onSelectedRowsChange={(selectedRows) => console.log(selectedRows)}
        textRowsSelected={args.textRowsSelected}
        headerSelectedChildren={
          args.headerSelectedChildren &&
          args.headerSelectedChildren(handleModal)
        }
      />

      <Modal
        hideModal={closeModal}
        dismissible
        isOpen={openModal}
        title={modalTitle}
        description={modalMessage}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  skeleton: false,
  data: data,
  columns: columns,
  withCheckbox: false,
  rowsPerPage: 5,
};

export const withCheckbox = Template.bind({});
withCheckbox.args = {
  skeleton: false,
  data: data,
  columns: columns,
  withCheckbox: true,
  headerSelectedChildren: (
    handleModal: (title?: string, message?: string) => void,
  ) => (
    <>
      <Button
        typeIcon="edit"
        size="md"
        variant="secondary"
        label="Edit"
        onClick={() => handleModal("Edit", "Edit the selected row(s)")}
      ></Button>
      <Button
        typeIcon="delete"
        size="md"
        variant="secondary"
        label="Delete"
        onClick={() => handleModal("Delete", "Delete the selected row(s)")}
      ></Button>
    </>
  ),
  rowsPerPage: 5,
  textRowsSelected: "row(s) selected",
};

export const Skeleton = Template.bind({});
Skeleton.args = {
  skeleton: true,
  data: data,
  columns: columns,
  withCheckbox: true,
  rowsPerPage: 5,
};
