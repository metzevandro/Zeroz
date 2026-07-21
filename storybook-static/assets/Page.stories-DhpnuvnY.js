import{j as e}from"./iframe-C_0AXUlQ.js";import{B as le}from"./Badge-DGiT92MA.js";/* empty css               */import{P as t}from"./Page-to7elcDM.js";import{B as o}from"./Button-QvF2SVTw.js";import{B as ce}from"./ButtonIcon-Cs1zWwvD.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-C3Uq1gPi.js";import"./Loading-CCCSPJuP.js";import"./Skeleton-DNOAWNPr.js";var _,y,b,x,B,P,f,w,j,k,C,z,D,W,A,L,S,R,U,q,F,M,H,N,E,G,V,T,O,I,Q,J,Z,$,K,X,Y,ee,ae,oe,re,te,ie,se,ne;const je={title:"Templates/Page",component:t,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
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
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=2416-4557"}},argTypes:{namePage:{control:"text",description:"Título principal exibido no header da página.",table:{type:{summary:"string"}}},withBackButton:{control:"boolean",description:"Exibe o botão de voltar (`arrow_back`) à esquerda do título quando `true`.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},description:{control:"text",description:"Conteúdo descritivo exibido abaixo do header. Recuado à esquerda quando `withBackButton` é `true`. Aceita `ReactNode`.",table:{type:{summary:"React.ReactNode"}}},actions:{control:!1,description:"Slot de ações renderizado no lado direito do header. Aceita qualquer `ReactNode` — botões, menus, etc.",table:{type:{summary:"React.ReactNode"}}},onClickBackButton:{action:"onClickBackButton",description:"Callback disparado ao clicar no botão de voltar. Tipicamente navega para a rota anterior.",table:{type:{summary:"() => void"}}},children:{control:!1,description:"Conteúdo principal da página, renderizado abaixo do header.",table:{type:{summary:"React.ReactNode"}}}},args:{namePage:"Nome da página",withBackButton:!1},decorators:[a=>e.jsx("div",{style:{height:"100%",width:"100%"},children:e.jsx(a,{})})]},i=()=>e.jsx("div",{children:e.jsx("p",{children:"Conteúdo da página"})}),s={name:"Default",args:{namePage:"Usuários",children:e.jsx(i,{})}},n={name:"Header — com botão de voltar",args:{namePage:"Detalhes do usuário",withBackButton:!0,onClickBackButton:()=>{},children:e.jsx(i,{})}},d={name:"Header — com descrição",args:{namePage:"Usuários",description:"Gerencie os membros e as permissões do workspace.",children:e.jsx(i,{})}},l={name:"Header — com ação única",render:()=>e.jsx(t,{namePage:"Usuários",description:"Gerencie os membros do workspace.",actions:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",icon:"add",children:"Novo usuário"})}),children:e.jsx(i,{})})},c={name:"Header — com múltiplas ações",render:()=>e.jsx(t,{namePage:"Relatório Q3",description:"Visualize os dados consolidados do terceiro trimestre.",actions:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"secondary",size:"md",icon:"download",children:"Exportar"})}),e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",icon:"edit",children:"Editar"})})]}),children:e.jsx(i,{})})},m={name:"Composição — todos os slots",render:()=>e.jsx(t,{namePage:"Detalhes do pedido",withBackButton:!0,onClickBackButton:()=>{},description:"Visualize e edite as informações do pedido selecionado.",actions:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"secondary",size:"md",children:"Cancelar"})}),e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",children:"Salvar"})})]}),children:e.jsx(i,{})})},de=[{name:"Ana Souza",role:"Admin",status:"Ativo"},{name:"Carlos Lima",role:"Editor",status:"Ativo"},{name:"Jane Doe",role:"Viewer",status:"Inativo"}],me=({name:a,role:r,status:g,isLast:h})=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--s-spacing-x-small) var(--s-spacing-small)",borderBottom:h?"none":"var(--s-border-width-hairline) solid var(--s-color-border-default)",background:"var(--s-color-fill-default)"},children:[e.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-x-small)",alignItems:"center"},children:[e.jsx("small",{children:e.jsx("strong",{children:a})}),e.jsx("small",{children:r})]}),e.jsx(le,{label:g,type:"light",variant:g==="Ativo"?"success":"default"})]}),u={name:"Contexto real — listagem de usuários",render:()=>e.jsx(t,{namePage:"Usuários",description:"Gerencie os membros e as permissões do workspace.",actions:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",icon:"add",children:"Novo usuário"})}),children:e.jsx("div",{style:{border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",overflow:"hidden"},children:de.map(({name:a,role:r,status:g},h)=>e.jsx(me,{name:a,role:r,status:g,isLast:h===de.length-1},a))})})},ue=[{label:"Cliente",value:"Jane Doe"},{label:"Status",value:"Enviado"},{label:"Total",value:"R$ 4.299,00"},{label:"Data",value:"21/03/2025"}],pe=({label:a,value:r})=>e.jsxs("div",{style:{padding:"var(--s-spacing-small)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",background:"var(--s-color-fill-default)"},children:[e.jsx("small",{children:a}),e.jsx("p",{style:{font:"var(--s-typography-paragraph-strong)"},children:r})]}),p={name:"Contexto real — página de detalhes",render:()=>e.jsx(t,{namePage:"Pedido #1042",withBackButton:!0,onClickBackButton:()=>{},description:"Visualize e edite as informações do pedido.",actions:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"secondary",size:"md",children:"Cancelar"})}),e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",children:"Salvar"})})]}),children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--s-spacing-small)"},children:ue.map(({label:a,value:r})=>e.jsx(pe,{label:a,value:r},a))})})},ve=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"button-actions",style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",icon:"add",children:"Novo usuário"})}),e.jsx("div",{className:"button-icon-actions",children:e.jsx(ce,{variant:"primary",size:"md",icon:"add",appearance:"default"})})]}),v={name:"Layout mobile (≤ 768px)",globals:{viewport:{value:"mobile5",isRotated:!1}},render:()=>e.jsx(t,{namePage:"Usuários",description:"Gerencie os membros do workspace.",actions:e.jsx(ve,{}),children:e.jsx(i,{})})};s.parameters={...s.parameters,docs:{...(_=s.parameters)===null||_===void 0?void 0:_.docs,source:{originalSource:`{
  name: "Default",
  args: {
    namePage: "Usuários",
    children: <PageContent />
  }
}`,...(b=s.parameters)===null||b===void 0||(y=b.docs)===null||y===void 0?void 0:y.source},description:{story:`Header mínimo — apenas título e área de conteúdo.\r
Use como ponto de partida para qualquer rota da aplicação.`,...(B=s.parameters)===null||B===void 0||(x=B.docs)===null||x===void 0?void 0:x.description}}};n.parameters={...n.parameters,docs:{...(P=n.parameters)===null||P===void 0?void 0:P.docs,source:{originalSource:`{
  name: "Header — com botão de voltar",
  args: {
    namePage: "Detalhes do usuário",
    withBackButton: true,
    onClickBackButton: () => {},
    children: <PageContent />
  }
}`,...(w=n.parameters)===null||w===void 0||(f=w.docs)===null||f===void 0?void 0:f.source},description:{story:"Header com botão de voltar.\r\nA descrição é recuada automaticamente para se alinhar ao título\r\nquando `withBackButton` é `true`.",...(k=n.parameters)===null||k===void 0||(j=k.docs)===null||j===void 0?void 0:j.description}}};d.parameters={...d.parameters,docs:{...(C=d.parameters)===null||C===void 0?void 0:C.docs,source:{originalSource:`{
  name: "Header — com descrição",
  args: {
    namePage: "Usuários",
    description: "Gerencie os membros e as permissões do workspace.",
    children: <PageContent />
  }
}`,...(D=d.parameters)===null||D===void 0||(z=D.docs)===null||z===void 0?void 0:z.source},description:{story:`Header com descrição abaixo do título.\r
Use para contextualizar o propósito da página ao usuário.`,...(A=d.parameters)===null||A===void 0||(W=A.docs)===null||W===void 0?void 0:W.description}}};l.parameters={...l.parameters,docs:{...(L=l.parameters)===null||L===void 0?void 0:L.docs,source:{originalSource:`{
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
}`,...(R=l.parameters)===null||R===void 0||(S=R.docs)===null||S===void 0?void 0:S.source},description:{story:`Header com ação primária única.\r
Padrão mais comum em listagens: título à esquerda, botão de criação à direita.`,...(q=l.parameters)===null||q===void 0||(U=q.docs)===null||U===void 0?void 0:U.description}}};c.parameters={...c.parameters,docs:{...(F=c.parameters)===null||F===void 0?void 0:F.docs,source:{originalSource:`{
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
}`,...(H=c.parameters)===null||H===void 0||(M=H.docs)===null||M===void 0?void 0:M.source},description:{story:`Header com múltiplas ações.\r
Use quando há uma ação principal e uma ou mais ações secundárias.`,...(E=c.parameters)===null||E===void 0||(N=E.docs)===null||N===void 0?void 0:N.description}}};m.parameters={...m.parameters,docs:{...(G=m.parameters)===null||G===void 0?void 0:G.docs,source:{originalSource:`{
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
}`,...(T=m.parameters)===null||T===void 0||(V=T.docs)===null||V===void 0?void 0:V.source},description:{story:`Composição completa com todos os slots ativos:\r
botão de voltar, título, descrição, ações e conteúdo.\r
Demonstra o layout mais completo possível do componente.`,...(I=m.parameters)===null||I===void 0||(O=I.docs)===null||O===void 0?void 0:O.description}}};u.parameters={...u.parameters,docs:{...(Q=u.parameters)===null||Q===void 0?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=u.parameters)===null||Z===void 0||(J=Z.docs)===null||J===void 0?void 0:J.source},description:{story:`Página de listagem de usuários — padrão de tabela com ação de criação.\r
Layout típico de dashboards administrativos.`,...(K=u.parameters)===null||K===void 0||($=K.docs)===null||$===void 0?void 0:$.description}}};p.parameters={...p.parameters,docs:{...(X=p.parameters)===null||X===void 0?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=p.parameters)===null||ee===void 0||(Y=ee.docs)===null||Y===void 0?void 0:Y.source},description:{story:`Página de detalhes com botão de voltar — layout de detalhe/edição.\r
O recuo da descrição alinha com o título, ignorando a largura do botão de voltar.`,...(oe=p.parameters)===null||oe===void 0||(ae=oe.docs)===null||ae===void 0?void 0:ae.description}}};v.parameters={...v.parameters,docs:{...(re=v.parameters)===null||re===void 0?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=v.parameters)===null||ie===void 0||(te=ie.docs)===null||te===void 0?void 0:te.source},description:{story:"Layout mobile (≤ 768px) — botões de ação com label são ocultados e\r\nsubstituídos pelos `ButtonIcon` equivalentes para economizar espaço no header.",...(ne=v.parameters)===null||ne===void 0||(se=ne.docs)===null||se===void 0?void 0:se.description}}};const ke=["Default","WithBackButton","WithDescription","WithSingleAction","WithMultipleActions","FullPage","UserListPage","DetailPage","MobileLayout"];export{s as Default,p as DetailPage,m as FullPage,v as MobileLayout,u as UserListPage,n as WithBackButton,d as WithDescription,c as WithMultipleActions,l as WithSingleAction,ke as __namedExportsOrder,je as default};
