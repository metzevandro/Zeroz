"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4849],{"./src/stories/ProgressIndicator.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WidthFull:()=>WidthFull,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProgressIndicator_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ProgressIndicator=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/ProgressIndicator/ProgressIndicator.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ProgressIndicator.Z,options);ProgressIndicator.Z&&ProgressIndicator.Z.locals&&ProgressIndicator.Z.locals;var __jsx=react.createElement,stateNames={default:"circle",current:"trip_origin",error:"error",completed:"check_circle",disable:"circle"},ProgressIndicator_ProgressIndicator_ProgressIndicator=function ProgressIndicator(_ref){var step=_ref.step,description=_ref.description,state=_ref.state,direction=_ref.direction,onClick=_ref.onClick,widthFull=_ref.widthFull,displayName=stateNames[state]||state;return __jsx(react.Fragment,null,__jsx("div",{className:"progress-indicator  ".concat(direction," ").concat(state),onClick,style:function customizeWidthFull(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0])return{width:"100%"}}(widthFull)},__jsx("div",{className:"header"},__jsx("div",{className:state},__jsx(Icon.Z,{icon:displayName,size:"sm",fill:"check_circle"===displayName||"error"===displayName?1:0})),__jsx("h1",null,step)),__jsx("p",null,description)))};const components_ProgressIndicator_ProgressIndicator=ProgressIndicator_ProgressIndicator_ProgressIndicator;try{ProgressIndicator_ProgressIndicator_ProgressIndicator.displayName="ProgressIndicator",ProgressIndicator_ProgressIndicator_ProgressIndicator.__docgenInfo={description:"",displayName:"ProgressIndicator",props:{step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"current"'},{value:'"completed"'},{value:'"error"'},{value:'"disable"'}]}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},widthFull:{defaultValue:null,description:"",name:"widthFull",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/ProgressIndicator/ProgressIndicator.tsx#ProgressIndicator"]={docgenInfo:ProgressIndicator_ProgressIndicator_ProgressIndicator.__docgenInfo,name:"ProgressIndicator",path:"src/app/components/ProgressIndicator/ProgressIndicator.tsx#ProgressIndicator"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/stories/css/main.scss");var ProgressIndicator_stories_jsx=react.createElement;const ProgressIndicator_stories={title:"Components/Progress Indicator",component:components_ProgressIndicator_ProgressIndicator,argTypes:{},parameters:{ProgressIndicator:"padded"},tags:["autodocs"]};var Template=function Template(args){return ProgressIndicator_stories_jsx("div",{style:{display:"flex",width:"100%",flexDirection:args.direction}},ProgressIndicator_stories_jsx(components_ProgressIndicator_ProgressIndicator,{direction:args.direction,state:args.state1,step:args.step1,description:args.description1,widthFull:args.widthFull1}),ProgressIndicator_stories_jsx(components_ProgressIndicator_ProgressIndicator,{direction:args.direction,state:args.state2,step:args.step2,description:args.description2,widthFull:args.widthFull2}),ProgressIndicator_stories_jsx(components_ProgressIndicator_ProgressIndicator,{direction:args.direction,state:args.state3,step:args.step3,description:args.description3,widthFull:args.widthFull3}),ProgressIndicator_stories_jsx(components_ProgressIndicator_ProgressIndicator,{direction:args.direction,state:args.state4,step:args.step4,description:args.description4,widthFull:args.widthFull4}),ProgressIndicator_stories_jsx(components_ProgressIndicator_ProgressIndicator,{direction:args.direction,state:args.state5,step:args.step5,description:args.description5,widthFull:args.widthFull5}))};Template.displayName="Template";var Default=Template.bind({});Default.args={direction:"row",step1:"Step 1",description1:"Description 1",state1:"completed",widthFull1:!1,step2:"Step 2",description2:"Description 2",state2:"current",widthFull2:!1,step3:"Step 3",description3:"Description 3",state3:"default",widthFull3:!1,step4:"Step 4",description4:"Description 4",state4:"disable",widthFull4:!1,step5:"Step 5",description5:"Description 5",state5:"error",widthFull5:!1};var WidthFull=Template.bind({});WidthFull.args={direction:"row",step1:"Step 1",description1:"Description 1",state1:"completed",widthFull1:!0,step2:"Step 2",description2:"Description 2",state2:"current",widthFull2:!0,step3:"Step 3",description3:"Description 3",state3:"default",widthFull3:!0,step4:"Step 4",description4:"Description 4",state4:"disable",widthFull4:!0,step5:"Step 5",description5:"Description 5",state5:"error",widthFull5:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  return <div style={{\n    display: \"flex\",\n    width: '100%',\n    flexDirection: args.direction\n  }}>\r\n      <ProgressIndicator direction={args.direction} state={args.state1} step={args.step1} description={args.description1} widthFull={args.widthFull1} />\r\n      <ProgressIndicator direction={args.direction} state={args.state2} step={args.step2} description={args.description2} widthFull={args.widthFull2} />\r\n      <ProgressIndicator direction={args.direction} state={args.state3} step={args.step3} description={args.description3} widthFull={args.widthFull3} />\r\n      <ProgressIndicator direction={args.direction} state={args.state4} step={args.step4} description={args.description4} widthFull={args.widthFull4} />\r\n      <ProgressIndicator direction={args.direction} state={args.state5} step={args.step5} description={args.description5} widthFull={args.widthFull5} />\r\n    </div>;\n}",...Default.parameters?.docs?.source}}},WidthFull.parameters={...WidthFull.parameters,docs:{...WidthFull.parameters?.docs,source:{originalSource:"args => {\n  return <div style={{\n    display: \"flex\",\n    width: '100%',\n    flexDirection: args.direction\n  }}>\r\n      <ProgressIndicator direction={args.direction} state={args.state1} step={args.step1} description={args.description1} widthFull={args.widthFull1} />\r\n      <ProgressIndicator direction={args.direction} state={args.state2} step={args.step2} description={args.description2} widthFull={args.widthFull2} />\r\n      <ProgressIndicator direction={args.direction} state={args.state3} step={args.step3} description={args.description3} widthFull={args.widthFull3} />\r\n      <ProgressIndicator direction={args.direction} state={args.state4} step={args.step4} description={args.description4} widthFull={args.widthFull4} />\r\n      <ProgressIndicator direction={args.direction} state={args.state5} step={args.step5} description={args.description5} widthFull={args.widthFull5} />\r\n    </div>;\n}",...WidthFull.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WidthFull"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/ProgressIndicator/ProgressIndicator.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".progress-indicator{text-wrap:nowrap;width:min-content;user-select:none;cursor:pointer;display:flex;flex-direction:column;align-items:start;justify-content:start;padding-top:var(--s-spacing-xx-small);padding-left:var(--s-spacing-x-small);box-sizing:border-box}.progress-indicator.row{height:56px;border-top:var(--s-border-width-thin) solid var(--s-color-border-default)}.progress-indicator.row.current,.progress-indicator.row.completed{border-top-color:var(--s-color-border-highlight)}.progress-indicator.row.error,.progress-indicator.row.disable{border-top-color:var(--s-color-border-default)}.progress-indicator.column{height:64px}.progress-indicator.column.default{border-left:var(--s-border-width-thin) solid var(--s-color-border-default)}.progress-indicator.column.current,.progress-indicator.column.completed{border-left:var(--s-border-width-thin) solid var(--s-color-border-highlight)}.progress-indicator.column.error,.progress-indicator.column.disable{border-left:var(--s-border-width-thin) solid var(--s-color-border-default)}.progress-indicator.row,.progress-indicator.column{display:flex}.progress-indicator .header{display:flex;align-items:center;gap:var(--s-spacing-xx-small);font:var(--s-typography-paragraph-regular)}.progress-indicator .header h1{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default)}.progress-indicator .header .default{color:var(--s-color-content-default)}.progress-indicator .header .error{color:var(--s-color-content-warning)}.progress-indicator .header .disable{color:var(--s-color-content-disable)}.progress-indicator .header .current,.progress-indicator .header .completed{color:var(--s-color-content-highlight)}.progress-indicator p{padding-left:var(--s-spacing-medium);font:var(--s-typography-caption-regular);color:var(--s-color-content-light)}","",{version:3,sources:["webpack://./src/app/components/ProgressIndicator/ProgressIndicator.scss"],names:[],mappings:"AAAA,oBACE,gBAAA,CACA,iBAAA,CACA,gBAAA,CACA,cAAA,CACA,YAAA,CACA,qBAAA,CACA,iBAAA,CACA,qBAAA,CACA,qCAAA,CACA,qCAAA,CACA,qBAAA,CAEA,wBACE,WAAA,CACA,yEAAA,CAEA,kEAEE,gDAAA,CAGF,8DAEE,8CAAA,CAIJ,2BACE,WAAA,CACA,mCACE,0EAAA,CAIF,wEAEE,4EAAA,CAIF,oEAEE,0EAAA,CAKJ,mDAEE,YAAA,CAGF,4BACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,0CAAA,CAEA,+BACE,0CAAA,CACA,oCAAA,CAGF,qCACE,oCAAA,CAGF,mCACE,oCAAA,CAGF,qCACE,oCAAA,CAGF,4EAEE,sCAAA,CAIJ,sBACE,oCAAA,CACA,wCAAA,CACA,kCAAA",sourcesContent:[".progress-indicator {\n  text-wrap: nowrap;\n  width: min-content;\n  user-select: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: start;\n  padding-top: var(--s-spacing-xx-small);\n  padding-left: var(--s-spacing-x-small);\n  box-sizing: border-box;\n\n  &.row {\n    height: 56px;\n    border-top: var(--s-border-width-thin) solid var(--s-color-border-default);\n\n    &.current,\n    &.completed {\n      border-top-color: var(--s-color-border-highlight);\n    }\n\n    &.error,\n    &.disable {\n      border-top-color: var(--s-color-border-default);\n    }\n  }\n\n  &.column {\n    height: 64px;\n    &.default {\n      border-left: var(--s-border-width-thin) solid\n        var(--s-color-border-default);\n    }\n\n    &.current,\n    &.completed {\n      border-left: var(--s-border-width-thin) solid\n        var(--s-color-border-highlight);\n    }\n\n    &.error,\n    &.disable {\n      border-left: var(--s-border-width-thin) solid\n        var(--s-color-border-default);\n    }\n  }\n\n  &.row,\n  &.column {\n    display: flex;\n  }\n\n  .header {\n    display: flex;\n    align-items: center;\n    gap: var(--s-spacing-xx-small);\n    font: var(--s-typography-paragraph-regular);\n\n    h1 {\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-default);\n    }\n\n    .default {\n      color: var(--s-color-content-default);\n    }\n\n    .error {\n      color: var(--s-color-content-warning);\n    }\n\n    .disable {\n      color: var(--s-color-content-disable);\n    }\n\n    .current,\n    .completed {\n      color: var(--s-color-content-highlight);\n    }\n  }\n\n  p {\n    padding-left: var(--s-spacing-medium);\n    font: var(--s-typography-caption-regular);\n    color: var(--s-color-content-light);\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);