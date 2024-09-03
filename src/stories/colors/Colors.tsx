import React from "react";
import "./Colors.scss";
import "../../styles.scss";

export const Colors = () => {
  return (
    <>
      <img className="img" src="/favicon.svg" alt="" />
      <div className="colors">
        <div>
          <h1>@design-system-zeroz</h1>
          <h2>Colors</h2>
          <p>
            Tokens de cores são variáveis definidas no arquivo SCSS e podem ser
            usados em todo o seu projeto para manter a consistência visual. Aqui
            está um exemplo de como usar um token de cor existente:
          </p>
          <pre>
            {`
              .meu-componente {
                background-color: $primary-color;
              }
            `}
          </pre>
          <p>
            Para criar um token de cor personalizado, adicione uma nova variável
            ao seu arquivo SCSS, como este exemplo:
          </p>
          <pre>
            {`
              // Colors.scss
              $meu-custom-color: #ff5733;
            `}
          </pre>
          <p>
            Agora, você pode usar esse novo token em qualquer lugar do seu
            projeto React:
          </p>
          <pre>
            {`
              .meu-outro-componente {
                color: $meu-custom-color;
              }
            `}
          </pre>
        </div>
      </div>
    </>
  );
};
