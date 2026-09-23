import{j as e}from"./iframe-CxNvl9BI.js";/* empty css               */import{H as b,a as s}from"./HeaderProfile-vDoOGCpk.js";import{B as u}from"./Breadcrumb-HkXylJyb.js";import{D as f,a as l}from"./Dropdown-CP3gwo0h.js";import{D as m}from"./DropdownTitle-DRqD6Bhl.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonIcon-BvrW2_xY.js";import"./Icon-Bqm0CoJD.js";import"./Skeleton-C80QNm7w.js";import"./Avatar-CdL7RA1a.js";import"./Link-CXf21LbM.js";const w={title:"Components/Header",component:b,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:'\nO **Header** é a barra superior persistente da aplicação, composta por três zonas:\n\n| Zona         | Conteúdo                                                        |\n|--------------|-----------------------------------------------------------------|\n| **Esquerda** | Botão hambúrguer — dispara `onClick` (toggle da sidebar)      |\n| **Centro**   | Slot de breadcrumb — aceita qualquer `ReactNode`              |\n| **Direita**  | Slot `children` — tipicamente um `<HeaderProfile>`          |\n\n### HeaderProfile\nSubcomponente que exibe o avatar e o nome do usuário no lado direito.\nAo ser clicado, abre o `<Dropdown>` passado como `children` —\no `HeaderProfile` injeta `visible` e `align="right"` automaticamente\nvia `React.cloneElement`, por isso **não é necessário passar `visible`** ao `<Dropdown>`.\n\n### Responsividade\nEm viewports `≤ 768px` o breadcrumb fica oculto, o botão hambúrguer aparece\ne o avatar perde o nome e o chevron — exibindo apenas o ícone circular.\n\n### Quando usar\n- Como barra superior persistente em dashboards e painéis administrativos\n- Sempre que precisar de um gatilho de navegação global (toggle de sidebar) e contexto de breadcrumb\n\n### Boas práticas\n- Mantenha o slot `breadcrumb` conciso — deve refletir o contexto da página atual\n- Use `<HeaderProfile>` para identidade do usuário; evite colocar ações não relacionadas no slot direito\n- Passe `skeleton` ao `<HeaderProfile>` enquanto os dados do usuário estão carregando para evitar layout shift\n        '}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10019"}},argTypes:{onClick:{action:"onClick",description:"Disparado quando o botão hambúrguer é clicado. Tipicamente usado para abrir/fechar a sidebar.",table:{type:{summary:"() => void"}}},breadcrumb:{control:!1,description:"Conteúdo de breadcrumb renderizado no centro do header. Aceita qualquer `ReactNode`.",table:{type:{summary:"React.ReactNode"}}},children:{control:!1,description:"Slot direito — tipicamente `<HeaderProfile>`. Aceita qualquer `ReactNode`.",table:{type:{summary:"React.ReactNode"}}},skeleton:{control:"boolean",description:"Quando `true`, repassa o estado de skeleton ao `ButtonIcon` do hambúrguer.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}}},decorators:[p=>e.jsx("div",{style:{minHeight:"300px"},children:e.jsx(p,{})})]},d=e.jsx(u,{items:[{pageName:"Início",href:"#"},{pageName:"Dashboard",href:"#"}]}),c=e.jsxs(f,{children:[e.jsx(m,{label:"Conta"}),e.jsx(l,{icon:"person",label:"Meu perfil",onClick:()=>{}}),e.jsx(l,{icon:"settings",label:"Configurações",onClick:()=>{}}),e.jsx(m,{label:"Sessão"}),e.jsx(l,{icon:"logout",label:"Sair",onClick:()=>{}})]}),a={name:"Default",args:{onClick:()=>{},breadcrumb:d,children:e.jsx(s,{name:"Jane Doe",letter:"J",children:c})}},r={name:"HeaderProfile — com imagem de avatar",args:{onClick:()=>{},breadcrumb:d,children:e.jsx(s,{name:"Jane Doe",avatar_src:"https://i.pravatar.cc/150?img=47",children:c})}},o={name:"HeaderProfile — skeleton (carregando)",args:{onClick:()=>{},breadcrumb:d,children:e.jsx(s,{name:"",letter:"",skeleton:!0,children:c})}},n={name:"Header — sem perfil",args:{onClick:()=>{},breadcrumb:d,children:null}},t={name:"Header — breadcrumb aninhado",args:{onClick:()=>{},breadcrumb:e.jsx(u,{items:[{pageName:"Início",href:"#"},{pageName:"Configurações",href:"#"},{pageName:"Conta",href:"#"},{pageName:"Faturamento",href:"#"}]}),children:e.jsx(s,{name:"Jane Doe",letter:"J",children:c})}},i={name:"Layout mobile (≤ 768px)",globals:{viewport:{value:"mobile5",isRotated:!1}},args:{onClick:()=>{},breadcrumb:d,children:e.jsx(s,{name:"Jane Doe",letter:"J",children:c})}},N=["Default","WithAvatar","Skeleton","NoProfile","DeepBreadcrumb","MobileLayout"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    onClick: () => {},
    breadcrumb: defaultBreadcrumb,
    children: <HeaderProfile name="Jane Doe" letter="J">\r
        {defaultDropdown}\r
      </HeaderProfile>
  }
}`,...a.parameters?.docs?.source},description:{story:"Header completo com perfil do usuário e dropdown.\r\nClique no perfil para abrir o menu — `visible` é injetado automaticamente\r\npelo `HeaderProfile` via `React.cloneElement`.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "HeaderProfile — com imagem de avatar",
  args: {
    onClick: () => {},
    breadcrumb: defaultBreadcrumb,
    children: <HeaderProfile name="Jane Doe" avatar_src="https://i.pravatar.cc/150?img=47">\r
        {defaultDropdown}\r
      </HeaderProfile>
  }
}`,...r.parameters?.docs?.source},description:{story:"HeaderProfile com imagem de avatar via `avatar_src`.\r\nQuando fornecido, o avatar exibe a foto no lugar das iniciais.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "HeaderProfile — skeleton (carregando)",
  args: {
    onClick: () => {},
    breadcrumb: defaultBreadcrumb,
    children: <HeaderProfile name="" letter="" skeleton>\r
        {defaultDropdown}\r
      </HeaderProfile>
  }
}`,...o.parameters?.docs?.source},description:{story:`HeaderProfile em estado skeleton — dados do usuário ainda não carregados.\r
Nome e avatar são substituídos por placeholders. O botão de perfil fica\r
desabilitado para bloquear interação durante o carregamento.`,...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Header — sem perfil",
  args: {
    onClick: () => {},
    breadcrumb: defaultBreadcrumb,
    children: null
  }
}`,...n.parameters?.docs?.source},description:{story:"Header sem perfil — apenas botão hambúrguer e breadcrumb.\r\nO slot `children` é opcional — omita-o para um header mínimo.",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Header — breadcrumb aninhado",
  args: {
    onClick: () => {},
    breadcrumb: <Breadcrumb items={[{
      pageName: "Início",
      href: "#"
    }, {
      pageName: "Configurações",
      href: "#"
    }, {
      pageName: "Conta",
      href: "#"
    }, {
      pageName: "Faturamento",
      href: "#"
    }]} />,
    children: <HeaderProfile name="Jane Doe" letter="J">\r
        {defaultDropdown}\r
      </HeaderProfile>
  }
}`,...t.parameters?.docs?.source},description:{story:`Header com breadcrumb aninhado de múltiplos níveis.\r
Valida o comportamento com rotas mais profundas na hierarquia.`,...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Layout mobile (≤ 768px)",
  globals: {
    viewport: {
      value: "mobile5",
      isRotated: false
    }
  },
  args: {
    onClick: () => {},
    breadcrumb: defaultBreadcrumb,
    children: <HeaderProfile name="Jane Doe" letter="J">\r
        {defaultDropdown}\r
      </HeaderProfile>
  }
}`,...i.parameters?.docs?.source},description:{story:`Layout mobile (≤ 768px) — breadcrumb oculto, botão hambúrguer visível,\r
avatar sem nome e sem chevron.`,...i.parameters?.docs?.description}}};export{t as DeepBreadcrumb,a as Default,i as MobileLayout,n as NoProfile,o as Skeleton,r as WithAvatar,N as __namedExportsOrder,w as default};
