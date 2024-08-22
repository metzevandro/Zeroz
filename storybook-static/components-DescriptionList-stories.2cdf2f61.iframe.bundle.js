"use strict";(self.webpackChunkdesign_system_zeroz=self.webpackChunkdesign_system_zeroz||[]).push([[3374],{"./src/stories/components/DescriptionList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Column:()=>Column,Row:()=>Row,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DescriptionList_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),DescriptionList=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/DescriptionList/DescriptionList.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(DescriptionList.A,options);DescriptionList.A&&DescriptionList.A.locals&&DescriptionList.A.locals;var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const DescriptionList_DescriptionList_DescriptionList=({items,direction})=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:items.map(((item,index)=>(0,jsx_runtime.jsx)(react.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:`description-list-root ${direction}`,style:index<items.length-1?{borderBottom:"var(--s-border-width-hairline) solid var(--s-color-border-default)"}:void 0,children:[(0,jsx_runtime.jsx)("div",{className:"title",children:item.title}),(0,jsx_runtime.jsx)("div",{className:"description",children:item.description})]})},index)))}),components_DescriptionList_DescriptionList=DescriptionList_DescriptionList_DescriptionList;try{DescriptionList_DescriptionList_DescriptionList.displayName="DescriptionList",DescriptionList_DescriptionList_DescriptionList.__docgenInfo={description:"",displayName:"DescriptionList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DescriptionItem[]"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DescriptionList/DescriptionList.tsx#DescriptionList"]={docgenInfo:DescriptionList_DescriptionList_DescriptionList.__docgenInfo,name:"DescriptionList",path:"src/components/DescriptionList/DescriptionList.tsx#DescriptionList"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/styles.scss");var dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const DescriptionList_stories={title:"Components/Description List",component:components_DescriptionList_DescriptionList,parameters:{layout:"padded",docs:{page:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.hE,{}),(0,jsx_runtime.jsx)(dist.Pd,{children:"Component"}),(0,jsx_runtime.jsxs)("p",{children:["The ",(0,jsx_runtime.jsx)("strong",{children:"Description list"})," helps organize and explain related info, perfect for listing and defining terms."]}),(0,jsx_runtime.jsx)(dist.Tn,{}),(0,jsx_runtime.jsx)(dist.H2,{}),(0,jsx_runtime.jsx)(dist.om,{})]})}},argTypes:{direction:{description:"The direction of the description list, either row or column.",control:{type:"radio"},options:["row","column"],defaultValue:"row",table:{category:"Layout"}},items:{description:"Array of items to be displayed in the description list. Each item contains a title and description.",control:{type:"object"},defaultValue:[{title:"Title 1",description:"Description 1"},{title:"Title 2",description:"Description 2"},{title:"Title 3",description:"Description 3"}],table:{category:"Content"}}}},Template=args=>(0,jsx_runtime.jsx)(components_DescriptionList_DescriptionList,{direction:args.direction,items:args.items}),Row=Template.bind({});Row.args={direction:"row",items:[{title:"Title 1",description:"Description 1"},{title:"Title 2",description:"Description 2"},{title:"Title 3",description:"Description 3"}]};const Column=Template.bind({});Column.args={direction:"column",items:[{title:"Title 1",description:"Description 1"},{title:"Title 2",description:"Description 2"},{title:"Title 3",description:"Description 3"}]};const __namedExportsOrder=["Row","Column"];Row.parameters={...Row.parameters,docs:{...Row.parameters?.docs,source:{originalSource:"args => {\n  return <DescriptionList direction={args.direction} items={args.items} />;\n}",...Row.parameters?.docs?.source}}},Column.parameters={...Column.parameters,docs:{...Column.parameters?.docs,source:{originalSource:"args => {\n  return <DescriptionList direction={args.direction} items={args.items} />;\n}",...Column.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/DescriptionList/DescriptionList.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".description-list-root{width:100%;display:flex;padding:var(--s-spacing-small) 0;justify-content:space-between;align-items:start;margin:0;margin-block-end:0;margin-block-start:0}.description-list-root.row{flex-direction:row}.description-list-root.row *{width:50%}.description-list-root.column{gap:var(--s-spacing-xx-small);flex-direction:column}.description-list-root .title{font:var(--s-typography-paragraph-strong);color:var(--s-color-content-default)}.description-list-root .description{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-light)}","",{version:3,sources:["webpack://./src/components/DescriptionList/DescriptionList.scss"],names:[],mappings:"AAAA,uBACE,UAAA,CACA,YAAA,CACA,gCAAA,CACA,6BAAA,CAEA,iBAAA,CACA,QAAA,CACA,kBAAA,CACA,oBAAA,CAEA,2BACE,kBAAA,CAEA,6BACE,SAAA,CAIJ,8BACE,6BAAA,CACA,qBAAA,CAGF,8BACE,yCAAA,CACA,oCAAA,CAGF,oCACE,0CAAA,CACA,kCAAA",sourcesContent:[".description-list-root {\n  width: 100%;\n  display: flex;\n  padding: var(--s-spacing-small) 0;\n  justify-content: space-between;\n\n  align-items: start;\n  margin: 0;\n  margin-block-end: 0;\n  margin-block-start: 0;\n\n  &.row {\n    flex-direction: row;\n\n    * {\n      width: 50%;\n    }\n  }\n\n  &.column {\n    gap: var(--s-spacing-xx-small);\n    flex-direction: column;\n  }\n\n  .title {\n    font: var(--s-typography-paragraph-strong);\n    color: var(--s-color-content-default);\n  }\n\n  .description {\n    font: var(--s-typography-paragraph-regular);\n    color: var(--s-color-content-light);\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);