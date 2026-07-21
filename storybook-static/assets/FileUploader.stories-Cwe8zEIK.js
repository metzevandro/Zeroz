import{r as d,j as o}from"./iframe-C_0AXUlQ.js";/* empty css               */import{B as we}from"./Button-QvF2SVTw.js";import{I as Oe}from"./Icon-C3Uq1gPi.js";import{B as Pe}from"./ButtonIcon-Cs1zWwvD.js";import{C as g}from"./Card-KW6YZr72.js";import"./preload-helper-PPVm8Dsz.js";import"./Loading-CCCSPJuP.js";import"./Skeleton-DNOAWNPr.js";function Ee(e){return e!==void 0?e*1024*1024:void 0}function Ue(e){return`${e.name}-${e.size}-${Math.random().toString(36).slice(2,9)}`}function We(e,r,n){const a=r!==void 0&&e.size>r;return{id:Ue(e),file:e,hasError:a,errorMessage:a?`File "${e.name}" exceeds the ${n} MB size limit.`:null}}function je(e){const r=new DataTransfer;return e.forEach(({file:a})=>r.items.add(a)),r.files.length>0?r.files:null}function Re(e,r,n){return(Array.isArray(e)?e:Array.from(e)).map(t=>We(t,r,n))}function $e({multiple:e,maxFileSize:r,onChange:n,value:a}){const t=d.useRef(null),[i,c]=d.useState([]),F=Ee(r),B=d.useRef(void 0);return d.useEffect(()=>{(a===null||a!==void 0&&a.length===0)&&a!==B.current&&(B.current=a,c([]))},[a]),{fileInputRef:t,selectedFiles:i,handleFileChange:s=>{var p;const m=Array.from((p=s.target.files)!==null&&p!==void 0?p:[]);if(s.target.value="",m.length===0)return;const u=Re(m,F,r);c(D=>{const v=e?[...D,...u]:u;return n(je(v)),v})},handleTriggerInput:()=>{var s;(s=t.current)===null||s===void 0||s.click()},handleRemoveFile:s=>{c(p=>{const m=p.filter(u=>u.id!==s);return n(je(m)),m})}}}function Te(){const e=d.useRef(null),[r,n]=d.useState(null);d.useEffect(()=>{const t=e.current;if(!t)return;const i=()=>n(t.offsetWidth);if(i(),typeof ResizeObserver<"u"){const c=new ResizeObserver(i);return c.observe(t),()=>c.disconnect()}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]);const a=r?{maxWidth:`calc(${r}px - 60px)`}:{};return{containerRef:e,fileNameMaxWidth:a}}function Ge({fileObj:e,fileNameStyle:r,onRemove:n}){return o.jsxs("li",{className:`file-uploader-item ${e.hasError?"file-uploader-item-error":""}`,children:[o.jsxs("div",{className:`file-uploaded ${e.hasError?"file-uploaded-error":""}`,children:[o.jsx("p",{style:r,children:e.file.name}),o.jsxs("p",{className:"file-uploaded-icon",children:[o.jsx("div",{className:"file-uploader-icon-error",children:e.hasError&&o.jsx(Oe,{icon:"error_outline",size:"sm"})}),o.jsx(Pe,{variant:"primary",appearance:"plain",size:"sm",icon:"close",onClick:()=>n(e.id)})]})]}),e.hasError&&e.errorMessage&&o.jsx("p",{className:"file-uploader-error",children:e.errorMessage})]})}const l=({title:e,description:r,multiple:n=!1,disabled:a=!1,maxFileSize:t,accept:i,buttonLabel:c,typeIconButton:F,onChange:B,value:Me})=>{const{fileInputRef:Ne,selectedFiles:z,handleFileChange:s,handleTriggerInput:p,handleRemoveFile:m}=$e({multiple:n,maxFileSize:t,onChange:B,value:Me}),{containerRef:u,fileNameMaxWidth:D}=Te();return o.jsxs("div",{className:"file-uploader",ref:u,children:[o.jsxs("div",{className:"file-uploader-header",children:[o.jsx("h1",{children:e}),o.jsxs("div",{className:"file-uploader-button",children:[o.jsx("input",{type:"file",ref:Ne,multiple:n,disabled:a,accept:i,style:{display:"none"},onChange:s}),o.jsx(we,{variant:"primary",disabled:a,onClick:p,icon:F,size:"md",children:c})]})]}),o.jsxs("div",{className:"file-uploader-footer",children:[r&&o.jsx("p",{children:r}),z.length>0&&o.jsx("ul",{className:"file-uploader-items",children:z.map(v=>o.jsx(Ge,{fileObj:v,fileNameStyle:D,onRemove:m},v.id))})]})]})};var A,M,N,j,w,O,P,E,U,W,R,$,T,G,k,Z,V,H,J,Q,K,X,Y,ee,oe,ae,re,ne,te,ie,se,le,de,ce,pe,me,ue,ve,ge,he,fe,xe,Ce,_e,ye,be,qe,Se,Ie,Le,Be,Fe,ze,De,Ae;const eo={title:"Components/FileUploader",component:l,tags:["autodocs"],parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1065-3271"},docs:{description:{component:`
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
        `}}},argTypes:{title:{control:"text",description:"Título exibido no topo do componente.",table:{type:{summary:"string"}}},description:{control:"text",description:"Texto de suporte exibido abaixo da lista. Use para informar formatos aceitos ou limite de tamanho.",table:{type:{summary:"string"}}},buttonLabel:{control:"text",description:"Texto do botão de upload.",table:{type:{summary:"string"}}},typeIconButton:{control:"text",description:"Nome do ícone Material Symbols renderizado dentro do botão.",table:{type:{summary:"string"}}},multiple:{control:"boolean",description:"Quando `true`, permite selecionar múltiplos arquivos e acrescenta à lista. Quando `false`, substitui.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Desabilita o botão e o input de arquivo.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},maxFileSize:{control:"number",description:"Tamanho máximo de arquivo em **MB**. Arquivos que excedem esse limite exibem erro. Omitir desativa a validação.",table:{type:{summary:"number"}}},accept:{control:"text",description:"Restringe o seletor do sistema. Aceita MIME types (`image/png`), extensões (`.pdf`), wildcards (`image/*`) ou combinações separadas por vírgula.",table:{type:{summary:"string"}}},onChange:{action:"onChange",description:"Disparado após adicionar ou remover arquivos. Recebe `FileList` com os arquivos válidos, ou `null` quando a lista fica vazia.",table:{type:{summary:"(files: FileList | null) => void"}}},value:{control:!1,description:"Lista controlada externamente. Passe `null` para limpar programaticamente. Valores não-nulos são ignorados para evitar loops.",table:{type:{summary:"FileList | null"}}}}},h={name:"Default",render:()=>o.jsx(l,{title:"Anexo",description:"Selecione um arquivo para enviar.",buttonLabel:"Adicionar arquivo",typeIconButton:"upload",onChange:e=>console.log("onChange",e)})},f={name:"Multiple files",render:()=>o.jsx(l,{title:"Documentos",description:"Selecione um ou mais arquivos.",buttonLabel:"Adicionar arquivos",typeIconButton:"upload",multiple:!0,onChange:e=>console.log("onChange",e)}),parameters:{docs:{description:{story:"Clicar no botão **acrescenta** arquivos à lista. Cada arquivo tem seu próprio `ButtonIcon` de remoção (ícone `close`)."}}}},x={name:'Images only (accept="image/*")',render:()=>o.jsx(l,{title:"Foto de perfil",description:"PNG, JPG ou GIF.",buttonLabel:"Enviar foto",typeIconButton:"photo_camera",accept:"image/*",onChange:e=>console.log("onChange",e)}),parameters:{docs:{description:{story:"O seletor do OS exibe apenas imagens. Nota: `accept` é uma sugestão ao sistema — o usuário ainda pode forçar outros tipos digitando o caminho manualmente."}}}},C={name:"PDF & DOCX only",render:()=>o.jsx(l,{title:"Contrato",description:"Apenas PDF ou Word (.doc, .docx).",buttonLabel:"Anexar documento",typeIconButton:"attach_file",accept:".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",onChange:e=>console.log("onChange",e)}),parameters:{docs:{description:{story:"Combinação de extensões e MIME types para máxima compatibilidade entre navegadores e sistemas operacionais."}}}},_={name:"Spreadsheet import (.xlsx, .csv)",render:()=>o.jsx(l,{title:"Importar dados",description:"Arquivos .xlsx ou .csv.",buttonLabel:"Selecionar planilha",typeIconButton:"table_chart",accept:".xlsx,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv",onChange:e=>console.log("onChange",e)})},y={name:"With size limit (1 MB)",render:()=>o.jsx(l,{title:"Foto de perfil",description:"PNG ou JPG, máximo 1 MB.",buttonLabel:"Enviar foto",typeIconButton:"photo_camera",accept:"image/*",maxFileSize:1,onChange:e=>console.log("onChange",e)}),parameters:{docs:{description:{story:'Arquivos acima de 1 MB exibem erro com mensagem `File "..." exceeds the 1 MB size limit.` e são excluídos do payload do `onChange`.'}}}},b={name:"Disabled",args:{title:"Anexos",description:"Upload indisponível no momento.",buttonLabel:"Adicionar arquivo",typeIconButton:"upload",disabled:!0},parameters:{docs:{description:{story:'O `Button` do Zeroz recebe `disabled` e exibe o estado visual correto. O `<input type="file">` oculto também é desabilitado, impedindo qualquer abertura de seletor.'}}}},q={name:"Without description",render:()=>o.jsx(l,{title:"Anexo do chamado",buttonLabel:"Adicionar arquivo",typeIconButton:"attach_file",onChange:e=>console.log("onChange",e)}),parameters:{docs:{description:{story:"Quando `description` é omitida, o parágrafo de suporte não é renderizado e o footer exibe apenas a lista de arquivos."}}}},S={name:"Narrow container (280px)",render:()=>o.jsx("div",{style:{width:"280px"},children:o.jsx(l,{title:"Documento",description:"PDF, máx. 10 MB.",buttonLabel:"Selecionar",typeIconButton:"attach_file",accept:"application/pdf",maxFileSize:10,onChange:e=>console.log("onChange",e)})}),parameters:{docs:{description:{story:"O hook `useContainerWidth` mede a largura do container via `ResizeObserver` e limita o nome do arquivo a `calc(${width}px - 60px)`, preservando o `ButtonIcon` de remoção."}}}},I={name:"Controlled clear",render:()=>{const[e,r]=d.useState(!1),n=()=>{r(!0),setTimeout(()=>r(!1),0)};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(l,{title:"Anexos",description:"Selecione arquivos e clique em Limpar para resetar.",buttonLabel:"Adicionar arquivo",typeIconButton:"upload",multiple:!0,value:e?null:void 0,onChange:a=>console.log("onChange",a)}),o.jsx("div",{children:o.jsx(we,{style:{width:"fit-content"},variant:"secondary",size:"sm",onClick:n,children:"Limpar arquivos"})})]})},parameters:{docs:{description:{story:"O `Button` do Zeroz aciona a limpeza. Passe `value={null}` com flag + `setTimeout(0)` para limpar a lista externamente sem causar loop de estado."}}}},L={name:"onChange live log",render:()=>{const[e,r]=d.useState([]),n=a=>{if(!a||a.length===0){r(["onChange(null) — lista vazia"]);return}const t=Array.from(a).map(i=>`• ${i.name} (${(i.size/1024).toFixed(1)} KB)`);r([`onChange — ${a.length} arquivo(s) válido(s):`,...t])};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--s-spacing-small)",width:"fit-content"},children:[o.jsx(g,{children:o.jsx(g.Content,{children:o.jsx(l,{title:"Teste de validação",description:"Imagens, máx. 1 MB. Arquivos grandes mostram erro mas não entram no onChange.",buttonLabel:"Selecionar arquivos",typeIconButton:"upload",multiple:!0,accept:"image/*",maxFileSize:1,onChange:n})})}),e.length>0&&o.jsxs(g,{children:[o.jsx(g.Header,{children:o.jsx("small",{children:"Payload do onChange"})}),o.jsx(g.Content,{children:e.map((a,t)=>o.jsx("small",{children:a},t))})]})]})},parameters:{docs:{description:{story:"Demonstra que o `onChange` recebe apenas os arquivos **válidos**. Arquivos acima de 1 MB aparecem no `FileUploader` com erro, mas não constam no log do `Card` abaixo."}}}};h.parameters={...h.parameters,docs:{...(A=h.parameters)===null||A===void 0?void 0:A.docs,source:{originalSource:`{
  name: "Default",
  render: () => <FileUploader title="Anexo" description="Selecione um arquivo para enviar." buttonLabel="Adicionar arquivo" typeIconButton="upload" onChange={files => console.log("onChange", files)} />
}`,...(N=h.parameters)===null||N===void 0||(M=N.docs)===null||M===void 0?void 0:M.source},description:{story:`Estado base: arquivo único, sem restrições de tipo ou tamanho.\r
Selecionar um novo arquivo substitui o atual.`,...(w=h.parameters)===null||w===void 0||(j=w.docs)===null||j===void 0?void 0:j.description}}};f.parameters={...f.parameters,docs:{...(O=f.parameters)===null||O===void 0?void 0:O.docs,source:{originalSource:`{
  name: "Multiple files",
  render: () => <FileUploader title="Documentos" description="Selecione um ou mais arquivos." buttonLabel="Adicionar arquivos" typeIconButton="upload" multiple onChange={files => console.log("onChange", files)} />,
  parameters: {
    docs: {
      description: {
        story: "Clicar no botão **acrescenta** arquivos à lista. Cada arquivo tem seu próprio \`ButtonIcon\` de remoção (ícone \`close\`)."
      }
    }
  }
}`,...(E=f.parameters)===null||E===void 0||(P=E.docs)===null||P===void 0?void 0:P.source},description:{story:`Modo múltiplos arquivos — cada clique no botão **acrescenta** novos arquivos\r
à lista existente. Cada item tem seu próprio botão de remoção (ButtonIcon).`,...(W=f.parameters)===null||W===void 0||(U=W.docs)===null||U===void 0?void 0:U.description}}};x.parameters={...x.parameters,docs:{...(R=x.parameters)===null||R===void 0?void 0:R.docs,source:{originalSource:`{
  name: 'Images only (accept="image/*")',
  render: () => <FileUploader title="Foto de perfil" description="PNG, JPG ou GIF." buttonLabel="Enviar foto" typeIconButton="photo_camera" accept="image/*" onChange={files => console.log("onChange", files)} />,
  parameters: {
    docs: {
      description: {
        story: "O seletor do OS exibe apenas imagens. Nota: \`accept\` é uma sugestão ao sistema — o usuário ainda pode forçar outros tipos digitando o caminho manualmente."
      }
    }
  }
}`,...(T=x.parameters)===null||T===void 0||($=T.docs)===null||$===void 0?void 0:$.source},description:{story:'Seletor restrito a imagens (`accept="image/*"`).\r\nÚtil para campos de foto de perfil ou galeria.',...(k=x.parameters)===null||k===void 0||(G=k.docs)===null||G===void 0?void 0:G.description}}};C.parameters={...C.parameters,docs:{...(Z=C.parameters)===null||Z===void 0?void 0:Z.docs,source:{originalSource:`{
  name: "PDF & DOCX only",
  render: () => <FileUploader title="Contrato" description="Apenas PDF ou Word (.doc, .docx)." buttonLabel="Anexar documento" typeIconButton="attach_file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={files => console.log("onChange", files)} />,
  parameters: {
    docs: {
      description: {
        story: "Combinação de extensões e MIME types para máxima compatibilidade entre navegadores e sistemas operacionais."
      }
    }
  }
}`,...(H=C.parameters)===null||H===void 0||(V=H.docs)===null||V===void 0?void 0:V.source},description:{story:`Seletor restrito a PDF e documentos Word.\r
Usa MIME types completos para maior compatibilidade entre sistemas operacionais.`,...(Q=C.parameters)===null||Q===void 0||(J=Q.docs)===null||J===void 0?void 0:J.description}}};_.parameters={..._.parameters,docs:{...(K=_.parameters)===null||K===void 0?void 0:K.docs,source:{originalSource:`{
  name: "Spreadsheet import (.xlsx, .csv)",
  render: () => <FileUploader title="Importar dados" description="Arquivos .xlsx ou .csv." buttonLabel="Selecionar planilha" typeIconButton="table_chart" accept=".xlsx,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv" onChange={files => console.log("onChange", files)} />
}`,...(Y=_.parameters)===null||Y===void 0||(X=Y.docs)===null||X===void 0?void 0:X.source},description:{story:"Planilhas Excel e CSV — cenário de importação de dados em bulk.",...(oe=_.parameters)===null||oe===void 0||(ee=oe.docs)===null||ee===void 0?void 0:ee.description}}};y.parameters={...y.parameters,docs:{...(ae=y.parameters)===null||ae===void 0?void 0:ae.docs,source:{originalSource:`{
  name: "With size limit (1 MB)",
  render: () => <FileUploader title="Foto de perfil" description="PNG ou JPG, máximo 1 MB." buttonLabel="Enviar foto" typeIconButton="photo_camera" accept="image/*" maxFileSize={1} onChange={files => console.log("onChange", files)} />,
  parameters: {
    docs: {
      description: {
        story: 'Arquivos acima de 1 MB exibem erro com mensagem \`File "..." exceeds the 1 MB size limit.\` e são excluídos do payload do \`onChange\`.'
      }
    }
  }
}`,...(ne=y.parameters)===null||ne===void 0||(re=ne.docs)===null||re===void 0?void 0:re.source},description:{story:"Limite de 1 MB — envie um arquivo grande para ver o estado de erro.\r\nO arquivo problemático fica visível com ícone `error_outline` e mensagem,\r\nmas NÃO é incluído no payload do `onChange`.",...(ie=y.parameters)===null||ie===void 0||(te=ie.docs)===null||te===void 0?void 0:te.description}}};b.parameters={...b.parameters,docs:{...(se=b.parameters)===null||se===void 0?void 0:se.docs,source:{originalSource:`{
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
}`,...(de=b.parameters)===null||de===void 0||(le=de.docs)===null||le===void 0?void 0:le.source},description:{story:'Estado desabilitado — o `Button` interno recebe `disabled={true}`\r\ne o `<input type="file">` também é desabilitado.\r\nUse quando o upload não estiver disponível (permissões, fora do prazo etc.).',...(pe=b.parameters)===null||pe===void 0||(ce=pe.docs)===null||ce===void 0?void 0:ce.description}}};q.parameters={...q.parameters,docs:{...(me=q.parameters)===null||me===void 0?void 0:me.docs,source:{originalSource:`{
  name: "Without description",
  render: () => <FileUploader title="Anexo do chamado" buttonLabel="Adicionar arquivo" typeIconButton="attach_file" onChange={files => console.log("onChange", files)} />,
  parameters: {
    docs: {
      description: {
        story: "Quando \`description\` é omitida, o parágrafo de suporte não é renderizado e o footer exibe apenas a lista de arquivos."
      }
    }
  }
}`,...(ve=q.parameters)===null||ve===void 0||(ue=ve.docs)===null||ue===void 0?void 0:ue.source},description:{story:"Sem prop `description` — o footer renderiza apenas a lista de arquivos.\r\nUse quando o `title` já comunica tudo que o usuário precisa saber.",...(he=q.parameters)===null||he===void 0||(ge=he.docs)===null||ge===void 0?void 0:ge.description}}};S.parameters={...S.parameters,docs:{...(fe=S.parameters)===null||fe===void 0?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Ce=S.parameters)===null||Ce===void 0||(xe=Ce.docs)===null||xe===void 0?void 0:xe.source},description:{story:"Container de 280 px — valida o `useContainerWidth` e o truncamento do nome\r\ndo arquivo com `text-overflow: ellipsis` via `maxWidth: calc(${width}px - 60px)`.",...(ye=S.parameters)===null||ye===void 0||(_e=ye.docs)===null||_e===void 0?void 0:_e.description}}};I.parameters={...I.parameters,docs:{...(be=I.parameters)===null||be===void 0?void 0:be.docs,source:{originalSource:`{
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
}`,...(Se=I.parameters)===null||Se===void 0||(qe=Se.docs)===null||qe===void 0?void 0:qe.source},description:{story:"Limpeza controlada com `Button` do Zeroz — passa `value={null}` momentaneamente\r\npara limpar a lista de fora do componente (ex.: após submit de formulário).\r\n\n⚠️ NÃO reflita o retorno do `onChange` de volta como `value` — isso causa loop.",...(Le=I.parameters)===null||Le===void 0||(Ie=Le.docs)===null||Ie===void 0?void 0:Ie.description}}};L.parameters={...L.parameters,docs:{...(Be=L.parameters)===null||Be===void 0?void 0:Be.docs,source:{originalSource:`{
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
}`,...(ze=L.parameters)===null||ze===void 0||(Fe=ze.docs)===null||Fe===void 0?void 0:Fe.source},description:{story:"Log interativo — exibe em tempo real quais arquivos estão no payload do\r\n`onChange`. Demonstra que arquivos com erro NÃO aparecem na lista.\r\nUsa `Card` do Zeroz para delimitar as duas áreas visualmente.",...(Ae=L.parameters)===null||Ae===void 0||(De=Ae.docs)===null||De===void 0?void 0:De.description}}};const oo=["Default","Multiple","ImagesOnly","PdfAndDocx","SpreadsheetImport","WithSizeLimit","Disabled","NoDescription","NarrowContainer","ControlledClear","OnChangeLiveLog"];export{I as ControlledClear,h as Default,b as Disabled,x as ImagesOnly,f as Multiple,S as NarrowContainer,q as NoDescription,L as OnChangeLiveLog,C as PdfAndDocx,_ as SpreadsheetImport,y as WithSizeLimit,oo as __namedExportsOrder,eo as default};
