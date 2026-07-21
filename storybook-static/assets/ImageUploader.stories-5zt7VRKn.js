import{r as n,j as o}from"./iframe-DFdk80Qn.js";/* empty css               */import{I as Ge}from"./Icon-C_kNoyVv.js";import{L as je}from"./Loading-DYHQTa0l.js";import{B as Ue}from"./ButtonIcon-B5f9TZ0r.js";import"./preload-helper-PPVm8Dsz.js";import"./Skeleton-bEV42asx.js";function Ne(e){return new Promise((s,i)=>{const a=new FileReader;a.onload=()=>{typeof a.result=="string"?s(a.result):i(new Error("Failed to convert file to data URL."))},a.onerror=i,a.readAsDataURL(e)})}function Me(e,s){const i=new DataTransfer;return Array.from(e??[]).forEach(a=>i.items.add(a)),s.forEach(a=>i.items.add(a)),i.files}function we(e,s){const i=new DataTransfer;return Array.from(e??[]).filter((a,t)=>t!==s).forEach(a=>i.items.add(a)),i.files}function Le(e){return e*1024*1024}function Te({value:e,onChange:s,maxFileSize:i,multiple:a}){const[t,C]=n.useState(e??null),[A,f]=n.useState([]),[M,u]=n.useState(!1),[h,m]=n.useState(null),v=n.useRef(null),_=i!==void 0?Le(i):void 0;n.useEffect(()=>{C(e??null)},[e]),n.useEffect(()=>{if(!t){f([]);return}Promise.all(Array.from(t).map(Ne)).then(f).catch(r=>{console.error("Error loading image previews:",r),f([])})},[t]);const p=n.useCallback(r=>{C(r),s(r)},[s]),G=n.useCallback(()=>{var r;(r=v.current)===null||r===void 0||r.click()},[]),j=n.useCallback(async r=>{var l;const c=Array.from((l=r.target.files)!==null&&l!==void 0?l:[]);if(c.length){u(!0),m(null);try{const L=c.filter(g=>_&&g.size>_?(m(`File ${g.name} exceeds the maximum file size limit.`),!1):!0);p(Me(t,L)),r.target.value=""}catch{m("Error handling files.")}finally{u(!1)}}},[t,_,p]),U=n.useCallback(r=>{p(we(t,r))},[t,p]),N=n.useCallback(r=>{r.preventDefault()},[]),w=n.useCallback(async r=>{r.preventDefault();const l=Array.from(r.dataTransfer.files);if(l.length){u(!0),m(null);try{const c=a?l:[l[0]];p(Me(t,c))}catch{m("Error handling dropped files.")}finally{u(!1)}}},[t,a,p]);return{selectedFiles:t,imagePreviews:A,isLoading:M,errorMessage:h,fileInputRef:v,handleButtonClick:G,handleFileChange:j,handleRemoveFile:U,handleDragOver:N,handleDrop:w}}const Ae=({proportion:e,description:s,title:i,disabled:a=!1,multiple:t=!1,maxFileSize:C,labelDropzone:A,iconDropzone:f,onChange:M,value:u})=>{const{selectedFiles:h,imagePreviews:m,isLoading:v,errorMessage:_,fileInputRef:p,handleButtonClick:G,handleFileChange:j,handleRemoveFile:U,handleDragOver:N,handleDrop:w}=Te({value:u,onChange:M,maxFileSize:C,multiple:t}),r=h&&h.length>0,l=`calc(${e})`,c=t||!r;return o.jsxs("div",{className:"image-uploader",onDragOver:N,onDrop:w,children:[i&&o.jsx("p",{className:"image-uploader-title",children:i}),o.jsxs("div",{className:"image-previews",children:[r&&!v&&Array.from(h).map((L,g)=>{var T;return o.jsxs("div",{className:"image-uploader-item",children:[o.jsx("div",{className:"delete-button-container",children:o.jsx("div",{className:"delete-button",children:o.jsx(Ue,{size:"sm",appearance:"default",variant:"secondary",icon:"delete",onClick:()=>U(g),disabled:a})})}),o.jsx("img",{style:{aspectRatio:l},src:(T=m[g])!==null&&T!==void 0?T:"",alt:"Preview",className:"image-preview"})]},g)}),c&&o.jsxs("div",{className:`image-uploader-content ${a?"image-uploader-content-disabled":""}`,style:{aspectRatio:l},children:[o.jsx("input",{type:"file",accept:"image/*",ref:p,disabled:a,multiple:t,onChange:j,style:{display:"none"}}),!v&&o.jsx("div",{className:"uploader-item",children:o.jsxs("button",{onClick:G,style:{aspectRatio:l},className:`image-uploader-dropzone ${a?"image-uploader-dropzone-disabled":""}`,children:[o.jsx(Ge,{icon:f,size:"md"}),o.jsx("p",{children:A})]})}),v&&o.jsx("div",{className:"loading-screen",children:o.jsx(je,{variant:"default"})})]})]}),_&&o.jsx("p",{className:"image-uploader-error-message",children:_}),s&&o.jsx("p",{className:"image-uploader-description",children:s})]})};Ae.displayName="ImageUploader";var B,E,W,I,R,V,k,J,O,$,Q,Z,H,K,X,Y,ee,oe,re,ae,ie,te,ne,se,le,de,pe,me,ce,ue,ve,_e,ge,fe,he,xe,be,De,ye,ze,Pe,qe,Fe,Se,Ce;const Je={title:"Components/ImageUploader",component:Ae,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
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
        `}},design:{type:"figma",url:"https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=2474-364"}},argTypes:{proportion:{control:"select",options:["1/1","16/9","9/16"],description:"Proporção (aspect ratio) aplicada à dropzone e aos previews das imagens.",table:{defaultValue:{summary:'"16/9"'},type:{summary:'"16/9" | "1/1" | "9/16"'}}},labelDropzone:{control:"text",description:"Texto exibido dentro da dropzone.",table:{type:{summary:"string"}}},iconDropzone:{control:"text",description:"Nome do ícone Material Symbol exibido na dropzone.",table:{type:{summary:"string"}}},title:{control:"text",description:"Título exibido acima do uploader.",table:{type:{summary:"string"}}},description:{control:"text",description:"Texto descritivo exibido abaixo do uploader.",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"Desabilita toda interação com o componente.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},multiple:{control:"boolean",description:"Permite seleção e upload de múltiplos arquivos.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},maxFileSize:{control:"number",description:"Tamanho máximo permitido por arquivo em MB. Arquivos que excedem o limite exibem mensagem de erro.",table:{type:{summary:"number"}}},value:{control:!1,description:"Lista de arquivos controlada externamente.",table:{type:{summary:"FileList | null"}}},onChange:{control:!1,description:"Callback disparado sempre que a lista de arquivos é alterada.",table:{type:{summary:"(files: FileList | null) => void"}}}},decorators:[e=>o.jsx("div",{children:o.jsx(e,{})})]},d=e=>{const[s,i]=n.useState(null);return o.jsx(Ae,{...e,value:s,onChange:i})},x={name:"Default",render:d,args:{proportion:"16/9",labelDropzone:"Clique ou arraste uma imagem",iconDropzone:"upload",disabled:!1,multiple:!1}},b={name:"Proporção — 1:1 (quadrada)",render:d,args:{proportion:"1/1",labelDropzone:"Adicionar foto",iconDropzone:"add_photo_alternate"}},D={name:"Proporção — 9:16 (vertical)",render:d,args:{proportion:"9/16",labelDropzone:"Adicionar imagem",iconDropzone:"upload"}},y={name:"Com título e descrição",render:d,args:{proportion:"16/9",labelDropzone:"Clique ou arraste uma imagem",iconDropzone:"upload",title:"Foto de capa",description:"Formatos aceitos: JPG, PNG. Tamanho máximo: 2 MB."}},z={name:"Múltiplos arquivos",render:d,args:{proportion:"1/1",labelDropzone:"Adicionar imagens",iconDropzone:"add_photo_alternate",multiple:!0,title:"Galeria de fotos",description:"Selecione até 8 imagens para a galeria."}},P={name:"Validação — limite de tamanho (1 MB)",render:d,args:{proportion:"16/9",labelDropzone:"Clique ou arraste uma imagem",iconDropzone:"upload",maxFileSize:1,description:"Tamanho máximo: 1 MB por arquivo."}},q={name:"Estado — desabilitado",render:d,args:{proportion:"1/1",labelDropzone:"Adicionar foto",iconDropzone:"add_photo_alternate",multiple:!0,title:"Fotos do produto",description:"Adicione até 8 fotos. Formatos aceitos: JPG, PNG. Máximo 5 MB por arquivo.",maxFileSize:5,disabled:!0}},F={name:"Contexto real — upload de avatar",render:d,decorators:[e=>o.jsx("div",{style:{maxWidth:"440px"},children:o.jsx(e,{})})],args:{proportion:"1/1",labelDropzone:"Foto de perfil",iconDropzone:"person",title:"Avatar",description:"JPG ou PNG, mín. 200×200px."}},S={name:"Contexto real — galeria de produto",render:d,decorators:[e=>o.jsx("div",{style:{maxWidth:"600px"},children:o.jsx(e,{})})],args:{proportion:"1/1",labelDropzone:"Adicionar foto",iconDropzone:"add_photo_alternate",multiple:!0,title:"Fotos do produto",description:"Adicione até 8 fotos. Formatos aceitos: JPG, PNG. Máximo 5 MB por arquivo.",maxFileSize:5}};x.parameters={...x.parameters,docs:{...(B=x.parameters)===null||B===void 0?void 0:B.docs,source:{originalSource:`{
  name: "Default",
  render: Controlled,
  args: {
    proportion: "16/9",
    labelDropzone: "Clique ou arraste uma imagem",
    iconDropzone: "upload",
    disabled: false,
    multiple: false
  }
}`,...(W=x.parameters)===null||W===void 0||(E=W.docs)===null||E===void 0?void 0:E.source},description:{story:`Estado base com dropzone em 16/9.\r
Clique na dropzone ou arraste uma imagem para testar o upload.`,...(R=x.parameters)===null||R===void 0||(I=R.docs)===null||I===void 0?void 0:I.description}}};b.parameters={...b.parameters,docs:{...(V=b.parameters)===null||V===void 0?void 0:V.docs,source:{originalSource:`{
  name: "Proporção — 1:1 (quadrada)",
  render: Controlled,
  args: {
    proportion: "1/1",
    labelDropzone: "Adicionar foto",
    iconDropzone: "add_photo_alternate"
  }
}`,...(J=b.parameters)===null||J===void 0||(k=J.docs)===null||k===void 0?void 0:k.source},description:{story:`Proporção 1:1 — quadrada.\r
Use para avatares, fotos de produto e thumbnails quadrados.`,...($=b.parameters)===null||$===void 0||(O=$.docs)===null||O===void 0?void 0:O.description}}};D.parameters={...D.parameters,docs:{...(Q=D.parameters)===null||Q===void 0?void 0:Q.docs,source:{originalSource:`{
  name: "Proporção — 9:16 (vertical)",
  render: Controlled,
  args: {
    proportion: "9/16",
    labelDropzone: "Adicionar imagem",
    iconDropzone: "upload"
  }
}`,...(H=D.parameters)===null||H===void 0||(Z=H.docs)===null||Z===void 0?void 0:Z.source},description:{story:`Proporção 9:16 — vertical.\r
Use para stories, posts verticais e fotos de perfil.`,...(X=D.parameters)===null||X===void 0||(K=X.docs)===null||K===void 0?void 0:K.description}}};y.parameters={...y.parameters,docs:{...(Y=y.parameters)===null||Y===void 0?void 0:Y.docs,source:{originalSource:`{
  name: "Com título e descrição",
  render: Controlled,
  args: {
    proportion: "16/9",
    labelDropzone: "Clique ou arraste uma imagem",
    iconDropzone: "upload",
    title: "Foto de capa",
    description: "Formatos aceitos: JPG, PNG. Tamanho máximo: 2 MB."
  }
}`,...(oe=y.parameters)===null||oe===void 0||(ee=oe.docs)===null||ee===void 0?void 0:ee.source},description:{story:"Uploader com título acima e descrição de instruções abaixo.\r\nUse `title` para identificar o campo e `description` para orientar o usuário\r\nsobre formatos aceitos e limites de tamanho.",...(ae=y.parameters)===null||ae===void 0||(re=ae.docs)===null||re===void 0?void 0:re.description}}};z.parameters={...z.parameters,docs:{...(ie=z.parameters)===null||ie===void 0?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ne=z.parameters)===null||ne===void 0||(te=ne.docs)===null||te===void 0?void 0:te.source},description:{story:"Upload de múltiplos arquivos — `multiple: true`.\r\nCada arquivo selecionado gera um preview individual em grid de 4 colunas.\r\nA dropzone permanece visível para adicionar mais imagens.",...(le=z.parameters)===null||le===void 0||(se=le.docs)===null||se===void 0?void 0:se.description}}};P.parameters={...P.parameters,docs:{...(de=P.parameters)===null||de===void 0?void 0:de.docs,source:{originalSource:`{
  name: "Validação — limite de tamanho (1 MB)",
  render: Controlled,
  args: {
    proportion: "16/9",
    labelDropzone: "Clique ou arraste uma imagem",
    iconDropzone: "upload",
    maxFileSize: 1,
    description: "Tamanho máximo: 1 MB por arquivo."
  }
}`,...(me=P.parameters)===null||me===void 0||(pe=me.docs)===null||pe===void 0?void 0:pe.source},description:{story:"Limite de tamanho por arquivo via `maxFileSize`.\r\nTente fazer upload de um arquivo maior que 1 MB para ver a mensagem de erro.",...(ue=P.parameters)===null||ue===void 0||(ce=ue.docs)===null||ce===void 0?void 0:ce.description}}};q.parameters={...q.parameters,docs:{...(ve=q.parameters)===null||ve===void 0?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ge=q.parameters)===null||ge===void 0||(_e=ge.docs)===null||_e===void 0?void 0:_e.source},description:{story:"Estado desabilitado — `disabled: true`.\r\nA dropzone fica visualmente inativa e toda interação é bloqueada.",...(he=q.parameters)===null||he===void 0||(fe=he.docs)===null||fe===void 0?void 0:fe.description}}};F.parameters={...F.parameters,docs:{...(xe=F.parameters)===null||xe===void 0?void 0:xe.docs,source:{originalSource:`{
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
}`,...(De=F.parameters)===null||De===void 0||(be=De.docs)===null||be===void 0?void 0:be.source},description:{story:`Campo de upload de avatar — proporção quadrada com título e instrução.\r
Padrão típico em formulários de perfil e configurações de conta.`,...(ze=F.parameters)===null||ze===void 0||(ye=ze.docs)===null||ye===void 0?void 0:ye.description}}};S.parameters={...S.parameters,docs:{...(Pe=S.parameters)===null||Pe===void 0?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Fe=S.parameters)===null||Fe===void 0||(qe=Fe.docs)===null||qe===void 0?void 0:qe.source},description:{story:`Galeria de produto com múltiplos uploads em proporção quadrada.\r
Padrão comum em formulários de cadastro de produto em e-commerce.`,...(Ce=S.parameters)===null||Ce===void 0||(Se=Ce.docs)===null||Se===void 0?void 0:Se.description}}};const Oe=["Default","SquareProportion","VerticalProportion","WithTitleAndDescription","Multiple","WithFileSizeLimit","Disabled","AvatarUpload","ProductGallery"];export{F as AvatarUpload,x as Default,q as Disabled,z as Multiple,S as ProductGallery,b as SquareProportion,D as VerticalProportion,P as WithFileSizeLimit,y as WithTitleAndDescription,Oe as __namedExportsOrder,Je as default};
