import{j as e,r as m,i as w}from"./iframe-CxNvl9BI.js";import{B as k}from"./ButtonIcon-BvrW2_xY.js";import{I as N}from"./Icon-Bqm0CoJD.js";import{B as p}from"./Button-CH6qqEEx.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./Skeleton-C80QNm7w.js";import"./Loading-DhvOqAup.js";function B(t,o,r,n){return["notification",t,o,"open",r&&"dismissible",n&&"exiting"].filter(Boolean).join(" ")}const T=({icon:t,title:o,description:r,variant:n,type:l,isOpen:i=!1,isExiting:c=!1,dismissible:s=!1,withAction:a=!1,disableButton:d=!1,buttonLabel:S,onClickButton:I,onClose:A})=>{if(l==="inline"&&!i)return null;if(l==="float"&&!i&&!c)return e.jsx("div",{"aria-hidden":!0,className:"notification float notification-hidden"});const j=a||!!r;return e.jsxs("div",{className:B(n,l,s,c),children:[e.jsxs("div",{className:`notification-title ${n}`,children:[e.jsx(N,{icon:t,size:"md"}),e.jsx("div",{className:"title",children:o}),s&&e.jsx(k,{variant:"on-color",size:"sm",icon:"close",appearance:"plain",onClick:A})]}),j&&e.jsxs("div",{className:"notification-content",children:[r&&e.jsx("div",{className:"description",children:r}),a&&e.jsx("div",{className:"notification-with-action",children:e.jsx(p,{size:"md",variant:n,disabled:d,onClick:I,children:S})})]})]})},D=400;function C({notifications:t}){const[o,r]=m.useState([]),n=m.useRef(t);n.current=t,m.useEffect(()=>{r(i=>{const c=new Set(i.map(d=>d.id)),s=new Set(t.map(d=>d.id)),a=i.filter(d=>s.has(d.id)||d.isExiting);for(const d of t)c.has(d.id)||a.push({id:d.id,isVisible:!1,isExiting:!1});return a})},[t]),m.useEffect(()=>{const i=o.filter(s=>!s.isVisible&&!s.isExiting);if(i.length===0)return;const c=setTimeout(()=>{r(s=>s.map(a=>i.some(d=>d.id===a.id)?{...a,isVisible:!0}:a))},16);return()=>clearTimeout(c)},[o]);const l=m.useCallback(i=>{r(c=>c.map(s=>s.id===i?{...s,isExiting:!0,isVisible:!1}:s)),setTimeout(()=>{r(c=>c.filter(s=>s.id!==i)),n.current.find(c=>c.id===i)?.onClose?.()},D)},[]);return w.createPortal(e.jsx("div",{className:"notification-container",children:o.map(({id:i,isVisible:c,isExiting:s})=>{const a=n.current.find(d=>d.id===i);return a?e.jsx(T,{type:"float",isOpen:c,isExiting:s,variant:a.variant,title:a.title,description:a.description,icon:a.icon,dismissible:a.dismissible,withAction:a.withAction,buttonLabel:a.buttonLabel,disableButton:a.disableButton,onClickButton:a.onClickButton,onClose:()=>l(i)},i):null})}),document.body)}const R={title:"Components/Notification",component:T,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
O **Notification** exibe uma mensagem contextual com ícone, título, descrição opcional,
ação opcional e botão de fechar.

Suporta dois modos de exibição:

| type       | comportamento                                                                     |
|------------|-----------------------------------------------------------------------------------|
| \`"inline"\` | Renderiza no fluxo do documento — sem container necessário                        |
| \`"float"\`  | Toast sobreposto — **sempre use dentro de \`<NotificationContainer>\`**            |

### Float — sempre use NotificationContainer
O \`NotificationContainer\` é um portal fixo que gerencia empilhamento,
animações de entrada/saída e reordenação suave quando um toast é dispensado.

\`\`\`tsx
const [toasts, setToasts] = useState<NotificationEntry[]>([]);

const adicionar = () =>
  setToasts((prev) => [...prev, { id: crypto.randomUUID(), variant: "success", ... }]);

const remover = (id: string) =>
  setToasts((prev) => prev.filter((t) => t.id !== id));

<Button onClick={adicionar}>Notificar</Button>

<NotificationContainer
  notifications={toasts.map((t) => ({ ...t, onClose: () => remover(t.id) }))}
/>
\`\`\`

### Variantes
| variant      | ícone sugerido    | uso                                       |
|--------------|-------------------|-------------------------------------------|
| \`primary\`   | \`info\`           | Informações neutras, atualizações         |
| \`secondary\` | \`campaign\`       | Avisos de sistema, manutenção             |
| \`success\`   | \`check_circle\`   | Operação concluída com êxito              |
| \`warning\`   | \`warning\`        | Erros, expiração de sessão, atenção       |

### Dismissible vs auto-dismiss
- **\`dismissible: true\`** — exibe botão X; o toast permanece até ser fechado manualmente
- **\`dismissible: false\`** — sem botão X; o toast desaparece automaticamente após ~5s
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=942-8970"}},argTypes:{title:{control:"text",description:"Texto do título exibido no cabeçalho colorido.",table:{type:{summary:"string"}}},description:{control:"text",description:"Texto descritivo exibido abaixo do cabeçalho. Opcional.",table:{type:{summary:"string"}}},icon:{control:"text",description:"Nome do ícone Material Symbol exibido no cabeçalho.",table:{type:{summary:"string"}}},variant:{control:"select",options:["primary","secondary","warning","success"],description:"Intenção semântica de cor do cabeçalho.",table:{type:{summary:'"primary" | "secondary" | "warning" | "success"'}}},type:{control:"radio",options:["float","inline"],description:"`inline` = fluxo do documento. `float` = toast sobreposto (requer `NotificationContainer`).",table:{type:{summary:'"float" | "inline"'}}},isOpen:{control:"boolean",description:"Controla a visibilidade da notificação.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},dismissible:{control:"boolean",description:"Exibe o botão de fechar. Quando `false`, o float desaparece automaticamente após ~5s.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},withAction:{control:"boolean",description:"Exibe um botão de ação dentro do corpo da notificação.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},buttonLabel:{control:"text",description:"Label do botão de ação. Requer `withAction: true`.",table:{type:{summary:"string"}}},disableButton:{control:"boolean",description:"Desativa o botão de ação.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},onClose:{action:"onClose",description:"Callback disparado ao clicar no botão de fechar.",table:{type:{summary:"() => void"}}},onClickButton:{action:"onClickButton",description:"Callback disparado ao clicar no botão de ação.",table:{type:{summary:"() => void"}}}},decorators:[t=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(t,{})})]},u={name:"Inline — success",args:{isOpen:!0,type:"inline",variant:"success",icon:"check_circle",title:"Alterações salvas",description:"Seu perfil foi atualizado com sucesso.",dismissible:!0}},x={name:"Inline — warning",args:{isOpen:!0,type:"inline",variant:"warning",icon:"warning",title:"Sessão expirando",description:"Você será desconectado em 5 minutos.",withAction:!0,buttonLabel:"Manter sessão",dismissible:!0}},f={name:"Inline — primary",args:{isOpen:!0,type:"inline",variant:"primary",icon:"info",title:"Atualização disponível",description:"Uma nova versão está pronta para instalação.",dismissible:!0}},v={name:"Inline — secondary",args:{isOpen:!0,type:"inline",variant:"secondary",icon:"campaign",title:"Manutenção programada",description:"Sistema indisponível domingo das 02:00 às 04:00 UTC.",dismissible:!0}},U=[{variant:"primary",icon:"info",title:"Informação",description:"Texto de suporte informativo."},{variant:"secondary",icon:"campaign",title:"Aviso de sistema",description:"Texto de suporte secundário."},{variant:"warning",icon:"warning",title:"Atenção necessária",description:"Texto de suporte de alerta."},{variant:"success",icon:"check_circle",title:"Operação concluída",description:"Texto de suporte de sucesso."}],F=({variant:t,icon:o,title:r,description:n})=>e.jsx(T,{isOpen:!0,type:"inline",variant:t,icon:o,title:r,description:n,dismissible:!0}),y={name:"Inline — todas as variantes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:U.map(t=>e.jsx(F,{...t},t.variant))})},h=[{variant:"success",icon:"check_circle",title:"Arquivo enviado",description:"relatorio_q3.pdf foi salvo.",dismissible:!0},{variant:"warning",icon:"warning",title:"Erro de validação",description:"Revise os campos destacados.",dismissible:!0},{variant:"primary",icon:"info",title:"Atualização disponível",description:"Nova versão pronta para instalar.",dismissible:!0},{variant:"secondary",icon:"campaign",title:"Manutenção hoje",description:"Sistema indisponível 02:00–04:00 UTC.",dismissible:!0},{variant:"success",icon:"cloud_done",title:"Sincronização completa",description:"Todas as alterações foram salvas.",dismissible:!0},{variant:"warning",icon:"schedule",title:"Prazo se aproximando",description:"Tarefa vence em 30 minutos.",dismissible:!0},{variant:"primary",icon:"person_add",title:"Novo membro",description:"Ana entrou no seu workspace.",dismissible:!0},{variant:"success",icon:"payment",title:"Pagamento recebido",description:"Fatura #1042 foi paga.",dismissible:!0}],b={name:"Float — toast único (dismissível)",render:()=>{const[t,o]=m.useState([]),r=n=>o(l=>l.filter(i=>i.id!==n));return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"fit-content"},children:e.jsx(p,{variant:"primary",onClick:()=>o(n=>[...n,{...h[0],id:crypto.randomUUID()}]),children:"Exibir toast"})}),e.jsx(C,{notifications:t.map(n=>({...n,onClose:()=>r(n.id)}))})]})}},g={name:"Float — auto-dismiss (5s)",render:()=>{const[t,o]=m.useState([]),r=n=>o(l=>l.filter(i=>i.id!==n));return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"fit-content"},children:e.jsx(p,{variant:"primary",onClick:()=>o(n=>[...n,{id:crypto.randomUUID(),variant:"primary",icon:"sync",title:"Sincronizando dados",description:"Este toast desaparece automaticamente.",dismissible:!1}]),children:"Disparar auto-dismiss"})}),e.jsx(C,{notifications:t.map(n=>({...n,onClose:()=>r(n.id)}))})]})}},E={name:"Float — stack com reordenação",render:()=>{const[t,o]=m.useState([]),r=i=>o(c=>c.filter(s=>s.id!==i)),n=()=>{const i=h[Math.floor(Math.random()*h.length)];o(c=>[...c,{...i,id:crypto.randomUUID()}])},l=()=>o(h.map(i=>({...i,id:crypto.randomUUID()})));return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-xx-small)",flexWrap:"wrap"},children:[e.jsx("div",{style:{width:"fit-content"},children:e.jsx(p,{variant:"primary",onClick:n,children:"Adicionar aleatório"})}),e.jsx("div",{style:{width:"fit-content"},children:e.jsx(p,{variant:"secondary",onClick:l,children:"Adicionar todos (8)"})}),e.jsx("div",{style:{width:"fit-content"},children:e.jsx(p,{variant:"secondary",onClick:()=>o([]),children:"Limpar todos"})})]}),e.jsx("small",{style:{display:"block",paddingTop:"var(--s-spacing-nano)"},children:"Adicione todos e dispense o 5º — os demais colapsam suavemente."}),e.jsx(C,{notifications:t.map(i=>({...i,onClose:()=>r(i.id)}))})]})}},W=["InlineSuccess","InlineWarning","InlinePrimary","InlineSecondary","AllInlineVariants","FloatSingle","FloatAutoDismiss","FloatStacked"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Inline — success",
  args: {
    isOpen: true,
    type: "inline",
    variant: "success",
    icon: "check_circle",
    title: "Alterações salvas",
    description: "Seu perfil foi atualizado com sucesso.",
    dismissible: true
  }
}`,...u.parameters?.docs?.source},description:{story:"Notificação inline de sucesso — operação concluída com êxito.",...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Inline — warning",
  args: {
    isOpen: true,
    type: "inline",
    variant: "warning",
    icon: "warning",
    title: "Sessão expirando",
    description: "Você será desconectado em 5 minutos.",
    withAction: true,
    buttonLabel: "Manter sessão",
    dismissible: true
  }
}`,...x.parameters?.docs?.source},description:{story:`Notificação inline de atenção — com botão de ação.\r
Use para alertas que requerem resposta do usuário, como sessão expirando.`,...x.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Inline — primary",
  args: {
    isOpen: true,
    type: "inline",
    variant: "primary",
    icon: "info",
    title: "Atualização disponível",
    description: "Uma nova versão está pronta para instalação.",
    dismissible: true
  }
}`,...f.parameters?.docs?.source},description:{story:"Notificação inline primária — informações neutras ou atualizações disponíveis.",...f.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Inline — secondary",
  args: {
    isOpen: true,
    type: "inline",
    variant: "secondary",
    icon: "campaign",
    title: "Manutenção programada",
    description: "Sistema indisponível domingo das 02:00 às 04:00 UTC.",
    dismissible: true
  }
}`,...v.parameters?.docs?.source},description:{story:"Notificação inline secundária — avisos de sistema como manutenção programada.",...v.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Inline — todas as variantes",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-x-small)"
  }}>\r
      {inlineVariants.map(v => <InlineVariantItem key={v.variant} {...v} />)}\r
    </div>
}`,...y.parameters?.docs?.source},description:{story:"Todas as variantes inline empilhadas para validação visual rápida de tokens e tema.",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Float — toast único (dismissível)",
  render: () => {
    const [toasts, setToasts] = useState<NotificationEntry[]>([]);
    const remover = (id: string) => setToasts(p => p.filter(t => t.id !== id));
    return <>\r
        <div style={{
        width: "fit-content"
      }}>\r
          <Button variant="primary" onClick={() => setToasts(p => [...p, {
          ...TEMPLATES[0],
          id: crypto.randomUUID()
        }])}>\r
            Exibir toast\r
          </Button>\r
        </div>\r
        <NotificationContainer notifications={toasts.map(t => ({
        ...t,
        onClose: () => remover(t.id)
      }))} />\r
      </>;
  }
}`,...b.parameters?.docs?.source},description:{story:`Toast único dispensável — entra com animação de mola e permanece até ser fechado.\r
Use o botão para disparar o toast.`,...b.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Float — auto-dismiss (5s)",
  render: () => {
    const [toasts, setToasts] = useState<NotificationEntry[]>([]);
    const remover = (id: string) => setToasts(p => p.filter(t => t.id !== id));
    return <>\r
        <div style={{
        width: "fit-content"
      }}>\r
          <Button variant="primary" onClick={() => setToasts(p => [...p, {
          id: crypto.randomUUID(),
          variant: "primary",
          icon: "sync",
          title: "Sincronizando dados",
          description: "Este toast desaparece automaticamente.",
          dismissible: false
        }])}>\r
            Disparar auto-dismiss\r
          </Button>\r
        </div>\r
        <NotificationContainer notifications={toasts.map(t => ({
        ...t,
        onClose: () => remover(t.id)
      }))} />\r
      </>;
  }
}`,...g.parameters?.docs?.source},description:{story:"Auto-dismiss — `dismissible: false`.\r\nO toast aparece sem botão de fechar e desaparece automaticamente após ~5s.",...g.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Float — stack com reordenação",
  render: () => {
    const [toasts, setToasts] = useState<NotificationEntry[]>([]);
    const remover = (id: string) => setToasts(p => p.filter(t => t.id !== id));
    const adicionarAleatorio = () => {
      const t = TEMPLATES[Math.floor(Math.random() * TEMPLATES.length)];
      setToasts(p => [...p, {
        ...t,
        id: crypto.randomUUID()
      }]);
    };
    const adicionarTodos = () => setToasts(TEMPLATES.map(t => ({
      ...t,
      id: crypto.randomUUID()
    })));
    return <>\r
        <div style={{
        display: "flex",
        gap: "var(--s-spacing-xx-small)",
        flexWrap: "wrap"
      }}>\r
          <div style={{
          width: "fit-content"
        }}>\r
            <Button variant="primary" onClick={adicionarAleatorio}>\r
              Adicionar aleatório\r
            </Button>\r
          </div>\r
          <div style={{
          width: "fit-content"
        }}>\r
            <Button variant="secondary" onClick={adicionarTodos}>\r
              Adicionar todos (8)\r
            </Button>\r
          </div>\r
          <div style={{
          width: "fit-content"
        }}>\r
            <Button variant="secondary" onClick={() => setToasts([])}>\r
              Limpar todos\r
            </Button>\r
          </div>\r
        </div>\r
        <small style={{
        display: "block",
        paddingTop: "var(--s-spacing-nano)"
      }}>\r
          Adicione todos e dispense o 5º — os demais colapsam suavemente.\r
        </small>\r
        <NotificationContainer notifications={toasts.map(t => ({
        ...t,
        onClose: () => remover(t.id)
      }))} />\r
      </>;
  }
}`,...E.parameters?.docs?.source},description:{story:"Stack de toasts com reordenação suave.\r\nAdicione múltiplos toasts e dispense qualquer um — os restantes colapsam\r\nsuavemente para preencher o espaço liberado via animação `max-height` + `transform`.",...E.parameters?.docs?.description}}};export{y as AllInlineVariants,g as FloatAutoDismiss,b as FloatSingle,E as FloatStacked,f as InlinePrimary,v as InlineSecondary,u as InlineSuccess,x as InlineWarning,W as __namedExportsOrder,R as default};
