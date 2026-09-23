import{j as e,r as E}from"./iframe-CxNvl9BI.js";/* empty css               */import{I as o}from"./Input-BjLLbLDi.js";import"./preload-helper-PPVm8Dsz.js";import"./Skeleton-C80QNm7w.js";import"./Icon-Bqm0CoJD.js";const k={title:"Components/Input",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'\nO **Input** é um campo de texto flexível com suporte a ícones, toggle de senha,\nvalidação inline e estado de skeleton.\n\nO `label` é automaticamente associado ao `<input>` via `htmlFor` / `id`\ngerado por `useId()`, satisfazendo o WCAG 2.1 SC 1.3.1.\n\n### Tipos disponíveis\nAceita qualquer `type` nativo do `<input>` HTML. O tipo `"password"` ativa\nautomaticamente o toggle de visibilidade — o ícone de olho substitui o `icon`.\n\n### Quando usar\n- Qualquer campo de texto livre em formulários\n- Campos de senha com toggle de visibilidade\n- Campos com feedback de validação inline\n- Estados de carregamento onde o formulário ainda não está pronto\n\n### Boas práticas\n- Forneça sempre um `label` — é obrigatório para acessibilidade\n- Use `error` + `textError` juntos para comunicar falhas de validação\n- Use `icon` para reforçar o propósito do campo (ex: `"mail"`, `"search"`)\n- Prefira `skeleton` durante carregamento assíncrono em vez de ocultar o campo\n        '}},design:{type:"figma",url:"https://figma.com/file/SEU_FILE_KEY/Input?node-id=NODE_ID"}},argTypes:{label:{control:"text",description:"Label exibido acima do campo. Associado ao `<input>` via `htmlFor` / `id` automaticamente.",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Texto exibido dentro do campo quando está vazio.",table:{type:{summary:"string"}}},type:{control:"select",options:["text","password","email","number","tel","url"],description:"Tipo nativo do `<input>`. O tipo `password` ativa o toggle de visibilidade automaticamente.",table:{type:{summary:'"text" | "password" | "email" | "number" | "tel" | "url"'}}},icon:{control:"text",description:'Nome do ícone Material Symbol renderizado à direita do campo. Ignorado quando `type="password"`.',table:{type:{summary:"string"}}},fillIcon:{control:"boolean",description:"Renderiza o ícone no variante preenchido.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},error:{control:"boolean",description:"Aplica estilo de erro ao campo. Use junto com `textError`.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},textError:{control:"text",description:"Mensagem de validação exibida abaixo do campo quando `error` é `true`.",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"Desativa o campo e bloqueia toda interação.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},skeleton:{control:"boolean",description:"Substitui o campo por um `<Skeleton>` com as mesmas dimensões. Use durante carregamento assíncrono.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},value:{control:"text",description:"Valor controlado externamente.",table:{type:{summary:"string"}}}},decorators:[a=>e.jsx("div",{style:{minWidth:"300px"},children:e.jsx(a,{})})]},r={name:"Default",args:{label:"E-mail",icon:"mail",placeholder:"voce@exemplo.com"}},s={name:"Tipo — sem ícone",args:{label:"Nome completo",placeholder:"Ex: Jane Doe"}},n={name:"Tipo — senha (com toggle)",args:{label:"Senha",type:"password",placeholder:"••••••••"}},t={name:"Tipo — e-mail",args:{label:"Endereço de e-mail",icon:"mail",type:"email",placeholder:"voce@exemplo.com"}},l={name:"Estado — erro",args:{label:"Nome de usuário",icon:"person",value:"usuario_existente",error:!0,textError:"Este nome de usuário já está em uso."}},i={name:"Estado — desabilitado",args:{label:"ID da conta",icon:"badge",value:"ACC-00421",disabled:!0}},c={name:"Estado — skeleton",args:{label:"Carregando campo...",skeleton:!0}},d={name:"Ícone — preenchido (fillIcon)",args:{label:"Buscar",icon:"search",fillIcon:!0,placeholder:"Buscar..."}},m={name:"Controlado — com estado externo",render:()=>{const[a,v]=E.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(o,{label:"Nome",placeholder:"Digite seu nome",value:a,onChange:b=>v(b.target.value)}),e.jsxs("small",{children:["Valor atual: ",e.jsx("strong",{children:a||"vazio"})]})]})}},p={name:"Controlado — validação no blur",render:()=>{const[a,v]=E.useState(""),[b,h]=E.useState(!1);return e.jsx(o,{label:"E-mail",icon:"mail",type:"email",placeholder:"voce@exemplo.com",value:a,error:b,textError:"Campo obrigatório.",onChange:y=>{v(y.target.value),b&&h(!1)},onBlur:()=>h(a.trim().length===0)})}},u={name:"Contexto real — formulário de login",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",width:"300px"},children:[e.jsx(o,{label:"E-mail",icon:"mail",type:"email",placeholder:"voce@exemplo.com"}),e.jsx(o,{label:"Senha",type:"password",placeholder:"••••••••"})]})},x={name:"Contexto real — formulário de cadastro",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",width:"300px"},children:[e.jsx(o,{label:"Nome",icon:"person",placeholder:"Jane"}),e.jsx(o,{label:"Sobrenome",icon:"person",placeholder:"Doe"}),e.jsx(o,{label:"E-mail",icon:"mail",type:"email",placeholder:"jane@exemplo.com"}),e.jsx(o,{label:"Senha",type:"password"})]})},g={name:"Contexto real — formulário em carregamento",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",width:"300px"},children:[e.jsx(o,{label:"Nome",skeleton:!0}),e.jsx(o,{label:"E-mail",skeleton:!0}),e.jsx(o,{label:"Cargo",skeleton:!0})]})},w=["Default","NoIcon","Password","Email","WithError","Disabled","Skeleton","FilledIcon","Controlled","WithBlurValidation","LoginForm","RegisterForm","SkeletonForm"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    label: "E-mail",
    icon: "mail",
    placeholder: "voce@exemplo.com"
  }
}`,...r.parameters?.docs?.source},description:{story:`Campo de texto padrão com label, ícone e placeholder.\r
Use os Controls para explorar todas as props disponíveis.`,...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Tipo — sem ícone",
  args: {
    label: "Nome completo",
    placeholder: "Ex: Jane Doe"
  }
}`,...s.parameters?.docs?.source},description:{story:`Campo sem ícone — apenas label e placeholder.\r
Use quando o contexto do campo já é autoexplicativo.`,...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Tipo — senha (com toggle)",
  args: {
    label: "Senha",
    type: "password",
    placeholder: "••••••••"
  }
}`,...n.parameters?.docs?.source},description:{story:"Campo de senha — o toggle de visibilidade substitui automaticamente o `icon`.\r\nClique no ícone do olho para alternar entre ocultar e exibir a senha.",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Tipo — e-mail",
  args: {
    label: "Endereço de e-mail",
    icon: "mail",
    type: "email",
    placeholder: "voce@exemplo.com"
  }
}`,...t.parameters?.docs?.source},description:{story:"Campo de e-mail com tipo nativo `email`.\r\nAtiva a validação nativa do browser e o teclado de e-mail em mobile.",...t.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Estado — erro",
  args: {
    label: "Nome de usuário",
    icon: "person",
    value: "usuario_existente",
    error: true,
    textError: "Este nome de usuário já está em uso."
  }
}`,...l.parameters?.docs?.source},description:{story:"Estado de erro com mensagem de validação inline.\r\nUse `error` + `textError` juntos — nunca um sem o outro.",...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Estado — desabilitado",
  args: {
    label: "ID da conta",
    icon: "badge",
    value: "ACC-00421",
    disabled: true
  }
}`,...i.parameters?.docs?.source},description:{story:"Estado desabilitado — campo inativo com opacidade reduzida.\r\nBloqueia toda interação via atributo HTML `disabled`.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Estado — skeleton",
  args: {
    label: "Carregando campo...",
    skeleton: true
  }
}`,...c.parameters?.docs?.source},description:{story:`Estado skeleton — placeholder com as dimensões exatas do campo.\r
Evita layout shift quando o formulário carrega assincronamente.`,...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Ícone — preenchido (fillIcon)",
  args: {
    label: "Buscar",
    icon: "search",
    fillIcon: true,
    placeholder: "Buscar..."
  }
}`,...d.parameters?.docs?.source},description:{story:"Ícone preenchido via `fillIcon: true`.\r\nUse de forma consistente — evite misturar outlined e filled no mesmo formulário.",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Controlado — com estado externo",
  render: () => {
    const [valor, setValor] = useState("");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)"
    }}>\r
        <Input label="Nome" placeholder="Digite seu nome" value={valor} onChange={e => setValor(e.target.value)} />\r
        <small>\r
          Valor atual: <strong>{valor || "vazio"}</strong>\r
        </small>\r
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:"Campo controlado com estado externo via `useState`.\r\nO valor digitado é exibido em tempo real abaixo do campo.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Controlado — validação no blur",
  render: () => {
    const [valor, setValor] = useState("");
    const [erro, setErro] = useState(false);
    return <Input label="E-mail" icon="mail" type="email" placeholder="voce@exemplo.com" value={valor} error={erro} textError="Campo obrigatório." onChange={e => {
      setValor(e.target.value);
      if (erro) setErro(false);
    }} onBlur={() => setErro(valor.trim().length === 0)} />;
  }
}`,...p.parameters?.docs?.source},description:{story:"Validação ao sair do campo (`onBlur`).\r\nO erro é ativado quando o campo perde o foco vazio e desativado ao digitar.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — formulário de login",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-x-small)",
    width: "300px"
  }}>\r
      <Input label="E-mail" icon="mail" type="email" placeholder="voce@exemplo.com" />\r
      <Input label="Senha" type="password" placeholder="••••••••" />\r
    </div>
}`,...u.parameters?.docs?.source},description:{story:"Formulário de login completo com campos de e-mail e senha.\r\nCada campo recebe um `id` único via `useId()` — sem conflito de labels.",...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — formulário de cadastro",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-x-small)",
    width: "300px"
  }}>\r
      <Input label="Nome" icon="person" placeholder="Jane" />\r
      <Input label="Sobrenome" icon="person" placeholder="Doe" />\r
      <Input label="E-mail" icon="mail" type="email" placeholder="jane@exemplo.com" />\r
      <Input label="Senha" type="password" />\r
    </div>
}`,...x.parameters?.docs?.source},description:{story:"Formulário de cadastro com múltiplos campos.\r\nDemonstra que cada `Input` é independente e acessível mesmo quando múltiplas\r\ninstâncias coexistem na mesma página.",...x.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — formulário em carregamento",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-x-small)",
    width: "300px"
  }}>\r
      <Input label="Nome" skeleton />\r
      <Input label="E-mail" skeleton />\r
      <Input label="Cargo" skeleton />\r
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Formulário em estado de carregamento — todos os campos exibem skeleton.\r
Use enquanto os dados do formulário ainda estão sendo buscados da API.`,...g.parameters?.docs?.description}}};export{m as Controlled,r as Default,i as Disabled,t as Email,d as FilledIcon,u as LoginForm,s as NoIcon,n as Password,x as RegisterForm,c as Skeleton,g as SkeletonForm,p as WithBlurValidation,l as WithError,w as __namedExportsOrder,k as default};
