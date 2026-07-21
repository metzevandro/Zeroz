import{r as d,j as e}from"./iframe-DFdk80Qn.js";import{B as xe}from"./Badge-ov7pbtC0.js";/* empty css               */import{I as _e}from"./Icon-C_kNoyVv.js";import{B as r}from"./Button-y_xm8ZSK.js";import"./preload-helper-PPVm8Dsz.js";import"./Loading-DYHQTa0l.js";import"./Skeleton-bEV42asx.js";function Ce(o){return o?"open":"close"}function je(){const[o,t]=d.useState(!1),[a,n]=d.useState(0),s=d.useRef(null),i=d.useCallback(()=>{t(h=>!h)},[]);return d.useEffect(()=>{o&&s.current?n(s.current.scrollHeight):n(0)},[o]),{isOpen:o,contentHeight:a,contentRef:s,toggle:i}}function be({title:o,description:t,state:a,onClick:n}){return e.jsxs("div",{className:"card-dropdown-header",onClick:n,children:[e.jsxs("div",{className:"card-dropdown-title",children:[e.jsx("div",{children:o}),e.jsx("div",{className:`card-dropdown-button ${a}`,children:e.jsx(_e,{size:"md",icon:"keyboard_arrow_down"})})]}),e.jsx("div",{children:t&&e.jsx("p",{children:t})})]})}function we({content:o,footer:t,state:a,height:n,contentRef:s}){const i=a==="open";return e.jsxs("div",{className:`card-dropdown-children ${a}`,style:{height:i?`${n}px`:"0"},ref:s,children:[o&&e.jsx("div",{className:`card-dropdown-content ${a}`,children:o}),t&&e.jsx("div",{className:`card-dropdown-footer ${a}`,children:t})]})}const ge=({title:o,description:t,content:a,footer:n})=>{const{isOpen:s,contentHeight:i,contentRef:h,toggle:he}=je(),ye=Ce(s);return e.jsxs("div",{className:"card-dropdown",children:[e.jsx(be,{title:o,description:t,state:ye,onClick:he}),e.jsx(we,{content:a,footer:n,state:ye,height:i,contentRef:h})]})};var _,C,j,b,w,D,O,S,T,R,z,B,E,P,q,W,L,N,A,M,I,V,k,G,H,$,F,Q,U,X,K,Z,J,Y,ee,oe,te,ae,ne,se,re,ie,de,le,ce,pe,me,ue,ve,fe;const Pe={title:"Components/CardDropdown",component:ge,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
O **CardDropdown** é um card expansível que exibe um cabeçalho persistente e
revela conteúdo adicional ao ser clicado — com animação de abertura e fechamento.

> O \`title\` é **sempre visível** independentemente do estado aberto/fechado.
> Mantenha-o curto e objetivo para que o usuário entenda o conteúdo antes de expandir.

### Anatomia
\`\`\`
┌─────────────────────────────────┐
│  Header  (sempre visível)       │  ← clicável · title + description + chevron
├─────────────────────────────────┤
│  Content (revelado ao expandir) │  ← ReactNode livre
├─────────────────────────────────┤
│  Footer  (revelado ao expandir) │  ← fundo distinto · ideal para ações
└─────────────────────────────────┘
\`\`\`

### Props e slots
| Prop           | Obrigatório | Descrição                                                  |
|----------------|-------------|------------------------------------------------------------|
| \`title\`        | ✅ sim      | Título principal, sempre visível no cabeçalho              |
| \`description\`  | não         | Texto de apoio abaixo do título, também sempre visível     |
| \`content\`      | ¹           | Conteúdo revelado ao expandir — aceita qualquer ReactNode  |
| \`footer\`       | ¹           | Rodapé com fundo distinto — ideal para botões e links      |

> ¹ **Ao menos um de \`content\` ou \`footer\` deve ser fornecido** — um card que expande
> para o vazio não tem valor para o usuário.

### Quando usar
- Listas com detalhes sob demanda (pedidos, registros, histórico)
- Seções colapsáveis em painéis de configuração
- Resumos com opção de expansão para mais informações
- Agrupamento de informações em layouts compactos

### Quando não usar
- Quando o conteúdo precisa estar sempre visível — use \`Card\` simples
- Para navegação entre páginas — use um link ou menu
- Como substituto de modal para ações críticas
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10016"}},argTypes:{title:{control:"text",description:"Título principal exibido no cabeçalho. Sempre visível independentemente do estado.",table:{type:{summary:"string"}}},description:{control:"text",description:"Texto descritivo exibido abaixo do título. Também sempre visível. Opcional.",table:{type:{summary:"string"}}},content:{control:!1,description:"Conteúdo principal revelado ao expandir o card. Aceita qualquer `ReactNode`. Opcional.",table:{type:{summary:"React.ReactNode"}}},footer:{control:!1,description:"Rodapé com fundo distinto, revelado ao expandir. Ideal para ações e botões. Opcional.",table:{type:{summary:"React.ReactNode"}}}},decorators:[o=>e.jsx("div",{style:{maxWidth:"480px"},children:e.jsx(o,{})})]},l={name:"Default",args:{title:"Informações do pedido",description:"Clique para ver os detalhes",content:e.jsx("p",{children:"Este é o conteúdo detalhado revelado ao expandir o card."}),footer:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(r,{variant:"secondary",size:"md",children:"Ver pedido completo"})})}},c={name:"Composição — título + content",args:{title:"Item de configuração",content:e.jsx("p",{children:"Detalhes adicionais sobre este item de configuração."})}},p={name:"Composição — título + descrição + footer",args:{title:"Resumo da assinatura",description:"Plano Pro · Renovação em 15/08/2025",footer:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(r,{variant:"secondary",size:"md",children:"Gerenciar assinatura"})})}},m={name:"Composição — com content, sem footer",args:{title:"Especificações técnicas",description:"Detalhes do produto selecionado",content:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[{label:"Processador",value:"Intel i7-13700H"},{label:"Memória RAM",value:"16 GB DDR5"},{label:"Armazenamento",value:"512 GB SSD NVMe"},{label:"Tela",value:'14" 2K 120Hz'}].map(({label:o,value:t})=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("small",{children:o}),e.jsx("small",{children:t})]},o))})}},u={name:"Composição — com footer, sem content",args:{title:"Ação rápida",description:"Expanda para acessar a ação disponível",footer:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(r,{variant:"primary",size:"md",children:"Executar ação"})})}},v={name:"Contexto real — pedido",args:{title:"Pedido #1042",description:"Realizado em 01/07/2025",content:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("small",{children:"Status"}),e.jsx(xe,{label:"Enviado",type:"light",variant:"success"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("small",{children:"Produto"}),e.jsx("small",{children:"Notebook Pro X"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("small",{children:"Quantidade"}),e.jsx("small",{children:"1 unidade"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("small",{children:"Total"}),e.jsx("small",{children:"R$ 4.299,00"})]})]}),footer:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(r,{variant:"secondary",size:"md",children:"Ver detalhes"})})}},f={name:"Contexto real — seção de configurações",args:{title:"Notificações por e-mail",description:"Gerencie quais alertas você deseja receber",content:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:["Novos pedidos recebidos","Atualizações de status de envio","Alertas de estoque baixo","Relatórios semanais"].map(o=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("small",{children:o}),e.jsx(xe,{label:"Ativo",type:"light",variant:"success"})]},o))}),footer:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(r,{variant:"secondary",size:"md",children:"Editar preferências"})})}},x={name:"Lista de cards",decorators:[o=>e.jsx("div",{style:{maxWidth:"480px"},children:e.jsx(o,{})})],render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[{id:"#1042",date:"01/07/2025",product:"Notebook Pro X",status:"Enviado",statusVariant:"success"},{id:"#1043",date:"05/07/2025",product:"Mouse Ergonômico",status:"Em trânsito",statusVariant:"primary"},{id:"#1044",date:"08/07/2025",product:"Teclado Mecânico",status:"Pendente",statusVariant:"warning"}].map(({id:o,date:t,product:a,status:n,statusVariant:s})=>e.jsx(ge,{title:`Pedido ${o}`,description:`Realizado em ${t}`,content:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("small",{children:a}),e.jsx(xe,{label:n,type:"light",variant:s})]}),footer:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(r,{variant:"secondary",size:"md",children:"Ver detalhes"})})},o))})},y={name:"Edge case — conteúdo longo",args:{title:"Termos e condições",description:"Leia com atenção antes de prosseguir",content:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:Array.from({length:6},(o,t)=>e.jsxs("p",{children:["Parágrafo ",t+1,": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."]},t))}),footer:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(r,{variant:"primary",size:"md",children:"Aceitar termos"})})}},g={name:"Edge case — título longo",args:{title:"Configurações avançadas de notificações e preferências de entrega de mensagens",description:"Gerencie como e quando você recebe alertas do sistema",content:e.jsx("p",{children:"Conteúdo da seção de configurações avançadas."})}};l.parameters={...l.parameters,docs:{...(_=l.parameters)===null||_===void 0?void 0:_.docs,source:{originalSource:`{
  name: "Default",
  args: {
    title: "Informações do pedido",
    description: "Clique para ver os detalhes",
    content: <p>Este é o conteúdo detalhado revelado ao expandir o card.</p>,
    footer: <div style={{
      width: "fit-content"
    }}>\r
        <Button variant="secondary" size="md">\r
          Ver pedido completo\r
        </Button>\r
      </div>
  }
}`,...(j=l.parameters)===null||j===void 0||(C=j.docs)===null||C===void 0?void 0:C.source},description:{story:`Estado base com todas as props ativas.\r
Clique no cabeçalho para expandir e revelar o conteúdo e o rodapé.\r
Use os Controls para explorar as props individualmente.`,...(w=l.parameters)===null||w===void 0||(b=w.docs)===null||b===void 0?void 0:b.description}}};c.parameters={...c.parameters,docs:{...(D=c.parameters)===null||D===void 0?void 0:D.docs,source:{originalSource:`{
  name: "Composição — título + content",
  args: {
    title: "Item de configuração",
    content: <p>Detalhes adicionais sobre este item de configuração.</p>
  }
}`,...(S=c.parameters)===null||S===void 0||(O=S.docs)===null||O===void 0?void 0:O.source},description:{story:`Título + content mínimo — composição mais simples com valor expansível.\r
Sem descrição no cabeçalho e sem rodapé de ações.\r
Use quando o item precisa de um detalhe curto sob demanda, sem ação associada.`,...(R=c.parameters)===null||R===void 0||(T=R.docs)===null||T===void 0?void 0:T.description}}};p.parameters={...p.parameters,docs:{...(z=p.parameters)===null||z===void 0?void 0:z.docs,source:{originalSource:`{
  name: "Composição — título + descrição + footer",
  args: {
    title: "Resumo da assinatura",
    description: "Plano Pro · Renovação em 15/08/2025",
    footer: <div style={{
      width: "fit-content"
    }}>\r
        <Button variant="secondary" size="md">\r
          Gerenciar assinatura\r
        </Button>\r
      </div>
  }
}`,...(E=p.parameters)===null||E===void 0||(B=E.docs)===null||B===void 0?void 0:B.source},description:{story:`Título + descrição + footer, sem content.\r
Ideal quando o cabeçalho já fornece contexto suficiente\r
e a expansão expõe diretamente uma ação.`,...(q=p.parameters)===null||q===void 0||(P=q.docs)===null||P===void 0?void 0:P.description}}};m.parameters={...m.parameters,docs:{...(W=m.parameters)===null||W===void 0?void 0:W.docs,source:{originalSource:`{
  name: "Composição — com content, sem footer",
  args: {
    title: "Especificações técnicas",
    description: "Detalhes do produto selecionado",
    content: <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-nano)"
    }}>\r
        {[{
        label: "Processador",
        value: "Intel i7-13700H"
      }, {
        label: "Memória RAM",
        value: "16 GB DDR5"
      }, {
        label: "Armazenamento",
        value: "512 GB SSD NVMe"
      }, {
        label: "Tela",
        value: '14" 2K 120Hz'
      }].map(({
        label,
        value
      }) => <div key={label} style={{
        display: "flex",
        justifyContent: "space-between"
      }}>\r
            <small>{label}</small>\r
            <small>{value}</small>\r
          </div>)}\r
      </div>
  }
}`,...(N=m.parameters)===null||N===void 0||(L=N.docs)===null||L===void 0?void 0:L.source},description:{story:`Título + descrição + content, sem footer.\r
Use quando o conteúdo expandido é puramente informativo,\r
sem necessidade de ação no rodapé.`,...(M=m.parameters)===null||M===void 0||(A=M.docs)===null||A===void 0?void 0:A.description}}};u.parameters={...u.parameters,docs:{...(I=u.parameters)===null||I===void 0?void 0:I.docs,source:{originalSource:`{
  name: "Composição — com footer, sem content",
  args: {
    title: "Ação rápida",
    description: "Expanda para acessar a ação disponível",
    footer: <div style={{
      width: "fit-content"
    }}>\r
        <Button variant="primary" size="md">\r
          Executar ação\r
        </Button>\r
      </div>
  }
}`,...(k=u.parameters)===null||k===void 0||(V=k.docs)===null||V===void 0?void 0:V.source},description:{story:`Título + descrição + footer, sem content.\r
Use quando a expansão expõe diretamente uma ação,\r
sem necessidade de corpo informativo entre o header e o rodapé.`,...(H=u.parameters)===null||H===void 0||(G=H.docs)===null||G===void 0?void 0:G.description}}};v.parameters={...v.parameters,docs:{...($=v.parameters)===null||$===void 0?void 0:$.docs,source:{originalSource:`{
  name: "Contexto real — pedido",
  args: {
    title: "Pedido #1042",
    description: "Realizado em 01/07/2025",
    content: <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)"
    }}>\r
        <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>\r
          <small>Status</small>\r
          <Badge label="Enviado" type="light" variant="success" />\r
        </div>\r
        <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>\r
          <small>Produto</small>\r
          <small>Notebook Pro X</small>\r
        </div>\r
        <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>\r
          <small>Quantidade</small>\r
          <small>1 unidade</small>\r
        </div>\r
        <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>\r
          <small>Total</small>\r
          <small>R$ 4.299,00</small>\r
        </div>\r
      </div>,
    footer: <div style={{
      width: "fit-content"
    }}>\r
        <Button variant="secondary" size="md">\r
          Ver detalhes\r
        </Button>\r
      </div>
  }
}`,...(Q=v.parameters)===null||Q===void 0||(F=Q.docs)===null||F===void 0?void 0:F.source},description:{story:`Card de pedido com status via Badge e detalhes de item.\r
Padrão típico em histórico de compras, listagens de pedidos e painéis de e-commerce.`,...(X=v.parameters)===null||X===void 0||(U=X.docs)===null||U===void 0?void 0:U.description}}};f.parameters={...f.parameters,docs:{...(K=f.parameters)===null||K===void 0?void 0:K.docs,source:{originalSource:`{
  name: "Contexto real — seção de configurações",
  args: {
    title: "Notificações por e-mail",
    description: "Gerencie quais alertas você deseja receber",
    content: <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)"
    }}>\r
        {["Novos pedidos recebidos", "Atualizações de status de envio", "Alertas de estoque baixo", "Relatórios semanais"].map(item => <div key={item} style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>\r
            <small>{item}</small>\r
            <Badge label="Ativo" type="light" variant="success" />\r
          </div>)}\r
      </div>,
    footer: <div style={{
      width: "fit-content"
    }}>\r
        <Button variant="secondary" size="md">\r
          Editar preferências\r
        </Button>\r
      </div>
  }
}`,...(J=f.parameters)===null||J===void 0||(Z=J.docs)===null||Z===void 0?void 0:Z.source},description:{story:`Card de seção de configuração colapsável.\r
Padrão comum em painéis de preferências e dashboards administrativos.`,...(ee=f.parameters)===null||ee===void 0||(Y=ee.docs)===null||Y===void 0?void 0:Y.description}}};x.parameters={...x.parameters,docs:{...(oe=x.parameters)===null||oe===void 0?void 0:oe.docs,source:{originalSource:`{
  name: "Lista de cards",
  decorators: [Story => <div style={{
    maxWidth: "480px"
  }}>\r
        <Story />\r
      </div>],
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-x-small)"
  }}>\r
      {[{
      id: "#1042",
      date: "01/07/2025",
      product: "Notebook Pro X",
      status: "Enviado",
      statusVariant: "success" as const
    }, {
      id: "#1043",
      date: "05/07/2025",
      product: "Mouse Ergonômico",
      status: "Em trânsito",
      statusVariant: "primary" as const
    }, {
      id: "#1044",
      date: "08/07/2025",
      product: "Teclado Mecânico",
      status: "Pendente",
      statusVariant: "warning" as const
    }].map(({
      id,
      date,
      product,
      status,
      statusVariant
    }) => <CardDropdown key={id} title={\`Pedido \${id}\`} description={\`Realizado em \${date}\`} content={<div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>\r
              <small>{product}</small>\r
              <Badge label={status} type="light" variant={statusVariant} />\r
            </div>} footer={<div style={{
      width: "fit-content"
    }}>\r
              <Button variant="secondary" size="md">\r
                Ver detalhes\r
              </Button>\r
            </div>} />)}\r
    </div>
}`,...(ae=x.parameters)===null||ae===void 0||(te=ae.docs)===null||te===void 0?void 0:te.source},description:{story:`Múltiplos CardDropdowns empilhados — padrão de lista com detalhes sob demanda.\r
Cada card é independente: expandir um não afeta os demais.\r
Use para histórico de pedidos, logs de atividade e listas de registros.`,...(se=x.parameters)===null||se===void 0||(ne=se.docs)===null||ne===void 0?void 0:ne.description}}};y.parameters={...y.parameters,docs:{...(re=y.parameters)===null||re===void 0?void 0:re.docs,source:{originalSource:`{
  name: "Edge case — conteúdo longo",
  args: {
    title: "Termos e condições",
    description: "Leia com atenção antes de prosseguir",
    content: <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)"
    }}>\r
        {Array.from({
        length: 6
      }, (_, i) => <p key={i}>\r
            Parágrafo {i + 1}: Lorem ipsum dolor sit amet, consectetur\r
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et\r
            dolore magna aliqua ut enim.\r
          </p>)}\r
      </div>,
    footer: <div style={{
      width: "fit-content"
    }}>\r
        <Button variant="primary" size="md">\r
          Aceitar termos\r
        </Button>\r
      </div>
  }
}`,...(de=y.parameters)===null||de===void 0||(ie=de.docs)===null||ie===void 0?void 0:ie.source},description:{story:"Conteúdo longo — valida a animação de altura ao expandir um corpo denso.\r\nO `useCardDropdown` calcula `scrollHeight` dinamicamente; este caso\r\nconfirma que a transição funciona corretamente com muitas linhas de conteúdo.",...(ce=y.parameters)===null||ce===void 0||(le=ce.docs)===null||le===void 0?void 0:le.description}}};g.parameters={...g.parameters,docs:{...(pe=g.parameters)===null||pe===void 0?void 0:pe.docs,source:{originalSource:`{
  name: "Edge case — título longo",
  args: {
    title: "Configurações avançadas de notificações e preferências de entrega de mensagens",
    description: "Gerencie como e quando você recebe alertas do sistema",
    content: <p>Conteúdo da seção de configurações avançadas.</p>
  }
}`,...(ue=g.parameters)===null||ue===void 0||(me=ue.docs)===null||me===void 0?void 0:me.source},description:{story:`Título longo — valida se o layout do cabeçalho lida corretamente com\r
títulos extensos sem comprimir ou sobrepor o ícone de chevron.`,...(fe=g.parameters)===null||fe===void 0||(ve=fe.docs)===null||ve===void 0?void 0:ve.description}}};const qe=["Default","TitleOnly","WithDescription","WithContentOnly","WithFooterOnly","OrderCard","SettingsSection","MultipleCards","LongContent","LongTitle"];export{l as Default,y as LongContent,g as LongTitle,x as MultipleCards,v as OrderCard,f as SettingsSection,c as TitleOnly,m as WithContentOnly,p as WithDescription,u as WithFooterOnly,qe as __namedExportsOrder,Pe as default};
