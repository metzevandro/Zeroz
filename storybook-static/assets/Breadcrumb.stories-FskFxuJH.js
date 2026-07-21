import{j as e}from"./iframe-C_0AXUlQ.js";import{B as p}from"./Breadcrumb-DZ1dlWfF.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./Link-BDHi57EP.js";import"./Skeleton-DNOAWNPr.js";import"./Icon-C3Uq1gPi.js";var u,v,g,_,h,f,b,N,L,x,T,y,I,S,C,k,E,P,j,B,D,F,w,z,R,A,H,q,M,O,Q,G,U,W,V,Z,J,K,X,Y,$,ee,ae,oe,re,se,ie,ne,de,te,me,ce,le,pe,ue;const Ie={title:"Components/Breadcrumb",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10020"}},argTypes:{items:{control:"object",description:"Array ordenado de itens da trilha. O último item é a página atual (texto simples com `aria-current`, sem link).",table:{type:{summary:"BreadcrumbItem[]"}}}}},ge=[{pageName:"Início",href:"/"},{pageName:"Produtos",href:"/produtos"}],ve=[{pageName:"Início",href:"/"},{pageName:"Produtos",href:"/produtos"},{pageName:"Notebooks",href:"/produtos/notebooks"}],_e=[{pageName:"Início",href:"/"},{pageName:"Loja",href:"/loja"},{pageName:"Eletrônicos",href:"/loja/eletronicos"},{pageName:"Notebooks",href:"/loja/eletronicos/notebooks"}],he=[{pageName:"Início",href:"/"},{pageName:"Loja",href:"/loja"},{pageName:"Eletrônicos",href:"/loja/eletronicos"},{pageName:"Notebooks",href:"/loja/eletronicos/notebooks"},{pageName:"MacBook Pro",href:"/loja/eletronicos/notebooks/macbook-pro"}],a={name:"Playground",args:{items:ve}},o={name:"Dois níveis",args:{items:ge}},r={name:"Três níveis",args:{items:ve}},s={name:"Quatro níveis",args:{items:_e}},i={name:"Cinco níveis (hierarquia profunda)",args:{items:he}},n={name:"Contexto real — E-commerce",render:()=>e.jsxs("div",{style:{padding:"16px"},children:[e.jsx(p,{items:[{pageName:"Início",href:"/"},{pageName:"Eletrônicos",href:"/eletronicos"},{pageName:"Notebooks",href:"/eletronicos/notebooks"},{pageName:'MacBook Pro 14"',href:"/eletronicos/notebooks/macbook-pro-14"}]}),e.jsx("h1",{style:{marginTop:"16px",fontSize:"24px",fontWeight:700},children:'MacBook Pro 14"'})]})},d={name:"Contexto real — Dashboard",render:()=>e.jsx("div",{style:{padding:"16px"},children:e.jsx(p,{items:[{pageName:"Dashboard",href:"/dashboard"},{pageName:"Configurações",href:"/dashboard/configuracoes"},{pageName:"Notificações",href:"/dashboard/configuracoes/notificacoes"}]})})},t={name:"Contexto real — dentro do Header",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",padding:"12px 24px",background:"var(--s-color-fill-default, #fff)",borderBottom:"1px solid var(--s-color-border-default, #eee)",width:"500px"},children:e.jsx(p,{items:[{pageName:"Dashboard",href:"/dashboard"},{pageName:"Usuários",href:"/dashboard/usuarios"},{pageName:"Perfil",href:"/dashboard/usuarios/perfil"}]})})},m={name:"Edge case — item único",args:{items:[{pageName:"Início",href:"/"}]}},c={name:"Edge case — labels longos",args:{items:[{pageName:"Início",href:"/"},{pageName:"Soluções Empresariais",href:"/empresarial"},{pageName:"Gerenciamento de Infraestrutura em Nuvem",href:"/empresarial/nuvem"}]}},l={name:"Edge case — caracteres especiais",args:{items:[{pageName:"Início",href:"/"},{pageName:"Configurações & Preferências",href:"/configuracoes"},{pageName:"Notificações por E-mail",href:"/configuracoes/notificacoes"}]}};a.parameters={...a.parameters,docs:{...(u=a.parameters)===null||u===void 0?void 0:u.docs,source:{originalSource:`{
  name: "Playground",
  args: {
    items: TRAIL_3
  }
}`,...(g=a.parameters)===null||g===void 0||(v=g.docs)===null||v===void 0?void 0:v.source},description:{story:"Story interativa para explorar o componente via Controls.\r\nEdite o array `items` no painel para testar diferentes trilhas.",...(h=a.parameters)===null||h===void 0||(_=h.docs)===null||_===void 0?void 0:_.description}}};o.parameters={...o.parameters,docs:{...(f=o.parameters)===null||f===void 0?void 0:f.docs,source:{originalSource:`{
  name: "Dois níveis",
  args: {
    items: TRAIL_2
  }
}`,...(N=o.parameters)===null||N===void 0||(b=N.docs)===null||b===void 0?void 0:b.source},description:{story:`Dois níveis — profundidade mínima com valor navegacional.\r
Representa raiz + página atual. Menos que isso não tem utilidade como breadcrumb.`,...(x=o.parameters)===null||x===void 0||(L=x.docs)===null||L===void 0?void 0:L.description}}};r.parameters={...r.parameters,docs:{...(T=r.parameters)===null||T===void 0?void 0:T.docs,source:{originalSource:`{
  name: "Três níveis",
  args: {
    items: TRAIL_3
  }
}`,...(I=r.parameters)===null||I===void 0||(y=I.docs)===null||y===void 0?void 0:y.source},description:{story:`Três níveis — profundidade padrão para a maioria das hierarquias de aplicação.\r
Cobre a combinação mais comum: raiz → seção → página atual.`,...(C=r.parameters)===null||C===void 0||(S=C.docs)===null||S===void 0?void 0:S.description}}};s.parameters={...s.parameters,docs:{...(k=s.parameters)===null||k===void 0?void 0:k.docs,source:{originalSource:`{
  name: "Quatro níveis",
  args: {
    items: TRAIL_4
  }
}`,...(P=s.parameters)===null||P===void 0||(E=P.docs)===null||E===void 0?void 0:E.source},description:{story:`Quatro níveis — hierarquia intermediária.\r
Comum em dashboards com subseções: raiz → módulo → seção → página atual.`,...(B=s.parameters)===null||B===void 0||(j=B.docs)===null||j===void 0?void 0:j.description}}};i.parameters={...i.parameters,docs:{...(D=i.parameters)===null||D===void 0?void 0:D.docs,source:{originalSource:`{
  name: "Cinco níveis (hierarquia profunda)",
  args: {
    items: TRAIL_5
  }
}`,...(w=i.parameters)===null||w===void 0||(F=w.docs)===null||F===void 0?void 0:F.source},description:{story:`Cinco níveis — hierarquia profunda.\r
Valida o comportamento com trilhas longas. Em produção, considere truncar\r
os itens do meio para evitar sobrecarga visual.`,...(R=i.parameters)===null||R===void 0||(z=R.docs)===null||z===void 0?void 0:z.description}}};n.parameters={...n.parameters,docs:{...(A=n.parameters)===null||A===void 0?void 0:A.docs,source:{originalSource:`{
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
}`,...(q=n.parameters)===null||q===void 0||(H=q.docs)===null||H===void 0?void 0:H.source},description:{story:`Trilha de e-commerce — categoria → subcategoria → produto.\r
Demonstra o uso em páginas de produto com título de página abaixo.`,...(O=n.parameters)===null||O===void 0||(M=O.docs)===null||M===void 0?void 0:M.description}}};d.parameters={...d.parameters,docs:{...(Q=d.parameters)===null||Q===void 0?void 0:Q.docs,source:{originalSource:`{
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
}`,...(U=d.parameters)===null||U===void 0||(G=U.docs)===null||G===void 0?void 0:G.source},description:{story:`Trilha de dashboard — módulo de configurações com subseção.\r
Padrão típico de painéis administrativos com navegação aninhada.`,...(V=d.parameters)===null||V===void 0||(W=V.docs)===null||W===void 0?void 0:W.description}}};t.parameters={...t.parameters,docs:{...(Z=t.parameters)===null||Z===void 0?void 0:Z.docs,source:{originalSource:`{
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
}`,...(K=t.parameters)===null||K===void 0||(J=K.docs)===null||J===void 0?void 0:J.source},description:{story:`Trilha integrada ao Header — uso real dentro do AppShell.\r
Demonstra como o Breadcrumb se comporta quando compõe o Header da aplicação.`,...(Y=t.parameters)===null||Y===void 0||(X=Y.docs)===null||X===void 0?void 0:X.description}}};m.parameters={...m.parameters,docs:{...($=m.parameters)===null||$===void 0?void 0:$.docs,source:{originalSource:`{
  name: "Edge case — item único",
  args: {
    items: [{
      pageName: "Início",
      href: "/"
    }]
  }
}`,...(ae=m.parameters)===null||ae===void 0||(ee=ae.docs)===null||ee===void 0?void 0:ee.source},description:{story:'Item único — edge case sem valor navegacional.\r\nRenderiza como texto com `aria-current="page"` sem nenhum link.\r\nEvite em produção: uma trilha de um item não orienta o usuário.',...(re=m.parameters)===null||re===void 0||(oe=re.docs)===null||oe===void 0?void 0:oe.description}}};c.parameters={...c.parameters,docs:{...(se=c.parameters)===null||se===void 0?void 0:se.docs,source:{originalSource:`{
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
}`,...(ne=c.parameters)===null||ne===void 0||(ie=ne.docs)===null||ie===void 0?void 0:ie.source},description:{story:`Labels longos — valida o comportamento de layout com nomes de página extensos.\r
Mantenha os nomes curtos em produção para melhor legibilidade.`,...(te=c.parameters)===null||te===void 0||(de=te.docs)===null||de===void 0?void 0:de.description}}};l.parameters={...l.parameters,docs:{...(me=l.parameters)===null||me===void 0?void 0:me.docs,source:{originalSource:`{
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
}`,...(le=l.parameters)===null||le===void 0||(ce=le.docs)===null||ce===void 0?void 0:ce.source},description:{story:`Caracteres especiais e acentuação — valida renderização com texto em PT-BR\r
contendo acentos, cedilhas e outros caracteres Unicode comuns.`,...(ue=l.parameters)===null||ue===void 0||(pe=ue.docs)===null||pe===void 0?void 0:pe.description}}};const Se=["Playground","TwoLevels","ThreeLevels","FourLevels","FiveLevels","EcommerceTrail","DashboardTrail","InsideHeader","SingleItem","LongLabels","SpecialChars"];export{d as DashboardTrail,n as EcommerceTrail,i as FiveLevels,s as FourLevels,t as InsideHeader,c as LongLabels,a as Playground,m as SingleItem,l as SpecialChars,r as ThreeLevels,o as TwoLevels,Se as __namedExportsOrder,Ie as default};
