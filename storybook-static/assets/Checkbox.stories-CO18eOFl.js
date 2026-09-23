import{j as e,r as v}from"./iframe-CxNvl9BI.js";/* empty css               */import{C as o}from"./Checkbox-COOKxrr6.js";import{B as V}from"./Button-CH6qqEEx.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-Bqm0CoJD.js";import"./Loading-DhvOqAup.js";import"./Skeleton-C80QNm7w.js";const F={title:"Components/Checkbox",component:o,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nO **Checkbox** é um input de seleção acessível e controlável.\n\nSuporta estado indeterminado, modificadores `disabled` e `noEvents`,\nacionamento por teclado via Enter, e sincronização com `modelValue` externo.\n\nUm `id` único é gerado automaticamente via `useId()` quando nenhum é fornecido,\ngarantindo que `<label>` e `<input>` estejam sempre corretamente associados (WCAG 2.1 SC 1.3.1).\n\n### Estados disponíveis\n| Estado          | Descrição                                                              |\n|-----------------|------------------------------------------------------------------------|\n| Desmarcado      | Estado padrão — `modelValue: false`                                  |\n| Marcado         | Selecionado — `modelValue: true`                                     |\n| Indeterminado   | Estado misto — usado em padrões de "selecionar todos"                  |\n| Desabilitado    | Bloqueado para interação — `disabled: true`                          |\n\n### Acessibilidade\n- O `<label>` e o `<input>` são sempre associados via `htmlFor` / `id`\n- Navegação e acionamento por teclado suportados nativamente (Tab + Enter)\n- `indeterminate` é aplicado via propriedade DOM nativa (`el.indeterminate`)\n- Sem `label` visível, garanta contexto acessível via `aria-label` no elemento pai\n\n### Quando usar\n- Seleção de uma ou mais opções em uma lista\n- Alternância de configurações booleanas ("Lembrar de mim", "Aceitar termos")\n- Padrão "selecionar todos" usando o estado `indeterminate`\n\n### Quando não usar\n- Para seleção exclusiva de uma única opção — use `RadioButton`\n- Para alternância de estado com efeito imediato — considere o modo `switch` ou `Toggle`\n        '}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10013"}},argTypes:{label:{control:"text",description:"Texto do label renderizado ao lado do checkbox. Quando omitido, apenas o checkbox é exibido.",table:{type:{summary:"string"}}},modelValue:{control:"boolean",description:"Estado controlado do checkbox. Quando fornecido, sincroniza o estado interno com este valor.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Desativa o checkbox e bloqueia qualquer interação.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},indeterminate:{control:"boolean",description:"Renderiza o checkbox no estado indeterminado (misto). Use em padrões de 'selecionar todos' quando apenas alguns filhos estão selecionados.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},noEvents:{control:"boolean",description:"Suprime eventos de ponteiro no wrapper. O checkbox fica visualmente interativo mas não é clicável. Use ao construir uma camada de interação customizada.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},required:{control:"boolean",description:"Marca o checkbox como obrigatório em contexto de formulário.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},onUpdate:{action:"onUpdate",description:"Callback disparado quando o estado muda. Recebe o novo valor booleano.",table:{type:{summary:"(value: boolean) => void"}}},id:{control:"text",description:"ID explícito para o `<input>`. Quando omitido, um ID estável é gerado automaticamente.",table:{type:{summary:"string"}}},name:{control:"text",description:"Atributo `name` repassado ao `<input>` — usado para agrupar checkboxes em formulários.",table:{type:{summary:"string"}}},value:{control:"text",description:"Valor enviado com o formulário quando o checkbox está marcado.",table:{type:{summary:"string"}}}}},d={name:"Default",args:{label:"Aceitar termos e condições",modelValue:!1,disabled:!1,indeterminate:!1}},l={name:"Estado — marcado",args:{label:"Receber novidades por e-mail",modelValue:!0}},i={name:"Estado — indeterminado",args:{label:"Selecionar todos",indeterminate:!0}},c={name:"Estado — desabilitado",args:{label:"Opção indisponível",disabled:!0}},m={name:"Estado — desabilitado (marcado)",args:{label:"Configuração bloqueada",modelValue:!0,disabled:!0}},p={name:"Sem label",args:{}},u={name:"Controlado (com estado externo)",render:()=>{const[a,s]=v.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(o,{label:"Concordo com os termos de uso",modelValue:a,onUpdate:s}),e.jsxs("small",{style:{color:"var(--s-color-content-default)"},children:["Valor atual: ",a?"marcado":"desmarcado"]})]})}},x={name:"Padrão — selecionar todos",render:()=>{const a=["Opção A","Opção B","Opção C"],[s,t]=v.useState([]),n=s.length===a.length,h=s.length>0&&!n,k=r=>{t(r?[...a]:[])},C=(r,y)=>{t(E=>y?[...E,r]:E.filter(S=>S!==r))};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(o,{label:"Selecionar todos",modelValue:n,indeterminate:h,onUpdate:k}),e.jsx("div",{style:{paddingLeft:"var(--s-spacing-medium)",display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:a.map(r=>e.jsx(o,{label:r,modelValue:s.includes(r),onUpdate:y=>C(r,y)},r))})]})}},b={name:"Contexto real — formulário de preferências",render:()=>{const[a,s]=v.useState({email:!0,sms:!1,push:!0}),t=n=>s(h=>({...h,[n]:!h[n]}));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx("p",{children:"Notificações"}),e.jsx(o,{label:"Receber por e-mail",modelValue:a.email,onUpdate:()=>t("email")}),e.jsx(o,{label:"Receber por SMS",modelValue:a.sms,onUpdate:()=>t("sms")}),e.jsx(o,{label:"Notificações push",modelValue:a.push,onUpdate:()=>t("push")})]})}},f={name:"Contexto real — aceite de termos",render:()=>{const[a,s]=v.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(o,{label:"Li e aceito os Termos de Uso e a Política de Privacidade",modelValue:a,onUpdate:s,required:!0}),e.jsx("div",{style:{width:"fit-content"},children:e.jsx(V,{disabled:!a,children:"Criar conta"})})]})}},g={name:"Matriz — todos os estados",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(o,{label:"Desmarcado (padrão)",modelValue:!1}),e.jsx(o,{label:"Marcado",modelValue:!0}),e.jsx(o,{label:"Indeterminado",indeterminate:!0}),e.jsx(o,{label:"Desabilitado (desmarcado)",disabled:!0}),e.jsx(o,{label:"Desabilitado (marcado)",modelValue:!0,disabled:!0})]})},M=["Default","Checked","Indeterminate","Disabled","DisabledChecked","NoLabel","Controlled","SelectAll","PreferencesForm","TermsAcceptance","AllStates"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    label: "Aceitar termos e condições",
    modelValue: false,
    disabled: false,
    indeterminate: false
  }
}`,...d.parameters?.docs?.source},description:{story:`Story interativa para explorar todas as props via Controls.\r
Ponto de entrada recomendado para inspecionar o componente.`,...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Estado — marcado",
  args: {
    label: "Receber novidades por e-mail",
    modelValue: true
  }
}`,...l.parameters?.docs?.source},description:{story:"Estado marcado — `modelValue: true`.\r\nUse para pré-selecionar uma opção quando o valor inicial já é conhecido.",...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Estado — indeterminado",
  args: {
    label: "Selecionar todos",
    indeterminate: true
  }
}`,...i.parameters?.docs?.source},description:{story:'Estado indeterminado — checkbox no estado misto via prop `indeterminate`.\r\nAplicado via propriedade DOM nativa `el.indeterminate`.\r\nUse exclusivamente em checkboxes "pai" de um grupo onde apenas alguns filhos estão selecionados.',...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Estado — desabilitado",
  args: {
    label: "Opção indisponível",
    disabled: true
  }
}`,...c.parameters?.docs?.source},description:{story:`Estado desabilitado e desmarcado.\r
O checkbox fica visualmente inativo e não responde a interações.`,...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Estado — desabilitado (marcado)",
  args: {
    label: "Configuração bloqueada",
    modelValue: true,
    disabled: true
  }
}`,...m.parameters?.docs?.source},description:{story:`Estado desabilitado e marcado.\r
Use para configurações bloqueadas que não podem ser alteradas pelo usuário.`,...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Sem label",
  args: {}
}`,...p.parameters?.docs?.source},description:{story:"Sem label — apenas o checkbox é renderizado.\r\nGaranta contexto acessível via `aria-label` no elemento pai quando usar sem label.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Controlado (com estado externo)",
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)"
    }}>\r
        <Checkbox label="Concordo com os termos de uso" modelValue={checked} onUpdate={setChecked} />\r
        <small style={{
        color: "var(--s-color-content-default)"
      }}>\r
          Valor atual: {checked ? "marcado" : "desmarcado"}\r
        </small>\r
      </div>;
  }
}`,...u.parameters?.docs?.source},description:{story:"Uso controlado com estado externo via `useState`.\r\nDemonstra o padrão correto de uso em formulários:\r\n`modelValue` recebe o estado e `onUpdate` atualiza o mesmo.",...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Padrão — selecionar todos",
  render: () => {
    const options = ["Opção A", "Opção B", "Opção C"];
    const [selected, setSelected] = useState<string[]>([]);
    const allChecked = selected.length === options.length;
    const someChecked = selected.length > 0 && !allChecked;
    const toggleAll = (checked: boolean) => {
      setSelected(checked ? [...options] : []);
    };
    const toggleOne = (option: string, checked: boolean) => {
      setSelected(prev => checked ? [...prev, option] : prev.filter(o => o !== option));
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)"
    }}>\r
        <Checkbox label="Selecionar todos" modelValue={allChecked} indeterminate={someChecked} onUpdate={toggleAll} />\r
        <div style={{
        paddingLeft: "var(--s-spacing-medium)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--s-spacing-nano)"
      }}>\r
          {options.map(option => <Checkbox key={option} label={option} modelValue={selected.includes(option)} onUpdate={checked => toggleOne(option, checked)} />)}\r
        </div>\r
      </div>;
  }
}`,...x.parameters?.docs?.source},description:{story:'Padrão "selecionar todos" com estado indeterminado no checkbox pai.\r\nO pai exibe `indeterminate` quando apenas alguns filhos estão selecionados,\r\n`modelValue: true` quando todos estão, e `false` quando nenhum está.',...x.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — formulário de preferências",
  render: () => {
    const [prefs, setPrefs] = useState({
      email: true,
      sms: false,
      push: true
    });
    const toggle = (key: keyof typeof prefs) => setPrefs(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-nano)"
    }}>\r
        <p>Notificações</p>\r
        <Checkbox label="Receber por e-mail" modelValue={prefs.email} onUpdate={() => toggle("email")} />\r
        <Checkbox label="Receber por SMS" modelValue={prefs.sms} onUpdate={() => toggle("sms")} />\r
        <Checkbox label="Notificações push" modelValue={prefs.push} onUpdate={() => toggle("push")} />\r
      </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:`Grupo de checkboxes em formulário de preferências.\r
Demonstra o uso de múltiplos checkboxes independentes em contexto real.`,...b.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — aceite de termos",
  render: () => {
    const [accepted, setAccepted] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)"
    }}>\r
        <Checkbox label="Li e aceito os Termos de Uso e a Política de Privacidade" modelValue={accepted} onUpdate={setAccepted} required />\r
        <div style={{
        width: "fit-content"
      }}>\r
          <Button disabled={!accepted}>Criar conta</Button>\r
        </div>\r
      </div>;
  }
}`,...f.parameters?.docs?.source},description:{story:"Checkbox de aceite de termos em formulário de cadastro.\r\nDemonstra o uso do `required` e o bloqueio de submissão sem aceite.",...f.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Matriz — todos os estados",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-x-small)"
  }}>\r
      <Checkbox label="Desmarcado (padrão)" modelValue={false} />\r
      <Checkbox label="Marcado" modelValue={true} />\r
      <Checkbox label="Indeterminado" indeterminate={true} />\r
      <Checkbox label="Desabilitado (desmarcado)" disabled={true} />\r
      <Checkbox label="Desabilitado (marcado)" modelValue={true} disabled={true} />\r
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Todos os estados visuais lado a lado para validação rápida\r
após alterações de token ou tema.`,...g.parameters?.docs?.description}}};export{g as AllStates,l as Checked,u as Controlled,d as Default,c as Disabled,m as DisabledChecked,i as Indeterminate,p as NoLabel,b as PreferencesForm,x as SelectAll,f as TermsAcceptance,M as __namedExportsOrder,F as default};
