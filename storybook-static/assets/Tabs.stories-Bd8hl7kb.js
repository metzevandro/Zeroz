import{r as l,j as a}from"./iframe-CxNvl9BI.js";/* empty css               */import{B as w}from"./Badge-KKabPQMN.js";import"./preload-helper-PPVm8Dsz.js";function D({count:t}){const[o,i]=l.useState(0),[j,R]=l.useState({left:0,width:0}),c=l.useRef(null),p=l.useCallback(r=>{const n=c.current;if(!n)return;const m=n.children[r];if(!m)return;const F=n.getBoundingClientRect(),C=m.getBoundingClientRect();R({left:C.left-F.left+n.scrollLeft,width:C.width})},[]),A=l.useCallback(r=>{const n=c.current;if(!n)return;const m=n.children[r];if(!m)return;const F=m.getBoundingClientRect(),C=n.getBoundingClientRect(),T=F.left-C.left-(n.clientWidth-F.width)/2;n.scrollTo({left:n.scrollLeft+T,behavior:"smooth"})},[]),d=l.useCallback(r=>{i(r),p(r),A(r)},[p,A]);return l.useLayoutEffect(()=>{p(o)},[t]),{activeTab:o,indicatorStyle:j,tabItemGroupRef:c,setActiveTab:d}}function P({content:t}){return a.jsx("div",{className:"tab-root",children:a.jsx("div",{children:t})})}const s=({tabs:t,widthFull:o=!1})=>{const{activeTab:i,indicatorStyle:j,tabItemGroupRef:R,setActiveTab:c}=D({count:t.length}),p=o?{width:`${100/t.length}%`}:void 0;return a.jsxs("div",{className:"tab-root",children:[a.jsxs("div",{className:"tab-item-group",ref:R,children:[t.map((A,d)=>a.jsx("button",{style:p,className:`tab-item ${d===i?"tab-item-active":""}`,onClick:()=>c(d),role:"tab","aria-selected":d===i,children:A.label},d)),a.jsx("div",{className:"tab-indicator",style:{left:j.left,width:j.width}})]}),a.jsx("div",{className:"tab-content",role:"tabpanel",children:t[i]&&a.jsx(P,{content:t[i].content})})]})},L={title:"Components/Tabs",component:s,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
O **Tabs** renderiza uma faixa horizontal de abas com indicador deslizante animado
e um painel de conteúdo para a aba ativa.

O indicador desliza suavemente entre as abas via transições CSS em um elemento
absolutamente posicionado cujas propriedades \`left\` e \`width\` são derivadas
do \`getBoundingClientRect()\` do botão ativo.

Quando a faixa transborda horizontalmente, a aba ativa é automaticamente
centralizada na área visível via scroll suave.

### Props
| Prop         | Tipo          | Padrão    | Descrição                                                          |
|--------------|---------------|-----------|--------------------------------------------------------------------|
| \`tabs\`      | \`TabItem[]\`  | —         | Array de definições de aba. Cada entrada produz um botão e painel  |
| \`widthFull\` | \`boolean\`   | \`false\`  | Estica cada botão para preencher uma fração igual da largura       |

### TabItem
| Campo      | Tipo               | Descrição                                    |
|------------|--------------------|----------------------------------------------|
| \`label\`   | \`string\`          | Texto exibido no botão da aba                |
| \`content\` | \`React.ReactNode\` | Conteúdo renderizado quando a aba está ativa |

### Quando usar
- Alternar entre visualizações relacionadas dentro do mesmo contexto
- Conteúdo denso que pertence à mesma página mas não pode ser exibido de uma vez

### Boas práticas
- Mantenha os labels curtos (1–2 palavras) para evitar overflow em telas pequenas
- Use \`widthFull\` quando há 2–4 abas e deseja que preencham a largura uniformemente
- Evite mais de 6–7 abas — prefira um dropdown ou navegação lateral
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10080"}},argTypes:{widthFull:{control:"boolean",description:"Quando `true`, estica cada botão de aba para preencher uma fração igual da largura disponível.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},tabs:{control:!1,description:"Array de objetos `{ label, content }` que definem cada aba e seu painel de conteúdo. Use `render` nas stories — JSX em `args` causa erros de serialização no Storybook.",table:{type:{summary:"TabItem[]"}}}}},e=({title:t,description:o})=>a.jsxs("div",{style:{padding:"var(--s-spacing-x-small) 0"},children:[a.jsx("p",{style:{font:"var(--s-typography-paragraph-strong)"},children:t}),o&&a.jsx("p",{style:{font:"var(--s-typography-paragraph-regular)"},children:o})]}),u={name:"Default",render:()=>a.jsx(s,{tabs:[{label:"Visão geral",content:a.jsx(e,{title:"Visão geral",description:"Resumo consolidado das informações do registro."})},{label:"Detalhes",content:a.jsx(e,{title:"Detalhes",description:"Informações completas e campos detalhados."})},{label:"Histórico",content:a.jsx(e,{title:"Histórico",description:"Registro cronológico de todas as alterações."})}]})},b={name:"Largura total (widthFull)",render:()=>a.jsx(s,{widthFull:!0,tabs:[{label:"Visão geral",content:a.jsx(e,{title:"Visão geral",description:"Resumo consolidado das informações do registro."})},{label:"Detalhes",content:a.jsx(e,{title:"Detalhes",description:"Informações completas e campos detalhados."})},{label:"Histórico",content:a.jsx(e,{title:"Histórico",description:"Registro cronológico de todas as alterações."})}]})},x={name:"Comparativo — largura automática vs. total",render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-large)"},children:[a.jsxs("div",{children:[a.jsx("small",{style:{display:"block",marginBottom:"var(--s-spacing-nano)"},children:"widthFull: false (padrão)"}),a.jsx(s,{tabs:[{label:"Aba 1",content:a.jsx(e,{title:"Aba 1"})},{label:"Aba 2",content:a.jsx(e,{title:"Aba 2"})},{label:"Aba 3",content:a.jsx(e,{title:"Aba 3"})}]})]}),a.jsxs("div",{children:[a.jsx("small",{style:{display:"block",marginBottom:"var(--s-spacing-nano)"},children:"widthFull: true"}),a.jsx(s,{widthFull:!0,tabs:[{label:"Aba 1",content:a.jsx(e,{title:"Aba 1"})},{label:"Aba 2",content:a.jsx(e,{title:"Aba 2"})},{label:"Aba 3",content:a.jsx(e,{title:"Aba 3"})}]})]})]})},g={name:"Duas abas",render:()=>a.jsx(s,{widthFull:!0,tabs:[{label:"Ativos",content:a.jsx(e,{title:"Ativos",description:"Registros ativos no sistema."})},{label:"Arquivados",content:a.jsx(e,{title:"Arquivados",description:"Registros arquivados e inativados."})}]})},v={name:"Muitas abas (scrollável)",render:()=>a.jsx(s,{tabs:["Dashboard","Análises","Usuários","Faturamento","Configurações","Integrações","Logs","Suporte"].map(t=>({label:t,content:a.jsx(e,{title:t,description:`Conteúdo da aba ${t}.`})}))})},f={name:"Conteúdo rico no painel",render:()=>a.jsx(s,{tabs:[{label:"Resumo",content:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",padding:"var(--s-spacing-x-small) 0"},children:[a.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-nano)"},children:[a.jsx(w,{label:"Ativo",type:"light",variant:"success"}),a.jsx(w,{label:"Pro",type:"default",variant:"primary"})]}),a.jsx("p",{style:{font:"var(--s-typography-paragraph-regular)"},children:"Conta criada em Janeiro de 2024. Plano Pro com renovação mensal."})]})},{label:"Membros",content:a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",padding:"var(--s-spacing-x-small) 0"},children:["Ana Souza","Carlos Lima","Jane Doe"].map(t=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx("small",{children:t}),a.jsx(w,{label:"Editor",type:"light",variant:"default"})]},t))})},{label:"Atividade",content:a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)",padding:"var(--s-spacing-x-small) 0"},children:["Registro atualizado por Ana Souza — hoje às 14:32","Novo membro adicionado — ontem às 09:15","Plano alterado para Pro — 15/03/2025"].map(t=>a.jsx("small",{children:t},t))})}]})},h={name:"Layout mobile (≤ 490px)",globals:{viewport:{value:"mobile5",isRotated:!1}},render:()=>a.jsx(s,{widthFull:!0,tabs:[{label:"Visão geral",content:a.jsx(e,{title:"Visão geral",description:"Resumo das informações."})},{label:"Detalhes",content:a.jsx(e,{title:"Detalhes",description:"Informações detalhadas."})},{label:"Histórico",content:a.jsx(e,{title:"Histórico",description:"Registro de alterações."})}]})},y={name:"Edge case — labels longos",render:()=>a.jsx(s,{tabs:[{label:"Informações gerais",content:a.jsx(e,{title:"Informações gerais"})},{label:"Configurações avançadas",content:a.jsx(e,{title:"Configurações avançadas"})},{label:"Histórico de alterações",content:a.jsx(e,{title:"Histórico de alterações"})}]})},E={name:"Edge case — aba única",render:()=>a.jsx(s,{tabs:[{label:"Visão geral",content:a.jsx(e,{title:"Visão geral",description:"Apenas uma aba disponível."})}]})},B=["Default","WidthFull","WidthComparison","TwoTabs","ManyTabs","RichContent","MobileLayout","LongLabels","SingleTab"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Default",
  render: () => <Tabs tabs={[{
    label: "Visão geral",
    content: <Panel title="Visão geral" description="Resumo consolidado das informações do registro." />
  }, {
    label: "Detalhes",
    content: <Panel title="Detalhes" description="Informações completas e campos detalhados." />
  }, {
    label: "Histórico",
    content: <Panel title="Histórico" description="Registro cronológico de todas as alterações." />
  }]} />
}`,...u.parameters?.docs?.source},description:{story:`Três abas padrão com conteúdo de painel.\r
Clique nas abas para ver o indicador deslizar e o conteúdo trocar.`,...u.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Largura total (widthFull)",
  render: () => <Tabs widthFull tabs={[{
    label: "Visão geral",
    content: <Panel title="Visão geral" description="Resumo consolidado das informações do registro." />
  }, {
    label: "Detalhes",
    content: <Panel title="Detalhes" description="Informações completas e campos detalhados." />
  }, {
    label: "Histórico",
    content: <Panel title="Histórico" description="Registro cronológico de todas as alterações." />
  }]} />
}`,...b.parameters?.docs?.source},description:{story:`Abas em largura total — cada botão preenche uma fração igual da largura.\r
Recomendado para 2–4 abas em containers com largura definida.`,...b.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Comparativo — largura automática vs. total",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-large)"
  }}>\r
      <div>\r
        <small style={{
        display: "block",
        marginBottom: "var(--s-spacing-nano)"
      }}>\r
          widthFull: false (padrão)\r
        </small>\r
        <Tabs tabs={[{
        label: "Aba 1",
        content: <Panel title="Aba 1" />
      }, {
        label: "Aba 2",
        content: <Panel title="Aba 2" />
      }, {
        label: "Aba 3",
        content: <Panel title="Aba 3" />
      }]} />\r
      </div>\r
      <div>\r
        <small style={{
        display: "block",
        marginBottom: "var(--s-spacing-nano)"
      }}>\r
          widthFull: true\r
        </small>\r
        <Tabs widthFull tabs={[{
        label: "Aba 1",
        content: <Panel title="Aba 1" />
      }, {
        label: "Aba 2",
        content: <Panel title="Aba 2" />
      }, {
        label: "Aba 3",
        content: <Panel title="Aba 3" />
      }]} />\r
      </div>\r
    </div>
}`,...x.parameters?.docs?.source},description:{story:"Comparativo lado a lado de largura automática vs. largura total.",...x.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Duas abas",
  render: () => <Tabs widthFull tabs={[{
    label: "Ativos",
    content: <Panel title="Ativos" description="Registros ativos no sistema." />
  }, {
    label: "Arquivados",
    content: <Panel title="Arquivados" description="Registros arquivados e inativados." />
  }]} />
}`,...g.parameters?.docs?.source},description:{story:'Duas abas com `widthFull` — padrão comum para alternância binária\r\ncomo "Ativos / Arquivados" ou "Entrada / Saída".',...g.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Muitas abas (scrollável)",
  render: () => <Tabs tabs={["Dashboard", "Análises", "Usuários", "Faturamento", "Configurações", "Integrações", "Logs", "Suporte"].map(label => ({
    label,
    content: <Panel title={label} description={\`Conteúdo da aba \${label}.\`} />
  }))} />
}`,...v.parameters?.docs?.source},description:{story:`Muitas abas — demonstra o scroll horizontal automático e o\r
comportamento de centralização da aba ativa quando a faixa transborda.\r
Clique em abas longe da vista para ver o auto-scroll.`,...v.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Conteúdo rico no painel",
  render: () => <Tabs tabs={[{
    label: "Resumo",
    content: <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)",
      padding: "var(--s-spacing-x-small) 0"
    }}>\r
              <div style={{
        display: "flex",
        gap: "var(--s-spacing-nano)"
      }}>\r
                <Badge label="Ativo" type="light" variant="success" />\r
                <Badge label="Pro" type="default" variant="primary" />\r
              </div>\r
              <p style={{
        font: "var(--s-typography-paragraph-regular)"
      }}>\r
                Conta criada em Janeiro de 2024. Plano Pro com renovação mensal.\r
              </p>\r
            </div>
  }, {
    label: "Membros",
    content: <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)",
      padding: "var(--s-spacing-x-small) 0"
    }}>\r
              {["Ana Souza", "Carlos Lima", "Jane Doe"].map(name => <div key={name} style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>\r
                  <small>{name}</small>\r
                  <Badge label="Editor" type="light" variant="default" />\r
                </div>)}\r
            </div>
  }, {
    label: "Atividade",
    content: <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-nano)",
      padding: "var(--s-spacing-x-small) 0"
    }}>\r
              {["Registro atualizado por Ana Souza — hoje às 14:32", "Novo membro adicionado — ontem às 09:15", "Plano alterado para Pro — 15/03/2025"].map(event => <small key={event}>{event}</small>)}\r
            </div>
  }]} />
}`,...f.parameters?.docs?.source},description:{story:"Conteúdo do painel como ReactNode livre — demonstra que `content`\r\naceita qualquer elemento React, incluindo Badges, listas e componentes compostos.",...f.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Layout mobile (≤ 490px)",
  globals: {
    viewport: {
      value: "mobile5",
      isRotated: false
    }
  },
  render: () => <Tabs widthFull tabs={[{
    label: "Visão geral",
    content: <Panel title="Visão geral" description="Resumo das informações." />
  }, {
    label: "Detalhes",
    content: <Panel title="Detalhes" description="Informações detalhadas." />
  }, {
    label: "Histórico",
    content: <Panel title="Histórico" description="Registro de alterações." />
  }]} />
}`,...h.parameters?.docs?.source},description:{story:`Layout mobile (≤ 490px) — padding das abas é reduzido automaticamente\r
via media query para acomodar labels em viewports estreitos.`,...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Edge case — labels longos",
  render: () => <Tabs tabs={[{
    label: "Informações gerais",
    content: <Panel title="Informações gerais" />
  }, {
    label: "Configurações avançadas",
    content: <Panel title="Configurações avançadas" />
  }, {
    label: "Histórico de alterações",
    content: <Panel title="Histórico de alterações" />
  }]} />
}`,...y.parameters?.docs?.source},description:{story:"Labels longos — valida o comportamento de `text-wrap: nowrap` e\r\noverflow horizontal quando os labels excedem o espaço disponível.",...y.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Edge case — aba única",
  render: () => <Tabs tabs={[{
    label: "Visão geral",
    content: <Panel title="Visão geral" description="Apenas uma aba disponível." />
  }]} />
}`,...E.parameters?.docs?.source},description:{story:`Aba única — edge case sem valor de navegação.\r
O indicador ocupa toda a largura do único botão.`,...E.parameters?.docs?.description}}};export{u as Default,y as LongLabels,v as ManyTabs,h as MobileLayout,f as RichContent,E as SingleTab,g as TwoTabs,x as WidthComparison,b as WidthFull,B as __namedExportsOrder,L as default};
