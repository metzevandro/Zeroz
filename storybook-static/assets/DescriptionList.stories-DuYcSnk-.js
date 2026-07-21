import{j as e}from"./iframe-DFdk80Qn.js";/* empty css               */import{B as he}from"./Badge-ov7pbtC0.js";import{P as fe}from"./Progress-BdOiasaT.js";import"./preload-helper-PPVm8Dsz.js";function Se(r){if(r)return{borderBottom:"var(--s-border-width-hairline) solid var(--s-color-border-default)"}}function De({title:r,description:a="—",direction:h,hasDivider:t}){const x=a??"—";return e.jsxs("div",{className:`description-list-root ${h}`,style:Se(t),children:[e.jsx("div",{className:"title",children:r}),e.jsx("div",{className:"description",children:x})]})}const o=({items:r,direction:a})=>{const h=r.length-1;return e.jsx(e.Fragment,{children:r.map((t,x)=>e.jsx(De,{title:t.title,description:t.description,direction:a,hasDivider:x<h},`${t.title}-${x}`))})};var y,f,S,D,w,L,C,b,P,j,R,W,A,B,M,I,O,N,V,z,q,E,T,$,Q,J,G,U,k,F,H,Z,K,X,Y,ee,oe,re,ie,ae,te,ne,se,de,le,ce,me,pe,ue,ve,ge,xe,_e;const je={title:"Components/DescriptionList",component:o,tags:["autodocs"],parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1641-12874"},docs:{description:{component:'\n**DescriptionList** exibe uma lista estruturada de pares rótulo/valor,\nsemanticamente equivalente a um `<dl>` HTML.\n\nCada item gera uma linha com divisor inferior — exceto o último.\nO layout de cada linha é controlado pela prop `direction`.\n\n### Quando usar\n- Detalhar registros: perfil de usuário, resumo de pedido, especificações de produto\n- Apresentar metadados chave/valor de forma legível\n- Revisar dados de formulário antes do envio\n\n### Quando **não** usar\n- Dados tabulares com múltiplas colunas comparáveis → use `Table`\n- Listas simples sem par rótulo/valor → use `<ul>` ou `List`\n- Conteúdo rico com imagens ou ações por linha → use um `Card` ou `ListItem`\n\n### Boas práticas\n- Mantenha os `title` curtos e em comprimento consistente para equilíbrio visual\n- Use `direction="row"` para containers largos (desktop)\n- Use `direction="column"` para containers estreitos ou mobile\n- Quando `description` for desconhecido, passe `"—"` como placeholder em vez de omitir\n        '}}},argTypes:{direction:{control:"radio",options:["row","column"],description:"Layout de cada linha. `row` = rótulo e valor lado a lado; `column` = rótulo acima do valor.",table:{type:{summary:'"row" | "column"'}}},items:{control:"object",description:"Array de pares `{ title, description }`. `description` é opcional — renderiza célula com travessão se omitido. Aceita qualquer tipo de valor",table:{type:{summary:"DescriptionItem[]"}}}}},i=[{title:"Nome completo",description:"Jane Doe"},{title:"E-mail",description:"jane@example.com"},{title:"Plano",description:"Pro"},{title:"Status",description:e.jsx(he,{label:"Active",type:"light",variant:"success"})},{title:"Renovação",description:"15/08/2025"}],ye=[{title:"Nº do pedido",description:"#BR-00482"},{title:"Data",description:"02/06/2026"},{title:"Produto",description:"Design System Starter Kit"},{title:"Qtd.",description:"1"},{title:"Subtotal",description:"R$ 299,00"},{title:"Desconto",description:"–R$ 30,00"},{title:"Total",description:"R$ 269,00"},{title:"Pagamento",description:"Cartão de crédito"},{title:"Parcelas",description:"3× R$ 89,67"},{title:"Situação",description:"Aprovado"}],n={name:"Default",args:{direction:"row",items:i}},s={name:"Direction — row",args:{direction:"row",items:i},parameters:{docs:{description:{story:"Cada linha exibe `title` e `description` lado a lado. Cada coluna ocupa 50% da largura total do container."}}}},d={name:"Direction — column",args:{direction:"column",items:i},parameters:{docs:{description:{story:"Cada linha exibe `title` acima de `description`. Gap entre eles controlado por `--s-spacing-xx-small`."}}}},l={name:"Direction comparison (row vs column)",render:()=>e.jsxs("div",{style:{display:"flex",gap:"48px",alignItems:"flex-start",flexWrap:"wrap"},children:[e.jsxs("div",{style:{flex:1,minWidth:"240px"},children:[e.jsx("p",{style:{marginBottom:"8px",fontWeight:600,fontSize:"12px",textTransform:"uppercase",letterSpacing:"0.5px",color:"gray"},children:"row"}),e.jsx(o,{direction:"row",items:i})]}),e.jsxs("div",{style:{flex:1,minWidth:"240px"},children:[e.jsx("p",{style:{marginBottom:"8px",fontWeight:600,fontSize:"12px",textTransform:"uppercase",letterSpacing:"0.5px",color:"gray"},children:"column"}),e.jsx(o,{direction:"column",items:i})]})]}),parameters:{docs:{description:{story:"Comparação visual de `row` e `column` com os mesmos dados. Use para validar qual direção encaixa melhor no contexto do layout."}}}},c={name:"Long list (10 items)",args:{direction:"row",items:ye},parameters:{docs:{description:{story:"10 itens com divisores entre todos, exceto o último. Valida consistência de espaçamento (`--s-spacing-small`) e alinhamento em listas extensas."}}}},m={name:'With placeholder "—" for missing values',args:{direction:"row",items:[{title:"Nome completo",description:"Jane Doe"},{title:"Telefone"},{title:"Empresa"},{title:"E-mail",description:"jane@example.com"}]},parameters:{docs:{description:{story:'Quando não há valor no description o `"—"` é passado, assim o alinhamento das colunas é preservado e a leitura fica mais clara.'}}}},p={name:"Long description values",args:{direction:"row",items:[{title:"Endereço",description:"Av. Paulista, 1234, Apto 56, Bela Vista, São Paulo – SP, 01310-100"},{title:"Observação",description:"Cliente solicitou entrega no período da tarde, entre 14h e 18h, com assinatura obrigatória."},{title:"Status",description:"Ativo"}]},parameters:{docs:{description:{story:"Valores longos quebram linha naturalmente dentro da célula de 50%. Confirme que o `title` permanece alinhado ao topo (`align-items: start`)."}}}},u={name:"Real-world — order summary",render:()=>e.jsxs("div",{style:{maxWidth:"480px"},children:[e.jsx("p",{style:{marginBottom:"12px",fontWeight:600,fontSize:"14px"},children:"Resumo do pedido"}),e.jsx(o,{direction:"row",items:ye})]}),parameters:{docs:{description:{story:"Caso de uso real: resumo de pedido em tela de confirmação de compra. Demonstra o uso em container de largura limitada."}}}},v={name:"Real-world — mobile profile (column, 320px)",render:()=>e.jsxs("div",{style:{width:"320px"},children:[e.jsx("p",{style:{marginBottom:"12px",fontWeight:600,fontSize:"14px"},children:"Meu perfil"}),e.jsx(o,{direction:"column",items:i})]}),parameters:{docs:{description:{story:"Layout `column` em container de 320 px, simulando uma tela mobile. Cada rótulo fica acima do valor para melhor legibilidade em telas estreitas."}}}},g={name:"Multiple sections",render:()=>e.jsxs("div",{style:{maxWidth:"480px",display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontWeight:600,fontSize:"13px",color:"gray"},children:"DADOS PESSOAIS"}),e.jsx(o,{direction:"row",items:[{title:"Nome",description:"Jane Doe"},{title:"E-mail",description:"jane@example.com"},{title:"Telefone",description:"+55 11 99999-0000"}]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontWeight:600,fontSize:"13px",color:"gray"},children:"PLANO & COBRANÇA"}),e.jsx(o,{direction:"row",items:[{title:"Plano",description:"Pro"},{title:"Valor mensal",description:"R$ 99,00"},{title:"Próxima cobrança",description:"02/07/2026"},{title:"Forma de pagamento",description:"Cartão •••• 4242"}]})]})]}),parameters:{docs:{description:{story:"Múltiplas instâncias de `DescriptionList` usadas como seções separadas dentro de um painel. Cada instância é independente e mantém seus próprios divisores."}}}},_={name:"With complex React components",args:{direction:"row",items:[{title:"Status",description:e.jsx(he,{label:"Active",type:"light",variant:"success"})},{title:"Progress",description:e.jsx(fe,{value:64})}]}};n.parameters={...n.parameters,docs:{...(y=n.parameters)===null||y===void 0?void 0:y.docs,source:{originalSource:`{
  name: "Default",
  args: {
    direction: "row",
    items: accountItems
  }
}`,...(S=n.parameters)===null||S===void 0||(f=S.docs)===null||f===void 0?void 0:f.source},description:{story:"Estado base: layout `row` com 5 pares rótulo/valor.\r\nRepresenta o caso de uso mais comum — detalhe de registro em tela larga.",...(w=n.parameters)===null||w===void 0||(D=w.docs)===null||D===void 0?void 0:D.description}}};s.parameters={...s.parameters,docs:{...(L=s.parameters)===null||L===void 0?void 0:L.docs,source:{originalSource:`{
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
}`,...(b=s.parameters)===null||b===void 0||(C=b.docs)===null||C===void 0?void 0:C.source},description:{story:"Layout `row` — rótulo e valor side by side, cada um ocupando 50% da largura.\r\nIndicado para containers com largura suficiente (≥ 320 px).",...(j=s.parameters)===null||j===void 0||(P=j.docs)===null||P===void 0?void 0:P.description}}};d.parameters={...d.parameters,docs:{...(R=d.parameters)===null||R===void 0?void 0:R.docs,source:{originalSource:`{
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
}`,...(A=d.parameters)===null||A===void 0||(W=A.docs)===null||W===void 0?void 0:W.source},description:{story:"Layout `column` — rótulo empilhado acima do valor.\r\nIndicado para containers estreitos ou breakpoints mobile.",...(M=d.parameters)===null||M===void 0||(B=M.docs)===null||B===void 0?void 0:B.description}}};l.parameters={...l.parameters,docs:{...(I=l.parameters)===null||I===void 0?void 0:I.docs,source:{originalSource:`{
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
}`,...(N=l.parameters)===null||N===void 0||(O=N.docs)===null||O===void 0?void 0:O.source},description:{story:`Comparação lado a lado das duas direções com o mesmo conjunto de dados.\r
Útil para decisão de layout em contextos responsivos.`,...(z=l.parameters)===null||z===void 0||(V=z.docs)===null||V===void 0?void 0:V.description}}};c.parameters={...c.parameters,docs:{...(q=c.parameters)===null||q===void 0?void 0:q.docs,source:{originalSource:`{
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
}`,...(T=c.parameters)===null||T===void 0||(E=T.docs)===null||E===void 0?void 0:E.source},description:{story:`Lista longa com 10 itens — valida o espaçamento uniforme dos divisores\r
e o comportamento visual ao rolar o container.`,...(Q=c.parameters)===null||Q===void 0||($=Q.docs)===null||$===void 0?void 0:$.description}}};m.parameters={...m.parameters,docs:{...(J=m.parameters)===null||J===void 0?void 0:J.docs,source:{originalSource:`{
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
}`,...(U=m.parameters)===null||U===void 0||(G=U.docs)===null||G===void 0?void 0:G.source},description:{story:'Quando não houver valor no campo description é passado "—" como valor default.',...(F=m.parameters)===null||F===void 0||(k=F.docs)===null||k===void 0?void 0:k.description}}};p.parameters={...p.parameters,docs:{...(H=p.parameters)===null||H===void 0?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=p.parameters)===null||K===void 0||(Z=K.docs)===null||Z===void 0?void 0:Z.source},description:{story:"Valores com texto longo — valida quebra de linha e alinhamento\r\nquando `description` ultrapassa uma linha.",...(Y=p.parameters)===null||Y===void 0||(X=Y.docs)===null||X===void 0?void 0:X.description}}};u.parameters={...u.parameters,docs:{...(ee=u.parameters)===null||ee===void 0?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=u.parameters)===null||re===void 0||(oe=re.docs)===null||oe===void 0?void 0:oe.source},description:{story:"Resumo de pedido — cenário real de checkout ou confirmação de compra.",...(ae=u.parameters)===null||ae===void 0||(ie=ae.docs)===null||ie===void 0?void 0:ie.description}}};v.parameters={...v.parameters,docs:{...(te=v.parameters)===null||te===void 0?void 0:te.docs,source:{originalSource:`{
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
}`,...(se=v.parameters)===null||se===void 0||(ne=se.docs)===null||ne===void 0?void 0:ne.source},description:{story:"Perfil de usuário mobile — layout `column` em container estreito (320 px).\r\nSimula o comportamento em telas pequenas.",...(le=v.parameters)===null||le===void 0||(de=le.docs)===null||de===void 0?void 0:de.description}}};g.parameters={...g.parameters,docs:{...(ce=g.parameters)===null||ce===void 0?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=g.parameters)===null||pe===void 0||(me=pe.docs)===null||me===void 0?void 0:me.source},description:{story:`Múltiplas seções — demonstra o uso de várias instâncias\r
como seções distintas dentro de um mesmo painel.`,...(ve=g.parameters)===null||ve===void 0||(ue=ve.docs)===null||ue===void 0?void 0:ue.description}}};_.parameters={..._.parameters,docs:{...(ge=_.parameters)===null||ge===void 0?void 0:ge.docs,source:{originalSource:`{
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
}`,...(_e=_.parameters)===null||_e===void 0||(xe=_e.docs)===null||xe===void 0?void 0:xe.source}}};const Re=["Default","Row","Column","DirectionComparison","LongList","PlaceholderDash","LongValues","OrderSummary","MobileProfile","MultipleSections","ComplexReactNode"];export{d as Column,_ as ComplexReactNode,n as Default,l as DirectionComparison,c as LongList,p as LongValues,v as MobileProfile,g as MultipleSections,u as OrderSummary,m as PlaceholderDash,s as Row,Re as __namedExportsOrder,je as default};
