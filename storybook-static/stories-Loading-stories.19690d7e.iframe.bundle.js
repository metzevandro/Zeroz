"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3646],{"./src/stories/Loading.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Large:()=>Large,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Loading",component:__webpack_require__("./src/app/components/Loading/Loading.tsx").Z,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{}};var Default={args:{variant:"icon-small",message:""}},Large={args:{variant:"icon-large"}},Success={args:{variant:"icon-success",message:"Success"}},Warning={args:{variant:"icon-warning",message:"Warning"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "icon-small",\n    message: ""\n  }\n}',...Default.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "icon-large"\n  }\n}',...Large.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "icon-success",\n    message: "Success"\n  }\n}',...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "icon-warning",\n    message: "Warning"\n  }\n}',...Warning.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Large","Success","Warning"]},"./src/app/components/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Icon_Icon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Icon=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Icon/Icon.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Icon.Z,options);Icon.Z&&Icon.Z.locals&&Icon.Z.locals;var __jsx=react.createElement,Icon_Icon_Icon=function Icon(_ref){var size=_ref.size,fill=_ref.fill,icon=_ref.icon,sizeClass=size,fillStyle="'FILL' ".concat(fill||0);return __jsx(react.Fragment,null,__jsx("span",{style:{fontVariationSettings:fillStyle},className:"material-symbols-outlined ".concat(sizeClass)},icon))};const components_Icon_Icon=Icon_Icon_Icon;try{Icon_Icon_Icon.displayName="Icon",Icon_Icon_Icon.__docgenInfo={description:"",displayName:"Icon",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string | undefined"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Icon/Icon.tsx#Icon"]={docgenInfo:Icon_Icon_Icon.__docgenInfo,name:"Icon",path:"src/app/components/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/app/components/Loading/Loading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Loading_Loading});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Loading=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Loading/Loading.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Loading.Z,options);Loading.Z&&Loading.Z.locals&&Loading.Z.locals;var __jsx=react.createElement,Loading_Loading_Loading=function Loading(_ref){var variant=_ref.variant,message=_ref.message;return __jsx(react.Fragment,null,"icon-small"===variant&&__jsx("div",{className:"loading-with-message"},__jsx("span",{className:"loading"},__jsx(Icon.Z,{size:"sm",icon:"progress_activity"})),message&&__jsx("p",{className:"loading-message"},message)),"icon-large"===variant&&__jsx("span",{className:"loading"},__jsx(Icon.Z,{size:"extra-large",icon:"progress_activity"})),"icon-success"===variant&&__jsx("div",{className:"loading-with-message"},__jsx("span",{className:"success"},__jsx(Icon.Z,{size:"sm",icon:"check_circle"})),message&&__jsx("p",{className:"loading-message"},message)," "),"icon-warning"===variant&&__jsx("div",{className:"loading-with-message"},__jsx("span",{className:"warning"},__jsx(Icon.Z,{size:"sm",icon:"error_outline"})),message&&__jsx("p",{className:"loading-message"},message)," "))};const components_Loading_Loading=Loading_Loading_Loading;try{Loading_Loading_Loading.displayName="Loading",Loading_Loading_Loading.__docgenInfo={description:"",displayName:"Loading",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"icon-small"'},{value:'"icon-success"'},{value:'"icon-warning"'},{value:'"icon-large"'}]}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Loading/Loading.tsx#Loading"]={docgenInfo:Loading_Loading_Loading.__docgenInfo,name:"Loading",path:"src/app/components/Loading/Loading.tsx#Loading"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Icon/Icon.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";.material-symbols-outlined{font-weight:300;display:flex;user-select:none}.material-symbols-outlined.sm{font-size:16px}.material-symbols-outlined.md{font-size:24px}.material-symbols-outlined.lg{font-size:32px}',"",{version:3,sources:["webpack://./src/app/components/Icon/Icon.scss"],names:[],mappings:"AAAQ,6HAAA,CAER,2BACE,eAAA,CACA,YAAA,CACA,gBAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");\n\n.material-symbols-outlined {\n  font-weight: 300;\n  display: flex;\n  user-select: none;\n}\n\n.material-symbols-outlined.sm {\n  font-size: 16px;\n}\n\n.material-symbols-outlined.md {\n  font-size: 24px;\n}\n\n.material-symbols-outlined.lg {\n  font-size: 32px;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Loading/Loading.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@keyframes spin{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}.loading{overflow:hidden;display:flex;align-items:center;justify-content:center;color:var(--s-color-content-highlight);animation:spin 1s infinite linear}.loading-with-message{display:flex;align-items:center;gap:8px}.loading-with-message .success{color:var(--s-color-content-success)}.loading-with-message .warning{color:var(--s-color-content-warning)}.loading-with-message .loading-message{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default)}.material-symbols-outlined.extra-large{font-size:88px}","",{version:3,sources:["webpack://./src/app/components/Loading/Loading.scss"],names:[],mappings:"AAAA,gBACE,GACE,uBAAA,CAEF,KACE,yBAAA,CAAA,CAIJ,SACE,eAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,sCAAA,CACA,iCAAA,CAGF,sBACE,YAAA,CACA,kBAAA,CACA,OAAA,CAEA,+BACE,oCAAA,CAGF,+BACE,oCAAA,CAGF,uCACE,0CAAA,CACA,oCAAA,CAIJ,uCACE,cAAA",sourcesContent:["@keyframes spin {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n\n.loading {\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--s-color-content-highlight);\n  animation: spin 1s infinite linear;\n}\n\n.loading-with-message {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  .success {\n    color: var(--s-color-content-success);\n  }\n\n  .warning {\n    color: var(--s-color-content-warning);\n  }\n\n  .loading-message {\n    font: var(--s-typography-paragraph-regular);\n    color: var(--s-color-content-default);\n  }\n}\n\n.material-symbols-outlined.extra-large {\n  font-size: 88px;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);