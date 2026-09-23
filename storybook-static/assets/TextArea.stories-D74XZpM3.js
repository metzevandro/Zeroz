import{r as n,j as r}from"./iframe-CxNvl9BI.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";function A({value:e="",onChange:a}){const[o,t]=n.useState(e),s=n.useRef(null);n.useEffect(()=>{t(e)},[e]);const i=n.useCallback(d=>{t(d.target.value),a?.(d)},[a]),l=n.useCallback(()=>{s.current?.focus()},[]),b=n.useCallback(d=>{d.key==="Enter"&&(d.preventDefault(),s.current?.focus())},[]);return{internalValue:o,textareaRef:s,handleChange:i,handleContainerClick:l,handleContainerKeyDown:b}}function q(e,a){return["text-area",...[e&&"disabled",a&&!e&&"error"].filter(Boolean)].join(" ")}const c=n.forwardRef(({label:e,placeholder:a,value:o="",disabled:t=!1,error:s=!1,errorText:i="",onChange:l,...b},d)=>{const{internalValue:y,textareaRef:C,handleChange:T,handleContainerClick:D,handleContainerKeyDown:S}=A({value:o,onChange:l}),j=d??C,V=q(t,s),f=s&&!t;return r.jsxs("div",{className:"text-area-root",children:[r.jsx("label",{className:"text-area-label",children:e}),r.jsx("div",{role:"group",className:V,onClick:D,onKeyDown:S,children:r.jsx("textarea",{ref:j,placeholder:a,disabled:t,value:y,onChange:T,"aria-invalid":f,"aria-describedby":f?"textarea-error":void 0,...b})}),f&&r.jsx("p",{id:"textarea-error",className:"description",role:"alert",children:i})]})});c.displayName="TextArea";const N={title:"Components/TextArea",component:c,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
O **TextArea** é um campo de texto multilinha para entrada de conteúdo extenso.

Suporta estados de erro e desabilitado, é redimensionável verticalmente
e mantém sincronização com um valor controlado externamente.

O container externo é focável via teclado (\`tabIndex={0}\`) e delega
o foco ao \`<textarea>\` interno ao receber \`Enter\` ou \`Space\`.

> **Estado de erro vs. desabilitado:** quando \`disabled\` é \`true\`,
> o estado de erro é ignorado visualmente — o campo desabilitado tem prioridade.

### Quando usar
- Coleta de textos longos: descrições, comentários, observações
- Formulários que requerem mais de uma linha de texto

### Quando não usar
- Inputs de linha única — use \`Input\`
- Conteúdo somente leitura — considere um elemento de texto simples
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10072"}},argTypes:{label:{control:"text",description:"Texto do label exibido acima do campo.",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Texto exibido dentro do campo quando está vazio.",table:{type:{summary:"string"}}},value:{control:"text",description:"Valor controlado externamente.",table:{defaultValue:{summary:'""'},type:{summary:"string"}}},disabled:{control:"boolean",description:"Desativa o campo e bloqueia toda interação.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},error:{control:"boolean",description:"Ativa o estado de erro. Ignorado visualmente quando `disabled` é `true`.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},errorText:{control:"text",description:"Mensagem de erro exibida abaixo do campo quando `error` é `true` e `disabled` é `false`.",table:{defaultValue:{summary:'""'},type:{summary:"string"}}},onChange:{action:"onChange",description:"Callback disparado ao alterar o valor do campo.",table:{type:{summary:"React.ChangeEventHandler<HTMLTextAreaElement>"}}}},args:{label:"Descrição",placeholder:"Digite aqui...",disabled:!1,error:!1,errorText:"Mensagem de erro"},decorators:[e=>r.jsx("div",{style:{maxWidth:"480px"},children:r.jsx(e,{})})]},m={name:"Default"},u={name:"Estado — desabilitado",args:{disabled:!0}},x={name:"Estado — erro",args:{error:!0,errorText:"Este campo é obrigatório."}},p={name:"Estado — desabilitado (erro ignorado)",args:{disabled:!0,error:!0,errorText:"Este campo é obrigatório."}},g={name:"Controlado — com contador de caracteres",render:e=>{const[a,o]=n.useState("Valor inicial");return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[r.jsx(c,{...e,value:a,onChange:s=>o(s.target.value)}),r.jsxs("small",{style:{alignSelf:"flex-end"},children:[a.length," / ",200]})]})}},v={name:"Controlado — validação no blur",render:e=>{const[a,o]=n.useState(!1),[t,s]=n.useState("");return r.jsx(c,{...e,value:t,error:a,errorText:"Campo obrigatório.",onChange:i=>{s(i.target.value),a&&o(!1)},onBlur:()=>o(t.trim().length===0)})}},E={name:"Contexto real — formulário de avaliação",render:()=>{const[e,a]=n.useState(""),[o,t]=n.useState(!1),s=300,i=20;return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",maxWidth:"480px"},children:[r.jsx(c,{label:"Sua avaliação",placeholder:"Descreva sua experiência em pelo menos 20 caracteres...",value:e,error:o,errorText:`Mínimo de ${i} caracteres.`,onChange:l=>{l.target.value.length<=s&&a(l.target.value),o&&l.target.value.length>=i&&t(!1)},onBlur:()=>t(e.trim().length<i&&e.length>0)}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[r.jsx("small",{children:o?"":e.length>=i?"✓ Mínimo atingido":`Mínimo: ${i} caracteres`}),r.jsxs("small",{children:[e.length," / ",s]})]})]})}},h={name:"Contexto real — observações de pedido",render:()=>{const[e,a]=n.useState("");return r.jsx(c,{label:"Observações",placeholder:"Ex: Entregar somente em dias úteis das 9h às 18h...",value:e,onChange:o=>a(o.target.value)})}},O=["Default","Disabled","WithError","DisabledWithError","Controlled","WithBlurValidation","ReviewForm","OrderNotes"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Default"
}`,...m.parameters?.docs?.source},description:{story:`Estado base do campo sem nenhuma prop adicional.\r
Use os Controls para explorar todas as combinações disponíveis.`,...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Estado — desabilitado",
  args: {
    disabled: true
  }
}`,...u.parameters?.docs?.source},description:{story:"Estado desabilitado — campo inativo com opacidade reduzida.\r\nBloqueia toda interação e aplica fundo `--s-color-fill-disable`.",...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Estado — erro",
  args: {
    error: true,
    errorText: "Este campo é obrigatório."
  }
}`,...x.parameters?.docs?.source},description:{story:'Estado de erro — borda e fundo na cor de atenção com mensagem abaixo.\r\nA mensagem é acessível via `role="alert"` e `aria-describedby`.',...x.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Estado — desabilitado (erro ignorado)",
  args: {
    disabled: true,
    error: true,
    errorText: "Este campo é obrigatório."
  }
}`,...p.parameters?.docs?.source},description:{story:"Campo desabilitado com `error: true` — o estado de erro é ignorado.\r\n`disabled` tem prioridade visual sobre `error`.",...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Controlado — com contador de caracteres",
  render: args => {
    const [text, setText] = useState("Valor inicial");
    const limit = 200;
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-nano)"
    }}>\r
        <TextArea {...args} value={text} onChange={e => setText(e.target.value)} />\r
        <small style={{
        alignSelf: "flex-end"
      }}>\r
          {text.length} / {limit}\r
        </small>\r
      </div>;
  }
}`,...g.parameters?.docs?.source},description:{story:"Campo controlado externamente via `value` + `onChange`.\r\nO contador de caracteres é atualizado em tempo real.",...g.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Controlado — validação no blur",
  render: args => {
    const [error, setError] = useState(false);
    const [value, setValue] = useState("");
    return <TextArea {...args} value={value} error={error} errorText="Campo obrigatório." onChange={e => {
      setValue(e.target.value);
      if (error) setError(false);
    }} onBlur={() => setError(value.trim().length === 0)} />;
  }
}`,...v.parameters?.docs?.source},description:{story:"Validação ao sair do campo (`onBlur`).\r\nO estado de erro é ativado quando o campo perde o foco vazio,\r\ne desativado assim que o usuário começa a digitar.",...v.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — formulário de avaliação",
  render: () => {
    const [text, setText] = useState("");
    const [error, setError] = useState(false);
    const limit = 300;
    const minLength = 20;
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)",
      maxWidth: "480px"
    }}>\r
        <TextArea label="Sua avaliação" placeholder="Descreva sua experiência em pelo menos 20 caracteres..." value={text} error={error} errorText={\`Mínimo de \${minLength} caracteres.\`} onChange={e => {
        if (e.target.value.length <= limit) setText(e.target.value);
        if (error && e.target.value.length >= minLength) setError(false);
      }} onBlur={() => setError(text.trim().length < minLength && text.length > 0)} />\r
        <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>\r
          <small>{error ? "" : text.length >= minLength ? "✓ Mínimo atingido" : \`Mínimo: \${minLength} caracteres\`}</small>\r
          <small>{text.length} / {limit}</small>\r
        </div>\r
      </div>;
  }
}`,...E.parameters?.docs?.source},description:{story:`Campo de comentário em formulário de avaliação.\r
Demonstra o uso com limit de caracteres e validação de conteúdo mínimo.`,...E.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — observações de pedido",
  render: () => {
    const [notes, setNotes] = useState("");
    return <TextArea label="Observações" placeholder="Ex: Entregar somente em dias úteis das 9h às 18h..." value={notes} onChange={e => setNotes(e.target.value)} />;
  }
}`,...h.parameters?.docs?.source},description:{story:`Campo de observações em formulário de pedido.\r
Demonstra o uso sem validação — puramente opcional.`,...h.parameters?.docs?.description}}};export{g as Controlled,m as Default,u as Disabled,p as DisabledWithError,h as OrderNotes,E as ReviewForm,v as WithBlurValidation,x as WithError,O as __namedExportsOrder,N as default};
