import{r as i,j as e}from"./iframe-CxNvl9BI.js";/* empty css               */import{I as T}from"./Icon-Bqm0CoJD.js";import{L as I}from"./Loading-DhvOqAup.js";import{B as k}from"./ButtonIcon-BvrW2_xY.js";import"./preload-helper-PPVm8Dsz.js";import"./Skeleton-C80QNm7w.js";function R(o){return new Promise((s,a)=>{const r=new FileReader;r.onload=()=>{typeof r.result=="string"?s(r.result):a(new Error("Failed to convert file to data URL."))},r.onerror=a,r.readAsDataURL(o)})}function L(o,s){const a=new DataTransfer;return Array.from(o??[]).forEach(r=>a.items.add(r)),s.forEach(r=>a.items.add(r)),a.files}function J(o,s){const a=new DataTransfer;return Array.from(o??[]).filter((r,n)=>n!==s).forEach(r=>a.items.add(r)),a.files}function V(o){return o*1024*1024}function W({value:o,onChange:s,maxFileSize:a,multiple:r}){const[n,P]=i.useState(o??null),[S,g]=i.useState([]),[A,m]=i.useState(!1),[f,c]=i.useState(null),u=i.useRef(null),x=a!==void 0?V(a):void 0;i.useEffect(()=>{P(o??null)},[o]),i.useEffect(()=>{if(!n){g([]);return}Promise.all(Array.from(n).map(R)).then(g).catch(t=>{console.error("Error loading image previews:",t),g([])})},[n]);const p=i.useCallback(t=>{P(t),s(t)},[s]),j=i.useCallback(()=>{u.current?.click()},[]),M=i.useCallback(async t=>{const l=Array.from(t.target.files??[]);if(l.length){m(!0),c(null);try{const v=l.filter(U=>x&&U.size>x?(c(`File ${U.name} exceeds the maximum file size limit.`),!1):!0);p(L(n,v)),t.target.value=""}catch{c("Error handling files.")}finally{m(!1)}}},[n,x,p]),G=i.useCallback(t=>{p(J(n,t))},[n,p]),N=i.useCallback(t=>{t.preventDefault()},[]),w=i.useCallback(async t=>{t.preventDefault();const l=Array.from(t.dataTransfer.files);if(l.length){m(!0),c(null);try{const v=r?l:[l[0]];p(L(n,v))}catch{c("Error handling dropped files.")}finally{m(!1)}}},[n,r,p]);return{selectedFiles:n,imagePreviews:S,isLoading:A,errorMessage:f,fileInputRef:u,handleButtonClick:j,handleFileChange:M,handleRemoveFile:G,handleDragOver:N,handleDrop:w}}const _=({proportion:o,description:s,title:a,disabled:r=!1,multiple:n=!1,maxFileSize:P,labelDropzone:S,iconDropzone:g,onChange:A,value:m})=>{const{selectedFiles:f,imagePreviews:c,isLoading:u,errorMessage:x,fileInputRef:p,handleButtonClick:j,handleFileChange:M,handleRemoveFile:G,handleDragOver:N,handleDrop:w}=W({value:m,onChange:A,maxFileSize:P,multiple:n}),t=f&&f.length>0,l=`calc(${o})`,v=n||!t;return e.jsxs("div",{className:"image-uploader",onDragOver:N,onDrop:w,children:[a&&e.jsx("p",{className:"image-uploader-title",children:a}),e.jsxs("div",{className:"image-previews",children:[t&&!u&&Array.from(f).map((U,B)=>e.jsxs("div",{className:"image-uploader-item",children:[e.jsx("div",{className:"delete-button-container",children:e.jsx("div",{className:"delete-button",children:e.jsx(k,{size:"sm",appearance:"default",variant:"secondary",icon:"delete",onClick:()=>G(B),disabled:r})})}),e.jsx("img",{style:{aspectRatio:l},src:c[B]??"",alt:"Preview",className:"image-preview"})]},B)),v&&e.jsxs("div",{className:`image-uploader-content ${r?"image-uploader-content-disabled":""}`,style:{aspectRatio:l},children:[e.jsx("input",{type:"file",accept:"image/*",ref:p,disabled:r,multiple:n,onChange:M,style:{display:"none"}}),!u&&e.jsx("div",{className:"uploader-item",children:e.jsxs("button",{onClick:j,style:{aspectRatio:l},className:`image-uploader-dropzone ${r?"image-uploader-dropzone-disabled":""}`,children:[e.jsx(T,{icon:g,size:"md"}),e.jsx("p",{children:S})]})}),u&&e.jsx("div",{className:"loading-screen",children:e.jsx(I,{variant:"default"})})]})]}),x&&e.jsx("p",{className:"image-uploader-error-message",children:x}),s&&e.jsx("p",{className:"image-uploader-description",children:s})]})};_.displayName="ImageUploader";const Y={title:"Components/ImageUploader",component:_,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
O **ImageUploader** é um componente para upload de imagens via clique ou drag-and-drop.
Suporta múltiplos arquivos, validação de tamanho, preview inline e remoção individual.

### Comportamento
- **Clique** — abre o seletor de arquivos nativo
- **Drag-and-drop** — arraste imagens diretamente sobre o componente
- **Preview** — exibe miniaturas das imagens selecionadas com botão de remoção individual
- **Loading** — exibe spinner enquanto os previews são gerados via \`FileReader\`
- **Erro** — exibe mensagem quando um arquivo excede o \`maxFileSize\`

### Proporções disponíveis
| proportion | uso recomendado                                 |
|------------|-------------------------------------------------|
| \`"16/9"\`  | Banners, capas de artigo, thumbnails landscape  |
| \`"1/1"\`   | Avatares, fotos de produto, thumbnails quadrados |
| \`"9/16"\`  | Stories, posts verticais, fotos de perfil        |

### Quando usar
- Upload de imagens em formulários (avatar, galeria, banner)
- Cenários onde o usuário precisa visualizar as imagens antes de enviar

### Quando não usar
- Upload de arquivos não-imagem — use um componente \`FileUploader\` genérico
- Upload direto para storage sem preview — considere uma solução mais simples

### Uso controlado
O componente é **totalmente controlado** — o estado de arquivos deve ser gerenciado
externamente via \`value\` + \`onChange\`:

\`\`\`tsx
const [files, setFiles] = useState<FileList | null>(null);

<ImageUploader
  proportion="16/9"
  labelDropzone="Clique ou arraste"
  iconDropzone="upload"
  value={files}
  onChange={setFiles}
/>
\`\`\`
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=2474-364"}},argTypes:{proportion:{control:"select",options:["1/1","16/9","9/16"],description:"Proporção (aspect ratio) aplicada à dropzone e aos previews das imagens.",table:{defaultValue:{summary:'"16/9"'},type:{summary:'"16/9" | "1/1" | "9/16"'}}},labelDropzone:{control:"text",description:"Texto exibido dentro da dropzone.",table:{type:{summary:"string"}}},iconDropzone:{control:"text",description:"Nome do ícone Material Symbol exibido na dropzone.",table:{type:{summary:"string"}}},title:{control:"text",description:"Título exibido acima do uploader.",table:{type:{summary:"string"}}},description:{control:"text",description:"Texto descritivo exibido abaixo do uploader.",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"Desabilita toda interação com o componente.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},multiple:{control:"boolean",description:"Permite seleção e upload de múltiplos arquivos.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},maxFileSize:{control:"number",description:"Tamanho máximo permitido por arquivo em MB. Arquivos que excedem o limite exibem mensagem de erro.",table:{type:{summary:"number"}}},value:{control:!1,description:"Lista de arquivos controlada externamente.",table:{type:{summary:"FileList | null"}}},onChange:{control:!1,description:"Callback disparado sempre que a lista de arquivos é alterada.",table:{type:{summary:"(files: FileList | null) => void"}}}},decorators:[o=>e.jsx("div",{children:e.jsx(o,{})})]},d=o=>{const[s,a]=i.useState(null);return e.jsx(_,{...o,value:s,onChange:a})},b={name:"Default",render:d,args:{proportion:"16/9",labelDropzone:"Clique ou arraste uma imagem",iconDropzone:"upload",disabled:!1,multiple:!1}},h={name:"Proporção — 1:1 (quadrada)",render:d,args:{proportion:"1/1",labelDropzone:"Adicionar foto",iconDropzone:"add_photo_alternate"}},y={name:"Proporção — 9:16 (vertical)",render:d,args:{proportion:"9/16",labelDropzone:"Adicionar imagem",iconDropzone:"upload"}},D={name:"Com título e descrição",render:d,args:{proportion:"16/9",labelDropzone:"Clique ou arraste uma imagem",iconDropzone:"upload",title:"Foto de capa",description:"Formatos aceitos: JPG, PNG. Tamanho máximo: 2 MB."}},z={name:"Múltiplos arquivos",render:d,args:{proportion:"1/1",labelDropzone:"Adicionar imagens",iconDropzone:"add_photo_alternate",multiple:!0,title:"Galeria de fotos",description:"Selecione até 8 imagens para a galeria."}},E={name:"Validação — limite de tamanho (1 MB)",render:d,args:{proportion:"16/9",labelDropzone:"Clique ou arraste uma imagem",iconDropzone:"upload",maxFileSize:1,description:"Tamanho máximo: 1 MB por arquivo."}},F={name:"Estado — desabilitado",render:d,args:{proportion:"1/1",labelDropzone:"Adicionar foto",iconDropzone:"add_photo_alternate",multiple:!0,title:"Fotos do produto",description:"Adicione até 8 fotos. Formatos aceitos: JPG, PNG. Máximo 5 MB por arquivo.",maxFileSize:5,disabled:!0}},q={name:"Contexto real — upload de avatar",render:d,decorators:[o=>e.jsx("div",{style:{maxWidth:"440px"},children:e.jsx(o,{})})],args:{proportion:"1/1",labelDropzone:"Foto de perfil",iconDropzone:"person",title:"Avatar",description:"JPG ou PNG, mín. 200×200px."}},C={name:"Contexto real — galeria de produto",render:d,decorators:[o=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(o,{})})],args:{proportion:"1/1",labelDropzone:"Adicionar foto",iconDropzone:"add_photo_alternate",multiple:!0,title:"Fotos do produto",description:"Adicione até 8 fotos. Formatos aceitos: JPG, PNG. Máximo 5 MB por arquivo.",maxFileSize:5}},ee=["Default","SquareProportion","VerticalProportion","WithTitleAndDescription","Multiple","WithFileSizeLimit","Disabled","AvatarUpload","ProductGallery"];b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Default",
  render: Controlled,
  args: {
    proportion: "16/9",
    labelDropzone: "Clique ou arraste uma imagem",
    iconDropzone: "upload",
    disabled: false,
    multiple: false
  }
}`,...b.parameters?.docs?.source},description:{story:`Estado base com dropzone em 16/9.\r
Clique na dropzone ou arraste uma imagem para testar o upload.`,...b.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Proporção — 1:1 (quadrada)",
  render: Controlled,
  args: {
    proportion: "1/1",
    labelDropzone: "Adicionar foto",
    iconDropzone: "add_photo_alternate"
  }
}`,...h.parameters?.docs?.source},description:{story:`Proporção 1:1 — quadrada.\r
Use para avatares, fotos de produto e thumbnails quadrados.`,...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Proporção — 9:16 (vertical)",
  render: Controlled,
  args: {
    proportion: "9/16",
    labelDropzone: "Adicionar imagem",
    iconDropzone: "upload"
  }
}`,...y.parameters?.docs?.source},description:{story:`Proporção 9:16 — vertical.\r
Use para stories, posts verticais e fotos de perfil.`,...y.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Com título e descrição",
  render: Controlled,
  args: {
    proportion: "16/9",
    labelDropzone: "Clique ou arraste uma imagem",
    iconDropzone: "upload",
    title: "Foto de capa",
    description: "Formatos aceitos: JPG, PNG. Tamanho máximo: 2 MB."
  }
}`,...D.parameters?.docs?.source},description:{story:"Uploader com título acima e descrição de instruções abaixo.\r\nUse `title` para identificar o campo e `description` para orientar o usuário\r\nsobre formatos aceitos e limites de tamanho.",...D.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Múltiplos arquivos",
  render: Controlled,
  args: {
    proportion: "1/1",
    labelDropzone: "Adicionar imagens",
    iconDropzone: "add_photo_alternate",
    multiple: true,
    title: "Galeria de fotos",
    description: "Selecione até 8 imagens para a galeria."
  }
}`,...z.parameters?.docs?.source},description:{story:"Upload de múltiplos arquivos — `multiple: true`.\r\nCada arquivo selecionado gera um preview individual em grid de 4 colunas.\r\nA dropzone permanece visível para adicionar mais imagens.",...z.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Validação — limite de tamanho (1 MB)",
  render: Controlled,
  args: {
    proportion: "16/9",
    labelDropzone: "Clique ou arraste uma imagem",
    iconDropzone: "upload",
    maxFileSize: 1,
    description: "Tamanho máximo: 1 MB por arquivo."
  }
}`,...E.parameters?.docs?.source},description:{story:"Limite de tamanho por arquivo via `maxFileSize`.\r\nTente fazer upload de um arquivo maior que 1 MB para ver a mensagem de erro.",...E.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Estado — desabilitado",
  render: Controlled,
  args: {
    proportion: "1/1",
    labelDropzone: "Adicionar foto",
    iconDropzone: "add_photo_alternate",
    multiple: true,
    title: "Fotos do produto",
    description: "Adicione até 8 fotos. Formatos aceitos: JPG, PNG. Máximo 5 MB por arquivo.",
    maxFileSize: 5,
    disabled: true
  }
}`,...F.parameters?.docs?.source},description:{story:"Estado desabilitado — `disabled: true`.\r\nA dropzone fica visualmente inativa e toda interação é bloqueada.",...F.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — upload de avatar",
  render: Controlled,
  decorators: [Story => <div style={{
    maxWidth: "440px"
  }}>\r
        <Story />\r
      </div>],
  args: {
    proportion: "1/1",
    labelDropzone: "Foto de perfil",
    iconDropzone: "person",
    title: "Avatar",
    description: "JPG ou PNG, mín. 200×200px."
  }
}`,...q.parameters?.docs?.source},description:{story:`Campo de upload de avatar — proporção quadrada com título e instrução.\r
Padrão típico em formulários de perfil e configurações de conta.`,...q.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Contexto real — galeria de produto",
  render: Controlled,
  decorators: [Story => <div style={{
    maxWidth: "600px"
  }}>\r
        <Story />\r
      </div>],
  args: {
    proportion: "1/1",
    labelDropzone: "Adicionar foto",
    iconDropzone: "add_photo_alternate",
    multiple: true,
    title: "Fotos do produto",
    description: "Adicione até 8 fotos. Formatos aceitos: JPG, PNG. Máximo 5 MB por arquivo.",
    maxFileSize: 5
  }
}`,...C.parameters?.docs?.source},description:{story:`Galeria de produto com múltiplos uploads em proporção quadrada.\r
Padrão comum em formulários de cadastro de produto em e-commerce.`,...C.parameters?.docs?.description}}};export{q as AvatarUpload,b as Default,F as Disabled,z as Multiple,C as ProductGallery,h as SquareProportion,y as VerticalProportion,E as WithFileSizeLimit,D as WithTitleAndDescription,ee as __namedExportsOrder,Y as default};
