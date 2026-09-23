import{r as d,j as e}from"./iframe-CxNvl9BI.js";import{B as h}from"./Badge-KKabPQMN.js";/* empty css               */import{I as w}from"./Icon-Bqm0CoJD.js";import{B as r}from"./Button-CH6qqEEx.js";import"./preload-helper-PPVm8Dsz.js";import"./Loading-DhvOqAup.js";import"./Skeleton-C80QNm7w.js";function D(n){return n?"open":"close"}function A(){const[n,a]=d.useState(!1),[o,t]=d.useState(0),s=d.useRef(null),i=d.useCallback(()=>{a(E=>!E)},[]);return d.useEffect(()=>{n&&s.current?t(s.current.scrollHeight):t(0)},[n]),{isOpen:n,contentHeight:o,contentRef:s,toggle:i}}function S({title:n,description:a,state:o,onClick:t}){return e.jsxs("div",{className:"card-dropdown-header",onClick:t,children:[e.jsxs("div",{className:"card-dropdown-title",children:[e.jsx("div",{children:n}),e.jsx("div",{className:`card-dropdown-button ${o}`,children:e.jsx(w,{size:"md",icon:"keyboard_arrow_down"})})]}),e.jsx("div",{children:a&&e.jsx("p",{children:a})})]})}function R({content:n,footer:a,state:o,height:t,contentRef:s}){const i=o==="open";return e.jsxs("div",{className:`card-dropdown-children ${o}`,style:{height:i?`${t}px`:"0"},ref:s,children:[n&&e.jsx("div",{className:`card-dropdown-content ${o}`,children:n}),a&&e.jsx("div",{className:`card-dropdown-footer ${o}`,children:a})]})}const b=({title:n,description:a,content:o,footer:t})=>{const{isOpen:s,contentHeight:i,contentRef:E,toggle:C}=A(),j=D(s);return e.jsxs("div",{className:"card-dropdown",children:[e.jsx(S,{title:n,description:a,state:j,onClick:C}),e.jsx(R,{content:o,footer:t,state:j,height:i,contentRef:E})]})},I={title:"Components/CardDropdown",component:b,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
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
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10016"}},argTypes:{title:{control:"text",description:"Título principal exibido no cabeçalho. Sempre visível independentemente do estado.",table:{type:{summary:"string"}}},description:{control:"text",description:"Texto descritivo exibido abaixo do título. Também sempre visível. Opcional.",table:{type:{summary:"string"}}},content:{control:!1,description:"Conteúdo principal revelado ao expandir o card. Aceita qualquer `ReactNode`. Opcional.",table:{type:{summary:"React.ReactNode"}}},footer:{control:!1,description:"Rodapé com fundo distinto, revelado ao expandir. Ideal para ações e botões. Opcional.",table:{type:{summary:"React.ReactNode"}}}},decorators:[n=>e.jsx("div",{style:{maxWidth:"480px"},children:e.jsx(n,{})})]},c={name:"Default",args:{title:"Informações do pedido",description:"Clique para ver os detalhes",content:e.jsx("p",{children:"Este é o conteúdo detalhado revelado ao expandir o card."}),footer:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(r,{variant:"secondary",size:"md",children:"Ver pedido completo"})})}},l={name:"Composição — título + content",args:{title:"Item de configuração",content:e.jsx("p",{children:"Detalhes adicionais sobre este item de configuração."})}},p={name:"Composição — título + descrição + footer",args:{title:"Resumo da assinatura",description:"Plano Pro · Renovação em 15/08/2025",footer:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(r,{variant:"secondary",size:"md",children:"Gerenciar assinatura"})})}},m={name:"Composição — com content, sem footer",args:{title:"Especificações técnicas",description:"Detalhes do produto selecionado",content:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[{label:"Processador",value:"Intel i7-13700H"},{label:"Memória RAM",value:"16 GB DDR5"},{label:"Armazenamento",value:"512 GB SSD NVMe"},{label:"Tela",value:'14" 2K 120Hz'}].map(({label:n,value:a})=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("small",{children:n}),e.jsx("small",{children:a})]},n))})}},x={name:"Composição — com footer, sem content",args:{title:"Ação rápida",description:"Expanda para acessar a ação disponível",footer:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(r,{variant:"primary",size:"md",children:"Executar ação"})})}},u={name:"Contexto real — pedido",args:{title:"Pedido #1042",description:"Realizado em 01/07/2025",content:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("small",{children:"Status"}),e.jsx(h,{label:"Enviado",type:"light",variant:"success"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("small",{children:"Produto"}),e.jsx("small",{children:"Notebook Pro X"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("small",{children:"Quantidade"}),e.jsx("small",{children:"1 unidade"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("small",{children:"Total"}),e.jsx("small",{children:"R$ 4.299,00"})]})]}),footer:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(r,{variant:"secondary",size:"md",children:"Ver detalhes"})})}},v={name:"Contexto real — seção de configurações",args:{title:"Notificações por e-mail",description:"Gerencie quais alertas você deseja receber",content:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:["Novos pedidos recebidos","Atualizações de status de envio","Alertas de estoque baixo","Relatórios semanais"].map(n=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("small",{children:n}),e.jsx(h,{label:"Ativo",type:"light",variant:"success"})]},n))}),footer:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(r,{variant:"secondary",size:"md",children:"Editar preferências"})})}},f={name:"Lista de cards",decorators:[n=>e.jsx("div",{style:{maxWidth:"480px"},children:e.jsx(n,{})})],render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[{id:"#1042",date:"01/07/2025",product:"Notebook Pro X",status:"Enviado",statusVariant:"success"},{id:"#1043",date:"05/07/2025",product:"Mouse Ergonômico",status:"Em trânsito",statusVariant:"primary"},{id:"#1044",date:"08/07/2025",product:"Teclado Mecânico",status:"Pendente",statusVariant:"warning"}].map(({id:n,date:a,product:o,status:t,statusVariant:s})=>e.jsx(b,{title:`Pedido ${n}`,description:`Realizado em ${a}`,content:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("small",{children:o}),e.jsx(h,{label:t,type:"light",variant:s})]}),footer:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(r,{variant:"secondary",size:"md",children:"Ver detalhes"})})},n))})},y={name:"Edge case — conteúdo longo",args:{title:"Termos e condições",description:"Leia com atenção antes de prosseguir",content:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:Array.from({length:6},(n,a)=>e.jsxs("p",{children:["Parágrafo ",a+1,": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."]},a))}),footer:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(r,{variant:"primary",size:"md",children:"Aceitar termos"})})}},g={name:"Edge case — título longo",args:{title:"Configurações avançadas de notificações e preferências de entrega de mensagens",description:"Gerencie como e quando você recebe alertas do sistema",content:e.jsx("p",{children:"Conteúdo da seção de configurações avançadas."})}},V=["Default","TitleOnly","WithDescription","WithContentOnly","WithFooterOnly","OrderCard","SettingsSection","MultipleCards","LongContent","LongTitle"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:`Estado base com todas as props ativas.\r
Clique no cabeçalho para expandir e revelar o conteúdo e o rodapé.\r
Use os Controls para explorar as props individualmente.`,...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Composição — título + content",
  args: {
    title: "Item de configuração",
    content: <p>Detalhes adicionais sobre este item de configuração.</p>
  }
}`,...l.parameters?.docs?.source},description:{story:`Título + content mínimo — composição mais simples com valor expansível.\r
Sem descrição no cabeçalho e sem rodapé de ações.\r
Use quando o item precisa de um detalhe curto sob demanda, sem ação associada.`,...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`Título + descrição + footer, sem content.\r
Ideal quando o cabeçalho já fornece contexto suficiente\r
e a expansão expõe diretamente uma ação.`,...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`Título + descrição + content, sem footer.\r
Use quando o conteúdo expandido é puramente informativo,\r
sem necessidade de ação no rodapé.`,...m.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Título + descrição + footer, sem content.\r
Use quando a expansão expõe diretamente uma ação,\r
sem necessidade de corpo informativo entre o header e o rodapé.`,...x.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`Card de pedido com status via Badge e detalhes de item.\r
Padrão típico em histórico de compras, listagens de pedidos e painéis de e-commerce.`,...u.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`Card de seção de configuração colapsável.\r
Padrão comum em painéis de preferências e dashboards administrativos.`,...v.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`Múltiplos CardDropdowns empilhados — padrão de lista com detalhes sob demanda.\r
Cada card é independente: expandir um não afeta os demais.\r
Use para histórico de pedidos, logs de atividade e listas de registros.`,...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:"Conteúdo longo — valida a animação de altura ao expandir um corpo denso.\r\nO `useCardDropdown` calcula `scrollHeight` dinamicamente; este caso\r\nconfirma que a transição funciona corretamente com muitas linhas de conteúdo.",...y.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Edge case — título longo",
  args: {
    title: "Configurações avançadas de notificações e preferências de entrega de mensagens",
    description: "Gerencie como e quando você recebe alertas do sistema",
    content: <p>Conteúdo da seção de configurações avançadas.</p>
  }
}`,...g.parameters?.docs?.source},description:{story:`Título longo — valida se o layout do cabeçalho lida corretamente com\r
títulos extensos sem comprimir ou sobrepor o ícone de chevron.`,...g.parameters?.docs?.description}}};export{c as Default,y as LongContent,g as LongTitle,f as MultipleCards,u as OrderCard,v as SettingsSection,l as TitleOnly,m as WithContentOnly,p as WithDescription,x as WithFooterOnly,V as __namedExportsOrder,I as default};
