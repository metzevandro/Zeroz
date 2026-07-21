import{r as l,R as V,j as e}from"./iframe-DFdk80Qn.js";import{S as L}from"./Savebar-B9UELH9f.js";import{P as K}from"./Progress-BdOiasaT.js";import{D as $,a as G}from"./Dropdown-fLLJdMBD.js";import{P as Q}from"./Page-DBJyVEvp.js";import{A as X,S as Z,a as ee,b as M,c as N}from"./SidebarSubItem-B0TAUloO.js";import{H as ae,a as ne}from"./HeaderProfile-BI3pcBPF.js";import{B as re}from"./Breadcrumb-BDwpJt0x.js";import{I as u}from"./Input-q6QXBxZX.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-y_xm8ZSK.js";import"./Icon-C_kNoyVv.js";import"./Loading-DYHQTa0l.js";import"./Skeleton-bEV42asx.js";import"./ButtonIcon-B5f9TZ0r.js";import"./Brand-B-fn6cbC.js";/* empty css               */import"./Avatar-D3BYfmOZ.js";import"./Link-p6zI2j0f.js";function te(){const[r,n]=l.useState(null);return l.useEffect(()=>{const t=()=>{const s=document.querySelector(".header-root");s&&n(s.offsetWidth)};t();const a=new ResizeObserver(t),i=document.querySelector(".header-root");return i&&a.observe(i),()=>a.disconnect()},[]),r}const ie=500,R=50,le=100/(ie/R),se=400;function oe(){const[r,n]=l.useState(!1),[t,a]=l.useState(0),i=()=>{n(!1),a(0)};return{saving:r,progressValue:t,startSave:v=>{n(!0);let d=0,m=!1;const o=setInterval(()=>{d+=le,a(Math.min(d,100)),d>=100&&(clearInterval(o),m||(m=!0,v()),setTimeout(i,se))},R)},resetSave:i}}function de(r,n){return[...new Set([...Object.keys(r),...Object.keys(n)])].every(a=>{var i,s;return((i=r[a])!==null&&i!==void 0?i:"")===((s=n[a])!==null&&s!==void 0?s:"")})}function ce({initialValues:r}){const[n,t]=l.useState({...r}),a=l.useRef({...r});l.useEffect(()=>{t({...r}),a.current={...r}},[JSON.stringify(r)]);const i=!de(a.current,n),s=l.useCallback((o,c)=>{t(p=>({...p,[o]:c}))},[]),v=l.useCallback(()=>{t({...a.current})},[]),d=l.useCallback(()=>{a.current={...n}},[n]),m=l.useCallback(o=>{if(!V.isValidElement(o))return o;const{name:c}=o.props;if(!c)return o;var p;return V.cloneElement(o,{value:(p=n[c])!==null&&p!==void 0?p:"",onChange:h=>s(c,h.target.value),name:c})},[n,s]);return{formData:n,formChanged:i,resetToInitial:v,commitSaved:d,injectControlledProps:m}}const b=({children:r,initialValues:n,onSubmit:t,onCancel:a,label:i="You have unsaved changes",labelSave:s="Save",labelCancel:v="Cancel"})=>{const d=te(),{saving:m,progressValue:o,startSave:c,resetSave:p}=oe(),{formData:h,formChanged:A,resetToInitial:J,commitSaved:z,injectControlledProps:H}=ce({initialValues:n}),O=d?{width:`${d}px`}:{},Y=()=>{c(()=>{z(),t(h)})},U=()=>{p(),J(),a?.()},q=V.Children.map(r,H);return e.jsxs("div",{className:"form-register-root",children:[m&&e.jsx("div",{className:"form-register-progress",children:e.jsx(K,{value:o})}),e.jsx("div",{className:"form-register-save-bar",style:O,children:A&&!m&&e.jsx(L,{label:i,labelSave:s,labelCancel:v,onClickSave:Y,onClickCancel:U})}),e.jsx("div",{children:q})]})};b.displayName="SavebarTrigger";var x,y,j,_,C,I,T,D,k,B,w,P,W,E,F;const we={title:"Templates/SavebarTrigger",component:b,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
**SavebarTrigger** is a form wrapper that shows a fixed \`SaveBar\`
whenever any named child input differs from \`initialValues\`.

### How it works

Pass \`initialValues\` with the last-saved field values.
The component compares current input values against them on every keystroke:

- **SaveBar appears** when any field differs from \`initialValues\`
- **SaveBar disappears** when all fields are reverted back to \`initialValues\`
- **After save**: \`onSubmit(values)\` fires and the baseline updates
- **After cancel**: fields reset to \`initialValues\` automatically

\`\`\`tsx
const [saved, setSaved] = useState({ name: "Jane", email: "jane@example.com" });

<SavebarTrigger
  initialValues={saved}
  onSubmit={(values) => setSaved(values)}
>
  <Input name="name"  label="Name"  />
  <Input name="email" label="Email" />
</SavebarTrigger>
\`\`\`

Direct children with a \`name\` prop are automatically made controlled.
No need to wire \`value\` or \`onChange\` on the children.
        `}}},argTypes:{label:{control:"text"},labelSave:{control:"text"},labelCancel:{control:"text"},onSubmit:{action:"onSubmit"},onCancel:{action:"onCancel"},initialValues:{control:"object"}}},f={render:r=>{const[n,t]=l.useState({name:"Jane Doe",email:"jane@example.com",role:"Engineer"});return e.jsxs(X,{children:[e.jsx(ae,{onClick:()=>{},breadcrumb:e.jsx(re,{items:[{pageName:"Settings",href:"#"}]}),children:e.jsx(ne,{name:"Jane Doe",letter:"J",children:e.jsx($,{visible:!0,children:e.jsx(G,{label:"Sign out",onClick:()=>{}})})})}),e.jsxs(Z,{brand:"/logo-sm.svg",brandSize:"md",toggle:!1,setToggleSidebar:()=>{},children:[e.jsx(ee,{title:"Main"}),e.jsx(M,{title:"Dashboard",icon:"home",fillIcon:!1}),e.jsxs(M,{title:"Settings",icon:"settings",fillIcon:!1,children:[e.jsx(N,{title:"Profile",active:!0,onClick:()=>{}}),e.jsx(N,{title:"Account",active:!1,onClick:()=>{}})]})]}),e.jsxs(Q,{namePage:"Profile settings",description:"Update your personal information.",withBackButton:!0,children:[e.jsx(b,{...r,initialValues:n,onSubmit:a=>t(a),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",maxWidth:"480px"},children:[e.jsx(u,{name:"name",label:"Full name"}),e.jsx(u,{name:"email",label:"Email"}),e.jsx(u,{name:"role",label:"Role"})]})}),e.jsxs("div",{style:{marginTop:"32px",padding:"16px",background:"#F0FDF4",borderRadius:"8px",border:"1px solid #BBF7D0"},children:[e.jsx("p",{style:{margin:"0 0 8px",fontSize:"12px",fontWeight:700,color:"#15803D"},children:"Saved values (baseline for comparison)"}),Object.entries(n).map(([a,i])=>e.jsxs("p",{style:{margin:0,fontSize:"13px",color:"#374151"},children:[a,": ",e.jsx("strong",{children:i||"—"})]},a))]})]})]})},args:{label:"You have unsaved changes",labelSave:"Save",labelCancel:"Cancel"}},g={name:"Minimal (empty initial values)",render:r=>{const[n,t]=l.useState({username:"",bio:""});return e.jsxs("div",{style:{padding:"32px",maxWidth:"400px"},children:[e.jsxs("p",{style:{marginBottom:"16px",fontSize:"13px",color:"#6B7280"},children:["Type in a field → SaveBar appears.",e.jsx("br",{}),"Clear the field → SaveBar disappears."]}),e.jsx(b,{...r,initialValues:n,onSubmit:a=>t(a),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(u,{name:"username",label:"Username",placeholder:"your_username"}),e.jsx(u,{name:"bio",label:"Bio",placeholder:"Tell us about yourself"})]})})]})},args:{label:"You have unsaved changes",labelSave:"Save",labelCancel:"Cancel"}},S={name:"With pre-filled values",render:r=>{const[n,t]=l.useState({name:"Jane Doe",email:"jane@example.com"});return e.jsx("div",{style:{padding:"32px",maxWidth:"400px"},children:e.jsx(b,{...r,initialValues:n,onSubmit:a=>t(a),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(u,{name:"name",label:"Name"}),e.jsx(u,{name:"email",label:"Email"})]})})})},args:{label:"You have unsaved changes",labelSave:"Save",labelCancel:"Cancel"},parameters:{docs:{description:{story:"Fields start with pre-filled values. The SaveBar only appears when a field is edited to something different from its initial value."}}}};f.parameters={...f.parameters,docs:{...(x=f.parameters)===null||x===void 0?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [saved, setSaved] = useState<FormData>({
      name: "Jane Doe",
      email: "jane@example.com",
      role: "Engineer"
    });
    return <AppShell>\r
        <Header onClick={() => {}} breadcrumb={<Breadcrumb items={[{
        pageName: "Settings",
        href: "#"
      }]} />}>\r
          <HeaderProfile name="Jane Doe" letter="J">\r
            <Dropdown visible={true}>\r
              <DropdownItem label="Sign out" onClick={() => {}} />\r
            </Dropdown>\r
          </HeaderProfile>\r
        </Header>\r
\r
        <Sidebar brand="/logo-sm.svg" brandSize="md" toggle={false} setToggleSidebar={() => {}}>\r
          <SidebarTitle title="Main" />\r
          <SidebarItem title="Dashboard" icon="home" fillIcon={false} />\r
          <SidebarItem title="Settings" icon="settings" fillIcon={false}>\r
            <SidebarSubItem title="Profile" active={true} onClick={() => {}} />\r
            <SidebarSubItem title="Account" active={false} onClick={() => {}} />\r
          </SidebarItem>\r
        </Sidebar>\r
\r
        <Page namePage="Profile settings" description="Update your personal information." withBackButton>\r
          <SavebarTrigger {...args} initialValues={saved} onSubmit={values => setSaved(values)}>\r
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "480px"
          }}>\r
              <Input name="name" label="Full name" />\r
              <Input name="email" label="Email" />\r
              <Input name="role" label="Role" />\r
            </div>\r
          </SavebarTrigger>\r
\r
          <div style={{
          marginTop: "32px",
          padding: "16px",
          background: "#F0FDF4",
          borderRadius: "8px",
          border: "1px solid #BBF7D0"
        }}>\r
            <p style={{
            margin: "0 0 8px",
            fontSize: "12px",
            fontWeight: 700,
            color: "#15803D"
          }}>\r
              Saved values (baseline for comparison)\r
            </p>\r
            {Object.entries(saved).map(([k, v]) => <p key={k} style={{
            margin: 0,
            fontSize: "13px",
            color: "#374151"
          }}>\r
                {k}: <strong>{v || "—"}</strong>\r
              </p>)}\r
          </div>\r
        </Page>\r
      </AppShell>;
  },
  args: {
    label: "You have unsaved changes",
    labelSave: "Save",
    labelCancel: "Cancel"
  }
}`,...(j=f.parameters)===null||j===void 0||(y=j.docs)===null||y===void 0?void 0:y.source},description:{story:`Full app layout. Edit any field to trigger the SaveBar.\r
Revert the field back to its original value — the SaveBar disappears.`,...(C=f.parameters)===null||C===void 0||(_=C.docs)===null||_===void 0?void 0:_.description}}};g.parameters={...g.parameters,docs:{...(I=g.parameters)===null||I===void 0?void 0:I.docs,source:{originalSource:`{
  name: "Minimal (empty initial values)",
  render: args => {
    const [saved, setSaved] = useState<FormData>({
      username: "",
      bio: ""
    });
    return <div style={{
      padding: "32px",
      maxWidth: "400px"
    }}>\r
        <p style={{
        marginBottom: "16px",
        fontSize: "13px",
        color: "#6B7280"
      }}>\r
          Type in a field → SaveBar appears.\r
          <br />\r
          Clear the field → SaveBar disappears.\r
        </p>\r
        <SavebarTrigger {...args} initialValues={saved} onSubmit={values => setSaved(values)}>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}>\r
            <Input name="username" label="Username" placeholder="your_username" />\r
            <Input name="bio" label="Bio" placeholder="Tell us about yourself" />\r
          </div>\r
        </SavebarTrigger>\r
      </div>;
  },
  args: {
    label: "You have unsaved changes",
    labelSave: "Save",
    labelCancel: "Cancel"
  }
}`,...(D=g.parameters)===null||D===void 0||(T=D.docs)===null||T===void 0?void 0:T.source},description:{story:`Minimal — no layout wrapper.\r
Fields start empty. Type anything to show the SaveBar.\r
Clear the field again to hide it.`,...(B=g.parameters)===null||B===void 0||(k=B.docs)===null||k===void 0?void 0:k.description}}};S.parameters={...S.parameters,docs:{...(w=S.parameters)===null||w===void 0?void 0:w.docs,source:{originalSource:`{
  name: "With pre-filled values",
  render: args => {
    const [saved, setSaved] = useState<FormData>({
      name: "Jane Doe",
      email: "jane@example.com"
    });
    return <div style={{
      padding: "32px",
      maxWidth: "400px"
    }}>\r
        <SavebarTrigger {...args} initialValues={saved} onSubmit={values => setSaved(values)}>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}>\r
            <Input name="name" label="Name" />\r
            <Input name="email" label="Email" />\r
          </div>\r
        </SavebarTrigger>\r
      </div>;
  },
  args: {
    label: "You have unsaved changes",
    labelSave: "Save",
    labelCancel: "Cancel"
  },
  parameters: {
    docs: {
      description: {
        story: "Fields start with pre-filled values. The SaveBar only appears when a field is edited to something different from its initial value."
      }
    }
  }
}`,...(W=S.parameters)===null||W===void 0||(P=W.docs)===null||P===void 0?void 0:P.source},description:{story:`Pre-filled values. Shows that the SaveBar only appears when a value\r
actually differs from the initial state.`,...(F=S.parameters)===null||F===void 0||(E=F.docs)===null||E===void 0?void 0:E.description}}};const Pe=["Interactive","Minimal","WithPrefilledValues"];export{f as Interactive,g as Minimal,S as WithPrefilledValues,Pe as __namedExportsOrder,we as default};
