import{j as e}from"./iframe-Cuzq1CpA.js";/* empty css               */import{T as r}from"./Tooltip-BLSO7z3N.js";import{B as a}from"./Button-BQCy7vfT.js";import{B as t}from"./ButtonIcon-g9GE-hSP.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-C2kFcyns.js";import"./Loading-CnlAraZ4.js";import"./Skeleton-BVkqHP_m.js";var x,g,_,h,y,b,T,f,j,B,z,S,I,q,A,D,E,w,C,L,R,P,H,U,k,O,$,F,G,J,N,Z,M,Q,V,K,W,X,Y,ee,oe,re,ae,te,ie,ne,se,de,le,ce;const fe={title:"Components/Tooltip",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10083"}},argTypes:{text:{control:"text",description:"Texto exibido dentro da bolha do tooltip.",table:{type:{summary:"string"}}},direction:{control:"select",options:["top","bottom","right","left"],description:"Direção em que o tooltip aparece em relação ao gatilho.",table:{type:{summary:'"top" | "bottom" | "right" | "left"'}}},children:{control:!1,description:"Elemento gatilho que ativa o tooltip ao receber hover.",table:{type:{summary:"React.ReactNode"}}}}},i={name:"Playground",decorators:[o=>e.jsx("div",{style:{padding:"var(--s-spacing-x-large)"},children:e.jsx(o,{})})],args:{text:"Texto do tooltip",direction:"top",children:e.jsx(a,{variant:"secondary",size:"md",children:"Passe o cursor"})}},n={name:"Direção — top (padrão)",decorators:[o=>e.jsx("div",{style:{padding:"var(--s-spacing-x-large)"},children:e.jsx(o,{})})],args:{text:"Tooltip acima",direction:"top",children:e.jsx(a,{variant:"secondary",size:"md",children:"Hover"})}},s={name:"Direção — bottom",decorators:[o=>e.jsx("div",{style:{padding:"var(--s-spacing-x-large)"},children:e.jsx(o,{})})],args:{text:"Tooltip abaixo",direction:"bottom",children:e.jsx(a,{variant:"secondary",size:"md",children:"Hover"})}},d={name:"Direção — right",decorators:[o=>e.jsx("div",{style:{padding:"var(--s-spacing-x-large)"},children:e.jsx(o,{})})],args:{text:"Tooltip à direita",direction:"right",children:e.jsx(a,{variant:"secondary",size:"md",children:"Hover"})}},l={name:"Direção — left",decorators:[o=>e.jsx("div",{style:{padding:"var(--s-spacing-x-large)"},children:e.jsx(o,{})})],args:{text:"Tooltip à esquerda",direction:"left",children:e.jsx(a,{variant:"secondary",size:"md",children:"Hover"})}},c={name:"Comparativo — todas as direções",render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-x-large)",alignItems:"center",padding:"var(--s-spacing-x-large)"},children:[e.jsx(r,{text:"Acima",direction:"top",children:e.jsx(a,{variant:"secondary",size:"md",children:"Top"})}),e.jsx(r,{text:"Abaixo",direction:"bottom",children:e.jsx(a,{variant:"secondary",size:"md",children:"Bottom"})}),e.jsx(r,{text:"À direita",direction:"right",children:e.jsx(a,{variant:"secondary",size:"md",children:"Right"})}),e.jsx(r,{text:"À esquerda",direction:"left",children:e.jsx(a,{variant:"secondary",size:"md",children:"Left"})})]})},p={name:"Texto — curto",decorators:[o=>e.jsx("div",{style:{padding:"var(--s-spacing-x-large)"},children:e.jsx(o,{})})],args:{text:"Copiar",direction:"top",children:e.jsx(t,{icon:"content_copy",appearance:"plain",variant:"secondary",size:"md","aria-label":"Copiar"})}},m={name:"Texto — longo (multi-linha)",decorators:[o=>e.jsx("div",{style:{padding:"var(--s-spacing-x-large)"},children:e.jsx(o,{})})],args:{text:"Esta ação excluirá permanentemente todos os registros selecionados e não poderá ser desfeita.",direction:"top",children:e.jsx(t,{icon:"delete",appearance:"plain",variant:"warning",size:"md","aria-label":"Excluir"})}},v={name:"Contexto real — toolbar de ícones",render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-nano)",padding:"var(--s-spacing-xx-small)",background:"var(--s-color-fill-default)",borderRadius:"var(--s-border-radius-medium)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)"},children:[e.jsx(r,{text:"Editar",direction:"top",children:e.jsx(t,{icon:"edit",appearance:"plain",variant:"secondary",size:"sm","aria-label":"Editar"})}),e.jsx(r,{text:"Duplicar",direction:"top",children:e.jsx(t,{icon:"content_copy",appearance:"plain",variant:"secondary",size:"sm","aria-label":"Duplicar"})}),e.jsx(r,{text:"Compartilhar",direction:"top",children:e.jsx(t,{icon:"share",appearance:"plain",variant:"secondary",size:"sm","aria-label":"Compartilhar"})}),e.jsx(r,{text:"Excluir permanentemente",direction:"top",children:e.jsx(t,{icon:"delete",appearance:"plain",variant:"warning",size:"sm","aria-label":"Excluir"})})]})},u={name:"Contexto real — ações em tabela",render:()=>e.jsx("div",{style:{border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",overflow:"visible",width:"400px"},children:["Ana Souza","Carlos Lima","Jane Doe"].map((o,pe,me)=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--s-spacing-x-small) var(--s-spacing-small)",borderBottom:pe<me.length-1?"var(--s-border-width-hairline) solid var(--s-color-border-default)":"none",background:"var(--s-color-fill-default)"},children:[e.jsx("small",{children:o}),e.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-nano)"},children:[e.jsx(r,{text:"Editar",direction:"top",children:e.jsx(t,{icon:"edit",appearance:"plain",variant:"secondary",size:"sm","aria-label":`Editar ${o}`})}),e.jsx(r,{text:"Excluir",direction:"top",children:e.jsx(t,{icon:"delete",appearance:"plain",variant:"warning",size:"sm","aria-label":`Excluir ${o}`})})]})]},o))})};i.parameters={...i.parameters,docs:{...(x=i.parameters)===null||x===void 0?void 0:x.docs,source:{originalSource:`{
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
}`,...(_=i.parameters)===null||_===void 0||(g=_.docs)===null||g===void 0?void 0:g.source},description:{story:`Story interativa — passe o cursor sobre o botão para ver o tooltip.\r
Use os Controls para explorar direções e textos diferentes.`,...(y=i.parameters)===null||y===void 0||(h=y.docs)===null||h===void 0?void 0:h.description}}};n.parameters={...n.parameters,docs:{...(b=n.parameters)===null||b===void 0?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=n.parameters)===null||f===void 0||(T=f.docs)===null||T===void 0?void 0:T.source},description:{story:`Tooltip acima do gatilho — direção padrão recomendada.\r
A seta aponta para baixo em direção ao elemento.`,...(B=n.parameters)===null||B===void 0||(j=B.docs)===null||j===void 0?void 0:j.description}}};s.parameters={...s.parameters,docs:{...(z=s.parameters)===null||z===void 0?void 0:z.docs,source:{originalSource:`{
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
}`,...(I=s.parameters)===null||I===void 0||(S=I.docs)===null||S===void 0?void 0:S.source},description:{story:`Tooltip abaixo do gatilho.\r
Use quando não há espaço acima do elemento ou quando o tooltip\r
complementa conteúdo que aparece abaixo.`,...(A=s.parameters)===null||A===void 0||(q=A.docs)===null||q===void 0?void 0:q.description}}};d.parameters={...d.parameters,docs:{...(D=d.parameters)===null||D===void 0?void 0:D.docs,source:{originalSource:`{
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
}`,...(w=d.parameters)===null||w===void 0||(E=w.docs)===null||E===void 0?void 0:E.source},description:{story:`Tooltip à direita do gatilho.\r
Use em listas, menus ou elementos alinhados à esquerda.`,...(L=d.parameters)===null||L===void 0||(C=L.docs)===null||C===void 0?void 0:C.description}}};l.parameters={...l.parameters,docs:{...(R=l.parameters)===null||R===void 0?void 0:R.docs,source:{originalSource:`{
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
}`,...(H=l.parameters)===null||H===void 0||(P=H.docs)===null||P===void 0?void 0:P.source},description:{story:`Tooltip à esquerda do gatilho.\r
Use em elementos alinhados à direita ou próximos à borda direita da tela.`,...(k=l.parameters)===null||k===void 0||(U=k.docs)===null||U===void 0?void 0:U.description}}};c.parameters={...c.parameters,docs:{...(O=c.parameters)===null||O===void 0?void 0:O.docs,source:{originalSource:`{
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
}`,...(F=c.parameters)===null||F===void 0||($=F.docs)===null||$===void 0?void 0:$.source},description:{story:`Comparativo das quatro direções lado a lado.\r
Passe o cursor sobre cada botão para ver o tooltip na direção correspondente.`,...(J=c.parameters)===null||J===void 0||(G=J.docs)===null||G===void 0?void 0:G.description}}};p.parameters={...p.parameters,docs:{...(N=p.parameters)===null||N===void 0?void 0:N.docs,source:{originalSource:`{
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
}`,...(M=p.parameters)===null||M===void 0||(Z=M.docs)===null||Z===void 0?void 0:Z.source},description:{story:`Texto curto — label de uma palavra.\r
Ideal para ações evidentes onde apenas o nome da ação é necessário.`,...(V=p.parameters)===null||V===void 0||(Q=V.docs)===null||Q===void 0?void 0:Q.description}}};m.parameters={...m.parameters,docs:{...(K=m.parameters)===null||K===void 0?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=m.parameters)===null||X===void 0||(W=X.docs)===null||W===void 0?void 0:W.source},description:{story:"Texto longo — quebra automaticamente em múltiplas linhas dentro do `max-width: 200px`.\r\nUse para contexto suplementar que requer mais de uma frase curta.",...(ee=m.parameters)===null||ee===void 0||(Y=ee.docs)===null||Y===void 0?void 0:Y.description}}};v.parameters={...v.parameters,docs:{...(oe=v.parameters)===null||oe===void 0?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ae=v.parameters)===null||ae===void 0||(re=ae.docs)===null||re===void 0?void 0:re.source},description:{story:`Tooltip em botões somente-ícone — uso mais comum do componente.\r
Fornece o label acessível que o ícone por si só não comunica.`,...(ie=v.parameters)===null||ie===void 0||(te=ie.docs)===null||te===void 0?void 0:te.description}}};u.parameters={...u.parameters,docs:{...(ne=u.parameters)===null||ne===void 0?void 0:ne.docs,source:{originalSource:`{
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
}`,...(de=u.parameters)===null||de===void 0||(se=de.docs)===null||se===void 0?void 0:se.source},description:{story:'Tooltip em ações inline de tabela.\r\nDemonstra o uso com `direction="top"` em botões que se repetem por linha.',...(ce=u.parameters)===null||ce===void 0||(le=ce.docs)===null||le===void 0?void 0:le.description}}};const je=["Playground","Top","Bottom","Right","Left","AllDirections","ShortText","LongText","IconButtonsToolbar","InlineTableActions"];export{c as AllDirections,s as Bottom,v as IconButtonsToolbar,u as InlineTableActions,l as Left,m as LongText,i as Playground,d as Right,p as ShortText,n as Top,je as __namedExportsOrder,fe as default};
