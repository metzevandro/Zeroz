import{j as a,r as na}from"./iframe-Cuzq1CpA.js";/* empty css               */import{P as t}from"./Pagination-CHItng8m.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-C2kFcyns.js";import"./Skeleton-BVkqHP_m.js";var b,g,_,L,f,P,y,C,x,h,k,S,R,V,w,E,j,q,F,T,D,N,A,U,$,z,O,B,I,M,G,Q,X,Z,H,J,K,W,Y,aa,ea,ra,ta,oa,sa;const _a={title:"Components/Pagination",component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
O **Pagination** é um controle de navegação entre páginas ou etapas.

Três variantes de layout estão disponíveis:

| variant        | layout                                              |
|----------------|-----------------------------------------------------|
| \`noLabel\`     | Somente setas                                       |
| \`leftLabel\`   | Label à esquerda, setas agrupadas à direita         |
| \`centerLabel\` | Seta esquerda · label centralizado · seta direita   |

### Quando usar
- Tabelas ou listas com paginação server-side
- Fluxos passo a passo (wizards, carrosséis)
- Qualquer conteúdo dividido em múltiplas páginas

### Boas práticas
- Defina \`disabledLeft\` na primeira página e \`disabledRight\` na última
- Use \`skeleton\` enquanto o total de páginas ainda está carregando
- Forneça um \`label\` descritivo como \`"Página 3 de 10"\` ou \`"3 / 10"\`
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1557-5788"}},argTypes:{variant:{control:"select",options:["noLabel","leftLabel","centerLabel"],description:"Variante de layout. Define a posição do label em relação às setas.",table:{type:{summary:'"noLabel" | "leftLabel" | "centerLabel"'}}},label:{control:"text",description:'Texto do label (ex: `"Página 1 de 10"`). Ignorado quando `variant` é `"noLabel"`.',table:{type:{summary:"string"}}},disabledLeft:{control:"boolean",description:"Desativa a seta esquerda (anterior). Use na primeira página.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},disabledRight:{control:"boolean",description:"Desativa a seta direita (próxima). Use na última página.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},skeleton:{control:"boolean",description:"Exibe skeleton no lugar do label e desativa ambas as setas. Use enquanto o total de páginas está carregando.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},onClickLeft:{action:"onClickLeft",description:"Callback disparado ao clicar na seta esquerda.",table:{type:{summary:"() => void"}}},onClickRight:{action:"onClickRight",description:"Callback disparado ao clicar na seta direita.",table:{type:{summary:"() => void"}}}}},n={name:"Variante — noLabel",args:{variant:"noLabel",label:""}},i={name:"Variante — leftLabel",args:{variant:"leftLabel",label:"Página 1 de 10"}},l={name:"Variante — centerLabel",args:{variant:"centerLabel",label:"Página 1 de 10"}},d={name:"Comparativo — todas as variantes",render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-medium)"},children:[a.jsx(t,{variant:"noLabel",label:""}),a.jsx(t,{variant:"leftLabel",label:"Página 3 de 10"}),a.jsx(t,{variant:"centerLabel",label:"Página 3 de 10"})]})},c={name:"Estado — primeira página (esquerda desativada)",args:{variant:"centerLabel",label:"Página 1 de 10",disabledLeft:!0}},m={name:"Estado — última página (direita desativada)",args:{variant:"centerLabel",label:"Página 10 de 10",disabledRight:!0}},p={name:"Estado — skeleton (carregando)",args:{variant:"centerLabel",label:"Carregando",skeleton:!0}},v={name:"Controlado — com estado",render:()=>{const[e,o]=na.useState(1);return a.jsx(t,{variant:"centerLabel",label:`Página ${e} de 10`,disabledLeft:e===1,disabledRight:e===10,onClickLeft:()=>o(s=>s-1),onClickRight:()=>o(s=>s+1)})}},u={name:"Contexto real — footer de tabela",render:()=>{const[e,o]=na.useState(1),s=[{id:"#1042",name:"Notebook Pro X",status:"Enviado"},{id:"#1043",name:"Mouse Ergonômico",status:"Pendente"},{id:"#1044",name:"Teclado Mecânico",status:"Enviado"}];return a.jsxs("div",{style:{width:"480px",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",overflow:"hidden"},children:[s.map(({id:r,name:la,status:da},ca)=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"var(--s-spacing-x-small) var(--s-spacing-small)",borderBottom:"var(--s-border-width-hairline) solid var(--s-color-border-default)"},children:[a.jsxs("small",{children:[r," — ",la]}),a.jsx("small",{children:da})]},r)),a.jsx("div",{style:{background:"var(--s-color-fill-default)"},children:a.jsx(t,{variant:"leftLabel",label:`Página ${e} de 5`,disabledLeft:e===1,disabledRight:e===5,onClickLeft:()=>o(r=>r-1),onClickRight:()=>o(r=>r+1)})})]})}};n.parameters={...n.parameters,docs:{...(b=n.parameters)===null||b===void 0?void 0:b.docs,source:{originalSource:`{
  name: "Variante — noLabel",
  args: {
    variant: "noLabel",
    label: ""
  }
}`,...(_=n.parameters)===null||_===void 0||(g=_.docs)===null||g===void 0?void 0:g.source},description:{story:`Somente setas, sem label.\r
Use em espaços compactos onde o contexto de página já é visível na UI.`,...(f=n.parameters)===null||f===void 0||(L=f.docs)===null||L===void 0?void 0:L.description}}};i.parameters={...i.parameters,docs:{...(P=i.parameters)===null||P===void 0?void 0:P.docs,source:{originalSource:`{
  name: "Variante — leftLabel",
  args: {
    variant: "leftLabel",
    label: "Página 1 de 10"
  }
}`,...(C=i.parameters)===null||C===void 0||(y=C.docs)===null||y===void 0?void 0:y.source},description:{story:`Label à esquerda com as setas agrupadas à direita.\r
Indicado para footers de tabela onde o texto de paginação precisa\r
estar alinhado à margem esquerda do conteúdo.`,...(h=i.parameters)===null||h===void 0||(x=h.docs)===null||x===void 0?void 0:x.description}}};l.parameters={...l.parameters,docs:{...(k=l.parameters)===null||k===void 0?void 0:k.docs,source:{originalSource:`{
  name: "Variante — centerLabel",
  args: {
    variant: "centerLabel",
    label: "Página 1 de 10"
  }
}`,...(R=l.parameters)===null||R===void 0||(S=R.docs)===null||S===void 0?void 0:S.source},description:{story:`Seta esquerda, label centralizado, seta direita.\r
Variante mais comum — indicada para a maioria dos contextos.`,...(w=l.parameters)===null||w===void 0||(V=w.docs)===null||V===void 0?void 0:V.description}}};d.parameters={...d.parameters,docs:{...(E=d.parameters)===null||E===void 0?void 0:E.docs,source:{originalSource:`{
  name: "Comparativo — todas as variantes",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-medium)"
  }}>\r
      <Pagination variant="noLabel" label="" />\r
      <Pagination variant="leftLabel" label="Página 3 de 10" />\r
      <Pagination variant="centerLabel" label="Página 3 de 10" />\r
    </div>
}`,...(q=d.parameters)===null||q===void 0||(j=q.docs)===null||j===void 0?void 0:j.source},description:{story:`Comparativo das três variantes de layout com o mesmo label.\r
Use para validar tokens e espaçamentos após alterações de tema.`,...(T=d.parameters)===null||T===void 0||(F=T.docs)===null||F===void 0?void 0:F.description}}};c.parameters={...c.parameters,docs:{...(D=c.parameters)===null||D===void 0?void 0:D.docs,source:{originalSource:`{
  name: "Estado — primeira página (esquerda desativada)",
  args: {
    variant: "centerLabel",
    label: "Página 1 de 10",
    disabledLeft: true
  }
}`,...(A=c.parameters)===null||A===void 0||(N=A.docs)===null||N===void 0?void 0:N.source},description:{story:"Primeira página — seta esquerda desativada via `disabledLeft`.\r\nO usuário não pode navegar para uma página anterior à primeira.",...($=c.parameters)===null||$===void 0||(U=$.docs)===null||U===void 0?void 0:U.description}}};m.parameters={...m.parameters,docs:{...(z=m.parameters)===null||z===void 0?void 0:z.docs,source:{originalSource:`{
  name: "Estado — última página (direita desativada)",
  args: {
    variant: "centerLabel",
    label: "Página 10 de 10",
    disabledRight: true
  }
}`,...(B=m.parameters)===null||B===void 0||(O=B.docs)===null||O===void 0?void 0:O.source},description:{story:"Última página — seta direita desativada via `disabledRight`.\r\nO usuário não pode navegar para uma página além da última.",...(M=m.parameters)===null||M===void 0||(I=M.docs)===null||I===void 0?void 0:I.description}}};p.parameters={...p.parameters,docs:{...(G=p.parameters)===null||G===void 0?void 0:G.docs,source:{originalSource:`{
  name: "Estado — skeleton (carregando)",
  args: {
    variant: "centerLabel",
    label: "Carregando",
    skeleton: true
  }
}`,...(X=p.parameters)===null||X===void 0||(Q=X.docs)===null||Q===void 0?void 0:Q.source},description:{story:`Skeleton — ambas as setas desativadas e label substituído por placeholder.\r
Use enquanto o total de páginas ainda está sendo carregado da API.`,...(H=p.parameters)===null||H===void 0||(Z=H.docs)===null||Z===void 0?void 0:Z.description}}};v.parameters={...v.parameters,docs:{...(J=v.parameters)===null||J===void 0?void 0:J.docs,source:{originalSource:`{
  name: "Controlado — com estado",
  render: () => {
    const total = 10;
    const [page, setPage] = useState(1);
    return <Pagination variant="centerLabel" label={\`Página \${page} de \${total}\`} disabledLeft={page === 1} disabledRight={page === total} onClickLeft={() => setPage(p => p - 1)} onClickRight={() => setPage(p => p + 1)} />;
  }
}`,...(W=v.parameters)===null||W===void 0||(K=W.docs)===null||K===void 0?void 0:K.source},description:{story:"Exemplo totalmente interativo com estado externo.\r\nDemonstra o padrão correto: `disabledLeft` na primeira página,\r\n`disabledRight` na última, e label atualizado a cada navegação.",...(aa=v.parameters)===null||aa===void 0||(Y=aa.docs)===null||Y===void 0?void 0:Y.description}}};u.parameters={...u.parameters,docs:{...(ea=u.parameters)===null||ea===void 0?void 0:ea.docs,source:{originalSource:`{
  name: "Contexto real — footer de tabela",
  render: () => {
    const total = 5;
    const [page, setPage] = useState(1);
    const rows = [{
      id: "#1042",
      name: "Notebook Pro X",
      status: "Enviado"
    }, {
      id: "#1043",
      name: "Mouse Ergonômico",
      status: "Pendente"
    }, {
      id: "#1044",
      name: "Teclado Mecânico",
      status: "Enviado"
    }];
    return <div style={{
      width: "480px",
      border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
      borderRadius: "var(--s-border-radius-medium)",
      overflow: "hidden"
    }}>\r
        {rows.map(({
        id,
        name,
        status
      }, i) => <div key={id} style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "var(--s-spacing-x-small) var(--s-spacing-small)",
        borderBottom: "var(--s-border-width-hairline) solid var(--s-color-border-default)"
      }}>\r
            <small>\r
              {id} — {name}\r
            </small>\r
            <small>{status}</small>\r
          </div>)}\r
        <div style={{
        background: "var(--s-color-fill-default)"
      }}>\r
          <Pagination variant="leftLabel" label={\`Página \${page} de \${total}\`} disabledLeft={page === 1} disabledRight={page === total} onClickLeft={() => setPage(p => p - 1)} onClickRight={() => setPage(p => p + 1)} />\r
        </div>\r
      </div>;
  }
}`,...(ta=u.parameters)===null||ta===void 0||(ra=ta.docs)===null||ra===void 0?void 0:ra.source},description:{story:"Paginação no footer de uma tabela com variante `leftLabel`.\r\nDemonstra o padrão mais comum em dashboards com listagens server-side.",...(sa=u.parameters)===null||sa===void 0||(oa=sa.docs)===null||oa===void 0?void 0:oa.description}}};const La=["NoLabel","LeftLabel","CenterLabel","AllVariants","FirstPage","LastPage","SkeletonState","Controlled","TableFooter"];export{d as AllVariants,l as CenterLabel,v as Controlled,c as FirstPage,m as LastPage,i as LeftLabel,n as NoLabel,p as SkeletonState,u as TableFooter,La as __namedExportsOrder,_a as default};
