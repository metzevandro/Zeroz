import{j as e}from"./iframe-CxNvl9BI.js";/* empty css               */import{E as p}from"./EmptyState-BNi8ZFZX.js";import{B as o}from"./Button-CH6qqEEx.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-Bqm0CoJD.js";import"./Loading-DhvOqAup.js";import"./Skeleton-C80QNm7w.js";const b={title:"Templates/EmptyState",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=2416-4558"}},argTypes:{icon:{control:"text",description:"Nome do ícone Material Symbol exibido no topo do componente.",table:{type:{summary:"string"}}},title:{control:"text",description:"Título principal descrevendo o estado vazio. Renderizado como `<h3>`.",table:{type:{summary:"string"}}},description:{control:"text",description:"Texto de suporte com contexto ou dica de ação. Renderizado como `<p>`.",table:{type:{summary:"string"}}},actions:{control:!1,description:"Conteúdo do rodapé — tipicamente `<Button>`. Quando omitido, o rodapé não é renderizado.",table:{type:{summary:"React.ReactNode"}}}},decorators:[u=>e.jsx("div",{style:{maxWidth:"400px",width:"100%"},children:e.jsx(u,{})})]},a={name:"Default",args:{icon:"folder_open",title:"Nenhum projeto ainda",description:"Crie seu primeiro projeto para começar.",actions:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",children:"Novo projeto"})})}},r={name:"Ações — ação única",args:{icon:"add_circle",title:"Nenhum membro no time",description:"Convide pessoas para colaborar neste workspace.",actions:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",children:"Convidar membro"})})}},n={name:"Ações — primária + secundária",args:{icon:"inbox",title:"Caixa de entrada vazia",description:"Você não tem mensagens. Inicie uma conversa ou aguarde respostas.",actions:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",children:"Escrever mensagem"})}),e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"secondary",size:"md",children:"Atualizar"})})]})}},t={name:"Ações — sem ações",args:{icon:"search_off",title:"Nenhum resultado encontrado",description:"Tente ajustar os termos de busca ou os filtros aplicados."}},i={name:"Contexto real — busca sem resultados",args:{icon:"manage_search",title:"Nenhuma correspondência",description:"Não encontramos nada com os filtros atuais.",actions:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"secondary",size:"md",children:"Limpar filtros"})})}},s={name:"Contexto real — tabela vazia",args:{icon:"table_rows",title:"Nenhum registro cadastrado",description:"Adicione o primeiro registro para começar a visualizar os dados.",actions:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",children:"Adicionar registro"})})}},c={name:"Contexto real — erro ao carregar",args:{icon:"cloud_off",title:"Falha ao carregar",description:"Ocorreu um erro ao buscar os dados. Verifique sua conexão e tente novamente.",actions:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",children:"Tentar novamente"})})}},d={name:"Contexto real — não configurado",args:{icon:"settings_suggest",title:"Integração não configurada",description:"Configure a integração para começar a sincronizar seus dados automaticamente.",actions:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"primary",size:"md",children:"Configurar agora"})}),e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"secondary",size:"md",children:"Ver documentação"})})]})}},m={name:"Edge case — textos longos",args:{icon:"folder_off",title:"Nenhum documento encontrado nesta pasta ou nas subpastas relacionadas",description:"Os documentos que você procura podem ter sido movidos, excluídos ou você pode não ter permissão para acessá-los. Entre em contato com o administrador para mais informações.",actions:e.jsx("div",{style:{width:"fit-content"},children:e.jsx(o,{variant:"secondary",size:"md",children:"Voltar"})})}},z=["Default","SingleAction","TwoActions","NoActions","SearchEmpty","EmptyTable","LoadError","NotConfigured","LongContent"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:`Estado base com ícone, título, descrição e uma ação primária.\r
Ponto de entrada recomendado para inspecionar o componente via Controls.`,...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:`Ação única — padrão mais comum.\r
Use quando há uma única próxima ação clara para o usuário.`,...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:`Duas ações — primária e secundária.\r
Use quando há duas opções igualmente válidas para o usuário.\r
Limite a no máximo duas ações para não sobrecarregar.`,...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Ações — sem ações",
  args: {
    icon: "search_off",
    title: "Nenhum resultado encontrado",
    description: "Tente ajustar os termos de busca ou os filtros aplicados."
  }
}`,...t.parameters?.docs?.source},description:{story:"Sem ações — apenas informativo.\r\nUse quando não há nenhuma ação significativa disponível para o usuário.\r\nO rodapé não é renderizado quando `actions` é omitido.",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:`Busca sem resultados — o ícone e o texto orientam o usuário a ajustar\r
os filtros ou limpar a busca.`,...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:`Tabela vazia — estado inicial antes de qualquer dado ser cadastrado.\r
Padrão comum em listagens de produtos, clientes, pedidos, etc.`,...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:'Erro ao carregar — falha na requisição com opção de tentar novamente.\r\nUse `icon="cloud_off"` ou `"error"` para indicar visualmente a falha.',...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:`Funcionalidade não configurada — estado inicial de onboarding.\r
Comum em módulos que dependem de configuração prévia pelo usuário.`,...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`Textos longos — valida o comportamento de quebra de linha no título\r
e na descrição quando o conteúdo excede o espaço disponível.`,...m.parameters?.docs?.description}}};export{a as Default,s as EmptyTable,c as LoadError,m as LongContent,t as NoActions,d as NotConfigured,i as SearchEmpty,r as SingleAction,n as TwoActions,z as __namedExportsOrder,b as default};
