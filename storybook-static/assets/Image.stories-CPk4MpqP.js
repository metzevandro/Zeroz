import{j as e}from"./iframe-Cuzq1CpA.js";/* empty css               */import{S as ie}from"./Skeleton-BVkqHP_m.js";import"./preload-helper-PPVm8Dsz.js";const p=({src:c,alt:a,width:se,height:te,skeleton:de=!1,...ne})=>de?e.jsx(ie,{width:`${se}px`,height:`${te}px`}):e.jsx("img",{className:"image-root",src:c,alt:a,width:se,height:te,...ne});var u,g,h,v,_,y,x,S,f,k,b,L,w,q,C,T,z,G,I,j,D,P,$,A,E,W,U,F,O,B,R,V,H,M,Q,Z,N,J,K,X,Y,ee,ae,re,oe;const ue={title:"Components/Image",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'\nO **Image** é um wrapper fino ao redor do elemento nativo `<img>` que adiciona\num estado de skeleton correspondente às dimensões da imagem.\n\nTodos os atributos HTML padrão de `<img>` (ex: `loading`, `decoding`, `crossOrigin`)\nsão repassados ao elemento subjacente via rest spread — pode ser usado como\nsubstituto direto do `<img>` nativo.\n\n### Quando usar\n- Sempre que uma imagem precisar de um placeholder skeleton durante o carregamento\n- Para garantir a classe `image-root` consistente em todas as imagens do sistema\n\n### Quando não usar\n- Para ícones ou SVGs — use o componente `Icon`\n- Para avatares de usuário — use o componente `Avatar`, que já gerencia fallbacks\n\n### Boas práticas\n- Sempre forneça um `alt` descritivo para imagens não decorativas (WCAG 2.1 SC 1.1.1)\n- Use `alt=""` apenas para imagens puramente decorativas\n- Forneça `width` e `height` para evitar layout shift (CLS)\n- Use `skeleton` enquanto a URL da imagem está sendo buscada, não enquanto o browser carrega a imagem\n        '}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1338-8872"}},argTypes:{src:{control:"text",description:"URL da imagem a exibir.",table:{type:{summary:"string"}}},alt:{control:"text",description:"Descrição acessível da imagem. Obrigatória para imagens não decorativas.",table:{type:{summary:"string"}}},width:{control:"text",description:"Largura renderizada. Também usada para dimensionar o `<Skeleton>` quando `skeleton` é `true`.",table:{type:{summary:"string"}}},height:{control:"text",description:"Altura renderizada. Também usada para dimensionar o `<Skeleton>` quando `skeleton` é `true`.",table:{type:{summary:"string"}}},skeleton:{control:"boolean",description:"Renderiza um placeholder `<Skeleton>` no lugar da imagem. Use durante estados de carregamento.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}}}},r={name:"Default",args:{src:"https://picsum.photos/seed/ds/400/200",alt:"Foto de paisagem de exemplo",width:"400",height:"200"}},o={name:"Proporção — quadrada",args:{src:"https://picsum.photos/seed/ds2/240/240",alt:"Thumbnail quadrado",width:"240",height:"240"}},s={name:"Proporção — 16:9 (banner)",args:{src:"https://picsum.photos/seed/ds4/480/270",alt:"Banner em proporção 16:9",width:"480",height:"270"}},t={name:"Proporção — thumbnail compacto",args:{src:"https://picsum.photos/seed/ds5/80/80",alt:"Thumbnail compacto",width:"80",height:"80"}},d={name:"Estado — skeleton (carregando)",args:{src:"https://picsum.photos/seed/ds/400/200",alt:"Foto de exemplo",width:"400",height:"200",skeleton:!0}},n={name:"Estado — comparativo skeleton vs imagem",render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-medium)",alignItems:"flex-start"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx(p,{src:"https://picsum.photos/seed/ds/200/120",alt:"Imagem carregada",width:"200",height:"120",skeleton:!0}),e.jsx("small",{children:"skeleton"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx(p,{src:"https://picsum.photos/seed/ds/200/120",alt:"Imagem carregada",width:"200",height:"120"}),e.jsx("small",{children:"carregada"})]})]})},i={name:"Atributo nativo — loading lazy",args:{src:"https://picsum.photos/seed/ds3/400/200",alt:"Imagem com carregamento lazy",width:"400",height:"200",loading:"lazy"}},m={name:"Contexto real — grade em carregamento",render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--s-spacing-small)"},children:Array.from({length:6},(c,a)=>e.jsx(p,{src:`https://picsum.photos/seed/${a}/160/120`,alt:`Produto ${a+1}`,width:"160",height:"120",skeleton:!0},a))})},l={name:"Contexto real — grade carregada",render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--s-spacing-small)"},children:Array.from({length:6},(c,a)=>e.jsx(p,{src:`https://picsum.photos/seed/${a}/160/120`,alt:`Produto ${a+1}`,width:"160",height:"120"},a))})};r.parameters={...r.parameters,docs:{...(u=r.parameters)===null||u===void 0?void 0:u.docs,source:{originalSource:`{
  name: "Default",
  args: {
    src: "https://picsum.photos/seed/ds/400/200",
    alt: "Foto de paisagem de exemplo",
    width: "400",
    height: "200"
  }
}`,...(h=r.parameters)===null||h===void 0||(g=h.docs)===null||g===void 0?void 0:g.source},description:{story:`Imagem padrão com dimensões explícitas.\r
Use os Controls para explorar as props disponíveis.`,...(_=r.parameters)===null||_===void 0||(v=_.docs)===null||v===void 0?void 0:v.description}}};o.parameters={...o.parameters,docs:{...(y=o.parameters)===null||y===void 0?void 0:y.docs,source:{originalSource:`{
  name: "Proporção — quadrada",
  args: {
    src: "https://picsum.photos/seed/ds2/240/240",
    alt: "Thumbnail quadrado",
    width: "240",
    height: "240"
  }
}`,...(S=o.parameters)===null||S===void 0||(x=S.docs)===null||x===void 0?void 0:x.source},description:{story:"Imagem quadrada — proporção comum em thumbnails e cards de produto.",...(k=o.parameters)===null||k===void 0||(f=k.docs)===null||f===void 0?void 0:f.description}}};s.parameters={...s.parameters,docs:{...(b=s.parameters)===null||b===void 0?void 0:b.docs,source:{originalSource:`{
  name: "Proporção — 16:9 (banner)",
  args: {
    src: "https://picsum.photos/seed/ds4/480/270",
    alt: "Banner em proporção 16:9",
    width: "480",
    height: "270"
  }
}`,...(w=s.parameters)===null||w===void 0||(L=w.docs)===null||L===void 0?void 0:L.source},description:{story:"Imagem em proporção 16:9 — padrão para banners, heroes e capas de artigo.",...(C=s.parameters)===null||C===void 0||(q=C.docs)===null||q===void 0?void 0:q.description}}};t.parameters={...t.parameters,docs:{...(T=t.parameters)===null||T===void 0?void 0:T.docs,source:{originalSource:`{
  name: "Proporção — thumbnail compacto",
  args: {
    src: "https://picsum.photos/seed/ds5/80/80",
    alt: "Thumbnail compacto",
    width: "80",
    height: "80"
  }
}`,...(G=t.parameters)===null||G===void 0||(z=G.docs)===null||z===void 0?void 0:z.source},description:{story:"Imagem pequena — dimensões compactas para thumbnails em listas e tabelas.",...(j=t.parameters)===null||j===void 0||(I=j.docs)===null||I===void 0?void 0:I.description}}};d.parameters={...d.parameters,docs:{...(D=d.parameters)===null||D===void 0?void 0:D.docs,source:{originalSource:`{
  name: "Estado — skeleton (carregando)",
  args: {
    src: "https://picsum.photos/seed/ds/400/200",
    alt: "Foto de exemplo",
    width: "400",
    height: "200",
    skeleton: true
  }
}`,...($=d.parameters)===null||$===void 0||(P=$.docs)===null||P===void 0?void 0:P.source},description:{story:`Estado de carregamento — skeleton com as mesmas dimensões da imagem.\r
Evita layout shift quando a imagem real carrega.`,...(E=d.parameters)===null||E===void 0||(A=E.docs)===null||A===void 0?void 0:A.description}}};n.parameters={...n.parameters,docs:{...(W=n.parameters)===null||W===void 0?void 0:W.docs,source:{originalSource:`{
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
}`,...(F=n.parameters)===null||F===void 0||(U=F.docs)===null||U===void 0?void 0:U.source},description:{story:`Comparativo entre a imagem carregada e o skeleton com as mesmas dimensões.\r
Valida que não há layout shift entre os dois estados.`,...(B=n.parameters)===null||B===void 0||(O=B.docs)===null||O===void 0?void 0:O.description}}};i.parameters={...i.parameters,docs:{...(R=i.parameters)===null||R===void 0?void 0:R.docs,source:{originalSource:`{
  name: "Atributo nativo — loading lazy",
  args: {
    src: "https://picsum.photos/seed/ds3/400/200",
    alt: "Imagem com carregamento lazy",
    width: "400",
    height: "200",
    loading: "lazy"
  }
}`,...(H=i.parameters)===null||H===void 0||(V=H.docs)===null||V===void 0?void 0:V.source},description:{story:'Carregamento lazy via atributo nativo `loading="lazy"`.\r\nTodos os atributos HTML do `<img>` são repassados via rest spread.',...(Q=i.parameters)===null||Q===void 0||(M=Q.docs)===null||M===void 0?void 0:M.description}}};m.parameters={...m.parameters,docs:{...(Z=m.parameters)===null||Z===void 0?void 0:Z.docs,source:{originalSource:`{
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
}`,...(J=m.parameters)===null||J===void 0||(N=J.docs)===null||N===void 0?void 0:N.source},description:{story:`Grade de imagens com skeleton — simula uma listagem de produtos\r
em estado de carregamento inicial.`,...(X=m.parameters)===null||X===void 0||(K=X.docs)===null||K===void 0?void 0:K.description}}};l.parameters={...l.parameters,docs:{...(Y=l.parameters)===null||Y===void 0?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ae=l.parameters)===null||ae===void 0||(ee=ae.docs)===null||ee===void 0?void 0:ee.source},description:{story:`Grade de imagens carregadas — mesmo layout da story de carregamento,\r
para comparar o estado final com o skeleton.`,...(oe=l.parameters)===null||oe===void 0||(re=oe.docs)===null||re===void 0?void 0:re.description}}};const ge=["Default","Square","Widescreen","Thumbnail","SkeletonState","SkeletonComparison","LazyLoaded","LoadingGrid","LoadedGrid"];export{r as Default,i as LazyLoaded,l as LoadedGrid,m as LoadingGrid,n as SkeletonComparison,d as SkeletonState,o as Square,t as Thumbnail,s as Widescreen,ge as __namedExportsOrder,ue as default};
