import{j as e}from"./iframe-DFdk80Qn.js";/* empty css               */import{H as T,a as d}from"./HeaderProfile-BI3pcBPF.js";import{B as z}from"./Breadcrumb-BDwpJt0x.js";import{D as V,a as c}from"./Dropdown-fLLJdMBD.js";import{D as O}from"./DropdownTitle-D7ltSDip.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonIcon-B5f9TZ0r.js";import"./Icon-C_kNoyVv.js";import"./Skeleton-bEV42asx.js";import"./Avatar-D3BYfmOZ.js";import"./Link-p6zI2j0f.js";var m,u,p,b,v,f,_,g,h,D,H,k,y,P,C,x,N,S,B,j,w,q,J,R,L,A,M,W,E,I;const ie={title:"Components/Header",component:T,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:'\nO **Header** é a barra superior persistente da aplicação, composta por três zonas:\n\n| Zona         | Conteúdo                                                        |\n|--------------|-----------------------------------------------------------------|\n| **Esquerda** | Botão hambúrguer — dispara `onClick` (toggle da sidebar)      |\n| **Centro**   | Slot de breadcrumb — aceita qualquer `ReactNode`              |\n| **Direita**  | Slot `children` — tipicamente um `<HeaderProfile>`          |\n\n### HeaderProfile\nSubcomponente que exibe o avatar e o nome do usuário no lado direito.\nAo ser clicado, abre o `<Dropdown>` passado como `children` —\no `HeaderProfile` injeta `visible` e `align="right"` automaticamente\nvia `React.cloneElement`, por isso **não é necessário passar `visible`** ao `<Dropdown>`.\n\n### Responsividade\nEm viewports `≤ 768px` o breadcrumb fica oculto, o botão hambúrguer aparece\ne o avatar perde o nome e o chevron — exibindo apenas o ícone circular.\n\n### Quando usar\n- Como barra superior persistente em dashboards e painéis administrativos\n- Sempre que precisar de um gatilho de navegação global (toggle de sidebar) e contexto de breadcrumb\n\n### Boas práticas\n- Mantenha o slot `breadcrumb` conciso — deve refletir o contexto da página atual\n- Use `<HeaderProfile>` para identidade do usuário; evite colocar ações não relacionadas no slot direito\n- Passe `skeleton` ao `<HeaderProfile>` enquanto os dados do usuário estão carregando para evitar layout shift\n        '}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10019"}},argTypes:{onClick:{action:"onClick",description:"Disparado quando o botão hambúrguer é clicado. Tipicamente usado para abrir/fechar a sidebar.",table:{type:{summary:"() => void"}}},breadcrumb:{control:!1,description:"Conteúdo de breadcrumb renderizado no centro do header. Aceita qualquer `ReactNode`.",table:{type:{summary:"React.ReactNode"}}},children:{control:!1,description:"Slot direito — tipicamente `<HeaderProfile>`. Aceita qualquer `ReactNode`.",table:{type:{summary:"React.ReactNode"}}},skeleton:{control:"boolean",description:"Quando `true`, repassa o estado de skeleton ao `ButtonIcon` do hambúrguer.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}}},decorators:[Q=>e.jsx("div",{style:{minHeight:"300px"},children:e.jsx(Q,{})})]},s=e.jsx(z,{items:[{pageName:"Início",href:"#"},{pageName:"Dashboard",href:"#"}]}),l=e.jsxs(V,{children:[e.jsx(O,{label:"Conta"}),e.jsx(c,{icon:"person",label:"Meu perfil",onClick:()=>{}}),e.jsx(c,{icon:"settings",label:"Configurações",onClick:()=>{}}),e.jsx(O,{label:"Sessão"}),e.jsx(c,{icon:"logout",label:"Sair",onClick:()=>{}})]}),a={name:"Default",args:{onClick:()=>{},breadcrumb:s,children:e.jsx(d,{name:"Jane Doe",letter:"J",children:l})}},r={name:"HeaderProfile — com imagem de avatar",args:{onClick:()=>{},breadcrumb:s,children:e.jsx(d,{name:"Jane Doe",avatar_src:"https://i.pravatar.cc/150?img=47",children:l})}},o={name:"HeaderProfile — skeleton (carregando)",args:{onClick:()=>{},breadcrumb:s,children:e.jsx(d,{name:"",letter:"",skeleton:!0,children:l})}},i={name:"Header — sem perfil",args:{onClick:()=>{},breadcrumb:s,children:null}},n={name:"Header — breadcrumb aninhado",args:{onClick:()=>{},breadcrumb:e.jsx(z,{items:[{pageName:"Início",href:"#"},{pageName:"Configurações",href:"#"},{pageName:"Conta",href:"#"},{pageName:"Faturamento",href:"#"}]}),children:e.jsx(d,{name:"Jane Doe",letter:"J",children:l})}},t={name:"Layout mobile (≤ 768px)",globals:{viewport:{value:"mobile5",isRotated:!1}},args:{onClick:()=>{},breadcrumb:s,children:e.jsx(d,{name:"Jane Doe",letter:"J",children:l})}};a.parameters={...a.parameters,docs:{...(m=a.parameters)===null||m===void 0?void 0:m.docs,source:{originalSource:`{
  name: "Default",
  args: {
    onClick: () => {},
    breadcrumb: defaultBreadcrumb,
    children: <HeaderProfile name="Jane Doe" letter="J">\r
        {defaultDropdown}\r
      </HeaderProfile>
  }
}`,...(p=a.parameters)===null||p===void 0||(u=p.docs)===null||u===void 0?void 0:u.source},description:{story:"Header completo com perfil do usuário e dropdown.\r\nClique no perfil para abrir o menu — `visible` é injetado automaticamente\r\npelo `HeaderProfile` via `React.cloneElement`.",...(v=a.parameters)===null||v===void 0||(b=v.docs)===null||b===void 0?void 0:b.description}}};r.parameters={...r.parameters,docs:{...(f=r.parameters)===null||f===void 0?void 0:f.docs,source:{originalSource:`{
  name: "HeaderProfile — com imagem de avatar",
  args: {
    onClick: () => {},
    breadcrumb: defaultBreadcrumb,
    children: <HeaderProfile name="Jane Doe" avatar_src="https://i.pravatar.cc/150?img=47">\r
        {defaultDropdown}\r
      </HeaderProfile>
  }
}`,...(g=r.parameters)===null||g===void 0||(_=g.docs)===null||_===void 0?void 0:_.source},description:{story:"HeaderProfile com imagem de avatar via `avatar_src`.\r\nQuando fornecido, o avatar exibe a foto no lugar das iniciais.",...(D=r.parameters)===null||D===void 0||(h=D.docs)===null||h===void 0?void 0:h.description}}};o.parameters={...o.parameters,docs:{...(H=o.parameters)===null||H===void 0?void 0:H.docs,source:{originalSource:`{
  name: "HeaderProfile — skeleton (carregando)",
  args: {
    onClick: () => {},
    breadcrumb: defaultBreadcrumb,
    children: <HeaderProfile name="" letter="" skeleton>\r
        {defaultDropdown}\r
      </HeaderProfile>
  }
}`,...(y=o.parameters)===null||y===void 0||(k=y.docs)===null||k===void 0?void 0:k.source},description:{story:`HeaderProfile em estado skeleton — dados do usuário ainda não carregados.\r
Nome e avatar são substituídos por placeholders. O botão de perfil fica\r
desabilitado para bloquear interação durante o carregamento.`,...(C=o.parameters)===null||C===void 0||(P=C.docs)===null||P===void 0?void 0:P.description}}};i.parameters={...i.parameters,docs:{...(x=i.parameters)===null||x===void 0?void 0:x.docs,source:{originalSource:`{
  name: "Header — sem perfil",
  args: {
    onClick: () => {},
    breadcrumb: defaultBreadcrumb,
    children: null
  }
}`,...(S=i.parameters)===null||S===void 0||(N=S.docs)===null||N===void 0?void 0:N.source},description:{story:"Header sem perfil — apenas botão hambúrguer e breadcrumb.\r\nO slot `children` é opcional — omita-o para um header mínimo.",...(j=i.parameters)===null||j===void 0||(B=j.docs)===null||B===void 0?void 0:B.description}}};n.parameters={...n.parameters,docs:{...(w=n.parameters)===null||w===void 0?void 0:w.docs,source:{originalSource:`{
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
}`,...(J=n.parameters)===null||J===void 0||(q=J.docs)===null||q===void 0?void 0:q.source},description:{story:`Header com breadcrumb aninhado de múltiplos níveis.\r
Valida o comportamento com rotas mais profundas na hierarquia.`,...(L=n.parameters)===null||L===void 0||(R=L.docs)===null||R===void 0?void 0:R.description}}};t.parameters={...t.parameters,docs:{...(A=t.parameters)===null||A===void 0?void 0:A.docs,source:{originalSource:`{
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
}`,...(W=t.parameters)===null||W===void 0||(M=W.docs)===null||M===void 0?void 0:M.source},description:{story:`Layout mobile (≤ 768px) — breadcrumb oculto, botão hambúrguer visível,\r
avatar sem nome e sem chevron.`,...(I=t.parameters)===null||I===void 0||(E=I.docs)===null||E===void 0?void 0:E.description}}};const ne=["Default","WithAvatar","Skeleton","NoProfile","DeepBreadcrumb","MobileLayout"];export{n as DeepBreadcrumb,a as Default,t as MobileLayout,i as NoProfile,o as Skeleton,r as WithAvatar,ne as __namedExportsOrder,ie as default};
