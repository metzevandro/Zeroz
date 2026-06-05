<img src="https://zeroz.vercel.app/favicon.svg" width="80"/>

# Design System Zeroz

Biblioteca de componentes React reutilizáveis com tokens de design, tipografia, cores e estilos padronizados. Construída para garantir consistência visual e agilidade no desenvolvimento de interfaces.

[![npm version](https://img.shields.io/npm/v/design-system-zeroz)](https://www.npmjs.com/package/design-system-zeroz)
[![license](https://img.shields.io/npm/l/design-system-zeroz)](./LICENSE.md)
[![storybook](https://img.shields.io/badge/Storybook-online-ff4785)](https://zeroz.vercel.app)

---

## Instalação

```bash
npm install design-system-zeroz
# ou
yarn add design-system-zeroz
```

---

## Configuração

### 1. Importar os estilos

Importe os estilos uma única vez no ponto de entrada da sua aplicação (ex: `_app.tsx`, `layout.tsx`, `main.tsx`):

```tsx
import "design-system-zeroz/dist/styles.css";
```

### 2. Definir o tema do projeto

Adicione o atributo `data-company="zeroz"` na tag `<html>` para aplicar as cores da marca:

```html
<html lang="pt-BR" data-company="zeroz">
```

Em **Next.js (App Router)**:

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" data-company="zeroz">
      <body>{children}</body>
    </html>
  );
}
```

### 3. Tema escuro (opcional)

O design system suporta dark mode nativamente. Para ativá-lo, adicione `data-theme="dark"` na tag `<html>`:

```html
<html lang="pt-BR" data-company="zeroz" data-theme="dark">
```

---

## Uso básico

```tsx
import { Button } from "design-system-zeroz";

export default function Page() {
  return (
    <Button variant="primary" onClick={() => alert("Clicou!")}>
      Salvar
    </Button>
  );
}
```

---

## Todos os componentes

| Componente | Descrição |
|-----------|-----------|
| `AppShell` | Wrapper raiz da aplicação |
| `Aside` | Painel lateral deslizante |
| `Avatar` | Foto ou inicial do usuário |
| `Badge` | Indicador numérico ou de status |
| `Brand` | Logo da marca |
| `Breadcrumb` | Navegação hierárquica |
| `Button` | Botão de ação |
| `ButtonIcon` | Botão somente com ícone |
| `Card` | Contêiner de conteúdo |
| `CardDropdown` | Card com menu dropdown |
| `Checkbox` | Campo de seleção múltipla |
| `DataPicker` | Seletor de data |
| `DataTable` | Tabela de dados avançada |
| `DescriptionList` | Lista de descrição chave-valor |
| `Dropdown` | Menu suspenso |
| `EmptyState` | Estado vazio com ilustração |
| `FileUploader` | Upload de arquivos |
| `Header` | Cabeçalho da aplicação |
| `Icon` | Ícone Material Symbols |
| `Image` | Imagem com fallback |
| `ImageUploader` | Upload de imagens com preview |
| `Input` | Campo de texto |
| `InputNumber` | Campo numérico |
| `InputSearch` | Campo de busca |
| `InputSelect` | Seletor dropdown |
| `InputTime` | Seletor de horário |
| `Layout` | Layout de grid |
| `Link` | Link estilizado |
| `Loading` | Indicador de carregamento |
| `Modal` | Janela de diálogo |
| `Notification` | Notificações toast |
| `Page` | Contêiner da página |
| `Pagination` | Controle de paginação |
| `Progress` | Barra de progresso |
| `ProgressIndicator` | Indicador de etapas |
| `RadioButton` | Seleção única |
| `Savebar` | Barra de salvar flutuante |
| `SavebarTrigger` | Acionador do Savebar |
| `Sidebar` | Navegação lateral |
| `Skeleton` | Placeholder de carregamento |
| `Slider` | Controle deslizante |
| `Switch` | Toggle on/off |
| `TableList` | Lista em formato de tabela |
| `Tabs` | Navegação por abas |
| `Tag` | Etiqueta de categoria |
| `TextArea` | Campo de texto longo |
| `Tooltip` | Dica flutuante |
| `BarChart` | Gráfico de barras |
| `LineChart` | Gráfico de linhas |
| `PieChart` | Gráfico de pizza |

---

## Documentação e Storybook

Veja todos os componentes, variantes e exemplos interativos no Storybook:

👉 [StoryBook Zeroz](https://zeroz.vercel.app)

---

## Contribuindo

Contribuições são bem-vindas! Veja como contribuir:

1. Fork o repositório
2. Crie uma branch com o prefixo adequado: `feat/nome-da-feature`, `fix/nome-do-bug`
3. Faça seus commits seguindo a mesma convenção: `feat: descrição`, `fix: descrição`
4. Abra um Pull Request

---

## Licença

MIT © [evandrometz](https://github.com/metzevandro/Zeroz)
