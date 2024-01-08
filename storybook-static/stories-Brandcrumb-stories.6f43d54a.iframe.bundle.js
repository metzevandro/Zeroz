"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8963],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/stories/Brandcrumb.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_app_components_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Breadcrumb/Breadcrumb.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Breadcrumb",component:_app_components_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_1__.a,parameters:{layout:"padded"}};var Default=function Template(args){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_app_components_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_1__.c,{pageName:args.initialPage},__jsx(_app_components_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_1__.a,{pageName:args.pageName})))}.bind({});Default.args={pageName:"Breadcrumb",initialPage:"Breadcrumb"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  return <>\r\n      <BreadcrumbRoot pageName={args.initialPage}>\r\n        <Breadcrumb pageName={args.pageName}></Breadcrumb>\r\n      </BreadcrumbRoot>\r\n    </>;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/app/components/Breadcrumb/Breadcrumb.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Breadcrumb_Breadcrumb_Breadcrumb,c:()=>BreadcrumbRoot});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Breadcrumb=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Breadcrumb/Breadcrumb.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Breadcrumb.Z,options);Breadcrumb.Z&&Breadcrumb.Z.locals&&Breadcrumb.Z.locals;var Link=__webpack_require__("./src/app/components/Link/Link.tsx"),Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react.createElement,BreadcrumbRoot=function BreadcrumbRoot(_ref){var children=_ref.children,pageName=_ref.pageName;return __jsx(react.Fragment,null,__jsx("div",{className:"breadcrumb"},__jsx(BreadcrumbInitial,{pageName}),children))},BreadcrumbInitial=function BreadcrumbInitial(_ref2){var pageName=_ref2.pageName;return __jsx(react.Fragment,null,__jsx("div",{className:"breadcrumb"},__jsx(Link.Z,{content:pageName,href:""})))},Breadcrumb_Breadcrumb_Breadcrumb=function Breadcrumb(_ref3){var pageName=_ref3.pageName;return __jsx(react.Fragment,null,__jsx("div",{className:"breadcrumb"},__jsx(Icon.Z,{icon:"keyboard_arrow_right",size:"sm"}),__jsx(Link.Z,{content:pageName,href:""})))};try{BreadcrumbRoot.displayName="BreadcrumbRoot",BreadcrumbRoot.__docgenInfo={description:"",displayName:"BreadcrumbRoot",props:{pageName:{defaultValue:null,description:"",name:"pageName",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Breadcrumb/Breadcrumb.tsx#BreadcrumbRoot"]={docgenInfo:BreadcrumbRoot.__docgenInfo,name:"BreadcrumbRoot",path:"src/app/components/Breadcrumb/Breadcrumb.tsx#BreadcrumbRoot"})}catch(__react_docgen_typescript_loader_error){}try{Breadcrumb_Breadcrumb_Breadcrumb.displayName="Breadcrumb",Breadcrumb_Breadcrumb_Breadcrumb.__docgenInfo={description:"",displayName:"Breadcrumb",props:{pageName:{defaultValue:null,description:"",name:"pageName",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Breadcrumb/Breadcrumb.tsx#Breadcrumb"]={docgenInfo:Breadcrumb_Breadcrumb_Breadcrumb.__docgenInfo,name:"Breadcrumb",path:"src/app/components/Breadcrumb/Breadcrumb.tsx#Breadcrumb"})}catch(__react_docgen_typescript_loader_error){}},"./src/app/components/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Icon_Icon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Icon=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Icon/Icon.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Icon.Z,options);Icon.Z&&Icon.Z.locals&&Icon.Z.locals;var __jsx=react.createElement,Icon_Icon_Icon=function Icon(_ref){var size=_ref.size,fill=_ref.fill,icon=_ref.icon,sizeClass=size,fillStyle="'FILL' ".concat(fill||0);return __jsx(react.Fragment,null,__jsx("span",{style:{fontVariationSettings:fillStyle},className:"material-symbols-outlined ".concat(sizeClass)},icon))};const components_Icon_Icon=Icon_Icon_Icon;try{Icon_Icon_Icon.displayName="Icon",Icon_Icon_Icon.__docgenInfo={description:"",displayName:"Icon",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string | undefined"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Icon/Icon.tsx#Icon"]={docgenInfo:Icon_Icon_Icon.__docgenInfo,name:"Icon",path:"src/app/components/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/app/components/Link/Link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Link_Link});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Link=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Link/Link.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Link.Z,options);Link.Z&&Link.Z.locals&&Link.Z.locals;var _excluded=["content","disabled"],__jsx=react.createElement,Link_Link_Link=function Link(_ref){var content=_ref.content,disabled=_ref.disabled,rest=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(react.Fragment,null,__jsx("a",(0,esm_extends.Z)({className:"link ".concat(disabled?"disabled":"")},rest),content))};const components_Link_Link=Link_Link_Link;try{Link_Link_Link.displayName="Link",Link_Link_Link.__docgenInfo={description:"",displayName:"Link",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_blank"'},{value:'"_self"'},{value:'"_parent"'},{value:'"_top"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Link/Link.tsx#Link"]={docgenInfo:Link_Link_Link.__docgenInfo,name:"Link",path:"src/app/components/Link/Link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Breadcrumb/Breadcrumb.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".breadcrumb{display:flex;gap:var(--s-spacing-xx-small);align-items:center;color:var(--s-color-content-default)}@media screen and (max-width: 768px){.breadcrumb{display:none}}","",{version:3,sources:["webpack://./src/app/components/Breadcrumb/Breadcrumb.scss"],names:[],mappings:"AAAA,YACE,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,oCAAA,CAEF,qCACE,YACE,YAAA,CAAA",sourcesContent:[".breadcrumb {\n  display: flex;\n  gap: var(--s-spacing-xx-small);\n  align-items: center;\n  color: var(--s-color-content-default);\n}\n@media screen and (max-width: 768px) {\n  .breadcrumb {\n    display: none;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Icon/Icon.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";.material-symbols-outlined{font-weight:300;display:flex;user-select:none}.material-symbols-outlined.sm{font-size:16px}.material-symbols-outlined.md{font-size:24px}.material-symbols-outlined.lg{font-size:32px}',"",{version:3,sources:["webpack://./src/app/components/Icon/Icon.scss"],names:[],mappings:"AAAQ,6HAAA,CAER,2BACE,eAAA,CACA,YAAA,CACA,gBAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");\n\n.material-symbols-outlined {\n  font-weight: 300;\n  display: flex;\n  user-select: none;\n}\n\n.material-symbols-outlined.sm {\n  font-size: 16px;\n}\n\n.material-symbols-outlined.md {\n  font-size: 24px;\n}\n\n.material-symbols-outlined.lg {\n  font-size: 32px;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Link/Link.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".link{background-color:var(--s-color-fill-default);text-decoration:underline;color:var(--s-color-content-highlight);font:var(--s-typography-label-medium);border-radius:var(--s-border-radius-small);padding:0px var(--s-spacing-quarck)}.link:hover{background-color:var(--s-color-fill-highlight-light)}.link:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.link.disabled{pointer-events:none;color:var(--s-color-content-disable)}.link.disabled:hover{background-color:var(--s-color-fill-default)}.link.disabled:focus-visible{outline-width:none;outline-color:none;outline-style:none}","",{version:3,sources:["webpack://./src/app/components/Link/Link.scss"],names:[],mappings:"AAAA,MACE,4CAAA,CACA,yBAAA,CACA,sCAAA,CACA,qCAAA,CACA,0CAAA,CACA,mCAAA,CAEA,YACE,oDAAA,CAEF,oBACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,eACE,mBAAA,CACA,oCAAA,CACA,qBACE,4CAAA,CAEF,6BACE,kBAAA,CACA,kBAAA,CACA,kBAAA",sourcesContent:[".link {\n  background-color: var(--s-color-fill-default);\n  text-decoration: underline;\n  color: var(--s-color-content-highlight);\n  font: var(--s-typography-label-medium);\n  border-radius: var(--s-border-radius-small);\n  padding: 0px var(--s-spacing-quarck);\n\n  &:hover {\n    background-color: var(--s-color-fill-highlight-light);\n  }\n  &:focus-visible {\n    outline-width: var(--s-border-width-thin);\n    outline-color: var(--s-color-fill-highlight);\n    outline-offset: var(--s-border-width-thin);\n    outline-style: solid;\n  }\n\n  &.disabled {\n    pointer-events: none;\n    color: var(--s-color-content-disable);\n    &:hover {\n      background-color: var(--s-color-fill-default);\n    }\n    &:focus-visible {\n      outline-width: none;\n      outline-color: none;\n      outline-style: none;\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);