import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

import { TextArea, Input, EmptyState, Page, Button, FileUploader } from '../../index'
import "../../styles.scss";
import Card from "../Card";
import ButtonIcon from "../ButtonIcon";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof FileUploader> = {
  title: "Components/FileUploader",
  component: FileUploader,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1065-3271",
    },
    docs: {
      description: {
        component: `
**FileUploader** é um componente de seleção de arquivos com validação de tamanho
por arquivo e feedback de erro individual em cada linha.

Arquivos que excedem \`maxFileSize\` são exibidos com indicador de erro e mensagem —
eles **não** são incluídos no payload do \`onChange\`, mas ficam visíveis para o usuário
poder identificar e remover o arquivo problemático.

### Modo arquivo único (padrão)
- Um \`FileUploaderItem\` por vez.
- Clicar no botão **substitui** o arquivo atual.
- Clicar no × remove o arquivo.

### Modo múltiplos arquivos (\`multiple={true}\`)
- Cada arquivo selecionado gera seu próprio item.
- Clicar no botão **acrescenta** arquivos à lista.
- Cada item tem seu próprio ×.

### Gerenciamento de estado
- **Não-controlado** (sem prop \`value\`): estado gerenciado internamente.
- **Controlado** (prop \`value\`): passe \`null\` para limpar a lista de fora (ex.: após submit).
  **Não** reflita o \`onChange\` de volta como \`value\` — o estado interno é sempre
  a fonte de verdade da lista renderizada, evitando loops.

### Validação
- \`maxFileSize\` define o limite em **MB**
- \`accept\` restringe o seletor do sistema operacional (MIME types ou extensões)
- Arquivos com erro ficam marcados com ícone e mensagem, mas não travam a seleção de outros
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Título exibido no topo do componente.",
      table: { type: { summary: "string" } },
    },
    description: {
      control: "text",
      description:
        "Texto de suporte exibido abaixo da lista. Use para informar formatos aceitos ou limite de tamanho.",
      table: { type: { summary: "string" } },
    },
    buttonLabel: {
      control: "text",
      description: "Texto do botão de upload.",
      table: { type: { summary: "string" } },
    },
    typeIconButton: {
      control: "text",
      description:
        "Nome do ícone Material Symbols renderizado dentro do botão.",
      table: { type: { summary: "string" } },
    },
    multiple: {
      control: "boolean",
      description:
        "Quando `true`, permite selecionar múltiplos arquivos e acrescenta à lista. Quando `false`, substitui.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o botão e o input de arquivo.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    maxFileSize: {
      control: "number",
      description:
        "Tamanho máximo de arquivo em **MB**. Arquivos que excedem esse limite exibem erro. Omitir desativa a validação.",
      table: { type: { summary: "number" } },
    },
    accept: {
      control: "text",
      description:
        "Restringe o seletor do sistema. Aceita MIME types (`image/png`), extensões (`.pdf`), wildcards (`image/*`) ou combinações separadas por vírgula.",
      table: { type: { summary: "string" } },
    },
    onChange: {
      action: "onChange",
      description:
        "Disparado após adicionar ou remover arquivos. Recebe `FileList` com os arquivos válidos, ou `null` quando a lista fica vazia.",
      table: { type: { summary: "(files: FileList | null) => void" } },
    },
    value: {
      control: false,
      description:
        "Lista controlada externamente. Passe `null` para limpar programaticamente. Valores não-nulos são ignorados para evitar loops.",
      table: { type: { summary: "FileList | null" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileUploader>;

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Estado base: arquivo único, sem restrições de tipo ou tamanho.
 * Selecionar um novo arquivo substitui o atual.
 */
export const Default: Story = {
  name: "Default",
  render: () => (
    <FileUploader
      title="Anexo"
      description="Selecione um arquivo para enviar."
      buttonLabel="Adicionar arquivo"
      typeIconButton="upload"
      onChange={(files) => console.log("onChange", files)}
    />
  ),
};

// ─── 2. Variações de modo ─────────────────────────────────────────────────────

/**
 * Modo múltiplos arquivos — cada clique no botão **acrescenta** novos arquivos
 * à lista existente. Cada item tem seu próprio botão de remoção (ButtonIcon).
 */
export const Multiple: Story = {
  name: "Multiple files",
  render: () => (
    <FileUploader
      title="Documentos"
      description="Selecione um ou mais arquivos."
      buttonLabel="Adicionar arquivos"
      typeIconButton="upload"
      multiple
      onChange={(files) => console.log("onChange", files)}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Clicar no botão **acrescenta** arquivos à lista. Cada arquivo tem seu próprio `ButtonIcon` de remoção (ícone `close`).",
      },
    },
  },
};

