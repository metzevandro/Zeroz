import{j as a,r as g}from"./iframe-CxNvl9BI.js";/* empty css               */import{P as r}from"./Pagination-Be75J3lb.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-Bqm0CoJD.js";import"./Skeleton-C80QNm7w.js";const S={title:"Components/Pagination",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
O **Pagination** é um controle de navegação entre páginas ou etapas.

Três variantes de layout estão disponíveis:

| variant        | layout                                              |
|----------------|-----------------------------------------------------|
| \`noLabel\`     | Somente setas                                       |
| \`leftLabel\`   | Label à esquerda, setas agrupadas à direita         |
| \`centerLabel\` | Seta esquerda · label centralizado · seta direita   |

### Quando usar
- Tabelas ou listas com paginação server-side
- Fluxos passo a passo (wizards, carrosséis)
- Qualquer conteúdo dividido em múltiplas páginas

### Boas práticas
- Defina \`disabledLeft\` na primeira página e \`disabledRight\` na última
- Use \`skeleton\` enquanto o total de páginas ainda está carregando
- Forneça um \`label\` descritivo como \`"Página 3 de 10"\` ou \`"3 / 10"\`
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1557-5788"}},argTypes:{variant:{control:"select",options:["noLabel","leftLabel","centerLabel"],description:"Variante de layout. Define a posição do label em relação às setas.",table:{type:{summary:'"noLabel" | "leftLabel" | "centerLabel"'}}},label:{control:"text",description:'Texto do label (ex: `"Página 1 de 10"`). Ignorado quando `variant` é `"noLabel"`.',table:{type:{summary:"string"}}},disabledLeft:{control:"boolean",description:"Desativa a seta esquerda (anterior). Use na primeira página.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},disabledRight:{control:"boolean",description:"Desativa a seta direita (próxima). Use na última página.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},skeleton:{control:"boolean",description:"Exibe skeleton no lugar do label e desativa ambas as setas. Use enquanto o total de páginas está carregando.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},onClickLeft:{action:"onClickLeft",description:"Callback disparado ao clicar na seta esquerda.",table:{type:{summary:"() => void"}}},onClickRight:{action:"onClickRight",description:"Callback disparado ao clicar na seta direita.",table:{type:{summary:"() => void"}}}}},o={name:"Variante — noLabel",args:{variant:"noLabel",label:""}},i={name:"Variante — leftLabel",args:{variant:"leftLabel",label:"Página 1 de 10"}},l={name:"Variante — centerLabel",args:{variant:"centerLabel",label:"Página 1 de 10"}},d={name:"Comparativo — todas as variantes",render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-medium)"},children:[a.jsx(r,{variant:"noLabel",label:""}),a.jsx(r,{variant:"leftLabel",label:"Página 3 de 10"}),a.jsx(r,{variant:"centerLabel",label:"Página 3 de 10"})]})},c={name:"Estado — primeira página (esquerda desativada)",args:{variant:"centerLabel",label:"Página 1 de 10",disabledLeft:!0}},m={name:"Estado — última página (direita desativada)",args:{variant:"centerLabel",label:"Página 10 de 10",disabledRight:!0}},p={name:"Estado — skeleton (carregando)",args:{variant:"centerLabel",label:"Carregando",skeleton:!0}},b={name:"Controlado — com estado",render:()=>{const[e,n]=g.useState(1);return a.jsx(r,{variant:"centerLabel",label:`Página ${e} de 10`,disabledLeft:e===1,disabledRight:e===10,onClickLeft:()=>n(s=>s-1),onClickRight:()=>n(s=>s+1)})}},u={name:"Contexto real — footer de tabela",render:()=>{const[e,n]=g.useState(1),s=[{id:"#1042",name:"Notebook Pro X",status:"Enviado"},{id:"#1043",name:"Mouse Ergonômico",status:"Pendente"},{id:"#1044",name:"Teclado Mecânico",status:"Enviado"}];return a.jsxs("div",{style:{width:"480px",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",overflow:"hidden"},children:[s.map(({id:t,name:x,status:L},f)=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"var(--s-spacing-x-small) var(--s-spacing-small)",borderBottom:"var(--s-border-width-hairline) solid var(--s-color-border-default)"},children:[a.jsxs("small",{children:[t," — ",x]}),a.jsx("small",{children:L})]},t)),a.jsx("div",{style:{background:"var(--s-color-fill-default)"},children:a.jsx(r,{variant:"leftLabel",label:`Página ${e} de 5`,disabledLeft:e===1,disabledRight:e===5,onClickLeft:()=>n(t=>t-1),onClickRight:()=>n(t=>t+1)})})]})}},R=["NoLabel","LeftLabel","CenterLabel","AllVariants","FirstPage","LastPage","SkeletonState","Controlled","TableFooter"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Variante — noLabel",
  args: {
    variant: "noLabel",
    label: ""
  }
}`,...o.parameters?.docs?.source},description:{story:`Somente setas, sem label.\r
Use em espaços compactos onde o contexto de página já é visível na UI.`,...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Variante — leftLabel",
  args: {
    variant: "leftLabel",
    label: "Página 1 de 10"
  }
}`,...i.parameters?.docs?.source},description:{story:`Label à esquerda com as setas agrupadas à direita.\r
Indicado para footers de tabela onde o texto de paginação precisa\r
estar alinhado à margem esquerda do conteúdo.`,...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Variante — centerLabel",
  args: {
    variant: "centerLabel",
    label: "Página 1 de 10"
  }
}`,...l.parameters?.docs?.source},description:{story:`Seta esquerda, label centralizado, seta direita.\r
Variante mais comum — indicada para a maioria dos contextos.`,...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Comparativo — todas as variantes",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-medium)"
  }}>\r
      <Pagination variant="noLabel" label="" />\r
      <Pagination variant="leftLabel" label="Página 3 de 10" />\r
      <Pagination variant="centerLabel" label="Página 3 de 10" />\r
    </div>
}`,...d.parameters?.docs?.source},description:{story:`Comparativo das três variantes de layout com o mesmo label.\r
Use para validar tokens e espaçamentos após alterações de tema.`,...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Estado — primeira página (esquerda desativada)",
  args: {
    variant: "centerLabel",
    label: "Página 1 de 10",
    disabledLeft: true
  }
}`,...c.parameters?.docs?.source},description:{story:"Primeira página — seta esquerda desativada via `disabledLeft`.\r\nO usuário não pode navegar para uma página anterior à primeira.",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Estado — última página (direita desativada)",
  args: {
    variant: "centerLabel",
    label: "Página 10 de 10",
    disabledRight: true
  }
}`,...m.parameters?.docs?.source},description:{story:"Última página — seta direita desativada via `disabledRight`.\r\nO usuário não pode navegar para uma página além da última.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Estado — skeleton (carregando)",
  args: {
    variant: "centerLabel",
    label: "Carregando",
    skeleton: true
  }
}`,...p.parameters?.docs?.source},description:{story:`Skeleton — ambas as setas desativadas e label substituído por placeholder.\r
Use enquanto o total de páginas ainda está sendo carregado da API.`,...p.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Controlado — com estado",
  render: () => {
    const total = 10;
    const [page, setPage] = useState(1);
    return <Pagination variant="centerLabel" label={\`Página \${page} de \${total}\`} disabledLeft={page === 1} disabledRight={page === total} onClickLeft={() => setPage(p => p - 1)} onClickRight={() => setPage(p => p + 1)} />;
  }
}`,...b.parameters?.docs?.source},description:{story:"Exemplo totalmente interativo com estado externo.\r\nDemonstra o padrão correto: `disabledLeft` na primeira página,\r\n`disabledRight` na última, e label atualizado a cada navegação.",...b.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — footer de tabela",
  render: () => {
    const total = 5;
    const [page, setPage] = useState(1);
    const rows = [{
      id: "#1042",
      name: "Notebook Pro X",
      status: "Enviado"
    }, {
      id: "#1043",
      name: "Mouse Ergonômico",
      status: "Pendente"
    }, {
      id: "#1044",
      name: "Teclado Mecânico",
      status: "Enviado"
    }];
    return <div style={{
      width: "480px",
      border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
      borderRadius: "var(--s-border-radius-medium)",
      overflow: "hidden"
    }}>\r
        {rows.map(({
        id,
        name,
        status
      }, i) => <div key={id} style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "var(--s-spacing-x-small) var(--s-spacing-small)",
        borderBottom: "var(--s-border-width-hairline) solid var(--s-color-border-default)"
      }}>\r
            <small>\r
              {id} — {name}\r
            </small>\r
            <small>{status}</small>\r
          </div>)}\r
        <div style={{
        background: "var(--s-color-fill-default)"
      }}>\r
          <Pagination variant="leftLabel" label={\`Página \${page} de \${total}\`} disabledLeft={page === 1} disabledRight={page === total} onClickLeft={() => setPage(p => p - 1)} onClickRight={() => setPage(p => p + 1)} />\r
        </div>\r
      </div>;
  }
}`,...u.parameters?.docs?.source},description:{story:"Paginação no footer de uma tabela com variante `leftLabel`.\r\nDemonstra o padrão mais comum em dashboards com listagens server-side.",...u.parameters?.docs?.description}}};export{d as AllVariants,l as CenterLabel,b as Controlled,c as FirstPage,m as LastPage,i as LeftLabel,o as NoLabel,p as SkeletonState,u as TableFooter,R as __namedExportsOrder,S as default};
