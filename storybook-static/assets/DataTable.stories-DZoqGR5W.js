import{r as o,j as e}from"./iframe-CxNvl9BI.js";/* empty css               */import{E as ie}from"./EmptyState-BNi8ZFZX.js";import{I as ce}from"./InputSearch-C9eVKi4A.js";import{I as de}from"./Icon-Bqm0CoJD.js";import{S as G}from"./Skeleton-C80QNm7w.js";import{C as le}from"./Checkbox-COOKxrr6.js";import{P as ue}from"./Pagination-Be75J3lb.js";import{B as me}from"./Badge-KKabPQMN.js";import{B as X}from"./Button-CH6qqEEx.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonIcon-BvrW2_xY.js";import"./Loading-DhvOqAup.js";const pe=({skeleton:s,onSearch:a,rowsSelected:n=0,textRowsSelected:r,children:l})=>{const d=n>0,u=`${n} ${r??""}`.trim(),m=o.useRef(""),p=i=>{m.current=i,i===""&&a("")},S=i=>{i.key==="Enter"&&a(m.current)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`data-table-header-rows-selected ${d?"fade-in":"fade-out"}`,style:{visibility:d?"visible":"hidden",display:d?"":"none"},children:[e.jsx("p",{className:"textRowsSelected",style:{height:"40px",alignItems:"center",display:"flex"},children:u},u),e.jsx("div",{className:"data-table-header-rows-selected-buttons",children:l})]}),e.jsx("div",{className:`data-table-header ${d?"fade-out":"fade-in"}`,style:{visibility:d?"hidden":"visible",display:d?"none":""},children:e.jsx(ce,{isSkeleton:s,placeholder:"Procurar",onDebouncedChange:p,debounceMs:0,onKeyDown:S})})]})};function Se(s){return{asc:"arrow_downward",desc:"arrow_upward",default:"swap_vert"}[s]}const he=({skeleton:s,headers:a,sortStates:n,columnWidths:r,withCheckbox:l,allSelected:d,someSelected:u,onSort:m,onSelectAll:p,sortable:S})=>e.jsxs("div",{style:{display:"flex",flex:"1"},children:[l&&e.jsx("div",{className:"data-table-body-header-checkbox",children:s?e.jsx(G,{height:"24px",width:"24px"}):e.jsx(le,{indeterminate:u,modelValue:d,onUpdate:p})}),a.map((i,t)=>{const f=["data-table-row-header",s&&"loading-skeleton",t===0&&"first",t===a.length-1&&"last",!S&&"no-sort"].filter(Boolean).join(" ");return e.jsx("div",{className:f,style:{minWidth:r[t]},onClick:()=>m(t),children:s?e.jsx(G,{height:"24px",width:"80px"}):e.jsxs(e.Fragment,{children:[i,e.jsx(de,{icon:Se(n[t]),size:"sm"})]})},i)})]}),fe=({children:s,skeleton:a,style:n})=>e.jsx("div",{className:"data-table-row-content",style:n,children:a?e.jsx(G,{height:"24px",width:"80px"}):s});function xe(s,a){return Array.from({length:s},(n,r)=>({id:`skeleton-${r}`,...Object.fromEntries(a.map(l=>[l,Math.random().toString(36).substring(2,8)]))}))}const ge=({currentRows:s,selectedRows:a,skeleton:n,onRowSelection:r,columnWidths:l,withCheckbox:d,columnKeys:u,rowHeight:m,onRowHeightChange:p})=>{const S=n?xe(5,u):s,i=o.useRef(null);return o.useEffect(()=>{if(i.current){const t=i.current.clientHeight;t>0&&t!==m&&p(t)}},[S.length,n]),e.jsx("div",{className:"data-table-body-content",style:{flexDirection:"column"},children:S.map((t,f)=>{const x=n?`skeleton-${f}`:t.id;return e.jsx("div",{className:"data-table-body-content-row",ref:f===0?i:void 0,children:e.jsxs("div",{style:{display:"flex",flex:"1"},children:[d&&e.jsx("div",{className:"data-table-body-content-checkbox",children:n?e.jsx(G,{height:"24px",width:"24px"}):e.jsx(le,{disabled:n,modelValue:a.includes(x),onUpdate:h=>r(x,h)})}),u.map((h,y)=>e.jsx("div",{className:"data-table-body-content-row",children:e.jsx(fe,{skeleton:n,style:{minWidth:l[y]},children:t[h]})},h))]})},x)})})},be=({currentPage:s,totalPages:a,disabledLeft:n,disabledRight:r,skeleton:l,onClickLeft:d,onClickRight:u})=>{const m=`Mostrando ${a===0?0:s} de ${a}`;return e.jsx("div",{className:"data-table-footer",children:e.jsx(ue,{label:m,variant:"leftLabel",onClickLeft:d,onClickRight:u,disabledLeft:n,disabledRight:r,skeleton:l})})};function ye(s,a){const n=o.useCallback(r=>{const l=document.createElement("span");l.textContent=r,document.body.appendChild(l);const d=l.getBoundingClientRect().width;return document.body.removeChild(l),d},[]);return o.useMemo(()=>s.map(r=>{const l=a.map(p=>String(p[r.key]??"")),d=n(r.label),u=Math.max(0,...l.map(n)),m=Math.max(d,u)+50;return Math.max(m,r.minWidth??0)}),[s,a,n])}function ve(){const s=o.useRef(null),[a,n]=o.useState(!1);return o.useEffect(()=>{const r=s.current;if(!r)return;const l=()=>{n(r.scrollWidth>r.clientWidth)},d=new ResizeObserver(l);return d.observe(r),l(),()=>d.unobserve(r)},[]),{ref:s,isOverflowed:a}}function ke({data:s,rowsPerPage:a,columns:n,skeleton:r,onSelectedRowsChange:l,onUpdateSelectedRows:d,onSort:u,onSearch:m,page:p,totalItems:S,onPageChange:i}){const t=p!==void 0&&S!==void 0&&i!==void 0,[f,x]=o.useState(1),[h,y]=o.useState(4),[v,D]=o.useState([]),[Y,U]=o.useState(()=>new Array(n.length).fill("default")),Z=!!u,O=o.useRef(new Map),ee=o.useRef(0),$=o.useRef(l);o.useEffect(()=>{$.current=l},[l]);const Q=o.useRef(d);o.useEffect(()=>{Q.current=d},[d]);const C=t?p:f,I=s.map((c,E)=>{if(c.id!==void 0&&c.id!==null)return{...c,id:String(c.id)};const g=JSON.stringify(c);return O.current.has(g)||O.current.set(g,`__synthetic-${ee.current++}`),{...c,id:O.current.get(g)}});o.useEffect(()=>{t||(y(4),x(1)),!r&&D(c=>{const E=new Set(I.map(b=>b.id)),g=c.filter(b=>E.has(b));return g.length===c.length?c:g})},[s,r,t]);const w=t?Math.max(1,Math.ceil((S??0)/a)):Math.ceil(I.length/a);o.useEffect(()=>{t||C===h&&h<w&&y(c=>Math.min(c+4,w))},[C,h,w,t]),o.useEffect(()=>{$.current?.(v)},[v]),o.useEffect(()=>{Q.current?.(c=>D(c))},[]);const te=o.useCallback(c=>{t?i?.(1):x(1),m?.(c)},[m,t,i]),ae=o.useCallback(c=>{U(E=>{const g=[...E],b=g[c],W=["default","asc","desc"],re=W[(W.indexOf(b)+1)%W.length];return g[c]=re,u?.({columnIndex:c,direction:re}),g}),t?i?.(1):x(1)},[u,t,i]),L=t?I:I.slice(0,h*a),se=t?L:L.slice((C-1)*a,C*a),H=L.length>0&&L.every(c=>v.includes(c.id)),K=L.some(c=>v.includes(c.id))&&!H,ne=o.useCallback(c=>{D(c?L.map(E=>E.id):[])},[L]),oe=o.useCallback((c,E)=>{D(g=>E?[...g,c]:g.filter(b=>b!==c))},[]),A=o.useCallback(()=>{t?i?.(Math.max(C-1,1)):x(c=>Math.max(c-1,1))},[t,i,C]),J=o.useCallback(()=>{t?i?.(Math.min(C+1,w)):x(c=>Math.min(c+1,Math.min(w,h)))},[t,i,C,w,h]);return{currentPage:C,currentRows:se,visibleData:L,totalPages:w,loadedPages:h,isControlled:t,selectedRows:v,sortStates:Y,allSelected:H,someSelected:K,handleSearch:te,handleSort:ae,handleSelectAll:ne,handleRowSelection:oe,handlePageLeft:A,handlePageRight:J,sortable:Z}}const R=({columns:s,data:a,skeleton:n,rowsPerPage:r=4,withCheckbox:l=!1,headerSelectedChildren:d,textRowsSelected:u,onSelectedRowsChange:m,onUpdateSelectedRows:p,onSort:S,onSearch:i,page:t,totalItems:f,onPageChange:x})=>{const{currentPage:h,currentRows:y,totalPages:v,loadedPages:D,isControlled:Y,selectedRows:U,sortStates:Z,allSelected:O,someSelected:ee,handleSearch:$,handleSort:Q,handleSelectAll:C,handleRowSelection:I,handlePageLeft:w,handlePageRight:te,sortable:ae}=ke({data:a,rowsPerPage:r,columns:s,skeleton:n,onSelectedRowsChange:m,onUpdateSelectedRows:p,onSort:S,onSearch:i,page:t,totalItems:f,onPageChange:x}),L=s.map(b=>b.key),se=s.map(b=>b.label),H=a.map((b,W)=>({...b,id:b.id??String(W)})),K=ye(s,H),{ref:ne,isOverflowed:oe}=ve(),A=n&&a.length===0,J=n&&a.length>0,c=y.length===0&&!n,[E,g]=o.useState(0);return e.jsxs("div",{className:"data-table",children:[i?e.jsx(pe,{skeleton:A,onSearch:$,rowsSelected:U.length,textRowsSelected:u,children:d}):null,e.jsxs("div",{ref:ne,className:`data-table-body ${oe?"overflowed":""}`,style:{height:r*E+41.6,opacity:J?.5:1,pointerEvents:J?"none":void 0,transition:"opacity 0.15s ease"},children:[e.jsx("div",{className:"data-table-body-header",children:e.jsx(he,{skeleton:A,headers:se,sortStates:Z,columnWidths:K,withCheckbox:l,allSelected:O,someSelected:ee,onSort:Q,onSelectAll:C,sortable:ae})}),c?e.jsx("div",{className:"data-table-body-empty",children:e.jsx(ie,{title:"Nenhum resultado encontrado",description:"Tente ajustar os termos de pesquisa para encontrar o que procura.",icon:"search_off"})}):e.jsx(ge,{withCheckbox:l,columnWidths:K,columnKeys:L,currentRows:y,selectedRows:U,skeleton:A,onRowSelection:I,rowHeight:E,onRowHeightChange:g})]}),e.jsx(be,{currentPage:h,totalPages:v,skeleton:A,onClickLeft:w,onClickRight:te,disabledLeft:h===1||y.length===0,disabledRight:Y?h===v||y.length===0:h===Math.min(v,D)||y.length===0})]})};R.displayName="DataTable";const T=[{key:"name",label:"Nome",minWidth:160},{key:"email",label:"E-mail",minWidth:220},{key:"role",label:"Cargo",minWidth:140},{key:"department",label:"Área",minWidth:140},{key:"status",label:"Status",minWidth:100}],k=s=>e.jsx(me,{label:s,type:"light",variant:s==="Ativo"?"primary":"default"}),j=[{name:"Ana Souza",email:"ana@empresa.com",role:"Engenheira",department:"Produto",status:k("Ativo")},{name:"Bruno Lima",email:"bruno@empresa.com",role:"Designer",department:"Design",status:k("Ativo")},{name:"Carla Mendes",email:"carla@empresa.com",role:"PO",department:"Produto",status:k("Inativo")},{name:"Diego Faria",email:"diego@empresa.com",role:"Engenheiro",department:"Plataforma",status:k("Ativo")},{name:"Elena Castro",email:"elena@empresa.com",role:"Data Scientist",department:"Dados",status:k("Ativo")},{name:"Felipe Rocha",email:"felipe@empresa.com",role:"SRE",department:"Plataforma",status:k("Inativo")},{name:"Gabi Torres",email:"gabi@empresa.com",role:"UX Writer",department:"Design",status:k("Ativo")},{name:"Hugo Martins",email:"hugo@empresa.com",role:"Engenheiro",department:"Backend",status:k("Ativo")},{name:"Íris Nunes",email:"iris@empresa.com",role:"QA",department:"Qualidade",status:k("Ativo")},{name:"João Pires",email:"joao@empresa.com",role:"DevOps",department:"Plataforma",status:k("Inativo")},{name:"Karen Alves",email:"karen@empresa.com",role:"Engenheira",department:"Frontend",status:k("Ativo")},{name:"Lucas Barros",email:"lucas@empresa.com",role:"Product Analyst",department:"Produto",status:k("Ativo")}],Ne={title:"Components/DataTable",component:R,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
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
        `}}},argTypes:{columns:{control:!1,description:"Definição das colunas. Cada item possui `key` (campo no objeto de dados), `label` (cabeçalho) e `minWidth` opcional."},data:{control:!1,description:"Array de objetos com campos correspondentes às `key`s das colunas."},skeleton:{control:"boolean",description:"Exibe o estado de carregamento skeleton."},rowsPerPage:{control:{type:"number",min:1,max:20},description:"Número de linhas por página."},withCheckbox:{control:"boolean",description:"Exibe checkboxes para seleção de linhas."},textRowsSelected:{control:"text",description:"Sufixo do contador de linhas selecionadas."},onSearch:{control:!1,description:"Callback disparado ao digitar na busca. A filtragem é responsabilidade do consumidor."},onSort:{control:!1,description:"Callback disparado ao clicar em um cabeçalho de coluna. A ordenação é responsabilidade do consumidor."},onSelectedRowsChange:{control:!1,description:"Callback disparado quando a seleção de linhas muda."},onUpdateSelectedRows:{control:!1,description:"Expõe uma função para atualizar a seleção externamente."},headerSelectedChildren:{control:!1,description:"ReactNode exibido na barra de ações quando há linhas selecionadas."}},args:{columns:T,data:j,skeleton:!1,rowsPerPage:5,withCheckbox:!1,textRowsSelected:"itens selecionados"}},M={},N={args:{skeleton:!0,data:[]}},V={args:{data:[],skeleton:!1}},q={render:s=>{const[a,n]=o.useState(""),[r,l]=o.useState(!1),d=j.filter(m=>Object.values(m).some(p=>String(p).toLowerCase().includes(a.toLowerCase()))),u=m=>{l(!0),setTimeout(()=>{n(m),l(!1)},600)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("p",{style:{fontSize:12,color:"#666"},children:["Query atual: ",e.jsxs("strong",{children:['"',a,'"']})," — ",d.length," ","resultado(s)"]}),e.jsx(R,{...s,data:d,skeleton:r,onSearch:u})]})}},B={render:s=>{const[a,n]=o.useState(null),[r,l]=o.useState(!1),d=(()=>{if(!a||a.direction==="default")return j;const p=T[a.columnIndex]?.key;return p?[...j].sort((S,i)=>{const t=String(S[p]),f=String(i[p]);return a.direction==="asc"?t.localeCompare(f):f.localeCompare(t)}):j})(),u=p=>{l(!0),setTimeout(()=>{n(p),l(!1)},400)},m={asc:"crescente",desc:"decrescente",default:"padrão"};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("p",{style:{fontSize:12,color:"#666"},children:a?`Ordenando por coluna ${a.columnIndex} (${T[a.columnIndex]?.label}) — ${m[a.direction]}`:"Clique em um cabeçalho de coluna para ordenar"}),e.jsx(R,{...s,data:d,skeleton:r,onSort:u})]})}},_={render:s=>{const[a,n]=o.useState(""),[r,l]=o.useState(null),[d,u]=o.useState(!1),m=(()=>{let S=j.filter(i=>Object.values(i).some(t=>String(t).toLowerCase().includes(a.toLowerCase())));if(r&&r.direction!=="default"){const i=T[r.columnIndex]?.key;i&&(S=[...S].sort((t,f)=>{const x=String(t[i]),h=String(f[i]);return r.direction==="asc"?x.localeCompare(h):h.localeCompare(x)}))}return S})(),p=S=>{u(!0),setTimeout(()=>{S(),u(!1)},500)};return e.jsx(R,{...s,data:m,skeleton:d,onSearch:S=>p(()=>n(S)),onSort:S=>p(()=>l(S))})}},z={args:{withCheckbox:!0,textRowsSelected:"itens selecionados",headerSelectedChildren:e.jsxs(e.Fragment,{children:[e.jsx(X,{size:"md",variant:"secondary",onClick:()=>alert("Exportar selecionados"),children:"Exportar"}),e.jsx(X,{size:"md",variant:"primary",onClick:()=>alert("Excluir selecionados"),children:"Excluir"})]})},render:s=>{const[a,n]=o.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("p",{style:{fontSize:12,color:"#666"},children:["IDs selecionados:"," ",e.jsxs("strong",{children:["[",a.join(", ")||"nenhum","]"]})]}),e.jsx(R,{...s,onSelectedRowsChange:n})]})}},P={args:{rowsPerPage:8}},F={render:()=>{const[s,a]=o.useState(""),[n,r]=o.useState(null),[l,d]=o.useState([]),[u,m]=o.useState(!1),p=o.useRef(null),S=(()=>{let t=j.filter(f=>Object.values(f).some(x=>String(x).toLowerCase().includes(s.toLowerCase())));if(n&&n.direction!=="default"){const f=T[n.columnIndex]?.key;f&&(t=[...t].sort((x,h)=>{const y=String(x[f]),v=String(h[f]);return n.direction==="asc"?y.localeCompare(v):v.localeCompare(y)}))}return t})(),i=t=>{m(!0),setTimeout(()=>{t(),m(!1)},500)};return e.jsxs(e.Fragment,{children:[e.jsx(R,{columns:T,data:S,skeleton:u,rowsPerPage:4,withCheckbox:!0,textRowsSelected:"itens selecionados",onSearch:t=>i(()=>a(t)),onSort:t=>i(()=>r(t)),onSelectedRowsChange:d,onUpdateSelectedRows:t=>{p.current=t},headerSelectedChildren:e.jsxs(e.Fragment,{children:[e.jsx(X,{size:"md",variant:"secondary",onClick:()=>alert("Exportar"),children:"Exportar"}),e.jsx(X,{size:"md",variant:"primary",onClick:()=>alert("Excluir"),children:"Excluir"})]})}),l.length>0&&e.jsxs("p",{style:{fontSize:12,color:"#666"},children:["Selecionados: ",e.jsxs("strong",{children:["[",l.join(", "),"]"]})]})]})}},Ve=["Default","Loading","Empty","WithServerSideSearch","WithServerSideSort","WithSearchAndSort","WithCheckboxAndBulkActions","DenseTable","FullExample"];M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:"{}",...M.parameters?.docs?.source},description:{story:`Estado padrão com dados estáticos.\r
Navegue pelas páginas usando os controles de paginação.`,...M.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    skeleton: true,
    data: []
  }
}`,...N.parameters?.docs?.source},description:{story:"Estado de carregamento — exibe linhas skeleton enquanto os dados chegam.",...N.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    skeleton: false
  }
}`,...V.parameters?.docs?.source},description:{story:"Tabela sem dados após busca sem resultados.",...V.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:"Demonstração do `onSearch` server-side.\r\nO componente emite o valor digitado; a filtragem é feita localmente\r\nneste exemplo para simular uma resposta de API.",...q.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:"Tabela com maior número de linhas por página para visualização densa.",...P.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`Combinação completa: search, sort, checkbox, bulk actions e controle externo.\r
Representa o cenário mais completo de uso em produção.`,...F.parameters?.docs?.description}}};export{M as Default,P as DenseTable,V as Empty,F as FullExample,N as Loading,z as WithCheckboxAndBulkActions,_ as WithSearchAndSort,q as WithServerSideSearch,B as WithServerSideSort,Ve as __namedExportsOrder,Ne as default};
