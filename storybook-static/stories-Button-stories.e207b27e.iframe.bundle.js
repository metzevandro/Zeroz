"use strict";(self.webpackChunkdesign_system_zeroz=self.webpackChunkdesign_system_zeroz||[]).push([[9791],{"./src/stories/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,disable:()=>disable,secondary:()=>secondary,success:()=>success,warning:()=>warning,with_Icon:()=>with_Icon});var _app_components_Button_Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/app/components/Button/Button.tsx");__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./src/stories/css/main.scss");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Button",component:_app_components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};var Primary={args:{size:"md",disable:!1,label:"Button",typeIcon:"",variant:"primary"}},secondary={args:{size:"md",disable:!1,label:"Button",typeIcon:"",variant:"secondary"}},success={args:{size:"md",disable:!1,label:"Button",typeIcon:"",variant:"success"}},warning={args:{size:"md",disable:!1,label:"Button",typeIcon:"",variant:"warning"}},with_Icon={args:{size:"md",disable:!1,label:"Button",typeIcon:"ac_unit",variant:"primary"}},disable={args:{size:"md",disable:!0,label:"Button",typeIcon:"ac_unit",variant:"primary"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "md",\n    disable: false,\n    label: "Button",\n    typeIcon: "",\n    variant: "primary"\n  }\n}',...Primary.parameters?.docs?.source}}},secondary.parameters={...secondary.parameters,docs:{...secondary.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "md",\n    disable: false,\n    label: "Button",\n    typeIcon: "",\n    variant: "secondary"\n  }\n}',...secondary.parameters?.docs?.source}}},success.parameters={...success.parameters,docs:{...success.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "md",\n    disable: false,\n    label: "Button",\n    typeIcon: "",\n    variant: "success"\n  }\n}',...success.parameters?.docs?.source}}},warning.parameters={...warning.parameters,docs:{...warning.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "md",\n    disable: false,\n    label: "Button",\n    typeIcon: "",\n    variant: "warning"\n  }\n}',...warning.parameters?.docs?.source}}},with_Icon.parameters={...with_Icon.parameters,docs:{...with_Icon.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "md",\n    disable: false,\n    label: "Button",\n    typeIcon: "ac_unit",\n    variant: "primary"\n  }\n}',...with_Icon.parameters?.docs?.source}}},disable.parameters={...disable.parameters,docs:{...disable.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "md",\n    disable: true,\n    label: "Button",\n    typeIcon: "ac_unit",\n    variant: "primary"\n  }\n}',...disable.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","secondary","success","warning","with_Icon","disable"]},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/global"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.o,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.X});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.X},"./src/app/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Button_Button});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Button/Button.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button.A,options);Button.A&&Button.A.locals&&Button.A.locals;var Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),__jsx=react.createElement,Button_Button_Button=function Button(_ref){var disable=_ref.disable,label=_ref.label,variant=_ref.variant,typeIcon=_ref.typeIcon,onClick=_ref.onClick,size=_ref.size,buttonClass="button ".concat(variant," ").concat(size);return __jsx(react.Fragment,null,label&&__jsx("button",{className:buttonClass,onClick,disabled:disable},typeIcon&&__jsx(Icon.A,{icon:typeIcon,size:"sm"}),label))};const components_Button_Button=Button_Button_Button;try{Button_Button_Button.displayName="Button",Button_Button_Button.__docgenInfo={description:"",displayName:"Button",props:{disable:{defaultValue:null,description:"",name:"disable",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'}]}},typeIcon:{defaultValue:null,description:"",name:"typeIcon",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Button/Button.tsx#Button"]={docgenInfo:Button_Button_Button.__docgenInfo,name:"Button",path:"src/app/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Button/Button.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".button{display:flex;align-items:center;justify-content:center;font:var(--s-typography-label-medium);border-radius:var(--s-border-radius-small);white-space:nowrap;width:100%;height:40px;box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;border:none;gap:var(--s-spacing-nano);cursor:pointer}.button.sm{height:32px;padding:var(--s-spacing-nano) var(--s-spacing-x-small)}.button.md{padding:var(--s-spacing-xx-small) var(--s-spacing-x-small);height:40px}.button.primary{background-color:var(--s-color-fill-highlight);color:var(--s-color-content-on-color)}.button.primary:hover{background-color:var(--s-color-fill-highlight-hover)}.button.primary:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button.primary:disabled{background-color:var(--s-color-fill-disable);opacity:.64;color:var(--s-color-content-disable);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.button.secondary{background-color:var(--s-color-fill-default);color:var(--s-color-content-default);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.button.secondary:hover{background-color:var(--s-color-fill-default-hover)}.button.secondary:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button.secondary:disabled{opacity:.64;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.button.success{background-color:var(--s-color-fill-success);color:var(--s-color-content-on-color)}.button.success:hover{background-color:var(--s-color-fill-success-hover)}.button.success:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button.success:disabled{opacity:.64;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.button.warning{background-color:var(--s-color-fill-warning);color:var(--s-color-content-on-color)}.button.warning:hover{background-color:var(--s-color-fill-warning-hover)}.button.warning:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button.warning:disabled{opacity:.64;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}","",{version:3,sources:["webpack://./src/app/components/Button/Button.scss"],names:[],mappings:"AAAA,QACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,qCAAA,CACA,0CAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,6BAAA,CACA,0BAAA,CACA,WAAA,CACA,yBAAA,CACA,cAAA,CAEA,WACE,WAAA,CACA,sDAAA,CAGF,WACE,0DAAA,CACA,WAAA,CAGF,gBACE,8CAAA,CACA,qCAAA,CAEA,sBACE,oDAAA,CAGF,8BACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,yBACE,4CAAA,CACA,WAAA,CACA,oCAAA,CACA,yEAAA,CAIJ,kBACE,4CAAA,CACA,oCAAA,CACA,yEAAA,CAEA,wBACE,kDAAA,CAGF,gCACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,2BACE,WAAA,CACA,4CAAA,CACA,oCAAA,CACA,yEAAA,CAIJ,gBACE,4CAAA,CACA,qCAAA,CAEA,sBACE,kDAAA,CAGF,8BACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,yBACE,WAAA,CACA,4CAAA,CACA,oCAAA,CACA,yEAAA,CAIJ,gBACE,4CAAA,CACA,qCAAA,CAEA,sBACE,kDAAA,CAGF,8BACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,yBACE,WAAA,CACA,4CAAA,CACA,oCAAA,CACA,yEAAA",sourcesContent:[".button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font: var(--s-typography-label-medium);\n  border-radius: var(--s-border-radius-small);\n  white-space: nowrap;\n  width: 100%;\n  height: 40px;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  border: none;\n  gap: var(--s-spacing-nano);\n  cursor: pointer;\n\n  &.sm {\n    height: 32px;\n    padding: var(--s-spacing-nano) var(--s-spacing-x-small);\n  }\n\n  &.md {\n    padding: var(--s-spacing-xx-small) var(--s-spacing-x-small);\n    height: 40px;\n  }\n\n  &.primary {\n    background-color: var(--s-color-fill-highlight);\n    color: var(--s-color-content-on-color);\n\n    &:hover {\n      background-color: var(--s-color-fill-highlight-hover);\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      background-color: var(--s-color-fill-disable);\n      opacity: 0.64;\n      color: var(--s-color-content-disable);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    }\n  }\n\n  &.secondary {\n    background-color: var(--s-color-fill-default);\n    color: var(--s-color-content-default);\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n\n    &:hover {\n      background-color: var(--s-color-fill-default-hover);\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      opacity: 0.64;\n      background-color: var(--s-color-fill-disable);\n      color: var(--s-color-content-disable);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    }\n  }\n\n  &.success {\n    background-color: var(--s-color-fill-success);\n    color: var(--s-color-content-on-color);\n\n    &:hover {\n      background-color: var(--s-color-fill-success-hover);\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      opacity: 0.64;\n      background-color: var(--s-color-fill-disable);\n      color: var(--s-color-content-disable);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    }\n  }\n\n  &.warning {\n    background-color: var(--s-color-fill-warning);\n    color: var(--s-color-content-on-color);\n\n    &:hover {\n      background-color: var(--s-color-fill-warning-hover);\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      opacity: 0.64;\n      background-color: var(--s-color-fill-disable);\n      color: var(--s-color-content-disable);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);