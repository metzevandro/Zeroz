import{r as a,i as L,j as e}from"./iframe-Csr28j6B.js";/* empty css               */import{I as N}from"./Icon-DjhQpov0.js";import{B as V}from"./Button-DxS3QODc.js";import"./preload-helper-PPVm8Dsz.js";import"./Loading-B5K7soid.js";import"./Skeleton-DlU-ornU.js";function z({value:s,disabled:t,error:n,onChange:i}){const c=`input-select-${a.useId()}`,[d,m]=a.useState(!1),[x,o]=a.useState(s),u=a.useRef(null),g=a.useRef(null),R=a.useRef(null);a.useEffect(()=>{o(s||void 0)},[s]);const E=a.useCallback(()=>{t||n||m(!0)},[t,n]),p=a.useCallback(()=>m(!1),[]),j=a.useCallback(r=>{o(r),i(r),p(),g.current?.focus()},[i,p]);a.useEffect(()=>{if(!d)return;const r=M=>{const B=M.target,O=u.current?.contains(B),I=R.current?.contains(B);!O&&!I&&p()};return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),()=>{document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r)}},[d,p]);const k=a.useCallback(r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),d?p():E()),r.key==="Escape"&&p()},[d,E,p]);return{uid:c,isOpen:d,selectedOption:x,dropdownRef:u,triggerRef:g,panelRef:R,open:E,close:p,selectOption:j,handleKeyDown:k}}function q(s,t,n){return["input-select-button",s&&"option",t&&"error",n&&"disabled"].filter(Boolean).join(" ")}const F=a.forwardRef(function({options:t,selected:n,onSelect:i,isOpen:l,triggerRef:c},d){const[m,x]=a.useState({});return a.useLayoutEffect(()=>{if(!l||!c.current)return;const o=()=>{const u=c.current.getBoundingClientRect();x({top:u.bottom+4,left:u.left,width:u.width})};return o(),window.addEventListener("resize",o),window.addEventListener("scroll",o,!0),()=>{window.removeEventListener("resize",o),window.removeEventListener("scroll",o,!0)}},[l,c]),L.createPortal(e.jsx("ul",{ref:d,className:`input-select-dropdown ${l?"open":"close"}`,style:m,"aria-hidden":!l,role:"listbox",children:t.map(o=>e.jsx("li",{role:"option","aria-selected":o===n,children:e.jsx("button",{className:`input-select-option ${o===n?"selected":""}`,onClick:()=>i(o),type:"button",children:o})},o))}),document.body)}),A=({options:s,label:t,error:n=!1,errorMessage:i,disabled:l=!1,onChange:c,value:d})=>{const{uid:m,isOpen:x,selectedOption:o,dropdownRef:u,triggerRef:g,panelRef:R,open:E,close:p,selectOption:j,handleKeyDown:k}=z({value:d,disabled:l,error:n,onChange:c}),r=t?`${m}-label`:void 0;return e.jsxs("div",{className:"input-select-root",ref:u,children:[t&&e.jsx("label",{id:r,className:"input-select-label",htmlFor:m,children:t}),e.jsxs("div",{className:"input-select",children:[e.jsxs("button",{id:m,ref:g,type:"button",className:q(!!o,n,l),"aria-haspopup":"listbox","aria-expanded":x,"aria-labelledby":r,disabled:l||n,onClick:x?p:E,onKeyDown:k,children:[e.jsx("span",{className:o?"":"input-select-placeholder",children:o??t??"Select an option"}),e.jsx(N,{icon:"keyboard_arrow_down",size:"sm"})]}),e.jsx(F,{ref:R,isOpen:x,options:s,selected:o,onSelect:j,triggerRef:g})]}),n&&i&&e.jsx("p",{className:"input-select-error-message",children:i})]})},$={title:"Components/InputSelect",component:A,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
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
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10073"}},argTypes:{label:{control:"text",description:"Label exibido acima do campo. Associado ao trigger via `aria-labelledby`.",table:{type:{summary:"string"}}},options:{control:"object",description:"Array de strings com as opções disponíveis no dropdown.",table:{type:{summary:"string[]"}}},value:{control:"text",description:"Valor controlado externamente. Quando fornecido, sincroniza o estado interno com esta opção.",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"Desativa o campo e impede a abertura do dropdown.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},error:{control:"boolean",description:"Renderiza o campo em estado de erro. Desativa a interação e exibe `errorMessage`.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},errorMessage:{control:"text",description:"Mensagem de validação exibida abaixo do campo quando `error` é `true`.",table:{type:{summary:"string"}}},onChange:{action:"onChange",description:"Callback disparado quando o usuário seleciona uma opção.",table:{type:{summary:"(value: string) => void"}}}},decorators:[s=>e.jsx("div",{style:{minWidth:"280px",minHeight:"300px"},children:e.jsx(s,{})})]},b=["Brasil","Estados Unidos","Portugal","Alemanha","Japão"],W=["Product Designer","Engenheiro de Software","Gerente de Produto","Analista de Dados","DevOps"],v={name:"Default",args:{label:"País",options:b,onChange:()=>{}}},f={name:"Com valor pré-selecionado",args:{label:"País",options:b,value:"Brasil",onChange:()=>{}}},h={name:"Estado — erro",args:{label:"País",options:b,error:!0,errorMessage:"Selecione um país válido.",onChange:()=>{}}},S={name:"Estado — desabilitado",args:{label:"País",options:b,disabled:!0,onChange:()=>{}}},y={name:"Estado — desabilitado (com valor)",args:{label:"País",options:b,value:"Brasil",disabled:!0,onChange:()=>{}}},C={name:"Controlado — com estado externo",render:()=>{const[s,t]=a.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(A,{label:"Cargo",options:W,value:s,onChange:t}),e.jsxs("small",{children:["Selecionado: ",e.jsx("strong",{children:s||"nenhum"})]})]})}},w={name:"Lista longa (scroll)",args:{label:"Framework",options:["React","Vue","Angular","Svelte","SolidJS","Qwik","Astro","Remix","Next.js","Nuxt","SvelteKit","Ember","Backbone","Preact"],onChange:()=>{}}},D={name:"Mobile — bottom sheet (≤ 490px)",globals:{viewport:{value:"mobile5",isRotated:!1}},args:{label:"País",options:b,onChange:()=>{}}},P={name:"Contexto real — formulário de endereço",render:()=>{const[s,t]=a.useState(""),[n,i]=a.useState(!1),[l,c]=a.useState(!1),d=()=>{if(!s){i(!0);return}i(!1),c(!0)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",minWidth:"280px"},children:[e.jsx(A,{label:"Estado",options:["AC","AM","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"],value:s,error:n,errorMessage:"Selecione um estado.",onChange:m=>{t(m),i(!1),c(!1)}}),e.jsx("div",{style:{width:"fit-content"},children:e.jsx(V,{onClick:d,children:"Continuar"})}),l&&e.jsxs("small",{children:["Estado selecionado: ",e.jsx("strong",{children:s})]})]})}},H=["Default","WithValue","WithError","Disabled","DisabledWithValue","Controlled","LongList","MobileBottomSheet","InAddressForm"];v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    label: "País",
    options: paises,
    onChange: () => {}
  }
}`,...v.parameters?.docs?.source},description:{story:`Campo de seleção padrão sem valor pré-selecionado.\r
Clique para abrir o dropdown. Use os Controls para explorar todas as props.`,...v.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Com valor pré-selecionado",
  args: {
    label: "País",
    options: paises,
    value: "Brasil",
    onChange: () => {}
  }
}`,...f.parameters?.docs?.source},description:{story:"Campo inicializado com um valor pré-selecionado via prop `value`.\r\nO trigger exibe o valor selecionado na cor padrão (não placeholder).",...f.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Estado — erro",
  args: {
    label: "País",
    options: paises,
    error: true,
    errorMessage: "Selecione um país válido.",
    onChange: () => {}
  }
}`,...h.parameters?.docs?.source},description:{story:`Estado de erro — campo desativado com borda e fundo de atenção.\r
A mensagem de validação é exibida abaixo do campo.`,...h.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Estado — desabilitado",
  args: {
    label: "País",
    options: paises,
    disabled: true,
    onChange: () => {}
  }
}`,...S.parameters?.docs?.source},description:{story:`Estado desabilitado — campo inativo com opacidade reduzida.\r
Nenhuma interação é possível.`,...S.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Estado — desabilitado (com valor)",
  args: {
    label: "País",
    options: paises,
    value: "Brasil",
    disabled: true,
    onChange: () => {}
  }
}`,...y.parameters?.docs?.source},description:{story:`Estado desabilitado com valor pré-selecionado.\r
Use para exibir uma seleção que não pode ser alterada no contexto atual.`,...y.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:"Campo controlado com estado externo via `useState`.\r\nO valor selecionado é exibido em tempo real abaixo do campo.",...C.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Lista longa (scroll)",
  args: {
    label: "Framework",
    options: ["React", "Vue", "Angular", "Svelte", "SolidJS", "Qwik", "Astro", "Remix", "Next.js", "Nuxt", "SvelteKit", "Ember", "Backbone", "Preact"],
    onChange: () => {}
  }
}`,...w.parameters?.docs?.source},description:{story:"Dropdown com muitas opções — valida o scroll interno da lista.\r\nO painel tem `max-height: 240px` e rola quando há mais opções do que cabem.",...w.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`Comportamento mobile (≤ 490px) — o dropdown sobe como bottom sheet\r
ancorado à viewport com alvos de toque maiores (48px de altura mínima).`,...D.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:`Seleção em formulário de endereço.\r
Demonstra o uso do InputSelect com validação ao submeter sem seleção.`,...P.parameters?.docs?.description}}};export{C as Controlled,v as Default,S as Disabled,y as DisabledWithValue,P as InAddressForm,w as LongList,D as MobileBottomSheet,h as WithError,f as WithValue,H as __namedExportsOrder,$ as default};
