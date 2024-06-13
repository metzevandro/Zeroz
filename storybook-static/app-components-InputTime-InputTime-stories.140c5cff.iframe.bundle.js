"use strict";(self.webpackChunkdesign_system_zeroz=self.webpackChunkdesign_system_zeroz||[]).push([[2529],{"./src/app/components/InputTime/InputTime.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disable:()=>Disable,Error:()=>Error,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,_Error_parameters,_Error_parameters_docs,_Error_parameters1,_Disable_parameters,_Disable_parameters_docs,_Disable_parameters1;__webpack_require__("./src/app/styles.scss");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Input Time",component:__webpack_require__("./src/app/components/InputTime/InputTime.tsx").A,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{}},Default={args:{onChange(value){},label:"Label",placeholder:"Placeholder",error:!1,textError:"Error",disabled:!1}},Error={args:{onChange(value){},label:"Label",placeholder:"Placeholder",error:!0,textError:"Error",disabled:!1}},Disable={args:{onChange(value){},label:"Label",placeholder:"Placeholder",disabled:!0}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'{\n  args: {\n    onChange(value) {},\n    label: "Label",\n    placeholder: "Placeholder",\n    error: false,\n    textError: "Error",\n    disabled: false\n  }\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}},Error.parameters={...Error.parameters,docs:{...null===(_Error_parameters=Error.parameters)||void 0===_Error_parameters?void 0:_Error_parameters.docs,source:{originalSource:'{\n  args: {\n    onChange(value) {},\n    label: "Label",\n    placeholder: "Placeholder",\n    error: true,\n    textError: "Error",\n    disabled: false\n  }\n}',...null===(_Error_parameters1=Error.parameters)||void 0===_Error_parameters1||null===(_Error_parameters_docs=_Error_parameters1.docs)||void 0===_Error_parameters_docs?void 0:_Error_parameters_docs.source}}},Disable.parameters={...Disable.parameters,docs:{...null===(_Disable_parameters=Disable.parameters)||void 0===_Disable_parameters?void 0:_Disable_parameters.docs,source:{originalSource:'{\n  args: {\n    onChange(value) {},\n    label: "Label",\n    placeholder: "Placeholder",\n    disabled: true\n  }\n}',...null===(_Disable_parameters1=Disable.parameters)||void 0===_Disable_parameters1||null===(_Disable_parameters_docs=_Disable_parameters1.docs)||void 0===_Disable_parameters_docs?void 0:_Disable_parameters_docs.source}}};const __namedExportsOrder=["Default","Error","Disable"]},"./src/app/components/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Icon_Icon});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Icon=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Icon/Icon.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Icon.A,options);Icon.A&&Icon.A.locals&&Icon.A.locals;__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon_Icon_Icon=param=>{let{size,fill,icon}=param;const sizeClass=size,fillStyle="'FILL' ".concat(fill?1:0);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("span",{style:{fontVariationSettings:fillStyle},className:"material-symbols-outlined ".concat(sizeClass),children:icon})})},components_Icon_Icon=Icon_Icon_Icon;try{Icon_Icon_Icon.displayName="Icon",Icon_Icon_Icon.__docgenInfo={description:"",displayName:"Icon",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string | undefined"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Icon/Icon.tsx#Icon"]={docgenInfo:Icon_Icon_Icon.__docgenInfo,name:"Icon",path:"src/app/components/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/app/components/InputTime/InputTime.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_InputTime_InputTime});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),InputTime=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputTime/InputTime.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(InputTime.A,options);InputTime.A&&InputTime.A.locals&&InputTime.A.locals;var Input=__webpack_require__("./src/app/components/Input/Input.tsx");const InputTime_InputTime_InputTime=param=>{let{label,placeholder,disabled,error,textError,onChange,value:controlledValue,...rest}=param;const[isModalOpen,setIsModalOpen]=(0,react.useState)(!1),[selectedHour,setSelectedHour]=(0,react.useState)(""),[selectedMinute,setSelectedMinute]=(0,react.useState)(""),modalRef=(0,react.useRef)(null);(0,react.useEffect)((()=>{const handleClickOutside=event=>{modalRef.current&&!modalRef.current.contains(event.target)&&setIsModalOpen(!1)};return document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)}}),[]),(0,react.useEffect)((()=>{if(controlledValue){const[hour,minute]=controlledValue.split(":");setSelectedHour(hour),setSelectedMinute(minute)}}),[controlledValue]);const renderButtons=(0,react.useCallback)(((maxValue,isHour)=>{const buttons=[];for(let i=0;i<=maxValue;i++){const formattedValue=i<10?"0".concat(i):"".concat(i);buttons.push((0,jsx_runtime.jsx)("button",{className:"input-time-buttons",onClick:()=>{isHour?(setSelectedHour(formattedValue),onChange("".concat(formattedValue,":").concat(selectedMinute))):(setSelectedMinute(formattedValue),onChange("".concat(selectedHour,":").concat(formattedValue)))},"aria-label":formattedValue,children:formattedValue},formattedValue))}return buttons}),[onChange,selectedHour,selectedMinute]);return(0,jsx_runtime.jsxs)("div",{className:"input-time",children:[(0,jsx_runtime.jsx)(Input.A,{label,type:"text",value:null!=controlledValue?controlledValue:selectedHour&&selectedMinute?"".concat(selectedHour,":").concat(selectedMinute):"",placeholder,typeIcon:"schedule",disabled,onClick:()=>{setIsModalOpen(!isModalOpen)},onChange:event=>{let newValue=event.target.value;newValue=newValue.replace(/[^\d:]/g,""),newValue.length>5&&(newValue=newValue.substring(0,5)),2===newValue.length&&":"!==newValue.charAt(2)&&(newValue=newValue.slice(0,2)+":"+newValue.slice(2)),event.target.value=newValue,onChange(newValue)},error,textError,inputMode:"numeric",pattern:"[0-9]*",...rest}),isModalOpen&&(0,jsx_runtime.jsxs)("div",{className:"input-time-modal",ref:modalRef,children:[(0,jsx_runtime.jsx)("div",{className:"modal-section",children:renderButtons(23,!0)}),(0,jsx_runtime.jsx)("div",{className:"modal-section",children:renderButtons(59,!1)})]})]})},components_InputTime_InputTime=InputTime_InputTime_InputTime;try{InputTime_InputTime_InputTime.displayName="InputTime",InputTime_InputTime_InputTime.__docgenInfo={description:"",displayName:"InputTime",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},textError:{defaultValue:null,description:"",name:"textError",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/InputTime/InputTime.tsx#InputTime"]={docgenInfo:InputTime_InputTime_InputTime.__docgenInfo,name:"InputTime",path:"src/app/components/InputTime/InputTime.tsx#InputTime"})}catch(__react_docgen_typescript_loader_error){}},"./src/app/components/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Input_Input});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Input=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Input/Input.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Input.A,options);Input.A&&Input.A.locals&&Input.A.locals;var Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx");const Input_Input_Input=param=>{let{typeIcon,fillIcon,label,error,disabled,textError,value,...rest}=param;const inputRef=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)("div",{className:"input-root",children:[label&&(0,jsx_runtime.jsx)("div",{className:"input-header",children:(0,jsx_runtime.jsx)("label",{children:label})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("div",{className:"input-content ".concat(disabled?"disabled":""," ").concat(error?"error":""),onClick:()=>{inputRef.current&&inputRef.current.focus()},children:[(0,jsx_runtime.jsx)("input",{size:0,...rest,value:value||"",disabled,ref:inputRef}),(0,jsx_runtime.jsx)(Icon.A,{icon:typeIcon,size:"md",fill:fillIcon})]}),error&&(0,jsx_runtime.jsx)("div",{className:"input-error",children:textError})]})]})},components_Input_Input=Input_Input_Input;try{Input_Input_Input.displayName="Input",Input_Input_Input.__docgenInfo={description:"",displayName:"Input",props:{typeIcon:{defaultValue:null,description:"",name:"typeIcon",required:!1,type:{name:"string"}},fillIcon:{defaultValue:null,description:"",name:"fillIcon",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},textError:{defaultValue:null,description:"",name:"textError",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Input/Input.tsx#Input"]={docgenInfo:Input_Input_Input.__docgenInfo,name:"Input",path:"src/app/components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Icon/Icon.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";.material-symbols-outlined{font-weight:400;display:flex;user-select:none}.material-symbols-outlined.sm{font-size:16px}.material-symbols-outlined.md{font-size:24px}.material-symbols-outlined.lg{font-size:32px}',"",{version:3,sources:["webpack://./src/app/components/Icon/Icon.scss"],names:[],mappings:"AAAQ,6HAAA,CAER,2BACE,eAAA,CACA,YAAA,CACA,gBAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");\n\n.material-symbols-outlined {\n  font-weight: 400;\n  display: flex;\n  user-select: none;\n}\n\n.material-symbols-outlined.sm {\n  font-size: 16px;\n}\n\n.material-symbols-outlined.md {\n  font-size: 24px;\n}\n\n.material-symbols-outlined.lg {\n  font-size: 32px;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputTime/InputTime.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".input-time{position:relative;z-index:1}.input-time .input-time-modal{z-index:99;padding:var(--s-spacing-nano);border-radius:var(--s-border-radius-small);margin-top:var(--s-spacing-xx-small);background-color:var(--s-color-fill-default);position:absolute;display:flex;height:232px;box-shadow:var(--s-shadow-dropdown);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.input-time .input-time-modal .modal-section{overflow-y:scroll;display:flex;flex-direction:column;gap:var(--s-spacing-xx-small);scroll-behavior:smooth}.input-time .input-time-modal .modal-section::-webkit-scrollbar{width:0px}.input-time .input-time-modal .modal-section .input-time-buttons{background-color:rgba(0,0,0,0);color:var(--s-color-content-default);border-radius:var(--s-border-radius-small);padding:var(--s-spacing-xx-small);cursor:pointer;z-index:999}.input-time .input-time-modal .modal-section .input-time-buttons:hover{background-color:var(--s-color-fill-default-hover)}.input-time .input-time-modal .modal-section .input-time-buttons:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:-2px;outline-style:solid}","",{version:3,sources:["webpack://./src/app/components/InputTime/InputTime.scss"],names:[],mappings:"AAAA,YACE,iBAAA,CACA,SAAA,CAEA,8BACE,UAAA,CACA,6BAAA,CACA,0CAAA,CACA,oCAAA,CACA,4CAAA,CACA,iBAAA,CACA,YAAA,CACA,YAAA,CACA,mCAAA,CACA,yEAAA,CAEA,6CACE,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,sBAAA,CAEA,gEACE,SAAA,CAGF,iEACE,8BAAA,CACA,oCAAA,CACA,0CAAA,CACA,iCAAA,CACA,cAAA,CACA,WAAA,CAGF,uEACE,kDAAA,CAGF,+EACE,wCAAA,CACA,6CAAA,CACA,mBAAA,CACA,mBAAA",sourcesContent:[".input-time {\r\n  position: relative;\r\n  z-index: 1;\r\n\r\n  .input-time-modal {\r\n    z-index: 99;\r\n    padding: var(--s-spacing-nano);\r\n    border-radius: var(--s-border-radius-small);\r\n    margin-top: var(--s-spacing-xx-small);\r\n    background-color: var(--s-color-fill-default);\r\n    position: absolute;\r\n    display: flex;\r\n    height: 232px;\r\n    box-shadow: var(--s-shadow-dropdown);\r\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\r\n\r\n    .modal-section {\r\n      overflow-y: scroll;\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: var(--s-spacing-xx-small);\r\n      scroll-behavior: smooth;\r\n\r\n      &::-webkit-scrollbar {\r\n        width: 0px;\r\n      }\r\n\r\n      .input-time-buttons {\r\n        background-color: transparent;\r\n        color: var(--s-color-content-default);\r\n        border-radius: var(--s-border-radius-small);\r\n        padding: var(--s-spacing-xx-small);\r\n        cursor: pointer;\r\n        z-index: 999;\r\n      }\r\n\r\n      .input-time-buttons:hover {\r\n        background-color: var(--s-color-fill-default-hover);\r\n      }\r\n\r\n      .input-time-buttons:focus-visible {\r\n        outline-width: var(--s-border-width-thin);\r\n        outline-color: var(--s-color-border-highlight);\r\n        outline-offset: -2px;\r\n        outline-style: solid;\r\n      }\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Input/Input.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".input-root{display:flex;flex-direction:column;gap:var(--s-spacing-nano)}.input-root .input-header{font:var(--s-typography-label-medium);color:var(--s-color-content-default)}.input-root .input-content{height:40px;box-sizing:border-box;cursor:text;display:flex;justify-content:space-between;align-items:center;padding:var(--s-spacing-xx-small) var(--s-spacing-x-small);border-radius:var(--s-border-radius-small);border:var(--s-border-width-hairline) solid var(--s-color-border-default);background-color:var(--s-color-fill-default);color:var(--s-color-content-placeholder)}.input-root .input-content.has-value{color:var(--s-color-content-default)}.input-root .input-content:hover{border-color:var(--s-color-border-default-hover)}.input-root .input-content:focus-within{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.input-root .input-content:read-only{cursor:auto}.input-root .input-content.disabled{color:var(--s-color-content-disable);background-color:var(--s-color-fill-disable);cursor:auto;opacity:.64}.input-root .input-content.disabled input::placeholder{color:var(--s-color-content-disable)}.input-root .input-content.disabled:hover{background-color:var(--s-color-fill-disable);border-color:var(--s-color-border-default)}.input-root .input-content.disabled:focus-within{outline:none}.input-root .input-content.error{color:var(--s-color-content-warning);background-color:var(--s-color-fill-warning-light);border-color:var(--s-color-border-warning)}.input-root .input-content.error input::placeholder{color:var(--s-color-content-warning)}.input-root .input-content.error:hover{background-color:var(--s-color-fill-warning-light)}.input-root .input-content.error:focus-within{outline:none}.input-root .input-content input{width:100%;background-color:rgba(0,0,0,0);border:none;margin:0;padding:0;color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular)}.input-root .input-content input:focus{outline:none}.input-root .input-content input::placeholder{color:var(--s-color-content-placeholder)}.input-root .input-content input:disabled{color:var(--s-color-content-disable)}.input-root .input-error{color:var(--s-color-content-warning);font:var(--s-typography-caption-regular)}","",{version:3,sources:["webpack://./src/app/components/Input/Input.scss"],names:[],mappings:"AAAA,YACE,YAAA,CACA,qBAAA,CACA,yBAAA,CAEA,0BACE,qCAAA,CACA,oCAAA,CAGF,2BACE,WAAA,CACA,qBAAA,CACA,WAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,0DAAA,CACA,0CAAA,CACA,yEAAA,CACA,4CAAA,CACA,wCAAA,CAEA,qCACE,oCAAA,CAGF,iCACE,gDAAA,CAGF,wCACE,wCAAA,CACA,6CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,qCACE,WAAA,CAGF,oCACE,oCAAA,CACA,4CAAA,CACA,WAAA,CACA,WAAA,CAEE,uDACE,oCAAA,CAIJ,0CACE,4CAAA,CACA,0CAAA,CAGF,iDACE,YAAA,CAIJ,iCACE,oCAAA,CACA,kDAAA,CACA,0CAAA,CAGE,oDACE,oCAAA,CAIJ,uCACE,kDAAA,CAGF,8CACE,YAAA,CAIJ,iCACE,UAAA,CACA,8BAAA,CACA,WAAA,CACA,QAAA,CACA,SAAA,CACA,oCAAA,CACA,0CAAA,CAEA,uCACE,YAAA,CAGF,8CACE,wCAAA,CAGF,0CACE,oCAAA,CAKN,yBACE,oCAAA,CACA,wCAAA",sourcesContent:[".input-root {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: var(--s-spacing-nano);\r\n\r\n  .input-header {\r\n    font: var(--s-typography-label-medium);\r\n    color: var(--s-color-content-default);\r\n  }\r\n\r\n  .input-content {\r\n    height: 40px;\r\n    box-sizing: border-box;\r\n    cursor: text;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: var(--s-spacing-xx-small) var(--s-spacing-x-small);\r\n    border-radius: var(--s-border-radius-small);\r\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\r\n    background-color: var(--s-color-fill-default);\r\n    color: var(--s-color-content-placeholder);\r\n\r\n    &.has-value {\r\n      color: var(--s-color-content-default);\r\n    }\r\n\r\n    &:hover {\r\n      border-color: var(--s-color-border-default-hover);\r\n    }\r\n\r\n    &:focus-within {\r\n      outline-width: var(--s-border-width-thin);\r\n      outline-color: var(--s-color-border-highlight);\r\n      outline-offset: var(--s-border-width-thin);\r\n      outline-style: solid;\r\n    }\r\n\r\n    &:read-only {\r\n      cursor: auto;\r\n    }\r\n\r\n    &.disabled {\r\n      color: var(--s-color-content-disable);\r\n      background-color: var(--s-color-fill-disable);\r\n      cursor: auto;\r\n      opacity: 0.64;\r\n      input {\r\n        &::placeholder {\r\n          color: var(--s-color-content-disable);\r\n        }\r\n      }\r\n\r\n      &:hover {\r\n        background-color: var(--s-color-fill-disable);\r\n        border-color: var(--s-color-border-default);\r\n      }\r\n\r\n      &:focus-within {\r\n        outline: none;\r\n      }\r\n    }\r\n\r\n    &.error {\r\n      color: var(--s-color-content-warning);\r\n      background-color: var(--s-color-fill-warning-light);\r\n      border-color: var(--s-color-border-warning);\r\n\r\n      input {\r\n        &::placeholder {\r\n          color: var(--s-color-content-warning);\r\n        }\r\n      }\r\n\r\n      &:hover {\r\n        background-color: var(--s-color-fill-warning-light);\r\n      }\r\n\r\n      &:focus-within {\r\n        outline: none;\r\n      }\r\n    }\r\n\r\n    input {\r\n      width: 100%;\r\n      background-color: transparent;\r\n      border: none;\r\n      margin: 0;\r\n      padding: 0;\r\n      color: var(--s-color-content-default);\r\n      font: var(--s-typography-paragraph-regular);\r\n\r\n      &:focus {\r\n        outline: none;\r\n      }\r\n\r\n      &::placeholder {\r\n        color: var(--s-color-content-placeholder);\r\n      }\r\n\r\n      &:disabled {\r\n        color: var(--s-color-content-disable);\r\n      }\r\n    }\r\n  }\r\n\r\n  .input-error {\r\n    color: var(--s-color-content-warning);\r\n    font: var(--s-typography-caption-regular);\r\n  }\r\n}\r\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);