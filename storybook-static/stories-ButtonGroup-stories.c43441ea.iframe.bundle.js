"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8276],{"./src/stories/ButtonGroup.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Column:()=>Column,Row:()=>Row,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _app_components_ButtonGroup_ButtonGroup__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/app/components/ButtonGroup/ButtonGroup.tsx");__webpack_require__("./src/stories/css/main.scss");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Button Group",component:_app_components_ButtonGroup_ButtonGroup__WEBPACK_IMPORTED_MODULE_0__.Z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};var Row={args:{direction:"row",contentFirstButton:"Button",variantFirstButton:"primary",typeIconFirstButton:"",disableFirstButton:!1,contentSecondButton:"Button",variantSecondButton:"secondary",disableSecondButton:!1,typeIconSecondButton:""}},Column={args:{direction:"column",contentFirstButton:"Button",variantFirstButton:"primary",typeIconFirstButton:"",disableFirstButton:!1,contentSecondButton:"Button",variantSecondButton:"secondary",disableSecondButton:!1,typeIconSecondButton:""}};Row.parameters={...Row.parameters,docs:{...Row.parameters?.docs,source:{originalSource:'{\n  args: {\n    direction: "row",\n    contentFirstButton: "Button",\n    variantFirstButton: "primary",\n    typeIconFirstButton: "",\n    disableFirstButton: false,\n    contentSecondButton: "Button",\n    variantSecondButton: "secondary",\n    disableSecondButton: false,\n    typeIconSecondButton: ""\n  }\n}',...Row.parameters?.docs?.source}}},Column.parameters={...Column.parameters,docs:{...Column.parameters?.docs,source:{originalSource:'{\n  args: {\n    direction: "column",\n    contentFirstButton: "Button",\n    variantFirstButton: "primary",\n    typeIconFirstButton: "",\n    disableFirstButton: false,\n    contentSecondButton: "Button",\n    variantSecondButton: "secondary",\n    disableSecondButton: false,\n    typeIconSecondButton: ""\n  }\n}',...Column.parameters?.docs?.source}}};const __namedExportsOrder=["Row","Column"]},"./src/app/components/ButtonGroup/ButtonGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_ButtonGroup_ButtonGroup});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Button=__webpack_require__("./src/app/components/Button/Button.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ButtonGroup=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/ButtonGroup/ButtonGroup.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ButtonGroup.Z,options);ButtonGroup.Z&&ButtonGroup.Z.locals&&ButtonGroup.Z.locals;var __jsx=react.createElement,ButtonGroup_ButtonGroup_ButtonGroup=function ButtonGroup(_ref){var direction=_ref.direction,onClickSecondButton=_ref.onClickSecondButton,typeIconSecondButton=_ref.typeIconSecondButton,contentSecondButton=_ref.contentSecondButton,variantSecondButton=_ref.variantSecondButton,disableSecondButton=_ref.disableSecondButton,disableFirstButton=_ref.disableFirstButton,onClickFirstButton=_ref.onClickFirstButton,contentFirstButton=_ref.contentFirstButton,typeIconFirstButton=_ref.typeIconFirstButton,variantFirstButton=_ref.variantFirstButton;return __jsx(react.Fragment,null,__jsx("div",{className:"button-group ".concat(direction)},__jsx(Button.Z,{size:"md",disable:disableFirstButton,onClick:onClickFirstButton,label:contentFirstButton,typeIcon:typeIconFirstButton,variant:variantFirstButton}),__jsx(Button.Z,{size:"md",disable:disableSecondButton,onClick:onClickSecondButton,label:contentSecondButton,typeIcon:typeIconSecondButton,variant:variantSecondButton})))};const components_ButtonGroup_ButtonGroup=ButtonGroup_ButtonGroup_ButtonGroup;try{ButtonGroup_ButtonGroup_ButtonGroup.displayName="ButtonGroup",ButtonGroup_ButtonGroup_ButtonGroup.__docgenInfo={description:"",displayName:"ButtonGroup",props:{disableFirstButton:{defaultValue:null,description:"",name:"disableFirstButton",required:!1,type:{name:"boolean"}},disableSecondButton:{defaultValue:null,description:"",name:"disableSecondButton",required:!1,type:{name:"boolean"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},variantFirstButton:{defaultValue:null,description:"",name:"variantFirstButton",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'}]}},variantSecondButton:{defaultValue:null,description:"",name:"variantSecondButton",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'}]}},contentFirstButton:{defaultValue:null,description:"",name:"contentFirstButton",required:!0,type:{name:"string"}},contentSecondButton:{defaultValue:null,description:"",name:"contentSecondButton",required:!0,type:{name:"string"}},typeIconFirstButton:{defaultValue:null,description:"",name:"typeIconFirstButton",required:!1,type:{name:"string"}},typeIconSecondButton:{defaultValue:null,description:"",name:"typeIconSecondButton",required:!1,type:{name:"string"}},onClickFirstButton:{defaultValue:null,description:"",name:"onClickFirstButton",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},onClickSecondButton:{defaultValue:null,description:"",name:"onClickSecondButton",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/ButtonGroup/ButtonGroup.tsx#ButtonGroup"]={docgenInfo:ButtonGroup_ButtonGroup_ButtonGroup.__docgenInfo,name:"ButtonGroup",path:"src/app/components/ButtonGroup/ButtonGroup.tsx#ButtonGroup"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/ButtonGroup/ButtonGroup.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".button-group{display:flex;justify-content:space-between;width:100%}.button-group.row{display:flex;flex-direction:row;gap:var(--s-spacing-x-small)}.button-group.column{display:flex;flex-direction:column;gap:var(--s-spacing-x-small)}","",{version:3,sources:["webpack://./src/app/components/ButtonGroup/ButtonGroup.scss"],names:[],mappings:"AAAA,cACE,YAAA,CACA,6BAAA,CACA,UAAA,CAEA,kBACE,YAAA,CACA,kBAAA,CACA,4BAAA,CAGF,qBACE,YAAA,CACA,qBAAA,CACA,4BAAA",sourcesContent:[".button-group {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n  &.row {\n    display: flex;\n    flex-direction: row;\n    gap: var(--s-spacing-x-small);\n  }\n\n  &.column {\n    display: flex;\n    flex-direction: column;\n    gap: var(--s-spacing-x-small);\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);