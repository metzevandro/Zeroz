"use strict";(self.webpackChunkdesign_system_zeroz=self.webpackChunkdesign_system_zeroz||[]).push([[573],{"./src/stories/components/Tab.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WidthFull:()=>WidthFull,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tab_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Tab=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Tab/Tab.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Tab.A,options);Tab.A&&Tab.A.locals&&Tab.A.locals;const Tab_Tab_Tab=({content})=>(0,jsx_runtime.jsx)("div",{className:"tab-root",children:(0,jsx_runtime.jsx)("div",{children:content})}),components_Tab_Tab=({tabs,widthFull})=>{const[activeTab,setActiveTab]=(0,react.useState)(0),tabItemGroupRef=(0,react.useRef)(null),customizeWidthFull=(widthFull=!1)=>{if(widthFull)return{width:"100%"}};return(0,jsx_runtime.jsxs)("div",{className:"tab-root",children:[(0,jsx_runtime.jsx)("div",{className:"tab-item-group",ref:tabItemGroupRef,children:tabs.map(((tab,index)=>(0,jsx_runtime.jsx)("button",{style:customizeWidthFull(widthFull),className:`tab-item ${index===activeTab&&"tab-item-active"}`,onClick:()=>{setActiveTab(index),(index=>{if(!tabItemGroupRef.current)return;const tabItems=tabItemGroupRef.current.children;if(!tabItems||index>=tabItems.length)return;const activeTabItem=tabItems[index];if(!activeTabItem)return;const activeTabItemWidth=activeTabItem.getBoundingClientRect().width,scrollLeft=tabItemGroupRef.current.scrollLeft,centerScroll=activeTabItem.getBoundingClientRect().left-(tabItemGroupRef.current.clientWidth-activeTabItemWidth)/2;tabItemGroupRef.current.scrollTo({left:centerScroll+scrollLeft,behavior:"smooth"})})(index)},children:tab.label},index)))}),(0,jsx_runtime.jsx)("div",{className:"tab-content",children:tabs[activeTab]&&(0,jsx_runtime.jsx)(Tab_Tab_Tab,{content:tabs[activeTab].content})})]})};try{Tab_Tab_Tab.displayName="Tab",Tab_Tab_Tab.__docgenInfo={description:"",displayName:"Tab",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tab/Tab.tsx#Tab"]={docgenInfo:Tab_Tab_Tab.__docgenInfo,name:"Tab",path:"src/components/Tab/Tab.tsx#Tab"})}catch(__react_docgen_typescript_loader_error){}var Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),dist=(__webpack_require__("./src/styles.scss"),__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"));const Tab_stories={title:"Components/Tab",component:components_Tab_Tab,parameters:{tags:["autodocs"],docs:{page:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.hE,{}),(0,jsx_runtime.jsx)(dist.Pd,{children:"Component"}),(0,jsx_runtime.jsxs)("p",{children:["The ",(0,jsx_runtime.jsx)("strong",{children:"Tabs "})," is to easily switch between different views within the same context."]}),(0,jsx_runtime.jsx)(dist.Tn,{}),(0,jsx_runtime.jsx)(dist.H2,{}),(0,jsx_runtime.jsx)(dist.om,{})]})}},argTypes:{widthFull:{name:"Width Full",description:"Determines if the tabs should take up the full width.",type:{name:"boolean"},defaultValue:{summary:!1},control:{type:"boolean"},table:{category:"Appearance",type:{summary:"boolean"}}},tabs:{name:"Tabs",description:"Array of tab objects with labels and content.",defaultValue:{summary:[]},table:{category:"Data",type:{summary:"Array<{ label: string, content: React.ReactNode }>"},defaultValue:{summary:"[]"}}}}},Template=args=>(0,jsx_runtime.jsx)(components_Tab_Tab,{...args}),Default=Template.bind({});Default.args={widthFull:!1,tabs:[{label:"Tab 1",content:(0,jsx_runtime.jsxs)("div",{className:"slot",children:[(0,jsx_runtime.jsx)(Icon.A,{icon:"refresh",size:"md"}),"1st Content"]})},{label:"Tab 2",content:(0,jsx_runtime.jsxs)("div",{className:"slot",children:[(0,jsx_runtime.jsx)(Icon.A,{icon:"refresh",size:"md"}),"2nd Content"]})}]};const WidthFull=Template.bind({});WidthFull.args={widthFull:!0,tabs:[{label:"Tab 1",content:(0,jsx_runtime.jsxs)("div",{className:"slot",children:[(0,jsx_runtime.jsx)(Icon.A,{icon:"refresh",size:"md"}),"1st Content"]})},{label:"Tab 2",content:(0,jsx_runtime.jsxs)("div",{className:"slot",children:[(0,jsx_runtime.jsx)(Icon.A,{icon:"refresh",size:"md"}),"2nd Content"]})}]};const __namedExportsOrder=["Default","WidthFull"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: TabsProps) => <Tabs {...args} />",...Default.parameters?.docs?.source}}},WidthFull.parameters={...WidthFull.parameters,docs:{...WidthFull.parameters?.docs,source:{originalSource:"(args: TabsProps) => <Tabs {...args} />",...WidthFull.parameters?.docs?.source}}}},"./src/components/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Icon_Icon});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Icon=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Icon/Icon.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Icon.A,options);Icon.A&&Icon.A.locals&&Icon.A.locals;__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon_Icon_Icon=({size,fill,icon})=>{const sizeClass=size,fillStyle=`'FILL' ${fill?1:0},\n    'GRAD' 0,\n    'opsz' 24`;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("span",{style:{fontVariationSettings:fillStyle},className:`material-symbols-outlined ${sizeClass}`,children:icon})})},components_Icon_Icon=Icon_Icon_Icon;try{Icon_Icon_Icon.displayName="Icon",Icon_Icon_Icon.__docgenInfo={description:"",displayName:"Icon",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string | undefined"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:Icon_Icon_Icon.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Icon/Icon.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";.material-symbols-outlined{font-weight:300;display:flex;user-select:none}.material-symbols-outlined.sm{font-size:16px}.material-symbols-outlined.md{font-size:24px}.material-symbols-outlined.lg{font-size:32px}',"",{version:3,sources:["webpack://./src/components/Icon/Icon.scss"],names:[],mappings:"AAAQ,6HAAA,CAER,2BACE,eAAA,CACA,YAAA,CACA,gBAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");\n\n.material-symbols-outlined {\n  font-weight: 300;\n  display: flex;\n  user-select: none;\n}\n\n.material-symbols-outlined.sm {\n  font-size: 16px;\n}\n\n.material-symbols-outlined.md {\n  font-size: 24px;\n}\n\n.material-symbols-outlined.lg {\n  font-size: 32px;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Tab/Tab.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".tab-root{width:100%}.tab-root .tab-item-group{display:flex;box-sizing:border-box;height:40px;padding:0 var(--s-spacing-xx-small);overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none}.tab-root .tab-item-group::-webkit-scrollbar{display:none}.tab-root .tab-item-group .tab-item{height:40px;box-sizing:border-box;text-wrap:nowrap;font:var(--s-typography-label-medium);color:var(--s-color-content-light);padding:var(--s-spacing-xx-small) var(--s-spacing-small);background-color:rgba(0,0,0,0);cursor:pointer;border-bottom:var(--s-border-width-thin) var(--s-color-border-default) solid;border-radius:var(--s-border-radius-medium) var(--s-border-radius-medium) 0 0}.tab-root .tab-item-group .tab-item:hover{border-bottom:var(--s-border-width-thin) var(--s-color-border-default-hover) solid;color:var(--s-color-content-default);background-color:var(--s-color-fill-default-hover)}.tab-root .tab-item-group .tab-item:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:-2px;outline-style:solid}.tab-root .tab-item-group .tab-item-active{color:var(--s-color-content-highlight);padding:var(--s-spacing-xx-small) var(--s-spacing-small);border-bottom:var(--s-border-width-thin) var(--s-color-border-highlight) solid}.tab-root .tab-item-group .tab-item-active:hover{border-color:var(--s-color-border-highlight);background-color:var(--s-color-fill-default);color:var(--s-color-content-highlight)}.tab-root .tab-content{padding:var(--s-spacing-x-small)}@media screen and (max-width: 490px){.tab-item-active{color:var(--s-color-content-highlight);padding:var(--s-spacing-xx-small);border-bottom:var(--s-border-width-thin) var(--s-color-border-highlight) solid}.tab-item-active:hover{border-color:var(--s-color-border-highlight);background-color:var(--s-color-fill-default);color:var(--s-color-content-highlight)}.tab-item:hover{border-bottom:var(--s-border-width-thin) var(--s-color-border-default-hover) solid;color:var(--s-color-content-default);padding:var(--s-spacing-xx-small)}}","",{version:3,sources:["webpack://./src/components/Tab/Tab.scss"],names:[],mappings:"AAAA,UACE,UAAA,CAEA,0BACE,YAAA,CACA,qBAAA,CACA,WAAA,CACA,mCAAA,CACA,eAAA,CAMA,oBAAA,CACA,uBAAA,CALA,6CACE,YAAA,CAMF,oCACE,WAAA,CACA,qBAAA,CACA,gBAAA,CACA,qCAAA,CACA,kCAAA,CACA,wDAAA,CACA,8BAAA,CACA,cAAA,CACA,4EAAA,CAEA,6EAAA,CAIF,0CACE,kFAAA,CAEA,oCAAA,CACA,kDAAA,CAGF,kDACE,wCAAA,CACA,6CAAA,CACA,mBAAA,CACA,mBAAA,CAGF,2CACE,sCAAA,CACA,wDAAA,CACA,8EAAA,CAGA,iDACE,4CAAA,CACA,4CAAA,CACA,sCAAA,CAKN,uBACE,gCAAA,CAIJ,qCACE,iBACE,sCAAA,CACA,iCAAA,CACA,8EAAA,CAGA,uBACE,4CAAA,CACA,4CAAA,CACA,sCAAA,CAGJ,gBACE,kFAAA,CAEA,oCAAA,CACA,iCAAA,CAAA",sourcesContent:[".tab-root {\n  width: 100%;\n\n  .tab-item-group {\n    display: flex;\n    box-sizing: border-box;\n    height: 40px;\n    padding: 0 var(--s-spacing-xx-small);\n    overflow-x: auto;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n\n    .tab-item {\n      height: 40px;\n      box-sizing: border-box;\n      text-wrap: nowrap;\n      font: var(--s-typography-label-medium);\n      color: var(--s-color-content-light);\n      padding: var(--s-spacing-xx-small) var(--s-spacing-small);\n      background-color: transparent;\n      cursor: pointer;\n      border-bottom: var(--s-border-width-thin) var(--s-color-border-default)\n        solid;\n      border-radius: var(--s-border-radius-medium) var(--s-border-radius-medium)\n        0 0;\n    }\n\n    .tab-item:hover {\n      border-bottom: var(--s-border-width-thin)\n        var(--s-color-border-default-hover) solid;\n      color: var(--s-color-content-default);\n      background-color: var(--s-color-fill-default-hover);\n    }\n\n    .tab-item:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-border-highlight);\n      outline-offset: -2px;\n      outline-style: solid;\n    }\n\n    .tab-item-active {\n      color: var(--s-color-content-highlight);\n      padding: var(--s-spacing-xx-small) var(--s-spacing-small);\n      border-bottom: var(--s-border-width-thin) var(--s-color-border-highlight)\n        solid;\n\n      &:hover {\n        border-color: var(--s-color-border-highlight);\n        background-color: var(--s-color-fill-default);\n        color: var(--s-color-content-highlight);\n      }\n    }\n  }\n\n  .tab-content {\n    padding: var(--s-spacing-x-small);\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .tab-item-active {\n    color: var(--s-color-content-highlight);\n    padding: var(--s-spacing-xx-small);\n    border-bottom: var(--s-border-width-thin) var(--s-color-border-highlight)\n      solid;\n\n    &:hover {\n      border-color: var(--s-color-border-highlight);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-highlight);\n    }\n  }\n  .tab-item:hover {\n    border-bottom: var(--s-border-width-thin)\n      var(--s-color-border-default-hover) solid;\n    color: var(--s-color-content-default);\n    padding: var(--s-spacing-xx-small);\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);