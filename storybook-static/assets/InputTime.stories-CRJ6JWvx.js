import{r,j as o}from"./iframe-CxNvl9BI.js";import{I as N}from"./Input-BjLLbLDi.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./Skeleton-C80QNm7w.js";import"./Icon-Bqm0CoJD.js";function w(e){return Array.from({length:e+1},(t,n)=>n<10?`0${n}`:`${n}`)}function O(e){const t=e.replace(/[^\d]/g,"").slice(0,4);return t.length>2?`${t.slice(0,2)}:${t.slice(2)}`:t}function $(e){const[t="",n=""]=e.split(":");return{hour:t,minute:n}}const f=36,I=5,k=5;function D({value:e,onChange:t}){const[n,i]=r.useState(!1),[d,p]=r.useState(""),[l,m]=r.useState("");r.useEffect(()=>{if(e===void 0){p(""),m("");return}const{hour:s,minute:g}=$(e);p(s),m(g)},[e]);const h=r.useCallback(()=>i(s=>!s),[]),M=r.useCallback(()=>i(!1),[]),x=r.useCallback(s=>{p(s),t(`${s}:${l}`)},[t,l]),a=r.useCallback(s=>{m(s),t(`${d}:${s}`)},[t,d]),u=s=>{const g=O(s.target.value);s.target.value=g,t(g)},c=e??(d&&l?`${d}:${l}`:"");return{isOpen:n,selectedHour:d,selectedMinute:l,displayValue:c,togglePicker:h,closePicker:M,handleHourSelect:x,handleMinuteSelect:a,handleInputChange:u}}function P(e,t){r.useEffect(()=>{const n=i=>{e.current&&!e.current.contains(i.target)&&t()};return document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)},[e,t])}function V({values:e,selected:t,onSelect:n}){const i=r.useRef(null),d=r.useRef(),p=e.length*k,l=Math.floor(k/2)*e.length,m=Math.floor(I/2),h=r.useCallback((a,u="smooth")=>{const c=i.current;c&&c.scrollTo({top:(a+m)*f-c.clientHeight/2+f/2,behavior:u})},[m]),M=r.useCallback((a,u=l)=>{const c=e.indexOf(a);return c===-1?u:u+c},[e,l]);r.useEffect(()=>{t&&h(M(t),"instant")},[t]);const x=r.useCallback(()=>{const a=i.current;if(!a)return;const u=a.clientHeight/2-f/2,c=(a.scrollTop+u)/f-m,s=Math.max(0,Math.min(Math.round(c),p-1)),g=e[s%e.length];h(s,"smooth");const E=Math.floor(p/3);(s<E||s>p-E)&&setTimeout(()=>h(M(g),"instant"),300),n(g)},[e,p,m,h,M,n]);return r.useEffect(()=>{const a=i.current;if(!a)return;const u=()=>{clearTimeout(d.current),d.current=setTimeout(()=>x(),150)},c=()=>{clearTimeout(d.current),x()};return a.addEventListener("scroll",u,{passive:!0}),a.addEventListener("scrollend",c,{passive:!0}),()=>{a.removeEventListener("scroll",u),a.removeEventListener("scrollend",c),clearTimeout(d.current)}},[x]),{scrollRef:i}}function j({values:e,selected:t,onSelect:n}){const{scrollRef:i}=V({values:e,selected:t,onSelect:n}),d=r.useMemo(()=>Array.from({length:k},()=>e).flat(),[e]),p=I*f;return o.jsxs("div",{className:"time-column",style:{height:p,position:"relative"},children:[o.jsx("div",{className:"time-column-highlight",style:{position:"absolute",top:"50%",left:0,right:0,height:f,transform:"translateY(-50%)",pointerEvents:"none",zIndex:1}}),o.jsxs("div",{ref:i,className:"time-column-scroll",style:{height:"100%",overflowY:"scroll",scrollbarWidth:"none"},children:[o.jsx("div",{style:{height:Math.floor(I/2)*f}}),d.map((l,m)=>o.jsx("button",{className:`input-time-buttons ${l===t?"selected":""}`,style:{height:f,display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},onClick:()=>n(l),"aria-label":l,tabIndex:l===t?0:-1,children:l},m)),o.jsx("div",{style:{height:Math.floor(I/2)*f}})]})]})}const W=w(23),L=w(59),C=({label:e,placeholder:t,disabled:n=!1,error:i=!1,textError:d,onChange:p,value:l,...m})=>{const h=r.useRef(null),{isOpen:M,selectedHour:x,selectedMinute:a,displayValue:u,togglePicker:c,closePicker:s,handleHourSelect:g,handleMinuteSelect:E,handleInputChange:R}=D({value:l,onChange:p});return P(h,s),o.jsxs("div",{className:"input-time",ref:h,children:[o.jsx(N,{label:e,type:"text",value:u,placeholder:t,icon:"schedule",disabled:n,onClick:c,onChange:R,error:i,textError:d,inputMode:"numeric",pattern:"[0-9]*",...m}),M&&o.jsxs("div",{className:"input-time-modal",children:[o.jsx("div",{className:"modal-section",children:o.jsx(j,{values:W,selected:x,onSelect:g})}),o.jsx("div",{className:"modal-section",children:o.jsx(j,{values:L,selected:a,onSelect:E})})]})]})},z={title:"Components/InputTime",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
**InputTime** is a time selection field with a drum-roll picker dropdown.

The picker uses infinite-scroll columns (iOS-style) for hours and minutes —
the list loops seamlessly so the user can scroll in either direction without
hitting a boundary. Items snap to the center on scroll end.

Direct typing is also supported with auto-masking (\`HH:MM\`).

### When to use
- Time selection in forms (appointments, schedules, reminders)
- When a visual picker improves usability over a plain text field

### Best practices
- Always provide a descriptive \`label\` and a \`placeholder\` like \`"HH:MM"\`
- Use \`value\` + \`onChange\` for controlled usage in forms
- Validate the resulting string as \`HH:MM\` before submitting
        `}}},argTypes:{label:{control:"text",description:"Label above the input."},placeholder:{control:"text",description:"Placeholder shown when empty."},disabled:{control:"boolean",description:"Disables the input."},error:{control:"boolean",description:"Applies error styling."},textError:{control:"text",description:"Validation message when `error` is true."},value:{control:"text",description:"Controlled value in `HH:MM` format."},onChange:{action:"onChange",description:"Fires on every value change."}}},v={args:{label:"Start time",placeholder:"HH:MM"}},y={name:"With pre-filled value",args:{label:"Meeting time",placeholder:"HH:MM",value:"09:30"}},b={name:"Error state",args:{label:"Start time",placeholder:"HH:MM",error:!0,textError:"Please select a valid time."}},H={args:{label:"Time (unavailable)",placeholder:"HH:MM",disabled:!0,value:"14:00"}},T={name:"Controlled (with state)",render:()=>{const[e,t]=r.useState("10:00");return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[o.jsx(C,{label:"Appointment time",placeholder:"HH:MM",value:e,onChange:t}),o.jsxs("small",{style:{color:"gray"},children:["Current value: ",e||"empty"]})]})}},S={name:"Time range",render:()=>{const[e,t]=r.useState("09:00"),[n,i]=r.useState("17:00");return o.jsxs("div",{style:{display:"flex",gap:"16px"},children:[o.jsx(C,{label:"Start",placeholder:"HH:MM",value:e,onChange:t}),o.jsx(C,{label:"End",placeholder:"HH:MM",value:n,onChange:i})]})},parameters:{docs:{description:{story:"Two independent pickers side by side for a start/end time range."}}}},G=["Default","WithValue","WithError","Disabled","Controlled","TimeRange"];v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Start time",
    placeholder: "HH:MM"
  }
}`,...v.parameters?.docs?.source},description:{story:"Default uncontrolled picker.",...v.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "With pre-filled value",
  args: {
    label: "Meeting time",
    placeholder: "HH:MM",
    value: "09:30"
  }
}`,...y.parameters?.docs?.source},description:{story:"Pre-filled with a specific time.",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Error state",
  args: {
    label: "Start time",
    placeholder: "HH:MM",
    error: true,
    textError: "Please select a valid time."
  }
}`,...b.parameters?.docs?.source},description:{story:"Error state.",...b.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Time (unavailable)",
    placeholder: "HH:MM",
    disabled: true,
    value: "14:00"
  }
}`,...H.parameters?.docs?.source},description:{story:"Disabled.",...H.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Controlled (with state)",
  render: () => {
    const [time, setTime] = useState("10:00");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>\r
        <InputTime label="Appointment time" placeholder="HH:MM" value={time} onChange={setTime} />\r
        <small style={{
        color: "gray"
      }}>\r
          Current value: {time || "empty"}\r
        </small>\r
      </div>;
  }
}`,...T.parameters?.docs?.source},description:{story:"Fully controlled with external state.",...T.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Time range",
  render: () => {
    const [start, setStart] = useState("09:00");
    const [end, setEnd] = useState("17:00");
    return <div style={{
      display: "flex",
      gap: "16px"
    }}>\r
        <InputTime label="Start" placeholder="HH:MM" value={start} onChange={setStart} />\r
        <InputTime label="End" placeholder="HH:MM" value={end} onChange={setEnd} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Two independent pickers side by side for a start/end time range."
      }
    }
  }
}`,...S.parameters?.docs?.source},description:{story:"Two time pickers for a range (start / end).",...S.parameters?.docs?.description}}};export{T as Controlled,v as Default,H as Disabled,S as TimeRange,b as WithError,y as WithValue,G as __namedExportsOrder,z as default};
