import{r as n,j as e}from"./iframe-Csr28j6B.js";/* empty css               */import{E as ie}from"./EmptyState-Bn5L1l02.js";import{I as ce}from"./InputSearch-B8ZenRfM.js";import{I as de}from"./Icon-DjhQpov0.js";import{S as Y}from"./Skeleton-DlU-ornU.js";import{C as le}from"./Checkbox-DHv7-8wD.js";import{P as ue}from"./Pagination-jxexFkz-.js";import{B as me}from"./Badge-Dq6F7rBz.js";import{B as Z}from"./Button-DxS3QODc.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonIcon-DIlXxgqv.js";import"./Loading-B5K7soid.js";const pe=({skeleton:o,onSearch:t,rowsSelected:s=0,textRowsSelected:r,children:l})=>{const c=s>0,u=`${s} ${r??""}`.trim(),m=n.useRef(""),p=d=>{m.current=d,d===""&&t("")},S=d=>{d.key==="Enter"&&t(m.current)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`data-table-header-rows-selected ${c?"fade-in":"fade-out"}`,style:{visibility:c?"visible":"hidden",display:c?"":"none"},children:[e.jsx("p",{className:"textRowsSelected",style:{height:"40px",alignItems:"center",display:"flex"},children:u},u),e.jsx("div",{className:"data-table-header-rows-selected-buttons",children:l})]}),e.jsx("div",{className:`data-table-header ${c?"fade-out":"fade-in"}`,style:{visibility:c?"hidden":"visible",display:c?"none":""},children:e.jsx(ce,{isSkeleton:o,placeholder:"Procurar",onDebouncedChange:p,debounceMs:0,onKeyDown:S})})]})};function Se(o){return{asc:"arrow_downward",desc:"arrow_upward",default:"swap_vert"}[o]}const he=({skeleton:o,headers:t,sortStates:s,columnWidths:r,withCheckbox:l,allSelected:c,someSelected:u,onSort:m,onSelectAll:p,sortable:S})=>e.jsxs("div",{style:{display:"flex",flex:"1"},children:[l&&e.jsx("div",{className:"data-table-body-header-checkbox",children:o?e.jsx(Y,{height:"24px",width:"24px"}):e.jsx(le,{indeterminate:u,modelValue:c,onUpdate:p})}),t.map((d,a)=>{const f=["data-table-row-header",o&&"loading-skeleton",a===0&&"first",a===t.length-1&&"last",!S&&"no-sort"].filter(Boolean).join(" ");return e.jsx("div",{className:f,style:{minWidth:r[a]},onClick:()=>m(a),children:o?e.jsx(Y,{height:"24px",width:"80px"}):e.jsxs(e.Fragment,{children:[d,e.jsx(de,{icon:Se(s[a]),size:"sm"})]})},d)})]}),fe=({children:o,skeleton:t,style:s})=>e.jsx("div",{className:"data-table-row-content",style:s,children:t?e.jsx(Y,{height:"24px",width:"80px"}):o});function ge(o,t){return Array.from({length:o},(s,r)=>({id:`skeleton-${r}`,...Object.fromEntries(t.map(l=>[l,Math.random().toString(36).substring(2,8)]))}))}const xe=({currentRows:o,selectedRows:t,skeleton:s,onRowSelection:r,columnWidths:l,withCheckbox:c,columnKeys:u,rowHeight:m,onRowHeightChange:p})=>{const S=s?ge(5,u):o,d=n.useRef(null),a=n.useRef(!1);return n.useEffect(()=>{if(s||a.current)return;const f=d.current;if(!f)return;let g=0,h=0,x=!1;const b=()=>{if(x)return;const A=f.getBoundingClientRect().height;A>0&&(a.current=!0,p(A))},w=()=>{g=requestAnimationFrame(()=>{h=requestAnimationFrame(b)})};return document.fonts?.ready?document.fonts.ready.then(w):w(),()=>{x=!0,cancelAnimationFrame(g),cancelAnimationFrame(h)}},[s,S]),e.jsx("div",{className:"data-table-body-content",style:{flexDirection:"column"},children:S.map((f,g)=>{const h=s?`skeleton-${g}`:f.id;return e.jsx("div",{className:"data-table-body-content-row",ref:g===0?d:void 0,children:e.jsxs("div",{style:{display:"flex",flex:"1"},children:[c&&e.jsx("div",{className:"data-table-body-content-checkbox",children:s?e.jsx(Y,{height:"24px",width:"24px"}):e.jsx(le,{disabled:s,modelValue:t.includes(h),onUpdate:x=>r(h,x)})}),u.map((x,b)=>e.jsx("div",{className:"data-table-body-content-row",children:e.jsx(fe,{skeleton:s,style:{minWidth:l[b]},children:f[x]})},x))]})},h)})})},be=({currentPage:o,totalPages:t,disabledLeft:s,disabledRight:r,skeleton:l,onClickLeft:c,onClickRight:u})=>{const m=`Mostrando ${t===0?0:o} de ${t}`;return e.jsx("div",{className:"data-table-footer",children:e.jsx(ue,{label:m,variant:"leftLabel",onClickLeft:c,onClickRight:u,disabledLeft:s,disabledRight:r,skeleton:l})})};function ye(o,t){const s=n.useCallback(r=>{const l=document.createElement("span");l.textContent=r,document.body.appendChild(l);const c=l.getBoundingClientRect().width;return document.body.removeChild(l),c},[]);return n.useMemo(()=>o.map(r=>{const l=t.map(p=>String(p[r.key]??"")),c=s(r.label),u=Math.max(0,...l.map(s)),m=Math.max(c,u)+50;return Math.max(m,r.minWidth??0)}),[o,t,s])}function ve(){const o=n.useRef(null),[t,s]=n.useState(!1);return n.useEffect(()=>{const r=o.current;if(!r)return;const l=()=>{s(r.scrollWidth>r.clientWidth)},c=new ResizeObserver(l);return c.observe(r),l(),()=>c.unobserve(r)},[]),{ref:o,isOverflowed:t}}function ke({data:o,rowsPerPage:t,columns:s,skeleton:r,onSelectedRowsChange:l,onUpdateSelectedRows:c,onSort:u,onSearch:m,page:p,totalItems:S,onPageChange:d}){const a=p!==void 0&&S!==void 0&&d!==void 0,[f,g]=n.useState(1),[h,x]=n.useState(4),[b,w]=n.useState([]),[A,$]=n.useState(()=>new Array(s.length).fill("default")),ee=!!u,M=n.useRef(new Map),te=n.useRef(0),Q=n.useRef(l);n.useEffect(()=>{Q.current=l},[l]);const H=n.useRef(c);n.useEffect(()=>{H.current=c},[c]);const k=a?p:f,T=o.map((i,E)=>{if(i.id!==void 0&&i.id!==null)return{...i,id:String(i.id)};const y=JSON.stringify(i);return M.current.has(y)||M.current.set(y,`__synthetic-${te.current++}`),{...i,id:M.current.get(y)}});n.useEffect(()=>{a||(x(4),g(1)),!r&&w(i=>{const E=new Set(T.map(R=>R.id)),y=i.filter(R=>E.has(R));return y.length===i.length?i:y})},[o,r,a]);const j=a?Math.max(1,Math.ceil((S??0)/t)):Math.ceil(T.length/t);n.useEffect(()=>{a||k===h&&h<j&&x(i=>Math.min(i+4,j))},[k,h,j,a]),n.useEffect(()=>{Q.current?.(b)},[b]),n.useEffect(()=>{H.current?.(i=>w(i))},[]);const ae=n.useCallback(i=>{a?d?.(1):g(1),m?.(i)},[m,a,d]),se=n.useCallback(i=>{$(E=>{const y=[...E],R=y[i],L=["default","asc","desc"],X=L[(L.indexOf(R)+1)%L.length];return y[i]=X,u?.({columnIndex:i,direction:X}),y}),a?d?.(1):g(1)},[u,a,d]),C=a?T:T.slice(0,h*t),ne=a?C:C.slice((k-1)*t,k*t),K=C.length>0&&C.every(i=>b.includes(i.id)),G=C.some(i=>b.includes(i.id))&&!K,oe=n.useCallback(i=>{w(i?C.map(E=>E.id):[])},[C]),re=n.useCallback((i,E)=>{w(y=>E?[...y,i]:y.filter(R=>R!==i))},[]),O=n.useCallback(()=>{a?d?.(Math.max(k-1,1)):g(i=>Math.max(i-1,1))},[a,d,k]),J=n.useCallback(()=>{a?d?.(Math.min(k+1,j)):g(i=>Math.min(i+1,Math.min(j,h)))},[a,d,k,j,h]);return{currentPage:k,currentRows:ne,visibleData:C,totalPages:j,loadedPages:h,isControlled:a,selectedRows:b,sortStates:A,allSelected:K,someSelected:G,handleSearch:ae,handleSort:se,handleSelectAll:oe,handleRowSelection:re,handlePageLeft:O,handlePageRight:J,sortable:ee}}const I=({columns:o,data:t,skeleton:s,rowsPerPage:r=4,withCheckbox:l=!1,headerSelectedChildren:c,textRowsSelected:u,onSelectedRowsChange:m,onUpdateSelectedRows:p,onSort:S,onSearch:d,page:a,totalItems:f,onPageChange:g})=>{const{currentPage:h,currentRows:x,totalPages:b,loadedPages:w,isControlled:A,selectedRows:$,sortStates:ee,allSelected:M,someSelected:te,handleSearch:Q,handleSort:H,handleSelectAll:k,handleRowSelection:T,handlePageLeft:j,handlePageRight:ae,sortable:se}=ke({data:t,rowsPerPage:r,columns:o,skeleton:s,onSelectedRowsChange:m,onUpdateSelectedRows:p,onSort:S,onSearch:d,page:a,totalItems:f,onPageChange:g}),C=o.map(L=>L.key),ne=o.map(L=>L.label),K=t.map((L,X)=>({...L,id:L.id??String(X)})),G=ye(o,K),{ref:oe,isOverflowed:re}=ve(),O=s&&t.length===0,J=s&&t.length>0,i=x.length===0&&!s,E=56.6,[y,R]=n.useState(E);return e.jsxs("div",{className:"data-table",children:[d?e.jsx(pe,{skeleton:O,onSearch:Q,rowsSelected:$.length,textRowsSelected:u,children:c}):null,e.jsxs("div",{ref:oe,className:`data-table-body ${re?"overflowed":""}`,style:{height:r*y+42,opacity:J?.5:1,pointerEvents:J?"none":void 0,transition:"opacity 0.15s ease"},children:[e.jsx("div",{className:"data-table-body-header",children:e.jsx(he,{skeleton:O,headers:ne,sortStates:ee,columnWidths:G,withCheckbox:l,allSelected:M,someSelected:te,onSort:H,onSelectAll:k,sortable:se})}),i?e.jsx("div",{className:"data-table-body-empty",children:e.jsx(ie,{title:"Nenhum resultado encontrado",description:"Tente ajustar os termos de pesquisa para encontrar o que procura.",icon:"search_off"})}):e.jsx(xe,{withCheckbox:l,columnWidths:G,columnKeys:C,currentRows:x,selectedRows:$,skeleton:O,onRowSelection:T,rowHeight:y,onRowHeightChange:R})]}),e.jsx(be,{currentPage:h,totalPages:b,skeleton:O,onClickLeft:j,onClickRight:ae,disabledLeft:h===1||x.length===0,disabledRight:A?h===b||x.length===0:h===Math.min(b,w)||x.length===0})]})};I.displayName="DataTable";const W=[{key:"name",label:"Nome",minWidth:160},{key:"email",label:"E-mail",minWidth:220},{key:"role",label:"Cargo",minWidth:140},{key:"department",label:"Área",minWidth:140},{key:"status",label:"Status",minWidth:100}],v=o=>e.jsx(me,{label:o,type:"light",variant:o==="Ativo"?"primary":"default"}),D=[{name:"Ana Souza",email:"ana@empresa.com",role:"Engenheira",department:"Produto",status:v("Ativo")},{name:"Bruno Lima",email:"bruno@empresa.com",role:"Designer",department:"Design",status:v("Ativo")},{name:"Carla Mendes",email:"carla@empresa.com",role:"PO",department:"Produto",status:v("Inativo")},{name:"Diego Faria",email:"diego@empresa.com",role:"Engenheiro",department:"Plataforma",status:v("Ativo")},{name:"Elena Castro",email:"elena@empresa.com",role:"Data Scientist",department:"Dados",status:v("Ativo")},{name:"Felipe Rocha",email:"felipe@empresa.com",role:"SRE",department:"Plataforma",status:v("Inativo")},{name:"Gabi Torres",email:"gabi@empresa.com",role:"UX Writer",department:"Design",status:v("Ativo")},{name:"Hugo Martins",email:"hugo@empresa.com",role:"Engenheiro",department:"Backend",status:v("Ativo")},{name:"Íris Nunes",email:"iris@empresa.com",role:"QA",department:"Qualidade",status:v("Ativo")},{name:"João Pires",email:"joao@empresa.com",role:"DevOps",department:"Plataforma",status:v("Inativo")},{name:"Karen Alves",email:"karen@empresa.com",role:"Engenheira",department:"Frontend",status:v("Ativo")},{name:"Lucas Barros",email:"lucas@empresa.com",role:"Product Analyst",department:"Produto",status:v("Ativo")}],Ne={title:"Components/DataTable",component:I,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
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
        `}}},argTypes:{columns:{control:!1,description:"Definição das colunas. Cada item possui `key` (campo no objeto de dados), `label` (cabeçalho) e `minWidth` opcional."},data:{control:!1,description:"Array de objetos com campos correspondentes às `key`s das colunas."},skeleton:{control:"boolean",description:"Exibe o estado de carregamento skeleton."},rowsPerPage:{control:{type:"number",min:1,max:20},description:"Número de linhas por página."},withCheckbox:{control:"boolean",description:"Exibe checkboxes para seleção de linhas."},textRowsSelected:{control:"text",description:"Sufixo do contador de linhas selecionadas."},onSearch:{control:!1,description:"Callback disparado ao digitar na busca. A filtragem é responsabilidade do consumidor."},onSort:{control:!1,description:"Callback disparado ao clicar em um cabeçalho de coluna. A ordenação é responsabilidade do consumidor."},onSelectedRowsChange:{control:!1,description:"Callback disparado quando a seleção de linhas muda."},onUpdateSelectedRows:{control:!1,description:"Expõe uma função para atualizar a seleção externamente."},headerSelectedChildren:{control:!1,description:"ReactNode exibido na barra de ações quando há linhas selecionadas."}},args:{columns:W,data:D,skeleton:!1,rowsPerPage:5,withCheckbox:!1,textRowsSelected:"itens selecionados"}},N={},V={args:{skeleton:!0,data:[]}},q={args:{data:[],skeleton:!1}},F={render:o=>{const[t,s]=n.useState(""),[r,l]=n.useState(!1),c=D.filter(m=>Object.values(m).some(p=>String(p).toLowerCase().includes(t.toLowerCase()))),u=m=>{l(!0),setTimeout(()=>{s(m),l(!1)},600)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("p",{style:{fontSize:12,color:"#666"},children:["Query atual: ",e.jsxs("strong",{children:['"',t,'"']})," — ",c.length," ","resultado(s)"]}),e.jsx(I,{...o,data:c,skeleton:r,onSearch:u})]})}},B={render:o=>{const[t,s]=n.useState(null),[r,l]=n.useState(!1),c=(()=>{if(!t||t.direction==="default")return D;const p=W[t.columnIndex]?.key;return p?[...D].sort((S,d)=>{const a=String(S[p]),f=String(d[p]);return t.direction==="asc"?a.localeCompare(f):f.localeCompare(a)}):D})(),u=p=>{l(!0),setTimeout(()=>{s(p),l(!1)},400)},m={asc:"crescente",desc:"decrescente",default:"padrão"};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("p",{style:{fontSize:12,color:"#666"},children:t?`Ordenando por coluna ${t.columnIndex} (${W[t.columnIndex]?.label}) — ${m[t.direction]}`:"Clique em um cabeçalho de coluna para ordenar"}),e.jsx(I,{...o,data:c,skeleton:r,onSort:u})]})}},_={render:o=>{const[t,s]=n.useState(""),[r,l]=n.useState(null),[c,u]=n.useState(!1),m=(()=>{let S=D.filter(d=>Object.values(d).some(a=>String(a).toLowerCase().includes(t.toLowerCase())));if(r&&r.direction!=="default"){const d=W[r.columnIndex]?.key;d&&(S=[...S].sort((a,f)=>{const g=String(a[d]),h=String(f[d]);return r.direction==="asc"?g.localeCompare(h):h.localeCompare(g)}))}return S})(),p=S=>{u(!0),setTimeout(()=>{S(),u(!1)},500)};return e.jsx(I,{...o,data:m,skeleton:c,onSearch:S=>p(()=>s(S)),onSort:S=>p(()=>l(S))})}},z={args:{withCheckbox:!0,textRowsSelected:"itens selecionados",headerSelectedChildren:e.jsxs(e.Fragment,{children:[e.jsx(Z,{size:"md",variant:"secondary",onClick:()=>alert("Exportar selecionados"),children:"Exportar"}),e.jsx(Z,{size:"md",variant:"primary",onClick:()=>alert("Excluir selecionados"),children:"Excluir"})]})},render:o=>{const[t,s]=n.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("p",{style:{fontSize:12,color:"#666"},children:["IDs selecionados:"," ",e.jsxs("strong",{children:["[",t.join(", ")||"nenhum","]"]})]}),e.jsx(I,{...o,onSelectedRowsChange:s})]})}},P={args:{rowsPerPage:8}},U={render:()=>{const[o,t]=n.useState(""),[s,r]=n.useState(null),[l,c]=n.useState([]),[u,m]=n.useState(!1),p=n.useRef(null),S=(()=>{let a=D.filter(f=>Object.values(f).some(g=>String(g).toLowerCase().includes(o.toLowerCase())));if(s&&s.direction!=="default"){const f=W[s.columnIndex]?.key;f&&(a=[...a].sort((g,h)=>{const x=String(g[f]),b=String(h[f]);return s.direction==="asc"?x.localeCompare(b):b.localeCompare(x)}))}return a})(),d=a=>{m(!0),setTimeout(()=>{a(),m(!1)},500)};return e.jsxs(e.Fragment,{children:[e.jsx(I,{columns:W,data:S,skeleton:u,rowsPerPage:4,withCheckbox:!0,textRowsSelected:"itens selecionados",onSearch:a=>d(()=>t(a)),onSort:a=>d(()=>r(a)),onSelectedRowsChange:c,onUpdateSelectedRows:a=>{p.current=a},headerSelectedChildren:e.jsxs(e.Fragment,{children:[e.jsx(Z,{size:"md",variant:"secondary",onClick:()=>alert("Exportar"),children:"Exportar"}),e.jsx(Z,{size:"md",variant:"primary",onClick:()=>alert("Excluir"),children:"Excluir"})]})}),l.length>0&&e.jsxs("p",{style:{fontSize:12,color:"#666"},children:["Selecionados: ",e.jsxs("strong",{children:["[",l.join(", "),"]"]})]})]})}},Ve=["Default","Loading","Empty","WithServerSideSearch","WithServerSideSort","WithSearchAndSort","WithCheckboxAndBulkActions","DenseTable","FullExample"];N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:"{}",...N.parameters?.docs?.source},description:{story:`Estado padrão com dados estáticos.\r
Navegue pelas páginas usando os controles de paginação.`,...N.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    skeleton: true,
    data: []
  }
}`,...V.parameters?.docs?.source},description:{story:"Estado de carregamento — exibe linhas skeleton enquanto os dados chegam.",...V.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    skeleton: false
  }
}`,...q.parameters?.docs?.source},description:{story:"Tabela sem dados após busca sem resultados.",...q.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:"Demonstração do `onSearch` server-side.\r\nO componente emite o valor digitado; a filtragem é feita localmente\r\nneste exemplo para simular uma resposta de API.",...F.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:"Demonstração do `onSort` server-side.\r\nO componente emite `{ columnIndex, direction }`;\r\na ordenação é aplicada localmente para simular uma resposta de API.",...B.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:"Busca e sort server-side combinados — o cenário mais comum em produção.",..._.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:"Seleção de linhas habilitada com ações em bulk no header.",...z.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    rowsPerPage: 8
  }
}`,...P.parameters?.docs?.source},description:{story:"Tabela com maior número de linhas por página para visualização densa.",...P.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
    return <>\r
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
\r
        {selectedIds.length > 0 && <p style={{
        fontSize: 12,
        color: "#666"
      }}>\r
            Selecionados: <strong>[{selectedIds.join(", ")}]</strong>\r
          </p>}\r
      </>;
  }
}`,...U.parameters?.docs?.source},description:{story:`Combinação completa: search, sort, checkbox, bulk actions e controle externo.\r
Representa o cenário mais completo de uso em produção.`,...U.parameters?.docs?.description}}};export{N as Default,P as DenseTable,q as Empty,U as FullExample,V as Loading,z as WithCheckboxAndBulkActions,_ as WithSearchAndSort,F as WithServerSideSearch,B as WithServerSideSort,Ve as __namedExportsOrder,Ne as default};
