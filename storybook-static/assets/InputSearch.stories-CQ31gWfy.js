import{j as e,r as u}from"./iframe-DFdk80Qn.js";/* empty css               */import{I as v}from"./InputSearch-DMfwXPo9.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-C_kNoyVv.js";import"./ButtonIcon-B5f9TZ0r.js";import"./Skeleton-bEV42asx.js";var h,_,x,b,f,y,C,S,E,D,j,L,F,U,q,z,w,B,k,I,P,T,A,R,V,O,M,G,N,Q,J,Z,H,W,K;const ne={title:"Components/InputSearch",component:v,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
O **InputSearch** é um campo de busca com botão de limpar integrado.

Os callbacks só disparam em ações explícitas do usuário — não a cada tecla:

| Ação                    | Comportamento                              |
|-------------------------|--------------------------------------------|
| Pressionar **Enter**    | Dispara \`onChange\` com o valor atual      |
| Clicar no botão limpar  | Dispara \`onChange\` com \`""\` imediatamente |

O valor interno é atualizado a cada tecla para manter o campo responsivo,
mas o callback só é chamado quando o usuário confirma a busca.

### Padrão URL + API
\`\`\`tsx
const [params, setParams] = useSearchParams();
const q = params.get("q") ?? "";

<InputSearch
  placeholder="Buscar usuários..."
  value={q}
  onChange={(val) => {
    setParams({ q: val }); // sincroniza URL
    fetchUsers(val);        // chama API
  }}
/>
\`\`\`

### Quando usar
- Busca em tabelas e listas com chamada à API no Enter
- Campos de pesquisa com sincronização de URL

### Boas práticas
- Inicialize \`value\` a partir da URL para que a busca sobreviva ao refresh e ao compartilhamento
- Sempre trate a string vazia \`""\` no seu fetch — ela normalmente significa "sem filtro"
- O botão de limpar já chama \`onChange("")\` — não é necessário tratar isso separadamente
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10074"}},argTypes:{placeholder:{control:"text",description:"Texto exibido dentro do campo quando está vazio.",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"Desativa o campo de busca e bloqueia toda interação.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},value:{control:"text",description:"Valor controlado externamente (ex: parâmetro de URL). Mantém o campo sincronizado quando a fonte muda.",table:{type:{summary:"string"}}},isSkeleton:{control:"boolean",description:"Exibe um placeholder skeleton no lugar do campo. Use durante estados de carregamento.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},onChange:{action:"onChange",description:"Disparado ao pressionar Enter ou ao limpar o campo. Recebe o valor atual como argumento.",table:{type:{summary:"(value: string) => void"}}}},decorators:[r=>e.jsx("div",{style:{minWidth:"320px"},children:e.jsx(r,{})})]},t={name:"Default",args:{placeholder:"Buscar...",disabled:!1}},l={name:"Estado — desabilitado",args:{placeholder:"Busca indisponível",disabled:!0}},i={name:"Estado — skeleton",args:{placeholder:"Buscar...",isSkeleton:!0}},d={name:"Comportamento — disparo no Enter",render:()=>{const[r,o]=u.useState(""),[n,s]=u.useState(0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(v,{placeholder:"Digite e pressione Enter...",onChange:a=>{o(a),s(g=>g+1)}}),e.jsxs("small",{children:["Buscas realizadas: ",e.jsx("strong",{children:n})]}),e.jsxs("small",{children:["Último termo: ",e.jsx("strong",{children:r||"—"})]})]})}},c={name:"Padrão — filtragem local (Enter)",render:()=>{const r=["Abacaxi","Banana","Cereja","Damasco","Framboesa","Goiaba","Laranja","Manga","Pêssego","Uva"],[o,n]=u.useState(""),s=r.filter(a=>a.toLowerCase().includes(o.toLowerCase()));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(v,{placeholder:"Buscar frutas... (Enter)",onChange:n}),e.jsx("ul",{style:{paddingLeft:"var(--s-spacing-medium)"},children:s.length>0?s.map(a=>e.jsx("li",{children:e.jsx("small",{children:a})},a)):e.jsx("li",{children:e.jsx("small",{children:"Nenhum resultado"})})})]})}},m={name:"Padrão — inicializado de URL (?q=...)",render:()=>{const[r,o]=u.useState("react");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(v,{placeholder:"Buscar...",value:r,onChange:o}),e.jsxs("small",{children:["URL seria: ",e.jsxs("code",{children:["?q=",r||""]})]})]})}},p={name:"Contexto real — filtro de tabela",parameters:{layout:"padded"},render:()=>{const r=[{name:"Ana Souza",role:"Admin"},{name:"Carlos Lima",role:"Editor"},{name:"Jane Doe",role:"Viewer"},{name:"Maria Clara",role:"Editor"},{name:"Pedro Alves",role:"Viewer"}],[o,n]=u.useState(""),s=r.filter(a=>a.name.toLowerCase().includes(o.toLowerCase()));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",width:"400px"},children:[e.jsx(v,{placeholder:"Buscar usuário... (Enter)",onChange:n}),e.jsx("div",{style:{border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)"},children:s.length>0?s.map(({name:a,role:g},X)=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"var(--s-spacing-x-small) var(--s-spacing-small)",borderBottom:X<s.length-1?"var(--s-border-width-hairline) solid var(--s-color-border-default)":"none"},children:[e.jsx("small",{children:a}),e.jsx("small",{children:g})]},a)):e.jsx("div",{style:{padding:"var(--s-spacing-small)",textAlign:"center"},children:e.jsx("small",{children:"Nenhum usuário encontrado"})})})]})}};t.parameters={...t.parameters,docs:{...(h=t.parameters)===null||h===void 0?void 0:h.docs,source:{originalSource:`{
  name: "Default",
  args: {
    placeholder: "Buscar...",
    disabled: false
  }
}`,...(x=t.parameters)===null||x===void 0||(_=x.docs)===null||_===void 0?void 0:_.source},description:{story:'Campo de busca padrão.\r\nDigite e pressione Enter para disparar o callback.\r\nClique no × para limpar e disparar `onChange("")`.',...(f=t.parameters)===null||f===void 0||(b=f.docs)===null||b===void 0?void 0:b.description}}};l.parameters={...l.parameters,docs:{...(y=l.parameters)===null||y===void 0?void 0:y.docs,source:{originalSource:`{
  name: "Estado — desabilitado",
  args: {
    placeholder: "Busca indisponível",
    disabled: true
  }
}`,...(S=l.parameters)===null||S===void 0||(C=S.docs)===null||C===void 0?void 0:C.source},description:{story:`Estado desabilitado — campo inativo com cursor bloqueado.\r
Use quando a busca não está disponível no contexto atual.`,...(D=l.parameters)===null||D===void 0||(E=D.docs)===null||E===void 0?void 0:E.description}}};i.parameters={...i.parameters,docs:{...(j=i.parameters)===null||j===void 0?void 0:j.docs,source:{originalSource:`{
  name: "Estado — skeleton",
  args: {
    placeholder: "Buscar...",
    isSkeleton: true
  }
}`,...(F=i.parameters)===null||F===void 0||(L=F.docs)===null||L===void 0?void 0:L.source},description:{story:`Estado skeleton — exibe placeholder com as mesmas dimensões do campo.\r
Use enquanto a página ou o contexto de busca ainda está carregando.`,...(q=i.parameters)===null||q===void 0||(U=q.docs)===null||U===void 0?void 0:U.description}}};d.parameters={...d.parameters,docs:{...(z=d.parameters)===null||z===void 0?void 0:z.docs,source:{originalSource:`{
  name: "Comportamento — disparo no Enter",
  render: () => {
    const [lastSearch, setLastSearch] = useState("");
    const [count, setCount] = useState(0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)"
    }}>\r
        <InputSearch placeholder="Digite e pressione Enter..." onChange={val => {
        setLastSearch(val);
        setCount(c => c + 1);
      }} />\r
        <small>Buscas realizadas: <strong>{count}</strong></small>\r
        <small>Último termo: <strong>{lastSearch || "—"}</strong></small>\r
      </div>;
  }
}`,...(B=d.parameters)===null||B===void 0||(w=B.docs)===null||w===void 0?void 0:w.source},description:{story:`Demonstra que o callback só dispara ao pressionar Enter.\r
O contador só incrementa quando a busca é confirmada — não a cada tecla.`,...(I=d.parameters)===null||I===void 0||(k=I.docs)===null||k===void 0?void 0:k.description}}};c.parameters={...c.parameters,docs:{...(P=c.parameters)===null||P===void 0?void 0:P.docs,source:{originalSource:`{
  name: "Padrão — filtragem local (Enter)",
  render: () => {
    const items = ["Abacaxi", "Banana", "Cereja", "Damasco", "Framboesa", "Goiaba", "Laranja", "Manga", "Pêssego", "Uva"];
    const [filter, setFilter] = useState("");
    const filtered = items.filter(i => i.toLowerCase().includes(filter.toLowerCase()));
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)"
    }}>\r
        <InputSearch placeholder="Buscar frutas... (Enter)" onChange={setFilter} />\r
        <ul style={{
        paddingLeft: "var(--s-spacing-medium)"
      }}>\r
          {filtered.length > 0 ? filtered.map(item => <li key={item}><small>{item}</small></li>) : <li><small>Nenhum resultado</small></li>}\r
        </ul>\r
      </div>;
  }
}`,...(A=c.parameters)===null||A===void 0||(T=A.docs)===null||T===void 0?void 0:T.source},description:{story:`Filtragem local — a lista filtra ao pressionar Enter.\r
Digite um termo e pressione Enter para filtrar a lista de frutas.\r
Clique no × para limpar e exibir todos os itens novamente.`,...(V=c.parameters)===null||V===void 0||(R=V.docs)===null||R===void 0?void 0:R.description}}};m.parameters={...m.parameters,docs:{...(O=m.parameters)===null||O===void 0?void 0:O.docs,source:{originalSource:`{
  name: "Padrão — inicializado de URL (?q=...)",
  render: () => {
    const [query, setQuery] = useState("react");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)"
    }}>\r
        <InputSearch placeholder="Buscar..." value={query} onChange={setQuery} />\r
        <small>URL seria: <code>?q={query || ""}</code></small>\r
      </div>;
  }
}`,...(G=m.parameters)===null||G===void 0||(M=G.docs)===null||M===void 0?void 0:M.source},description:{story:"Campo inicializado a partir de um valor externo via prop `value`.\r\nSimula a inicialização a partir de um parâmetro de URL (`?q=react`).\r\nEdite e pressione Enter para atualizar o valor.",...(Q=m.parameters)===null||Q===void 0||(N=Q.docs)===null||N===void 0?void 0:N.description}}};p.parameters={...p.parameters,docs:{...(J=p.parameters)===null||J===void 0?void 0:J.docs,source:{originalSource:`{
  name: "Contexto real — filtro de tabela",
  parameters: {
    layout: "padded"
  },
  render: () => {
    const users = [{
      name: "Ana Souza",
      role: "Admin"
    }, {
      name: "Carlos Lima",
      role: "Editor"
    }, {
      name: "Jane Doe",
      role: "Viewer"
    }, {
      name: "Maria Clara",
      role: "Editor"
    }, {
      name: "Pedro Alves",
      role: "Viewer"
    }];
    const [filter, setFilter] = useState("");
    const filtered = users.filter(u => u.name.toLowerCase().includes(filter.toLowerCase()));
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)",
      width: "400px"
    }}>\r
        <InputSearch placeholder="Buscar usuário... (Enter)" onChange={setFilter} />\r
        <div style={{
        border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
        borderRadius: "var(--s-border-radius-medium)"
      }}>\r
          {filtered.length > 0 ? filtered.map(({
          name,
          role
        }, i) => <div key={name} style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "var(--s-spacing-x-small) var(--s-spacing-small)",
          borderBottom: i < filtered.length - 1 ? "var(--s-border-width-hairline) solid var(--s-color-border-default)" : "none"
        }}>\r
                <small>{name}</small>\r
                <small>{role}</small>\r
              </div>) : <div style={{
          padding: "var(--s-spacing-small)",
          textAlign: "center"
        }}>\r
              <small>Nenhum usuário encontrado</small>\r
            </div>}\r
        </div>\r
      </div>;
  }
}`,...(H=p.parameters)===null||H===void 0||(Z=H.docs)===null||Z===void 0?void 0:Z.source},description:{story:`Campo de busca em tabela de usuários.\r
Digite um nome e pressione Enter para filtrar. Clique em × para limpar.`,...(K=p.parameters)===null||K===void 0||(W=K.docs)===null||W===void 0?void 0:W.description}}};const te=["Default","Disabled","Skeleton","EnterTrigger","LocalFilter","InitializedFromUrl","UserTableFilter"];export{t as Default,l as Disabled,d as EnterTrigger,m as InitializedFromUrl,c as LocalFilter,i as Skeleton,p as UserTableFilter,te as __namedExportsOrder,ne as default};
