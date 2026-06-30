import{r as i,j as e}from"./iframe-Cuzq1CpA.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";function be({modelValue:a,id:o,disabled:r,onUpdate:t}){const[l,x]=i.useState(a??!1),y=i.useId(),d=o??`ui-form-switch-${y}`;i.useEffect(()=>{a!==void 0&&a!==l&&x(a)},[a]);const h=()=>{if(r)return;const n=!l;x(n),t?.(n)};return{uid:d,checked:l,handleChange:h,handleKeyDown:n=>{n.key==="Enter"&&h()}}}function fe(a,o){return["ui-form-switch","-switch",a&&"-disabled",o&&"-no-events"].filter(Boolean).join(" ")}const s=({modelValue:a,value:o,label:r,id:t,name:l,required:x=!1,noEvents:y=!1,disabled:d=!1,onUpdate:h})=>{const{uid:S,checked:n,handleChange:ve,handleKeyDown:ge}=be({modelValue:a,id:t,disabled:d,onUpdate:h});return e.jsxs("label",{className:fe(d,y),htmlFor:S,children:[e.jsx("input",{type:"checkbox",id:S,value:o,name:l,required:x,disabled:d,checked:n,onChange:ve,onKeyDown:ge}),e.jsx("span",{className:"ui-form-checkbox-checkmark"}),r&&e.jsx("div",{className:"ui-form-checkbox-text",children:r})]})};var D,w,C,j,V,E,O,k,A,U,F,q,N,z,I,L,P,M,Q,G,K,R,W,B,T,Z,H,$,J,X,Y,ee,ae,oe,se,re,te,le,ne,ie,de,ce,ue,me,pe;const ye={title:"Components/Switch",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"\nO **Switch** é um controle de alternância acessível renderizado como um checkbox estilizado.\n\nSuporta uso controlado via `modelValue` + `onUpdate`, modificadores `disabled`\ne `noEvents`, acionamento por teclado (Enter) e geração automática de IDs\nacessíveis via `useId()`.\n\nO `<label>` é sempre associado ao `<input>` via `htmlFor` / `id`,\nsatisfazendo o WCAG 2.1 SC 1.3.1.\n\n### Quando usar\n- Alternância de configurações booleanas com efeito imediato (modo escuro, notificações, feature flags)\n- Quando o metáfora de toggle (ligar/desligar) é mais clara que uma caixa de seleção\n\n### Quando não usar\n- Para seleção de múltiplos itens em uma lista — use `Checkbox`\n- Quando a ação não tem efeito imediato e requer confirmação — use `Checkbox` + botão de salvar\n\n### Boas práticas\n- Sempre forneça um `label` descritivo para acessibilidade\n- Use `modelValue` + `onUpdate` para uso controlado em formulários\n- Prefira `Switch` sobre `Checkbox` quando a ação é aplicada imediatamente\n        "}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10076"}},argTypes:{label:{control:"text",description:"Texto exibido ao lado do switch. Quando omitido, apenas o toggle é renderizado.",table:{type:{summary:"string"}}},modelValue:{control:"boolean",description:"Estado controlado (ligado/desligado). Quando fornecido, sincroniza o estado interno com este valor.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Desativa o switch e bloqueia toda interação.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},noEvents:{control:"boolean",description:"Suprime eventos de ponteiro no wrapper. O switch fica visualmente interativo mas não é clicável.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},required:{control:"boolean",description:"Marca o switch como obrigatório em contexto de formulário.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},onUpdate:{action:"onUpdate",description:"Callback disparado quando o estado muda. Recebe o novo valor booleano.",table:{type:{summary:"(value: boolean) => void"}}},id:{control:"text",description:"ID explícito para o `<input>`. Quando omitido, um ID estável é gerado automaticamente via `useId()`.",table:{type:{summary:"string"}}},name:{control:"text",description:"Atributo `name` repassado ao `<input>` — usado para agrupar switches em formulários.",table:{type:{summary:"string"}}},value:{control:"text",description:"Valor enviado com o formulário quando o switch está ligado.",table:{type:{summary:"string"}}}},decorators:[a=>e.jsx("div",{style:{minWidth:"220px"},children:e.jsx(a,{})})]},c={name:"Default",args:{label:"Ativar notificações"}},u={name:"Estado — ligado",args:{label:"Modo escuro",modelValue:!0}},m={name:"Estado — desabilitado",args:{label:"Configuração indisponível",disabled:!0}},p={name:"Estado — desabilitado (ligado)",args:{label:"Configuração bloqueada",modelValue:!0,disabled:!0}},v={name:"Sem label",args:{}},g={name:"Matriz — todos os estados",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(s,{label:"Desligado (padrão)",modelValue:!1}),e.jsx(s,{label:"Ligado",modelValue:!0}),e.jsx(s,{label:"Desabilitado (desligado)",disabled:!0}),e.jsx(s,{label:"Desabilitado (ligado)",modelValue:!0,disabled:!0})]})},b={name:"Controlado — com estado externo",render:()=>{const[a,o]=i.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx(s,{label:"Modo escuro",modelValue:a,onUpdate:o}),e.jsxs("small",{children:["Valor atual: ",e.jsx("strong",{children:a?"ligado":"desligado"})]})]})}},f={name:"Contexto real — painel de configurações",render:()=>{const[a,o]=i.useState({notificacoes:!0,modoEscuro:!1,salvamentoAuto:!0,analytics:!1}),r=t=>o(l=>({...l,[t]:!l[t]}));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",minWidth:"260px"},children:[e.jsx(s,{label:"Notificações por e-mail",modelValue:a.notificacoes,onUpdate:()=>r("notificacoes")}),e.jsx(s,{label:"Modo escuro",modelValue:a.modoEscuro,onUpdate:()=>r("modoEscuro")}),e.jsx(s,{label:"Salvamento automático",modelValue:a.salvamentoAuto,onUpdate:()=>r("salvamentoAuto")}),e.jsx(s,{label:"Compartilhar analytics",modelValue:a.analytics,onUpdate:()=>r("analytics")})]})}},_={name:"Contexto real — feature flag",render:()=>{const[a,o]=i.useState(!1);return e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--s-spacing-x-small) var(--s-spacing-small)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",background:"var(--s-color-fill-default)",width:"320px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx("small",{children:e.jsx("strong",{children:"Novo painel de relatórios"})}),e.jsx("small",{children:"Acesso antecipado à nova experiência"})]}),e.jsx(s,{modelValue:a,onUpdate:o})]})}};c.parameters={...c.parameters,docs:{...(D=c.parameters)===null||D===void 0?void 0:D.docs,source:{originalSource:`{
  name: "Default",
  args: {
    label: "Ativar notificações"
  }
}`,...(C=c.parameters)===null||C===void 0||(w=C.docs)===null||w===void 0?void 0:w.source},description:{story:`Estado base desligado com label.\r
Use os Controls para explorar todas as props disponíveis.`,...(V=c.parameters)===null||V===void 0||(j=V.docs)===null||j===void 0?void 0:j.description}}};u.parameters={...u.parameters,docs:{...(E=u.parameters)===null||E===void 0?void 0:E.docs,source:{originalSource:`{
  name: "Estado — ligado",
  args: {
    label: "Modo escuro",
    modelValue: true
  }
}`,...(k=u.parameters)===null||k===void 0||(O=k.docs)===null||O===void 0?void 0:O.source},description:{story:"Estado ligado — `modelValue: true`.\r\nUse para pré-selecionar o switch quando o valor inicial já é conhecido.",...(U=u.parameters)===null||U===void 0||(A=U.docs)===null||A===void 0?void 0:A.description}}};m.parameters={...m.parameters,docs:{...(F=m.parameters)===null||F===void 0?void 0:F.docs,source:{originalSource:`{
  name: "Estado — desabilitado",
  args: {
    label: "Configuração indisponível",
    disabled: true
  }
}`,...(N=m.parameters)===null||N===void 0||(q=N.docs)===null||q===void 0?void 0:q.source},description:{story:`Estado desabilitado e desligado.\r
O switch fica visualmente inativo e não responde a interações.`,...(I=m.parameters)===null||I===void 0||(z=I.docs)===null||z===void 0?void 0:z.description}}};p.parameters={...p.parameters,docs:{...(L=p.parameters)===null||L===void 0?void 0:L.docs,source:{originalSource:`{
  name: "Estado — desabilitado (ligado)",
  args: {
    label: "Configuração bloqueada",
    modelValue: true,
    disabled: true
  }
}`,...(M=p.parameters)===null||M===void 0||(P=M.docs)===null||P===void 0?void 0:P.source},description:{story:`Estado desabilitado e ligado.\r
Use para configurações bloqueadas que não podem ser alteradas pelo usuário.`,...(G=p.parameters)===null||G===void 0||(Q=G.docs)===null||Q===void 0?void 0:Q.description}}};v.parameters={...v.parameters,docs:{...(K=v.parameters)===null||K===void 0?void 0:K.docs,source:{originalSource:`{
  name: "Sem label",
  args: {}
}`,...(W=v.parameters)===null||W===void 0||(R=W.docs)===null||R===void 0?void 0:R.source},description:{story:"Sem label — apenas o toggle é renderizado.\r\nGaranta contexto acessível via `aria-label` no elemento pai quando usar sem label.",...(T=v.parameters)===null||T===void 0||(B=T.docs)===null||B===void 0?void 0:B.description}}};g.parameters={...g.parameters,docs:{...(Z=g.parameters)===null||Z===void 0?void 0:Z.docs,source:{originalSource:`{
  name: "Matriz — todos os estados",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-x-small)"
  }}>\r
      <Switch label="Desligado (padrão)" modelValue={false} />\r
      <Switch label="Ligado" modelValue={true} />\r
      <Switch label="Desabilitado (desligado)" disabled />\r
      <Switch label="Desabilitado (ligado)" modelValue={true} disabled />\r
    </div>
}`,...($=g.parameters)===null||$===void 0||(H=$.docs)===null||H===void 0?void 0:H.source},description:{story:"Todos os estados visuais empilhados para validação rápida de tokens e tema.",...(X=g.parameters)===null||X===void 0||(J=X.docs)===null||J===void 0?void 0:J.description}}};b.parameters={...b.parameters,docs:{...(Y=b.parameters)===null||Y===void 0?void 0:Y.docs,source:{originalSource:`{
  name: "Controlado — com estado externo",
  render: () => {
    const [on, setOn] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-nano)"
    }}>\r
        <Switch label="Modo escuro" modelValue={on} onUpdate={setOn} />\r
        <small>Valor atual: <strong>{on ? "ligado" : "desligado"}</strong></small>\r
      </div>;
  }
}`,...(ae=b.parameters)===null||ae===void 0||(ee=ae.docs)===null||ee===void 0?void 0:ee.source},description:{story:"Switch controlado externamente via `useState`.\r\nDemonstra o padrão correto: `modelValue` recebe o estado e `onUpdate` o atualiza.",...(se=b.parameters)===null||se===void 0||(oe=se.docs)===null||oe===void 0?void 0:oe.description}}};f.parameters={...f.parameters,docs:{...(re=f.parameters)===null||re===void 0?void 0:re.docs,source:{originalSource:`{
  name: "Contexto real — painel de configurações",
  render: () => {
    const [settings, setSettings] = useState({
      notificacoes: true,
      modoEscuro: false,
      salvamentoAuto: true,
      analytics: false
    });
    const toggle = (key: keyof typeof settings) => setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)",
      minWidth: "260px"
    }}>\r
        <Switch label="Notificações por e-mail" modelValue={settings.notificacoes} onUpdate={() => toggle("notificacoes")} />\r
        <Switch label="Modo escuro" modelValue={settings.modoEscuro} onUpdate={() => toggle("modoEscuro")} />\r
        <Switch label="Salvamento automático" modelValue={settings.salvamentoAuto} onUpdate={() => toggle("salvamentoAuto")} />\r
        <Switch label="Compartilhar analytics" modelValue={settings.analytics} onUpdate={() => toggle("analytics")} />\r
      </div>;
  }
}`,...(le=f.parameters)===null||le===void 0||(te=le.docs)===null||te===void 0?void 0:te.source},description:{story:"Painel de configurações com múltiplos switches independentes.\r\nCada switch gerencia um estado próprio — demonstra que IDs únicos\r\nsão gerados automaticamente via `useId()` sem conflito.",...(ie=f.parameters)===null||ie===void 0||(ne=ie.docs)===null||ne===void 0?void 0:ne.description}}};_.parameters={..._.parameters,docs:{...(de=_.parameters)===null||de===void 0?void 0:de.docs,source:{originalSource:`{
  name: "Contexto real — feature flag",
  render: () => {
    const [enabled, setEnabled] = useState(false);
    return <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "var(--s-spacing-x-small) var(--s-spacing-small)",
      border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
      borderRadius: "var(--s-border-radius-medium)",
      background: "var(--s-color-fill-default)",
      width: "320px"
    }}>\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--s-spacing-nano)"
      }}>\r
          <small><strong>Novo painel de relatórios</strong></small>\r
          <small>Acesso antecipado à nova experiência</small>\r
        </div>\r
        <Switch modelValue={enabled} onUpdate={setEnabled} />\r
      </div>;
  }
}`,...(ue=_.parameters)===null||ue===void 0||(ce=ue.docs)===null||ce===void 0?void 0:ce.source},description:{story:`Switch com label descritivo e estado exibido inline.\r
Demonstra o padrão recomendado para configurações com feedback imediato.`,...(pe=_.parameters)===null||pe===void 0||(me=pe.docs)===null||me===void 0?void 0:me.description}}};const Se=["Default","On","Disabled","DisabledOn","NoLabel","AllStates","Controlled","SettingsPanel","FeatureFlag"];export{g as AllStates,b as Controlled,c as Default,m as Disabled,p as DisabledOn,_ as FeatureFlag,v as NoLabel,u as On,f as SettingsPanel,Se as __namedExportsOrder,ye as default};
