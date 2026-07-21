import{j as e,r as m,i as ve}from"./iframe-C_0AXUlQ.js";import{B as fe}from"./ButtonIcon-Cs1zWwvD.js";import{I as ye}from"./Icon-C3Uq1gPi.js";import{B as p}from"./Button-QvF2SVTw.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./Skeleton-DNOAWNPr.js";import"./Loading-CCCSPJuP.js";function _e(a,s,r,n){return["notification",a,s,"open",r&&"dismissible",n&&"exiting"].filter(Boolean).join(" ")}const de=({icon:a,title:s,description:r,variant:n,type:c,isOpen:i=!1,isExiting:d=!1,dismissible:t=!1,withAction:o=!1,disableButton:l=!1,buttonLabel:ce,onClickButton:me,onClose:pe})=>{if(c==="inline"&&!i)return null;if(c==="float"&&!i&&!d)return e.jsx("div",{"aria-hidden":!0,className:"notification float notification-hidden"});const ue=o||!!r;return e.jsxs("div",{className:_e(n,c,t,d),children:[e.jsxs("div",{className:`notification-title ${n}`,children:[e.jsx(ye,{icon:a,size:"md"}),e.jsx("div",{className:"title",children:s}),t&&e.jsx(fe,{variant:"on-color",size:"sm",icon:"close",appearance:"plain",onClick:pe})]}),ue&&e.jsxs("div",{className:"notification-content",children:[r&&e.jsx("div",{className:"description",children:r}),o&&e.jsx("div",{className:"notification-with-action",children:e.jsx(p,{size:"md",variant:n,disabled:l,onClick:me,children:ce})})]})]})},be=400;function le({notifications:a}){const[s,r]=m.useState([]),n=m.useRef(a);n.current=a,m.useEffect(()=>{r(i=>{const d=new Set(i.map(l=>l.id)),t=new Set(a.map(l=>l.id)),o=i.filter(l=>t.has(l.id)||l.isExiting);for(const l of a)d.has(l.id)||o.push({id:l.id,isVisible:!1,isExiting:!1});return o})},[a]),m.useEffect(()=>{const i=s.filter(t=>!t.isVisible&&!t.isExiting);if(i.length===0)return;const d=setTimeout(()=>{r(t=>t.map(o=>i.some(l=>l.id===o.id)?{...o,isVisible:!0}:o))},16);return()=>clearTimeout(d)},[s]);const c=m.useCallback(i=>{r(d=>d.map(t=>t.id===i?{...t,isExiting:!0,isVisible:!1}:t)),setTimeout(()=>{var d,t;r(o=>o.filter(l=>l.id!==i)),(t=n.current.find(o=>o.id===i))===null||t===void 0||(d=t.onClose)===null||d===void 0||d.call(t)},be)},[]);return ve.createPortal(e.jsx("div",{className:"notification-container",children:s.map(({id:i,isVisible:d,isExiting:t})=>{const o=n.current.find(l=>l.id===i);return o?e.jsx(de,{type:"float",isOpen:d,isExiting:t,variant:o.variant,title:o.title,description:o.description,icon:o.icon,dismissible:o.dismissible,withAction:o.withAction,buttonLabel:o.buttonLabel,disableButton:o.disableButton,onClickButton:o.onClickButton,onClose:()=>c(i)},i):null})}),document.body)}var I,S,T,C,A,k,j,w,N,E,F,B,D,U,V,O,z,M,P,L,q,W,R,X,G,Z,H,Q,$,J,K,Y,ee,ie,ne,oe,ae,te,se,re;const we={title:"Components/Notification",component:de,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
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
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=942-8970"}},argTypes:{title:{control:"text",description:"Texto do título exibido no cabeçalho colorido.",table:{type:{summary:"string"}}},description:{control:"text",description:"Texto descritivo exibido abaixo do cabeçalho. Opcional.",table:{type:{summary:"string"}}},icon:{control:"text",description:"Nome do ícone Material Symbol exibido no cabeçalho.",table:{type:{summary:"string"}}},variant:{control:"select",options:["primary","secondary","warning","success"],description:"Intenção semântica de cor do cabeçalho.",table:{type:{summary:'"primary" | "secondary" | "warning" | "success"'}}},type:{control:"radio",options:["float","inline"],description:"`inline` = fluxo do documento. `float` = toast sobreposto (requer `NotificationContainer`).",table:{type:{summary:'"float" | "inline"'}}},isOpen:{control:"boolean",description:"Controla a visibilidade da notificação.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},dismissible:{control:"boolean",description:"Exibe o botão de fechar. Quando `false`, o float desaparece automaticamente após ~5s.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},withAction:{control:"boolean",description:"Exibe um botão de ação dentro do corpo da notificação.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},buttonLabel:{control:"text",description:"Label do botão de ação. Requer `withAction: true`.",table:{type:{summary:"string"}}},disableButton:{control:"boolean",description:"Desativa o botão de ação.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},onClose:{action:"onClose",description:"Callback disparado ao clicar no botão de fechar.",table:{type:{summary:"() => void"}}},onClickButton:{action:"onClickButton",description:"Callback disparado ao clicar no botão de ação.",table:{type:{summary:"() => void"}}}},decorators:[a=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(a,{})})]},u={name:"Inline — success",args:{isOpen:!0,type:"inline",variant:"success",icon:"check_circle",title:"Alterações salvas",description:"Seu perfil foi atualizado com sucesso.",dismissible:!0}},v={name:"Inline — warning",args:{isOpen:!0,type:"inline",variant:"warning",icon:"warning",title:"Sessão expirando",description:"Você será desconectado em 5 minutos.",withAction:!0,buttonLabel:"Manter sessão",dismissible:!0}},f={name:"Inline — primary",args:{isOpen:!0,type:"inline",variant:"primary",icon:"info",title:"Atualização disponível",description:"Uma nova versão está pronta para instalação.",dismissible:!0}},y={name:"Inline — secondary",args:{isOpen:!0,type:"inline",variant:"secondary",icon:"campaign",title:"Manutenção programada",description:"Sistema indisponível domingo das 02:00 às 04:00 UTC.",dismissible:!0}},ge=[{variant:"primary",icon:"info",title:"Informação",description:"Texto de suporte informativo."},{variant:"secondary",icon:"campaign",title:"Aviso de sistema",description:"Texto de suporte secundário."},{variant:"warning",icon:"warning",title:"Atenção necessária",description:"Texto de suporte de alerta."},{variant:"success",icon:"check_circle",title:"Operação concluída",description:"Texto de suporte de sucesso."}],xe=({variant:a,icon:s,title:r,description:n})=>e.jsx(de,{isOpen:!0,type:"inline",variant:a,icon:s,title:r,description:n,dismissible:!0}),_={name:"Inline — todas as variantes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:ge.map(a=>e.jsx(xe,{...a},a.variant))})},h=[{variant:"success",icon:"check_circle",title:"Arquivo enviado",description:"relatorio_q3.pdf foi salvo.",dismissible:!0},{variant:"warning",icon:"warning",title:"Erro de validação",description:"Revise os campos destacados.",dismissible:!0},{variant:"primary",icon:"info",title:"Atualização disponível",description:"Nova versão pronta para instalar.",dismissible:!0},{variant:"secondary",icon:"campaign",title:"Manutenção hoje",description:"Sistema indisponível 02:00–04:00 UTC.",dismissible:!0},{variant:"success",icon:"cloud_done",title:"Sincronização completa",description:"Todas as alterações foram salvas.",dismissible:!0},{variant:"warning",icon:"schedule",title:"Prazo se aproximando",description:"Tarefa vence em 30 minutos.",dismissible:!0},{variant:"primary",icon:"person_add",title:"Novo membro",description:"Ana entrou no seu workspace.",dismissible:!0},{variant:"success",icon:"payment",title:"Pagamento recebido",description:"Fatura #1042 foi paga.",dismissible:!0}],b={name:"Float — toast único (dismissível)",render:()=>{const[a,s]=m.useState([]),r=n=>s(c=>c.filter(i=>i.id!==n));return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"fit-content"},children:e.jsx(p,{variant:"primary",onClick:()=>s(n=>[...n,{...h[0],id:crypto.randomUUID()}]),children:"Exibir toast"})}),e.jsx(le,{notifications:a.map(n=>({...n,onClose:()=>r(n.id)}))})]})}},g={name:"Float — auto-dismiss (5s)",render:()=>{const[a,s]=m.useState([]),r=n=>s(c=>c.filter(i=>i.id!==n));return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"fit-content"},children:e.jsx(p,{variant:"primary",onClick:()=>s(n=>[...n,{id:crypto.randomUUID(),variant:"primary",icon:"sync",title:"Sincronizando dados",description:"Este toast desaparece automaticamente.",dismissible:!1}]),children:"Disparar auto-dismiss"})}),e.jsx(le,{notifications:a.map(n=>({...n,onClose:()=>r(n.id)}))})]})}},x={name:"Float — stack com reordenação",render:()=>{const[a,s]=m.useState([]),r=i=>s(d=>d.filter(t=>t.id!==i)),n=()=>{const i=h[Math.floor(Math.random()*h.length)];s(d=>[...d,{...i,id:crypto.randomUUID()}])},c=()=>s(h.map(i=>({...i,id:crypto.randomUUID()})));return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-xx-small)",flexWrap:"wrap"},children:[e.jsx("div",{style:{width:"fit-content"},children:e.jsx(p,{variant:"primary",onClick:n,children:"Adicionar aleatório"})}),e.jsx("div",{style:{width:"fit-content"},children:e.jsx(p,{variant:"secondary",onClick:c,children:"Adicionar todos (8)"})}),e.jsx("div",{style:{width:"fit-content"},children:e.jsx(p,{variant:"secondary",onClick:()=>s([]),children:"Limpar todos"})})]}),e.jsx("small",{style:{display:"block",paddingTop:"var(--s-spacing-nano)"},children:"Adicione todos e dispense o 5º — os demais colapsam suavemente."}),e.jsx(le,{notifications:a.map(i=>({...i,onClose:()=>r(i.id)}))})]})}};u.parameters={...u.parameters,docs:{...(I=u.parameters)===null||I===void 0?void 0:I.docs,source:{originalSource:`{
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
}`,...(T=u.parameters)===null||T===void 0||(S=T.docs)===null||S===void 0?void 0:S.source},description:{story:"Notificação inline de sucesso — operação concluída com êxito.",...(A=u.parameters)===null||A===void 0||(C=A.docs)===null||C===void 0?void 0:C.description}}};v.parameters={...v.parameters,docs:{...(k=v.parameters)===null||k===void 0?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=v.parameters)===null||w===void 0||(j=w.docs)===null||j===void 0?void 0:j.source},description:{story:`Notificação inline de atenção — com botão de ação.\r
Use para alertas que requerem resposta do usuário, como sessão expirando.`,...(E=v.parameters)===null||E===void 0||(N=E.docs)===null||N===void 0?void 0:N.description}}};f.parameters={...f.parameters,docs:{...(F=f.parameters)===null||F===void 0?void 0:F.docs,source:{originalSource:`{
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
}`,...(D=f.parameters)===null||D===void 0||(B=D.docs)===null||B===void 0?void 0:B.source},description:{story:"Notificação inline primária — informações neutras ou atualizações disponíveis.",...(V=f.parameters)===null||V===void 0||(U=V.docs)===null||U===void 0?void 0:U.description}}};y.parameters={...y.parameters,docs:{...(O=y.parameters)===null||O===void 0?void 0:O.docs,source:{originalSource:`{
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
}`,...(M=y.parameters)===null||M===void 0||(z=M.docs)===null||z===void 0?void 0:z.source},description:{story:"Notificação inline secundária — avisos de sistema como manutenção programada.",...(L=y.parameters)===null||L===void 0||(P=L.docs)===null||P===void 0?void 0:P.description}}};_.parameters={..._.parameters,docs:{...(q=_.parameters)===null||q===void 0?void 0:q.docs,source:{originalSource:`{
  name: "Inline — todas as variantes",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-spacing-x-small)"
  }}>\r
      {inlineVariants.map(v => <InlineVariantItem key={v.variant} {...v} />)}\r
    </div>
}`,...(R=_.parameters)===null||R===void 0||(W=R.docs)===null||W===void 0?void 0:W.source},description:{story:"Todas as variantes inline empilhadas para validação visual rápida de tokens e tema.",...(G=_.parameters)===null||G===void 0||(X=G.docs)===null||X===void 0?void 0:X.description}}};b.parameters={...b.parameters,docs:{...(Z=b.parameters)===null||Z===void 0?void 0:Z.docs,source:{originalSource:`{
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
}`,...(Q=b.parameters)===null||Q===void 0||(H=Q.docs)===null||H===void 0?void 0:H.source},description:{story:`Toast único dispensável — entra com animação de mola e permanece até ser fechado.\r
Use o botão para disparar o toast.`,...(J=b.parameters)===null||J===void 0||($=J.docs)===null||$===void 0?void 0:$.description}}};g.parameters={...g.parameters,docs:{...(K=g.parameters)===null||K===void 0?void 0:K.docs,source:{originalSource:`{
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
}`,...(ee=g.parameters)===null||ee===void 0||(Y=ee.docs)===null||Y===void 0?void 0:Y.source},description:{story:"Auto-dismiss — `dismissible: false`.\r\nO toast aparece sem botão de fechar e desaparece automaticamente após ~5s.",...(ne=g.parameters)===null||ne===void 0||(ie=ne.docs)===null||ie===void 0?void 0:ie.description}}};x.parameters={...x.parameters,docs:{...(oe=x.parameters)===null||oe===void 0?void 0:oe.docs,source:{originalSource:`{
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
}`,...(te=x.parameters)===null||te===void 0||(ae=te.docs)===null||ae===void 0?void 0:ae.source},description:{story:"Stack de toasts com reordenação suave.\r\nAdicione múltiplos toasts e dispense qualquer um — os restantes colapsam\r\nsuavemente para preencher o espaço liberado via animação `max-height` + `transform`.",...(re=x.parameters)===null||re===void 0||(se=re.docs)===null||se===void 0?void 0:se.description}}};const Ne=["InlineSuccess","InlineWarning","InlinePrimary","InlineSecondary","AllInlineVariants","FloatSingle","FloatAutoDismiss","FloatStacked"];export{_ as AllInlineVariants,g as FloatAutoDismiss,b as FloatSingle,x as FloatStacked,f as InlinePrimary,y as InlineSecondary,u as InlineSuccess,v as InlineWarning,Ne as __namedExportsOrder,we as default};
