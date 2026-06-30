import{r as s,j as e}from"./iframe-Cuzq1CpA.js";import{B as L}from"./Button-BQCy7vfT.js";/* empty css               */import{E as Xe}from"./EmptyState-D6oo60c2.js";import{I as Ye}from"./InputSearch-CtcmAoaK.js";import{I as Ze}from"./Icon-C2kFcyns.js";import{S as Q}from"./Skeleton-BVkqHP_m.js";import{C as Ge}from"./Checkbox-C7WNeC0y.js";import{P as et}from"./Pagination-CHItng8m.js";import"./preload-helper-PPVm8Dsz.js";import"./Loading-CnlAraZ4.js";import"./ButtonIcon-g9GE-hSP.js";const tt=({skeleton:o,onSearch:a,rowsSelected:t=0,textRowsSelected:n,children:i})=>{const d=t>0,S=`${t} ${n??""}`.trim(),p=s.useRef(""),m=u=>{p.current=u,u===""&&a("")},c=u=>{u.key==="Enter"&&a(p.current)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`data-table-header-rows-selected ${d?"fade-in":"fade-out"}`,style:{visibility:d?"visible":"hidden",display:d?"":"none"},children:[e.jsx("p",{className:"textRowsSelected",style:{height:"40px",alignItems:"center",display:"flex"},children:S},S),e.jsx("div",{className:"data-table-header-rows-selected-buttons",children:i})]}),e.jsx("div",{className:`data-table-header ${d?"fade-out":"fade-in"}`,style:{visibility:d?"hidden":"visible",display:d?"none":""},children:e.jsx(Ye,{isSkeleton:o,placeholder:"Procurar",onDebouncedChange:m,debounceMs:0,onKeyDown:c})})]})};function at(o){return{asc:"arrow_downward",desc:"arrow_upward",default:"swap_vert"}[o]}const rt=({skeleton:o,headers:a,sortStates:t,columnWidths:n,withCheckbox:i,allSelected:d,someSelected:S,onSort:p,onSelectAll:m})=>e.jsxs("div",{style:{display:"flex",flex:"1"},children:[i&&e.jsx("div",{className:"data-table-body-header-checkbox",children:o?e.jsx(Q,{height:"24px",width:"24px"}):e.jsx(Ge,{indeterminate:S,modelValue:d,onUpdate:m})}),a.map((c,u)=>e.jsx("div",{className:`data-table-row-header ${o?"loading-skeleton":""} ${u===0?"first":""}`,style:{minWidth:n[u]},onClick:()=>p(u),children:o?e.jsx(Q,{height:"24px",width:"80px"}):e.jsxs(e.Fragment,{children:[c,e.jsx(Ze,{icon:at(t[u]),size:"sm"})]})},c))]}),ot=({children:o,skeleton:a,style:t})=>e.jsx("div",{className:"data-table-row-content",style:t,children:a?e.jsx(Q,{height:"24px",width:"80px"}):o});function nt(o,a){return Array.from({length:o},(t,n)=>({id:`skeleton-${n}`,...Object.fromEntries(a.map(i=>[i,Math.random().toString(36).substring(2,8)]))}))}const st=({currentRows:o,selectedRows:a,skeleton:t,onRowSelection:n,columnWidths:i,withCheckbox:d,columnKeys:S})=>{const p=t?nt(5,S):o;return e.jsx("div",{className:"data-table-body-content",style:{flexDirection:"column"},children:p.map((m,c)=>{const u=t?`skeleton-${c}`:m.id;return e.jsx("div",{className:"data-table-body-content-row",children:e.jsxs("div",{style:{display:"flex",flex:"1"},children:[d&&e.jsx("div",{className:"data-table-body-content-checkbox",children:t?e.jsx(Q,{height:"24px",width:"24px"}):e.jsx(Ge,{disabled:t,modelValue:a.includes(u),onUpdate:r=>n(u,r)})}),S.map((r,h)=>e.jsx("div",{className:"data-table-body-content-row",children:e.jsx(ot,{skeleton:t,style:{minWidth:i[h]},children:m[r]})},r))]})},u)})})},lt=({currentPage:o,totalPages:a,disabledLeft:t,disabledRight:n,skeleton:i,onClickLeft:d,onClickRight:S})=>{const p=`Mostrando ${a===0?0:o} de ${a}`;return e.jsx("div",{className:"data-table-footer",children:e.jsx(et,{label:p,variant:"leftLabel",onClickLeft:d,onClickRight:S,disabledLeft:t,disabledRight:n,skeleton:i})})};function it(o,a){const t=s.useCallback(n=>{const i=document.createElement("span");i.textContent=n,document.body.appendChild(i);const d=i.getBoundingClientRect().width;return document.body.removeChild(i),d},[]);return s.useMemo(()=>o.map(n=>{const i=a.map(c=>{var u;return String((u=c[n.key])!==null&&u!==void 0?u:"")}),d=t(n.label),S=Math.max(0,...i.map(t)),p=Math.max(d,S)+50;var m;return Math.max(p,(m=n.minWidth)!==null&&m!==void 0?m:0)}),[o,a,t])}function dt(){const o=s.useRef(null),[a,t]=s.useState(!1);return s.useEffect(()=>{const n=o.current;if(!n)return;const i=()=>{t(n.scrollWidth>n.clientWidth)},d=new ResizeObserver(i);return d.observe(n),i(),()=>d.unobserve(n)},[]),{ref:o,isOverflowed:a}}function ct({data:o,rowsPerPage:a,columns:t,onSelectedRowsChange:n,onUpdateSelectedRows:i,onSort:d,onSearch:S}){const[p,m]=s.useState(1),[c,u]=s.useState(4),[r,h]=s.useState([]),[v,g]=s.useState(()=>new Array(t.length).fill("default")),y=s.useRef(new Map),R=s.useRef(0),k=s.useRef(n);s.useEffect(()=>{k.current=n},[n]);const A=s.useRef(i);s.useEffect(()=>{A.current=i},[i]);const F=o.map(l=>{var f;const x=String((f=l.id)!==null&&f!==void 0?f:JSON.stringify(l));return y.current.has(x)||y.current.set(x,String(R.current++)),{...l,id:y.current.get(x)}});s.useEffect(()=>{u(4),m(1)},[o]);const C=Math.ceil(F.length/a);s.useEffect(()=>{p===c&&c<C&&u(l=>Math.min(l+4,C))},[p,c,C]),s.useEffect(()=>{var l;(l=k.current)===null||l===void 0||l.call(k,r)},[r]),s.useEffect(()=>{var l;(l=A.current)===null||l===void 0||l.call(A,f=>h(f))},[]);const K=s.useCallback(l=>{m(1),S?.(l)},[S]),H=s.useCallback(l=>{g(f=>{const x=[...f],b=x[l],W=["default","asc","desc"],D=W[(W.indexOf(b)+1)%W.length];return x[l]=D,d?.({columnIndex:l,direction:D}),x})},[d]),_=F.slice(0,c*a),J=_.slice((p-1)*a,p*a),U=_.length>0&&_.every(l=>r.includes(l.id)),G=_.some(l=>r.includes(l.id))&&!U,X=s.useCallback(l=>{h(l?_.map(f=>f.id):[])},[_]),$=s.useCallback((l,f)=>{h(x=>f?[...x,l]:x.filter(b=>b!==l))},[]),Y=s.useCallback(()=>{m(l=>Math.max(l-1,1))},[]),Z=s.useCallback(()=>{m(l=>Math.min(l+1,Math.min(C,c)))},[C,c]);return{currentPage:p,currentRows:J,visibleData:_,totalPages:C,loadedPages:c,selectedRows:r,sortStates:v,allSelected:U,someSelected:G,handleSearch:K,handleSort:H,handleSelectAll:X,handleRowSelection:$,handlePageLeft:Y,handlePageRight:Z}}const w=({columns:o,data:a,skeleton:t,rowsPerPage:n=4,withCheckbox:i=!1,headerSelectedChildren:d,textRowsSelected:S,onSelectedRowsChange:p,onUpdateSelectedRows:m,onSort:c,onSearch:u})=>{const{currentPage:r,currentRows:h,totalPages:v,loadedPages:g,selectedRows:y,sortStates:R,allSelected:k,someSelected:A,handleSearch:F,handleSort:C,handleSelectAll:K,handleRowSelection:H,handlePageLeft:_,handlePageRight:J}=ct({data:a,rowsPerPage:n,columns:o,onSelectedRowsChange:p,onUpdateSelectedRows:m,onSort:c,onSearch:u}),U=o.map(b=>b.key),G=o.map(b=>b.label),X=a.map((b,W)=>{var D;return{...b,id:(D=b.id)!==null&&D!==void 0?D:String(W)}}),$=it(o,X),{ref:Y,isOverflowed:Z}=dt(),l=t&&a.length===0,f=t&&a.length>0,x=h.length===0&&!t;return e.jsxs("div",{className:"data-table",children:[e.jsx(tt,{skeleton:l,onSearch:F,rowsSelected:y.length,textRowsSelected:S,children:d}),e.jsxs("div",{ref:Y,className:`data-table-body ${Z?"overflowed":""}`,style:{height:n*56.8+41.6,opacity:f?.5:1,pointerEvents:f?"none":void 0,transition:"opacity 0.15s ease"},children:[e.jsx("div",{className:"data-table-body-header",children:e.jsx(rt,{skeleton:l,headers:G,sortStates:R,columnWidths:$,withCheckbox:i,allSelected:k,someSelected:A,onSort:C,onSelectAll:K})}),x?e.jsx("div",{className:"data-table-body-empty",children:e.jsx(Xe,{title:"Nenhum resultado encontrado",description:"Tente ajustar os termos de pesquisa para encontrar o que procura.",icon:"search_off"})}):e.jsx(st,{withCheckbox:i,columnWidths:$,columnKeys:U,currentRows:h,selectedRows:y,skeleton:l,onRowSelection:H})]}),e.jsx(lt,{currentPage:r,totalPages:v,skeleton:l,onClickLeft:_,onClickRight:J,disabledLeft:r===1||h.length===0,disabledRight:r===Math.min(v,g)||h.length===0})]})};w.displayName="DataTable";var ee,te,ae,re,oe,ne,se,le,ie,de,ce,ue,me,pe,Se,he,ve,fe,ge,xe,ye,be,_e,ke,Ce,Le,we,je,Re,De,Ee,Ae,We,Ie,Te,Oe,Pe,Be,ze,Ne,Ve,Me,qe,Fe,Ue,$e,Qe,Ke,He,Je;const E=[{key:"name",label:"Nome",minWidth:160},{key:"email",label:"E-mail",minWidth:220},{key:"role",label:"Cargo",minWidth:140},{key:"department",label:"Área",minWidth:140},{key:"status",label:"Status",minWidth:100}],j=[{name:"Ana Souza",email:"ana@empresa.com",role:"Engenheira",department:"Produto",status:"Ativo"},{name:"Bruno Lima",email:"bruno@empresa.com",role:"Designer",department:"Design",status:"Ativo"},{name:"Carla Mendes",email:"carla@empresa.com",role:"PO",department:"Produto",status:"Inativo"},{name:"Diego Faria",email:"diego@empresa.com",role:"Engenheiro",department:"Plataforma",status:"Ativo"},{name:"Elena Castro",email:"elena@empresa.com",role:"Data Scientist",department:"Dados",status:"Ativo"},{name:"Felipe Rocha",email:"felipe@empresa.com",role:"SRE",department:"Plataforma",status:"Inativo"},{name:"Gabi Torres",email:"gabi@empresa.com",role:"UX Writer",department:"Design",status:"Ativo"},{name:"Hugo Martins",email:"hugo@empresa.com",role:"Engenheiro",department:"Backend",status:"Ativo"},{name:"Íris Nunes",email:"iris@empresa.com",role:"QA",department:"Qualidade",status:"Ativo"},{name:"João Pires",email:"joao@empresa.com",role:"DevOps",department:"Plataforma",status:"Inativo"},{name:"Karen Alves",email:"karen@empresa.com",role:"Engenheira",department:"Frontend",status:"Ativo"},{name:"Lucas Barros",email:"lucas@empresa.com",role:"Product Analyst",department:"Produto",status:"Ativo"}],kt={title:"Components/DataTable",component:w,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
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
        `}}},argTypes:{columns:{control:!1,description:"Definição das colunas. Cada item possui `key` (campo no objeto de dados), `label` (cabeçalho) e `minWidth` opcional."},data:{control:!1,description:"Array de objetos com campos correspondentes às `key`s das colunas."},skeleton:{control:"boolean",description:"Exibe o estado de carregamento skeleton."},rowsPerPage:{control:{type:"number",min:1,max:20},description:"Número de linhas por página."},withCheckbox:{control:"boolean",description:"Exibe checkboxes para seleção de linhas."},textRowsSelected:{control:"text",description:"Sufixo do contador de linhas selecionadas."},onSearch:{control:!1,description:"Callback disparado ao digitar na busca. A filtragem é responsabilidade do consumidor."},onSort:{control:!1,description:"Callback disparado ao clicar em um cabeçalho de coluna. A ordenação é responsabilidade do consumidor."},onSelectedRowsChange:{control:!1,description:"Callback disparado quando a seleção de linhas muda."},onUpdateSelectedRows:{control:!1,description:"Expõe uma função para atualizar a seleção externamente."},headerSelectedChildren:{control:!1,description:"ReactNode exibido na barra de ações quando há linhas selecionadas."}},args:{columns:E,data:j,skeleton:!1,rowsPerPage:4,withCheckbox:!1,textRowsSelected:"itens selecionados"}},I={},T={args:{skeleton:!0,data:[]}},O={args:{data:[],skeleton:!1}},P={render:o=>{const[a,t]=s.useState(""),[n,i]=s.useState(!1),d=j.filter(p=>Object.values(p).some(m=>String(m).toLowerCase().includes(a.toLowerCase()))),S=p=>{i(!0),setTimeout(()=>{t(p),i(!1)},600)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("p",{style:{fontSize:12,color:"#666"},children:["Query atual: ",e.jsxs("strong",{children:['"',a,'"']})," — ",d.length," ","resultado(s)"]}),e.jsx(w,{...o,data:d,skeleton:n,onSearch:S})]})}},B={render:o=>{var a;const[t,n]=s.useState(null),[i,d]=s.useState(!1),S=(()=>{var c;if(!t||t.direction==="default")return j;const u=(c=E[t.columnIndex])===null||c===void 0?void 0:c.key;return u?[...j].sort((r,h)=>{const v=String(r[u]),g=String(h[u]);return t.direction==="asc"?v.localeCompare(g):g.localeCompare(v)}):j})(),p=c=>{d(!0),setTimeout(()=>{n(c),d(!1)},400)},m={asc:"crescente",desc:"decrescente",default:"padrão"};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("p",{style:{fontSize:12,color:"#666"},children:t?`Ordenando por coluna ${t.columnIndex} (${(a=E[t.columnIndex])===null||a===void 0?void 0:a.label}) — ${m[t.direction]}`:"Clique em um cabeçalho de coluna para ordenar"}),e.jsx(w,{...o,data:S,skeleton:i,onSort:p})]})}},z={render:o=>{const[a,t]=s.useState(""),[n,i]=s.useState(null),[d,S]=s.useState(!1),p=(()=>{let c=j.filter(r=>Object.values(r).some(h=>String(h).toLowerCase().includes(a.toLowerCase())));if(n&&n.direction!=="default"){var u;const r=(u=E[n.columnIndex])===null||u===void 0?void 0:u.key;r&&(c=[...c].sort((h,v)=>{const g=String(h[r]),y=String(v[r]);return n.direction==="asc"?g.localeCompare(y):y.localeCompare(g)}))}return c})(),m=c=>{S(!0),setTimeout(()=>{c(),S(!1)},500)};return e.jsx(w,{...o,data:p,skeleton:d,onSearch:c=>m(()=>t(c)),onSort:c=>m(()=>i(c))})}},N={args:{withCheckbox:!0,textRowsSelected:"itens selecionados",headerSelectedChildren:e.jsxs(e.Fragment,{children:[e.jsx(L,{size:"md",variant:"secondary",onClick:()=>alert("Exportar selecionados"),children:"Exportar"}),e.jsx(L,{size:"md",variant:"primary",onClick:()=>alert("Excluir selecionados"),children:"Excluir"})]})},render:o=>{const[a,t]=s.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("p",{style:{fontSize:12,color:"#666"},children:["IDs selecionados:"," ",e.jsxs("strong",{children:["[",a.join(", ")||"nenhum","]"]})]}),e.jsx(w,{...o,onSelectedRowsChange:t})]})}},V={args:{withCheckbox:!0,textRowsSelected:"itens selecionados"},render:o=>{const a=s.useRef(null);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(L,{size:"md",variant:"secondary",onClick:()=>{var t;return(t=a.current)===null||t===void 0?void 0:t.call(a,["0","1","2"])},children:"Selecionar primeiros 3"}),e.jsx(L,{size:"md",variant:"secondary",onClick:()=>{var t;return(t=a.current)===null||t===void 0?void 0:t.call(a,[])},children:"Limpar seleção"})]}),e.jsx(w,{...o,onUpdateSelectedRows:t=>{a.current=t}})]})}},M={args:{rowsPerPage:8}},q={render:()=>{const[o,a]=s.useState(""),[t,n]=s.useState(null),[i,d]=s.useState([]),[S,p]=s.useState(!1),m=s.useRef(null),c=(()=>{let r=j.filter(v=>Object.values(v).some(g=>String(g).toLowerCase().includes(o.toLowerCase())));if(t&&t.direction!=="default"){var h;const v=(h=E[t.columnIndex])===null||h===void 0?void 0:h.key;v&&(r=[...r].sort((g,y)=>{const R=String(g[v]),k=String(y[v]);return t.direction==="asc"?R.localeCompare(k):k.localeCompare(R)}))}return r})(),u=r=>{p(!0),setTimeout(()=>{r(),p(!1)},500)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(L,{size:"md",variant:"secondary",onClick:()=>{var r;return(r=m.current)===null||r===void 0?void 0:r.call(m,[])},children:"Limpar seleção"}),e.jsx(L,{size:"md",variant:"secondary",onClick:()=>{var r;return(r=m.current)===null||r===void 0?void 0:r.call(m,["0","1","2","3"])},children:"Selecionar primeiros 4"})]}),i.length>0&&e.jsxs("p",{style:{fontSize:12,color:"#666"},children:["Selecionados: ",e.jsxs("strong",{children:["[",i.join(", "),"]"]})]}),e.jsx(w,{columns:E,data:c,skeleton:S,rowsPerPage:4,withCheckbox:!0,textRowsSelected:"itens selecionados",onSearch:r=>u(()=>a(r)),onSort:r=>u(()=>n(r)),onSelectedRowsChange:d,onUpdateSelectedRows:r=>{m.current=r},headerSelectedChildren:e.jsxs(e.Fragment,{children:[e.jsx(L,{size:"md",variant:"secondary",onClick:()=>alert("Exportar"),children:"Exportar"}),e.jsx(L,{size:"md",variant:"primary",onClick:()=>alert("Excluir"),children:"Excluir"})]})})]})}};I.parameters={...I.parameters,docs:{...(ee=I.parameters)===null||ee===void 0?void 0:ee.docs,source:{originalSource:"{}",...(ae=I.parameters)===null||ae===void 0||(te=ae.docs)===null||te===void 0?void 0:te.source},description:{story:`Estado padrão com dados estáticos.\r
Navegue pelas páginas usando os controles de paginação.`,...(oe=I.parameters)===null||oe===void 0||(re=oe.docs)===null||re===void 0?void 0:re.description}}};T.parameters={...T.parameters,docs:{...(ne=T.parameters)===null||ne===void 0?void 0:ne.docs,source:{originalSource:`{
  args: {
    skeleton: true,
    data: []
  }
}`,...(le=T.parameters)===null||le===void 0||(se=le.docs)===null||se===void 0?void 0:se.source},description:{story:"Estado de carregamento — exibe linhas skeleton enquanto os dados chegam.",...(de=T.parameters)===null||de===void 0||(ie=de.docs)===null||ie===void 0?void 0:ie.description}}};O.parameters={...O.parameters,docs:{...(ce=O.parameters)===null||ce===void 0?void 0:ce.docs,source:{originalSource:`{
  args: {
    data: [],
    skeleton: false
  }
}`,...(me=O.parameters)===null||me===void 0||(ue=me.docs)===null||ue===void 0?void 0:ue.source},description:{story:"Tabela sem dados após busca sem resultados.",...(Se=O.parameters)===null||Se===void 0||(pe=Se.docs)===null||pe===void 0?void 0:pe.description}}};P.parameters={...P.parameters,docs:{...(he=P.parameters)===null||he===void 0?void 0:he.docs,source:{originalSource:`{
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
}`,...(fe=P.parameters)===null||fe===void 0||(ve=fe.docs)===null||ve===void 0?void 0:ve.source},description:{story:"Demonstração do `onSearch` server-side.\r\nO componente emite o valor digitado; a filtragem é feita localmente\r\nneste exemplo para simular uma resposta de API.",...(xe=P.parameters)===null||xe===void 0||(ge=xe.docs)===null||ge===void 0?void 0:ge.description}}};B.parameters={...B.parameters,docs:{...(ye=B.parameters)===null||ye===void 0?void 0:ye.docs,source:{originalSource:`{
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
}`,...(_e=B.parameters)===null||_e===void 0||(be=_e.docs)===null||be===void 0?void 0:be.source},description:{story:"Demonstração do `onSort` server-side.\r\nO componente emite `{ columnIndex, direction }`;\r\na ordenação é aplicada localmente para simular uma resposta de API.",...(Ce=B.parameters)===null||Ce===void 0||(ke=Ce.docs)===null||ke===void 0?void 0:ke.description}}};z.parameters={...z.parameters,docs:{...(Le=z.parameters)===null||Le===void 0?void 0:Le.docs,source:{originalSource:`{
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
}`,...(je=z.parameters)===null||je===void 0||(we=je.docs)===null||we===void 0?void 0:we.source},description:{story:"Busca e sort server-side combinados — o cenário mais comum em produção.",...(De=z.parameters)===null||De===void 0||(Re=De.docs)===null||Re===void 0?void 0:Re.description}}};N.parameters={...N.parameters,docs:{...(Ee=N.parameters)===null||Ee===void 0?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(We=N.parameters)===null||We===void 0||(Ae=We.docs)===null||Ae===void 0?void 0:Ae.source},description:{story:"Seleção de linhas habilitada com ações em bulk no header.",...(Te=N.parameters)===null||Te===void 0||(Ie=Te.docs)===null||Ie===void 0?void 0:Ie.description}}};V.parameters={...V.parameters,docs:{...(Oe=V.parameters)===null||Oe===void 0?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Be=V.parameters)===null||Be===void 0||(Pe=Be.docs)===null||Pe===void 0?void 0:Pe.source},description:{story:"Controle externo da seleção via `onUpdateSelectedRows`.\r\nÚtil para selecionar linhas programaticamente (ex: após uma ação de API).",...(Ne=V.parameters)===null||Ne===void 0||(ze=Ne.docs)===null||ze===void 0?void 0:ze.description}}};M.parameters={...M.parameters,docs:{...(Ve=M.parameters)===null||Ve===void 0?void 0:Ve.docs,source:{originalSource:`{
  args: {
    rowsPerPage: 8
  }
}`,...(qe=M.parameters)===null||qe===void 0||(Me=qe.docs)===null||Me===void 0?void 0:Me.source},description:{story:"Tabela com maior número de linhas por página para visualização densa.",...(Ue=M.parameters)===null||Ue===void 0||(Fe=Ue.docs)===null||Fe===void 0?void 0:Fe.description}}};q.parameters={...q.parameters,docs:{...($e=q.parameters)===null||$e===void 0?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ke=q.parameters)===null||Ke===void 0||(Qe=Ke.docs)===null||Qe===void 0?void 0:Qe.source},description:{story:`Combinação completa: search, sort, checkbox, bulk actions e controle externo.\r
Representa o cenário mais completo de uso em produção.`,...(Je=q.parameters)===null||Je===void 0||(He=Je.docs)===null||He===void 0?void 0:He.description}}};const Ct=["Default","Loading","Empty","WithServerSideSearch","WithServerSideSort","WithSearchAndSort","WithCheckboxAndBulkActions","WithExternalSelectionControl","DenseTable","FullExample"];export{I as Default,M as DenseTable,O as Empty,q as FullExample,T as Loading,N as WithCheckboxAndBulkActions,V as WithExternalSelectionControl,z as WithSearchAndSort,P as WithServerSideSearch,B as WithServerSideSort,Ct as __namedExportsOrder,kt as default};
