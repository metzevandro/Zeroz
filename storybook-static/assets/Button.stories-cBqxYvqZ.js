import{j as r}from"./iframe-CxNvl9BI.js";/* empty css               */import{B as a}from"./Button-CH6qqEEx.js";import{M as S,F as B}from"./ModalSlots-z_Gx3EzK.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-Bqm0CoJD.js";import"./Loading-DhvOqAup.js";import"./Skeleton-C80QNm7w.js";import"./ButtonIcon-BvrW2_xY.js";const P={title:"Components/Button",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'\nO **Button** é o elemento interativo principal para acionar ações na interface.\n\nSuporta quatro variantes semânticas, dois tamanhos, ícone opcional e estados\nde loading e skeleton integrados.\n\n> Nunca use `icon` sem `children` — o componente lança um erro em desenvolvimento\n> nesse caso. Para botões somente-ícone, use o componente `ButtonIcon`.\n\n### Variantes\n| variant     | uso recomendado                                              |\n|-------------|--------------------------------------------------------------|\n| `primary`   | Ação principal da página ou formulário (CTA)                 |\n| `secondary` | Ações de suporte: "Cancelar", "Voltar", "Ver mais"           |\n| `success`   | Confirmações positivas: "Confirmar", "Marcar como concluído" |\n| `warning`   | Ações destrutivas ou cautelosas: "Excluir", "Sobrescrever"   |\n\n### Estados\n- **`disabled`** — desativa nativamente via atributo HTML; define `aria-disabled`\n- **`isLoading`** — exibe spinner, bloqueia interação e define `aria-busy="true"`\n- **`isSkeleton`** — substitui o botão por um `<Skeleton>` com as mesmas dimensões\n\n### Acessibilidade\n- Sempre forneça um label descritivo em `children`\n- Use `ariaLabel` quando o label visual não for autoexplicativo para leitores de tela\n- `isLoading` define `aria-busy` automaticamente — não é necessário fazer isso manualmente\n        '}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10010"}},argTypes:{variant:{control:"select",options:["primary","secondary","success","warning"],description:"Estilo visual e semântico do botão. Define cor de fundo, texto e comportamento de hover.",table:{defaultValue:{summary:"primary"},type:{summary:'"primary" | "secondary" | "success" | "warning"'}}},size:{control:"radio",options:["sm","md"],description:"Tamanho do botão. `sm` = 32px de altura (UIs compactas). `md` = 40px (padrão).",table:{defaultValue:{summary:"md"},type:{summary:'"sm" | "md"'}}},icon:{control:"text",description:"Nome do ícone renderizado antes do label. Deve sempre ser combinado com `children`.",table:{type:{summary:"string"}}},isLoading:{control:"boolean",description:"Exibe spinner de carregamento e bloqueia interação. Define `aria-busy` automaticamente.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},isSkeleton:{control:"boolean",description:"Substitui o botão por um `<Skeleton>` com as mesmas dimensões. Use para preservar layout durante carregamento da página.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Desativa o botão nativamente. Define `aria-disabled` e bloqueia interação.",table:{type:{summary:"boolean"}}},ariaLabel:{control:"text",description:"Label acessível para leitores de tela. Use quando o label visual não for suficientemente descritivo.",table:{type:{summary:"string"}}},children:{control:"text",description:"Texto do label do botão. Sempre obrigatório — inclusive quando `icon` é fornecido.",table:{type:{summary:"React.ReactNode"}}}}},n=({children:e})=>r.jsx("div",{style:{width:"fit-content"},children:e}),o={name:"Playground",args:{children:"Button",variant:"primary",size:"md",isLoading:!1,isSkeleton:!1,disabled:!1},render:e=>r.jsx(n,{children:r.jsx(a,{...e})})},s={name:"Primary",args:{children:"Salvar alterações",variant:"primary"},render:e=>r.jsx(n,{children:r.jsx(a,{...e})})},i={name:"Secondary",args:{children:"Cancelar",variant:"secondary"},render:e=>r.jsx(n,{children:r.jsx(a,{...e})})},t={name:"Success",args:{children:"Confirmar",variant:"success"},render:e=>r.jsx(n,{children:r.jsx(a,{...e})})},d={name:"Warning",args:{children:"Excluir",variant:"warning"},render:e=>r.jsx(n,{children:r.jsx(a,{...e})})},c={name:"Tamanho — md (padrão)",args:{children:"Botão médio",size:"md",variant:"primary"},render:e=>r.jsx(n,{children:r.jsx(a,{...e})})},l={name:"Tamanho — sm",args:{children:"Botão pequeno",size:"sm",variant:"primary"},render:e=>r.jsx(n,{children:r.jsx(a,{...e})})},m={name:"Comparativo de tamanhos",render:()=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[r.jsx("div",{style:{textAlign:"center"},children:r.jsx("div",{style:{width:"fit-content"},children:r.jsx(a,{size:"md",variant:"primary",children:"md · 40px"})})}),r.jsx("div",{style:{textAlign:"center"},children:r.jsx("div",{style:{width:"fit-content"},children:r.jsx(a,{size:"sm",variant:"primary",children:"sm · 32px"})})})]})},p={name:"Estado — desabilitado",args:{children:"Indisponível",disabled:!0,variant:"primary"},render:e=>r.jsx(n,{children:r.jsx(a,{...e})})},u={name:"Estado — loading",args:{children:"Salvando…",isLoading:!0,variant:"primary"},render:e=>r.jsx(n,{children:r.jsx(a,{...e})})},x={name:"Estado — skeleton",args:{children:"Enviar",isSkeleton:!0,variant:"primary"},render:e=>r.jsx(n,{children:r.jsx(a,{...e})})},v={name:"Com ícone — Primary",args:{children:"Adicionar item",icon:"add",variant:"primary"},render:e=>r.jsx(n,{children:r.jsx(a,{...e})})},g={name:"Com ícone — Secondary",args:{children:"Exportar",icon:"download",variant:"secondary"},render:e=>r.jsx(n,{children:r.jsx(a,{...e})})},y={name:"Com ícone — Success",args:{children:"Confirmar",icon:"check",variant:"success"},render:e=>r.jsx(n,{children:r.jsx(a,{...e})})},h={name:"Com ícone — Warning",args:{children:"Excluir",icon:"delete",variant:"warning"},render:e=>r.jsx(n,{children:r.jsx(a,{...e})})},E={name:"Matriz completa — variantes × tamanhos × estados",render:()=>r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"120px repeat(4, auto)",gap:"12px 16px",alignItems:"start"},children:[r.jsx("span",{}),r.jsx("small",{children:"md"}),r.jsx("small",{children:"sm"}),r.jsx("small",{children:"disabled"}),r.jsx("small",{children:"loading"}),["primary","secondary","success","warning"].map(e=>r.jsxs(r.Fragment,{children:[r.jsx("small",{children:e},`${e}-label`),r.jsx(a,{variant:e,size:"md",children:e}),r.jsx(a,{variant:e,size:"sm",children:e}),r.jsx(a,{variant:e,size:"md",disabled:!0,children:"desabilitado"}),r.jsx(a,{variant:e,size:"md",isLoading:!0,children:"loading"})]}))]})},b={name:"Contexto real — par primário + secundário",render:()=>r.jsxs("div",{style:{display:"flex",gap:"8px"},children:[r.jsx("div",{style:{width:"fit-content"},children:r.jsx(a,{variant:"primary",children:"Salvar alterações"})}),r.jsx("div",{style:{width:"fit-content"},children:r.jsx(a,{variant:"secondary",children:"Cancelar"})})]})},f={name:"Contexto real — rodapé de modal",parameters:{layout:"fullscreen"},decorators:[e=>r.jsx("div",{style:{height:"400px"},children:r.jsx(e,{})})],render:()=>r.jsx(S,{hideModal:()=>{},isOpen:!0,dismissible:!0,footer:r.jsx(B,{children:r.jsxs("div",{style:{width:"fit-content",display:"flex",gap:"var(--s-spacing-xx-small)"},children:[r.jsx(a,{variant:"warning",children:"Excluir"}),r.jsx(a,{variant:"secondary",children:"Cancelar"})]})}),title:"Excluir registro",description:"Esta ação não pode ser desfeita. Tem certeza que deseja continuar?"})},j={name:"Contexto real — toolbar compacta",render:()=>r.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-xx-small)",padding:"var(--s-spacing-xx-small) var(--s-spacing-x-small)",background:"var(--s-color-fill-default)",borderRadius:"var(--s-border-radius-medium)",border:"var(--s-border-width-hairline) solid var(--s-color-border-default)",width:"fit-content"},children:[r.jsx("div",{style:{width:"fit-content"},children:r.jsx(a,{size:"sm",variant:"primary",icon:"add",children:"Novo"})}),r.jsx("div",{style:{width:"fit-content"},children:r.jsx(a,{size:"sm",variant:"secondary",icon:"download",children:"Exportar"})}),r.jsx("div",{style:{width:"fit-content"},children:r.jsx(a,{size:"sm",variant:"secondary",icon:"filter_list",children:"Filtros"})})]})},T=["Playground","Primary","Secondary","Success","Warning","SizeMd","SizeSm","SizeComparison","Disabled","Loading","Skeleton","WithIconPrimary","WithIconSecondary","WithIconSuccess","WithIconWarning","AllVariants","PrimarySecondaryPair","ModalFooter","CompactToolbar"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:`Story interativa para explorar todas as props via Controls.\r
Ponto de entrada recomendado para inspecionar o componente.`,...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    children: "Salvar alterações",
    variant: "primary"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...s.parameters?.docs?.source},description:{story:`Variante primária — ação principal da página ou formulário (CTA).\r
