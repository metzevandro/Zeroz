import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { ImageUploader } from "./index";
import "../../styles.scss";

const meta: Meta<typeof ImageUploader> = {
  title: "Components/ImageUploader",
  component: ImageUploader,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
O **ImageUploader** é um componente para upload de imagens via clique ou drag-and-drop.
Suporta múltiplos arquivos, validação de tamanho, preview inline e remoção individual.

### Comportamento
- **Clique** — abre o seletor de arquivos nativo
- **Drag-and-drop** — arraste imagens diretamente sobre o componente
- **Preview** — exibe miniaturas das imagens selecionadas com botão de remoção individual
- **Loading** — exibe spinner enquanto os previews são gerados via \`FileReader\`
- **Erro** — exibe mensagem quando um arquivo excede o \`maxFileSize\`

### Proporções disponíveis
| proportion | uso recomendado                                 |
|------------|-------------------------------------------------|
| \`"16/9"\`  | Banners, capas de artigo, thumbnails landscape  |
| \`"1/1"\`   | Avatares, fotos de produto, thumbnails quadrados |
| \`"9/16"\`  | Stories, posts verticais, fotos de perfil        |

### Quando usar
- Upload de imagens em formulários (avatar, galeria, banner)
- Cenários onde o usuário precisa visualizar as imagens antes de enviar

### Quando não usar
- Upload de arquivos não-imagem — use um componente \`FileUploader\` genérico
- Upload direto para storage sem preview — considere uma solução mais simples

### Uso controlado
O componente é **totalmente controlado** — o estado de arquivos deve ser gerenciado
externamente via \`value\` + \`onChange\`:

\`\`\`tsx
const [files, setFiles] = useState<FileList | null>(null);

<ImageUploader
  proportion="16/9"
  labelDropzone="Clique ou arraste"
  iconDropzone="upload"
  value={files}
  onChange={setFiles}
/>
\`\`\`
        `,
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=2474-364",
    },
  },
  argTypes: {
    proportion: {
      control: "select",
      options: ["1/1", "16/9", "9/16"],
      description:
        "Proporção (aspect ratio) aplicada à dropzone e aos previews das imagens.",
      table: {
        defaultValue: { summary: '"16/9"' },
        type: { summary: '"16/9" | "1/1" | "9/16"' },
      },
    },
    labelDropzone: {
      control: "text",
      description: "Texto exibido dentro da dropzone.",
      table: { type: { summary: "string" } },
    },
    iconDropzone: {
      control: "text",
      description: "Nome do ícone Material Symbol exibido na dropzone.",
      table: { type: { summary: "string" } },
    },
    title: {
      control: "text",
      description: "Título exibido acima do uploader.",
      table: { type: { summary: "string" } },
    },
    description: {
      control: "text",
      description: "Texto descritivo exibido abaixo do uploader.",
      table: { type: { summary: "string" } },
    },
    disabled: {
      control: "boolean",
      description: "Desabilita toda interação com o componente.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    multiple: {
      control: "boolean",
      description: "Permite seleção e upload de múltiplos arquivos.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    maxFileSize: {
      control: "number",
      description:
        "Tamanho máximo permitido por arquivo em MB. Arquivos que excedem o limite exibem mensagem de erro.",
      table: { type: { summary: "number" } },
    },
    value: {
      control: false,
      description: "Lista de arquivos controlada externamente.",
      table: { type: { summary: "FileList | null" } },
    },
    onChange: {
      control: false,
      description:
        "Callback disparado sempre que a lista de arquivos é alterada.",
      table: { type: { summary: "(files: FileList | null) => void" } },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ImageUploader>;

// ─── Template controlado compartilhado ───────────────────────────────────────

const Controlled = (args: React.ComponentProps<typeof ImageUploader>) => {
  const [files, setFiles] = useState<FileList | null>(null);
  return <ImageUploader {...args} value={files} onChange={setFiles} />;
};

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Estado base com dropzone em 16/9.
 * Clique na dropzone ou arraste uma imagem para testar o upload.
 */
export const Default: Story = {
  name: "Default",
  render: Controlled,
  args: {
    proportion: "16/9",
    labelDropzone: "Clique ou arraste uma imagem",
    iconDropzone: "upload",
    disabled: false,
    multiple: false,
  },
};

// ─── 2. Proporções ────────────────────────────────────────────────────────────

/**
 * Proporção 1:1 — quadrada.
 * Use para avatares, fotos de produto e thumbnails quadrados.
 */
export const SquareProportion: Story = {
  name: "Proporção — 1:1 (quadrada)",
  render: Controlled,
  args: {
    proportion: "1/1",
    labelDropzone: "Adicionar foto",
    iconDropzone: "add_photo_alternate",
  },
};

/**
 * Proporção 9:16 — vertical.
 * Use para stories, posts verticais e fotos de perfil.
 */
export const VerticalProportion: Story = {
  name: "Proporção — 9:16 (vertical)",
  render: Controlled,
  args: {
    proportion: "9/16",
    labelDropzone: "Adicionar imagem",
    iconDropzone: "upload",
  },
};

// ─── 3. Com título e descrição ────────────────────────────────────────────────

/**
 * Uploader com título acima e descrição de instruções abaixo.
 * Use `title` para identificar o campo e `description` para orientar o usuário
 * sobre formatos aceitos e limites de tamanho.
 */
export const WithTitleAndDescription: Story = {
  name: "Com título e descrição",
  render: Controlled,
  args: {
    proportion: "16/9",
    labelDropzone: "Clique ou arraste uma imagem",
    iconDropzone: "upload",
    title: "Foto de capa",
    description: "Formatos aceitos: JPG, PNG. Tamanho máximo: 2 MB.",
  },
};

// ─── 4. Múltiplos arquivos ────────────────────────────────────────────────────

/**
 * Upload de múltiplos arquivos — `multiple: true`.
 * Cada arquivo selecionado gera um preview individual em grid de 4 colunas.
 * A dropzone permanece visível para adicionar mais imagens.
 */
export const Multiple: Story = {
  name: "Múltiplos arquivos",
  render: Controlled,
  args: {
    proportion: "1/1",
    labelDropzone: "Adicionar imagens",
    iconDropzone: "add_photo_alternate",
    multiple: true,
    title: "Galeria de fotos",
    description: "Selecione até 8 imagens para a galeria.",
  },
};

// ─── 5. Validação de tamanho ──────────────────────────────────────────────────

/**
 * Limite de tamanho por arquivo via `maxFileSize`.
 * Tente fazer upload de um arquivo maior que 1 MB para ver a mensagem de erro.
 */
export const WithFileSizeLimit: Story = {
  name: "Validação — limite de tamanho (1 MB)",
  render: Controlled,
  args: {
    proportion: "16/9",
    labelDropzone: "Clique ou arraste uma imagem",
    iconDropzone: "upload",
    maxFileSize: 1,
    description: "Tamanho máximo: 1 MB por arquivo.",
  },
};

// ─── 6. Estado desabilitado ───────────────────────────────────────────────────

/**
 * Estado desabilitado — `disabled: true`.
 * A dropzone fica visualmente inativa e toda interação é bloqueada.
 */
export const Disabled: Story = {
  name: "Estado — desabilitado",
  render: Controlled,
  args: {
    proportion: "1/1",
    labelDropzone: "Adicionar foto",
    iconDropzone: "add_photo_alternate",
    multiple: true,
    title: "Fotos do produto",
    description:
      "Adicione até 8 fotos. Formatos aceitos: JPG, PNG. Máximo 5 MB por arquivo.",
    maxFileSize: 5,
    disabled: true,
  },
};

// ─── 7. Contexto real ─────────────────────────────────────────────────────────

/**
 * Campo de upload de avatar — proporção quadrada com título e instrução.
 * Padrão típico em formulários de perfil e configurações de conta.
 */
export const AvatarUpload: Story = {
  name: "Contexto real — upload de avatar",
  render: Controlled,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "440px" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    proportion: "1/1",
    labelDropzone: "Foto de perfil",
    iconDropzone: "person",
    title: "Avatar",
    description: "JPG ou PNG, mín. 200×200px.",
  },
};

/**
 * Galeria de produto com múltiplos uploads em proporção quadrada.
 * Padrão comum em formulários de cadastro de produto em e-commerce.
 */
export const ProductGallery: Story = {
  name: "Contexto real — galeria de produto",
  render: Controlled,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "600px" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    proportion: "1/1",
    labelDropzone: "Adicionar foto",
    iconDropzone: "add_photo_alternate",
    multiple: true,
    title: "Fotos do produto",
    description:
      "Adicione até 8 fotos. Formatos aceitos: JPG, PNG. Máximo 5 MB por arquivo.",
    maxFileSize: 5,
  },
};
