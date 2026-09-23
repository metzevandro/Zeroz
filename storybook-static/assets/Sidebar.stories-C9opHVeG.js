import{j as e,r as c}from"./iframe-CxNvl9BI.js";/* empty css               */import{S as s,a as n,b as a,c as r,A as S}from"./SidebarSubItem-CRLGyUh8.js";import{H as v,a as f}from"./HeaderProfile-vDoOGCpk.js";import{D as x,a as h}from"./Dropdown-CP3gwo0h.js";import{B as I}from"./Breadcrumb-HkXylJyb.js";import{P as C}from"./Page-CnSCqIRQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Brand-r7_AXlLh.js";import"./ButtonIcon-BvrW2_xY.js";import"./Icon-Bqm0CoJD.js";import"./Skeleton-C80QNm7w.js";import"./Avatar-CdL7RA1a.js";import"./Link-CXf21LbM.js";const U={title:"Components/Sidebar",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
O **Sidebar** é o drawer de navegação principal da aplicação.

Componha com os subcomponentes para construir a estrutura de navegação:

| Subcomponente     | Descrição                                                          |
|-------------------|--------------------------------------------------------------------|
| \`SidebarTitle\`   | Cabeçalho de seção exibido acima de um grupo de itens              |
| \`SidebarItem\`    | Item de navegação com ícone — pode conter sub-itens (acordeão)     |
| \`SidebarSubItem\` | Item de navegação aninhado dentro de um \`SidebarItem\` expandido   |

### Acordeão
Itens com \`children\` se comportam como acordeões — apenas um item pode
estar expandido por vez. O estado é gerenciado centralmente pelo \`Sidebar\`
e injetado nos itens via \`React.cloneElement\`.

### Responsividade
Em viewports \`≤ 768px\` a sidebar muda para modo overlay:
- Entra pela esquerda com transição de 0.5s
- Exibe um overlay semitransparente atrás
- Pode ser fechada pelo overlay ou pelo botão X no canto superior direito

### Quando usar
- Como estrutura de navegação primária em dashboards e painéis administrativos
- Sempre em conjunto com \`<Header>\` e \`<AppShell>\` para o frame completo da aplicação

### Boas práticas
- Use \`<SidebarTitle>\` para agrupar itens por contexto
- Mantenha os labels curtos — uma ou duas palavras
- Marque o \`<SidebarSubItem>\` ativo para refletir a rota atual
- Conecte \`setToggleSidebar\` ao \`onClick\` do hambúrguer do \`<Header>\`
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10079"}},argTypes:{toggle:{control:"boolean",description:"Controla o estado aberto/fechado da sidebar.",table:{type:{summary:"boolean"}}},brand:{control:"text",description:"URL ou caminho da imagem do logotipo exibido no topo.",table:{type:{summary:"string"}}},brandSize:{control:"select",options:["sm","md","lg"],description:"Tamanho do logotipo da marca.",table:{type:{summary:'"sm" | "md" | "lg"'}}},children:{control:!1,description:"Conteúdo da navegação — componha com `SidebarTitle`, `SidebarItem` e `SidebarSubItem`.",table:{type:{summary:"React.ReactNode"}}},setToggleSidebar:{action:"setToggleSidebar",description:"Callback disparado quando a sidebar deve mudar de estado.",table:{type:{summary:"(toggle: boolean) => void"}}}}},u="https://placehold.co/300x120/png",d={name:"Default",render:()=>{const[l,o]=c.useState(!0),[i,t]=c.useState("dashboard");return e.jsx("div",{style:{height:"100vh",position:"relative"},children:e.jsxs(s,{brand:u,brandSize:"md",toggle:l,setToggleSidebar:o,children:[e.jsx(n,{title:"Principal"}),e.jsx(a,{title:"Dashboard",icon:"home",fillIcon:!1,onClick:()=>t("dashboard")}),e.jsx(a,{title:"Analytics",icon:"bar_chart",fillIcon:!1,onClick:()=>t("analytics")}),e.jsx(n,{title:"Configurações"}),e.jsxs(a,{title:"Conta",icon:"manage_accounts",fillIcon:!1,children:[e.jsx(r,{title:"Perfil",active:i==="perfil",onClick:()=>t("perfil")}),e.jsx(r,{title:"Segurança",active:i==="seguranca",onClick:()=>t("seguranca")}),e.jsx(r,{title:"Faturamento",active:i==="faturamento",onClick:()=>t("faturamento")})]}),e.jsxs(a,{title:"Integrações",icon:"extension",fillIcon:!1,children:[e.jsx(r,{title:"Chaves de API",active:i==="api",onClick:()=>t("api")}),e.jsx(r,{title:"Webhooks",active:i==="webhooks",onClick:()=>t("webhooks")})]})]})})}},m={name:"Navegação plana (sem sub-itens)",render:()=>{const[l,o]=c.useState(!0),[i,t]=c.useState("inicio");return e.jsx("div",{style:{height:"100vh",position:"relative"},children:e.jsxs(s,{brand:u,brandSize:"md",toggle:l,setToggleSidebar:o,children:[e.jsx(n,{title:"Navegação"}),e.jsx(a,{title:"Início",icon:"home",fillIcon:i==="inicio",onClick:()=>t("inicio")}),e.jsx(a,{title:"Usuários",icon:"people",fillIcon:i==="usuarios",onClick:()=>t("usuarios")}),e.jsx(a,{title:"Pedidos",icon:"shopping_bag",fillIcon:i==="pedidos",onClick:()=>t("pedidos")}),e.jsx(a,{title:"Relatórios",icon:"description",fillIcon:i==="relatorios",onClick:()=>t("relatorios")}),e.jsx(a,{title:"Configurações",icon:"settings",fillIcon:i==="configuracoes",onClick:()=>t("configuracoes")})]})})}},j=()=>e.jsxs(s,{brand:u,brandSize:"sm",toggle:!0,setToggleSidebar:()=>{},children:[e.jsx(n,{title:"brand: sm"}),e.jsx(a,{title:"Início",icon:"home",fillIcon:!1}),e.jsx(a,{title:"Usuários",icon:"people",fillIcon:!1})]}),k=()=>e.jsxs(s,{brand:u,brandSize:"md",toggle:!0,setToggleSidebar:()=>{},children:[e.jsx(n,{title:"brand: md"}),e.jsx(a,{title:"Início",icon:"home",fillIcon:!1}),e.jsx(a,{title:"Usuários",icon:"people",fillIcon:!1})]}),y=()=>e.jsxs(s,{brand:u,brandSize:"lg",toggle:!0,setToggleSidebar:()=>{},children:[e.jsx(n,{title:"brand: lg"}),e.jsx(a,{title:"Início",icon:"home",fillIcon:!1}),e.jsx(a,{title:"Usuários",icon:"people",fillIcon:!1})]}),p={name:"Tamanhos de logo — sm / md / lg",render:()=>e.jsxs("div",{style:{display:"flex",height:"100vh"},children:[e.jsx(j,{}),e.jsx(k,{}),e.jsx(y,{})]})},g={name:"Mobile — overlay (≤ 768px)",globals:{viewport:{value:"mobile5",isRotated:!1}},render:()=>{const[l,o]=c.useState(!1);return e.jsxs(S,{children:[e.jsx(v,{onClick:()=>o(i=>!i),breadcrumb:e.jsx(I,{items:[{pageName:"Settings",href:"#"}]}),children:e.jsx(f,{name:"Jane Doe",letter:"J",children:e.jsx(x,{visible:!0,children:e.jsx(h,{label:"Sair",onClick:()=>{}})})})}),e.jsxs(s,{brand:"/logo-sm.svg",brandSize:"md",toggle:l,setToggleSidebar:o,children:[e.jsx(n,{title:"Principal"}),e.jsx(a,{title:"Configurações",icon:"settings",fillIcon:!1,isActive:!0})]}),e.jsx(C,{namePage:"Configurações"})]})}},b={name:"Contexto real — dentro do AppShell",render:()=>{const[l,o]=c.useState(!1);return e.jsxs(S,{children:[e.jsx(v,{onClick:()=>o(i=>!i),breadcrumb:e.jsx(I,{items:[{pageName:"Settings",href:"#"},{pageName:"Account",href:"#"},{pageName:"Billing",href:"#"}]}),children:e.jsx(f,{name:"Jane Doe",letter:"J",children:e.jsx(x,{visible:!0,children:e.jsx(h,{label:"Sair",onClick:()=>{}})})})}),e.jsxs(s,{brand:"/logo-sm.svg",brandSize:"md",toggle:l,setToggleSidebar:o,children:[e.jsx(n,{title:"Principal"}),e.jsx(a,{title:"Dashboard",icon:"home",fillIcon:!1}),e.jsxs(a,{title:"Configurações",icon:"settings",fillIcon:!1,children:[e.jsx(r,{title:"Perfil",active:!1,onClick:()=>{}}),e.jsx(r,{title:"Conta",active:!1,onClick:()=>{}}),e.jsx(r,{title:"Faturamento",active:!0,onClick:()=>{}})]})]}),e.jsx(C,{namePage:"Faturamento",description:"Gerencie sua assinatura e métodos de pagamento.",withBackButton:!0})]})}},J=["Default","FlatNavigation","BrandSizes","MobileOverlay","WithAppShell"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Default",
  render: () => {
    const [open, setOpen] = useState(true);
    const [active, setActive] = useState("dashboard");
    return <div style={{
      height: "100vh",
      position: "relative"
    }}>\r
        <Sidebar brand={LOGO} brandSize="md" toggle={open} setToggleSidebar={setOpen}>\r
          <SidebarTitle title="Principal" />\r
          <SidebarItem title="Dashboard" icon="home" fillIcon={false} onClick={() => setActive("dashboard")} />\r
          <SidebarItem title="Analytics" icon="bar_chart" fillIcon={false} onClick={() => setActive("analytics")} />\r
\r
          <SidebarTitle title="Configurações" />\r
          <SidebarItem title="Conta" icon="manage_accounts" fillIcon={false}>\r
            <SidebarSubItem title="Perfil" active={active === "perfil"} onClick={() => setActive("perfil")} />\r
            <SidebarSubItem title="Segurança" active={active === "seguranca"} onClick={() => setActive("seguranca")} />\r
            <SidebarSubItem title="Faturamento" active={active === "faturamento"} onClick={() => setActive("faturamento")} />\r
          </SidebarItem>\r
          <SidebarItem title="Integrações" icon="extension" fillIcon={false}>\r
            <SidebarSubItem title="Chaves de API" active={active === "api"} onClick={() => setActive("api")} />\r
            <SidebarSubItem title="Webhooks" active={active === "webhooks"} onClick={() => setActive("webhooks")} />\r
          </SidebarItem>\r
        </Sidebar>\r
      </div>;
  }
}`,...d.parameters?.docs?.source},description:{story:`Sidebar com navegação completa — títulos de seção, itens com e sem\r
sub-itens, e acordeão funcional. Clique nos itens com seta para expandir.`,...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Navegação plana (sem sub-itens)",
  render: () => {
    const [open, setOpen] = useState(true);
    const [active, setActive] = useState("inicio");
    return <div style={{
      height: "100vh",
      position: "relative"
    }}>\r
        <Sidebar brand={LOGO} brandSize="md" toggle={open} setToggleSidebar={setOpen}>\r
          <SidebarTitle title="Navegação" />\r
          <SidebarItem title="Início" icon="home" fillIcon={active === "inicio"} onClick={() => setActive("inicio")} />\r
          <SidebarItem title="Usuários" icon="people" fillIcon={active === "usuarios"} onClick={() => setActive("usuarios")} />\r
          <SidebarItem title="Pedidos" icon="shopping_bag" fillIcon={active === "pedidos"} onClick={() => setActive("pedidos")} />\r
          <SidebarItem title="Relatórios" icon="description" fillIcon={active === "relatorios"} onClick={() => setActive("relatorios")} />\r
          <SidebarItem title="Configurações" icon="settings" fillIcon={active === "configuracoes"} onClick={() => setActive("configuracoes")} />\r
        </Sidebar>\r
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:`Sidebar com itens simples sem sub-níveis.\r
Use quando a hierarquia de navegação é plana — sem seções aninhadas.`,...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Tamanhos de logo — sm / md / lg",
  render: () => <div style={{
    display: "flex",
    height: "100vh"
  }}>\r
      <SidebarSm />\r
      <SidebarMd />\r
      <SidebarLg />\r
    </div>
}`,...p.parameters?.docs?.source},description:{story:"Comparativo dos três tamanhos de logo disponíveis.\r\nUse `sm` em sidebars compactas, `md` como padrão e `lg` para destaque.",...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Mobile — overlay (≤ 768px)",
  globals: {
    viewport: {
      value: "mobile5",
      isRotated: false
    }
  },
  render: () => {
    const [toggle, setToggle] = useState(false);
    return <AppShell>\r
        <Header onClick={() => setToggle(prev => !prev)} breadcrumb={<Breadcrumb items={[{
        pageName: "Settings",
        href: "#"
      }]} />}>\r
          <HeaderProfile name="Jane Doe" letter="J">\r
            <Dropdown visible>\r
              <DropdownItem label="Sair" onClick={() => {}} />\r
            </Dropdown>\r
          </HeaderProfile>\r
        </Header>\r
\r
        <Sidebar brand="/logo-sm.svg" brandSize="md" toggle={toggle} setToggleSidebar={setToggle}>\r
          <SidebarTitle title="Principal" />\r
          <SidebarItem title="Configurações" icon="settings" fillIcon={false} isActive />\r
        </Sidebar>\r
\r
        <Page namePage="Configurações" />\r
      </AppShell>;
  }
}`,...g.parameters?.docs?.source},description:{story:`Sidebar no modo overlay mobile (≤ 768px).\r
Inicia fechada — clique em "Abrir sidebar" para ver a entrada pela esquerda\r
com overlay semitransparente. Feche pelo X ou clicando no overlay.`,...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — dentro do AppShell",
  render: () => {
    const [toggle, setToggle] = useState(false);
    return <AppShell>\r
        <Header onClick={() => setToggle(prev => !prev)} breadcrumb={<Breadcrumb items={[{
        pageName: "Settings",
        href: "#"
      }, {
        pageName: "Account",
        href: "#"
      }, {
        pageName: "Billing",
        href: "#"
      }]} />}>\r
          <HeaderProfile name="Jane Doe" letter="J">\r
            <Dropdown visible>\r
              <DropdownItem label="Sair" onClick={() => {}} />\r
            </Dropdown>\r
          </HeaderProfile>\r
        </Header>\r
\r
        <Sidebar brand="/logo-sm.svg" brandSize="md" toggle={toggle} setToggleSidebar={setToggle}>\r
          <SidebarTitle title="Principal" />\r
          <SidebarItem title="Dashboard" icon="home" fillIcon={false} />\r
          <SidebarItem title="Configurações" icon="settings" fillIcon={false}>\r
            <SidebarSubItem title="Perfil" active={false} onClick={() => {}} />\r
            <SidebarSubItem title="Conta" active={false} onClick={() => {}} />\r
            <SidebarSubItem title="Faturamento" active={true} onClick={() => {}} />\r
          </SidebarItem>\r
        </Sidebar>\r
\r
        <Page namePage="Faturamento" description="Gerencie sua assinatura e métodos de pagamento." withBackButton />\r
      </AppShell>;
  }
}`,...b.parameters?.docs?.source},description:{story:"Sidebar integrada ao layout completo do AppShell.\r\nO `onClick` do Header controla o toggle da Sidebar via `useState`.",...b.parameters?.docs?.description}}};export{p as BrandSizes,d as Default,m as FlatNavigation,g as MobileOverlay,b as WithAppShell,J as __namedExportsOrder,U as default};
