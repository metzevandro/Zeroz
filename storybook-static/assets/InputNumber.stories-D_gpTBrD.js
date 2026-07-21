import{r as l,j as a}from"./iframe-C_0AXUlQ.js";/* empty css               */import{I as ze}from"./Icon-C3Uq1gPi.js";import{B as We}from"./Button-QvF2SVTw.js";import"./preload-helper-PPVm8Dsz.js";import"./Loading-CCCSPJuP.js";import"./Skeleton-DNOAWNPr.js";function V(e,o,r){return r!==void 0&&e>r?r:o!==void 0&&e<o?o:e}function Fe(e){if(e==="")return;const o=parseInt(e,10);return isNaN(o)?void 0:o}function Le(e){return e!==void 0?e:void 0}function Ue({min:e,max:o,value:r,onChange:d}){const D=`input-number-${l.useId()}`,[S,u]=l.useState(()=>Le(e));l.useEffect(()=>{r!==void 0&&u(r)},[r]);const c=n=>d?.(n);return{uid:D,numero:S,increment:()=>{u(n=>{var t;const s=(t=n??e)!==null&&t!==void 0?t:0,i=V(s+1,e,o);return i===n?n:(c(i),i)})},decrement:()=>{u(n=>{var t;const s=(t=n??e)!==null&&t!==void 0?t:0,i=V(s-1,e,o);return i===n?n:(c(i),i)})},handleInputChange:n=>{const t=n.target.value;let s;if(t==="")s=void 0;else{const i=Fe(t);s=i!==void 0?V(i,e,o):e??void 0}u(s),c(s)}}}const m=({max:e,min:o,placeholder:r,disabled:d=!1,label:q,onChange:D,error:S=!1,textError:u,value:c})=>{const[we,E]=l.useState(!1),{uid:I,numero:n,increment:t,decrement:s,handleInputChange:i}=Ue({min:o,max:e,value:c,onChange:D});return a.jsxs("div",{className:"input-number-root",children:[q&&a.jsx("label",{className:"input-number-label",htmlFor:I,children:q}),a.jsxs("div",{className:`input-number ${d?"disabled":""}`,children:[a.jsx("button",{disabled:d,className:"subtract",onClick:s,children:a.jsx(ze,{size:"md",icon:"remove"})}),a.jsx("input",{id:I,className:`input ${S?"error":""}`,type:"number",inputMode:"numeric",placeholder:r,value:n!==void 0?n:"",max:e,min:o,disabled:d,onChange:i,style:{borderRight:we?"var(--s-border-width-hairline) solid var(--s-color-border-default-hover)":""}}),a.jsx("button",{disabled:d,className:"add",onClick:t,onMouseEnter:()=>E(!0),onMouseLeave:()=>E(!1),children:a.jsx(ze,{size:"md",icon:"add"})})]}),S&&a.jsx("div",{className:"textError",children:u})]})};var R,j,M,B,O,Q,w,z,W,F,L,U,k,T,Z,G,H,$,J,K,P,X,Y,ee,ae,oe,ne,re,te,ie,se,de,le,me,ue,ce,pe,ve,be,ge,_e,xe,fe,ye,he,Ce,Ae,Ne,Se,qe,De,Ee,Ie,Ve,Re,je,Me,Be,Oe,Qe;const Ke={title:"Components/InputNumber",component:m,tags:["autodocs"],parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1365-11217"},docs:{description:{component:'\n**InputNumber** é um input numérico com botões de incremento e decremento.\n\nOs valores são automaticamente limitados ao intervalo `[min, max]` em toda\ninteração — ao clicar nos botões, ao digitar ou ao colar um número.\nO `onChange` recebe `number | undefined` — sem necessidade de `parseInt` no lado do consumidor.\n\nA label é associada ao `<input>` via `htmlFor` / `id` gerado por `useId`\n(WCAG 2.1 SC 1.3.1).\n\n### Quando usar\n- Seletor de quantidade (itens no carrinho, número de passageiros)\n- Configurações numéricas com limites definidos (tamanho de fonte, timeout, paginação)\n- Qualquer campo onde apenas números inteiros são válidos\n\n### Quando **não** usar\n- Quando o valor aceita decimais → use `Input type="number"` com step fracionário\n- Quando o intervalo é muito amplo e a precisão é crítica → use um `Input` numérico simples\n- Quando as opções são discretas e nomeadas → use `InputSelect`\n\n### Boas práticas\n- Sempre defina `min` e `max` para comunicar o intervalo válido ao usuário\n- Use `label` para acessibilidade — não dependa apenas de `placeholder`\n- Use `value` + `onChange` para uso controlado dentro de formulários\n- Trate `undefined` no `onChange` — significa que o campo foi apagado\n        '}}},argTypes:{label:{control:"text",description:"Label exibida acima do input, associada via `htmlFor` / `id`.",table:{type:{summary:"string"}}},min:{control:"number",description:"Valor mínimo permitido (inclusivo).",table:{type:{summary:"number"}}},max:{control:"number",description:"Valor máximo permitido (inclusivo).",table:{type:{summary:"number"}}},placeholder:{control:"text",description:"Texto exibido no input quando o valor está vazio.",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"Desabilita o input e ambos os botões.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},error:{control:"boolean",description:"Renderiza o input com estilo de erro.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},textError:{control:"text",description:"Mensagem de validação exibida abaixo quando `error=true`.",table:{type:{summary:"string"}}},value:{control:"number",description:"Valor controlado externamente.",table:{type:{summary:"number"}}},onChange:{action:"onChange",description:"Disparado a cada mudança de valor. Recebe `number | undefined` — `undefined` quando o campo é apagado.",table:{type:{summary:"(value: number | undefined) => void"}}}}},p={name:"Default",args:{label:"Quantidade"}},v={name:"With min / max (1–10)",args:{label:"Itens",min:1,max:10},parameters:{docs:{description:{story:"O botão `−` fica desabilitado em `min=1` e o botão `+` em `max=10`. O valor inicial é `min` quando nenhum `value` é passado."}}}},b={name:"Negative range (min=-10, max=10)",args:{label:"Offset de temperatura",min:-10,max:10},parameters:{docs:{description:{story:"O valor inicial é `min` (-10). O clamping funciona normalmente para valores negativos."}}}},g={name:"Without min / max",args:{label:"Valor livre",placeholder:"—"},parameters:{docs:{description:{story:"Sem `min` / `max`, o clamping é desativado e o valor inicial é `undefined` (campo vazio com placeholder)."}}}},_={name:"At minimum value",args:{label:"No mínimo",min:0,max:10,value:0},parameters:{docs:{description:{story:"Quando `value === min`, o botão de decremento fica `disabled`. O botão de incremento continua ativo."}}}},x={name:"At maximum value",args:{label:"No máximo",min:0,max:10,value:10},parameters:{docs:{description:{story:"Quando `value === max`, o botão de incremento fica `disabled`. O botão de decremento continua ativo."}}}},f={name:"Disabled",args:{label:"Quantidade (indisponível)",min:1,max:10,value:5,disabled:!0},parameters:{docs:{description:{story:"A prop `disabled` é propagada para o `<input>` e para ambos os `<button>`s nativos. A classe `.disabled` no container aplica `opacity: 0.64` e `background-color` do token de desabilitado."}}}},y={name:"Error state",args:{label:"Quantidade",error:!0,textError:"O valor deve ser pelo menos 1."},parameters:{docs:{description:{story:"A classe `.error` no `<input>` aplica `background-color: --s-color-fill-warning-light` e `border-color: --s-color-border-warning`. A mensagem abaixo usa `--s-color-content-warning`."}}}},h={name:"Required field validation",render:()=>{const[e,o]=l.useState(1),r=e===void 0;return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[a.jsx(m,{label:"Quantidade mínima",min:1,max:99,value:e,error:r,textError:"Campo obrigatório. Informe um valor entre 1 e 99.",onChange:o}),!r&&a.jsxs("p",{style:{fontSize:"12px",color:"gray",margin:0},children:["Valor atual: ",e]})]})},parameters:{docs:{description:{story:"O erro é ativado somente quando o campo é apagado (`value === undefined`). Apague o campo manualmente para ver o estado de erro."}}}},C={name:"Controlled (with state)",render:()=>{const[e,o]=l.useState(1);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[a.jsx(m,{label:"Quantidade",min:1,max:99,value:e,onChange:o}),a.jsxs("p",{style:{fontSize:"12px",color:"gray",margin:0},children:["Valor atual: ",a.jsx("strong",{children:e??"vazio (undefined)"})]})]})},parameters:{docs:{description:{story:"`value` e `onChange` trabalham diretamente com `number | undefined`. Apague o campo para ver `undefined` no log."}}}},A={name:"Controlled reset",render:()=>{const[o,r]=l.useState(1);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(m,{label:"Quantidade",min:1,max:50,value:o,onChange:r}),a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsxs(We,{style:{width:"fit-content"},size:"sm",variant:"secondary",onClick:()=>r(1),children:["Resetar para ",1]}),a.jsx(We,{style:{width:"fit-content"},size:"sm",variant:"warning",onClick:()=>r(void 0),children:"Limpar campo"})]}),a.jsxs("small",{children:["Valor: ",a.jsx("strong",{children:o??"undefined"})]})]})},parameters:{docs:{description:{story:'Usando `Button` do Zeroz para resetar (`variant="secondary"`) ou limpar (`variant="warning"`) o valor externamente. Demonstra que o componente sincroniza via `useEffect` quando `value` muda.'}}}},N={name:"Multiple independent steppers",render:()=>a.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:[a.jsx(m,{label:"Adultos",min:0,max:10}),a.jsx(m,{label:"Crianças",min:0,max:10}),a.jsx(m,{label:"Bebês",min:0,max:5})]}),parameters:{docs:{description:{story:"Cada instância gera seu próprio `id` via `useId()`, garantindo que os `htmlFor` das labels apontem para o input correto mesmo com múltiplos steppers na mesma página."}}}};p.parameters={...p.parameters,docs:{...(R=p.parameters)===null||R===void 0?void 0:R.docs,source:{originalSource:`{
  name: "Default",
  args: {
    label: "Quantidade"
  }
}`,...(M=p.parameters)===null||M===void 0||(j=M.docs)===null||j===void 0?void 0:j.source},description:{story:`Estado base: stepper sem limites definidos.\r
Todos os args ficam disponíveis no painel Controls.`,...(O=p.parameters)===null||O===void 0||(B=O.docs)===null||B===void 0?void 0:B.description}}};v.parameters={...v.parameters,docs:{...(Q=v.parameters)===null||Q===void 0?void 0:Q.docs,source:{originalSource:`{
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
}`,...(z=v.parameters)===null||z===void 0||(w=z.docs)===null||w===void 0?void 0:w.source},description:{story:"Intervalo de 1 a 10 — os botões são bloqueados ao atingir os extremos.\r\nO valor inicial é `min` (1) quando nenhum `value` é fornecido.",...(F=v.parameters)===null||F===void 0||(W=F.docs)===null||W===void 0?void 0:W.description}}};b.parameters={...b.parameters,docs:{...(L=b.parameters)===null||L===void 0?void 0:L.docs,source:{originalSource:`{
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
}`,...(k=b.parameters)===null||k===void 0||(U=k.docs)===null||U===void 0?void 0:U.source},description:{story:"Intervalo negativo — demonstra que `min` e `max` aceitam valores negativos.\r\nÚtil para offsets, temperaturas ou ajustes relativos.",...(Z=b.parameters)===null||Z===void 0||(T=Z.docs)===null||T===void 0?void 0:T.description}}};g.parameters={...g.parameters,docs:{...(G=g.parameters)===null||G===void 0?void 0:G.docs,source:{originalSource:`{
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
}`,...($=g.parameters)===null||$===void 0||(H=$.docs)===null||H===void 0?void 0:H.source},description:{story:`Sem limites definidos — o stepper aceita qualquer inteiro positivo ou negativo.\r
Use apenas quando não houver restrição semântica no domínio.`,...(K=g.parameters)===null||K===void 0||(J=K.docs)===null||J===void 0?void 0:J.description}}};_.parameters={..._.parameters,docs:{...(P=_.parameters)===null||P===void 0?void 0:P.docs,source:{originalSource:`{
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
}`,...(Y=_.parameters)===null||Y===void 0||(X=Y.docs)===null||X===void 0?void 0:X.source},description:{story:"Valor no mínimo — botão `−` bloqueado visualmente.",...(ae=_.parameters)===null||ae===void 0||(ee=ae.docs)===null||ee===void 0?void 0:ee.description}}};x.parameters={...x.parameters,docs:{...(oe=x.parameters)===null||oe===void 0?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=x.parameters)===null||re===void 0||(ne=re.docs)===null||ne===void 0?void 0:ne.source},description:{story:"Valor no máximo — botão `+` bloqueado visualmente.",...(ie=x.parameters)===null||ie===void 0||(te=ie.docs)===null||te===void 0?void 0:te.description}}};f.parameters={...f.parameters,docs:{...(se=f.parameters)===null||se===void 0?void 0:se.docs,source:{originalSource:`{
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
}`,...(le=f.parameters)===null||le===void 0||(de=le.docs)===null||de===void 0?void 0:de.source},description:{story:"Estado desabilitado — input e ambos os botões bloqueados.\r\nO componente aplica a classe `.disabled` e opacidade 0.64 ao container.",...(ue=f.parameters)===null||ue===void 0||(me=ue.docs)===null||me===void 0?void 0:me.description}}};y.parameters={...y.parameters,docs:{...(ce=y.parameters)===null||ce===void 0?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ve=y.parameters)===null||ve===void 0||(pe=ve.docs)===null||pe===void 0?void 0:pe.source},description:{story:"Estado de erro com mensagem — input com fundo `warning-light`,\r\nborda `warning` e texto de erro abaixo.",...(ge=y.parameters)===null||ge===void 0||(be=ge.docs)===null||be===void 0?void 0:be.description}}};h.parameters={...h.parameters,docs:{...(_e=h.parameters)===null||_e===void 0?void 0:_e.docs,source:{originalSource:`{
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
}`,...(fe=h.parameters)===null||fe===void 0||(xe=fe.docs)===null||xe===void 0?void 0:xe.source},description:{story:"Validação de campo obrigatório — o erro aparece somente após o usuário\r\napagar o valor (campo fica `undefined`).",...(he=h.parameters)===null||he===void 0||(ye=he.docs)===null||ye===void 0?void 0:ye.description}}};C.parameters={...C.parameters,docs:{...(Ce=C.parameters)===null||Ce===void 0?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ne=C.parameters)===null||Ne===void 0||(Ae=Ne.docs)===null||Ae===void 0?void 0:Ae.source},description:{story:"Modo controlado com `useState` — `value` e `onChange` usam `number | undefined`\r\nsem necessidade de conversão de string no consumidor.",...(qe=C.parameters)===null||qe===void 0||(Se=qe.docs)===null||Se===void 0?void 0:Se.description}}};A.parameters={...A.parameters,docs:{...(De=A.parameters)===null||De===void 0?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ie=A.parameters)===null||Ie===void 0||(Ee=Ie.docs)===null||Ee===void 0?void 0:Ee.source},description:{story:"Reset controlado via `Button` do Zeroz — demonstra como resetar o valor\r\nprogramaticamente a partir de um botão externo.",...(Re=A.parameters)===null||Re===void 0||(Ve=Re.docs)===null||Ve===void 0?void 0:Ve.description}}};N.parameters={...N.parameters,docs:{...(je=N.parameters)===null||je===void 0?void 0:je.docs,source:{originalSource:`{
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
}`,...(Be=N.parameters)===null||Be===void 0||(Me=Be.docs)===null||Me===void 0?void 0:Me.source},description:{story:"Múltiplos steppers independentes — cada instância tem seu próprio `id`\r\ngerado pelo `useId` do React, sem conflitos de DOM.",...(Qe=N.parameters)===null||Qe===void 0||(Oe=Qe.docs)===null||Oe===void 0?void 0:Oe.description}}};const Pe=["Default","WithBounds","NegativeRange","NoBounds","AtMinimum","AtMaximum","Disabled","WithError","RequiredValidation","Controlled","ControlledReset","MultipleSteppers"];export{x as AtMaximum,_ as AtMinimum,C as Controlled,A as ControlledReset,p as Default,f as Disabled,N as MultipleSteppers,b as NegativeRange,g as NoBounds,h as RequiredValidation,v as WithBounds,y as WithError,Pe as __namedExportsOrder,Ke as default};
