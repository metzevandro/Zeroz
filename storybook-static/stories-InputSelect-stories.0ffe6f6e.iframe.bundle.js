"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4549],{"./src/stories/InputSelect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disable:()=>Disable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InputSelect_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),InputSelect=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/InputSelect/InputSelect.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(InputSelect.Z,options);InputSelect.Z&&InputSelect.Z.locals&&InputSelect.Z.locals;var __jsx=react.createElement,InputSelect_InputSelect_InputSelect=function InputSelect(_ref){var options=_ref.options,label=_ref.label,error=_ref.error,errorMessage=_ref.errorMessage,disabled=_ref.disabled,placeholder=_ref.placeholder,_useState=(0,react.useState)(!1),isOpen=_useState[0],setIsOpen=_useState[1],_useState2=(0,react.useState)(void 0),selectedOption=_useState2[0],setSelectedOption=_useState2[1],dropdownRef=(0,react.useRef)(null),buttonRef=(0,react.useRef)(null),handleClickOutside=function handleClickOutside(event){isOpen&&dropdownRef.current&&!dropdownRef.current.contains(event.target)&&buttonRef.current&&!buttonRef.current.contains(event.target)&&setIsOpen(!1)};return(0,react.useEffect)((function(){return document.addEventListener("mousedown",handleClickOutside),function(){document.removeEventListener("mousedown",handleClickOutside)}}),[isOpen]),__jsx("div",{className:"input-select-root"},__jsx("div",{className:"input-select-label"},label),__jsx("div",{className:"input-select"},__jsx("div",{className:"input-select-button ".concat(selectedOption&&"option"," ").concat(error&&"error"," ").concat(disabled&&"disabled")},__jsx("select",{className:"".concat(error&&"select-error"),value:"Escolha",onChange:function handleOptionChange(event){setSelectedOption(event.target.value),setIsOpen(!1)},disabled:disabled||error},__jsx("option",{value:"",disabled:!0,selected:!0},placeholder),options.map((function(option,index){return __jsx("option",{key:index,value:option},option)}))))),error&&__jsx("p",{className:"input-select-error-message"},errorMessage))};InputSelect_InputSelect_InputSelect.displayName="InputSelect";const components_InputSelect_InputSelect=InputSelect_InputSelect_InputSelect;try{InputSelect_InputSelect_InputSelect.displayName="InputSelect",InputSelect_InputSelect_InputSelect.__docgenInfo={description:"",displayName:"InputSelect",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"string[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/InputSelect/InputSelect.tsx#InputSelect"]={docgenInfo:InputSelect_InputSelect_InputSelect.__docgenInfo,name:"InputSelect",path:"src/app/components/InputSelect/InputSelect.tsx#InputSelect"})}catch(__react_docgen_typescript_loader_error){}const InputSelect_stories={title:"Components/InputSelect",component:components_InputSelect_InputSelect,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{}};var InputSelect_stories_options=["Option 1","Option 2","Option 3"],Default={args:{placeholder:"Placeholder",label:"Label",options:InputSelect_stories_options,error:!1,errorMessage:"",disabled:!1}},Disable={args:{placeholder:"Placeholder",label:"Label",options:InputSelect_stories_options,disabled:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    placeholder: "Placeholder",\n    label: "Label",\n    options: options,\n    error: false,\n    errorMessage: "",\n    disabled: false\n  }\n}',...Default.parameters?.docs?.source}}},Disable.parameters={...Disable.parameters,docs:{...Disable.parameters?.docs,source:{originalSource:'{\n  args: {\n    placeholder: "Placeholder",\n    label: "Label",\n    options: options,\n    disabled: true\n  }\n}',...Disable.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disable"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/InputSelect/InputSelect.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".input-select-root{display:flex;flex-direction:column;gap:var(--s-spacing-nano)}.input-select-root .input-select-label{font:var(--s-typography-label-medium);color:var(--s-color-content-default)}.input-select-root .input-select-button{padding:var(--s-spacing-xx-small) var(--s-spacing-x-small);display:flex;justify-content:space-between;align-items:center;border:var(--s-border-width-hairline) solid var(--s-color-border-default);font:var(--s-typography-paragraph-regular);background-color:var(--s-color-fill-default);border-radius:var(--s-border-radius-small);color:var(--s-color-content-placeholder)}.input-select-root .input-select-button select{width:100%;background-color:rgba(0,0,0,0);color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular)}.input-select-root .input-select-button select:focus{outline:none}.input-select-root .input-select-button select.select-error{color:var(--s-color-content-warning)}.input-select-root .input-select-button select option{display:flex;background-color:var(--s-color-fill-default);color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular)}.input-select-root .input-select-button.option{color:var(--s-color-content-default)}.input-select-root .input-select-button.error{border-color:var(--s-color-border-warning);color:var(--s-color-content-warning);background-color:var(--s-color-fill-warning-light)}.input-select-root .input-select-button.error:hover{background-color:var(--s-color-fill-warning-light)}.input-select-root .input-select-button.disabled{background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable)}.input-select-root .input-select-button:hover{background-color:var(--s-color-fill-disable)}.input-select-root .input-select-button:focus-within{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-hairline);outline-style:solid}.input-select-root .input-select-error-message{color:var(--s-color-content-warning);font:VAR(--s-typography-caption-regular)}","",{version:3,sources:["webpack://./src/app/components/InputSelect/InputSelect.scss"],names:[],mappings:"AAEA,mBACE,YAAA,CACA,qBAAA,CACA,yBAAA,CAEA,uCACE,qCAAA,CACA,oCAAA,CAGF,wCACE,0DAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,yEAAA,CACA,0CAAA,CACA,4CAAA,CACA,0CAAA,CACA,wCAAA,CAEA,+CACE,UAAA,CACA,8BAAA,CACA,oCAAA,CACA,0CAAA,CAEA,qDACE,YAAA,CAGF,4DACE,oCAAA,CAGF,sDACE,YAAA,CACA,4CAAA,CACA,oCAAA,CACA,0CAAA,CAIJ,+CACE,oCAAA,CAGF,8CACE,0CAAA,CACA,oCAAA,CACA,kDAAA,CAEA,oDACE,kDAAA,CAIJ,iDACE,4CAAA,CACA,oCAAA,CAGF,8CACE,4CAAA,CAGF,qDACE,wCAAA,CACA,2CAAA,CACA,6CAAA,CACA,mBAAA,CAIJ,+CACE,oCAAA,CACA,wCAAA",sourcesContent:["// Importação dos tokens\n\n.input-select-root {\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-nano);\n\n  .input-select-label {\n    font: var(--s-typography-label-medium);\n    color: var(--s-color-content-default);\n  }\n\n  .input-select-button {\n    padding: var(--s-spacing-xx-small) var(--s-spacing-x-small);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    font: var(--s-typography-paragraph-regular);\n    background-color: var(--s-color-fill-default);\n    border-radius: var(--s-border-radius-small);\n    color: var(--s-color-content-placeholder);\n\n    select {\n      width: 100%;\n      background-color: transparent;\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n\n      &:focus {\n        outline: none;\n      }\n\n      &.select-error {\n        color: var(--s-color-content-warning);\n      }\n\n      option {\n        display: flex;\n        background-color: var(--s-color-fill-default);\n        color: var(--s-color-content-default);\n        font: var(--s-typography-paragraph-regular);\n      }\n    }\n\n    &.option {\n      color: var(--s-color-content-default);\n    }\n\n    &.error {\n      border-color: var(--s-color-border-warning);\n      color: var(--s-color-content-warning);\n      background-color: var(--s-color-fill-warning-light);\n\n      &:hover {\n        background-color: var(--s-color-fill-warning-light);\n      }\n    }\n\n    &.disabled {\n      background-color: var(--s-color-fill-disable);\n      color: var(--s-color-content-disable);\n    }\n\n    &:hover {\n      background-color: var(--s-color-fill-disable);\n    }\n\n    &:focus-within {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-hairline);\n      outline-style: solid;\n    }\n  }\n\n  .input-select-error-message {\n    color: var(--s-color-content-warning);\n    font: VAR(--s-typography-caption-regular);\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);