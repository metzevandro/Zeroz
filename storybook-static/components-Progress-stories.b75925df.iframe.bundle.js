"use strict";(self.webpackChunkdesign_system_zeroz=self.webpackChunkdesign_system_zeroz||[]).push([[8753],{"./src/stories/components/Progress.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Error:()=>Error,Indeterminate:()=>Indeterminate,Loading:()=>Loading,Success:()=>Success,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_Progress_Progress__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/styles.scss"),__webpack_require__("./src/components/Progress/Progress.tsx")),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Progress",component:_components_Progress_Progress__WEBPACK_IMPORTED_MODULE_2__.A,parameters:{docs:{page:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.hE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Pd,{children:"Component"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:"Progress"})," component shows how a task or operation is loading."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Tn,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.om,{})]})}},tags:["autodocs"],argTypes:{value:{control:"number",description:"The current value of the progress bar. When the value is 100, the progress bar turns green.",table:{category:"Value"}},indeterminate:{control:"boolean",description:"If true, the progress bar will display an indeterminate state.",table:{category:"State"}},error:{control:"boolean",description:"If true, the progress bar will display an error state.",table:{category:"State"}}}},Default={args:{value:0,indeterminate:!1,error:!1}},Loading={args:{value:50,indeterminate:!1,error:!1}},Success={args:{value:100,indeterminate:!1,error:!1}},Indeterminate={args:{value:0,indeterminate:!0,error:!1}},Error={args:{value:90,indeterminate:!1,error:!0}},__namedExportsOrder=["Default","Loading","Success","Indeterminate","Error"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 0,\n    indeterminate: false,\n    error: false\n  }\n}",...Default.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 50,\n    indeterminate: false,\n    error: false\n  }\n}",...Loading.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 100,\n    indeterminate: false,\n    error: false\n  }\n}",...Success.parameters?.docs?.source}}},Indeterminate.parameters={...Indeterminate.parameters,docs:{...Indeterminate.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 0,\n    indeterminate: true,\n    error: false\n  }\n}",...Indeterminate.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 90,\n    indeterminate: false,\n    error: true\n  }\n}",...Error.parameters?.docs?.source}}}},"./src/components/Progress/Progress.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Progress_Progress});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Progress=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Progress/Progress.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Progress.A,options);Progress.A&&Progress.A.locals&&Progress.A.locals;var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Progress_Progress_Progress=({value,error,indeterminate})=>{const[progress,setProgress]=(0,react.useState)(0);return(0,react.useEffect)((()=>{setProgress(value)}),[value]),(0,jsx_runtime.jsx)("div",{className:"progress",children:!0===indeterminate?(0,jsx_runtime.jsx)("div",{className:"progress-bar-loading"}):(0,jsx_runtime.jsx)("div",{className:`progress-bar ${100===value?"progress-bar-success":""} ${error?"progress-bar-error":""}`,style:{width:`${progress}%`}})})},components_Progress_Progress=Progress_Progress_Progress;try{Progress_Progress_Progress.displayName="Progress",Progress_Progress_Progress.__docgenInfo={description:"",displayName:"Progress",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Progress/Progress.tsx#Progress"]={docgenInfo:Progress_Progress_Progress.__docgenInfo,name:"Progress",path:"src/components/Progress/Progress.tsx#Progress"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Progress/Progress.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".progress{position:relative;width:100%;height:4px;background-color:var(--s-color-border-default);overflow:hidden}.progress .progress-bar-loading{position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;background:var(--s-color-fill-highlight);animation:loading 2s linear infinite}.progress .progress-bar{height:100%;background-color:var(--s-color-fill-highlight);transition:width .3s ease}.progress .progress-bar-success{background-color:var(--s-color-fill-success)}.progress .progress-bar-error{background-color:var(--s-color-fill-warning)}@keyframes loading{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}","",{version:3,sources:["webpack://./src/components/Progress/Progress.scss"],names:[],mappings:"AAAA,UACE,iBAAA,CACA,UAAA,CACA,UAAA,CACA,8CAAA,CACA,eAAA,CAEA,gCACE,iBAAA,CACA,KAAA,CACA,MAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,wCAAA,CACA,oCAAA,CAGF,wBACE,WAAA,CACA,8CAAA,CACA,yBAAA,CAGF,gCACE,4CAAA,CAGF,8BACE,4CAAA,CAIJ,mBACE,GACE,2BAAA,CAEF,KACE,0BAAA,CAAA",sourcesContent:[".progress {\n  position: relative;\n  width: 100%;\n  height: 4px;\n  background-color: var(--s-color-border-default);\n  overflow: hidden;\n\n  .progress-bar-loading {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    background: var(--s-color-fill-highlight);\n    animation: loading 2s linear infinite;\n  }\n\n  .progress-bar {\n    height: 100%;\n    background-color: var(--s-color-fill-highlight);\n    transition: width 0.3s ease;\n  }\n\n  .progress-bar-success {\n    background-color: var(--s-color-fill-success);\n  }\n\n  .progress-bar-error {\n    background-color: var(--s-color-fill-warning);\n  }\n}\n\n@keyframes loading {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);