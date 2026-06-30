import{r as l,j as a}from"./iframe-Cuzq1CpA.js";/* empty css               */import{B as w}from"./Badge-XkxE5KvQ.js";import"./preload-helper-PPVm8Dsz.js";function ya({count:o}){const[s,i]=l.useState(0),[j,R]=l.useState({left:0,width:0}),c=l.useRef(null),p=l.useCallback(r=>{const t=c.current;if(!t)return;const m=t.children[r];if(!m)return;const A=t.getBoundingClientRect(),C=m.getBoundingClientRect();R({left:C.left-A.left+t.scrollLeft,width:C.width})},[]),T=l.useCallback(r=>{const t=c.current;if(!t)return;const m=t.children[r];if(!m)return;const A=m.getBoundingClientRect(),C=t.getBoundingClientRect(),_a=A.left-C.left-(t.clientWidth-A.width)/2;t.scrollTo({left:t.scrollLeft+_a,behavior:"smooth"})},[]),d=l.useCallback(r=>{i(r),p(r),T(r)},[p,T]);return l.useLayoutEffect(()=>{p(s)},[o]),{activeTab:s,indicatorStyle:j,tabItemGroupRef:c,setActiveTab:d}}function xa({content:o}){return a.jsx("div",{className:"tab-root",children:a.jsx("div",{children:o})})}const n=({tabs:o,widthFull:s=!1})=>{const{activeTab:i,indicatorStyle:j,tabItemGroupRef:R,setActiveTab:c}=ya({count:o.length}),p=s?{width:`${100/o.length}%`}:void 0;return a.jsxs("div",{className:"tab-root",children:[a.jsxs("div",{className:"tab-item-group",ref:R,children:[o.map((T,d)=>a.jsx("button",{style:p,className:`tab-item ${d===i?"tab-item-active":""}`,onClick:()=>c(d),role:"tab","aria-selected":d===i,children:T.label},d)),a.jsx("div",{className:"tab-indicator",style:{left:j.left,width:j.width}})]}),a.jsx("div",{className:"tab-content",role:"tabpanel",children:o[i]&&a.jsx(xa,{content:o[i].content})})]})};var D,P,S,L,F,z,q,I,M,B,V,H,E,W,k,N,J,O,G,U,$,Q,Z,X,K,Y,aa,ea,oa,ta,na,sa,ra,la,ia,da,ca,pa,ma,ua,ba,va,ga,ha,fa;const Ra={title:"Components/Tabs",component:n,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
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
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10080"}},argTypes:{widthFull:{control:"boolean",description:"Quando `true`, estica cada botão de aba para preencher uma fração igual da largura disponível.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},tabs:{control:!1,description:"Array de objetos `{ label, content }` que definem cada aba e seu painel de conteúdo. Use `render` nas stories — JSX em `args` causa erros de serialização no Storybook.",table:{type:{summary:"TabItem[]"}}}}},e=({title:o,description:s})=>a.jsxs("div",{style:{padding:"var(--s-spacing-x-small) 0"},children:[a.jsx("p",{style:{font:"var(--s-typography-paragraph-strong)"},children:o}),s&&a.jsx("p",{style:{font:"var(--s-typography-paragraph-regular)"},children:s})]}),u={name:"Default",render:()=>a.jsx(n,{tabs:[{label:"Visão geral",content:a.jsx(e,{title:"Visão geral",description:"Resumo consolidado das informações do registro."})},{label:"Detalhes",content:a.jsx(e,{title:"Detalhes",description:"Informações completas e campos detalhados."})},{label:"Histórico",content:a.jsx(e,{title:"Histórico",description:"Registro cronológico de todas as alterações."})}]})},b={name:"Largura total (widthFull)",render:()=>a.jsx(n,{widthFull:!0,tabs:[{label:"Visão geral",content:a.jsx(e,{title:"Visão geral",description:"Resumo consolidado das informações do registro."})},{label:"Detalhes",content:a.jsx(e,{title:"Detalhes",description:"Informações completas e campos detalhados."})},{label:"Histórico",content:a.jsx(e,{title:"Histórico",description:"Registro cronológico de todas as alterações."})}]})},v={name:"Comparativo — largura automática vs. total",render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-large)"},children:[a.jsxs("div",{children:[a.jsx("small",{style:{display:"block",marginBottom:"var(--s-spacing-nano)"},children:"widthFull: false (padrão)"}),a.jsx(n,{tabs:[{label:"Aba 1",content:a.jsx(e,{title:"Aba 1"})},{label:"Aba 2",content:a.jsx(e,{title:"Aba 2"})},{label:"Aba 3",content:a.jsx(e,{title:"Aba 3"})}]})]}),a.jsxs("div",{children:[a.jsx("small",{style:{display:"block",marginBottom:"var(--s-spacing-nano)"},children:"widthFull: true"}),a.jsx(n,{widthFull:!0,tabs:[{label:"Aba 1",content:a.jsx(e,{title:"Aba 1"})},{label:"Aba 2",content:a.jsx(e,{title:"Aba 2"})},{label:"Aba 3",content:a.jsx(e,{title:"Aba 3"})}]})]})]})},g={name:"Duas abas",render:()=>a.jsx(n,{widthFull:!0,tabs:[{label:"Ativos",content:a.jsx(e,{title:"Ativos",description:"Registros ativos no sistema."})},{label:"Arquivados",content:a.jsx(e,{title:"Arquivados",description:"Registros arquivados e inativados."})}]})},h={name:"Muitas abas (scrollável)",render:()=>a.jsx(n,{tabs:["Dashboard","Análises","Usuários","Faturamento","Configurações","Integrações","Logs","Suporte"].map(o=>({label:o,content:a.jsx(e,{title:o,description:`Conteúdo da aba ${o}.`})}))})},f={name:"Conteúdo rico no painel",render:()=>a.jsx(n,{tabs:[{label:"Resumo",content:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",padding:"var(--s-spacing-x-small) 0"},children:[a.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-nano)"},children:[a.jsx(w,{label:"Ativo",type:"light",variant:"success"}),a.jsx(w,{label:"Pro",type:"default",variant:"primary"})]}),a.jsx("p",{style:{font:"var(--s-typography-paragraph-regular)"},children:"Conta criada em Janeiro de 2024. Plano Pro com renovação mensal."})]})},{label:"Membros",content:a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",padding:"var(--s-spacing-x-small) 0"},children:["Ana Souza","Carlos Lima","Jane Doe"].map(o=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx("small",{children:o}),a.jsx(w,{label:"Editor",type:"light",variant:"default"})]},o))})},{label:"Atividade",content:a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)",padding:"var(--s-spacing-x-small) 0"},children:["Registro atualizado por Ana Souza — hoje às 14:32","Novo membro adicionado — ontem às 09:15","Plano alterado para Pro — 15/03/2025"].map(o=>a.jsx("small",{children:o},o))})}]})},_={name:"Layout mobile (≤ 490px)",globals:{viewport:{value:"mobile5",isRotated:!1}},render:()=>a.jsx(n,{widthFull:!0,tabs:[{label:"Visão geral",content:a.jsx(e,{title:"Visão geral",description:"Resumo das informações."})},{label:"Detalhes",content:a.jsx(e,{title:"Detalhes",description:"Informações detalhadas."})},{label:"Histórico",content:a.jsx(e,{title:"Histórico",description:"Registro de alterações."})}]})},y={name:"Edge case — labels longos",render:()=>a.jsx(n,{tabs:[{label:"Informações gerais",content:a.jsx(e,{title:"Informações gerais"})},{label:"Configurações avançadas",content:a.jsx(e,{title:"Configurações avançadas"})},{label:"Histórico de alterações",content:a.jsx(e,{title:"Histórico de alterações"})}]})},x={name:"Edge case — aba única",render:()=>a.jsx(n,{tabs:[{label:"Visão geral",content:a.jsx(e,{title:"Visão geral",description:"Apenas uma aba disponível."})}]})};u.parameters={...u.parameters,docs:{...(D=u.parameters)===null||D===void 0?void 0:D.docs,source:{originalSource:`{
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
}`,...(S=u.parameters)===null||S===void 0||(P=S.docs)===null||P===void 0?void 0:P.source},description:{story:`Três abas padrão com conteúdo de painel.\r
Clique nas abas para ver o indicador deslizar e o conteúdo trocar.`,...(F=u.parameters)===null||F===void 0||(L=F.docs)===null||L===void 0?void 0:L.description}}};b.parameters={...b.parameters,docs:{...(z=b.parameters)===null||z===void 0?void 0:z.docs,source:{originalSource:`{
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
}`,...(I=b.parameters)===null||I===void 0||(q=I.docs)===null||q===void 0?void 0:q.source},description:{story:`Abas em largura total — cada botão preenche uma fração igual da largura.\r
Recomendado para 2–4 abas em containers com largura definida.`,...(B=b.parameters)===null||B===void 0||(M=B.docs)===null||M===void 0?void 0:M.description}}};v.parameters={...v.parameters,docs:{...(V=v.parameters)===null||V===void 0?void 0:V.docs,source:{originalSource:`{
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
}`,...(E=v.parameters)===null||E===void 0||(H=E.docs)===null||H===void 0?void 0:H.source},description:{story:"Comparativo lado a lado de largura automática vs. largura total.",...(k=v.parameters)===null||k===void 0||(W=k.docs)===null||W===void 0?void 0:W.description}}};g.parameters={...g.parameters,docs:{...(N=g.parameters)===null||N===void 0?void 0:N.docs,source:{originalSource:`{
  name: "Duas abas",
  render: () => <Tabs widthFull tabs={[{
    label: "Ativos",
    content: <Panel title="Ativos" description="Registros ativos no sistema." />
  }, {
    label: "Arquivados",
    content: <Panel title="Arquivados" description="Registros arquivados e inativados." />
  }]} />
}`,...(O=g.parameters)===null||O===void 0||(J=O.docs)===null||J===void 0?void 0:J.source},description:{story:'Duas abas com `widthFull` — padrão comum para alternância binária\r\ncomo "Ativos / Arquivados" ou "Entrada / Saída".',...(U=g.parameters)===null||U===void 0||(G=U.docs)===null||G===void 0?void 0:G.description}}};h.parameters={...h.parameters,docs:{...($=h.parameters)===null||$===void 0?void 0:$.docs,source:{originalSource:`{
  name: "Muitas abas (scrollável)",
  render: () => <Tabs tabs={["Dashboard", "Análises", "Usuários", "Faturamento", "Configurações", "Integrações", "Logs", "Suporte"].map(label => ({
    label,
    content: <Panel title={label} description={\`Conteúdo da aba \${label}.\`} />
  }))} />
}`,...(Z=h.parameters)===null||Z===void 0||(Q=Z.docs)===null||Q===void 0?void 0:Q.source},description:{story:`Muitas abas — demonstra o scroll horizontal automático e o\r
comportamento de centralização da aba ativa quando a faixa transborda.\r
Clique em abas longe da vista para ver o auto-scroll.`,...(K=h.parameters)===null||K===void 0||(X=K.docs)===null||X===void 0?void 0:X.description}}};f.parameters={...f.parameters,docs:{...(Y=f.parameters)===null||Y===void 0?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ea=f.parameters)===null||ea===void 0||(aa=ea.docs)===null||aa===void 0?void 0:aa.source},description:{story:"Conteúdo do painel como ReactNode livre — demonstra que `content`\r\naceita qualquer elemento React, incluindo Badges, listas e componentes compostos.",...(ta=f.parameters)===null||ta===void 0||(oa=ta.docs)===null||oa===void 0?void 0:oa.description}}};_.parameters={..._.parameters,docs:{...(na=_.parameters)===null||na===void 0?void 0:na.docs,source:{originalSource:`{
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
}`,...(ra=_.parameters)===null||ra===void 0||(sa=ra.docs)===null||sa===void 0?void 0:sa.source},description:{story:`Layout mobile (≤ 490px) — padding das abas é reduzido automaticamente\r
via media query para acomodar labels em viewports estreitos.`,...(ia=_.parameters)===null||ia===void 0||(la=ia.docs)===null||la===void 0?void 0:la.description}}};y.parameters={...y.parameters,docs:{...(da=y.parameters)===null||da===void 0?void 0:da.docs,source:{originalSource:`{
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
}`,...(pa=y.parameters)===null||pa===void 0||(ca=pa.docs)===null||ca===void 0?void 0:ca.source},description:{story:"Labels longos — valida o comportamento de `text-wrap: nowrap` e\r\noverflow horizontal quando os labels excedem o espaço disponível.",...(ua=y.parameters)===null||ua===void 0||(ma=ua.docs)===null||ma===void 0?void 0:ma.description}}};x.parameters={...x.parameters,docs:{...(ba=x.parameters)===null||ba===void 0?void 0:ba.docs,source:{originalSource:`{
  name: "Edge case — aba única",
  render: () => <Tabs tabs={[{
    label: "Visão geral",
    content: <Panel title="Visão geral" description="Apenas uma aba disponível." />
  }]} />
}`,...(ga=x.parameters)===null||ga===void 0||(va=ga.docs)===null||va===void 0?void 0:va.source},description:{story:`Aba única — edge case sem valor de navegação.\r
O indicador ocupa toda a largura do único botão.`,...(fa=x.parameters)===null||fa===void 0||(ha=fa.docs)===null||ha===void 0?void 0:ha.description}}};const wa=["Default","WidthFull","WidthComparison","TwoTabs","ManyTabs","RichContent","MobileLayout","LongLabels","SingleTab"];export{u as Default,y as LongLabels,h as ManyTabs,_ as MobileLayout,f as RichContent,x as SingleTab,g as TwoTabs,v as WidthComparison,b as WidthFull,wa as __namedExportsOrder,Ra as default};
