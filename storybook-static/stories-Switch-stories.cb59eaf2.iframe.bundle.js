"use strict";(self.webpackChunkdesign_system_zeroz=self.webpackChunkdesign_system_zeroz||[]).push([[6471],{"./src/stories/Switch.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./src/stories/css/main.scss");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Switch",component:__webpack_require__("./src/app/components/Switch/Switch.tsx").Z,parameters:{layout:"centered"},tags:["autodocs"]};var Default={args:{label:"Label",disabled:!1}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Label",\n    disabled: false\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/app/components/Switch/Switch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Switch_Switch});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Switch=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Switch/Switch.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Switch.Z,options);Switch.Z&&Switch.Z.locals&&Switch.Z.locals;var __jsx=react.createElement,Switch_Switch_Switch=function Switch(_ref){var label=_ref.label,disabled=_ref.disabled,controlledChecked=_ref.checked,onChange=_ref.onChange,_useState=(0,react.useState)(controlledChecked||!1),isChecked=_useState[0],setIsChecked=_useState[1];(0,react.useEffect)((function(){void 0!==controlledChecked&&setIsChecked(controlledChecked)}),[controlledChecked]);var isDisabled=disabled,toggleCheckbox=function toggleCheckbox(){if(!0!==isDisabled){var newValue=!isChecked;setIsChecked(newValue),onChange&&onChange(newValue)}};return __jsx("div",{className:"switch-root"},__jsx("div",{className:"switch ".concat(isChecked?"checked":""," ").concat(disabled?"disabled":""),onClick:toggleCheckbox,tabIndex:0,onKeyDown:function handleKeyPress(e){"Enter"===e.key&&toggleCheckbox()},role:"checkbox","aria-checked":isChecked},isChecked?__jsx("span",{className:"checked"},__jsx(Icon.Z,{size:"md",icon:"toggle_on"})):__jsx("span",{className:"unchecked"},__jsx(Icon.Z,{size:"md",icon:"toggle_off"}))),__jsx("label",{className:"label ".concat(disabled&&"disabled"),onClick:toggleCheckbox},label))};Switch_Switch_Switch.displayName="Switch";const components_Switch_Switch=Switch_Switch_Switch;try{Switch_Switch_Switch.displayName="Switch",Switch_Switch_Switch.__docgenInfo={description:"",displayName:"Switch",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Switch/Switch.tsx#Switch"]={docgenInfo:Switch_Switch_Switch.__docgenInfo,name:"Switch",path:"src/app/components/Switch/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Switch/Switch.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".switch-root{display:flex;align-items:center}.switch-root .switch{display:flex;align-items:center;justify-content:center;flex-direction:row;width:22px;height:22px;border-radius:var(--s-border-radius-small);color:var(--s-color-content-default);user-select:none;cursor:pointer}.switch-root .switch:hover{color:var(--s-color-content-highlight)}.switch-root .switch:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-style:solid}.switch-root .switch.checked{color:var(--s-color-content-highlight);background-color:rgba(0,0,0,0);transition:all .3s ease}.switch-root .switch.checked:hover{color:var(--s-color-content-highlight)}.switch-root .switch.unchecked{transition:all .3s ease}.switch-root .label{padding-left:var(--s-spacing-xx-small);font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);cursor:pointer;user-select:none}.switch-root .label.disabled{cursor:not-allowed}.switch-root .disabled{color:var(--s-color-content-disable);cursor:not-allowed}.switch-root .disabled .checked,.switch-root .disabled .unchecked,.switch-root .disabled:hover{color:var(--s-color-content-disable)}.switch-root .disabled:focus-visible{outline-width:none;outline-color:none;outline-style:none}","",{version:3,sources:["webpack://./src/app/components/Switch/Switch.scss"],names:[],mappings:"AAAA,aACE,YAAA,CACA,kBAAA,CAEA,qBACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CACA,0CAAA,CACA,oCAAA,CACA,gBAAA,CACA,cAAA,CAEA,2BACE,sCAAA,CAGF,mCACE,wCAAA,CACA,2CAAA,CACA,mBAAA,CAGF,6BACE,sCAAA,CACA,8BAAA,CACA,uBAAA,CAEA,mCACE,sCAAA,CAGJ,+BACE,uBAAA,CAIJ,oBACE,sCAAA,CACA,0CAAA,CACA,oCAAA,CACA,cAAA,CACA,gBAAA,CAEA,6BACE,kBAAA,CAIJ,uBACE,oCAAA,CACA,kBAAA,CAEA,+FAGE,oCAAA,CAGF,qCACE,kBAAA,CACA,kBAAA,CACA,kBAAA",sourcesContent:[".switch-root {\n  display: flex;\n  align-items: center;\n\n  .switch {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    width: 22px;\n    height: 22px;\n    border-radius: var(--s-border-radius-small);\n    color: var(--s-color-content-default);\n    user-select: none;\n    cursor: pointer;\n\n    &:hover {\n      color: var(--s-color-content-highlight);\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-style: solid;\n    }\n\n    &.checked {\n      color: var(--s-color-content-highlight);\n      background-color: transparent;\n      transition: all 0.3s ease;\n\n      &:hover {\n        color: var(--s-color-content-highlight);\n      }\n    }\n    &.unchecked {\n      transition: all 0.3s ease;\n    }\n  }\n\n  .label {\n    padding-left: var(--s-spacing-xx-small);\n    font: var(--s-typography-paragraph-regular);\n    color: var(--s-color-content-default);\n    cursor: pointer;\n    user-select: none;\n\n    &.disabled {\n      cursor: not-allowed;\n    }\n  }\n\n  .disabled {\n    color: var(--s-color-content-disable);\n    cursor: not-allowed;\n\n    .checked,\n    .unchecked,\n    &:hover {\n      color: var(--s-color-content-disable);\n    }\n\n    &:focus-visible {\n      outline-width: none;\n      outline-color: none;\n      outline-style: none;\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);