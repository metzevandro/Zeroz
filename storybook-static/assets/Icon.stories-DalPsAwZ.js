import{j as e}from"./iframe-CxNvl9BI.js";/* empty css               */import{I as a}from"./Icon-Bqm0CoJD.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Components/Icon",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10017"}},argTypes:{icon:{control:"text",description:'Nome do Material Symbol a renderizar (ex: `"search"`, `"logout"`, `"keyboard_arrow_down"`).',table:{type:{summary:"string | undefined"}}},size:{control:"radio",options:["sm","md","lg"],description:"Tamanho renderizado do ícone. `sm` = 16px, `md` = 24px, `lg` = 32px.",table:{defaultValue:{summary:"md"},type:{summary:'"sm" | "md" | "lg"'}}},fill:{control:"boolean",description:"Quando `true`, renderiza o ícone no variante preenchido via eixo `FILL` da fonte variável.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}}}},r={name:"Default",args:{icon:"house",size:"md",fill:!1}},s={name:"Variante — outlined (padrão)",args:{icon:"favorite",size:"md",fill:!1}},i={name:"Variante — filled",args:{icon:"favorite",size:"md",fill:!0}},l={name:"Comparativo — outlined vs filled",render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--s-spacing-medium)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--s-spacing-nano)"},children:[e.jsx(a,{icon:"favorite",size:"md",fill:!1}),e.jsx("small",{children:"outlined"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--s-spacing-nano)"},children:[e.jsx(a,{icon:"favorite",size:"md",fill:!0}),e.jsx("small",{children:"filled"})]})]})},t={name:"Comparativo — tamanhos",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"var(--s-spacing-medium)"},children:["sm","md","lg"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--s-spacing-nano)"},children:[e.jsx(a,{icon:"home",size:n}),e.jsx("small",{children:n})]},n))})},d={name:"Grade de referência — ícones comuns",parameters:{layout:"padded"},render:()=>{const n=["search","close","menu","settings","person","logout","keyboard_arrow_down","keyboard_arrow_right","calendar_month","visibility","visibility_off","delete","edit","add","check","home","inbox","star","favorite","notifications","download","upload","filter_list","bar_chart","cloud_off","folder_open","content_copy","chevron_right","security"];return e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--s-spacing-small)"},children:n.map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--s-spacing-nano)",padding:"var(--s-spacing-x-small)",minWidth:"120px",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)"},children:[e.jsx(a,{icon:o,size:"md"}),e.jsx("small",{style:{textAlign:"center",wordBreak:"break-all"},children:o})]},o))})}},c={name:"Contexto — inline com texto",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[{icon:"check",label:"Pedido confirmado"},{icon:"schedule",label:"Aguardando pagamento"},{icon:"local_shipping",label:"Em trânsito"},{icon:"close",label:"Pedido cancelado"}].map(({icon:n,label:o})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--s-spacing-xx-small)"},children:[e.jsx(a,{icon:n,size:"sm"}),e.jsx("small",{children:o})]},n))})},m={name:"Edge case — icon undefined",args:{icon:void 0,size:"md"}},v=["Default","Outlined","Filled","OutlinedVsFilled","Sizes","CommonIcons","InlineWithText","UndefinedIcon"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    icon: "house",
    size: "md",
    fill: false
  }
}`,...r.parameters?.docs?.source},description:{story:`Ícone outlined no tamanho padrão.\r
Use os Controls para explorar tamanhos e o variante filled.`,...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Variante — outlined (padrão)",
  args: {
    icon: "favorite",
    size: "md",
    fill: false
  }
}`,...s.parameters?.docs?.source},description:{story:"Variante outlined — `fill: false` (padrão).\r\nUse para ações secundárias e ícones de menor hierarquia visual.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Variante — filled",
  args: {
    icon: "favorite",
    size: "md",
    fill: true
  }
}`,...i.parameters?.docs?.source},description:{story:"Variante filled — `fill: true`.\r\nUse para ações ativas, itens selecionados ou ícones de maior hierarquia visual.",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"Comparação lado a lado de outlined vs filled com o mesmo ícone.\r\nA troca é feita via eixo `FILL` da fonte variável — sem carregar\r\num segundo arquivo de fonte.",...l.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"Comparativo dos três tamanhos disponíveis com o mesmo ícone.",...t.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:`Grade de referência com os ícones mais usados no design system.\r
Use como consulta rápida de nomes de ícones disponíveis.`,...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"Ícones inline com texto — demonstra o alinhamento vertical em contexto real.",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Edge case — icon undefined",
  args: {
    icon: undefined,
    size: "md"
  }
}`,...m.parameters?.docs?.source},description:{story:"`icon={undefined}` — o elemento renderiza vazio sem lançar erro.\r\nUse quando o nome do ícone ainda não é conhecido (carregamento assíncrono,\r\nconfiguração dinâmica).",...m.parameters?.docs?.description}}};export{d as CommonIcons,r as Default,i as Filled,c as InlineWithText,s as Outlined,l as OutlinedVsFilled,t as Sizes,m as UndefinedIcon,v as __namedExportsOrder,g as default};
