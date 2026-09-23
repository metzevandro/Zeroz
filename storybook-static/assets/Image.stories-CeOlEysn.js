import{j as e}from"./iframe-CxNvl9BI.js";/* empty css               */import{S as y}from"./Skeleton-C80QNm7w.js";import"./preload-helper-PPVm8Dsz.js";const c=({src:l,alt:a,width:g,height:u,skeleton:h=!1,...x})=>h?e.jsx(y,{width:`${g}px`,height:`${u}px`}):e.jsx("img",{className:"image-root",src:l,alt:a,width:g,height:u,...x}),S={title:"Components/Image",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'\nO **Image** é um wrapper fino ao redor do elemento nativo `<img>` que adiciona\num estado de skeleton correspondente às dimensões da imagem.\n\nTodos os atributos HTML padrão de `<img>` (ex: `loading`, `decoding`, `crossOrigin`)\nsão repassados ao elemento subjacente via rest spread — pode ser usado como\nsubstituto direto do `<img>` nativo.\n\n### Quando usar\n- Sempre que uma imagem precisar de um placeholder skeleton durante o carregamento\n- Para garantir a classe `image-root` consistente em todas as imagens do sistema\n\n### Quando não usar\n- Para ícones ou SVGs — use o componente `Icon`\n- Para avatares de usuário — use o componente `Avatar`, que já gerencia fallbacks\n\n### Boas práticas\n- Sempre forneça um `alt` descritivo para imagens não decorativas (WCAG 2.1 SC 1.1.1)\n- Use `alt=""` apenas para imagens puramente decorativas\n- Forneça `width` e `height` para evitar layout shift (CLS)\n- Use `skeleton` enquanto a URL da imagem está sendo buscada, não enquanto o browser carrega a imagem\n        '}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1338-8872"}},argTypes:{src:{control:"text",description:"URL da imagem a exibir.",table:{type:{summary:"string"}}},alt:{control:"text",description:"Descrição acessível da imagem. Obrigatória para imagens não decorativas.",table:{type:{summary:"string"}}},width:{control:"text",description:"Largura renderizada. Também usada para dimensionar o `<Skeleton>` quando `skeleton` é `true`.",table:{type:{summary:"string"}}},height:{control:"text",description:"Altura renderizada. Também usada para dimensionar o `<Skeleton>` quando `skeleton` é `true`.",table:{type:{summary:"string"}}},skeleton:{control:"boolean",description:"Renderiza um placeholder `<Skeleton>` no lugar da imagem. Use durante estados de carregamento.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}}}},s={name:"Default",args:{src:"https://picsum.photos/seed/ds/400/200",alt:"Foto de paisagem de exemplo",width:"400",height:"200"}},r={name:"Proporção — quadrada",args:{src:"https://picsum.photos/seed/ds2/240/240",alt:"Thumbnail quadrado",width:"240",height:"240"}},o={name:"Proporção — 16:9 (banner)",args:{src:"https://picsum.photos/seed/ds4/480/270",alt:"Banner em proporção 16:9",width:"480",height:"270"}},t={name:"Proporção — thumbnail compacto",args:{src:"https://picsum.photos/seed/ds5/80/80",alt:"Thumbnail compacto",width:"80",height:"80"}},n={name:"Estado — skeleton (carregando)",args:{src:"https://picsum.photos/seed/ds/400/200",alt:"Foto de exemplo",width:"400",height:"200",skeleton:!0}},i={name:"Estado — comparativo skeleton vs imagem",render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-medium)",alignItems:"flex-start"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx(c,{src:"https://picsum.photos/seed/ds/200/120",alt:"Imagem carregada",width:"200",height:"120",skeleton:!0}),e.jsx("small",{children:"skeleton"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx(c,{src:"https://picsum.photos/seed/ds/200/120",alt:"Imagem carregada",width:"200",height:"120"}),e.jsx("small",{children:"carregada"})]})]})},d={name:"Atributo nativo — loading lazy",args:{src:"https://picsum.photos/seed/ds3/400/200",alt:"Imagem com carregamento lazy",width:"400",height:"200",loading:"lazy"}},m={name:"Contexto real — grade em carregamento",render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--s-spacing-small)"},children:Array.from({length:6},(l,a)=>e.jsx(c,{src:`https://picsum.photos/seed/${a}/160/120`,alt:`Produto ${a+1}`,width:"160",height:"120",skeleton:!0},a))})},p={name:"Contexto real — grade carregada",render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--s-spacing-small)"},children:Array.from({length:6},(l,a)=>e.jsx(c,{src:`https://picsum.photos/seed/${a}/160/120`,alt:`Produto ${a+1}`,width:"160",height:"120"},a))})},w=["Default","Square","Widescreen","Thumbnail","SkeletonState","SkeletonComparison","LazyLoaded","LoadingGrid","LoadedGrid"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    src: "https://picsum.photos/seed/ds/400/200",
    alt: "Foto de paisagem de exemplo",
    width: "400",
    height: "200"
  }
}`,...s.parameters?.docs?.source},description:{story:`Imagem padrão com dimensões explícitas.\r
Use os Controls para explorar as props disponíveis.`,...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Proporção — quadrada",
  args: {
    src: "https://picsum.photos/seed/ds2/240/240",
    alt: "Thumbnail quadrado",
    width: "240",
    height: "240"
  }
}`,...r.parameters?.docs?.source},description:{story:"Imagem quadrada — proporção comum em thumbnails e cards de produto.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Proporção — 16:9 (banner)",
  args: {
    src: "https://picsum.photos/seed/ds4/480/270",
    alt: "Banner em proporção 16:9",
    width: "480",
    height: "270"
  }
}`,...o.parameters?.docs?.source},description:{story:"Imagem em proporção 16:9 — padrão para banners, heroes e capas de artigo.",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Proporção — thumbnail compacto",
  args: {
    src: "https://picsum.photos/seed/ds5/80/80",
    alt: "Thumbnail compacto",
    width: "80",
    height: "80"
  }
}`,...t.parameters?.docs?.source},description:{story:"Imagem pequena — dimensões compactas para thumbnails em listas e tabelas.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Estado — skeleton (carregando)",
  args: {
    src: "https://picsum.photos/seed/ds/400/200",
    alt: "Foto de exemplo",
    width: "400",
    height: "200",
    skeleton: true
  }
}`,...n.parameters?.docs?.source},description:{story:`Estado de carregamento — skeleton com as mesmas dimensões da imagem.\r
Evita layout shift quando a imagem real carrega.`,...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Estado — comparativo skeleton vs imagem",
  render: () => <div style={{
    display: "flex",
    gap: "var(--s-spacing-medium)",
    alignItems: "flex-start"
  }}>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-nano)"
    }}>\r
        <Image src="https://picsum.photos/seed/ds/200/120" alt="Imagem carregada" width="200" height="120" skeleton />\r
        <small>skeleton</small>\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-nano)"
    }}>\r
        <Image src="https://picsum.photos/seed/ds/200/120" alt="Imagem carregada" width="200" height="120" />\r
        <small>carregada</small>\r
      </div>\r
    </div>
}`,...i.parameters?.docs?.source},description:{story:`Comparativo entre a imagem carregada e o skeleton com as mesmas dimensões.\r
Valida que não há layout shift entre os dois estados.`,...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Atributo nativo — loading lazy",
  args: {
    src: "https://picsum.photos/seed/ds3/400/200",
    alt: "Imagem com carregamento lazy",
    width: "400",
    height: "200",
    loading: "lazy"
  }
}`,...d.parameters?.docs?.source},description:{story:'Carregamento lazy via atributo nativo `loading="lazy"`.\r\nTodos os atributos HTML do `<img>` são repassados via rest spread.',...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — grade em carregamento",
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "var(--s-spacing-small)"
  }}>\r
      {Array.from({
      length: 6
    }, (_, i) => <Image key={i} src={\`https://picsum.photos/seed/\${i}/160/120\`} alt={\`Produto \${i + 1}\`} width="160" height="120" skeleton />)}\r
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Grade de imagens com skeleton — simula uma listagem de produtos\r
em estado de carregamento inicial.`,...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — grade carregada",
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "var(--s-spacing-small)"
  }}>\r
      {Array.from({
      length: 6
    }, (_, i) => <Image key={i} src={\`https://picsum.photos/seed/\${i}/160/120\`} alt={\`Produto \${i + 1}\`} width="160" height="120" />)}\r
    </div>
}`,...p.parameters?.docs?.source},description:{story:`Grade de imagens carregadas — mesmo layout da story de carregamento,\r
para comparar o estado final com o skeleton.`,...p.parameters?.docs?.description}}};export{s as Default,d as LazyLoaded,p as LoadedGrid,m as LoadingGrid,i as SkeletonComparison,n as SkeletonState,r as Square,t as Thumbnail,o as Widescreen,w as __namedExportsOrder,S as default};
