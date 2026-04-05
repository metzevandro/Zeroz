import type { Meta, StoryObj } from "@storybook/react";
import { Page } from "./index";
import Button from "../Button/Button";
import "../../styles.scss";

const meta: Meta<typeof Page> = {
  title: "Templates/Page",
  component: Page,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Componente estrutural de layout para páginas. Define o header padronizado com título, botão de voltar, ações e descrição. As ações do header são totalmente customizáveis via prop `actions`.",
      },
    },
  },
  argTypes: {
    namePage: {
      control: "text",
      description: "Título exibido no header da página",
    },
    withBackButton: {
      control: "boolean",
      description: "Exibe o botão de voltar no header",
    },
    description: {
      control: "text",
      description: "Descrição exibida abaixo do header",
    },
    actions: {
      control: false,
      description: "ReactNode renderizado na área de ações do header",
    },
  },
  args: {
    namePage: "Nome da Página",
    withBackButton: false,
  },
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {
    children: <p>Conteúdo da página</p>,
  },
};

export const WithBackButton: Story = {
  args: {
    withBackButton: true,
    onClickBackButton: () => alert("Voltar"),
    children: <p>Conteúdo da página</p>,
  },
};

export const WithDescription: Story = {
  args: {
    description: "Gerencie os itens desta seção.",
    children: <p>Conteúdo da página</p>,
  },
};

export const WithActions: Story = {
  args: {
    actions: (
      <Button
        size="md"
        variant="primary"
        onClick={() => alert("Ação primária")}
      >
        Nova entrada
      </Button>
    ),
    children: <p>Conteúdo da página</p>,
  },
};

export const FullExample: Story = {
  args: {
    withBackButton: true,
    onClickBackButton: () => alert("Voltar"),
    description: "Visualize e edite os detalhes do item selecionado.",
    actions: (
      <>
        <Button size="md" variant="secondary" onClick={() => alert("Cancelar")}>
          Cancelar
        </Button>
        <Button size="md" variant="primary" onClick={() => alert("Salvar")}>
          Salvar
        </Button>
      </>
    ),
    children: <p>Conteúdo da página</p>,
  },
};
