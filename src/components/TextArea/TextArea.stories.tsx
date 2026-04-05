import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TextArea } from "./index";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Campo de texto multilinha. Use para coletar descrições, comentários ou qualquer conteúdo extenso.",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Texto do label acima do campo",
    },
    placeholder: {
      control: "text",
      description: "Texto de placeholder quando o campo está vazio",
    },
    value: {
      control: "text",
      description: "Valor controlado externamente",
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o campo",
    },
    error: {
      control: "boolean",
      description: "Ativa o estado de erro",
    },
    errorText: {
      control: "text",
      description: "Mensagem exibida no estado de erro",
    },
  },
  args: {
    label: "Label",
    placeholder: "Digite aqui...",
    disabled: false,
    error: false,
    errorText: "Mensagem de erro",
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithError: Story = {
  args: {
    error: true,
    errorText: "Este campo é obrigatório.",
  },
};

export const DisabledWithError: Story = {
  args: {
    disabled: true,
    error: true,
    errorText: "Este campo é obrigatório.",
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [text, setText] = useState("Valor inicial");
    return (
      <TextArea
        {...args}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    );
  },
};

export const WithBlurValidation: Story = {
  render: (args) => {
    const [error, setError] = useState(false);
    const [value, setValue] = useState("");

    const handleBlur = () => setError(value.trim().length === 0);

    return (
      <TextArea
        {...args}
        value={value}
        error={error}
        errorText="Campo obrigatório."
        onChange={(e) => {
          setValue(e.target.value);
          if (error) setError(false);
        }}
        onBlur={handleBlur}
      />
    );
  },
};
