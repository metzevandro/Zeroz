"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2535],{"./src/stories/Notification.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dismissible:()=>Dismissible,Float:()=>Float,Inline:()=>Inline,Primary:()=>Primary,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Notification_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),ButtonIcon=__webpack_require__("./src/app/components/ButtonIcon/ButtonIcon.tsx"),Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Notification=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Notification/Notification.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Notification.Z,options);Notification.Z&&Notification.Z.locals&&Notification.Z.locals;var __jsx=react.createElement,Notification_Notification_Notification=function Notification(_ref){var icon=_ref.icon,title=_ref.title,description=_ref.description,variant=_ref.variant,type=_ref.type,isOpen=_ref.isOpen,dismissible=_ref.dismissible,_useState=(0,react.useState)(!0),isClose=_useState[0],setIsClose=_useState[1];return __jsx(react.Fragment,null,isClose&&__jsx("div",{className:"notification ".concat(variant," ").concat(type," ").concat(dismissible&&"dismissible"," ").concat(isOpen?"open":"")},__jsx("div",{className:"notification-icon-".concat(variant)},__jsx(Icon.Z,{icon,size:"md"})),__jsx("div",{className:"notification-content"},__jsx("header",null,__jsx("div",{className:"title"},title),__jsx(react.Fragment,null,dismissible&&__jsx(ButtonIcon.E,{variant:"",size:"md",typeIcon:"close",type:"plain",onClick:function handleClickClose(){setIsClose(!1)}}))),description&&__jsx("div",{className:"description"},description))))};const components_Notification_Notification=Notification_Notification_Notification;try{Notification_Notification_Notification.displayName="Notification",Notification_Notification_Notification.__docgenInfo={description:"",displayName:"Notification",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'},{value:'"warning"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"float"'},{value:'"inline"'}]}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},dismissible:{defaultValue:null,description:"",name:"dismissible",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Notification/Notification.tsx#Notification"]={docgenInfo:Notification_Notification_Notification.__docgenInfo,name:"Notification",path:"src/app/components/Notification/Notification.tsx#Notification"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./src/stories/css/main.scss");const Notification_stories={title:"Components/Notification",component:components_Notification_Notification,tags:["autodocs"],argTypes:{}};var Inline={args:{description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",icon:"ac_unit",title:"Title",type:"inline",variant:"primary",dismissible:!1}},Float={args:{description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",icon:"ac_unit",title:"Title",type:"float",variant:"primary",isOpen:!0}},Primary={args:{description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",icon:"ac_unit",title:"Title",type:"inline",variant:"primary"}},Success={args:{description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",icon:"ac_unit",title:"Title",type:"inline",variant:"success"}},Warning={args:{description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",icon:"ac_unit",title:"Title",type:"inline",variant:"warning"}},Dismissible={args:{description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",icon:"ac_unit",title:"Title",type:"inline",variant:"primary",dismissible:!0}};Inline.parameters={...Inline.parameters,docs:{...Inline.parameters?.docs,source:{originalSource:'{\n  args: {\n    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",\n    icon: "ac_unit",\n    title: "Title",\n    type: "inline",\n    variant: "primary",\n    dismissible: false\n  }\n}',...Inline.parameters?.docs?.source}}},Float.parameters={...Float.parameters,docs:{...Float.parameters?.docs,source:{originalSource:'{\n  args: {\n    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",\n    icon: "ac_unit",\n    title: "Title",\n    type: "float",\n    variant: "primary",\n    isOpen: true\n  }\n}',...Float.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",\n    icon: "ac_unit",\n    title: "Title",\n    type: "inline",\n    variant: "primary"\n  }\n}',...Primary.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:'{\n  args: {\n    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",\n    icon: "ac_unit",\n    title: "Title",\n    type: "inline",\n    variant: "success"\n  }\n}',...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'{\n  args: {\n    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",\n    icon: "ac_unit",\n    title: "Title",\n    type: "inline",\n    variant: "warning"\n  }\n}',...Warning.parameters?.docs?.source}}},Dismissible.parameters={...Dismissible.parameters,docs:{...Dismissible.parameters?.docs,source:{originalSource:'{\n  args: {\n    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",\n    icon: "ac_unit",\n    title: "Title",\n    type: "inline",\n    variant: "primary",\n    dismissible: true\n  }\n}',...Dismissible.parameters?.docs?.source}}};const __namedExportsOrder=["Inline","Float","Primary","Success","Warning","Dismissible"]},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/global"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Notification/Notification.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".notification{padding:var(--s-spacing-small) var(--s-spacing-small) var(--s-spacing-small) var(--s-spacing-xx-small);background-color:var(--s-color-fill-default);display:flex;gap:var(--s-spacing-xx-small);border-radius:var(--s-border-radius-small);border:var(--s-border-width-hairline) solid var(--s-color-border-default);overflow:hidden}.notification.float{max-width:368px;position:fixed;right:24px;bottom:-100vw;border:none;box-shadow:var(--s-shadow-level-2)}.notification.float.open{animation:float 5s ease-in-out}.notification.float.dismissible{animation:floatDismissible 5s ease-in-out;animation-fill-mode:forwards}.notification.primary{border-left:var(--s-border-width-heavy) solid var(--s-color-border-highlight)}.notification.warning{border-left:var(--s-border-width-heavy) solid var(--s-color-border-warning)}.notification.success{border-left:var(--s-border-width-heavy) solid var(--s-color-border-success)}.notification .notification-content{display:flex;flex-direction:column;width:100%;gap:var(--s-spacing-xx-small)}.notification .notification-content header{display:flex;justify-content:space-between;gap:var(--s-spacing-small)}.notification .notification-content .description{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);word-break:break-all}.notification .notification-content .title{font:var(--s-typography-heading-small);color:var(--s-color-content-default)}.notification .notification-icon-primary{color:var(--s-color-content-highlight)}.notification .notification-icon-warning{color:var(--s-color-content-warning)}.notification .notification-icon-success{color:var(--s-color-content-success)}@media screen and (max-width: 490px){.notification.float{bottom:-100vw;right:24px;left:24px}.notification.float.open{animation:floatMobile 5s ease-in-out}.notification.float.dismissible{animation:floatDismissibleMobile 5s ease-in-out;animation-fill-mode:forwards}}@keyframes floatDismissibleMobile{0%{right:24px;bottom:-100vw}100%{bottom:24px;right:24px;left:24px}}@keyframes floatMobile{0%{right:24px;bottom:-100vw}20%{bottom:24px;right:24px;left:24px}80%{left:24px;bottom:24px;right:24px}100%{left:100vw;right:-85vw;bottom:24px}}@keyframes floatDismissible{0%{right:24px;bottom:-100vw}100%{bottom:24px;right:24px}}@keyframes float{0%{right:24px;bottom:-100vw}20%{bottom:24px;right:24px}80%{bottom:24px;right:24px}100%{right:-40vw;bottom:24px}}","",{version:3,sources:["webpack://./src/app/components/Notification/Notification.scss"],names:[],mappings:"AAAA,cACE,sGAAA,CAEA,4CAAA,CACA,YAAA,CACA,6BAAA,CACA,0CAAA,CACA,yEAAA,CACA,eAAA,CAEA,oBACE,eAAA,CACA,cAAA,CACA,UAAA,CACA,aAAA,CACA,WAAA,CACA,kCAAA,CACA,yBACE,8BAAA,CAEF,gCACE,yCAAA,CACA,4BAAA,CAIJ,sBACE,6EAAA,CAIF,sBACE,2EAAA,CAGF,sBACE,2EAAA,CAGF,oCACE,YAAA,CACA,qBAAA,CACA,UAAA,CACA,6BAAA,CAEA,2CACE,YAAA,CACA,6BAAA,CACA,0BAAA,CAGF,iDACE,0CAAA,CACA,oCAAA,CACA,oBAAA,CAGF,2CACE,sCAAA,CACA,oCAAA,CAIJ,yCACE,sCAAA,CAGF,yCACE,oCAAA,CAGF,yCACE,oCAAA,CAIJ,qCAEI,oBACE,aAAA,CACA,UAAA,CACA,SAAA,CACA,yBACE,oCAAA,CAEF,gCACE,+CAAA,CACA,4BAAA,CAAA,CAMR,kCACE,GACE,UAAA,CACA,aAAA,CAEF,KACE,WAAA,CACA,UAAA,CACA,SAAA,CAAA,CAIJ,uBACE,GACE,UAAA,CACA,aAAA,CAEF,IACE,WAAA,CACA,UAAA,CACA,SAAA,CAEF,IACE,SAAA,CACA,WAAA,CACA,UAAA,CAEF,KACE,UAAA,CACA,WAAA,CACA,WAAA,CAAA,CAIJ,4BACE,GACE,UAAA,CACA,aAAA,CAEF,KACE,WAAA,CACA,UAAA,CAAA,CAIJ,iBACE,GACE,UAAA,CACA,aAAA,CAEF,IACE,WAAA,CACA,UAAA,CAEF,IACE,WAAA,CACA,UAAA,CAEF,KACE,WAAA,CACA,WAAA,CAAA",sourcesContent:[".notification {\n  padding: var(--s-spacing-small) var(--s-spacing-small) var(--s-spacing-small)\n    var(--s-spacing-xx-small);\n  background-color: var(--s-color-fill-default);\n  display: flex;\n  gap: var(--s-spacing-xx-small);\n  border-radius: var(--s-border-radius-small);\n  border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n  overflow: hidden;\n\n  &.float {\n    max-width: 368px;\n    position: fixed;\n    right: 24px;\n    bottom: -100vw;\n    border: none;\n    box-shadow: var(--s-shadow-level-2);\n    &.open {\n      animation: float 5s ease-in-out;\n    }\n    &.dismissible {\n      animation: floatDismissible 5s ease-in-out;\n      animation-fill-mode: forwards;\n    }\n  }\n\n  &.primary {\n    border-left: var(--s-border-width-heavy) solid\n      var(--s-color-border-highlight);\n  }\n\n  &.warning {\n    border-left: var(--s-border-width-heavy) solid var(--s-color-border-warning);\n  }\n\n  &.success {\n    border-left: var(--s-border-width-heavy) solid var(--s-color-border-success);\n  }\n\n  .notification-content {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: var(--s-spacing-xx-small);\n\n    header {\n      display: flex;\n      justify-content: space-between;\n      gap: var(--s-spacing-small);\n    }\n\n    .description {\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-default);\n      word-break: break-all;\n    }\n\n    .title {\n      font: var(--s-typography-heading-small);\n      color: var(--s-color-content-default);\n    }\n  }\n\n  .notification-icon-primary {\n    color: var(--s-color-content-highlight);\n  }\n\n  .notification-icon-warning {\n    color: var(--s-color-content-warning);\n  }\n\n  .notification-icon-success {\n    color: var(--s-color-content-success);\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .notification {\n    &.float {\n      bottom: -100vw;\n      right: 24px;\n      left: 24px;\n      &.open {\n        animation: floatMobile 5s ease-in-out;\n      }\n      &.dismissible {\n        animation: floatDismissibleMobile 5s ease-in-out;\n        animation-fill-mode: forwards;\n      }\n    }\n  }\n}\n\n@keyframes floatDismissibleMobile {\n  0% {\n    right: 24px;\n    bottom: -100vw;\n  }\n  100% {\n    bottom: 24px;\n    right: 24px;\n    left: 24px;\n  }\n}\n\n@keyframes floatMobile {\n  0% {\n    right: 24px;\n    bottom: -100vw;\n  }\n  20% {\n    bottom: 24px;\n    right: 24px;\n    left: 24px;\n  }\n  80% {\n    left: 24px;\n    bottom: 24px;\n    right: 24px;\n  }\n  100% {\n    left: 100vw;\n    right: -85vw;\n    bottom: 24px;\n  }\n}\n\n@keyframes floatDismissible {\n  0% {\n    right: 24px;\n    bottom: -100vw;\n  }\n  100% {\n    bottom: 24px;\n    right: 24px;\n  }\n}\n\n@keyframes float {\n  0% {\n    right: 24px;\n    bottom: -100vw;\n  }\n  20% {\n    bottom: 24px;\n    right: 24px;\n  }\n  80% {\n    bottom: 24px;\n    right: 24px;\n  }\n  100% {\n    right: -40vw;\n    bottom: 24px;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);