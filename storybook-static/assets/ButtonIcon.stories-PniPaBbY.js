import{j as e}from"./iframe-CxNvl9BI.js";import{B as n}from"./ButtonIcon-BvrW2_xY.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./Icon-Bqm0CoJD.js";import"./Skeleton-C80QNm7w.js";const z={title:"Components/ButtonIcon",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"An icon-only button with semantic color variants and two visual styles. Always provide `aria-label` for accessibility."}}},argTypes:{icon:{control:"text",description:"Material Symbols icon identifier"},appearance:{control:"radio",options:["plain","default"],description:"Visual weight of the button"},variant:{control:"select",options:["primary","secondary","success","warning","on-color"],description:"Semantic color intent"},size:{control:"radio",options:["sm","md"],description:"Size of the button"},disabled:{control:"boolean",description:"Disables the button",table:{defaultValue:{summary:"false"}}},skeleton:{control:"boolean",description:"Shows skeleton loading state",table:{defaultValue:{summary:"false"}}}}},r={name:"Playground",args:{icon:"edit",appearance:"default",variant:"primary",size:"md","aria-label":"Edit"}},i={name:"Plain",args:{icon:"close",appearance:"plain",variant:"primary",size:"md","aria-label":"Close"}},o={name:"Default",args:{icon:"add",appearance:"default",variant:"primary",size:"md","aria-label":"Add"}},u=["primary","secondary","success","warning"],s={name:"All Variants — Default appearance",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:u.map(a=>e.jsx(n,{icon:"star",appearance:"default",variant:a,size:"md","aria-label":a},a))})},t={name:"Size Variations",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:["sm","md"].map(a=>e.jsx(n,{icon:"edit",appearance:"default",variant:"primary",size:a,"aria-label":`Edit ${a}`},a))})},l={name:"Disabled",args:{icon:"delete",appearance:"default",variant:"warning",size:"md",disabled:!0,"aria-label":"Delete"}},c={name:"Skeleton (Loading)",args:{icon:"edit",appearance:"default",variant:"primary",size:"md",skeleton:!0,"aria-label":"Edit"}},p={name:"On-color variant",render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",background:"var(--s-color-fill-highlight, #6366f1)",padding:"16px",borderRadius:"8px"},children:[e.jsx(n,{icon:"close",appearance:"plain",variant:"on-color",size:"md","aria-label":"Close"}),e.jsx(n,{icon:"more_vert",appearance:"plain",variant:"on-color",size:"md","aria-label":"More options"})]}),parameters:{docs:{description:{story:'The `on-color` variant is designed for placement on colored or dark backgrounds. Use with `appearance="plain"` only.'}}}},d={name:"Full Matrix",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:["plain","default"].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{width:"64px",fontSize:"12px",color:"#888"},children:a}),u.map(m=>e.jsx(n,{icon:"bolt",appearance:a,variant:m,size:"md","aria-label":`${a} ${m}`},m))]},a))}),parameters:{docs:{description:{story:"Full matrix of all appearance × variant combinations."}}}},S=["Playground","Plain","Default","AllVariants","Sizes","Disabled","Loading","OnColor","FullMatrix"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Playground",
  args: {
    icon: "edit",
    appearance: "default",
    variant: "primary",
    size: "md",
    "aria-label": "Edit"
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Plain",
  args: {
    icon: "close",
    appearance: "plain",
    variant: "primary",
    size: "md",
    "aria-label": "Close"
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    icon: "add",
    appearance: "default",
    variant: "primary",
    size: "md",
    "aria-label": "Add"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "All Variants — Default appearance",
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "8px"
  }}>\r
      {ALL_VARIANTS.map(variant => <ButtonIcon key={variant} icon="star" appearance="default" variant={variant} size="md" aria-label={variant} />)}\r
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Size Variations",
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "8px"
  }}>\r
      {(["sm", "md"] satisfies ButtonIconSize[]).map(size => <ButtonIcon key={size} icon="edit" appearance="default" variant="primary" size={size} aria-label={\`Edit \${size}\`} />)}\r
    </div>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Disabled",
  args: {
    icon: "delete",
    appearance: "default",
    variant: "warning",
    size: "md",
    disabled: true,
    "aria-label": "Delete"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Skeleton (Loading)",
  args: {
    icon: "edit",
    appearance: "default",
    variant: "primary",
    size: "md",
    skeleton: true,
    "aria-label": "Edit"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};export{s as AllVariants,o as Default,l as Disabled,d as FullMatrix,c as Loading,p as OnColor,i as Plain,r as Playground,t as Sizes,S as __namedExportsOrder,z as default};
