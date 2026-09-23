import{j as a}from"./iframe-CxNvl9BI.js";import{B as r}from"./Brand-r7_AXlLh.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";const e="/logo-sm.svg",b={title:"Components/Brand",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
O **Brand** exibe um ativo de identidade visual (logotipo) em tamanho controlado e consistente.

A prop \`size\` controla a altura do container — a largura escala automaticamente
para preservar a proporção original do logo. Todos os atributos HTML do \`<img>\`
são repassados ao elemento subjacente via rest spread.

### Tamanhos disponíveis
| size  | altura | uso recomendado                                              |
|-------|--------|--------------------------------------------------------------|
| \`sm\` | 24px   | Layouts densos, rodapés, referências inline                  |
| \`md\` | 32px   | Uso padrão — barras de navegação, cards                      |
| \`lg\` | 40px   | Destaque — headers, páginas de login, landing pages          |

### SVG vs raster
Quando um SVG é renderizado como \`<img>\`, seus estilos internos ficam isolados da página.
Se precisar controlar cores de fill via CSS, considere renderizar o SVG inline.

### Quando usar
- Barras de navegação e headers da aplicação
- Grids de logos de parceiros ou clientes
- Telas de login, onboarding e empty states
- Rodapés e páginas "sobre"

### Boas práticas
- Forneça um \`alt\` descritivo quando o logo é o principal identificador da marca na página
- Use \`alt=""\` para logos decorativos já descritos pelo texto ao redor (WCAG 2.1 SC 1.1.1)
- Prefira fontes SVG para renderização nítida em todos os tamanhos e densidades de tela
- Use \`size="md"\` como padrão; reserve \`lg\` para posicionamentos em destaque
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10009"}},argTypes:{src:{control:"text",description:"Caminho ou URL da imagem do logotipo.",table:{type:{summary:"string"}}},alt:{control:"text",description:'Descrição acessível da imagem. Use `""` para logos decorativos ou um label descritivo quando o logo é o principal identificador da marca.',table:{defaultValue:{summary:'""'},type:{summary:"string"}}},size:{control:"radio",options:["sm","md","lg"],description:"Controla a altura do container. A largura escala proporcionalmente.",table:{defaultValue:{summary:'"md"'},type:{summary:'"sm" | "md" | "lg"'}}},loading:{control:"radio",options:["eager","lazy"],description:"Estratégia nativa de carregamento da imagem, repassada ao `<img>` via rest spread.",table:{category:"Atributos HTML img",type:{summary:'"eager" | "lazy"'}}}}},o={name:"Playground",args:{src:e,alt:"Logo da marca",size:"md"}},s={name:"Tamanho — sm (24px)",args:{src:e,alt:"Logo da marca",size:"sm"}},n={name:"Tamanho — md (32px)",args:{src:e,alt:"Logo da marca",size:"md"}},i={name:"Tamanho — lg (40px)",args:{src:e,alt:"Logo da marca",size:"lg"}},p=()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--s-spacing-nano)"},children:[a.jsx(r,{src:e,alt:"Logo sm",size:"sm"}),a.jsx("small",{children:"sm · 24px"})]}),g=()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--s-spacing-nano)"},children:[a.jsx(r,{src:e,alt:"Logo md",size:"md"}),a.jsx("small",{children:"md · 32px"})]}),u=()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--s-spacing-nano)"},children:[a.jsx(r,{src:e,alt:"Logo lg",size:"lg"}),a.jsx("small",{children:"lg · 40px"})]}),d={name:"Comparativo — tamanhos",render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--s-spacing-large)"},children:[a.jsx(p,{}),a.jsx(g,{}),a.jsx(u,{})]})},t={name:"Acessibilidade — logo decorativo (alt vazio)",args:{src:e,alt:"",size:"md"}},l={name:"Atributo nativo — loading lazy",args:{src:e,alt:"Logo da marca",size:"md",loading:"lazy"}},c={name:"Contexto real — barra de navegação",render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--s-spacing-x-small)",padding:"var(--s-spacing-x-small) var(--s-spacing-medium)",borderBottom:"var(--s-border-width-hairline) solid var(--s-color-border-default)",background:"var(--s-color-fill-default)",width:"320px"},children:[a.jsx(r,{src:e,alt:"Logo Acme Corp",size:"md"}),a.jsx("small",{children:a.jsx("strong",{children:"Acme Corp"})})]})},m={name:"Contexto real — tela de login",render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--s-spacing-medium)",padding:"var(--s-spacing-x-large)",background:"var(--s-color-fill-default)",borderRadius:"var(--s-border-radius-medium)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",width:"280px"},children:[a.jsx(r,{src:e,alt:"Logo Acme Corp",size:"lg"}),a.jsx("small",{children:a.jsx("strong",{children:"Bem-vindo de volta"})}),a.jsx("small",{children:"Entre na sua conta para continuar"})]})},L=["Playground","Small","Medium","Large","SizeComparison","DecorativeLogo","LazyLoaded","InNavbar","InLogin"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Playground",
  args: {
    src: LOGO_SVG,
    alt: "Logo da marca",
    size: "md"
  }
}`,...o.parameters?.docs?.source},description:{story:`Story interativa para explorar todas as props via Controls.\r
Ponto de entrada recomendado para inspecionar o componente.`,...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Tamanho — sm (24px)",
  args: {
    src: LOGO_SVG,
    alt: "Logo da marca",
    size: "sm"
  }
}`,...s.parameters?.docs?.source},description:{story:`Tamanho compacto — 24px de altura.\r
Use em layouts densos, rodapés e referências inline.`,...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Tamanho — md (32px)",
  args: {
    src: LOGO_SVG,
    alt: "Logo da marca",
    size: "md"
  }
}`,...n.parameters?.docs?.source},description:{story:`Tamanho padrão — 32px de altura.\r
Indicado para barras de navegação, headers e cards.`,...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Tamanho — lg (40px)",
  args: {
    src: LOGO_SVG,
    alt: "Logo da marca",
    size: "lg"
  }
}`,...i.parameters?.docs?.source},description:{story:`Tamanho grande — 40px de altura.\r
Indicado para posicionamentos em destaque: headers, login, landing pages.`,...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Comparativo — tamanhos",
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "var(--s-spacing-large)"
  }}>\r
      <BrandSm />\r
      <BrandMd />\r
      <BrandLg />\r
    </div>
}`,...d.parameters?.docs?.source},description:{story:`Os três tamanhos lado a lado para comparação visual.\r
Use para validar proporções e espaçamentos após alterações de token.`,...d.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Acessibilidade — logo decorativo (alt vazio)",
  args: {
    src: LOGO_SVG,
    alt: "",
    size: "md"
  }
}`,...t.parameters?.docs?.source},description:{story:'Logo decorativo com `alt=""`.\r\nUse quando o logo é puramente decorativo e o texto ao redor já identifica a marca.\r\nO atributo vazio oculta a imagem de leitores de tela (WCAG 2.1 SC 1.1.1).',...t.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Atributo nativo — loading lazy",
  args: {
    src: LOGO_SVG,
    alt: "Logo da marca",
    size: "md",
    loading: "lazy"
  }
}`,...l.parameters?.docs?.source},description:{story:'Carregamento lazy via atributo nativo `loading="lazy"`.\r\nO Brand repassa todos os `ImgHTMLAttributes` ao `<img>` subjacente —\r\nuse para otimizar o carregamento quando o logo não está acima da dobra.',...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — barra de navegação",
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "var(--s-spacing-x-small)",
    padding: "var(--s-spacing-x-small) var(--s-spacing-medium)",
    borderBottom: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
    background: "var(--s-color-fill-default)",
    width: "320px"
  }}>\r
      <Brand src={LOGO_SVG} alt="Logo Acme Corp" size="md" />\r
      <small><strong>Acme Corp</strong></small>\r
    </div>
}`,...c.parameters?.docs?.source},description:{story:"Logo na barra de navegação — uso mais comum do componente.\r\nO tamanho `md` mantém a proporção adequada ao lado do nome da marca.",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — tela de login",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "var(--s-spacing-medium)",
    padding: "var(--s-spacing-x-large)",
    background: "var(--s-color-fill-default)",
    borderRadius: "var(--s-border-radius-medium)",
    border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
    width: "280px"
  }}>\r
      <Brand src={LOGO_SVG} alt="Logo Acme Corp" size="lg" />\r
      <small><strong>Bem-vindo de volta</strong></small>\r
      <small>Entre na sua conta para continuar</small>\r
    </div>
}`,...m.parameters?.docs?.source},description:{story:"Logo em tela de login — tamanho `lg` para destaque máximo.\r\nPadrão comum em páginas de autenticação e onboarding.",...m.parameters?.docs?.description}}};export{t as DecorativeLogo,m as InLogin,c as InNavbar,i as Large,l as LazyLoaded,n as Medium,o as Playground,d as SizeComparison,s as Small,L as __namedExportsOrder,b as default};
