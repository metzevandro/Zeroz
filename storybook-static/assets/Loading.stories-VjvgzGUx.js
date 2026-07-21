import{j as a,r as oa}from"./iframe-C_0AXUlQ.js";/* empty css               */import{L as e}from"./Loading-CCCSPJuP.js";import{B as ia}from"./Button-QvF2SVTw.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-C3Uq1gPi.js";import"./Skeleton-DNOAWNPr.js";var v,g,_,f,x,S,y,b,w,T,h,j,D,L,C,V,W,q,I,A,E,B,M,R,k,N,P,U,z,O,G,Z,F,H,Q,J,K,X,Y,$,aa,ea,sa,ra,na;const va={title:"Components/Loading",component:e,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"\nO **Loading** renderiza um indicador de status com mensagem opcional.\n\n| variant      | ícone                    | tamanho | mensagem |\n|--------------|--------------------------|---------|----------|\n| `default`   | Spinner animado          | sm      | ✅        |\n| `large`     | Spinner animado          | lg      | ❌        |\n| `success`   | Ícone de confirmação     | sm      | ✅        |\n| `warning`   | Ícone de atenção         | sm      | ✅        |\n\n### Quando usar\n- `default` — estado de carregamento inline (dentro de botões, linhas de tabela, campos de formulário)\n- `large` — carregamento de seção inteira ou overlay de página\n- `success` — operação concluída com êxito\n- `warning` — operação concluída com algum problema não-bloqueante\n\n### Boas práticas\n- Sempre combine `default` com `message` quando o usuário precisa de contexto sobre o que está carregando\n- Use `large` sem mensagem para carregamentos de layout — mantém a UI limpa\n- Faça a transição `default` → `success` ou `warning` para dar feedback ao término da operação\n        "}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1237-124"}},argTypes:{variant:{control:"select",options:["default","large","success","warning"],description:"Variante visual do indicador de status.",table:{type:{summary:'"default" | "large" | "success" | "warning"'}}},message:{control:"text",description:'Mensagem opcional exibida ao lado do indicador. Ignorada quando `variant` é `"large"`.',table:{type:{summary:"string"}}}}},n={name:"Default",args:{variant:"default",message:"Carregando dados..."}},o={name:"Variante — large",args:{variant:"large"}},i={name:"Variante — default (sem mensagem)",args:{variant:"default"}},t={name:"Variante — success",args:{variant:"success",message:"Alterações salvas com sucesso."}},d={name:"Variante — warning",args:{variant:"warning",message:"Salvo com avisos. Verifique os campos destacados."}},l={name:"Matriz — todas as variantes",render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-medium)"},children:[a.jsx(e,{variant:"default",message:"Carregando dados..."}),a.jsx(e,{variant:"large"}),a.jsx(e,{variant:"success",message:"Salvo com sucesso."}),a.jsx(e,{variant:"warning",message:"Salvo com avisos."})]})},c={name:"Transição — default → success",render:()=>{const[s,r]=oa.useState("idle"),p=()=>{r("loading"),setTimeout(()=>r("success"),2e3)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",minWidth:"260px"},children:[s==="idle"&&a.jsx("div",{style:{width:"fit-content"},children:a.jsx(ia,{onClick:p,children:"Salvar alterações"})}),s==="loading"&&a.jsx(e,{variant:"default",message:"Salvando alterações..."}),s==="success"&&a.jsx(e,{variant:"success",message:"Alterações salvas com sucesso."})]})}},m={name:"Transição — default → warning",render:()=>{const[s,r]=oa.useState("idle"),p=()=>{r("loading"),setTimeout(()=>r("warning"),2e3)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",minWidth:"260px",alignItems:"left"},children:[s==="idle"&&a.jsx("div",{style:{width:"fit-content"},children:a.jsx(ia,{onClick:p,children:"Enviar formulário"})}),s==="loading"&&a.jsx(e,{variant:"default",message:"Enviando formulário..."}),s==="warning"&&a.jsx(e,{variant:"warning",message:"Enviado com avisos. Verifique os campos destacados."})]})}},u={name:"Contexto real — inline em linha de tabela",render:()=>a.jsxs("div",{style:{width:"400px",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",overflow:"hidden"},children:[["Pedido #1042","Pedido #1043"].map(s=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--s-spacing-x-small) var(--s-spacing-small)",borderBottom:"var(--s-border-width-hairline) solid var(--s-color-border-default)"},children:[a.jsx("small",{children:s}),a.jsx(e,{variant:"default"})]},s)),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--s-spacing-x-small) var(--s-spacing-small)"},children:[a.jsx("small",{children:"Pedido #1044"}),a.jsx(e,{variant:"success",message:"Concluído"})]})]})};n.parameters={...n.parameters,docs:{...(v=n.parameters)===null||v===void 0?void 0:v.docs,source:{originalSource:`{
  name: "Default",
  args: {
    variant: "default",
    message: "Carregando dados..."
  }
}`,...(_=n.parameters)===null||_===void 0||(g=_.docs)===null||g===void 0?void 0:g.source},description:{story:`Spinner animado com mensagem — estado de carregamento inline padrão.\r
Use os Controls para explorar as demais variantes.`,...(x=n.parameters)===null||x===void 0||(f=x.docs)===null||f===void 0?void 0:f.description}}};o.parameters={...o.parameters,docs:{...(S=o.parameters)===null||S===void 0?void 0:S.docs,source:{originalSource:`{
  name: "Variante — large",
  args: {
    variant: "large"
  }
}`,...(b=o.parameters)===null||b===void 0||(y=b.docs)===null||y===void 0?void 0:y.source},description:{story:`Spinner grande sem mensagem — para carregamento de seção ou página inteira.\r
A mensagem é ignorada nesta variante.`,...(T=o.parameters)===null||T===void 0||(w=T.docs)===null||w===void 0?void 0:w.description}}};i.parameters={...i.parameters,docs:{...(h=i.parameters)===null||h===void 0?void 0:h.docs,source:{originalSource:`{
  name: "Variante — default (sem mensagem)",
  args: {
    variant: "default"
  }
}`,...(D=i.parameters)===null||D===void 0||(j=D.docs)===null||j===void 0?void 0:j.source},description:{story:"Spinner padrão sem mensagem — para espaços compactos onde o contexto já é claro.",...(C=i.parameters)===null||C===void 0||(L=C.docs)===null||L===void 0?void 0:L.description}}};t.parameters={...t.parameters,docs:{...(V=t.parameters)===null||V===void 0?void 0:V.docs,source:{originalSource:`{
  name: "Variante — success",
  args: {
    variant: "success",
    message: "Alterações salvas com sucesso."
  }
}`,...(q=t.parameters)===null||q===void 0||(W=q.docs)===null||W===void 0?void 0:W.source},description:{story:"Estado de sucesso — operação concluída com êxito.\r\nUse após transição do estado `default`.",...(A=t.parameters)===null||A===void 0||(I=A.docs)===null||I===void 0?void 0:I.description}}};d.parameters={...d.parameters,docs:{...(E=d.parameters)===null||E===void 0?void 0:E.docs,source:{originalSource:`{
  name: "Variante — warning",
  args: {
    variant: "warning",
    message: "Salvo com avisos. Verifique os campos destacados."
  }
}`,...(M=d.parameters)===null||M===void 0||(B=M.docs)===null||B===void 0?void 0:B.source},description:{story:`Estado de atenção — operação concluída com problema não-bloqueante.\r
Use quando a operação foi concluída mas requer revisão do usuário.`,...(k=d.parameters)===null||k===void 0||(R=k.docs)===null||R===void 0?void 0:R.description}}};l.parameters={...l.parameters,docs:{...(N=l.parameters)===null||N===void 0?void 0:N.docs,source:{originalSource:`{
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
}`,...(U=l.parameters)===null||U===void 0||(P=U.docs)===null||P===void 0?void 0:P.source},description:{story:`Todas as variantes lado a lado para referência visual rápida.\r
Use para validar tokens de cor e espaçamento após alterações de tema.`,...(O=l.parameters)===null||O===void 0||(z=O.docs)===null||z===void 0?void 0:z.description}}};c.parameters={...c.parameters,docs:{...(G=c.parameters)===null||G===void 0?void 0:G.docs,source:{originalSource:`{
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
}`,...(F=c.parameters)===null||F===void 0||(Z=F.docs)===null||Z===void 0?void 0:Z.source},description:{story:`Simula a transição completa: default → success.\r
Demonstra o padrão recomendado de feedback para operações assíncronas.\r
Clique em "Salvar" para iniciar o ciclo.`,...(Q=c.parameters)===null||Q===void 0||(H=Q.docs)===null||H===void 0?void 0:H.description}}};m.parameters={...m.parameters,docs:{...(J=m.parameters)===null||J===void 0?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=m.parameters)===null||X===void 0||(K=X.docs)===null||K===void 0?void 0:K.source},description:{story:`Simula a transição completa: default → warning.\r
Demonstra o padrão de feedback quando a operação é concluída com ressalvas.\r
Clique em "Enviar" para iniciar o ciclo.`,...($=m.parameters)===null||$===void 0||(Y=$.docs)===null||Y===void 0?void 0:Y.description}}};u.parameters={...u.parameters,docs:{...(aa=u.parameters)===null||aa===void 0?void 0:aa.docs,source:{originalSource:`{
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
}`,...(sa=u.parameters)===null||sa===void 0||(ea=sa.docs)===null||ea===void 0?void 0:ea.source},description:{story:"Spinner `default` inline numa linha de tabela — simula carregamento de um registro.",...(na=u.parameters)===null||na===void 0||(ra=na.docs)===null||ra===void 0?void 0:ra.description}}};const ga=["Default","Large","DefaultNoMessage","Success","Warning","AllVariants","TransitionToSuccess","TransitionToWarning","InlineTableRow"];export{l as AllVariants,n as Default,i as DefaultNoMessage,u as InlineTableRow,o as Large,t as Success,c as TransitionToSuccess,m as TransitionToWarning,d as Warning,ga as __namedExportsOrder,va as default};
