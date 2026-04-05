import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ImageUploader } from "./index";

const meta: Meta<typeof ImageUploader> = {
  title: "Components/ImageUploader",
  component: ImageUploader,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Componente para upload de imagens via clique ou drag-and-drop. Suporta múltiplos arquivos, validação de tamanho e preview inline.",
      },
    },
  },
  argTypes: {
    proportion: {
      control: "select",
      options: ["1/1", "16/9", "9/16"],
      description: "Proporção (aspect ratio) da dropzone e dos previews",
    },
    labelDropzone: {
      control: "text",
      description: "Texto exibido dentro da dropzone",
    },
    iconDropzone: {
      control: "text",
      description: "Nome do ícone exibido na dropzone",
    },
    title: {
      control: "text",
      description: "Título acima do uploader",
    },
    description: {
      control: "text",
      description: "Texto descritivo abaixo do uploader",
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o componente",
    },
    multiple: {
      control: "boolean",
      description: "Permite seleção de múltiplos arquivos",
    },
    maxFileSize: {
      control: "number",
      description: "Tamanho máximo por arquivo em MB",
    },
    value: { control: false },
    onChange: { control: false },
  },
  args: {
    proportion: "16/9",
    labelDropzone: "Clique ou arraste uma imagem",
    iconDropzone: "upload",
    disabled: false,
    multiple: false,
  },
};

export default meta;
type Story = StoryObj<typeof ImageUploader>;

const ControlledTemplate = (
  args: React.ComponentProps<typeof ImageUploader>,
) => {
  const [files, setFiles] = useState<FileList | null>(null);
  return <ImageUploader {...args} value={files} onChange={setFiles} />;
};

export const Default: Story = {
  render: ControlledTemplate,
};

export const Multiple: Story = {
  render: ControlledTemplate,
  args: { multiple: true },
};

export const Disabled: Story = {
  render: ControlledTemplate,
  args: { disabled: true },
};

export const WithTitleAndDescription: Story = {
  render: ControlledTemplate,
  args: {
    title: "Foto de capa",
    description: "Formatos aceitos: JPG, PNG. Tamanho máximo: 2 MB.",
  },
};

export const WithFileSizeLimit: Story = {
  render: ControlledTemplate,
  args: {
    maxFileSize: 1,
    description: "Tamanho máximo: 1 MB por arquivo.",
  },
};

export const SquareProportion: Story = {
  render: ControlledTemplate,
  args: { proportion: "1/1" },
};

export const VerticalProportion: Story = {
  render: ControlledTemplate,
  args: { proportion: "9/16" },
};
