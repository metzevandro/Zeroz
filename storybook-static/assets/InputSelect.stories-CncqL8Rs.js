import{r as s,j as e}from"./iframe-CxNvl9BI.js";/* empty css               */import{I as M}from"./Icon-Bqm0CoJD.js";import{B as O}from"./Button-CH6qqEEx.js";import"./preload-helper-PPVm8Dsz.js";import"./Loading-DhvOqAup.js";import"./Skeleton-C80QNm7w.js";function B({value:o,disabled:a,error:r,onChange:n}){const m=`input-select-${s.useId()}`,[c,d]=s.useState(!1),[x,p]=s.useState(o),b=s.useRef(null),P=s.useRef(null);s.useEffect(()=>{p(o||void 0)},[o]);const g=s.useCallback(()=>{a||r||d(!0)},[a,r]),l=s.useCallback(()=>d(!1),[]),j=s.useCallback(t=>{p(t),n(t),l(),P.current?.focus()},[n,l]);s.useEffect(()=>{const t=A=>{b.current&&!b.current.contains(A.target)&&l()};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[l]);const R=s.useCallback(t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),c?l():g()),t.key==="Escape"&&l()},[c,g,l]);return{uid:m,isOpen:c,selectedOption:x,dropdownRef:b,triggerRef:P,open:g,close:l,selectOption:j,handleKeyDown:R}}function I(o,a,r){return["input-select-button",o&&"option",a&&"error",r&&"disabled"].filter(Boolean).join(" ")}function N({options:o,selected:a,onSelect:r,isOpen:n}){return e.jsx("ul",{className:`input-select-dropdown ${n?"open":"close"}`,"aria-hidden":n?"true":"false",role:"listbox",children:o.map(i=>e.jsx("li",{role:"option","aria-selected":i===a,children:e.jsx("button",{className:`input-select-option ${i===a?"selected":""}`,onClick:()=>r(i),type:"button",children:i})},i))})}const k=({options:o,label:a,error:r=!1,errorMessage:n,disabled:i=!1,onChange:m,value:c})=>{const{uid:d,isOpen:x,selectedOption:p,dropdownRef:b,triggerRef:P,open:g,close:l,selectOption:j,handleKeyDown:R}=B({value:c,disabled:i,error:r,onChange:m}),t=a?`${d}-label`:void 0;return e.jsxs("div",{className:"input-select-root",ref:b,children:[a&&e.jsx("label",{id:t,className:"input-select-label",htmlFor:d,children:a}),e.jsxs("div",{className:"input-select",children:[e.jsxs("button",{id:d,ref:P,type:"button",className:I(!!p,r,i),"aria-haspopup":"listbox","aria-expanded":x,"aria-labelledby":t,disabled:i||r,onClick:x?l:g,onKeyDown:R,children:[e.jsx("span",{className:p?"":"input-select-placeholder",children:p??a??"Select an option"}),e.jsx(M,{icon:"keyboard_arrow_down",size:"sm"})]}),e.jsx(N,{isOpen:x,options:o,selected:p,onSelect:j})]}),r&&n&&e.jsx("p",{className:"input-select-error-message",children:n})]})},T={title:"Components/InputSelect",component:k,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
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
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10073"}},argTypes:{label:{control:"text",description:"Label exibido acima do campo. Associado ao trigger via `aria-labelledby`.",table:{type:{summary:"string"}}},options:{control:"object",description:"Array de strings com as opções disponíveis no dropdown.",table:{type:{summary:"string[]"}}},value:{control:"text",description:"Valor controlado externamente. Quando fornecido, sincroniza o estado interno com esta opção.",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"Desativa o campo e impede a abertura do dropdown.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},error:{control:"boolean",description:"Renderiza o campo em estado de erro. Desativa a interação e exibe `errorMessage`.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},errorMessage:{control:"text",description:"Mensagem de validação exibida abaixo do campo quando `error` é `true`.",table:{type:{summary:"string"}}},onChange:{action:"onChange",description:"Callback disparado quando o usuário seleciona uma opção.",table:{type:{summary:"(value: string) => void"}}}},decorators:[o=>e.jsx("div",{style:{minWidth:"280px",minHeight:"300px"},children:e.jsx(o,{})})]},u=["Brasil","Estados Unidos","Portugal","Alemanha","Japão"],V=["Product Designer","Engenheiro de Software","Gerente de Produto","Analista de Dados","DevOps"],E={name:"Default",args:{label:"País",options:u,onChange:()=>{}}},v={name:"Com valor pré-selecionado",args:{label:"País",options:u,value:"Brasil",onChange:()=>{}}},h={name:"Estado — erro",args:{label:"País",options:u,error:!0,errorMessage:"Selecione um país válido.",onChange:()=>{}}},f={name:"Estado — desabilitado",args:{label:"País",options:u,disabled:!0,onChange:()=>{}}},S={name:"Estado — desabilitado (com valor)",args:{label:"País",options:u,value:"Brasil",disabled:!0,onChange:()=>{}}},C={name:"Controlado — com estado externo",render:()=>{const[o,a]=s.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(k,{label:"Cargo",options:V,value:o,onChange:a}),e.jsxs("small",{children:["Selecionado: ",e.jsx("strong",{children:o||"nenhum"})]})]})}},y={name:"Lista longa (scroll)",args:{label:"Framework",options:["React","Vue","Angular","Svelte","SolidJS","Qwik","Astro","Remix","Next.js","Nuxt","SvelteKit","Ember","Backbone","Preact"],onChange:()=>{}}},D={name:"Mobile — bottom sheet (≤ 490px)",globals:{viewport:{value:"mobile5",isRotated:!1}},args:{label:"País",options:u,onChange:()=>{}}},w={name:"Contexto real — formulário de endereço",render:()=>{const[o,a]=s.useState(""),[r,n]=s.useState(!1),[i,m]=s.useState(!1),c=()=>{if(!o){n(!0);return}n(!1),m(!0)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",minWidth:"280px"},children:[e.jsx(k,{label:"Estado",options:["AC","AM","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"],value:o,error:r,errorMessage:"Selecione um estado.",onChange:d=>{a(d),n(!1),m(!1)}}),e.jsx("div",{style:{width:"fit-content"},children:e.jsx(O,{onClick:c,children:"Continuar"})}),i&&e.jsxs("small",{children:["Estado selecionado: ",e.jsx("strong",{children:o})]})]})}},J=["Default","WithValue","WithError","Disabled","DisabledWithValue","Controlled","LongList","MobileBottomSheet","InAddressForm"];E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    label: "País",
    options: paises,
    onChange: () => {}
  }
}`,...E.parameters?.docs?.source},description:{story:`Campo de seleção padrão sem valor pré-selecionado.\r
Clique para abrir o dropdown. Use os Controls para explorar todas as props.`,...E.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Com valor pré-selecionado",
  args: {
    label: "País",
    options: paises,
    value: "Brasil",
    onChange: () => {}
  }
}`,...v.parameters?.docs?.source},description:{story:"Campo inicializado com um valor pré-selecionado via prop `value`.\r\nO trigger exibe o valor selecionado na cor padrão (não placeholder).",...v.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Estado — erro",
  args: {
    label: "País",
    options: paises,
    error: true,
    errorMessage: "Selecione um país válido.",
    onChange: () => {}
  }
}`,...h.parameters?.docs?.source},description:{story:`Estado de erro — campo desativado com borda e fundo de atenção.\r
A mensagem de validação é exibida abaixo do campo.`,...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Estado — desabilitado",
  args: {
    label: "País",
    options: paises,
    disabled: true,
    onChange: () => {}
  }
}`,...f.parameters?.docs?.source},description:{story:`Estado desabilitado — campo inativo com opacidade reduzida.\r
Nenhuma interação é possível.`,...f.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Estado — desabilitado (com valor)",
  args: {
    label: "País",
    options: paises,
    value: "Brasil",
    disabled: true,
    onChange: () => {}
  }
}`,...S.parameters?.docs?.source},description:{story:`Estado desabilitado com valor pré-selecionado.\r
Use para exibir uma seleção que não pode ser alterada no contexto atual.`,...S.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:"Campo controlado com estado externo via `useState`.\r\nO valor selecionado é exibido em tempo real abaixo do campo.",...C.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Lista longa (scroll)",
  args: {
    label: "Framework",
    options: ["React", "Vue", "Angular", "Svelte", "SolidJS", "Qwik", "Astro", "Remix", "Next.js", "Nuxt", "SvelteKit", "Ember", "Backbone", "Preact"],
    onChange: () => {}
  }
}`,...y.parameters?.docs?.source},description:{story:"Dropdown com muitas opções — valida o scroll interno da lista.\r\nO painel tem `max-height: 240px` e rola quando há mais opções do que cabem.",...y.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
ancorado à viewport com alvos de toque maiores (48px de altura mínima).`,...D.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`Seleção em formulário de endereço.\r
Demonstra o uso do InputSelect com validação ao submeter sem seleção.`,...w.parameters?.docs?.description}}};export{C as Controlled,E as Default,f as Disabled,S as DisabledWithValue,w as InAddressForm,y as LongList,D as MobileBottomSheet,h as WithError,v as WithValue,J as __namedExportsOrder,T as default};
