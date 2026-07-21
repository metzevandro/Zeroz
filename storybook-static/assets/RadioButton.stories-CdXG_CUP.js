import{r as l,j as a}from"./iframe-DFdk80Qn.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";function xe({checked:o,disabled:s=!1,onChange:r}){const[e,n]=l.useState(o??!1),y=`radio-button-${l.useId()}`;l.useEffect(()=>{o!==void 0&&n(o)},[o]);const i=l.useCallback(()=>{if(s)return;const t=!e;n(t),r?.(t)},[s,e,r]),_e=l.useCallback(t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),i())},[i]);return{uid:y,isChecked:e,toggle:i,handleKeyDown:_e}}function fe(o,s){return["radio-button",o&&"disable",s&&"checked"].filter(Boolean).join(" ")}function ye(o){return["radio-button-label",o&&"disabled"].filter(Boolean).join(" ")}const d=({label:o,disabled:s=!1,checked:r,onChange:e})=>{const{uid:n,isChecked:f,toggle:y,handleKeyDown:i}=xe({checked:r,disabled:s,onChange:e});return a.jsxs("div",{className:`radio-button-root ${s?"disable":""}`,children:[a.jsx("div",{id:n,className:fe(s,f),onClick:y,onKeyDown:i,role:"radio","aria-checked":f,"aria-labelledby":o?`${n}-label`:void 0,tabIndex:s?-1:0,children:a.jsx("span",{className:`radio-circle ${f?"checked-circle":""}`})}),o&&a.jsx("label",{id:`${n}-label`,htmlFor:n,className:ye(s),onClick:y,children:o})]})};var k,C,S,D,j,P,B,G,O,R,E,M,A,q,I,W,z,N,w,L,$,T,Q,U,K,V,F,X,Z,H,J,Y,ee,ae,oe,se,re,ne,le,de,te,ie,ce,pe,me,ue,ve,be,ge,he;const De={title:"Components/RadioButton",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'\nO **RadioButton** é um input de seleção exclusiva acessível com label opcional.\n\nSuporta uso controlado via `checked` + `onChange`, estado desabilitado\ne acionamento por teclado via **Enter** e **Space**.\n\nO `<label>` é sempre associado ao elemento de controle via `htmlFor` / `id`\ngerado por `useId()`, satisfazendo o WCAG 2.1 SC 1.3.1.\n\n### Quando usar\n- Selecionar uma opção de um conjunto pequeno (2–5 opções)\n- Quando todas as opções devem estar visíveis simultaneamente — prefira ao `InputSelect` para ≤ 5 itens\n\n### Quando não usar\n- Para múltiplas seleções — use `Checkbox`\n- Para grupos grandes (> 5 opções) — use `InputSelect`\n\n### Padrão de grupo\n```tsx\nconst [selected, setSelected] = useState("a");\n\n<RadioButton label="Opção A" checked={selected === "a"} onChange={() => setSelected("a")} />\n<RadioButton label="Opção B" checked={selected === "b"} onChange={() => setSelected("b")} />\n```\n\n### Boas práticas\n- Sempre forneça um `label` para acessibilidade\n- Gerencie o estado externamente — apenas um botão do grupo deve estar `checked`\n- Use `disabled` de forma consistente no grupo quando a escolha não está disponível\n        '}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10075"}},argTypes:{label:{control:"text",description:"Texto do label exibido ao lado do botão. Clicar no label também aciona o botão.",table:{type:{summary:"string"}}},checked:{control:"boolean",description:"Estado controlado. Quando fornecido, sincroniza o estado interno com este valor.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Desativa o botão e bloqueia toda interação.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},onChange:{action:"onChange",description:"Callback disparado quando o estado muda. Recebe o novo valor booleano.",table:{type:{summary:"(isChecked: boolean) => void"}}}},decorators:[o=>a.jsx("div",{style:{minWidth:"200px"},children:a.jsx(o,{})})]},c={name:"Default",args:{label:"Opção A"}},p={name:"Estado — marcado",args:{label:"Opção selecionada",checked:!0}},m={name:"Estado — desabilitado",args:{label:"Opção indisponível",disabled:!0}},u={name:"Estado — desabilitado (marcado)",args:{label:"Seleção bloqueada",checked:!0,disabled:!0}},v={name:"Sem label",args:{checked:!1}},b={name:"Matriz — todos os estados",render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[a.jsx(d,{label:"Desmarcado (padrão)",checked:!1}),a.jsx(d,{label:"Marcado",checked:!0}),a.jsx(d,{label:"Desabilitado (desmarcado)",disabled:!0}),a.jsx(d,{label:"Desabilitado (marcado)",checked:!0,disabled:!0})]})},g={name:"Grupo — seleção exclusiva",render:()=>{const o=["Opção A","Opção B","Opção C"],[s,r]=l.useState("Opção A");return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[o.map(e=>a.jsx(d,{label:e,checked:s===e,onChange:()=>r(e)},e)),a.jsxs("small",{style:{paddingTop:"var(--s-spacing-nano)"},children:["Selecionado: ",a.jsx("strong",{children:s})]})]})}},h={name:"Grupo — com opção desabilitada",render:()=>{const[o,s]=l.useState("Mensal"),r=[{label:"Mensal",disabled:!1},{label:"Anual",disabled:!1},{label:"Empresarial (entre em contato)",disabled:!0}];return a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:r.map(({label:e,disabled:n})=>a.jsx(d,{label:e,disabled:n,checked:o===e,onChange:()=>!n&&s(e)},e))})}},_={name:"Contexto real — seleção de plano",render:()=>{const[o,s]=l.useState("Pro"),r=[{label:"Starter",description:"Para projetos pessoais"},{label:"Pro",description:"Para times pequenos"},{label:"Enterprise",description:"Para grandes organizações"}];return a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",minWidth:"280px"},children:r.map(({label:e,description:n})=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--s-spacing-x-small)",padding:"var(--s-spacing-x-small) var(--s-spacing-small)",border:`var(--s-border-width-thin) solid var(--s-color-${o===e?"border-highlight":"border-default"})`,borderRadius:"var(--s-border-radius-medium)",background:"var(--s-color-fill-default)",cursor:"pointer"},onClick:()=>s(e),children:[a.jsx(d,{checked:o===e,onChange:()=>s(e)}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[a.jsx("small",{children:a.jsx("strong",{children:e})}),a.jsx("small",{children:n})]})]},e))})}},x={name:"Contexto real — forma de pagamento",render:()=>{const[o,s]=l.useState("Cartão de crédito"),r=["Cartão de crédito","PIX","Boleto bancário"];return a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",minWidth:"280px"},children:r.map(e=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--s-spacing-x-small)",padding:"var(--s-spacing-x-small) var(--s-spacing-small)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",background:"var(--s-color-fill-default)",cursor:"pointer"},onClick:()=>s(e),children:[a.jsx(d,{checked:o===e,onChange:()=>s(e)}),a.jsx("small",{children:e})]},e))})}};c.parameters={...c.parameters,docs:{...(k=c.parameters)===null||k===void 0?void 0:k.docs,source:{originalSource:`{
  name: "Default",
  args: {
    label: "Opção A"
  }
}`,...(S=c.parameters)===null||S===void 0||(C=S.docs)===null||C===void 0?void 0:C.source},description:{story:`Estado base desmarcado com label.\r
Use os Controls para explorar todas as props disponíveis.`,...(j=c.parameters)===null||j===void 0||(D=j.docs)===null||D===void 0?void 0:D.description}}};p.parameters={...p.parameters,docs:{...(P=p.parameters)===null||P===void 0?void 0:P.docs,source:{originalSource:`{
  name: "Estado — marcado",
  args: {
    label: "Opção selecionada",
    checked: true
  }
}`,...(G=p.parameters)===null||G===void 0||(B=G.docs)===null||B===void 0?void 0:B.source},description:{story:"Estado marcado — `checked: true`.\r\nUse para pré-selecionar uma opção quando o valor inicial já é conhecido.",...(R=p.parameters)===null||R===void 0||(O=R.docs)===null||O===void 0?void 0:O.description}}};m.parameters={...m.parameters,docs:{...(E=m.parameters)===null||E===void 0?void 0:E.docs,source:{originalSource:`{
  name: "Estado — desabilitado",
  args: {
    label: "Opção indisponível",
    disabled: true
  }
}`,...(A=m.parameters)===null||A===void 0||(M=A.docs)===null||M===void 0?void 0:M.source},description:{story:`Estado desabilitado e desmarcado.\r
O botão fica visualmente inativo e não responde a interações.`,...(I=m.parameters)===null||I===void 0||(q=I.docs)===null||q===void 0?void 0:q.description}}};u.parameters={...u.parameters,docs:{...(W=u.parameters)===null||W===void 0?void 0:W.docs,source:{originalSource:`{
  name: "Estado — desabilitado (marcado)",
  args: {
    label: "Seleção bloqueada",
    checked: true,
    disabled: true
  }
}`,...(N=u.parameters)===null||N===void 0||(z=N.docs)===null||z===void 0?void 0:z.source},description:{story:`Estado desabilitado e marcado.\r
Use para seleções bloqueadas que não podem ser alteradas pelo usuário.`,...(L=u.parameters)===null||L===void 0||(w=L.docs)===null||w===void 0?void 0:w.description}}};v.parameters={...v.parameters,docs:{...($=v.parameters)===null||$===void 0?void 0:$.docs,source:{originalSource:`{
  name: "Sem label",
  args: {
    checked: false
  }
}`,...(Q=v.parameters)===null||Q===void 0||(T=Q.docs)===null||T===void 0?void 0:T.source},description:{story:"Sem label — apenas o círculo do radio é renderizado.\r\nGaranta contexto acessível via `aria-label` no elemento pai quando usar sem label.",...(K=v.parameters)===null||K===void 0||(U=K.docs)===null||U===void 0?void 0:U.description}}};b.parameters={...b.parameters,docs:{...(V=b.parameters)===null||V===void 0?void 0:V.docs,source:{originalSource:`{
  name: "Matriz — todos os estados",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-x-small)"
  }}>\r
      <RadioButton label="Desmarcado (padrão)" checked={false} />\r
      <RadioButton label="Marcado" checked={true} />\r
      <RadioButton label="Desabilitado (desmarcado)" disabled />\r
      <RadioButton label="Desabilitado (marcado)" checked={true} disabled />\r
    </div>
}`,...(X=b.parameters)===null||X===void 0||(F=X.docs)===null||F===void 0?void 0:F.source},description:{story:"Todos os estados visuais lado a lado para validação rápida de tokens e tema.",...(H=b.parameters)===null||H===void 0||(Z=H.docs)===null||Z===void 0?void 0:Z.description}}};g.parameters={...g.parameters,docs:{...(J=g.parameters)===null||J===void 0?void 0:J.docs,source:{originalSource:`{
  name: "Grupo — seleção exclusiva",
  render: () => {
    const options = ["Opção A", "Opção B", "Opção C"];
    const [selected, setSelected] = useState("Opção A");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)"
    }}>\r
        {options.map(opt => <RadioButton key={opt} label={opt} checked={selected === opt} onChange={() => setSelected(opt)} />)}\r
        <small style={{
        paddingTop: "var(--s-spacing-nano)"
      }}>\r
          Selecionado: <strong>{selected}</strong>\r
        </small>\r
      </div>;
  }
}`,...(ee=g.parameters)===null||ee===void 0||(Y=ee.docs)===null||Y===void 0?void 0:Y.source},description:{story:"Grupo de seleção exclusiva — apenas uma opção pode estar marcada por vez.\r\nDemonstra o padrão correto: estado externo via `useState`,\r\n`checked={selected === opt}` e `onChange` que atualiza o estado.",...(oe=g.parameters)===null||oe===void 0||(ae=oe.docs)===null||ae===void 0?void 0:ae.description}}};h.parameters={...h.parameters,docs:{...(se=h.parameters)===null||se===void 0?void 0:se.docs,source:{originalSource:`{
  name: "Grupo — com opção desabilitada",
  render: () => {
    const [selected, setSelected] = useState("Mensal");
    const options = [{
      label: "Mensal",
      disabled: false
    }, {
      label: "Anual",
      disabled: false
    }, {
      label: "Empresarial (entre em contato)",
      disabled: true
    }];
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)"
    }}>\r
        {options.map(({
        label,
        disabled
      }) => <RadioButton key={label} label={label} disabled={disabled} checked={selected === label} onChange={() => !disabled && setSelected(label)} />)}\r
      </div>;
  }
}`,...(ne=h.parameters)===null||ne===void 0||(re=ne.docs)===null||re===void 0?void 0:re.source},description:{story:`Grupo com opção desabilitada — demonstra o comportamento correto\r
quando parte das opções não está disponível no contexto atual.`,...(de=h.parameters)===null||de===void 0||(le=de.docs)===null||le===void 0?void 0:le.description}}};_.parameters={..._.parameters,docs:{...(te=_.parameters)===null||te===void 0?void 0:te.docs,source:{originalSource:`{
  name: "Contexto real — seleção de plano",
  render: () => {
    const [plan, setPlan] = useState("Pro");
    const plans = [{
      label: "Starter",
      description: "Para projetos pessoais"
    }, {
      label: "Pro",
      description: "Para times pequenos"
    }, {
      label: "Enterprise",
      description: "Para grandes organizações"
    }];
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)",
      minWidth: "280px"
    }}>\r
        {plans.map(({
        label,
        description
      }) => <div key={label} style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--s-spacing-x-small)",
        padding: "var(--s-spacing-x-small) var(--s-spacing-small)",
        border: \`var(--s-border-width-thin) solid var(--s-color-\${plan === label ? "border-highlight" : "border-default"})\`,
        borderRadius: "var(--s-border-radius-medium)",
        background: "var(--s-color-fill-default)",
        cursor: "pointer"
      }} onClick={() => setPlan(label)}>\r
            <RadioButton checked={plan === label} onChange={() => setPlan(label)} />\r
            <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-nano)"
        }}>\r
              <small><strong>{label}</strong></small>\r
              <small>{description}</small>\r
            </div>\r
          </div>)}\r
      </div>;
  }
}`,...(ce=_.parameters)===null||ce===void 0||(ie=ce.docs)===null||ie===void 0?void 0:ie.source},description:{story:`Seleção de plano de assinatura — padrão típico em páginas de pricing.\r
O usuário escolhe entre opções mutuamente exclusivas antes de prosseguir.`,...(me=_.parameters)===null||me===void 0||(pe=me.docs)===null||pe===void 0?void 0:pe.description}}};x.parameters={...x.parameters,docs:{...(ue=x.parameters)===null||ue===void 0?void 0:ue.docs,source:{originalSource:`{
  name: "Contexto real — forma de pagamento",
  render: () => {
    const [method, setMethod] = useState("Cartão de crédito");
    const methods = ["Cartão de crédito", "PIX", "Boleto bancário"];
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)",
      minWidth: "280px"
    }}>\r
        {methods.map(m => <div key={m} style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--s-spacing-x-small)",
        padding: "var(--s-spacing-x-small) var(--s-spacing-small)",
        border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
        borderRadius: "var(--s-border-radius-medium)",
        background: "var(--s-color-fill-default)",
        cursor: "pointer"
      }} onClick={() => setMethod(m)}>\r
            <RadioButton checked={method === m} onChange={() => setMethod(m)} />\r
            <small>{m}</small>\r
          </div>)}\r
      </div>;
  }
}`,...(be=x.parameters)===null||be===void 0||(ve=be.docs)===null||ve===void 0?void 0:ve.source},description:{story:`Seleção de forma de pagamento — grupo com ícone ou texto complementar.\r
Demonstra o uso do RadioButton dentro de cards clicáveis.`,...(he=x.parameters)===null||he===void 0||(ge=he.docs)===null||ge===void 0?void 0:ge.description}}};const je=["Default","Checked","Disabled","DisabledChecked","NoLabel","AllStates","ControlledGroup","GroupWithDisabled","PlanSelector","PaymentMethod"];export{b as AllStates,p as Checked,g as ControlledGroup,c as Default,m as Disabled,u as DisabledChecked,h as GroupWithDisabled,v as NoLabel,x as PaymentMethod,_ as PlanSelector,je as __namedExportsOrder,De as default};
