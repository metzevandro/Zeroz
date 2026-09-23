import{R as S,j as o}from"./iframe-CxNvl9BI.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";const j={1:["col-12"],"2 - Symmetric":["col-6","col-6"],"2 - Asymmetric":["col-8","col-4"],"3 - Symmetric":["col-4","col-4","col-4"]},e=({children:r,columns:l,...s})=>{const n=j[l],v=S.Children.map(r,(h,b)=>{const f=n[b]??n[n.length-1];return o.jsx("div",{className:f,children:h})});return o.jsx("div",{...s,className:"layout",children:v})};e.displayName="Layout";const w={title:"Templates/Layout",component:e,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
O **Layout** é um container de linha em um sistema de grid flexbox de 12 colunas.

Cada filho é automaticamente envolvido com a classe \`col-X\` correspondente ao variant escolhido.
Em telas \`≤ 768px\` todas as colunas colapsam para \`width: 100%\` (empilhadas).

**Para criar quebra de linha, empilhe múltiplos \`<Layout>\` verticalmente.**

### Variantes disponíveis
| columns               | mapeamento de colunas              |
|-----------------------|------------------------------------|
| \`"1"\`                | col-12 (100%)                      |
| \`"2 - Symmetric"\`    | col-6 + col-6 (50% / 50%)         |
| \`"2 - Asymmetric"\`   | col-8 + col-4 (66% / 33%)         |
| \`"3 - Symmetric"\`    | col-4 + col-4 + col-4 (33% cada)  |

### Regras de composição
- O número de filhos deve coincidir com o número de colunas do variant
- Filhos extras recebem a última classe de coluna do variant
- Qualquer \`ReactNode\` pode ser filho — campo de formulário, card, tabela, etc.
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=2416-4556"}},argTypes:{columns:{control:"select",options:["1","2 - Symmetric","2 - Asymmetric","3 - Symmetric"],description:"Variant de colunas. Mapeia cada filho para uma classe `col-X` do grid de 12 colunas.",table:{type:{summary:'"1" | "2 - Symmetric" | "2 - Asymmetric" | "3 - Symmetric"'}}},children:{control:!1,description:"Conteúdo de cada slot. O número de filhos deve corresponder ao número de colunas.",table:{type:{summary:"React.ReactNode"}}}}},a=({col:r})=>o.jsxs("div",{style:{background:"var(--s-color-fill-highlight-light)",border:"1px dashed var(--s-color-border-highlight)",borderRadius:"var(--s-border-radius-medium)",padding:"var(--s-spacing-small) var(--s-spacing-x-small)",textAlign:"center",color:"var(--s-color-content-highlight)",fontFamily:"monospace",fontSize:"13px",minHeight:"72px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"var(--s-spacing-nano)"},children:[o.jsx("strong",{children:"Conteúdo"}),o.jsx("small",{style:{opacity:.7},children:r})]}),c={name:"Playground",args:{columns:"2 - Symmetric"},render:r=>{const s={1:["col-12"],"2 - Symmetric":["col-6","col-6"],"2 - Asymmetric":["col-8","col-4"],"3 - Symmetric":["col-4","col-4","col-4"]}[r.columns];return o.jsx(e,{...r,children:s.map((n,v)=>o.jsx(a,{col:n},v))})}},i={name:"Variante — 1 coluna (col-12)",args:{columns:"1"},render:r=>o.jsxs(e,{...r,children:[o.jsx(a,{col:"col-12 · 100%"}),o.jsx(a,{col:"col-12 · 100%"})]})},t={name:"Variante — 2 colunas simétricas (col-6 + col-6)",args:{columns:"2 - Symmetric"},render:r=>o.jsxs(e,{...r,children:[o.jsx(a,{col:"col-6 · 50%"}),o.jsx(a,{col:"col-6 · 50%"})]})},d={name:"Variante — 2 colunas assimétricas (col-8 + col-4)",args:{columns:"2 - Asymmetric"},render:r=>o.jsxs(e,{...r,children:[o.jsx(a,{col:"col-8 · 66%"}),o.jsx(a,{col:"col-4 · 33%"})]})},m={name:"Variante — 3 colunas simétricas (col-4 + col-4 + col-4)",args:{columns:"3 - Symmetric"},render:r=>o.jsxs(e,{...r,children:[o.jsx(a,{col:"col-4 · 33%"}),o.jsx(a,{col:"col-4 · 33%"}),o.jsx(a,{col:"col-4 · 33%"})]})},p={name:"Múltiplas linhas (row break)",render:()=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[o.jsxs(e,{columns:"3 - Symmetric",children:[o.jsx(a,{col:"col-4"}),o.jsx(a,{col:"col-4"}),o.jsx(a,{col:"col-4"})]}),o.jsxs(e,{columns:"2 - Asymmetric",children:[o.jsx(a,{col:"col-8"}),o.jsx(a,{col:"col-4"})]}),o.jsx(e,{columns:"1",children:o.jsx(a,{col:"col-12"})})]})},E=[{columns:"1",slots:[{label:"Conteúdo",col:"col-12"},{label:"Conteúdo",col:"col-12"}]},{columns:"2 - Symmetric",slots:[{label:"Esquerda",col:"col-6"},{label:"Direita",col:"col-6"}]},{columns:"2 - Asymmetric",slots:[{label:"Principal",col:"col-8"},{label:"Sidebar",col:"col-4"}]},{columns:"3 - Symmetric",slots:[{label:"A",col:"col-4"},{label:"B",col:"col-4"},{label:"C",col:"col-4"}]}],L=({columns:r,slots:l})=>o.jsxs("div",{children:[o.jsxs("p",{style:{fontFamily:"monospace",fontSize:"12px",marginBottom:"var(--s-spacing-nano)",color:"var(--s-color-content-default)"},children:['columns="',r,'"']}),o.jsx(e,{columns:r,children:l.map(s=>o.jsx(a,{col:s.col},s.label))})]}),u={name:"Matriz — todas as variantes",render:()=>o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-large)"},children:E.map(r=>o.jsx(L,{columns:r.columns,slots:r.slots},r.columns))})},x={name:"Mobile — colapso (≤ 768px)",globals:{viewport:{value:"mobile5",isRotated:!1}},render:()=>o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:o.jsxs(e,{columns:"3 - Symmetric",children:[o.jsx(a,{col:"col-4 → col-12 no mobile"}),o.jsx(a,{col:"col-4 → col-12 no mobile"}),o.jsx(a,{col:"col-4 → col-12 no mobile"})]})})},g={name:"Contexto real — configurações com sidebar",render:()=>o.jsxs(e,{columns:"2 - Asymmetric",children:[o.jsx("div",{style:{background:"var(--s-color-fill-default)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",padding:"var(--s-spacing-small)",display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)",height:"100%"},children:["Perfil","Segurança","Faturamento","Notificações"].map(r=>o.jsx("div",{style:{padding:"var(--s-spacing-xx-small) var(--s-spacing-x-small)",borderRadius:"var(--s-border-radius-small)",background:r==="Perfil"?"var(--s-color-fill-highlight-light)":"transparent",cursor:"pointer"},children:o.jsx("small",{style:{color:r==="Perfil"?"var(--s-color-content-highlight)":"var(--s-color-content-default)"},children:r})},r))}),o.jsxs("div",{style:{background:"var(--s-color-fill-default)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",padding:"var(--s-spacing-medium)",display:"flex",flexDirection:"column",gap:"var(--s-spacing-small)"},children:[o.jsx("p",{style:{font:"var(--s-typography-paragraph-strong)"},children:"Informações do perfil"}),o.jsx(a,{col:"campo de formulário"}),o.jsx(a,{col:"campo de formulário"})]})]})},y={name:"Contexto real — dashboard com métricas",render:()=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[o.jsx(e,{columns:"3 - Symmetric",children:[{label:"Receita",value:"R$ 48.290",badge:"+12,4%"},{label:"Usuários ativos",value:"1.842",badge:"+3,1%"},{label:"Pedidos",value:"342",badge:"+8,7%"}].map(({label:r,value:l,badge:s})=>o.jsxs("div",{style:{background:"var(--s-color-fill-default)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",padding:"var(--s-spacing-small)",display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[o.jsx("small",{children:r}),o.jsx("p",{style:{font:"var(--s-typography-paragraph-strong)",fontSize:"24px"},children:l}),o.jsx("small",{style:{color:"var(--s-color-content-success)"},children:s})]},r))}),o.jsxs(e,{columns:"2 - Asymmetric",children:[o.jsx(a,{col:"col-8 · gráfico principal"}),o.jsx(a,{col:"col-4 · atividade recente"})]})]})},D=["Playground","OneColumn","TwoSymmetric","TwoAsymmetric","ThreeSymmetric","MultipleRows","AllVariants","MobileCollapse","SettingsPage","DashboardGrid"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Playground",
  args: {
    columns: "2 - Symmetric"
  },
  render: args => {
    const colMap: Record<LayoutColumns, string[]> = {
      "1": ["col-12"],
      "2 - Symmetric": ["col-6", "col-6"],
      "2 - Asymmetric": ["col-8", "col-4"],
      "3 - Symmetric": ["col-4", "col-4", "col-4"]
    };
    const cols = colMap[args.columns];
    return <Layout {...args}>\r
        {cols.map((col, i) => <Slot key={i} col={col} />)}\r
      </Layout>;
  }
}`,...c.parameters?.docs?.source},description:{story:`Story interativa para explorar todas as variantes via Controls.\r
O número de slots se adapta automaticamente à variante selecionada.`,...c.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Variante — 1 coluna (col-12)",
  args: {
    columns: "1"
  },
  render: args => <Layout {...args}>\r
      <Slot col="col-12 · 100%" />\r
      <Slot col="col-12 · 100%" />\r
    </Layout>
}`,...i.parameters?.docs?.source},description:{story:"Coluna única — `col-12` (100%).\r\nCada filho ocupa a linha inteira. Use para conteúdo de largura total.",...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Variante — 2 colunas simétricas (col-6 + col-6)",
  args: {
    columns: "2 - Symmetric"
  },
  render: args => <Layout {...args}>\r
      <Slot col="col-6 · 50%" />\r
      <Slot col="col-6 · 50%" />\r
    </Layout>
}`,...t.parameters?.docs?.source},description:{story:"Duas colunas simétricas — `col-6 + col-6` (50% / 50%).\r\nPadrão mais comum para divisão de conteúdo em dois blocos iguais.",...t.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Variante — 2 colunas assimétricas (col-8 + col-4)",
  args: {
    columns: "2 - Asymmetric"
  },
  render: args => <Layout {...args}>\r
      <Slot col="col-8 · 66%" />\r
      <Slot col="col-4 · 33%" />\r
    </Layout>
}`,...d.parameters?.docs?.source},description:{story:"Duas colunas assimétricas — `col-8 + col-4` (66% / 33%).\r\nUse para layouts com área principal e sidebar: conteúdo + filtros, editor + preview.",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Variante — 3 colunas simétricas (col-4 + col-4 + col-4)",
  args: {
    columns: "3 - Symmetric"
  },
  render: args => <Layout {...args}>\r
      <Slot col="col-4 · 33%" />\r
      <Slot col="col-4 · 33%" />\r
      <Slot col="col-4 · 33%" />\r
    </Layout>
}`,...m.parameters?.docs?.source},description:{story:"Três colunas simétricas — `col-4 + col-4 + col-4` (33% cada).\r\nUse para grids de três cards, métricas de dashboard ou planos de pricing.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Múltiplas linhas (row break)",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-x-small)"
  }}>\r
      <Layout columns="3 - Symmetric">\r
        <Slot col="col-4" />\r
        <Slot col="col-4" />\r
        <Slot col="col-4" />\r
      </Layout>\r
      <Layout columns="2 - Asymmetric">\r
        <Slot col="col-8" />\r
        <Slot col="col-4" />\r
      </Layout>\r
      <Layout columns="1">\r
        <Slot col="col-12" />\r
      </Layout>\r
    </div>
}`,...p.parameters?.docs?.source},description:{story:"Múltiplos `<Layout>` empilhados verticalmente para criar quebras de linha.\r\nCada `<Layout>` é uma linha independente — combine variantes para layouts complexos.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Matriz — todas as variantes",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-large)"
  }}>\r
      {variantConfig.map(v => <VariantRow key={v.columns} columns={v.columns} slots={v.slots} />)}\r
    </div>
}`,...u.parameters?.docs?.source},description:{story:`Todas as variantes empilhadas para comparação visual rápida.\r
Use para validar proporções e espaçamentos após alterações de token.`,...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Mobile — colapso (≤ 768px)",
  globals: {
    viewport: {
      value: "mobile5",
      isRotated: false
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-x-small)"
  }}>\r
      <Layout columns="3 - Symmetric">\r
        <Slot col="col-4 → col-12 no mobile" />\r
        <Slot col="col-4 → col-12 no mobile" />\r
        <Slot col="col-4 → col-12 no mobile" />\r
      </Layout>\r
    </div>
}`,...x.parameters?.docs?.source},description:{story:"Layout mobile (≤ 768px) — todas as colunas colapsam para `width: 100%`.\r\nAs colunas passam a empilhar verticalmente independentemente da variante.",...x.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — configurações com sidebar",
  render: () => <Layout columns="2 - Asymmetric">\r
      <div style={{
      background: "var(--s-color-fill-default)",
      border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
      borderRadius: "var(--s-border-radius-medium)",
      padding: "var(--s-spacing-small)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-nano)",
      height: '100%'
    }}>\r
        {["Perfil", "Segurança", "Faturamento", "Notificações"].map(item => <div key={item} style={{
        padding: "var(--s-spacing-xx-small) var(--s-spacing-x-small)",
        borderRadius: "var(--s-border-radius-small)",
        background: item === "Perfil" ? "var(--s-color-fill-highlight-light)" : "transparent",
        cursor: "pointer"
      }}>\r
            <small style={{
          color: item === "Perfil" ? "var(--s-color-content-highlight)" : "var(--s-color-content-default)"
        }}>\r
              {item}\r
            </small>\r
          </div>)}\r
      </div>\r
      <div style={{
      background: "var(--s-color-fill-default)",
      border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
      borderRadius: "var(--s-border-radius-medium)",
      padding: "var(--s-spacing-medium)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-small)"
    }}>\r
        <p style={{
        font: "var(--s-typography-paragraph-strong)"
      }}>Informações do perfil</p>\r
        <Slot col="campo de formulário" />\r
        <Slot col="campo de formulário" />\r
      </div>\r
    </Layout>
}`,...g.parameters?.docs?.source},description:{story:"Página de configurações com sidebar — `2 - Asymmetric`.\r\nMenu de navegação lateral em `col-4` e conteúdo principal em `col-8`.",...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — dashboard com métricas",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-x-small)"
  }}>\r
      <Layout columns="3 - Symmetric">\r
        {[{
        label: "Receita",
        value: "R$ 48.290",
        badge: "+12,4%"
      }, {
        label: "Usuários ativos",
        value: "1.842",
        badge: "+3,1%"
      }, {
        label: "Pedidos",
        value: "342",
        badge: "+8,7%"
      }].map(({
        label,
        value,
        badge
      }) => <div key={label} style={{
        background: "var(--s-color-fill-default)",
        border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
        borderRadius: "var(--s-border-radius-medium)",
        padding: "var(--s-spacing-small)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--s-spacing-nano)"
      }}>\r
            <small>{label}</small>\r
            <p style={{
          font: "var(--s-typography-paragraph-strong)",
          fontSize: "24px"
        }}>{value}</p>\r
            <small style={{
          color: "var(--s-color-content-success)"
        }}>{badge}</small>\r
          </div>)}\r
      </Layout>\r
      <Layout columns="2 - Asymmetric">\r
        <Slot col="col-8 · gráfico principal" />\r
        <Slot col="col-4 · atividade recente" />\r
      </Layout>\r
    </div>
}`,...y.parameters?.docs?.source},description:{story:"Dashboard com grid de métricas — `3 - Symmetric`.\r\nTrês widgets de indicador lado a lado, cada um em `col-4`.",...y.parameters?.docs?.description}}};export{u as AllVariants,y as DashboardGrid,x as MobileCollapse,p as MultipleRows,i as OneColumn,c as Playground,g as SettingsPage,m as ThreeSymmetric,d as TwoAsymmetric,t as TwoSymmetric,D as __namedExportsOrder,w as default};
