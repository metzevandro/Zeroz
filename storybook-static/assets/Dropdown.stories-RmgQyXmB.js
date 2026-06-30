import{j as e,r as x}from"./iframe-Cuzq1CpA.js";import{A as Ce}from"./Avatar-BPBlO0_q.js";/* empty css               */import{D as t,a as o}from"./Dropdown-BMWmr4YQ.js";import{D as i}from"./DropdownTitle-c5wPvAbX.js";import{B as ye}from"./Button-BQCy7vfT.js";import"./preload-helper-PPVm8Dsz.js";import"./Skeleton-BVkqHP_m.js";import"./Icon-C2kFcyns.js";import"./Loading-CnlAraZ4.js";var _,y,w,C,D,j,I,S,k,O,M,E,H,A,q,P,T,N,L,B,F,R,W,z,G,J,U,Q,V,X,Z,$,K,Y,ee,ne,oe,re,ie,ae,te,se,le,de,ce,pe,me,ue,ve,ge,be,he,fe,xe,_e;const qe={title:"Components/Dropdown",component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
O **Dropdown** é um container de menu com animação de entrada e saída baseada em CSS.

Diferente de implementações que removem o DOM ao fechar, este componente
**sempre renderiza os filhos** e alterna a visibilidade via classes CSS —
garantindo transições suaves de \`opacity\` e \`transform\` em ambas as direções.

Componha com os subcomponentes para construir menus estruturados:

| Subcomponente    | Descrição                                                    |
|------------------|--------------------------------------------------------------|
| \`DropdownTitle\` | Cabeçalho de seção não-interativo para agrupar itens         |
| \`DropdownItem\`  | Item de menu interativo, com ícone opcional à esquerda       |

### Alinhamento
A prop \`align\` controla a qual borda do gatilho o painel é ancorado:

| align      | comportamento                                                              |
|------------|----------------------------------------------------------------------------|
| \`"left"\`  | Padrão — ancora na borda esquerda do gatilho e expande para a direita      |
| \`"right"\` | Ancora na borda direita do gatilho e expande para a esquerda               |

> Use \`align="right"\` quando o gatilho está próximo à borda direita da tela
> para evitar que o menu extravase a viewport.

### Quando usar
- Menus de ação contextual (overflow, opções de linha em tabela)
- Dropdowns de navegação acionados por botão ou avatar
- Menus com seções agrupadas por \`DropdownTitle\`

### Quando não usar
- Para seleção de valor em formulários — use um \`Select\`
- Para navegação principal — use um componente de menu de navegação dedicado

### Boas práticas
- Controle \`visible\` externamente — o componente não gerencia seu próprio estado
- Mantenha os labels curtos e orientados a ação: "Editar", "Excluir", "Sair"
- Use \`DropdownTitle\` para separar grupos logicamente distintos
- Combine com um handler de clique fora para fechar o menu ao clicar fora dele
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10084"}},argTypes:{visible:{control:"boolean",description:"Controla a visibilidade do menu via CSS. Quando `false`, o menu permanece no DOM mas fica oculto com `opacity: 0` e `visibility: hidden` — permitindo a animação de saída.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},align:{control:"radio",options:["left","right"],description:'Define a borda do gatilho à qual o painel é ancorado. `"left"` (padrão) expande para a direita; `"right"` expande para a esquerda — use quando o gatilho estiver próximo à borda direita da tela.',table:{defaultValue:{summary:'"left"'},type:{summary:'"left" | "right"'}}},children:{control:!1,description:"Conteúdo do menu — componha com `<DropdownTitle>` e `<DropdownItem>`.",table:{type:{summary:"React.ReactNode"}}}}},l={name:"Default",parameters:{layout:"centered"},decorators:[n=>e.jsx("div",{style:{minHeight:"220px",width:"fit-content"},children:e.jsx(n,{})})],args:{visible:!0,align:"left",children:e.jsxs(e.Fragment,{children:[e.jsx(i,{label:"Conta"}),e.jsx(o,{icon:"person",label:"Perfil",onClick:()=>{}}),e.jsx(o,{icon:"settings",label:"Configurações",onClick:()=>{}}),e.jsx(i,{label:"Sessão"}),e.jsx(o,{icon:"logout",label:"Sair",onClick:()=>{}})]})}},d={name:"Composição — sem ícones",decorators:[n=>e.jsx("div",{style:{minHeight:"150px",width:"fit-content"},children:e.jsx(n,{})})],args:{visible:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Copiar",onClick:()=>{}}),e.jsx(o,{label:"Colar",onClick:()=>{}}),e.jsx(o,{label:"Excluir",onClick:()=>{}})]})}},c={name:"Composição — item único",decorators:[n=>e.jsx("div",{style:{minHeight:"70px",width:"fit-content"},children:e.jsx(n,{})})],args:{visible:!0,children:e.jsx(o,{icon:"logout",label:"Sair",onClick:()=>{}})}},p={name:"Composição — com seções",parameters:{docs:{story:{inline:!1,iframeHeight:400}}},decorators:[n=>e.jsx("div",{style:{minHeight:"320px",width:"fit-content"},children:e.jsx(n,{})})],args:{visible:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(i,{label:"Arquivo"}),e.jsx(o,{icon:"add",label:"Novo",onClick:()=>{}}),e.jsx(o,{icon:"upload",label:"Importar",onClick:()=>{}}),e.jsx(i,{label:"Edição"}),e.jsx(o,{icon:"edit",label:"Renomear",onClick:()=>{}}),e.jsx(o,{icon:"content_copy",label:"Duplicar",onClick:()=>{}}),e.jsx(i,{label:"Perigo"}),e.jsx(o,{icon:"delete",label:"Excluir",onClick:()=>{}})]})}},m={name:"Alinhamento — comparação",parameters:{docs:{story:{inline:!1,iframeHeight:280}}},render:()=>{const[n,r]=x.useState(null),a=s=>e.jsxs(e.Fragment,{children:[e.jsx(o,{icon:"edit",label:"Editar",onClick:()=>r(null)}),e.jsx(o,{icon:"delete",label:"Excluir",onClick:()=>r(null)})]});return e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx("div",{style:{width:"fit-content"},children:e.jsx(ye,{onClick:()=>r(n==="left"?null:"left"),children:'"left"'})}),e.jsx(t,{visible:n==="left",align:"left",children:a()})]}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("div",{style:{width:"fit-content"},children:e.jsx(ye,{onClick:()=>r(n==="right"?null:"right"),children:'"right"'})}),e.jsx(t,{visible:n==="right",align:"right",children:a()})]})]})}},u={name:"Controlado — toggle por botão",decorators:[n=>e.jsx("div",{style:{minHeight:"220px",width:"fit-content"},children:e.jsx(n,{})})],render:()=>{const[n,r]=x.useState(!1);return e.jsxs("div",{style:{position:"relative",width:"fit-content"},children:[e.jsx("div",{style:{width:"fit-content"},children:e.jsx(ye,{onClick:()=>r(a=>!a),children:"Clique aqui!"})}),e.jsxs(t,{visible:n,children:[e.jsx(i,{label:"Ações"}),e.jsx(o,{icon:"edit",label:"Editar",onClick:()=>r(!1)}),e.jsx(o,{icon:"content_copy",label:"Duplicar",onClick:()=>r(!1)}),e.jsx(o,{icon:"delete",label:"Excluir",onClick:()=>r(!1)})]})]})}},v={name:"Contexto real — menu de perfil",decorators:[n=>e.jsx("div",{style:{minHeight:"220px",display:"flex",justifyContent:"flex-end"},children:e.jsx(n,{})})],render:()=>{const[n,r]=x.useState(!1);return e.jsxs("div",{style:{position:"relative"},children:[e.jsx("div",{style:{cursor:"pointer"},onClick:()=>r(a=>!a),children:e.jsx(Ce,{size:"md",letter:"Jane Doe"})}),e.jsxs(t,{visible:n,align:"right",children:[e.jsx(i,{label:"Jane Doe"}),e.jsx(o,{icon:"person",label:"Meu perfil",onClick:()=>r(!1)}),e.jsx(o,{icon:"settings",label:"Configurações",onClick:()=>r(!1)}),e.jsx(o,{icon:"logout",label:"Sair",onClick:()=>r(!1)})]})]})}},g={name:"Contexto real — menu de overflow (⋮)",parameters:{docs:{story:{inline:!1,iframeHeight:380}}},render:()=>{const[n,r]=x.useState(null),a=[{id:"1",name:"Notebook Pro X"},{id:"2",name:"Mouse Ergonômico"},{id:"3",name:"Teclado Mecânico"}];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-nano)",width:"320px"},children:a.map(({id:s,name:we})=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"var(--s-spacing-x-small) var(--s-spacing-small)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",borderRadius:"var(--s-border-radius-medium)",background:"var(--s-color-fill-default)",position:"relative"},children:[e.jsx("small",{children:we}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",padding:"4px"},onClick:()=>r(n===s?null:s),children:e.jsx("small",{children:"⋮"})}),e.jsxs(t,{visible:n===s,align:"right",children:[e.jsx(o,{icon:"edit",label:"Editar",onClick:()=>r(null)}),e.jsx(o,{icon:"content_copy",label:"Duplicar",onClick:()=>r(null)}),e.jsx(o,{icon:"delete",label:"Excluir",onClick:()=>r(null)})]})]})]},s))})}},b={name:"Edge case — pai estreito",decorators:[n=>e.jsx("div",{style:{minHeight:"160px",position:"relative"},children:e.jsx("div",{style:{width:"40px",border:"1px dashed var(--s-color-border-default)",position:"relative"},children:e.jsx(n,{})})})],args:{visible:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(i,{label:"Ações"}),e.jsx(o,{icon:"edit",label:"Editar",onClick:()=>{}}),e.jsx(o,{icon:"delete",label:"Excluir",onClick:()=>{}})]})}},h={name:"Edge case — label longo",decorators:[n=>e.jsx("div",{style:{minHeight:"160px",width:"fit-content"},children:e.jsx(n,{})})],args:{visible:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(i,{label:"Configurações avançadas"}),e.jsx(o,{icon:"settings",label:"Gerenciar preferências de notificação",onClick:()=>{}}),e.jsx(o,{icon:"security",label:"Autenticação em dois fatores",onClick:()=>{}}),e.jsx(o,{icon:"logout",label:"Sair da conta",onClick:()=>{}})]})}},f={name:"Edge case — muitos itens (máx. delay escalonado)",parameters:{docs:{story:{inline:!1,iframeHeight:500}}},decorators:[n=>e.jsx("div",{style:{minHeight:"550px",width:"fit-content"},children:e.jsx(n,{})})],args:{visible:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(i,{label:"Opções"}),Array.from({length:12},(n,r)=>e.jsx(o,{icon:"chevron_right",label:`Item ${r+1}`,onClick:()=>{}},r))]})}};l.parameters={...l.parameters,docs:{...(_=l.parameters)===null||_===void 0?void 0:_.docs,source:{originalSource:`{
  name: "Default",
  parameters: {
    layout: "centered"
  },
  decorators: [Story => <div style={{
    minHeight: "220px",
    width: "fit-content"
  }}>\r
        <Story />\r
      </div>],
  args: {
    visible: true,
    align: "left",
    children: <>\r
        <DropdownTitle label="Conta" />\r
        <DropdownItem icon="person" label="Perfil" onClick={() => {}} />\r
        <DropdownItem icon="settings" label="Configurações" onClick={() => {}} />\r
        <DropdownTitle label="Sessão" />\r
        <DropdownItem icon="logout" label="Sair" onClick={() => {}} />\r
      </>
  }
}`,...(w=l.parameters)===null||w===void 0||(y=w.docs)===null||y===void 0?void 0:y.source},description:{story:"Menu padrão com títulos de seção e ícones nos itens.\r\nDemonstra a composição completa com `DropdownTitle` e `DropdownItem`.",...(D=l.parameters)===null||D===void 0||(C=D.docs)===null||C===void 0?void 0:C.description}}};d.parameters={...d.parameters,docs:{...(j=d.parameters)===null||j===void 0?void 0:j.docs,source:{originalSource:`{
  name: "Composição — sem ícones",
  decorators: [Story => <div style={{
    minHeight: "150px",
    width: "fit-content"
  }}>\r
        <Story />\r
      </div>],
  args: {
    visible: true,
    children: <>\r
        <DropdownItem label="Copiar" onClick={() => {}} />\r
        <DropdownItem label="Colar" onClick={() => {}} />\r
        <DropdownItem label="Excluir" onClick={() => {}} />\r
      </>
  }
}`,...(S=d.parameters)===null||S===void 0||(I=S.docs)===null||I===void 0?void 0:I.source},description:{story:`Itens sem ícone — apenas labels.\r
Use quando os itens são autoexplicativos e o ícone não agrega contexto.`,...(O=d.parameters)===null||O===void 0||(k=O.docs)===null||k===void 0?void 0:k.description}}};c.parameters={...c.parameters,docs:{...(M=c.parameters)===null||M===void 0?void 0:M.docs,source:{originalSource:`{
  name: "Composição — item único",
  decorators: [Story => <div style={{
    minHeight: "70px",
    width: "fit-content"
  }}>\r
        <Story />\r
      </div>],
  args: {
    visible: true,
    children: <DropdownItem icon="logout" label="Sair" onClick={() => {}} />
  }
}`,...(H=c.parameters)===null||H===void 0||(E=H.docs)===null||E===void 0?void 0:E.source},description:{story:`Item único sem título de seção.\r
Padrão comum em dropdowns de ação única como o botão de logout no Header.`,...(q=c.parameters)===null||q===void 0||(A=q.docs)===null||A===void 0?void 0:A.description}}};p.parameters={...p.parameters,docs:{...(P=p.parameters)===null||P===void 0?void 0:P.docs,source:{originalSource:`{
  name: "Composição — com seções",
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 400
      }
    }
  },
  decorators: [Story => <div style={{
    minHeight: "320px",
    width: "fit-content"
  }}>\r
        <Story />\r
      </div>],
  args: {
    visible: true,
    children: <>\r
        <DropdownTitle label="Arquivo" />\r
        <DropdownItem icon="add" label="Novo" onClick={() => {}} />\r
        <DropdownItem icon="upload" label="Importar" onClick={() => {}} />\r
        <DropdownTitle label="Edição" />\r
        <DropdownItem icon="edit" label="Renomear" onClick={() => {}} />\r
        <DropdownItem icon="content_copy" label="Duplicar" onClick={() => {}} />\r
        <DropdownTitle label="Perigo" />\r
        <DropdownItem icon="delete" label="Excluir" onClick={() => {}} />\r
      </>
  }
}`,...(N=p.parameters)===null||N===void 0||(T=N.docs)===null||T===void 0?void 0:T.source},description:{story:"Menu com múltiplas seções agrupadas por `DropdownTitle`.\r\nDemonstra o agrupamento semântico de itens por contexto.",...(B=p.parameters)===null||B===void 0||(L=B.docs)===null||L===void 0?void 0:L.description}}};m.parameters={...m.parameters,docs:{...(F=m.parameters)===null||F===void 0?void 0:F.docs,source:{originalSource:`{
  name: "Alinhamento — comparação",
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 280
      }
    }
  },
  render: () => {
    const [openSide, setOpenSide] = useState<"left" | "right" | null>(null);
    const items = (side: "left" | "right") => <>\r
        <DropdownItem icon="edit" label="Editar" onClick={() => setOpenSide(null)} />\r
        <DropdownItem icon="delete" label="Excluir" onClick={() => setOpenSide(null)} />\r
      </>;
    return <div style={{
      display: "flex",
      justifyContent: "space-between"
    }}>\r
        <div style={{
        position: "relative"
      }}>\r
          <div style={{
          width: "fit-content"
        }}>\r
            <Button onClick={() => setOpenSide(openSide === "left" ? null : "left")}>\r
              "left"\r
            </Button>\r
          </div>\r
          <Dropdown visible={openSide === "left"} align="left">\r
            {items("left")}\r
          </Dropdown>\r
        </div>\r
        <div style={{
        position: "relative"
      }}>\r
          <div style={{
          width: "fit-content"
        }}>\r
            <Button onClick={() => setOpenSide(openSide === "right" ? null : "right")}>\r
              "right"\r
            </Button>\r
          </div>\r
          <Dropdown visible={openSide === "right"} align="right">\r
            {items("right")}\r
          </Dropdown>\r
        </div>\r
      </div>;
  }
}`,...(W=m.parameters)===null||W===void 0||(R=W.docs)===null||R===void 0?void 0:R.source},description:{story:"Comparação lado a lado dos dois alinhamentos no mesmo contexto.\r\nO botão da esquerda abre para a direita; o da direita abre para a esquerda.\r\nObserve também a diferença no `transform-origin` da animação de entrada.",...(G=m.parameters)===null||G===void 0||(z=G.docs)===null||z===void 0?void 0:z.description}}};u.parameters={...u.parameters,docs:{...(J=u.parameters)===null||J===void 0?void 0:J.docs,source:{originalSource:`{
  name: "Controlado — toggle por botão",
  decorators: [Story => <div style={{
    minHeight: "220px",
    width: "fit-content"
  }}>\r
        <Story />\r
      </div>],
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      position: "relative",
      width: "fit-content"
    }}>\r
        <div style={{
        width: "fit-content"
      }}>\r
          <Button onClick={() => setIsOpen(prev => !prev)}>\r
            Clique aqui!\r
          </Button>\r
        </div>\r
        <Dropdown visible={isOpen}>\r
          <DropdownTitle label="Ações" />\r
          <DropdownItem icon="edit" label="Editar" onClick={() => setIsOpen(false)} />\r
          <DropdownItem icon="content_copy" label="Duplicar" onClick={() => setIsOpen(false)} />\r
          <DropdownItem icon="delete" label="Excluir" onClick={() => setIsOpen(false)} />\r
        </Dropdown>\r
      </div>;
  }
}`,...(Q=u.parameters)===null||Q===void 0||(U=Q.docs)===null||U===void 0?void 0:U.source},description:{story:"Dropdown controlado com estado externo via `useState`.\r\nDemonstra o padrão correto: `visible` acionado por um botão\r\ne fechamento ao clicar em um item via `onClick`.",...(X=u.parameters)===null||X===void 0||(V=X.docs)===null||V===void 0?void 0:V.description}}};v.parameters={...v.parameters,docs:{...(Z=v.parameters)===null||Z===void 0?void 0:Z.docs,source:{originalSource:`{
  name: "Contexto real — menu de perfil",
  decorators: [Story => <div style={{
    minHeight: "220px",
    display: "flex",
    justifyContent: "flex-end"
  }}>\r
        <Story />\r
      </div>],
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      position: "relative"
    }}>\r
        <div style={{
        cursor: "pointer"
      }} onClick={() => setIsOpen(prev => !prev)}>\r
          <Avatar size="md" letter="Jane Doe" />\r
        </div>\r
        <Dropdown visible={isOpen} align="right">\r
          <DropdownTitle label="Jane Doe" />\r
          <DropdownItem icon="person" label="Meu perfil" onClick={() => setIsOpen(false)} />\r
          <DropdownItem icon="settings" label="Configurações" onClick={() => setIsOpen(false)} />\r
          <DropdownItem icon="logout" label="Sair" onClick={() => setIsOpen(false)} />\r
        </Dropdown>\r
      </div>;
  }
}`,...(K=v.parameters)===null||K===void 0||($=K.docs)===null||$===void 0?void 0:$.source},description:{story:'Dropdown de perfil acionado por Avatar — padrão do Header da aplicação.\r\nUsa `align="right"` pois o Avatar está no canto direito do Header.',...(ee=v.parameters)===null||ee===void 0||(Y=ee.docs)===null||Y===void 0?void 0:Y.description}}};g.parameters={...g.parameters,docs:{...(ne=g.parameters)===null||ne===void 0?void 0:ne.docs,source:{originalSource:`{
  name: "Contexto real — menu de overflow (⋮)",
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 380
      }
    }
  },
  render: () => {
    const [openId, setOpenId] = useState<string | null>(null);
    const rows = [{
      id: "1",
      name: "Notebook Pro X"
    }, {
      id: "2",
      name: "Mouse Ergonômico"
    }, {
      id: "3",
      name: "Teclado Mecânico"
    }];
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-nano)",
      width: "320px"
    }}>\r
        {rows.map(({
        id,
        name
      }) => <div key={id} style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "var(--s-spacing-x-small) var(--s-spacing-small)",
        border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
        borderRadius: "var(--s-border-radius-medium)",
        background: "var(--s-color-fill-default)",
        position: "relative"
      }}>\r
            <small>{name}</small>\r
            <div style={{
          position: "relative"
        }}>\r
              <button style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px"
          }} onClick={() => setOpenId(openId === id ? null : id)}>\r
                <small>⋮</small>\r
              </button>\r
              <Dropdown visible={openId === id} align="right">\r
                <DropdownItem icon="edit" label="Editar" onClick={() => setOpenId(null)} />\r
                <DropdownItem icon="content_copy" label="Duplicar" onClick={() => setOpenId(null)} />\r
                <DropdownItem icon="delete" label="Excluir" onClick={() => setOpenId(null)} />\r
              </Dropdown>\r
            </div>\r
          </div>)}\r
      </div>;
  }
}`,...(re=g.parameters)===null||re===void 0||(oe=re.docs)===null||oe===void 0?void 0:oe.source},description:{story:'Menu de overflow em linha de tabela — padrão de três pontos (⋮).\r\nCada linha tem seu menu independente com `align="right"`.\r\nAbrir um menu fecha os demais automaticamente.',...(ae=g.parameters)===null||ae===void 0||(ie=ae.docs)===null||ie===void 0?void 0:ie.description}}};b.parameters={...b.parameters,docs:{...(te=b.parameters)===null||te===void 0?void 0:te.docs,source:{originalSource:`{
  name: "Edge case — pai estreito",
  decorators: [Story => <div style={{
    minHeight: "160px",
    position: "relative"
  }}>\r
        <div style={{
      width: "40px",
      border: "1px dashed var(--s-color-border-default)",
      position: "relative"
    }}>\r
          <Story />\r
        </div>\r
      </div>],
  args: {
    visible: true,
    children: <>\r
        <DropdownTitle label="Ações" />\r
        <DropdownItem icon="edit" label="Editar" onClick={() => {}} />\r
        <DropdownItem icon="delete" label="Excluir" onClick={() => {}} />\r
      </>
  }
}`,...(le=b.parameters)===null||le===void 0||(se=le.docs)===null||se===void 0?void 0:se.source},description:{story:"Pai estreito — valida que o menu expande além do pai usando\r\n`min-width: 100%; width: max-content`, sem quebrar o conteúdo.",...(ce=b.parameters)===null||ce===void 0||(de=ce.docs)===null||de===void 0?void 0:de.description}}};h.parameters={...h.parameters,docs:{...(pe=h.parameters)===null||pe===void 0?void 0:pe.docs,source:{originalSource:`{
  name: "Edge case — label longo",
  decorators: [Story => <div style={{
    minHeight: "160px",
    width: "fit-content"
  }}>\r
        <Story />\r
      </div>],
  args: {
    visible: true,
    children: <>\r
        <DropdownTitle label="Configurações avançadas" />\r
        <DropdownItem icon="settings" label="Gerenciar preferências de notificação" onClick={() => {}} />\r
        <DropdownItem icon="security" label="Autenticação em dois fatores" onClick={() => {}} />\r
        <DropdownItem icon="logout" label="Sair da conta" onClick={() => {}} />\r
      </>
  }
}`,...(ue=h.parameters)===null||ue===void 0||(me=ue.docs)===null||me===void 0?void 0:me.source},description:{story:`Label longo — valida o layout quando o texto de um item\r
excede a largura natural do menu.`,...(ge=h.parameters)===null||ge===void 0||(ve=ge.docs)===null||ve===void 0?void 0:ve.description}}};f.parameters={...f.parameters,docs:{...(be=f.parameters)===null||be===void 0?void 0:be.docs,source:{originalSource:`{
  name: "Edge case — muitos itens (máx. delay escalonado)",
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 500
      }
    }
  },
  decorators: [Story => <div style={{
    minHeight: "550px",
    width: "fit-content"
  }}>\r
        <Story />\r
      </div>],
  args: {
    visible: true,
    children: <>\r
        <DropdownTitle label="Opções" />\r
        {Array.from({
        length: 12
      }, (_, i) => <DropdownItem key={i} icon="chevron_right" label={\`Item \${i + 1}\`} onClick={() => {}} />)}\r
      </>
  }
}`,...(fe=f.parameters)===null||fe===void 0||(he=fe.docs)===null||he===void 0?void 0:he.source},description:{story:"Muitos itens (12) — valida o escalonamento máximo de `transition-delay`\r\ne o comportamento de overflow quando o menu excede a altura da viewport.",...(_e=f.parameters)===null||_e===void 0||(xe=_e.docs)===null||xe===void 0?void 0:xe.description}}};const Pe=["Default","NoIcons","SingleItem","WithSections","AlignComparison","Controlled","ProfileMenu","OverflowMenu","NarrowParent","LongLabel","ManyItems"];export{m as AlignComparison,u as Controlled,l as Default,h as LongLabel,f as ManyItems,b as NarrowParent,d as NoIcons,g as OverflowMenu,v as ProfileMenu,c as SingleItem,p as WithSections,Pe as __namedExportsOrder,qe as default};
