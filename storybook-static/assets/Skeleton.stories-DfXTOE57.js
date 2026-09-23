import{j as e}from"./iframe-CxNvl9BI.js";/* empty css               */import{S as a}from"./Skeleton-C80QNm7w.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Components/Skeleton",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
O **Skeleton** é um placeholder de carregamento que imita o formato do conteúdo
antes de ele estar disponível, evitando layout shift e reduzindo o tempo de espera percebido.

### Quando usar
- Enquanto dados são buscados (texto, imagens, cards, avatares)
- Como substituto de qualquer elemento durante seu estado de carregamento
- Em conjunto com a prop \`skeleton\` de outros componentes (ex: \`<Input skeleton />\`, \`<Avatar skeleton />\`)

### Boas práticas
- Ajuste \`width\` e \`height\` o mais próximo possível das dimensões reais do conteúdo
- Use \`circle\` para avatares, ícones ou qualquer elemento circular
- Agrupe múltiplos skeletons para simular um layout completo
- Remova os skeletons assim que os dados estiverem disponíveis — não os deixe visíveis mais tempo do que o necessário
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=5074-179"}},argTypes:{width:{control:"text",description:'Largura do elemento. Aceita qualquer valor CSS válido (ex: `"200px"`, `"100%"`, `"5rem"`).',table:{type:{summary:"string"}}},height:{control:"text",description:'Altura do elemento. Aceita qualquer valor CSS válido (ex: `"16px"`, `"1.5rem"`).',table:{type:{summary:"string"}}},circle:{control:"boolean",description:"Quando `true`, renderiza um skeleton circular. Ideal para avatares e ícones.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}}}},r={name:"Default",args:{width:"200px",height:"16px",circle:!1}},s={name:"Formato — circular (avatar)",args:{width:"40px",height:"40px",circle:!0}},t={name:"Formato — bloco de largura total",args:{width:"100%",height:"120px"}},n={name:"Composição — bloco de texto",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx(a,{width:"280px",height:"14px"}),e.jsx(a,{width:"240px",height:"14px"}),e.jsx(a,{width:"200px",height:"14px"}),e.jsx(a,{width:"160px",height:"14px"})]})},o={name:"Composição — card de usuário",render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-x-small)",alignItems:"center"},children:[e.jsx(a,{width:"48px",height:"48px",circle:!0}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx(a,{width:"140px",height:"14px"}),e.jsx(a,{width:"100px",height:"12px"})]})]})},i={name:"Composição — card de conteúdo",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",width:"280px",padding:"var(--s-spacing-small)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)"},children:[e.jsx(a,{width:"100%",height:"140px"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx(a,{width:"80%",height:"16px"}),e.jsx(a,{width:"60%",height:"12px"}),e.jsx(a,{width:"70%",height:"12px"})]}),e.jsx(a,{width:"100px",height:"32px"})]})},l={name:"Composição — linha de tabela",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)",width:"480px"},children:Array.from({length:4},(p,c)=>e.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-small)",alignItems:"center",padding:"var(--s-spacing-x-small) 0",borderBottom:"var(--s-border-width-hairline) solid var(--s-color-border-default)"},children:[e.jsx(a,{width:"24px",height:"24px",circle:!0}),e.jsx(a,{width:"140px",height:"12px"}),e.jsx(a,{width:"80px",height:"12px"}),e.jsx(a,{width:"60px",height:"12px"})]},c))})},d={name:"Referência — alturas comuns",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[{height:"12px",label:"12px — caption / label sm"},{height:"14px",label:"14px — paragraph regular"},{height:"16px",label:"16px — label medium"},{height:"20px",label:"20px — heading sm"},{height:"24px",label:"24px — heading md / ícone"},{height:"32px",label:"32px — botão / input"},{height:"40px",label:"40px — input md / avatar md"}].map(({height:p,label:c})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--s-spacing-x-small)"},children:[e.jsx(a,{width:"200px",height:p}),e.jsx("small",{children:c})]},p))})},v=["Default","Circle","FullWidth","TextBlock","UserCard","ContentCard","TableRow","HeightReference"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    width: "200px",
    height: "16px",
    circle: false
  }
}`,...r.parameters?.docs?.source},description:{story:`Placeholder retangular padrão — simula uma linha de texto.\r
Use os Controls para ajustar largura, altura e formato circular.`,...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Formato — circular (avatar)",
  args: {
    width: "40px",
    height: "40px",
    circle: true
  }
}`,...s.parameters?.docs?.source},description:{story:"Placeholder circular — para avatares e ícones.\r\nUse `circle` com largura e altura iguais para garantir a proporção correta.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Formato — bloco de largura total",
  args: {
    width: "100%",
    height: "120px"
  }
}`,...t.parameters?.docs?.source},description:{story:`Bloco de largura total — para cards, imagens e banners.\r
Ocupa 100% do container pai.`,...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Composição — bloco de texto",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-nano)"
  }}>\r
      <Skeleton width="280px" height="14px" />\r
      <Skeleton width="240px" height="14px" />\r
      <Skeleton width="200px" height="14px" />\r
      <Skeleton width="160px" height="14px" />\r
    </div>
}`,...n.parameters?.docs?.source},description:{story:`Múltiplas linhas de texto com larguras variadas.\r
Simula um parágrafo em carregamento — a variação de largura torna\r
o placeholder mais natural e próximo do conteúdo real.`,...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Composição — card de usuário",
  render: () => <div style={{
    display: "flex",
    gap: "var(--s-spacing-x-small)",
    alignItems: "center"
  }}>\r
      <Skeleton width="48px" height="48px" circle />\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-nano)"
    }}>\r
        <Skeleton width="140px" height="14px" />\r
        <Skeleton width="100px" height="12px" />\r
      </div>\r
    </div>
}`,...o.parameters?.docs?.source},description:{story:`Card de usuário — avatar circular + linhas de nome e cargo.\r
Demonstra a composição de múltiplos skeletons para simular um layout completo.\r
Ajuste as dimensões para corresponder ao componente real que substituirão.`,...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Composição — card de conteúdo",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-x-small)",
    width: "280px",
    padding: "var(--s-spacing-small)",
    border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
    borderRadius: "var(--s-border-radius-medium)"
  }}>\r
      <Skeleton width="100%" height="140px" />\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-nano)"
    }}>\r
        <Skeleton width="80%" height="16px" />\r
        <Skeleton width="60%" height="12px" />\r
        <Skeleton width="70%" height="12px" />\r
      </div>\r
      <Skeleton width="100px" height="32px" />\r
    </div>
}`,...i.parameters?.docs?.source},description:{story:`Card completo — imagem de capa + título + descrição + ações.\r
Simula um card de produto ou artigo em carregamento.`,...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Composição — linha de tabela",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-nano)",
    width: "480px"
  }}>\r
      {Array.from({
      length: 4
    }, (_, i) => <div key={i} style={{
      display: "flex",
      gap: "var(--s-spacing-small)",
      alignItems: "center",
      padding: "var(--s-spacing-x-small) 0",
      borderBottom: "var(--s-border-width-hairline) solid var(--s-color-border-default)"
    }}>\r
          <Skeleton width="24px" height="24px" circle />\r
          <Skeleton width="140px" height="12px" />\r
          <Skeleton width="80px" height="12px" />\r
          <Skeleton width="60px" height="12px" />\r
        </div>)}\r
    </div>
}`,...l.parameters?.docs?.source},description:{story:`Linha de tabela — células de texto em larguras variadas.\r
Use para simular listagens e tabelas durante o carregamento inicial.`,...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Referência — alturas comuns",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-x-small)"
  }}>\r
      {[{
      height: "12px",
      label: "12px — caption / label sm"
    }, {
      height: "14px",
      label: "14px — paragraph regular"
    }, {
      height: "16px",
      label: "16px — label medium"
    }, {
      height: "20px",
      label: "20px — heading sm"
    }, {
      height: "24px",
      label: "24px — heading md / ícone"
    }, {
      height: "32px",
      label: "32px — botão / input"
    }, {
      height: "40px",
      label: "40px — input md / avatar md"
    }].map(({
      height,
      label
    }) => <div key={height} style={{
      display: "flex",
      alignItems: "center",
      gap: "var(--s-spacing-x-small)"
    }}>\r
          <Skeleton width="200px" height={height} />\r
          <small>{label}</small>\r
        </div>)}\r
    </div>
}`,...d.parameters?.docs?.source},description:{story:`Referência visual de alturas comuns mapeadas à tipografia do design system.\r
Use estas dimensões como ponto de partida para novos placeholders.`,...d.parameters?.docs?.description}}};export{s as Circle,i as ContentCard,r as Default,t as FullWidth,d as HeightReference,l as TableRow,n as TextBlock,o as UserCard,v as __namedExportsOrder,g as default};
