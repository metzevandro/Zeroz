import{j as l}from"./iframe-CxNvl9BI.js";/* empty css               */import{L as d}from"./Link-CXf21LbM.js";import"./preload-helper-PPVm8Dsz.js";import"./Skeleton-C80QNm7w.js";const f={title:"Components/Link",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'\nO **Link** é um elemento âncora estilizado que estende o `<a>` nativo com\num estado visual de desabilitado e um tipo restrito para `target`.\n\nTodos os atributos HTML padrão do `<a>` (`href`, `rel`, `aria-label`, etc.)\nsão repassados ao elemento subjacente via rest spread.\n\n> ⚠️ **Acessibilidade:** elementos `<a>` nativos não suportam o atributo `disabled`.\n> A prop `disabled` aplica apenas estilo visual via CSS — **não bloqueia a navegação**.\n> Para bloquear completamente, combine com `onClick={(e) => e.preventDefault()}`.\n\n### Quando usar\n- Navegação para URLs internas ou externas\n- Links inline dentro de parágrafos ou descrições\n- Links de ação que abrem conteúdo em nova aba\n\n### Boas práticas\n- Forneça um label descritivo em `children` — evite textos genéricos como "clique aqui"\n- Use `target="_blank"` com `rel="noreferrer"` em links externos (segurança)\n- Para desabilitar completamente: `disabled` + `onClick={(e) => e.preventDefault()}`\n        '}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10077"}},argTypes:{href:{control:"text",description:"URL de destino. Repassado diretamente ao atributo `href` do `<a>` nativo.",table:{type:{summary:"string"}}},target:{control:"select",options:["_self","_blank","_parent","_top"],description:"Contexto de navegação para a URL vinculada.",table:{defaultValue:{summary:'"_self"'},type:{summary:'"_self" | "_blank" | "_parent" | "_top"'}}},disabled:{control:"boolean",description:"Aplica estilo visual de desabilitado. Não bloqueia a navegação nativamente — combine com `onClick={(e) => e.preventDefault()}` para bloquear por completo.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},children:{control:"text",description:"Label ou conteúdo do link. Aceita qualquer `ReactNode`.",table:{type:{summary:"React.ReactNode"}}}}},a={name:"Default",args:{href:"https://example.com",children:"Visitar example.com"}},r={name:"Estado — desabilitado",args:{href:"/configuracoes",disabled:!0,onClick:e=>e.preventDefault(),children:"Configurações (indisponível)",skeleton:!1}},o={name:"Estado — skeleton",args:{href:"/configuracoes",disabled:!0,onClick:e=>e.preventDefault(),children:"Configurações (carregando)",skeleton:!0}},n={name:"Nova aba (target _blank)",args:{href:"https://example.com",target:"_blank",rel:"noreferrer",children:"Abrir em nova aba"}},t={name:"Contexto real — inline em parágrafo",render:()=>l.jsxs("p",{style:{font:"var(--s-typography-paragraph-regular)"},children:["Ao continuar, você concorda com os nossos"," ",l.jsx(d,{href:"/termos",children:"Termos de Uso"})," e com a nossa"," ",l.jsx(d,{href:"/privacidade",children:"Política de Privacidade"}),"."]})},s={name:"Contexto real — inline em texto de ajuda",render:()=>l.jsxs("p",{style:{font:"var(--s-typography-paragraph-regular)"},children:["Não sabe como configurar sua integração?"," ",l.jsx(d,{href:"https://docs.example.com",target:"_blank",rel:"noreferrer",children:"Consulte a documentação"})," ","para um guia passo a passo."]})},i={name:"Edge case — sem href",args:{onClick:e=>e.preventDefault(),children:"Ação via onClick"}},c={name:"Edge case — label longo",args:{href:"/relatorio",children:"Baixar relatório completo de vendas do terceiro trimestre de 2025"}},b=["Default","Disabled","Skeleton","NewTab","InlineParagraph","InlineHelp","NoHref","LongLabel"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    href: "https://example.com",
    children: "Visitar example.com"
  }
}`,...a.parameters?.docs?.source},description:{story:`Link padrão com href e label descritivo.\r
Use os Controls para explorar todas as props disponíveis.`,...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Estado — desabilitado",
  args: {
    href: "/configuracoes",
    disabled: true,
    onClick: e => e.preventDefault(),
    children: "Configurações (indisponível)",
    skeleton: false
  }
}`,...r.parameters?.docs?.source},description:{story:"Estado desabilitado — estilo visual inativo via prop `disabled`.\r\nA navegação é bloqueada aqui também via `onClick={(e) => e.preventDefault()}`.\r\nEm produção, sempre combine os dois para garantir o bloqueio completo.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Estado — skeleton",
  args: {
    href: "/configuracoes",
    disabled: true,
    onClick: e => e.preventDefault(),
    children: "Configurações (carregando)",
    skeleton: true
  }
}`,...o.parameters?.docs?.source},description:{story:"Estado skeleton — renderiza um placeholder de carregamento.\r\nMede automaticamente o tamanho real do Link e aplica ao Skeleton.\r\nUse `disabled={true}` para bloquear interações enquanto carrega.\r\nEm produção, sempre combine com `onClick={(e) => e.preventDefault()}` \r\npara garantir o bloqueio completo da navegação.",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Nova aba (target _blank)",
  args: {
    href: "https://example.com",
    target: "_blank",
    rel: "noreferrer",
    children: "Abrir em nova aba"
  }
}`,...n.parameters?.docs?.source},description:{story:'Abre em nova aba com `target="_blank"` e `rel="noreferrer"`.\r\nO atributo `rel="noreferrer"` impede que a nova página acesse `window.opener`\r\n— boa prática de segurança para links externos.',...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — inline em parágrafo",
  render: () => <p style={{
    font: "var(--s-typography-paragraph-regular)"
  }}>\r
      Ao continuar, você concorda com os nossos{" "}\r
      <Link href="/termos">Termos de Uso</Link> e com a nossa{" "}\r
      <Link href="/privacidade">Política de Privacidade</Link>.\r
    </p>
}`,...t.parameters?.docs?.source},description:{story:`Links inline dentro de um parágrafo de texto.\r
Demonstra o fluxo natural do link dentro do corpo de texto.`,...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:'Link externo inline numa descrição de configuração.\r\nDemonstra o uso com `target="_blank"` em contexto de documentação ou ajuda.',...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Edge case — sem href",
  args: {
    onClick: e => e.preventDefault(),
    children: "Ação via onClick"
  }
}`,...i.parameters?.docs?.source},description:{story:"Link sem `href` — renderiza como âncora sem destino.\r\nÚtil para links acionados programaticamente via `onClick`.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Edge case — label longo",
  args: {
    href: "/relatorio",
    children: "Baixar relatório completo de vendas do terceiro trimestre de 2025"
  }
}`,...c.parameters?.docs?.source},description:{story:`Label longo — valida o comportamento de quebra de linha e\r
o padding horizontal em textos que excedem uma linha.`,...c.parameters?.docs?.description}}};export{a as Default,r as Disabled,s as InlineHelp,t as InlineParagraph,c as LongLabel,n as NewTab,i as NoHref,o as Skeleton,b as __namedExportsOrder,f as default};
