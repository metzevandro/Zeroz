import{j as o}from"./iframe-DFdk80Qn.js";/* empty css               */import{E as ro}from"./EmptyState-BP8GPbJi.js";import{B as e}from"./Button-y_xm8ZSK.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-C_kNoyVv.js";import"./Loading-DYHQTa0l.js";import"./Skeleton-bEV42asx.js";var l,u,p,v,_,g,f,h,y,x,b,z,C,j,w,A,E,N,S,B,q,T,L,D,O,U,V,R,F,k,I,Q,G,P,Z,H,M,W,J,K,X,Y,$,oo,eo;const po={title:"Templates/EmptyState",component:ro,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
O **EmptyState** comunica que uma seção não tem conteúdo a exibir,
orientando o usuário para uma próxima ação relevante.

A prop \`actions\` aceita qualquer \`ReactNode\`, dando controle total
sobre quais botões, links ou elementos customizados aparecem no rodapé.

### Quando usar
- Uma lista, tabela ou feed não tem itens a exibir
- Uma busca ou filtro retorna zero resultados
- Uma funcionalidade ainda não foi configurada
- Ocorreu um erro ao carregar dados e o usuário pode tentar novamente

### Quando não usar
- Como substituto de estado de loading — use skeleton ou spinner
- Quando há conteúdo parcial a exibir — reserve para ausência total de dados

### Boas práticas
- Use um \`title\` descritivo que deixe claro o que está faltando
- Use \`description\` para explicar o porquê e/ou o que o usuário pode fazer
- Limite \`actions\` a 1–2 botões — evite sobrecarregar com muitas opções
- Use um ícone contextualmente relevante (\`"inbox"\` para caixa vazia, \`"search_off"\` para sem resultados)
- Omita \`actions\` quando não houver ação significativa disponível
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=2416-4558"}},argTypes:{icon:{control:"text",description:"Nome do ícone Material Symbol exibido no topo do componente.",table:{type:{summary:"string"}}},title:{control:"text",description:"Título principal descrevendo o estado vazio. Renderizado como `<h3>`.",table:{type:{summary:"string"}}},description:{control:"text",description:"Texto de suporte com contexto ou dica de ação. Renderizado como `<p>`.",table:{type:{summary:"string"}}},actions:{control:!1,description:"Conteúdo do rodapé — tipicamente `<Button>`. Quando omitido, o rodapé não é renderizado.",table:{type:{summary:"React.ReactNode"}}}},decorators:[ao=>o.jsx("div",{style:{maxWidth:"400px",width:"100%"},children:o.jsx(ao,{})})]},a={name:"Default",args:{icon:"folder_open",title:"Nenhum projeto ainda",description:"Crie seu primeiro projeto para começar.",actions:o.jsx("div",{style:{width:"fit-content"},children:o.jsx(e,{variant:"primary",size:"md",children:"Novo projeto"})})}},r={name:"Ações — ação única",args:{icon:"add_circle",title:"Nenhum membro no time",description:"Convide pessoas para colaborar neste workspace.",actions:o.jsx("div",{style:{width:"fit-content"},children:o.jsx(e,{variant:"primary",size:"md",children:"Convidar membro"})})}},n={name:"Ações — primária + secundária",args:{icon:"inbox",title:"Caixa de entrada vazia",description:"Você não tem mensagens. Inicie uma conversa ou aguarde respostas.",actions:o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{width:"fit-content"},children:o.jsx(e,{variant:"primary",size:"md",children:"Escrever mensagem"})}),o.jsx("div",{style:{width:"fit-content"},children:o.jsx(e,{variant:"secondary",size:"md",children:"Atualizar"})})]})}},t={name:"Ações — sem ações",args:{icon:"search_off",title:"Nenhum resultado encontrado",description:"Tente ajustar os termos de busca ou os filtros aplicados."}},i={name:"Contexto real — busca sem resultados",args:{icon:"manage_search",title:"Nenhuma correspondência",description:"Não encontramos nada com os filtros atuais.",actions:o.jsx("div",{style:{width:"fit-content"},children:o.jsx(e,{variant:"secondary",size:"md",children:"Limpar filtros"})})}},s={name:"Contexto real — tabela vazia",args:{icon:"table_rows",title:"Nenhum registro cadastrado",description:"Adicione o primeiro registro para começar a visualizar os dados.",actions:o.jsx("div",{style:{width:"fit-content"},children:o.jsx(e,{variant:"primary",size:"md",children:"Adicionar registro"})})}},d={name:"Contexto real — erro ao carregar",args:{icon:"cloud_off",title:"Falha ao carregar",description:"Ocorreu um erro ao buscar os dados. Verifique sua conexão e tente novamente.",actions:o.jsx("div",{style:{width:"fit-content"},children:o.jsx(e,{variant:"primary",size:"md",children:"Tentar novamente"})})}},c={name:"Contexto real — não configurado",args:{icon:"settings_suggest",title:"Integração não configurada",description:"Configure a integração para começar a sincronizar seus dados automaticamente.",actions:o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{width:"fit-content"},children:o.jsx(e,{variant:"primary",size:"md",children:"Configurar agora"})}),o.jsx("div",{style:{width:"fit-content"},children:o.jsx(e,{variant:"secondary",size:"md",children:"Ver documentação"})})]})}},m={name:"Edge case — textos longos",args:{icon:"folder_off",title:"Nenhum documento encontrado nesta pasta ou nas subpastas relacionadas",description:"Os documentos que você procura podem ter sido movidos, excluídos ou você pode não ter permissão para acessá-los. Entre em contato com o administrador para mais informações.",actions:o.jsx("div",{style:{width:"fit-content"},children:o.jsx(e,{variant:"secondary",size:"md",children:"Voltar"})})}};a.parameters={...a.parameters,docs:{...(l=a.parameters)===null||l===void 0?void 0:l.docs,source:{originalSource:`{
  name: "Default",
  args: {
    icon: "folder_open",
    title: "Nenhum projeto ainda",
    description: "Crie seu primeiro projeto para começar.",
    actions: <div style={{
      width: "fit-content"
    }}>\r
        <Button variant="primary" size="md">\r
          Novo projeto\r
        </Button>\r
      </div>
  }
}`,...(p=a.parameters)===null||p===void 0||(u=p.docs)===null||u===void 0?void 0:u.source},description:{story:`Estado base com ícone, título, descrição e uma ação primária.\r
Ponto de entrada recomendado para inspecionar o componente via Controls.`,...(_=a.parameters)===null||_===void 0||(v=_.docs)===null||v===void 0?void 0:v.description}}};r.parameters={...r.parameters,docs:{...(g=r.parameters)===null||g===void 0?void 0:g.docs,source:{originalSource:`{
  name: "Ações — ação única",
  args: {
    icon: "add_circle",
    title: "Nenhum membro no time",
    description: "Convide pessoas para colaborar neste workspace.",
    actions: <div style={{
      width: "fit-content"
    }}>\r
        <Button variant="primary" size="md">\r
          Convidar membro\r
        </Button>\r
      </div>
  }
}`,...(h=r.parameters)===null||h===void 0||(f=h.docs)===null||f===void 0?void 0:f.source},description:{story:`Ação única — padrão mais comum.\r
Use quando há uma única próxima ação clara para o usuário.`,...(x=r.parameters)===null||x===void 0||(y=x.docs)===null||y===void 0?void 0:y.description}}};n.parameters={...n.parameters,docs:{...(b=n.parameters)===null||b===void 0?void 0:b.docs,source:{originalSource:`{
  name: "Ações — primária + secundária",
  args: {
    icon: "inbox",
    title: "Caixa de entrada vazia",
    description: "Você não tem mensagens. Inicie uma conversa ou aguarde respostas.",
    actions: <>\r
        <div style={{
        width: "fit-content"
      }}>\r
          <Button variant="primary" size="md">\r
            Escrever mensagem\r
          </Button>\r
        </div>\r
        <div style={{
        width: "fit-content"
      }}>\r
          <Button variant="secondary" size="md">\r
            Atualizar\r
          </Button>\r
        </div>\r
      </>
  }
}`,...(C=n.parameters)===null||C===void 0||(z=C.docs)===null||z===void 0?void 0:z.source},description:{story:`Duas ações — primária e secundária.\r
Use quando há duas opções igualmente válidas para o usuário.\r
Limite a no máximo duas ações para não sobrecarregar.`,...(w=n.parameters)===null||w===void 0||(j=w.docs)===null||j===void 0?void 0:j.description}}};t.parameters={...t.parameters,docs:{...(A=t.parameters)===null||A===void 0?void 0:A.docs,source:{originalSource:`{
  name: "Ações — sem ações",
  args: {
    icon: "search_off",
    title: "Nenhum resultado encontrado",
    description: "Tente ajustar os termos de busca ou os filtros aplicados."
  }
}`,...(N=t.parameters)===null||N===void 0||(E=N.docs)===null||E===void 0?void 0:E.source},description:{story:"Sem ações — apenas informativo.\r\nUse quando não há nenhuma ação significativa disponível para o usuário.\r\nO rodapé não é renderizado quando `actions` é omitido.",...(B=t.parameters)===null||B===void 0||(S=B.docs)===null||S===void 0?void 0:S.description}}};i.parameters={...i.parameters,docs:{...(q=i.parameters)===null||q===void 0?void 0:q.docs,source:{originalSource:`{
  name: "Contexto real — busca sem resultados",
  args: {
    icon: "manage_search",
    title: "Nenhuma correspondência",
    description: "Não encontramos nada com os filtros atuais.",
    actions: <div style={{
      width: "fit-content"
    }}>\r
        <Button variant="secondary" size="md">\r
          Limpar filtros\r
        </Button>\r
      </div>
  }
}`,...(L=i.parameters)===null||L===void 0||(T=L.docs)===null||T===void 0?void 0:T.source},description:{story:`Busca sem resultados — o ícone e o texto orientam o usuário a ajustar\r
os filtros ou limpar a busca.`,...(O=i.parameters)===null||O===void 0||(D=O.docs)===null||D===void 0?void 0:D.description}}};s.parameters={...s.parameters,docs:{...(U=s.parameters)===null||U===void 0?void 0:U.docs,source:{originalSource:`{
  name: "Contexto real — tabela vazia",
  args: {
    icon: "table_rows",
    title: "Nenhum registro cadastrado",
    description: "Adicione o primeiro registro para começar a visualizar os dados.",
    actions: <div style={{
      width: "fit-content"
    }}>\r
        <Button variant="primary" size="md">\r
          Adicionar registro\r
        </Button>\r
      </div>
  }
}`,...(R=s.parameters)===null||R===void 0||(V=R.docs)===null||V===void 0?void 0:V.source},description:{story:`Tabela vazia — estado inicial antes de qualquer dado ser cadastrado.\r
Padrão comum em listagens de produtos, clientes, pedidos, etc.`,...(k=s.parameters)===null||k===void 0||(F=k.docs)===null||F===void 0?void 0:F.description}}};d.parameters={...d.parameters,docs:{...(I=d.parameters)===null||I===void 0?void 0:I.docs,source:{originalSource:`{
  name: "Contexto real — erro ao carregar",
  args: {
    icon: "cloud_off",
    title: "Falha ao carregar",
    description: "Ocorreu um erro ao buscar os dados. Verifique sua conexão e tente novamente.",
    actions: <div style={{
      width: "fit-content"
    }}>\r
        <Button variant="primary" size="md">\r
          Tentar novamente\r
        </Button>\r
      </div>
  }
}`,...(G=d.parameters)===null||G===void 0||(Q=G.docs)===null||Q===void 0?void 0:Q.source},description:{story:'Erro ao carregar — falha na requisição com opção de tentar novamente.\r\nUse `icon="cloud_off"` ou `"error"` para indicar visualmente a falha.',...(Z=d.parameters)===null||Z===void 0||(P=Z.docs)===null||P===void 0?void 0:P.description}}};c.parameters={...c.parameters,docs:{...(H=c.parameters)===null||H===void 0?void 0:H.docs,source:{originalSource:`{
  name: "Contexto real — não configurado",
  args: {
    icon: "settings_suggest",
    title: "Integração não configurada",
    description: "Configure a integração para começar a sincronizar seus dados automaticamente.",
    actions: <>\r
        <div style={{
        width: "fit-content"
      }}>\r
          <Button variant="primary" size="md">\r
            Configurar agora\r
          </Button>\r
        </div>\r
        <div style={{
        width: "fit-content"
      }}>\r
          <Button variant="secondary" size="md">\r
            Ver documentação\r
          </Button>\r
        </div>\r
      </>
  }
}`,...(W=c.parameters)===null||W===void 0||(M=W.docs)===null||M===void 0?void 0:M.source},description:{story:`Funcionalidade não configurada — estado inicial de onboarding.\r
Comum em módulos que dependem de configuração prévia pelo usuário.`,...(K=c.parameters)===null||K===void 0||(J=K.docs)===null||J===void 0?void 0:J.description}}};m.parameters={...m.parameters,docs:{...(X=m.parameters)===null||X===void 0?void 0:X.docs,source:{originalSource:`{
  name: "Edge case — textos longos",
  args: {
    icon: "folder_off",
    title: "Nenhum documento encontrado nesta pasta ou nas subpastas relacionadas",
    description: "Os documentos que você procura podem ter sido movidos, excluídos ou você pode não ter permissão para acessá-los. Entre em contato com o administrador para mais informações.",
    actions: <div style={{
      width: "fit-content"
    }}>\r
        <Button variant="secondary" size="md">\r
          Voltar\r
        </Button>\r
      </div>
  }
}`,...($=m.parameters)===null||$===void 0||(Y=$.docs)===null||Y===void 0?void 0:Y.source},description:{story:`Textos longos — valida o comportamento de quebra de linha no título\r
e na descrição quando o conteúdo excede o espaço disponível.`,...(eo=m.parameters)===null||eo===void 0||(oo=eo.docs)===null||oo===void 0?void 0:oo.description}}};const vo=["Default","SingleAction","TwoActions","NoActions","SearchEmpty","EmptyTable","LoadError","NotConfigured","LongContent"];export{a as Default,s as EmptyTable,d as LoadError,m as LongContent,t as NoActions,c as NotConfigured,i as SearchEmpty,r as SingleAction,n as TwoActions,vo as __namedExportsOrder,po as default};
