import{r as s,j as e}from"./iframe-DFdk80Qn.js";/* empty css               */import{I as Ce}from"./Icon-C_kNoyVv.js";import{B as ye}from"./Button-y_xm8ZSK.js";import"./preload-helper-PPVm8Dsz.js";import"./Loading-DYHQTa0l.js";import"./Skeleton-bEV42asx.js";function Ee({value:o,disabled:a,error:r,onChange:n}){const u=`input-select-${s.useId()}`,[p,m]=s.useState(!1),[b,d]=s.useState(o),g=s.useRef(null),P=s.useRef(null);s.useEffect(()=>{d(o||void 0)},[o]);const _=s.useCallback(()=>{a||r||m(!0)},[a,r]),l=s.useCallback(()=>m(!1),[]),j=s.useCallback(t=>{var c;d(t),n(t),l(),(c=P.current)===null||c===void 0||c.focus()},[n,l]);s.useEffect(()=>{const t=c=>{g.current&&!g.current.contains(c.target)&&l()};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[l]);const R=s.useCallback(t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),p?l():_()),t.key==="Escape"&&l()},[p,_,l]);return{uid:u,isOpen:p,selectedOption:b,dropdownRef:g,triggerRef:P,open:_,close:l,selectOption:j,handleKeyDown:R}}function De(o,a,r){return["input-select-button",o&&"option",a&&"error",r&&"disabled"].filter(Boolean).join(" ")}function we({options:o,selected:a,onSelect:r,isOpen:n}){return e.jsx("ul",{className:`input-select-dropdown ${n?"open":"close"}`,"aria-hidden":n?"true":"false",role:"listbox",children:o.map(i=>e.jsx("li",{role:"option","aria-selected":i===a,children:e.jsx("button",{className:`input-select-option ${i===a?"selected":""}`,onClick:()=>r(i),type:"button",children:i})},i))})}const Se=({options:o,label:a,error:r=!1,errorMessage:n,disabled:i=!1,onChange:u,value:p})=>{const{uid:m,isOpen:b,selectedOption:d,dropdownRef:g,triggerRef:P,open:_,close:l,selectOption:j,handleKeyDown:R}=Ee({value:p,disabled:i,error:r,onChange:u}),t=a?`${m}-label`:void 0;var c;return e.jsxs("div",{className:"input-select-root",ref:g,children:[a&&e.jsx("label",{id:t,className:"input-select-label",htmlFor:m,children:a}),e.jsxs("div",{className:"input-select",children:[e.jsxs("button",{id:m,ref:P,type:"button",className:De(!!d,r,i),"aria-haspopup":"listbox","aria-expanded":b,"aria-labelledby":t,disabled:i||r,onClick:b?l:_,onKeyDown:R,children:[e.jsx("span",{className:d?"":"input-select-placeholder",children:(c=d??a)!==null&&c!==void 0?c:"Select an option"}),e.jsx(Ce,{icon:"keyboard_arrow_down",size:"sm"})]}),e.jsx(we,{isOpen:b,options:o,selected:d,onSelect:j})]}),r&&n&&e.jsx("p",{className:"input-select-error-message",children:n})]})};var A,M,B,W,I,V,k,O,L,N,F,z,q,G,Q,T,J,K,U,$,H,Z,X,Y,ee,oe,ae,se,re,te,ne,ie,le,de,ce,me,pe,ue,ve,be,ge,_e,he,fe,xe;const Ve={title:"Components/InputSelect",component:Se,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
O **InputSelect** é um campo de seleção totalmente customizado com dropdown estilizado.

Diferente do \`<select>\` nativo, este componente renderiza sua própria lista de opções —
garantindo consistência visual completa em desktop e mobile, sem OS picker nem dropdown nativo sem estilo.

Em **mobile** (≤ 490px), o dropdown sobe como um bottom sheet ancorado à viewport,
com alvos de toque maiores para seleção mais fácil.

Suporta navegação por teclado: **Enter/Espaço** para abrir/fechar, **Escape** para fechar,
e \`aria-labelledby\` para associação acessível com o label.

### Quando usar
- Seleção de uma opção de uma lista conhecida
- Quando a consistência visual com o design system é essencial
- Quando o \`<select>\` nativo não é suficiente (sempre, no mobile)

### Quando não usar
- Para múltipla seleção — use \`Checkbox\` ou um componente de multi-select
- Para listas longas (> 10 itens) — considere um select com busca

### Boas práticas
- Sempre forneça um \`label\` para acessibilidade
- Mantenha a lista curta (< 10 opções) — use busca para listas maiores
- Use \`value\` + \`onChange\` para uso controlado em formulários
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10073"}},argTypes:{label:{control:"text",description:"Label exibido acima do campo. Associado ao trigger via `aria-labelledby`.",table:{type:{summary:"string"}}},options:{control:"object",description:"Array de strings com as opções disponíveis no dropdown.",table:{type:{summary:"string[]"}}},value:{control:"text",description:"Valor controlado externamente. Quando fornecido, sincroniza o estado interno com esta opção.",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"Desativa o campo e impede a abertura do dropdown.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},error:{control:"boolean",description:"Renderiza o campo em estado de erro. Desativa a interação e exibe `errorMessage`.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},errorMessage:{control:"text",description:"Mensagem de validação exibida abaixo do campo quando `error` é `true`.",table:{type:{summary:"string"}}},onChange:{action:"onChange",description:"Callback disparado quando o usuário seleciona uma opção.",table:{type:{summary:"(value: string) => void"}}}},decorators:[o=>e.jsx("div",{style:{minWidth:"280px",minHeight:"300px"},children:e.jsx(o,{})})]},v=["Brasil","Estados Unidos","Portugal","Alemanha","Japão"],Pe=["Product Designer","Engenheiro de Software","Gerente de Produto","Analista de Dados","DevOps"],h={name:"Default",args:{label:"País",options:v,onChange:()=>{}}},f={name:"Com valor pré-selecionado",args:{label:"País",options:v,value:"Brasil",onChange:()=>{}}},x={name:"Estado — erro",args:{label:"País",options:v,error:!0,errorMessage:"Selecione um país válido.",onChange:()=>{}}},S={name:"Estado — desabilitado",args:{label:"País",options:v,disabled:!0,onChange:()=>{}}},C={name:"Estado — desabilitado (com valor)",args:{label:"País",options:v,value:"Brasil",disabled:!0,onChange:()=>{}}},y={name:"Controlado — com estado externo",render:()=>{const[o,a]=s.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(Se,{label:"Cargo",options:Pe,value:o,onChange:a}),e.jsxs("small",{children:["Selecionado: ",e.jsx("strong",{children:o||"nenhum"})]})]})}},E={name:"Lista longa (scroll)",args:{label:"Framework",options:["React","Vue","Angular","Svelte","SolidJS","Qwik","Astro","Remix","Next.js","Nuxt","SvelteKit","Ember","Backbone","Preact"],onChange:()=>{}}},D={name:"Mobile — bottom sheet (≤ 490px)",globals:{viewport:{value:"mobile5",isRotated:!1}},args:{label:"País",options:v,onChange:()=>{}}},w={name:"Contexto real — formulário de endereço",render:()=>{const[o,a]=s.useState(""),[r,n]=s.useState(!1),[i,u]=s.useState(!1),p=()=>{if(!o){n(!0);return}n(!1),u(!0)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",minWidth:"280px"},children:[e.jsx(Se,{label:"Estado",options:["AC","AM","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"],value:o,error:r,errorMessage:"Selecione um estado.",onChange:m=>{a(m),n(!1),u(!1)}}),e.jsx("div",{style:{width:"fit-content"},children:e.jsx(ye,{onClick:p,children:"Continuar"})}),i&&e.jsxs("small",{children:["Estado selecionado: ",e.jsx("strong",{children:o})]})]})}};h.parameters={...h.parameters,docs:{...(A=h.parameters)===null||A===void 0?void 0:A.docs,source:{originalSource:`{
  name: "Default",
  args: {
    label: "País",
    options: paises,
    onChange: () => {}
  }
}`,...(B=h.parameters)===null||B===void 0||(M=B.docs)===null||M===void 0?void 0:M.source},description:{story:`Campo de seleção padrão sem valor pré-selecionado.\r
Clique para abrir o dropdown. Use os Controls para explorar todas as props.`,...(I=h.parameters)===null||I===void 0||(W=I.docs)===null||W===void 0?void 0:W.description}}};f.parameters={...f.parameters,docs:{...(V=f.parameters)===null||V===void 0?void 0:V.docs,source:{originalSource:`{
  name: "Com valor pré-selecionado",
  args: {
    label: "País",
    options: paises,
    value: "Brasil",
    onChange: () => {}
  }
}`,...(O=f.parameters)===null||O===void 0||(k=O.docs)===null||k===void 0?void 0:k.source},description:{story:"Campo inicializado com um valor pré-selecionado via prop `value`.\r\nO trigger exibe o valor selecionado na cor padrão (não placeholder).",...(N=f.parameters)===null||N===void 0||(L=N.docs)===null||L===void 0?void 0:L.description}}};x.parameters={...x.parameters,docs:{...(F=x.parameters)===null||F===void 0?void 0:F.docs,source:{originalSource:`{
  name: "Estado — erro",
  args: {
    label: "País",
    options: paises,
    error: true,
    errorMessage: "Selecione um país válido.",
    onChange: () => {}
  }
}`,...(q=x.parameters)===null||q===void 0||(z=q.docs)===null||z===void 0?void 0:z.source},description:{story:`Estado de erro — campo desativado com borda e fundo de atenção.\r
A mensagem de validação é exibida abaixo do campo.`,...(Q=x.parameters)===null||Q===void 0||(G=Q.docs)===null||G===void 0?void 0:G.description}}};S.parameters={...S.parameters,docs:{...(T=S.parameters)===null||T===void 0?void 0:T.docs,source:{originalSource:`{
  name: "Estado — desabilitado",
  args: {
    label: "País",
    options: paises,
    disabled: true,
    onChange: () => {}
  }
}`,...(K=S.parameters)===null||K===void 0||(J=K.docs)===null||J===void 0?void 0:J.source},description:{story:`Estado desabilitado — campo inativo com opacidade reduzida.\r
Nenhuma interação é possível.`,...($=S.parameters)===null||$===void 0||(U=$.docs)===null||U===void 0?void 0:U.description}}};C.parameters={...C.parameters,docs:{...(H=C.parameters)===null||H===void 0?void 0:H.docs,source:{originalSource:`{
  name: "Estado — desabilitado (com valor)",
  args: {
    label: "País",
    options: paises,
    value: "Brasil",
    disabled: true,
    onChange: () => {}
  }
}`,...(X=C.parameters)===null||X===void 0||(Z=X.docs)===null||Z===void 0?void 0:Z.source},description:{story:`Estado desabilitado com valor pré-selecionado.\r
Use para exibir uma seleção que não pode ser alterada no contexto atual.`,...(ee=C.parameters)===null||ee===void 0||(Y=ee.docs)===null||Y===void 0?void 0:Y.description}}};y.parameters={...y.parameters,docs:{...(oe=y.parameters)===null||oe===void 0?void 0:oe.docs,source:{originalSource:`{
  name: "Controlado — com estado externo",
  render: () => {
    const [valor, setValor] = useState("");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)"
    }}>\r
        <InputSelect label="Cargo" options={cargos} value={valor} onChange={setValor} />\r
        <small>\r
          Selecionado: <strong>{valor || "nenhum"}</strong>\r
        </small>\r
      </div>;
  }
}`,...(se=y.parameters)===null||se===void 0||(ae=se.docs)===null||ae===void 0?void 0:ae.source},description:{story:"Campo controlado com estado externo via `useState`.\r\nO valor selecionado é exibido em tempo real abaixo do campo.",...(te=y.parameters)===null||te===void 0||(re=te.docs)===null||re===void 0?void 0:re.description}}};E.parameters={...E.parameters,docs:{...(ne=E.parameters)===null||ne===void 0?void 0:ne.docs,source:{originalSource:`{
  name: "Lista longa (scroll)",
  args: {
    label: "Framework",
    options: ["React", "Vue", "Angular", "Svelte", "SolidJS", "Qwik", "Astro", "Remix", "Next.js", "Nuxt", "SvelteKit", "Ember", "Backbone", "Preact"],
    onChange: () => {}
  }
}`,...(le=E.parameters)===null||le===void 0||(ie=le.docs)===null||ie===void 0?void 0:ie.source},description:{story:"Dropdown com muitas opções — valida o scroll interno da lista.\r\nO painel tem `max-height: 240px` e rola quando há mais opções do que cabem.",...(ce=E.parameters)===null||ce===void 0||(de=ce.docs)===null||de===void 0?void 0:de.description}}};D.parameters={...D.parameters,docs:{...(me=D.parameters)===null||me===void 0?void 0:me.docs,source:{originalSource:`{
  name: "Mobile — bottom sheet (≤ 490px)",
  globals: {
    viewport: {
      value: "mobile5",
      isRotated: false
    }
  },
  args: {
    label: "País",
    options: paises,
    onChange: () => {}
  }
}`,...(ue=D.parameters)===null||ue===void 0||(pe=ue.docs)===null||pe===void 0?void 0:pe.source},description:{story:`Comportamento mobile (≤ 490px) — o dropdown sobe como bottom sheet\r
ancorado à viewport com alvos de toque maiores (48px de altura mínima).`,...(be=D.parameters)===null||be===void 0||(ve=be.docs)===null||ve===void 0?void 0:ve.description}}};w.parameters={...w.parameters,docs:{...(ge=w.parameters)===null||ge===void 0?void 0:ge.docs,source:{originalSource:`{
  name: "Contexto real — formulário de endereço",
  render: () => {
    const [estado, setEstado] = useState("");
    const [erro, setErro] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      if (!estado) {
        setErro(true);
        return;
      }
      setErro(false);
      setSubmitted(true);
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)",
      minWidth: "280px"
    }}>\r
        <InputSelect label="Estado" options={["AC", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"]} value={estado} error={erro} errorMessage="Selecione um estado." onChange={v => {
        setEstado(v);
        setErro(false);
        setSubmitted(false);
      }} />\r
        <div style={{
        width: "fit-content"
      }}>\r
          <Button onClick={handleSubmit}>Continuar</Button>\r
        </div>\r
        {submitted && <small>\r
            Estado selecionado: <strong>{estado}</strong>\r
          </small>}\r
      </div>;
  }
}`,...(he=w.parameters)===null||he===void 0||(_e=he.docs)===null||_e===void 0?void 0:_e.source},description:{story:`Seleção em formulário de endereço.\r
Demonstra o uso do InputSelect com validação ao submeter sem seleção.`,...(xe=w.parameters)===null||xe===void 0||(fe=xe.docs)===null||fe===void 0?void 0:fe.description}}};const ke=["Default","WithValue","WithError","Disabled","DisabledWithValue","Controlled","LongList","MobileBottomSheet","InAddressForm"];export{y as Controlled,h as Default,S as Disabled,C as DisabledWithValue,w as InAddressForm,E as LongList,D as MobileBottomSheet,x as WithError,f as WithValue,ke as __namedExportsOrder,Ve as default};
