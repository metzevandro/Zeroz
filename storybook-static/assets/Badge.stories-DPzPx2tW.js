import{j as a}from"./iframe-C_0AXUlQ.js";import{B as ga}from"./Badge-DGiT92MA.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";var v,g,_,y,f,b,h,x,P,L,S,A,D,B,C,V,W,w,I,j,q,E,T,N,R,z,U,M,k,Q,$,O,G,Y,Z,H,F,J,K,X,aa,ea,ra,oa,na,ta,sa,ia,da,la,ca,ma,pa,ua,va;const Sa={title:"Components/Badge",component:ga,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
O **Badge** é um rótulo inline compacto usado para comunicar status, categoria ou metadados.

Renderiza como elemento inline — seguro para uso dentro de células de tabela,
itens de lista, cards ou ao lado de qualquer conteúdo inline.

> Mantenha o \`label\` curto — badges não são adequados para textos longos.
> Use no máximo uma palavra ou uma expressão breve.

### Combinação type × variant
As props \`type\` e \`variant\` trabalham em conjunto para definir a aparência final:

| variant   | type      | resultado                                  |
|-----------|-----------|--------------------------------------------|
| default   | default   | Sólido neutro                              |
| default   | light     | Neutro com borda                           |
| primary   | default   | Sólido na cor de destaque                  |
| primary   | light     | Destaque claro com borda                   |
| success   | default   | Sólido verde                               |
| success   | light     | Verde claro com borda                      |
| warning   | default   | Sólido vermelho                            |
| warning   | light     | Vermelho claro com borda                   |

### Quando usar
- Indicadores de status em tabelas e listas: "Ativo", "Pendente", "Enviado"
- Tags de categoria em cards ou itens de navegação
- Sinalizadores de feature ou ambiente: "Beta", "Novo"
- Contadores ou rótulos compactos em itens de menu

### Quando não usar
- Como único indicador de estado — sempre complemente com texto ou ícone para acessibilidade
- Para ações clicáveis — prefira um \`Button\` com variante adequada
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10006"}},argTypes:{label:{control:"text",description:"Texto exibido dentro do badge. Mantenha curto — uma palavra ou expressão breve.",table:{defaultValue:{summary:"Label"},type:{summary:"string"}}},type:{control:"radio",options:["default","light"],description:"Estilo visual. `default` = fundo sólido sem borda. `light` = fundo claro com borda colorida.",table:{defaultValue:{summary:"default"},type:{summary:'"default" | "light"'}}},variant:{control:"select",options:["default","primary","success","warning"],description:"Intenção semântica de cor. Combina com `type` para definir a aparência final.",table:{defaultValue:{summary:"default"},type:{summary:'"default" | "primary" | "success" | "warning"'}}}}},o={name:"Playground",args:{label:"Badge",type:"default",variant:"primary"}},n={name:"Default",args:{label:"Padrão",type:"default",variant:"default"}},t={name:"Primary",args:{label:"Novo",type:"default",variant:"primary"}},s={name:"Success",args:{label:"Ativo",type:"default",variant:"success"}},i={name:"Warning",args:{label:"Pendente",type:"default",variant:"warning"}},d={name:"Default — Light",args:{label:"Padrão",type:"light",variant:"default"}},l={name:"Primary — Light",args:{label:"Novo",type:"light",variant:"primary"}},c={name:"Success — Light",args:{label:"Ativo",type:"light",variant:"success"}},m={name:"Warning — Light",args:{label:"Pendente",type:"light",variant:"warning"}},fa=["default","primary","success","warning"],ba=["default","light"],p={name:"Matriz completa — type × variant",render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:ba.map(e=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("small",{children:e}),fa.map(r=>a.jsx(ga,{label:r,type:e,variant:r},`${e}-${r}`))]},e))})},u={name:"Exemplos em contexto real",render:()=>a.jsx("div",{style:{display:"grid",gap:"16px",width:"300px"},children:[{label:"Pedido #1042",badge:"Enviado",type:"light",variant:"success"},{label:"Pagamento",badge:"Pendente",type:"light",variant:"warning"},{label:"Dashboard",badge:"Beta",type:"default",variant:"primary"},{label:"Relatório Q3",badge:"Rascunho",type:"default",variant:"default"}].map(({label:e,badge:r,type:_a,variant:ya})=>a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px"},children:[a.jsx("small",{children:e}),a.jsx(ga,{label:r,type:_a,variant:ya})]},e))})};o.parameters={...o.parameters,docs:{...(v=o.parameters)===null||v===void 0?void 0:v.docs,source:{originalSource:`{
  name: "Playground",
  args: {
    label: "Badge",
    type: "default",
    variant: "primary"
  }
}`,...(_=o.parameters)===null||_===void 0||(g=_.docs)===null||g===void 0?void 0:g.source},description:{story:`Story interativa para explorar todas as combinações de props via Controls.\r
Ponto de entrada recomendado para inspecionar o componente.`,...(f=o.parameters)===null||f===void 0||(y=f.docs)===null||y===void 0?void 0:y.description}}};n.parameters={...n.parameters,docs:{...(b=n.parameters)===null||b===void 0?void 0:b.docs,source:{originalSource:`{
  name: "Default",
  args: {
    label: "Padrão",
    type: "default",
    variant: "default"
  }
}`,...(x=n.parameters)===null||x===void 0||(h=x.docs)===null||h===void 0?void 0:h.source},description:{story:`Variante neutra sem intenção semântica.\r
Use para estados genéricos como "Rascunho" ou metadados sem significado de status.`,...(L=n.parameters)===null||L===void 0||(P=L.docs)===null||P===void 0?void 0:P.description}}};t.parameters={...t.parameters,docs:{...(S=t.parameters)===null||S===void 0?void 0:S.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    label: "Novo",
    type: "default",
    variant: "primary"
  }
}`,...(D=t.parameters)===null||D===void 0||(A=D.docs)===null||A===void 0?void 0:A.source},description:{story:`Variante de destaque — fundo sólido na cor primária.\r
Use para conteúdo em evidência: "Novo", "Beta", "Em destaque".`,...(C=t.parameters)===null||C===void 0||(B=C.docs)===null||B===void 0?void 0:B.description}}};s.parameters={...s.parameters,docs:{...(V=s.parameters)===null||V===void 0?void 0:V.docs,source:{originalSource:`{
  name: "Success",
  args: {
    label: "Ativo",
    type: "default",
    variant: "success"
  }
}`,...(w=s.parameters)===null||w===void 0||(W=w.docs)===null||W===void 0?void 0:W.source},description:{story:`Variante de sucesso — fundo sólido verde.\r
Use para estados positivos ou concluídos: "Ativo", "Aprovado", "Entregue".`,...(j=s.parameters)===null||j===void 0||(I=j.docs)===null||I===void 0?void 0:I.description}}};i.parameters={...i.parameters,docs:{...(q=i.parameters)===null||q===void 0?void 0:q.docs,source:{originalSource:`{
  name: "Warning",
  args: {
    label: "Pendente",
    type: "default",
    variant: "warning"
  }
}`,...(T=i.parameters)===null||T===void 0||(E=T.docs)===null||E===void 0?void 0:E.source},description:{story:`Variante de atenção — fundo sólido amarelo/laranja.\r
Use para estados que requerem atenção: "Pendente", "Em análise", "Atrasado".`,...(R=i.parameters)===null||R===void 0||(N=R.docs)===null||N===void 0?void 0:N.description}}};d.parameters={...d.parameters,docs:{...(z=d.parameters)===null||z===void 0?void 0:z.docs,source:{originalSource:`{
  name: "Default — Light",
  args: {
    label: "Padrão",
    type: "light",
    variant: "default"
  }
}`,...(M=d.parameters)===null||M===void 0||(U=M.docs)===null||U===void 0?void 0:U.source},description:{story:`Variante neutra com borda — versão menos visualmente dominante do Default.\r
Indicada para contextos com muito conteúdo onde o badge não deve chamar atenção.`,...(Q=d.parameters)===null||Q===void 0||(k=Q.docs)===null||k===void 0?void 0:k.description}}};l.parameters={...l.parameters,docs:{...($=l.parameters)===null||$===void 0?void 0:$.docs,source:{originalSource:`{
  name: "Primary — Light",
  args: {
    label: "Novo",
    type: "light",
    variant: "primary"
  }
}`,...(G=l.parameters)===null||G===void 0||(O=G.docs)===null||O===void 0?void 0:O.source},description:{story:`Variante de destaque com fundo claro e borda.\r
Use quando o contexto é denso e a versão sólida seria visualmente pesada.`,...(Z=l.parameters)===null||Z===void 0||(Y=Z.docs)===null||Y===void 0?void 0:Y.description}}};c.parameters={...c.parameters,docs:{...(H=c.parameters)===null||H===void 0?void 0:H.docs,source:{originalSource:`{
  name: "Success — Light",
  args: {
    label: "Ativo",
    type: "light",
    variant: "success"
  }
}`,...(J=c.parameters)===null||J===void 0||(F=J.docs)===null||F===void 0?void 0:F.source},description:{story:`Variante de sucesso com fundo claro e borda verde.\r
Alternativa sutil ao Success sólido para tabelas e listagens densas.`,...(X=c.parameters)===null||X===void 0||(K=X.docs)===null||K===void 0?void 0:K.description}}};m.parameters={...m.parameters,docs:{...(aa=m.parameters)===null||aa===void 0?void 0:aa.docs,source:{originalSource:`{
  name: "Warning — Light",
  args: {
    label: "Pendente",
    type: "light",
    variant: "warning"
  }
}`,...(ra=m.parameters)===null||ra===void 0||(ea=ra.docs)===null||ea===void 0?void 0:ea.source},description:{story:`Variante de atenção com fundo claro e borda amarelo/laranja.\r
Alternativa sutil ao Warning sólido para contextos com menor hierarquia visual.`,...(na=m.parameters)===null||na===void 0||(oa=na.docs)===null||oa===void 0?void 0:oa.description}}};p.parameters={...p.parameters,docs:{...(ta=p.parameters)===null||ta===void 0?void 0:ta.docs,source:{originalSource:`{
  name: "Matriz completa — type × variant",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>\r
      {ALL_TYPES.map(type => <div key={type} style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>\r
          <small>{type}</small>\r
          {ALL_VARIANTS.map(variant => <Badge key={\`\${type}-\${variant}\`} label={variant} type={type} variant={variant} />)}\r
        </div>)}\r
    </div>
}`,...(ia=p.parameters)===null||ia===void 0||(sa=ia.docs)===null||sa===void 0?void 0:sa.source},description:{story:"Matriz completa de todas as combinações válidas de `type` × `variant`.\r\nUse para validação visual rápida após alterações de token ou tema.",...(la=p.parameters)===null||la===void 0||(da=la.docs)===null||da===void 0?void 0:da.description}}};u.parameters={...u.parameters,docs:{...(ca=u.parameters)===null||ca===void 0?void 0:ca.docs,source:{originalSource:`{
  name: "Exemplos em contexto real",
  render: () => <div style={{
    display: "grid",
    gap: "16px",
    width: "300px"
  }}>\r
      {[{
      label: "Pedido #1042",
      badge: "Enviado",
      type: "light" as BadgeType,
      variant: "success" as BadgeVariant
    }, {
      label: "Pagamento",
      badge: "Pendente",
      type: "light" as BadgeType,
      variant: "warning" as BadgeVariant
    }, {
      label: "Dashboard",
      badge: "Beta",
      type: "default" as BadgeType,
      variant: "primary" as BadgeVariant
    }, {
      label: "Relatório Q3",
      badge: "Rascunho",
      type: "default" as BadgeType,
      variant: "default" as BadgeVariant
    }].map(({
      label,
      badge,
      type,
      variant
    }) => <div key={label} style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "8px"
    }}>\r
          <small>{label}</small>\r
          <Badge label={badge} type={type} variant={variant} />\r
        </div>)}\r
    </div>
}`,...(pa=u.parameters)===null||pa===void 0||(ma=pa.docs)===null||ma===void 0?void 0:ma.source},description:{story:`Badge aplicado ao lado de conteúdo real — simulando tabelas, listas e cards.\r
Demonstra como o componente se comporta em proporção com outros elementos.`,...(va=u.parameters)===null||va===void 0||(ua=va.docs)===null||ua===void 0?void 0:ua.description}}};const Aa=["Playground","Default","Primary","Success","Warning","DefaultLight","PrimaryLight","SuccessLight","WarningLight","AllCombinations","InContext"];export{p as AllCombinations,n as Default,d as DefaultLight,u as InContext,o as Playground,t as Primary,l as PrimaryLight,s as Success,c as SuccessLight,i as Warning,m as WarningLight,Aa as __namedExportsOrder,Sa as default};
