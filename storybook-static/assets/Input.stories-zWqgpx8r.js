import{j as e,r as je}from"./iframe-C_0AXUlQ.js";/* empty css               */import{I as o}from"./Input-jL10LS7k.js";import"./preload-helper-PPVm8Dsz.js";import"./Skeleton-DNOAWNPr.js";import"./Icon-C3Uq1gPi.js";var b,h,y,f,E,S,I,C,D,F,k,j,w,V,N,B,W,q,T,L,U,z,P,R,A,O,J,M,H,Q,G,K,Y,X,Z,$,ee,oe,ae,re,le,se,ne,te,ie,de,me,ce,pe,ue,ve,_e,ge,xe,be,he,ye,fe,Ee,Se,Ie,Ce,De,Fe,ke;const Ue={title:"Components/Input",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'\nO **Input** é um campo de texto flexível com suporte a ícones, toggle de senha,\nvalidação inline e estado de skeleton.\n\nO `label` é automaticamente associado ao `<input>` via `htmlFor` / `id`\ngerado por `useId()`, satisfazendo o WCAG 2.1 SC 1.3.1.\n\n### Tipos disponíveis\nAceita qualquer `type` nativo do `<input>` HTML. O tipo `"password"` ativa\nautomaticamente o toggle de visibilidade — o ícone de olho substitui o `icon`.\n\n### Quando usar\n- Qualquer campo de texto livre em formulários\n- Campos de senha com toggle de visibilidade\n- Campos com feedback de validação inline\n- Estados de carregamento onde o formulário ainda não está pronto\n\n### Boas práticas\n- Forneça sempre um `label` — é obrigatório para acessibilidade\n- Use `error` + `textError` juntos para comunicar falhas de validação\n- Use `icon` para reforçar o propósito do campo (ex: `"mail"`, `"search"`)\n- Prefira `skeleton` durante carregamento assíncrono em vez de ocultar o campo\n        '}},design:{type:"figma",url:"https://figma.com/file/SEU_FILE_KEY/Input?node-id=NODE_ID"}},argTypes:{label:{control:"text",description:"Label exibido acima do campo. Associado ao `<input>` via `htmlFor` / `id` automaticamente.",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Texto exibido dentro do campo quando está vazio.",table:{type:{summary:"string"}}},type:{control:"select",options:["text","password","email","number","tel","url"],description:"Tipo nativo do `<input>`. O tipo `password` ativa o toggle de visibilidade automaticamente.",table:{type:{summary:'"text" | "password" | "email" | "number" | "tel" | "url"'}}},icon:{control:"text",description:'Nome do ícone Material Symbol renderizado à direita do campo. Ignorado quando `type="password"`.',table:{type:{summary:"string"}}},fillIcon:{control:"boolean",description:"Renderiza o ícone no variante preenchido.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},error:{control:"boolean",description:"Aplica estilo de erro ao campo. Use junto com `textError`.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},textError:{control:"text",description:"Mensagem de validação exibida abaixo do campo quando `error` é `true`.",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"Desativa o campo e bloqueia toda interação.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},skeleton:{control:"boolean",description:"Substitui o campo por um `<Skeleton>` com as mesmas dimensões. Use durante carregamento assíncrono.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},value:{control:"text",description:"Valor controlado externamente.",table:{type:{summary:"string"}}}},decorators:[a=>e.jsx("div",{style:{minWidth:"300px"},children:e.jsx(a,{})})]},r={name:"Default",args:{label:"E-mail",icon:"mail",placeholder:"voce@exemplo.com"}},l={name:"Tipo — sem ícone",args:{label:"Nome completo",placeholder:"Ex: Jane Doe"}},s={name:"Tipo — senha (com toggle)",args:{label:"Senha",type:"password",placeholder:"••••••••"}},n={name:"Tipo — e-mail",args:{label:"Endereço de e-mail",icon:"mail",type:"email",placeholder:"voce@exemplo.com"}},t={name:"Estado — erro",args:{label:"Nome de usuário",icon:"person",value:"usuario_existente",error:!0,textError:"Este nome de usuário já está em uso."}},i={name:"Estado — desabilitado",args:{label:"ID da conta",icon:"badge",value:"ACC-00421",disabled:!0}},d={name:"Estado — skeleton",args:{label:"Carregando campo...",skeleton:!0}},m={name:"Ícone — preenchido (fillIcon)",args:{label:"Buscar",icon:"search",fillIcon:!0,placeholder:"Buscar..."}},c={name:"Controlado — com estado externo",render:()=>{const[a,x]=je.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsx(o,{label:"Nome",placeholder:"Digite seu nome",value:a,onChange:g=>x(g.target.value)}),e.jsxs("small",{children:["Valor atual: ",e.jsx("strong",{children:a||"vazio"})]})]})}},p={name:"Controlado — validação no blur",render:()=>{const[a,x]=je.useState(""),[g,we]=je.useState(!1);return e.jsx(o,{label:"E-mail",icon:"mail",type:"email",placeholder:"voce@exemplo.com",value:a,error:g,textError:"Campo obrigatório.",onChange:Ve=>{x(Ve.target.value),g&&we(!1)},onBlur:()=>we(a.trim().length===0)})}},u={name:"Contexto real — formulário de login",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",width:"300px"},children:[e.jsx(o,{label:"E-mail",icon:"mail",type:"email",placeholder:"voce@exemplo.com"}),e.jsx(o,{label:"Senha",type:"password",placeholder:"••••••••"})]})},v={name:"Contexto real — formulário de cadastro",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",width:"300px"},children:[e.jsx(o,{label:"Nome",icon:"person",placeholder:"Jane"}),e.jsx(o,{label:"Sobrenome",icon:"person",placeholder:"Doe"}),e.jsx(o,{label:"E-mail",icon:"mail",type:"email",placeholder:"jane@exemplo.com"}),e.jsx(o,{label:"Senha",type:"password"})]})},_={name:"Contexto real — formulário em carregamento",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)",width:"300px"},children:[e.jsx(o,{label:"Nome",skeleton:!0}),e.jsx(o,{label:"E-mail",skeleton:!0}),e.jsx(o,{label:"Cargo",skeleton:!0})]})};r.parameters={...r.parameters,docs:{...(b=r.parameters)===null||b===void 0?void 0:b.docs,source:{originalSource:`{
  name: "Default",
  args: {
    label: "E-mail",
    icon: "mail",
    placeholder: "voce@exemplo.com"
  }
}`,...(y=r.parameters)===null||y===void 0||(h=y.docs)===null||h===void 0?void 0:h.source},description:{story:`Campo de texto padrão com label, ícone e placeholder.\r
Use os Controls para explorar todas as props disponíveis.`,...(E=r.parameters)===null||E===void 0||(f=E.docs)===null||f===void 0?void 0:f.description}}};l.parameters={...l.parameters,docs:{...(S=l.parameters)===null||S===void 0?void 0:S.docs,source:{originalSource:`{
  name: "Tipo — sem ícone",
  args: {
    label: "Nome completo",
    placeholder: "Ex: Jane Doe"
  }
}`,...(C=l.parameters)===null||C===void 0||(I=C.docs)===null||I===void 0?void 0:I.source},description:{story:`Campo sem ícone — apenas label e placeholder.\r
Use quando o contexto do campo já é autoexplicativo.`,...(F=l.parameters)===null||F===void 0||(D=F.docs)===null||D===void 0?void 0:D.description}}};s.parameters={...s.parameters,docs:{...(k=s.parameters)===null||k===void 0?void 0:k.docs,source:{originalSource:`{
  name: "Tipo — senha (com toggle)",
  args: {
    label: "Senha",
    type: "password",
    placeholder: "••••••••"
  }
}`,...(w=s.parameters)===null||w===void 0||(j=w.docs)===null||j===void 0?void 0:j.source},description:{story:"Campo de senha — o toggle de visibilidade substitui automaticamente o `icon`.\r\nClique no ícone do olho para alternar entre ocultar e exibir a senha.",...(N=s.parameters)===null||N===void 0||(V=N.docs)===null||V===void 0?void 0:V.description}}};n.parameters={...n.parameters,docs:{...(B=n.parameters)===null||B===void 0?void 0:B.docs,source:{originalSource:`{
  name: "Tipo — e-mail",
  args: {
    label: "Endereço de e-mail",
    icon: "mail",
    type: "email",
    placeholder: "voce@exemplo.com"
  }
}`,...(q=n.parameters)===null||q===void 0||(W=q.docs)===null||W===void 0?void 0:W.source},description:{story:"Campo de e-mail com tipo nativo `email`.\r\nAtiva a validação nativa do browser e o teclado de e-mail em mobile.",...(L=n.parameters)===null||L===void 0||(T=L.docs)===null||T===void 0?void 0:T.description}}};t.parameters={...t.parameters,docs:{...(U=t.parameters)===null||U===void 0?void 0:U.docs,source:{originalSource:`{
  name: "Estado — erro",
  args: {
    label: "Nome de usuário",
    icon: "person",
    value: "usuario_existente",
    error: true,
    textError: "Este nome de usuário já está em uso."
  }
}`,...(P=t.parameters)===null||P===void 0||(z=P.docs)===null||z===void 0?void 0:z.source},description:{story:"Estado de erro com mensagem de validação inline.\r\nUse `error` + `textError` juntos — nunca um sem o outro.",...(A=t.parameters)===null||A===void 0||(R=A.docs)===null||R===void 0?void 0:R.description}}};i.parameters={...i.parameters,docs:{...(O=i.parameters)===null||O===void 0?void 0:O.docs,source:{originalSource:`{
  name: "Estado — desabilitado",
  args: {
    label: "ID da conta",
    icon: "badge",
    value: "ACC-00421",
    disabled: true
  }
}`,...(M=i.parameters)===null||M===void 0||(J=M.docs)===null||J===void 0?void 0:J.source},description:{story:"Estado desabilitado — campo inativo com opacidade reduzida.\r\nBloqueia toda interação via atributo HTML `disabled`.",...(Q=i.parameters)===null||Q===void 0||(H=Q.docs)===null||H===void 0?void 0:H.description}}};d.parameters={...d.parameters,docs:{...(G=d.parameters)===null||G===void 0?void 0:G.docs,source:{originalSource:`{
  name: "Estado — skeleton",
  args: {
    label: "Carregando campo...",
    skeleton: true
  }
}`,...(Y=d.parameters)===null||Y===void 0||(K=Y.docs)===null||K===void 0?void 0:K.source},description:{story:`Estado skeleton — placeholder com as dimensões exatas do campo.\r
Evita layout shift quando o formulário carrega assincronamente.`,...(Z=d.parameters)===null||Z===void 0||(X=Z.docs)===null||X===void 0?void 0:X.description}}};m.parameters={...m.parameters,docs:{...($=m.parameters)===null||$===void 0?void 0:$.docs,source:{originalSource:`{
  name: "Ícone — preenchido (fillIcon)",
  args: {
    label: "Buscar",
    icon: "search",
    fillIcon: true,
    placeholder: "Buscar..."
  }
}`,...(oe=m.parameters)===null||oe===void 0||(ee=oe.docs)===null||ee===void 0?void 0:ee.source},description:{story:"Ícone preenchido via `fillIcon: true`.\r\nUse de forma consistente — evite misturar outlined e filled no mesmo formulário.",...(re=m.parameters)===null||re===void 0||(ae=re.docs)===null||ae===void 0?void 0:ae.description}}};c.parameters={...c.parameters,docs:{...(le=c.parameters)===null||le===void 0?void 0:le.docs,source:{originalSource:`{
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
}`,...(ne=c.parameters)===null||ne===void 0||(se=ne.docs)===null||se===void 0?void 0:se.source},description:{story:"Campo controlado com estado externo via `useState`.\r\nO valor digitado é exibido em tempo real abaixo do campo.",...(ie=c.parameters)===null||ie===void 0||(te=ie.docs)===null||te===void 0?void 0:te.description}}};p.parameters={...p.parameters,docs:{...(de=p.parameters)===null||de===void 0?void 0:de.docs,source:{originalSource:`{
  name: "Controlado — validação no blur",
  render: () => {
    const [valor, setValor] = useState("");
    const [erro, setErro] = useState(false);
    return <Input label="E-mail" icon="mail" type="email" placeholder="voce@exemplo.com" value={valor} error={erro} textError="Campo obrigatório." onChange={e => {
      setValor(e.target.value);
      if (erro) setErro(false);
    }} onBlur={() => setErro(valor.trim().length === 0)} />;
  }
}`,...(ce=p.parameters)===null||ce===void 0||(me=ce.docs)===null||me===void 0?void 0:me.source},description:{story:"Validação ao sair do campo (`onBlur`).\r\nO erro é ativado quando o campo perde o foco vazio e desativado ao digitar.",...(ue=p.parameters)===null||ue===void 0||(pe=ue.docs)===null||pe===void 0?void 0:pe.description}}};u.parameters={...u.parameters,docs:{...(ve=u.parameters)===null||ve===void 0?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ge=u.parameters)===null||ge===void 0||(_e=ge.docs)===null||_e===void 0?void 0:_e.source},description:{story:"Formulário de login completo com campos de e-mail e senha.\r\nCada campo recebe um `id` único via `useId()` — sem conflito de labels.",...(be=u.parameters)===null||be===void 0||(xe=be.docs)===null||xe===void 0?void 0:xe.description}}};v.parameters={...v.parameters,docs:{...(he=v.parameters)===null||he===void 0?void 0:he.docs,source:{originalSource:`{
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
}`,...(fe=v.parameters)===null||fe===void 0||(ye=fe.docs)===null||ye===void 0?void 0:ye.source},description:{story:"Formulário de cadastro com múltiplos campos.\r\nDemonstra que cada `Input` é independente e acessível mesmo quando múltiplas\r\ninstâncias coexistem na mesma página.",...(Se=v.parameters)===null||Se===void 0||(Ee=Se.docs)===null||Ee===void 0?void 0:Ee.description}}};_.parameters={..._.parameters,docs:{...(Ie=_.parameters)===null||Ie===void 0?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(De=_.parameters)===null||De===void 0||(Ce=De.docs)===null||Ce===void 0?void 0:Ce.source},description:{story:`Formulário em estado de carregamento — todos os campos exibem skeleton.\r
Use enquanto os dados do formulário ainda estão sendo buscados da API.`,...(ke=_.parameters)===null||ke===void 0||(Fe=ke.docs)===null||Fe===void 0?void 0:Fe.description}}};const ze=["Default","NoIcon","Password","Email","WithError","Disabled","Skeleton","FilledIcon","Controlled","WithBlurValidation","LoginForm","RegisterForm","SkeletonForm"];export{c as Controlled,r as Default,i as Disabled,n as Email,m as FilledIcon,u as LoginForm,l as NoIcon,s as Password,v as RegisterForm,d as Skeleton,_ as SkeletonForm,p as WithBlurValidation,t as WithError,ze as __namedExportsOrder,Ue as default};