// ─── 3. Variações de accept ───────────────────────────────────────────────────

/**
 * Seletor restrito a imagens (`accept="image/*"`).
 * Útil para campos de foto de perfil ou galeria.
 */
export const ImagesOnly: Story = {
  name: 'Images only (accept="image/*")',
  render: () => (
    <FileUploader
      title="Foto de perfil"
      description="PNG, JPG ou GIF."
      buttonLabel="Enviar foto"
      typeIconButton="photo_camera"
      accept="image/*"
      onChange={(files) => console.log("onChange", files)}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "O seletor do OS exibe apenas imagens. Nota: `accept` é uma sugestão ao sistema — o usuário ainda pode forçar outros tipos digitando o caminho manualmente.",
      },
    },
  },
};

/**
 * Seletor restrito a PDF e documentos Word.
 * Usa MIME types completos para maior compatibilidade entre sistemas operacionais.
 */
export const PdfAndDocx: Story = {
  name: "PDF & DOCX only",
  render: () => (
    <FileUploader
      title="Contrato"
      description="Apenas PDF ou Word (.doc, .docx)."
      buttonLabel="Anexar documento"
      typeIconButton="attach_file"
      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      onChange={(files) => console.log("onChange", files)}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Combinação de extensões e MIME types para máxima compatibilidade entre navegadores e sistemas operacionais.",
      },
    },
  },
};

/**
 * Planilhas Excel e CSV — cenário de importação de dados em bulk.
 */
export const SpreadsheetImport: Story = {
  name: "Spreadsheet import (.xlsx, .csv)",
  render: () => (
    <FileUploader
      title="Importar dados"
      description="Arquivos .xlsx ou .csv."
      buttonLabel="Selecionar planilha"
      typeIconButton="table_chart"
      accept=".xlsx,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv"
      onChange={(files) => console.log("onChange", files)}
    />
  ),
};

// ─── 4. Validação de tamanho ──────────────────────────────────────────────────

/**
 * Limite de 1 MB — envie um arquivo grande para ver o estado de erro.
 * O arquivo problemático fica visível com ícone `error_outline` e mensagem,
 * mas NÃO é incluído no payload do `onChange`.
 */
export const WithSizeLimit: Story = {
  name: "With size limit (1 MB)",
  render: () => (
    <FileUploader
      title="Foto de perfil"
      description="PNG ou JPG, máximo 1 MB."
      buttonLabel="Enviar foto"
      typeIconButton="photo_camera"
      accept="image/*"
      maxFileSize={1}
      onChange={(files) => console.log("onChange", files)}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Arquivos acima de 1 MB exibem erro com mensagem `File "..." exceeds the 1 MB size limit.` e são excluídos do payload do `onChange`.',
      },
    },
  },
};

// ─── 5. Estado desabilitado ───────────────────────────────────────────────────

/**
 * Estado desabilitado — o `Button` interno recebe `disabled={true}`
 * e o `<input type="file">` também é desabilitado.
 * Use quando o upload não estiver disponível (permissões, fora do prazo etc.).
 */
export const Disabled: Story = {
  name: "Disabled",
  args: {
    title: "Anexos",
    description: "Upload indisponível no momento.",
    buttonLabel: "Adicionar arquivo",
    typeIconButton: "upload",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "O `Button` do Zeroz recebe `disabled` e exibe o estado visual correto. O `<input type=\"file\">` oculto também é desabilitado, impedindo qualquer abertura de seletor.",
      },
    },
  },
};

// ─── 6. Sem descrição ─────────────────────────────────────────────────────────

/**
 * Sem prop `description` — o footer renderiza apenas a lista de arquivos.
 * Use quando o `title` já comunica tudo que o usuário precisa saber.
 */
