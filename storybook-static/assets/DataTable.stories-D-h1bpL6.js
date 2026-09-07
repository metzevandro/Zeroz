import{r as i,j as e}from"./iframe-Bz4izyZq.js";import{B as w}from"./Button-Cle0utYg.js";/* empty css               */import{E as rt}from"./EmptyState-DRMTUyF3.js";import{I as ot}from"./InputSearch-D4oC5VbU.js";import{I as nt}from"./Icon-CoEZSvhw.js";import{S as G}from"./Skeleton-CBwGUgA7.js";import{C as at}from"./Checkbox-B1oKFDR2.js";import{P as st}from"./Pagination-BVYv4gVl.js";import"./preload-helper-PPVm8Dsz.js";import"./Loading-BWxuoFV_.js";import"./ButtonIcon-DTjRLmvj.js";const lt=({skeleton:n,onSearch:r,rowsSelected:t=0,textRowsSelected:l,children:d})=>{const c=t>0,S=`${t} ${l??""}`.trim(),m=i.useRef(""),p=o=>{m.current=o,o===""&&r("")},u=o=>{o.key==="Enter"&&r(m.current)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`data-table-header-rows-selected ${c?"fade-in":"fade-out"}`,style:{visibility:c?"visible":"hidden",display:c?"":"none"},children:[e.jsx("p",{className:"textRowsSelected",style:{height:"40px",alignItems:"center",display:"flex"},children:S},S),e.jsx("div",{className:"data-table-header-rows-selected-buttons",children:d})]}),e.jsx("div",{className:`data-table-header ${c?"fade-out":"fade-in"}`,style:{visibility:c?"hidden":"visible",display:c?"none":""},children:e.jsx(ot,{isSkeleton:n,placeholder:"Procurar",onDebouncedChange:p,debounceMs:0,onKeyDown:u})})]})};function it(n){return{asc:"arrow_downward",desc:"arrow_upward",default:"swap_vert"}[n]}const dt=({skeleton:n,headers:r,sortStates:t,columnWidths:l,withCheckbox:d,allSelected:c,someSelected:S,onSort:m,onSelectAll:p})=>e.jsxs("div",{style:{display:"flex",flex:"1"},children:[d&&e.jsx("div",{className:"data-table-body-header-checkbox",children:n?e.jsx(G,{height:"24px",width:"24px"}):e.jsx(at,{indeterminate:S,modelValue:c,onUpdate:p})}),r.map((u,o)=>e.jsx("div",{className:`data-table-row-header ${n?"loading-skeleton":""} ${o===0?"first":""}`,style:{minWidth:l[o]},onClick:()=>m(o),children:n?e.jsx(G,{height:"24px",width:"80px"}):e.jsxs(e.Fragment,{children:[u,e.jsx(nt,{icon:it(t[o]),size:"sm"})]})},u))]}),ct=({children:n,skeleton:r,style:t})=>e.jsx("div",{className:"data-table-row-content",style:t,children:r?e.jsx(G,{height:"24px",width:"80px"}):n});function ut(n,r){return Array.from({length:n},(t,l)=>({id:`skeleton-${l}`,...Object.fromEntries(r.map(d=>[d,Math.random().toString(36).substring(2,8)]))}))}const mt=({currentRows:n,selectedRows:r,skeleton:t,onRowSelection:l,columnWidths:d,withCheckbox:c,columnKeys:S})=>{const m=t?ut(5,S):n;return e.jsx("div",{className:"data-table-body-content",style:{flexDirection:"column"},children:m.map((p,u)=>{const o=t?`skeleton-${u}`:p.id;return e.jsx("div",{className:"data-table-body-content-row",children:e.jsxs("div",{style:{display:"flex",flex:"1"},children:[c&&e.jsx("div",{className:"data-table-body-content-checkbox",children:t?e.jsx(G,{height:"24px",width:"24px"}):e.jsx(at,{disabled:t,modelValue:r.includes(o),onUpdate:a=>l(o,a)})}),S.map((a,x)=>e.jsx("div",{className:"data-table-body-content-row",children:e.jsx(ct,{skeleton:t,style:{minWidth:d[x]},children:p[a]})},a))]})},o)})})},pt=({currentPage:n,totalPages:r,disabledLeft:t,disabledRight:l,skeleton:d,onClickLeft:c,onClickRight:S})=>{const m=`Mostrando ${r===0?0:n} de ${r}`;return e.jsx("div",{className:"data-table-footer",children:e.jsx(st,{label:m,variant:"leftLabel",onClickLeft:c,onClickRight:S,disabledLeft:t,disabledRight:l,skeleton:d})})};function St(n,r){const t=i.useCallback(l=>{const d=document.createElement("span");d.textContent=l,document.body.appendChild(d);const c=d.getBoundingClientRect().width;return document.body.removeChild(d),c},[]);return i.useMemo(()=>n.map(l=>{const d=r.map(u=>{var o;return String((o=u[l.key])!==null&&o!==void 0?o:"")}),c=t(l.label),S=Math.max(0,...d.map(t)),m=Math.max(c,S)+50;var p;return Math.max(m,(p=l.minWidth)!==null&&p!==void 0?p:0)}),[n,r,t])}function vt(){const n=i.useRef(null),[r,t]=i.useState(!1);return i.useEffect(()=>{const l=n.current;if(!l)return;const d=()=>{t(l.scrollWidth>l.clientWidth)},c=new ResizeObserver(d);return c.observe(l),d(),()=>c.unobserve(l)},[]),{ref:n,isOverflowed:r}}function ht({data:n,rowsPerPage:r,columns:t,skeleton:l,onSelectedRowsChange:d,onUpdateSelectedRows:c,onSort:S,onSearch:m,page:p,totalItems:u,onPageChange:o}){const a=p!==void 0&&u!==void 0&&o!==void 0,[x,h]=i.useState(1),[v,g]=i.useState(4),[b,L]=i.useState([]),[X,P]=i.useState(()=>new Array(t.length).fill("default")),I=i.useRef(new Map),Y=i.useRef(0),T=i.useRef(d);i.useEffect(()=>{T.current=d},[d]);const O=i.useRef(c);i.useEffect(()=>{O.current=c},[c]);const _=a?p:x,E=n.map((s,f)=>{if(s.id!==void 0&&s.id!==null)return{...s,id:String(s.id)};const y=JSON.stringify(s);return I.current.has(y)||I.current.set(y,`__synthetic-${Y.current++}`),{...s,id:I.current.get(y)}});i.useEffect(()=>{a||(g(4),h(1)),!l&&L(s=>{const f=new Set(E.map(k=>k.id)),y=s.filter(k=>f.has(k));return y.length===s.length?s:y})},[n,l,a]);const j=a?Math.max(1,Math.ceil((u??0)/r)):Math.ceil(E.length/r);i.useEffect(()=>{a||_===v&&v<j&&g(s=>Math.min(s+4,j))},[_,v,j,a]),i.useEffect(()=>{var s;(s=T.current)===null||s===void 0||s.call(T,b)},[b]),i.useEffect(()=>{var s;(s=O.current)===null||s===void 0||s.call(O,f=>L(f))},[]);const Z=i.useCallback(s=>{a?o?.(1):h(1),m?.(s)},[m,a,o]),ee=i.useCallback(s=>{P(f=>{const y=[...f],k=y[s],oe=["default","asc","desc"],tt=oe[(oe.indexOf(k)+1)%oe.length];return y[s]=tt,S?.({columnIndex:s,direction:tt}),y}),a?o?.(1):h(1)},[S,a,o]),C=a?E:E.slice(0,v*r),te=a?C:C.slice((_-1)*r,_*r),K=C.length>0&&C.every(s=>b.includes(s.id)),H=C.some(s=>b.includes(s.id))&&!K,ae=i.useCallback(s=>{L(s?C.map(f=>f.id):[])},[C]),re=i.useCallback((s,f)=>{L(y=>f?[...y,s]:y.filter(k=>k!==s))},[]),A=i.useCallback(()=>{a?o?.(Math.max(_-1,1)):h(s=>Math.max(s-1,1))},[a,o,_]),J=i.useCallback(()=>{a?o?.(Math.min(_+1,j)):h(s=>Math.min(s+1,Math.min(j,v)))},[a,o,_,j,v]);return{currentPage:_,currentRows:te,visibleData:C,totalPages:j,loadedPages:v,isControlled:a,selectedRows:b,sortStates:X,allSelected:K,someSelected:H,handleSearch:Z,handleSort:ee,handleSelectAll:ae,handleRowSelection:re,handlePageLeft:A,handlePageRight:J}}const R=({columns:n,data:r,skeleton:t,rowsPerPage:l=4,withCheckbox:d=!1,headerSelectedChildren:c,textRowsSelected:S,onSelectedRowsChange:m,onUpdateSelectedRows:p,onSort:u,onSearch:o,page:a,totalItems:x,onPageChange:h})=>{const{currentPage:v,currentRows:g,totalPages:b,loadedPages:L,isControlled:X,selectedRows:P,sortStates:I,allSelected:Y,someSelected:T,handleSearch:O,handleSort:_,handleSelectAll:E,handleRowSelection:j,handlePageLeft:Z,handlePageRight:ee}=ht({data:r,rowsPerPage:l,columns:n,skeleton:t,onSelectedRowsChange:m,onUpdateSelectedRows:p,onSort:u,onSearch:o,page:a,totalItems:x,onPageChange:h}),C=n.map(f=>f.key),te=n.map(f=>f.label),K=r.map((f,y)=>{var k;return{...f,id:(k=f.id)!==null&&k!==void 0?k:String(y)}}),H=St(n,K),{ref:ae,isOverflowed:re}=vt(),A=t&&r.length===0,J=t&&r.length>0,s=g.length===0&&!t;return e.jsxs("div",{className:"data-table",children:[e.jsx(lt,{skeleton:A,onSearch:O,rowsSelected:P.length,textRowsSelected:S,children:c}),e.jsxs("div",{ref:ae,className:`data-table-body ${re?"overflowed":""}`,style:{height:l*56.8+41.6,opacity:J?.5:1,pointerEvents:J?"none":void 0,transition:"opacity 0.15s ease"},children:[e.jsx("div",{className:"data-table-body-header",children:e.jsx(dt,{skeleton:A,headers:te,sortStates:I,columnWidths:H,withCheckbox:d,allSelected:Y,someSelected:T,onSort:_,onSelectAll:E})}),s?e.jsx("div",{className:"data-table-body-empty",children:e.jsx(rt,{title:"Nenhum resultado encontrado",description:"Tente ajustar os termos de pesquisa para encontrar o que procura.",icon:"search_off"})}):e.jsx(mt,{withCheckbox:d,columnWidths:H,columnKeys:C,currentRows:g,selectedRows:P,skeleton:A,onRowSelection:j})]}),e.jsx(pt,{currentPage:v,totalPages:b,skeleton:A,onClickLeft:Z,onClickRight:ee,disabledLeft:v===1||g.length===0,disabledRight:X?v===b||g.length===0:v===Math.min(b,L)||g.length===0})]})};R.displayName="DataTable";var ne,se,le,ie,de,ce,ue,me,pe,Se,ve,he,fe,xe,ye,ge,be,_e,ke,Ce,Le,je,we,Re,De,Ee,Ae,We,Ie,Te,Oe,Be,ze,Me,Ne,Ve,qe,Fe,$e,Ue,Qe,Pe,Ke,He,Je,Ge,Xe,Ye,Ze,et;const W=[{key:"name",label:"Nome",minWidth:160},{key:"email",label:"E-mail",minWidth:220},{key:"role",label:"Cargo",minWidth:140},{key:"department",label:"Área",minWidth:140},{key:"status",label:"Status",minWidth:100}],D=[{name:"Ana Souza",email:"ana@empresa.com",role:"Engenheira",department:"Produto",status:"Ativo"},{name:"Bruno Lima",email:"bruno@empresa.com",role:"Designer",department:"Design",status:"Ativo"},{name:"Carla Mendes",email:"carla@empresa.com",role:"PO",department:"Produto",status:"Inativo"},{name:"Diego Faria",email:"diego@empresa.com",role:"Engenheiro",department:"Plataforma",status:"Ativo"},{name:"Elena Castro",email:"elena@empresa.com",role:"Data Scientist",department:"Dados",status:"Ativo"},{name:"Felipe Rocha",email:"felipe@empresa.com",role:"SRE",department:"Plataforma",status:"Inativo"},{name:"Gabi Torres",email:"gabi@empresa.com",role:"UX Writer",department:"Design",status:"Ativo"},{name:"Hugo Martins",email:"hugo@empresa.com",role:"Engenheiro",department:"Backend",status:"Ativo"},{name:"Íris Nunes",email:"iris@empresa.com",role:"QA",department:"Qualidade",status:"Ativo"},{name:"João Pires",email:"joao@empresa.com",role:"DevOps",department:"Plataforma",status:"Inativo"},{name:"Karen Alves",email:"karen@empresa.com",role:"Engenheira",department:"Frontend",status:"Ativo"},{name:"Lucas Barros",email:"lucas@empresa.com",role:"Product Analyst",department:"Produto",status:"Ativo"}],Dt={title:"Components/DataTable",component:R,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
Tabela de dados com paginação, seleção de linhas e suporte a busca e ordenação **server-side**.

### Modelo de busca e ordenação

O componente **não filtra nem ordena os dados internamente**.
Ele emite \`onSearch(query)\` e \`onSort({ columnIndex, direction })\` para que o
consumidor aplique essas operações via API ou estado local.

\`\`\`tsx
const [query, setQuery] = useState("");
const [sort, setSort] = useState<SortState | null>(null);

// Aplique query e sort na sua chamada de API
const { data, isLoading } = useMyApi({ query, sort });

<DataTable
  columns={columns}
  data={data}
  skeleton={isLoading}
  onSearch={setQuery}
  onSort={setSort}
/>
\`\`\`
        `}}},argTypes:{columns:{control:!1,description:"Definição das colunas. Cada item possui `key` (campo no objeto de dados), `label` (cabeçalho) e `minWidth` opcional."},data:{control:!1,description:"Array de objetos com campos correspondentes às `key`s das colunas."},skeleton:{control:"boolean",description:"Exibe o estado de carregamento skeleton."},rowsPerPage:{control:{type:"number",min:1,max:20},description:"Número de linhas por página."},withCheckbox:{control:"boolean",description:"Exibe checkboxes para seleção de linhas."},textRowsSelected:{control:"text",description:"Sufixo do contador de linhas selecionadas."},onSearch:{control:!1,description:"Callback disparado ao digitar na busca. A filtragem é responsabilidade do consumidor."},onSort:{control:!1,description:"Callback disparado ao clicar em um cabeçalho de coluna. A ordenação é responsabilidade do consumidor."},onSelectedRowsChange:{control:!1,description:"Callback disparado quando a seleção de linhas muda."},onUpdateSelectedRows:{control:!1,description:"Expõe uma função para atualizar a seleção externamente."},headerSelectedChildren:{control:!1,description:"ReactNode exibido na barra de ações quando há linhas selecionadas."}},args:{columns:W,data:D,skeleton:!1,rowsPerPage:4,withCheckbox:!1,textRowsSelected:"itens selecionados"}},B={},z={args:{skeleton:!0,data:[]}},M={args:{data:[],skeleton:!1}},N={render:n=>{const[r,t]=i.useState(""),[l,d]=i.useState(!1),c=D.filter(m=>Object.values(m).some(p=>String(p).toLowerCase().includes(r.toLowerCase()))),S=m=>{d(!0),setTimeout(()=>{t(m),d(!1)},600)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("p",{style:{fontSize:12,color:"#666"},children:["Query atual: ",e.jsxs("strong",{children:['"',r,'"']})," — ",c.length," ","resultado(s)"]}),e.jsx(R,{...n,data:c,skeleton:l,onSearch:S})]})}},V={render:n=>{var r;const[t,l]=i.useState(null),[d,c]=i.useState(!1),S=(()=>{var u;if(!t||t.direction==="default")return D;const o=(u=W[t.columnIndex])===null||u===void 0?void 0:u.key;return o?[...D].sort((a,x)=>{const h=String(a[o]),v=String(x[o]);return t.direction==="asc"?h.localeCompare(v):v.localeCompare(h)}):D})(),m=u=>{c(!0),setTimeout(()=>{l(u),c(!1)},400)},p={asc:"crescente",desc:"decrescente",default:"padrão"};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("p",{style:{fontSize:12,color:"#666"},children:t?`Ordenando por coluna ${t.columnIndex} (${(r=W[t.columnIndex])===null||r===void 0?void 0:r.label}) — ${p[t.direction]}`:"Clique em um cabeçalho de coluna para ordenar"}),e.jsx(R,{...n,data:S,skeleton:d,onSort:m})]})}},q={render:n=>{const[r,t]=i.useState(""),[l,d]=i.useState(null),[c,S]=i.useState(!1),m=(()=>{let u=D.filter(a=>Object.values(a).some(x=>String(x).toLowerCase().includes(r.toLowerCase())));if(l&&l.direction!=="default"){var o;const a=(o=W[l.columnIndex])===null||o===void 0?void 0:o.key;a&&(u=[...u].sort((x,h)=>{const v=String(x[a]),g=String(h[a]);return l.direction==="asc"?v.localeCompare(g):g.localeCompare(v)}))}return u})(),p=u=>{S(!0),setTimeout(()=>{u(),S(!1)},500)};return e.jsx(R,{...n,data:m,skeleton:c,onSearch:u=>p(()=>t(u)),onSort:u=>p(()=>d(u))})}},F={args:{withCheckbox:!0,textRowsSelected:"itens selecionados",headerSelectedChildren:e.jsxs(e.Fragment,{children:[e.jsx(w,{size:"md",variant:"secondary",onClick:()=>alert("Exportar selecionados"),children:"Exportar"}),e.jsx(w,{size:"md",variant:"primary",onClick:()=>alert("Excluir selecionados"),children:"Excluir"})]})},render:n=>{const[r,t]=i.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("p",{style:{fontSize:12,color:"#666"},children:["IDs selecionados:"," ",e.jsxs("strong",{children:["[",r.join(", ")||"nenhum","]"]})]}),e.jsx(R,{...n,onSelectedRowsChange:t})]})}},$={args:{withCheckbox:!0,textRowsSelected:"itens selecionados"},render:n=>{const r=i.useRef(null);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(w,{size:"md",variant:"secondary",onClick:()=>{var t;return(t=r.current)===null||t===void 0?void 0:t.call(r,["0","1","2"])},children:"Selecionar primeiros 3"}),e.jsx(w,{size:"md",variant:"secondary",onClick:()=>{var t;return(t=r.current)===null||t===void 0?void 0:t.call(r,[])},children:"Limpar seleção"})]}),e.jsx(R,{...n,onUpdateSelectedRows:t=>{r.current=t}})]})}},U={args:{rowsPerPage:8}},Q={render:()=>{const[n,r]=i.useState(""),[t,l]=i.useState(null),[d,c]=i.useState([]),[S,m]=i.useState(!1),p=i.useRef(null),u=(()=>{let a=D.filter(h=>Object.values(h).some(v=>String(v).toLowerCase().includes(n.toLowerCase())));if(t&&t.direction!=="default"){var x;const h=(x=W[t.columnIndex])===null||x===void 0?void 0:x.key;h&&(a=[...a].sort((v,g)=>{const b=String(v[h]),L=String(g[h]);return t.direction==="asc"?b.localeCompare(L):L.localeCompare(b)}))}return a})(),o=a=>{m(!0),setTimeout(()=>{a(),m(!1)},500)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(w,{size:"md",variant:"secondary",onClick:()=>{var a;return(a=p.current)===null||a===void 0?void 0:a.call(p,[])},children:"Limpar seleção"}),e.jsx(w,{size:"md",variant:"secondary",onClick:()=>{var a;return(a=p.current)===null||a===void 0?void 0:a.call(p,["0","1","2","3"])},children:"Selecionar primeiros 4"})]}),d.length>0&&e.jsxs("p",{style:{fontSize:12,color:"#666"},children:["Selecionados: ",e.jsxs("strong",{children:["[",d.join(", "),"]"]})]}),e.jsx(R,{columns:W,data:u,skeleton:S,rowsPerPage:4,withCheckbox:!0,textRowsSelected:"itens selecionados",onSearch:a=>o(()=>r(a)),onSort:a=>o(()=>l(a)),onSelectedRowsChange:c,onUpdateSelectedRows:a=>{p.current=a},headerSelectedChildren:e.jsxs(e.Fragment,{children:[e.jsx(w,{size:"md",variant:"secondary",onClick:()=>alert("Exportar"),children:"Exportar"}),e.jsx(w,{size:"md",variant:"primary",onClick:()=>alert("Excluir"),children:"Excluir"})]})})]})}};B.parameters={...B.parameters,docs:{...(ne=B.parameters)===null||ne===void 0?void 0:ne.docs,source:{originalSource:"{}",...(le=B.parameters)===null||le===void 0||(se=le.docs)===null||se===void 0?void 0:se.source},description:{story:`Estado padrão com dados estáticos.\r
Navegue pelas páginas usando os controles de paginação.`,...(de=B.parameters)===null||de===void 0||(ie=de.docs)===null||ie===void 0?void 0:ie.description}}};z.parameters={...z.parameters,docs:{...(ce=z.parameters)===null||ce===void 0?void 0:ce.docs,source:{originalSource:`{
  args: {
    skeleton: true,
    data: []
  }
}`,...(me=z.parameters)===null||me===void 0||(ue=me.docs)===null||ue===void 0?void 0:ue.source},description:{story:"Estado de carregamento — exibe linhas skeleton enquanto os dados chegam.",...(Se=z.parameters)===null||Se===void 0||(pe=Se.docs)===null||pe===void 0?void 0:pe.description}}};M.parameters={...M.parameters,docs:{...(ve=M.parameters)===null||ve===void 0?void 0:ve.docs,source:{originalSource:`{
  args: {
    data: [],
    skeleton: false
  }
}`,...(fe=M.parameters)===null||fe===void 0||(he=fe.docs)===null||he===void 0?void 0:he.source},description:{story:"Tabela sem dados após busca sem resultados.",...(ye=M.parameters)===null||ye===void 0||(xe=ye.docs)===null||xe===void 0?void 0:xe.description}}};N.parameters={...N.parameters,docs:{...(ge=N.parameters)===null||ge===void 0?void 0:ge.docs,source:{originalSource:`{
  render: args => {
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const filtered = ALL_ROWS.filter(row => Object.values(row).some(val => String(val).toLowerCase().includes(query.toLowerCase())));
    const handleSearch = (value: string) => {
      setIsLoading(true);
      setTimeout(() => {
        setQuery(value);
        setIsLoading(false);
      }, 600);
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 8
    }}>\r
        <p style={{
        fontSize: 12,
        color: "#666"
      }}>\r
          Query atual: <strong>"{query}"</strong> — {filtered.length}{" "}\r
          resultado(s)\r
        </p>\r
        <DataTable {...args} data={filtered} skeleton={isLoading} onSearch={handleSearch} />\r
      </div>;
  }
}`,...(_e=N.parameters)===null||_e===void 0||(be=_e.docs)===null||be===void 0?void 0:be.source},description:{story:"Demonstração do `onSearch` server-side.\r\nO componente emite o valor digitado; a filtragem é feita localmente\r\nneste exemplo para simular uma resposta de API.",...(Ce=N.parameters)===null||Ce===void 0||(ke=Ce.docs)===null||ke===void 0?void 0:ke.description}}};V.parameters={...V.parameters,docs:{...(Le=V.parameters)===null||Le===void 0?void 0:Le.docs,source:{originalSource:`{
  render: args => {
    const [sortState, setSortState] = useState<SortState | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const sorted = (() => {
      if (!sortState || sortState.direction === "default") return ALL_ROWS;
      const key = DEFAULT_COLUMNS[sortState.columnIndex]?.key;
      if (!key) return ALL_ROWS;
      return [...ALL_ROWS].sort((a, b) => {
        const aVal = String(a[key as keyof typeof a]);
        const bVal = String(b[key as keyof typeof b]);
        return sortState.direction === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      });
    })();
    const handleSort = (sort: SortState) => {
      setIsLoading(true);
      setTimeout(() => {
        setSortState(sort);
        setIsLoading(false);
      }, 400);
    };
    const directionLabel: Record<string, string> = {
      asc: "crescente",
      desc: "decrescente",
      default: "padrão"
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 8
    }}>\r
        <p style={{
        fontSize: 12,
        color: "#666"
      }}>\r
          {sortState ? \`Ordenando por coluna \${sortState.columnIndex} (\${DEFAULT_COLUMNS[sortState.columnIndex]?.label}) — \${directionLabel[sortState.direction]}\` : "Clique em um cabeçalho de coluna para ordenar"}\r
        </p>\r
        <DataTable {...args} data={sorted} skeleton={isLoading} onSort={handleSort} />\r
      </div>;
  }
}`,...(we=V.parameters)===null||we===void 0||(je=we.docs)===null||je===void 0?void 0:je.source},description:{story:"Demonstração do `onSort` server-side.\r\nO componente emite `{ columnIndex, direction }`;\r\na ordenação é aplicada localmente para simular uma resposta de API.",...(De=V.parameters)===null||De===void 0||(Re=De.docs)===null||Re===void 0?void 0:Re.description}}};q.parameters={...q.parameters,docs:{...(Ee=q.parameters)===null||Ee===void 0?void 0:Ee.docs,source:{originalSource:`{
  render: args => {
    const [query, setQuery] = useState("");
    const [sortState, setSortState] = useState<SortState | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const processedData = (() => {
      let result = ALL_ROWS.filter(row => Object.values(row).some(val => String(val).toLowerCase().includes(query.toLowerCase())));
      if (sortState && sortState.direction !== "default") {
        const key = DEFAULT_COLUMNS[sortState.columnIndex]?.key;
        if (key) {
          result = [...result].sort((a, b) => {
            const aVal = String(a[key as keyof typeof a]);
            const bVal = String(b[key as keyof typeof b]);
            return sortState.direction === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
          });
        }
      }
      return result;
    })();
    const simulateApiCall = (fn: () => void) => {
      setIsLoading(true);
      setTimeout(() => {
        fn();
        setIsLoading(false);
      }, 500);
    };
    return <DataTable {...args} data={processedData} skeleton={isLoading} onSearch={value => simulateApiCall(() => setQuery(value))} onSort={sort => simulateApiCall(() => setSortState(sort))} />;
  }
}`,...(We=q.parameters)===null||We===void 0||(Ae=We.docs)===null||Ae===void 0?void 0:Ae.source},description:{story:"Busca e sort server-side combinados — o cenário mais comum em produção.",...(Te=q.parameters)===null||Te===void 0||(Ie=Te.docs)===null||Ie===void 0?void 0:Ie.description}}};F.parameters={...F.parameters,docs:{...(Oe=F.parameters)===null||Oe===void 0?void 0:Oe.docs,source:{originalSource:`{
  args: {
    withCheckbox: true,
    textRowsSelected: "itens selecionados",
    headerSelectedChildren: <>\r
        <Button size="md" variant="secondary" onClick={() => alert("Exportar selecionados")}>\r
          Exportar\r
        </Button>\r
        <Button size="md" variant="primary" onClick={() => alert("Excluir selecionados")}>\r
          Excluir\r
        </Button>\r
      </>
  },
  render: args => {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 8
    }}>\r
        <p style={{
        fontSize: 12,
        color: "#666"
      }}>\r
          IDs selecionados:{" "}\r
          <strong>[{selectedIds.join(", ") || "nenhum"}]</strong>\r
        </p>\r
        <DataTable {...args} onSelectedRowsChange={setSelectedIds} />\r
      </div>;
  }
}`,...(ze=F.parameters)===null||ze===void 0||(Be=ze.docs)===null||Be===void 0?void 0:Be.source},description:{story:"Seleção de linhas habilitada com ações em bulk no header.",...(Ne=F.parameters)===null||Ne===void 0||(Me=Ne.docs)===null||Me===void 0?void 0:Me.description}}};$.parameters={...$.parameters,docs:{...(Ve=$.parameters)===null||Ve===void 0?void 0:Ve.docs,source:{originalSource:`{
  args: {
    withCheckbox: true,
    textRowsSelected: "itens selecionados"
  },
  render: args => {
    const updaterRef = useRef<((ids: string[]) => void) | null>(null);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>\r
        <div style={{
        display: "flex",
        gap: 8
      }}>\r
          <Button size="md" variant="secondary" onClick={() => updaterRef.current?.(["0", "1", "2"])}>\r
            Selecionar primeiros 3\r
          </Button>\r
          <Button size="md" variant="secondary" onClick={() => updaterRef.current?.([])}>\r
            Limpar seleção\r
          </Button>\r
        </div>\r
        <DataTable {...args} onUpdateSelectedRows={updater => {
        updaterRef.current = updater;
      }} />\r
      </div>;
  }
}`,...(Fe=$.parameters)===null||Fe===void 0||(qe=Fe.docs)===null||qe===void 0?void 0:qe.source},description:{story:"Controle externo da seleção via `onUpdateSelectedRows`.\r\nÚtil para selecionar linhas programaticamente (ex: após uma ação de API).",...(Ue=$.parameters)===null||Ue===void 0||($e=Ue.docs)===null||$e===void 0?void 0:$e.description}}};U.parameters={...U.parameters,docs:{...(Qe=U.parameters)===null||Qe===void 0?void 0:Qe.docs,source:{originalSource:`{
  args: {
    rowsPerPage: 8
  }
}`,...(Ke=U.parameters)===null||Ke===void 0||(Pe=Ke.docs)===null||Pe===void 0?void 0:Pe.source},description:{story:"Tabela com maior número de linhas por página para visualização densa.",...(Je=U.parameters)===null||Je===void 0||(He=Je.docs)===null||He===void 0?void 0:He.description}}};Q.parameters={...Q.parameters,docs:{...(Ge=Q.parameters)===null||Ge===void 0?void 0:Ge.docs,source:{originalSource:`{
  render: () => {
    const [query, setQuery] = useState("");
    const [sortState, setSortState] = useState<SortState | null>(null);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const updaterRef = useRef<((ids: string[]) => void) | null>(null);
    const processedData = (() => {
      let result = ALL_ROWS.filter(row => Object.values(row).some(val => String(val).toLowerCase().includes(query.toLowerCase())));
      if (sortState && sortState.direction !== "default") {
        const key = DEFAULT_COLUMNS[sortState.columnIndex]?.key;
        if (key) {
          result = [...result].sort((a, b) => {
            const aVal = String(a[key as keyof typeof a]);
            const bVal = String(b[key as keyof typeof b]);
            return sortState.direction === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
          });
        }
      }
      return result;
    })();
    const simulate = (fn: () => void) => {
      setIsLoading(true);
      setTimeout(() => {
        fn();
        setIsLoading(false);
      }, 500);
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>\r
        <div style={{
        display: "flex",
        gap: 8
      }}>\r
          <Button size="md" variant="secondary" onClick={() => updaterRef.current?.([])}>\r
            Limpar seleção\r
          </Button>\r
          <Button size="md" variant="secondary" onClick={() => updaterRef.current?.(["0", "1", "2", "3"])}>\r
            Selecionar primeiros 4\r
          </Button>\r
        </div>\r
\r
        {selectedIds.length > 0 && <p style={{
        fontSize: 12,
        color: "#666"
      }}>\r
            Selecionados: <strong>[{selectedIds.join(", ")}]</strong>\r
          </p>}\r
\r
        <DataTable columns={DEFAULT_COLUMNS} data={processedData} skeleton={isLoading} rowsPerPage={4} withCheckbox textRowsSelected="itens selecionados" onSearch={value => simulate(() => setQuery(value))} onSort={sort => simulate(() => setSortState(sort))} onSelectedRowsChange={setSelectedIds} onUpdateSelectedRows={updater => {
        updaterRef.current = updater;
      }} headerSelectedChildren={<>\r
              <Button size="md" variant="secondary" onClick={() => alert("Exportar")}>\r
                Exportar\r
              </Button>\r
              <Button size="md" variant="primary" onClick={() => alert("Excluir")}>\r
                Excluir\r
              </Button>\r
            </>} />\r
      </div>;
  }
}`,...(Ye=Q.parameters)===null||Ye===void 0||(Xe=Ye.docs)===null||Xe===void 0?void 0:Xe.source},description:{story:`Combinação completa: search, sort, checkbox, bulk actions e controle externo.\r
Representa o cenário mais completo de uso em produção.`,...(et=Q.parameters)===null||et===void 0||(Ze=et.docs)===null||Ze===void 0?void 0:Ze.description}}};const Et=["Default","Loading","Empty","WithServerSideSearch","WithServerSideSort","WithSearchAndSort","WithCheckboxAndBulkActions","WithExternalSelectionControl","DenseTable","FullExample"];export{B as Default,U as DenseTable,M as Empty,Q as FullExample,z as Loading,F as WithCheckboxAndBulkActions,$ as WithExternalSelectionControl,q as WithSearchAndSort,N as WithServerSideSearch,V as WithServerSideSort,Et as __namedExportsOrder,Dt as default};
