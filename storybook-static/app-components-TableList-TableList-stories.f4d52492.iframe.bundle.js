"use strict";(self.webpackChunkdesign_system_zeroz=self.webpackChunkdesign_system_zeroz||[]).push([[7709],{"./src/app/components/TableList/TableList.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TableList_stories});__webpack_require__("./src/app/styles.scss");var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),TableList=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/app/components/TableList/TableList.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TableList.A,options);TableList.A&&TableList.A.locals&&TableList.A.locals;var __jsx=react.createElement,TableList_TableList_TableList=function TableList(_ref){var columns=_ref.columns,data=_ref.data,size=_ref.size,_useState=(0,react.useState)(!1),isOverflowed=_useState[0],setIsOverflowed=_useState[1],tableListRef=(0,react.useRef)(null);(0,react.useEffect)((function(){var checkOverflow=function checkOverflow(){var tableListElement=tableListRef.current;tableListElement&&setIsOverflowed(tableListElement.scrollWidth>tableListElement.clientWidth)},resizeObserver=new ResizeObserver((function(){checkOverflow()})),tableListElement=tableListRef.current;return tableListElement&&(resizeObserver.observe(tableListElement),checkOverflow()),function(){tableListElement&&resizeObserver.unobserve(tableListElement)}}),[]);var transposedData=columns.map((function(_,columnIndex){return data.map((function(row){return row[columnIndex]}))}));return __jsx("div",{className:"table-list-root ".concat(isOverflowed?"overflow-ativo":""),ref:tableListRef},__jsx("div",{className:"table"},__jsx("div",{className:"table-container"},columns.map((function(column,columnIndex){return __jsx("div",{className:"th",key:columnIndex},column)}))),__jsx("div",{className:"table-container"},transposedData.map((function(column,columnIndex){return __jsx("div",{key:columnIndex,className:"table-column"},column.map((function(cell,cellIndex){return __jsx("div",{className:"td ".concat(size," border"),key:cellIndex},cell)})))})))))};const components_TableList_TableList=TableList_TableList_TableList;TableList_TableList_TableList.__docgenInfo={description:"",methods:[],displayName:"TableList",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"any"}],raw:"any[]"}],raw:"any[][]"},description:""},size:{required:!0,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:""}}};const TableList_stories={title:"Components/Table List",component:components_TableList_TableList,tags:["autodocs"],argTypes:{}};var columns=["Name","Age","Role","Experience","Company"],data=[["David",25,"Developer","4 years","Google"],["Maria",30,"Designer","1 years","Microsoft"],["Carlos",28,"Data Analyst","1 month","Netflix"]],Default={args:{columns,data,size:"md"}},Small={args:{columns,data,size:"sm"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    columns,\n    data,\n    size: "md"\n  }\n}',...Default.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  args: {\n    columns,\n    data,\n    size: "sm"\n  }\n}',...Small.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Small"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/app/components/TableList/TableList.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".table-list-root{overflow:auto}.table-list-root .table{border-spacing:0;border-collapse:collapse;box-sizing:border-box;display:grid;grid-template-rows:auto}.table-list-root .table .th{box-sizing:border-box;padding:var(--s-spacing-xx-small) var(--s-spacing-small);text-align:left;background-color:var(--s-color-fill-default);text-transform:uppercase;color:var(--s-color-content-light);font:var(--s-typography-caption-strong)}.table-list-root .table .table-container{display:grid;grid-auto-flow:column;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr))}.table-list-root .table .td{box-sizing:border-box;white-space:nowrap;background-color:var(--s-color-fill-default);color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular);border:none}.table-list-root .table .td.sm{padding:var(--s-spacing-xx-small) var(--s-spacing-small)}.table-list-root .table .td.md{padding:var(--s-spacing-small)}.table-list-root .table .td.border{border-top:var(--s-border-width-hairline) solid var(--s-color-border-default)}.table-list-root .table .table-column:first-of-type,.table-list-root .table .th:first-of-type{position:sticky;top:0;left:0;z-index:2}.table-list-root::-webkit-scrollbar{height:4px;border-radius:12px}.table-list-root::-webkit-scrollbar-thumb{background:var(--s-color-fill-default-light);border-radius:12px}.table-list-root.overflow-ativo .table-column:first-of-type,.table-list-root.overflow-ativo .th:first-of-type{box-sizing:border-box;box-shadow:4px 0 0 0 rgba(0,0,0,.04)}","",{version:3,sources:["webpack://./src/app/components/TableList/TableList.scss"],names:[],mappings:"AAAA,iBACE,aAAA,CAEA,wBACE,gBAAA,CACA,wBAAA,CACA,qBAAA,CACA,YAAA,CAEA,uBAAA,CAEA,4BACE,qBAAA,CACA,wDAAA,CACA,eAAA,CACA,4CAAA,CACA,wBAAA,CACA,kCAAA,CACA,uCAAA,CAIF,yCACE,YAAA,CACA,qBAAA,CACA,0DAAA,CAGF,4BACE,qBAAA,CACA,kBAAA,CACA,4CAAA,CACA,oCAAA,CACA,0CAAA,CACA,WAAA,CAEA,+BACE,wDAAA,CAGF,+BACE,8BAAA,CAEF,mCACE,6EAAA,CAMJ,8FAEE,eAAA,CACA,KAAA,CACA,MAAA,CACA,SAAA,CAKJ,oCACE,UAAA,CACA,kBAAA,CAGF,0CACE,4CAAA,CACA,kBAAA,CAKA,8GAEE,qBAAA,CACA,oCAAA",sourcesContent:[".table-list-root {\n  overflow: auto;\n\n  .table {\n    border-spacing: 0;\n    border-collapse: collapse;\n    box-sizing: border-box;\n    display: grid;\n\n    grid-template-rows: auto;\n\n    .th {\n      box-sizing: border-box;\n      padding: var(--s-spacing-xx-small) var(--s-spacing-small);\n      text-align: left;\n      background-color: var(--s-color-fill-default);\n      text-transform: uppercase;\n      color: var(--s-color-content-light);\n      font: var(--s-typography-caption-strong);\n    }\n\n    // Define as linhas como grid\n    .table-container {\n      display: grid;\n      grid-auto-flow: column;\n      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n    }\n\n    .td {\n      box-sizing: border-box;\n      white-space: nowrap;\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n      border: none;\n\n      &.sm {\n        padding: var(--s-spacing-xx-small) var(--s-spacing-small);\n      }\n\n      &.md {\n        padding: var(--s-spacing-small);\n      }\n      &.border {\n        border-top: var(--s-border-width-hairline) solid\n          var(--s-color-border-default);\n      }\n    }\n\n    // Ajuste para o posicionamento fixo da primeira coluna\n    .table-column:first-of-type,\n    .th:first-of-type {\n      position: sticky;\n      top: 0;\n      left: 0;\n      z-index: 2;\n    }\n  }\n\n  // Estilo da barra de rolagem\n  &::-webkit-scrollbar {\n    height: 4px;\n    border-radius: 12px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: var(--s-color-fill-default-light);\n    border-radius: 12px;\n  }\n\n  // Ajuste quando há overflow horizontal\n  &.overflow-ativo {\n    .table-column:first-of-type,\n    .th:first-of-type {\n      box-sizing: border-box;\n      box-shadow: 4px 0 0 0 rgba(0, 0, 0, 0.04);\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/app/styles.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";@layer brand{:root[data-company=zeroz]{--b-color-darkness: #331065;--b-color-base: #873bec;--b-color-medium: #945df5;--b-color-light: #ae8cf9;--b-color-lightness: #f6f3ff}:root[data-company=whitelabel]{--b-color-darkness: #181d53;--b-color-base: #2a47e6;--b-color-medium: #466cf2;--b-color-light: #648ef6;--b-color-lightness: #eff3ff}}:root{--s-spacing-quarck: 2px;--s-spacing-nano: 4px;--s-spacing-xx-small: 8px;--s-spacing-x-small: 12px;--s-spacing-small: 16px;--s-spacing-medium: 24px;--s-spacing-large: 32px;--s-spacing-x-large: 40px;--s-spacing-xx-large: 48px;--s-spacing-huge: 56px;--s-border-width-none: 0;--s-border-width-hairline: 1px;--s-border-width-thin: 2px;--s-border-width-strong: 4px;--s-border-width-heavy: 8px;--s-border-radius-none: 0;--s-border-radius-small: 4px;--s-border-radius-medium: 8px;--s-border-radius-large: 16px;--s-border-radius-pill: 5000px;--s-font-size-base: 0.875rem;--s-font-weight-thin: 100;--s-font-weight-light: 300;--s-font-weight-regular: 400;--s-font-weight-medium: 500;--s-font-weight-semibold: 600;--s-font-weight-bold: 700;--s-line-height-16: 1rem;--s-line-height-20: 1.25rem;--s-line-height-24: 1.5rem;--s-line-height-32: 2rem;--s-typography-heading-x-large: 600 2.0125rem / 1rem Inter, sans-serif;--s-typography-heading-large: 600 1.4875rem / 1.5rem Inter, sans-serif;--s-typography-heading-medium: 600 1.225rem / 1.5rem Inter, sans-serif;--s-typography-heading-small: 600 0.9625rem / 1.5rem Inter, sans-serif;--s-typography-heading-x-small: 600 0.875rem / 1.5rem Inter, sans-serif;--s-typography-label-small: 500 0.7875rem / 1.5rem Inter, sans-serif;--s-typography-label-medium: 500 0.875rem / 1.5rem Inter, sans-serif;--s-typography-label-large: 500 0.9625rem / 1.5rem Inter, sans-serif;--s-typography-paragraph-regular: 400 0.875rem / 1.5rem Inter, sans-serif;--s-typography-paragraph-strong: 600 0.875rem / 1.5rem Inter, sans-serif;--s-typography-caption-regular: 400 0.7rem / 1.5rem Inter, sans-serif;--s-typography-caption-strong: 700 0.7rem / 1.5rem Inter, sans-serif;--s-shadow-level-1: 0 4px 8px 0 rgba(0, 0, 0, 0.16);--s-shadow-level-2: 0 8px 16px 0 rgba(0, 0, 0, 0.16);--s-shadow-level-3: 0 12px 24px 0 rgba(0, 0, 0, 0.16);--s-shadow-level-4: 0 16px 32px 0 rgba(0, 0, 0, 0.16)}@layer theme{:root{--s-color-background-default: #f6f7f9;--s-color-background-highlight: var(--b-color-base);--s-color-background-overlay: #000000A3;--s-color-fill-default: #ffffff;--s-color-fill-default-hover: #eceef2;--s-color-fill-default-light: #d5d9e2;--s-color-fill-disable: #eceef2;--s-color-fill-highlight: var(--b-color-base);--s-color-fill-highlight-hover: var(--b-color-medium);--s-color-fill-highlight-light: var(--b-color-lightness);--s-color-fill-success: #39814a;--s-color-fill-success-hover: #4a9d5d;--s-color-fill-success-light: #f3faf4;--s-color-fill-warning: #c8451f;--s-color-fill-warning-hover: #e4622b;--s-color-fill-warning-light: #fdf5ef;--s-color-border-default: #b1bbc8;--s-color-border-highlight: var(--b-color-base);--s-color-border-success: #39814a;--s-color-border-warning: #c8451f;--s-color-content-default: #3f495a;--s-color-content-light: #526077;--s-color-content-placeholder: #677790;--s-color-content-disable: #98a4b5;--s-color-content-on-color: #ffffff;--s-color-content-highlight: var(--b-color-base);--s-color-content-success: #39814a;--s-color-content-warning: #c8451f}:root[data-theme=dark]{--s-color-background-default: #22262f;--s-color-background-highlight: var(--b-color-base);--s-color-background-overlay: #000000A3;--s-color-fill-default: #343a46;--s-color-fill-default-hover: #3f495a;--s-color-fill-default-light: #434e61;--s-color-fill-disable: #3f495a;--s-color-fill-highlight: var(--b-color-base);--s-color-fill-highlight-hover: var(--b-color-medium);--s-color-fill-highlight-light: var(--b-color-darkness);--s-color-fill-success: #39814a;--s-color-fill-success-hover: #4a9d5d;--s-color-fill-success-light: #0f2415;--s-color-fill-warning: #c8451f;--s-color-fill-warning-hover: #e4622b;--s-color-fill-warning-light: #3d110d;--s-color-border-default: #526077;--s-color-border-highlight: var(--b-color-light);--s-color-border-success: #6fb980;--s-color-border-warning: #e9824e;--s-color-content-default: #eceef2;--s-color-content-light: #b1bbc8;--s-color-content-placeholder: #98a4b5;--s-color-content-disable: #677790;--s-color-content-on-color: #ffffff;--s-color-content-highlight: var(--b-color-light);--s-color-content-success: #6fb980;--s-color-content-warning: #e9824e}}*{border:none;padding:0;margin:0;box-sizing:border-box}.slot{display:flex;align-items:center;gap:var(--s-spacing-xx-small);color:var(--s-color-content-highlight);border:var(--s-border-width-thin) solid var(--s-color-border-highlight);font:var(--s-typography-heading-small);padding:var(--s-spacing-small);border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-highlight-light)}',"",{version:3,sources:["webpack://./src/app/styles.scss","webpack://./src/scss/tokens/semantics/colors.scss","webpack://./src/scss/mixins/tokens.scss"],names:[],mappings:"AAOQ,6HAAA,CCJR,aAEI,0BACE,2BAAA,CACA,uBAAA,CACA,yBAAA,CACA,wBAAA,CACA,4BAAA,CAGF,+BACE,2BAAA,CACA,uBAAA,CACA,yBAAA,CACA,wBAAA,CACA,4BAAA,CAAA,CDTN,MEGM,uBAAA,CAAA,qBAAA,CAAA,yBAAA,CAAA,yBAAA,CAAA,uBAAA,CAAA,wBAAA,CAAA,uBAAA,CAAA,yBAAA,CAAA,0BAAA,CAAA,sBAAA,CAAA,wBAAA,CAAA,8BAAA,CAAA,0BAAA,CAAA,4BAAA,CAAA,2BAAA,CAAA,yBAAA,CAAA,4BAAA,CAAA,6BAAA,CAAA,6BAAA,CAAA,8BAAA,CAAA,4BAAA,CAAA,yBAAA,CAAA,0BAAA,CAAA,4BAAA,CAAA,2BAAA,CAAA,6BAAA,CAAA,yBAAA,CAAA,wBAAA,CAAA,2BAAA,CAAA,0BAAA,CAAA,wBAAA,CAAA,sEAAA,CAAA,sEAAA,CAAA,sEAAA,CAAA,sEAAA,CAAA,uEAAA,CAAA,oEAAA,CAAA,oEAAA,CAAA,oEAAA,CAAA,yEAAA,CAAA,wEAAA,CAAA,qEAAA,CAAA,oEAAA,CAHE,mDAAA,CAAA,oDAAA,CAAA,qDAAA,CAAA,qDAAA,CFkBR,aACE,MEnBM,qCAAA,CAAA,mDAAA,CAAA,uCAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,+BAAA,CAAA,6CAAA,CAAA,qDAAA,CAAA,wDAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,iCAAA,CAAA,+CAAA,CAAA,iCAAA,CAAA,iCAAA,CAAA,kCAAA,CAAA,gCAAA,CAAA,sCAAA,CAAA,kCAAA,CAAA,mCAAA,CAAA,gDAAA,CAAA,kCAAA,CAAA,kCAAA,CFqBJ,uBErBI,qCAAA,CAAA,mDAAA,CAAA,uCAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,+BAAA,CAAA,6CAAA,CAAA,qDAAA,CAAA,uDAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,iCAAA,CAAA,gDAAA,CAAA,iCAAA,CAAA,iCAAA,CAAA,kCAAA,CAAA,gCAAA,CAAA,sCAAA,CAAA,kCAAA,CAAA,mCAAA,CAAA,iDAAA,CAAA,kCAAA,CAAA,kCAAA,CAAA,CF2BR,EACE,WAAA,CACA,SAAA,CACA,QAAA,CACA,qBAAA,CAGF,MACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,sCAAA,CACA,uEAAA,CACA,sCAAA,CACA,8BAAA,CACA,0CAAA,CACA,oDAAA",sourcesContent:['@use "../scss/tokens/semantics/colors.scss" as *;\n@use "../scss/mixins/tokens" as tokens;\n@use "../scss/tokens/semantics/borders.scss" as *;\n@use "../scss/tokens/semantics/colors.scss" as *;\n@use "../scss/tokens/semantics/shadows.scss" as *;\n@use "../scss/tokens/semantics/typographies.scss" as *;\n@use "../scss/tokens/semantics/spacing.scss" as *;\n@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");\n\n:root {\n  @include tokens.generateVars($semantic-spacing, spacing);\n\n  @include tokens.generateVars($semantic-borders-width, border-width);\n\n  @include tokens.generateVars($semantic-borders-radius, border-radius);\n\n  @include tokens.generateVars($semantic-font-size, font-size);\n\n  @include tokens.generateVars($semantic-font-weight, font-weight);\n\n  @include tokens.generateVars($semantic-line-height, line-height);\n\n  @include tokens.generateVars($semantic-typographies, typography);\n\n  @include tokens.generateVars($semantic-shadows, shadow);\n}\n\n@layer theme {\n  :root {\n    @include tokens.generateVars($semantic-color-light, color);\n    &[data-theme="dark"] {\n      @include tokens.generateVars($semantic-color-dark, color);\n    }\n  }\n}\n\n* {\n  border: none;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.slot {\n  display: flex;\n  align-items: center;\n  gap: var(--s-spacing-xx-small);\n  color: var(--s-color-content-highlight);\n  border: var(--s-border-width-thin) solid var(--s-color-border-highlight);\n  font: var(--s-typography-heading-small);\n  padding: var(--s-spacing-small);\n  border-radius: var(--s-border-radius-small);\n  background-color: var(--s-color-fill-highlight-light);\n}\n','@use "../../mixins/tokens" as tokens;\n@use "../primitives/colors.scss" as *;\n\n@layer brand {\n  :root {\n    &[data-company="zeroz"] {\n      --b-color-darkness: #{tokens.getPrimitiveVar($p-color, purple, 950)};\n      --b-color-base: #{tokens.getPrimitiveVar($p-color, purple, 600)};\n      --b-color-medium: #{tokens.getPrimitiveVar($p-color, purple, 500)};\n      --b-color-light: #{tokens.getPrimitiveVar($p-color, purple, 400)};\n      --b-color-lightness: #{tokens.getPrimitiveVar($p-color, purple, 50)};\n    }\n\n    &[data-company="whitelabel"] {\n      --b-color-darkness: #{tokens.getPrimitiveVar($p-color, blue, 950)};\n      --b-color-base: #{tokens.getPrimitiveVar($p-color, blue, 600)};\n      --b-color-medium: #{tokens.getPrimitiveVar($p-color, blue, 500)};\n      --b-color-light: #{tokens.getPrimitiveVar($p-color, blue, 400)};\n      --b-color-lightness: #{tokens.getPrimitiveVar($p-color, blue, 50)};\n    }\n  }\n}\n\n$semantic-color-light: (\n  background: (\n    default: tokens.getPrimitiveVar($p-color, neutral, 50),\n    highlight: var(--b-color-base),\n    overlay: tokens.getPrimitiveVar($p-color, black, null, 64),\n  ),\n  fill: (\n    default: tokens.getPrimitiveVar($p-color, white),\n    default-hover: tokens.getPrimitiveVar($p-color, neutral, 100),\n    default-light: tokens.getPrimitiveVar($p-color, neutral, 200),\n    disable: tokens.getPrimitiveVar($p-color, neutral, 100),\n    highlight: var(--b-color-base),\n    highlight-hover: var(--b-color-medium),\n    highlight-light: var(--b-color-lightness),\n    success: tokens.getPrimitiveVar($p-color, green, 600),\n    success-hover: tokens.getPrimitiveVar($p-color, green, 500),\n    success-light: tokens.getPrimitiveVar($p-color, green, 50),\n    warning: tokens.getPrimitiveVar($p-color, orange, 600),\n    warning-hover: tokens.getPrimitiveVar($p-color, orange, 500),\n    warning-light: tokens.getPrimitiveVar($p-color, orange, 50),\n  ),\n  border: (\n    default: tokens.getPrimitiveVar($p-color, neutral, 300),\n    highlight: var(--b-color-base),\n    success: tokens.getPrimitiveVar($p-color, green, 600),\n    warning: tokens.getPrimitiveVar($p-color, orange, 600),\n  ),\n  content: (\n    default: tokens.getPrimitiveVar($p-color, neutral, 800),\n    light: tokens.getPrimitiveVar($p-color, neutral, 600),\n    placeholder: tokens.getPrimitiveVar($p-color, neutral, 500),\n    disable: tokens.getPrimitiveVar($p-color, neutral, 400),\n    on-color: tokens.getPrimitiveVar($p-color, white),\n    highlight: var(--b-color-base),\n    success: tokens.getPrimitiveVar($p-color, green, 600),\n    warning: tokens.getPrimitiveVar($p-color, orange, 600),\n  ),\n);\n\n$semantic-color-dark: (\n  background: (\n    default: tokens.getPrimitiveVar($p-color, neutral, 950),\n    highlight: var(--b-color-base),\n    overlay: tokens.getPrimitiveVar($p-color, black, null, 64),\n  ),\n  fill: (\n    default: tokens.getPrimitiveVar($p-color, neutral, 900),\n    default-hover: tokens.getPrimitiveVar($p-color, neutral, 800),\n    default-light: tokens.getPrimitiveVar($p-color, neutral, 700),\n    disable: tokens.getPrimitiveVar($p-color, neutral, 800),\n    highlight: var(--b-color-base),\n    highlight-hover: var(--b-color-medium),\n    highlight-light: var(--b-color-darkness),\n    success: tokens.getPrimitiveVar($p-color, green, 600),\n    success-hover: tokens.getPrimitiveVar($p-color, green, 500),\n    success-light: tokens.getPrimitiveVar($p-color, green, 950),\n    warning: tokens.getPrimitiveVar($p-color, orange, 600),\n    warning-hover: tokens.getPrimitiveVar($p-color, orange, 500),\n    warning-light: tokens.getPrimitiveVar($p-color, orange, 950),\n  ),\n  border: (\n    default: tokens.getPrimitiveVar($p-color, neutral, 600),\n    highlight: var(--b-color-light),\n    success: tokens.getPrimitiveVar($p-color, green, 400),\n    warning: tokens.getPrimitiveVar($p-color, orange, 400),\n  ),\n  content: (\n    default: tokens.getPrimitiveVar($p-color, neutral, 100),\n    light: tokens.getPrimitiveVar($p-color, neutral, 300),\n    placeholder: tokens.getPrimitiveVar($p-color, neutral, 400),\n    disable: tokens.getPrimitiveVar($p-color, neutral, 500),\n    on-color: tokens.getPrimitiveVar($p-color, white),\n    highlight: var(--b-color-light),\n    success: tokens.getPrimitiveVar($p-color, green, 400),\n    warning: tokens.getPrimitiveVar($p-color, orange, 400),\n  ),\n);\n','@use "sass:list";\n@use "sass:meta";\n@use "sass:map";\n@use "../constants/opacity" as *;\n\n@mixin generateVars($list, $type) {\n  @each $groupName, $groupValues in $list {\n    @if meta.type-of($groupValues) == map {\n      @each $name, $value in $groupValues {\n        --s-#{$type}-#{$groupName}-#{$name}: #{$value};\n      }\n    } @else {\n      --s-#{$type}-#{$groupName}: #{$groupValues};\n    }\n  }\n}\n\n@function getOpacity($valor) {\n  @return map-get($opacity, $valor);\n}\n\n@function getPrimitiveVar($primitiveVar, $type, $value: null, $opacity: null) {\n  $variableVariations: map.get($primitiveVar, $type);\n\n  @if not $value {\n    @if $opacity {\n      @return #{$variableVariations}#{getOpacity($opacity)};\n    }\n    @return $variableVariations;\n  }\n\n  @return map.get($variableVariations, $value);\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./src/app/styles.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_styles_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/app/styles.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_styles_scss__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_styles_scss__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_styles_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_styles_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);