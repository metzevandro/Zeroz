import{j as e}from"./iframe-CxNvl9BI.js";/* empty css               */import{B as f}from"./Badge-KKabPQMN.js";import{P as E}from"./Progress-DPg4FOfp.js";import"./preload-helper-PPVm8Dsz.js";function D(t){if(t)return{borderBottom:"var(--s-border-width-hairline) solid var(--s-color-border-default)"}}function w({title:t,description:h="—",direction:v,hasDivider:i}){const g=h??"—";return e.jsxs("div",{className:`description-list-root ${v}`,style:D(i),children:[e.jsx("div",{className:"title",children:t}),e.jsx("div",{className:"description",children:g})]})}const o=({items:t,direction:h})=>{const v=t.length-1;return e.jsx(e.Fragment,{children:t.map((i,g)=>e.jsx(w,{title:i.title,description:i.description,direction:h,hasDivider:g<v},`${i.title}-${g}`))})},A={title:"Components/DescriptionList",component:o,tags:["autodocs"],parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1641-12874"},docs:{description:{component:'\n**DescriptionList** exibe uma lista estruturada de pares rótulo/valor,\nsemanticamente equivalente a um `<dl>` HTML.\n\nCada item gera uma linha com divisor inferior — exceto o último.\nO layout de cada linha é controlado pela prop `direction`.\n\n### Quando usar\n- Detalhar registros: perfil de usuário, resumo de pedido, especificações de produto\n- Apresentar metadados chave/valor de forma legível\n- Revisar dados de formulário antes do envio\n\n### Quando **não** usar\n- Dados tabulares com múltiplas colunas comparáveis → use `Table`\n- Listas simples sem par rótulo/valor → use `<ul>` ou `List`\n- Conteúdo rico com imagens ou ações por linha → use um `Card` ou `ListItem`\n\n### Boas práticas\n- Mantenha os `title` curtos e em comprimento consistente para equilíbrio visual\n- Use `direction="row"` para containers largos (desktop)\n- Use `direction="column"` para containers estreitos ou mobile\n- Quando `description` for desconhecido, passe `"—"` como placeholder em vez de omitir\n        '}}},argTypes:{direction:{control:"radio",options:["row","column"],description:"Layout de cada linha. `row` = rótulo e valor lado a lado; `column` = rótulo acima do valor.",table:{type:{summary:'"row" | "column"'}}},items:{control:"object",description:"Array de pares `{ title, description }`. `description` é opcional — renderiza célula com travessão se omitido. Aceita qualquer tipo de valor",table:{type:{summary:"DescriptionItem[]"}}}}},r=[{title:"Nome completo",description:"Jane Doe"},{title:"E-mail",description:"jane@example.com"},{title:"Plano",description:"Pro"},{title:"Status",description:e.jsx(f,{label:"Active",type:"light",variant:"success"})},{title:"Renovação",description:"15/08/2025"}],S=[{title:"Nº do pedido",description:"#BR-00482"},{title:"Data",description:"02/06/2026"},{title:"Produto",description:"Design System Starter Kit"},{title:"Qtd.",description:"1"},{title:"Subtotal",description:"R$ 299,00"},{title:"Desconto",description:"–R$ 30,00"},{title:"Total",description:"R$ 269,00"},{title:"Pagamento",description:"Cartão de crédito"},{title:"Parcelas",description:"3× R$ 89,67"},{title:"Situação",description:"Aprovado"}],n={name:"Default",args:{direction:"row",items:r}},a={name:"Direction — row",args:{direction:"row",items:r},parameters:{docs:{description:{story:"Cada linha exibe `title` e `description` lado a lado. Cada coluna ocupa 50% da largura total do container."}}}},s={name:"Direction — column",args:{direction:"column",items:r},parameters:{docs:{description:{story:"Cada linha exibe `title` acima de `description`. Gap entre eles controlado por `--s-spacing-xx-small`."}}}},c={name:"Direction comparison (row vs column)",render:()=>e.jsxs("div",{style:{display:"flex",gap:"48px",alignItems:"flex-start",flexWrap:"wrap"},children:[e.jsxs("div",{style:{flex:1,minWidth:"240px"},children:[e.jsx("p",{style:{marginBottom:"8px",fontWeight:600,fontSize:"12px",textTransform:"uppercase",letterSpacing:"0.5px",color:"gray"},children:"row"}),e.jsx(o,{direction:"row",items:r})]}),e.jsxs("div",{style:{flex:1,minWidth:"240px"},children:[e.jsx("p",{style:{marginBottom:"8px",fontWeight:600,fontSize:"12px",textTransform:"uppercase",letterSpacing:"0.5px",color:"gray"},children:"column"}),e.jsx(o,{direction:"column",items:r})]})]}),parameters:{docs:{description:{story:"Comparação visual de `row` e `column` com os mesmos dados. Use para validar qual direção encaixa melhor no contexto do layout."}}}},d={name:"Long list (10 items)",args:{direction:"row",items:S},parameters:{docs:{description:{story:"10 itens com divisores entre todos, exceto o último. Valida consistência de espaçamento (`--s-spacing-small`) e alinhamento em listas extensas."}}}},l={name:'With placeholder "—" for missing values',args:{direction:"row",items:[{title:"Nome completo",description:"Jane Doe"},{title:"Telefone"},{title:"Empresa"},{title:"E-mail",description:"jane@example.com"}]},parameters:{docs:{description:{story:'Quando não há valor no description o `"—"` é passado, assim o alinhamento das colunas é preservado e a leitura fica mais clara.'}}}},m={name:"Long description values",args:{direction:"row",items:[{title:"Endereço",description:"Av. Paulista, 1234, Apto 56, Bela Vista, São Paulo – SP, 01310-100"},{title:"Observação",description:"Cliente solicitou entrega no período da tarde, entre 14h e 18h, com assinatura obrigatória."},{title:"Status",description:"Ativo"}]},parameters:{docs:{description:{story:"Valores longos quebram linha naturalmente dentro da célula de 50%. Confirme que o `title` permanece alinhado ao topo (`align-items: start`)."}}}},p={name:"Real-world — order summary",render:()=>e.jsxs("div",{style:{maxWidth:"480px"},children:[e.jsx("p",{style:{marginBottom:"12px",fontWeight:600,fontSize:"14px"},children:"Resumo do pedido"}),e.jsx(o,{direction:"row",items:S})]}),parameters:{docs:{description:{story:"Caso de uso real: resumo de pedido em tela de confirmação de compra. Demonstra o uso em container de largura limitada."}}}},u={name:"Real-world — mobile profile (column, 320px)",render:()=>e.jsxs("div",{style:{width:"320px"},children:[e.jsx("p",{style:{marginBottom:"12px",fontWeight:600,fontSize:"14px"},children:"Meu perfil"}),e.jsx(o,{direction:"column",items:r})]}),parameters:{docs:{description:{story:"Layout `column` em container de 320 px, simulando uma tela mobile. Cada rótulo fica acima do valor para melhor legibilidade em telas estreitas."}}}},x={name:"Multiple sections",render:()=>e.jsxs("div",{style:{maxWidth:"480px",display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontWeight:600,fontSize:"13px",color:"gray"},children:"DADOS PESSOAIS"}),e.jsx(o,{direction:"row",items:[{title:"Nome",description:"Jane Doe"},{title:"E-mail",description:"jane@example.com"},{title:"Telefone",description:"+55 11 99999-0000"}]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontWeight:600,fontSize:"13px",color:"gray"},children:"PLANO & COBRANÇA"}),e.jsx(o,{direction:"row",items:[{title:"Plano",description:"Pro"},{title:"Valor mensal",description:"R$ 99,00"},{title:"Próxima cobrança",description:"02/07/2026"},{title:"Forma de pagamento",description:"Cartão •••• 4242"}]})]})]}),parameters:{docs:{description:{story:"Múltiplas instâncias de `DescriptionList` usadas como seções separadas dentro de um painel. Cada instância é independente e mantém seus próprios divisores."}}}},y={name:"With complex React components",args:{direction:"row",items:[{title:"Status",description:e.jsx(f,{label:"Active",type:"light",variant:"success"})},{title:"Progress",description:e.jsx(E,{value:64})}]}},R=["Default","Row","Column","DirectionComparison","LongList","PlaceholderDash","LongValues","OrderSummary","MobileProfile","MultipleSections","ComplexReactNode"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    direction: "row",
    items: accountItems
  }
}`,...n.parameters?.docs?.source},description:{story:"Estado base: layout `row` com 5 pares rótulo/valor.\r\nRepresenta o caso de uso mais comum — detalhe de registro em tela larga.",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Direction — row",
  args: {
    direction: "row",
    items: accountItems
  },
  parameters: {
    docs: {
      description: {
        story: "Cada linha exibe \`title\` e \`description\` lado a lado. Cada coluna ocupa 50% da largura total do container."
      }
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"Layout `row` — rótulo e valor side by side, cada um ocupando 50% da largura.\r\nIndicado para containers com largura suficiente (≥ 320 px).",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Direction — column",
  args: {
    direction: "column",
    items: accountItems
  },
  parameters: {
    docs: {
      description: {
        story: "Cada linha exibe \`title\` acima de \`description\`. Gap entre eles controlado por \`--s-spacing-xx-small\`."
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"Layout `column` — rótulo empilhado acima do valor.\r\nIndicado para containers estreitos ou breakpoints mobile.",...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Direction comparison (row vs column)",
  render: () => <div style={{
    display: "flex",
    gap: "48px",
    alignItems: "flex-start",
    flexWrap: "wrap"
  }}>\r
      <div style={{
      flex: 1,
      minWidth: "240px"
    }}>\r
        <p style={{
        marginBottom: "8px",
        fontWeight: 600,
        fontSize: "12px",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        color: "gray"
      }}>\r
          row\r
        </p>\r
        <DescriptionList direction="row" items={accountItems} />\r
      </div>\r
      <div style={{
      flex: 1,
      minWidth: "240px"
    }}>\r
        <p style={{
        marginBottom: "8px",
        fontWeight: 600,
        fontSize: "12px",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        color: "gray"
      }}>\r
          column\r
        </p>\r
        <DescriptionList direction="column" items={accountItems} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Comparação visual de \`row\` e \`column\` com os mesmos dados. Use para validar qual direção encaixa melhor no contexto do layout."
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`Comparação lado a lado das duas direções com o mesmo conjunto de dados.\r
Útil para decisão de layout em contextos responsivos.`,...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Long list (10 items)",
  args: {
    direction: "row",
    items: orderItems
  },
  parameters: {
    docs: {
      description: {
        story: "10 itens com divisores entre todos, exceto o último. Valida consistência de espaçamento (\`--s-spacing-small\`) e alinhamento em listas extensas."
      }
    }
  }
}`,...d.parameters?.docs?.source},description:{story:`Lista longa com 10 itens — valida o espaçamento uniforme dos divisores\r
e o comportamento visual ao rolar o container.`,...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "With placeholder \\"—\\" for missing values",
  args: {
    direction: "row",
    items: [{
      title: "Nome completo",
      description: "Jane Doe"
    }, {
      title: "Telefone"
    }, {
      title: "Empresa"
    }, {
      title: "E-mail",
      description: "jane@example.com"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Quando não há valor no description o \`\\"—\\"\` é passado, assim o alinhamento das colunas é preservado e a leitura fica mais clara."
      }
    }
  }
}`,...l.parameters?.docs?.source},description:{story:'Quando não houver valor no campo description é passado "—" como valor default.',...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Long description values",
  args: {
    direction: "row",
    items: [{
      title: "Endereço",
      description: "Av. Paulista, 1234, Apto 56, Bela Vista, São Paulo – SP, 01310-100"
    }, {
      title: "Observação",
      description: "Cliente solicitou entrega no período da tarde, entre 14h e 18h, com assinatura obrigatória."
    }, {
      title: "Status",
      description: "Ativo"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Valores longos quebram linha naturalmente dentro da célula de 50%. Confirme que o \`title\` permanece alinhado ao topo (\`align-items: start\`)."
      }
    }
  }
}`,...m.parameters?.docs?.source},description:{story:"Valores com texto longo — valida quebra de linha e alinhamento\r\nquando `description` ultrapassa uma linha.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Real-world — order summary",
  render: () => <div style={{
    maxWidth: "480px"
  }}>\r
      <p style={{
      marginBottom: "12px",
      fontWeight: 600,
      fontSize: "14px"
    }}>\r
        Resumo do pedido\r
      </p>\r
      <DescriptionList direction="row" items={orderItems} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Caso de uso real: resumo de pedido em tela de confirmação de compra. Demonstra o uso em container de largura limitada."
      }
    }
  }
}`,...p.parameters?.docs?.source},description:{story:"Resumo de pedido — cenário real de checkout ou confirmação de compra.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Real-world — mobile profile (column, 320px)",
  render: () => <div style={{
    width: "320px"
  }}>\r
      <p style={{
      marginBottom: "12px",
      fontWeight: 600,
      fontSize: "14px"
    }}>\r
        Meu perfil\r
      </p>\r
      <DescriptionList direction="column" items={accountItems} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Layout \`column\` em container de 320 px, simulando uma tela mobile. Cada rótulo fica acima do valor para melhor legibilidade em telas estreitas."
      }
    }
  }
}`,...u.parameters?.docs?.source},description:{story:"Perfil de usuário mobile — layout `column` em container estreito (320 px).\r\nSimula o comportamento em telas pequenas.",...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Multiple sections",
  render: () => <div style={{
    maxWidth: "480px",
    display: "flex",
    flexDirection: "column",
    gap: "32px"
  }}>\r
      <div>\r
        <p style={{
        marginBottom: "8px",
        fontWeight: 600,
        fontSize: "13px",
        color: "gray"
      }}>\r
          DADOS PESSOAIS\r
        </p>\r
        <DescriptionList direction="row" items={[{
        title: "Nome",
        description: "Jane Doe"
      }, {
        title: "E-mail",
        description: "jane@example.com"
      }, {
        title: "Telefone",
        description: "+55 11 99999-0000"
      }]} />\r
      </div>\r
      <div>\r
        <p style={{
        marginBottom: "8px",
        fontWeight: 600,
        fontSize: "13px",
        color: "gray"
      }}>\r
          PLANO & COBRANÇA\r
        </p>\r
        <DescriptionList direction="row" items={[{
        title: "Plano",
        description: "Pro"
      }, {
        title: "Valor mensal",
        description: "R$ 99,00"
      }, {
        title: "Próxima cobrança",
        description: "02/07/2026"
      }, {
        title: "Forma de pagamento",
        description: "Cartão •••• 4242"
      }]} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Múltiplas instâncias de \`DescriptionList\` usadas como seções separadas dentro de um painel. Cada instância é independente e mantém seus próprios divisores."
      }
    }
  }
}`,...x.parameters?.docs?.source},description:{story:`Múltiplas seções — demonstra o uso de várias instâncias\r
como seções distintas dentro de um mesmo painel.`,...x.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "With complex React components",
  args: {
    direction: "row",
    items: [{
      title: "Status",
      description: <Badge label="Active" type="light" variant="success" />
    }, {
      title: "Progress",
      description: <Progress value={64} />
    }]
  }
}`,...y.parameters?.docs?.source}}};export{s as Column,y as ComplexReactNode,n as Default,c as DirectionComparison,d as LongList,m as LongValues,u as MobileProfile,x as MultipleSections,p as OrderSummary,l as PlaceholderDash,a as Row,R as __namedExportsOrder,A as default};
