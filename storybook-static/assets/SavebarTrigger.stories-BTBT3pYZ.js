import{r as s,R as h,j as e}from"./iframe-CxNvl9BI.js";import{S as F}from"./Savebar-6G0kcv_R.js";import{P as W}from"./Progress-DPg4FOfp.js";import{D as V,a as N}from"./Dropdown-CP3gwo0h.js";import{P as R}from"./Page-CnSCqIRQ.js";import{A as M,S as A,a as J,b as x,c as y}from"./SidebarSubItem-CRLGyUh8.js";import{H as z,a as H}from"./HeaderProfile-vDoOGCpk.js";import{B as O}from"./Breadcrumb-HkXylJyb.js";import{I as p}from"./Input-BjLLbLDi.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CH6qqEEx.js";import"./Icon-Bqm0CoJD.js";import"./Loading-DhvOqAup.js";import"./Skeleton-C80QNm7w.js";import"./ButtonIcon-BvrW2_xY.js";import"./Brand-r7_AXlLh.js";/* empty css               */import"./Avatar-CdL7RA1a.js";import"./Link-CXf21LbM.js";function Y(){const[r,n]=s.useState(null);return s.useEffect(()=>{const t=()=>{const o=document.querySelector(".header-root");o&&n(o.offsetWidth)};t();const a=new ResizeObserver(t),l=document.querySelector(".header-root");return l&&a.observe(l),()=>a.disconnect()},[]),r}const _=500,j=50,U=100/(_/j),q=400;function L(){const[r,n]=s.useState(!1),[t,a]=s.useState(0),l=()=>{n(!1),a(0)};return{saving:r,progressValue:t,startSave:u=>{n(!0);let d=0,m=!1;const i=setInterval(()=>{d+=U,a(Math.min(d,100)),d>=100&&(clearInterval(i),m||(m=!0,u()),setTimeout(l,q))},j)},resetSave:l}}function K(r,n){return[...new Set([...Object.keys(r),...Object.keys(n)])].every(a=>(r[a]??"")===(n[a]??""))}function $({initialValues:r}){const[n,t]=s.useState({...r}),a=s.useRef({...r});s.useEffect(()=>{t({...r}),a.current={...r}},[JSON.stringify(r)]);const l=!K(a.current,n),o=s.useCallback((i,c)=>{t(v=>({...v,[i]:c}))},[]),u=s.useCallback(()=>{t({...a.current})},[]),d=s.useCallback(()=>{a.current={...n}},[n]),m=s.useCallback(i=>{if(!h.isValidElement(i))return i;const{name:c}=i.props;return c?h.cloneElement(i,{value:n[c]??"",onChange:v=>o(c,v.target.value),name:c}):i},[n,o]);return{formData:n,formChanged:l,resetToInitial:u,commitSaved:d,injectControlledProps:m}}const b=({children:r,initialValues:n,onSubmit:t,onCancel:a,label:l="You have unsaved changes",labelSave:o="Save",labelCancel:u="Cancel"})=>{const d=Y(),{saving:m,progressValue:i,startSave:c,resetSave:v}=L(),{formData:C,formChanged:T,resetToInitial:D,commitSaved:I,injectControlledProps:B}=$({initialValues:n}),k=d?{width:`${d}px`}:{},w=()=>{c(()=>{I(),t(C)})},P=()=>{v(),D(),a?.()},E=h.Children.map(r,B);return e.jsxs("div",{className:"form-register-root",children:[m&&e.jsx("div",{className:"form-register-progress",children:e.jsx(W,{value:i})}),e.jsx("div",{className:"form-register-save-bar",style:k,children:T&&!m&&e.jsx(F,{label:l,labelSave:o,labelCancel:u,onClickSave:w,onClickCancel:P})}),e.jsx("div",{children:E})]})};b.displayName="SavebarTrigger";const ge={title:"Templates/SavebarTrigger",component:b,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
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
        `}}},argTypes:{label:{control:"text"},labelSave:{control:"text"},labelCancel:{control:"text"},onSubmit:{action:"onSubmit"},onCancel:{action:"onCancel"},initialValues:{control:"object"}}},g={render:r=>{const[n,t]=s.useState({name:"Jane Doe",email:"jane@example.com",role:"Engineer"});return e.jsxs(M,{children:[e.jsx(z,{onClick:()=>{},breadcrumb:e.jsx(O,{items:[{pageName:"Settings",href:"#"}]}),children:e.jsx(H,{name:"Jane Doe",letter:"J",children:e.jsx(V,{visible:!0,children:e.jsx(N,{label:"Sign out",onClick:()=>{}})})})}),e.jsxs(A,{brand:"/logo-sm.svg",brandSize:"md",toggle:!1,setToggleSidebar:()=>{},children:[e.jsx(J,{title:"Main"}),e.jsx(x,{title:"Dashboard",icon:"home",fillIcon:!1}),e.jsxs(x,{title:"Settings",icon:"settings",fillIcon:!1,children:[e.jsx(y,{title:"Profile",active:!0,onClick:()=>{}}),e.jsx(y,{title:"Account",active:!1,onClick:()=>{}})]})]}),e.jsxs(R,{namePage:"Profile settings",description:"Update your personal information.",withBackButton:!0,children:[e.jsx(b,{...r,initialValues:n,onSubmit:a=>t(a),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",maxWidth:"480px"},children:[e.jsx(p,{name:"name",label:"Full name"}),e.jsx(p,{name:"email",label:"Email"}),e.jsx(p,{name:"role",label:"Role"})]})}),e.jsxs("div",{style:{marginTop:"32px",padding:"16px",background:"#F0FDF4",borderRadius:"8px",border:"1px solid #BBF7D0"},children:[e.jsx("p",{style:{margin:"0 0 8px",fontSize:"12px",fontWeight:700,color:"#15803D"},children:"Saved values (baseline for comparison)"}),Object.entries(n).map(([a,l])=>e.jsxs("p",{style:{margin:0,fontSize:"13px",color:"#374151"},children:[a,": ",e.jsx("strong",{children:l||"—"})]},a))]})]})]})},args:{label:"You have unsaved changes",labelSave:"Save",labelCancel:"Cancel"}},S={name:"Minimal (empty initial values)",render:r=>{const[n,t]=s.useState({username:"",bio:""});return e.jsxs("div",{style:{padding:"32px",maxWidth:"400px"},children:[e.jsxs("p",{style:{marginBottom:"16px",fontSize:"13px",color:"#6B7280"},children:["Type in a field → SaveBar appears.",e.jsx("br",{}),"Clear the field → SaveBar disappears."]}),e.jsx(b,{...r,initialValues:n,onSubmit:a=>t(a),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(p,{name:"username",label:"Username",placeholder:"your_username"}),e.jsx(p,{name:"bio",label:"Bio",placeholder:"Tell us about yourself"})]})})]})},args:{label:"You have unsaved changes",labelSave:"Save",labelCancel:"Cancel"}},f={name:"With pre-filled values",render:r=>{const[n,t]=s.useState({name:"Jane Doe",email:"jane@example.com"});return e.jsx("div",{style:{padding:"32px",maxWidth:"400px"},children:e.jsx(b,{...r,initialValues:n,onSubmit:a=>t(a),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(p,{name:"name",label:"Name"}),e.jsx(p,{name:"email",label:"Email"})]})})})},args:{label:"You have unsaved changes",labelSave:"Save",labelCancel:"Cancel"},parameters:{docs:{description:{story:"Fields start with pre-filled values. The SaveBar only appears when a field is edited to something different from its initial value."}}}},Se=["Interactive","Minimal","WithPrefilledValues"];g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Full app layout. Edit any field to trigger the SaveBar.\r
Revert the field back to its original value — the SaveBar disappears.`,...g.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`Minimal — no layout wrapper.\r
Fields start empty. Type anything to show the SaveBar.\r
Clear the field again to hide it.`,...S.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`Pre-filled values. Shows that the SaveBar only appears when a value\r
actually differs from the initial state.`,...f.parameters?.docs?.description}}};export{g as Interactive,S as Minimal,f as WithPrefilledValues,Se as __namedExportsOrder,ge as default};
