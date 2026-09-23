import{j as e,r as P}from"./iframe-CxNvl9BI.js";/* empty css               */import{I as S}from"./Icon-Bqm0CoJD.js";import{B as y}from"./Button-CH6qqEEx.js";import"./preload-helper-PPVm8Dsz.js";import"./Loading-DhvOqAup.js";import"./Skeleton-C80QNm7w.js";const j={default:"circle",current:"trip_origin",error:"error",completed:"check_circle",disable:"block"};function k(r){return r?{width:"100%"}:void 0}const o=({step:r,description:a,state:t,direction:s,onClick:n,widthFull:b=!1})=>{const h=j[t];return e.jsxs("div",{className:`progress-indicator ${s} ${t}`,onClick:n,style:k(b),children:[e.jsxs("div",{className:`header ${t}`,children:[e.jsx("div",{children:e.jsx(S,{icon:h,size:"sm",fill:!["circle","block","error"].includes(h)})}),e.jsx("h1",{children:r})]}),a&&e.jsx("p",{children:a})]})},U={title:"Components/ProgressIndicator",component:o,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nO **ProgressIndicator** renderiza um único passo em um fluxo de múltiplas etapas.\n\nCada passo tem um ícone determinado pelo estado, um label e uma descrição opcional.\nOs passos podem ser dispostos horizontalmente (`"row"`) ou verticalmente (`"column"`),\ne expandir para preencher a largura disponível via `widthFull` para distribuição uniforme.\n\n### Estados disponíveis\n| Estado       | Ícone                | Descrição                                         |\n|--------------|----------------------|---------------------------------------------------|\n| `default`   | Círculo (outline)    | Passo ainda não alcançado                         |\n| `current`   | Trip origin          | Passo ativo no momento                            |\n| `error`     | Error (filled)       | Passo com erro de validação                       |\n| `completed` | Check circle (filled)| Passo concluído                                   |\n| `disable`   | Círculo (muted)      | Passo não acessível no momento                    |\n\n### Direções\n| direction  | comportamento                                              |\n|------------|------------------------------------------------------------|\n| `"row"`   | Ícone e texto lado a lado — para steppers horizontais      |\n| `"column"`| Ícone acima do texto — para steppers verticais             |\n\n### Quando usar\n- Formulários multi-etapa (wizards, checkouts, onboardings)\n- Qualquer fluxo sequencial onde o progresso precisa ser comunicado visualmente\n\n### Boas práticas\n- Sempre mostre exatamente um passo com estado `"current"` por vez\n- Use `widthFull` para distribuir os passos uniformemente em um stepper horizontal\n- Adicione `onClick` apenas nos passos alcançáveis (`"completed"` ou `"current"`)\n- Passos `"default"` e `"disable"` não devem ser clicáveis\n        '}},design:{type:"figma",url:"https://figma.com/file/SEU_FILE_KEY/ProgressIndicator?node-id=NODE_ID"}},argTypes:{step:{control:"text",description:"Label do passo exibido como título.",table:{type:{summary:"string"}}},description:{control:"text",description:"Texto de suporte exibido abaixo do label.",table:{type:{summary:"string"}}},state:{control:"select",options:["default","current","error","completed","disable"],description:"Estado visual do passo.",table:{type:{summary:'"default" | "current" | "error" | "completed" | "disable"'}}},direction:{control:"radio",options:["row","column"],description:'Direção do layout. `"row"` = horizontal (stepper horizontal). `"column"` = vertical (stepper vertical).',table:{type:{summary:'"row" | "column"'}}},widthFull:{control:"boolean",description:"Quando `true`, o indicador expande para preencher toda a largura disponível. Use para distribuir passos uniformemente.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},onClick:{action:"onClick",description:"Callback disparado ao clicar no passo. Adicione apenas em passos alcançáveis (`completed` ou `current`).",table:{type:{summary:"() => void"}}}}},i={name:"Default",args:{step:"Detalhes",description:"Preencha suas informações",state:"default",direction:"row"}},d={name:"Estado — current",args:{step:"Pagamento",description:"Dados de cobrança",state:"current",direction:"row"}},c={name:"Estado — completed",args:{step:"Detalhes",description:"Informações confirmadas",state:"completed",direction:"row",onClick:()=>{}}},l={name:"Estado — error",args:{step:"Pagamento",description:"Cartão recusado",state:"error",direction:"row"}},p={name:"Estado — disable",args:{step:"Confirmação",description:"Ainda não disponível",state:"disable",direction:"row"}},m={name:"Direção — row (horizontal)",args:{step:"Pagamento",description:"Dados de cobrança",state:"current",direction:"row"}},u={name:"Direção — column (vertical)",args:{step:"Pagamento",description:"Dados de cobrança",state:"current",direction:"column"}},w=["default","current","error","completed","disable"],C={default:"Detalhes",current:"Pagamento",error:"Endereço",completed:"Conta",disable:"Confirmação"},D={default:"Ainda não iniciado",current:"Em andamento",error:"Corrija os erros",completed:"Concluído",disable:"Não disponível"},x={name:"Matriz — todos os estados (row)",render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap"},children:w.map(r=>e.jsx(o,{step:C[r],description:D[r],state:r,direction:"row"},r))})},v={name:"Matriz — todos os estados (column)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:w.map(r=>e.jsx(o,{step:C[r],description:D[r],state:r,direction:"column"},r))})},f={name:"Stepper — horizontal",parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{display:"flex",width:"100%"},children:[e.jsx(o,{step:"Conta",description:"Crie sua conta",state:"completed",direction:"row",widthFull:!0,onClick:()=>{}}),e.jsx(o,{step:"Pagamento",description:"Dados de cobrança",state:"current",direction:"row",widthFull:!0,onClick:()=>{}}),e.jsx(o,{step:"Revisão",description:"Confirme o pedido",state:"default",direction:"row",widthFull:!0}),e.jsx(o,{step:"Confirmação",description:"Tudo pronto",state:"disable",direction:"row",widthFull:!0})]})},g={name:"Stepper — vertical",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(o,{step:"Conta",description:"Crie sua conta",state:"completed",direction:"column",onClick:()=>{}}),e.jsx(o,{step:"Perfil",description:"Fale sobre você",state:"current",direction:"column",onClick:()=>{}}),e.jsx(o,{step:"Confirmação",description:"Revise e envie",state:"default",direction:"column"})]})},E={name:"Interativo — wizard multi-etapa",parameters:{layout:"padded"},render:()=>{const r=[{label:"Dados pessoais",description:"Nome e e-mail"},{label:"Endereço",description:"Localização de entrega"},{label:"Pagamento",description:"Dados de cobrança"},{label:"Confirmação",description:"Revise o pedido"}],[a,t]=P.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-medium)"},children:[e.jsx("div",{style:{display:"flex",width:"100%"},children:r.map((s,n)=>{const b=n<a?"completed":n===a?"current":"default";return e.jsx(o,{step:s.label,description:s.description,state:b,direction:"row",widthFull:!0,onClick:b!=="default"?()=>t(n):void 0},s.label)})}),e.jsx("div",{style:{padding:"var(--s-spacing-medium)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",background:"var(--s-color-fill-default)"},children:e.jsxs("small",{children:["Etapa atual: ",e.jsx("strong",{children:r[a].label})]})}),e.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-xx-small)",width:"fit-content"},children:[e.jsx(y,{disabled:a===0,onClick:()=>t(s=>s-1),variant:"secondary",children:"Voltar"}),e.jsx(y,{disabled:a===r.length-1,onClick:()=>t(s=>s+1),children:"Avançar"})]})]})}},_=["Default","Current","Completed","ErrorState","Disabled","DirectionRow","DirectionColumn","AllStatesRow","AllStatesColumn","HorizontalStepper","VerticalStepper","Interactive"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    step: "Detalhes",
    description: "Preencha suas informações",
    state: "default",
    direction: "row"
  }
}`,...i.parameters?.docs?.source},description:{story:`Passo padrão ainda não alcançado.\r
Use os Controls para explorar todos os estados e direções disponíveis.`,...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Estado — current",
  args: {
    step: "Pagamento",
    description: "Dados de cobrança",
    state: "current",
    direction: "row"
  }
}`,...d.parameters?.docs?.source},description:{story:`Passo atual — o passo ativo no fluxo.\r
Deve haver exatamente um passo com este estado por vez.`,...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Estado — completed",
  args: {
    step: "Detalhes",
    description: "Informações confirmadas",
    state: "completed",
    direction: "row",
    onClick: () => {}
  }
}`,...c.parameters?.docs?.source},description:{story:`Passo concluído — o usuário já completou este passo com sucesso.\r
Passos concluídos são clicáveis para permitir revisão.`,...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Estado — error",
  args: {
    step: "Pagamento",
    description: "Cartão recusado",
    state: "error",
    direction: "row"
  }
}`,...l.parameters?.docs?.source},description:{story:`Passo com erro — erro de validação que impede o avanço.\r
O ícone e o texto do label ficam na cor de atenção.`,...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Estado — disable",
  args: {
    step: "Confirmação",
    description: "Ainda não disponível",
    state: "disable",
    direction: "row"
  }
}`,...p.parameters?.docs?.source},description:{story:`Passo desabilitado — ainda não acessível no fluxo atual.\r
Não deve ser clicável.`,...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Direção — row (horizontal)",
  args: {
    step: "Pagamento",
    description: "Dados de cobrança",
    state: "current",
    direction: "row"
  }
}`,...m.parameters?.docs?.source},description:{story:"Direção `row` — ícone e label lado a lado.\r\nUse em steppers horizontais, onde os passos ficam na mesma linha.",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Direção — column (vertical)",
  args: {
    step: "Pagamento",
    description: "Dados de cobrança",
    state: "current",
    direction: "column"
  }
}`,...u.parameters?.docs?.source},description:{story:"Direção `column` — ícone acima do label.\r\nUse em steppers verticais, onde os passos ficam empilhados.",...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Matriz — todos os estados (row)",
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap"
  }}>\r
      {allStates.map(state => <ProgressIndicator key={state} step={stateLabels[state]} description={stateDescriptions[state]} state={state} direction="row" />)}\r
    </div>
}`,...x.parameters?.docs?.source},description:{story:`Todos os estados lado a lado — row.\r
Use para validar ícones, cores e tokens após alterações de tema.`,...x.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Matriz — todos os estados (column)",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column"
  }}>\r
      {allStates.map(state => <ProgressIndicator key={state} step={stateLabels[state]} description={stateDescriptions[state]} state={state} direction="column" />)}\r
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Todos os estados empilhados — column.\r
Use para validar o layout vertical com diferentes estados.`,...v.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:"Stepper horizontal com `widthFull` — os passos preenchem a largura do container.\r\nPassos concluídos e o atual são clicáveis. Passos futuros e desabilitados não.",...f.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Stepper — vertical",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column"
  }}>\r
      <ProgressIndicator step="Conta" description="Crie sua conta" state="completed" direction="column" onClick={() => {}} />\r
      <ProgressIndicator step="Perfil" description="Fale sobre você" state="current" direction="column" onClick={() => {}} />\r
      <ProgressIndicator step="Confirmação" description="Revise e envie" state="default" direction="column" />\r
    </div>
}`,...g.parameters?.docs?.source},description:{story:'Stepper vertical — passos empilhados com `direction="column"`.\r\nPadrão comum em formulários laterais ou fluxos de configuração.',...g.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`Stepper interativo — clique nos passos concluídos ou no atual para navegar.\r
Demonstra o comportamento completo de um wizard multi-etapa.`,...E.parameters?.docs?.description}}};export{v as AllStatesColumn,x as AllStatesRow,c as Completed,d as Current,i as Default,u as DirectionColumn,m as DirectionRow,p as Disabled,l as ErrorState,f as HorizontalStepper,E as Interactive,g as VerticalStepper,_ as __namedExportsOrder,U as default};
