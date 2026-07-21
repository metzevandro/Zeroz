import{j as r}from"./iframe-C_0AXUlQ.js";import{C as e}from"./Card-KW6YZr72.js";import{B as Hr}from"./Badge-DGiT92MA.js";import{A as br}from"./Avatar-CdFpUDbg.js";/* empty css               */import{B as o}from"./Button-QvF2SVTw.js";import"./preload-helper-PPVm8Dsz.js";import"./Skeleton-DNOAWNPr.js";import"./Icon-C3Uq1gPi.js";import"./Loading-CCCSPJuP.js";var h,C,y,j,_,f,H,S,P,b,F,A,I,W,z,B,w,E,D,L,G,R,O,T,q,M,V,k,J,$,N,Q,U,Z,K,X,Y,rr,er,ar,or,nr,sr,dr,tr,ir,lr,cr,pr,mr,ur,xr,vr,gr,hr,Cr,yr,jr,_r,fr;const Gr={title:"Components/Card",component:e,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
O **Card** é uma superfície contida para agrupar conteúdo e ações relacionadas.

Implementado como **compound component** — a composição é feita via subcomponentes
passados como \`children\`, na ordem desejada.

### Subcomponentes
| Subcomponente   | Descrição                                                                 |
|-----------------|---------------------------------------------------------------------------|
| \`Card.Image\`    | Imagem de largura total no topo do card (máx. 288px de altura)            |
| \`Card.Header\`   | Título e descrição do card                                                |
| \`Card.Content\`  | Corpo principal — formulários, listas, texto, dados                       |
| \`Card.Footer\`   | Rodapé com fundo distinto — ações, botões ou metadados                    |

### Regras de composição
- **\`Card.Header\` e/ou **\`Card.Content\` é obrigatório** — é o mínimo aceitável; os demais slots são opcionais e complementares
- A ordem visual recomendada é: **Image → Header → Content → Footer**
- \`Card.Image\` e \`Card.Footer\` nunca devem ser usados sem \`Card.Header\` e/ou \`Card.Content\`
- Nunca passe slots como props — componha sempre via \`children\`
- O card ocupa 100% da largura do container pai — controle o tamanho pelo layout externo

### Quando usar
- Cards de produto, funcionalidade ou plano de preços
- Widgets de resumo em dashboards
- Cards de perfil ou entidade
- Painéis de configuração ou seleção de opção

### Quando não usar
- Para exibir uma única linha de dado — prefira um item de lista ou linha de tabela
- Como substituto de modal — se o conteúdo requer foco total, use \`Aside\` ou \`Modal\`
- Com muitos slots vazios — um card sem conteúdo significativo não agrega valor
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10014"}},argTypes:{children:{control:!1,description:"Conteúdo do card. Componha usando os subcomponentes `Card.Image`, `Card.Header`, `Card.Content` e `Card.Footer`.",table:{type:{summary:"React.ReactNode"}}}}},g="https://placehold.co/600x288",n={name:"Playground",decorators:[a=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(a,{})})],render:()=>r.jsxs(e,{children:[r.jsx(e.Image,{children:r.jsx("img",{src:g,alt:"Imagem de exemplo"})}),r.jsxs(e.Header,{style:{gap:"var(--s-spacing-xx-small)"},children:[r.jsx("h2",{children:"Título do card"}),r.jsx("p",{children:"Texto de suporte descrevendo o conteúdo do card."})]}),r.jsx(e.Content,{children:r.jsx("p",{children:"Conteúdo principal do card."})}),r.jsx(e.Footer,{children:r.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-xx-small)",width:"fit-content"},children:[r.jsx(o,{variant:"primary",size:"md",children:"Confirmar"}),r.jsx(o,{variant:"secondary",size:"md",children:"Cancelar"})]})})]})},s={name:"Composição — somente Header",decorators:[a=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(a,{})})],render:()=>r.jsx(e,{children:r.jsxs(e.Header,{style:{gap:"var(--s-spacing-xx-small)"},children:[r.jsx("h2",{children:"Card mínimo"}),r.jsx("p",{children:"Apenas o cabeçalho — útil para avisos ou resumos simples."})]})})},d={name:"Composição — Header + Content",decorators:[a=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(a,{})})],render:()=>r.jsxs(e,{children:[r.jsxs(e.Header,{style:{gap:"var(--s-spacing-xx-small)"},children:[r.jsx("h2",{children:"Configurações"}),r.jsx("p",{children:"Gerencie as preferências da sua conta."})]}),r.jsx(e.Content,{children:r.jsx("p",{children:"Área de conteúdo para campos de formulário ou informações detalhadas."})})]})},t={name:"Composição — Header + Content + Footer",decorators:[a=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(a,{})})],render:()=>r.jsxs(e,{children:[r.jsxs(e.Header,{style:{gap:"var(--s-spacing-xx-small)"},children:[r.jsx("h2",{children:"Confirmar ação"}),r.jsx("p",{children:"Deseja fazer esta ação?"})]}),r.jsx(e.Content,{children:r.jsx("p",{children:"Tem certeza que deseja prosseguir com a operação?"})}),r.jsx(e.Footer,{children:r.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-xx-small)",width:"fit-content"},children:[r.jsx(o,{variant:"primary",size:"md",children:"Confirmar"}),r.jsx(o,{variant:"secondary",size:"md",children:"Cancelar"})]})})]})},i={name:"Composição — Header + Image",decorators:[a=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(a,{})})],render:()=>r.jsxs(e,{children:[r.jsx(e.Image,{children:r.jsx("img",{src:g,alt:"Visual do card"})}),r.jsxs(e.Header,{style:{gap:"var(--s-spacing-xx-small)"},children:[r.jsx("h2",{children:"Nome do produto"}),r.jsx("p",{children:"Breve descrição do produto ou funcionalidade."})]})]})},l={name:"Composição — todos os slots",decorators:[a=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(a,{})})],render:()=>r.jsxs(e,{children:[r.jsx(e.Image,{children:r.jsx("img",{src:g,alt:"Visual do card"})}),r.jsxs(e.Header,{style:{gap:"var(--s-spacing-xx-small)"},children:[r.jsx("h2",{children:"Primeiros passos"}),r.jsx("p",{children:"Configure seu workspace em poucos minutos."})]}),r.jsx(e.Content,{children:r.jsx("p",{children:"Fluxo de onboarding guiado com instruções passo a passo."})}),r.jsx(e.Footer,{children:r.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-xx-small)",width:"fit-content"},children:[r.jsx(o,{variant:"primary",size:"md",children:"Começar agora"}),r.jsx(o,{variant:"secondary",size:"md",children:"Ver mais tarde"})]})})]})},c={name:"Contexto real — plano de preços",decorators:[a=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(a,{})})],render:()=>r.jsxs(e,{children:[r.jsxs(e.Header,{style:{gap:"var(--s-spacing-xx-small)"},children:[r.jsx("h2",{children:"Plano Pro"}),r.jsx("p",{children:"Tudo que você precisa para escalar seu time."})]}),r.jsxs(e.Content,{children:[r.jsxs("p",{style:{fontSize:"32px",fontWeight:700,margin:"0 0 12px",color:"var(--s-color-content-default)"},children:["R$ 249",r.jsx("small",{style:{fontSize:"16px",fontWeight:400},children:"/mês"})]}),r.jsxs("ul",{style:{paddingLeft:"16px",margin:0,display:"flex",flexDirection:"column",gap:"6px",color:"var(--s-color-content-default)"},children:[r.jsx("li",{style:{font:"var(--s-typography-paragraph-regular)"},children:"Projetos ilimitados"}),r.jsx("li",{style:{font:"var(--s-typography-paragraph-regular)"},children:"Suporte prioritário"}),r.jsx("li",{style:{font:"var(--s-typography-paragraph-regular)"},children:"Analytics avançado"}),r.jsx("li",{style:{font:"var(--s-typography-paragraph-regular)"},children:"Integrações premium"})]})]}),r.jsx(e.Footer,{children:r.jsx("div",{style:{display:"flex",gap:"var(--s-spacing-xx-small)",width:"fit-content"},children:r.jsx(o,{variant:"primary",children:"Assinar agora"})})})]})},p={name:"Contexto real — perfil de usuário",decorators:[a=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(a,{})})],render:()=>r.jsxs(e,{children:[r.jsx(e.Image,{children:r.jsx("img",{src:"https://i.pravatar.cc/600?img=12",alt:"Foto de Sarah Johnson"})}),r.jsxs(e.Header,{style:{gap:"var(--s-spacing-xx-small)"},children:[r.jsx(br,{size:"md",src:"https://i.pravatar.cc/150?img=12"}),r.jsxs("div",{children:[r.jsx("h2",{style:{margin:0},children:"Sarah Johnson"}),r.jsx("p",{style:{margin:0},children:"Product Designer Sênior"})]})]}),r.jsx(e.Footer,{children:r.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-xx-small)",width:"fit-content"},children:[r.jsx(o,{variant:"primary",size:"md",children:"Mensagem"}),r.jsx(o,{variant:"secondary",size:"md",children:"Ver perfil"})]})})]})},m={name:"Contexto real — artigo ou post",decorators:[a=>r.jsx("div",{style:{maxWidth:"600px"},children:r.jsx(a,{})})],render:()=>r.jsxs(e,{children:[r.jsx(e.Image,{children:r.jsx("img",{src:g,alt:"Capa do artigo"})}),r.jsxs(e.Header,{style:{gap:"var(--s-spacing-xx-small)"},children:[r.jsx("div",{style:{marginBottom:"var(--s-spacing-nano)"},children:r.jsx(Hr,{label:"Design System",type:"light",variant:"primary"})}),r.jsx("h2",{children:"Como documentar componentes de forma eficiente"}),r.jsx("p",{children:"Boas práticas para Storybook, JSDoc e design tokens em projetos reais."})]}),r.jsx(e.Footer,{children:r.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-xx-small)",justifyContent:"space-between",alignItems:"center"},children:[r.jsx(o,{variant:"secondary",size:"md",style:{width:"fit-content"},children:"Ler artigo"}),r.jsx("small",{style:{color:"var(--s-color-content-default)",whiteSpace:"nowrap"},children:"5 min de leitura"})]})})]})},u={name:"Contexto real — widget de dashboard",decorators:[a=>r.jsx("div",{style:{maxWidth:"300px"},children:r.jsx(a,{})})],render:()=>r.jsx(e,{children:r.jsxs(e.Content,{children:[r.jsx("p",{style:{margin:0},children:"Receita do mês"}),r.jsx("h1",{style:{margin:"0 0 4px",color:"var(--s-color-content-default)"},children:"R$ 48.290"}),r.jsxs("div",{style:{display:"flex",gap:"var(--s-spacing-xx-small)",width:"fit-content"},children:[r.jsx(Hr,{label:"+12,4%",type:"light",variant:"success"}),r.jsx("small",{style:{color:"var(--s-color-content-default)"},children:"em relação ao mês anterior"})]})]})})},x={name:"Grid de cards",decorators:[a=>r.jsx("div",{style:{width:"100%"},children:r.jsx(a,{})})],render:()=>r.jsx("div",{style:{display:"grid",width:"100%",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--s-spacing-medium)"},children:[{plan:"Starter",price:"Grátis",desc:"Para projetos pessoais e experimentação."},{plan:"Pro",price:"R$ 249/mês",desc:"Para times que precisam de mais poder."},{plan:"Enterprise",price:"Sob consulta",desc:"Para grandes organizações com SLA."}].map(({plan:a,price:Sr,desc:Pr})=>r.jsxs(e,{children:[r.jsxs(e.Header,{children:[r.jsx("h2",{children:a}),r.jsx("p",{children:Pr})]}),r.jsx(e.Content,{children:r.jsx("p",{style:{color:"var(--s-color-content-default)"},children:Sr})}),r.jsx(e.Footer,{children:r.jsx("div",{style:{display:"flex",gap:"var(--s-spacing-xx-small)",width:"fit-content"},children:r.jsx(o,{variant:a==="Pro"?"primary":"secondary",size:"md",children:"Escolher plano"})})})]},a))})},v={name:"Edge case — conteúdo longo",decorators:[a=>r.jsx("div",{style:{maxWidth:"500px"},children:r.jsx(a,{})})],render:()=>r.jsxs(e,{children:[r.jsxs(e.Header,{style:{gap:"var(--s-spacing-xx-small)"},children:[r.jsx("h2",{children:"Título com texto longo para validar o comportamento de quebra de linha no cabeçalho"}),r.jsx("p",{children:"Esta é uma descrição intencionalmente longa para verificar se o espaçamento e a tipografia do Card.Header se comportam corretamente quando o conteúdo ultrapassa uma única linha — sem vazar para fora do card ou comprimir outros slots."})]}),r.jsx(e.Content,{children:r.jsx("p",{children:"Conteúdo principal permanece abaixo do header sem sobreposição."})}),r.jsx(e.Footer,{children:r.jsx("div",{style:{display:"flex",gap:"var(--s-spacing-xx-small)",width:"fit-content"},children:r.jsx(o,{variant:"secondary",size:"md",children:"Ação"})})})]})};n.parameters={...n.parameters,docs:{...(h=n.parameters)===null||h===void 0?void 0:h.docs,source:{originalSource:`{
  name: "Playground",
  decorators: [Story => <div style={{
    maxWidth: "300px"
  }}>\r
        <Story />\r
      </div>],
  render: () => <Card>\r
      <Card.Image>\r
        <img src={PLACEHOLDER_IMAGE} alt="Imagem de exemplo" />\r
      </Card.Image>\r
      <Card.Header style={{
      gap: "var(--s-spacing-xx-small)"
    }}>\r
        <h2>Título do card</h2>\r
        <p>Texto de suporte descrevendo o conteúdo do card.</p>\r
      </Card.Header>\r
      <Card.Content>\r
        <p>Conteúdo principal do card.</p>\r
      </Card.Content>\r
      <Card.Footer>\r
        <div style={{
        display: "flex",
        gap: "var(--s-spacing-xx-small)",
        width: "fit-content"
      }}>\r
          <Button variant="primary" size="md">\r
            Confirmar\r
          </Button>\r
          <Button variant="secondary" size="md">\r
            Cancelar\r
          </Button>\r
        </div>\r
      </Card.Footer>\r
    </Card>
}`,...(y=n.parameters)===null||y===void 0||(C=y.docs)===null||C===void 0?void 0:C.source},description:{story:`Card completo com todos os subcomponentes ativos.\r
Ponto de entrada recomendado para inspecionar a composição do componente.`,...(_=n.parameters)===null||_===void 0||(j=_.docs)===null||j===void 0?void 0:j.description}}};s.parameters={...s.parameters,docs:{...(f=s.parameters)===null||f===void 0?void 0:f.docs,source:{originalSource:`{
  name: "Composição — somente Header",
  decorators: [Story => <div style={{
    maxWidth: "300px"
  }}>\r
        <Story />\r
      </div>],
  render: () => <Card>\r
      <Card.Header style={{
      gap: "var(--s-spacing-xx-small)"
    }}>\r
        <h2>Card mínimo</h2>\r
        <p>Apenas o cabeçalho — útil para avisos ou resumos simples.</p>\r
      </Card.Header>\r
    </Card>
}`,...(S=s.parameters)===null||S===void 0||(H=S.docs)===null||H===void 0?void 0:H.source},description:{story:`Apenas o Header — composição mínima com valor informacional.\r
Útil para avisos, resumos curtos ou notificações sem ação.`,...(b=s.parameters)===null||b===void 0||(P=b.docs)===null||P===void 0?void 0:P.description}}};d.parameters={...d.parameters,docs:{...(F=d.parameters)===null||F===void 0?void 0:F.docs,source:{originalSource:`{
  name: "Composição — Header + Content",
  decorators: [Story => <div style={{
    maxWidth: "300px"
  }}>\r
        <Story />\r
      </div>],
  render: () => <Card>\r
      <Card.Header style={{
      gap: "var(--s-spacing-xx-small)"
    }}>\r
        <h2>Configurações</h2>\r
        <p>Gerencie as preferências da sua conta.</p>\r
      </Card.Header>\r
      <Card.Content>\r
        <p>\r
          Área de conteúdo para campos de formulário ou informações detalhadas.\r
        </p>\r
      </Card.Content>\r
    </Card>
}`,...(I=d.parameters)===null||I===void 0||(A=I.docs)===null||A===void 0?void 0:A.source},description:{story:`Header + Content — composição para conteúdo informativo sem ação no rodapé.\r
Padrão comum em widgets de dashboard e painéis de configuração.`,...(z=d.parameters)===null||z===void 0||(W=z.docs)===null||W===void 0?void 0:W.description}}};t.parameters={...t.parameters,docs:{...(B=t.parameters)===null||B===void 0?void 0:B.docs,source:{originalSource:`{
  name: "Composição — Header + Content + Footer",
  decorators: [Story => <div style={{
    maxWidth: "300px"
  }}>\r
        <Story />\r
      </div>],
  render: () => <Card>\r
      <Card.Header style={{
      gap: "var(--s-spacing-xx-small)"
    }}>\r
        <h2>Confirmar ação</h2>\r
        <p>Deseja fazer esta ação?</p>\r
      </Card.Header>\r
      <Card.Content>\r
        <p>Tem certeza que deseja prosseguir com a operação?</p>\r
      </Card.Content>\r
      <Card.Footer>\r
        <div style={{
        display: "flex",
        gap: "var(--s-spacing-xx-small)",
        width: "fit-content"
      }}>\r
          <Button variant="primary" size="md">\r
            Confirmar\r
          </Button>\r
          <Button variant="secondary" size="md">\r
            Cancelar\r
          </Button>\r
        </div>\r
      </Card.Footer>\r
    </Card>
}`,...(E=t.parameters)===null||E===void 0||(w=E.docs)===null||w===void 0?void 0:w.source},description:{story:`Header + Content + Footer — composição padrão para cards com ação.\r
Use quando o card precisa de botões ou links de ação no rodapé.`,...(L=t.parameters)===null||L===void 0||(D=L.docs)===null||D===void 0?void 0:D.description}}};i.parameters={...i.parameters,docs:{...(G=i.parameters)===null||G===void 0?void 0:G.docs,source:{originalSource:`{
  name: "Composição — Header + Image",
  decorators: [Story => <div style={{
    maxWidth: "300px"
  }}>\r
        <Story />\r
      </div>],
  render: () => <Card>\r
      <Card.Image>\r
        <img src={PLACEHOLDER_IMAGE} alt="Visual do card" />\r
      </Card.Image>\r
      <Card.Header style={{
      gap: "var(--s-spacing-xx-small)"
    }}>\r
        <h2>Nome do produto</h2>\r
        <p>Breve descrição do produto ou funcionalidade.</p>\r
      </Card.Header>\r
    </Card>
}`,...(O=i.parameters)===null||O===void 0||(R=O.docs)===null||R===void 0?void 0:R.source},description:{story:"Header + Image — demonstra que `Card.Image` é um complemento opcional ao Header,\r\nnão um substituto. A imagem sempre acompanha ao menos o `Card.Header`.\r\nPadrão comum para cards de produto, artigo ou funcionalidade visual.",...(q=i.parameters)===null||q===void 0||(T=q.docs)===null||T===void 0?void 0:T.description}}};l.parameters={...l.parameters,docs:{...(M=l.parameters)===null||M===void 0?void 0:M.docs,source:{originalSource:`{
  name: "Composição — todos os slots",
  decorators: [Story => <div style={{
    maxWidth: "300px"
  }}>\r
        <Story />\r
      </div>],
  render: () => <Card>\r
      <Card.Image>\r
        <img src={PLACEHOLDER_IMAGE} alt="Visual do card" />\r
      </Card.Image>\r
      <Card.Header style={{
      gap: "var(--s-spacing-xx-small)"
    }}>\r
        <h2>Primeiros passos</h2>\r
        <p>Configure seu workspace em poucos minutos.</p>\r
      </Card.Header>\r
      <Card.Content>\r
        <p>Fluxo de onboarding guiado com instruções passo a passo.</p>\r
      </Card.Content>\r
      <Card.Footer>\r
        <div style={{
        display: "flex",
        gap: "var(--s-spacing-xx-small)",
        width: "fit-content"
      }}>\r
          <Button variant="primary" size="md">\r
            Começar agora\r
          </Button>\r
          <Button variant="secondary" size="md">\r
            Ver mais tarde\r
          </Button>\r
        </div>\r
      </Card.Footer>\r
    </Card>
}`,...(k=l.parameters)===null||k===void 0||(V=k.docs)===null||V===void 0?void 0:V.source},description:{story:`Todos os slots ativos — Image + Header + Content + Footer.\r
Use para validar o layout completo e a proporção entre as seções.`,...($=l.parameters)===null||$===void 0||(J=$.docs)===null||J===void 0?void 0:J.description}}};c.parameters={...c.parameters,docs:{...(N=c.parameters)===null||N===void 0?void 0:N.docs,source:{originalSource:`{
  name: "Contexto real — plano de preços",
  decorators: [Story => <div style={{
    maxWidth: "300px"
  }}>\r
        <Story />\r
      </div>],
  render: () => <Card>\r
      <Card.Header style={{
      gap: "var(--s-spacing-xx-small)"
    }}>\r
        <h2>Plano Pro</h2>\r
        <p>Tudo que você precisa para escalar seu time.</p>\r
      </Card.Header>\r
      <Card.Content>\r
        <p style={{
        fontSize: "32px",
        fontWeight: 700,
        margin: "0 0 12px",
        color: "var(--s-color-content-default)"
      }}>\r
          R$ 249\r
          <small style={{
          fontSize: "16px",
          fontWeight: 400
        }}>/mês</small>\r
        </p>\r
        <ul style={{
        paddingLeft: "16px",
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        color: "var(--s-color-content-default)"
      }}>\r
          <li style={{
          font: "var(--s-typography-paragraph-regular)"
        }}>\r
            Projetos ilimitados\r
          </li>\r
          <li style={{
          font: "var(--s-typography-paragraph-regular)"
        }}>\r
            Suporte prioritário\r
          </li>\r
          <li style={{
          font: "var(--s-typography-paragraph-regular)"
        }}>\r
            Analytics avançado\r
          </li>\r
          <li style={{
          font: "var(--s-typography-paragraph-regular)"
        }}>\r
            Integrações premium\r
          </li>\r
        </ul>\r
      </Card.Content>\r
      <Card.Footer>\r
        <div style={{
        display: "flex",
        gap: "var(--s-spacing-xx-small)",
        width: "fit-content"
      }}>\r
          <Button variant="primary">Assinar agora</Button>\r
        </div>\r
      </Card.Footer>\r
    </Card>
}`,...(U=c.parameters)===null||U===void 0||(Q=U.docs)===null||Q===void 0?void 0:Q.source},description:{story:`Card de plano de preços — exibe nome do plano, preço e lista de benefícios.\r
Padrão comum em páginas de pricing com CTAs de conversão.`,...(K=c.parameters)===null||K===void 0||(Z=K.docs)===null||Z===void 0?void 0:Z.description}}};p.parameters={...p.parameters,docs:{...(X=p.parameters)===null||X===void 0?void 0:X.docs,source:{originalSource:`{
  name: "Contexto real — perfil de usuário",
  decorators: [Story => <div style={{
    maxWidth: "300px"
  }}>\r
        <Story />\r
      </div>],
  render: () => <Card>\r
      <Card.Image>\r
        <img src="https://i.pravatar.cc/600?img=12" alt="Foto de Sarah Johnson" />\r
      </Card.Image>\r
      <Card.Header style={{
      gap: "var(--s-spacing-xx-small)"
    }}>\r
        <Avatar size="md" src="https://i.pravatar.cc/150?img=12" />\r
        <div>\r
          <h2 style={{
          margin: 0
        }}>Sarah Johnson</h2>\r
          <p style={{
          margin: 0
        }}>Product Designer Sênior</p>\r
        </div>\r
      </Card.Header>\r
      <Card.Footer>\r
        <div style={{
        display: "flex",
        gap: "var(--s-spacing-xx-small)",
        width: "fit-content"
      }}>\r
          <Button variant="primary" size="md">\r
            Mensagem\r
          </Button>\r
          <Button variant="secondary" size="md">\r
            Ver perfil\r
          </Button>\r
        </div>\r
      </Card.Footer>\r
    </Card>
}`,...(rr=p.parameters)===null||rr===void 0||(Y=rr.docs)===null||Y===void 0?void 0:Y.source},description:{story:`Card de perfil de usuário — avatar, nome, cargo e ações de contato.\r
Padrão típico em diretórios de time, listagens de membros e CRMs.`,...(ar=p.parameters)===null||ar===void 0||(er=ar.docs)===null||er===void 0?void 0:er.description}}};m.parameters={...m.parameters,docs:{...(or=m.parameters)===null||or===void 0?void 0:or.docs,source:{originalSource:`{
  name: "Contexto real — artigo ou post",
  decorators: [Story => <div style={{
    maxWidth: "600px"
  }}>\r
        <Story />\r
      </div>],
  render: () => <Card>\r
      <Card.Image>\r
        <img src={PLACEHOLDER_IMAGE} alt="Capa do artigo" />\r
      </Card.Image>\r
      <Card.Header style={{
      gap: "var(--s-spacing-xx-small)"
    }}>\r
        <div style={{
        marginBottom: "var(--s-spacing-nano)"
      }}>\r
          <Badge label="Design System" type="light" variant="primary" />\r
        </div>\r
        <h2>Como documentar componentes de forma eficiente</h2>\r
        <p>\r
          Boas práticas para Storybook, JSDoc e design tokens em projetos reais.\r
        </p>\r
      </Card.Header>\r
      <Card.Footer>\r
        <div style={{
        display: "flex",
        gap: "var(--s-spacing-xx-small)",
        justifyContent: "space-between",
        alignItems: "center"
      }}>\r
          <Button variant="secondary" size="md" style={{
          width: "fit-content"
        }}>\r
            Ler artigo\r
          </Button>\r
          <small style={{
          color: "var(--s-color-content-default)",
          whiteSpace: "nowrap"
        }}>\r
            5 min de leitura\r
          </small>\r
        </div>\r
      </Card.Footer>\r
    </Card>
}`,...(sr=m.parameters)===null||sr===void 0||(nr=sr.docs)===null||nr===void 0?void 0:nr.source},description:{story:`Card de artigo ou post — imagem de capa, categoria via Badge, título e resumo.\r
Padrão comum em blogs, bases de conhecimento e feeds de conteúdo.`,...(tr=m.parameters)===null||tr===void 0||(dr=tr.docs)===null||dr===void 0?void 0:dr.description}}};u.parameters={...u.parameters,docs:{...(ir=u.parameters)===null||ir===void 0?void 0:ir.docs,source:{originalSource:`{
  name: "Contexto real — widget de dashboard",
  decorators: [Story => <div style={{
    maxWidth: "300px"
  }}>\r
        <Story />\r
      </div>],
  render: () => <Card>\r
      <Card.Content>\r
        <p style={{
        margin: 0
      }}>Receita do mês</p>\r
        <h1 style={{
        margin: "0 0 4px",
        color: "var(--s-color-content-default)"
      }}>\r
          R$ 48.290\r
        </h1>\r
        <div style={{
        display: "flex",
        gap: "var(--s-spacing-xx-small)",
        width: "fit-content"
      }}>\r
          <Badge label="+12,4%" type="light" variant="success" />\r
          <small style={{
          color: "var(--s-color-content-default)"
        }}>\r
            em relação ao mês anterior\r
          </small>\r
        </div>\r
      </Card.Content>\r
    </Card>
}`,...(cr=u.parameters)===null||cr===void 0||(lr=cr.docs)===null||lr===void 0?void 0:lr.source},description:{story:`Card de widget de dashboard — métrica em destaque com variação de período.\r
Padrão comum em painéis administrativos e telas de análise.`,...(mr=u.parameters)===null||mr===void 0||(pr=mr.docs)===null||pr===void 0?void 0:pr.description}}};x.parameters={...x.parameters,docs:{...(ur=x.parameters)===null||ur===void 0?void 0:ur.docs,source:{originalSource:`{
  name: "Grid de cards",
  decorators: [Story => <div style={{
    width: "100%"
  }}>\r
        <Story />\r
      </div>],
  render: () => <div style={{
    display: "grid",
    width: "100%",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "var(--s-spacing-medium)"
  }}>\r
      {[{
      plan: "Starter",
      price: "Grátis",
      desc: "Para projetos pessoais e experimentação."
    }, {
      plan: "Pro",
      price: "R$ 249/mês",
      desc: "Para times que precisam de mais poder."
    }, {
      plan: "Enterprise",
      price: "Sob consulta",
      desc: "Para grandes organizações com SLA."
    }].map(({
      plan,
      price,
      desc
    }) => <Card key={plan}>\r
          <Card.Header>\r
            <h2>{plan}</h2>\r
            <p>{desc}</p>\r
          </Card.Header>\r
          <Card.Content>\r
            <p style={{
          color: "var(--s-color-content-default)"
        }}>\r
              {price}\r
            </p>\r
          </Card.Content>\r
          <Card.Footer>\r
            <div style={{
          display: "flex",
          gap: "var(--s-spacing-xx-small)",
          width: "fit-content"
        }}>\r
              <Button variant={plan === "Pro" ? "primary" : "secondary"} size="md">\r
                Escolher plano\r
              </Button>\r
            </div>\r
          </Card.Footer>\r
        </Card>)}\r
    </div>
}`,...(vr=x.parameters)===null||vr===void 0||(xr=vr.docs)===null||xr===void 0?void 0:xr.source},description:{story:`Cards em layout de grid — demonstra como os cards preenchem as colunas\r
do grid naturalmente sem necessidade de largura fixa.`,...(hr=x.parameters)===null||hr===void 0||(gr=hr.docs)===null||gr===void 0?void 0:gr.description}}};v.parameters={...v.parameters,docs:{...(Cr=v.parameters)===null||Cr===void 0?void 0:Cr.docs,source:{originalSource:`{
  name: "Edge case — conteúdo longo",
  decorators: [Story => <div style={{
    maxWidth: "500px"
  }}>\r
        <Story />\r
      </div>],
  render: () => <Card>\r
      <Card.Header style={{
      gap: "var(--s-spacing-xx-small)"
    }}>\r
        <h2>\r
          Título com texto longo para validar o comportamento de quebra de linha\r
          no cabeçalho\r
        </h2>\r
        <p>\r
          Esta é uma descrição intencionalmente longa para verificar se o\r
          espaçamento e a tipografia do Card.Header se comportam corretamente\r
          quando o conteúdo ultrapassa uma única linha — sem vazar para fora do\r
          card ou comprimir outros slots.\r
        </p>\r
      </Card.Header>\r
      <Card.Content>\r
        <p>Conteúdo principal permanece abaixo do header sem sobreposição.</p>\r
      </Card.Content>\r
      <Card.Footer>\r
        <div style={{
        display: "flex",
        gap: "var(--s-spacing-xx-small)",
        width: "fit-content"
      }}>\r
          <Button variant="secondary" size="md">\r
            Ação\r
          </Button>\r
        </div>\r
      </Card.Footer>\r
    </Card>
}`,...(jr=v.parameters)===null||jr===void 0||(yr=jr.docs)===null||yr===void 0?void 0:yr.source},description:{story:`Card com conteúdo longo no Header — valida se o título e a descrição\r
com muitas linhas não comprometem o layout ou extrapolam os limites do card.`,...(fr=v.parameters)===null||fr===void 0||(_r=fr.docs)===null||_r===void 0?void 0:_r.description}}};const Rr=["Playground","HeaderOnly","HeaderAndContent","HeaderContentAndFooter","WithImage","FullCard","PricingCard","ProfileCard","ArticleCard","DashboardWidget","CardGrid","LongContent"];export{m as ArticleCard,x as CardGrid,u as DashboardWidget,l as FullCard,d as HeaderAndContent,t as HeaderContentAndFooter,s as HeaderOnly,v as LongContent,n as Playground,c as PricingCard,p as ProfileCard,i as WithImage,Rr as __namedExportsOrder,Gr as default};
