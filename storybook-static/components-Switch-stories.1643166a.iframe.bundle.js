(self.webpackChunkdesign_system_zeroz=self.webpackChunkdesign_system_zeroz||[]).push([[5288],{"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/stories/components/Switch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_Switch_Switch__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/styles.scss"),__webpack_require__("./src/components/Switch/Switch.tsx")),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Switch",component:_components_Switch_Switch__WEBPACK_IMPORTED_MODULE_2__.A,parameters:{layout:"centered",docs:{page:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.hE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Pd,{children:"Component"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:"Switch "}),' is used to change between two states, often used for turning things "on" or "off."']}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Tn,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.om,{})]})}},tags:["autodocs"],argTypes:{label:{name:"Label",description:"The label displayed for the switch.",type:{name:"string"},defaultValue:{summary:"Label"},control:{type:"text"},table:{category:"Appearance",type:{summary:"string"},defaultValue:{summary:"Label"}}},disabled:{name:"Disabled",description:"Indicates whether the switch is disabled.",type:{name:"boolean"},defaultValue:{summary:!1},control:{type:"boolean"},table:{category:"Behavior",type:{summary:"boolean"}}},onUpdate:{name:"On Update",description:"Callback function that is triggered when the switch value changes.",type:{name:"function"},action:"updated",table:{category:"Events",type:{summary:"(checked: boolean) => void"}}},modelValue:{name:"Model Value",description:"The model value of the switch.",table:{category:"Data",type:{summary:"any"}}},value:{name:"Value",description:"The value of the switch.",table:{category:"Data",type:{summary:"any"}}},id:{name:"ID",description:"The unique identifier for the switch.",type:{name:"string"},table:{category:"Identification",type:{summary:"string"}}},name:{name:"Name",description:"The name of the switch.",type:{name:"string"},table:{category:"Identification",type:{summary:"string"}}},required:{name:"Required",description:"Indicates whether the switch is required.",type:{name:"boolean"},defaultValue:{summary:!1},control:{type:"boolean"},table:{category:"Validation",type:{summary:"boolean"}}},noEvents:{name:"No Events",description:"Indicates whether events should be ignored.",type:{name:"boolean"},defaultValue:{summary:!1},control:{type:"boolean"},table:{category:"Behavior",type:{summary:"boolean"}}}}},Default={args:{label:"Label",disabled:!1,modelValue:null,value:null,id:"switch-id",name:"switch-name",required:!1,noEvents:!1}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Label",\n    disabled: false,\n    modelValue: null,\n    value: null,\n    id: "switch-id",\n    name: "switch-name",\n    required: false,\n    noEvents: false\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/components/Switch/Switch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>components_Switch_Switch});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Switch=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Switch/Switch.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Switch.A,options);Switch.A&&Switch.A.locals&&Switch.A.locals;const Switch_Switch_Switch=({modelValue,value,label,id,name,required,noEvents,disabled,onUpdate})=>{const[checked,setChecked]=(0,react.useState)(null!=modelValue&&modelValue),uid=(0,react.useMemo)((()=>null!=id?id:`ui-form-switch-${Math.random().toString(36).substr(2,9)}`),[id]);(0,react.useEffect)((()=>{modelValue!==checked&&setChecked(modelValue)}),[modelValue]);const classList=(0,react.useMemo)((()=>["ui-form-switch","-switch",disabled?"-disabled":"",noEvents?"-no-events":""].join(" ")),[disabled,noEvents]),handleChange=()=>{const newValue=!checked;setChecked(newValue),null==onUpdate||onUpdate(newValue)};return(0,jsx_runtime.jsxs)("label",{className:classList,htmlFor:uid,onKeyDown:event=>{"Enter"===event.key&&!1===disabled&&handleChange()},tabIndex:0,children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",id:uid,value,required,name,disabled,checked,onChange:handleChange}),(0,jsx_runtime.jsx)("span",{className:"ui-form-checkbox-checkmark"}),label&&(0,jsx_runtime.jsx)("div",{className:"ui-form-checkbox-text",children:label})]})},components_Switch_Switch=Switch_Switch_Switch;try{Switch_Switch_Switch.displayName="Switch",Switch_Switch_Switch.__docgenInfo={description:"",displayName:"Switch",props:{modelValue:{defaultValue:null,description:"",name:"modelValue",required:!1,type:{name:"any"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},noEvents:{defaultValue:null,description:"",name:"noEvents",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onUpdate:{defaultValue:null,description:"",name:"onUpdate",required:!1,type:{name:"((val: any) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Switch/Switch.tsx#Switch"]={docgenInfo:Switch_Switch_Switch.__docgenInfo,name:"Switch",path:"src/components/Switch/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Switch/Switch.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.ui-form-switch{display:flex;align-items:center;position:relative;cursor:pointer;user-select:none;font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);gap:var(--s-spacing-xx-small)}.ui-form-switch:focus-visible{outline:none}.ui-form-switch:focus-visible .ui-form-checkbox-checkmark{outline:2px solid var(--s-color-border-highlight);outline-offset:2px}.ui-form-switch.-disabled{cursor:auto}.ui-form-switch.-no-events{pointer-events:none}.ui-form-switch+.ui-form-checkbox{margin-top:var(--s-spacing-nano)}.ui-form-switch:hover .ui-form-checkbox-checkmark{box-shadow:inset 1px var(--s-color-border-highlight)}.ui-form-switch .ui-form-checkbox-text:empty{display:none}.ui-form-switch input{position:absolute;opacity:0;cursor:pointer;height:1px;width:1px;left:calc(var(--s-spacing-x-small)/2 - 1px);top:var(--s-spacing-x-small)}.ui-form-switch input:checked~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-highlight);border-color:rgba(0,0,0,0)}.ui-form-switch input:checked~.ui-form-checkbox-checkmark::after{display:block}.ui-form-switch input:hover~.ui-form-checkbox-checkmark{box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-border-highlight) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.ui-form-switch input:indeterminate~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-highlight);border-color:var(--s-color-border-highlight)}.ui-form-switch input:indeterminate~.ui-form-checkbox-checkmark:after{display:block;left:50%;top:50%;width:50%;height:0px;transform:translateX(-50%) translateY(-50%)}.ui-form-switch .ui-form-checkbox-checkmark{position:relative;top:0;left:0;min-width:20px;width:20px;aspect-ratio:1;background-color:var(--s-color-fill-disable);border-radius:var(--s-border-radius-small);display:flex;align-items:center;justify-content:center;box-shadow:0 0 rgba(0,0,0,0),0 0 rgba(0,0,0,0),0px 1px 2px rgba(14,21,36,.06),inset 0 1px .5px .5px rgba(255,255,255,.24),inset 0 -1px 2px rgba(28,62,175,.24)}.ui-form-switch .ui-form-checkbox-checkmark:after{display:none;content:"";position:absolute;bottom:55%;left:50%;width:4px;height:8px;border:solid #fff;border-width:0 2px 2px 0;transform:translate(-50%, 50%) rotate(45deg);box-shadow:0px 1px 2px rgba(14,21,36,.06)}.ui-form-switch.-switch input~.ui-form-checkbox-checkmark::after{display:block;background-color:var(--s-color-fill-default)}.ui-form-switch.-switch input:disabled~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-disable) !important}.ui-form-switch.-switch input:checked~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-highlight)}.ui-form-switch.-switch input:checked~.ui-form-checkbox-checkmark:after{background-color:var(--s-color-content-on-color);left:50%}.ui-form-switch.-switch .ui-form-checkbox-checkmark{width:32px;min-width:32px;border-radius:12px;height:20px}.ui-form-switch.-switch .ui-form-checkbox-checkmark:after{width:12px;height:12px;left:12%;top:50%;border-radius:100%;bottom:1px;background-color:var(--s-color-fill-default);transition:all .15s cubic-bezier(0.2, 0.85, 0.32, 1.2),opacity .15s;border:none;transform:translate(0%, -50%)}.ui-form-switch.-switch input:disabled{cursor:auto}.ui-form-switch.-switch input:disabled:hover~.ui-form-checkbox-checkmark{box-shadow:0 0 rgba(0,0,0,0),0 0 rgba(0,0,0,0),0px 1px 2px rgba(14,21,36,.06),inset 0 1px .5px .5px rgba(255,255,255,.24),inset 0 -1px 2px rgba(28,62,175,.24)}.ui-form-switch.-switch input:disabled~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-disable)}.ui-form-switch.-switch input:disabled~.ui-form-checkbox-checkmark::after{border:none;background-color:var(--s-color-content-disable) !important}.ui-form-switch.-switch input:disabled~.ui-form-checkbox-checkmark:checked{background-color:var(--s-color-fill-disable)}.ui-form-switch.-switch input:disabled~.ui-form-checkbox-text{color:var(--s-color-content-disable)}',"",{version:3,sources:["webpack://./src/components/Switch/Switch.scss"],names:[],mappings:"AAAA,gBACE,YAAA,CACA,kBAAA,CACA,iBAAA,CACA,cAAA,CACA,gBAAA,CACA,0CAAA,CACA,oCAAA,CACA,6BAAA,CAEA,8BACE,YAAA,CAEA,0DACE,iDAAA,CACA,kBAAA,CAIJ,0BACE,WAAA,CAGF,2BACE,mBAAA,CAGF,kCACE,gCAAA,CAIA,kDACE,oDAAA,CAIJ,6CACE,YAAA,CAGF,sBACE,iBAAA,CACA,SAAA,CACA,cAAA,CACA,UAAA,CACA,SAAA,CACA,2CAAA,CACA,4BAAA,CAEA,0DACE,8CAAA,CACA,0BAAA,CAEA,iEACE,aAAA,CAIJ,wDACE,8NACE,CAOJ,gEACE,8CAAA,CACA,4CAAA,CAEA,sEACE,aAAA,CACA,QAAA,CACA,OAAA,CACA,SAAA,CACA,UAAA,CACA,2CAAA,CAKN,4CACE,iBAAA,CACA,KAAA,CACA,MAAA,CACA,cAAA,CACA,UAAA,CACA,cAAA,CACA,4CAAA,CACA,0CAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,8JACE,CAMF,kDACE,YAAA,CACA,UAAA,CACA,iBAAA,CACA,UAAA,CACA,QAAA,CACA,SAAA,CACA,UAAA,CACA,iBAAA,CACA,wBAAA,CACA,4CAAA,CACA,yCAAA,CAOE,iEACE,aAAA,CACA,4CAAA,CAMJ,mEACE,uDAAA,CAKF,kEACE,8CAAA,CAEA,wEACE,gDAAA,CACA,QAAA,CAKN,oDACE,UAAA,CACA,cAAA,CACA,kBAAA,CACA,WAAA,CAEA,0DACE,UAAA,CACA,WAAA,CACA,QAAA,CACA,OAAA,CACA,kBAAA,CACA,UAAA,CACA,4CAAA,CACA,mEACE,CAEF,WAAA,CACA,6BAAA,CAIJ,uCACE,WAAA,CAEA,yEACE,8JACE,CAOJ,mEACE,4CAAA,CAEA,0EACE,WAAA,CACA,0DAAA,CAGF,2EACE,4CAAA,CAIJ,8DACE,oCAAA",sourcesContent:['.ui-form-switch {\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  user-select: none;\n  font: var(--s-typography-paragraph-regular);\n  color: var(--s-color-content-default);\n  gap: var(--s-spacing-xx-small);\n\n  &:focus-visible {\n    outline: none;\n\n    .ui-form-checkbox-checkmark {\n      outline: 2px solid var(--s-color-border-highlight);\n      outline-offset: 2px;\n    }\n  }\n\n  &.-disabled {\n    cursor: auto;\n  }\n\n  &.-no-events {\n    pointer-events: none;\n  }\n\n  + .ui-form-checkbox {\n    margin-top: var(--s-spacing-nano);\n  }\n\n  &:hover {\n    .ui-form-checkbox-checkmark {\n      box-shadow: inset 1px var(--s-color-border-highlight);\n    }\n  }\n\n  .ui-form-checkbox-text:empty {\n    display: none;\n  }\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 1px;\n    width: 1px;\n    left: calc(var(--s-spacing-x-small) / 2 - 1px);\n    top: var(--s-spacing-x-small);\n\n    &:checked ~ .ui-form-checkbox-checkmark {\n      background-color: var(--s-color-fill-highlight);\n      border-color: transparent;\n\n      &::after {\n        display: block;\n      }\n    }\n\n    &:hover ~ .ui-form-checkbox-checkmark {\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 2px var(--s-color-border-highlight) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n    }\n\n    &:indeterminate ~ .ui-form-checkbox-checkmark {\n      background-color: var(--s-color-fill-highlight);\n      border-color: var(--s-color-border-highlight);\n\n      &:after {\n        display: block;\n        left: 50%;\n        top: 50%;\n        width: 50%;\n        height: 0px;\n        transform: translateX(-50%) translateY(-50%);\n      }\n    }\n  }\n\n  .ui-form-checkbox-checkmark {\n    position: relative;\n    top: 0;\n    left: 0;\n    min-width: 20px;\n    width: 20px;\n    aspect-ratio: 1;\n    background-color: var(--s-color-fill-disable);\n    border-radius: var(--s-border-radius-small);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow:\n      0 0 #0000,\n      0 0 #0000,\n      0px 1px 2px rgb(14 21 36/6%),\n      inset 0 1px 0.5px 0.5px hsla(0, 0%, 100%, 0.24),\n      inset 0 -1px 2px rgba(28, 62, 175, 0.24);\n\n    &:after {\n      display: none;\n      content: "";\n      position: absolute;\n      bottom: 55%;\n      left: 50%;\n      width: 4px;\n      height: 8px;\n      border: solid white;\n      border-width: 0 2px 2px 0;\n      transform: translate(-50%, 50%) rotate(45deg);\n      box-shadow: 0px 1px 2px rgb(14 21 36/6%);\n    }\n  }\n\n  &.-switch {\n    input {\n      ~ .ui-form-checkbox-checkmark {\n        &::after {\n          display: block;\n          background-color: var(--s-color-fill-default);\n        }\n      }\n    }\n\n    input:disabled {\n      ~ .ui-form-checkbox-checkmark {\n        background-color: var(--s-color-fill-disable) !important;\n      }\n    }\n\n    input:checked {\n      ~ .ui-form-checkbox-checkmark {\n        background-color: var(--s-color-fill-highlight);\n\n        &:after {\n          background-color: var(--s-color-content-on-color);\n          left: calc(50%);\n        }\n      }\n    }\n\n    .ui-form-checkbox-checkmark {\n      width: 32px;\n      min-width: 32px;\n      border-radius: 12px;\n      height: 20px;\n\n      &:after {\n        width: 12px;\n        height: 12px;\n        left: 12%;\n        top: 50%;\n        border-radius: 100%;\n        bottom: 1px;\n        background-color: var(--s-color-fill-default);\n        transition:\n          all 0.15s cubic-bezier(0.2, 0.85, 0.32, 1.2),\n          opacity 0.15s;\n        border: none;\n        transform: translate(0%, -50%);\n      }\n    }\n\n    input:disabled {\n      cursor: auto;\n\n      &:hover ~ .ui-form-checkbox-checkmark {\n        box-shadow:\n          0 0 #0000,\n          0 0 #0000,\n          0px 1px 2px rgb(14 21 36/6%),\n          inset 0 1px 0.5px 0.5px hsla(0, 0%, 100%, 0.24),\n          inset 0 -1px 2px rgba(28, 62, 175, 0.24);\n      }\n\n      ~ .ui-form-checkbox-checkmark {\n        background-color: var(--s-color-fill-disable);\n\n        &::after {\n          border: none;\n          background-color: var(--s-color-content-disable) !important;\n        }\n\n        &:checked {\n          background-color: var(--s-color-fill-disable);\n        }\n      }\n\n      ~ .ui-form-checkbox-text {\n        color: var(--s-color-content-disable);\n      }\n    }\n  }\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);