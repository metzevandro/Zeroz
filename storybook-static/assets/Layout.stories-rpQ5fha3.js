import{R as _o,j as o}from"./iframe-C_0AXUlQ.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";const bo={1:["col-12"],"2 - Symmetric":["col-6","col-6"],"2 - Asymmetric":["col-8","col-4"],"3 - Symmetric":["col-4","col-4","col-4"]},e=({children:r,columns:s,...l})=>{const i=bo[s],h=_o.Children.map(r,(yo,ho)=>{var x;const xo=(x=i[ho])!==null&&x!==void 0?x:i[i.length-1];return o.jsx("div",{className:xo,children:yo})});return o.jsx("div",{...l,className:"layout",children:h})};e.displayName="Layout";var _,b,f,S,j,w,C,L,A,R,M,P,D,T,V,k,O,G,z,N,U,q,E,F,B,I,H,X,Z,$,Q,J,K,W,Y,oo,ro,ao,eo,lo,so,io,no,co,to,mo,po,uo,vo,go;const Lo={title:"Templates/Layout",component:e,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
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
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=2416-4556"}},argTypes:{columns:{control:"select",options:["1","2 - Symmetric","2 - Asymmetric","3 - Symmetric"],description:"Variant de colunas. Mapeia cada filho para uma classe `col-X` do grid de 12 colunas.",table:{type:{summary:'"1" | "2 - Symmetric" | "2 - Asymmetric" | "3 - Symmetric"'}}},children:{control:!1,description:"Conteúdo de cada slot. O número de filhos deve corresponder ao número de colunas.",table:{type:{summary:"React.ReactNode"}}}}},a=({col:r})=>o.jsxs("div",{style:{background:"var(--s-color-fill-highlight-light)",border:"1px dashed var(--s-color-border-highlight)",borderRadius:"var(--s-border-radius-medium)",padding:"var(--s-spacing-small) var(--s-spacing-x-small)",textAlign:"center",color:"var(--s-color-content-highlight)",fontFamily:"monospace",fontSize:"13px",minHeight:"72px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"var(--s-spacing-nano)"},children:[o.jsx("strong",{children:"Conteúdo"}),o.jsx("small",{style:{opacity:.7},children:r})]}),n={name:"Playground",args:{columns:"2 - Symmetric"},render:r=>{const l={1:["col-12"],"2 - Symmetric":["col-6","col-6"],"2 - Asymmetric":["col-8","col-4"],"3 - Symmetric":["col-4","col-4","col-4"]}[r.columns];return o.jsx(e,{...r,children:l.map((i,h)=>o.jsx(a,{col:i},h))})}},c={name:"Variante — 1 coluna (col-12)",args:{columns:"1"},render:r=>o.jsxs(e,{...r,children:[o.jsx(a,{col:"col-12 · 100%"}),o.jsx(a,{col:"col-12 · 100%"})]})},t={name:"Variante — 2 colunas simétricas (col-6 + col-6)",args:{columns:"2 - Symmetric"},render:r=>o.jsxs(e,{...r,children:[o.jsx(a,{col:"col-6 · 50%"}),o.jsx(a,{col:"col-6 · 50%"})]})},d={name:"Variante — 2 colunas assimétricas (col-8 + col-4)",args:{columns:"2 - Asymmetric"},render:r=>o.jsxs(e,{...r,children:[o.jsx(a,{col:"col-8 · 66%"}),o.jsx(a,{col:"col-4 · 33%"})]})},m={name:"Variante — 3 colunas simétricas (col-4 + col-4 + col-4)",args:{columns:"3 - Symmetric"},render:r=>o.jsxs(e,{...r,children:[o.jsx(a,{col:"col-4 · 33%"}),o.jsx(a,{col:"col-4 · 33%"}),o.jsx(a,{col:"col-4 · 33%"})]})},p={name:"Múltiplas linhas (row break)",render:()=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[o.jsxs(e,{columns:"3 - Symmetric",children:[o.jsx(a,{col:"col-4"}),o.jsx(a,{col:"col-4"}),o.jsx(a,{col:"col-4"})]}),o.jsxs(e,{columns:"2 - Asymmetric",children:[o.jsx(a,{col:"col-8"}),o.jsx(a,{col:"col-4"})]}),o.jsx(e,{columns:"1",children:o.jsx(a,{col:"col-12"})})]})},fo=[{columns:"1",slots:[{label:"Conteúdo",col:"col-12"},{label:"Conteúdo",col:"col-12"}]},{columns:"2 - Symmetric",slots:[{label:"Esquerda",col:"col-6"},{label:"Direita",col:"col-6"}]},{columns:"2 - Asymmetric",slots:[{label:"Principal",col:"col-8"},{label:"Sidebar",col:"col-4"}]},{columns:"3 - Symmetric",slots:[{label:"A",col:"col-4"},{label:"B",col:"col-4"},{label:"C",col:"col-4"}]}],So=({columns:r,slots:s})=>o.jsxs("div",{children:[o.jsxs("p",{style:{fontFamily:"monospace",fontSize:"12px",marginBottom:"var(--s-spacing-nano)",color:"var(--s-color-content-default)"},children:['columns="',r,'"']}),o.jsx(e,{columns:r,children:s.map(l=>o.jsx(a,{col:l.col},l.label))})]}),u={name:"Matriz — todas as variantes",render:()=>o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-large)"},children:fo.map(r=>o.jsx(So,{columns:r.columns,slots:r.slots},r.columns))})},v={name:"Mobile — colapso (≤ 768px)",globals:{viewport:{value:"mobile5",isRotated:!1}},render:()=>o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:o.jsxs(e,{columns:"3 - Symmetric",children:[o.jsx(a,{col:"col-4 → col-12 no mobile"}),o.jsx(a,{col:"col-4 → col-12 no mobile"}),o.jsx(a,{col:"col-4 → col-12 no mobile"})]})})},g={name:"Contexto real — configurações com sidebar",render:()=>o.jsxs(e,{columns:"2 - Asymmetric",children:[o.jsx("div",{style:{background:"var(--s-color-fill-default)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",padding:"var(--s-spacing-small)",display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)",height:"100%"},children:["Perfil","Segurança","Faturamento","Notificações"].map(r=>o.jsx("div",{style:{padding:"var(--s-spacing-xx-small) var(--s-spacing-x-small)",borderRadius:"var(--s-border-radius-small)",background:r==="Perfil"?"var(--s-color-fill-highlight-light)":"transparent",cursor:"pointer"},children:o.jsx("small",{style:{color:r==="Perfil"?"var(--s-color-content-highlight)":"var(--s-color-content-default)"},children:r})},r))}),o.jsxs("div",{style:{background:"var(--s-color-fill-default)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",padding:"var(--s-spacing-medium)",display:"flex",flexDirection:"column",gap:"var(--s-spacing-small)"},children:[o.jsx("p",{style:{font:"var(--s-typography-paragraph-strong)"},children:"Informações do perfil"}),o.jsx(a,{col:"campo de formulário"}),o.jsx(a,{col:"campo de formulário"})]})]})},y={name:"Contexto real — dashboard com métricas",render:()=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[o.jsx(e,{columns:"3 - Symmetric",children:[{label:"Receita",value:"R$ 48.290",badge:"+12,4%"},{label:"Usuários ativos",value:"1.842",badge:"+3,1%"},{label:"Pedidos",value:"342",badge:"+8,7%"}].map(({label:r,value:s,badge:l})=>o.jsxs("div",{style:{background:"var(--s-color-fill-default)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",padding:"var(--s-spacing-small)",display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[o.jsx("small",{children:r}),o.jsx("p",{style:{font:"var(--s-typography-paragraph-strong)",fontSize:"24px"},children:s}),o.jsx("small",{style:{color:"var(--s-color-content-success)"},children:l})]},r))}),o.jsxs(e,{columns:"2 - Asymmetric",children:[o.jsx(a,{col:"col-8 · gráfico principal"}),o.jsx(a,{col:"col-4 · atividade recente"})]})]})};n.parameters={...n.parameters,docs:{...(_=n.parameters)===null||_===void 0?void 0:_.docs,source:{originalSource:`{
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
}`,...(f=n.parameters)===null||f===void 0||(b=f.docs)===null||b===void 0?void 0:b.source},description:{story:`Story interativa para explorar todas as variantes via Controls.\r
O número de slots se adapta automaticamente à variante selecionada.`,...(j=n.parameters)===null||j===void 0||(S=j.docs)===null||S===void 0?void 0:S.description}}};c.parameters={...c.parameters,docs:{...(w=c.parameters)===null||w===void 0?void 0:w.docs,source:{originalSource:`{
  name: "Variante — 1 coluna (col-12)",
  args: {
    columns: "1"
  },
  render: args => <Layout {...args}>\r
      <Slot col="col-12 · 100%" />\r
      <Slot col="col-12 · 100%" />\r
    </Layout>
}`,...(L=c.parameters)===null||L===void 0||(C=L.docs)===null||C===void 0?void 0:C.source},description:{story:"Coluna única — `col-12` (100%).\r\nCada filho ocupa a linha inteira. Use para conteúdo de largura total.",...(R=c.parameters)===null||R===void 0||(A=R.docs)===null||A===void 0?void 0:A.description}}};t.parameters={...t.parameters,docs:{...(M=t.parameters)===null||M===void 0?void 0:M.docs,source:{originalSource:`{
  name: "Variante — 2 colunas simétricas (col-6 + col-6)",
  args: {
    columns: "2 - Symmetric"
  },
  render: args => <Layout {...args}>\r
      <Slot col="col-6 · 50%" />\r
      <Slot col="col-6 · 50%" />\r
    </Layout>
}`,...(D=t.parameters)===null||D===void 0||(P=D.docs)===null||P===void 0?void 0:P.source},description:{story:"Duas colunas simétricas — `col-6 + col-6` (50% / 50%).\r\nPadrão mais comum para divisão de conteúdo em dois blocos iguais.",...(V=t.parameters)===null||V===void 0||(T=V.docs)===null||T===void 0?void 0:T.description}}};d.parameters={...d.parameters,docs:{...(k=d.parameters)===null||k===void 0?void 0:k.docs,source:{originalSource:`{
  name: "Variante — 2 colunas assimétricas (col-8 + col-4)",
  args: {
    columns: "2 - Asymmetric"
  },
  render: args => <Layout {...args}>\r
      <Slot col="col-8 · 66%" />\r
      <Slot col="col-4 · 33%" />\r
    </Layout>
}`,...(G=d.parameters)===null||G===void 0||(O=G.docs)===null||O===void 0?void 0:O.source},description:{story:"Duas colunas assimétricas — `col-8 + col-4` (66% / 33%).\r\nUse para layouts com área principal e sidebar: conteúdo + filtros, editor + preview.",...(N=d.parameters)===null||N===void 0||(z=N.docs)===null||z===void 0?void 0:z.description}}};m.parameters={...m.parameters,docs:{...(U=m.parameters)===null||U===void 0?void 0:U.docs,source:{originalSource:`{
  name: "Variante — 3 colunas simétricas (col-4 + col-4 + col-4)",
  args: {
    columns: "3 - Symmetric"
  },
  render: args => <Layout {...args}>\r
      <Slot col="col-4 · 33%" />\r
      <Slot col="col-4 · 33%" />\r
      <Slot col="col-4 · 33%" />\r
    </Layout>
}`,...(E=m.parameters)===null||E===void 0||(q=E.docs)===null||q===void 0?void 0:q.source},description:{story:"Três colunas simétricas — `col-4 + col-4 + col-4` (33% cada).\r\nUse para grids de três cards, métricas de dashboard ou planos de pricing.",...(B=m.parameters)===null||B===void 0||(F=B.docs)===null||F===void 0?void 0:F.description}}};p.parameters={...p.parameters,docs:{...(I=p.parameters)===null||I===void 0?void 0:I.docs,source:{originalSource:`{
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
}`,...(X=p.parameters)===null||X===void 0||(H=X.docs)===null||H===void 0?void 0:H.source},description:{story:"Múltiplos `<Layout>` empilhados verticalmente para criar quebras de linha.\r\nCada `<Layout>` é uma linha independente — combine variantes para layouts complexos.",...($=p.parameters)===null||$===void 0||(Z=$.docs)===null||Z===void 0?void 0:Z.description}}};u.parameters={...u.parameters,docs:{...(Q=u.parameters)===null||Q===void 0?void 0:Q.docs,source:{originalSource:`{
  name: "Matriz — todas as variantes",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-large)"
  }}>\r
      {variantConfig.map(v => <VariantRow key={v.columns} columns={v.columns} slots={v.slots} />)}\r
    </div>
}`,...(K=u.parameters)===null||K===void 0||(J=K.docs)===null||J===void 0?void 0:J.source},description:{story:`Todas as variantes empilhadas para comparação visual rápida.\r
Use para validar proporções e espaçamentos após alterações de token.`,...(Y=u.parameters)===null||Y===void 0||(W=Y.docs)===null||W===void 0?void 0:W.description}}};v.parameters={...v.parameters,docs:{...(oo=v.parameters)===null||oo===void 0?void 0:oo.docs,source:{originalSource:`{
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
}`,...(ao=v.parameters)===null||ao===void 0||(ro=ao.docs)===null||ro===void 0?void 0:ro.source},description:{story:"Layout mobile (≤ 768px) — todas as colunas colapsam para `width: 100%`.\r\nAs colunas passam a empilhar verticalmente independentemente da variante.",...(lo=v.parameters)===null||lo===void 0||(eo=lo.docs)===null||eo===void 0?void 0:eo.description}}};g.parameters={...g.parameters,docs:{...(so=g.parameters)===null||so===void 0?void 0:so.docs,source:{originalSource:`{
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
}`,...(no=g.parameters)===null||no===void 0||(io=no.docs)===null||io===void 0?void 0:io.source},description:{story:"Página de configurações com sidebar — `2 - Asymmetric`.\r\nMenu de navegação lateral em `col-4` e conteúdo principal em `col-8`.",...(to=g.parameters)===null||to===void 0||(co=to.docs)===null||co===void 0?void 0:co.description}}};y.parameters={...y.parameters,docs:{...(mo=y.parameters)===null||mo===void 0?void 0:mo.docs,source:{originalSource:`{
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
}`,...(uo=y.parameters)===null||uo===void 0||(po=uo.docs)===null||po===void 0?void 0:po.source},description:{story:"Dashboard com grid de métricas — `3 - Symmetric`.\r\nTrês widgets de indicador lado a lado, cada um em `col-4`.",...(go=y.parameters)===null||go===void 0||(vo=go.docs)===null||vo===void 0?void 0:vo.description}}};const Ao=["Playground","OneColumn","TwoSymmetric","TwoAsymmetric","ThreeSymmetric","MultipleRows","AllVariants","MobileCollapse","SettingsPage","DashboardGrid"];export{u as AllVariants,y as DashboardGrid,v as MobileCollapse,p as MultipleRows,c as OneColumn,n as Playground,g as SettingsPage,m as ThreeSymmetric,d as TwoAsymmetric,t as TwoSymmetric,Ao as __namedExportsOrder,Lo as default};
