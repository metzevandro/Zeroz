import{j as d}from"./iframe-DFdk80Qn.js";/* empty css               */import{L as c}from"./Link-p6zI2j0f.js";import"./preload-helper-PPVm8Dsz.js";import"./Skeleton-bEV42asx.js";var p,m,u,v,_,g,b,f,h,k,x,L,y,D,C,N,q,S,H,E,I,P,w,A,T,j,R,U,z,V,B,O,G,M,Z,F,Q,J,K,W;const re={title:"Components/Link",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'\nO **Link** é um elemento âncora estilizado que estende o `<a>` nativo com\num estado visual de desabilitado e um tipo restrito para `target`.\n\nTodos os atributos HTML padrão do `<a>` (`href`, `rel`, `aria-label`, etc.)\nsão repassados ao elemento subjacente via rest spread.\n\n> ⚠️ **Acessibilidade:** elementos `<a>` nativos não suportam o atributo `disabled`.\n> A prop `disabled` aplica apenas estilo visual via CSS — **não bloqueia a navegação**.\n> Para bloquear completamente, combine com `onClick={(e) => e.preventDefault()}`.\n\n### Quando usar\n- Navegação para URLs internas ou externas\n- Links inline dentro de parágrafos ou descrições\n- Links de ação que abrem conteúdo em nova aba\n\n### Boas práticas\n- Forneça um label descritivo em `children` — evite textos genéricos como "clique aqui"\n- Use `target="_blank"` com `rel="noreferrer"` em links externos (segurança)\n- Para desabilitar completamente: `disabled` + `onClick={(e) => e.preventDefault()}`\n        '}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10077"}},argTypes:{href:{control:"text",description:"URL de destino. Repassado diretamente ao atributo `href` do `<a>` nativo.",table:{type:{summary:"string"}}},target:{control:"select",options:["_self","_blank","_parent","_top"],description:"Contexto de navegação para a URL vinculada.",table:{defaultValue:{summary:'"_self"'},type:{summary:'"_self" | "_blank" | "_parent" | "_top"'}}},disabled:{control:"boolean",description:"Aplica estilo visual de desabilitado. Não bloqueia a navegação nativamente — combine com `onClick={(e) => e.preventDefault()}` para bloquear por completo.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},children:{control:"text",description:"Label ou conteúdo do link. Aceita qualquer `ReactNode`.",table:{type:{summary:"React.ReactNode"}}}}},a={name:"Default",args:{href:"https://example.com",children:"Visitar example.com"}},r={name:"Estado — desabilitado",args:{href:"/configuracoes",disabled:!0,onClick:e=>e.preventDefault(),children:"Configurações (indisponível)",skeleton:!1}},o={name:"Estado — skeleton",args:{href:"/configuracoes",disabled:!0,onClick:e=>e.preventDefault(),children:"Configurações (carregando)",skeleton:!0}},n={name:"Nova aba (target _blank)",args:{href:"https://example.com",target:"_blank",rel:"noreferrer",children:"Abrir em nova aba"}},s={name:"Contexto real — inline em parágrafo",render:()=>d.jsxs("p",{style:{font:"var(--s-typography-paragraph-regular)"},children:["Ao continuar, você concorda com os nossos"," ",d.jsx(c,{href:"/termos",children:"Termos de Uso"})," e com a nossa"," ",d.jsx(c,{href:"/privacidade",children:"Política de Privacidade"}),"."]})},t={name:"Contexto real — inline em texto de ajuda",render:()=>d.jsxs("p",{style:{font:"var(--s-typography-paragraph-regular)"},children:["Não sabe como configurar sua integração?"," ",d.jsx(c,{href:"https://docs.example.com",target:"_blank",rel:"noreferrer",children:"Consulte a documentação"})," ","para um guia passo a passo."]})},i={name:"Edge case — sem href",args:{onClick:e=>e.preventDefault(),children:"Ação via onClick"}},l={name:"Edge case — label longo",args:{href:"/relatorio",children:"Baixar relatório completo de vendas do terceiro trimestre de 2025"}};a.parameters={...a.parameters,docs:{...(p=a.parameters)===null||p===void 0?void 0:p.docs,source:{originalSource:`{
  name: "Default",
  args: {
    href: "https://example.com",
    children: "Visitar example.com"
  }
}`,...(u=a.parameters)===null||u===void 0||(m=u.docs)===null||m===void 0?void 0:m.source},description:{story:`Link padrão com href e label descritivo.\r
Use os Controls para explorar todas as props disponíveis.`,...(_=a.parameters)===null||_===void 0||(v=_.docs)===null||v===void 0?void 0:v.description}}};r.parameters={...r.parameters,docs:{...(g=r.parameters)===null||g===void 0?void 0:g.docs,source:{originalSource:`{
  name: "Estado — desabilitado",
  args: {
    href: "/configuracoes",
    disabled: true,
    onClick: e => e.preventDefault(),
    children: "Configurações (indisponível)",
    skeleton: false
  }
}`,...(f=r.parameters)===null||f===void 0||(b=f.docs)===null||b===void 0?void 0:b.source},description:{story:"Estado desabilitado — estilo visual inativo via prop `disabled`.\r\nA navegação é bloqueada aqui também via `onClick={(e) => e.preventDefault()}`.\r\nEm produção, sempre combine os dois para garantir o bloqueio completo.",...(k=r.parameters)===null||k===void 0||(h=k.docs)===null||h===void 0?void 0:h.description}}};o.parameters={...o.parameters,docs:{...(x=o.parameters)===null||x===void 0?void 0:x.docs,source:{originalSource:`{
  name: "Estado — skeleton",
  args: {
    href: "/configuracoes",
    disabled: true,
    onClick: e => e.preventDefault(),
    children: "Configurações (carregando)",
    skeleton: true
  }
}`,...(y=o.parameters)===null||y===void 0||(L=y.docs)===null||L===void 0?void 0:L.source},description:{story:"Estado skeleton — renderiza um placeholder de carregamento.\r\nMede automaticamente o tamanho real do Link e aplica ao Skeleton.\r\nUse `disabled={true}` para bloquear interações enquanto carrega.\r\nEm produção, sempre combine com `onClick={(e) => e.preventDefault()}` \r\npara garantir o bloqueio completo da navegação.",...(C=o.parameters)===null||C===void 0||(D=C.docs)===null||D===void 0?void 0:D.description}}};n.parameters={...n.parameters,docs:{...(N=n.parameters)===null||N===void 0?void 0:N.docs,source:{originalSource:`{
  name: "Nova aba (target _blank)",
  args: {
    href: "https://example.com",
    target: "_blank",
    rel: "noreferrer",
    children: "Abrir em nova aba"
  }
}`,...(S=n.parameters)===null||S===void 0||(q=S.docs)===null||q===void 0?void 0:q.source},description:{story:'Abre em nova aba com `target="_blank"` e `rel="noreferrer"`.\r\nO atributo `rel="noreferrer"` impede que a nova página acesse `window.opener`\r\n— boa prática de segurança para links externos.',...(E=n.parameters)===null||E===void 0||(H=E.docs)===null||H===void 0?void 0:H.description}}};s.parameters={...s.parameters,docs:{...(I=s.parameters)===null||I===void 0?void 0:I.docs,source:{originalSource:`{
  name: "Contexto real — inline em parágrafo",
  render: () => <p style={{
    font: "var(--s-typography-paragraph-regular)"
  }}>\r
      Ao continuar, você concorda com os nossos{" "}\r
      <Link href="/termos">Termos de Uso</Link> e com a nossa{" "}\r
      <Link href="/privacidade">Política de Privacidade</Link>.\r
    </p>
}`,...(w=s.parameters)===null||w===void 0||(P=w.docs)===null||P===void 0?void 0:P.source},description:{story:`Links inline dentro de um parágrafo de texto.\r
Demonstra o fluxo natural do link dentro do corpo de texto.`,...(T=s.parameters)===null||T===void 0||(A=T.docs)===null||A===void 0?void 0:A.description}}};t.parameters={...t.parameters,docs:{...(j=t.parameters)===null||j===void 0?void 0:j.docs,source:{originalSource:`{
  name: "Contexto real — inline em texto de ajuda",
  render: () => <p style={{
    font: "var(--s-typography-paragraph-regular)"
  }}>\r
      Não sabe como configurar sua integração?{" "}\r
      <Link href="https://docs.example.com" target="_blank" rel="noreferrer">\r
        Consulte a documentação\r
      </Link>{" "}\r
      para um guia passo a passo.\r
    </p>
}`,...(U=t.parameters)===null||U===void 0||(R=U.docs)===null||R===void 0?void 0:R.source},description:{story:'Link externo inline numa descrição de configuração.\r\nDemonstra o uso com `target="_blank"` em contexto de documentação ou ajuda.',...(V=t.parameters)===null||V===void 0||(z=V.docs)===null||z===void 0?void 0:z.description}}};i.parameters={...i.parameters,docs:{...(B=i.parameters)===null||B===void 0?void 0:B.docs,source:{originalSource:`{
  name: "Edge case — sem href",
  args: {
    onClick: e => e.preventDefault(),
    children: "Ação via onClick"
  }
}`,...(G=i.parameters)===null||G===void 0||(O=G.docs)===null||O===void 0?void 0:O.source},description:{story:"Link sem `href` — renderiza como âncora sem destino.\r\nÚtil para links acionados programaticamente via `onClick`.",...(Z=i.parameters)===null||Z===void 0||(M=Z.docs)===null||M===void 0?void 0:M.description}}};l.parameters={...l.parameters,docs:{...(F=l.parameters)===null||F===void 0?void 0:F.docs,source:{originalSource:`{
  name: "Edge case — label longo",
  args: {
    href: "/relatorio",
    children: "Baixar relatório completo de vendas do terceiro trimestre de 2025"
  }
}`,...(J=l.parameters)===null||J===void 0||(Q=J.docs)===null||Q===void 0?void 0:Q.source},description:{story:`Label longo — valida o comportamento de quebra de linha e\r
o padding horizontal em textos que excedem uma linha.`,...(W=l.parameters)===null||W===void 0||(K=W.docs)===null||K===void 0?void 0:K.description}}};const oe=["Default","Disabled","Skeleton","NewTab","InlineParagraph","InlineHelp","NoHref","LongLabel"];export{a as Default,r as Disabled,t as InlineHelp,s as InlineParagraph,l as LongLabel,n as NewTab,i as NoHref,o as Skeleton,oe as __namedExportsOrder,re as default};
