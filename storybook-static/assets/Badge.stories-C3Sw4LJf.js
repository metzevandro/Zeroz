import{j as a}from"./iframe-CxNvl9BI.js";/* empty css               */import{B as g}from"./Badge-KKabPQMN.js";import"./preload-helper-PPVm8Dsz.js";const S={title:"Components/Badge",component:g,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10006"}},argTypes:{label:{control:"text",description:"Texto exibido dentro do badge. Mantenha curto — uma palavra ou expressão breve.",table:{defaultValue:{summary:"Label"},type:{summary:"string"}}},type:{control:"radio",options:["default","light"],description:"Estilo visual. `default` = fundo sólido sem borda. `light` = fundo claro com borda colorida.",table:{defaultValue:{summary:"default"},type:{summary:'"default" | "light"'}}},variant:{control:"select",options:["default","primary","success","warning"],description:"Intenção semântica de cor. Combina com `type` para definir a aparência final.",table:{defaultValue:{summary:"default"},type:{summary:'"default" | "primary" | "success" | "warning"'}}}}},n={name:"Playground",args:{label:"Badge",type:"default",variant:"primary"}},t={name:"Default",args:{label:"Padrão",type:"default",variant:"default"}},s={name:"Primary",args:{label:"Novo",type:"default",variant:"primary"}},o={name:"Success",args:{label:"Ativo",type:"default",variant:"success"}},i={name:"Warning",args:{label:"Pendente",type:"default",variant:"warning"}},d={name:"Default — Light",args:{label:"Padrão",type:"light",variant:"default"}},l={name:"Primary — Light",args:{label:"Novo",type:"light",variant:"primary"}},c={name:"Success — Light",args:{label:"Ativo",type:"light",variant:"success"}},p={name:"Warning — Light",args:{label:"Pendente",type:"light",variant:"warning"}},v=["default","primary","success","warning"],b=["default","light"],m={name:"Matriz completa — type × variant",render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:b.map(e=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("small",{children:e}),v.map(r=>a.jsx(g,{label:r,type:e,variant:r},`${e}-${r}`))]},e))})},u={name:"Exemplos em contexto real",render:()=>a.jsx("div",{style:{display:"grid",gap:"16px",width:"300px"},children:[{label:"Pedido #1042",badge:"Enviado",type:"light",variant:"success"},{label:"Pagamento",badge:"Pendente",type:"light",variant:"warning"},{label:"Dashboard",badge:"Beta",type:"default",variant:"primary"},{label:"Relatório Q3",badge:"Rascunho",type:"default",variant:"default"}].map(({label:e,badge:r,type:y,variant:x})=>a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px"},children:[a.jsx("small",{children:e}),a.jsx(g,{label:r,type:y,variant:x})]},e))})},L=["Playground","Default","Primary","Success","Warning","DefaultLight","PrimaryLight","SuccessLight","WarningLight","AllCombinations","InContext"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Playground",
  args: {
    label: "Badge",
    type: "default",
    variant: "primary"
  }
}`,...n.parameters?.docs?.source},description:{story:`Story interativa para explorar todas as combinações de props via Controls.\r
Ponto de entrada recomendado para inspecionar o componente.`,...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    label: "Padrão",
    type: "default",
    variant: "default"
  }
}`,...t.parameters?.docs?.source},description:{story:`Variante neutra sem intenção semântica.\r
Use para estados genéricos como "Rascunho" ou metadados sem significado de status.`,...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    label: "Novo",
    type: "default",
    variant: "primary"
  }
}`,...s.parameters?.docs?.source},description:{story:`Variante de destaque — fundo sólido na cor primária.\r
Use para conteúdo em evidência: "Novo", "Beta", "Em destaque".`,...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Success",
  args: {
    label: "Ativo",
    type: "default",
    variant: "success"
  }
}`,...o.parameters?.docs?.source},description:{story:`Variante de sucesso — fundo sólido verde.\r
Use para estados positivos ou concluídos: "Ativo", "Aprovado", "Entregue".`,...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Warning",
  args: {
    label: "Pendente",
    type: "default",
    variant: "warning"
  }
}`,...i.parameters?.docs?.source},description:{story:`Variante de atenção — fundo sólido amarelo/laranja.\r
Use para estados que requerem atenção: "Pendente", "Em análise", "Atrasado".`,...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Default — Light",
  args: {
    label: "Padrão",
    type: "light",
    variant: "default"
  }
}`,...d.parameters?.docs?.source},description:{story:`Variante neutra com borda — versão menos visualmente dominante do Default.\r
Indicada para contextos com muito conteúdo onde o badge não deve chamar atenção.`,...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Primary — Light",
  args: {
    label: "Novo",
    type: "light",
    variant: "primary"
  }
}`,...l.parameters?.docs?.source},description:{story:`Variante de destaque com fundo claro e borda.\r
Use quando o contexto é denso e a versão sólida seria visualmente pesada.`,...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Success — Light",
  args: {
    label: "Ativo",
    type: "light",
    variant: "success"
  }
}`,...c.parameters?.docs?.source},description:{story:`Variante de sucesso com fundo claro e borda verde.\r
Alternativa sutil ao Success sólido para tabelas e listagens densas.`,...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Warning — Light",
  args: {
    label: "Pendente",
    type: "light",
    variant: "warning"
  }
}`,...p.parameters?.docs?.source},description:{story:`Variante de atenção com fundo claro e borda amarelo/laranja.\r
Alternativa sutil ao Warning sólido para contextos com menor hierarquia visual.`,...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"Matriz completa de todas as combinações válidas de `type` × `variant`.\r\nUse para validação visual rápida após alterações de token ou tema.",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`Badge aplicado ao lado de conteúdo real — simulando tabelas, listas e cards.\r
Demonstra como o componente se comporta em proporção com outros elementos.`,...u.parameters?.docs?.description}}};export{m as AllCombinations,t as Default,d as DefaultLight,u as InContext,n as Playground,s as Primary,l as PrimaryLight,o as Success,c as SuccessLight,i as Warning,p as WarningLight,L as __namedExportsOrder,S as default};
