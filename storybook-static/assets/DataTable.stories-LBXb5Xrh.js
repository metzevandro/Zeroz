import{r as s,j as e}from"./iframe-DFdk80Qn.js";import{B as L}from"./Button-y_xm8ZSK.js";/* empty css               */import{E as Ye}from"./EmptyState-BP8GPbJi.js";import{I as Ze}from"./InputSearch-DMfwXPo9.js";import{I as et}from"./Icon-C_kNoyVv.js";import{S as K}from"./Skeleton-bEV42asx.js";import{C as Xe}from"./Checkbox-9a3Pao5O.js";import{P as tt}from"./Pagination-8IWugiQG.js";import"./preload-helper-PPVm8Dsz.js";import"./Loading-DYHQTa0l.js";import"./ButtonIcon-B5f9TZ0r.js";const at=({skeleton:n,onSearch:a,rowsSelected:t=0,textRowsSelected:o,children:d})=>{const c=t>0,S=`${t} ${o??""}`.trim(),p=s.useRef(""),m=i=>{p.current=i,i===""&&a("")},u=i=>{i.key==="Enter"&&a(p.current)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`data-table-header-rows-selected ${c?"fade-in":"fade-out"}`,style:{visibility:c?"visible":"hidden",display:c?"":"none"},children:[e.jsx("p",{className:"textRowsSelected",style:{height:"40px",alignItems:"center",display:"flex"},children:S},S),e.jsx("div",{className:"data-table-header-rows-selected-buttons",children:d})]}),e.jsx("div",{className:`data-table-header ${c?"fade-out":"fade-in"}`,style:{visibility:c?"hidden":"visible",display:c?"none":""},children:e.jsx(Ze,{isSkeleton:n,placeholder:"Procurar",onDebouncedChange:m,debounceMs:0,onKeyDown:u})})]})};function rt(n){return{asc:"arrow_downward",desc:"arrow_upward",default:"swap_vert"}[n]}const nt=({skeleton:n,headers:a,sortStates:t,columnWidths:o,withCheckbox:d,allSelected:c,someSelected:S,onSort:p,onSelectAll:m})=>e.jsxs("div",{style:{display:"flex",flex:"1"},children:[d&&e.jsx("div",{className:"data-table-body-header-checkbox",children:n?e.jsx(K,{height:"24px",width:"24px"}):e.jsx(Xe,{indeterminate:S,modelValue:c,onUpdate:m})}),a.map((u,i)=>e.jsx("div",{className:`data-table-row-header ${n?"loading-skeleton":""} ${i===0?"first":""}`,style:{minWidth:o[i]},onClick:()=>p(i),children:n?e.jsx(K,{height:"24px",width:"80px"}):e.jsxs(e.Fragment,{children:[u,e.jsx(et,{icon:rt(t[i]),size:"sm"})]})},u))]}),ot=({children:n,skeleton:a,style:t})=>e.jsx("div",{className:"data-table-row-content",style:t,children:a?e.jsx(K,{height:"24px",width:"80px"}):n});function st(n,a){return Array.from({length:n},(t,o)=>({id:`skeleton-${o}`,...Object.fromEntries(a.map(d=>[d,Math.random().toString(36).substring(2,8)]))}))}const lt=({currentRows:n,selectedRows:a,skeleton:t,onRowSelection:o,columnWidths:d,withCheckbox:c,columnKeys:S})=>{const p=t?st(5,S):n;return e.jsx("div",{className:"data-table-body-content",style:{flexDirection:"column"},children:p.map((m,u)=>{const i=t?`skeleton-${u}`:m.id;return e.jsx("div",{className:"data-table-body-content-row",children:e.jsxs("div",{style:{display:"flex",flex:"1"},children:[c&&e.jsx("div",{className:"data-table-body-content-checkbox",children:t?e.jsx(K,{height:"24px",width:"24px"}):e.jsx(Xe,{disabled:t,modelValue:a.includes(i),onUpdate:l=>o(i,l)})}),S.map((l,h)=>e.jsx("div",{className:"data-table-body-content-row",children:e.jsx(ot,{skeleton:t,style:{minWidth:d[h]},children:m[l]})},l))]})},i)})})},it=({currentPage:n,totalPages:a,disabledLeft:t,disabledRight:o,skeleton:d,onClickLeft:c,onClickRight:S})=>{const p=`Mostrando ${a===0?0:n} de ${a}`;return e.jsx("div",{className:"data-table-footer",children:e.jsx(tt,{label:p,variant:"leftLabel",onClickLeft:c,onClickRight:S,disabledLeft:t,disabledRight:o,skeleton:d})})};function dt(n,a){const t=s.useCallback(o=>{const d=document.createElement("span");d.textContent=o,document.body.appendChild(d);const c=d.getBoundingClientRect().width;return document.body.removeChild(d),c},[]);return s.useMemo(()=>n.map(o=>{const d=a.map(u=>{var i;return String((i=u[o.key])!==null&&i!==void 0?i:"")}),c=t(o.label),S=Math.max(0,...d.map(t)),p=Math.max(c,S)+50;var m;return Math.max(p,(m=o.minWidth)!==null&&m!==void 0?m:0)}),[n,a,t])}function ct(){const n=s.useRef(null),[a,t]=s.useState(!1);return s.useEffect(()=>{const o=n.current;if(!o)return;const d=()=>{t(o.scrollWidth>o.clientWidth)},c=new ResizeObserver(d);return c.observe(o),d(),()=>c.unobserve(o)},[]),{ref:n,isOverflowed:a}}function ut({data:n,rowsPerPage:a,columns:t,skeleton:o,onSelectedRowsChange:d,onUpdateSelectedRows:c,onSort:S,onSearch:p}){const[m,u]=s.useState(1),[i,l]=s.useState(4),[h,f]=s.useState([]),[g,y]=s.useState(()=>new Array(t.length).fill("default")),C=s.useRef(new Map),D=s.useRef(0),W=s.useRef(d);s.useEffect(()=>{W.current=d},[d]);const I=s.useRef(c);s.useEffect(()=>{I.current=c},[c]);const T=n.map((r,x)=>{if(r.id!==void 0&&r.id!==null)return{...r,id:String(r.id)};const v=JSON.stringify(r);return C.current.has(v)||C.current.set(v,`__synthetic-${D.current++}`),{...r,id:C.current.get(v)}});s.useEffect(()=>{l(4),u(1),!o&&f(r=>{const x=new Set(T.map(_=>_.id)),v=r.filter(_=>x.has(_));return v.length===r.length?r:v})},[n,o]);const k=Math.ceil(T.length/a);s.useEffect(()=>{m===i&&i<k&&l(r=>Math.min(r+4,k))},[m,i,k]),s.useEffect(()=>{var r;(r=W.current)===null||r===void 0||r.call(W,h)},[h]),s.useEffect(()=>{var r;(r=I.current)===null||r===void 0||r.call(I,x=>f(x))},[]);const H=s.useCallback(r=>{u(1),p?.(r)},[p]),J=s.useCallback(r=>{y(x=>{const v=[...x],_=v[r],j=["default","asc","desc"],Ge=j[(j.indexOf(_)+1)%j.length];return v[r]=Ge,S?.({columnIndex:r,direction:Ge}),v})},[S]),b=T.slice(0,i*a),G=b.slice((m-1)*a,m*a),U=b.length>0&&b.every(r=>h.includes(r.id)),X=b.some(r=>h.includes(r.id))&&!U,Q=s.useCallback(r=>{f(r?b.map(x=>x.id):[])},[b]),Y=s.useCallback((r,x)=>{f(v=>x?[...v,r]:v.filter(_=>_!==r))},[]),Z=s.useCallback(()=>{u(r=>Math.max(r-1,1))},[]),E=s.useCallback(()=>{u(r=>Math.min(r+1,Math.min(k,i)))},[k,i]);return{currentPage:m,currentRows:G,visibleData:b,totalPages:k,loadedPages:i,selectedRows:h,sortStates:g,allSelected:U,someSelected:X,handleSearch:H,handleSort:J,handleSelectAll:Q,handleRowSelection:Y,handlePageLeft:Z,handlePageRight:E}}const w=({columns:n,data:a,skeleton:t,rowsPerPage:o=4,withCheckbox:d=!1,headerSelectedChildren:c,textRowsSelected:S,onSelectedRowsChange:p,onUpdateSelectedRows:m,onSort:u,onSearch:i})=>{const{currentPage:l,currentRows:h,totalPages:f,loadedPages:g,selectedRows:y,sortStates:C,allSelected:D,someSelected:W,handleSearch:I,handleSort:T,handleSelectAll:k,handleRowSelection:H,handlePageLeft:J,handlePageRight:b}=ut({data:a,rowsPerPage:o,columns:n,skeleton:t,onSelectedRowsChange:p,onUpdateSelectedRows:m,onSort:u,onSearch:i}),G=n.map(v=>v.key),U=n.map(v=>v.label),X=a.map((v,_)=>{var j;return{...v,id:(j=v.id)!==null&&j!==void 0?j:String(_)}}),Q=dt(n,X),{ref:Y,isOverflowed:Z}=ct(),E=t&&a.length===0,r=t&&a.length>0,x=h.length===0&&!t;return e.jsxs("div",{className:"data-table",children:[e.jsx(at,{skeleton:E,onSearch:I,rowsSelected:y.length,textRowsSelected:S,children:c}),e.jsxs("div",{ref:Y,className:`data-table-body ${Z?"overflowed":""}`,style:{height:o*56.8+41.6,opacity:r?.5:1,pointerEvents:r?"none":void 0,transition:"opacity 0.15s ease"},children:[e.jsx("div",{className:"data-table-body-header",children:e.jsx(nt,{skeleton:E,headers:U,sortStates:C,columnWidths:Q,withCheckbox:d,allSelected:D,someSelected:W,onSort:T,onSelectAll:k})}),x?e.jsx("div",{className:"data-table-body-empty",children:e.jsx(Ye,{title:"Nenhum resultado encontrado",description:"Tente ajustar os termos de pesquisa para encontrar o que procura.",icon:"search_off"})}):e.jsx(lt,{withCheckbox:d,columnWidths:Q,columnKeys:G,currentRows:h,selectedRows:y,skeleton:E,onRowSelection:H})]}),e.jsx(it,{currentPage:l,totalPages:f,skeleton:E,onClickLeft:J,onClickRight:b,disabledLeft:l===1||h.length===0,disabledRight:l===Math.min(f,g)||h.length===0})]})};w.displayName="DataTable";var ee,te,ae,re,ne,oe,se,le,ie,de,ce,ue,me,pe,Se,he,ve,fe,ge,xe,ye,be,_e,Ce,ke,Le,we,je,Re,De,Ee,Ae,We,Ie,Te,Oe,Pe,Be,ze,Ne,Ve,Me,qe,Fe,$e,Ue,Qe,Ke,He,Je;const A=[{key:"name",label:"Nome",minWidth:160},{key:"email",label:"E-mail",minWidth:220},{key:"role",label:"Cargo",minWidth:140},{key:"department",label:"Área",minWidth:140},{key:"status",label:"Status",minWidth:100}],R=[{name:"Ana Souza",email:"ana@empresa.com",role:"Engenheira",department:"Produto",status:"Ativo"},{name:"Bruno Lima",email:"bruno@empresa.com",role:"Designer",department:"Design",status:"Ativo"},{name:"Carla Mendes",email:"carla@empresa.com",role:"PO",department:"Produto",status:"Inativo"},{name:"Diego Faria",email:"diego@empresa.com",role:"Engenheiro",department:"Plataforma",status:"Ativo"},{name:"Elena Castro",email:"elena@empresa.com",role:"Data Scientist",department:"Dados",status:"Ativo"},{name:"Felipe Rocha",email:"felipe@empresa.com",role:"SRE",department:"Plataforma",status:"Inativo"},{name:"Gabi Torres",email:"gabi@empresa.com",role:"UX Writer",department:"Design",status:"Ativo"},{name:"Hugo Martins",email:"hugo@empresa.com",role:"Engenheiro",department:"Backend",status:"Ativo"},{name:"Íris Nunes",email:"iris@empresa.com",role:"QA",department:"Qualidade",status:"Ativo"},{name:"João Pires",email:"joao@empresa.com",role:"DevOps",department:"Plataforma",status:"Inativo"},{name:"Karen Alves",email:"karen@empresa.com",role:"Engenheira",department:"Frontend",status:"Ativo"},{name:"Lucas Barros",email:"lucas@empresa.com",role:"Product Analyst",department:"Produto",status:"Ativo"}],kt={title:"Components/DataTable",component:w,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
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
        `}}},argTypes:{columns:{control:!1,description:"Definição das colunas. Cada item possui `key` (campo no objeto de dados), `label` (cabeçalho) e `minWidth` opcional."},data:{control:!1,description:"Array de objetos com campos correspondentes às `key`s das colunas."},skeleton:{control:"boolean",description:"Exibe o estado de carregamento skeleton."},rowsPerPage:{control:{type:"number",min:1,max:20},description:"Número de linhas por página."},withCheckbox:{control:"boolean",description:"Exibe checkboxes para seleção de linhas."},textRowsSelected:{control:"text",description:"Sufixo do contador de linhas selecionadas."},onSearch:{control:!1,description:"Callback disparado ao digitar na busca. A filtragem é responsabilidade do consumidor."},onSort:{control:!1,description:"Callback disparado ao clicar em um cabeçalho de coluna. A ordenação é responsabilidade do consumidor."},onSelectedRowsChange:{control:!1,description:"Callback disparado quando a seleção de linhas muda."},onUpdateSelectedRows:{control:!1,description:"Expõe uma função para atualizar a seleção externamente."},headerSelectedChildren:{control:!1,description:"ReactNode exibido na barra de ações quando há linhas selecionadas."}},args:{columns:A,data:R,skeleton:!1,rowsPerPage:4,withCheckbox:!1,textRowsSelected:"itens selecionados"}},O={},P={args:{skeleton:!0,data:[]}},B={args:{data:[],skeleton:!1}},z={render:n=>{const[a,t]=s.useState(""),[o,d]=s.useState(!1),c=R.filter(p=>Object.values(p).some(m=>String(m).toLowerCase().includes(a.toLowerCase()))),S=p=>{d(!0),setTimeout(()=>{t(p),d(!1)},600)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("p",{style:{fontSize:12,color:"#666"},children:["Query atual: ",e.jsxs("strong",{children:['"',a,'"']})," — ",c.length," ","resultado(s)"]}),e.jsx(w,{...n,data:c,skeleton:o,onSearch:S})]})}},N={render:n=>{var a;const[t,o]=s.useState(null),[d,c]=s.useState(!1),S=(()=>{var u;if(!t||t.direction==="default")return R;const i=(u=A[t.columnIndex])===null||u===void 0?void 0:u.key;return i?[...R].sort((l,h)=>{const f=String(l[i]),g=String(h[i]);return t.direction==="asc"?f.localeCompare(g):g.localeCompare(f)}):R})(),p=u=>{c(!0),setTimeout(()=>{o(u),c(!1)},400)},m={asc:"crescente",desc:"decrescente",default:"padrão"};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("p",{style:{fontSize:12,color:"#666"},children:t?`Ordenando por coluna ${t.columnIndex} (${(a=A[t.columnIndex])===null||a===void 0?void 0:a.label}) — ${m[t.direction]}`:"Clique em um cabeçalho de coluna para ordenar"}),e.jsx(w,{...n,data:S,skeleton:d,onSort:p})]})}},V={render:n=>{const[a,t]=s.useState(""),[o,d]=s.useState(null),[c,S]=s.useState(!1),p=(()=>{let u=R.filter(l=>Object.values(l).some(h=>String(h).toLowerCase().includes(a.toLowerCase())));if(o&&o.direction!=="default"){var i;const l=(i=A[o.columnIndex])===null||i===void 0?void 0:i.key;l&&(u=[...u].sort((h,f)=>{const g=String(h[l]),y=String(f[l]);return o.direction==="asc"?g.localeCompare(y):y.localeCompare(g)}))}return u})(),m=u=>{S(!0),setTimeout(()=>{u(),S(!1)},500)};return e.jsx(w,{...n,data:p,skeleton:c,onSearch:u=>m(()=>t(u)),onSort:u=>m(()=>d(u))})}},M={args:{withCheckbox:!0,textRowsSelected:"itens selecionados",headerSelectedChildren:e.jsxs(e.Fragment,{children:[e.jsx(L,{size:"md",variant:"secondary",onClick:()=>alert("Exportar selecionados"),children:"Exportar"}),e.jsx(L,{size:"md",variant:"primary",onClick:()=>alert("Excluir selecionados"),children:"Excluir"})]})},render:n=>{const[a,t]=s.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("p",{style:{fontSize:12,color:"#666"},children:["IDs selecionados:"," ",e.jsxs("strong",{children:["[",a.join(", ")||"nenhum","]"]})]}),e.jsx(w,{...n,onSelectedRowsChange:t})]})}},q={args:{withCheckbox:!0,textRowsSelected:"itens selecionados"},render:n=>{const a=s.useRef(null);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(L,{size:"md",variant:"secondary",onClick:()=>{var t;return(t=a.current)===null||t===void 0?void 0:t.call(a,["0","1","2"])},children:"Selecionar primeiros 3"}),e.jsx(L,{size:"md",variant:"secondary",onClick:()=>{var t;return(t=a.current)===null||t===void 0?void 0:t.call(a,[])},children:"Limpar seleção"})]}),e.jsx(w,{...n,onUpdateSelectedRows:t=>{a.current=t}})]})}},F={args:{rowsPerPage:8}},$={render:()=>{const[n,a]=s.useState(""),[t,o]=s.useState(null),[d,c]=s.useState([]),[S,p]=s.useState(!1),m=s.useRef(null),u=(()=>{let l=R.filter(f=>Object.values(f).some(g=>String(g).toLowerCase().includes(n.toLowerCase())));if(t&&t.direction!=="default"){var h;const f=(h=A[t.columnIndex])===null||h===void 0?void 0:h.key;f&&(l=[...l].sort((g,y)=>{const C=String(g[f]),D=String(y[f]);return t.direction==="asc"?C.localeCompare(D):D.localeCompare(C)}))}return l})(),i=l=>{p(!0),setTimeout(()=>{l(),p(!1)},500)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(L,{size:"md",variant:"secondary",onClick:()=>{var l;return(l=m.current)===null||l===void 0?void 0:l.call(m,[])},children:"Limpar seleção"}),e.jsx(L,{size:"md",variant:"secondary",onClick:()=>{var l;return(l=m.current)===null||l===void 0?void 0:l.call(m,["0","1","2","3"])},children:"Selecionar primeiros 4"})]}),d.length>0&&e.jsxs("p",{style:{fontSize:12,color:"#666"},children:["Selecionados: ",e.jsxs("strong",{children:["[",d.join(", "),"]"]})]}),e.jsx(w,{columns:A,data:u,skeleton:S,rowsPerPage:4,withCheckbox:!0,textRowsSelected:"itens selecionados",onSearch:l=>i(()=>a(l)),onSort:l=>i(()=>o(l)),onSelectedRowsChange:c,onUpdateSelectedRows:l=>{m.current=l},headerSelectedChildren:e.jsxs(e.Fragment,{children:[e.jsx(L,{size:"md",variant:"secondary",onClick:()=>alert("Exportar"),children:"Exportar"}),e.jsx(L,{size:"md",variant:"primary",onClick:()=>alert("Excluir"),children:"Excluir"})]})})]})}};O.parameters={...O.parameters,docs:{...(ee=O.parameters)===null||ee===void 0?void 0:ee.docs,source:{originalSource:"{}",...(ae=O.parameters)===null||ae===void 0||(te=ae.docs)===null||te===void 0?void 0:te.source},description:{story:`Estado padrão com dados estáticos.\r
Navegue pelas páginas usando os controles de paginação.`,...(ne=O.parameters)===null||ne===void 0||(re=ne.docs)===null||re===void 0?void 0:re.description}}};P.parameters={...P.parameters,docs:{...(oe=P.parameters)===null||oe===void 0?void 0:oe.docs,source:{originalSource:`{
  args: {
    skeleton: true,
    data: []
  }
}`,...(le=P.parameters)===null||le===void 0||(se=le.docs)===null||se===void 0?void 0:se.source},description:{story:"Estado de carregamento — exibe linhas skeleton enquanto os dados chegam.",...(de=P.parameters)===null||de===void 0||(ie=de.docs)===null||ie===void 0?void 0:ie.description}}};B.parameters={...B.parameters,docs:{...(ce=B.parameters)===null||ce===void 0?void 0:ce.docs,source:{originalSource:`{
  args: {
    data: [],
    skeleton: false
  }
}`,...(me=B.parameters)===null||me===void 0||(ue=me.docs)===null||ue===void 0?void 0:ue.source},description:{story:"Tabela sem dados após busca sem resultados.",...(Se=B.parameters)===null||Se===void 0||(pe=Se.docs)===null||pe===void 0?void 0:pe.description}}};z.parameters={...z.parameters,docs:{...(he=z.parameters)===null||he===void 0?void 0:he.docs,source:{originalSource:`{
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
}`,...(fe=z.parameters)===null||fe===void 0||(ve=fe.docs)===null||ve===void 0?void 0:ve.source},description:{story:"Demonstração do `onSearch` server-side.\r\nO componente emite o valor digitado; a filtragem é feita localmente\r\nneste exemplo para simular uma resposta de API.",...(xe=z.parameters)===null||xe===void 0||(ge=xe.docs)===null||ge===void 0?void 0:ge.description}}};N.parameters={...N.parameters,docs:{...(ye=N.parameters)===null||ye===void 0?void 0:ye.docs,source:{originalSource:`{
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
}`,...(_e=N.parameters)===null||_e===void 0||(be=_e.docs)===null||be===void 0?void 0:be.source},description:{story:"Demonstração do `onSort` server-side.\r\nO componente emite `{ columnIndex, direction }`;\r\na ordenação é aplicada localmente para simular uma resposta de API.",...(ke=N.parameters)===null||ke===void 0||(Ce=ke.docs)===null||Ce===void 0?void 0:Ce.description}}};V.parameters={...V.parameters,docs:{...(Le=V.parameters)===null||Le===void 0?void 0:Le.docs,source:{originalSource:`{
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
}`,...(je=V.parameters)===null||je===void 0||(we=je.docs)===null||we===void 0?void 0:we.source},description:{story:"Busca e sort server-side combinados — o cenário mais comum em produção.",...(De=V.parameters)===null||De===void 0||(Re=De.docs)===null||Re===void 0?void 0:Re.description}}};M.parameters={...M.parameters,docs:{...(Ee=M.parameters)===null||Ee===void 0?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(We=M.parameters)===null||We===void 0||(Ae=We.docs)===null||Ae===void 0?void 0:Ae.source},description:{story:"Seleção de linhas habilitada com ações em bulk no header.",...(Te=M.parameters)===null||Te===void 0||(Ie=Te.docs)===null||Ie===void 0?void 0:Ie.description}}};q.parameters={...q.parameters,docs:{...(Oe=q.parameters)===null||Oe===void 0?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Be=q.parameters)===null||Be===void 0||(Pe=Be.docs)===null||Pe===void 0?void 0:Pe.source},description:{story:"Controle externo da seleção via `onUpdateSelectedRows`.\r\nÚtil para selecionar linhas programaticamente (ex: após uma ação de API).",...(Ne=q.parameters)===null||Ne===void 0||(ze=Ne.docs)===null||ze===void 0?void 0:ze.description}}};F.parameters={...F.parameters,docs:{...(Ve=F.parameters)===null||Ve===void 0?void 0:Ve.docs,source:{originalSource:`{
  args: {
    rowsPerPage: 8
  }
}`,...(qe=F.parameters)===null||qe===void 0||(Me=qe.docs)===null||Me===void 0?void 0:Me.source},description:{story:"Tabela com maior número de linhas por página para visualização densa.",...($e=F.parameters)===null||$e===void 0||(Fe=$e.docs)===null||Fe===void 0?void 0:Fe.description}}};$.parameters={...$.parameters,docs:{...(Ue=$.parameters)===null||Ue===void 0?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Ke=$.parameters)===null||Ke===void 0||(Qe=Ke.docs)===null||Qe===void 0?void 0:Qe.source},description:{story:`Combinação completa: search, sort, checkbox, bulk actions e controle externo.\r
Representa o cenário mais completo de uso em produção.`,...(Je=$.parameters)===null||Je===void 0||(He=Je.docs)===null||He===void 0?void 0:He.description}}};const Lt=["Default","Loading","Empty","WithServerSideSearch","WithServerSideSort","WithSearchAndSort","WithCheckboxAndBulkActions","WithExternalSelectionControl","DenseTable","FullExample"];export{O as Default,F as DenseTable,B as Empty,$ as FullExample,P as Loading,M as WithCheckboxAndBulkActions,q as WithExternalSelectionControl,V as WithSearchAndSort,z as WithServerSideSearch,N as WithServerSideSort,Lt as __namedExportsOrder,kt as default};
