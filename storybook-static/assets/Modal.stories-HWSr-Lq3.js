import{j as e,r as ne}from"./iframe-C_0AXUlQ.js";/* empty css               */import{M as re,F as n,C as u}from"./ModalSlots-p9eXWIKd.js";import{B as o}from"./Button-QvF2SVTw.js";import{I as ie}from"./Input-jL10LS7k.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonIcon-Cs1zWwvD.js";import"./Icon-C3Uq1gPi.js";import"./Skeleton-DNOAWNPr.js";import"./Loading-CCCSPJuP.js";var x,f,h,b,g,_,y,j,M,D,C,F,E,A,z,N,k,B,O,S,w,q,U,T,H,P,I,L,R,J,K,Q,X,G,V,Z,W,Y,$,ee;const fe={title:"Components/Modal",component:re,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
O **Modal** é um diálogo de overlay com header, corpo e rodapé opcionais.

Use os subcomponentes slot para garantir layout interno consistente:

| Subcomponente   | Descrição                                               |
|-----------------|---------------------------------------------------------|
| \`ContentModal\` | Envolve o conteúdo do corpo com padding padrão          |
| \`FooterModal\`  | Envolve os botões de ação no rodapé                     |

Quando \`dismissible\` é \`true\`, um botão de fechar aparece no header
e clicar no overlay também dispara \`hideModal\`.

> O Modal é **stateless** — o controle de visibilidade é sempre externo
> via \`isOpen\` + \`hideModal\`.

### Quando usar
- Confirmar ações destrutivas (excluir, descartar)
- Coletar input sem sair do contexto atual
- Exibir informações que exigem reconhecimento do usuário

### Quando não usar
- Para ações não destrutivas que podem ser feitas inline — prefira \`Aside\`
- Para notificações passivas — prefira um toast ou alerta inline

### Boas práticas
- Forneça um \`title\` claro e uma \`description\` concisa
- Use \`dismissible\` para modais informativos; omita para confirmações obrigatórias
- Limite o rodapé a 2 ações — ação primária à esquerda, cancelar à direita
- Nunca aninhe modais
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10081"}},argTypes:{title:{control:"text",description:"Título exibido no header do modal.",table:{type:{summary:"string"}}},description:{control:"text",description:"Texto de suporte exibido abaixo do título.",table:{type:{summary:"string"}}},dismissible:{control:"boolean",description:"Exibe o botão de fechar e permite clicar no overlay para fechar o modal.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},isOpen:{control:"boolean",description:"Controla a visibilidade do modal.",table:{type:{summary:"boolean"}}},hideModal:{action:"hideModal",description:"Callback disparado quando o modal deve fechar.",table:{type:{summary:"() => void"}}},content:{control:!1,description:"Corpo do modal — use `<ContentModal>` para padding consistente.",table:{type:{summary:"React.ReactNode"}}},footer:{control:!1,description:"Rodapé do modal — use `<FooterModal>` para layout consistente.",table:{type:{summary:"React.ReactNode"}}}},decorators:[a=>e.jsx("div",{style:{minHeight:"160px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(a,{})})]},r=({label:a="Abrir modal",...v})=>{const[ae,oe]=ne.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",onClick:()=>oe(!0),children:a})}),e.jsx(re,{...v,isOpen:ae,hideModal:()=>oe(!1)})]})},i={name:"Default",render:()=>e.jsx(r,{title:"Confirmar exclusão",description:"Esta ação é permanente e não pode ser desfeita.",dismissible:!0,content:e.jsx(u,{children:e.jsxs("p",{children:["Tem certeza que deseja excluir o ",e.jsx("strong",{children:"Projeto Alpha"}),"?"]})}),footer:e.jsx(n,{children:e.jsxs("div",{style:{display:"flex",width:"fit-content",gap:"var(--s-spacing-xx-small)"},children:[e.jsx(o,{variant:"warning",size:"md",children:"Excluir"}),e.jsx(o,{variant:"secondary",size:"md",children:"Cancelar"})]})})})},s={name:"Dismissible — pode fechar",render:()=>e.jsx(r,{label:"Abrir (dispensável)",title:"Atalhos de teclado",description:"Use estes atalhos para navegar mais rápido.",dismissible:!0,content:e.jsx(u,{children:e.jsxs("ul",{style:{paddingLeft:"var(--s-spacing-medium)",display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx("li",{children:e.jsxs("small",{children:[e.jsx("kbd",{children:"⌘ K"})," — Abrir paleta de comandos"]})}),e.jsx("li",{children:e.jsxs("small",{children:[e.jsx("kbd",{children:"⌘ /"})," — Alternar sidebar"]})}),e.jsx("li",{children:e.jsxs("small",{children:[e.jsx("kbd",{children:"Esc"})," — Fechar modal"]})})]})})})},t={name:"Dismissible — não pode fechar",render:()=>e.jsx(r,{label:"Abrir (não dispensável)",title:"Sessão expirada",description:"Sua sessão expirou. Faça login novamente para continuar.",footer:e.jsx(n,{children:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",children:"Fazer login"})})})})},l={name:"Composição — somente header",render:()=>e.jsx(r,{title:"Manutenção programada",description:"O sistema estará indisponível no domingo das 02:00 às 04:00 UTC.",dismissible:!0,footer:e.jsx(n,{children:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",children:"Entendido"})})})})},d={name:"Composição — sem rodapé",render:()=>e.jsx(r,{title:"Atalhos de teclado",description:"Use estes atalhos para navegar mais rápido.",dismissible:!0,content:e.jsx(u,{children:e.jsxs("ul",{style:{paddingLeft:"var(--s-spacing-medium)",display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx("li",{children:e.jsxs("small",{children:[e.jsx("kbd",{children:"⌘ K"})," — Abrir paleta de comandos"]})}),e.jsx("li",{children:e.jsxs("small",{children:[e.jsx("kbd",{children:"⌘ /"})," — Alternar sidebar"]})}),e.jsx("li",{children:e.jsxs("small",{children:[e.jsx("kbd",{children:"Esc"})," — Fechar modal"]})})]})})})},c={name:"Composição — ação única",render:()=>e.jsx(r,{title:"Importação concluída",description:"428 registros foram importados com sucesso.",dismissible:!0,footer:e.jsx(n,{children:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",children:"Entendido"})})})})},m={name:"Contexto real — confirmação de exclusão",render:()=>e.jsx(r,{label:"Excluir registro",title:"Excluir registro",description:"Esta ação não pode ser desfeita. O registro será removido permanentemente.",content:e.jsx(u,{children:e.jsxs("p",{children:["Tem certeza que deseja excluir ",e.jsx("strong",{children:"Jane Doe"}),"? Todos os dados associados também serão removidos."]})}),footer:e.jsx(n,{children:e.jsxs("div",{style:{display:"flex",width:"fit-content",gap:"var(--s-spacing-xx-small)"},children:[e.jsx(o,{variant:"warning",size:"md",children:"Excluir permanentemente"}),e.jsx(o,{variant:"secondary",size:"md",children:"Cancelar"})]})})})},p={name:"Contexto real — formulário inline",render:()=>e.jsx(r,{label:"Novo usuário",title:"Novo usuário",description:"Preencha as informações para adicionar um novo membro.",dismissible:!0,content:e.jsx(u,{children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[{label:"Nome completo",placeholder:"Ex: Jane Doe"},{label:"E-mail",placeholder:"Ex: jane@exemplo.com"},{label:"Cargo",placeholder:"Ex: Product Designer"}].map(({label:a,placeholder:v})=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:e.jsx(ie,{label:a,placeholder:v})},a))})}),footer:e.jsx(n,{children:e.jsxs("div",{style:{display:"flex",width:"fit-content",gap:"var(--s-spacing-xx-small)"},children:[e.jsx(o,{variant:"primary",size:"md",children:"Criar usuário"}),e.jsx(o,{variant:"secondary",size:"md",children:"Cancelar"})]})})})};i.parameters={...i.parameters,docs:{...(x=i.parameters)===null||x===void 0?void 0:x.docs,source:{originalSource:`{
  name: "Default",
  render: () => <ModalDemo title="Confirmar exclusão" description="Esta ação é permanente e não pode ser desfeita." dismissible content={<ContentModal>\r
          <p>\r
            Tem certeza que deseja excluir o <strong>Projeto Alpha</strong>?\r
          </p>\r
        </ContentModal>} footer={<FooterModal>\r
          <div style={{
      display: "flex",
      width: "fit-content",
      gap: "var(--s-spacing-xx-small)"
    }}>\r
            <Button variant="warning" size="md">\r
              Excluir\r
            </Button>\r
            <Button variant="secondary" size="md">\r
              Cancelar\r
            </Button>\r
          </div>\r
        </FooterModal>} />
}`,...(h=i.parameters)===null||h===void 0||(f=h.docs)===null||f===void 0?void 0:f.source},description:{story:`Modal dispensável com conteúdo e ações no rodapé.\r
Clique no botão para abrir — feche pelo X, pelo overlay ou por "Cancelar".`,...(g=i.parameters)===null||g===void 0||(b=g.docs)===null||b===void 0?void 0:b.description}}};s.parameters={...s.parameters,docs:{...(_=s.parameters)===null||_===void 0?void 0:_.docs,source:{originalSource:`{
  name: "Dismissible — pode fechar",
  render: () => <ModalDemo label="Abrir (dispensável)" title="Atalhos de teclado" description="Use estes atalhos para navegar mais rápido." dismissible content={<ContentModal>\r
          <ul style={{
      paddingLeft: "var(--s-spacing-medium)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-nano)"
    }}>\r
            <li>\r
              <small>\r
                <kbd>⌘ K</kbd> — Abrir paleta de comandos\r
              </small>\r
            </li>\r
            <li>\r
              <small>\r
                <kbd>⌘ /</kbd> — Alternar sidebar\r
              </small>\r
            </li>\r
            <li>\r
              <small>\r
                <kbd>Esc</kbd> — Fechar modal\r
              </small>\r
            </li>\r
          </ul>\r
        </ContentModal>} />
}`,...(j=s.parameters)===null||j===void 0||(y=j.docs)===null||y===void 0?void 0:y.source},description:{story:"Modal dispensável — `dismissible: true`.\r\nO botão X é visível e clicar no overlay fecha o modal.\r\nUse para modais informativos onde fechar é sempre permitido.",...(D=s.parameters)===null||D===void 0||(M=D.docs)===null||M===void 0?void 0:M.description}}};t.parameters={...t.parameters,docs:{...(C=t.parameters)===null||C===void 0?void 0:C.docs,source:{originalSource:`{
  name: "Dismissible — não pode fechar",
  render: () => <ModalDemo label="Abrir (não dispensável)" title="Sessão expirada" description="Sua sessão expirou. Faça login novamente para continuar." footer={<FooterModal>\r
          <div style={{
      width: "fit-content"
    }}>\r
            <Button variant="primary" size="md">\r
              Fazer login\r
            </Button>\r
          </div>\r
        </FooterModal>} />
}`,...(E=t.parameters)===null||E===void 0||(F=E.docs)===null||F===void 0?void 0:F.source},description:{story:"Modal não-dispensável — `dismissible: false` (padrão).\r\nO botão X está oculto e clicar no overlay não fecha o modal.\r\nUse para confirmações obrigatórias que exigem uma ação explícita.",...(z=t.parameters)===null||z===void 0||(A=z.docs)===null||A===void 0?void 0:A.description}}};l.parameters={...l.parameters,docs:{...(N=l.parameters)===null||N===void 0?void 0:N.docs,source:{originalSource:`{
  name: "Composição — somente header",
  render: () => <ModalDemo title="Manutenção programada" description="O sistema estará indisponível no domingo das 02:00 às 04:00 UTC." dismissible footer={<FooterModal>\r
          <div style={{
      width: "fit-content"
    }}>\r
            <Button variant="primary" size="md">\r
              Entendido\r
            </Button>\r
          </div>\r
        </FooterModal>} />
}`,...(B=l.parameters)===null||B===void 0||(k=B.docs)===null||k===void 0?void 0:k.source},description:{story:`Modal somente com header — título e descrição, sem corpo nem rodapé.\r
Adequado para avisos breves que não requerem ação específica.`,...(S=l.parameters)===null||S===void 0||(O=S.docs)===null||O===void 0?void 0:O.description}}};d.parameters={...d.parameters,docs:{...(w=d.parameters)===null||w===void 0?void 0:w.docs,source:{originalSource:`{
  name: "Composição — sem rodapé",
  render: () => <ModalDemo title="Atalhos de teclado" description="Use estes atalhos para navegar mais rápido." dismissible content={<ContentModal>\r
          <ul style={{
      paddingLeft: "var(--s-spacing-medium)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-nano)"
    }}>\r
            <li>\r
              <small>\r
                <kbd>⌘ K</kbd> — Abrir paleta de comandos\r
              </small>\r
            </li>\r
            <li>\r
              <small>\r
                <kbd>⌘ /</kbd> — Alternar sidebar\r
              </small>\r
            </li>\r
            <li>\r
              <small>\r
                <kbd>Esc</kbd> — Fechar modal\r
              </small>\r
            </li>\r
          </ul>\r
        </ContentModal>} />
}`,...(U=d.parameters)===null||U===void 0||(q=U.docs)===null||q===void 0?void 0:q.source},description:{story:`Modal sem rodapé — apenas header e corpo.\r
Use para conteúdo informativo onde nenhuma ação é necessária.`,...(H=d.parameters)===null||H===void 0||(T=H.docs)===null||T===void 0?void 0:T.description}}};c.parameters={...c.parameters,docs:{...(P=c.parameters)===null||P===void 0?void 0:P.docs,source:{originalSource:`{
  name: "Composição — ação única",
  render: () => <ModalDemo title="Importação concluída" description="428 registros foram importados com sucesso." dismissible footer={<FooterModal>\r
          <div style={{
      width: "fit-content"
    }}>\r
            <Button variant="primary" size="md">\r
              Entendido\r
            </Button>\r
          </div>\r
        </FooterModal>} />
}`,...(L=c.parameters)===null||L===void 0||(I=L.docs)===null||I===void 0?void 0:I.source},description:{story:`Modal com ação única no rodapé.\r
Use quando há apenas uma resposta possível (ex: "Entendido", "Ok").`,...(J=c.parameters)===null||J===void 0||(R=J.docs)===null||R===void 0?void 0:R.description}}};m.parameters={...m.parameters,docs:{...(K=m.parameters)===null||K===void 0?void 0:K.docs,source:{originalSource:`{
  name: "Contexto real — confirmação de exclusão",
  render: () => <ModalDemo label="Excluir registro" title="Excluir registro" description="Esta ação não pode ser desfeita. O registro será removido permanentemente." content={<ContentModal>\r
          <p>\r
            Tem certeza que deseja excluir <strong>Jane Doe</strong>? Todos os\r
            dados associados também serão removidos.\r
          </p>\r
        </ContentModal>} footer={<FooterModal>\r
          <div style={{
      display: "flex",
      width: "fit-content",
      gap: "var(--s-spacing-xx-small)"
    }}>\r
            <Button variant="warning" size="md">\r
              Excluir permanentemente\r
            </Button>\r
            <Button variant="secondary" size="md">\r
              Cancelar\r
            </Button>\r
          </div>\r
        </FooterModal>} />
}`,...(X=m.parameters)===null||X===void 0||(Q=X.docs)===null||Q===void 0?void 0:Q.source},description:{story:"Modal de confirmação de exclusão — padrão mais comum para ações destrutivas.\r\n`dismissible: false` força uma escolha explícita: cancelar ou confirmar.",...(V=m.parameters)===null||V===void 0||(G=V.docs)===null||G===void 0?void 0:G.description}}};p.parameters={...p.parameters,docs:{...(Z=p.parameters)===null||Z===void 0?void 0:Z.docs,source:{originalSource:`{
  name: "Contexto real — formulário inline",
  render: () => <ModalDemo label="Novo usuário" title="Novo usuário" description="Preencha as informações para adicionar um novo membro." dismissible content={<ContentModal>\r
          <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-x-small)"
    }}>\r
            {[{
        label: "Nome completo",
        placeholder: "Ex: Jane Doe"
      }, {
        label: "E-mail",
        placeholder: "Ex: jane@exemplo.com"
      }, {
        label: "Cargo",
        placeholder: "Ex: Product Designer"
      }].map(({
        label,
        placeholder
      }) => <div key={label} style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--s-spacing-nano)"
      }}>\r
                <Input label={label} placeholder={placeholder} />\r
              </div>)}\r
          </div>\r
        </ContentModal>} footer={<FooterModal>\r
          <div style={{
      display: "flex",
      width: "fit-content",
      gap: "var(--s-spacing-xx-small)"
    }}>\r
            <Button variant="primary" size="md">\r
              Criar usuário\r
            </Button>\r
            <Button variant="secondary" size="md">\r
              Cancelar\r
            </Button>\r
          </div>\r
        </FooterModal>} />
}`,...(Y=p.parameters)===null||Y===void 0||(W=Y.docs)===null||W===void 0?void 0:W.source},description:{story:"Modal de formulário inline — coleta dados sem sair do contexto atual.\r\n`dismissible: true` permite fechar sem salvar.",...(ee=p.parameters)===null||ee===void 0||($=ee.docs)===null||$===void 0?void 0:$.description}}};const he=["Default","Dismissible","NonDismissible","HeaderOnly","NoFooter","SingleAction","DeleteConfirmation","FormModal"];export{i as Default,m as DeleteConfirmation,s as Dismissible,p as FormModal,l as HeaderOnly,d as NoFooter,t as NonDismissible,c as SingleAction,he as __namedExportsOrder,fe as default};
