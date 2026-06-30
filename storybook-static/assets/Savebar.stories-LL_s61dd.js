import{r as E,j as a}from"./iframe-Cuzq1CpA.js";import{S as M}from"./Savebar-CIHpgFRC.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./Button-BQCy7vfT.js";import"./Icon-C2kFcyns.js";import"./Loading-CnlAraZ4.js";import"./Skeleton-BVkqHP_m.js";var n,i,d,c,v,m,p,u,b,g,x,f,y,_,S,C,D,L,h,w;const B={title:"Components/Savebar",component:M,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
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
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10078"}},argTypes:{label:{control:"text",description:"Texto descritivo exibido à esquerda da barra.",table:{type:{summary:"string"}}},labelSave:{control:"text",description:"Rótulo do botão de salvar.",table:{type:{summary:"string"}}},labelCancel:{control:"text",description:"Rótulo do botão de cancelar/descartar.",table:{type:{summary:"string"}}},onClickSave:{action:"onClickSave",description:"Callback disparado ao clicar em salvar. Recebe o `MouseEvent`.",table:{type:{summary:"(e: React.MouseEvent) => void"}}},onClickCancel:{action:"onClickCancel",description:"Callback disparado ao clicar em cancelar.",table:{type:{summary:"() => void"}}}}},e={name:"Default",args:{label:"Você possui alterações não salvas",labelSave:"Salvar",labelCancel:"Cancelar"}},r={name:"Label longo",args:{label:"Existem alterações pendentes que ainda não foram salvas no servidor",labelSave:"Salvar alterações",labelCancel:"Descartar"}},o={name:"Layout mobile (≤ 768px)",globals:{viewport:{value:"mobile5",isRotated:!1}},args:{label:"Alterações não salvas",labelSave:"Salvar",labelCancel:"Cancelar"}},s={name:"Interativo — aparece com alterações pendentes",render:()=>{const[k,q]=E.useState("Texto salvo"),[l,j]=E.useState("Texto salvo"),t=l!==k;return a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[t&&a.jsx(M,{label:"Você possui alterações não salvas",labelSave:"Salvar",labelCancel:"Cancelar",onClickSave:()=>q(l),onClickCancel:()=>j(k)}),a.jsxs("div",{style:{padding:"var(--s-spacing-medium)",display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[a.jsx("small",{children:a.jsx("strong",{children:"Descrição"})}),a.jsx("textarea",{value:l,onChange:z=>j(z.target.value),rows:4,style:{padding:"var(--s-spacing-xx-small) var(--s-spacing-x-small)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",background:"var(--s-color-fill-default)",font:"var(--s-typography-paragraph-regular)",color:"var(--s-color-content-default)",resize:"vertical",width:"100%",boxSizing:"border-box"}}),t&&a.jsx("small",{style:{color:"var(--s-color-content-light)"},children:"Alterações não salvas"}),!t&&a.jsx("small",{style:{color:"var(--s-color-content-light)"},children:"✓ Tudo salvo"})]})]})}};e.parameters={...e.parameters,docs:{...(n=e.parameters)===null||n===void 0?void 0:n.docs,source:{originalSource:`{
  name: "Default",
  args: {
    label: "Você possui alterações não salvas",
    labelSave: "Salvar",
    labelCancel: "Cancelar"
  }
}`,...(d=e.parameters)===null||d===void 0||(i=d.docs)===null||i===void 0?void 0:i.source},description:{story:`Estado base da barra com label e botões padrão.\r
Use os Controls para explorar variações de texto.`,...(v=e.parameters)===null||v===void 0||(c=v.docs)===null||c===void 0?void 0:c.description}}};r.parameters={...r.parameters,docs:{...(m=r.parameters)===null||m===void 0?void 0:m.docs,source:{originalSource:`{
  name: "Label longo",
  args: {
    label: "Existem alterações pendentes que ainda não foram salvas no servidor",
    labelSave: "Salvar alterações",
    labelCancel: "Descartar"
  }
}`,...(u=r.parameters)===null||u===void 0||(p=u.docs)===null||p===void 0?void 0:p.source},description:{story:`Label longo — valida o comportamento de layout quando o texto descritivo\r
excede o espaço disponível antes dos botões.`,...(g=r.parameters)===null||g===void 0||(b=g.docs)===null||b===void 0?void 0:b.description}}};o.parameters={...o.parameters,docs:{...(x=o.parameters)===null||x===void 0?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=o.parameters)===null||y===void 0||(f=y.docs)===null||f===void 0?void 0:f.source},description:{story:`Layout mobile (≤ 768px) — padding lateral reduzido automaticamente.\r
Valida que label e botões continuam visíveis e alinhados em viewports estreitos.`,...(S=o.parameters)===null||S===void 0||(_=S.docs)===null||_===void 0?void 0:_.description}}};s.parameters={...s.parameters,docs:{...(C=s.parameters)===null||C===void 0?void 0:C.docs,source:{originalSource:`{
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
}`,...(L=s.parameters)===null||L===void 0||(D=L.docs)===null||D===void 0?void 0:D.source},description:{story:`Comportamento real — o Savebar aparece somente quando há alterações pendentes\r
e desaparece ao salvar ou cancelar.\r
Edite o campo e observe a barra aparecer. Salve ou descarte para ocultá-la.`,...(w=s.parameters)===null||w===void 0||(h=w.docs)===null||h===void 0?void 0:h.description}}};const G=["Default","LongLabel","MobileLayout","Interactive"];export{e as Default,s as Interactive,r as LongLabel,o as MobileLayout,G as __namedExportsOrder,B as default};
