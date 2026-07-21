import{j as r}from"./iframe-C_0AXUlQ.js";/* empty css               */import{B as e}from"./Button-QvF2SVTw.js";import{M as ca,F as ma}from"./ModalSlots-p9eXWIKd.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-C3Uq1gPi.js";import"./Loading-CCCSPJuP.js";import"./Skeleton-DNOAWNPr.js";import"./ButtonIcon-Cs1zWwvD.js";var W,j,z,B,C,P,w,I,E,M,k,T,q,L,V,A,D,F,U,R,O,N,G,H,Z,$,J,K,Q,X,Y,rr,ar,er,or,nr,sr,ir,tr,dr,lr,cr,mr,pr,ur,vr,_r,yr,gr,hr,xr,Sr,br,fr,Wr,jr,zr,Br,Cr,Pr,wr,Ir,Er,Mr,kr,Tr,qr,Lr,Vr,Ar,Dr,Fr,Ur,Rr,Or,Nr,Gr,Hr,Zr,$r,Jr,Kr,Qr,Xr,Yr,ra,aa,ea,oa,na,sa,ia,ta,da,la;const ba={title:"Components/Button",component:e,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'\nO **Button** é o elemento interativo principal para acionar ações na interface.\n\nSuporta quatro variantes semânticas, dois tamanhos, ícone opcional e estados\nde loading e skeleton integrados.\n\n> Nunca use `icon` sem `children` — o componente lança um erro em desenvolvimento\n> nesse caso. Para botões somente-ícone, use o componente `ButtonIcon`.\n\n### Variantes\n| variant     | uso recomendado                                              |\n|-------------|--------------------------------------------------------------|\n| `primary`   | Ação principal da página ou formulário (CTA)                 |\n| `secondary` | Ações de suporte: "Cancelar", "Voltar", "Ver mais"           |\n| `success`   | Confirmações positivas: "Confirmar", "Marcar como concluído" |\n| `warning`   | Ações destrutivas ou cautelosas: "Excluir", "Sobrescrever"   |\n\n### Estados\n- **`disabled`** — desativa nativamente via atributo HTML; define `aria-disabled`\n- **`isLoading`** — exibe spinner, bloqueia interação e define `aria-busy="true"`\n- **`isSkeleton`** — substitui o botão por um `<Skeleton>` com as mesmas dimensões\n\n### Acessibilidade\n- Sempre forneça um label descritivo em `children`\n- Use `ariaLabel` quando o label visual não for autoexplicativo para leitores de tela\n- `isLoading` define `aria-busy` automaticamente — não é necessário fazer isso manualmente\n        '}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10010"}},argTypes:{variant:{control:"select",options:["primary","secondary","success","warning"],description:"Estilo visual e semântico do botão. Define cor de fundo, texto e comportamento de hover.",table:{defaultValue:{summary:"primary"},type:{summary:'"primary" | "secondary" | "success" | "warning"'}}},size:{control:"radio",options:["sm","md"],description:"Tamanho do botão. `sm` = 32px de altura (UIs compactas). `md` = 40px (padrão).",table:{defaultValue:{summary:"md"},type:{summary:'"sm" | "md"'}}},icon:{control:"text",description:"Nome do ícone renderizado antes do label. Deve sempre ser combinado com `children`.",table:{type:{summary:"string"}}},isLoading:{control:"boolean",description:"Exibe spinner de carregamento e bloqueia interação. Define `aria-busy` automaticamente.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},isSkeleton:{control:"boolean",description:"Substitui o botão por um `<Skeleton>` com as mesmas dimensões. Use para preservar layout durante carregamento da página.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Desativa o botão nativamente. Define `aria-disabled` e bloqueia interação.",table:{type:{summary:"boolean"}}},ariaLabel:{control:"text",description:"Label acessível para leitores de tela. Use quando o label visual não for suficientemente descritivo.",table:{type:{summary:"string"}}},children:{control:"text",description:"Texto do label do botão. Sempre obrigatório — inclusive quando `icon` é fornecido.",table:{type:{summary:"React.ReactNode"}}}}},o=({children:a})=>r.jsx("div",{style:{width:"fit-content"},children:a}),n={name:"Playground",args:{children:"Button",variant:"primary",size:"md",isLoading:!1,isSkeleton:!1,disabled:!1},render:a=>r.jsx(o,{children:r.jsx(e,{...a})})},s={name:"Primary",args:{children:"Salvar alterações",variant:"primary"},render:a=>r.jsx(o,{children:r.jsx(e,{...a})})},i={name:"Secondary",args:{children:"Cancelar",variant:"secondary"},render:a=>r.jsx(o,{children:r.jsx(e,{...a})})},t={name:"Success",args:{children:"Confirmar",variant:"success"},render:a=>r.jsx(o,{children:r.jsx(e,{...a})})},d={name:"Warning",args:{children:"Excluir",variant:"warning"},render:a=>r.jsx(o,{children:r.jsx(e,{...a})})},l={name:"Tamanho — md (padrão)",args:{children:"Botão médio",size:"md",variant:"primary"},render:a=>r.jsx(o,{children:r.jsx(e,{...a})})},c={name:"Tamanho — sm",args:{children:"Botão pequeno",size:"sm",variant:"primary"},render:a=>r.jsx(o,{children:r.jsx(e,{...a})})},m={name:"Comparativo de tamanhos",render:()=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[r.jsx("div",{style:{textAlign:"center"},children:r.jsx("div",{style:{width:"fit-content"},children:r.jsx(e,{size:"md",variant:"primary",children:"md · 40px"})})}),r.jsx("div",{style:{textAlign:"center"},children:r.jsx("div",{style:{width:"fit-content"},children:r.jsx(e,{size:"sm",variant:"primary",children:"sm · 32px"})})})]})},p={name:"Estado — desabilitado",args:{children:"Indisponível",disabled:!0,variant:"primary"},render:a=>r.jsx(o,{children:r.jsx(e,{...a})})},u={name:"Estado — loading",args:{children:"Salvando…",isLoading:!0,variant:"primary"},render:a=>r.jsx(o,{children:r.jsx(e,{...a})})},v={name:"Estado — skeleton",args:{children:"Enviar",isSkeleton:!0,variant:"primary"},render:a=>r.jsx(o,{children:r.jsx(e,{...a})})},_={name:"Com ícone — Primary",args:{children:"Adicionar item",icon:"add",variant:"primary"},render:a=>r.jsx(o,{children:r.jsx(e,{...a})})},y={name:"Com ícone — Secondary",args:{children:"Exportar",icon:"download",variant:"secondary"},render:a=>r.jsx(o,{children:r.jsx(e,{...a})})},g={name:"Com ícone — Success",args:{children:"Confirmar",icon:"check",variant:"success"},render:a=>r.jsx(o,{children:r.jsx(e,{...a})})},h={name:"Com ícone — Warning",args:{children:"Excluir",icon:"delete",variant:"warning"},render:a=>r.jsx(o,{children:r.jsx(e,{...a})})},x={name:"Matriz completa — variantes × tamanhos × estados",render:()=>r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"120px repeat(4, auto)",gap:"12px 16px",alignItems:"start"},children:[r.jsx("span",{}),r.jsx("small",{children:"md"}),r.jsx("small",{children:"sm"}),r.jsx("small",{children:"disabled"}),r.jsx("small",{children:"loading"}),["primary","secondary","success","warning"].map(a=>r.jsxs(r.Fragment,{children:[r.jsx("small",{children:a},`${a}-label`),r.jsx(e,{variant:a,size:"md",children:a}),r.jsx(e,{variant:a,size:"sm",children:a}),r.jsx(e,{variant:a,size:"md",disabled:!0,children:"desabilitado"}),r.jsx(e,{variant:a,size:"md",isLoading:!0,children:"loading"})]}))]})},S={name:"Contexto real — par primário + secundário",render:()=>r.jsxs("div",{style:{display:"flex",gap:"8px"},children:[r.jsx("div",{style:{width:"fit-content"},children:r.jsx(e,{variant:"primary",children:"Salvar alterações"})}),r.jsx("div",{style:{width:"fit-content"},children:r.jsx(e,{variant:"secondary",children:"Cancelar"})})]})},b={name:"Contexto real — rodapé de modal",parameters:{layout:"fullscreen"},decorators:[a=>r.jsx("div",{style:{height:"400px"},children:r.jsx(a,{})})],render:()=>r.jsx(ca,{hideModal:()=>{},isOpen:!0,dismissible:!0,footer:r.jsx(ma,{children:r.jsxs("div",{style:{width:"fit-content",display:"flex",gap:"var(--s-spacing-xx-small)"},children:[r.jsx(e,{variant:"warning",children:"Excluir"}),r.jsx(e,{variant:"secondary",children:"Cancelar"})]})}),title:"Excluir registro",description:"Esta ação não pode ser desfeita. Tem certeza que deseja continuar?"})},f={name:"Contexto real — toolbar compacta",render:()=>r.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-xx-small)",padding:"var(--s-spacing-xx-small) var(--s-spacing-x-small)",background:"var(--s-color-fill-default)",borderRadius:"var(--s-border-radius-medium)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",width:"fit-content"},children:[r.jsx("div",{style:{width:"fit-content"},children:r.jsx(e,{size:"sm",variant:"primary",icon:"add",children:"Novo"})}),r.jsx("div",{style:{width:"fit-content"},children:r.jsx(e,{size:"sm",variant:"secondary",icon:"download",children:"Exportar"})}),r.jsx("div",{style:{width:"fit-content"},children:r.jsx(e,{size:"sm",variant:"secondary",icon:"filter_list",children:"Filtros"})})]})};n.parameters={...n.parameters,docs:{...(W=n.parameters)===null||W===void 0?void 0:W.docs,source:{originalSource:`{
  name: "Playground",
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    isLoading: false,
    isSkeleton: false,
    disabled: false
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...(z=n.parameters)===null||z===void 0||(j=z.docs)===null||j===void 0?void 0:j.source},description:{story:`Story interativa para explorar todas as props via Controls.\r
Ponto de entrada recomendado para inspecionar o componente.`,...(C=n.parameters)===null||C===void 0||(B=C.docs)===null||B===void 0?void 0:B.description}}};s.parameters={...s.parameters,docs:{...(P=s.parameters)===null||P===void 0?void 0:P.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    children: "Salvar alterações",
    variant: "primary"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...(I=s.parameters)===null||I===void 0||(w=I.docs)===null||w===void 0?void 0:w.source},description:{story:`Variante primária — ação principal da página ou formulário (CTA).\r
Use apenas uma vez por contexto visual para manter hierarquia clara.`,...(M=s.parameters)===null||M===void 0||(E=M.docs)===null||E===void 0?void 0:E.description}}};i.parameters={...i.parameters,docs:{...(k=i.parameters)===null||k===void 0?void 0:k.docs,source:{originalSource:`{
  name: "Secondary",
  args: {
    children: "Cancelar",
    variant: "secondary"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...(q=i.parameters)===null||q===void 0||(T=q.docs)===null||T===void 0?void 0:T.source},description:{story:`Variante secundária — ações de suporte ou alternativas à ação principal.\r
Use para "Cancelar", "Voltar" ou qualquer ação de menor prioridade.`,...(V=i.parameters)===null||V===void 0||(L=V.docs)===null||L===void 0?void 0:L.description}}};t.parameters={...t.parameters,docs:{...(A=t.parameters)===null||A===void 0?void 0:A.docs,source:{originalSource:`{
  name: "Success",
  args: {
    children: "Confirmar",
    variant: "success"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...(F=t.parameters)===null||F===void 0||(D=F.docs)===null||D===void 0?void 0:D.source},description:{story:`Variante de sucesso — confirmações e ações com resultado positivo.\r
Use para "Confirmar", "Marcar como concluído", "Aprovar".`,...(R=t.parameters)===null||R===void 0||(U=R.docs)===null||U===void 0?void 0:U.description}}};d.parameters={...d.parameters,docs:{...(O=d.parameters)===null||O===void 0?void 0:O.docs,source:{originalSource:`{
  name: "Warning",
  args: {
    children: "Excluir",
    variant: "warning"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...(G=d.parameters)===null||G===void 0||(N=G.docs)===null||N===void 0?void 0:N.source},description:{story:`Variante de atenção — ações destrutivas ou que requerem cautela.\r
Use para "Excluir", "Sobrescrever", "Revogar acesso".`,...(Z=d.parameters)===null||Z===void 0||(H=Z.docs)===null||H===void 0?void 0:H.description}}};l.parameters={...l.parameters,docs:{...($=l.parameters)===null||$===void 0?void 0:$.docs,source:{originalSource:`{
  name: "Tamanho — md (padrão)",
  args: {
    children: "Botão médio",
    size: "md",
    variant: "primary"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...(K=l.parameters)===null||K===void 0||(J=K.docs)===null||J===void 0?void 0:J.source},description:{story:`Tamanho padrão — 40px de altura.\r
Indicado para a maioria dos contextos: formulários, modais, páginas.`,...(X=l.parameters)===null||X===void 0||(Q=X.docs)===null||Q===void 0?void 0:Q.description}}};c.parameters={...c.parameters,docs:{...(Y=c.parameters)===null||Y===void 0?void 0:Y.docs,source:{originalSource:`{
  name: "Tamanho — sm",
  args: {
    children: "Botão pequeno",
    size: "sm",
    variant: "primary"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...(ar=c.parameters)===null||ar===void 0||(rr=ar.docs)===null||rr===void 0?void 0:rr.source},description:{story:`Tamanho compacto — 32px de altura.\r
Indicado para toolbars, filtros, tabelas e UIs com espaço reduzido.`,...(or=c.parameters)===null||or===void 0||(er=or.docs)===null||er===void 0?void 0:er.description}}};m.parameters={...m.parameters,docs:{...(nr=m.parameters)===null||nr===void 0?void 0:nr.docs,source:{originalSource:`{
  name: "Comparativo de tamanhos",
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "12px"
  }}>\r
      <div style={{
      textAlign: "center"
    }}>\r
        <div style={{
        width: "fit-content"
      }}>\r
          <Button size="md" variant="primary">\r
            md · 40px\r
          </Button>\r
        </div>\r
      </div>\r
      <div style={{
      textAlign: "center"
    }}>\r
        <div style={{
        width: "fit-content"
      }}>\r
          <Button size="sm" variant="primary">\r
            sm · 32px\r
          </Button>\r
        </div>\r
      </div>\r
    </div>
}`,...(ir=m.parameters)===null||ir===void 0||(sr=ir.docs)===null||sr===void 0?void 0:sr.source},description:{story:"Comparativo visual dos dois tamanhos disponíveis lado a lado.",...(dr=m.parameters)===null||dr===void 0||(tr=dr.docs)===null||tr===void 0?void 0:tr.description}}};p.parameters={...p.parameters,docs:{...(lr=p.parameters)===null||lr===void 0?void 0:lr.docs,source:{originalSource:`{
  name: "Estado — desabilitado",
  args: {
    children: "Indisponível",
    disabled: true,
    variant: "primary"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...(mr=p.parameters)===null||mr===void 0||(cr=mr.docs)===null||cr===void 0?void 0:cr.source},description:{story:"Estado desabilitado — bloqueia interação nativamente.\r\nDefine `aria-disabled` e aplica opacidade reduzida.\r\nUse quando a ação não está disponível no contexto atual.",...(ur=p.parameters)===null||ur===void 0||(pr=ur.docs)===null||pr===void 0?void 0:pr.description}}};u.parameters={...u.parameters,docs:{...(vr=u.parameters)===null||vr===void 0?void 0:vr.docs,source:{originalSource:`{
  name: "Estado — loading",
  args: {
    children: "Salvando…",
    isLoading: true,
    variant: "primary"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...(yr=u.parameters)===null||yr===void 0||(_r=yr.docs)===null||_r===void 0?void 0:_r.source},description:{story:'Estado de loading — exibe spinner e bloqueia interação.\r\nDefine `aria-busy="true"` automaticamente.\r\nUse vinculado à operação assíncrona que o acionou (ex: submit de formulário).',...(hr=u.parameters)===null||hr===void 0||(gr=hr.docs)===null||gr===void 0?void 0:gr.description}}};v.parameters={...v.parameters,docs:{...(xr=v.parameters)===null||xr===void 0?void 0:xr.docs,source:{originalSource:`{
  name: "Estado — skeleton",
  args: {
    children: "Enviar",
    isSkeleton: true,
    variant: "primary"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...(br=v.parameters)===null||br===void 0||(Sr=br.docs)===null||Sr===void 0?void 0:Sr.source},description:{story:`Estado skeleton — substitui o botão por um placeholder com as mesmas dimensões.\r
Use para preservar o layout durante carregamento inicial da página,\r
antes dos dados e ações estarem disponíveis.`,...(Wr=v.parameters)===null||Wr===void 0||(fr=Wr.docs)===null||fr===void 0?void 0:fr.description}}};_.parameters={..._.parameters,docs:{...(jr=_.parameters)===null||jr===void 0?void 0:jr.docs,source:{originalSource:`{
  name: "Com ícone — Primary",
  args: {
    children: "Adicionar item",
    icon: "add",
    variant: "primary"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...(Br=_.parameters)===null||Br===void 0||(zr=Br.docs)===null||zr===void 0?void 0:zr.source},description:{story:`Botão primário com ícone antes do label.\r
O ícone reforça visualmente a ação sem substituir o texto.`,...(Pr=_.parameters)===null||Pr===void 0||(Cr=Pr.docs)===null||Cr===void 0?void 0:Cr.description}}};y.parameters={...y.parameters,docs:{...(wr=y.parameters)===null||wr===void 0?void 0:wr.docs,source:{originalSource:`{
  name: "Com ícone — Secondary",
  args: {
    children: "Exportar",
    icon: "download",
    variant: "secondary"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...(Er=y.parameters)===null||Er===void 0||(Ir=Er.docs)===null||Ir===void 0?void 0:Ir.source},description:{story:"Botão secundário com ícone — padrão comum em ações de exportação e download.",...(kr=y.parameters)===null||kr===void 0||(Mr=kr.docs)===null||Mr===void 0?void 0:Mr.description}}};g.parameters={...g.parameters,docs:{...(Tr=g.parameters)===null||Tr===void 0?void 0:Tr.docs,source:{originalSource:`{
  name: "Com ícone — Success",
  args: {
    children: "Confirmar",
    icon: "check",
    variant: "success"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...(Lr=g.parameters)===null||Lr===void 0||(qr=Lr.docs)===null||qr===void 0?void 0:qr.source},description:{story:"Botão de sucesso com ícone — reforça visualmente o resultado positivo da ação.",...(Ar=g.parameters)===null||Ar===void 0||(Vr=Ar.docs)===null||Vr===void 0?void 0:Vr.description}}};h.parameters={...h.parameters,docs:{...(Dr=h.parameters)===null||Dr===void 0?void 0:Dr.docs,source:{originalSource:`{
  name: "Com ícone — Warning",
  args: {
    children: "Excluir",
    icon: "delete",
    variant: "warning"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...(Ur=h.parameters)===null||Ur===void 0||(Fr=Ur.docs)===null||Fr===void 0?void 0:Fr.source},description:{story:"Botão de atenção com ícone — o ícone amplifica o sinal de alerta da ação destrutiva.",...(Or=h.parameters)===null||Or===void 0||(Rr=Or.docs)===null||Rr===void 0?void 0:Rr.description}}};x.parameters={...x.parameters,docs:{...(Nr=x.parameters)===null||Nr===void 0?void 0:Nr.docs,source:{originalSource:`{
  name: "Matriz completa — variantes × tamanhos × estados",
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "120px repeat(4, auto)",
    gap: "12px 16px",
    alignItems: "start"
  }}>\r
      <span />\r
      <small>md</small>\r
      <small>sm</small>\r
      <small>disabled</small>\r
      <small>loading</small>\r
\r
      {(["primary", "secondary", "success", "warning"] as const).map(variant => <>\r
            <small key={\`\${variant}-label\`}>{variant}</small>\r
\r
            <Button variant={variant} size="md">\r
              {variant}\r
            </Button>\r
\r
            <Button variant={variant} size="sm">\r
              {variant}\r
            </Button>\r
\r
            <Button variant={variant} size="md" disabled>\r
              desabilitado\r
            </Button>\r
\r
            <Button variant={variant} size="md" isLoading>\r
              loading\r
            </Button>\r
          </>)}\r
    </div>
}`,...(Hr=x.parameters)===null||Hr===void 0||(Gr=Hr.docs)===null||Gr===void 0?void 0:Gr.source},description:{story:`Visão geral de todas as combinações de variante × tamanho,\r
incluindo os estados desabilitado e loading.\r
Use para validação visual rápida após alterações de token ou tema.`,...($r=x.parameters)===null||$r===void 0||(Zr=$r.docs)===null||Zr===void 0?void 0:Zr.description}}};S.parameters={...S.parameters,docs:{...(Jr=S.parameters)===null||Jr===void 0?void 0:Jr.docs,source:{originalSource:`{
  name: "Contexto real — par primário + secundário",
  render: () => <div style={{
    display: "flex",
    gap: "8px"
  }}>\r
      <div style={{
      width: "fit-content"
    }}>\r
        <Button variant="primary">Salvar alterações</Button>\r
      </div>\r
      <div style={{
      width: "fit-content"
    }}>\r
        <Button variant="secondary">Cancelar</Button>\r
      </div>\r
    </div>
}`,...(Qr=S.parameters)===null||Qr===void 0||(Kr=Qr.docs)===null||Kr===void 0?void 0:Kr.source},description:{story:`Par de botões primário + secundário — padrão mais comum em formulários e modais.\r
Demonstra a hierarquia visual correta entre ação principal e ação de suporte.`,...(Yr=S.parameters)===null||Yr===void 0||(Xr=Yr.docs)===null||Xr===void 0?void 0:Xr.description}}};b.parameters={...b.parameters,docs:{...(ra=b.parameters)===null||ra===void 0?void 0:ra.docs,source:{originalSource:`{
  name: "Contexto real — rodapé de modal",
  parameters: {
    layout: "fullscreen"
  },
  decorators: [Story => <div style={{
    height: "400px"
  }}>\r
        <Story />\r
      </div>],
  render: () => <Modal hideModal={() => {}} isOpen dismissible={true} footer={<FooterModal>\r
          <div style={{
      width: "fit-content",
      display: "flex",
      gap: "var(--s-spacing-xx-small)"
    }}>\r
            <Button variant="warning">Excluir</Button>\r
            <Button variant="secondary">Cancelar</Button>\r
          </div>\r
        </FooterModal>} title="Excluir registro" description="Esta ação não pode ser desfeita. Tem certeza que deseja continuar?" />
}`,...(ea=b.parameters)===null||ea===void 0||(aa=ea.docs)===null||aa===void 0?void 0:aa.source},description:{story:`Rodapé de modal com ação de confirmação e cancelamento.\r
Demonstra o uso do Button em composição com outros elementos.`,...(na=b.parameters)===null||na===void 0||(oa=na.docs)===null||oa===void 0?void 0:oa.description}}};f.parameters={...f.parameters,docs:{...(sa=f.parameters)===null||sa===void 0?void 0:sa.docs,source:{originalSource:`{
  name: "Contexto real — toolbar compacta",
  render: () => <div style={{
    display: "flex",
    gap: "var(--s-spacing-xx-small)",
    padding: "var(--s-spacing-xx-small) var(--s-spacing-x-small)",
    background: "var(--s-color-fill-default)",
    borderRadius: "var(--s-border-radius-medium)",
    border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
    width: "fit-content"
  }}>\r
      <div style={{
      width: "fit-content"
    }}>\r
        <Button size="sm" variant="primary" icon="add">\r
          Novo\r
        </Button>\r
      </div>\r
      <div style={{
      width: "fit-content"
    }}>\r
        <Button size="sm" variant="secondary" icon="download">\r
          Exportar\r
        </Button>\r
      </div>\r
      <div style={{
      width: "fit-content"
    }}>\r
        <Button size="sm" variant="secondary" icon="filter_list">\r
          Filtros\r
        </Button>\r
      </div>\r
    </div>
}`,...(ta=f.parameters)===null||ta===void 0||(ia=ta.docs)===null||ia===void 0?void 0:ia.source},description:{story:"Toolbar compacta com botões sm e ícones.\r\nDemonstra o uso do tamanho `sm` em contextos de alta densidade.",...(la=f.parameters)===null||la===void 0||(da=la.docs)===null||da===void 0?void 0:da.description}}};const fa=["Playground","Primary","Secondary","Success","Warning","SizeMd","SizeSm","SizeComparison","Disabled","Loading","Skeleton","WithIconPrimary","WithIconSecondary","WithIconSuccess","WithIconWarning","AllVariants","PrimarySecondaryPair","ModalFooter","CompactToolbar"];export{x as AllVariants,f as CompactToolbar,p as Disabled,u as Loading,b as ModalFooter,n as Playground,s as Primary,S as PrimarySecondaryPair,i as Secondary,m as SizeComparison,l as SizeMd,c as SizeSm,v as Skeleton,t as Success,d as Warning,_ as WithIconPrimary,y as WithIconSecondary,g as WithIconSuccess,h as WithIconWarning,fa as __namedExportsOrder,ba as default};