export const NoDescription: Story = {
  name: "Without description",
  render: () => (
    <FileUploader
      title="Anexo do chamado"
      buttonLabel="Adicionar arquivo"
      typeIconButton="attach_file"
      onChange={(files) => console.log("onChange", files)}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Quando `description` é omitida, o parágrafo de suporte não é renderizado e o footer exibe apenas a lista de arquivos.",
      },
    },
  },
};

// ─── 7. Container estreito ────────────────────────────────────────────────────

/**
 * Container de 280 px — valida o `useContainerWidth` e o truncamento do nome
 * do arquivo com `text-overflow: ellipsis` via `maxWidth: calc(${width}px - 60px)`.
 */
export const NarrowContainer: Story = {
  name: "Narrow container (280px)",
  render: () => (
    <div style={{ width: "280px" }}>
      <FileUploader
        title="Documento"
        description="PDF, máx. 10 MB."
        buttonLabel="Selecionar"
        typeIconButton="attach_file"
        accept="application/pdf"
        maxFileSize={10}
        onChange={(files) => console.log("onChange", files)}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "O hook `useContainerWidth` mede a largura do container via `ResizeObserver` e limita o nome do arquivo a `calc(${width}px - 60px)`, preservando o `ButtonIcon` de remoção.",
      },
    },
  },
};

// ─── 8. Controlado — limpar programaticamente ────────────────────────────────

/**
 * Limpeza controlada com `Button` do Zeroz — passa `value={null}` momentaneamente
 * para limpar a lista de fora do componente (ex.: após submit de formulário).
 *
 * ⚠️ NÃO reflita o retorno do `onChange` de volta como `value` — isso causa loop.
 */
export const ControlledClear: Story = {
  name: "Controlled clear",
  render: () => {
    const [shouldClear, setShouldClear] = useState(false);

    const handleClear = () => {
      setShouldClear(true);
      setTimeout(() => setShouldClear(false), 0);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <FileUploader
          title="Anexos"
          description="Selecione arquivos e clique em Limpar para resetar."
          buttonLabel="Adicionar arquivo"
          typeIconButton="upload"
          multiple
          value={shouldClear ? null : undefined}
          onChange={(files) => console.log("onChange", files)}
        />
        <div>
          <Button style={{width: 'fit-content'}} variant="secondary" size='sm' onClick={handleClear}>
            Limpar arquivos
          </Button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "O `Button` do Zeroz aciona a limpeza. Passe `value={null}` com flag + `setTimeout(0)` para limpar a lista externamente sem causar loop de estado.",
      },
    },
  },
};

// ─── 12. Log interativo de onChange ──────────────────────────────────────────

/**
 * Log interativo — exibe em tempo real quais arquivos estão no payload do
 * `onChange`. Demonstra que arquivos com erro NÃO aparecem na lista.
 * Usa `Card` do Zeroz para delimitar as duas áreas visualmente.
 */
export const OnChangeLiveLog: Story = {
  name: "onChange live log",
  render: () => {
    const [log, setLog] = useState<string[]>([]);

    const handleChange = (fileList: FileList | null) => {
      if (!fileList || fileList.length === 0) {
        setLog(["onChange(null) — lista vazia"]);
        return;
      }
      const entries = Array.from(fileList).map(
        (f) => `• ${f.name} (${(f.size / 1024).toFixed(1)} KB)`
      );
      setLog([
        `onChange — ${fileList.length} arquivo(s) válido(s):`,
        ...entries,
      ]);
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-small)",
          width: 'fit-content'
        }}
      >
        <Card>
          <Card.Content>
              <FileUploader
                title="Teste de validação"
                description="Imagens, máx. 1 MB. Arquivos grandes mostram erro mas não entram no onChange."
                buttonLabel="Selecionar arquivos"
                typeIconButton="upload"
                multiple
                accept="image/*"
                maxFileSize={1}
                onChange={handleChange}
              />
          </Card.Content>
        </Card>

        {log.length > 0 && (
          <Card>
            <Card.Header>
                <small
                 
                >
                  Payload do onChange
                </small>
            </Card.Header>
            <Card.Content>
              
                {log.map((line, i) => (
                  <small key={i}>{line}</small>
                ))}
            </Card.Content>
          </Card>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstra que o `onChange` recebe apenas os arquivos **válidos**. Arquivos acima de 1 MB aparecem no `FileUploader` com erro, mas não constam no log do `Card` abaixo.",
      },
    },
  },
};