import{r as i,j as o}from"./iframe-DFdk80Qn.js";import"./preload-helper-PPVm8Dsz.js";function _e(a,e,r){return Math.min(r,Math.max(e,a))}function xe(a,e,r,t){const s=Math.round(a/e)*e;return _e(s,r,t)}function ye(a,e,r){return r===e?0:(a-e)/(r-e)*100}function Ve(a,e,r,t,s){const m=_e((a-e.left)/e.width,0,1)*(s-t)+t;return xe(m,r,t,s)}function we({value:a,step:e,min:r,max:t,onChange:s}){const d=i.useRef(null),m=i.useRef(!1),D=`slider-${i.useId()}`,u=n=>s?.(n),v=n=>{if(!d.current)return;const p=Ve(n,d.current.getBoundingClientRect(),e,r,t);u(p)},C=n=>v(n.clientX),b=n=>{n.touches.length>0&&v(n.touches[0].clientX)},c=()=>{m.current=!1,window.removeEventListener("mousemove",C),window.removeEventListener("touchmove",b),window.removeEventListener("mouseup",c),window.removeEventListener("touchend",c)},Se=n=>{m.current=!0,v(n),window.addEventListener("mousemove",C),window.addEventListener("touchmove",b),window.addEventListener("mouseup",c),window.addEventListener("touchend",c)};return{uid:D,trackRef:d,handleTrackInteraction:n=>{Se(n.clientX)},handleKeyDown:n=>{if(n.key!=="ArrowLeft"&&n.key!=="ArrowRight")return;n.preventDefault();const p=n.key==="ArrowLeft"?-e:e,fe=xe(a+p,e,r,t);u(fe)},handleInputChange:n=>{const p=parseFloat(n.target.value);isNaN(p)||u(xe(p,e,r,t))}}}const l=({min:a,max:e,step:r,value:t,label:s,onChange:d})=>{const{uid:m,trackRef:D,handleTrackInteraction:u,handleKeyDown:v,handleInputChange:C}=we({value:t,step:r,min:a,max:e,onChange:d}),b=ye(t,a,e),c=s?`${m}-label`:void 0;return o.jsxs("div",{className:"slider",children:[s&&o.jsx("label",{id:c,className:"slider-label",htmlFor:m,children:s}),o.jsxs("div",{className:"slider-container",children:[o.jsx("span",{className:"slider-max-min",children:a}),o.jsx("div",{className:"slider-track-wrapper",children:o.jsxs("div",{ref:D,className:"slider-background",onMouseDown:u,children:[o.jsx("div",{className:"slider-progress-bar",style:{width:`${b}%`}}),o.jsx("div",{className:"slider-button",role:"slider",tabIndex:0,"aria-valuenow":t,"aria-valuemin":a,"aria-valuemax":e,"aria-labelledby":c,"aria-label":c?void 0:"Slider",style:{left:`calc(${b}% - 8px)`},onKeyDown:v})]})}),o.jsx("span",{className:"slider-max-min",children:e}),o.jsx("input",{id:m,className:"slider-input",type:"number",inputMode:"numeric",min:a,max:e,step:r,value:t,onChange:C})]})]})};var N,j,A,M,q,O,E,R,L,k,I,B,F,P,z,T,G,H,Q,K,U,X,Z,$,W,J,Y,ee,ae,oe,ne,re,te,se,ie,le,de,me,ce,pe,ue,ve,be,ge,he;const Me={title:"Components/Slider",component:l,tags:["autodocs"],parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1365-11216"},docs:{description:{component:'\n**Slider** é um input de intervalo com handle customizado, barra de progresso,\nindicadores de mínimo/máximo e um input numérico auxiliar.\n\nTodas as interações — arrasto por mouse, arrasto por touch, teclas de seta e\ninput numérico direto — encaixam o valor no `step` mais próximo e o mantêm\ndentro do intervalo `[min, max]`.\n\n`value` e `onChange` trabalham diretamente com `number`, sem necessidade de\n`parseInt` no lado do consumidor.\n\n### Quando usar\n- Selecionar um valor dentro de um intervalo numérico contínuo\n- Controles de volume, brilho, opacidade ou ajustes similares\n- Casos em que tanto a entrada aproximada (arrastar) quanto a precisa (digitar) são úteis\n\n### Quando **não** usar\n- Escolha entre opções discretas nomeadas → use `Select` ou `RadioGroup`\n- Seleção de dois extremos de um intervalo → este componente não suporta handle duplo\n- Entrada de valor exato com alta precisão → use um `Input` numérico isolado\n\n### Boas práticas\n- Sempre forneça `min`, `max` e `step` — eles definem o intervalo válido\n- Use `label` para acessibilidade — ela é associada ao input numérico via `htmlFor`\n- O handle possui `role="slider"` e atributos `aria-value*` para leitores de tela\n        '}}},argTypes:{min:{control:"number",description:"Valor mínimo (inclusivo). **Obrigatório.**",table:{type:{summary:"number"}}},max:{control:"number",description:"Valor máximo (inclusivo). **Obrigatório.**",table:{type:{summary:"number"}}},step:{control:"number",description:"Incremento de cada passo. Aplicado no arrasto, clique e teclas de seta. **Obrigatório.**",table:{type:{summary:"number"}}},value:{control:"number",description:"Valor controlado atual. O componente é sempre controlado — mantenha o estado no consumidor. **Obrigatório.**",table:{type:{summary:"number"}}},label:{control:"text",description:"Label exibido acima do slider. Quando fornecido, é associado ao input numérico via `htmlFor`/`id` para acessibilidade.",table:{type:{summary:"string"}}},onChange:{action:"onChange",description:"Callback disparado em toda mudança de valor (arrasto, clique, seta, input direto). Recebe `number`.",table:{type:{summary:"(value: number) => void"}}}}},g={name:"Default",render:()=>{const[a,e]=i.useState(50);return o.jsx(l,{label:"Volume",min:0,max:100,step:1,value:a,onChange:e})}},h={name:"Stepped (step=10)",render:()=>{const[a,e]=i.useState(40);return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[o.jsx(l,{label:"Opacidade",min:0,max:100,step:10,value:a,onChange:e}),o.jsxs("small",{style:{color:"gray"},children:["Valor atual: ",a]})]})},parameters:{docs:{description:{story:"O handle encaixa no múltiplo de `step` mais próximo a cada interação (arrasto, clique ou seta)."}}}},x={name:"Negative range (min=-50, max=50)",render:()=>{const[a,e]=i.useState(0);return o.jsx(l,{label:"Offset de temperatura",min:-50,max:50,step:5,value:a,onChange:e})},parameters:{docs:{description:{story:"Slider com intervalo negativo. O valor zero é exibido no input e o handle fica posicionado ao centro."}}}},_={name:"Fractional step (step=0.1)",render:()=>{const[a,e]=i.useState(1.5);return o.jsx(l,{label:"Zoom",min:.5,max:3,step:.1,value:a,onChange:e})},parameters:{docs:{description:{story:"Passo decimal para controles de alta precisão. O snapping continua funcionando para steps fracionários."}}}},S={name:"Without label",render:()=>{const[a,e]=i.useState(25);return o.jsx(l,{min:0,max:100,step:1,value:a,onChange:e})},parameters:{docs:{description:{story:'Quando `label` não é fornecida, o handle recebe `aria-label="Slider"` como fallback. Use apenas quando o propósito for visualmente óbvio pelo contexto.'}}}},f={name:"Settings panel (multiple sliders)",render:()=>{const[a,e]=i.useState(70),[r,t]=i.useState(50),[s,d]=i.useState(30);return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"360px"},children:[o.jsx(l,{label:"Volume",min:0,max:100,step:1,value:a,onChange:e}),o.jsx(l,{label:"Brilho",min:0,max:100,step:5,value:r,onChange:t}),o.jsx(l,{label:"Graves",min:-10,max:10,step:1,value:s,onChange:d})]})},parameters:{docs:{description:{story:"Múltiplos sliders independentes — cada um mantém seu próprio estado e id único gerado pelo `useId` do React."}}}},y={name:"Disabled (workaround)",render:()=>{const[a]=i.useState(60);return o.jsx("div",{style:{pointerEvents:"none",opacity:.4},children:o.jsx(l,{label:"Slider desabilitado",min:0,max:100,step:1,value:a})})},parameters:{docs:{description:{story:"O componente não possui prop `disabled` nativa. Enquanto não for adicionada, use `pointer-events: none` + `opacity` no wrapper e omita `onChange` para evitar atualizações de estado."}}}},V={name:"At minimum value",render:()=>{const[a,e]=i.useState(0);return o.jsx(l,{label:"No mínimo",min:0,max:100,step:1,value:a,onChange:e})},parameters:{docs:{description:{story:"Handle posicionado no início da trilha. Barra de progresso vazia. Seta para esquerda não deve alterar o valor."}}}},w={name:"At maximum value",render:()=>{const[a,e]=i.useState(100);return o.jsx(l,{label:"No máximo",min:0,max:100,step:1,value:a,onChange:e})},parameters:{docs:{description:{story:"Handle posicionado no fim da trilha. Barra de progresso totalmente preenchida. Seta para direita não deve alterar o valor."}}}};g.parameters={...g.parameters,docs:{...(N=g.parameters)===null||N===void 0?void 0:N.docs,source:{originalSource:`{
  name: "Default",
  render: () => {
    const [val, setVal] = useState(50);
    return <Slider label="Volume" min={0} max={100} step={1} value={val} onChange={setVal} />;
  }
}`,...(A=g.parameters)===null||A===void 0||(j=A.docs)===null||j===void 0?void 0:j.source},description:{story:`Estado base do componente: slider de 0 a 100, passo 1, com label.\r
Representa o caso de uso mais comum (ex.: controle de volume).`,...(q=g.parameters)===null||q===void 0||(M=q.docs)===null||M===void 0?void 0:M.description}}};h.parameters={...h.parameters,docs:{...(O=h.parameters)===null||O===void 0?void 0:O.docs,source:{originalSource:`{
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
}`,...(R=h.parameters)===null||R===void 0||(E=R.docs)===null||E===void 0?void 0:E.source},description:{story:`Passo de 10 — o handle encaixa apenas em múltiplos de 10.\r
Útil para valores percentuais com granularidade grossa, como opacidade em 10%.`,...(k=h.parameters)===null||k===void 0||(L=k.docs)===null||L===void 0?void 0:L.description}}};x.parameters={...x.parameters,docs:{...(I=x.parameters)===null||I===void 0?void 0:I.docs,source:{originalSource:`{
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
}`,...(F=x.parameters)===null||F===void 0||(B=F.docs)===null||B===void 0?void 0:B.source},description:{story:"Intervalo negativo — demonstra que `min` e `max` aceitam números negativos.\r\nÚtil para offsets de temperatura, balanço de áudio, ajustes de equalização, etc.",...(z=x.parameters)===null||z===void 0||(P=z.docs)===null||P===void 0?void 0:P.description}}};_.parameters={..._.parameters,docs:{...(T=_.parameters)===null||T===void 0?void 0:T.docs,source:{originalSource:`{
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
}`,...(H=_.parameters)===null||H===void 0||(G=H.docs)===null||G===void 0?void 0:G.source},description:{story:`Passo fracionário — útil para controles de precisão, como zoom ou ajuste fino.\r
O input numérico aceita valores decimais diretamente.`,...(K=_.parameters)===null||K===void 0||(Q=K.docs)===null||Q===void 0?void 0:Q.description}}};S.parameters={...S.parameters,docs:{...(U=S.parameters)===null||U===void 0?void 0:U.docs,source:{originalSource:`{
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
}`,...(Z=S.parameters)===null||Z===void 0||(X=Z.docs)===null||X===void 0?void 0:X.source},description:{story:'Sem label — o handle recebe `aria-label="Slider"` como fallback acessível.\r\nUse somente quando o contexto visual já deixar o propósito claro.',...(W=S.parameters)===null||W===void 0||($=W.docs)===null||$===void 0?void 0:$.description}}};f.parameters={...f.parameters,docs:{...(J=f.parameters)===null||J===void 0?void 0:J.docs,source:{originalSource:`{
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
}`,...(ee=f.parameters)===null||ee===void 0||(Y=ee.docs)===null||Y===void 0?void 0:Y.source},description:{story:"Painel de configurações — múltiplos sliders independentes em sequência.\r\nCada instância gera seu próprio `id` via `useId`, evitando conflitos de DOM.",...(oe=f.parameters)===null||oe===void 0||(ae=oe.docs)===null||ae===void 0?void 0:ae.description}}};y.parameters={...y.parameters,docs:{...(ne=y.parameters)===null||ne===void 0?void 0:ne.docs,source:{originalSource:`{
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
}`,...(te=y.parameters)===null||te===void 0||(re=te.docs)===null||re===void 0?void 0:re.source},description:{story:'Estado desabilitado — bloqueia visualmente e interativamente o slider.\r\n\n⚠️ O componente atual não possui a prop `disabled` nativamente.\r\nEste exemplo mostra o padrão recomendado via wrapper com\r\n`pointer-events: none` + `opacity` enquanto a prop não for implementada.\r\n\nAo implementar `disabled` nativamente, lembre-se de:\r\n- Adicionar `aria-disabled="true"` no handle\r\n- Remover `tabIndex` do handle\r\n- Adicionar `disabled` ao `<input type="number">`',...(ie=y.parameters)===null||ie===void 0||(se=ie.docs)===null||se===void 0?void 0:se.description}}};V.parameters={...V.parameters,docs:{...(le=V.parameters)===null||le===void 0?void 0:le.docs,source:{originalSource:`{
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
}`,...(me=V.parameters)===null||me===void 0||(de=me.docs)===null||de===void 0?void 0:de.source},description:{story:`Valor no mínimo — barra de progresso vazia, handle posicionado no início da trilha.\r
Verifique que o handle não saia da área visível do track.`,...(pe=V.parameters)===null||pe===void 0||(ce=pe.docs)===null||ce===void 0?void 0:ce.description}}};w.parameters={...w.parameters,docs:{...(ue=w.parameters)===null||ue===void 0?void 0:ue.docs,source:{originalSource:`{
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
}`,...(be=w.parameters)===null||be===void 0||(ve=be.docs)===null||ve===void 0?void 0:ve.source},description:{story:`Valor no máximo — barra de progresso completamente preenchida, handle no fim da trilha.\r
Verifique que o handle não ultrapasse a borda direita do track.`,...(he=w.parameters)===null||he===void 0||(ge=he.docs)===null||ge===void 0?void 0:ge.description}}};const qe=["Default","SteppedValues","NegativeRange","FractionalStep","NoLabel","SettingsPanel","Disabled","AtMinimum","AtMaximum"];export{w as AtMaximum,V as AtMinimum,g as Default,y as Disabled,_ as FractionalStep,x as NegativeRange,S as NoLabel,f as SettingsPanel,h as SteppedValues,qe as __namedExportsOrder,Me as default};
