import{j as e}from"./iframe-Cuzq1CpA.js";import{B as r}from"./ButtonIcon-g9GE-hSP.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./Icon-C2kFcyns.js";import"./Skeleton-BVkqHP_m.js";var u,v,g,_,y,f,x,b,z,S,h,A,D,I,k,V,P,j,w,L,B,C,M,F,E,O,R;const J={title:"Components/ButtonIcon",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"An icon-only button with semantic color variants and two visual styles. Always provide `aria-label` for accessibility."}}},argTypes:{icon:{control:"text",description:"Material Symbols icon identifier"},appearance:{control:"radio",options:["plain","default"],description:"Visual weight of the button"},variant:{control:"select",options:["primary","secondary","success","warning","on-color"],description:"Semantic color intent"},size:{control:"radio",options:["sm","md"],description:"Size of the button"},disabled:{control:"boolean",description:"Disables the button",table:{defaultValue:{summary:"false"}}},skeleton:{control:"boolean",description:"Shows skeleton loading state",table:{defaultValue:{summary:"false"}}}}},n={name:"Playground",args:{icon:"edit",appearance:"default",variant:"primary",size:"md","aria-label":"Edit"}},i={name:"Plain",args:{icon:"close",appearance:"plain",variant:"primary",size:"md","aria-label":"Close"}},o={name:"Default",args:{icon:"add",appearance:"default",variant:"primary",size:"md","aria-label":"Add"}},T=["primary","secondary","success","warning"],s={name:"All Variants — Default appearance",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:T.map(a=>e.jsx(r,{icon:"star",appearance:"default",variant:a,size:"md","aria-label":a},a))})},l={name:"Size Variations",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:["sm","md"].map(a=>e.jsx(r,{icon:"edit",appearance:"default",variant:"primary",size:a,"aria-label":`Edit ${a}`},a))})},t={name:"Disabled",args:{icon:"delete",appearance:"default",variant:"warning",size:"md",disabled:!0,"aria-label":"Delete"}},d={name:"Skeleton (Loading)",args:{icon:"edit",appearance:"default",variant:"primary",size:"md",skeleton:!0,"aria-label":"Edit"}},p={name:"On-color variant",render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",background:"var(--s-color-fill-highlight, #6366f1)",padding:"16px",borderRadius:"8px"},children:[e.jsx(r,{icon:"close",appearance:"plain",variant:"on-color",size:"md","aria-label":"Close"}),e.jsx(r,{icon:"more_vert",appearance:"plain",variant:"on-color",size:"md","aria-label":"More options"})]}),parameters:{docs:{description:{story:'The `on-color` variant is designed for placement on colored or dark backgrounds. Use with `appearance="plain"` only.'}}}},c={name:"Full Matrix",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:["plain","default"].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{width:"64px",fontSize:"12px",color:"#888"},children:a}),T.map(m=>e.jsx(r,{icon:"bolt",appearance:a,variant:m,size:"md","aria-label":`${a} ${m}`},m))]},a))}),parameters:{docs:{description:{story:"Full matrix of all appearance × variant combinations."}}}};n.parameters={...n.parameters,docs:{...(u=n.parameters)===null||u===void 0?void 0:u.docs,source:{originalSource:`{
  name: "Playground",
  args: {
    icon: "edit",
    appearance: "default",
    variant: "primary",
    size: "md",
    "aria-label": "Edit"
  }
}`,...(g=n.parameters)===null||g===void 0||(v=g.docs)===null||v===void 0?void 0:v.source}}};i.parameters={...i.parameters,docs:{...(_=i.parameters)===null||_===void 0?void 0:_.docs,source:{originalSource:`{
  name: "Plain",
  args: {
    icon: "close",
    appearance: "plain",
    variant: "primary",
    size: "md",
    "aria-label": "Close"
  }
}`,...(f=i.parameters)===null||f===void 0||(y=f.docs)===null||y===void 0?void 0:y.source}}};o.parameters={...o.parameters,docs:{...(x=o.parameters)===null||x===void 0?void 0:x.docs,source:{originalSource:`{
  name: "Default",
  args: {
    icon: "add",
    appearance: "default",
    variant: "primary",
    size: "md",
    "aria-label": "Add"
  }
}`,...(z=o.parameters)===null||z===void 0||(b=z.docs)===null||b===void 0?void 0:b.source}}};s.parameters={...s.parameters,docs:{...(S=s.parameters)===null||S===void 0?void 0:S.docs,source:{originalSource:`{
  name: "All Variants — Default appearance",
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "8px"
  }}>\r
      {ALL_VARIANTS.map(variant => <ButtonIcon key={variant} icon="star" appearance="default" variant={variant} size="md" aria-label={variant} />)}\r
    </div>
}`,...(A=s.parameters)===null||A===void 0||(h=A.docs)===null||h===void 0?void 0:h.source}}};l.parameters={...l.parameters,docs:{...(D=l.parameters)===null||D===void 0?void 0:D.docs,source:{originalSource:`{
  name: "Size Variations",
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "8px"
  }}>\r
      {(["sm", "md"] satisfies ButtonIconSize[]).map(size => <ButtonIcon key={size} icon="edit" appearance="default" variant="primary" size={size} aria-label={\`Edit \${size}\`} />)}\r
    </div>
}`,...(k=l.parameters)===null||k===void 0||(I=k.docs)===null||I===void 0?void 0:I.source}}};t.parameters={...t.parameters,docs:{...(V=t.parameters)===null||V===void 0?void 0:V.docs,source:{originalSource:`{
  name: "Disabled",
  args: {
    icon: "delete",
    appearance: "default",
    variant: "warning",
    size: "md",
    disabled: true,
    "aria-label": "Delete"
  }
}`,...(j=t.parameters)===null||j===void 0||(P=j.docs)===null||P===void 0?void 0:P.source}}};d.parameters={...d.parameters,docs:{...(w=d.parameters)===null||w===void 0?void 0:w.docs,source:{originalSource:`{
  name: "Skeleton (Loading)",
  args: {
    icon: "edit",
    appearance: "default",
    variant: "primary",
    size: "md",
    skeleton: true,
    "aria-label": "Edit"
  }
}`,...(B=d.parameters)===null||B===void 0||(L=B.docs)===null||L===void 0?void 0:L.source}}};p.parameters={...p.parameters,docs:{...(C=p.parameters)===null||C===void 0?void 0:C.docs,source:{originalSource:`{
  name: "On-color variant",
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "var(--s-color-fill-highlight, #6366f1)",
    padding: "16px",
    borderRadius: "8px"
  }}>\r
      <ButtonIcon icon="close" appearance="plain" variant="on-color" size="md" aria-label="Close" />\r
      <ButtonIcon icon="more_vert" appearance="plain" variant="on-color" size="md" aria-label="More options" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'The \`on-color\` variant is designed for placement on colored or dark backgrounds. Use with \`appearance="plain"\` only.'
      }
    }
  }
}`,...(F=p.parameters)===null||F===void 0||(M=F.docs)===null||M===void 0?void 0:M.source}}};c.parameters={...c.parameters,docs:{...(E=c.parameters)===null||E===void 0?void 0:E.docs,source:{originalSource:`{
  name: "Full Matrix",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  }}>\r
      {(["plain", "default"] satisfies ButtonIconAppearance[]).map(appearance => <div key={appearance} style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>\r
            <span style={{
        width: "64px",
        fontSize: "12px",
        color: "#888"
      }}>\r
              {appearance}\r
            </span>\r
            {ALL_VARIANTS.map(variant => <ButtonIcon key={variant} icon="bolt" appearance={appearance} variant={variant} size="md" aria-label={\`\${appearance} \${variant}\`} />)}\r
          </div>)}\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Full matrix of all appearance × variant combinations."
      }
    }
  }
}`,...(R=c.parameters)===null||R===void 0||(O=R.docs)===null||O===void 0?void 0:O.source}}};const K=["Playground","Plain","Default","AllVariants","Sizes","Disabled","Loading","OnColor","FullMatrix"];export{s as AllVariants,o as Default,t as Disabled,c as FullMatrix,d as Loading,p as OnColor,i as Plain,n as Playground,l as Sizes,K as __namedExportsOrder,J as default};
