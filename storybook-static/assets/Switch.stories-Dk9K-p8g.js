import{r as l,j as e}from"./iframe-CxNvl9BI.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";function j({modelValue:a,id:o,disabled:t,onUpdate:n}){const[r,h]=l.useState(a??!1),E=l.useId(),d=o??`ui-form-switch-${E}`;l.useEffect(()=>{a!==void 0&&a!==r&&h(a)},[a]);const y=()=>{if(t)return;const i=!r;h(i),n?.(i)};return{uid:d,checked:r,handleChange:y,handleKeyDown:i=>{i.key==="Enter"&&y()}}}function V(a,o){return["ui-form-switch","-switch",a&&"-disabled",o&&"-no-events"].filter(Boolean).join(" ")}const s=({modelValue:a,value:o,label:t,id:n,name:r,required:h=!1,noEvents:E=!1,disabled:d=!1,onUpdate:y})=>{const{uid:S,checked:i,handleChange:w,handleKeyDown:D}=j({modelValue:a,id:n,disabled:d,onUpdate:y});return e.jsxs("label",{className:V(d,E),htmlFor:S,children:[e.jsx("input",{type:"checkbox",id:S,value:o,name:r,required:h,disabled:d,checked:i,onChange:w,onKeyDown:D}),e.jsx("span",{className:"ui-form-checkbox-checkmark"}),t&&e.jsx("div",{className:"ui-form-checkbox-text",children:t})]})},A={title:"Components/Switch",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"\nO **Switch** é um controle de alternância acessível renderizado como um checkbox estilizado.\n\nSuporta uso controlado via `modelValue` + `onUpdate`, modificadores `disabled`\ne `noEvents`, acionamento por teclado (Enter) e geração automática de IDs\nacessíveis via `useId()`.\n\nO `<label>` é sempre associado ao `<input>` via `htmlFor` / `id`,\nsatisfazendo o WCAG 2.1 SC 1.3.1.\n\n### Quando usar\n- Alternância de configurações booleanas com efeito imediato (modo escuro, notificações, feature flags)\n- Quando o metáfora de toggle (ligar/desligar) é mais clara que uma caixa de seleção\n\n### Quando não usar\n- Para seleção de múltiplos itens em uma lista — use `Checkbox`\n- Quando a ação não tem efeito imediato e requer confirmação — use `Checkbox` + botão de salvar\n\n### Boas práticas\n- Sempre forneça um `label` descritivo para acessibilidade\n- Use `modelValue` + `onUpdate` para uso controlado em formulários\n- Prefira `Switch` sobre `Checkbox` quando a ação é aplicada imediatamente\n        "}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10076"}},argTypes:{label:{control:"text",description:"Texto exibido ao lado do switch. Quando omitido, apenas o toggle é renderizado.",table:{type:{summary:"string"}}},modelValue:{control:"boolean",description:"Estado controlado (ligado/desligado). Quando fornecido, sincroniza o estado interno com este valor.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Desativa o switch e bloqueia toda interação.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},noEvents:{control:"boolean",description:"Suprime eventos de ponteiro no wrapper. O switch fica visualmente interativo mas não é clicável.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},required:{control:"boolean",description:"Marca o switch como obrigatório em contexto de formulário.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},onUpdate:{action:"onUpdate",description:"Callback disparado quando o estado muda. Recebe o novo valor booleano.",table:{type:{summary:"(value: boolean) => void"}}},id:{control:"text",description:"ID explícito para o `<input>`. Quando omitido, um ID estável é gerado automaticamente via `useId()`.",table:{type:{summary:"string"}}},name:{control:"text",description:"Atributo `name` repassado ao `<input>` — usado para agrupar switches em formulários.",table:{type:{summary:"string"}}},value:{control:"text",description:"Valor enviado com o formulário quando o switch está ligado.",table:{type:{summary:"string"}}}},decorators:[a=>e.jsx("div",{style:{minWidth:"220px"},children:e.jsx(a,{})})]},c={name:"Default",args:{label:"Ativar notificações"}},u={name:"Estado — ligado",args:{label:"Modo escuro",modelValue:!0}},m={name:"Estado — desabilitado",args:{label:"Configuração indisponível",disabled:!0}},p={name:"Estado — desabilitado (ligado)",args:{label:"Configuração bloqueada",modelValue:!0,disabled:!0}},g={name:"Sem label",args:{}},x={name:"Matriz — todos os estados",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(s,{label:"Desligado (padrão)",modelValue:!1}),e.jsx(s,{label:"Ligado",modelValue:!0}),e.jsx(s,{label:"Desabilitado (desligado)",disabled:!0}),e.jsx(s,{label:"Desabilitado (ligado)",modelValue:!0,disabled:!0})]})},b={name:"Controlado — com estado externo",render:()=>{const[a,o]=l.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx(s,{label:"Modo escuro",modelValue:a,onUpdate:o}),e.jsxs("small",{children:["Valor atual: ",e.jsx("strong",{children:a?"ligado":"desligado"})]})]})}},f={name:"Contexto real — painel de configurações",render:()=>{const[a,o]=l.useState({notificacoes:!0,modoEscuro:!1,salvamentoAuto:!0,analytics:!1}),t=n=>o(r=>({...r,[n]:!r[n]}));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",minWidth:"260px"},children:[e.jsx(s,{label:"Notificações por e-mail",modelValue:a.notificacoes,onUpdate:()=>t("notificacoes")}),e.jsx(s,{label:"Modo escuro",modelValue:a.modoEscuro,onUpdate:()=>t("modoEscuro")}),e.jsx(s,{label:"Salvamento automático",modelValue:a.salvamentoAuto,onUpdate:()=>t("salvamentoAuto")}),e.jsx(s,{label:"Compartilhar analytics",modelValue:a.analytics,onUpdate:()=>t("analytics")})]})}},v={name:"Contexto real — feature flag",render:()=>{const[a,o]=l.useState(!1);return e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--s-spacing-x-small) var(--s-spacing-small)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",background:"var(--s-color-fill-default)",width:"320px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx("small",{children:e.jsx("strong",{children:"Novo painel de relatórios"})}),e.jsx("small",{children:"Acesso antecipado à nova experiência"})]}),e.jsx(s,{modelValue:a,onUpdate:o})]})}},F=["Default","On","Disabled","DisabledOn","NoLabel","AllStates","Controlled","SettingsPanel","FeatureFlag"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    label: "Ativar notificações"
  }
}`,...c.parameters?.docs?.source},description:{story:`Estado base desligado com label.\r
Use os Controls para explorar todas as props disponíveis.`,...c.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Estado — ligado",
  args: {
    label: "Modo escuro",
    modelValue: true
  }
}`,...u.parameters?.docs?.source},description:{story:"Estado ligado — `modelValue: true`.\r\nUse para pré-selecionar o switch quando o valor inicial já é conhecido.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Estado — desabilitado",
  args: {
    label: "Configuração indisponível",
    disabled: true
  }
}`,...m.parameters?.docs?.source},description:{story:`Estado desabilitado e desligado.\r
O switch fica visualmente inativo e não responde a interações.`,...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Estado — desabilitado (ligado)",
  args: {
    label: "Configuração bloqueada",
    modelValue: true,
    disabled: true
  }
}`,...p.parameters?.docs?.source},description:{story:`Estado desabilitado e ligado.\r
Use para configurações bloqueadas que não podem ser alteradas pelo usuário.`,...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Sem label",
  args: {}
}`,...g.parameters?.docs?.source},description:{story:"Sem label — apenas o toggle é renderizado.\r\nGaranta contexto acessível via `aria-label` no elemento pai quando usar sem label.",...g.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"Todos os estados visuais empilhados para validação rápida de tokens e tema.",...x.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Switch controlado externamente via `useState`.\r\nDemonstra o padrão correto: `modelValue` recebe o estado e `onUpdate` o atualiza.",...b.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:"Painel de configurações com múltiplos switches independentes.\r\nCada switch gerencia um estado próprio — demonstra que IDs únicos\r\nsão gerados automaticamente via `useId()` sem conflito.",...f.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`Switch com label descritivo e estado exibido inline.\r
Demonstra o padrão recomendado para configurações com feedback imediato.`,...v.parameters?.docs?.description}}};export{x as AllStates,b as Controlled,c as Default,m as Disabled,p as DisabledOn,v as FeatureFlag,g as NoLabel,u as On,f as SettingsPanel,F as __namedExportsOrder,A as default};