Use apenas uma vez por contexto visual para manter hierarquia clara.`,...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Secondary",
  args: {
    children: "Cancelar",
    variant: "secondary"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...i.parameters?.docs?.source},description:{story:`Variante secundária — ações de suporte ou alternativas à ação principal.\r
Use para "Cancelar", "Voltar" ou qualquer ação de menor prioridade.`,...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Success",
  args: {
    children: "Confirmar",
    variant: "success"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...t.parameters?.docs?.source},description:{story:`Variante de sucesso — confirmações e ações com resultado positivo.\r
Use para "Confirmar", "Marcar como concluído", "Aprovar".`,...t.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Warning",
  args: {
    children: "Excluir",
    variant: "warning"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...d.parameters?.docs?.source},description:{story:`Variante de atenção — ações destrutivas ou que requerem cautela.\r
Use para "Excluir", "Sobrescrever", "Revogar acesso".`,...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Tamanho — md (padrão)",
  args: {
    children: "Botão médio",
    size: "md",
    variant: "primary"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...c.parameters?.docs?.source},description:{story:`Tamanho padrão — 40px de altura.\r
Indicado para a maioria dos contextos: formulários, modais, páginas.`,...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Tamanho — sm",
  args: {
    children: "Botão pequeno",
    size: "sm",
    variant: "primary"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...l.parameters?.docs?.source},description:{story:`Tamanho compacto — 32px de altura.\r
