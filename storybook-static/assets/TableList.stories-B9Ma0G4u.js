import{r as S,j as a,R as da}from"./iframe-DFdk80Qn.js";import{B as s}from"./Badge-ov7pbtC0.js";/* empty css               */import{T as l}from"./Tooltip-pkoS-bCp.js";import{B as d}from"./ButtonIcon-B5f9TZ0r.js";import{P as ca}from"./Pagination-8IWugiQG.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-C_kNoyVv.js";import"./Skeleton-bEV42asx.js";function ma(){const e=S.useRef(null),[r,t]=S.useState(!1);return S.useEffect(()=>{const o=e.current;if(!o)return;const i=()=>t(o.scrollWidth>o.clientWidth);i();const n=new ResizeObserver(i);return n.observe(o),()=>n.disconnect()},[]),{containerRef:e,isOverflowed:r}}function ua(e,r){return e.map((t,o)=>r.map(i=>i[o]))}function pa({columns:e}){return a.jsx("div",{className:"table-container",children:e.map((r,t)=>a.jsx("div",{className:"th",children:r},t))})}function va({columns:e,size:r}){return a.jsx("div",{className:"table-container",children:e.map((t,o)=>a.jsx("div",{className:"table-column",children:t.map((i,n)=>a.jsx("div",{className:`td ${r} border`,children:i},n))},o))})}const na=({columns:e,data:r,size:t})=>{const{containerRef:o,isOverflowed:i}=ma(),n=ua(e,r);return a.jsx("div",{className:`table-list-root ${i?"overflow-ativo":""}`,ref:o,children:a.jsxs("div",{className:"table",children:[a.jsx(pa,{columns:e}),a.jsx(va,{columns:n,size:t})]})})};var b,z,f,y,w,A,C,j,D,R,P,E,B,L,N,T,M,W,J,q,O,U,k,G,H,F,I,$,Q,X,Z,V,K,Y,aa,ea,oa,sa,ra,ia;const Da={title:"Components/TableList",component:na,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
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
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10082"}},argTypes:{size:{control:"radio",options:["sm","md"],description:"Densidade das células. `sm` = compacto. `md` = confortável.",table:{type:{summary:'"sm" | "md"'}}},columns:{control:"object",description:"Labels dos cabeçalhos das colunas.",table:{type:{summary:"string[]"}}},data:{control:!1,description:"Dados da tabela como matriz 2D de `React.ReactNode`. Cada array interno representa uma linha.",table:{type:{summary:"React.ReactNode[][]"}}}}},ta=["Nome","Cargo","Departamento","Status"],la=[["Ana Souza","Engenheira","Produto","Ativo"],["Carlos Lima","Designer","Design","Ativo"],["Jane Doe","Gerente de Produto","Produto","Férias"],["Pedro Alves","Engenheiro","Plataforma","Ativo"],["Maria Clara","Analista de Dados","Analytics","Ativo"]],c={name:"Tamanho — md (padrão)",args:{columns:ta,data:la,size:"md"}},m={name:"Tamanho — sm (compacto)",args:{columns:ta,data:la,size:"sm"}},ga=[["Ana Souza","Engenheira",a.jsx(s,{label:"Ativo",type:"light",variant:"success"})],["Carlos Lima","Designer",a.jsx(s,{label:"Férias",type:"light",variant:"warning"})],["Jane Doe","Gerente de Produto",a.jsx(s,{label:"Inativo",type:"light",variant:"default"})],["Pedro Alves","Engenheiro",a.jsx(s,{label:"Ativo",type:"light",variant:"success"})]],u={name:"Células com Badge",args:{columns:["Nome","Cargo","Status"],data:ga,size:"sm"}},ha=[["Ana Souza","Engenheira",a.jsx(s,{label:"Ativo",type:"light",variant:"success"}),a.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-nano)"},children:[a.jsx(l,{text:"Editar",direction:"top",children:a.jsx(d,{icon:"edit",appearance:"plain",variant:"secondary",size:"sm","aria-label":"Editar Ana Souza"})}),a.jsx(l,{text:"Excluir",direction:"top",children:a.jsx(d,{icon:"delete",appearance:"plain",variant:"warning",size:"sm","aria-label":"Excluir Ana Souza"})})]})],["Carlos Lima","Designer",a.jsx(s,{label:"Férias",type:"light",variant:"warning"}),a.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-nano)"},children:[a.jsx(l,{text:"Editar",direction:"top",children:a.jsx(d,{icon:"edit",appearance:"plain",variant:"secondary",size:"sm","aria-label":"Editar Carlos Lima"})}),a.jsx(l,{text:"Excluir",direction:"top",children:a.jsx(d,{icon:"delete",appearance:"plain",variant:"warning",size:"sm","aria-label":"Excluir Carlos Lima"})})]})],["Jane Doe","Gerente de Produto",a.jsx(s,{label:"Inativo",type:"light",variant:"default"}),a.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-nano)"},children:[a.jsx(l,{text:"Editar",direction:"top",children:a.jsx(d,{icon:"edit",appearance:"plain",variant:"secondary",size:"sm","aria-label":"Editar Jane Doe"})}),a.jsx(l,{text:"Excluir",direction:"top",children:a.jsx(d,{icon:"delete",appearance:"plain",variant:"warning",size:"sm","aria-label":"Excluir Jane Doe"})})]})]],p={name:"Células com ações",args:{columns:["Nome","Cargo","Status","Ações"],data:ha,size:"sm"}},_a=["Nome","Cargo","Departamento","Localização","Status","Admissão","E-mail"],xa=[["Ana Souza","Engenheira","Produto","São Paulo, SP","Ativo","Jan 2022","ana@exemplo.com"],["Carlos Lima","Designer","Design","Rio de Janeiro, RJ","Ativo","Mar 2021","carlos@exemplo.com"],["Jane Doe","Gerente","Produto","Belo Horizonte, MG","Férias","Jun 2020","jane@exemplo.com"]],v={name:"Scroll horizontal (overflow)",decorators:[e=>a.jsx("div",{style:{width:"480px",overflow:"hidden"},children:a.jsx(e,{})})],args:{columns:_a,data:xa,size:"md"}},g={name:"Edge case — coluna única",args:{columns:["Nome"],data:[["Ana Souza"],["Carlos Lima"],["Jane Doe"]],size:"md"}},h={name:"Edge case — linha única",args:{columns:ta,data:[["Ana Souza","Engenheira","Produto","Ativo"]],size:"md"}},_={name:"Contexto real — tabela de usuários com paginação",render:()=>{const[e,r]=da.useState(1),t=[["Ana Souza","Engenheira",a.jsx(s,{label:"Ativo",type:"light",variant:"success"})],["Carlos Lima","Designer",a.jsx(s,{label:"Ativo",type:"light",variant:"success"})],["Jane Doe","Gerente de Produto",a.jsx(s,{label:"Férias",type:"light",variant:"warning"})],["Maria Silva","QA",a.jsx(s,{label:"Ativo",type:"light",variant:"success"})],["Pedro Santos","Dev Backend",a.jsx(s,{label:"Ativo",type:"light",variant:"success"})],["Lucas Oliveira","UX Designer",a.jsx(s,{label:"Férias",type:"light",variant:"warning"})]],o=3,i=Math.ceil(t.length/o),n=t.slice((e-1)*o,e*o);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[a.jsx(na,{columns:["Nome","Cargo","Status"],data:n,size:"sm"}),a.jsx(ca,{variant:"leftLabel",label:`Página ${e} de ${i}`,disabledLeft:e===1,disabledRight:e===i,onClickLeft:()=>r(x=>Math.max(1,x-1)),onClickRight:()=>r(x=>Math.min(i,x+1))})]})}};c.parameters={...c.parameters,docs:{...(b=c.parameters)===null||b===void 0?void 0:b.docs,source:{originalSource:`{
  name: "Tamanho — md (padrão)",
  args: {
    columns: usuariosColumns,
    data: usuariosData,
    size: "md"
  }
}`,...(f=c.parameters)===null||f===void 0||(z=f.docs)===null||z===void 0?void 0:z.source},description:{story:`Densidade padrão — padding confortável para leitura geral.\r
Use na maioria dos contextos.`,...(w=c.parameters)===null||w===void 0||(y=w.docs)===null||y===void 0?void 0:y.description}}};m.parameters={...m.parameters,docs:{...(A=m.parameters)===null||A===void 0?void 0:A.docs,source:{originalSource:`{
  name: "Tamanho — sm (compacto)",
  args: {
    columns: usuariosColumns,
    data: usuariosData,
    size: "sm"
  }
}`,...(j=m.parameters)===null||j===void 0||(C=j.docs)===null||C===void 0?void 0:C.source},description:{story:`Densidade compacta — ideal para dashboards com muitas linhas\r
e espaço vertical limitado.`,...(R=m.parameters)===null||R===void 0||(D=R.docs)===null||D===void 0?void 0:D.description}}};u.parameters={...u.parameters,docs:{...(P=u.parameters)===null||P===void 0?void 0:P.docs,source:{originalSource:`{
  name: "Células com Badge",
  args: {
    columns: ["Nome", "Cargo", "Status"],
    data: badgeRows,
    size: "sm"
  }
}`,...(B=u.parameters)===null||B===void 0||(E=B.docs)===null||E===void 0?void 0:E.source},description:{story:"Células com Badge — cada célula de status renderiza um Badge.\r\nDemonstra que `data` aceita qualquer `ReactNode` por célula.",...(N=u.parameters)===null||N===void 0||(L=N.docs)===null||L===void 0?void 0:L.description}}};p.parameters={...p.parameters,docs:{...(T=p.parameters)===null||T===void 0?void 0:T.docs,source:{originalSource:`{
  name: "Células com ações",
  args: {
    columns: ["Nome", "Cargo", "Status", "Ações"],
    data: actionRows,
    size: "sm"
  }
}`,...(W=p.parameters)===null||W===void 0||(M=W.docs)===null||M===void 0?void 0:M.source},description:{story:`Células com ações — última coluna contém ButtonIcons com Tooltip.\r
Padrão mais comum em tabelas administrativas.`,...(q=p.parameters)===null||q===void 0||(J=q.docs)===null||J===void 0?void 0:J.description}}};v.parameters={...v.parameters,docs:{...(O=v.parameters)===null||O===void 0?void 0:O.docs,source:{originalSource:`{
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
}`,...(k=v.parameters)===null||k===void 0||(U=k.docs)===null||U===void 0?void 0:U.source},description:{story:"Scroll horizontal — container estreito força overflow.\r\nA primeira coluna fica fixada via `position: sticky` com sombra lateral\r\nquando `overflow-ativo` é aplicado pelo `useOverflowDetection`.",...(H=v.parameters)===null||H===void 0||(G=H.docs)===null||G===void 0?void 0:G.description}}};g.parameters={...g.parameters,docs:{...(F=g.parameters)===null||F===void 0?void 0:F.docs,source:{originalSource:`{
  name: "Edge case — coluna única",
  args: {
    columns: ["Nome"],
    data: [["Ana Souza"], ["Carlos Lima"], ["Jane Doe"]],
    size: "md"
  }
}`,...($=g.parameters)===null||$===void 0||(I=$.docs)===null||I===void 0?void 0:I.source},description:{story:`Coluna única — edge case que valida o layout com apenas uma coluna.\r
A coluna é fixada à esquerda via sticky sem sombra (sem overflow).`,...(X=g.parameters)===null||X===void 0||(Q=X.docs)===null||Q===void 0?void 0:Q.description}}};h.parameters={...h.parameters,docs:{...(Z=h.parameters)===null||Z===void 0?void 0:Z.docs,source:{originalSource:`{
  name: "Edge case — linha única",
  args: {
    columns: usuariosColumns,
    data: [["Ana Souza", "Engenheira", "Produto", "Ativo"]],
    size: "md"
  }
}`,...(K=h.parameters)===null||K===void 0||(V=K.docs)===null||V===void 0?void 0:V.source},description:{story:"Linha única — valida que a borda superior da primeira linha aparece corretamente.",...(aa=h.parameters)===null||aa===void 0||(Y=aa.docs)===null||Y===void 0?void 0:Y.description}}};_.parameters={..._.parameters,docs:{...(ea=_.parameters)===null||ea===void 0?void 0:ea.docs,source:{originalSource:`{
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
}`,...(sa=_.parameters)===null||sa===void 0||(oa=sa.docs)===null||oa===void 0?void 0:oa.source},description:{story:`Tabela de usuários com Badge de status e paginação no rodapé.\r
Demonstra o padrão mais completo de uso em dashboards administrativos.`,...(ia=_.parameters)===null||ia===void 0||(ra=ia.docs)===null||ra===void 0?void 0:ra.description}}};const Ra=["SizeMd","SizeSm","WithBadges","WithActions","HorizontalScroll","SingleColumn","SingleRow","UserTable"];export{v as HorizontalScroll,g as SingleColumn,h as SingleRow,c as SizeMd,m as SizeSm,_ as UserTable,p as WithActions,u as WithBadges,Ra as __namedExportsOrder,Da as default};
