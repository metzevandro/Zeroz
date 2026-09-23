import{r as c,j as a}from"./iframe-CxNvl9BI.js";import{S as d}from"./Savebar-6G0kcv_R.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./Button-CH6qqEEx.js";import"./Icon-Bqm0CoJD.js";import"./Loading-DhvOqAup.js";import"./Skeleton-C80QNm7w.js";const C={title:"Components/Savebar",component:d,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
O **Savebar** é uma barra de ação persistente usada para confirmar ou descartar alterações não salvas.

Renderiza em largura total com o texto descritivo à esquerda e os botões de ação à direita.
Em viewports \`≤ 768px\` o padding lateral é ajustado automaticamente.

### Quando usar
- Sempre que o usuário realizar alterações em um formulário ou configuração ainda não persistidas
- Posicione no topo da área de edição, abaixo do \`<Header>\`, para máxima visibilidade

### Quando não usar
- Para confirmações pontuais de uma única ação — prefira um \`Modal\` de confirmação
- Quando as alterações são salvas automaticamente — o Savebar não é necessário

### Boas práticas
- Exiba o Savebar **somente** quando há alterações pendentes — oculte-o após salvar ou cancelar
- Mantenha o \`label\` curto e direto: "Você possui alterações não salvas"
- Use \`labelSave\` orientado à ação: "Salvar", "Salvar alterações"
- Use \`labelCancel\` orientado ao desfazimento: "Cancelar", "Descartar"
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10078"}},argTypes:{label:{control:"text",description:"Texto descritivo exibido à esquerda da barra.",table:{type:{summary:"string"}}},labelSave:{control:"text",description:"Rótulo do botão de salvar.",table:{type:{summary:"string"}}},labelCancel:{control:"text",description:"Rótulo do botão de cancelar/descartar.",table:{type:{summary:"string"}}},onClickSave:{action:"onClickSave",description:"Callback disparado ao clicar em salvar. Recebe o `MouseEvent`.",table:{type:{summary:"(e: React.MouseEvent) => void"}}},onClickCancel:{action:"onClickCancel",description:"Callback disparado ao clicar em cancelar.",table:{type:{summary:"() => void"}}}}},e={name:"Default",args:{label:"Você possui alterações não salvas",labelSave:"Salvar",labelCancel:"Cancelar"}},r={name:"Label longo",args:{label:"Existem alterações pendentes que ainda não foram salvas no servidor",labelSave:"Salvar alterações",labelCancel:"Descartar"}},o={name:"Layout mobile (≤ 768px)",globals:{viewport:{value:"mobile5",isRotated:!1}},args:{label:"Alterações não salvas",labelSave:"Salvar",labelCancel:"Cancelar"}},s={name:"Interativo — aparece com alterações pendentes",render:()=>{const[n,m]=c.useState("Texto salvo"),[l,i]=c.useState("Texto salvo"),t=l!==n;return a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[t&&a.jsx(d,{label:"Você possui alterações não salvas",labelSave:"Salvar",labelCancel:"Cancelar",onClickSave:()=>m(l),onClickCancel:()=>i(n)}),a.jsxs("div",{style:{padding:"var(--s-spacing-medium)",display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[a.jsx("small",{children:a.jsx("strong",{children:"Descrição"})}),a.jsx("textarea",{value:l,onChange:p=>i(p.target.value),rows:4,style:{padding:"var(--s-spacing-xx-small) var(--s-spacing-x-small)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",background:"var(--s-color-fill-default)",font:"var(--s-typography-paragraph-regular)",color:"var(--s-color-content-default)",resize:"vertical",width:"100%",boxSizing:"border-box"}}),t&&a.jsx("small",{style:{color:"var(--s-color-content-light)"},children:"Alterações não salvas"}),!t&&a.jsx("small",{style:{color:"var(--s-color-content-light)"},children:"✓ Tudo salvo"})]})]})}},E=["Default","LongLabel","MobileLayout","Interactive"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    label: "Você possui alterações não salvas",
    labelSave: "Salvar",
    labelCancel: "Cancelar"
  }
}`,...e.parameters?.docs?.source},description:{story:`Estado base da barra com label e botões padrão.\r
Use os Controls para explorar variações de texto.`,...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Label longo",
  args: {
    label: "Existem alterações pendentes que ainda não foram salvas no servidor",
    labelSave: "Salvar alterações",
    labelCancel: "Descartar"
  }
}`,...r.parameters?.docs?.source},description:{story:`Label longo — valida o comportamento de layout quando o texto descritivo\r
excede o espaço disponível antes dos botões.`,...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Layout mobile (≤ 768px)",
  globals: {
    viewport: {
      value: "mobile5",
      isRotated: false
    }
  },
  args: {
    label: "Alterações não salvas",
    labelSave: "Salvar",
    labelCancel: "Cancelar"
  }
}`,...o.parameters?.docs?.source},description:{story:`Layout mobile (≤ 768px) — padding lateral reduzido automaticamente.\r
Valida que label e botões continuam visíveis e alinhados em viewports estreitos.`,...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Interativo — aparece com alterações pendentes",
  render: () => {
    const [saved, setSaved] = useState("Texto salvo");
    const [draft, setDraft] = useState("Texto salvo");
    const isDirty = draft !== saved;
    return <div style={{
      display: "flex",
      flexDirection: "column"
    }}>\r
        {isDirty && <Savebar label="Você possui alterações não salvas" labelSave="Salvar" labelCancel="Cancelar" onClickSave={() => setSaved(draft)} onClickCancel={() => setDraft(saved)} />}\r
        <div style={{
        padding: "var(--s-spacing-medium)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--s-spacing-x-small)"
      }}>\r
          <small><strong>Descrição</strong></small>\r
          <textarea value={draft} onChange={e => setDraft(e.target.value)} rows={4} style={{
          padding: "var(--s-spacing-xx-small) var(--s-spacing-x-small)",
          border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
          borderRadius: "var(--s-border-radius-medium)",
          background: "var(--s-color-fill-default)",
          font: "var(--s-typography-paragraph-regular)",
          color: "var(--s-color-content-default)",
          resize: "vertical",
          width: "100%",
          boxSizing: "border-box"
        }} />\r
          {isDirty && <small style={{
          color: "var(--s-color-content-light)"
        }}>\r
              Alterações não salvas\r
            </small>}\r
          {!isDirty && <small style={{
          color: "var(--s-color-content-light)"
        }}>\r
              ✓ Tudo salvo\r
            </small>}\r
        </div>\r
      </div>;
  }
}`,...s.parameters?.docs?.source},description:{story:`Comportamento real — o Savebar aparece somente quando há alterações pendentes\r
e desaparece ao salvar ou cancelar.\r
Edite o campo e observe a barra aparecer. Salve ou descarte para ocultá-la.`,...s.parameters?.docs?.description}}};export{e as Default,s as Interactive,r as LongLabel,o as MobileLayout,E as __namedExportsOrder,C as default};
