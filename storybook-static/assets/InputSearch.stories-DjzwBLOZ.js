import{j as e,r as u}from"./iframe-CxNvl9BI.js";/* empty css               */import{I as x}from"./InputSearch-C9eVKi4A.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-Bqm0CoJD.js";import"./ButtonIcon-BvrW2_xY.js";import"./Skeleton-C80QNm7w.js";const j={title:"Components/InputSearch",component:x,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10074"}},argTypes:{placeholder:{control:"text",description:"Texto exibido dentro do campo quando está vazio.",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"Desativa o campo de busca e bloqueia toda interação.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},value:{control:"text",description:"Valor controlado externamente (ex: parâmetro de URL). Mantém o campo sincronizado quando a fonte muda.",table:{type:{summary:"string"}}},isSkeleton:{control:"boolean",description:"Exibe um placeholder skeleton no lugar do campo. Use durante estados de carregamento.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},onChange:{action:"onChange",description:"Disparado ao pressionar Enter ou ao limpar o campo. Recebe o valor atual como argumento.",table:{type:{summary:"(value: string) => void"}}}},decorators:[r=>e.jsx("div",{style:{minWidth:"320px"},children:e.jsx(r,{})})]},t={name:"Default",args:{placeholder:"Buscar...",disabled:!1}},l={name:"Estado — desabilitado",args:{placeholder:"Busca indisponível",disabled:!0}},i={name:"Estado — skeleton",args:{placeholder:"Buscar...",isSkeleton:!0}},d={name:"Comportamento — disparo no Enter",render:()=>{const[r,n]=u.useState(""),[o,s]=u.useState(0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(x,{placeholder:"Digite e pressione Enter...",onChange:a=>{n(a),s(g=>g+1)}}),e.jsxs("small",{children:["Buscas realizadas: ",e.jsx("strong",{children:o})]}),e.jsxs("small",{children:["Último termo: ",e.jsx("strong",{children:r||"—"})]})]})}},c={name:"Padrão — filtragem local (Enter)",render:()=>{const r=["Abacaxi","Banana","Cereja","Damasco","Framboesa","Goiaba","Laranja","Manga","Pêssego","Uva"],[n,o]=u.useState(""),s=r.filter(a=>a.toLowerCase().includes(n.toLowerCase()));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(x,{placeholder:"Buscar frutas... (Enter)",onChange:o}),e.jsx("ul",{style:{paddingLeft:"var(--s-spacing-medium)"},children:s.length>0?s.map(a=>e.jsx("li",{children:e.jsx("small",{children:a})},a)):e.jsx("li",{children:e.jsx("small",{children:"Nenhum resultado"})})})]})}},m={name:"Padrão — inicializado de URL (?q=...)",render:()=>{const[r,n]=u.useState("react");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(x,{placeholder:"Buscar...",value:r,onChange:n}),e.jsxs("small",{children:["URL seria: ",e.jsxs("code",{children:["?q=",r||""]})]})]})}},p={name:"Contexto real — filtro de tabela",parameters:{layout:"padded"},render:()=>{const r=[{name:"Ana Souza",role:"Admin"},{name:"Carlos Lima",role:"Editor"},{name:"Jane Doe",role:"Viewer"},{name:"Maria Clara",role:"Editor"},{name:"Pedro Alves",role:"Viewer"}],[n,o]=u.useState(""),s=r.filter(a=>a.name.toLowerCase().includes(n.toLowerCase()));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",width:"400px"},children:[e.jsx(x,{placeholder:"Buscar usuário... (Enter)",onChange:o}),e.jsx("div",{style:{border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)"},children:s.length>0?s.map(({name:a,role:g},h)=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"var(--s-spacing-x-small) var(--s-spacing-small)",borderBottom:h<s.length-1?"var(--s-border-width-hairline) solid var(--s-color-border-default)":"none"},children:[e.jsx("small",{children:a}),e.jsx("small",{children:g})]},a)):e.jsx("div",{style:{padding:"var(--s-spacing-small)",textAlign:"center"},children:e.jsx("small",{children:"Nenhum usuário encontrado"})})})]})}},D=["Default","Disabled","Skeleton","EnterTrigger","LocalFilter","InitializedFromUrl","UserTableFilter"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    placeholder: "Buscar...",
    disabled: false
  }
}`,...t.parameters?.docs?.source},description:{story:'Campo de busca padrão.\r\nDigite e pressione Enter para disparar o callback.\r\nClique no × para limpar e disparar `onChange("")`.',...t.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Estado — desabilitado",
  args: {
    placeholder: "Busca indisponível",
    disabled: true
  }
}`,...l.parameters?.docs?.source},description:{story:`Estado desabilitado — campo inativo com cursor bloqueado.\r
Use quando a busca não está disponível no contexto atual.`,...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Estado — skeleton",
  args: {
    placeholder: "Buscar...",
    isSkeleton: true
  }
}`,...i.parameters?.docs?.source},description:{story:`Estado skeleton — exibe placeholder com as mesmas dimensões do campo.\r
Use enquanto a página ou o contexto de busca ainda está carregando.`,...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:`Demonstra que o callback só dispara ao pressionar Enter.\r
O contador só incrementa quando a busca é confirmada — não a cada tecla.`,...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:`Filtragem local — a lista filtra ao pressionar Enter.\r
Digite um termo e pressione Enter para filtrar a lista de frutas.\r
Clique no × para limpar e exibir todos os itens novamente.`,...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"Campo inicializado a partir de um valor externo via prop `value`.\r\nSimula a inicialização a partir de um parâmetro de URL (`?q=react`).\r\nEdite e pressione Enter para atualizar o valor.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`Campo de busca em tabela de usuários.\r
Digite um nome e pressione Enter para filtrar. Clique em × para limpar.`,...p.parameters?.docs?.description}}};export{t as Default,l as Disabled,d as EnterTrigger,m as InitializedFromUrl,c as LocalFilter,i as Skeleton,p as UserTableFilter,D as __namedExportsOrder,j as default};
