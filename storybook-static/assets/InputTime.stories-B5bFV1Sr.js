import{r,j as o}from"./iframe-Cuzq1CpA.js";import{I as ie}from"./Input-D7ShjDHo.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./Skeleton-BVkqHP_m.js";import"./Icon-C2kFcyns.js";function ae(e){return Array.from({length:e+1},(t,n)=>n<10?`0${n}`:`${n}`)}function de(e){const t=e.replace(/[^\d]/g,"").slice(0,4);return t.length>2?`${t.slice(0,2)}:${t.slice(2)}`:t}function ce(e){const[t="",n=""]=e.split(":");return{hour:t,minute:n}}const g=36,S=5,se=5;function ue({value:e,onChange:t}){const[n,i]=r.useState(!1),[c,m]=r.useState(""),[l,p]=r.useState("");r.useEffect(()=>{if(e===void 0){m(""),p("");return}const{hour:s,minute:v}=ce(e);m(s),p(v)},[e]);const h=r.useCallback(()=>i(s=>!s),[]),f=r.useCallback(()=>i(!1),[]),_=r.useCallback(s=>{m(s),t(`${s}:${l}`)},[t,l]),a=r.useCallback(s=>{p(s),t(`${c}:${s}`)},[t,c]),u=s=>{const v=de(s.target.value);s.target.value=v,t(v)},d=e??(c&&l?`${c}:${l}`:"");return{isOpen:n,selectedHour:c,selectedMinute:l,displayValue:d,togglePicker:h,closePicker:f,handleHourSelect:_,handleMinuteSelect:a,handleInputChange:u}}function me(e,t){r.useEffect(()=>{const n=i=>{e.current&&!e.current.contains(i.target)&&t()};return document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)},[e,t])}function pe({values:e,selected:t,onSelect:n}){const i=r.useRef(null),c=r.useRef(),m=e.length*se,l=Math.floor(se/2)*e.length,p=Math.floor(S/2),h=r.useCallback((a,u="smooth")=>{const d=i.current;d&&d.scrollTo({top:(a+p)*g-d.clientHeight/2+g/2,behavior:u})},[p]),f=r.useCallback((a,u=l)=>{const d=e.indexOf(a);return d===-1?u:u+d},[e,l]);r.useEffect(()=>{t&&h(f(t),"instant")},[t]);const _=r.useCallback(()=>{const a=i.current;if(!a)return;const u=a.clientHeight/2-g/2,d=(a.scrollTop+u)/g-p,s=Math.max(0,Math.min(Math.round(d),m-1)),v=e[s%e.length];h(s,"smooth");const E=Math.floor(m/3);(s<E||s>m-E)&&setTimeout(()=>h(f(v),"instant"),300),n(v)},[e,m,p,h,f,n]);return r.useEffect(()=>{const a=i.current;if(!a)return;const u=()=>{clearTimeout(c.current),c.current=setTimeout(()=>_(),150)},d=()=>{clearTimeout(c.current),_()};return a.addEventListener("scroll",u,{passive:!0}),a.addEventListener("scrollend",d,{passive:!0}),()=>{a.removeEventListener("scroll",u),a.removeEventListener("scrollend",d),clearTimeout(c.current)}},[_]),{scrollRef:i}}function oe({values:e,selected:t,onSelect:n}){const{scrollRef:i}=pe({values:e,selected:t,onSelect:n}),c=r.useMemo(()=>Array.from({length:se},()=>e).flat(),[e]),m=S*g;return o.jsxs("div",{className:"time-column",style:{height:m,position:"relative"},children:[o.jsx("div",{className:"time-column-highlight",style:{position:"absolute",top:"50%",left:0,right:0,height:g,transform:"translateY(-50%)",pointerEvents:"none",zIndex:1}}),o.jsxs("div",{ref:i,className:"time-column-scroll",style:{height:"100%",overflowY:"scroll",scrollbarWidth:"none"},children:[o.jsx("div",{style:{height:Math.floor(S/2)*g}}),c.map((l,p)=>o.jsx("button",{className:`input-time-buttons ${l===t?"selected":""}`,style:{height:g,display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},onClick:()=>n(l),"aria-label":l,tabIndex:l===t?0:-1,children:l},p)),o.jsx("div",{style:{height:Math.floor(S/2)*g}})]})]})}const he=ae(23),ve=ae(59),C=({label:e,placeholder:t,disabled:n=!1,error:i=!1,textError:c,onChange:m,value:l,...p})=>{const h=r.useRef(null),{isOpen:f,selectedHour:_,selectedMinute:a,displayValue:u,togglePicker:d,closePicker:s,handleHourSelect:v,handleMinuteSelect:E,handleInputChange:le}=ue({value:l,onChange:m});return me(h,s),o.jsxs("div",{className:"input-time",ref:h,children:[o.jsx(ie,{label:e,type:"text",value:u,placeholder:t,icon:"schedule",disabled:n,onClick:d,onChange:le,error:i,textError:c,inputMode:"numeric",pattern:"[0-9]*",...p}),f&&o.jsxs("div",{className:"input-time-modal",children:[o.jsx("div",{className:"modal-section",children:o.jsx(oe,{values:he,selected:_,onSelect:v})}),o.jsx("div",{className:"modal-section",children:o.jsx(oe,{values:ve,selected:a,onSelect:E})})]})]})};var I,k,j,w,D,W,R,V,N,O,$,P,L,A,U,F,B,Y,z,G,q,J,K,Q,X,Z,ee,te,re,ne;const ye={title:"Components/InputTime",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{label:{control:"text",description:"Label above the input."},placeholder:{control:"text",description:"Placeholder shown when empty."},disabled:{control:"boolean",description:"Disables the input."},error:{control:"boolean",description:"Applies error styling."},textError:{control:"text",description:"Validation message when `error` is true."},value:{control:"text",description:"Controlled value in `HH:MM` format."},onChange:{action:"onChange",description:"Fires on every value change."}}},M={args:{label:"Start time",placeholder:"HH:MM"}},x={name:"With pre-filled value",args:{label:"Meeting time",placeholder:"HH:MM",value:"09:30"}},b={name:"Error state",args:{label:"Start time",placeholder:"HH:MM",error:!0,textError:"Please select a valid time."}},y={args:{label:"Time (unavailable)",placeholder:"HH:MM",disabled:!0,value:"14:00"}},H={name:"Controlled (with state)",render:()=>{const[e,t]=r.useState("10:00");return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[o.jsx(C,{label:"Appointment time",placeholder:"HH:MM",value:e,onChange:t}),o.jsxs("small",{style:{color:"gray"},children:["Current value: ",e||"empty"]})]})}},T={name:"Time range",render:()=>{const[e,t]=r.useState("09:00"),[n,i]=r.useState("17:00");return o.jsxs("div",{style:{display:"flex",gap:"16px"},children:[o.jsx(C,{label:"Start",placeholder:"HH:MM",value:e,onChange:t}),o.jsx(C,{label:"End",placeholder:"HH:MM",value:n,onChange:i})]})},parameters:{docs:{description:{story:"Two independent pickers side by side for a start/end time range."}}}};M.parameters={...M.parameters,docs:{...(I=M.parameters)===null||I===void 0?void 0:I.docs,source:{originalSource:`{
  args: {
    label: "Start time",
    placeholder: "HH:MM"
  }
}`,...(j=M.parameters)===null||j===void 0||(k=j.docs)===null||k===void 0?void 0:k.source},description:{story:"Default uncontrolled picker.",...(D=M.parameters)===null||D===void 0||(w=D.docs)===null||w===void 0?void 0:w.description}}};x.parameters={...x.parameters,docs:{...(W=x.parameters)===null||W===void 0?void 0:W.docs,source:{originalSource:`{
  name: "With pre-filled value",
  args: {
    label: "Meeting time",
    placeholder: "HH:MM",
    value: "09:30"
  }
}`,...(V=x.parameters)===null||V===void 0||(R=V.docs)===null||R===void 0?void 0:R.source},description:{story:"Pre-filled with a specific time.",...(O=x.parameters)===null||O===void 0||(N=O.docs)===null||N===void 0?void 0:N.description}}};b.parameters={...b.parameters,docs:{...($=b.parameters)===null||$===void 0?void 0:$.docs,source:{originalSource:`{
  name: "Error state",
  args: {
    label: "Start time",
    placeholder: "HH:MM",
    error: true,
    textError: "Please select a valid time."
  }
}`,...(L=b.parameters)===null||L===void 0||(P=L.docs)===null||P===void 0?void 0:P.source},description:{story:"Error state.",...(U=b.parameters)===null||U===void 0||(A=U.docs)===null||A===void 0?void 0:A.description}}};y.parameters={...y.parameters,docs:{...(F=y.parameters)===null||F===void 0?void 0:F.docs,source:{originalSource:`{
  args: {
    label: "Time (unavailable)",
    placeholder: "HH:MM",
    disabled: true,
    value: "14:00"
  }
}`,...(Y=y.parameters)===null||Y===void 0||(B=Y.docs)===null||B===void 0?void 0:B.source},description:{story:"Disabled.",...(G=y.parameters)===null||G===void 0||(z=G.docs)===null||z===void 0?void 0:z.description}}};H.parameters={...H.parameters,docs:{...(q=H.parameters)===null||q===void 0?void 0:q.docs,source:{originalSource:`{
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
}`,...(K=H.parameters)===null||K===void 0||(J=K.docs)===null||J===void 0?void 0:J.source},description:{story:"Fully controlled with external state.",...(X=H.parameters)===null||X===void 0||(Q=X.docs)===null||Q===void 0?void 0:Q.description}}};T.parameters={...T.parameters,docs:{...(Z=T.parameters)===null||Z===void 0?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=T.parameters)===null||te===void 0||(ee=te.docs)===null||ee===void 0?void 0:ee.source},description:{story:"Two time pickers for a range (start / end).",...(ne=T.parameters)===null||ne===void 0||(re=ne.docs)===null||re===void 0?void 0:re.description}}};const He=["Default","WithValue","WithError","Disabled","Controlled","TimeRange"];export{H as Controlled,M as Default,y as Disabled,T as TimeRange,b as WithError,x as WithValue,He as __namedExportsOrder,ye as default};
