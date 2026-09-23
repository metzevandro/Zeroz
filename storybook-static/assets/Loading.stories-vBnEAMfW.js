import{j as a,r as g}from"./iframe-CxNvl9BI.js";/* empty css               */import{L as e}from"./Loading-DhvOqAup.js";import{B as x}from"./Button-CH6qqEEx.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-Bqm0CoJD.js";import"./Skeleton-C80QNm7w.js";const w={title:"Components/Loading",component:e,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"\nO **Loading** renderiza um indicador de status com mensagem opcional.\n\n| variant      | ícone                    | tamanho | mensagem |\n|--------------|--------------------------|---------|----------|\n| `default`   | Spinner animado          | sm      | ✅        |\n| `large`     | Spinner animado          | lg      | ❌        |\n| `success`   | Ícone de confirmação     | sm      | ✅        |\n| `warning`   | Ícone de atenção         | sm      | ✅        |\n\n### Quando usar\n- `default` — estado de carregamento inline (dentro de botões, linhas de tabela, campos de formulário)\n- `large` — carregamento de seção inteira ou overlay de página\n- `success` — operação concluída com êxito\n- `warning` — operação concluída com algum problema não-bloqueante\n\n### Boas práticas\n- Sempre combine `default` com `message` quando o usuário precisa de contexto sobre o que está carregando\n- Use `large` sem mensagem para carregamentos de layout — mantém a UI limpa\n- Faça a transição `default` → `success` ou `warning` para dar feedback ao término da operação\n        "}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1237-124"}},argTypes:{variant:{control:"select",options:["default","large","success","warning"],description:"Variante visual do indicador de status.",table:{type:{summary:'"default" | "large" | "success" | "warning"'}}},message:{control:"text",description:'Mensagem opcional exibida ao lado do indicador. Ignorada quando `variant` é `"large"`.',table:{type:{summary:"string"}}}}},r={name:"Default",args:{variant:"default",message:"Carregando dados..."}},o={name:"Variante — large",args:{variant:"large"}},t={name:"Variante — default (sem mensagem)",args:{variant:"default"}},i={name:"Variante — success",args:{variant:"success",message:"Alterações salvas com sucesso."}},d={name:"Variante — warning",args:{variant:"warning",message:"Salvo com avisos. Verifique os campos destacados."}},c={name:"Matriz — todas as variantes",render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-medium)"},children:[a.jsx(e,{variant:"default",message:"Carregando dados..."}),a.jsx(e,{variant:"large"}),a.jsx(e,{variant:"success",message:"Salvo com sucesso."}),a.jsx(e,{variant:"warning",message:"Salvo com avisos."})]})},l={name:"Transição — default → success",render:()=>{const[s,n]=g.useState("idle"),p=()=>{n("loading"),setTimeout(()=>n("success"),2e3)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",minWidth:"260px"},children:[s==="idle"&&a.jsx("div",{style:{width:"fit-content"},children:a.jsx(x,{onClick:p,children:"Salvar alterações"})}),s==="loading"&&a.jsx(e,{variant:"default",message:"Salvando alterações..."}),s==="success"&&a.jsx(e,{variant:"success",message:"Alterações salvas com sucesso."})]})}},m={name:"Transição — default → warning",render:()=>{const[s,n]=g.useState("idle"),p=()=>{n("loading"),setTimeout(()=>n("warning"),2e3)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",minWidth:"260px",alignItems:"left"},children:[s==="idle"&&a.jsx("div",{style:{width:"fit-content"},children:a.jsx(x,{onClick:p,children:"Enviar formulário"})}),s==="loading"&&a.jsx(e,{variant:"default",message:"Enviando formulário..."}),s==="warning"&&a.jsx(e,{variant:"warning",message:"Enviado com avisos. Verifique os campos destacados."})]})}},u={name:"Contexto real — inline em linha de tabela",render:()=>a.jsxs("div",{style:{width:"400px",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",overflow:"hidden"},children:[["Pedido #1042","Pedido #1043"].map(s=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--s-spacing-x-small) var(--s-spacing-small)",borderBottom:"var(--s-border-width-hairline) solid var(--s-color-border-default)"},children:[a.jsx("small",{children:s}),a.jsx(e,{variant:"default"})]},s)),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--s-spacing-x-small) var(--s-spacing-small)"},children:[a.jsx("small",{children:"Pedido #1044"}),a.jsx(e,{variant:"success",message:"Concluído"})]})]})},j=["Default","Large","DefaultNoMessage","Success","Warning","AllVariants","TransitionToSuccess","TransitionToWarning","InlineTableRow"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    variant: "default",
    message: "Carregando dados..."
  }
}`,...r.parameters?.docs?.source},description:{story:`Spinner animado com mensagem — estado de carregamento inline padrão.\r
Use os Controls para explorar as demais variantes.`,...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Variante — large",
  args: {
    variant: "large"
  }
}`,...o.parameters?.docs?.source},description:{story:`Spinner grande sem mensagem — para carregamento de seção ou página inteira.\r
A mensagem é ignorada nesta variante.`,...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Variante — default (sem mensagem)",
  args: {
    variant: "default"
  }
}`,...t.parameters?.docs?.source},description:{story:"Spinner padrão sem mensagem — para espaços compactos onde o contexto já é claro.",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Variante — success",
  args: {
    variant: "success",
    message: "Alterações salvas com sucesso."
  }
}`,...i.parameters?.docs?.source},description:{story:"Estado de sucesso — operação concluída com êxito.\r\nUse após transição do estado `default`.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Variante — warning",
  args: {
    variant: "warning",
    message: "Salvo com avisos. Verifique os campos destacados."
  }
}`,...d.parameters?.docs?.source},description:{story:`Estado de atenção — operação concluída com problema não-bloqueante.\r
Use quando a operação foi concluída mas requer revisão do usuário.`,...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Matriz — todas as variantes",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-medium)"
  }}>\r
      <Loading variant="default" message="Carregando dados..." />\r
      <Loading variant="large" />\r
      <Loading variant="success" message="Salvo com sucesso." />\r
      <Loading variant="warning" message="Salvo com avisos." />\r
    </div>
}`,...c.parameters?.docs?.source},description:{story:`Todas as variantes lado a lado para referência visual rápida.\r
Use para validar tokens de cor e espaçamento após alterações de tema.`,...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Transição — default → success",
  render: () => {
    const [state, setState] = useState<"idle" | "loading" | "success">("idle");
    const handleSave = () => {
      setState("loading");
      setTimeout(() => setState("success"), 2000);
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)",
      minWidth: "260px"
    }}>\r
        {state === "idle" && <div style={{
        width: "fit-content"
      }}>\r
            <Button onClick={handleSave}>\r
              Salvar alterações\r
            </Button>\r
          </div>}\r
        {state === "loading" && <Loading variant="default" message="Salvando alterações..." />}\r
        {state === "success" && <Loading variant="success" message="Alterações salvas com sucesso." />}\r
      </div>;
  }
}`,...l.parameters?.docs?.source},description:{story:`Simula a transição completa: default → success.\r
Demonstra o padrão recomendado de feedback para operações assíncronas.\r
Clique em "Salvar" para iniciar o ciclo.`,...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Transição — default → warning",
  render: () => {
    const [state, setState] = useState<"idle" | "loading" | "warning">("idle");
    const handleSubmit = () => {
      setState("loading");
      setTimeout(() => setState("warning"), 2000);
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)",
      minWidth: "260px",
      alignItems: 'left'
    }}>\r
        {state === "idle" && <div style={{
        width: "fit-content"
      }}>\r
            <Button onClick={handleSubmit}>\r
              Enviar formulário\r
            </Button>\r
          </div>}\r
        {state === "loading" && <Loading variant="default" message="Enviando formulário..." />}\r
        {state === "warning" && <Loading variant="warning" message="Enviado com avisos. Verifique os campos destacados." />}\r
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:`Simula a transição completa: default → warning.\r
Demonstra o padrão de feedback quando a operação é concluída com ressalvas.\r
Clique em "Enviar" para iniciar o ciclo.`,...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — inline em linha de tabela",
  render: () => <div style={{
    width: "400px",
    border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
    borderRadius: "var(--s-border-radius-medium)",
    overflow: "hidden"
  }}>\r
      {["Pedido #1042", "Pedido #1043"].map(label => <div key={label} style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "var(--s-spacing-x-small) var(--s-spacing-small)",
      borderBottom: "var(--s-border-width-hairline) solid var(--s-color-border-default)"
    }}>\r
          <small>{label}</small>\r
          <Loading variant="default" />\r
        </div>)}\r
      <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "var(--s-spacing-x-small) var(--s-spacing-small)"
    }}>\r
        <small>Pedido #1044</small>\r
        <Loading variant="success" message="Concluído" />\r
      </div>\r
    </div>
}`,...u.parameters?.docs?.source},description:{story:"Spinner `default` inline numa linha de tabela — simula carregamento de um registro.",...u.parameters?.docs?.description}}};export{c as AllVariants,r as Default,t as DefaultNoMessage,u as InlineTableRow,o as Large,i as Success,l as TransitionToSuccess,m as TransitionToWarning,d as Warning,j as __namedExportsOrder,w as default};
