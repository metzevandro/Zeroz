"use strict";(self.webpackChunkdesign_system_zeroz=self.webpackChunkdesign_system_zeroz||[]).push([[8013],{"./src/app/components/DescriptionList/DescriptionList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Column:()=>Column,Row:()=>Row,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DescriptionList_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),DescriptionList=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/DescriptionList/DescriptionList.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(DescriptionList.A,options);DescriptionList.A&&DescriptionList.A.locals&&DescriptionList.A.locals;__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const DescriptionList_DescriptionList_DescriptionList=param=>{let{title,description,direction}=param;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:"description-list-root ".concat(direction),children:[(0,jsx_runtime.jsx)("div",{className:"title",children:title}),(0,jsx_runtime.jsx)("div",{className:"description",children:description})]})})},components_DescriptionList_DescriptionList=DescriptionList_DescriptionList_DescriptionList;try{DescriptionList_DescriptionList_DescriptionList.displayName="DescriptionList",DescriptionList_DescriptionList_DescriptionList.__docgenInfo={description:"",displayName:"DescriptionList",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/DescriptionList/DescriptionList.tsx#DescriptionList"]={docgenInfo:DescriptionList_DescriptionList_DescriptionList.__docgenInfo,name:"DescriptionList",path:"src/app/components/DescriptionList/DescriptionList.tsx#DescriptionList"})}catch(__react_docgen_typescript_loader_error){}var _Row_parameters,_Row_parameters_docs,_Row_parameters1,_Column_parameters,_Column_parameters_docs,_Column_parameters1;__webpack_require__("./src/app/styles.scss");const DescriptionList_stories={title:"Components/Description List",component:components_DescriptionList_DescriptionList,parameters:{layout:"padded"}},Template=args=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components_DescriptionList_DescriptionList,{direction:args.direction,title:args.title,description:args.description}),(0,jsx_runtime.jsx)(components_DescriptionList_DescriptionList,{direction:args.direction,title:args.title,description:args.description}),(0,jsx_runtime.jsx)(components_DescriptionList_DescriptionList,{direction:args.direction,title:args.title,description:args.description})]}),Row=Template.bind({});Row.args={direction:"row",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Sit amet facilisis magna etiam tempor orci eu lobortis. Nibh praesent tristique magna sit amet purus gravida."};const Column=Template.bind({});Column.args={direction:"column",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Sit amet facilisis magna etiam tempor orci eu lobortis. Nibh praesent tristique magna sit amet purus gravida."},Row.parameters={...Row.parameters,docs:{...null===(_Row_parameters=Row.parameters)||void 0===_Row_parameters?void 0:_Row_parameters.docs,source:{originalSource:"args => {\n  return <>\r\n      <DescriptionList direction={args.direction} title={args.title} description={args.description} />\r\n      <DescriptionList direction={args.direction} title={args.title} description={args.description} />\r\n      <DescriptionList direction={args.direction} title={args.title} description={args.description} />\r\n    </>;\n}",...null===(_Row_parameters1=Row.parameters)||void 0===_Row_parameters1||null===(_Row_parameters_docs=_Row_parameters1.docs)||void 0===_Row_parameters_docs?void 0:_Row_parameters_docs.source}}},Column.parameters={...Column.parameters,docs:{...null===(_Column_parameters=Column.parameters)||void 0===_Column_parameters?void 0:_Column_parameters.docs,source:{originalSource:"args => {\n  return <>\r\n      <DescriptionList direction={args.direction} title={args.title} description={args.description} />\r\n      <DescriptionList direction={args.direction} title={args.title} description={args.description} />\r\n      <DescriptionList direction={args.direction} title={args.title} description={args.description} />\r\n    </>;\n}",...null===(_Column_parameters1=Column.parameters)||void 0===_Column_parameters1||null===(_Column_parameters_docs=_Column_parameters1.docs)||void 0===_Column_parameters_docs?void 0:_Column_parameters_docs.source}}};const __namedExportsOrder=["Row","Column"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/DescriptionList/DescriptionList.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".description-list-root{width:100%;display:flex;padding:var(--s-spacing-small) 0;justify-content:space-between;border-bottom:var(--s-border-width-hairline) solid var(--s-color-border-default);align-items:start;margin:0;margin-block-end:0;margin-block-start:0}.description-list-root.row{flex-direction:row}.description-list-root.row *{width:50%}.description-list-root.column{gap:var(--s-spacing-xx-small);flex-direction:column}.description-list-root .title{font:var(--s-typography-paragraph-strong);color:var(--s-color-content-default)}.description-list-root .description{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-light)}","",{version:3,sources:["webpack://./src/app/components/DescriptionList/DescriptionList.scss"],names:[],mappings:"AAAA,uBACE,UAAA,CACA,YAAA,CACA,gCAAA,CACA,6BAAA,CACA,gFAAA,CAEA,iBAAA,CACA,QAAA,CACA,kBAAA,CACA,oBAAA,CAEA,2BACE,kBAAA,CAEA,6BACE,SAAA,CAIJ,8BACE,6BAAA,CACA,qBAAA,CAGF,8BACE,yCAAA,CACA,oCAAA,CAGF,oCACE,0CAAA,CACA,kCAAA",sourcesContent:[".description-list-root {\n  width: 100%;\n  display: flex;\n  padding: var(--s-spacing-small) 0;\n  justify-content: space-between;\n  border-bottom: var(--s-border-width-hairline) solid\n    var(--s-color-border-default);\n  align-items: start;\n  margin: 0;\n  margin-block-end: 0;\n  margin-block-start: 0;\n\n  &.row {\n    flex-direction: row;\n\n    * {\n      width: 50%;\n    }\n  }\n\n  &.column {\n    gap: var(--s-spacing-xx-small);\n    flex-direction: column;\n  }\n\n  .title {\n    font: var(--s-typography-paragraph-strong);\n    color: var(--s-color-content-default);\n  }\n\n  .description {\n    font: var(--s-typography-paragraph-regular);\n    color: var(--s-color-content-light);\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);