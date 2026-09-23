import{j as e}from"./iframe-CxNvl9BI.js";import{A as a}from"./Avatar-CdL7RA1a.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./Skeleton-C80QNm7w.js";import"./Icon-Bqm0CoJD.js";const S={title:"Components/Avatar",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Componente de identidade visual do usuário. Exibe, em ordem de prioridade, uma imagem, as iniciais do nome ou um ícone padrão como fallback — com suporte a estado de carregamento via skeleton.\n\n**Hierarquia de renderização:** `skeleton` → `src` (imagem) → `letter` (iniciais) → ícone padrão (fallback)"}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-9992"}},argTypes:{size:{control:"radio",options:["sm","md","lg"],description:"Define o tamanho do avatar. `sm` = 24 px (listas compactas), `md` = 40 px (uso geral), `lg` = 64 px (perfis e cabeçalhos).",table:{defaultValue:{summary:"md"},type:{summary:'"sm" | "md" | "lg"'}}},src:{control:"text",description:"URL da imagem a exibir. Tem prioridade sobre `letter` e o ícone padrão.",table:{type:{summary:"string"}}},letter:{control:"text",description:"Nome ou string de onde as iniciais são extraídas. `'João Silva'` → `'JS'`. Ignorado quando `src` é fornecido.",table:{type:{summary:"string"}}},skeleton:{control:"boolean",description:"Exibe o estado de carregamento (skeleton circular). Quando `true`, nenhum outro conteúdo é renderizado.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}}}},n={name:"Default (Ícone Fallback)",args:{size:"md"}},s={name:"Com Imagem",args:{size:"md",src:"https://i.pravatar.cc/150?img=3"}},r={name:"Com Iniciais (nome completo)",args:{size:"md",letter:"João Silva"}},t={name:"Com Inicial Única",args:{size:"md",letter:"Carlos"}},o={name:"Tamanho — sm (24 px)",args:{size:"sm",letter:"Anna Lee"}},i={name:"Tamanho — md (40 px)",args:{size:"md",letter:"Anna Lee"}},l={name:"Tamanho — lg (64 px)",args:{size:"lg",letter:"Anna Lee"}},m={name:"Comparativo de Tamanhos",render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[e.jsx(a,{size:"sm",letter:"Anna Lee"}),e.jsx("small",{children:"sm · 24px"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[e.jsx(a,{size:"md",letter:"Anna Lee"}),e.jsx("small",{children:"md · 40px"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[e.jsx(a,{size:"lg",letter:"Anna Lee"}),e.jsx("small",{children:"lg · 64px"})]})]})},c={name:"Skeleton (Loading)",args:{size:"md",skeleton:!0}},d={name:"Skeleton — Todos os Tamanhos",render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(a,{size:"sm",skeleton:!0}),e.jsx(a,{size:"md",skeleton:!0}),e.jsx(a,{size:"lg",skeleton:!0})]})},p={name:"Todas as Variantes",render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[e.jsx(a,{size:"md",src:"https://i.pravatar.cc/150?img=5"}),e.jsx("small",{children:"Imagem"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[e.jsx(a,{size:"md",letter:"João Silva"}),e.jsx("small",{children:"Iniciais"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[e.jsx(a,{size:"md"}),e.jsx("small",{children:"Ícone"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[e.jsx(a,{size:"md",skeleton:!0}),e.jsx("small",{children:"Skeleton"})]})]})},x={name:"Composição — Avatar Stack",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center"},children:[3,5,7,8,10].map((u,g)=>e.jsx("div",{style:{marginLeft:g===0?0:"-6px",zIndex:5-g,position:"relative",outline:"1px solid white",borderRadius:"50%"},children:e.jsx(a,{size:"sm",src:`https://i.pravatar.cc/150?img=${u}`})},u))})},A=["Default","WithImage","WithInitials","WithSingleInitial","SizeSmall","SizeMedium","SizeLarge","SizeComparison","SkeletonDefault","SkeletonAllSizes","AllVariants","AvatarStack"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Default (Ícone Fallback)",
  args: {
    size: "md"
  }
}`,...n.parameters?.docs?.source},description:{story:`Estado base do componente sem nenhuma prop opcional.\r
Renderiza o ícone padrão de pessoa (fallback automático).\r
Use os Controls do painel para explorar todas as combinações de props.`,...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Com Imagem",
  args: {
    size: "md",
    src: "https://i.pravatar.cc/150?img=3"
  }
}`,...s.parameters?.docs?.source},description:{story:"Avatar com imagem fornecida via URL.\r\nPrioridade máxima na hierarquia de renderização — sobrepõe `letter` e o ícone.",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Com Iniciais (nome completo)",
  args: {
    size: "md",
    letter: "João Silva"
  }
}`,...r.parameters?.docs?.source},description:{story:'Avatar com iniciais extraídas de um nome completo.\r\nQuando `letter` contém espaço, exibe o primeiro e o último caractere em maiúsculo.\r\nEx: "João Silva" → "JS"',...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Com Inicial Única",
  args: {
    size: "md",
    letter: "Carlos"
  }
}`,...t.parameters?.docs?.source},description:{story:'Avatar com inicial única.\r\nQuando `letter` não contém espaço, exibe apenas o primeiro caractere em maiúsculo.\r\nEx: "Carlos" → "C"',...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Tamanho — sm (24 px)",
  args: {
    size: "sm",
    letter: "Anna Lee"
  }
}`,...o.parameters?.docs?.source},description:{story:`Tamanho pequeno — 24 px.\r
Indicado para listas densas, tabelas e layouts compactos.`,...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Tamanho — md (40 px)",
  args: {
    size: "md",
    letter: "Anna Lee"
  }
}`,...i.parameters?.docs?.source},description:{story:`Tamanho médio — 40 px.\r
Tamanho recomendado para uso geral (comentários, cards, navbars).`,...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Tamanho — lg (64 px)",
  args: {
    size: "lg",
    letter: "Anna Lee"
  }
}`,...l.parameters?.docs?.source},description:{story:`Tamanho grande — 64 px.\r
Indicado para páginas de perfil, cabeçalhos de conta e apresentações de usuário.`,...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`Comparativo visual dos três tamanhos disponíveis lado a lado.\r
Útil para validar proporções e espaçamentos no design system.`,...m.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Skeleton (Loading)",
  args: {
    size: "md",
    skeleton: true
  }
}`,...c.parameters?.docs?.source},description:{story:`Estado de carregamento no tamanho padrão (md).\r
Use enquanto os dados do usuário estão sendo buscados da API\r
para evitar layout shift e melhorar a percepção de performance.`,...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:`Skeleton aplicado nos três tamanhos disponíveis.\r
Use em listas ou grids onde avatares de tamanhos distintos aparecem em carregamento simultâneo.`,...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`Exibe todas as variantes visuais possíveis (imagem, iniciais, ícone, skeleton)\r
no tamanho md. Use para validação visual rápida do componente em conjunto.`,...p.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Pilha de avatares sobrepostos (avatar stack).\r
O componente não gerencia z-index internamente;\r
o consumidor controla o empilhamento via CSS externo conforme demonstrado.`,...x.parameters?.docs?.description}}};export{p as AllVariants,x as AvatarStack,n as Default,m as SizeComparison,l as SizeLarge,i as SizeMedium,o as SizeSmall,d as SkeletonAllSizes,c as SkeletonDefault,s as WithImage,r as WithInitials,t as WithSingleInitial,A as __namedExportsOrder,S as default};
