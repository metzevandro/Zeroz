import{j as e}from"./iframe-C_0AXUlQ.js";/* empty css               */import{I as o}from"./Icon-C3Uq1gPi.js";import"./preload-helper-PPVm8Dsz.js";var p,u,v,f,_,g,x,y,h,I,b,z,j,C,D,w,S,O,F,k,V,U,W,T,q,E,L,P,A,G,B,R,M,Q,Z,H,N,J,K,X;const oe={title:"Components/Icon",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
O **Icon** renderiza um único [Material Symbol](https://fonts.google.com/icons)
usando a fonte de ícones variável — sem carregar arquivos adicionais.

O componente usa \`font-variation-settings\` para alternar entre os variantes
outlined e filled via eixo \`FILL\` da fonte variável, mantendo o bundle leve.

### Tamanhos
| size  | font-size | uso recomendado                                    |
|-------|-----------|----------------------------------------------------|
| \`sm\` | 16px      | Controles compactos, badges, inputs                |
| \`md\` | 24px      | Uso geral — padrão recomendado                     |
| \`lg\` | 32px      | Empty states, áreas de destaque, hero sections     |

### Quando usar
- Inline com texto ou botões para reforçar o significado
- Como indicadores visuais autônomos (status, categoria, ação)

### Boas práticas
- Sempre combine ícones com um label visível ou \`aria-label\` no elemento pai
- Use \`fill\` de forma consistente — evite misturar outlined e filled na mesma região da UI
- Prefira \`"md"\` como tamanho padrão; use \`"sm"\` em controles compactos e \`"lg"\` em empty states
- Passe \`icon={undefined}\` quando o nome ainda não é conhecido — o elemento renderiza vazio sem lançar erro
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10017"}},argTypes:{icon:{control:"text",description:'Nome do Material Symbol a renderizar (ex: `"search"`, `"logout"`, `"keyboard_arrow_down"`).',table:{type:{summary:"string | undefined"}}},size:{control:"radio",options:["sm","md","lg"],description:"Tamanho renderizado do ícone. `sm` = 16px, `md` = 24px, `lg` = 32px.",table:{defaultValue:{summary:"md"},type:{summary:'"sm" | "md" | "lg"'}}},fill:{control:"boolean",description:"Quando `true`, renderiza o ícone no variante preenchido via eixo `FILL` da fonte variável.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}}}},i={name:"Default",args:{icon:"house",size:"md",fill:!1}},r={name:"Variante — outlined (padrão)",args:{icon:"favorite",size:"md",fill:!1}},s={name:"Variante — filled",args:{icon:"favorite",size:"md",fill:!0}},l={name:"Comparativo — outlined vs filled",render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--s-spacing-medium)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--s-spacing-nano)"},children:[e.jsx(o,{icon:"favorite",size:"md",fill:!1}),e.jsx("small",{children:"outlined"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--s-spacing-nano)"},children:[e.jsx(o,{icon:"favorite",size:"md",fill:!0}),e.jsx("small",{children:"filled"})]})]})},d={name:"Comparativo — tamanhos",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"var(--s-spacing-medium)"},children:["sm","md","lg"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--s-spacing-nano)"},children:[e.jsx(o,{icon:"home",size:a}),e.jsx("small",{children:a})]},a))})},t={name:"Grade de referência — ícones comuns",parameters:{layout:"padded"},render:()=>{const a=["search","close","menu","settings","person","logout","keyboard_arrow_down","keyboard_arrow_right","calendar_month","visibility","visibility_off","delete","edit","add","check","home","inbox","star","favorite","notifications","download","upload","filter_list","bar_chart","cloud_off","folder_open","content_copy","chevron_right","security"];return e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--s-spacing-small)"},children:a.map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--s-spacing-nano)",padding:"var(--s-spacing-x-small)",minWidth:"120px",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)"},children:[e.jsx(o,{icon:n,size:"md"}),e.jsx("small",{style:{textAlign:"center",wordBreak:"break-all"},children:n})]},n))})}},c={name:"Contexto — inline com texto",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[{icon:"check",label:"Pedido confirmado"},{icon:"schedule",label:"Aguardando pagamento"},{icon:"local_shipping",label:"Em trânsito"},{icon:"close",label:"Pedido cancelado"}].map(({icon:a,label:n})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--s-spacing-xx-small)"},children:[e.jsx(o,{icon:a,size:"sm"}),e.jsx("small",{children:n})]},a))})},m={name:"Edge case — icon undefined",args:{icon:void 0,size:"md"}};i.parameters={...i.parameters,docs:{...(p=i.parameters)===null||p===void 0?void 0:p.docs,source:{originalSource:`{
  name: "Default",
  args: {
    icon: "house",
    size: "md",
    fill: false
  }
}`,...(v=i.parameters)===null||v===void 0||(u=v.docs)===null||u===void 0?void 0:u.source},description:{story:`Ícone outlined no tamanho padrão.\r
Use os Controls para explorar tamanhos e o variante filled.`,...(_=i.parameters)===null||_===void 0||(f=_.docs)===null||f===void 0?void 0:f.description}}};r.parameters={...r.parameters,docs:{...(g=r.parameters)===null||g===void 0?void 0:g.docs,source:{originalSource:`{
  name: "Variante — outlined (padrão)",
  args: {
    icon: "favorite",
    size: "md",
    fill: false
  }
}`,...(y=r.parameters)===null||y===void 0||(x=y.docs)===null||x===void 0?void 0:x.source},description:{story:"Variante outlined — `fill: false` (padrão).\r\nUse para ações secundárias e ícones de menor hierarquia visual.",...(I=r.parameters)===null||I===void 0||(h=I.docs)===null||h===void 0?void 0:h.description}}};s.parameters={...s.parameters,docs:{...(b=s.parameters)===null||b===void 0?void 0:b.docs,source:{originalSource:`{
  name: "Variante — filled",
  args: {
    icon: "favorite",
    size: "md",
    fill: true
  }
}`,...(j=s.parameters)===null||j===void 0||(z=j.docs)===null||z===void 0?void 0:z.source},description:{story:"Variante filled — `fill: true`.\r\nUse para ações ativas, itens selecionados ou ícones de maior hierarquia visual.",...(D=s.parameters)===null||D===void 0||(C=D.docs)===null||C===void 0?void 0:C.description}}};l.parameters={...l.parameters,docs:{...(w=l.parameters)===null||w===void 0?void 0:w.docs,source:{originalSource:`{
  name: "Comparativo — outlined vs filled",
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "var(--s-spacing-medium)"
  }}>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--s-spacing-nano)"
    }}>\r
        <Icon icon="favorite" size="md" fill={false} />\r
        <small>outlined</small>\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--s-spacing-nano)"
    }}>\r
        <Icon icon="favorite" size="md" fill />\r
        <small>filled</small>\r
      </div>\r
    </div>
}`,...(O=l.parameters)===null||O===void 0||(S=O.docs)===null||S===void 0?void 0:S.source},description:{story:"Comparação lado a lado de outlined vs filled com o mesmo ícone.\r\nA troca é feita via eixo `FILL` da fonte variável — sem carregar\r\num segundo arquivo de fonte.",...(k=l.parameters)===null||k===void 0||(F=k.docs)===null||F===void 0?void 0:F.description}}};d.parameters={...d.parameters,docs:{...(V=d.parameters)===null||V===void 0?void 0:V.docs,source:{originalSource:`{
  name: "Comparativo — tamanhos",
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "var(--s-spacing-medium)"
  }}>\r
      {(["sm", "md", "lg"] as const).map(size => <div key={size} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--s-spacing-nano)"
    }}>\r
          <Icon icon="home" size={size} />\r
          <small>{size}</small>\r
        </div>)}\r
    </div>
}`,...(W=d.parameters)===null||W===void 0||(U=W.docs)===null||U===void 0?void 0:U.source},description:{story:"Comparativo dos três tamanhos disponíveis com o mesmo ícone.",...(q=d.parameters)===null||q===void 0||(T=q.docs)===null||T===void 0?void 0:T.description}}};t.parameters={...t.parameters,docs:{...(E=t.parameters)===null||E===void 0?void 0:E.docs,source:{originalSource:`{
  name: "Grade de referência — ícones comuns",
  parameters: {
    layout: "padded"
  },
  render: () => {
    const icons = ["search", "close", "menu", "settings", "person", "logout", "keyboard_arrow_down", "keyboard_arrow_right", "calendar_month", "visibility", "visibility_off", "delete", "edit", "add", "check", "home", "inbox", "star", "favorite", "notifications", "download", "upload", "filter_list", "bar_chart", "cloud_off", "folder_open", "content_copy", "chevron_right", "security"];
    return <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--s-spacing-small)"
    }}>\r
        {icons.map(name => <div key={name} style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--s-spacing-nano)",
        padding: "var(--s-spacing-x-small)",
        minWidth: '120px',
        border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
        borderRadius: "var(--s-border-radius-medium)"
      }}>\r
            <Icon icon={name} size="md" />\r
            <small style={{
          textAlign: "center",
          wordBreak: "break-all"
        }}>\r
              {name}\r
            </small>\r
          </div>)}\r
      </div>;
  }
}`,...(P=t.parameters)===null||P===void 0||(L=P.docs)===null||L===void 0?void 0:L.source},description:{story:`Grade de referência com os ícones mais usados no design system.\r
Use como consulta rápida de nomes de ícones disponíveis.`,...(G=t.parameters)===null||G===void 0||(A=G.docs)===null||A===void 0?void 0:A.description}}};c.parameters={...c.parameters,docs:{...(B=c.parameters)===null||B===void 0?void 0:B.docs,source:{originalSource:`{
  name: "Contexto — inline com texto",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-x-small)"
  }}>\r
      {[{
      icon: "check",
      label: "Pedido confirmado"
    }, {
      icon: "schedule",
      label: "Aguardando pagamento"
    }, {
      icon: "local_shipping",
      label: "Em trânsito"
    }, {
      icon: "close",
      label: "Pedido cancelado"
    }].map(({
      icon,
      label
    }) => <div key={icon} style={{
      display: "flex",
      alignItems: "center",
      gap: "var(--s-spacing-xx-small)"
    }}>\r
          <Icon icon={icon} size="sm" />\r
          <small>{label}</small>\r
        </div>)}\r
    </div>
}`,...(M=c.parameters)===null||M===void 0||(R=M.docs)===null||R===void 0?void 0:R.source},description:{story:"Ícones inline com texto — demonstra o alinhamento vertical em contexto real.",...(Z=c.parameters)===null||Z===void 0||(Q=Z.docs)===null||Q===void 0?void 0:Q.description}}};m.parameters={...m.parameters,docs:{...(H=m.parameters)===null||H===void 0?void 0:H.docs,source:{originalSource:`{
  name: "Edge case — icon undefined",
  args: {
    icon: undefined,
    size: "md"
  }
}`,...(J=m.parameters)===null||J===void 0||(N=J.docs)===null||N===void 0?void 0:N.source},description:{story:"`icon={undefined}` — o elemento renderiza vazio sem lançar erro.\r\nUse quando o nome do ícone ainda não é conhecido (carregamento assíncrono,\r\nconfiguração dinâmica).",...(X=m.parameters)===null||X===void 0||(K=X.docs)===null||K===void 0?void 0:K.description}}};const ne=["Default","Outlined","Filled","OutlinedVsFilled","Sizes","CommonIcons","InlineWithText","UndefinedIcon"];export{t as CommonIcons,i as Default,s as Filled,c as InlineWithText,r as Outlined,l as OutlinedVsFilled,d as Sizes,m as UndefinedIcon,ne as __namedExportsOrder,oe as default};
