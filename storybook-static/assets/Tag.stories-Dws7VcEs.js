import{r as c,j as e}from"./iframe-CxNvl9BI.js";import{B as g}from"./ButtonIcon-BvrW2_xY.js";/* empty css               */import{B as v}from"./Button-CH6qqEEx.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-Bqm0CoJD.js";import"./Skeleton-C80QNm7w.js";import"./Loading-DhvOqAup.js";function y({animationDuration:t=200,onClose:a}){const[s,n]=c.useState(!1),[i,r]=c.useState(!1),d=c.useCallback(()=>{n(!0),setTimeout(()=>{r(!0),a?.()},t)},[t,a]);return{isDismissed:i,isClosing:s,handleClose:d}}const f=200;function o({content:t,variant:a,onClose:s}){const{isDismissed:n,isClosing:i,handleClose:r}=y({animationDuration:f,onClose:s});return n?null:e.jsxs("div",{className:["tag-root",a,i&&"tag-closing"].filter(Boolean).join(" "),children:[t,s&&e.jsx("span",{children:e.jsx(g,{appearance:"plain",size:"sm",icon:"close",variant:a==="secondary"?"primary":"on-color",onClick:r})})]})}const j={title:"Components/Tag",component:o,tags:["autodocs"],parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1320-552"},docs:{description:{component:`
**Tag** é um rótulo compacto com botão de remoção opcional.

Quando \`onClose\` é fornecida, clicar no botão \`×\` dispara uma animação de saída
suave (fade + scale + colapso de largura em 200 ms) antes de remover o tag do DOM.
O callback \`onClose\` é executado **após** a animação terminar — não antes — evitando
saltos de layout no container pai.

### Quando usar
- Exibir filtros selecionados, categorias ou rótulos
- Mostrar itens removíveis em inputs de múltipla seleção
- Indicadores de status que podem ser descartados

### Quando **não** usar
- Elemento com ação de clique geral (navegar, acionar) → use \`Button\` ou \`Chip\`
- Indicador de status fixo com ícone semântico → use \`Badge\`
- Conteúdo longo (mais de 2–3 palavras) → pode ser truncado pelo \`max-width: 300px\`

### Boas práticas
- Mantenha \`content\` curto — uma ou duas palavras
- Use \`variant\` consistentemente com a semântica de cores do design system
- Omita \`onClose\` para tags estáticos, não descartáveis
        `}}},argTypes:{content:{control:"text",description:"Texto exibido dentro do tag.",table:{type:{summary:"string"}}},variant:{control:"select",options:["primary","secondary","success","warning"],description:"Variante visual que controla cor de fundo e de texto, seguindo a semântica do design system.",table:{type:{summary:'"primary" | "secondary" | "success" | "warning"'}}},onClose:{action:"onClose",description:"Disparado **após** a animação de saída (200 ms). Quando fornecida, renderiza o botão de fechar (×).",table:{type:{summary:"() => void"}}}}},l={name:"Default",args:{content:"Design system",variant:"primary",onClose:()=>{}}},m={name:"All variants",render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(o,{content:"Primary",variant:"primary",onClose:()=>{}}),e.jsx(o,{content:"Secondary",variant:"secondary",onClose:()=>{}}),e.jsx(o,{content:"Success",variant:"success",onClose:()=>{}}),e.jsx(o,{content:"Warning",variant:"warning",onClose:()=>{}})]}),parameters:{docs:{description:{story:"As quatro variantes disponíveis. Use `primary` para destaque, `secondary` como neutro, `success` para itens concluídos e `warning` para itens que requerem atenção."}}}},p={name:"Active filters (real-world scenario)",render:()=>{const t=[{id:1,label:"Frontend",variant:"primary"},{id:2,label:"São Paulo",variant:"secondary"},{id:3,label:"Remoto",variant:"secondary"},{id:4,label:"Pleno",variant:"primary"}],[a,s]=c.useState(t);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("span",{style:{fontSize:"12px",color:"gray"},children:["Filtros ativos (",a.length,")"]}),e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:a.length===0?e.jsx("span",{style:{fontSize:"12px",color:"gray"},children:"Nenhum filtro ativo"}):a.map(n=>e.jsx(o,{content:n.label,variant:n.variant,onClose:()=>s(i=>i.filter(r=>r.id!==n.id))},n.id))})]})},parameters:{docs:{description:{story:"Cenário de filtros ativos em uma tela de busca. Demonstra o uso combinado de variantes `primary` e `secondary` em contexto real."}}}},u={name:"Long content (max-width edge case)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(o,{content:"Texto curto",variant:"primary",onClose:()=>{}}),e.jsx(o,{content:"Texto médio para validar",variant:"secondary",onClose:()=>{}}),e.jsx(o,{content:"Texto bem longo que pode exceder o limite de max-width do componente",variant:"warning",onClose:()=>{}})]}),parameters:{docs:{description:{story:"O container tem `max-width: 300px` e `overflow: hidden`. Conteúdos muito longos são truncados — considere aplicar `text-overflow: ellipsis` se necessário."}}}},x={name:"Dismiss animation lifecycle",render:()=>{const[t,a]=c.useState(!0),[s,n]=c.useState([]),i=r=>n(d=>[`${new Date().toLocaleTimeString("pt-BR")} — ${r}`,...d.slice(0,4)]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("div",{style:{minHeight:"32px"},children:t?e.jsx(o,{content:"Clique no × para animar",variant:"primary",onClose:()=>{i("onClose() disparado (após 200ms)"),a(!1)}}):e.jsx(v,{style:{width:"fit-content"},size:"sm",variant:"secondary",onClick:()=>{a(!0),i("Tag restaurado")},children:"Restaurar tag"})}),s.length>0&&e.jsx("div",{style:{fontSize:"11px",color:"gray",display:"flex",flexDirection:"column",gap:"4px"},children:s.map((r,d)=>e.jsx("span",{children:r},d))})]})},parameters:{docs:{description:{story:"Demonstra o ciclo de vida do dismiss: a animação ocorre primeiro, e `onClose` é chamado apenas após os 200 ms de transição. O log mostra o timestamp exato da chamada."}}}},A=["Default","AllVariants","ActiveFilters","LongContent","DismissAnimation"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    content: "Design system",
    variant: "primary",
    onClose: () => {}
  }
}`,...l.parameters?.docs?.source},description:{story:`Estado base do componente: tag primário descartável.\r
Clique no × para ver a animação de saída completa (fade + scale + colapso).`,...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "All variants",
  render: () => <div style={{
    display: "flex",
    gap: "8px",
    flexWrap: "wrap"
  }}>\r
      <Tag content="Primary" variant="primary" onClose={() => {}} />\r
      <Tag content="Secondary" variant="secondary" onClose={() => {}} />\r
      <Tag content="Success" variant="success" onClose={() => {}} />\r
      <Tag content="Warning" variant="warning" onClose={() => {}} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "As quatro variantes disponíveis. Use \`primary\` para destaque, \`secondary\` como neutro, \`success\` para itens concluídos e \`warning\` para itens que requerem atenção."
      }
    }
  }
}`,...m.parameters?.docs?.source},description:{story:`Todas as variantes lado a lado — primária, secundária, sucesso e aviso.\r
Útil para validar contraste e identidade visual de cada variante.`,...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Active filters (real-world scenario)",
  render: () => {
    const initial = [{
      id: 1,
      label: "Frontend",
      variant: "primary" as const
    }, {
      id: 2,
      label: "São Paulo",
      variant: "secondary" as const
    }, {
      id: 3,
      label: "Remoto",
      variant: "secondary" as const
    }, {
      id: 4,
      label: "Pleno",
      variant: "primary" as const
    }];
    const [filters, setFilters] = useState(initial);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }}>\r
        <span style={{
        fontSize: "12px",
        color: "gray"
      }}>\r
          Filtros ativos ({filters.length})\r
        </span>\r
        <div style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap"
      }}>\r
          {filters.length === 0 ? <span style={{
          fontSize: "12px",
          color: "gray"
        }}>\r
              Nenhum filtro ativo\r
            </span> : filters.map(f => <Tag key={f.id} content={f.label} variant={f.variant} onClose={() => setFilters(prev => prev.filter(x => x.id !== f.id))} />)}\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Cenário de filtros ativos em uma tela de busca. Demonstra o uso combinado de variantes \`primary\` e \`secondary\` em contexto real."
      }
    }
  }
}`,...p.parameters?.docs?.source},description:{story:`Simulação de filtros ativos — cenário real de busca com múltiplos filtros aplicados.\r
Clicar em × remove o filtro e exibe uma mensagem ao esvaziar a lista.`,...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Long content (max-width edge case)",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>\r
      <Tag content="Texto curto" variant="primary" onClose={() => {}} />\r
      <Tag content="Texto médio para validar" variant="secondary" onClose={() => {}} />\r
      <Tag content="Texto bem longo que pode exceder o limite de max-width do componente" variant="warning" onClose={() => {}} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "O container tem \`max-width: 300px\` e \`overflow: hidden\`. Conteúdos muito longos são truncados — considere aplicar \`text-overflow: ellipsis\` se necessário."
      }
    }
  }
}`,...u.parameters?.docs?.source},description:{story:"Conteúdo longo — valida o `max-width: 300px` e o `white-space: nowrap`.\r\nTextos muito longos são cortados pelo container; confirme se isso é\r\no comportamento desejado ou se `text-overflow: ellipsis` deve ser adicionado.",...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Dismiss animation lifecycle",
  render: () => {
    const [visible, setVisible] = useState(true);
    const [log, setLog] = useState<string[]>([]);
    const addLog = (msg: string) => setLog(prev => [\`\${new Date().toLocaleTimeString("pt-BR")} — \${msg}\`, ...prev.slice(0, 4)]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>\r
        <div style={{
        minHeight: "32px"
      }}>\r
          {visible ? <Tag content="Clique no × para animar" variant="primary" onClose={() => {
          addLog("onClose() disparado (após 200ms)");
          setVisible(false);
        }} /> : <Button style={{
          width: 'fit-content'
        }} size="sm" variant="secondary" onClick={() => {
          setVisible(true);
          addLog("Tag restaurado");
        }}>\r
              Restaurar tag\r
            </Button>}\r
        </div>\r
        {log.length > 0 && <div style={{
        fontSize: "11px",
        color: "gray",
        display: "flex",
        flexDirection: "column",
        gap: "4px"
      }}>\r
            {log.map((entry, i) => <span key={i}>{entry}</span>)}\r
          </div>}\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstra o ciclo de vida do dismiss: a animação ocorre primeiro, e \`onClose\` é chamado apenas após os 200 ms de transição. O log mostra o timestamp exato da chamada."
      }
    }
  }
}`,...x.parameters?.docs?.source},description:{story:"Animação de dismiss — demonstra o ciclo completo de saída.\r\nO hook `useTagDismiss` executa: isClosing=true → 200ms → isDismissed=true → onClose().",...x.parameters?.docs?.description}}};export{p as ActiveFilters,m as AllVariants,l as Default,x as DismissAnimation,u as LongContent,A as __namedExportsOrder,j as default};
