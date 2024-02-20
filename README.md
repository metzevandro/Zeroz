# Design System Zeroz

O Design System Zeroz é um conjunto de componentes reutilizáveis para construir interfaces de usuário consistentes e bonitas. Este pacote npm permite que você aproveite os componentes disponíveis em nossa biblioteca e os integre facilmente em seus projetos.

## Storybook

Para visualizar todos os componentes e suas variantes, você pode acessar nosso Storybook. Lá você encontrará uma documentação detalhada de cada componente, bem como exemplos de uso e personalização.

Acesse o [Storybook do Design System Zeroz](https://zeroz.vercel.app/).

## Next.js
#### Create project

Comece criando um novo projeto Next.js usando `create-next-app`:

```bash
npx create-next-app@latest
```
Em seguida, serão solicitados os seguintes prompts:
```bash
1 What is your project named?  my-app
2 Would you like to use TypeScript?  No / Yes
3 Would you like to use ESLint?  No / Yes
4 Would you like to use Tailwind CSS?  No / Yes
5 Would you like to use `src/` directory?  No / Yes
6 Would you like to use App Router? (recommended)  No / Yes
7 Would you like to customize the default import alias (@/*)?  No / Yes
```
## Adicionando as Cores da Marca

Para aplicar as cores da marca do Design System Zeroz em seus projetos, certifique-se de adicionar o atributo `data-company` com o valor `"zeroz"` à tag HTML em seus arquivos. Isso garantirá que os estilos correspondentes sejam aplicados corretamente.

Adicione o seguinte trecho à sua tag HTML:

```html
<html lang="en" data-company="zeroz" />
 ```

## Como Baixar

Para instalar o Design System Zeroz em seu projeto, você pode utilizar o npm ou o yarn.

### npm

```bash
npm install design-system-zeroz @latest
```

### yarn

```bash
yarn add design-system-zeroz @latest
```

## Como Usar

Após a instalação, você pode importar os componentes diretamente em seus arquivos JavaScript ou TypeScript e começar a usá-los em seu projeto.

### Exemplo de Uso

```jsx
import React from 'react';
import "design-system-zeroz/src/app/styles.scss";
import { Button } from "design-system-zeroz";

export default function Home() {
  return (
    <Button size="md" label="Clique aqui!" variant="primary"/>
  );
}

```

Lembre-se de importar `'design-system-zeroz/src/app/styles.scss'` para ter as estilizações dos componentes.

## Contribuindo

Fique à vontade para contribuir com o Design System Zeroz! Se você encontrar problemas, bugs ou tiver sugestões de melhorias, por favor, abra uma issue em nosso repositório no GitHub.

## Licença

Este projeto é licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

---

Esperamos que o Design System Zeroz seja útil para o seu projeto. Se tiver alguma dúvida ou precisar de suporte, sinta-se à vontade para entrar em contato conosco.