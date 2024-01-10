"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9239],{"./src/stories/SideBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_app_components_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/SideBar/SideBar.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Components/SideBar",component:_app_components_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_1__.Ke,parameters:{layout:"fullscreen"},args:{toggle:!1},tags:["autodocs"]};var Default=function Template(args){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpenSideBar=_useState[0],setIsOpenSideBar=_useState[1];return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_app_components_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_1__.Ke,{brand:"/logo-sm.svg",setToggleSideBar:function toggleSideBar(){setIsOpenSideBar(!isOpenSideBar)},toggle:!0},__jsx(_app_components_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_1__.__,{title:"SideBar"},__jsx(_app_components_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_1__.R6,{icon:"settings",title:"Item 1"},__jsx(_app_components_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_1__.Tk,{title:"Sub Item 1"})),__jsx(_app_components_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_1__.R6,{icon:"settings",title:"Item 2"},__jsx(_app_components_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_1__.Tk,{title:"Sub Item 1"})))))}.bind({});Default.args={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [isOpenSideBar, setIsOpenSideBar] = useState(false);\n  const toggleSideBar = () => {\n    setIsOpenSideBar(!isOpenSideBar);\n  };\n  return <>\r\n      <SideBar brand="/logo-sm.svg" setToggleSideBar={toggleSideBar} toggle={true}>\r\n        <SideBarList title="SideBar">\r\n          <SidebarItem icon="settings" title="Item 1">\r\n            <SidebarSubItem title="Sub Item 1" />\r\n          </SidebarItem>\r\n          <SidebarItem icon="settings" title="Item 2">\r\n            <SidebarSubItem title="Sub Item 1" />\r\n          </SidebarItem>\r\n        </SideBarList>\r\n      </SideBar>\r\n    </>;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/app/components/Brand/Brand.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Brand_Brand});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Brand=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Brand/Brand.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Brand.Z,options);Brand.Z&&Brand.Z.locals&&Brand.Z.locals;var __jsx=react.createElement,Brand_Brand_Brand=function Brand(_ref){var src=_ref.src,alt=_ref.alt,size=_ref.size;return __jsx("img",{className:"brand-".concat(size),src,alt})};Brand_Brand_Brand.displayName="Brand";const components_Brand_Brand=Brand_Brand_Brand;try{Brand_Brand_Brand.displayName="Brand",Brand_Brand_Brand.__docgenInfo={description:"",displayName:"Brand",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Brand/Brand.tsx#Brand"]={docgenInfo:Brand_Brand_Brand.__docgenInfo,name:"Brand",path:"src/app/components/Brand/Brand.tsx#Brand"})}catch(__react_docgen_typescript_loader_error){}},"./src/app/components/ButtonIcon/ButtonIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>ButtonIcon_ButtonIcon_ButtonIcon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ButtonIcon=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/ButtonIcon/ButtonIcon.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ButtonIcon.Z,options);ButtonIcon.Z&&ButtonIcon.Z.locals&&ButtonIcon.Z.locals;var __jsx=react.createElement,ButtonIcon_ButtonIcon_ButtonIcon=function ButtonIcon(_ref){var size=_ref.size,type=_ref.type,typeIcon=_ref.typeIcon,variant=_ref.variant,onClick=_ref.onClick,disable=_ref.disable;return __jsx("button",{disabled:disable,onClick,className:"button-icon ".concat(variant," ").concat(size," ").concat(type)},typeIcon&&__jsx(Icon.Z,{icon:typeIcon,size}))};ButtonIcon_ButtonIcon_ButtonIcon.displayName="ButtonIcon";try{ButtonIcon_ButtonIcon_ButtonIcon.displayName="ButtonIcon",ButtonIcon_ButtonIcon_ButtonIcon.__docgenInfo={description:"",displayName:"ButtonIcon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'""'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"on-color"'}]}},disable:{defaultValue:null,description:"",name:"disable",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"plain"'},{value:'"default"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},typeIcon:{defaultValue:null,description:"",name:"typeIcon",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/ButtonIcon/ButtonIcon.tsx#ButtonIcon"]={docgenInfo:ButtonIcon_ButtonIcon_ButtonIcon.__docgenInfo,name:"ButtonIcon",path:"src/app/components/ButtonIcon/ButtonIcon.tsx#ButtonIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/app/components/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Icon_Icon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Icon=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Icon/Icon.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Icon.Z,options);Icon.Z&&Icon.Z.locals&&Icon.Z.locals;var __jsx=react.createElement,Icon_Icon_Icon=function Icon(_ref){var size=_ref.size,fill=_ref.fill,icon=_ref.icon,sizeClass=size,fillStyle="'FILL' ".concat(fill||0);return __jsx(react.Fragment,null,__jsx("span",{style:{fontVariationSettings:fillStyle},className:"material-symbols-outlined ".concat(sizeClass)},icon))};const components_Icon_Icon=Icon_Icon_Icon;try{Icon_Icon_Icon.displayName="Icon",Icon_Icon_Icon.__docgenInfo={description:"",displayName:"Icon",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string | undefined"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Icon/Icon.tsx#Icon"]={docgenInfo:Icon_Icon_Icon.__docgenInfo,name:"Icon",path:"src/app/components/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/app/components/SideBar/SideBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ke:()=>SideBar_SideBar_SideBar,__:()=>SideBarList,R6:()=>SidebarItem,Tk:()=>SidebarSubItem});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),SideBar=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/SideBar/SideBar.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(SideBar.Z,options);SideBar.Z&&SideBar.Z.locals&&SideBar.Z.locals;var Brand=__webpack_require__("./src/app/components/Brand/Brand.tsx"),Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),ButtonIcon=__webpack_require__("./src/app/components/ButtonIcon/ButtonIcon.tsx"),__jsx=react.createElement,SideBar_SideBar_SideBar=function SideBar(_ref){var brand=_ref.brand,children=_ref.children,toggle=_ref.toggle,setToggleSideBar=_ref.setToggleSideBar,closeSideBar=function closeSideBar(){setToggleSideBar(!1)};return __jsx(react.Fragment,null,__jsx("div",{className:"sidebar ".concat(toggle?"open":"close")},__jsx("div",{className:"brand"},__jsx(Brand.Z,{src:brand,size:"sm"})),children),__jsx("div",{onClick:closeSideBar,className:"sidebar-overlay ".concat(toggle?"open":"close")},__jsx(ButtonIcon.E,{variant:"on-color",onClick:closeSideBar,type:"plain",size:"md",typeIcon:"close"})))},SideBarList=function SideBarList(_ref2){var title=_ref2.title,children=_ref2.children;return __jsx(react.Fragment,null,__jsx("div",{className:"sidebar-list"},__jsx("h1",{className:"sidebar-list-title"},title),children))},SidebarItem=function SidebarItem(_ref3){var title=_ref3.title,icon=_ref3.icon,children=_ref3.children,_useState=(0,react.useState)(!1),toggleActive=_useState[0],setToggleActive=_useState[1],toggleKey=function toggleKey(){setToggleActive(!toggleActive)},handleKeyPress=function handleKeyPress(event){"Enter"===event.key&&children&&toggleKey()};return __jsx(react.Fragment,null,__jsx("div",{className:"sidebar-item  ".concat(toggleActive&&"active"),onClick:children?toggleKey:void 0,tabIndex:0,onKeyDown:handleKeyPress},__jsx("div",{className:"sidebar-item-header"},__jsx(Icon.Z,{size:"sm",icon,fill:1}),__jsx("div",null,title)),children&&__jsx("div",{onKeyDown:handleKeyPress,onClick:toggleKey,className:"".concat(!0===toggleActive?"sidebar-item-with-action-open":"sidebar-item-with-action-close")},__jsx(Icon.Z,{size:"sm",icon:"keyboard_arrow_down"}))),toggleActive&&__jsx("div",null,children))},SidebarSubItem=function SidebarSubItem(_ref4){var title=_ref4.title;return __jsx(react.Fragment,null,__jsx("div",{className:"sidebar-sub-item",tabIndex:0},__jsx("div",null,__jsx(Icon.Z,{size:"sm",icon:"subdirectory_arrow_right",fill:1})),__jsx("div",null,title)))};try{SideBar_SideBar_SideBar.displayName="SideBar",SideBar_SideBar_SideBar.__docgenInfo={description:"",displayName:"SideBar",props:{brand:{defaultValue:null,description:"",name:"brand",required:!0,type:{name:"string"}},toggle:{defaultValue:null,description:"",name:"toggle",required:!1,type:{name:"boolean"}},setToggleSideBar:{defaultValue:null,description:"",name:"setToggleSideBar",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/SideBar/SideBar.tsx#SideBar"]={docgenInfo:SideBar_SideBar_SideBar.__docgenInfo,name:"SideBar",path:"src/app/components/SideBar/SideBar.tsx#SideBar"})}catch(__react_docgen_typescript_loader_error){}try{SideBarList.displayName="SideBarList",SideBarList.__docgenInfo={description:"",displayName:"SideBarList",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/SideBar/SideBar.tsx#SideBarList"]={docgenInfo:SideBarList.__docgenInfo,name:"SideBarList",path:"src/app/components/SideBar/SideBar.tsx#SideBarList"})}catch(__react_docgen_typescript_loader_error){}try{SidebarItem.displayName="SidebarItem",SidebarItem.__docgenInfo={description:"",displayName:"SidebarItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/SideBar/SideBar.tsx#SidebarItem"]={docgenInfo:SidebarItem.__docgenInfo,name:"SidebarItem",path:"src/app/components/SideBar/SideBar.tsx#SidebarItem"})}catch(__react_docgen_typescript_loader_error){}try{SidebarSubItem.displayName="SidebarSubItem",SidebarSubItem.__docgenInfo={description:"",displayName:"SidebarSubItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/SideBar/SideBar.tsx#SidebarSubItem"]={docgenInfo:SidebarSubItem.__docgenInfo,name:"SidebarSubItem",path:"src/app/components/SideBar/SideBar.tsx#SidebarSubItem"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Brand/Brand.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".brand{display:flex}.brand-sm{height:24px}.brand-md{height:32px}.brand-lg{height:40px}","",{version:3,sources:["webpack://./src/app/components/Brand/Brand.scss"],names:[],mappings:"AAAA,OACE,YAAA,CAGF,UACE,WAAA,CAGF,UACE,WAAA,CAGF,UACE,WAAA",sourcesContent:[".brand {\n  display: flex;\n}\n\n.brand-sm {\n  height: 24px;\n}\n\n.brand-md {\n  height: 32px;\n}\n\n.brand-lg {\n  height: 40px;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/ButtonIcon/ButtonIcon.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".button-icon{display:flex;align-items:center;border:none;padding:0;cursor:pointer}.button-icon.md.plain{height:24px}.button-icon.lg.plain{height:32px}.button-icon.plain{border-radius:var(--s-border-radius-small);color:var(--s-color-content-default);background-color:rgba(0,0,0,0)}.button-icon.plain:hover{background-color:var(--s-color-fill-default-hover)}.button-icon.plain.on-color{color:var(--s-color-content-on-color)}.button-icon.plain.on-color:hover{background-color:rgba(255,255,255,.16)}.button-icon.plain:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button-icon.plain:disabled{cursor:not-allowed;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable)}.button-icon.sm.default>*{padding:var(--s-spacing-nano)}.button-icon.md.default>*{padding:var(--s-spacing-xx-small);font-size:24px}.button-icon.default{border-radius:4px;width:min-content;height:min-content}.button-icon.default:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button-icon.default:disabled{cursor:not-allowed;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable)}.button-icon.default.primary{background-color:var(--s-color-fill-highlight);color:var(--s-color-content-on-color)}.button-icon.default.primary:hover{background-color:var(--s-color-fill-highlight-hover)}.button-icon.default.secondary{border:var(--s-border-width-hairline) solid var(--s-color-border-default);background-color:var(--s-color-fill-default);color:var(--s-color-content-default)}.button-icon.default.secondary:hover{background-color:var(--s-color-fill-default-hover)}.button-icon.default.success{background-color:var(--s-color-fill-success);color:var(--s-color-content-on-color)}.button-icon.default.success:hover{background-color:var(--s-color-fill-success-hover)}.button-icon.default.warning{background-color:var(--s-color-fill-warning);color:var(--s-color-content-on-color)}.button-icon.default.warning:hover{background-color:var(--s-color-fill-warning-hover)}","",{version:3,sources:["webpack://./src/app/components/ButtonIcon/ButtonIcon.scss"],names:[],mappings:"AAAA,aACE,YAAA,CACA,kBAAA,CACA,WAAA,CACA,SAAA,CACA,cAAA,CAEA,sBACE,WAAA,CAGF,sBACE,WAAA,CAGF,mBACE,0CAAA,CACA,oCAAA,CACA,8BAAA,CAEA,yBACE,kDAAA,CAGF,4BACE,qCAAA,CAEA,kCACE,sCAAA,CAIJ,iCACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,4BACE,kBAAA,CACA,4CAAA,CACA,oCAAA,CAIJ,0BACE,6BAAA,CAGF,0BACE,iCAAA,CACA,cAAA,CAGF,qBACE,iBAAA,CACA,iBAAA,CACA,kBAAA,CAEA,mCACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,8BACE,kBAAA,CACA,4CAAA,CACA,oCAAA,CAGF,6BACE,8CAAA,CACA,qCAAA,CAEA,mCACE,oDAAA,CAIJ,+BACE,yEAAA,CACA,4CAAA,CACA,oCAAA,CAEA,qCACE,kDAAA,CAIJ,6BACE,4CAAA,CACA,qCAAA,CAEA,mCACE,kDAAA,CAIJ,6BACE,4CAAA,CACA,qCAAA,CAEA,mCACE,kDAAA",sourcesContent:[".button-icon {\n  display: flex;\n  align-items: center;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n\n  &.md.plain {\n    height: 24px;\n  }\n\n  &.lg.plain {\n    height: 32px;\n  }\n\n  &.plain {\n    border-radius: var(--s-border-radius-small);\n    color: var(--s-color-content-default);\n    background-color: transparent;\n\n    &:hover {\n      background-color: var(--s-color-fill-default-hover);\n    }\n\n    &.on-color {\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: rgba(white, 0.16);\n      }\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      cursor: not-allowed;\n      background-color: var(--s-color-fill-disable);\n      color: var(--s-color-content-disable);\n    }\n  }\n\n  &.sm.default > * {\n    padding: var(--s-spacing-nano);\n  }\n\n  &.md.default > * {\n    padding: var(--s-spacing-xx-small);\n    font-size: 24px;\n  }\n\n  &.default {\n    border-radius: 4px;\n    width: min-content;\n    height: min-content;\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      cursor: not-allowed;\n      background-color: var(--s-color-fill-disable);\n      color: var(--s-color-content-disable);\n    }\n\n    &.primary {\n      background-color: var(--s-color-fill-highlight);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-highlight-hover);\n      }\n    }\n\n    &.secondary {\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n\n      &:hover {\n        background-color: var(--s-color-fill-default-hover);\n      }\n    }\n\n    &.success {\n      background-color: var(--s-color-fill-success);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-success-hover);\n      }\n    }\n\n    &.warning {\n      background-color: var(--s-color-fill-warning);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-warning-hover);\n      }\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Icon/Icon.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";.material-symbols-outlined{font-weight:300;display:flex;user-select:none}.material-symbols-outlined.sm{font-size:16px}.material-symbols-outlined.md{font-size:24px}.material-symbols-outlined.lg{font-size:32px}',"",{version:3,sources:["webpack://./src/app/components/Icon/Icon.scss"],names:[],mappings:"AAAQ,6HAAA,CAER,2BACE,eAAA,CACA,YAAA,CACA,gBAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");\n\n.material-symbols-outlined {\n  font-weight: 300;\n  display: flex;\n  user-select: none;\n}\n\n.material-symbols-outlined.sm {\n  font-size: 16px;\n}\n\n.material-symbols-outlined.md {\n  font-size: 24px;\n}\n\n.material-symbols-outlined.lg {\n  font-size: 32px;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/SideBar/SideBar.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".sidebar{position:sticky;top:0;height:100vh;width:256px;grid-area:aside;background-color:var(--s-color-fill-default);border-right:var(--s-border-width-hairline) solid var(--s-color-border-default);box-sizing:border-box;display:flex;flex-direction:column;gap:var(--s-spacing-large);padding:var(--s-spacing-medium) var(--s-spacing-xx-small);overflow-x:hidden;overflow-y:auto;transition:.3s}.sidebar::-webkit-scrollbar{width:8px;border-radius:12px}.sidebar::-webkit-scrollbar-thumb{background:var(--s-color-fill-default-light);border-radius:12px}.sidebar .brand{padding:0 var(--s-spacing-xx-small)}.sidebar .sidebar-list{display:flex;flex-direction:column}.sidebar .sidebar-list .sidebar-list-title{text-transform:uppercase;font:var(--s-typography-caption-strong);color:var(--s-color-content-light);padding:0 var(--s-spacing-xx-small)}.sidebar .sidebar-list .sidebar-item{transition:.1s ease-out;cursor:pointer;display:flex;justify-content:space-between;align-items:center;padding:var(--s-spacing-xx-small);border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-default);color:var(--s-color-content-default)}.sidebar .sidebar-list .sidebar-item:hover{background-color:var(--s-color-fill-default-hover)}.sidebar .sidebar-list .sidebar-item:focus-visible{z-index:2;outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:-2px;outline-style:solid}.sidebar .sidebar-list .sidebar-item.active{background-color:var(--s-color-fill-highlight-light);color:var(--s-color-content-highlight)}.sidebar .sidebar-list .sidebar-item.active .sidebar-item-header{color:var(--s-color-content-highlight)}.sidebar .sidebar-list .sidebar-item-header{font:var(--s-typography-paragraph-strong);color:var(--s-color-content-default);display:flex;align-items:center;gap:var(--s-spacing-xx-small)}.sidebar .sidebar-list .sidebar-sub-item{cursor:pointer;padding:var(--s-spacing-xx-small);display:flex;gap:var(--s-spacing-xx-small);align-items:center;padding:var(--s-spacing-xx-small);border-radius:var(--s-border-radius-small);font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);background-color:var(--s-color-fill-default)}.sidebar .sidebar-list .sidebar-sub-item div:first-child{opacity:0}.sidebar .sidebar-list .sidebar-sub-item:hover{background-color:var(--s-color-fill-default-hover)}.sidebar .sidebar-list .sidebar-sub-item:hover div:first-child{opacity:1}.sidebar .sidebar-list .sidebar-sub-item:focus-visible{z-index:2;outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:-2px;outline-style:solid}.sidebar .sidebar-list .sidebar-sub-item:active{background-color:var(--s-color-fill-highlight-light);color:var(--s-color-content-highlight)}.sidebar .sidebar-list .sidebar-item-with-action-open{transform:rotate(-180deg);transition:.3s ease-out}.sidebar .sidebar-list .sidebar-item-with-action-close{transition:.3s ease-out}.sidebar-overlay{display:none}@media screen and (max-width: 768px){.sidebar.close{border:none;left:-100vw;top:0;z-index:999;position:fixed;display:flex;transition:.5s}.sidebar.open{width:256px;top:0;left:0;z-index:999;transition:.5s;position:fixed;display:flex}.sidebar.open::-webkit-scrollbar{width:0}.sidebar-overlay{top:0;right:0;z-index:998;position:fixed;background-color:var(--s-color-background-overlay);height:100vh;width:100%;justify-content:end;padding:24px}.sidebar-overlay.close{transition:.3s;opacity:0}.sidebar-overlay.open{top:0;right:0;display:flex;transition:.3s;opacity:1}}","",{version:3,sources:["webpack://./src/app/components/SideBar/SideBar.scss"],names:[],mappings:"AAAA,SACE,eAAA,CACA,KAAA,CACA,YAAA,CACA,WAAA,CACA,eAAA,CACA,4CAAA,CACA,+EAAA,CAEA,qBAAA,CACA,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,yDAAA,CACA,iBAAA,CACA,eAAA,CACA,cAAA,CAEA,4BACE,SAAA,CACA,kBAAA,CAGF,kCACE,4CAAA,CACA,kBAAA,CAGF,gBACE,mCAAA,CAGF,uBACE,YAAA,CACA,qBAAA,CAEA,2CACE,wBAAA,CACA,uCAAA,CACA,kCAAA,CACA,mCAAA,CAGF,qCACE,uBAAA,CACA,cAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,iCAAA,CACA,0CAAA,CACA,4CAAA,CACA,oCAAA,CAGF,2CACE,kDAAA,CAGF,mDACE,SAAA,CACA,wCAAA,CACA,2CAAA,CACA,mBAAA,CACA,mBAAA,CAGF,4CACE,oDAAA,CACA,sCAAA,CACA,iEACE,sCAAA,CAIJ,4CACE,yCAAA,CACA,oCAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CAGF,yCACE,cAAA,CACA,iCAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,iCAAA,CACA,0CAAA,CACA,0CAAA,CACA,oCAAA,CACA,4CAAA,CAEA,yDACE,SAAA,CAIJ,+CACE,kDAAA,CACA,+DACE,SAAA,CAIJ,uDACE,SAAA,CACA,wCAAA,CACA,2CAAA,CACA,mBAAA,CACA,mBAAA,CAGF,gDACE,oDAAA,CACA,sCAAA,CAGF,sDACE,yBAAA,CACA,uBAAA,CAGF,uDACE,uBAAA,CAKN,iBACE,YAAA,CAGF,qCACE,eACE,WAAA,CACA,WAAA,CACA,KAAA,CACA,WAAA,CACA,cAAA,CACA,YAAA,CACA,cAAA,CAGF,cACE,WAAA,CACA,KAAA,CACA,MAAA,CACA,WAAA,CACA,cAAA,CACA,cAAA,CACA,YAAA,CAEA,iCACE,OAAA,CAIJ,iBACE,KAAA,CACA,OAAA,CACA,WAAA,CACA,cAAA,CACA,kDAAA,CACA,YAAA,CACA,UAAA,CACA,mBAAA,CACA,YAAA,CAGF,uBACE,cAAA,CACA,SAAA,CAGF,sBACE,KAAA,CACA,OAAA,CACA,YAAA,CACA,cAAA,CACA,SAAA,CAAA",sourcesContent:[".sidebar {\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  width: 256px;\n  grid-area: aside;\n  background-color: var(--s-color-fill-default);\n  border-right: var(--s-border-width-hairline) solid\n    var(--s-color-border-default);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-large);\n  padding: var(--s-spacing-medium) var(--s-spacing-xx-small);\n  overflow-x: hidden;\n  overflow-y: auto;\n  transition: 0.3s;\n\n  &::-webkit-scrollbar {\n    width: 8px;\n    border-radius: 12px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: var(--s-color-fill-default-light);\n    border-radius: 12px;\n  }\n\n  .brand {\n    padding: 0 var(--s-spacing-xx-small);\n  }\n\n  .sidebar-list {\n    display: flex;\n    flex-direction: column;\n\n    .sidebar-list-title {\n      text-transform: uppercase;\n      font: var(--s-typography-caption-strong);\n      color: var(--s-color-content-light);\n      padding: 0 var(--s-spacing-xx-small);\n    }\n\n    .sidebar-item {\n      transition: 0.1s ease-out;\n      cursor: pointer;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: var(--s-spacing-xx-small);\n      border-radius: var(--s-border-radius-small);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n    }\n\n    .sidebar-item:hover {\n      background-color: var(--s-color-fill-default-hover);\n    }\n\n    .sidebar-item:focus-visible {\n      z-index: 2;\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: -2px;\n      outline-style: solid;\n    }\n\n    .sidebar-item.active {\n      background-color: var(--s-color-fill-highlight-light);\n      color: var(--s-color-content-highlight);\n      .sidebar-item-header {\n        color: var(--s-color-content-highlight);\n      }\n    }\n\n    .sidebar-item-header {\n      font: var(--s-typography-paragraph-strong);\n      color: var(--s-color-content-default);\n      display: flex;\n      align-items: center;\n      gap: var(--s-spacing-xx-small);\n    }\n\n    .sidebar-sub-item {\n      cursor: pointer;\n      padding: var(--s-spacing-xx-small);\n      display: flex;\n      gap: var(--s-spacing-xx-small);\n      align-items: center;\n      padding: var(--s-spacing-xx-small);\n      border-radius: var(--s-border-radius-small);\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-default);\n      background-color: var(--s-color-fill-default);\n\n      div:first-child {\n        opacity: 0;\n      }\n    }\n\n    .sidebar-sub-item:hover {\n      background-color: var(--s-color-fill-default-hover);\n      div:first-child {\n        opacity: 1;\n      }\n    }\n\n    .sidebar-sub-item:focus-visible {\n      z-index: 2;\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: -2px;\n      outline-style: solid;\n    }\n\n    .sidebar-sub-item:active {\n      background-color: var(--s-color-fill-highlight-light);\n      color: var(--s-color-content-highlight);\n    }\n\n    .sidebar-item-with-action-open {\n      transform: rotate(-180deg);\n      transition: 0.3s ease-out;\n    }\n\n    .sidebar-item-with-action-close {\n      transition: 0.3s ease-out;\n    }\n  }\n}\n\n.sidebar-overlay {\n  display: none;\n}\n\n@media screen and (max-width: 768px) {\n  .sidebar.close {\n    border: none;\n    left: -100vw;\n    top: 0;\n    z-index: 999;\n    position: fixed;\n    display: flex;\n    transition: 0.5s;\n  }\n\n  .sidebar.open {\n    width: 256px;\n    top: 0;\n    left: 0;\n    z-index: 999;\n    transition: 0.5s;\n    position: fixed;\n    display: flex;\n\n    &::-webkit-scrollbar {\n      width: 0;\n    }\n  }\n\n  .sidebar-overlay {\n    top: 0;\n    right: 0;\n    z-index: 998;\n    position: fixed;\n    background-color: var(--s-color-background-overlay);\n    height: 100vh;\n    width: 100%;\n    justify-content: end;\n    padding: 24px;\n  }\n\n  .sidebar-overlay.close {\n    transition: 0.3s;\n    opacity: 0;\n  }\n\n  .sidebar-overlay.open {\n    top: 0;\n    right: 0;\n    display: flex;\n    transition: 0.3s;\n    opacity: 1;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);