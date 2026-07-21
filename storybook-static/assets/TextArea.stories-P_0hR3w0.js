import{r as i,j as a}from"./iframe-C_0AXUlQ.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";function ve({value:e="",onChange:r}){const[o,t]=i.useState(e),s=i.useRef(null);i.useEffect(()=>{t(e)},[e]);const l=i.useCallback(n=>{t(n.target.value),r?.(n)},[r]),d=i.useCallback(()=>{var n;(n=s.current)===null||n===void 0||n.focus()},[]),f=i.useCallback(n=>{if(n.key==="Enter"){var m;n.preventDefault(),(m=s.current)===null||m===void 0||m.focus()}},[]);return{internalValue:o,textareaRef:s,handleChange:l,handleContainerClick:d,handleContainerKeyDown:f}}function xe(e,r){return["text-area",...[e&&"disabled",r&&!e&&"error"].filter(Boolean)].join(" ")}const c=i.forwardRef(({label:e,placeholder:r,value:o="",disabled:t=!1,error:s=!1,errorText:l="",onChange:d,...f},n)=>{const{internalValue:m,textareaRef:le,handleChange:de,handleContainerClick:ce,handleContainerKeyDown:me}=ve({value:o,onChange:d}),ue=n??le,pe=xe(t,s),y=s&&!t;return a.jsxs("div",{className:"text-area-root",children:[a.jsx("label",{className:"text-area-label",children:e}),a.jsx("div",{role:"group",className:pe,onClick:ce,onKeyDown:me,children:a.jsx("textarea",{ref:ue,placeholder:r,disabled:t,value:m,onChange:de,"aria-invalid":y,"aria-describedby":y?"textarea-error":void 0,...f})}),y&&a.jsx("p",{id:"textarea-error",className:"description",role:"alert",children:l})]})});c.displayName="TextArea";var C,E,D,T,S,W,j,V,w,B,N,O,A,q,R,L,M,k,F,z,I,$,H,K,G,Q,Z,U,J,P,X,Y,ee,re,ae,oe,te,se,ne,ie;const be={title:"Components/TextArea",component:c,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
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
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10072"}},argTypes:{label:{control:"text",description:"Texto do label exibido acima do campo.",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Texto exibido dentro do campo quando está vazio.",table:{type:{summary:"string"}}},value:{control:"text",description:"Valor controlado externamente.",table:{defaultValue:{summary:'""'},type:{summary:"string"}}},disabled:{control:"boolean",description:"Desativa o campo e bloqueia toda interação.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},error:{control:"boolean",description:"Ativa o estado de erro. Ignorado visualmente quando `disabled` é `true`.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},errorText:{control:"text",description:"Mensagem de erro exibida abaixo do campo quando `error` é `true` e `disabled` é `false`.",table:{defaultValue:{summary:'""'},type:{summary:"string"}}},onChange:{action:"onChange",description:"Callback disparado ao alterar o valor do campo.",table:{type:{summary:"React.ChangeEventHandler<HTMLTextAreaElement>"}}}},args:{label:"Descrição",placeholder:"Digite aqui...",disabled:!1,error:!1,errorText:"Mensagem de erro"},decorators:[e=>a.jsx("div",{style:{maxWidth:"480px"},children:a.jsx(e,{})})]},u={name:"Default"},p={name:"Estado — desabilitado",args:{disabled:!0}},v={name:"Estado — erro",args:{error:!0,errorText:"Este campo é obrigatório."}},x={name:"Estado — desabilitado (erro ignorado)",args:{disabled:!0,error:!0,errorText:"Este campo é obrigatório."}},g={name:"Controlado — com contador de caracteres",render:e=>{const[r,o]=i.useState("Valor inicial");return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[a.jsx(c,{...e,value:r,onChange:s=>o(s.target.value)}),a.jsxs("small",{style:{alignSelf:"flex-end"},children:[r.length," / ",200]})]})}},_={name:"Controlado — validação no blur",render:e=>{const[r,o]=i.useState(!1),[t,s]=i.useState("");return a.jsx(c,{...e,value:t,error:r,errorText:"Campo obrigatório.",onChange:l=>{s(l.target.value),r&&o(!1)},onBlur:()=>o(t.trim().length===0)})}},h={name:"Contexto real — formulário de avaliação",render:()=>{const[e,r]=i.useState(""),[o,t]=i.useState(!1),s=300,l=20;return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",maxWidth:"480px"},children:[a.jsx(c,{label:"Sua avaliação",placeholder:"Descreva sua experiência em pelo menos 20 caracteres...",value:e,error:o,errorText:`Mínimo de ${l} caracteres.`,onChange:d=>{d.target.value.length<=s&&r(d.target.value),o&&d.target.value.length>=l&&t(!1)},onBlur:()=>t(e.trim().length<l&&e.length>0)}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsx("small",{children:o?"":e.length>=l?"✓ Mínimo atingido":`Mínimo: ${l} caracteres`}),a.jsxs("small",{children:[e.length," / ",s]})]})]})}},b={name:"Contexto real — observações de pedido",render:()=>{const[e,r]=i.useState("");return a.jsx(c,{label:"Observações",placeholder:"Ex: Entregar somente em dias úteis das 9h às 18h...",value:e,onChange:o=>r(o.target.value)})}};u.parameters={...u.parameters,docs:{...(C=u.parameters)===null||C===void 0?void 0:C.docs,source:{originalSource:`{
  name: "Default"
}`,...(D=u.parameters)===null||D===void 0||(E=D.docs)===null||E===void 0?void 0:E.source},description:{story:`Estado base do campo sem nenhuma prop adicional.\r
Use os Controls para explorar todas as combinações disponíveis.`,...(S=u.parameters)===null||S===void 0||(T=S.docs)===null||T===void 0?void 0:T.description}}};p.parameters={...p.parameters,docs:{...(W=p.parameters)===null||W===void 0?void 0:W.docs,source:{originalSource:`{
  name: "Estado — desabilitado",
  args: {
    disabled: true
  }
}`,...(V=p.parameters)===null||V===void 0||(j=V.docs)===null||j===void 0?void 0:j.source},description:{story:"Estado desabilitado — campo inativo com opacidade reduzida.\r\nBloqueia toda interação e aplica fundo `--s-color-fill-disable`.",...(B=p.parameters)===null||B===void 0||(w=B.docs)===null||w===void 0?void 0:w.description}}};v.parameters={...v.parameters,docs:{...(N=v.parameters)===null||N===void 0?void 0:N.docs,source:{originalSource:`{
  name: "Estado — erro",
  args: {
    error: true,
    errorText: "Este campo é obrigatório."
  }
}`,...(A=v.parameters)===null||A===void 0||(O=A.docs)===null||O===void 0?void 0:O.source},description:{story:'Estado de erro — borda e fundo na cor de atenção com mensagem abaixo.\r\nA mensagem é acessível via `role="alert"` e `aria-describedby`.',...(R=v.parameters)===null||R===void 0||(q=R.docs)===null||q===void 0?void 0:q.description}}};x.parameters={...x.parameters,docs:{...(L=x.parameters)===null||L===void 0?void 0:L.docs,source:{originalSource:`{
  name: "Estado — desabilitado (erro ignorado)",
  args: {
    disabled: true,
    error: true,
    errorText: "Este campo é obrigatório."
  }
}`,...(k=x.parameters)===null||k===void 0||(M=k.docs)===null||M===void 0?void 0:M.source},description:{story:"Campo desabilitado com `error: true` — o estado de erro é ignorado.\r\n`disabled` tem prioridade visual sobre `error`.",...(z=x.parameters)===null||z===void 0||(F=z.docs)===null||F===void 0?void 0:F.description}}};g.parameters={...g.parameters,docs:{...(I=g.parameters)===null||I===void 0?void 0:I.docs,source:{originalSource:`{
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
}`,...(H=g.parameters)===null||H===void 0||($=H.docs)===null||$===void 0?void 0:$.source},description:{story:"Campo controlado externamente via `value` + `onChange`.\r\nO contador de caracteres é atualizado em tempo real.",...(G=g.parameters)===null||G===void 0||(K=G.docs)===null||K===void 0?void 0:K.description}}};_.parameters={..._.parameters,docs:{...(Q=_.parameters)===null||Q===void 0?void 0:Q.docs,source:{originalSource:`{
  name: "Controlado — validação no blur",
  render: args => {
    const [error, setError] = useState(false);
    const [value, setValue] = useState("");
    return <TextArea {...args} value={value} error={error} errorText="Campo obrigatório." onChange={e => {
      setValue(e.target.value);
      if (error) setError(false);
    }} onBlur={() => setError(value.trim().length === 0)} />;
  }
}`,...(U=_.parameters)===null||U===void 0||(Z=U.docs)===null||Z===void 0?void 0:Z.source},description:{story:"Validação ao sair do campo (`onBlur`).\r\nO estado de erro é ativado quando o campo perde o foco vazio,\r\ne desativado assim que o usuário começa a digitar.",...(P=_.parameters)===null||P===void 0||(J=P.docs)===null||J===void 0?void 0:J.description}}};h.parameters={...h.parameters,docs:{...(X=h.parameters)===null||X===void 0?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=h.parameters)===null||ee===void 0||(Y=ee.docs)===null||Y===void 0?void 0:Y.source},description:{story:`Campo de comentário em formulário de avaliação.\r
Demonstra o uso com limit de caracteres e validação de conteúdo mínimo.`,...(ae=h.parameters)===null||ae===void 0||(re=ae.docs)===null||re===void 0?void 0:re.description}}};b.parameters={...b.parameters,docs:{...(oe=b.parameters)===null||oe===void 0?void 0:oe.docs,source:{originalSource:`{
  name: "Contexto real — observações de pedido",
  render: () => {
    const [notes, setNotes] = useState("");
    return <TextArea label="Observações" placeholder="Ex: Entregar somente em dias úteis das 9h às 18h..." value={notes} onChange={e => setNotes(e.target.value)} />;
  }
}`,...(se=b.parameters)===null||se===void 0||(te=se.docs)===null||te===void 0?void 0:te.source},description:{story:`Campo de observações em formulário de pedido.\r
Demonstra o uso sem validação — puramente opcional.`,...(ie=b.parameters)===null||ie===void 0||(ne=ie.docs)===null||ne===void 0?void 0:ne.description}}};const fe=["Default","Disabled","WithError","DisabledWithError","Controlled","WithBlurValidation","ReviewForm","OrderNotes"];export{g as Controlled,u as Default,p as Disabled,x as DisabledWithError,b as OrderNotes,h as ReviewForm,_ as WithBlurValidation,v as WithError,fe as __namedExportsOrder,be as default};
