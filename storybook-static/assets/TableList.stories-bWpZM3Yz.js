import{r as f,j as a,R as S}from"./iframe-CxNvl9BI.js";import{B as s}from"./Badge-KKabPQMN.js";/* empty css               */import{T as l}from"./Tooltip-C4PsR8lr.js";import{B as c}from"./ButtonIcon-BvrW2_xY.js";import{P as A}from"./Pagination-Be75J3lb.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-Bqm0CoJD.js";import"./Skeleton-C80QNm7w.js";function j(){const e=f.useRef(null),[t,n]=f.useState(!1);return f.useEffect(()=>{const o=e.current;if(!o)return;const r=()=>n(o.scrollWidth>o.clientWidth);r();const i=new ResizeObserver(r);return i.observe(o),()=>i.disconnect()},[]),{containerRef:e,isOverflowed:t}}function w(e,t){return e.map((n,o)=>t.map(r=>r[o]))}function D({columns:e}){return a.jsx("div",{className:"table-container",children:e.map((t,n)=>a.jsx("div",{className:"th",children:t},n))})}function C({columns:e,size:t}){return a.jsx("div",{className:"table-container",children:e.map((n,o)=>a.jsx("div",{className:"table-column",children:n.map((r,i)=>a.jsx("div",{className:`td ${t} border`,children:r},i))},o))})}const y=({columns:e,data:t,size:n})=>{const{containerRef:o,isOverflowed:r}=j(),i=w(e,t);return a.jsx("div",{className:`table-list-root ${r?"overflow-ativo":""}`,ref:o,children:a.jsxs("div",{className:"table",children:[a.jsx(D,{columns:e}),a.jsx(C,{columns:i,size:n})]})})},U={title:"Components/TableList",component:y,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
O **TableList** renderiza uma tabela de dados orientada a colunas com cabeçalhos,
densidade de linha configurável e detecção automática de scroll horizontal.

A tabela é internamente transposta — os dados são fornecidos no formato
linha × coluna, mas renderizados coluna × linha para fixar a primeira coluna
com \`position: sticky\`.

> A prop **\`data\`** é uma matriz 2D de \`React.ReactNode\` —
> cada célula aceita qualquer conteúdo React: texto, Badge, ButtonIcon, Link, etc.

### Densidade
| size   | padding da célula      | uso recomendado                      |
|--------|------------------------|--------------------------------------|
| \`"sm"\` | xx-small / small       | Dashboards densos, muitas linhas     |
| \`"md"\` | small (todos os lados) | Uso geral, leitura confortável       |

### Scroll horizontal
Quando o conteúdo da tabela excede a largura do container, a classe
\`overflow-ativo\` é aplicada automaticamente via \`ResizeObserver\` —
a primeira coluna fica com \`box-shadow\` lateral para indicar o scroll.

### Quando usar
- Exibir registros estruturados: usuários, pedidos, produtos, logs
- Qualquer dado tabular que se beneficia de alinhamento consistente por coluna

### Boas práticas
- Garanta que \`columns.length\` seja igual ao comprimento de cada linha em \`data\`
- Use \`size="sm"\` para dashboards com muitas linhas; \`size="md"\` para leitura geral
- Envolva conteúdo de célula complexo em componentes nomeados — evite JSX anônimo inline
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10082"}},argTypes:{size:{control:"radio",options:["sm","md"],description:"Densidade das células. `sm` = compacto. `md` = confortável.",table:{type:{summary:'"sm" | "md"'}}},columns:{control:"object",description:"Labels dos cabeçalhos das colunas.",table:{type:{summary:"string[]"}}},data:{control:!1,description:"Dados da tabela como matriz 2D de `React.ReactNode`. Cada array interno representa uma linha.",table:{type:{summary:"React.ReactNode[][]"}}}}},E=["Nome","Cargo","Departamento","Status"],z=[["Ana Souza","Engenheira","Produto","Ativo"],["Carlos Lima","Designer","Design","Ativo"],["Jane Doe","Gerente de Produto","Produto","Férias"],["Pedro Alves","Engenheiro","Plataforma","Ativo"],["Maria Clara","Analista de Dados","Analytics","Ativo"]],d={name:"Tamanho — md (padrão)",args:{columns:E,data:z,size:"md"}},m={name:"Tamanho — sm (compacto)",args:{columns:E,data:z,size:"sm"}},P=[["Ana Souza","Engenheira",a.jsx(s,{label:"Ativo",type:"light",variant:"success"})],["Carlos Lima","Designer",a.jsx(s,{label:"Férias",type:"light",variant:"warning"})],["Jane Doe","Gerente de Produto",a.jsx(s,{label:"Inativo",type:"light",variant:"default"})],["Pedro Alves","Engenheiro",a.jsx(s,{label:"Ativo",type:"light",variant:"success"})]],u={name:"Células com Badge",args:{columns:["Nome","Cargo","Status"],data:P,size:"sm"}},R=[["Ana Souza","Engenheira",a.jsx(s,{label:"Ativo",type:"light",variant:"success"}),a.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-nano)"},children:[a.jsx(l,{text:"Editar",direction:"top",children:a.jsx(c,{icon:"edit",appearance:"plain",variant:"secondary",size:"sm","aria-label":"Editar Ana Souza"})}),a.jsx(l,{text:"Excluir",direction:"top",children:a.jsx(c,{icon:"delete",appearance:"plain",variant:"warning",size:"sm","aria-label":"Excluir Ana Souza"})})]})],["Carlos Lima","Designer",a.jsx(s,{label:"Férias",type:"light",variant:"warning"}),a.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-nano)"},children:[a.jsx(l,{text:"Editar",direction:"top",children:a.jsx(c,{icon:"edit",appearance:"plain",variant:"secondary",size:"sm","aria-label":"Editar Carlos Lima"})}),a.jsx(l,{text:"Excluir",direction:"top",children:a.jsx(c,{icon:"delete",appearance:"plain",variant:"warning",size:"sm","aria-label":"Excluir Carlos Lima"})})]})],["Jane Doe","Gerente de Produto",a.jsx(s,{label:"Inativo",type:"light",variant:"default"}),a.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-nano)"},children:[a.jsx(l,{text:"Editar",direction:"top",children:a.jsx(c,{icon:"edit",appearance:"plain",variant:"secondary",size:"sm","aria-label":"Editar Jane Doe"})}),a.jsx(l,{text:"Excluir",direction:"top",children:a.jsx(c,{icon:"delete",appearance:"plain",variant:"warning",size:"sm","aria-label":"Excluir Jane Doe"})})]})]],p={name:"Células com ações",args:{columns:["Nome","Cargo","Status","Ações"],data:R,size:"sm"}},L=["Nome","Cargo","Departamento","Localização","Status","Admissão","E-mail"],B=[["Ana Souza","Engenheira","Produto","São Paulo, SP","Ativo","Jan 2022","ana@exemplo.com"],["Carlos Lima","Designer","Design","Rio de Janeiro, RJ","Ativo","Mar 2021","carlos@exemplo.com"],["Jane Doe","Gerente","Produto","Belo Horizonte, MG","Férias","Jun 2020","jane@exemplo.com"]],g={name:"Scroll horizontal (overflow)",decorators:[e=>a.jsx("div",{style:{width:"480px",overflow:"hidden"},children:a.jsx(e,{})})],args:{columns:L,data:B,size:"md"}},x={name:"Edge case — coluna única",args:{columns:["Nome"],data:[["Ana Souza"],["Carlos Lima"],["Jane Doe"]],size:"md"}},v={name:"Edge case — linha única",args:{columns:E,data:[["Ana Souza","Engenheira","Produto","Ativo"]],size:"md"}},h={name:"Contexto real — tabela de usuários com paginação",render:()=>{const[e,t]=S.useState(1),n=[["Ana Souza","Engenheira",a.jsx(s,{label:"Ativo",type:"light",variant:"success"})],["Carlos Lima","Designer",a.jsx(s,{label:"Ativo",type:"light",variant:"success"})],["Jane Doe","Gerente de Produto",a.jsx(s,{label:"Férias",type:"light",variant:"warning"})],["Maria Silva","QA",a.jsx(s,{label:"Ativo",type:"light",variant:"success"})],["Pedro Santos","Dev Backend",a.jsx(s,{label:"Ativo",type:"light",variant:"success"})],["Lucas Oliveira","UX Designer",a.jsx(s,{label:"Férias",type:"light",variant:"warning"})]],o=3,r=Math.ceil(n.length/o),i=n.slice((e-1)*o,e*o);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[a.jsx(y,{columns:["Nome","Cargo","Status"],data:i,size:"sm"}),a.jsx(A,{variant:"leftLabel",label:`Página ${e} de ${r}`,disabledLeft:e===1,disabledRight:e===r,onClickLeft:()=>t(b=>Math.max(1,b-1)),onClickRight:()=>t(b=>Math.min(r,b+1))})]})}},I=["SizeMd","SizeSm","WithBadges","WithActions","HorizontalScroll","SingleColumn","SingleRow","UserTable"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Tamanho — md (padrão)",
  args: {
    columns: usuariosColumns,
    data: usuariosData,
    size: "md"
  }
}`,...d.parameters?.docs?.source},description:{story:`Densidade padrão — padding confortável para leitura geral.\r
Use na maioria dos contextos.`,...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Tamanho — sm (compacto)",
  args: {
    columns: usuariosColumns,
    data: usuariosData,
    size: "sm"
  }
}`,...m.parameters?.docs?.source},description:{story:`Densidade compacta — ideal para dashboards com muitas linhas\r
e espaço vertical limitado.`,...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Células com Badge",
  args: {
    columns: ["Nome", "Cargo", "Status"],
    data: badgeRows,
    size: "sm"
  }
}`,...u.parameters?.docs?.source},description:{story:"Células com Badge — cada célula de status renderiza um Badge.\r\nDemonstra que `data` aceita qualquer `ReactNode` por célula.",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Células com ações",
  args: {
    columns: ["Nome", "Cargo", "Status", "Ações"],
    data: actionRows,
    size: "sm"
  }
}`,...p.parameters?.docs?.source},description:{story:`Células com ações — última coluna contém ButtonIcons com Tooltip.\r
Padrão mais comum em tabelas administrativas.`,...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Scroll horizontal (overflow)",
  decorators: [Story => <div style={{
    width: "480px",
    overflow: "hidden"
  }}>\r
        <Story />\r
      </div>],
  args: {
    columns: wideColumns,
    data: wideData,
    size: "md"
  }
}`,...g.parameters?.docs?.source},description:{story:"Scroll horizontal — container estreito força overflow.\r\nA primeira coluna fica fixada via `position: sticky` com sombra lateral\r\nquando `overflow-ativo` é aplicado pelo `useOverflowDetection`.",...g.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Edge case — coluna única",
  args: {
    columns: ["Nome"],
    data: [["Ana Souza"], ["Carlos Lima"], ["Jane Doe"]],
    size: "md"
  }
}`,...x.parameters?.docs?.source},description:{story:`Coluna única — edge case que valida o layout com apenas uma coluna.\r
A coluna é fixada à esquerda via sticky sem sombra (sem overflow).`,...x.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Edge case — linha única",
  args: {
    columns: usuariosColumns,
    data: [["Ana Souza", "Engenheira", "Produto", "Ativo"]],
    size: "md"
  }
}`,...v.parameters?.docs?.source},description:{story:"Linha única — valida que a borda superior da primeira linha aparece corretamente.",...v.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — tabela de usuários com paginação",
  render: () => {
    const [page, setPage] = React.useState(1);
    const rows: React.ReactNode[][] = [["Ana Souza", "Engenheira", <Badge label="Ativo" type="light" variant="success" />], ["Carlos Lima", "Designer", <Badge label="Ativo" type="light" variant="success" />], ["Jane Doe", "Gerente de Produto", <Badge label="Férias" type="light" variant="warning" />], ["Maria Silva", "QA", <Badge label="Ativo" type="light" variant="success" />], ["Pedro Santos", "Dev Backend", <Badge label="Ativo" type="light" variant="success" />], ["Lucas Oliveira", "UX Designer", <Badge label="Férias" type="light" variant="warning" />]];
    const itemsPerPage = 3;
    const total = Math.ceil(rows.length / itemsPerPage);
    const paginatedRows = rows.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 0
    }}>\r
        <TableList columns={["Nome", "Cargo", "Status"]} data={paginatedRows} size="sm" />\r
\r
        <Pagination variant="leftLabel" label={\`Página \${page} de \${total}\`} disabledLeft={page === 1} disabledRight={page === total} onClickLeft={() => setPage(p => Math.max(1, p - 1))} onClickRight={() => setPage(p => Math.min(total, p + 1))} />\r
      </div>;
  }
}`,...h.parameters?.docs?.source},description:{story:`Tabela de usuários com Badge de status e paginação no rodapé.\r
Demonstra o padrão mais completo de uso em dashboards administrativos.`,...h.parameters?.docs?.description}}};export{g as HorizontalScroll,x as SingleColumn,v as SingleRow,d as SizeMd,m as SizeSm,h as UserTable,p as WithActions,u as WithBadges,I as __namedExportsOrder,U as default};
