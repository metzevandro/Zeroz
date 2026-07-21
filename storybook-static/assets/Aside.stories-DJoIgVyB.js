import{j as e,r as A}from"./iframe-C_0AXUlQ.js";import{B as n}from"./Button-QvF2SVTw.js";import{I as o}from"./Input-jL10LS7k.js";/* empty css               */import{B as Le}from"./ButtonIcon-Cs1zWwvD.js";import{D as Pe}from"./DatePicker-DHcvPE2y.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-C3Uq1gPi.js";import"./Loading-CCCSPJuP.js";import"./Skeleton-DNOAWNPr.js";const Ne=({title:a,description:t,onClose:r})=>e.jsxs("div",{className:"aside-header",children:[e.jsxs("div",{className:"aside-title",children:[e.jsx("span",{children:a}),e.jsx(Le,{appearance:"plain",variant:"primary",icon:"close",size:"md",onClick:r,"aria-label":"Close panel"})]}),t&&e.jsx("p",{className:"aside-description",children:t})]});Ne.displayName="Aside.Header";const Be=({isOpen:a,title:t,description:r,toggleAside:c,content:p,footer:l})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`aside-overlay ${a?"open":"hidden"}`,onClick:c,"aria-hidden":"true"}),e.jsx("div",{className:`aside-root ${a?"open":""}`,role:"dialog","aria-modal":"true","aria-label":t,children:e.jsxs("div",{className:"aside",children:[e.jsx(Ne,{title:t,description:r,onClose:c}),e.jsx("div",{className:"aside-children",children:p}),l&&e.jsx("div",{className:"aside-footer",children:l})]})})]});Be.displayName="Aside";const s=({children:a})=>e.jsx("div",{className:"aside-content",children:a});s.displayName="Aside.Content";const d=({children:a})=>e.jsx(e.Fragment,{children:a});d.displayName="Aside.Footer";const Re=(a=!1)=>{const[t,r]=A.useState(a),c=A.useCallback(()=>r(!0),[]),p=A.useCallback(()=>r(!1),[]),l=A.useCallback(()=>r(qe=>!qe),[]);return{isOpen:t,openAside:c,closeAside:p,toggleAside:l}};var D,E,S,F,T,I,B,P,N,q,L,R,V,W,z,U,w,O,k,J,M,G,H,$,Z,Q,K,X,Y,ee,ae,oe,re,ne,te,ie,se,le,de,ce,pe,me,ue,ve,ge,xe,ye,fe,he,be,_e,je,Ce,Ae,De,Ee,Se,Fe,Te,Ie;const He={title:"Components/Aside",component:Be,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:'\nO **Aside** é um painel lateral deslizante (overlay) para exibir conteúdo complementar\nà tela atual — detalhes de um registro, formulários de criação, configurações e filtros —\nsem redirecionar o usuário para outra página.\n\n> ⚠️ Não use o Aside para fluxos de decisão destrutiva (ex: confirmação de exclusão).\n> Nesses casos, prefira um **Modal**.\n\n### Sub-componentes\n- `AsideContent` — slot para o corpo rolável; aplica espaçamento padrão do design system\n- `AsideFooter` — slot para as ações do rodapé; máximo recomendado de 2 botões\n\n### Hook\n`useAside(initialState?)` — gerencia o estado aberto/fechado.\nRetorna `isOpen`, `openAside`, `closeAside` e `toggleAside`.\n\n### Responsividade\nEm viewports `≤ 490px` o painel ocupa `96%` da largura da tela.\nEm viewports maiores, ocupa `50%`.\n\n### Acessibilidade\n- O painel usa `role="dialog"` e `aria-modal="true"`\n- O overlay usa `aria-hidden="true"`\n- O `title` é mapeado diretamente para `aria-label` do dialog — sempre forneça um título descritivo\n        '}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10008"}},argTypes:{title:{control:"text",description:"Título exibido no cabeçalho do painel. Também usado como `aria-label` para acessibilidade.",table:{category:"Conteúdo",type:{summary:"string"}}},description:{control:"text",description:"Subtítulo opcional exibido abaixo do título. Quando omitido, a linha de descrição não é renderizada.",table:{category:"Conteúdo",type:{summary:"string"}}},isOpen:{control:"boolean",description:"Controla a visibilidade do painel. Gerencie externamente via `useAside` ou `useState`.",table:{category:"Estado",defaultValue:{summary:"false"},type:{summary:"boolean"}}},toggleAside:{action:"toggleAside",description:"Callback chamado quando o usuário fecha o painel (botão de fechar ou clique no overlay).",table:{category:"Eventos",type:{summary:"() => void"}}},content:{control:!1,description:"Conteúdo principal rolável. Use `AsideContent` para aplicar o espaçamento padrão.",table:{category:"Slots",type:{summary:"React.ReactNode"}}},footer:{control:!1,description:"Área de ações do rodapé. Use `AsideFooter` para aplicar o estilo padrão.",table:{category:"Slots",type:{summary:"React.ReactNode"}}}},decorators:[a=>e.jsx("div",{style:{minHeight:"600px"},children:e.jsx(a,{})})]},i=({isOpen:a,toggleAside:t,title:r,...c})=>{const{isOpen:p,toggleAside:l}=Re(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"24px",width:"fit-content"},children:e.jsx(n,{onClick:l,children:"Abrir painel"})}),e.jsx(Be,{...c,isOpen:p,toggleAside:l,title:r??"Título do painel"})]})},m={name:"Default",render:a=>e.jsx(i,{...a}),args:{title:"Título do painel",description:"Uma breve descrição sobre o que este painel exibe."}},u={name:"Sem descrição",render:a=>e.jsx(i,{...a,content:e.jsx(s,{children:e.jsx("p",{style:{margin:0},children:"Este painel é renderizado sem descrição. O título sozinho fornece contexto suficiente para o usuário."})})}),args:{title:"Configurações de notificação"}},v={name:"Estado vazio (sem slots)",render:a=>e.jsx(i,{...a}),args:{title:"Carregando detalhes",description:"O conteúdo aparecerá aqui assim que os dados forem carregados."}},g={name:"Contextual — detalhes do registro",render:a=>e.jsx(i,{...a,content:e.jsx(s,{children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[{label:"ID do pedido",value:"#ORD-20481"},{label:"Cliente",value:"Jane Doe"},{label:"Status",value:"Enviado"},{label:"Total",value:"R$ 129,90"},{label:"Forma de pagamento",value:"Visa •••• 4242"},{label:"Endereço de entrega",value:"Rua Principal, 123 – São Paulo, SP"},{label:"Criado em",value:"21 mar. 2025 – 14:32"},{label:"Última atualização",value:"22 mar. 2025 – 09:15"}].map(({label:t,value:r})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[e.jsx("small",{style:{color:"#888"},children:t}),e.jsx("p",{style:{margin:0},children:r})]},t))})})}),args:{title:"Detalhes do pedido",description:"Informações completas sobre o pedido selecionado."}},x={name:"Contextual — log de atividades (rolável)",render:a=>e.jsx(i,{...a,content:e.jsx(s,{children:Array.from({length:30},(t,r)=>e.jsxs("div",{style:{padding:"10px 0",borderBottom:"1px solid #eee",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("p",{style:{margin:0},children:["Registro de atividade #",r+1]}),e.jsxs("p",{style:{color:"#888",fontSize:"13px",margin:0},children:[r%28+1," mar. 2025"]})]},r))}),footer:e.jsxs(d,{children:[e.jsx(n,{variant:"primary",children:"Exportar tudo"}),e.jsx(n,{variant:"secondary",children:"Fechar"})]})}),args:{title:"Log de atividades",description:"Todos os eventos registrados para o item selecionado."}},y={name:"Criação — novo usuário",render:a=>e.jsx(i,{...a,content:e.jsx(s,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{placeholder:"Ex: Jane",label:"Nome",type:"text"}),e.jsx(o,{placeholder:"Ex: Doe",label:"Sobrenome",type:"text"}),e.jsx(o,{placeholder:"Ex: jane@exemplo.com",label:"E-mail",type:"email"}),e.jsx(o,{placeholder:"Ex: Product Designer",label:"Cargo",type:"text"})]})}),footer:e.jsxs(d,{children:[e.jsx(n,{variant:"primary",children:"Criar usuário"}),e.jsx(n,{variant:"secondary",children:"Cancelar"})]})}),args:{title:"Novo usuário",description:"Preencha as informações abaixo para adicionar um novo usuário."}},f={name:"Criação — convidar membro",render:a=>e.jsx(i,{...a,content:e.jsx(s,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{label:"E-mail",type:"email",placeholder:"Ex: jane@exemplo.com"}),e.jsx(o,{label:"Nome completo",type:"text",placeholder:"Ex: Jane Doe"}),e.jsx(o,{label:"Cargo",type:"text",placeholder:"Ex: Product Designer"})]})}),footer:e.jsxs(d,{children:[e.jsx(n,{variant:"primary",children:"Enviar convite"}),e.jsx(n,{variant:"secondary",children:"Cancelar"})]})}),args:{title:"Convidar membro",description:"Envie um convite para um novo membro ingressar no workspace."}},h={name:"Configurações — editar usuário",render:a=>e.jsx(i,{...a,content:e.jsx(s,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{placeholder:"Ex: Jane",label:"Nome",type:"text",defaultValue:"Jane"}),e.jsx(o,{placeholder:"Ex: Doe",label:"Sobrenome",type:"text",defaultValue:"Doe"}),e.jsx(o,{placeholder:"Ex: jane@exemplo.com",label:"E-mail",type:"email",defaultValue:"jane@example.com"}),e.jsx(o,{placeholder:"Ex: Product Designer",label:"Cargo",type:"text",defaultValue:"Product Designer"})]})}),footer:e.jsxs(d,{children:[e.jsx(n,{variant:"primary",children:"Salvar alterações"}),e.jsx(n,{variant:"secondary",children:"Cancelar"})]})}),args:{title:"Editar usuário",description:"Atualize as informações do usuário selecionado."}},b={name:"Configurações — preferências de conta",render:a=>e.jsx(i,{...a,content:e.jsx(s,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 12px",fontWeight:600,fontSize:"13px",color:"#444"},children:"Informações pessoais"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(o,{placeholder:"Ex: Jane",label:"Nome de exibição",type:"text",defaultValue:"Jane Doe"}),e.jsx(o,{placeholder:"Ex: jane@exemplo.com",label:"E-mail",type:"email",defaultValue:"jane@example.com"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 12px",fontWeight:600,fontSize:"13px",color:"#444"},children:"Segurança"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(o,{label:"Senha atual",type:"password"}),e.jsx(o,{label:"Nova senha",type:"password"}),e.jsx(o,{label:"Confirmar nova senha",type:"password"})]})]})]})}),footer:e.jsxs(d,{children:[e.jsx(n,{variant:"primary",children:"Salvar alterações"}),e.jsx(n,{variant:"secondary",children:"Descartar"})]})}),args:{title:"Configurações de conta",description:"Gerencie suas informações pessoais e preferências de segurança."}},_={name:"Configurações — painel de filtros",render:a=>e.jsx(i,{...a,content:e.jsx(s,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{label:"Buscar por nome",type:"text"}),e.jsx(o,{label:"Filtrar por status",type:"text"}),e.jsx(Pe,{label:"Data inicial",value:"12/03/2026",onChange:()=>{}}),e.jsx(Pe,{label:"Data final",value:"12/03/2026",onChange:()=>{}})]})}),footer:e.jsxs(d,{children:[e.jsx(n,{variant:"primary",children:"Aplicar filtros"}),e.jsx(n,{variant:"secondary",children:"Limpar"})]})}),args:{title:"Filtrar pedidos",description:"Refine os resultados usando os filtros abaixo."}},j={name:"Edge case — título longo",render:a=>e.jsx(i,{...a,content:e.jsx(s,{children:e.jsx("p",{style:{margin:0},children:"Valida que o cabeçalho lida corretamente com um título longo sem quebrar o layout do painel nem sobrepor o botão de fechar."})})}),args:{title:"Configurações avançadas de preferências de notificação e entrega de mensagens",description:"Valida o comportamento de overflow com um título muito longo."}},C={name:"Edge case — descrição longa",render:a=>e.jsx(i,{...a,content:e.jsx(s,{children:e.jsx("p",{style:{margin:0},children:"Valida que a área de descrição lida com textos longos sem comprimir o restante do cabeçalho nem ocultar elementos interativos."})})}),args:{title:"Configurações",description:"Esta é uma descrição intencionalmente longa para testar como o cabeçalho do painel lida com conteúdo que ultrapassa uma única linha e quebra em múltiplas linhas sem quebrar o layout nem ocultar elementos interativos como o botão de fechar."}};m.parameters={...m.parameters,docs:{...(D=m.parameters)===null||D===void 0?void 0:D.docs,source:{originalSource:`{
  name: "Default",
  render: args => <AsideWithTrigger {...args} />,
  args: {
    title: "Título do painel",
    description: "Uma breve descrição sobre o que este painel exibe."
  }
}`,...(S=m.parameters)===null||S===void 0||(E=S.docs)===null||E===void 0?void 0:E.source},description:{story:`Estado base do componente com título e descrição.\r
Nenhum slot de conteúdo ou rodapé é fornecido — o painel aparece vazio.\r
Use os Controls do painel para explorar todas as props disponíveis.`,...(T=m.parameters)===null||T===void 0||(F=T.docs)===null||F===void 0?void 0:F.description}}};u.parameters={...u.parameters,docs:{...(I=u.parameters)===null||I===void 0?void 0:I.docs,source:{originalSource:`{
  name: "Sem descrição",
  render: args => <AsideWithTrigger {...args} content={<AsideContent>\r
          <p style={{
      margin: 0
    }}>\r
            Este painel é renderizado sem descrição. O título sozinho fornece\r
            contexto suficiente para o usuário.\r
          </p>\r
        </AsideContent>} />,
  args: {
    title: "Configurações de notificação"
  }
}`,...(P=u.parameters)===null||P===void 0||(B=P.docs)===null||B===void 0?void 0:B.source},description:{story:`Painel sem descrição — apenas o título e o botão de fechar no cabeçalho.\r
Use quando o título já fornece contexto suficiente por si só.`,...(q=u.parameters)===null||q===void 0||(N=q.docs)===null||N===void 0?void 0:N.description}}};v.parameters={...v.parameters,docs:{...(L=v.parameters)===null||L===void 0?void 0:L.docs,source:{originalSource:`{
  name: "Estado vazio (sem slots)",
  render: args => <AsideWithTrigger {...args} />,
  args: {
    title: "Carregando detalhes",
    description: "O conteúdo aparecerá aqui assim que os dados forem carregados."
  }
}`,...(V=v.parameters)===null||V===void 0||(R=V.docs)===null||R===void 0?void 0:R.source},description:{story:`Painel sem slots de conteúdo nem rodapé.\r
Útil para representar o estado enquanto os dados ainda estão sendo carregados.`,...(z=v.parameters)===null||z===void 0||(W=z.docs)===null||W===void 0?void 0:W.description}}};g.parameters={...g.parameters,docs:{...(U=g.parameters)===null||U===void 0?void 0:U.docs,source:{originalSource:`{
  name: "Contextual — detalhes do registro",
  render: args => <AsideWithTrigger {...args} content={<AsideContent>\r
          <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>\r
            {[{
        label: "ID do pedido",
        value: "#ORD-20481"
      }, {
        label: "Cliente",
        value: "Jane Doe"
      }, {
        label: "Status",
        value: "Enviado"
      }, {
        label: "Total",
        value: "R$ 129,90"
      }, {
        label: "Forma de pagamento",
        value: "Visa •••• 4242"
      }, {
        label: "Endereço de entrega",
        value: "Rua Principal, 123 – São Paulo, SP"
      }, {
        label: "Criado em",
        value: "21 mar. 2025 – 14:32"
      }, {
        label: "Última atualização",
        value: "22 mar. 2025 – 09:15"
      }].map(({
        label,
        value
      }) => <div key={label} style={{
        display: "flex",
        flexDirection: "column",
        gap: "2px"
      }}>\r
                <small style={{
          color: "#888"
        }}>{label}</small>\r
                <p style={{
          margin: 0
        }}>{value}</p>\r
              </div>)}\r
          </div>\r
        </AsideContent>} />,
  args: {
    title: "Detalhes do pedido",
    description: "Informações completas sobre o pedido selecionado."
  }
}`,...(O=g.parameters)===null||O===void 0||(w=O.docs)===null||w===void 0?void 0:w.source},description:{story:`Exibe detalhes de um registro selecionado (ex: pedido em uma tabela).\r
Padrão contextual — sem ações de edição, apenas leitura.`,...(J=g.parameters)===null||J===void 0||(k=J.docs)===null||k===void 0?void 0:k.description}}};x.parameters={...x.parameters,docs:{...(M=x.parameters)===null||M===void 0?void 0:M.docs,source:{originalSource:`{
  name: "Contextual — log de atividades (rolável)",
  render: args => <AsideWithTrigger {...args} content={<AsideContent>\r
          {Array.from({
      length: 30
    }, (_, i) => <div key={i} style={{
      padding: "10px 0",
      borderBottom: "1px solid #eee",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>\r
              <p style={{
        margin: 0
      }}>Registro de atividade #{i + 1}</p>\r
              <p style={{
        color: "#888",
        fontSize: "13px",
        margin: 0
      }}>\r
                {i % 28 + 1} mar. 2025\r
              </p>\r
            </div>)}\r
        </AsideContent>} footer={<AsideFooter>\r
          <Button variant="primary">Exportar tudo</Button>\r
          <Button variant="secondary">Fechar</Button>\r
        </AsideFooter>} />,
  args: {
    title: "Log de atividades",
    description: "Todos os eventos registrados para o item selecionado."
  }
}`,...(H=x.parameters)===null||H===void 0||(G=H.docs)===null||G===void 0?void 0:G.source},description:{story:"Log de atividades com muitos itens — valida o comportamento de scroll\r\nda área `AsideContent` quando o conteúdo excede a altura do painel.",...(Z=x.parameters)===null||Z===void 0||($=Z.docs)===null||$===void 0?void 0:$.description}}};y.parameters={...y.parameters,docs:{...(Q=y.parameters)===null||Q===void 0?void 0:Q.docs,source:{originalSource:`{
  name: "Criação — novo usuário",
  render: args => <AsideWithTrigger {...args} content={<AsideContent>\r
          <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>\r
            <Input placeholder="Ex: Jane" label="Nome" type="text" />\r
            <Input placeholder="Ex: Doe" label="Sobrenome" type="text" />\r
            <Input placeholder="Ex: jane@exemplo.com" label="E-mail" type="email" />\r
            <Input placeholder="Ex: Product Designer" label="Cargo" type="text" />\r
          </div>\r
        </AsideContent>} footer={<AsideFooter>\r
          <Button variant="primary">Criar usuário</Button>\r
          <Button variant="secondary">Cancelar</Button>\r
        </AsideFooter>} />,
  args: {
    title: "Novo usuário",
    description: "Preencha as informações abaixo para adicionar um novo usuário."
  }
}`,...(X=y.parameters)===null||X===void 0||(K=X.docs)===null||K===void 0?void 0:K.source},description:{story:"Formulário de criação de novo usuário.\r\nDemonstra o uso de `AsideContent` para o formulário e `AsideFooter` para as ações.",...(ee=y.parameters)===null||ee===void 0||(Y=ee.docs)===null||Y===void 0?void 0:Y.description}}};f.parameters={...f.parameters,docs:{...(ae=f.parameters)===null||ae===void 0?void 0:ae.docs,source:{originalSource:`{
  name: "Criação — convidar membro",
  render: args => <AsideWithTrigger {...args} content={<AsideContent>\r
          <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>\r
            <Input label="E-mail" type="email" placeholder="Ex: jane@exemplo.com" />\r
            <Input label="Nome completo" type="text" placeholder="Ex: Jane Doe" />\r
            <Input label="Cargo" type="text" placeholder="Ex: Product Designer" />\r
          </div>\r
        </AsideContent>} footer={<AsideFooter>\r
          <Button variant="primary">Enviar convite</Button>\r
          <Button variant="secondary">Cancelar</Button>\r
        </AsideFooter>} />,
  args: {
    title: "Convidar membro",
    description: "Envie um convite para um novo membro ingressar no workspace."
  }
}`,...(re=f.parameters)===null||re===void 0||(oe=re.docs)===null||oe===void 0?void 0:oe.source},description:{story:`Formulário de convite para novo membro do time.\r
Similar ao de criação de usuário, mas com campos voltados ao convite por e-mail.`,...(te=f.parameters)===null||te===void 0||(ne=te.docs)===null||ne===void 0?void 0:ne.description}}};h.parameters={...h.parameters,docs:{...(ie=h.parameters)===null||ie===void 0?void 0:ie.docs,source:{originalSource:`{
  name: "Configurações — editar usuário",
  render: args => <AsideWithTrigger {...args} content={<AsideContent>\r
          <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>\r
            <Input placeholder="Ex: Jane" label="Nome" type="text" defaultValue="Jane" />\r
            <Input placeholder="Ex: Doe" label="Sobrenome" type="text" defaultValue="Doe" />\r
            <Input placeholder="Ex: jane@exemplo.com" label="E-mail" type="email" defaultValue="jane@example.com" />\r
            <Input placeholder="Ex: Product Designer" label="Cargo" type="text" defaultValue="Product Designer" />\r
          </div>\r
        </AsideContent>} footer={<AsideFooter>\r
          <Button variant="primary">Salvar alterações</Button>\r
          <Button variant="secondary">Cancelar</Button>\r
        </AsideFooter>} />,
  args: {
    title: "Editar usuário",
    description: "Atualize as informações do usuário selecionado."
  }
}`,...(le=h.parameters)===null||le===void 0||(se=le.docs)===null||se===void 0?void 0:se.source},description:{story:`Formulário de edição de usuário com valores pré-preenchidos.\r
Demonstra o padrão de edição inline sem navegação para outra página.`,...(ce=h.parameters)===null||ce===void 0||(de=ce.docs)===null||de===void 0?void 0:de.description}}};b.parameters={...b.parameters,docs:{...(pe=b.parameters)===null||pe===void 0?void 0:pe.docs,source:{originalSource:`{
  name: "Configurações — preferências de conta",
  render: args => <AsideWithTrigger {...args} content={<AsideContent>\r
          <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>\r
            <div>\r
              <p style={{
          margin: "0 0 12px",
          fontWeight: 600,
          fontSize: "13px",
          color: "#444"
        }}>\r
                Informações pessoais\r
              </p>\r
              <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}>\r
                <Input placeholder="Ex: Jane" label="Nome de exibição" type="text" defaultValue="Jane Doe" />\r
                <Input placeholder="Ex: jane@exemplo.com" label="E-mail" type="email" defaultValue="jane@example.com" />\r
              </div>\r
            </div>\r
            <div>\r
              <p style={{
          margin: "0 0 12px",
          fontWeight: 600,
          fontSize: "13px",
          color: "#444"
        }}>\r
                Segurança\r
              </p>\r
              <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}>\r
                <Input label="Senha atual" type="password" />\r
                <Input label="Nova senha" type="password" />\r
                <Input label="Confirmar nova senha" type="password" />\r
              </div>\r
            </div>\r
          </div>\r
        </AsideContent>} footer={<AsideFooter>\r
          <Button variant="primary">Salvar alterações</Button>\r
          <Button variant="secondary">Descartar</Button>\r
        </AsideFooter>} />,
  args: {
    title: "Configurações de conta",
    description: "Gerencie suas informações pessoais e preferências de segurança."
  }
}`,...(ue=b.parameters)===null||ue===void 0||(me=ue.docs)===null||me===void 0?void 0:me.source},description:{story:"Painel de configurações de conta com múltiplas seções agrupadas.\r\nDemonstra como organizar campos em grupos semânticos dentro do `AsideContent`.",...(ge=b.parameters)===null||ge===void 0||(ve=ge.docs)===null||ve===void 0?void 0:ve.description}}};_.parameters={..._.parameters,docs:{...(xe=_.parameters)===null||xe===void 0?void 0:xe.docs,source:{originalSource:`{
  name: "Configurações — painel de filtros",
  render: args => <AsideWithTrigger {...args} content={<AsideContent>\r
          <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>\r
            <Input label="Buscar por nome" type="text" />\r
            <Input label="Filtrar por status" type="text" />\r
            <DatePicker label="Data inicial" value="12/03/2026" onChange={() => {}} />\r
            <DatePicker label="Data final" value="12/03/2026" onChange={() => {}} />\r
          </div>\r
        </AsideContent>} footer={<AsideFooter>\r
          <Button variant="primary">Aplicar filtros</Button>\r
          <Button variant="secondary">Limpar</Button>\r
        </AsideFooter>} />,
  args: {
    title: "Filtrar pedidos",
    description: "Refine os resultados usando os filtros abaixo."
  }
}`,...(fe=_.parameters)===null||fe===void 0||(ye=fe.docs)===null||ye===void 0?void 0:ye.source},description:{story:"Painel de filtros com campos de texto e seletores de data.\r\nDemonstra o uso de `DatePicker` dentro do `AsideContent`.",...(be=_.parameters)===null||be===void 0||(he=be.docs)===null||he===void 0?void 0:he.description}}};j.parameters={...j.parameters,docs:{...(_e=j.parameters)===null||_e===void 0?void 0:_e.docs,source:{originalSource:`{
  name: "Edge case — título longo",
  render: args => <AsideWithTrigger {...args} content={<AsideContent>\r
          <p style={{
      margin: 0
    }}>\r
            Valida que o cabeçalho lida corretamente com um título longo sem\r
            quebrar o layout do painel nem sobrepor o botão de fechar.\r
          </p>\r
        </AsideContent>} />,
  args: {
    title: "Configurações avançadas de preferências de notificação e entrega de mensagens",
    description: "Valida o comportamento de overflow com um título muito longo."
  }
}`,...(Ce=j.parameters)===null||Ce===void 0||(je=Ce.docs)===null||je===void 0?void 0:je.source},description:{story:`Título excepcionalmente longo.\r
Valida que o cabeçalho lida com strings longas sem quebrar o layout\r
nem sobrepor o botão de fechar.`,...(De=j.parameters)===null||De===void 0||(Ae=De.docs)===null||Ae===void 0?void 0:Ae.description}}};C.parameters={...C.parameters,docs:{...(Ee=C.parameters)===null||Ee===void 0?void 0:Ee.docs,source:{originalSource:`{
  name: "Edge case — descrição longa",
  render: args => <AsideWithTrigger {...args} content={<AsideContent>\r
          <p style={{
      margin: 0
    }}>\r
            Valida que a área de descrição lida com textos longos sem comprimir\r
            o restante do cabeçalho nem ocultar elementos interativos.\r
          </p>\r
        </AsideContent>} />,
  args: {
    title: "Configurações",
    description: "Esta é uma descrição intencionalmente longa para testar como o cabeçalho do painel lida com conteúdo que ultrapassa uma única linha e quebra em múltiplas linhas sem quebrar o layout nem ocultar elementos interativos como o botão de fechar."
  }
}`,...(Fe=C.parameters)===null||Fe===void 0||(Se=Fe.docs)===null||Se===void 0?void 0:Se.source},description:{story:`Descrição excepcionalmente longa.\r
Valida que a área de descrição lida com múltiplas linhas sem comprimir\r
o restante do cabeçalho nem ocultar o botão de fechar.`,...(Ie=C.parameters)===null||Ie===void 0||(Te=Ie.docs)===null||Te===void 0?void 0:Te.description}}};const $e=["Default","WithoutDescription","EmptyState","RecordDetails","ActivityLog","CreateUser","InviteTeamMember","EditUser","AccountSettings","FilterPanel","LongTitle","LongDescription"];export{b as AccountSettings,x as ActivityLog,y as CreateUser,m as Default,h as EditUser,v as EmptyState,_ as FilterPanel,f as InviteTeamMember,C as LongDescription,j as LongTitle,g as RecordDetails,u as WithoutDescription,$e as __namedExportsOrder,He as default};
