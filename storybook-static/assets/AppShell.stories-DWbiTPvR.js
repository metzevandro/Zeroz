import{r as g,j as e}from"./iframe-CxNvl9BI.js";import{A as m,S as p,a as b,b as a,c as t}from"./SidebarSubItem-CRLGyUh8.js";import{P as u}from"./Page-CnSCqIRQ.js";/* empty css               */import{H as S,a as f}from"./HeaderProfile-vDoOGCpk.js";import{D as h,a as c}from"./Dropdown-CP3gwo0h.js";import{B as x}from"./Breadcrumb-HkXylJyb.js";import"./preload-helper-PPVm8Dsz.js";import"./Brand-r7_AXlLh.js";import"./ButtonIcon-BvrW2_xY.js";import"./Icon-Bqm0CoJD.js";import"./Skeleton-C80QNm7w.js";import"./Avatar-CdL7RA1a.js";import"./Link-CXf21LbM.js";const J={title:"Templates/AppShell",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:'\n**AppShell** é o wrapper de layout mais externo da aplicação.\n\nFornece a classe raiz `app-shell` e atua como o limite de composição\npara o layout completo — sempre composto por `<Header>`, `<Sidebar>` e área de conteúdo principal.\n\n> ⚠️ A `<Sidebar>` é **obrigatória**: o grid CSS usa `grid-template-areas: "aside header" / "aside main"`\n> e sem a área `aside` preenchida o layout quebra.\n\n### Comportamento do toggle\nO botão hambúrguer do `<Header>` (prop `onClick`) deve ser conectado ao mesmo\nestado que controla a prop `toggle` da `<Sidebar>`. As stories abaixo demonstram\nesse vínculo com `useState`.\n\n### Responsividade\nEm viewports `≤ 768px` o grid passa a coluna única (`header / main`).\nA Sidebar se torna um overlay — controlada pelo mesmo estado de toggle.\n        '}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=2416-4559"}},argTypes:{children:{control:!1,description:"Layout completo — deve conter obrigatoriamente `<Header>`, `<Sidebar>` e área de conteúdo principal.",table:{type:{summary:"React.ReactNode"}}}}},n={name:"Default (Sidebar Expandida)",render:()=>{const[o,r]=g.useState(!1);return e.jsxs(m,{children:[e.jsx(S,{onClick:()=>r(i=>!i),breadcrumb:e.jsx(x,{items:[{pageName:"Settings",href:"#"}]}),children:e.jsx(f,{name:"Jane Doe",letter:"J",children:e.jsxs(h,{visible:!0,children:[e.jsx(c,{label:"My profile",onClick:()=>{}}),e.jsx(c,{label:"Sign out",onClick:()=>{}})]})})}),e.jsxs(p,{brand:"/logo-sm.svg",brandSize:"md",toggle:o,setToggleSidebar:r,children:[e.jsx(b,{title:"Main"}),e.jsx(a,{title:"Dashboard",icon:"home",fillIcon:!1}),e.jsx(a,{title:"Analytics",icon:"bar_chart",fillIcon:!1}),e.jsxs(a,{title:"Settings",icon:"settings",fillIcon:!1,children:[e.jsx(t,{title:"Profile",active:!0,onClick:()=>{}}),e.jsx(t,{title:"Account",active:!1,onClick:()=>{}}),e.jsx(t,{title:"Billing",active:!1,onClick:()=>{}})]})]}),e.jsx(u,{namePage:"Profile settings",description:"Update your personal information.",withBackButton:!0})]})}},l={name:"Sidebar Colapsada",globals:{viewport:{value:"mobile5",isRotated:!1}},render:()=>{const[o,r]=g.useState(!0);return e.jsxs(m,{children:[e.jsx(S,{onClick:()=>r(i=>!i),breadcrumb:e.jsx(x,{items:[{pageName:"Dashboard",href:"#"}]}),children:e.jsx(f,{name:"Jane Doe",letter:"J",children:e.jsx(h,{visible:!0,children:e.jsx(c,{label:"Sign out",onClick:()=>{}})})})}),e.jsxs(p,{brand:"/logo-sm.svg",brandSize:"md",toggle:o,setToggleSidebar:r,children:[e.jsx(b,{title:"Main"}),e.jsx(a,{title:"Dashboard",icon:"home",fillIcon:!1}),e.jsx(a,{title:"Analytics",icon:"bar_chart",fillIcon:!1}),e.jsxs(a,{title:"Settings",icon:"settings",fillIcon:!1,children:[e.jsx(t,{title:"Profile",active:!0,onClick:()=>{}}),e.jsx(t,{title:"Account",active:!1,onClick:()=>{}})]})]}),e.jsx(u,{namePage:"Dashboard",description:"Overview of your account activity."})]})}},s={name:"Com Breadcrumb Aninhado",render:()=>{const[o,r]=g.useState(!1);return e.jsxs(m,{children:[e.jsx(S,{onClick:()=>r(i=>!i),breadcrumb:e.jsx(x,{items:[{pageName:"Settings",href:"#"},{pageName:"Account",href:"#"},{pageName:"Billing",href:"#"}]}),children:e.jsx(f,{name:"Jane Doe",letter:"J",children:e.jsx(h,{visible:!0,children:e.jsx(c,{label:"Sign out",onClick:()=>{}})})})}),e.jsxs(p,{brand:"/logo-sm.svg",brandSize:"md",toggle:o,setToggleSidebar:r,children:[e.jsx(b,{title:"Main"}),e.jsx(a,{title:"Dashboard",icon:"home",fillIcon:!1}),e.jsxs(a,{title:"Settings",icon:"settings",fillIcon:!1,children:[e.jsx(t,{title:"Profile",active:!1,onClick:()=>{}}),e.jsx(t,{title:"Account",active:!1,onClick:()=>{}}),e.jsx(t,{title:"Billing",active:!0,onClick:()=>{}})]})]}),e.jsx(u,{namePage:"Billing",description:"Manage your subscription and payment methods.",withBackButton:!0})]})}},d={name:"Layout Mobile (375 px)",globals:{viewport:{value:"mobile5",isRotated:!1}},render:()=>{const[o,r]=g.useState(!1);return e.jsxs(m,{children:[e.jsx(S,{onClick:()=>r(i=>!i),breadcrumb:e.jsx(x,{items:[{pageName:"Dashboard",href:"#"}]}),children:e.jsx(f,{name:"Jane Doe",letter:"J",children:e.jsx(h,{visible:!0,children:e.jsx(c,{label:"Sign out",onClick:()=>{}})})})}),e.jsxs(p,{brand:"/logo-sm.svg",brandSize:"md",toggle:o,setToggleSidebar:r,children:[e.jsx(b,{title:"Main"}),e.jsx(a,{title:"Dashboard",icon:"home",fillIcon:!1}),e.jsxs(a,{title:"Settings",icon:"settings",fillIcon:!1,children:[e.jsx(t,{title:"Profile",active:!0,onClick:()=>{}}),e.jsx(t,{title:"Account",active:!1,onClick:()=>{}})]})]}),e.jsx(u,{namePage:"Dashboard",description:"Overview of your account activity."})]})}},M=["Default","CollapsedSidebar","NestedBreadcrumb","MobileLayout"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Default (Sidebar Expandida)",
  render: () => {
    const [toggle, setToggle] = useState(false);
    return <AppShell>\r
        <Header onClick={() => setToggle(prev => !prev)} breadcrumb={<Breadcrumb items={[{
        pageName: "Settings",
        href: "#"
      }]} />}>\r
          <HeaderProfile name="Jane Doe" letter="J">\r
            <Dropdown visible={true}>\r
              <DropdownItem label="My profile" onClick={() => {}} />\r
              <DropdownItem label="Sign out" onClick={() => {}} />\r
            </Dropdown>\r
          </HeaderProfile>\r
        </Header>\r
\r
        <Sidebar brand="/logo-sm.svg" brandSize="md" toggle={toggle} setToggleSidebar={setToggle}>\r
          <SidebarTitle title="Main" />\r
          <SidebarItem title="Dashboard" icon="home" fillIcon={false} />\r
          <SidebarItem title="Analytics" icon="bar_chart" fillIcon={false} />\r
          <SidebarItem title="Settings" icon="settings" fillIcon={false}>\r
            <SidebarSubItem title="Profile" active={true} onClick={() => {}} />\r
            <SidebarSubItem title="Account" active={false} onClick={() => {}} />\r
            <SidebarSubItem title="Billing" active={false} onClick={() => {}} />\r
          </SidebarItem>\r
        </Sidebar>\r
\r
        <Page namePage="Profile settings" description="Update your personal information." withBackButton />\r
      </AppShell>;
  }
}`,...n.parameters?.docs?.source},description:{story:"Layout padrão com sidebar expandida.\r\nO `onClick` do Header está conectado ao estado de toggle da Sidebar —\r\nclique no ícone hambúrguer para colapsar/expandir.",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Sidebar Colapsada",
  globals: {
    viewport: {
      value: "mobile5",
      isRotated: false
    }
  },
  render: () => {
    const [toggle, setToggle] = useState(true);
    return <AppShell>\r
        <Header onClick={() => setToggle(prev => !prev)} breadcrumb={<Breadcrumb items={[{
        pageName: "Dashboard",
        href: "#"
      }]} />}>\r
          <HeaderProfile name="Jane Doe" letter="J">\r
            <Dropdown visible={true}>\r
              <DropdownItem label="Sign out" onClick={() => {}} />\r
            </Dropdown>\r
          </HeaderProfile>\r
        </Header>\r
\r
        <Sidebar brand="/logo-sm.svg" brandSize="md" toggle={toggle} setToggleSidebar={setToggle}>\r
          <SidebarTitle title="Main" />\r
          <SidebarItem title="Dashboard" icon="home" fillIcon={false} />\r
          <SidebarItem title="Analytics" icon="bar_chart" fillIcon={false} />\r
          <SidebarItem title="Settings" icon="settings" fillIcon={false}>\r
            <SidebarSubItem title="Profile" active={true} onClick={() => {}} />\r
            <SidebarSubItem title="Account" active={false} onClick={() => {}} />\r
          </SidebarItem>\r
        </Sidebar>\r
\r
        <Page namePage="Dashboard" description="Overview of your account activity." />\r
      </AppShell>;
  }
}`,...l.parameters?.docs?.source},description:{story:`Layout com sidebar iniciando no estado colapsado (\`toggle=true\`).\r
O Header continua conectado ao mesmo estado — clique no ícone hambúrguer para expandir.\r
Esta story é renderizada em viewport mobile para demonstrar o comportamento\r
de overlay da Sidebar em telas estreitas (≤ 768px).`,...l.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Com Breadcrumb Aninhado",
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
            <Dropdown visible={true}>\r
              <DropdownItem label="Sign out" onClick={() => {}} />\r
            </Dropdown>\r
          </HeaderProfile>\r
        </Header>\r
\r
        <Sidebar brand="/logo-sm.svg" brandSize="md" toggle={toggle} setToggleSidebar={setToggle}>\r
          <SidebarTitle title="Main" />\r
          <SidebarItem title="Dashboard" icon="home" fillIcon={false} />\r
          <SidebarItem title="Settings" icon="settings" fillIcon={false}>\r
            <SidebarSubItem title="Profile" active={false} onClick={() => {}} />\r
            <SidebarSubItem title="Account" active={false} onClick={() => {}} />\r
            <SidebarSubItem title="Billing" active={true} onClick={() => {}} />\r
          </SidebarItem>\r
        </Sidebar>\r
\r
        <Page namePage="Billing" description="Manage your subscription and payment methods." withBackButton />\r
      </AppShell>;
  }
}`,...s.parameters?.docs?.source},description:{story:`Layout com breadcrumb de múltiplos níveis no Header.\r
Valida o comportamento com rotas mais profundas na navegação.`,...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Layout Mobile (375 px)",
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
        pageName: "Dashboard",
        href: "#"
      }]} />}>\r
          <HeaderProfile name="Jane Doe" letter="J">\r
            <Dropdown visible={true}>\r
              <DropdownItem label="Sign out" onClick={() => {}} />\r
            </Dropdown>\r
          </HeaderProfile>\r
        </Header>\r
\r
        <Sidebar brand="/logo-sm.svg" brandSize="md" toggle={toggle} setToggleSidebar={setToggle}>\r
          <SidebarTitle title="Main" />\r
          <SidebarItem title="Dashboard" icon="home" fillIcon={false} />\r
          <SidebarItem title="Settings" icon="settings" fillIcon={false}>\r
            <SidebarSubItem title="Profile" active={true} onClick={() => {}} />\r
            <SidebarSubItem title="Account" active={false} onClick={() => {}} />\r
          </SidebarItem>\r
        </Sidebar>\r
\r
        <Page namePage="Dashboard" description="Overview of your account activity." />\r
      </AppShell>;
  }
}`,...d.parameters?.docs?.source},description:{story:`Layout renderizado em viewport mobile (375 × 812 px).\r
Em telas ≤ 768px o grid passa para coluna única (header → main)\r
e a Sidebar assume comportamento de overlay, controlada pelo toggle do Header.`,...d.parameters?.docs?.description}}};export{l as CollapsedSidebar,n as Default,d as MobileLayout,s as NestedBreadcrumb,M as __namedExportsOrder,J as default};
