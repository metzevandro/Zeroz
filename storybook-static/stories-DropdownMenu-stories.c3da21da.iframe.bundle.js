"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1170],{"./src/stories/DropdownMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/DropdownMenu/DropdownMenu.tsx"),_app_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/Button/Button.tsx"),__jsx=(__webpack_require__("./src/stories/css/main.scss"),react__WEBPACK_IMPORTED_MODULE_0__.createElement);const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Dropdown Menu",component:_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__.GV,parameters:{layout:"centered"},tags:["autodocs"]};var Default=function Template(args){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isDropDownOpen=_useState[0],setIsDropDownOpen=_useState[1];return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{style:{width:"288px"}},__jsx(_app_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Z,{size:"md",variant:"primary",label:"Click here!",onClick:function toggleDropDown(){setIsDropDownOpen(!isDropDownOpen)}}),__jsx("div",null,__jsx(_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__.GV,{dropDownMenu:isDropDownOpen},__jsx(_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__.Cs,{content:"Title"}),__jsx(_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__.M8,{content:"Item 1",typeIcon:"ac_unit"}),__jsx(_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__.M8,{content:"Item 2",typeIcon:"ac_unit"}),__jsx(_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__.M8,{content:"Item 3",typeIcon:"ac_unit"}),__jsx(_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__.Cs,{content:"Title"}),__jsx(_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__.M8,{content:"Item 1"}),__jsx(_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__.M8,{content:"Item 2"})))))}.bind({});Default.args={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [isDropDownOpen, setIsDropDownOpen] = useState(false);\n  const toggleDropDown = () => {\n    setIsDropDownOpen(!isDropDownOpen);\n  };\n  return <>\r\n      <div style={{\n      width: "288px"\n    }}>\r\n        <Button size="md" variant="primary" label="Click here!" onClick={toggleDropDown} />\r\n        <div>\r\n          <DropDownMenu dropDownMenu={isDropDownOpen}>\r\n            <DropDownMenuTitle content="Title" />\r\n            <DropDownMenuItem content="Item 1" typeIcon="ac_unit" />\r\n            <DropDownMenuItem content="Item 2" typeIcon="ac_unit" />\r\n            <DropDownMenuItem content="Item 3" typeIcon="ac_unit" />\r\n            <DropDownMenuTitle content="Title" />\r\n            <DropDownMenuItem content="Item 1" />\r\n            <DropDownMenuItem content="Item 2" />\r\n          </DropDownMenu>\r\n        </div>\r\n      </div>\r\n    </>;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/app/components/DropdownMenu/DropdownMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GV:()=>DropDownMenu,M8:()=>DropDownMenuItem,Cs:()=>DropDownMenuTitle});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),DropdownMenu=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/DropdownMenu/DropdownMenu.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(DropdownMenu.Z,options);DropdownMenu.Z&&DropdownMenu.Z.locals&&DropdownMenu.Z.locals;var __jsx=react.createElement,DropDownMenu=function DropDownMenu(_ref){var children=_ref.children,dropDownMenu=_ref.dropDownMenu;return __jsx(react.Fragment,null,!0===dropDownMenu&&__jsx("div",{className:"dropdown-menu-root"},__jsx("div",{className:"dropdown-menu"},children)))},DropDownMenuTitle=function DropDownMenuTitle(_ref2){var content=_ref2.content;return __jsx(react.Fragment,null,__jsx("div",{className:"dropdown-menu-title"},content))},DropDownMenuItem=function DropDownMenuItem(_ref3){var typeIcon=_ref3.typeIcon,content=_ref3.content,onClick=_ref3.onClick;return __jsx(react.Fragment,null,__jsx("button",{className:"dropdown-menu-item",onClick},typeIcon&&__jsx(Icon.Z,{size:"sm",icon:typeIcon}),content))};try{DropDownMenu.displayName="DropDownMenu",DropDownMenu.__docgenInfo={description:"",displayName:"DropDownMenu",props:{dropDownMenu:{defaultValue:null,description:"",name:"dropDownMenu",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/DropdownMenu/DropdownMenu.tsx#DropDownMenu"]={docgenInfo:DropDownMenu.__docgenInfo,name:"DropDownMenu",path:"src/app/components/DropdownMenu/DropdownMenu.tsx#DropDownMenu"})}catch(__react_docgen_typescript_loader_error){}try{DropDownMenuTitle.displayName="DropDownMenuTitle",DropDownMenuTitle.__docgenInfo={description:"",displayName:"DropDownMenuTitle",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/DropdownMenu/DropdownMenu.tsx#DropDownMenuTitle"]={docgenInfo:DropDownMenuTitle.__docgenInfo,name:"DropDownMenuTitle",path:"src/app/components/DropdownMenu/DropdownMenu.tsx#DropDownMenuTitle"})}catch(__react_docgen_typescript_loader_error){}try{DropDownMenuItem.displayName="DropDownMenuItem",DropDownMenuItem.__docgenInfo={description:"",displayName:"DropDownMenuItem",props:{typeIcon:{defaultValue:null,description:"",name:"typeIcon",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/DropdownMenu/DropdownMenu.tsx#DropDownMenuItem"]={docgenInfo:DropDownMenuItem.__docgenInfo,name:"DropDownMenuItem",path:"src/app/components/DropdownMenu/DropdownMenu.tsx#DropDownMenuItem"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/DropdownMenu/DropdownMenu.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".dropdown-menu-root{position:relative}.dropdown-menu-root .dropdown-menu{margin-top:var(--s-spacing-xx-small);z-index:999;position:absolute;width:100%;display:flex;align-items:center;flex-direction:column;border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-default);border:var(--s-border-width-hairline) solid var(--s-color-border-default);padding:var(--s-spacing-nano);box-shadow:var(--s-shadow-level-2)}.dropdown-menu-root .dropdown-menu .dropdown-menu-title{font:var(--s-typography-paragraph-strong);padding:var(--s-spacing-xx-small) var(--s-spacing-xx-small) 0 var(--s-spacing-xx-small);border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-default);color:var(--s-color-content-default);justify-content:start;display:flex;width:100%}.dropdown-menu-root .dropdown-menu .dropdown-menu-item{justify-content:start;cursor:pointer;width:100%;font:var(--s-typography-paragraph-regular);display:flex;align-items:center;gap:var(--s-spacing-xx-small);padding:var(--s-spacing-xx-small);border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-default);color:var(--s-color-content-default)}.dropdown-menu-root .dropdown-menu .dropdown-menu-item:hover{background-color:var(--s-color-fill-default-hover)}.dropdown-menu-root .dropdown-menu .dropdown-menu-item:focus-visible{border-radius:var(--s-border-radius-small);z-index:2;outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}","",{version:3,sources:["webpack://./src/app/components/DropdownMenu/DropdownMenu.scss"],names:[],mappings:"AAAA,oBACE,iBAAA,CAEA,mCACE,oCAAA,CACA,WAAA,CACA,iBAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,qBAAA,CACA,0CAAA,CACA,4CAAA,CACA,yEAAA,CACA,6BAAA,CACA,kCAAA,CAEA,wDACE,yCAAA,CACA,uFAAA,CAEA,0CAAA,CACA,4CAAA,CACA,oCAAA,CACA,qBAAA,CACA,YAAA,CACA,UAAA,CAGF,uDACE,qBAAA,CACA,cAAA,CACA,UAAA,CACA,0CAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,iCAAA,CACA,0CAAA,CACA,4CAAA,CACA,oCAAA,CAEA,6DACE,kDAAA,CAGF,qEACE,0CAAA,CACA,SAAA,CACA,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA",sourcesContent:[".dropdown-menu-root {\n  position: relative;\n\n  .dropdown-menu {\n    margin-top: var(--s-spacing-xx-small);\n    z-index: 999;\n    position: absolute;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    border-radius: var(--s-border-radius-small);\n    background-color: var(--s-color-fill-default);\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    padding: var(--s-spacing-nano);\n    box-shadow: var(--s-shadow-level-2);\n\n    .dropdown-menu-title {\n      font: var(--s-typography-paragraph-strong);\n      padding: var(--s-spacing-xx-small) var(--s-spacing-xx-small) 0\n        var(--s-spacing-xx-small);\n      border-radius: var(--s-border-radius-small);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n      justify-content: start;\n      display: flex;\n      width: 100%;\n    }\n\n    .dropdown-menu-item {\n      justify-content: start;\n      cursor: pointer;\n      width: 100%;\n      font: var(--s-typography-paragraph-regular);\n      display: flex;\n      align-items: center;\n      gap: var(--s-spacing-xx-small);\n      padding: var(--s-spacing-xx-small);\n      border-radius: var(--s-border-radius-small);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n\n      &:hover {\n        background-color: var(--s-color-fill-default-hover);\n      }\n\n      &:focus-visible {\n        border-radius: var(--s-border-radius-small);\n        z-index: 2;\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-fill-highlight);\n        outline-offset: var(--s-border-width-thin);\n        outline-style: solid;\n      }\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);