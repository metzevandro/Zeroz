import{r as l,j as o}from"./iframe-CxNvl9BI.js";/* empty css               */import{B as N}from"./Button-CH6qqEEx.js";import{I as w}from"./Icon-Bqm0CoJD.js";import{B as U}from"./ButtonIcon-BvrW2_xY.js";import{C as x}from"./Card-CVnC1Ozv.js";import"./preload-helper-PPVm8Dsz.js";import"./Loading-DhvOqAup.js";import"./Skeleton-C80QNm7w.js";function P(e){return e!==void 0?e*1024*1024:void 0}function O(e){return`${e.name}-${e.size}-${Math.random().toString(36).slice(2,9)}`}function W(e,n,r){const a=n!==void 0&&e.size>n;return{id:O(e),file:e,hasError:a,errorMessage:a?`File "${e.name}" exceeds the ${r} MB size limit.`:null}}function j(e){const n=new DataTransfer;return e.forEach(({file:a})=>n.items.add(a)),n.files.length>0?n.files:null}function R(e,n,r){return(Array.isArray(e)?e:Array.from(e)).map(t=>W(t,n,r))}function $({multiple:e,maxFileSize:n,onChange:r,value:a}){const t=l.useRef(null),[i,d]=l.useState([]),L=P(n),S=l.useRef(void 0);return l.useEffect(()=>{(a===null||a!==void 0&&a.length===0)&&a!==S.current&&(S.current=a,d([]))},[a]),{fileInputRef:t,selectedFiles:i,handleFileChange:c=>{const m=Array.from(c.target.files??[]);if(c.target.value="",m.length===0)return;const p=R(m,L,n);d(u=>{const I=e?[...u,...p]:p;return r(j(I)),I})},handleTriggerInput:()=>{t.current?.click()},handleRemoveFile:c=>{d(m=>{const p=m.filter(u=>u.id!==c);return r(j(p)),p})}}}function _(){const e=l.useRef(null),[n,r]=l.useState(null);l.useEffect(()=>{const t=e.current;if(!t)return;const i=()=>r(t.offsetWidth);if(i(),typeof ResizeObserver<"u"){const d=new ResizeObserver(i);return d.observe(t),()=>d.disconnect()}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]);const a=n?{maxWidth:`calc(${n}px - 60px)`}:{};return{containerRef:e,fileNameMaxWidth:a}}function T({fileObj:e,fileNameStyle:n,onRemove:r}){return o.jsxs("li",{className:`file-uploader-item ${e.hasError?"file-uploader-item-error":""}`,children:[o.jsxs("div",{className:`file-uploaded ${e.hasError?"file-uploaded-error":""}`,children:[o.jsx("p",{style:n,children:e.file.name}),o.jsxs("p",{className:"file-uploaded-icon",children:[o.jsx("div",{className:"file-uploader-icon-error",children:e.hasError&&o.jsx(w,{icon:"error_outline",size:"sm"})}),o.jsx(U,{variant:"primary",appearance:"plain",size:"sm",icon:"close",onClick:()=>r(e.id)})]})]}),e.hasError&&e.errorMessage&&o.jsx("p",{className:"file-uploader-error",children:e.errorMessage})]})}const s=({title:e,description:n,multiple:r=!1,disabled:a=!1,maxFileSize:t,accept:i,buttonLabel:d,typeIconButton:L,onChange:S,value:A})=>{const{fileInputRef:D,selectedFiles:z,handleFileChange:c,handleTriggerInput:m,handleRemoveFile:p}=$({multiple:r,maxFileSize:t,onChange:S,value:A}),{containerRef:u,fileNameMaxWidth:I}=_();return o.jsxs("div",{className:"file-uploader",ref:u,children:[o.jsxs("div",{className:"file-uploader-header",children:[o.jsx("h1",{children:e}),o.jsxs("div",{className:"file-uploader-button",children:[o.jsx("input",{type:"file",ref:D,multiple:r,disabled:a,accept:i,style:{display:"none"},onChange:c}),o.jsx(N,{variant:"primary",disabled:a,onClick:m,icon:L,size:"md",children:d})]})]}),o.jsxs("div",{className:"file-uploader-footer",children:[n&&o.jsx("p",{children:n}),z.length>0&&o.jsx("ul",{className:"file-uploader-items",children:z.map(M=>o.jsx(T,{fileObj:M,fileNameStyle:I,onRemove:p},M.id))})]})]})},Y={title:"Components/FileUploader",component:s,tags:["autodocs"],parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1065-3271"},docs:{description:{component:`
**FileUploader** é um componente de seleção de arquivos com validação de tamanho
por arquivo e feedback de erro individual em cada linha.

Arquivos que excedem \`maxFileSize\` são exibidos com indicador de erro e mensagem —
eles **não** são incluídos no payload do \`onChange\`, mas ficam visíveis para o usuário
poder identificar e remover o arquivo problemático.

### Modo arquivo único (padrão)
- Um \`FileUploaderItem\` por vez.
- Clicar no botão **substitui** o arquivo atual.
- Clicar no × remove o arquivo.

### Modo múltiplos arquivos (\`multiple={true}\`)
- Cada arquivo selecionado gera seu próprio item.
- Clicar no botão **acrescenta** arquivos à lista.
- Cada item tem seu próprio ×.

### Gerenciamento de estado
- **Não-controlado** (sem prop \`value\`): estado gerenciado internamente.
- **Controlado** (prop \`value\`): passe \`null\` para limpar a lista de fora (ex.: após submit).
  **Não** reflita o \`onChange\` de volta como \`value\` — o estado interno é sempre
  a fonte de verdade da lista renderizada, evitando loops.

### Validação
- \`maxFileSize\` define o limite em **MB**
- \`accept\` restringe o seletor do sistema operacional (MIME types ou extensões)
- Arquivos com erro ficam marcados com ícone e mensagem, mas não travam a seleção de outros
        `}}},argTypes:{title:{control:"text",description:"Título exibido no topo do componente.",table:{type:{summary:"string"}}},description:{control:"text",description:"Texto de suporte exibido abaixo da lista. Use para informar formatos aceitos ou limite de tamanho.",table:{type:{summary:"string"}}},buttonLabel:{control:"text",description:"Texto do botão de upload.",table:{type:{summary:"string"}}},typeIconButton:{control:"text",description:"Nome do ícone Material Symbols renderizado dentro do botão.",table:{type:{summary:"string"}}},multiple:{control:"boolean",description:"Quando `true`, permite selecionar múltiplos arquivos e acrescenta à lista. Quando `false`, substitui.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Desabilita o botão e o input de arquivo.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},maxFileSize:{control:"number",description:"Tamanho máximo de arquivo em **MB**. Arquivos que excedem esse limite exibem erro. Omitir desativa a validação.",table:{type:{summary:"number"}}},accept:{control:"text",description:"Restringe o seletor do sistema. Aceita MIME types (`image/png`), extensões (`.pdf`), wildcards (`image/*`) ou combinações separadas por vírgula.",table:{type:{summary:"string"}}},onChange:{action:"onChange",description:"Disparado após adicionar ou remover arquivos. Recebe `FileList` com os arquivos válidos, ou `null` quando a lista fica vazia.",table:{type:{summary:"(files: FileList | null) => void"}}},value:{control:!1,description:"Lista controlada externamente. Passe `null` para limpar programaticamente. Valores não-nulos são ignorados para evitar loops.",table:{type:{summary:"FileList | null"}}}}},g={name:"Default",render:()=>o.jsx(s,{title:"Anexo",description:"Selecione um arquivo para enviar.",buttonLabel:"Adicionar arquivo",typeIconButton:"upload",onChange:e=>console.log("onChange",e)})},h={name:"Multiple files",render:()=>o.jsx(s,{title:"Documentos",description:"Selecione um ou mais arquivos.",buttonLabel:"Adicionar arquivos",typeIconButton:"upload",multiple:!0,onChange:e=>console.log("onChange",e)}),parameters:{docs:{description:{story:"Clicar no botão **acrescenta** arquivos à lista. Cada arquivo tem seu próprio `ButtonIcon` de remoção (ícone `close`)."}}}},v={name:'Images only (accept="image/*")',render:()=>o.jsx(s,{title:"Foto de perfil",description:"PNG, JPG ou GIF.",buttonLabel:"Enviar foto",typeIconButton:"photo_camera",accept:"image/*",onChange:e=>console.log("onChange",e)}),parameters:{docs:{description:{story:"O seletor do OS exibe apenas imagens. Nota: `accept` é uma sugestão ao sistema — o usuário ainda pode forçar outros tipos digitando o caminho manualmente."}}}},f={name:"PDF & DOCX only",render:()=>o.jsx(s,{title:"Contrato",description:"Apenas PDF ou Word (.doc, .docx).",buttonLabel:"Anexar documento",typeIconButton:"attach_file",accept:".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",onChange:e=>console.log("onChange",e)}),parameters:{docs:{description:{story:"Combinação de extensões e MIME types para máxima compatibilidade entre navegadores e sistemas operacionais."}}}},C={name:"Spreadsheet import (.xlsx, .csv)",render:()=>o.jsx(s,{title:"Importar dados",description:"Arquivos .xlsx ou .csv.",buttonLabel:"Selecionar planilha",typeIconButton:"table_chart",accept:".xlsx,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv",onChange:e=>console.log("onChange",e)})},y={name:"With size limit (1 MB)",render:()=>o.jsx(s,{title:"Foto de perfil",description:"PNG ou JPG, máximo 1 MB.",buttonLabel:"Enviar foto",typeIconButton:"photo_camera",accept:"image/*",maxFileSize:1,onChange:e=>console.log("onChange",e)}),parameters:{docs:{description:{story:'Arquivos acima de 1 MB exibem erro com mensagem `File "..." exceeds the 1 MB size limit.` e são excluídos do payload do `onChange`.'}}}},b={name:"Disabled",args:{title:"Anexos",description:"Upload indisponível no momento.",buttonLabel:"Adicionar arquivo",typeIconButton:"upload",disabled:!0},parameters:{docs:{description:{story:'O `Button` do Zeroz recebe `disabled` e exibe o estado visual correto. O `<input type="file">` oculto também é desabilitado, impedindo qualquer abertura de seletor.'}}}},q={name:"Without description",render:()=>o.jsx(s,{title:"Anexo do chamado",buttonLabel:"Adicionar arquivo",typeIconButton:"attach_file",onChange:e=>console.log("onChange",e)}),parameters:{docs:{description:{story:"Quando `description` é omitida, o parágrafo de suporte não é renderizado e o footer exibe apenas a lista de arquivos."}}}},E={name:"Narrow container (280px)",render:()=>o.jsx("div",{style:{width:"280px"},children:o.jsx(s,{title:"Documento",description:"PDF, máx. 10 MB.",buttonLabel:"Selecionar",typeIconButton:"attach_file",accept:"application/pdf",maxFileSize:10,onChange:e=>console.log("onChange",e)})}),parameters:{docs:{description:{story:"O hook `useContainerWidth` mede a largura do container via `ResizeObserver` e limita o nome do arquivo a `calc(${width}px - 60px)`, preservando o `ButtonIcon` de remoção."}}}},F={name:"Controlled clear",render:()=>{const[e,n]=l.useState(!1),r=()=>{n(!0),setTimeout(()=>n(!1),0)};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(s,{title:"Anexos",description:"Selecione arquivos e clique em Limpar para resetar.",buttonLabel:"Adicionar arquivo",typeIconButton:"upload",multiple:!0,value:e?null:void 0,onChange:a=>console.log("onChange",a)}),o.jsx("div",{children:o.jsx(N,{style:{width:"fit-content"},variant:"secondary",size:"sm",onClick:r,children:"Limpar arquivos"})})]})},parameters:{docs:{description:{story:"O `Button` do Zeroz aciona a limpeza. Passe `value={null}` com flag + `setTimeout(0)` para limpar a lista externamente sem causar loop de estado."}}}},B={name:"onChange live log",render:()=>{const[e,n]=l.useState([]),r=a=>{if(!a||a.length===0){n(["onChange(null) — lista vazia"]);return}const t=Array.from(a).map(i=>`• ${i.name} (${(i.size/1024).toFixed(1)} KB)`);n([`onChange — ${a.length} arquivo(s) válido(s):`,...t])};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-small)",width:"fit-content"},children:[o.jsx(x,{children:o.jsx(x.Content,{children:o.jsx(s,{title:"Teste de validação",description:"Imagens, máx. 1 MB. Arquivos grandes mostram erro mas não entram no onChange.",buttonLabel:"Selecionar arquivos",typeIconButton:"upload",multiple:!0,accept:"image/*",maxFileSize:1,onChange:r})})}),e.length>0&&o.jsxs(x,{children:[o.jsx(x.Header,{children:o.jsx("small",{children:"Payload do onChange"})}),o.jsx(x.Content,{children:e.map((a,t)=>o.jsx("small",{children:a},t))})]})]})},parameters:{docs:{description:{story:"Demonstra que o `onChange` recebe apenas os arquivos **válidos**. Arquivos acima de 1 MB aparecem no `FileUploader` com erro, mas não constam no log do `Card` abaixo."}}}},ee=["Default","Multiple","ImagesOnly","PdfAndDocx","SpreadsheetImport","WithSizeLimit","Disabled","NoDescription","NarrowContainer","ControlledClear","OnChangeLiveLog"];g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Default",
  render: () => <FileUploader title="Anexo" description="Selecione um arquivo para enviar." buttonLabel="Adicionar arquivo" typeIconButton="upload" onChange={files => console.log("onChange", files)} />
}`,...g.parameters?.docs?.source},description:{story:`Estado base: arquivo único, sem restrições de tipo ou tamanho.\r
Selecionar um novo arquivo substitui o atual.`,...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Multiple files",
  render: () => <FileUploader title="Documentos" description="Selecione um ou mais arquivos." buttonLabel="Adicionar arquivos" typeIconButton="upload" multiple onChange={files => console.log("onChange", files)} />,
  parameters: {
    docs: {
      description: {
        story: "Clicar no botão **acrescenta** arquivos à lista. Cada arquivo tem seu próprio \`ButtonIcon\` de remoção (ícone \`close\`)."
      }
    }
  }
}`,...h.parameters?.docs?.source},description:{story:`Modo múltiplos arquivos — cada clique no botão **acrescenta** novos arquivos\r
à lista existente. Cada item tem seu próprio botão de remoção (ButtonIcon).`,...h.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Images only (accept="image/*")',
  render: () => <FileUploader title="Foto de perfil" description="PNG, JPG ou GIF." buttonLabel="Enviar foto" typeIconButton="photo_camera" accept="image/*" onChange={files => console.log("onChange", files)} />,
  parameters: {
    docs: {
      description: {
        story: "O seletor do OS exibe apenas imagens. Nota: \`accept\` é uma sugestão ao sistema — o usuário ainda pode forçar outros tipos digitando o caminho manualmente."
      }
    }
  }
}`,...v.parameters?.docs?.source},description:{story:'Seletor restrito a imagens (`accept="image/*"`).\r\nÚtil para campos de foto de perfil ou galeria.',...v.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "PDF & DOCX only",
  render: () => <FileUploader title="Contrato" description="Apenas PDF ou Word (.doc, .docx)." buttonLabel="Anexar documento" typeIconButton="attach_file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={files => console.log("onChange", files)} />,
  parameters: {
    docs: {
      description: {
        story: "Combinação de extensões e MIME types para máxima compatibilidade entre navegadores e sistemas operacionais."
      }
    }
  }
}`,...f.parameters?.docs?.source},description:{story:`Seletor restrito a PDF e documentos Word.\r
Usa MIME types completos para maior compatibilidade entre sistemas operacionais.`,...f.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Spreadsheet import (.xlsx, .csv)",
  render: () => <FileUploader title="Importar dados" description="Arquivos .xlsx ou .csv." buttonLabel="Selecionar planilha" typeIconButton="table_chart" accept=".xlsx,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv" onChange={files => console.log("onChange", files)} />
}`,...C.parameters?.docs?.source},description:{story:"Planilhas Excel e CSV — cenário de importação de dados em bulk.",...C.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "With size limit (1 MB)",
  render: () => <FileUploader title="Foto de perfil" description="PNG ou JPG, máximo 1 MB." buttonLabel="Enviar foto" typeIconButton="photo_camera" accept="image/*" maxFileSize={1} onChange={files => console.log("onChange", files)} />,
  parameters: {
    docs: {
      description: {
        story: 'Arquivos acima de 1 MB exibem erro com mensagem \`File "..." exceeds the 1 MB size limit.\` e são excluídos do payload do \`onChange\`.'
      }
    }
  }
}`,...y.parameters?.docs?.source},description:{story:"Limite de 1 MB — envie um arquivo grande para ver o estado de erro.\r\nO arquivo problemático fica visível com ícone `error_outline` e mensagem,\r\nmas NÃO é incluído no payload do `onChange`.",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Disabled",
  args: {
    title: "Anexos",
    description: "Upload indisponível no momento.",
    buttonLabel: "Adicionar arquivo",
    typeIconButton: "upload",
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "O \`Button\` do Zeroz recebe \`disabled\` e exibe o estado visual correto. O \`<input type=\\"file\\">\` oculto também é desabilitado, impedindo qualquer abertura de seletor."
      }
    }
  }
}`,...b.parameters?.docs?.source},description:{story:'Estado desabilitado — o `Button` interno recebe `disabled={true}`\r\ne o `<input type="file">` também é desabilitado.\r\nUse quando o upload não estiver disponível (permissões, fora do prazo etc.).',...b.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Without description",
  render: () => <FileUploader title="Anexo do chamado" buttonLabel="Adicionar arquivo" typeIconButton="attach_file" onChange={files => console.log("onChange", files)} />,
  parameters: {
    docs: {
      description: {
        story: "Quando \`description\` é omitida, o parágrafo de suporte não é renderizado e o footer exibe apenas a lista de arquivos."
      }
    }
  }
}`,...q.parameters?.docs?.source},description:{story:"Sem prop `description` — o footer renderiza apenas a lista de arquivos.\r\nUse quando o `title` já comunica tudo que o usuário precisa saber.",...q.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Narrow container (280px)",
  render: () => <div style={{
    width: "280px"
  }}>\r
      <FileUploader title="Documento" description="PDF, máx. 10 MB." buttonLabel="Selecionar" typeIconButton="attach_file" accept="application/pdf" maxFileSize={10} onChange={files => console.log("onChange", files)} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "O hook \`useContainerWidth\` mede a largura do container via \`ResizeObserver\` e limita o nome do arquivo a \`calc(\${width}px - 60px)\`, preservando o \`ButtonIcon\` de remoção."
      }
    }
  }
}`,...E.parameters?.docs?.source},description:{story:"Container de 280 px — valida o `useContainerWidth` e o truncamento do nome\r\ndo arquivo com `text-overflow: ellipsis` via `maxWidth: calc(${width}px - 60px)`.",...E.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Controlled clear",
  render: () => {
    const [shouldClear, setShouldClear] = useState(false);
    const handleClear = () => {
      setShouldClear(true);
      setTimeout(() => setShouldClear(false), 0);
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>\r
        <FileUploader title="Anexos" description="Selecione arquivos e clique em Limpar para resetar." buttonLabel="Adicionar arquivo" typeIconButton="upload" multiple value={shouldClear ? null : undefined} onChange={files => console.log("onChange", files)} />\r
        <div>\r
          <Button style={{
          width: 'fit-content'
        }} variant="secondary" size='sm' onClick={handleClear}>\r
            Limpar arquivos\r
          </Button>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "O \`Button\` do Zeroz aciona a limpeza. Passe \`value={null}\` com flag + \`setTimeout(0)\` para limpar a lista externamente sem causar loop de estado."
      }
    }
  }
}`,...F.parameters?.docs?.source},description:{story:"Limpeza controlada com `Button` do Zeroz — passa `value={null}` momentaneamente\r\npara limpar a lista de fora do componente (ex.: após submit de formulário).\r\n\n⚠️ NÃO reflita o retorno do `onChange` de volta como `value` — isso causa loop.",...F.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "onChange live log",
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    const handleChange = (fileList: FileList | null) => {
      if (!fileList || fileList.length === 0) {
        setLog(["onChange(null) — lista vazia"]);
        return;
      }
      const entries = Array.from(fileList).map(f => \`• \${f.name} (\${(f.size / 1024).toFixed(1)} KB)\`);
      setLog([\`onChange — \${fileList.length} arquivo(s) válido(s):\`, ...entries]);
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-spacing-small)",
      width: 'fit-content'
    }}>\r
        <Card>\r
          <Card.Content>\r
              <FileUploader title="Teste de validação" description="Imagens, máx. 1 MB. Arquivos grandes mostram erro mas não entram no onChange." buttonLabel="Selecionar arquivos" typeIconButton="upload" multiple accept="image/*" maxFileSize={1} onChange={handleChange} />\r
          </Card.Content>\r
        </Card>\r
\r
        {log.length > 0 && <Card>\r
            <Card.Header>\r
                <small>\r
                  Payload do onChange\r
                </small>\r
            </Card.Header>\r
            <Card.Content>\r
              \r
                {log.map((line, i) => <small key={i}>{line}</small>)}\r
            </Card.Content>\r
          </Card>}\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstra que o \`onChange\` recebe apenas os arquivos **válidos**. Arquivos acima de 1 MB aparecem no \`FileUploader\` com erro, mas não constam no log do \`Card\` abaixo."
      }
    }
  }
}`,...B.parameters?.docs?.source},description:{story:"Log interativo — exibe em tempo real quais arquivos estão no payload do\r\n`onChange`. Demonstra que arquivos com erro NÃO aparecem na lista.\r\nUsa `Card` do Zeroz para delimitar as duas áreas visualmente.",...B.parameters?.docs?.description}}};export{F as ControlledClear,g as Default,b as Disabled,v as ImagesOnly,h as Multiple,E as NarrowContainer,q as NoDescription,B as OnChangeLiveLog,f as PdfAndDocx,C as SpreadsheetImport,y as WithSizeLimit,ee as __namedExportsOrder,Y as default};
