import{j as e,r}from"./iframe-Cuzq1CpA.js";/* empty css               */import{D as t}from"./DatePicker-C1exeI96.js";import"./preload-helper-PPVm8Dsz.js";import"./Input-D7ShjDHo.js";import"./Skeleton-BVkqHP_m.js";import"./Icon-C2kFcyns.js";import"./ButtonIcon-g9GE-hSP.js";import"./Button-BQCy7vfT.js";import"./Loading-CnlAraZ4.js";var g,h,_,b,x,D,f,y,C,S,k,j,V,W,E,Y,q,P,R,w,z,F,M,O,I,Q,B,H,U,T,G,L,N,Z,A,J,K,X,$,ee;const me={title:"Components/DatePicker",component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
O **DatePicker** é um campo de entrada de data com calendário dropdown integrado.

O usuário pode digitar a data diretamente (auto-mascarada como \`DD/MM/YYYY\`)
ou selecioná-la visualmente no calendário. O calendário suporta navegação por
mês/ano via setas e um painel dedicado de mês+ano para navegação rápida em
longos intervalos de tempo.

### Entrada por digitação
- Auto-mascara a entrada no formato \`DD/MM/YYYY\` à medida que o usuário digita
- Backspace remove o último dígito respeitando a máscara
- Exibe mensagem de erro inline para datas inválidas (ex: \`31/02/2025\`)

### Calendário
- Clique no ícone do calendário ou no campo para abrir/fechar
- Clique no mês/ano no cabeçalho para alternar para o painel de seleção rápida
- "Reset" retorna para a data de hoje; "Done" confirma e fecha o calendário

### Quando usar
- Formulários que requerem uma data específica (nascimento, prazo, agendamento)
- Quando tanto a entrada digitada quanto a visual são úteis ao usuário
- Quando feedback de validação inline é necessário

### Quando não usar
- Quando apenas mês ou ano é necessário — use selects simples
- Para intervalos de datas — use dois campos \`DatePicker\` independentes
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1320-551"}},argTypes:{label:{control:"text",description:"Label exibido acima do campo de entrada.",table:{type:{summary:"string"}}},value:{control:"text",description:"Valor controlado no formato `DD/MM/YYYY`. Quando fornecido, inicializa o campo com esta data.",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"Desativa o campo e impede a interação com o calendário.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},skeleton:{control:"boolean",description:"Renderiza o campo em estado de skeleton/carregamento.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},onChange:{action:"onChange",description:"Callback disparado quando a data muda. Recebe a string no formato `DD/MM/YYYY`.",table:{type:{summary:"(value: string) => void"}}}},decorators:[a=>e.jsx("div",{style:{minHeight:"400px",maxWidth:"200px"},children:e.jsx(a,{})})]},s={name:"Default",args:{label:"Selecione uma data",onChange:()=>{}}},i={name:"Estado — com valor inicial",args:{label:"Data de nascimento",value:"15/06/1990",onChange:()=>{}}},d={name:"Estado — desabilitado",args:{label:"Data (bloqueada)",value:"01/01/2025",disabled:!0,onChange:()=>{}}},l={name:"Estado — skeleton",args:{label:"Carregando data...",skeleton:!0,onChange:()=>{}}},c={name:"Controlado — com estado externo",render:()=>{const[a,o]=r.useState("01/01/2025");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(t,{label:"Data do agendamento",value:a,onChange:o}),e.jsxs("small",{children:["Valor atual: ",e.jsx("strong",{children:a})]})]})}},m={name:"Validação — data inválida",render:()=>{const[a,o]=r.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(t,{label:"Data de vencimento",value:a,onChange:o}),e.jsxs("small",{children:["Tente digitar: ",e.jsx("strong",{children:"31/02/2025"})]})]})}},p={name:"Contexto real — intervalo de datas",decorators:[a=>e.jsx("div",{style:{minHeight:"380px",maxWidth:"640px"},children:e.jsx(a,{})})],render:()=>{const[a,o]=r.useState(""),[n,v]=r.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-medium)"},children:[e.jsx(t,{label:"Data inicial",value:a,onChange:o}),e.jsx(t,{label:"Data final",value:n,onChange:v})]}),a&&n&&e.jsxs("small",{children:["Período: ",e.jsx("strong",{children:a})," até ",e.jsx("strong",{children:n})]})]})}},u={name:"Contexto real — em formulário",render:()=>{const[a,o]=r.useState(""),[n,v]=r.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",maxWidth:"320px"},children:[e.jsx(t,{label:"Data de nascimento",value:a,onChange:o}),e.jsx("div",{style:{width:"fit-content"},children:e.jsx("button",{onClick:()=>v(!0),disabled:!a||a.length<10,style:{padding:"var(--s-spacing-xx-small) var(--s-spacing-x-small)",background:!a||a.length<10?"var(--s-color-fill-disable)":"var(--s-color-fill-highlight)",color:!a||a.length<10?"var(--s-color-content-disable)":"var(--s-color-content-on-color)",border:"none",borderRadius:"var(--s-border-radius-medium)",cursor:!a||a.length<10?"not-allowed":"pointer",font:"var(--s-typography-label-medium)"},children:"Continuar"})}),n&&e.jsxs("small",{children:["Nascimento registrado: ",e.jsx("strong",{children:a})]})]})}};s.parameters={...s.parameters,docs:{...(g=s.parameters)===null||g===void 0?void 0:g.docs,source:{originalSource:`{
  name: "Default",
  args: {
    label: "Selecione uma data",
    onChange: () => {}
  }
}`,...(_=s.parameters)===null||_===void 0||(h=_.docs)===null||h===void 0?void 0:h.source},description:{story:`Estado base sem valor pré-preenchido.\r
O campo inicializa com a data de hoje.\r
Clique no campo ou no ícone de calendário para abrir o seletor.`,...(x=s.parameters)===null||x===void 0||(b=x.docs)===null||b===void 0?void 0:b.description}}};i.parameters={...i.parameters,docs:{...(D=i.parameters)===null||D===void 0?void 0:D.docs,source:{originalSource:`{
  name: "Estado — com valor inicial",
  args: {
    label: "Data de nascimento",
    value: "15/06/1990",
    onChange: () => {}
  }
}`,...(y=i.parameters)===null||y===void 0||(f=y.docs)===null||f===void 0?void 0:f.source},description:{story:"Campo com valor pré-preenchido via prop `value`.\r\nUse para inicializar o campo com uma data conhecida (ex: data de criação do registro).",...(S=i.parameters)===null||S===void 0||(C=S.docs)===null||C===void 0?void 0:C.description}}};d.parameters={...d.parameters,docs:{...(k=d.parameters)===null||k===void 0?void 0:k.docs,source:{originalSource:`{
  name: "Estado — desabilitado",
  args: {
    label: "Data (bloqueada)",
    value: "01/01/2025",
    disabled: true,
    onChange: () => {}
  }
}`,...(V=d.parameters)===null||V===void 0||(j=V.docs)===null||j===void 0?void 0:j.source},description:{story:`Estado desabilitado — campo e calendário inativos.\r
Use quando a data não pode ser alterada no contexto atual.`,...(E=d.parameters)===null||E===void 0||(W=E.docs)===null||W===void 0?void 0:W.description}}};l.parameters={...l.parameters,docs:{...(Y=l.parameters)===null||Y===void 0?void 0:Y.docs,source:{originalSource:`{
  name: "Estado — skeleton",
  args: {
    label: "Carregando data...",
    skeleton: true,
    onChange: () => {}
  }
}`,...(P=l.parameters)===null||P===void 0||(q=P.docs)===null||q===void 0?void 0:q.source},description:{story:`Estado skeleton — campo em carregamento.\r
Use enquanto os dados do formulário ainda estão sendo buscados.`,...(w=l.parameters)===null||w===void 0||(R=w.docs)===null||R===void 0?void 0:R.description}}};c.parameters={...c.parameters,docs:{...(z=c.parameters)===null||z===void 0?void 0:z.docs,source:{originalSource:`{
  name: "Controlado — com estado externo",
  render: () => {
    const [date, setDate] = useState("01/01/2025");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)"
    }}>\r
        <DatePicker label="Data do agendamento" value={date} onChange={setDate} />\r
        <small>Valor atual: <strong>{date}</strong></small>\r
      </div>;
  }
}`,...(M=c.parameters)===null||M===void 0||(F=M.docs)===null||F===void 0?void 0:F.source},description:{story:"Uso totalmente controlado com `value` + `onChange`.\r\nO valor exibido abaixo do campo sincroniza em tempo real com\r\nqualquer alteração feita por digitação ou seleção no calendário.",...(I=c.parameters)===null||I===void 0||(O=I.docs)===null||O===void 0?void 0:O.description}}};m.parameters={...m.parameters,docs:{...(Q=m.parameters)===null||Q===void 0?void 0:Q.docs,source:{originalSource:`{
  name: "Validação — data inválida",
  render: () => {
    const [date, setDate] = useState("");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)"
    }}>\r
        <DatePicker label="Data de vencimento" value={date} onChange={setDate} />\r
        <small>Tente digitar: <strong>31/02/2025</strong></small>\r
      </div>;
  }
}`,...(H=m.parameters)===null||H===void 0||(B=H.docs)===null||B===void 0?void 0:B.source},description:{story:"Validação inline de data inválida.\r\nDigite uma data impossível (ex: `31/02/2025`) para ver a mensagem de erro.\r\nO erro é exibido ao completar os 10 caracteres da máscara.",...(T=m.parameters)===null||T===void 0||(U=T.docs)===null||U===void 0?void 0:U.description}}};p.parameters={...p.parameters,docs:{...(G=p.parameters)===null||G===void 0?void 0:G.docs,source:{originalSource:`{
  name: "Contexto real — intervalo de datas",
  decorators: [Story => <div style={{
    minHeight: "380px",
    maxWidth: "640px"
  }}>\r
        <Story />\r
      </div>],
  render: () => {
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)"
    }}>\r
        <div style={{
        display: "flex",
        gap: "var(--s-spacing-medium)"
      }}>\r
          <DatePicker label="Data inicial" value={start} onChange={setStart} />\r
          <DatePicker label="Data final" value={end} onChange={setEnd} />\r
        </div>\r
        {start && end && <small>\r
            Período: <strong>{start}</strong> até <strong>{end}</strong>\r
          </small>}\r
      </div>;
  }
}`,...(N=p.parameters)===null||N===void 0||(L=N.docs)===null||L===void 0?void 0:L.source},description:{story:`Seleção de intervalo de datas — dois campos independentes lado a lado.\r
Cada campo tem seu próprio estado e calendário.\r
Padrão comum em filtros de relatório e reservas.`,...(A=p.parameters)===null||A===void 0||(Z=A.docs)===null||Z===void 0?void 0:Z.description}}};u.parameters={...u.parameters,docs:{...(J=u.parameters)===null||J===void 0?void 0:J.docs,source:{originalSource:`{
  name: "Contexto real — em formulário",
  render: () => {
    const [birthdate, setBirthdate] = useState("");
    const [submitted, setSubmitted] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)",
      maxWidth: "320px"
    }}>\r
        <DatePicker label="Data de nascimento" value={birthdate} onChange={setBirthdate} />\r
        <div style={{
        width: "fit-content"
      }}>\r
          <button onClick={() => setSubmitted(true)} disabled={!birthdate || birthdate.length < 10} style={{
          padding: "var(--s-spacing-xx-small) var(--s-spacing-x-small)",
          background: !birthdate || birthdate.length < 10 ? "var(--s-color-fill-disable)" : "var(--s-color-fill-highlight)",
          color: !birthdate || birthdate.length < 10 ? "var(--s-color-content-disable)" : "var(--s-color-content-on-color)",
          border: "none",
          borderRadius: "var(--s-border-radius-medium)",
          cursor: !birthdate || birthdate.length < 10 ? "not-allowed" : "pointer",
          font: "var(--s-typography-label-medium)"
        }}>\r
            Continuar\r
          </button>\r
        </div>\r
        {submitted && <small>Nascimento registrado: <strong>{birthdate}</strong></small>}\r
      </div>;
  }
}`,...(X=u.parameters)===null||X===void 0||(K=X.docs)===null||K===void 0?void 0:K.source},description:{story:`Campo de data em formulário de cadastro.\r
Demonstra o uso integrado com outros campos e o botão de submissão.`,...(ee=u.parameters)===null||ee===void 0||($=ee.docs)===null||$===void 0?void 0:$.description}}};const pe=["Default","WithValue","Disabled","Skeleton","Controlled","WithValidation","DateRange","InForm"];export{c as Controlled,p as DateRange,s as Default,d as Disabled,u as InForm,l as Skeleton,m as WithValidation,i as WithValue,pe as __namedExportsOrder,me as default};
