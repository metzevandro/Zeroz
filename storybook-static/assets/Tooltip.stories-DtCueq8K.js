import{j as e}from"./iframe-CxNvl9BI.js";/* empty css               */import{T as r}from"./Tooltip-C4PsR8lr.js";import{B as o}from"./Button-CH6qqEEx.js";import{B as t}from"./ButtonIcon-BvrW2_xY.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-Bqm0CoJD.js";import"./Loading-DhvOqAup.js";import"./Skeleton-C80QNm7w.js";const S={title:"Components/Tooltip",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
O **Tooltip** exibe uma bolha de texto contextual quando o usuário passa o cursor sobre o elemento filho.

A bolha aparece na \`direction\` especificada com uma seta CSS apontando de volta
para o gatilho, e entra/sai suavemente via transições de \`opacity\` e \`scale\`.

> ⚠️ **Acessibilidade:** o tooltip só é ativado por hover — ele não é acessível
> por teclado nem por toque. **Nunca coloque informação essencial somente no tooltip.**
> Use-o apenas para contexto suplementar.

### Posicionamento
| direction    | comportamento                                           |
|--------------|---------------------------------------------------------|
| \`"top"\`     | Acima do gatilho — seta apontando para baixo            |
| \`"bottom"\`  | Abaixo do gatilho — seta apontando para cima            |
| \`"right"\`   | À direita do gatilho — seta apontando para a esquerda   |
| \`"left"\`    | À esquerda do gatilho — seta apontando para a direita   |

### Quando usar
- Fornecer label para botões somente-ícone
- Oferecer contexto suplementar para texto truncado
- Esclarecer o propósito de um controle sem poluir a UI

### Boas práticas
- Mantenha o \`text\` conciso — uma frase ou expressão curta no máximo
- Prefira \`"top"\` como direção padrão quando o espaço permite
- O \`max-width\` é 200px; textos mais longos quebram automaticamente em múltiplas linhas
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10083"}},argTypes:{text:{control:"text",description:"Texto exibido dentro da bolha do tooltip.",table:{type:{summary:"string"}}},direction:{control:"select",options:["top","bottom","right","left"],description:"Direção em que o tooltip aparece em relação ao gatilho.",table:{type:{summary:'"top" | "bottom" | "right" | "left"'}}},children:{control:!1,description:"Elemento gatilho que ativa o tooltip ao receber hover.",table:{type:{summary:"React.ReactNode"}}}}},n={name:"Playground",decorators:[a=>e.jsx("div",{style:{padding:"var(--s-spacing-x-large)"},children:e.jsx(a,{})})],args:{text:"Texto do tooltip",direction:"top",children:e.jsx(o,{variant:"secondary",size:"md",children:"Passe o cursor"})}},i={name:"Direção — top (padrão)",decorators:[a=>e.jsx("div",{style:{padding:"var(--s-spacing-x-large)"},children:e.jsx(a,{})})],args:{text:"Tooltip acima",direction:"top",children:e.jsx(o,{variant:"secondary",size:"md",children:"Hover"})}},s={name:"Direção — bottom",decorators:[a=>e.jsx("div",{style:{padding:"var(--s-spacing-x-large)"},children:e.jsx(a,{})})],args:{text:"Tooltip abaixo",direction:"bottom",children:e.jsx(o,{variant:"secondary",size:"md",children:"Hover"})}},d={name:"Direção — right",decorators:[a=>e.jsx("div",{style:{padding:"var(--s-spacing-x-large)"},children:e.jsx(a,{})})],args:{text:"Tooltip à direita",direction:"right",children:e.jsx(o,{variant:"secondary",size:"md",children:"Hover"})}},c={name:"Direção — left",decorators:[a=>e.jsx("div",{style:{padding:"var(--s-spacing-x-large)"},children:e.jsx(a,{})})],args:{text:"Tooltip à esquerda",direction:"left",children:e.jsx(o,{variant:"secondary",size:"md",children:"Hover"})}},l={name:"Comparativo — todas as direções",render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-x-large)",alignItems:"center",padding:"var(--s-spacing-x-large)"},children:[e.jsx(r,{text:"Acima",direction:"top",children:e.jsx(o,{variant:"secondary",size:"md",children:"Top"})}),e.jsx(r,{text:"Abaixo",direction:"bottom",children:e.jsx(o,{variant:"secondary",size:"md",children:"Bottom"})}),e.jsx(r,{text:"À direita",direction:"right",children:e.jsx(o,{variant:"secondary",size:"md",children:"Right"})}),e.jsx(r,{text:"À esquerda",direction:"left",children:e.jsx(o,{variant:"secondary",size:"md",children:"Left"})})]})},p={name:"Texto — curto",decorators:[a=>e.jsx("div",{style:{padding:"var(--s-spacing-x-large)"},children:e.jsx(a,{})})],args:{text:"Copiar",direction:"top",children:e.jsx(t,{icon:"content_copy",appearance:"plain",variant:"secondary",size:"md","aria-label":"Copiar"})}},m={name:"Texto — longo (multi-linha)",decorators:[a=>e.jsx("div",{style:{padding:"var(--s-spacing-x-large)"},children:e.jsx(a,{})})],args:{text:"Esta ação excluirá permanentemente todos os registros selecionados e não poderá ser desfeita.",direction:"top",children:e.jsx(t,{icon:"delete",appearance:"plain",variant:"warning",size:"md","aria-label":"Excluir"})}},x={name:"Contexto real — toolbar de ícones",render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-nano)",padding:"var(--s-spacing-xx-small)",background:"var(--s-color-fill-default)",borderRadius:"var(--s-border-radius-medium)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)"},children:[e.jsx(r,{text:"Editar",direction:"top",children:e.jsx(t,{icon:"edit",appearance:"plain",variant:"secondary",size:"sm","aria-label":"Editar"})}),e.jsx(r,{text:"Duplicar",direction:"top",children:e.jsx(t,{icon:"content_copy",appearance:"plain",variant:"secondary",size:"sm","aria-label":"Duplicar"})}),e.jsx(r,{text:"Compartilhar",direction:"top",children:e.jsx(t,{icon:"share",appearance:"plain",variant:"secondary",size:"sm","aria-label":"Compartilhar"})}),e.jsx(r,{text:"Excluir permanentemente",direction:"top",children:e.jsx(t,{icon:"delete",appearance:"plain",variant:"warning",size:"sm","aria-label":"Excluir"})})]})},u={name:"Contexto real — ações em tabela",render:()=>e.jsx("div",{style:{border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",overflow:"visible",width:"400px"},children:["Ana Souza","Carlos Lima","Jane Doe"].map((a,g,v)=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--s-spacing-x-small) var(--s-spacing-small)",borderBottom:g<v.length-1?"var(--s-border-width-hairline) solid var(--s-color-border-default)":"none",background:"var(--s-color-fill-default)"},children:[e.jsx("small",{children:a}),e.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-nano)"},children:[e.jsx(r,{text:"Editar",direction:"top",children:e.jsx(t,{icon:"edit",appearance:"plain",variant:"secondary",size:"sm","aria-label":`Editar ${a}`})}),e.jsx(r,{text:"Excluir",direction:"top",children:e.jsx(t,{icon:"delete",appearance:"plain",variant:"warning",size:"sm","aria-label":`Excluir ${a}`})})]})]},a))})},q=["Playground","Top","Bottom","Right","Left","AllDirections","ShortText","LongText","IconButtonsToolbar","InlineTableActions"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Playground",
  decorators: [Story => <div style={{
    padding: "var(--s-spacing-x-large)"
  }}>\r
        <Story />\r
      </div>],
  args: {
    text: "Texto do tooltip",
    direction: "top",
    children: <Button variant="secondary" size="md">Passe o cursor</Button>
  }
}`,...n.parameters?.docs?.source},description:{story:`Story interativa — passe o cursor sobre o botão para ver o tooltip.\r
Use os Controls para explorar direções e textos diferentes.`,...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Direção — top (padrão)",
  decorators: [Story => <div style={{
    padding: "var(--s-spacing-x-large)"
  }}>\r
        <Story />\r
      </div>],
  args: {
    text: "Tooltip acima",
    direction: "top",
    children: <Button variant="secondary" size="md">Hover</Button>
  }
}`,...i.parameters?.docs?.source},description:{story:`Tooltip acima do gatilho — direção padrão recomendada.\r
A seta aponta para baixo em direção ao elemento.`,...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Direção — bottom",
  decorators: [Story => <div style={{
    padding: "var(--s-spacing-x-large)"
  }}>\r
        <Story />\r
      </div>],
  args: {
    text: "Tooltip abaixo",
    direction: "bottom",
    children: <Button variant="secondary" size="md">Hover</Button>
  }
}`,...s.parameters?.docs?.source},description:{story:`Tooltip abaixo do gatilho.\r
Use quando não há espaço acima do elemento ou quando o tooltip\r
complementa conteúdo que aparece abaixo.`,...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Direção — right",
  decorators: [Story => <div style={{
    padding: "var(--s-spacing-x-large)"
  }}>\r
        <Story />\r
      </div>],
  args: {
    text: "Tooltip à direita",
    direction: "right",
    children: <Button variant="secondary" size="md">Hover</Button>
  }
}`,...d.parameters?.docs?.source},description:{story:`Tooltip à direita do gatilho.\r
Use em listas, menus ou elementos alinhados à esquerda.`,...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Direção — left",
  decorators: [Story => <div style={{
    padding: "var(--s-spacing-x-large)"
  }}>\r
        <Story />\r
      </div>],
  args: {
    text: "Tooltip à esquerda",
    direction: "left",
    children: <Button variant="secondary" size="md">Hover</Button>
  }
}`,...c.parameters?.docs?.source},description:{story:`Tooltip à esquerda do gatilho.\r
Use em elementos alinhados à direita ou próximos à borda direita da tela.`,...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Comparativo — todas as direções",
  render: () => <div style={{
    display: "flex",
    gap: "var(--s-spacing-x-large)",
    alignItems: "center",
    padding: "var(--s-spacing-x-large)"
  }}>\r
      <Tooltip text="Acima" direction="top">\r
        <Button variant="secondary" size="md">Top</Button>\r
      </Tooltip>\r
      <Tooltip text="Abaixo" direction="bottom">\r
        <Button variant="secondary" size="md">Bottom</Button>\r
      </Tooltip>\r
      <Tooltip text="À direita" direction="right">\r
        <Button variant="secondary" size="md">Right</Button>\r
      </Tooltip>\r
      <Tooltip text="À esquerda" direction="left">\r
        <Button variant="secondary" size="md">Left</Button>\r
      </Tooltip>\r
    </div>
}`,...l.parameters?.docs?.source},description:{story:`Comparativo das quatro direções lado a lado.\r
Passe o cursor sobre cada botão para ver o tooltip na direção correspondente.`,...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Texto — curto",
  decorators: [Story => <div style={{
    padding: "var(--s-spacing-x-large)"
  }}>\r
        <Story />\r
      </div>],
  args: {
    text: "Copiar",
    direction: "top",
    children: <ButtonIcon icon="content_copy" appearance="plain" variant="secondary" size="md" aria-label="Copiar" />
  }
}`,...p.parameters?.docs?.source},description:{story:`Texto curto — label de uma palavra.\r
Ideal para ações evidentes onde apenas o nome da ação é necessário.`,...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Texto — longo (multi-linha)",
  decorators: [Story => <div style={{
    padding: "var(--s-spacing-x-large)"
  }}>\r
        <Story />\r
      </div>],
  args: {
    text: "Esta ação excluirá permanentemente todos os registros selecionados e não poderá ser desfeita.",
    direction: "top",
    children: <ButtonIcon icon="delete" appearance="plain" variant="warning" size="md" aria-label="Excluir" />
  }
}`,...m.parameters?.docs?.source},description:{story:"Texto longo — quebra automaticamente em múltiplas linhas dentro do `max-width: 200px`.\r\nUse para contexto suplementar que requer mais de uma frase curta.",...m.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — toolbar de ícones",
  render: () => <div style={{
    display: "flex",
    gap: "var(--s-spacing-nano)",
    padding: "var(--s-spacing-xx-small)",
    background: "var(--s-color-fill-default)",
    borderRadius: "var(--s-border-radius-medium)",
    border: "var(--s-border-width-hairline) solid var(--s-color-border-default)"
  }}>\r
      <Tooltip text="Editar" direction="top">\r
        <ButtonIcon icon="edit" appearance="plain" variant="secondary" size="sm" aria-label="Editar" />\r
      </Tooltip>\r
      <Tooltip text="Duplicar" direction="top">\r
        <ButtonIcon icon="content_copy" appearance="plain" variant="secondary" size="sm" aria-label="Duplicar" />\r
      </Tooltip>\r
      <Tooltip text="Compartilhar" direction="top">\r
        <ButtonIcon icon="share" appearance="plain" variant="secondary" size="sm" aria-label="Compartilhar" />\r
      </Tooltip>\r
      <Tooltip text="Excluir permanentemente" direction="top">\r
        <ButtonIcon icon="delete" appearance="plain" variant="warning" size="sm" aria-label="Excluir" />\r
      </Tooltip>\r
    </div>
}`,...x.parameters?.docs?.source},description:{story:`Tooltip em botões somente-ícone — uso mais comum do componente.\r
Fornece o label acessível que o ícone por si só não comunica.`,...x.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — ações em tabela",
  render: () => <div style={{
    border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
    borderRadius: "var(--s-border-radius-medium)",
    overflow: "visible",
    width: "400px"
  }}>\r
      {["Ana Souza", "Carlos Lima", "Jane Doe"].map((name, i, arr) => <div key={name} style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "var(--s-spacing-x-small) var(--s-spacing-small)",
      borderBottom: i < arr.length - 1 ? "var(--s-border-width-hairline) solid var(--s-color-border-default)" : "none",
      background: "var(--s-color-fill-default)"
    }}>\r
          <small>{name}</small>\r
          <div style={{
        display: "flex",
        gap: "var(--s-spacing-nano)"
      }}>\r
            <Tooltip text="Editar" direction="top">\r
              <ButtonIcon icon="edit" appearance="plain" variant="secondary" size="sm" aria-label={\`Editar \${name}\`} />\r
            </Tooltip>\r
            <Tooltip text="Excluir" direction="top">\r
              <ButtonIcon icon="delete" appearance="plain" variant="warning" size="sm" aria-label={\`Excluir \${name}\`} />\r
            </Tooltip>\r
          </div>\r
        </div>)}\r
    </div>
}`,...u.parameters?.docs?.source},description:{story:'Tooltip em ações inline de tabela.\r\nDemonstra o uso com `direction="top"` em botões que se repetem por linha.',...u.parameters?.docs?.description}}};export{l as AllDirections,s as Bottom,x as IconButtonsToolbar,u as InlineTableActions,c as Left,m as LongText,n as Playground,d as Right,p as ShortText,i as Top,q as __namedExportsOrder,S as default};
