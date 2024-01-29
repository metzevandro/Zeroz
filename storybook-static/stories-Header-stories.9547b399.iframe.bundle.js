"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7758],{"./src/stories/Header.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_app_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Header/Header.tsx"),_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/DropdownMenu/DropdownMenu.tsx"),_app_components_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Breadcrumb/Breadcrumb.tsx"),__jsx=(__webpack_require__("./src/stories/css/main.scss"),react__WEBPACK_IMPORTED_MODULE_0__.createElement);const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Header",component:_app_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__.h,parameters:{layout:"padded"},args:{toggle:!1},tags:["autodocs"]};var Default=function Template(args){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);_useState[0],_useState[1];return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_app_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__.h,{breadcrumb:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_app_components_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__.c,{pageName:"Breadcrumb"},__jsx(_app_components_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__.a,{pageName:"Breadcrumb"}))),onClick:function onClick(){}},__jsx(_app_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__.X,{name:"Username"},__jsx(_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.GV,{dropDownMenu:!0},__jsx(_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.Cs,{content:"Settings"}),__jsx(_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.M8,{content:"Item 1"}),__jsx(_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.M8,{content:"Item 2"}),__jsx(_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.M8,{content:"Settings",typeIcon:"settings"})))))}.bind({});Default.args={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [isOpenHeader, setIsOpenHeader] = useState(false);\n  const toggleHeader = () => {\n    setIsOpenHeader(!isOpenHeader);\n  };\n  return <>\r\n      <Header breadcrumb={<>\r\n            <BreadcrumbRoot pageName="Breadcrumb">\r\n              <Breadcrumb pageName="Breadcrumb" />\r\n            </BreadcrumbRoot>\r\n          </>} onClick={() => {}}>\r\n        <HeaderProfile name="Username">\r\n          <DropDownMenu dropDownMenu>\r\n            <DropDownMenuTitle content="Settings" />\r\n            <DropDownMenuItem content="Item 1" />\r\n            <DropDownMenuItem content="Item 2" />\r\n            <DropDownMenuItem content="Settings" typeIcon="settings" />\r\n          </DropDownMenu>\r\n        </HeaderProfile>\r\n      </Header>\r\n    </>;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/app/components/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Icon_Icon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Icon=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Icon/Icon.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Icon.Z,options);Icon.Z&&Icon.Z.locals&&Icon.Z.locals;var __jsx=react.createElement,Icon_Icon_Icon=function Icon(_ref){var size=_ref.size,fill=_ref.fill,icon=_ref.icon,sizeClass=size,fillStyle="'FILL' ".concat(fill||0);return __jsx(react.Fragment,null,__jsx("span",{style:{fontVariationSettings:fillStyle},className:"material-symbols-outlined ".concat(sizeClass)},icon))};const components_Icon_Icon=Icon_Icon_Icon;try{Icon_Icon_Icon.displayName="Icon",Icon_Icon_Icon.__docgenInfo={description:"",displayName:"Icon",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string | undefined"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Icon/Icon.tsx#Icon"]={docgenInfo:Icon_Icon_Icon.__docgenInfo,name:"Icon",path:"src/app/components/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Icon/Icon.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";.material-symbols-outlined{font-weight:400;display:flex;user-select:none}.material-symbols-outlined.sm{font-size:16px}.material-symbols-outlined.md{font-size:24px}.material-symbols-outlined.lg{font-size:32px}',"",{version:3,sources:["webpack://./src/app/components/Icon/Icon.scss"],names:[],mappings:"AAAQ,6HAAA,CAER,2BACE,eAAA,CACA,YAAA,CACA,gBAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");\n\n.material-symbols-outlined {\n  font-weight: 400;\n  display: flex;\n  user-select: none;\n}\n\n.material-symbols-outlined.sm {\n  font-size: 16px;\n}\n\n.material-symbols-outlined.md {\n  font-size: 24px;\n}\n\n.material-symbols-outlined.lg {\n  font-size: 32px;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/stories/css/main.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@import"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap";body{--s-spacing-quarck: 2px;--s-spacing-nano: 4px;--s-spacing-xx-small: 8px;--s-spacing-x-small: 12px;--s-spacing-small: 16px;--s-spacing-medium: 24px;--s-spacing-large: 32px;--s-spacing-x-large: 40px;--s-spacing-xx-large: 48px;--s-spacing-huge: 56px;--s-border-width-none: 0;--s-border-width-hairline: 1px;--s-border-width-thin: 2px;--s-border-width-strong: 4px;--s-border-width-heavy: 8px;--s-border-radius-none: 0;--s-border-radius-small: 4px;--s-border-radius-medium: 8px;--s-border-radius-large: 16px;--s-border-radius-pill: 5000px;--s-font-size-base: 0.875rem;--s-font-weight-thin: 100;--s-font-weight-light: 300;--s-font-weight-regular: 400;--s-font-weight-medium: 500;--s-font-weight-semibold: 600;--s-font-weight-bold: 700;--s-line-height-16: 1rem;--s-line-height-20: 1.25rem;--s-line-height-24: 1.5rem;--s-line-height-32: 2rem;--s-typography-heading-x-large: 600 2.0125rem / 1rem Inter, sans-serif;--s-typography-heading-large: 600 1.4875rem / 1.5rem Inter, sans-serif;--s-typography-heading-medium: 600 1.225rem / 1.5rem Inter, sans-serif;--s-typography-heading-small: 600 0.9625rem / 1.5rem Inter, sans-serif;--s-typography-heading-x-small: 600 0.875rem / 1.5rem Inter, sans-serif;--s-typography-label-small: 500 0.7875rem / 1.5rem Inter, sans-serif;--s-typography-label-medium: 500 0.875rem / 1.5rem Inter, sans-serif;--s-typography-label-large: 500 0.9625rem / 1.5rem Inter, sans-serif;--s-typography-paragraph-regular: 400 0.875rem / 1.5rem Inter, sans-serif;--s-typography-paragraph-strong: 600 0.875rem / 1.5rem Inter, sans-serif;--s-typography-caption-regular: 400 0.7rem / 1.5rem Inter, sans-serif;--s-typography-caption-strong: 700 0.7rem / 1.5rem Inter, sans-serif;--s-shadow-level-1: 0 4px 8px 0 rgba(0, 0, 0, 0.16);--s-shadow-level-2: 0 8px 16px 0 rgba(0, 0, 0, 0.16);--s-shadow-level-3: 0 12px 24px 0 rgba(0, 0, 0, 0.16);--s-shadow-level-4: 0 16px 32px 0 rgba(0, 0, 0, 0.16)}@layer theme{:root{--s-color-background-default: #f6f7f9;--s-color-background-highlight: #873bec;--s-color-background-overlay: #000000A3;--s-color-fill-default: #ffffff;--s-color-fill-default-hover: #eceef2;--s-color-fill-default-light: #d5d9e2;--s-color-fill-disable: #eceef2;--s-color-fill-highlight: #873bec;--s-color-fill-highlight-hover: #945df5;--s-color-fill-highlight-light: #f6f3ff;--s-color-fill-success: #39814a;--s-color-fill-success-hover: #4a9d5d;--s-color-fill-success-light: #f3faf4;--s-color-fill-warning: #c8451f;--s-color-fill-warning-hover: #e4622b;--s-color-fill-warning-light: #fdf5ef;--s-color-border-default: #b1bbc8;--s-color-border-highlight: #873bec;--s-color-border-success: #39814a;--s-color-border-warning: #c8451f;--s-color-content-default: #3f495a;--s-color-content-light: #526077;--s-color-content-placeholder: #677790;--s-color-content-disable: #98a4b5;--s-color-content-on-color: #ffffff;--s-color-content-highlight: #873bec;--s-color-content-success: #39814a;--s-color-content-warning: #c8451f}:root[data-theme=dark]{--s-color-background-default: #22262f;--s-color-background-highlight: #873bec;--s-color-background-overlay: #000000A3;--s-color-fill-default: #343a46;--s-color-fill-default-hover: #3f495a;--s-color-fill-default-light: #434e61;--s-color-fill-disable: #3f495a;--s-color-fill-highlight: #873bec;--s-color-fill-highlight-hover: #945df5;--s-color-fill-highlight-light: #331065;--s-color-fill-success: #39814a;--s-color-fill-success-hover: #4a9d5d;--s-color-fill-success-light: #0f2415;--s-color-fill-warning: #c8451f;--s-color-fill-warning-hover: #e4622b;--s-color-fill-warning-light: #3d110d;--s-color-border-default: #526077;--s-color-border-highlight: #ae8cf9;--s-color-border-success: #6fb980;--s-color-border-warning: #e9824e;--s-color-content-default: #eceef2;--s-color-content-light: #b1bbc8;--s-color-content-placeholder: #98a4b5;--s-color-content-disable: #677790;--s-color-content-on-color: #ffffff;--s-color-content-highlight: #ae8cf9;--s-color-content-success: #6fb980;--s-color-content-warning: #e9824e}}*{box-sizing:border-box;border:0;margin:0;padding:0}.row::after{content:"";clear:both;display:table}[class*=col-]{float:left;padding:5px}.col-1{width:8.33%}.col-2{width:16.66%}.col-3{width:25%}.col-4{width:33.33%}.col-5{width:41.66%}.col-6{width:50%}.col-7{width:58.33%}.col-8{width:66.66%}.col-9{width:75%}.col-10{width:83.33%}.col-11{width:91.66%}.col-12{width:100%}@media screen and (max-width: 768px){.col-s-1{width:8.33%}.col-s-2{width:16.66%}.col-s-3{width:25%}.col-s-4{width:33.33%}.col-s-5{width:41.66%}.col-s-6{width:50%}.col-s-7{width:58.33%}.col-s-8{width:66.66%}.col-s-9{width:75%}.col-s-10{width:83.33%}.col-s-11{width:91.66%}.col-s-12{width:100%}}@media screen and (max-width: 600px){[class*=col-]{width:100%}}.slot{display:flex;align-items:center;gap:var(--s-spacing-xx-small);color:var(--s-color-content-highlight);border:var(--s-border-width-thin) solid var(--s-color-border-highlight);font:var(--s-typography-heading-small);padding:var(--s-spacing-small);border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-highlight-light)}',"",{version:3,sources:["webpack://./src/scss/tokens/tokens.scss","webpack://./src/scss/mixins/tokens.scss","webpack://./src/stories/css/main.scss"],names:[],mappings:"AAMQ,6GAAA,CAER,KCIM,uBAAA,CAAA,qBAAA,CAAA,yBAAA,CAAA,yBAAA,CAAA,uBAAA,CAAA,wBAAA,CAAA,uBAAA,CAAA,yBAAA,CAAA,0BAAA,CAAA,sBAAA,CAAA,wBAAA,CAAA,8BAAA,CAAA,0BAAA,CAAA,4BAAA,CAAA,2BAAA,CAAA,yBAAA,CAAA,4BAAA,CAAA,6BAAA,CAAA,6BAAA,CAAA,8BAAA,CAAA,4BAAA,CAAA,yBAAA,CAAA,0BAAA,CAAA,4BAAA,CAAA,2BAAA,CAAA,6BAAA,CAAA,yBAAA,CAAA,wBAAA,CAAA,2BAAA,CAAA,0BAAA,CAAA,wBAAA,CAAA,sEAAA,CAAA,sEAAA,CAAA,sEAAA,CAAA,sEAAA,CAAA,uEAAA,CAAA,oEAAA,CAAA,oEAAA,CAAA,oEAAA,CAAA,yEAAA,CAAA,wEAAA,CAAA,qEAAA,CAAA,oEAAA,CAHE,mDAAA,CAAA,oDAAA,CAAA,qDAAA,CAAA,qDAAA,CDiBR,aACE,MClBM,qCAAA,CAAA,uCAAA,CAAA,uCAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,+BAAA,CAAA,iCAAA,CAAA,uCAAA,CAAA,uCAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,iCAAA,CAAA,mCAAA,CAAA,iCAAA,CAAA,iCAAA,CAAA,kCAAA,CAAA,gCAAA,CAAA,sCAAA,CAAA,kCAAA,CAAA,mCAAA,CAAA,oCAAA,CAAA,kCAAA,CAAA,kCAAA,CDoBJ,uBCpBI,qCAAA,CAAA,uCAAA,CAAA,uCAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,+BAAA,CAAA,iCAAA,CAAA,uCAAA,CAAA,uCAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,iCAAA,CAAA,mCAAA,CAAA,iCAAA,CAAA,iCAAA,CAAA,kCAAA,CAAA,gCAAA,CAAA,sCAAA,CAAA,kCAAA,CAAA,mCAAA,CAAA,oCAAA,CAAA,kCAAA,CAAA,kCAAA,CAAA,CD0BR,EACE,qBAAA,CACA,QAAA,CACA,QAAA,CACA,SAAA,CAGF,YACE,UAAA,CACA,UAAA,CACA,aAAA,CAGF,cACE,UAAA,CACA,WAAA,CAIF,OACE,WAAA,CAEF,OACE,YAAA,CAEF,OACE,SAAA,CAEF,OACE,YAAA,CAEF,OACE,YAAA,CAEF,OACE,SAAA,CAEF,OACE,YAAA,CAEF,OACE,YAAA,CAEF,OACE,SAAA,CAEF,QACE,YAAA,CAEF,QACE,YAAA,CAEF,QACE,UAAA,CAIF,qCACE,SACE,WAAA,CAEF,SACE,YAAA,CAEF,SACE,SAAA,CAEF,SACE,YAAA,CAEF,SACE,YAAA,CAEF,SACE,SAAA,CAEF,SACE,YAAA,CAEF,SACE,YAAA,CAEF,SACE,SAAA,CAEF,UACE,YAAA,CAEF,UACE,YAAA,CAEF,UACE,UAAA,CAAA,CAKJ,qCACE,cACE,UAAA,CAAA,CEpIJ,MACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,sCAAA,CACA,uEAAA,CACA,sCAAA,CACA,8BAAA,CACA,0CAAA,CACA,oDAAA",sourcesContent:['@use "../mixins/tokens" as tokens;\n@use "./semantics/borders" as *;\n@use "./semantics/colors" as *;\n@use "./semantics/shadows" as *;\n@use "./semantics/typographies" as *;\n@use "./semantics/spacing" as *;\n@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");\n\nbody {\n  @include tokens.generateVars($semantic-spacing, spacing);\n\n  @include tokens.generateVars($semantic-borders-width, border-width);\n\n  @include tokens.generateVars($semantic-borders-radius, border-radius);\n\n  @include tokens.generateVars($semantic-font-size, font-size);\n\n  @include tokens.generateVars($semantic-font-weight, font-weight);\n\n  @include tokens.generateVars($semantic-line-height, line-height);\n\n  @include tokens.generateVars($semantic-typographies, typography);\n\n  @include tokens.generateVars($semantic-shadows, shadow);\n}\n\n@layer theme {\n  :root {\n    @include tokens.generateVars($semantic-color-light, color);\n    &[data-theme="dark"] {\n      @include tokens.generateVars($semantic-color-dark, color);\n    }\n  }\n}\n\n* {\n  box-sizing: border-box;\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n.row::after {\n  content: "";\n  clear: both;\n  display: table;\n}\n\n[class*="col-"] {\n  float: left;\n  padding: 5px;\n}\n\n/* Para desktop */\n.col-1 {\n  width: 8.33%;\n}\n.col-2 {\n  width: 16.66%;\n}\n.col-3 {\n  width: 25%;\n}\n.col-4 {\n  width: 33.33%;\n}\n.col-5 {\n  width: 41.66%;\n}\n.col-6 {\n  width: 50%;\n}\n.col-7 {\n  width: 58.33%;\n}\n.col-8 {\n  width: 66.66%;\n}\n.col-9 {\n  width: 75%;\n}\n.col-10 {\n  width: 83.33%;\n}\n.col-11 {\n  width: 91.66%;\n}\n.col-12 {\n  width: 100%;\n}\n\n/* Para tablets */\n@media screen and (max-width: 768px) {\n  .col-s-1 {\n    width: 8.33%;\n  }\n  .col-s-2 {\n    width: 16.66%;\n  }\n  .col-s-3 {\n    width: 25%;\n  }\n  .col-s-4 {\n    width: 33.33%;\n  }\n  .col-s-5 {\n    width: 41.66%;\n  }\n  .col-s-6 {\n    width: 50%;\n  }\n  .col-s-7 {\n    width: 58.33%;\n  }\n  .col-s-8 {\n    width: 66.66%;\n  }\n  .col-s-9 {\n    width: 75%;\n  }\n  .col-s-10 {\n    width: 83.33%;\n  }\n  .col-s-11 {\n    width: 91.66%;\n  }\n  .col-s-12 {\n    width: 100%;\n  }\n}\n\n/* Para celulares */\n@media screen and (max-width: 600px) {\n  [class*="col-"] {\n    width: 100%;\n  }\n}\n','@use "sass:list";\n@use "sass:meta";\n@use "sass:map";\n@use "../constants/opacity" as *;\n\n@mixin generateVars($list, $type) {\n  @each $groupName, $groupValues in $list {\n    @if meta.type-of($groupValues) == map {\n      @each $name, $value in $groupValues {\n        --s-#{$type}-#{$groupName}-#{$name}: #{$value};\n      }\n    } @else {\n      --s-#{$type}-#{$groupName}: #{$groupValues};\n    }\n  }\n}\n\n@function getOpacity($valor) {\n  @return map-get($opacity, $valor);\n}\n\n@function getPrimitiveVar($primitiveVar, $type, $value: null, $opacity: null) {\n  $variableVariations: map.get($primitiveVar, $type);\n\n  @if not $value {\n    @if $opacity {\n      @return #{$variableVariations}#{getOpacity($opacity)};\n    }\n    @return $variableVariations;\n  }\n\n  @return map.get($variableVariations, $value);\n}\n','@import "../../scss/tokens/tokens.scss";\n\n.slot {\n  display: flex;\n  align-items: center;\n  gap: var(--s-spacing-xx-small);\n  color: var(--s-color-content-highlight);\n  border: var(--s-border-width-thin) solid var(--s-color-border-highlight);\n  font: var(--s-typography-heading-small);\n  padding: var(--s-spacing-small);\n  border-radius: var(--s-border-radius-small);\n  background-color: var(--s-color-fill-highlight-light);\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/stories/css/main.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_4_main_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/stories/css/main.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_4_main_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_4_main_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_4_main_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_4_main_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);