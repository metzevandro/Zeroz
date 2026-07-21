import{j as a}from"./iframe-C_0AXUlQ.js";import{B as o}from"./Brand-BUKJYRCA.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";var p,g,v,u,_,x,L,y,z,b,h,S,f,C,j,G,I,O,B,A,T,V,D,M,P,w,q,U,N,k,E,R,H,Q,W,Z,F,J,K,X,Y,$,aa,ea,oa;const e="/logo-sm.svg",ma={title:"Components/Brand",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10009"}},argTypes:{src:{control:"text",description:"Caminho ou URL da imagem do logotipo.",table:{type:{summary:"string"}}},alt:{control:"text",description:'Descrição acessível da imagem. Use `""` para logos decorativos ou um label descritivo quando o logo é o principal identificador da marca.',table:{defaultValue:{summary:'""'},type:{summary:"string"}}},size:{control:"radio",options:["sm","md","lg"],description:"Controla a altura do container. A largura escala proporcionalmente.",table:{defaultValue:{summary:'"md"'},type:{summary:'"sm" | "md" | "lg"'}}},loading:{control:"radio",options:["eager","lazy"],description:"Estratégia nativa de carregamento da imagem, repassada ao `<img>` via rest spread.",table:{category:"Atributos HTML img",type:{summary:'"eager" | "lazy"'}}}}},r={name:"Playground",args:{src:e,alt:"Logo da marca",size:"md"}},s={name:"Tamanho — sm (24px)",args:{src:e,alt:"Logo da marca",size:"sm"}},n={name:"Tamanho — md (32px)",args:{src:e,alt:"Logo da marca",size:"md"}},d={name:"Tamanho — lg (40px)",args:{src:e,alt:"Logo da marca",size:"lg"}},ra=()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--s-spacing-nano)"},children:[a.jsx(o,{src:e,alt:"Logo sm",size:"sm"}),a.jsx("small",{children:"sm · 24px"})]}),sa=()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--s-spacing-nano)"},children:[a.jsx(o,{src:e,alt:"Logo md",size:"md"}),a.jsx("small",{children:"md · 32px"})]}),na=()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--s-spacing-nano)"},children:[a.jsx(o,{src:e,alt:"Logo lg",size:"lg"}),a.jsx("small",{children:"lg · 40px"})]}),i={name:"Comparativo — tamanhos",render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--s-spacing-large)"},children:[a.jsx(ra,{}),a.jsx(sa,{}),a.jsx(na,{})]})},t={name:"Acessibilidade — logo decorativo (alt vazio)",args:{src:e,alt:"",size:"md"}},l={name:"Atributo nativo — loading lazy",args:{src:e,alt:"Logo da marca",size:"md",loading:"lazy"}},m={name:"Contexto real — barra de navegação",render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--s-spacing-x-small)",padding:"var(--s-spacing-x-small) var(--s-spacing-medium)",borderBottom:"var(--s-border-width-hairline) solid var(--s-color-border-default)",background:"var(--s-color-fill-default)",width:"320px"},children:[a.jsx(o,{src:e,alt:"Logo Acme Corp",size:"md"}),a.jsx("small",{children:a.jsx("strong",{children:"Acme Corp"})})]})},c={name:"Contexto real — tela de login",render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--s-spacing-medium)",padding:"var(--s-spacing-x-large)",background:"var(--s-color-fill-default)",borderRadius:"var(--s-border-radius-medium)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",width:"280px"},children:[a.jsx(o,{src:e,alt:"Logo Acme Corp",size:"lg"}),a.jsx("small",{children:a.jsx("strong",{children:"Bem-vindo de volta"})}),a.jsx("small",{children:"Entre na sua conta para continuar"})]})};r.parameters={...r.parameters,docs:{...(p=r.parameters)===null||p===void 0?void 0:p.docs,source:{originalSource:`{
  name: "Playground",
  args: {
    src: LOGO_SVG,
    alt: "Logo da marca",
    size: "md"
  }
}`,...(v=r.parameters)===null||v===void 0||(g=v.docs)===null||g===void 0?void 0:g.source},description:{story:`Story interativa para explorar todas as props via Controls.\r
Ponto de entrada recomendado para inspecionar o componente.`,...(_=r.parameters)===null||_===void 0||(u=_.docs)===null||u===void 0?void 0:u.description}}};s.parameters={...s.parameters,docs:{...(x=s.parameters)===null||x===void 0?void 0:x.docs,source:{originalSource:`{
  name: "Tamanho — sm (24px)",
  args: {
    src: LOGO_SVG,
    alt: "Logo da marca",
    size: "sm"
  }
}`,...(y=s.parameters)===null||y===void 0||(L=y.docs)===null||L===void 0?void 0:L.source},description:{story:`Tamanho compacto — 24px de altura.\r
Use em layouts densos, rodapés e referências inline.`,...(b=s.parameters)===null||b===void 0||(z=b.docs)===null||z===void 0?void 0:z.description}}};n.parameters={...n.parameters,docs:{...(h=n.parameters)===null||h===void 0?void 0:h.docs,source:{originalSource:`{
  name: "Tamanho — md (32px)",
  args: {
    src: LOGO_SVG,
    alt: "Logo da marca",
    size: "md"
  }
}`,...(f=n.parameters)===null||f===void 0||(S=f.docs)===null||S===void 0?void 0:S.source},description:{story:`Tamanho padrão — 32px de altura.\r
Indicado para barras de navegação, headers e cards.`,...(j=n.parameters)===null||j===void 0||(C=j.docs)===null||C===void 0?void 0:C.description}}};d.parameters={...d.parameters,docs:{...(G=d.parameters)===null||G===void 0?void 0:G.docs,source:{originalSource:`{
  name: "Tamanho — lg (40px)",
  args: {
    src: LOGO_SVG,
    alt: "Logo da marca",
    size: "lg"
  }
}`,...(O=d.parameters)===null||O===void 0||(I=O.docs)===null||I===void 0?void 0:I.source},description:{story:`Tamanho grande — 40px de altura.\r
Indicado para posicionamentos em destaque: headers, login, landing pages.`,...(A=d.parameters)===null||A===void 0||(B=A.docs)===null||B===void 0?void 0:B.description}}};i.parameters={...i.parameters,docs:{...(T=i.parameters)===null||T===void 0?void 0:T.docs,source:{originalSource:`{
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
}`,...(D=i.parameters)===null||D===void 0||(V=D.docs)===null||V===void 0?void 0:V.source},description:{story:`Os três tamanhos lado a lado para comparação visual.\r
Use para validar proporções e espaçamentos após alterações de token.`,...(P=i.parameters)===null||P===void 0||(M=P.docs)===null||M===void 0?void 0:M.description}}};t.parameters={...t.parameters,docs:{...(w=t.parameters)===null||w===void 0?void 0:w.docs,source:{originalSource:`{
  name: "Acessibilidade — logo decorativo (alt vazio)",
  args: {
    src: LOGO_SVG,
    alt: "",
    size: "md"
  }
}`,...(U=t.parameters)===null||U===void 0||(q=U.docs)===null||q===void 0?void 0:q.source},description:{story:'Logo decorativo com `alt=""`.\r\nUse quando o logo é puramente decorativo e o texto ao redor já identifica a marca.\r\nO atributo vazio oculta a imagem de leitores de tela (WCAG 2.1 SC 1.1.1).',...(k=t.parameters)===null||k===void 0||(N=k.docs)===null||N===void 0?void 0:N.description}}};l.parameters={...l.parameters,docs:{...(E=l.parameters)===null||E===void 0?void 0:E.docs,source:{originalSource:`{
  name: "Atributo nativo — loading lazy",
  args: {
    src: LOGO_SVG,
    alt: "Logo da marca",
    size: "md",
    loading: "lazy"
  }
}`,...(H=l.parameters)===null||H===void 0||(R=H.docs)===null||R===void 0?void 0:R.source},description:{story:'Carregamento lazy via atributo nativo `loading="lazy"`.\r\nO Brand repassa todos os `ImgHTMLAttributes` ao `<img>` subjacente —\r\nuse para otimizar o carregamento quando o logo não está acima da dobra.',...(W=l.parameters)===null||W===void 0||(Q=W.docs)===null||Q===void 0?void 0:Q.description}}};m.parameters={...m.parameters,docs:{...(Z=m.parameters)===null||Z===void 0?void 0:Z.docs,source:{originalSource:`{
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
}`,...(J=m.parameters)===null||J===void 0||(F=J.docs)===null||F===void 0?void 0:F.source},description:{story:"Logo na barra de navegação — uso mais comum do componente.\r\nO tamanho `md` mantém a proporção adequada ao lado do nome da marca.",...(X=m.parameters)===null||X===void 0||(K=X.docs)===null||K===void 0?void 0:K.description}}};c.parameters={...c.parameters,docs:{...(Y=c.parameters)===null||Y===void 0?void 0:Y.docs,source:{originalSource:`{
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
}`,...(aa=c.parameters)===null||aa===void 0||($=aa.docs)===null||$===void 0?void 0:$.source},description:{story:"Logo em tela de login — tamanho `lg` para destaque máximo.\r\nPadrão comum em páginas de autenticação e onboarding.",...(oa=c.parameters)===null||oa===void 0||(ea=oa.docs)===null||ea===void 0?void 0:ea.description}}};const ca=["Playground","Small","Medium","Large","SizeComparison","DecorativeLogo","LazyLoaded","InNavbar","InLogin"];export{t as DecorativeLogo,c as InLogin,m as InNavbar,d as Large,l as LazyLoaded,n as Medium,r as Playground,i as SizeComparison,s as Small,ca as __namedExportsOrder,ma as default};
