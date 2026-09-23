import{j as e,r as v}from"./iframe-CxNvl9BI.js";/* empty css               */import{M as E,F as n,C as x}from"./ModalSlots-z_Gx3EzK.js";import{B as r}from"./Button-CH6qqEEx.js";import{I as b}from"./Input-BjLLbLDi.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonIcon-BvrW2_xY.js";import"./Icon-Bqm0CoJD.js";import"./Skeleton-C80QNm7w.js";import"./Loading-DhvOqAup.js";const B={title:"Components/Modal",component:E,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10081"}},argTypes:{title:{control:"text",description:"Título exibido no header do modal.",table:{type:{summary:"string"}}},description:{control:"text",description:"Texto de suporte exibido abaixo do título.",table:{type:{summary:"string"}}},dismissible:{control:"boolean",description:"Exibe o botão de fechar e permite clicar no overlay para fechar o modal.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},isOpen:{control:"boolean",description:"Controla a visibilidade do modal.",table:{type:{summary:"boolean"}}},hideModal:{action:"hideModal",description:"Callback disparado quando o modal deve fechar.",table:{type:{summary:"() => void"}}},content:{control:!1,description:"Corpo do modal — use `<ContentModal>` para padding consistente.",table:{type:{summary:"React.ReactNode"}}},footer:{control:!1,description:"Rodapé do modal — use `<FooterModal>` para layout consistente.",table:{type:{summary:"React.ReactNode"}}}},decorators:[a=>e.jsx("div",{style:{minHeight:"160px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(a,{})})]},o=({label:a="Abrir modal",...u})=>{const[f,h]=v.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"fit-content"},children:e.jsx(r,{variant:"primary",size:"md",onClick:()=>h(!0),children:a})}),e.jsx(E,{...u,isOpen:f,hideModal:()=>h(!1)})]})},s={name:"Default",render:()=>e.jsx(o,{title:"Confirmar exclusão",description:"Esta ação é permanente e não pode ser desfeita.",dismissible:!0,content:e.jsx(x,{children:e.jsxs("p",{children:["Tem certeza que deseja excluir o ",e.jsx("strong",{children:"Projeto Alpha"}),"?"]})}),footer:e.jsx(n,{children:e.jsxs("div",{style:{display:"flex",width:"fit-content",gap:"var(--s-spacing-xx-small)"},children:[e.jsx(r,{variant:"warning",size:"md",children:"Excluir"}),e.jsx(r,{variant:"secondary",size:"md",children:"Cancelar"})]})})})},i={name:"Dismissible — pode fechar",render:()=>e.jsx(o,{label:"Abrir (dispensável)",title:"Atalhos de teclado",description:"Use estes atalhos para navegar mais rápido.",dismissible:!0,content:e.jsx(x,{children:e.jsxs("ul",{style:{paddingLeft:"var(--s-spacing-medium)",display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx("li",{children:e.jsxs("small",{children:[e.jsx("kbd",{children:"⌘ K"})," — Abrir paleta de comandos"]})}),e.jsx("li",{children:e.jsxs("small",{children:[e.jsx("kbd",{children:"⌘ /"})," — Alternar sidebar"]})}),e.jsx("li",{children:e.jsxs("small",{children:[e.jsx("kbd",{children:"Esc"})," — Fechar modal"]})})]})})})},t={name:"Dismissible — não pode fechar",render:()=>e.jsx(o,{label:"Abrir (não dispensável)",title:"Sessão expirada",description:"Sua sessão expirou. Faça login novamente para continuar.",footer:e.jsx(n,{children:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(r,{variant:"primary",size:"md",children:"Fazer login"})})})})},d={name:"Composição — somente header",render:()=>e.jsx(o,{title:"Manutenção programada",description:"O sistema estará indisponível no domingo das 02:00 às 04:00 UTC.",dismissible:!0,footer:e.jsx(n,{children:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(r,{variant:"primary",size:"md",children:"Entendido"})})})})},l={name:"Composição — sem rodapé",render:()=>e.jsx(o,{title:"Atalhos de teclado",description:"Use estes atalhos para navegar mais rápido.",dismissible:!0,content:e.jsx(x,{children:e.jsxs("ul",{style:{paddingLeft:"var(--s-spacing-medium)",display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:[e.jsx("li",{children:e.jsxs("small",{children:[e.jsx("kbd",{children:"⌘ K"})," — Abrir paleta de comandos"]})}),e.jsx("li",{children:e.jsxs("small",{children:[e.jsx("kbd",{children:"⌘ /"})," — Alternar sidebar"]})}),e.jsx("li",{children:e.jsxs("small",{children:[e.jsx("kbd",{children:"Esc"})," — Fechar modal"]})})]})})})},c={name:"Composição — ação única",render:()=>e.jsx(o,{title:"Importação concluída",description:"428 registros foram importados com sucesso.",dismissible:!0,footer:e.jsx(n,{children:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(r,{variant:"primary",size:"md",children:"Entendido"})})})})},m={name:"Contexto real — confirmação de exclusão",render:()=>e.jsx(o,{label:"Excluir registro",title:"Excluir registro",description:"Esta ação não pode ser desfeita. O registro será removido permanentemente.",content:e.jsx(x,{children:e.jsxs("p",{children:["Tem certeza que deseja excluir ",e.jsx("strong",{children:"Jane Doe"}),"? Todos os dados associados também serão removidos."]})}),footer:e.jsx(n,{children:e.jsxs("div",{style:{display:"flex",width:"fit-content",gap:"var(--s-spacing-xx-small)"},children:[e.jsx(r,{variant:"warning",size:"md",children:"Excluir permanentemente"}),e.jsx(r,{variant:"secondary",size:"md",children:"Cancelar"})]})})})},p={name:"Contexto real — formulário inline",render:()=>e.jsx(o,{label:"Novo usuário",title:"Novo usuário",description:"Preencha as informações para adicionar um novo membro.",dismissible:!0,content:e.jsx(x,{children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-x-small)"},children:[{label:"Nome completo",placeholder:"Ex: Jane Doe"},{label:"E-mail",placeholder:"Ex: jane@exemplo.com"},{label:"Cargo",placeholder:"Ex: Product Designer"}].map(({label:a,placeholder:u})=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)"},children:e.jsx(b,{label:a,placeholder:u})},a))})}),footer:e.jsx(n,{children:e.jsxs("div",{style:{display:"flex",width:"fit-content",gap:"var(--s-spacing-xx-small)"},children:[e.jsx(r,{variant:"primary",size:"md",children:"Criar usuário"}),e.jsx(r,{variant:"secondary",size:"md",children:"Cancelar"})]})})})},w=["Default","Dismissible","NonDismissible","HeaderOnly","NoFooter","SingleAction","DeleteConfirmation","FormModal"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:`Modal dispensável com conteúdo e ações no rodapé.\r
Clique no botão para abrir — feche pelo X, pelo overlay ou por "Cancelar".`,...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Modal dispensável — `dismissible: true`.\r\nO botão X é visível e clicar no overlay fecha o modal.\r\nUse para modais informativos onde fechar é sempre permitido.",...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"Modal não-dispensável — `dismissible: false` (padrão).\r\nO botão X está oculto e clicar no overlay não fecha o modal.\r\nUse para confirmações obrigatórias que exigem uma ação explícita.",...t.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:`Modal somente com header — título e descrição, sem corpo nem rodapé.\r
Adequado para avisos breves que não requerem ação específica.`,...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:`Modal sem rodapé — apenas header e corpo.\r
Use para conteúdo informativo onde nenhuma ação é necessária.`,...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:`Modal com ação única no rodapé.\r
Use quando há apenas uma resposta possível (ex: "Entendido", "Ok").`,...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"Modal de confirmação de exclusão — padrão mais comum para ações destrutivas.\r\n`dismissible: false` força uma escolha explícita: cancelar ou confirmar.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:"Modal de formulário inline — coleta dados sem sair do contexto atual.\r\n`dismissible: true` permite fechar sem salvar.",...p.parameters?.docs?.description}}};export{s as Default,m as DeleteConfirmation,i as Dismissible,p as FormModal,d as HeaderOnly,l as NoFooter,t as NonDismissible,c as SingleAction,w as __namedExportsOrder,B as default};
