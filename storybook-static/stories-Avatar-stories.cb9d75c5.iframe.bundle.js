"use strict";(self.webpackChunkdesign_system_zeroz=self.webpackChunkdesign_system_zeroz||[]).push([[62],{"./src/stories/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,withImage:()=>withImage});var _app_components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Avatar/Avatar.tsx"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=(__webpack_require__("./src/stories/css/main.scss"),react__WEBPACK_IMPORTED_MODULE_0__.createElement);const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Avatar",component:_app_components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{layout:"centered"},tags:["autodocs"]};var Template=function Template(args){return __jsx(_app_components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_1__.Z,{size:args.size})};Template.displayName="Template";var Default=Template.bind({});Default.args={size:"md"};var withImage=Template.bind({});withImage.args={size:"md",src:"https://placehold.co/40x40"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  return <Avatar size={args.size} />;\n}",...Default.parameters?.docs?.source}}},withImage.parameters={...withImage.parameters,docs:{...withImage.parameters?.docs,source:{originalSource:"args => {\n  return <Avatar size={args.size} />;\n}",...withImage.parameters?.docs?.source}}};const __namedExportsOrder=["Default","withImage"]},"./src/app/components/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Avatar_Avatar});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Avatar=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Avatar/Avatar.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Avatar.Z,options);Avatar.Z&&Avatar.Z.locals&&Avatar.Z.locals;var __jsx=react.createElement,Avatar_Avatar_Avatar=function Avatar(_ref){var size=_ref.size,src=_ref.src;return __jsx(react.Fragment,null,__jsx("div",{className:"avatar"},src?__jsx("label",{className:"avatar-image"},__jsx("img",{className:size,src})):__jsx("label",{className:"avatar-icon ".concat(size)},__jsx(Icon.Z,{size,icon:"person"}))))};const components_Avatar_Avatar=Avatar_Avatar_Avatar;try{Avatar_Avatar_Avatar.displayName="Avatar",Avatar_Avatar_Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar_Avatar_Avatar.__docgenInfo,name:"Avatar",path:"src/app/components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Avatar/Avatar.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".avatar label{display:flex;align-items:center;justify-content:center;border-radius:var(--s-border-radius-pill);color:var(--s-color-content-on-color);width:fit-content}.avatar img{border-radius:var(--s-border-radius-pill);object-fit:cover;border:none}.avatar-icon{background-color:var(--s-color-fill-highlight)}.avatar-icon .sm{padding:var(--s-spacing-nano)}.avatar-icon .md{padding:var(--s-spacing-xx-small)}.avatar-icon .lg{padding:var(--s-spacing-small)}.avatar-image .sm{height:24px;width:24px}.avatar-image .md{height:40px;width:40px}.avatar-image .lg{height:64px;width:64px}","",{version:3,sources:["webpack://./src/app/components/Avatar/Avatar.scss"],names:[],mappings:"AAAA,cACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,yCAAA,CACA,qCAAA,CACA,iBAAA,CAGF,YACE,yCAAA,CACA,gBAAA,CACA,WAAA,CAGF,aACE,8CAAA,CAGF,iBACE,6BAAA,CAGF,iBACE,iCAAA,CAGF,iBACE,8BAAA,CAGF,kBACE,WAAA,CACA,UAAA,CAGF,kBACE,WAAA,CACA,UAAA,CAGF,kBACE,WAAA,CACA,UAAA",sourcesContent:[".avatar label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--s-border-radius-pill);\n  color: var(--s-color-content-on-color);\n  width: fit-content;\n}\n\n.avatar img {\n  border-radius: var(--s-border-radius-pill);\n  object-fit: cover;\n  border: none;\n}\n\n.avatar-icon {\n  background-color: var(--s-color-fill-highlight);\n}\n\n.avatar-icon .sm {\n  padding: var(--s-spacing-nano);\n}\n\n.avatar-icon .md {\n  padding: var(--s-spacing-xx-small);\n}\n\n.avatar-icon .lg {\n  padding: var(--s-spacing-small);\n}\n\n.avatar-image .sm {\n  height: 24px;\n  width: 24px;\n}\n\n.avatar-image .md {\n  height: 40px;\n  width: 40px;\n}\n\n.avatar-image .lg {\n  height: 64px;\n  width: 64px;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);