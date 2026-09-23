import{j as a,r}from"./iframe-CxNvl9BI.js";/* empty css               */import{D as n}from"./DatePicker-CyJ6_gtJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Input-BjLLbLDi.js";import"./Skeleton-C80QNm7w.js";import"./Icon-Bqm0CoJD.js";import"./ButtonIcon-BvrW2_xY.js";import"./Button-CH6qqEEx.js";import"./Loading-DhvOqAup.js";const j={title:"Components/DatePicker",component:n,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
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
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1320-551"}},argTypes:{label:{control:"text",description:"Label exibido acima do campo de entrada.",table:{type:{summary:"string"}}},value:{control:"text",description:"Valor controlado no formato `DD/MM/YYYY`. Quando fornecido, inicializa o campo com esta data.",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"Desativa o campo e impede a interação com o calendário.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},skeleton:{control:"boolean",description:"Renderiza o campo em estado de skeleton/carregamento.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},onChange:{action:"onChange",description:"Callback disparado quando a data muda. Recebe a string no formato `DD/MM/YYYY`.",table:{type:{summary:"(value: string) => void"}}}},decorators:[e=>a.jsx("div",{style:{minHeight:"400px",maxWidth:"200px"},children:a.jsx(e,{})})]},s={name:"Default",args:{label:"Selecione uma data",onChange:()=>{}}},i={name:"Estado — com valor inicial",args:{label:"Data de nascimento",value:"15/06/1990",onChange:()=>{}}},d={name:"Estado — desabilitado",args:{label:"Data (bloqueada)",value:"01/01/2025",disabled:!0,onChange:()=>{}}},l={name:"Estado — skeleton",args:{label:"Carregando data...",skeleton:!0,onChange:()=>{}}},c={name:"Controlado — com estado externo",render:()=>{const[e,o]=r.useState("01/01/2025");return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[a.jsx(n,{label:"Data do agendamento",value:e,onChange:o}),a.jsxs("small",{children:["Valor atual: ",a.jsx("strong",{children:e})]})]})}},m={name:"Validação — data inválida",render:()=>{const[e,o]=r.useState("");return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[a.jsx(n,{label:"Data de vencimento",value:e,onChange:o}),a.jsxs("small",{children:["Tente digitar: ",a.jsx("strong",{children:"31/02/2025"})]})]})}},p={name:"Contexto real — intervalo de datas",decorators:[e=>a.jsx("div",{style:{minHeight:"380px",maxWidth:"640px"},children:a.jsx(e,{})})],render:()=>{const[e,o]=r.useState(""),[t,g]=r.useState("");return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[a.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-medium)"},children:[a.jsx(n,{label:"Data inicial",value:e,onChange:o}),a.jsx(n,{label:"Data final",value:t,onChange:g})]}),e&&t&&a.jsxs("small",{children:["Período: ",a.jsx("strong",{children:e})," até ",a.jsx("strong",{children:t})]})]})}},u={name:"Contexto real — em formulário",render:()=>{const[e,o]=r.useState(""),[t,g]=r.useState(!1);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",maxWidth:"320px"},children:[a.jsx(n,{label:"Data de nascimento",value:e,onChange:o}),a.jsx("div",{style:{width:"fit-content"},children:a.jsx("button",{onClick:()=>g(!0),disabled:!e||e.length<10,style:{padding:"var(--s-spacing-xx-small) var(--s-spacing-x-small)",background:!e||e.length<10?"var(--s-color-fill-disable)":"var(--s-color-fill-highlight)",color:!e||e.length<10?"var(--s-color-content-disable)":"var(--s-color-content-on-color)",border:"none",borderRadius:"var(--s-border-radius-medium)",cursor:!e||e.length<10?"not-allowed":"pointer",font:"var(--s-typography-label-medium)"},children:"Continuar"})}),t&&a.jsxs("small",{children:["Nascimento registrado: ",a.jsx("strong",{children:e})]})]})}},k=["Default","WithValue","Disabled","Skeleton","Controlled","WithValidation","DateRange","InForm"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    label: "Selecione uma data",
    onChange: () => {}
  }
}`,...s.parameters?.docs?.source},description:{story:`Estado base sem valor pré-preenchido.\r
O campo inicializa com a data de hoje.\r
Clique no campo ou no ícone de calendário para abrir o seletor.`,...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Estado — com valor inicial",
  args: {
    label: "Data de nascimento",
    value: "15/06/1990",
    onChange: () => {}
  }
}`,...i.parameters?.docs?.source},description:{story:"Campo com valor pré-preenchido via prop `value`.\r\nUse para inicializar o campo com uma data conhecida (ex: data de criação do registro).",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Estado — desabilitado",
  args: {
    label: "Data (bloqueada)",
    value: "01/01/2025",
    disabled: true,
    onChange: () => {}
  }
}`,...d.parameters?.docs?.source},description:{story:`Estado desabilitado — campo e calendário inativos.\r
Use quando a data não pode ser alterada no contexto atual.`,...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Estado — skeleton",
  args: {
    label: "Carregando data...",
    skeleton: true,
    onChange: () => {}
  }
}`,...l.parameters?.docs?.source},description:{story:`Estado skeleton — campo em carregamento.\r
Use enquanto os dados do formulário ainda estão sendo buscados.`,...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"Uso totalmente controlado com `value` + `onChange`.\r\nO valor exibido abaixo do campo sincroniza em tempo real com\r\nqualquer alteração feita por digitação ou seleção no calendário.",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"Validação inline de data inválida.\r\nDigite uma data impossível (ex: `31/02/2025`) para ver a mensagem de erro.\r\nO erro é exibido ao completar os 10 caracteres da máscara.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`Seleção de intervalo de datas — dois campos independentes lado a lado.\r
Cada campo tem seu próprio estado e calendário.\r
Padrão comum em filtros de relatório e reservas.`,...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`Campo de data em formulário de cadastro.\r
Demonstra o uso integrado com outros campos e o botão de submissão.`,...u.parameters?.docs?.description}}};export{c as Controlled,p as DateRange,s as Default,d as Disabled,u as InForm,l as Skeleton,m as WithValidation,i as WithValue,k as __namedExportsOrder,j as default};
