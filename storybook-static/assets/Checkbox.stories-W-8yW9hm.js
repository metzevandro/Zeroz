import{j as e,r as g}from"./iframe-C_0AXUlQ.js";/* empty css               */import{C as o}from"./Checkbox-CN1CK8n9.js";import{B as Ve}from"./Button-QvF2SVTw.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-C3Uq1gPi.js";import"./Loading-CCCSPJuP.js";import"./Skeleton-DNOAWNPr.js";var y,k,C,S,D,V,A,j,U,q,E,P,O,T,I,L,N,z,M,R,B,F,w,G,Q,Z,H,W,J,K,X,Y,$,ee,ae,oe,re,se,te,de,ne,le,ie,ce,me,pe,ue,ve,be,_e,fe,xe,ge,he,ye;const Ie={title:"Components/Checkbox",component:o,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nO **Checkbox** é um input de seleção acessível e controlável.\n\nSuporta estado indeterminado, modificadores `disabled` e `noEvents`,\nacionamento por teclado via Enter, e sincronização com `modelValue` externo.\n\nUm `id` único é gerado automaticamente via `useId()` quando nenhum é fornecido,\ngarantindo que `<label>` e `<input>` estejam sempre corretamente associados (WCAG 2.1 SC 1.3.1).\n\n### Estados disponíveis\n| Estado          | Descrição                                                              |\n|-----------------|------------------------------------------------------------------------|\n| Desmarcado      | Estado padrão — `modelValue: false`                                  |\n| Marcado         | Selecionado — `modelValue: true`                                     |\n| Indeterminado   | Estado misto — usado em padrões de "selecionar todos"                  |\n| Desabilitado    | Bloqueado para interação — `disabled: true`                          |\n\n### Acessibilidade\n- O `<label>` e o `<input>` são sempre associados via `htmlFor` / `id`\n- Navegação e acionamento por teclado suportados nativamente (Tab + Enter)\n- `indeterminate` é aplicado via propriedade DOM nativa (`el.indeterminate`)\n- Sem `label` visível, garanta contexto acessível via `aria-label` no elemento pai\n\n### Quando usar\n- Seleção de uma ou mais opções em uma lista\n- Alternância de configurações booleanas ("Lembrar de mim", "Aceitar termos")\n- Padrão "selecionar todos" usando o estado `indeterminate`\n\n### Quando não usar\n- Para seleção exclusiva de uma única opção — use `RadioButton`\n- Para alternância de estado com efeito imediato — considere o modo `switch` ou `Toggle`\n        '}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10013"}},argTypes:{label:{control:"text",description:"Texto do label renderizado ao lado do checkbox. Quando omitido, apenas o checkbox é exibido.",table:{type:{summary:"string"}}},modelValue:{control:"boolean",description:"Estado controlado do checkbox. Quando fornecido, sincroniza o estado interno com este valor.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Desativa o checkbox e bloqueia qualquer interação.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},indeterminate:{control:"boolean",description:"Renderiza o checkbox no estado indeterminado (misto). Use em padrões de 'selecionar todos' quando apenas alguns filhos estão selecionados.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},noEvents:{control:"boolean",description:"Suprime eventos de ponteiro no wrapper. O checkbox fica visualmente interativo mas não é clicável. Use ao construir uma camada de interação customizada.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},required:{control:"boolean",description:"Marca o checkbox como obrigatório em contexto de formulário.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},onUpdate:{action:"onUpdate",description:"Callback disparado quando o estado muda. Recebe o novo valor booleano.",table:{type:{summary:"(value: boolean) => void"}}},id:{control:"text",description:"ID explícito para o `<input>`. Quando omitido, um ID estável é gerado automaticamente.",table:{type:{summary:"string"}}},name:{control:"text",description:"Atributo `name` repassado ao `<input>` — usado para agrupar checkboxes em formulários.",table:{type:{summary:"string"}}},value:{control:"text",description:"Valor enviado com o formulário quando o checkbox está marcado.",table:{type:{summary:"string"}}}}},n={name:"Default",args:{label:"Aceitar termos e condições",modelValue:!1,disabled:!1,indeterminate:!1}},l={name:"Estado — marcado",args:{label:"Receber novidades por e-mail",modelValue:!0}},i={name:"Estado — indeterminado",args:{label:"Selecionar todos",indeterminate:!0}},c={name:"Estado — desabilitado",args:{label:"Opção indisponível",disabled:!0}},m={name:"Estado — desabilitado (marcado)",args:{label:"Configuração bloqueada",modelValue:!0,disabled:!0}},p={name:"Sem label",args:{}},u={name:"Controlado (com estado externo)",render:()=>{const[a,r]=g.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(o,{label:"Concordo com os termos de uso",modelValue:a,onUpdate:r}),e.jsxs("small",{style:{color:"var(--s-color-content-default)"},children:["Valor atual: ",a?"marcado":"desmarcado"]})]})}},v={name:"Padrão — selecionar todos",render:()=>{const a=["Opção A","Opção B","Opção C"],[r,t]=g.useState([]),d=r.length===a.length,x=r.length>0&&!d,Ce=s=>{t(s?[...a]:[])},Se=(s,h)=>{t(ke=>h?[...ke,s]:ke.filter(De=>De!==s))};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(o,{label:"Selecionar todos",modelValue:d,indeterminate:x,onUpdate:Ce}),e.jsx("div",{style:{paddingLeft:"var(--s-spacing-medium)",display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:a.map(s=>e.jsx(o,{label:s,modelValue:r.includes(s),onUpdate:h=>Se(s,h)},s))})]})}},b={name:"Contexto real — formulário de preferências",render:()=>{const[a,r]=g.useState({email:!0,sms:!1,push:!0}),t=d=>r(x=>({...x,[d]:!x[d]}));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx("p",{children:"Notificações"}),e.jsx(o,{label:"Receber por e-mail",modelValue:a.email,onUpdate:()=>t("email")}),e.jsx(o,{label:"Receber por SMS",modelValue:a.sms,onUpdate:()=>t("sms")}),e.jsx(o,{label:"Notificações push",modelValue:a.push,onUpdate:()=>t("push")})]})}},_={name:"Contexto real — aceite de termos",render:()=>{const[a,r]=g.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(o,{label:"Li e aceito os Termos de Uso e a Política de Privacidade",modelValue:a,onUpdate:r,required:!0}),e.jsx("div",{style:{width:"fit-content"},children:e.jsx(Ve,{disabled:!a,children:"Criar conta"})})]})}},f={name:"Matriz — todos os estados",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(o,{label:"Desmarcado (padrão)",modelValue:!1}),e.jsx(o,{label:"Marcado",modelValue:!0}),e.jsx(o,{label:"Indeterminado",indeterminate:!0}),e.jsx(o,{label:"Desabilitado (desmarcado)",disabled:!0}),e.jsx(o,{label:"Desabilitado (marcado)",modelValue:!0,disabled:!0})]})};n.parameters={...n.parameters,docs:{...(y=n.parameters)===null||y===void 0?void 0:y.docs,source:{originalSource:`{
  name: "Default",
  args: {
    label: "Aceitar termos e condições",
    modelValue: false,
    disabled: false,
    indeterminate: false
  }
}`,...(C=n.parameters)===null||C===void 0||(k=C.docs)===null||k===void 0?void 0:k.source},description:{story:`Story interativa para explorar todas as props via Controls.\r
Ponto de entrada recomendado para inspecionar o componente.`,...(D=n.parameters)===null||D===void 0||(S=D.docs)===null||S===void 0?void 0:S.description}}};l.parameters={...l.parameters,docs:{...(V=l.parameters)===null||V===void 0?void 0:V.docs,source:{originalSource:`{
  name: "Estado — marcado",
  args: {
    label: "Receber novidades por e-mail",
    modelValue: true
  }
}`,...(j=l.parameters)===null||j===void 0||(A=j.docs)===null||A===void 0?void 0:A.source},description:{story:"Estado marcado — `modelValue: true`.\r\nUse para pré-selecionar uma opção quando o valor inicial já é conhecido.",...(q=l.parameters)===null||q===void 0||(U=q.docs)===null||U===void 0?void 0:U.description}}};i.parameters={...i.parameters,docs:{...(E=i.parameters)===null||E===void 0?void 0:E.docs,source:{originalSource:`{
  name: "Estado — indeterminado",
  args: {
    label: "Selecionar todos",
    indeterminate: true
  }
}`,...(O=i.parameters)===null||O===void 0||(P=O.docs)===null||P===void 0?void 0:P.source},description:{story:'Estado indeterminado — checkbox no estado misto via prop `indeterminate`.\r\nAplicado via propriedade DOM nativa `el.indeterminate`.\r\nUse exclusivamente em checkboxes "pai" de um grupo onde apenas alguns filhos estão selecionados.',...(I=i.parameters)===null||I===void 0||(T=I.docs)===null||T===void 0?void 0:T.description}}};c.parameters={...c.parameters,docs:{...(L=c.parameters)===null||L===void 0?void 0:L.docs,source:{originalSource:`{
  name: "Estado — desabilitado",
  args: {
    label: "Opção indisponível",
    disabled: true
  }
}`,...(z=c.parameters)===null||z===void 0||(N=z.docs)===null||N===void 0?void 0:N.source},description:{story:`Estado desabilitado e desmarcado.\r
O checkbox fica visualmente inativo e não responde a interações.`,...(R=c.parameters)===null||R===void 0||(M=R.docs)===null||M===void 0?void 0:M.description}}};m.parameters={...m.parameters,docs:{...(B=m.parameters)===null||B===void 0?void 0:B.docs,source:{originalSource:`{
  name: "Estado — desabilitado (marcado)",
  args: {
    label: "Configuração bloqueada",
    modelValue: true,
    disabled: true
  }
}`,...(w=m.parameters)===null||w===void 0||(F=w.docs)===null||F===void 0?void 0:F.source},description:{story:`Estado desabilitado e marcado.\r
Use para configurações bloqueadas que não podem ser alteradas pelo usuário.`,...(Q=m.parameters)===null||Q===void 0||(G=Q.docs)===null||G===void 0?void 0:G.description}}};p.parameters={...p.parameters,docs:{...(Z=p.parameters)===null||Z===void 0?void 0:Z.docs,source:{originalSource:`{
  name: "Sem label",
  args: {}
}`,...(W=p.parameters)===null||W===void 0||(H=W.docs)===null||H===void 0?void 0:H.source},description:{story:"Sem label — apenas o checkbox é renderizado.\r\nGaranta contexto acessível via `aria-label` no elemento pai quando usar sem label.",...(K=p.parameters)===null||K===void 0||(J=K.docs)===null||J===void 0?void 0:J.description}}};u.parameters={...u.parameters,docs:{...(X=u.parameters)===null||X===void 0?void 0:X.docs,source:{originalSource:`{
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
}`,...($=u.parameters)===null||$===void 0||(Y=$.docs)===null||Y===void 0?void 0:Y.source},description:{story:"Uso controlado com estado externo via `useState`.\r\nDemonstra o padrão correto de uso em formulários:\r\n`modelValue` recebe o estado e `onUpdate` atualiza o mesmo.",...(ae=u.parameters)===null||ae===void 0||(ee=ae.docs)===null||ee===void 0?void 0:ee.description}}};v.parameters={...v.parameters,docs:{...(oe=v.parameters)===null||oe===void 0?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=v.parameters)===null||se===void 0||(re=se.docs)===null||re===void 0?void 0:re.source},description:{story:'Padrão "selecionar todos" com estado indeterminado no checkbox pai.\r\nO pai exibe `indeterminate` quando apenas alguns filhos estão selecionados,\r\n`modelValue: true` quando todos estão, e `false` quando nenhum está.',...(de=v.parameters)===null||de===void 0||(te=de.docs)===null||te===void 0?void 0:te.description}}};b.parameters={...b.parameters,docs:{...(ne=b.parameters)===null||ne===void 0?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ie=b.parameters)===null||ie===void 0||(le=ie.docs)===null||le===void 0?void 0:le.source},description:{story:`Grupo de checkboxes em formulário de preferências.\r
Demonstra o uso de múltiplos checkboxes independentes em contexto real.`,...(me=b.parameters)===null||me===void 0||(ce=me.docs)===null||ce===void 0?void 0:ce.description}}};_.parameters={..._.parameters,docs:{...(pe=_.parameters)===null||pe===void 0?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ve=_.parameters)===null||ve===void 0||(ue=ve.docs)===null||ue===void 0?void 0:ue.source},description:{story:"Checkbox de aceite de termos em formulário de cadastro.\r\nDemonstra o uso do `required` e o bloqueio de submissão sem aceite.",...(_e=_.parameters)===null||_e===void 0||(be=_e.docs)===null||be===void 0?void 0:be.description}}};f.parameters={...f.parameters,docs:{...(fe=f.parameters)===null||fe===void 0?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ge=f.parameters)===null||ge===void 0||(xe=ge.docs)===null||xe===void 0?void 0:xe.source},description:{story:`Todos os estados visuais lado a lado para validação rápida\r
após alterações de token ou tema.`,...(ye=f.parameters)===null||ye===void 0||(he=ye.docs)===null||he===void 0?void 0:he.description}}};const Le=["Default","Checked","Indeterminate","Disabled","DisabledChecked","NoLabel","Controlled","SelectAll","PreferencesForm","TermsAcceptance","AllStates"];export{f as AllStates,l as Checked,u as Controlled,n as Default,c as Disabled,m as DisabledChecked,i as Indeterminate,p as NoLabel,b as PreferencesForm,v as SelectAll,_ as TermsAcceptance,Le as __namedExportsOrder,Ie as default};
