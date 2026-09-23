import{r as s,j as n}from"./iframe-CxNvl9BI.js";import"./preload-helper-PPVm8Dsz.js";function A(a,e,r){return Math.min(r,Math.max(e,a))}function D(a,e,r,t){const i=Math.round(a/e)*e;return A(i,r,t)}function O(a,e,r){return r===e?0:(a-e)/(r-e)*100}function N(a,e,r,t,i){const c=A((a-e.left)/e.width,0,1)*(i-t)+t;return D(c,r,t,i)}function k({value:a,step:e,min:r,max:t,onChange:i}){const d=s.useRef(null),c=s.useRef(!1),j=`slider-${s.useId()}`,u=o=>i?.(o),v=o=>{if(!d.current)return;const p=N(o,d.current.getBoundingClientRect(),e,r,t);u(p)},C=o=>v(o.clientX),x=o=>{o.touches.length>0&&v(o.touches[0].clientX)},m=()=>{c.current=!1,window.removeEventListener("mousemove",C),window.removeEventListener("touchmove",x),window.removeEventListener("mouseup",m),window.removeEventListener("touchend",m)},F=o=>{c.current=!0,v(o),window.addEventListener("mousemove",C),window.addEventListener("touchmove",x),window.addEventListener("mouseup",m),window.addEventListener("touchend",m)};return{uid:j,trackRef:d,handleTrackInteraction:o=>{F(o.clientX)},handleKeyDown:o=>{if(o.key!=="ArrowLeft"&&o.key!=="ArrowRight")return;o.preventDefault();const p=o.key==="ArrowLeft"?-e:e,q=D(a+p,e,r,t);u(q)},handleInputChange:o=>{const p=parseFloat(o.target.value);isNaN(p)||u(D(p,e,r,t))}}}const l=({min:a,max:e,step:r,value:t,label:i,onChange:d})=>{const{uid:c,trackRef:j,handleTrackInteraction:u,handleKeyDown:v,handleInputChange:C}=k({value:t,step:r,min:a,max:e,onChange:d}),x=O(t,a,e),m=i?`${c}-label`:void 0;return n.jsxs("div",{className:"slider",children:[i&&n.jsx("label",{id:m,className:"slider-label",htmlFor:c,children:i}),n.jsxs("div",{className:"slider-container",children:[n.jsx("span",{className:"slider-max-min",children:a}),n.jsx("div",{className:"slider-track-wrapper",children:n.jsxs("div",{ref:j,className:"slider-background",onMouseDown:u,children:[n.jsx("div",{className:"slider-progress-bar",style:{width:`${x}%`}}),n.jsx("div",{className:"slider-button",role:"slider",tabIndex:0,"aria-valuenow":t,"aria-valuemin":a,"aria-valuemax":e,"aria-labelledby":m,"aria-label":m?void 0:"Slider",style:{left:`calc(${x}% - 8px)`},onKeyDown:v})]})}),n.jsx("span",{className:"slider-max-min",children:e}),n.jsx("input",{id:c,className:"slider-input",type:"number",inputMode:"numeric",min:a,max:e,step:r,value:t,onChange:C})]})]})},z={title:"Components/Slider",component:l,tags:["autodocs"],parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1365-11216"},docs:{description:{component:'\n**Slider** é um input de intervalo com handle customizado, barra de progresso,\nindicadores de mínimo/máximo e um input numérico auxiliar.\n\nTodas as interações — arrasto por mouse, arrasto por touch, teclas de seta e\ninput numérico direto — encaixam o valor no `step` mais próximo e o mantêm\ndentro do intervalo `[min, max]`.\n\n`value` e `onChange` trabalham diretamente com `number`, sem necessidade de\n`parseInt` no lado do consumidor.\n\n### Quando usar\n- Selecionar um valor dentro de um intervalo numérico contínuo\n- Controles de volume, brilho, opacidade ou ajustes similares\n- Casos em que tanto a entrada aproximada (arrastar) quanto a precisa (digitar) são úteis\n\n### Quando **não** usar\n- Escolha entre opções discretas nomeadas → use `Select` ou `RadioGroup`\n- Seleção de dois extremos de um intervalo → este componente não suporta handle duplo\n- Entrada de valor exato com alta precisão → use um `Input` numérico isolado\n\n### Boas práticas\n- Sempre forneça `min`, `max` e `step` — eles definem o intervalo válido\n- Use `label` para acessibilidade — ela é associada ao input numérico via `htmlFor`\n- O handle possui `role="slider"` e atributos `aria-value*` para leitores de tela\n        '}}},argTypes:{min:{control:"number",description:"Valor mínimo (inclusivo). **Obrigatório.**",table:{type:{summary:"number"}}},max:{control:"number",description:"Valor máximo (inclusivo). **Obrigatório.**",table:{type:{summary:"number"}}},step:{control:"number",description:"Incremento de cada passo. Aplicado no arrasto, clique e teclas de seta. **Obrigatório.**",table:{type:{summary:"number"}}},value:{control:"number",description:"Valor controlado atual. O componente é sempre controlado — mantenha o estado no consumidor. **Obrigatório.**",table:{type:{summary:"number"}}},label:{control:"text",description:"Label exibido acima do slider. Quando fornecido, é associado ao input numérico via `htmlFor`/`id` para acessibilidade.",table:{type:{summary:"string"}}},onChange:{action:"onChange",description:"Callback disparado em toda mudança de valor (arrasto, clique, seta, input direto). Recebe `number`.",table:{type:{summary:"(value: number) => void"}}}}},h={name:"Default",render:()=>{const[a,e]=s.useState(50);return n.jsx(l,{label:"Volume",min:0,max:100,step:1,value:a,onChange:e})}},b={name:"Stepped (step=10)",render:()=>{const[a,e]=s.useState(40);return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[n.jsx(l,{label:"Opacidade",min:0,max:100,step:10,value:a,onChange:e}),n.jsxs("small",{style:{color:"gray"},children:["Valor atual: ",a]})]})},parameters:{docs:{description:{story:"O handle encaixa no múltiplo de `step` mais próximo a cada interação (arrasto, clique ou seta)."}}}},g={name:"Negative range (min=-50, max=50)",render:()=>{const[a,e]=s.useState(0);return n.jsx(l,{label:"Offset de temperatura",min:-50,max:50,step:5,value:a,onChange:e})},parameters:{docs:{description:{story:"Slider com intervalo negativo. O valor zero é exibido no input e o handle fica posicionado ao centro."}}}},S={name:"Fractional step (step=0.1)",render:()=>{const[a,e]=s.useState(1.5);return n.jsx(l,{label:"Zoom",min:.5,max:3,step:.1,value:a,onChange:e})},parameters:{docs:{description:{story:"Passo decimal para controles de alta precisão. O snapping continua funcionando para steps fracionários."}}}},y={name:"Without label",render:()=>{const[a,e]=s.useState(25);return n.jsx(l,{min:0,max:100,step:1,value:a,onChange:e})},parameters:{docs:{description:{story:'Quando `label` não é fornecida, o handle recebe `aria-label="Slider"` como fallback. Use apenas quando o propósito for visualmente óbvio pelo contexto.'}}}},f={name:"Settings panel (multiple sliders)",render:()=>{const[a,e]=s.useState(70),[r,t]=s.useState(50),[i,d]=s.useState(30);return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"360px"},children:[n.jsx(l,{label:"Volume",min:0,max:100,step:1,value:a,onChange:e}),n.jsx(l,{label:"Brilho",min:0,max:100,step:5,value:r,onChange:t}),n.jsx(l,{label:"Graves",min:-10,max:10,step:1,value:i,onChange:d})]})},parameters:{docs:{description:{story:"Múltiplos sliders independentes — cada um mantém seu próprio estado e id único gerado pelo `useId` do React."}}}},E={name:"Disabled (workaround)",render:()=>{const[a]=s.useState(60);return n.jsx("div",{style:{pointerEvents:"none",opacity:.4},children:n.jsx(l,{label:"Slider desabilitado",min:0,max:100,step:1,value:a})})},parameters:{docs:{description:{story:"O componente não possui prop `disabled` nativa. Enquanto não for adicionada, use `pointer-events: none` + `opacity` no wrapper e omita `onChange` para evitar atualizações de estado."}}}},V={name:"At minimum value",render:()=>{const[a,e]=s.useState(0);return n.jsx(l,{label:"No mínimo",min:0,max:100,step:1,value:a,onChange:e})},parameters:{docs:{description:{story:"Handle posicionado no início da trilha. Barra de progresso vazia. Seta para esquerda não deve alterar o valor."}}}},w={name:"At maximum value",render:()=>{const[a,e]=s.useState(100);return n.jsx(l,{label:"No máximo",min:0,max:100,step:1,value:a,onChange:e})},parameters:{docs:{description:{story:"Handle posicionado no fim da trilha. Barra de progresso totalmente preenchida. Seta para direita não deve alterar o valor."}}}},P=["Default","SteppedValues","NegativeRange","FractionalStep","NoLabel","SettingsPanel","Disabled","AtMinimum","AtMaximum"];h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Default",
  render: () => {
    const [val, setVal] = useState(50);
    return <Slider label="Volume" min={0} max={100} step={1} value={val} onChange={setVal} />;
  }
}`,...h.parameters?.docs?.source},description:{story:`Estado base do componente: slider de 0 a 100, passo 1, com label.\r
Representa o caso de uso mais comum (ex.: controle de volume).`,...h.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Stepped (step=10)",
  render: () => {
    const [val, setVal] = useState(40);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>\r
        <Slider label="Opacidade" min={0} max={100} step={10} value={val} onChange={setVal} />\r
        <small style={{
        color: "gray"
      }}>Valor atual: {val}</small>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "O handle encaixa no múltiplo de \`step\` mais próximo a cada interação (arrasto, clique ou seta)."
      }
    }
  }
}`,...b.parameters?.docs?.source},description:{story:`Passo de 10 — o handle encaixa apenas em múltiplos de 10.\r
Útil para valores percentuais com granularidade grossa, como opacidade em 10%.`,...b.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Negative range (min=-50, max=50)",
  render: () => {
    const [val, setVal] = useState(0);
    return <Slider label="Offset de temperatura" min={-50} max={50} step={5} value={val} onChange={setVal} />;
  },
  parameters: {
    docs: {
      description: {
        story: "Slider com intervalo negativo. O valor zero é exibido no input e o handle fica posicionado ao centro."
      }
    }
  }
}`,...g.parameters?.docs?.source},description:{story:"Intervalo negativo — demonstra que `min` e `max` aceitam números negativos.\r\nÚtil para offsets de temperatura, balanço de áudio, ajustes de equalização, etc.",...g.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Fractional step (step=0.1)",
  render: () => {
    const [val, setVal] = useState(1.5);
    return <Slider label="Zoom" min={0.5} max={3} step={0.1} value={val} onChange={setVal} />;
  },
  parameters: {
    docs: {
      description: {
        story: "Passo decimal para controles de alta precisão. O snapping continua funcionando para steps fracionários."
      }
    }
  }
}`,...S.parameters?.docs?.source},description:{story:`Passo fracionário — útil para controles de precisão, como zoom ou ajuste fino.\r
O input numérico aceita valores decimais diretamente.`,...S.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Without label",
  render: () => {
    const [val, setVal] = useState(25);
    return <Slider min={0} max={100} step={1} value={val} onChange={setVal} />;
  },
  parameters: {
    docs: {
      description: {
        story: "Quando \`label\` não é fornecida, o handle recebe \`aria-label=\\"Slider\\"\` como fallback. Use apenas quando o propósito for visualmente óbvio pelo contexto."
      }
    }
  }
}`,...y.parameters?.docs?.source},description:{story:'Sem label — o handle recebe `aria-label="Slider"` como fallback acessível.\r\nUse somente quando o contexto visual já deixar o propósito claro.',...y.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Settings panel (multiple sliders)",
  render: () => {
    const [volume, setVolume] = useState(70);
    const [brightness, setBrightness] = useState(50);
    const [bass, setBass] = useState(30);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "360px"
    }}>\r
        <Slider label="Volume" min={0} max={100} step={1} value={volume} onChange={setVolume} />\r
        <Slider label="Brilho" min={0} max={100} step={5} value={brightness} onChange={setBrightness} />\r
        <Slider label="Graves" min={-10} max={10} step={1} value={bass} onChange={setBass} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Múltiplos sliders independentes — cada um mantém seu próprio estado e id único gerado pelo \`useId\` do React."
      }
    }
  }
}`,...f.parameters?.docs?.source},description:{story:"Painel de configurações — múltiplos sliders independentes em sequência.\r\nCada instância gera seu próprio `id` via `useId`, evitando conflitos de DOM.",...f.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Disabled (workaround)",
  render: () => {
    const [val] = useState(60);
    return <div style={{
      pointerEvents: "none",
      opacity: 0.4
    }}>\r
        <Slider label="Slider desabilitado" min={0} max={100} step={1} value={val} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "O componente não possui prop \`disabled\` nativa. Enquanto não for adicionada, use \`pointer-events: none\` + \`opacity\` no wrapper e omita \`onChange\` para evitar atualizações de estado."
      }
    }
  }
}`,...E.parameters?.docs?.source},description:{story:'Estado desabilitado — bloqueia visualmente e interativamente o slider.\r\n\n⚠️ O componente atual não possui a prop `disabled` nativamente.\r\nEste exemplo mostra o padrão recomendado via wrapper com\r\n`pointer-events: none` + `opacity` enquanto a prop não for implementada.\r\n\nAo implementar `disabled` nativamente, lembre-se de:\r\n- Adicionar `aria-disabled="true"` no handle\r\n- Remover `tabIndex` do handle\r\n- Adicionar `disabled` ao `<input type="number">`',...E.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "At minimum value",
  render: () => {
    const [val, setVal] = useState(0);
    return <Slider label="No mínimo" min={0} max={100} step={1} value={val} onChange={setVal} />;
  },
  parameters: {
    docs: {
      description: {
        story: "Handle posicionado no início da trilha. Barra de progresso vazia. Seta para esquerda não deve alterar o valor."
      }
    }
  }
}`,...V.parameters?.docs?.source},description:{story:`Valor no mínimo — barra de progresso vazia, handle posicionado no início da trilha.\r
Verifique que o handle não saia da área visível do track.`,...V.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "At maximum value",
  render: () => {
    const [val, setVal] = useState(100);
    return <Slider label="No máximo" min={0} max={100} step={1} value={val} onChange={setVal} />;
  },
  parameters: {
    docs: {
      description: {
        story: "Handle posicionado no fim da trilha. Barra de progresso totalmente preenchida. Seta para direita não deve alterar o valor."
      }
    }
  }
}`,...w.parameters?.docs?.source},description:{story:`Valor no máximo — barra de progresso completamente preenchida, handle no fim da trilha.\r
Verifique que o handle não ultrapasse a borda direita do track.`,...w.parameters?.docs?.description}}};export{w as AtMaximum,V as AtMinimum,h as Default,E as Disabled,S as FractionalStep,g as NegativeRange,y as NoLabel,f as SettingsPanel,b as SteppedValues,P as __namedExportsOrder,z as default};
