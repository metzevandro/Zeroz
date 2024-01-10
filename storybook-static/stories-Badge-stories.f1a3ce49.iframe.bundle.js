"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5270],{"./src/stories/Badge.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Primary:()=>Primary,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Badge_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Badge=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Badge/Badge.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Badge.Z,options);Badge.Z&&Badge.Z.locals&&Badge.Z.locals;var __jsx=react.createElement,Badge_Badge_Badge=function Badge(_ref){var label=_ref.label,type=_ref.type,variant=_ref.variant;return __jsx("div",{className:"badge ".concat(type," ").concat(variant)},__jsx("p",null,label))};Badge_Badge_Badge.displayName="Badge";const components_Badge_Badge=Badge_Badge_Badge;try{Badge_Badge_Badge.displayName="Badge",Badge_Badge_Badge.__docgenInfo={description:"",displayName:"Badge",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"light"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'},{value:'"warning"'},{value:'"default"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Badge/Badge.tsx#Badge"]={docgenInfo:Badge_Badge_Badge.__docgenInfo,name:"Badge",path:"src/app/components/Badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}const Badge_stories={title:"Components/Badge",component:components_Badge_Badge,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};var Default={args:{label:"Badge",type:"default",variant:"default"}},Primary={args:{label:"Badge",type:"default",variant:"primary"}},Success={args:{label:"Badge",type:"default",variant:"success"}},Warning={args:{label:"Badge",type:"default",variant:"warning"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Badge",\n    type: "default",\n    variant: "default"\n  }\n}',...Default.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Badge",\n    type: "default",\n    variant: "primary"\n  }\n}',...Primary.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Badge",\n    type: "default",\n    variant: "success"\n  }\n}',...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Badge",\n    type: "default",\n    variant: "warning"\n  }\n}',...Warning.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Primary","Success","Warning"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Badge/Badge.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".badge{font:var(--s-typography-caption-regular);padding:0 var(--s-spacing-xx-small);border-radius:var(--s-border-radius-pill);width:min-content;height:min-content;color:var(--s-color-content-on-color)}.badge.default{color:var(--s-color-content-default);background-color:var(--s-color-fill-default-light)}.badge.default.primary{color:var(--s-color-content-on-color);background-color:var(--s-color-fill-highlight)}.badge.default.warning{color:var(--s-color-content-on-color);background-color:var(--s-color-fill-warning)}.badge.default.success{color:var(--s-color-content-on-color);background-color:var(--s-color-fill-success)}.badge.primary.light{background-color:var(--s-color-fill-highlight-light);color:var(--s-color-content-highlight)}.badge.warning.light{background-color:var(--s-color-fill-warning-light);color:var(--s-color-content-warning)}.badge.success.light{background-color:var(--s-color-fill-success-light);color:var(--s-color-content-success)}","",{version:3,sources:["webpack://./src/app/components/Badge/Badge.scss"],names:[],mappings:"AAAA,OACE,wCAAA,CACA,mCAAA,CACA,yCAAA,CACA,iBAAA,CACA,kBAAA,CACA,qCAAA,CAEA,eACE,oCAAA,CACA,kDAAA,CAGF,uBACE,qCAAA,CACA,8CAAA,CAGF,uBACE,qCAAA,CACA,4CAAA,CAGF,uBACE,qCAAA,CACA,4CAAA,CAGF,qBACE,oDAAA,CACA,sCAAA,CAGF,qBACE,kDAAA,CACA,oCAAA,CAGF,qBACE,kDAAA,CACA,oCAAA",sourcesContent:[".badge {\n  font: var(--s-typography-caption-regular);\n  padding: 0 var(--s-spacing-xx-small);\n  border-radius: var(--s-border-radius-pill);\n  width: min-content;\n  height: min-content;\n  color: var(--s-color-content-on-color);\n\n  &.default {\n    color: var(--s-color-content-default);\n    background-color: var(--s-color-fill-default-light);\n  }\n\n  &.default.primary {\n    color: var(--s-color-content-on-color);\n    background-color: var(--s-color-fill-highlight);\n  }\n\n  &.default.warning {\n    color: var(--s-color-content-on-color);\n    background-color: var(--s-color-fill-warning);\n  }\n\n  &.default.success {\n    color: var(--s-color-content-on-color);\n    background-color: var(--s-color-fill-success);\n  }\n\n  &.primary.light {\n    background-color: var(--s-color-fill-highlight-light);\n    color: var(--s-color-content-highlight);\n  }\n\n  &.warning.light {\n    background-color: var(--s-color-fill-warning-light);\n    color: var(--s-color-content-warning);\n  }\n\n  &.success.light {\n    background-color: var(--s-color-fill-success-light);\n    color: var(--s-color-content-success);\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);