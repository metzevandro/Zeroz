"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3437],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/stories/Input.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disable:()=>Disable,Error:()=>Error,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _app_components_Input_Input__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/app/components/Input/Input.tsx");__webpack_require__("./node_modules/@storybook/react/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Input",component:_app_components_Input_Input__WEBPACK_IMPORTED_MODULE_0__.Z,tags:["autodocs"],argTypes:{}};var Default={args:{label:"Label",placeholder:"Placeholder",disabled:!1,typeIcon:"",error:!1,textError:"Error"}},Error={args:{label:"Label",placeholder:"Placeholder",disabled:!1,typeIcon:"",error:!0,textError:"Error"}},Disable={args:{label:"Label",placeholder:"Placeholder",disabled:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Label",\n    placeholder: "Placeholder",\n    disabled: false,\n    typeIcon: "",\n    error: false,\n    textError: "Error"\n  }\n}',...Default.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Label",\n    placeholder: "Placeholder",\n    disabled: false,\n    typeIcon: "",\n    error: true,\n    textError: "Error"\n  }\n}',...Error.parameters?.docs?.source}}},Disable.parameters={...Disable.parameters,docs:{...Disable.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Label",\n    placeholder: "Placeholder",\n    disabled: true\n  }\n}',...Disable.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Error","Disable"]},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/global"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s},"./src/app/components/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Icon_Icon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Icon=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Icon/Icon.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Icon.Z,options);Icon.Z&&Icon.Z.locals&&Icon.Z.locals;var __jsx=react.createElement,Icon_Icon_Icon=function Icon(_ref){var size=_ref.size,fill=_ref.fill,icon=_ref.icon,sizeClass=size,fillStyle="'FILL' ".concat(fill||0);return __jsx(react.Fragment,null,__jsx("span",{style:{fontVariationSettings:fillStyle},className:"material-symbols-outlined ".concat(sizeClass)},icon))};const components_Icon_Icon=Icon_Icon_Icon;try{Icon_Icon_Icon.displayName="Icon",Icon_Icon_Icon.__docgenInfo={description:"",displayName:"Icon",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string | undefined"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Icon/Icon.tsx#Icon"]={docgenInfo:Icon_Icon_Icon.__docgenInfo,name:"Icon",path:"src/app/components/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/app/components/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Input_Input});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Input=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Input/Input.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Input.Z,options);Input.Z&&Input.Z.locals&&Input.Z.locals;var Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),_excluded=["typeIcon","fillIcon","label","error","disabled","textError"],__jsx=react.createElement,Input_Input_Input=function Input(_ref){var typeIcon=_ref.typeIcon,fillIcon=_ref.fillIcon,label=_ref.label,error=_ref.error,disabled=_ref.disabled,textError=_ref.textError,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),inputRef=(0,react.useRef)(null);return __jsx("div",{className:"input-root"},label&&__jsx("div",{className:"input-header"},__jsx("label",null,label)),__jsx("div",null,__jsx("div",{className:"input-content ".concat(disabled?"disabled":""," ").concat(error?"error":""),onClick:function handleDivClick(){inputRef.current&&inputRef.current.focus()}},__jsx("input",(0,esm_extends.Z)({size:0},rest,{disabled:disabled||error,ref:inputRef})),__jsx(Icon.Z,{icon:typeIcon,size:"md",fill:fillIcon})),error&&__jsx("div",{className:"input-error"},textError)))};Input_Input_Input.displayName="Input";const components_Input_Input=Input_Input_Input;try{Input_Input_Input.displayName="Input",Input_Input_Input.__docgenInfo={description:"",displayName:"Input",props:{typeIcon:{defaultValue:null,description:"",name:"typeIcon",required:!1,type:{name:"string"}},fillIcon:{defaultValue:null,description:"",name:"fillIcon",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},textError:{defaultValue:null,description:"",name:"textError",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Input/Input.tsx#Input"]={docgenInfo:Input_Input_Input.__docgenInfo,name:"Input",path:"src/app/components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Icon/Icon.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";.material-symbols-outlined{font-weight:300;display:flex;user-select:none}.material-symbols-outlined.sm{font-size:16px}.material-symbols-outlined.md{font-size:24px}.material-symbols-outlined.lg{font-size:32px}',"",{version:3,sources:["webpack://./src/app/components/Icon/Icon.scss"],names:[],mappings:"AAAQ,6HAAA,CAER,2BACE,eAAA,CACA,YAAA,CACA,gBAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");\n\n.material-symbols-outlined {\n  font-weight: 300;\n  display: flex;\n  user-select: none;\n}\n\n.material-symbols-outlined.sm {\n  font-size: 16px;\n}\n\n.material-symbols-outlined.md {\n  font-size: 24px;\n}\n\n.material-symbols-outlined.lg {\n  font-size: 32px;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Input/Input.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".input-root{display:flex;flex-direction:column;gap:var(--s-spacing-nano)}.input-root .input-header{font:var(--s-typography-label-medium);color:var(--s-color-content-default)}.input-root .input-content{height:40px;box-sizing:border-box;cursor:text;display:flex;justify-content:space-between;align-items:center;padding:var(--s-spacing-xx-small) var(--s-spacing-x-small);border-radius:var(--s-border-radius-small);border:var(--s-border-width-hairline) solid var(--s-color-border-default);background-color:var(--s-color-fill-default);color:var(--s-color-content-placeholder)}.input-root .input-content.has-value{color:var(--s-color-content-default)}.input-root .input-content:hover{background-color:var(--s-color-fill-default-hover)}.input-root .input-content:focus-within{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.input-root .input-content.error{color:var(--s-color-content-warning);background-color:var(--s-color-fill-warning-light);border-color:var(--s-color-border-warning)}.input-root .input-content.error input::placeholder{color:var(--s-color-content-warning)}.input-root .input-content.error:hover{background-color:var(--s-color-fill-warning-light)}.input-root .input-content.error:focus-within{outline:none}.input-root .input-content.disabled{color:var(--s-color-content-disable);background-color:var(--s-color-fill-disable);cursor:auto}.input-root .input-content.disabled input::placeholder{color:var(--s-color-content-disable)}.input-root .input-content.disabled:hover{background-color:var(--s-color-fill-disable)}.input-root .input-content.disabled:focus-within{outline:none}.input-root .input-content input{width:100%;background-color:rgba(0,0,0,0);border:none;margin:0;padding:0;color:var(--s-color-content-default)}.input-root .input-content input:focus{outline:none}.input-root .input-content input::placeholder{color:var(--s-color-content-placeholder)}.input-root .input-content input:disabled{color:var(--s-color-content-disable)}.input-root .input-error{color:var(--s-color-content-warning);font:var(--s-typography-caption-regular)}","",{version:3,sources:["webpack://./src/app/components/Input/Input.scss"],names:[],mappings:"AAAA,YACE,YAAA,CACA,qBAAA,CACA,yBAAA,CAEA,0BACE,qCAAA,CACA,oCAAA,CAGF,2BACE,WAAA,CACA,qBAAA,CACA,WAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,0DAAA,CACA,0CAAA,CACA,yEAAA,CACA,4CAAA,CACA,wCAAA,CAEA,qCACE,oCAAA,CAGF,iCACE,kDAAA,CAGF,wCACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,iCACE,oCAAA,CACA,kDAAA,CACA,0CAAA,CAGE,oDACE,oCAAA,CAIJ,uCACE,kDAAA,CAGF,8CACE,YAAA,CAIJ,oCACE,oCAAA,CACA,4CAAA,CACA,WAAA,CAEE,uDACE,oCAAA,CAIJ,0CACE,4CAAA,CAGF,iDACE,YAAA,CAIJ,iCACE,UAAA,CACA,8BAAA,CACA,WAAA,CACA,QAAA,CACA,SAAA,CACA,oCAAA,CAEA,uCACE,YAAA,CAGF,8CACE,wCAAA,CAGF,0CACE,oCAAA,CAKN,yBACE,oCAAA,CACA,wCAAA",sourcesContent:[".input-root {\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-nano);\n\n  .input-header {\n    font: var(--s-typography-label-medium);\n    color: var(--s-color-content-default);\n  }\n\n  .input-content {\n    height: 40px;\n    box-sizing: border-box;\n    cursor: text;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: var(--s-spacing-xx-small) var(--s-spacing-x-small);\n    border-radius: var(--s-border-radius-small);\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    background-color: var(--s-color-fill-default);\n    color: var(--s-color-content-placeholder);\n\n    &.has-value {\n      color: var(--s-color-content-default);\n    }\n\n    &:hover {\n      background-color: var(--s-color-fill-default-hover);\n    }\n\n    &:focus-within {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &.error {\n      color: var(--s-color-content-warning);\n      background-color: var(--s-color-fill-warning-light);\n      border-color: var(--s-color-border-warning);\n\n      input {\n        &::placeholder {\n          color: var(--s-color-content-warning);\n        }\n      }\n\n      &:hover {\n        background-color: var(--s-color-fill-warning-light);\n      }\n\n      &:focus-within {\n        outline: none;\n      }\n    }\n\n    &.disabled {\n      color: var(--s-color-content-disable);\n      background-color: var(--s-color-fill-disable);\n      cursor: auto;\n      input {\n        &::placeholder {\n          color: var(--s-color-content-disable);\n        }\n      }\n\n      &:hover {\n        background-color: var(--s-color-fill-disable);\n      }\n\n      &:focus-within {\n        outline: none;\n      }\n    }\n\n    input {\n      width: 100%;\n      background-color: transparent;\n      border: none;\n      margin: 0;\n      padding: 0;\n      color: var(--s-color-content-default);\n\n      &:focus {\n        outline: none;\n      }\n\n      &::placeholder {\n        color: var(--s-color-content-placeholder);\n      }\n\n      &:disabled {\n        color: var(--s-color-content-disable);\n      }\n    }\n  }\n\n  .input-error {\n    color: var(--s-color-content-warning);\n    font: var(--s-typography-caption-regular);\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);