Indicado para toolbars, filtros, tabelas e UIs com espaço reduzido.`,...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"Comparativo visual dos dois tamanhos disponíveis lado a lado.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Estado — desabilitado",
  args: {
    children: "Indisponível",
    disabled: true,
    variant: "primary"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...p.parameters?.docs?.source},description:{story:"Estado desabilitado — bloqueia interação nativamente.\r\nDefine `aria-disabled` e aplica opacidade reduzida.\r\nUse quando a ação não está disponível no contexto atual.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Estado — loading",
  args: {
    children: "Salvando…",
    isLoading: true,
    variant: "primary"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...u.parameters?.docs?.source},description:{story:'Estado de loading — exibe spinner e bloqueia interação.\r\nDefine `aria-busy="true"` automaticamente.\r\nUse vinculado à operação assíncrona que o acionou (ex: submit de formulário).',...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Estado — skeleton",
  args: {
    children: "Enviar",
    isSkeleton: true,
    variant: "primary"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...x.parameters?.docs?.source},description:{story:`Estado skeleton — substitui o botão por um placeholder com as mesmas dimensões.\r
Use para preservar o layout durante carregamento inicial da página,\r
antes dos dados e ações estarem disponíveis.`,...x.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Com ícone — Primary",
  args: {
    children: "Adicionar item",
    icon: "add",
    variant: "primary"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...v.parameters?.docs?.source},description:{story:`Botão primário com ícone antes do label.\r
O ícone reforça visualmente a ação sem substituir o texto.`,...v.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Com ícone — Secondary",
  args: {
    children: "Exportar",
    icon: "download",
    variant: "secondary"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...g.parameters?.docs?.source},description:{story:"Botão secundário com ícone — padrão comum em ações de exportação e download.",...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Com ícone — Success",
  args: {
    children: "Confirmar",
    icon: "check",
    variant: "success"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...y.parameters?.docs?.source},description:{story:"Botão de sucesso com ícone — reforça visualmente o resultado positivo da ação.",...y.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Com ícone — Warning",
  args: {
    children: "Excluir",
    icon: "delete",
    variant: "warning"
  },
  render: args => <Wrap>\r
      <Button {...args} />\r
    </Wrap>
}`,...h.parameters?.docs?.source},description:{story:"Botão de atenção com ícone — o ícone amplifica o sinal de alerta da ação destrutiva.",...h.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`Visão geral de todas as combinações de variante × tamanho,\r
incluindo os estados desabilitado e loading.\r
Use para validação visual rápida após alterações de token ou tema.`,...E.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`Par de botões primário + secundário — padrão mais comum em formulários e modais.\r
Demonstra a hierarquia visual correta entre ação principal e ação de suporte.`,...b.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`Rodapé de modal com ação de confirmação e cancelamento.\r
Demonstra o uso do Button em composição com outros elementos.`,...f.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"Toolbar compacta com botões sm e ícones.\r\nDemonstra o uso do tamanho `sm` em contextos de alta densidade.",...j.parameters?.docs?.description}}};export{E as AllVariants,j as CompactToolbar,p as Disabled,u as Loading,f as ModalFooter,o as Playground,s as Primary,b as PrimarySecondaryPair,i as Secondary,m as SizeComparison,c as SizeMd,l as SizeSm,x as Skeleton,t as Success,d as Warning,v as WithIconPrimary,g as WithIconSecondary,y as WithIconSuccess,h as WithIconWarning,T as __namedExportsOrder,P as default};
