import{j as e}from"./iframe-CxNvl9BI.js";/* empty css               */import{P as t}from"./Page-CnSCqIRQ.js";import{B as o}from"./Button-CH6qqEEx.js";import{B as y}from"./Badge-KKabPQMN.js";import{B as E}from"./ButtonIcon-BvrW2_xY.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-Bqm0CoJD.js";import"./Loading-DhvOqAup.js";import"./Skeleton-C80QNm7w.js";const U={title:"Templates/Page",component:t,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
O **Page** é o componente estrutural de layout que define a área principal de cada rota da aplicação.

Fornece um header padronizado com título, botão de voltar opcional,
área de ações customizável e slot de descrição — garantindo consistência
visual entre todas as páginas do produto.

### Anatomia do header
\`\`\`
┌─────────────────────────────────────────────────────┐
│  [← voltar]  Título da Página         [ações]        │
│  Descrição opcional (recuada quando voltar ativo)    │
└─────────────────────────────────────────────────────┘
\`\`\`

### Responsividade
Em viewports \`≤ 768px\` os botões de ação com label (\`.button-actions\`) são
ocultados e substituídos pelos ícones (\`.button-icon-actions\`) para economizar espaço.

### Quando usar
- Como wrapper de alto nível para cada rota/tela da aplicação
- Sempre que precisar de consistência visual no header das páginas

### Quando não usar
- Dentro de modais, drawers ou painéis laterais — esses contextos têm layouts próprios
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=2416-4557"}},argTypes:{namePage:{control:"text",description:"Título principal exibido no header da página.",table:{type:{summary:"string"}}},withBackButton:{control:"boolean",description:"Exibe o botão de voltar (`arrow_back`) à esquerda do título quando `true`.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},description:{control:"text",description:"Conteúdo descritivo exibido abaixo do header. Recuado à esquerda quando `withBackButton` é `true`. Aceita `ReactNode`.",table:{type:{summary:"React.ReactNode"}}},actions:{control:!1,description:"Slot de ações renderizado no lado direito do header. Aceita qualquer `ReactNode` — botões, menus, etc.",table:{type:{summary:"React.ReactNode"}}},onClickBackButton:{action:"onClickBackButton",description:"Callback disparado ao clicar no botão de voltar. Tipicamente navega para a rota anterior.",table:{type:{summary:"() => void"}}},children:{control:!1,description:"Conteúdo principal da página, renderizado abaixo do header.",table:{type:{summary:"React.ReactNode"}}}},args:{namePage:"Nome da página",withBackButton:!1},decorators:[a=>e.jsx("div",{style:{height:"100%",width:"100%"},children:e.jsx(a,{})})]},s=()=>e.jsx("div",{children:e.jsx("p",{children:"Conteúdo da página"})}),n={name:"Default",args:{namePage:"Usuários",children:e.jsx(s,{})}},i={name:"Header — com botão de voltar",args:{namePage:"Detalhes do usuário",withBackButton:!0,onClickBackButton:()=>{},children:e.jsx(s,{})}},d={name:"Header — com descrição",args:{namePage:"Usuários",description:"Gerencie os membros e as permissões do workspace.",children:e.jsx(s,{})}},c={name:"Header — com ação única",render:()=>e.jsx(t,{namePage:"Usuários",description:"Gerencie os membros do workspace.",actions:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",icon:"add",children:"Novo usuário"})}),children:e.jsx(s,{})})},l={name:"Header — com múltiplas ações",render:()=>e.jsx(t,{namePage:"Relatório Q3",description:"Visualize os dados consolidados do terceiro trimestre.",actions:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"secondary",size:"md",icon:"download",children:"Exportar"})}),e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",icon:"edit",children:"Editar"})})]}),children:e.jsx(s,{})})},m={name:"Composição — todos os slots",render:()=>e.jsx(t,{namePage:"Detalhes do pedido",withBackButton:!0,onClickBackButton:()=>{},description:"Visualize e edite as informações do pedido selecionado.",actions:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"secondary",size:"md",children:"Cancelar"})}),e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",children:"Salvar"})})]}),children:e.jsx(s,{})})},h=[{name:"Ana Souza",role:"Admin",status:"Ativo"},{name:"Carlos Lima",role:"Editor",status:"Ativo"},{name:"Jane Doe",role:"Viewer",status:"Inativo"}],b=({name:a,role:r,status:g,isLast:v})=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--s-spacing-x-small) var(--s-spacing-small)",borderBottom:v?"none":"var(--s-border-width-hairline) solid var(--s-color-border-default)",background:"var(--s-color-fill-default)"},children:[e.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-x-small)",alignItems:"center"},children:[e.jsx("small",{children:e.jsx("strong",{children:a})}),e.jsx("small",{children:r})]}),e.jsx(y,{label:g,type:"light",variant:g==="Ativo"?"success":"default"})]}),u={name:"Contexto real — listagem de usuários",render:()=>e.jsx(t,{namePage:"Usuários",description:"Gerencie os membros e as permissões do workspace.",actions:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",icon:"add",children:"Novo usuário"})}),children:e.jsx("div",{style:{border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",overflow:"hidden"},children:h.map(({name:a,role:r,status:g},v)=>e.jsx(b,{name:a,role:r,status:g,isLast:v===h.length-1},a))})})},B=[{label:"Cliente",value:"Jane Doe"},{label:"Status",value:"Enviado"},{label:"Total",value:"R$ 4.299,00"},{label:"Data",value:"21/03/2025"}],f=({label:a,value:r})=>e.jsxs("div",{style:{padding:"var(--s-spacing-small)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",background:"var(--s-color-fill-default)"},children:[e.jsx("small",{children:a}),e.jsx("p",{style:{font:"var(--s-typography-paragraph-strong)"},children:r})]}),p={name:"Contexto real — página de detalhes",render:()=>e.jsx(t,{namePage:"Pedido #1042",withBackButton:!0,onClickBackButton:()=>{},description:"Visualize e edite as informações do pedido.",actions:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"secondary",size:"md",children:"Cancelar"})}),e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",children:"Salvar"})})]}),children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--s-spacing-small)"},children:B.map(({label:a,value:r})=>e.jsx(f,{label:a,value:r},a))})})},w=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"button-actions",style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",icon:"add",children:"Novo usuário"})}),e.jsx("div",{className:"button-icon-actions",children:e.jsx(E,{variant:"primary",size:"md",icon:"add",appearance:"default"})})]}),x={name:"Layout mobile (≤ 768px)",globals:{viewport:{value:"mobile5",isRotated:!1}},render:()=>e.jsx(t,{namePage:"Usuários",description:"Gerencie os membros do workspace.",actions:e.jsx(w,{}),children:e.jsx(s,{})})},q=["Default","WithBackButton","WithDescription","WithSingleAction","WithMultipleActions","FullPage","UserListPage","DetailPage","MobileLayout"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    namePage: "Usuários",
    children: <PageContent />
  }
}`,...n.parameters?.docs?.source},description:{story:`Header mínimo — apenas título e área de conteúdo.\r
Use como ponto de partida para qualquer rota da aplicação.`,...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Header — com botão de voltar",
  args: {
    namePage: "Detalhes do usuário",
    withBackButton: true,
    onClickBackButton: () => {},
    children: <PageContent />
  }
}`,...i.parameters?.docs?.source},description:{story:"Header com botão de voltar.\r\nA descrição é recuada automaticamente para se alinhar ao título\r\nquando `withBackButton` é `true`.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Header — com descrição",
  args: {
    namePage: "Usuários",
    description: "Gerencie os membros e as permissões do workspace.",
    children: <PageContent />
  }
}`,...d.parameters?.docs?.source},description:{story:`Header com descrição abaixo do título.\r
Use para contextualizar o propósito da página ao usuário.`,...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Header — com ação única",
  render: () => <Page namePage="Usuários" description="Gerencie os membros do workspace." actions={<div style={{
    width: "fit-content"
  }}>\r
          <Button variant="primary" size="md" icon="add">\r
            Novo usuário\r
          </Button>\r
        </div>}>\r
      <PageContent />\r
    </Page>
}`,...c.parameters?.docs?.source},description:{story:`Header com ação primária única.\r
Padrão mais comum em listagens: título à esquerda, botão de criação à direita.`,...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Header — com múltiplas ações",
  render: () => <Page namePage="Relatório Q3" description="Visualize os dados consolidados do terceiro trimestre." actions={<>\r
          <div style={{
      width: "fit-content"
    }}>\r
            <Button variant="secondary" size="md" icon="download">\r
              Exportar\r
            </Button>\r
          </div>\r
          <div style={{
      width: "fit-content"
    }}>\r
            <Button variant="primary" size="md" icon="edit">\r
              Editar\r
            </Button>\r
          </div>\r
        </>}>\r
      <PageContent />\r
    </Page>
}`,...l.parameters?.docs?.source},description:{story:`Header com múltiplas ações.\r
Use quando há uma ação principal e uma ou mais ações secundárias.`,...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Composição — todos os slots",
  render: () => <Page namePage="Detalhes do pedido" withBackButton onClickBackButton={() => {}} description="Visualize e edite as informações do pedido selecionado." actions={<>\r
          <div style={{
      width: "fit-content"
    }}>\r
            <Button variant="secondary" size="md">\r
              Cancelar\r
            </Button>\r
          </div>\r
          <div style={{
      width: "fit-content"
    }}>\r
            <Button variant="primary" size="md">\r
              Salvar\r
            </Button>\r
          </div>\r
        </>}>\r
      <PageContent />\r
    </Page>
}`,...m.parameters?.docs?.source},description:{story:`Composição completa com todos os slots ativos:\r
botão de voltar, título, descrição, ações e conteúdo.\r
Demonstra o layout mais completo possível do componente.`,...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — listagem de usuários",
  render: () => <Page namePage="Usuários" description="Gerencie os membros e as permissões do workspace." actions={<div style={{
    width: "fit-content"
  }}>\r
          <Button variant="primary" size="md" icon="add">\r
            Novo usuário\r
          </Button>\r
        </div>}>\r
      <div style={{
      border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
      borderRadius: "var(--s-border-radius-medium)",
      overflow: "hidden"
    }}>\r
        {userListRows.map(({
        name,
        role,
        status
      }, i) => <UserRow key={name} name={name} role={role} status={status} isLast={i === userListRows.length - 1} />)}\r
      </div>\r
    </Page>
}`,...u.parameters?.docs?.source},description:{story:`Página de listagem de usuários — padrão de tabela com ação de criação.\r
Layout típico de dashboards administrativos.`,...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — página de detalhes",
  render: () => <Page namePage="Pedido #1042" withBackButton onClickBackButton={() => {}} description="Visualize e edite as informações do pedido." actions={<>\r
          <div style={{
      width: "fit-content"
    }}>\r
            <Button variant="secondary" size="md">Cancelar</Button>\r
          </div>\r
          <div style={{
      width: "fit-content"
    }}>\r
            <Button variant="primary" size="md">Salvar</Button>\r
          </div>\r
        </>}>\r
      <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--s-spacing-small)"
    }}>\r
        {orderFields.map(({
        label,
        value
      }) => <OrderField key={label} label={label} value={value} />)}\r
      </div>\r
    </Page>
}`,...p.parameters?.docs?.source},description:{story:`Página de detalhes com botão de voltar — layout de detalhe/edição.\r
O recuo da descrição alinha com o título, ignorando a largura do botão de voltar.`,...p.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Layout mobile (≤ 768px)",
  globals: {
    viewport: {
      value: "mobile5",
      isRotated: false
    }
  },
  render: () => <Page namePage="Usuários" description="Gerencie os membros do workspace." actions={<MobileActions />}>\r
      <PageContent />\r
    </Page>
}`,...x.parameters?.docs?.source},description:{story:"Layout mobile (≤ 768px) — botões de ação com label são ocultados e\r\nsubstituídos pelos `ButtonIcon` equivalentes para economizar espaço no header.",...x.parameters?.docs?.description}}};export{n as Default,p as DetailPage,m as FullPage,x as MobileLayout,u as UserListPage,i as WithBackButton,d as WithDescription,l as WithMultipleActions,c as WithSingleAction,q as __namedExportsOrder,U as default};
