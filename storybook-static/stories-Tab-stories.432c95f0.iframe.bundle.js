"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8864],{"./src/stories/Tab.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tab_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Tab=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Tab/Tab.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Tab.Z,options);Tab.Z&&Tab.Z.locals&&Tab.Z.locals;var __jsx=react.createElement,Tab_Tab_Tab=function Tab(_ref){var content=_ref.content;return __jsx("div",{className:"tab-root"},__jsx("div",null,content))};Tab_Tab_Tab.displayName="Tab";var Tabs=function Tabs(_ref2){var tabs=_ref2.tabs,_useState=(0,react.useState)(0),activeTab=_useState[0],setActiveTab=_useState[1],tabItemGroupRef=(0,react.useRef)(null);return __jsx("div",{className:"tab-root"},__jsx("div",{className:"tab-item-group",ref:tabItemGroupRef},tabs.map((function(tab,index){return __jsx("button",{className:"tab-item ".concat(index===activeTab&&"tab-item-active"),key:index,onClick:function onClick(){return function handleTabClick(index){if(setActiveTab(index),tabItemGroupRef.current){var tabItemWidth=tabItemGroupRef.current.children[index].getBoundingClientRect().width,scrollLeft=tabItemGroupRef.current.scrollLeft,centerScroll=tabItemGroupRef.current.children[index].getBoundingClientRect().left-(tabItemGroupRef.current.clientWidth-tabItemWidth)/2;tabItemGroupRef.current.scrollTo({left:centerScroll+scrollLeft,behavior:"smooth"})}}(index)}},tab.label)}))),__jsx("div",{className:"tab-content"},__jsx(Tab_Tab_Tab,{content:tabs[activeTab].content})))};Tabs.displayName="Tabs";try{Tab_Tab_Tab.displayName="Tab",Tab_Tab_Tab.__docgenInfo={description:"",displayName:"Tab",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Tab/Tab.tsx#Tab"]={docgenInfo:Tab_Tab_Tab.__docgenInfo,name:"Tab",path:"src/app/components/Tab/Tab.tsx#Tab"})}catch(__react_docgen_typescript_loader_error){}try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"TabProps[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Tab/Tab.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"src/app/components/Tab/Tab.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}var Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),Tab_stories_jsx=(__webpack_require__("./src/stories/css/slot.scss"),react.createElement);const Tab_stories={title:"Components/Tab",component:Tabs,argTypes:{},tags:["autodocs"]};var Template=function Template(args){return Tab_stories_jsx(Tabs,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={tabs:[{label:"Tab 1",content:Tab_stories_jsx("div",{className:"slot"},Tab_stories_jsx(Icon.Z,{icon:"refresh",size:"md"}),"1st Content")},{label:"Tab 2",content:Tab_stories_jsx("div",{className:"slot"},Tab_stories_jsx(Icon.Z,{icon:"refresh",size:"md"}),"2nd Content")}]},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Tabs {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/app/components/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Icon_Icon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Icon=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Icon/Icon.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Icon.Z,options);Icon.Z&&Icon.Z.locals&&Icon.Z.locals;var __jsx=react.createElement,Icon_Icon_Icon=function Icon(_ref){var size=_ref.size,fill=_ref.fill,icon=_ref.icon,sizeClass=size,fillStyle="'FILL' ".concat(fill||0);return __jsx(react.Fragment,null,__jsx("span",{style:{fontVariationSettings:fillStyle},className:"material-symbols-outlined ".concat(sizeClass)},icon))};const components_Icon_Icon=Icon_Icon_Icon;try{Icon_Icon_Icon.displayName="Icon",Icon_Icon_Icon.__docgenInfo={description:"",displayName:"Icon",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string | undefined"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Icon/Icon.tsx#Icon"]={docgenInfo:Icon_Icon_Icon.__docgenInfo,name:"Icon",path:"src/app/components/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Icon/Icon.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";.material-symbols-outlined{font-weight:300;display:flex;user-select:none}.material-symbols-outlined.sm{font-size:16px}.material-symbols-outlined.md{font-size:24px}.material-symbols-outlined.lg{font-size:32px}',"",{version:3,sources:["webpack://./src/app/components/Icon/Icon.scss"],names:[],mappings:"AAAQ,6HAAA,CAER,2BACE,eAAA,CACA,YAAA,CACA,gBAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");\n\n.material-symbols-outlined {\n  font-weight: 300;\n  display: flex;\n  user-select: none;\n}\n\n.material-symbols-outlined.sm {\n  font-size: 16px;\n}\n\n.material-symbols-outlined.md {\n  font-size: 24px;\n}\n\n.material-symbols-outlined.lg {\n  font-size: 32px;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Tab/Tab.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'body{--s-spacing-quarck: 2px;--s-spacing-nano: 4px;--s-spacing-xx-small: 8px;--s-spacing-x-small: 12px;--s-spacing-small: 16px;--s-spacing-medium: 24px;--s-spacing-large: 32px;--s-spacing-x-large: 40px;--s-spacing-xx-large: 48px;--s-spacing-huge: 56px;--s-border-width-none: 0;--s-border-width-hairline: 1px;--s-border-width-thin: 2px;--s-border-width-strong: 4px;--s-border-width-heavy: 8px;--s-border-radius-none: 0;--s-border-radius-small: 4px;--s-border-radius-medium: 8px;--s-border-radius-large: 16px;--s-border-radius-pill: 5000px;--s-font-size-base: 0.875rem;--s-font-weight-thin: 100;--s-font-weight-light: 300;--s-font-weight-regular: 400;--s-font-weight-medium: 500;--s-font-weight-semibold: 600;--s-font-weight-bold: 700;--s-line-height-16: 1rem;--s-line-height-20: 1.25rem;--s-line-height-24: 1.5rem;--s-line-height-32: 2rem;--s-typography-heading-x-large: 600 2.0125rem / 1rem Inter, sans-serif;--s-typography-heading-large: 600 1.4875rem / 1.5rem Inter, sans-serif;--s-typography-heading-medium: 600 1.225rem / 1.5rem Inter, sans-serif;--s-typography-heading-small: 600 0.9625rem / 1.5rem Inter, sans-serif;--s-typography-heading-x-small: 600 0.875rem / 1.5rem Inter, sans-serif;--s-typography-label-small: 500 0.7875rem / 1.5rem Inter, sans-serif;--s-typography-label-medium: 500 0.875rem / 1.5rem Inter, sans-serif;--s-typography-label-large: 500 0.9625rem / 1.5rem Inter, sans-serif;--s-typography-paragraph-regular: 400 0.875rem / 1.5rem Inter, sans-serif;--s-typography-paragraph-strong: 600 0.875rem / 1.5rem Inter, sans-serif;--s-typography-caption-regular: 400 0.7rem / 1.5rem Inter, sans-serif;--s-typography-caption-strong: 700 0.7rem / 1.5rem Inter, sans-serif;--s-shadow-level-1: 0 4px 8px 0 rgba(0, 0, 0, 0.0784313725);--s-shadow-level-2: 0 8px 16px 0 rgba(0, 0, 0, 0.0784313725);--s-shadow-level-3: 0 12px 24px 0 rgba(0, 0, 0, 0.0784313725);--s-shadow-level-4: 0 16px 32px 0 rgba(0, 0, 0, 0.0784313725)}@layer theme{:root{--s-color-background-default: #f6f7f9;--s-color-background-highlight: #873bec;--s-color-background-overlay: #000000A3;--s-color-fill-default: #ffffff;--s-color-fill-default-hover: #eceef2;--s-color-fill-default-light: #d5d9e2;--s-color-fill-disable: #eceef2;--s-color-fill-highlight: #873bec;--s-color-fill-highlight-hover: #945df5;--s-color-fill-highlight-light: #f6f3ff;--s-color-fill-success: #39814a;--s-color-fill-success-hover: #4a9d5d;--s-color-fill-success-light: #f3faf4;--s-color-fill-warning: #c8451f;--s-color-fill-warning-hover: #e4622b;--s-color-fill-warning-light: #fdf5ef;--s-color-border-default: #b1bbc8;--s-color-border-highlight: #873bec;--s-color-border-success: #39814a;--s-color-border-warning: #c8451f;--s-color-content-default: #3f495a;--s-color-content-light: #526077;--s-color-content-placeholder: #677790;--s-color-content-disable: #98a4b5;--s-color-content-on-color: #ffffff;--s-color-content-highlight: #873bec;--s-color-content-success: #39814a;--s-color-content-warning: #c8451f}:root[data-theme=dark]{--s-color-background-default: #22262f;--s-color-background-highlight: #873bec;--s-color-background-overlay: #000000A3;--s-color-fill-default: #343a46;--s-color-fill-default-hover: #3f495a;--s-color-fill-default-light: #434e61;--s-color-fill-disable: #3f495a;--s-color-fill-highlight: #873bec;--s-color-fill-highlight-hover: #945df5;--s-color-fill-highlight-light: #331065;--s-color-fill-success: #39814a;--s-color-fill-success-hover: #4a9d5d;--s-color-fill-success-light: #0f2415;--s-color-fill-warning: #c8451f;--s-color-fill-warning-hover: #e4622b;--s-color-fill-warning-light: #3d110d;--s-color-border-default: #526077;--s-color-border-highlight: #ae8cf9;--s-color-border-success: #6fb980;--s-color-border-warning: #e9824e;--s-color-content-default: #eceef2;--s-color-content-light: #b1bbc8;--s-color-content-placeholder: #98a4b5;--s-color-content-disable: #677790;--s-color-content-on-color: #ffffff;--s-color-content-highlight: #ae8cf9;--s-color-content-success: #6fb980;--s-color-content-warning: #e9824e}}*{box-sizing:border-box;border:0;margin:0;padding:0}.row::after{content:"";clear:both;display:table}[class*=col-]{float:left;padding:5px}.col-1{width:8.33%}.col-2{width:16.66%}.col-3{width:25%}.col-4{width:33.33%}.col-5{width:41.66%}.col-6{width:50%}.col-7{width:58.33%}.col-8{width:66.66%}.col-9{width:75%}.col-10{width:83.33%}.col-11{width:91.66%}.col-12{width:100%}@media screen and (max-width: 768px){.col-s-1{width:8.33%}.col-s-2{width:16.66%}.col-s-3{width:25%}.col-s-4{width:33.33%}.col-s-5{width:41.66%}.col-s-6{width:50%}.col-s-7{width:58.33%}.col-s-8{width:66.66%}.col-s-9{width:75%}.col-s-10{width:83.33%}.col-s-11{width:91.66%}.col-s-12{width:100%}}@media screen and (max-width: 600px){[class*=col-]{width:100%}}.tab-root{width:100%}.tab-root .tab-item-group{display:flex;box-sizing:border-box;height:40px;padding:0 var(--s-spacing-xx-small);overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none}.tab-root .tab-item-group::-webkit-scrollbar{display:none}.tab-root .tab-item-group .tab-item{height:40px;box-sizing:border-box;text-wrap:nowrap;font:var(--s-typography-label-medium);color:var(--s-color-content-light);padding:var(--s-spacing-xx-small) var(--s-spacing-small);background-color:rgba(0,0,0,0);cursor:pointer;border-bottom:var(--s-border-width-thin) var(--s-color-border-default) solid}.tab-root .tab-item-group .tab-item:hover{border-bottom:var(--s-border-width-thin) var(--s-color-border-highlight) solid;color:var(--s-color-content-default);background-color:var(--s-color-fill-default-hover)}.tab-root .tab-item-group .tab-item:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:-2px;outline-style:solid;border-radius:var(--s-border-radius-small) var(--s-border-radius-small) 0 0}.tab-root .tab-item-group .tab-item-active{color:var(--s-color-content-highlight);padding:var(--s-spacing-xx-small) var(--s-spacing-small);border-bottom:var(--s-border-width-thin) var(--s-color-border-highlight) solid}.tab-root .tab-content{padding:var(--s-spacing-x-small)}@media screen and (max-width: 490px){.tab-item-active{color:var(--s-color-content-highlight);padding:var(--s-spacing-xx-small);border-bottom:var(--s-border-width-thin) var(--s-color-border-highlight) solid}.tab-item:hover{border-bottom:var(--s-border-width-thin) var(--s-color-border-highlight) solid;color:var(--s-color-content-default);padding:var(--s-spacing-xx-small)}}',"",{version:3,sources:["webpack://./src/scss/tokens/tokens.scss","webpack://./src/scss/mixins/tokens.scss","webpack://./src/app/components/Tab/Tab.scss"],names:[],mappings:"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",sourcesContent:['@use "../mixins/tokens" as tokens;\n@use "./semantics/borders" as *;\n@use "./semantics/colors" as *;\n@use "./semantics/shadows" as *;\n@use "./semantics/typographies" as *;\n@use "./semantics/spacing" as *;\n\nbody {\n  @include tokens.generateVars($semantic-spacing, spacing);\n\n  @include tokens.generateVars($semantic-borders-width, border-width);\n\n  @include tokens.generateVars($semantic-borders-radius, border-radius);\n\n  @include tokens.generateVars($semantic-font-size, font-size);\n\n  @include tokens.generateVars($semantic-font-weight, font-weight);\n\n  @include tokens.generateVars($semantic-line-height, line-height);\n\n  @include tokens.generateVars($semantic-typographies, typography);\n\n  @include tokens.generateVars($semantic-shadows, shadow);\n}\n\n@layer theme {\n  :root {\n    @include tokens.generateVars($semantic-color-light, color);\n    &[data-theme="dark"] {\n      @include tokens.generateVars($semantic-color-dark, color);\n    }\n  }\n}\n\n* {\n  box-sizing: border-box;\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n.row::after {\n  content: "";\n  clear: both;\n  display: table;\n}\n\n[class*="col-"] {\n  float: left;\n  padding: 5px;\n}\n\n/* Para desktop */\n.col-1 {\n  width: 8.33%;\n}\n.col-2 {\n  width: 16.66%;\n}\n.col-3 {\n  width: 25%;\n}\n.col-4 {\n  width: 33.33%;\n}\n.col-5 {\n  width: 41.66%;\n}\n.col-6 {\n  width: 50%;\n}\n.col-7 {\n  width: 58.33%;\n}\n.col-8 {\n  width: 66.66%;\n}\n.col-9 {\n  width: 75%;\n}\n.col-10 {\n  width: 83.33%;\n}\n.col-11 {\n  width: 91.66%;\n}\n.col-12 {\n  width: 100%;\n}\n\n/* Para tablets */\n@media screen and (max-width: 768px) {\n  .col-s-1 {\n    width: 8.33%;\n  }\n  .col-s-2 {\n    width: 16.66%;\n  }\n  .col-s-3 {\n    width: 25%;\n  }\n  .col-s-4 {\n    width: 33.33%;\n  }\n  .col-s-5 {\n    width: 41.66%;\n  }\n  .col-s-6 {\n    width: 50%;\n  }\n  .col-s-7 {\n    width: 58.33%;\n  }\n  .col-s-8 {\n    width: 66.66%;\n  }\n  .col-s-9 {\n    width: 75%;\n  }\n  .col-s-10 {\n    width: 83.33%;\n  }\n  .col-s-11 {\n    width: 91.66%;\n  }\n  .col-s-12 {\n    width: 100%;\n  }\n}\n\n/* Para celulares */\n@media screen and (max-width: 600px) {\n  [class*="col-"] {\n    width: 100%;\n  }\n}\n','@use "sass:list";\n@use "sass:meta";\n@use "sass:map";\n@use "../constants/opacity" as *;\n\n@mixin generateVars($list, $type) {\n  @each $groupName, $groupValues in $list {\n    @if meta.type-of($groupValues) == map {\n      @each $name, $value in $groupValues {\n        --s-#{$type}-#{$groupName}-#{$name}: #{$value};\n      }\n    } @else {\n      --s-#{$type}-#{$groupName}: #{$groupValues};\n    }\n  }\n}\n\n@function getOpacity($valor) {\n  @return map-get($opacity, $valor);\n}\n\n@function getPrimitiveVar($primitiveVar, $type, $value: null, $opacity: null) {\n  $variableVariations: map.get($primitiveVar, $type);\n\n  @if not $value {\n    @if $opacity {\n      @return #{$variableVariations}#{getOpacity($opacity)};\n    }\n    @return $variableVariations;\n  }\n\n  @return map.get($variableVariations, $value);\n}\n','@import "../../../scss/tokens/tokens.scss";\n\n.tab-root {\n  width: 100%;\n\n  .tab-item-group {\n    display: flex;\n    box-sizing: border-box;\n    height: 40px;\n    padding: 0 var(--s-spacing-xx-small);\n    overflow-x: auto;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n\n    .tab-item {\n      height: 40px;\n      box-sizing: border-box;\n      text-wrap: nowrap;\n      font: var(--s-typography-label-medium);\n      color: var(--s-color-content-light);\n      padding: var(--s-spacing-xx-small) var(--s-spacing-small);\n      background-color: transparent;\n      cursor: pointer;\n      border-bottom: var(--s-border-width-thin) var(--s-color-border-default)\n        solid;\n    }\n\n    .tab-item:hover {\n      border-bottom: var(--s-border-width-thin) var(--s-color-border-highlight)\n        solid;\n      color: var(--s-color-content-default);\n      background-color: var(--s-color-fill-default-hover);\n    }\n\n    .tab-item:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-border-highlight);\n      outline-offset: -2px;\n      outline-style: solid;\n      border-radius: var(--s-border-radius-small) var(--s-border-radius-small) 0\n        0;\n    }\n\n    .tab-item-active {\n      color: var(--s-color-content-highlight);\n      padding: var(--s-spacing-xx-small) var(--s-spacing-small);\n      border-bottom: var(--s-border-width-thin) var(--s-color-border-highlight)\n        solid;\n    }\n  }\n\n  .tab-content {\n    padding: var(--s-spacing-x-small);\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .tab-item-active {\n    color: var(--s-color-content-highlight);\n    padding: var(--s-spacing-xx-small);\n    border-bottom: var(--s-border-width-thin) var(--s-color-border-highlight)\n      solid;\n  }\n  .tab-item:hover {\n    border-bottom: var(--s-border-width-thin) var(--s-color-border-highlight)\n      solid;\n    color: var(--s-color-content-default);\n    padding: var(--s-spacing-xx-small);\n  }\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);