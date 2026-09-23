import{r as s,j as a}from"./iframe-CxNvl9BI.js";/* empty css               */import{I as Q}from"./Icon-Bqm0CoJD.js";import{B as w}from"./Button-CH6qqEEx.js";import"./preload-helper-PPVm8Dsz.js";import"./Loading-DhvOqAup.js";import"./Skeleton-C80QNm7w.js";function V(e,n,o){return o!==void 0&&e>o?o:n!==void 0&&e<n?n:e}function z(e){if(e==="")return;const n=parseInt(e,10);return isNaN(n)?void 0:n}function F(e){return e!==void 0?e:void 0}function B({min:e,max:n,value:o,onChange:d}){const q=`input-number-${s.useId()}`,[D,m]=s.useState(()=>F(e));s.useEffect(()=>{o!==void 0&&m(o)},[o]);const c=r=>d?.(r);return{uid:q,numero:D,increment:()=>{m(r=>{const t=V((r??e??0)+1,e,n);return t===r?r:(c(t),t)})},decrement:()=>{m(r=>{const t=V((r??e??0)-1,e,n);return t===r?r:(c(t),t)})},handleInputChange:r=>{const l=r.target.value;let t;if(l==="")t=void 0;else{const I=z(l);t=I!==void 0?V(I,e,n):e??void 0}m(t),c(t)}}}const i=({max:e,min:n,placeholder:o,disabled:d=!1,label:S,onChange:q,error:D=!1,textError:m,value:c})=>{const[O,N]=s.useState(!1),{uid:j,numero:r,increment:l,decrement:t,handleInputChange:I}=B({min:n,max:e,value:c,onChange:q});return a.jsxs("div",{className:"input-number-root",children:[S&&a.jsx("label",{className:"input-number-label",htmlFor:j,children:S}),a.jsxs("div",{className:`input-number ${d?"disabled":""}`,children:[a.jsx("button",{disabled:d,className:"subtract",onClick:t,children:a.jsx(Q,{size:"md",icon:"remove"})}),a.jsx("input",{id:j,className:`input ${D?"error":""}`,type:"number",inputMode:"numeric",placeholder:o,value:r!==void 0?r:"",max:e,min:n,disabled:d,onChange:I,style:{borderRight:O?"var(--s-border-width-hairline) solid var(--s-color-border-default-hover)":""}}),a.jsx("button",{disabled:d,className:"add",onClick:l,onMouseEnter:()=>N(!0),onMouseLeave:()=>N(!1),children:a.jsx(Q,{size:"md",icon:"add"})})]}),D&&a.jsx("div",{className:"textError",children:m})]})},Z={title:"Components/InputNumber",component:i,tags:["autodocs"],parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1365-11217"},docs:{description:{component:'\n**InputNumber** é um input numérico com botões de incremento e decremento.\n\nOs valores são automaticamente limitados ao intervalo `[min, max]` em toda\ninteração — ao clicar nos botões, ao digitar ou ao colar um número.\nO `onChange` recebe `number | undefined` — sem necessidade de `parseInt` no lado do consumidor.\n\nA label é associada ao `<input>` via `htmlFor` / `id` gerado por `useId`\n(WCAG 2.1 SC 1.3.1).\n\n### Quando usar\n- Seletor de quantidade (itens no carrinho, número de passageiros)\n- Configurações numéricas com limites definidos (tamanho de fonte, timeout, paginação)\n- Qualquer campo onde apenas números inteiros são válidos\n\n### Quando **não** usar\n- Quando o valor aceita decimais → use `Input type="number"` com step fracionário\n- Quando o intervalo é muito amplo e a precisão é crítica → use um `Input` numérico simples\n- Quando as opções são discretas e nomeadas → use `InputSelect`\n\n### Boas práticas\n- Sempre defina `min` e `max` para comunicar o intervalo válido ao usuário\n- Use `label` para acessibilidade — não dependa apenas de `placeholder`\n- Use `value` + `onChange` para uso controlado dentro de formulários\n- Trate `undefined` no `onChange` — significa que o campo foi apagado\n        '}}},argTypes:{label:{control:"text",description:"Label exibida acima do input, associada via `htmlFor` / `id`.",table:{type:{summary:"string"}}},min:{control:"number",description:"Valor mínimo permitido (inclusivo).",table:{type:{summary:"number"}}},max:{control:"number",description:"Valor máximo permitido (inclusivo).",table:{type:{summary:"number"}}},placeholder:{control:"text",description:"Texto exibido no input quando o valor está vazio.",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"Desabilita o input e ambos os botões.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},error:{control:"boolean",description:"Renderiza o input com estilo de erro.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},textError:{control:"text",description:"Mensagem de validação exibida abaixo quando `error=true`.",table:{type:{summary:"string"}}},value:{control:"number",description:"Valor controlado externamente.",table:{type:{summary:"number"}}},onChange:{action:"onChange",description:"Disparado a cada mudança de valor. Recebe `number | undefined` — `undefined` quando o campo é apagado.",table:{type:{summary:"(value: number | undefined) => void"}}}}},u={name:"Default",args:{label:"Quantidade"}},p={name:"With min / max (1–10)",args:{label:"Itens",min:1,max:10},parameters:{docs:{description:{story:"O botão `−` fica desabilitado em `min=1` e o botão `+` em `max=10`. O valor inicial é `min` quando nenhum `value` é passado."}}}},x={name:"Negative range (min=-10, max=10)",args:{label:"Offset de temperatura",min:-10,max:10},parameters:{docs:{description:{story:"O valor inicial é `min` (-10). O clamping funciona normalmente para valores negativos."}}}},b={name:"Without min / max",args:{label:"Valor livre",placeholder:"—"},parameters:{docs:{description:{story:"Sem `min` / `max`, o clamping é desativado e o valor inicial é `undefined` (campo vazio com placeholder)."}}}},v={name:"At minimum value",args:{label:"No mínimo",min:0,max:10,value:0},parameters:{docs:{description:{story:"Quando `value === min`, o botão de decremento fica `disabled`. O botão de incremento continua ativo."}}}},g={name:"At maximum value",args:{label:"No máximo",min:0,max:10,value:10},parameters:{docs:{description:{story:"Quando `value === max`, o botão de incremento fica `disabled`. O botão de decremento continua ativo."}}}},f={name:"Disabled",args:{label:"Quantidade (indisponível)",min:1,max:10,value:5,disabled:!0},parameters:{docs:{description:{story:"A prop `disabled` é propagada para o `<input>` e para ambos os `<button>`s nativos. A classe `.disabled` no container aplica `opacity: 0.64` e `background-color` do token de desabilitado."}}}},y={name:"Error state",args:{label:"Quantidade",error:!0,textError:"O valor deve ser pelo menos 1."},parameters:{docs:{description:{story:"A classe `.error` no `<input>` aplica `background-color: --s-color-fill-warning-light` e `border-color: --s-color-border-warning`. A mensagem abaixo usa `--s-color-content-warning`."}}}},h={name:"Required field validation",render:()=>{const[e,n]=s.useState(1),o=e===void 0;return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[a.jsx(i,{label:"Quantidade mínima",min:1,max:99,value:e,error:o,textError:"Campo obrigatório. Informe um valor entre 1 e 99.",onChange:n}),!o&&a.jsxs("p",{style:{fontSize:"12px",color:"gray",margin:0},children:["Valor atual: ",e]})]})},parameters:{docs:{description:{story:"O erro é ativado somente quando o campo é apagado (`value === undefined`). Apague o campo manualmente para ver o estado de erro."}}}},E={name:"Controlled (with state)",render:()=>{const[e,n]=s.useState(1);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[a.jsx(i,{label:"Quantidade",min:1,max:99,value:e,onChange:n}),a.jsxs("p",{style:{fontSize:"12px",color:"gray",margin:0},children:["Valor atual: ",a.jsx("strong",{children:e??"vazio (undefined)"})]})]})},parameters:{docs:{description:{story:"`value` e `onChange` trabalham diretamente com `number | undefined`. Apague o campo para ver `undefined` no log."}}}},C={name:"Controlled reset",render:()=>{const[n,o]=s.useState(1);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(i,{label:"Quantidade",min:1,max:50,value:n,onChange:o}),a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsxs(w,{style:{width:"fit-content"},size:"sm",variant:"secondary",onClick:()=>o(1),children:["Resetar para ",1]}),a.jsx(w,{style:{width:"fit-content"},size:"sm",variant:"warning",onClick:()=>o(void 0),children:"Limpar campo"})]}),a.jsxs("small",{children:["Valor: ",a.jsx("strong",{children:n??"undefined"})]})]})},parameters:{docs:{description:{story:'Usando `Button` do Zeroz para resetar (`variant="secondary"`) ou limpar (`variant="warning"`) o valor externamente. Demonstra que o componente sincroniza via `useEffect` quando `value` muda.'}}}},A={name:"Multiple independent steppers",render:()=>a.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:[a.jsx(i,{label:"Adultos",min:0,max:10}),a.jsx(i,{label:"Crianças",min:0,max:10}),a.jsx(i,{label:"Bebês",min:0,max:5})]}),parameters:{docs:{description:{story:"Cada instância gera seu próprio `id` via `useId()`, garantindo que os `htmlFor` das labels apontem para o input correto mesmo com múltiplos steppers na mesma página."}}}},G=["Default","WithBounds","NegativeRange","NoBounds","AtMinimum","AtMaximum","Disabled","WithError","RequiredValidation","Controlled","ControlledReset","MultipleSteppers"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    label: "Quantidade"
  }
}`,...u.parameters?.docs?.source},description:{story:`Estado base: stepper sem limites definidos.\r
Todos os args ficam disponíveis no painel Controls.`,...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "With min / max (1–10)",
  args: {
    label: "Itens",
    min: 1,
    max: 10
  },
  parameters: {
    docs: {
      description: {
        story: "O botão \`−\` fica desabilitado em \`min=1\` e o botão \`+\` em \`max=10\`. O valor inicial é \`min\` quando nenhum \`value\` é passado."
      }
    }
  }
}`,...p.parameters?.docs?.source},description:{story:"Intervalo de 1 a 10 — os botões são bloqueados ao atingir os extremos.\r\nO valor inicial é `min` (1) quando nenhum `value` é fornecido.",...p.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Negative range (min=-10, max=10)",
  args: {
    label: "Offset de temperatura",
    min: -10,
    max: 10
  },
  parameters: {
    docs: {
      description: {
        story: "O valor inicial é \`min\` (-10). O clamping funciona normalmente para valores negativos."
      }
    }
  }
}`,...x.parameters?.docs?.source},description:{story:"Intervalo negativo — demonstra que `min` e `max` aceitam valores negativos.\r\nÚtil para offsets, temperaturas ou ajustes relativos.",...x.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Without min / max",
  args: {
    label: "Valor livre",
    placeholder: "—"
  },
  parameters: {
    docs: {
      description: {
        story: "Sem \`min\` / \`max\`, o clamping é desativado e o valor inicial é \`undefined\` (campo vazio com placeholder)."
      }
    }
  }
}`,...b.parameters?.docs?.source},description:{story:`Sem limites definidos — o stepper aceita qualquer inteiro positivo ou negativo.\r
Use apenas quando não houver restrição semântica no domínio.`,...b.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "At minimum value",
  args: {
    label: "No mínimo",
    min: 0,
    max: 10,
    value: 0
  },
  parameters: {
    docs: {
      description: {
        story: "Quando \`value === min\`, o botão de decremento fica \`disabled\`. O botão de incremento continua ativo."
      }
    }
  }
}`,...v.parameters?.docs?.source},description:{story:"Valor no mínimo — botão `−` bloqueado visualmente.",...v.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "At maximum value",
  args: {
    label: "No máximo",
    min: 0,
    max: 10,
    value: 10
  },
  parameters: {
    docs: {
      description: {
        story: "Quando \`value === max\`, o botão de incremento fica \`disabled\`. O botão de decremento continua ativo."
      }
    }
  }
}`,...g.parameters?.docs?.source},description:{story:"Valor no máximo — botão `+` bloqueado visualmente.",...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Disabled",
  args: {
    label: "Quantidade (indisponível)",
    min: 1,
    max: 10,
    value: 5,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "A prop \`disabled\` é propagada para o \`<input>\` e para ambos os \`<button>\`s nativos. A classe \`.disabled\` no container aplica \`opacity: 0.64\` e \`background-color\` do token de desabilitado."
      }
    }
  }
}`,...f.parameters?.docs?.source},description:{story:"Estado desabilitado — input e ambos os botões bloqueados.\r\nO componente aplica a classe `.disabled` e opacidade 0.64 ao container.",...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Error state",
  args: {
    label: "Quantidade",
    error: true,
    textError: "O valor deve ser pelo menos 1."
  },
  parameters: {
    docs: {
      description: {
        story: "A classe \`.error\` no \`<input>\` aplica \`background-color: --s-color-fill-warning-light\` e \`border-color: --s-color-border-warning\`. A mensagem abaixo usa \`--s-color-content-warning\`."
      }
    }
  }
}`,...y.parameters?.docs?.source},description:{story:"Estado de erro com mensagem — input com fundo `warning-light`,\r\nborda `warning` e texto de erro abaixo.",...y.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Required field validation",
  render: () => {
    const [value, setValue] = useState<number | undefined>(1);
    const isEmpty = value === undefined;
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>\r
        <InputNumber label="Quantidade mínima" min={1} max={99} value={value} error={isEmpty} textError="Campo obrigatório. Informe um valor entre 1 e 99." onChange={setValue} />\r
        {!isEmpty && <p style={{
        fontSize: "12px",
        color: "gray",
        margin: 0
      }}>\r
            Valor atual: {value}\r
          </p>}\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "O erro é ativado somente quando o campo é apagado (\`value === undefined\`). Apague o campo manualmente para ver o estado de erro."
      }
    }
  }
}`,...h.parameters?.docs?.source},description:{story:"Validação de campo obrigatório — o erro aparece somente após o usuário\r\napagar o valor (campo fica `undefined`).",...h.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Controlled (with state)",
  render: () => {
    const [qty, setQty] = useState<number | undefined>(1);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>\r
        <InputNumber label="Quantidade" min={1} max={99} value={qty} onChange={setQty} />\r
        <p style={{
        fontSize: "12px",
        color: "gray",
        margin: 0
      }}>\r
          Valor atual: <strong>{qty ?? "vazio (undefined)"}</strong>\r
        </p>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "\`value\` e \`onChange\` trabalham diretamente com \`number | undefined\`. Apague o campo para ver \`undefined\` no log."
      }
    }
  }
}`,...E.parameters?.docs?.source},description:{story:"Modo controlado com `useState` — `value` e `onChange` usam `number | undefined`\r\nsem necessidade de conversão de string no consumidor.",...E.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Controlled reset",
  render: () => {
    const DEFAULT = 1;
    const [value, setValue] = useState<number | undefined>(DEFAULT);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>\r
        <InputNumber label="Quantidade" min={1} max={50} value={value} onChange={setValue} />\r
        <div style={{
        display: "flex",
        gap: "8px"
      }}>\r
          <Button style={{
          width: 'fit-content'
        }} size='sm' variant="secondary" onClick={() => setValue(DEFAULT)}>\r
            Resetar para {DEFAULT}\r
          </Button>\r
          <Button style={{
          width: 'fit-content'
        }} size='sm' variant="warning" onClick={() => setValue(undefined)}>\r
            Limpar campo\r
          </Button>\r
        </div>\r
        <small>\r
          Valor: <strong>{value ?? "undefined"}</strong>\r
        </small>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Usando \`Button\` do Zeroz para resetar (\`variant="secondary"\`) ou limpar (\`variant="warning"\`) o valor externamente. Demonstra que o componente sincroniza via \`useEffect\` quando \`value\` muda.'
      }
    }
  }
}`,...C.parameters?.docs?.source},description:{story:"Reset controlado via `Button` do Zeroz — demonstra como resetar o valor\r\nprogramaticamente a partir de um botão externo.",...C.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Multiple independent steppers",
  render: () => <div style={{
    display: "flex",
    gap: "24px",
    flexWrap: "wrap"
  }}>\r
      <InputNumber label="Adultos" min={0} max={10} />\r
      <InputNumber label="Crianças" min={0} max={10} />\r
      <InputNumber label="Bebês" min={0} max={5} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Cada instância gera seu próprio \`id\` via \`useId()\`, garantindo que os \`htmlFor\` das labels apontem para o input correto mesmo com múltiplos steppers na mesma página."
      }
    }
  }
}`,...A.parameters?.docs?.source},description:{story:"Múltiplos steppers independentes — cada instância tem seu próprio `id`\r\ngerado pelo `useId` do React, sem conflitos de DOM.",...A.parameters?.docs?.description}}};export{g as AtMaximum,v as AtMinimum,E as Controlled,C as ControlledReset,u as Default,f as Disabled,A as MultipleSteppers,x as NegativeRange,b as NoBounds,h as RequiredValidation,p as WithBounds,y as WithError,G as __namedExportsOrder,Z as default};
