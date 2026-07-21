import{j as e,r as o}from"./iframe-C_0AXUlQ.js";import{B as x}from"./Button-QvF2SVTw.js";/* empty css               */import{P as r}from"./Progress-MfARBemw.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-C3Uq1gPi.js";import"./Loading-CCCSPJuP.js";import"./Skeleton-DNOAWNPr.js";var _,y,h,S,j,D,E,b,C,A,M,P,I,w,V,q,B,z,U,k,R,T,F,L,O,G,Z,$,H,N,Q,J,K,W,X,Y,ee,ae,re,ne,se,oe,te,le,ie;const Ee={title:"Components/Progress",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
O **Progress** exibe o status de conclusão de uma tarefa como uma barra horizontal.

Suporta quatro estados visuais:

| Estado         | Props                    | Descrição                                   |
|----------------|--------------------------|---------------------------------------------|
| Determinado    | \`value\` 0–99            | Preenchimento proporcional ao valor         |
| Sucesso        | \`value={100}\`           | Aplicado automaticamente ao atingir 100%    |
| Erro           | \`error\`                 | Indica uma operação com falha               |
| Indeterminado  | \`indeterminate\`         | Barra animada para progresso desconhecido   |

Valores fora de \`[0, 100]\` são truncados automaticamente pelo utilitário \`clampProgress\`.

### Quando usar
- Upload ou download de arquivos com progresso conhecido
- Indicador de conclusão em formulários multi-etapa
- Tarefas em segundo plano onde apenas início e fim são conhecidos (use \`indeterminate\`)

### Boas práticas
- Combine com um label de percentual ou etapa para que o usuário entenda o contexto
- Use \`indeterminate\` apenas quando o valor de progresso genuinamente não está disponível
- Transfira para o estado \`error\` (não apenas oculte a barra) quando uma operação falha
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1365-11215"}},argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Valor de progresso entre `0` e `100`. Valores fora do intervalo são truncados automaticamente.",table:{type:{summary:"number"}}},error:{control:"boolean",description:"Renderiza a barra com estilo de erro. Use para indicar uma operação que falhou.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},indeterminate:{control:"boolean",description:"Renderiza uma barra animada indeterminada. Use quando o progresso total não pode ser calculado. A prop `value` é ignorada neste modo.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}}}},i={name:"Default",args:{value:65}},d={name:"Estado — sucesso (value 100)",args:{value:100}},c={name:"Estado — erro",args:{value:40,error:!0}},u={name:"Estado — indeterminado (animado)",args:{value:0,indeterminate:!0}},m={name:"Estado — vazio (0%)",args:{value:0}},p={name:"Matriz — todos os estados",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-medium)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx("small",{children:"Determinado — 65%"}),e.jsx(r,{value:65})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx("small",{children:"Sucesso — 100%"}),e.jsx(r,{value:100})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx("small",{children:"Erro"}),e.jsx(r,{value:40,error:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx("small",{children:"Indeterminado"}),e.jsx(r,{value:0,indeterminate:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx("small",{children:"Vazio — 0%"}),e.jsx(r,{value:0})]})]})},v={name:"Edge case — valores fora do intervalo (truncados)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-medium)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx("small",{children:"value=-20 → truncado para 0"}),e.jsx(r,{value:-20})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx("small",{children:"value=150 → truncado para 100 (sucesso)"}),e.jsx(r,{value:150})]})]})},g={name:"Interativo — simulação de upload",render:()=>{const[a,n]=o.useState(0),[s,t]=o.useState(!1),[l,de]=o.useState(!1),[ce,ue]=o.useState(!1),me=()=>{n(0),de(!1),ue(!1),t(!0)};o.useEffect(()=>{if(!s)return;if(a>=100){t(!1),de(!0);return}const ve=setTimeout(()=>n(ge=>Math.min(ge+Math.floor(Math.random()*12)+3,100)),200);return()=>clearTimeout(ve)},[s,a]);const pe=l?"Upload concluído!":ce?"Upload falhou.":s?`${a}%`:"Aguardando início...";return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between"},children:e.jsx("small",{children:pe})}),e.jsx(r,{value:a,error:ce}),e.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-xx-small)",width:"fit-content"},children:[e.jsx(x,{onClick:me,disabled:s,children:"Iniciar"}),e.jsx(x,{onClick:()=>{t(!1),ue(!0)},disabled:!s,variant:"warning",children:"Falhar"})]})]})}},f={name:"Contexto real — formulário multi-etapa",render:()=>{const a=["Dados pessoais","Endereço","Pagamento","Confirmação"],[n,s]=o.useState(0),t=Math.round(n/(a.length-1)*100);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("small",{children:a[n]}),e.jsxs("small",{children:["Etapa ",n+1," de ",a.length]})]}),e.jsx(r,{value:t}),e.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-xx-small)",width:"fit-content"},children:[e.jsx(x,{onClick:()=>s(l=>Math.max(0,l-1)),disabled:n===0,variant:"secondary",children:"Voltar"}),e.jsx(x,{onClick:()=>s(l=>Math.min(a.length-1,l+1)),disabled:n===a.length-1,variant:"primary",children:"Avançar"})]})]})}};i.parameters={...i.parameters,docs:{...(_=i.parameters)===null||_===void 0?void 0:_.docs,source:{originalSource:`{
  name: "Default",
  args: {
    value: 65
  }
}`,...(h=i.parameters)===null||h===void 0||(y=h.docs)===null||y===void 0?void 0:y.source},description:{story:`Barra determinada a 65%.\r
Use o controle deslizante no painel Controls para ajustar o valor.`,...(j=i.parameters)===null||j===void 0||(S=j.docs)===null||S===void 0?void 0:S.description}}};d.parameters={...d.parameters,docs:{...(D=d.parameters)===null||D===void 0?void 0:D.docs,source:{originalSource:`{
  name: "Estado — sucesso (value 100)",
  args: {
    value: 100
  }
}`,...(b=d.parameters)===null||b===void 0||(E=b.docs)===null||E===void 0?void 0:E.source},description:{story:"Estado de sucesso — aplicado automaticamente quando `value` atinge 100.\r\nA cor da barra transiciona para `--s-color-fill-success`.",...(A=d.parameters)===null||A===void 0||(C=A.docs)===null||C===void 0?void 0:C.description}}};c.parameters={...c.parameters,docs:{...(M=c.parameters)===null||M===void 0?void 0:M.docs,source:{originalSource:`{
  name: "Estado — erro",
  args: {
    value: 40,
    error: true
  }
}`,...(I=c.parameters)===null||I===void 0||(P=I.docs)===null||P===void 0?void 0:P.source},description:{story:"Estado de erro — prop `error: true`.\r\nUse para comunicar uma operação que falhou.\r\nA cor da barra transiciona para `--s-color-fill-warning`.",...(V=c.parameters)===null||V===void 0||(w=V.docs)===null||w===void 0?void 0:w.description}}};u.parameters={...u.parameters,docs:{...(q=u.parameters)===null||q===void 0?void 0:q.docs,source:{originalSource:`{
  name: "Estado — indeterminado (animado)",
  args: {
    value: 0,
    indeterminate: true
  }
}`,...(z=u.parameters)===null||z===void 0||(B=z.docs)===null||B===void 0?void 0:B.source},description:{story:"Estado indeterminado — barra animada para operações com duração desconhecida.\r\nA prop `value` é ignorada neste modo.\r\nUse durante chamadas de API sem evento de progresso.",...(k=u.parameters)===null||k===void 0||(U=k.docs)===null||U===void 0?void 0:U.description}}};m.parameters={...m.parameters,docs:{...(R=m.parameters)===null||R===void 0?void 0:R.docs,source:{originalSource:`{
  name: "Estado — vazio (0%)",
  args: {
    value: 0
  }
}`,...(F=m.parameters)===null||F===void 0||(T=F.docs)===null||T===void 0?void 0:T.source},description:{story:`Estado vazio — 0%.\r
Ponto de partida antes de qualquer progresso ser registrado.`,...(O=m.parameters)===null||O===void 0||(L=O.docs)===null||L===void 0?void 0:L.description}}};p.parameters={...p.parameters,docs:{...(G=p.parameters)===null||G===void 0?void 0:G.docs,source:{originalSource:`{
  name: "Matriz — todos os estados",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-medium)"
  }}>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-nano)"
    }}>\r
        <small>Determinado — 65%</small>\r
        <Progress value={65} />\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-nano)"
    }}>\r
        <small>Sucesso — 100%</small>\r
        <Progress value={100} />\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-nano)"
    }}>\r
        <small>Erro</small>\r
        <Progress value={40} error />\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-nano)"
    }}>\r
        <small>Indeterminado</small>\r
        <Progress value={0} indeterminate />\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-nano)"
    }}>\r
        <small>Vazio — 0%</small>\r
        <Progress value={0} />\r
      </div>\r
    </div>
}`,...($=p.parameters)===null||$===void 0||(Z=$.docs)===null||Z===void 0?void 0:Z.source},description:{story:"Todos os estados visuais empilhados para validação rápida de tokens e tema.",...(N=p.parameters)===null||N===void 0||(H=N.docs)===null||H===void 0?void 0:H.description}}};v.parameters={...v.parameters,docs:{...(Q=v.parameters)===null||Q===void 0?void 0:Q.docs,source:{originalSource:`{
  name: "Edge case — valores fora do intervalo (truncados)",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-medium)"
  }}>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-nano)"
    }}>\r
        <small>value=-20 → truncado para 0</small>\r
        <Progress value={-20} />\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-nano)"
    }}>\r
        <small>value=150 → truncado para 100 (sucesso)</small>\r
        <Progress value={150} />\r
      </div>\r
    </div>
}`,...(K=v.parameters)===null||K===void 0||(J=K.docs)===null||J===void 0?void 0:J.source},description:{story:"Valores fora do intervalo `[0, 100]` são truncados automaticamente.\r\nNenhum erro em runtime é lançado — o comportamento é silencioso.",...(X=v.parameters)===null||X===void 0||(W=X.docs)===null||W===void 0?void 0:W.description}}};g.parameters={...g.parameters,docs:{...(Y=g.parameters)===null||Y===void 0?void 0:Y.docs,source:{originalSource:`{
  name: "Interativo — simulação de upload",
  render: () => {
    const [value, setValue] = useState(0);
    const [running, setRunning] = useState(false);
    const [done, setDone] = useState(false);
    const [failed, setFailed] = useState(false);
    const start = () => {
      setValue(0);
      setDone(false);
      setFailed(false);
      setRunning(true);
    };
    useEffect(() => {
      if (!running) return;
      if (value >= 100) {
        setRunning(false);
        setDone(true);
        return;
      }
      const timer = setTimeout(() => setValue(prev => Math.min(prev + Math.floor(Math.random() * 12) + 3, 100)), 200);
      return () => clearTimeout(timer);
    }, [running, value]);
    const statusLabel = done ? "Upload concluído!" : failed ? "Upload falhou." : running ? \`\${value}%\` : "Aguardando início...";
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)"
    }}>\r
        <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>\r
          <small>{statusLabel}</small>\r
        </div>\r
        <Progress value={value} error={failed} />\r
        <div style={{
        display: "flex",
        gap: "var(--s-spacing-xx-small)",
        width: "fit-content"
      }}>\r
          <Button onClick={start} disabled={running}>\r
            Iniciar\r
          </Button>\r
          <Button onClick={() => {
          setRunning(false);
          setFailed(true);
        }} disabled={!running} variant="warning">\r
            Falhar\r
          </Button>\r
        </div>\r
      </div>;
  }
}`,...(ae=g.parameters)===null||ae===void 0||(ee=ae.docs)===null||ee===void 0?void 0:ee.source},description:{story:`Simulação de upload com animação em tempo real.\r
Clique em "Iniciar" para ver o progresso avançar com incrementos aleatórios.\r
Clique em "Falhar" durante o upload para acionar a transição para o estado de erro.`,...(ne=g.parameters)===null||ne===void 0||(re=ne.docs)===null||re===void 0?void 0:re.description}}};f.parameters={...f.parameters,docs:{...(se=f.parameters)===null||se===void 0?void 0:se.docs,source:{originalSource:`{
  name: "Contexto real — formulário multi-etapa",
  render: () => {
    const steps = ["Dados pessoais", "Endereço", "Pagamento", "Confirmação"];
    const [current, setCurrent] = useState(0);
    const progress = Math.round(current / (steps.length - 1) * 100);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)"
    }}>\r
        <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>\r
          <small>{steps[current]}</small>\r
          <small>\r
            Etapa {current + 1} de {steps.length}\r
          </small>\r
        </div>\r
        <Progress value={progress} />\r
        <div style={{
        display: "flex",
        gap: "var(--s-spacing-xx-small)",
        width: "fit-content"
      }}>\r
          <Button onClick={() => setCurrent(p => Math.max(0, p - 1))} disabled={current === 0} variant="secondary">\r
            Voltar\r
          </Button>\r
          <Button onClick={() => setCurrent(p => Math.min(steps.length - 1, p + 1))} disabled={current === steps.length - 1} variant="primary">\r
            Avançar\r
          </Button>\r
        </div>\r
      </div>;
  }
}`,...(te=f.parameters)===null||te===void 0||(oe=te.docs)===null||oe===void 0?void 0:oe.source},description:{story:`Progresso de etapas em formulário multi-passo.\r
Demonstra o uso com label de etapa e percentual calculado dinamicamente.`,...(ie=f.parameters)===null||ie===void 0||(le=ie.docs)===null||le===void 0?void 0:le.description}}};const be=["Default","Success","ErrorState","Indeterminate","Empty","AllStates","Clamped","Animated","MultiStep"];export{p as AllStates,g as Animated,v as Clamped,i as Default,m as Empty,c as ErrorState,u as Indeterminate,f as MultiStep,d as Success,be as __namedExportsOrder,Ee as default};
