import{j as e}from"./iframe-DFdk80Qn.js";import{A as a}from"./Avatar-D3BYfmOZ.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./Skeleton-bEV42asx.js";import"./Icon-C_kNoyVv.js";var u,_,g,x,S,y,f,z,h,I,A,k,j,C,D,b,L,W,T,V,E,J,M,q,R,U,w,O,P,Q,F,G,H,Z,$,B,N,K,X,Y,ee,ae,re,se,ne,ie,oe,te,le,de,me,ce,pe,ve,ue,_e,ge,xe,Se,ye;const De={title:"Components/Avatar",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Componente de identidade visual do usuário. Exibe, em ordem de prioridade, uma imagem, as iniciais do nome ou um ícone padrão como fallback — com suporte a estado de carregamento via skeleton.\n\n**Hierarquia de renderização:** `skeleton` → `src` (imagem) → `letter` (iniciais) → ícone padrão (fallback)"}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-9992"}},argTypes:{size:{control:"radio",options:["sm","md","lg"],description:"Define o tamanho do avatar. `sm` = 24 px (listas compactas), `md` = 40 px (uso geral), `lg` = 64 px (perfis e cabeçalhos).",table:{defaultValue:{summary:"md"},type:{summary:'"sm" | "md" | "lg"'}}},src:{control:"text",description:"URL da imagem a exibir. Tem prioridade sobre `letter` e o ícone padrão.",table:{type:{summary:"string"}}},letter:{control:"text",description:"Nome ou string de onde as iniciais são extraídas. `'João Silva'` → `'JS'`. Ignorado quando `src` é fornecido.",table:{type:{summary:"string"}}},skeleton:{control:"boolean",description:"Exibe o estado de carregamento (skeleton circular). Quando `true`, nenhum outro conteúdo é renderizado.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}}}},r={name:"Default (Ícone Fallback)",args:{size:"md"}},s={name:"Com Imagem",args:{size:"md",src:"https://i.pravatar.cc/150?img=3"}},n={name:"Com Iniciais (nome completo)",args:{size:"md",letter:"João Silva"}},i={name:"Com Inicial Única",args:{size:"md",letter:"Carlos"}},o={name:"Tamanho — sm (24 px)",args:{size:"sm",letter:"Anna Lee"}},t={name:"Tamanho — md (40 px)",args:{size:"md",letter:"Anna Lee"}},l={name:"Tamanho — lg (64 px)",args:{size:"lg",letter:"Anna Lee"}},d={name:"Comparativo de Tamanhos",render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[e.jsx(a,{size:"sm",letter:"Anna Lee"}),e.jsx("small",{children:"sm · 24px"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[e.jsx(a,{size:"md",letter:"Anna Lee"}),e.jsx("small",{children:"md · 40px"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[e.jsx(a,{size:"lg",letter:"Anna Lee"}),e.jsx("small",{children:"lg · 64px"})]})]})},m={name:"Skeleton (Loading)",args:{size:"md",skeleton:!0}},c={name:"Skeleton — Todos os Tamanhos",render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(a,{size:"sm",skeleton:!0}),e.jsx(a,{size:"md",skeleton:!0}),e.jsx(a,{size:"lg",skeleton:!0})]})},p={name:"Todas as Variantes",render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[e.jsx(a,{size:"md",src:"https://i.pravatar.cc/150?img=5"}),e.jsx("small",{children:"Imagem"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[e.jsx(a,{size:"md",letter:"João Silva"}),e.jsx("small",{children:"Iniciais"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[e.jsx(a,{size:"md"}),e.jsx("small",{children:"Ícone"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[e.jsx(a,{size:"md",skeleton:!0}),e.jsx("small",{children:"Skeleton"})]})]})},v={name:"Composição — Avatar Stack",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center"},children:[3,5,7,8,10].map((fe,ze)=>e.jsx("div",{style:{marginLeft:ze===0?0:"-6px",zIndex:5-ze,position:"relative",outline:"1px solid white",borderRadius:"50%"},children:e.jsx(a,{size:"sm",src:`https://i.pravatar.cc/150?img=${fe}`})},fe))})};r.parameters={...r.parameters,docs:{...(u=r.parameters)===null||u===void 0?void 0:u.docs,source:{originalSource:`{
  name: "Default (Ícone Fallback)",
  args: {
    size: "md"
  }
}`,...(g=r.parameters)===null||g===void 0||(_=g.docs)===null||_===void 0?void 0:_.source},description:{story:`Estado base do componente sem nenhuma prop opcional.\r
Renderiza o ícone padrão de pessoa (fallback automático).\r
Use os Controls do painel para explorar todas as combinações de props.`,...(S=r.parameters)===null||S===void 0||(x=S.docs)===null||x===void 0?void 0:x.description}}};s.parameters={...s.parameters,docs:{...(y=s.parameters)===null||y===void 0?void 0:y.docs,source:{originalSource:`{
  name: "Com Imagem",
  args: {
    size: "md",
    src: "https://i.pravatar.cc/150?img=3"
  }
}`,...(z=s.parameters)===null||z===void 0||(f=z.docs)===null||f===void 0?void 0:f.source},description:{story:"Avatar com imagem fornecida via URL.\r\nPrioridade máxima na hierarquia de renderização — sobrepõe `letter` e o ícone.",...(I=s.parameters)===null||I===void 0||(h=I.docs)===null||h===void 0?void 0:h.description}}};n.parameters={...n.parameters,docs:{...(A=n.parameters)===null||A===void 0?void 0:A.docs,source:{originalSource:`{
  name: "Com Iniciais (nome completo)",
  args: {
    size: "md",
    letter: "João Silva"
  }
}`,...(j=n.parameters)===null||j===void 0||(k=j.docs)===null||k===void 0?void 0:k.source},description:{story:'Avatar com iniciais extraídas de um nome completo.\r\nQuando `letter` contém espaço, exibe o primeiro e o último caractere em maiúsculo.\r\nEx: "João Silva" → "JS"',...(D=n.parameters)===null||D===void 0||(C=D.docs)===null||C===void 0?void 0:C.description}}};i.parameters={...i.parameters,docs:{...(b=i.parameters)===null||b===void 0?void 0:b.docs,source:{originalSource:`{
  name: "Com Inicial Única",
  args: {
    size: "md",
    letter: "Carlos"
  }
}`,...(W=i.parameters)===null||W===void 0||(L=W.docs)===null||L===void 0?void 0:L.source},description:{story:'Avatar com inicial única.\r\nQuando `letter` não contém espaço, exibe apenas o primeiro caractere em maiúsculo.\r\nEx: "Carlos" → "C"',...(V=i.parameters)===null||V===void 0||(T=V.docs)===null||T===void 0?void 0:T.description}}};o.parameters={...o.parameters,docs:{...(E=o.parameters)===null||E===void 0?void 0:E.docs,source:{originalSource:`{
  name: "Tamanho — sm (24 px)",
  args: {
    size: "sm",
    letter: "Anna Lee"
  }
}`,...(M=o.parameters)===null||M===void 0||(J=M.docs)===null||J===void 0?void 0:J.source},description:{story:`Tamanho pequeno — 24 px.\r
Indicado para listas densas, tabelas e layouts compactos.`,...(R=o.parameters)===null||R===void 0||(q=R.docs)===null||q===void 0?void 0:q.description}}};t.parameters={...t.parameters,docs:{...(U=t.parameters)===null||U===void 0?void 0:U.docs,source:{originalSource:`{
  name: "Tamanho — md (40 px)",
  args: {
    size: "md",
    letter: "Anna Lee"
  }
}`,...(O=t.parameters)===null||O===void 0||(w=O.docs)===null||w===void 0?void 0:w.source},description:{story:`Tamanho médio — 40 px.\r
Tamanho recomendado para uso geral (comentários, cards, navbars).`,...(Q=t.parameters)===null||Q===void 0||(P=Q.docs)===null||P===void 0?void 0:P.description}}};l.parameters={...l.parameters,docs:{...(F=l.parameters)===null||F===void 0?void 0:F.docs,source:{originalSource:`{
  name: "Tamanho — lg (64 px)",
  args: {
    size: "lg",
    letter: "Anna Lee"
  }
}`,...(H=l.parameters)===null||H===void 0||(G=H.docs)===null||G===void 0?void 0:G.source},description:{story:`Tamanho grande — 64 px.\r
Indicado para páginas de perfil, cabeçalhos de conta e apresentações de usuário.`,...($=l.parameters)===null||$===void 0||(Z=$.docs)===null||Z===void 0?void 0:Z.description}}};d.parameters={...d.parameters,docs:{...(B=d.parameters)===null||B===void 0?void 0:B.docs,source:{originalSource:`{
  name: "Comparativo de Tamanhos",
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "16px"
  }}>\r
      <div style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    }}>\r
        <Avatar size="sm" letter="Anna Lee" />\r
        <small>sm · 24px</small>\r
      </div>\r
      <div style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    }}>\r
        <Avatar size="md" letter="Anna Lee" />\r
        <small>md · 40px</small>\r
      </div>\r
      <div style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    }}>\r
        <Avatar size="lg" letter="Anna Lee" />\r
        <small>lg · 64px</small>\r
      </div>\r
    </div>
}`,...(K=d.parameters)===null||K===void 0||(N=K.docs)===null||N===void 0?void 0:N.source},description:{story:`Comparativo visual dos três tamanhos disponíveis lado a lado.\r
Útil para validar proporções e espaçamentos no design system.`,...(Y=d.parameters)===null||Y===void 0||(X=Y.docs)===null||X===void 0?void 0:X.description}}};m.parameters={...m.parameters,docs:{...(ee=m.parameters)===null||ee===void 0?void 0:ee.docs,source:{originalSource:`{
  name: "Skeleton (Loading)",
  args: {
    size: "md",
    skeleton: true
  }
}`,...(re=m.parameters)===null||re===void 0||(ae=re.docs)===null||ae===void 0?void 0:ae.source},description:{story:`Estado de carregamento no tamanho padrão (md).\r
Use enquanto os dados do usuário estão sendo buscados da API\r
para evitar layout shift e melhorar a percepção de performance.`,...(ne=m.parameters)===null||ne===void 0||(se=ne.docs)===null||se===void 0?void 0:se.description}}};c.parameters={...c.parameters,docs:{...(ie=c.parameters)===null||ie===void 0?void 0:ie.docs,source:{originalSource:`{
  name: "Skeleton — Todos os Tamanhos",
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "16px"
  }}>\r
      <Avatar size="sm" skeleton />\r
      <Avatar size="md" skeleton />\r
      <Avatar size="lg" skeleton />\r
    </div>
}`,...(te=c.parameters)===null||te===void 0||(oe=te.docs)===null||oe===void 0?void 0:oe.source},description:{story:`Skeleton aplicado nos três tamanhos disponíveis.\r
Use em listas ou grids onde avatares de tamanhos distintos aparecem em carregamento simultâneo.`,...(de=c.parameters)===null||de===void 0||(le=de.docs)===null||le===void 0?void 0:le.description}}};p.parameters={...p.parameters,docs:{...(me=p.parameters)===null||me===void 0?void 0:me.docs,source:{originalSource:`{
  name: "Todas as Variantes",
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px"
  }}>\r
      <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }}>\r
        <Avatar size="md" src="https://i.pravatar.cc/150?img=5" />\r
        <small>Imagem</small>\r
      </div>\r
      <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }}>\r
        <Avatar size="md" letter="João Silva" />\r
        <small>Iniciais</small>\r
      </div>\r
      <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }}>\r
        <Avatar size="md" />\r
        <small>Ícone</small>\r
      </div>\r
      <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }}>\r
        <Avatar size="md" skeleton={true} />\r
        <small>Skeleton</small>\r
      </div>\r
    </div>
}`,...(pe=p.parameters)===null||pe===void 0||(ce=pe.docs)===null||ce===void 0?void 0:ce.source},description:{story:`Exibe todas as variantes visuais possíveis (imagem, iniciais, ícone, skeleton)\r
no tamanho md. Use para validação visual rápida do componente em conjunto.`,...(ue=p.parameters)===null||ue===void 0||(ve=ue.docs)===null||ve===void 0?void 0:ve.description}}};v.parameters={...v.parameters,docs:{...(_e=v.parameters)===null||_e===void 0?void 0:_e.docs,source:{originalSource:`{
  name: "Composição — Avatar Stack",
  render: () => <div style={{
    display: "flex",
    alignItems: "center"
  }}>\r
      {[3, 5, 7, 8, 10].map((img, i) => <div key={img} style={{
      marginLeft: i === 0 ? 0 : "-6px",
      zIndex: 5 - i,
      position: "relative",
      outline: "1px solid white",
      borderRadius: "50%"
    }}>\r
          <Avatar size="sm" src={\`https://i.pravatar.cc/150?img=\${img}\`} />\r
        </div>)}\r
    </div>
}`,...(xe=v.parameters)===null||xe===void 0||(ge=xe.docs)===null||ge===void 0?void 0:ge.source},description:{story:`Pilha de avatares sobrepostos (avatar stack).\r
O componente não gerencia z-index internamente;\r
o consumidor controla o empilhamento via CSS externo conforme demonstrado.`,...(ye=v.parameters)===null||ye===void 0||(Se=ye.docs)===null||Se===void 0?void 0:Se.description}}};const be=["Default","WithImage","WithInitials","WithSingleInitial","SizeSmall","SizeMedium","SizeLarge","SizeComparison","SkeletonDefault","SkeletonAllSizes","AllVariants","AvatarStack"];export{p as AllVariants,v as AvatarStack,r as Default,d as SizeComparison,l as SizeLarge,t as SizeMedium,o as SizeSmall,c as SkeletonAllSizes,m as SkeletonDefault,s as WithImage,n as WithInitials,i as WithSingleInitial,be as __namedExportsOrder,De as default};
