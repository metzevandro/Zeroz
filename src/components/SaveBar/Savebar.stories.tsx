import type { Meta, StoryObj } from "@storybook/react";
import Savebar from "./Savebar";

const meta: Meta<typeof Savebar> = {
  title: "Components/Savebar",
  component: Savebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
\`SaveBar\` é uma barra de ação usada para confirmar ou descartar alterações não salvas.

Renderiza uma barra full-width com um texto descritivo à esquerda e os botões **Save** / **Cancel** à direita.
Em telas ≤ 768px o padding lateral é ajustado automaticamente.

### Quando usar
- Sempre que o usuário realizar alterações em um formulário ou página ainda não persistidas.
- Posicione no topo ou rodapé da área de edição.
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Texto descritivo exibido à esquerda da barra.",
    },
    labelSave: {
      control: "text",
      description: "Rótulo do botão de salvar.",
    },
    labelCancel: {
      control: "text",
      description: "Rótulo do botão de cancelar.",
    },
    onClickSave: {
      action: "onClickSave",
      description:
        "Callback disparado ao clicar em salvar. Recebe o MouseEvent.",
    },
    onClickCancel: {
      action: "onClickCancel",
      description: "Callback disparado ao clicar em cancelar.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Savebar>;

export const Default: Story = {
  args: {
    label: "Você possui alterações não salvas",
    labelSave: "Salvar",
    labelCancel: "Cancelar",
  },
};

export const English: Story = {
  args: {
    label: "You have unsaved changes",
    labelSave: "Save",
    labelCancel: "Discard",
  },
};

export const LongLabel: Story = {
  args: {
    label:
      "Existem alterações pendentes que ainda não foram salvas no servidor",
    labelSave: "Salvar alterações",
    labelCancel: "Descartar",
  },
};
