"use strict";(self.webpackChunkdesign_system_zeroz=self.webpackChunkdesign_system_zeroz||[]).push([[4101],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/stories/Layout.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OneColumn:()=>OneColumn,ThreeSymmetricColumn:()=>ThreeSymmetricColumn,TwoAsymmetricColumn:()=>TwoAsymmetricColumn,TwoSymmetricColumn:()=>TwoSymmetricColumn,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_app_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Layout/Layout.tsx"),_app_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/stories/css/main.scss"),__webpack_require__("./src/app/components/Icon/Icon.tsx")),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Templates/Layout",component:_app_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{},parameters:{layout:"padded"},tags:["autodocs"]};var Template=function Template(args){return __jsx(_app_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__.Z,{columns:args.columns},__jsx("div",{className:"slot"},__jsx(_app_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:"refresh",size:"md"}),"1st Content"),__jsx("div",{className:"slot"},__jsx(_app_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:"refresh",size:"md"}),"2nd Content"),__jsx("div",{className:"slot"},__jsx(_app_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:"refresh",size:"md"}),"3rd Content"),__jsx("div",{className:"slot"},__jsx(_app_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:"refresh",size:"md"}),"4th Content"),__jsx("div",{className:"slot"},__jsx(_app_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:"refresh",size:"md"}),"5th Content"),__jsx("div",{className:"slot"},__jsx(_app_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:"refresh",size:"md"}),"6th Content"))};Template.displayName="Template";var OneColumn=Template.bind({});OneColumn.args={columns:"1"};var TwoSymmetricColumn=Template.bind({});TwoSymmetricColumn.args={columns:"2 - Symmetric"};var TwoAsymmetricColumn=Template.bind({});TwoAsymmetricColumn.args={columns:"2 - Asymmetric"};var ThreeSymmetricColumn=Template.bind({});ThreeSymmetricColumn.args={columns:"3 - Symmetric"},OneColumn.parameters={...OneColumn.parameters,docs:{...OneColumn.parameters?.docs,source:{originalSource:'args => {\n  return <Layout columns={args.columns}>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        1st Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        2nd Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        3rd Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        4th Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        5th Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        6th Content\r\n      </div>\r\n    </Layout>;\n}',...OneColumn.parameters?.docs?.source}}},TwoSymmetricColumn.parameters={...TwoSymmetricColumn.parameters,docs:{...TwoSymmetricColumn.parameters?.docs,source:{originalSource:'args => {\n  return <Layout columns={args.columns}>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        1st Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        2nd Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        3rd Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        4th Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        5th Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        6th Content\r\n      </div>\r\n    </Layout>;\n}',...TwoSymmetricColumn.parameters?.docs?.source}}},TwoAsymmetricColumn.parameters={...TwoAsymmetricColumn.parameters,docs:{...TwoAsymmetricColumn.parameters?.docs,source:{originalSource:'args => {\n  return <Layout columns={args.columns}>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        1st Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        2nd Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        3rd Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        4th Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        5th Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        6th Content\r\n      </div>\r\n    </Layout>;\n}',...TwoAsymmetricColumn.parameters?.docs?.source}}},ThreeSymmetricColumn.parameters={...ThreeSymmetricColumn.parameters,docs:{...ThreeSymmetricColumn.parameters?.docs,source:{originalSource:'args => {\n  return <Layout columns={args.columns}>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        1st Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        2nd Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        3rd Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        4th Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        5th Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        6th Content\r\n      </div>\r\n    </Layout>;\n}',...ThreeSymmetricColumn.parameters?.docs?.source}}};const __namedExportsOrder=["OneColumn","TwoSymmetricColumn","TwoAsymmetricColumn","ThreeSymmetricColumn"]},"./src/app/components/Layout/Layout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Layout_Layout});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Layout=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Layout/Layout.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Layout.Z,options);Layout.Z&&Layout.Z.locals&&Layout.Z.locals;var _excluded=["children","columns"],__jsx=react.createElement,Layout_Layout_Layout=function Layout(_ref){var children=_ref.children,columns=_ref.columns,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),columnClassName={1:"one-column","2 - Symmetric":"two-column-symmetric","2 - Asymmetric":"two-column-asymmetric","3 - Symmetric":"three-column-symmetric"}[columns];return __jsx("div",(0,esm_extends.Z)({},rest,{className:"layout ".concat(columnClassName)}),children)};Layout_Layout_Layout.displayName="Layout";const components_Layout_Layout=Layout_Layout_Layout;try{Layout_Layout_Layout.displayName="Layout",Layout_Layout_Layout.__docgenInfo={description:"",displayName:"Layout",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"enum",value:[{value:'"1"'},{value:'"2 - Symmetric"'},{value:'"2 - Asymmetric"'},{value:'"3 - Symmetric"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Layout/Layout.tsx#Layout"]={docgenInfo:Layout_Layout_Layout.__docgenInfo,name:"Layout",path:"src/app/components/Layout/Layout.tsx#Layout"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Layout/Layout.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".layout{display:grid;grid-gap:var(--s-spacing-small);height:min-content}.layout.one-column{grid-template-columns:1fr;grid-auto-flow:dense}.layout.two-column-asymmetric{grid-auto-flow:dense;grid-template-columns:2fr 1fr}.layout.two-column-symmetric{grid-auto-flow:dense;grid-template-columns:repeat(2, 1fr)}.layout.three-column-symmetric{grid-auto-flow:dense;grid-template-columns:repeat(3, 1fr)}@media screen and (max-width: 490px){.layout.two-column-symmetric{grid-template-columns:1fr}.layout.two-column-asymmetric{grid-template-columns:1fr}.layout.three-column-symmetric{grid-template-columns:1fr}}","",{version:3,sources:["webpack://./src/app/components/Layout/Layout.scss"],names:[],mappings:"AAAA,QACE,YAAA,CACA,+BAAA,CACA,kBAAA,CAEA,mBACE,yBAAA,CACA,oBAAA,CAGF,8BACE,oBAAA,CACA,6BAAA,CAGF,6BACE,oBAAA,CACA,oCAAA,CAGF,+BACE,oBAAA,CACA,oCAAA,CAIJ,qCAEI,6BACE,yBAAA,CAEF,8BACE,yBAAA,CAEF,+BACE,yBAAA,CAAA",sourcesContent:[".layout {\n  display: grid;\n  grid-gap: var(--s-spacing-small);\n  height: min-content;\n\n  &.one-column {\n    grid-template-columns: 1fr;\n    grid-auto-flow: dense;\n  }\n\n  &.two-column-asymmetric {\n    grid-auto-flow: dense;\n    grid-template-columns: 2fr 1fr;\n  }\n\n  &.two-column-symmetric {\n    grid-auto-flow: dense;\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  &.three-column-symmetric {\n    grid-auto-flow: dense;\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .layout {\n    &.two-column-symmetric {\n      grid-template-columns: 1fr;\n    }\n    &.two-column-asymmetric {\n      grid-template-columns: 1fr;\n    }\n    &.three-column-symmetric {\n      grid-template-columns: 1fr;\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);