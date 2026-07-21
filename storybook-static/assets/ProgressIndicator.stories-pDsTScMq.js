import{j as e,r as Ie}from"./iframe-DFdk80Qn.js";/* empty css               */import{I as Re}from"./Icon-C_kNoyVv.js";import{B as Ee}from"./Button-y_xm8ZSK.js";import"./preload-helper-PPVm8Dsz.js";import"./Loading-DYHQTa0l.js";import"./Skeleton-bEV42asx.js";const Ae={default:"circle",current:"trip_origin",error:"error",completed:"check_circle",disable:"block"};function Fe(r){return r?{width:"100%"}:void 0}const o=({step:r,description:t,state:s,direction:a,onClick:i,widthFull:C=!1})=>{const Pe=Ae[s];return e.jsxs("div",{className:`progress-indicator ${a} ${s}`,onClick:i,style:Fe(C),children:[e.jsxs("div",{className:`header ${s}`,children:[e.jsx("div",{children:e.jsx(Re,{icon:Pe,size:"sm",fill:!["circle","block","error"].includes(Pe)})}),e.jsx("h1",{children:r})]}),t&&e.jsx("p",{children:t})]})};var w,x,h,y,D,S,P,E,j,z,k,I,R,A,F,V,T,N,U,B,H,L,O,q,M,Q,W,$,K,Y,G,J,X,Z,ee,re,oe,ae,te,se,ie,ne,de,le,ce,pe,me,ue,ve,_e,fe,ge,be,Ce,we,xe,he,ye,De,Se;const Oe={title:"Components/ProgressIndicator",component:o,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nO **ProgressIndicator** renderiza um único passo em um fluxo de múltiplas etapas.\n\nCada passo tem um ícone determinado pelo estado, um label e uma descrição opcional.\nOs passos podem ser dispostos horizontalmente (`"row"`) ou verticalmente (`"column"`),\ne expandir para preencher a largura disponível via `widthFull` para distribuição uniforme.\n\n### Estados disponíveis\n| Estado       | Ícone                | Descrição                                         |\n|--------------|----------------------|---------------------------------------------------|\n| `default`   | Círculo (outline)    | Passo ainda não alcançado                         |\n| `current`   | Trip origin          | Passo ativo no momento                            |\n| `error`     | Error (filled)       | Passo com erro de validação                       |\n| `completed` | Check circle (filled)| Passo concluído                                   |\n| `disable`   | Círculo (muted)      | Passo não acessível no momento                    |\n\n### Direções\n| direction  | comportamento                                              |\n|------------|------------------------------------------------------------|\n| `"row"`   | Ícone e texto lado a lado — para steppers horizontais      |\n| `"column"`| Ícone acima do texto — para steppers verticais             |\n\n### Quando usar\n- Formulários multi-etapa (wizards, checkouts, onboardings)\n- Qualquer fluxo sequencial onde o progresso precisa ser comunicado visualmente\n\n### Boas práticas\n- Sempre mostre exatamente um passo com estado `"current"` por vez\n- Use `widthFull` para distribuir os passos uniformemente em um stepper horizontal\n- Adicione `onClick` apenas nos passos alcançáveis (`"completed"` ou `"current"`)\n- Passos `"default"` e `"disable"` não devem ser clicáveis\n        '}},design:{type:"figma",url:"https://figma.com/file/SEU_FILE_KEY/ProgressIndicator?node-id=NODE_ID"}},argTypes:{step:{control:"text",description:"Label do passo exibido como título.",table:{type:{summary:"string"}}},description:{control:"text",description:"Texto de suporte exibido abaixo do label.",table:{type:{summary:"string"}}},state:{control:"select",options:["default","current","error","completed","disable"],description:"Estado visual do passo.",table:{type:{summary:'"default" | "current" | "error" | "completed" | "disable"'}}},direction:{control:"radio",options:["row","column"],description:'Direção do layout. `"row"` = horizontal (stepper horizontal). `"column"` = vertical (stepper vertical).',table:{type:{summary:'"row" | "column"'}}},widthFull:{control:"boolean",description:"Quando `true`, o indicador expande para preencher toda a largura disponível. Use para distribuir passos uniformemente.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},onClick:{action:"onClick",description:"Callback disparado ao clicar no passo. Adicione apenas em passos alcançáveis (`completed` ou `current`).",table:{type:{summary:"() => void"}}}}},n={name:"Default",args:{step:"Detalhes",description:"Preencha suas informações",state:"default",direction:"row"}},d={name:"Estado — current",args:{step:"Pagamento",description:"Dados de cobrança",state:"current",direction:"row"}},l={name:"Estado — completed",args:{step:"Detalhes",description:"Informações confirmadas",state:"completed",direction:"row",onClick:()=>{}}},c={name:"Estado — error",args:{step:"Pagamento",description:"Cartão recusado",state:"error",direction:"row"}},p={name:"Estado — disable",args:{step:"Confirmação",description:"Ainda não disponível",state:"disable",direction:"row"}},m={name:"Direção — row (horizontal)",args:{step:"Pagamento",description:"Dados de cobrança",state:"current",direction:"row"}},u={name:"Direção — column (vertical)",args:{step:"Pagamento",description:"Dados de cobrança",state:"current",direction:"column"}},je=["default","current","error","completed","disable"],ze={default:"Detalhes",current:"Pagamento",error:"Endereço",completed:"Conta",disable:"Confirmação"},ke={default:"Ainda não iniciado",current:"Em andamento",error:"Corrija os erros",completed:"Concluído",disable:"Não disponível"},v={name:"Matriz — todos os estados (row)",render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap"},children:je.map(r=>e.jsx(o,{step:ze[r],description:ke[r],state:r,direction:"row"},r))})},_={name:"Matriz — todos os estados (column)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:je.map(r=>e.jsx(o,{step:ze[r],description:ke[r],state:r,direction:"column"},r))})},f={name:"Stepper — horizontal",parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{display:"flex",width:"100%"},children:[e.jsx(o,{step:"Conta",description:"Crie sua conta",state:"completed",direction:"row",widthFull:!0,onClick:()=>{}}),e.jsx(o,{step:"Pagamento",description:"Dados de cobrança",state:"current",direction:"row",widthFull:!0,onClick:()=>{}}),e.jsx(o,{step:"Revisão",description:"Confirme o pedido",state:"default",direction:"row",widthFull:!0}),e.jsx(o,{step:"Confirmação",description:"Tudo pronto",state:"disable",direction:"row",widthFull:!0})]})},g={name:"Stepper — vertical",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(o,{step:"Conta",description:"Crie sua conta",state:"completed",direction:"column",onClick:()=>{}}),e.jsx(o,{step:"Perfil",description:"Fale sobre você",state:"current",direction:"column",onClick:()=>{}}),e.jsx(o,{step:"Confirmação",description:"Revise e envie",state:"default",direction:"column"})]})},b={name:"Interativo — wizard multi-etapa",parameters:{layout:"padded"},render:()=>{const r=[{label:"Dados pessoais",description:"Nome e e-mail"},{label:"Endereço",description:"Localização de entrega"},{label:"Pagamento",description:"Dados de cobrança"},{label:"Confirmação",description:"Revise o pedido"}],[t,s]=Ie.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-medium)"},children:[e.jsx("div",{style:{display:"flex",width:"100%"},children:r.map((a,i)=>{const C=i<t?"completed":i===t?"current":"default";return e.jsx(o,{step:a.label,description:a.description,state:C,direction:"row",widthFull:!0,onClick:C!=="default"?()=>s(i):void 0},a.label)})}),e.jsx("div",{style:{padding:"var(--s-spacing-medium)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",background:"var(--s-color-fill-default)"},children:e.jsxs("small",{children:["Etapa atual: ",e.jsx("strong",{children:r[t].label})]})}),e.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-xx-small)",width:"fit-content"},children:[e.jsx(Ee,{disabled:t===0,onClick:()=>s(a=>a-1),variant:"secondary",children:"Voltar"}),e.jsx(Ee,{disabled:t===r.length-1,onClick:()=>s(a=>a+1),children:"Avançar"})]})]})}};n.parameters={...n.parameters,docs:{...(w=n.parameters)===null||w===void 0?void 0:w.docs,source:{originalSource:`{
  name: "Default",
  args: {
    step: "Detalhes",
    description: "Preencha suas informações",
    state: "default",
    direction: "row"
  }
}`,...(h=n.parameters)===null||h===void 0||(x=h.docs)===null||x===void 0?void 0:x.source},description:{story:`Passo padrão ainda não alcançado.\r
Use os Controls para explorar todos os estados e direções disponíveis.`,...(D=n.parameters)===null||D===void 0||(y=D.docs)===null||y===void 0?void 0:y.description}}};d.parameters={...d.parameters,docs:{...(S=d.parameters)===null||S===void 0?void 0:S.docs,source:{originalSource:`{
  name: "Estado — current",
  args: {
    step: "Pagamento",
    description: "Dados de cobrança",
    state: "current",
    direction: "row"
  }
}`,...(E=d.parameters)===null||E===void 0||(P=E.docs)===null||P===void 0?void 0:P.source},description:{story:`Passo atual — o passo ativo no fluxo.\r
Deve haver exatamente um passo com este estado por vez.`,...(z=d.parameters)===null||z===void 0||(j=z.docs)===null||j===void 0?void 0:j.description}}};l.parameters={...l.parameters,docs:{...(k=l.parameters)===null||k===void 0?void 0:k.docs,source:{originalSource:`{
  name: "Estado — completed",
  args: {
    step: "Detalhes",
    description: "Informações confirmadas",
    state: "completed",
    direction: "row",
    onClick: () => {}
  }
}`,...(R=l.parameters)===null||R===void 0||(I=R.docs)===null||I===void 0?void 0:I.source},description:{story:`Passo concluído — o usuário já completou este passo com sucesso.\r
Passos concluídos são clicáveis para permitir revisão.`,...(F=l.parameters)===null||F===void 0||(A=F.docs)===null||A===void 0?void 0:A.description}}};c.parameters={...c.parameters,docs:{...(V=c.parameters)===null||V===void 0?void 0:V.docs,source:{originalSource:`{
  name: "Estado — error",
  args: {
    step: "Pagamento",
    description: "Cartão recusado",
    state: "error",
    direction: "row"
  }
}`,...(N=c.parameters)===null||N===void 0||(T=N.docs)===null||T===void 0?void 0:T.source},description:{story:`Passo com erro — erro de validação que impede o avanço.\r
O ícone e o texto do label ficam na cor de atenção.`,...(B=c.parameters)===null||B===void 0||(U=B.docs)===null||U===void 0?void 0:U.description}}};p.parameters={...p.parameters,docs:{...(H=p.parameters)===null||H===void 0?void 0:H.docs,source:{originalSource:`{
  name: "Estado — disable",
  args: {
    step: "Confirmação",
    description: "Ainda não disponível",
    state: "disable",
    direction: "row"
  }
}`,...(O=p.parameters)===null||O===void 0||(L=O.docs)===null||L===void 0?void 0:L.source},description:{story:`Passo desabilitado — ainda não acessível no fluxo atual.\r
Não deve ser clicável.`,...(M=p.parameters)===null||M===void 0||(q=M.docs)===null||q===void 0?void 0:q.description}}};m.parameters={...m.parameters,docs:{...(Q=m.parameters)===null||Q===void 0?void 0:Q.docs,source:{originalSource:`{
  name: "Direção — row (horizontal)",
  args: {
    step: "Pagamento",
    description: "Dados de cobrança",
    state: "current",
    direction: "row"
  }
}`,...($=m.parameters)===null||$===void 0||(W=$.docs)===null||W===void 0?void 0:W.source},description:{story:"Direção `row` — ícone e label lado a lado.\r\nUse em steppers horizontais, onde os passos ficam na mesma linha.",...(Y=m.parameters)===null||Y===void 0||(K=Y.docs)===null||K===void 0?void 0:K.description}}};u.parameters={...u.parameters,docs:{...(G=u.parameters)===null||G===void 0?void 0:G.docs,source:{originalSource:`{
  name: "Direção — column (vertical)",
  args: {
    step: "Pagamento",
    description: "Dados de cobrança",
    state: "current",
    direction: "column"
  }
}`,...(X=u.parameters)===null||X===void 0||(J=X.docs)===null||J===void 0?void 0:J.source},description:{story:"Direção `column` — ícone acima do label.\r\nUse em steppers verticais, onde os passos ficam empilhados.",...(ee=u.parameters)===null||ee===void 0||(Z=ee.docs)===null||Z===void 0?void 0:Z.description}}};v.parameters={...v.parameters,docs:{...(re=v.parameters)===null||re===void 0?void 0:re.docs,source:{originalSource:`{
  name: "Matriz — todos os estados (row)",
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap"
  }}>\r
      {allStates.map(state => <ProgressIndicator key={state} step={stateLabels[state]} description={stateDescriptions[state]} state={state} direction="row" />)}\r
    </div>
}`,...(ae=v.parameters)===null||ae===void 0||(oe=ae.docs)===null||oe===void 0?void 0:oe.source},description:{story:`Todos os estados lado a lado — row.\r
Use para validar ícones, cores e tokens após alterações de tema.`,...(se=v.parameters)===null||se===void 0||(te=se.docs)===null||te===void 0?void 0:te.description}}};_.parameters={..._.parameters,docs:{...(ie=_.parameters)===null||ie===void 0?void 0:ie.docs,source:{originalSource:`{
  name: "Matriz — todos os estados (column)",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column"
  }}>\r
      {allStates.map(state => <ProgressIndicator key={state} step={stateLabels[state]} description={stateDescriptions[state]} state={state} direction="column" />)}\r
    </div>
}`,...(de=_.parameters)===null||de===void 0||(ne=de.docs)===null||ne===void 0?void 0:ne.source},description:{story:`Todos os estados empilhados — column.\r
Use para validar o layout vertical com diferentes estados.`,...(ce=_.parameters)===null||ce===void 0||(le=ce.docs)===null||le===void 0?void 0:le.description}}};f.parameters={...f.parameters,docs:{...(pe=f.parameters)===null||pe===void 0?void 0:pe.docs,source:{originalSource:`{
  name: "Stepper — horizontal",
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div style={{
    display: "flex",
    width: "100%"
  }}>\r
      <ProgressIndicator step="Conta" description="Crie sua conta" state="completed" direction="row" widthFull onClick={() => {}} />\r
      <ProgressIndicator step="Pagamento" description="Dados de cobrança" state="current" direction="row" widthFull onClick={() => {}} />\r
      <ProgressIndicator step="Revisão" description="Confirme o pedido" state="default" direction="row" widthFull />\r
      <ProgressIndicator step="Confirmação" description="Tudo pronto" state="disable" direction="row" widthFull />\r
    </div>
}`,...(ue=f.parameters)===null||ue===void 0||(me=ue.docs)===null||me===void 0?void 0:me.source},description:{story:"Stepper horizontal com `widthFull` — os passos preenchem a largura do container.\r\nPassos concluídos e o atual são clicáveis. Passos futuros e desabilitados não.",...(_e=f.parameters)===null||_e===void 0||(ve=_e.docs)===null||ve===void 0?void 0:ve.description}}};g.parameters={...g.parameters,docs:{...(fe=g.parameters)===null||fe===void 0?void 0:fe.docs,source:{originalSource:`{
  name: "Stepper — vertical",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column"
  }}>\r
      <ProgressIndicator step="Conta" description="Crie sua conta" state="completed" direction="column" onClick={() => {}} />\r
      <ProgressIndicator step="Perfil" description="Fale sobre você" state="current" direction="column" onClick={() => {}} />\r
      <ProgressIndicator step="Confirmação" description="Revise e envie" state="default" direction="column" />\r
    </div>
}`,...(be=g.parameters)===null||be===void 0||(ge=be.docs)===null||ge===void 0?void 0:ge.source},description:{story:'Stepper vertical — passos empilhados com `direction="column"`.\r\nPadrão comum em formulários laterais ou fluxos de configuração.',...(we=g.parameters)===null||we===void 0||(Ce=we.docs)===null||Ce===void 0?void 0:Ce.description}}};b.parameters={...b.parameters,docs:{...(xe=b.parameters)===null||xe===void 0?void 0:xe.docs,source:{originalSource:`{
  name: "Interativo — wizard multi-etapa",
  parameters: {
    layout: "padded"
  },
  render: () => {
    const steps: {
      label: string;
      description: string;
    }[] = [{
      label: "Dados pessoais",
      description: "Nome e e-mail"
    }, {
      label: "Endereço",
      description: "Localização de entrega"
    }, {
      label: "Pagamento",
      description: "Dados de cobrança"
    }, {
      label: "Confirmação",
      description: "Revise o pedido"
    }];
    const [current, setCurrent] = useState(1);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-medium)"
    }}>\r
        <div style={{
        display: "flex",
        width: "100%"
      }}>\r
          {steps.map((s, i) => {
          const state: ProgressIndicatorState = i < current ? "completed" : i === current ? "current" : "default";
          return <ProgressIndicator key={s.label} step={s.label} description={s.description} state={state} direction="row" widthFull onClick={state !== "default" ? () => setCurrent(i) : undefined} />;
        })}\r
        </div>\r
        <div style={{
        padding: "var(--s-spacing-medium)",
        border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
        borderRadius: "var(--s-border-radius-medium)",
        background: "var(--s-color-fill-default)"
      }}>\r
          <small>\r
            Etapa atual: <strong>{steps[current].label}</strong>\r
          </small>\r
        </div>\r
        <div style={{
        display: "flex",
        gap: "var(--s-spacing-xx-small)",
        width: "fit-content"
      }}>\r
          <Button disabled={current === 0} onClick={() => setCurrent(p => p - 1)} variant="secondary">\r
            Voltar\r
          </Button>\r
          <Button disabled={current === steps.length - 1} onClick={() => setCurrent(p => p + 1)}>\r
            Avançar\r
          </Button>\r
        </div>\r
      </div>;
  }
}`,...(ye=b.parameters)===null||ye===void 0||(he=ye.docs)===null||he===void 0?void 0:he.source},description:{story:`Stepper interativo — clique nos passos concluídos ou no atual para navegar.\r
Demonstra o comportamento completo de um wizard multi-etapa.`,...(Se=b.parameters)===null||Se===void 0||(De=Se.docs)===null||De===void 0?void 0:De.description}}};const qe=["Default","Current","Completed","ErrorState","Disabled","DirectionRow","DirectionColumn","AllStatesRow","AllStatesColumn","HorizontalStepper","VerticalStepper","Interactive"];export{_ as AllStatesColumn,v as AllStatesRow,l as Completed,d as Current,n as Default,u as DirectionColumn,m as DirectionRow,p as Disabled,c as ErrorState,f as HorizontalStepper,b as Interactive,g as VerticalStepper,qe as __namedExportsOrder,Oe as default};
