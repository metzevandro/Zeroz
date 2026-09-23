import{j as e}from"./iframe-CxNvl9BI.js";import{B as u}from"./Breadcrumb-HkXylJyb.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./Link-CXf21LbM.js";import"./Skeleton-C80QNm7w.js";import"./Icon-Bqm0CoJD.js";const k={title:"Components/Breadcrumb",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
O **Breadcrumb** exibe uma trilha de navegação horizontal indicando a localização
atual do usuário dentro da hierarquia da aplicação.

> O componente é **ocultado em viewports ≤ 768px** via CSS.
> Em mobile, considere expor apenas o item anterior como link de retorno.

### Regras de renderização
- Todos os itens exceto o último são renderizados como links navegáveis
- O último item representa a página atual — renderizado como texto simples com \`aria-current="page"\` (sem link)
- Um separador chevron (\`keyboard_arrow_right\`) é exibido entre os itens, nunca após o último

### Acessibilidade
- Envolvido em \`<nav aria-label="Breadcrumb">\` para landmark de navegação
- Usa \`<ol>\` — elemento semântico correto para etapas sequenciais
- Último item com \`aria-current="page"\` conforme WCAG 2.1 SC 2.4.8

### Quando usar
- Hierarquias de múltiplos níveis: e-commerce, dashboards, CMS, documentação
- Fluxos de configuração com seções aninhadas
- Qualquer contexto onde o usuário precisa entender onde está e poder voltar

### Quando não usar
- Navegação plana ou de único nível — o breadcrumb não agrega valor
- Como único mecanismo de navegação em mobile — ele fica oculto abaixo de 768px
- Com apenas um item — uma trilha de um nível não tem valor navegacional
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10020"}},argTypes:{items:{control:"object",description:"Array ordenado de itens da trilha. O último item é a página atual (texto simples com `aria-current`, sem link).",table:{type:{summary:"BreadcrumbItem[]"}}}}},g=[{pageName:"Início",href:"/"},{pageName:"Produtos",href:"/produtos"}],l=[{pageName:"Início",href:"/"},{pageName:"Produtos",href:"/produtos"},{pageName:"Notebooks",href:"/produtos/notebooks"}],x=[{pageName:"Início",href:"/"},{pageName:"Loja",href:"/loja"},{pageName:"Eletrônicos",href:"/loja/eletronicos"},{pageName:"Notebooks",href:"/loja/eletronicos/notebooks"}],h=[{pageName:"Início",href:"/"},{pageName:"Loja",href:"/loja"},{pageName:"Eletrônicos",href:"/loja/eletronicos"},{pageName:"Notebooks",href:"/loja/eletronicos/notebooks"},{pageName:"MacBook Pro",href:"/loja/eletronicos/notebooks/macbook-pro"}],a={name:"Playground",args:{items:l}},o={name:"Dois níveis",args:{items:g}},r={name:"Três níveis",args:{items:l}},s={name:"Quatro níveis",args:{items:x}},n={name:"Cinco níveis (hierarquia profunda)",args:{items:h}},i={name:"Contexto real — E-commerce",render:()=>e.jsxs("div",{style:{padding:"16px"},children:[e.jsx(u,{items:[{pageName:"Início",href:"/"},{pageName:"Eletrônicos",href:"/eletronicos"},{pageName:"Notebooks",href:"/eletronicos/notebooks"},{pageName:'MacBook Pro 14"',href:"/eletronicos/notebooks/macbook-pro-14"}]}),e.jsx("h1",{style:{marginTop:"16px",fontSize:"24px",fontWeight:700},children:'MacBook Pro 14"'})]})},t={name:"Contexto real — Dashboard",render:()=>e.jsx("div",{style:{padding:"16px"},children:e.jsx(u,{items:[{pageName:"Dashboard",href:"/dashboard"},{pageName:"Configurações",href:"/dashboard/configuracoes"},{pageName:"Notificações",href:"/dashboard/configuracoes/notificacoes"}]})})},c={name:"Contexto real — dentro do Header",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",padding:"12px 24px",background:"var(--s-color-fill-default, #fff)",borderBottom:"1px solid var(--s-color-border-default, #eee)",width:"500px"},children:e.jsx(u,{items:[{pageName:"Dashboard",href:"/dashboard"},{pageName:"Usuários",href:"/dashboard/usuarios"},{pageName:"Perfil",href:"/dashboard/usuarios/perfil"}]})})},m={name:"Edge case — item único",args:{items:[{pageName:"Início",href:"/"}]}},d={name:"Edge case — labels longos",args:{items:[{pageName:"Início",href:"/"},{pageName:"Soluções Empresariais",href:"/empresarial"},{pageName:"Gerenciamento de Infraestrutura em Nuvem",href:"/empresarial/nuvem"}]}},p={name:"Edge case — caracteres especiais",args:{items:[{pageName:"Início",href:"/"},{pageName:"Configurações & Preferências",href:"/configuracoes"},{pageName:"Notificações por E-mail",href:"/configuracoes/notificacoes"}]}},D=["Playground","TwoLevels","ThreeLevels","FourLevels","FiveLevels","EcommerceTrail","DashboardTrail","InsideHeader","SingleItem","LongLabels","SpecialChars"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Playground",
  args: {
    items: TRAIL_3
  }
}`,...a.parameters?.docs?.source},description:{story:"Story interativa para explorar o componente via Controls.\r\nEdite o array `items` no painel para testar diferentes trilhas.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Dois níveis",
  args: {
    items: TRAIL_2
  }
}`,...o.parameters?.docs?.source},description:{story:`Dois níveis — profundidade mínima com valor navegacional.\r
Representa raiz + página atual. Menos que isso não tem utilidade como breadcrumb.`,...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Três níveis",
  args: {
    items: TRAIL_3
  }
}`,...r.parameters?.docs?.source},description:{story:`Três níveis — profundidade padrão para a maioria das hierarquias de aplicação.\r
Cobre a combinação mais comum: raiz → seção → página atual.`,...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Quatro níveis",
  args: {
    items: TRAIL_4
  }
}`,...s.parameters?.docs?.source},description:{story:`Quatro níveis — hierarquia intermediária.\r
Comum em dashboards com subseções: raiz → módulo → seção → página atual.`,...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Cinco níveis (hierarquia profunda)",
  args: {
    items: TRAIL_5
  }
}`,...n.parameters?.docs?.source},description:{story:`Cinco níveis — hierarquia profunda.\r
Valida o comportamento com trilhas longas. Em produção, considere truncar\r
os itens do meio para evitar sobrecarga visual.`,...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — E-commerce",
  render: () => <div style={{
    padding: "16px"
  }}>\r
      <Breadcrumb items={[{
      pageName: "Início",
      href: "/"
    }, {
      pageName: "Eletrônicos",
      href: "/eletronicos"
    }, {
      pageName: "Notebooks",
      href: "/eletronicos/notebooks"
    }, {
      pageName: 'MacBook Pro 14"',
      href: "/eletronicos/notebooks/macbook-pro-14"
    }]} />\r
      <h1 style={{
      marginTop: "16px",
      fontSize: "24px",
      fontWeight: 700
    }}>\r
        MacBook Pro 14"\r
      </h1>\r
    </div>
}`,...i.parameters?.docs?.source},description:{story:`Trilha de e-commerce — categoria → subcategoria → produto.\r
Demonstra o uso em páginas de produto com título de página abaixo.`,...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — Dashboard",
  render: () => <div style={{
    padding: "16px"
  }}>\r
      <Breadcrumb items={[{
      pageName: "Dashboard",
      href: "/dashboard"
    }, {
      pageName: "Configurações",
      href: "/dashboard/configuracoes"
    }, {
      pageName: "Notificações",
      href: "/dashboard/configuracoes/notificacoes"
    }]} />\r
    </div>
}`,...t.parameters?.docs?.source},description:{story:`Trilha de dashboard — módulo de configurações com subseção.\r
Padrão típico de painéis administrativos com navegação aninhada.`,...t.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — dentro do Header",
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    padding: "12px 24px",
    background: "var(--s-color-fill-default, #fff)",
    borderBottom: "1px solid var(--s-color-border-default, #eee)",
    width: "500px"
  }}>\r
      <Breadcrumb items={[{
      pageName: "Dashboard",
      href: "/dashboard"
    }, {
      pageName: "Usuários",
      href: "/dashboard/usuarios"
    }, {
      pageName: "Perfil",
      href: "/dashboard/usuarios/perfil"
    }]} />\r
    </div>
}`,...c.parameters?.docs?.source},description:{story:`Trilha integrada ao Header — uso real dentro do AppShell.\r
Demonstra como o Breadcrumb se comporta quando compõe o Header da aplicação.`,...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Edge case — item único",
  args: {
    items: [{
      pageName: "Início",
      href: "/"
    }]
  }
}`,...m.parameters?.docs?.source},description:{story:'Item único — edge case sem valor navegacional.\r\nRenderiza como texto com `aria-current="page"` sem nenhum link.\r\nEvite em produção: uma trilha de um item não orienta o usuário.',...m.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Edge case — labels longos",
  args: {
    items: [{
      pageName: "Início",
      href: "/"
    }, {
      pageName: "Soluções Empresariais",
      href: "/empresarial"
    }, {
      pageName: "Gerenciamento de Infraestrutura em Nuvem",
      href: "/empresarial/nuvem"
    }]
  }
}`,...d.parameters?.docs?.source},description:{story:`Labels longos — valida o comportamento de layout com nomes de página extensos.\r
Mantenha os nomes curtos em produção para melhor legibilidade.`,...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Edge case — caracteres especiais",
  args: {
    items: [{
      pageName: "Início",
      href: "/"
    }, {
      pageName: "Configurações & Preferências",
      href: "/configuracoes"
    }, {
      pageName: "Notificações por E-mail",
      href: "/configuracoes/notificacoes"
    }]
  }
}`,...p.parameters?.docs?.source},description:{story:`Caracteres especiais e acentuação — valida renderização com texto em PT-BR\r
contendo acentos, cedilhas e outros caracteres Unicode comuns.`,...p.parameters?.docs?.description}}};export{t as DashboardTrail,i as EcommerceTrail,n as FiveLevels,s as FourLevels,c as InsideHeader,d as LongLabels,a as Playground,m as SingleItem,p as SpecialChars,r as ThreeLevels,o as TwoLevels,D as __namedExportsOrder,k as default};
