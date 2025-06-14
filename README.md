<img src="/public/favicon.svg" width="100"/>

# Design System Zeroz

O **Design System Zeroz** é um projeto que reúne um conjunto de componentes de interface reutilizáveis, estilos e tokens de design, com o objetivo de garantir consistência visual, acessibilidade e agilidade no desenvolvimento de produtos digitais. Ele foi criado para facilitar a construção de interfaces bonitas e padronizadas, promovendo a identidade visual da marca Zeroz.

## Sobre o Projeto

Este repositório contém o código-fonte do Design System Zeroz, incluindo componentes React, tokens de design (cores, espaçamentos, tipografia, etc.), documentação e exemplos de uso. O projeto é mantido por mim e está aberto para contribuições da comunidade.

## Pacote npm

O Design System Zeroz está disponível como um pacote npm, permitindo que você utilize facilmente os componentes e estilos em qualquer projeto React.

### Instalação

Você pode instalar o pacote usando npm ou yarn:

```bash
npm install design-system-zeroz@latest
# ou
yarn add design-system-zeroz@latest
```

### Como Usar

Após a instalação, importe os estilos e os componentes desejados no seu projeto:

```jsx
import "design-system-zeroz/dist/index.esm.css";
import "design-system-zeroz/src/scss/tokens/tokens.scss";
import { Button } from "design-system-zeroz";

export default function Home() {
  return <Button size="md" label="Clique aqui!" variant="primary" />;
}
```

> **Dica:** Lembre-se de importar `"design-system-zeroz/src/scss/tokens/tokens.scss"` e `"design-system-zeroz/dist/index.esm.css"` para garantir que os estilos dos componentes sejam aplicados corretamente.

## Cores da Marca

Para aplicar as cores da marca Zeroz, adicione o atributo `data-company="zeroz"` à tag `<html>` do seu projeto:

```html
<html lang="en" data-company="zeroz">
  <!-- ... -->
</html>
```

## Documentação e Storybook

Você pode visualizar todos os componentes, suas variantes e exemplos de uso acessando o [Storybook do Design System Zeroz](https://zeroz.vercel.app/).

## Contribuindo

Contribuições são bem-vindas! Se você encontrar problemas, bugs ou tiver sugestões, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Esperamos que o Design System Zeroz seja útil para o seu projeto. Em caso de dúvidas ou sugestões, entre em contato conosco.
