"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7358],{"./src/stories/TableList.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TableList_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),TableList=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/TableList/TableList.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TableList.Z,options);TableList.Z&&TableList.Z.locals&&TableList.Z.locals;var __jsx=react.createElement,TableList_TableList_TableList=function TableList(_ref){var columns=_ref.columns,data=_ref.data,size=_ref.size,_useState=(0,react.useState)(!1),isOverflowed=_useState[0],setIsOverflowed=_useState[1],tableListRef=(0,react.useRef)(null);return(0,react.useEffect)((function(){var checkOverflow=function checkOverflow(){var tableListElement=tableListRef.current;tableListElement&&setIsOverflowed(tableListElement.scrollWidth>tableListElement.clientWidth)},resizeObserver=new ResizeObserver((function(){checkOverflow()})),tableListElement=tableListRef.current;return tableListElement&&(resizeObserver.observe(tableListElement),checkOverflow()),function(){tableListElement&&resizeObserver.unobserve(tableListElement)}}),[]),__jsx("div",{className:"table-list ".concat(isOverflowed?"overflow-ativo":""),ref:tableListRef},__jsx("table",null,__jsx("thead",null,__jsx("tr",null,columns.map((function(column,index){return __jsx("th",{key:index},column)})))),__jsx("tbody",null,data.map((function(row,rowIndex){return __jsx("tr",{key:rowIndex},row.map((function(cell,cellIndex){return __jsx("td",{className:"".concat(size," border"),key:cellIndex},cell)})))})))))};TableList_TableList_TableList.displayName="TableList";const components_TableList_TableList=TableList_TableList_TableList;try{TableList_TableList_TableList.displayName="TableList",TableList_TableList_TableList.__docgenInfo={description:"",displayName:"TableList",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"string[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any[][]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/TableList/TableList.tsx#TableList"]={docgenInfo:TableList_TableList_TableList.__docgenInfo,name:"TableList",path:"src/app/components/TableList/TableList.tsx#TableList"})}catch(__react_docgen_typescript_loader_error){}const TableList_stories={title:"Components/TableList",component:components_TableList_TableList,tags:["autodocs"],argTypes:{}};var columns=["Name","Age","Role","Experience","Company"],data=[["David",25,"Developer","4 years","Google"],["Maria",30,"Designer","1 years","Microsoft"],["Carlos",28,"Data Analyst","1 month","Netflix"]],Default={args:{columns,data,size:"md"}},Small={args:{columns,data,size:"sm"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    columns,\n    data,\n    size: "md"\n  }\n}',...Default.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  args: {\n    columns,\n    data,\n    size: "sm"\n  }\n}',...Small.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Small"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/TableList/TableList.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".table-list{overflow:auto}.table-list table{width:100%;border-spacing:0;border-collapse:collapse}.table-list table th{padding:var(--s-spacing-xx-small) var(--s-spacing-small);text-align:left;background-color:var(--s-color-fill-default);text-transform:uppercase;color:var(--s-color-content-light);font:var(--s-typography-caption-strong)}.table-list table td{white-space:nowrap;background-color:var(--s-color-fill-default);color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular);height:40px;border:none}.table-list table td.sm{padding:var(--s-spacing-xx-small) var(--s-spacing-small);height:40px}.table-list table td.md{padding:var(--s-spacing-small);height:56px}.table-list table td.border{border-top:var(--s-border-width-hairline) solid var(--s-color-border-default)}.table-list table td:first-of-type,.table-list table th:first-of-type{position:sticky;left:0;z-index:1}.table-list::-webkit-scrollbar{height:4px}.table-list.overflow-ativo td:first-of-type,.table-list.overflow-ativo th:first-of-type{box-sizing:border-box;border-right:var(--s-border-width-hairline) solid var(--s-color-border-default)}","",{version:3,sources:["webpack://./src/app/components/TableList/TableList.scss"],names:[],mappings:"AACA,YACE,aAAA,CAEA,kBACE,UAAA,CACA,gBAAA,CACA,wBAAA,CAEA,qBACE,wDAAA,CACA,eAAA,CACA,4CAAA,CACA,wBAAA,CACA,kCAAA,CACA,uCAAA,CAGF,qBACE,kBAAA,CACA,4CAAA,CACA,oCAAA,CACA,0CAAA,CACA,WAAA,CACA,WAAA,CAEA,wBACE,wDAAA,CACA,WAAA,CAGF,wBACE,8BAAA,CACA,WAAA,CAEF,4BACE,6EAAA,CAKJ,sEAEE,eAAA,CACA,MAAA,CACA,SAAA,CAIJ,+BACE,UAAA,CAIA,wFAEE,qBAAA,CACA,+EAAA",sourcesContent:["/* TableList.scss */\n.table-list {\n  overflow: auto;\n\n  table {\n    width: 100%;\n    border-spacing: 0;\n    border-collapse: collapse;\n\n    th {\n      padding: var(--s-spacing-xx-small) var(--s-spacing-small);\n      text-align: left;\n      background-color: var(--s-color-fill-default);\n      text-transform: uppercase;\n      color: var(--s-color-content-light);\n      font: var(--s-typography-caption-strong);\n    }\n\n    td {\n      white-space: nowrap;\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n      height: 40px;\n      border: none;\n\n      &.sm {\n        padding: var(--s-spacing-xx-small) var(--s-spacing-small);\n        height: 40px;\n      }\n\n      &.md {\n        padding: var(--s-spacing-small);\n        height: 56px;\n      }\n      &.border {\n        border-top: var(--s-border-width-hairline) solid\n          var(--s-color-border-default);\n      }\n    }\n\n    td:first-of-type,\n    th:first-of-type {\n      position: sticky;\n      left: 0;\n      z-index: 1;\n    }\n  }\n\n  &::-webkit-scrollbar {\n    height: 4px;\n  }\n\n  &.overflow-ativo {\n    td:first-of-type,\n    th:first-of-type {\n      box-sizing: border-box;\n      border-right: var(--s-border-width-hairline) solid\n        var(--s-color-border-default);\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);