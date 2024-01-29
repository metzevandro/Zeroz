"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8134],{"./src/stories/AppShell.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AppShell_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),AppShell=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/AppShell/AppShell.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(AppShell.Z,options);AppShell.Z&&AppShell.Z.locals&&AppShell.Z.locals;var __jsx=react.createElement,AppShell_AppShell_AppShell=function AppShell(_ref){var children=_ref.children;return __jsx("div",{className:"app-shell"},children)};AppShell_AppShell_AppShell.displayName="AppShell";const components_AppShell_AppShell=AppShell_AppShell_AppShell;try{AppShell_AppShell_AppShell.displayName="AppShell",AppShell_AppShell_AppShell.__docgenInfo={description:"",displayName:"AppShell",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/AppShell/AppShell.tsx#AppShell"]={docgenInfo:AppShell_AppShell_AppShell.__docgenInfo,name:"AppShell",path:"src/app/components/AppShell/AppShell.tsx#AppShell"})}catch(__react_docgen_typescript_loader_error){}var Sidebar=__webpack_require__("./src/app/components/Sidebar/Sidebar.tsx"),Header=__webpack_require__("./src/app/components/Header/Header.tsx"),DropdownMenu=__webpack_require__("./src/app/components/DropdownMenu/DropdownMenu.tsx"),Page=__webpack_require__("./src/app/components/Page/Page.tsx"),Breadcrumb=__webpack_require__("./src/app/components/Breadcrumb/Breadcrumb.tsx"),AppShell_stories_jsx=(__webpack_require__("./src/stories/css/main.scss"),react.createElement);const AppShell_stories={title:"Templates/AppShell",component:components_AppShell_AppShell,parameters:{layout:"fullscreen"},tags:["autodocs"]};var Default=function Template(args){var _useState=(0,react.useState)(!1),isOpenSidebar=_useState[0],setIsOpenSidebar=_useState[1],toggleSidebar=function toggleSidebar(){setIsOpenSidebar(!isOpenSidebar)};return AppShell_stories_jsx(react.Fragment,null,AppShell_stories_jsx(components_AppShell_AppShell,null,AppShell_stories_jsx(Sidebar.YE,{setToggleSidebar:toggleSidebar,brand:"/logo-sm.svg",toggle:isOpenSidebar},AppShell_stories_jsx(Sidebar.wb,{title:"Sidebar"},AppShell_stories_jsx(Sidebar.R6,{icon:"settings",title:"Settings"}))),AppShell_stories_jsx(Header.h,{breadcrumb:AppShell_stories_jsx(react.Fragment,null,AppShell_stories_jsx(Breadcrumb.c,{pageName:"Breadcrumb"},AppShell_stories_jsx(Breadcrumb.a,{pageName:"Breadcrumb"}))),onClick:toggleSidebar},AppShell_stories_jsx(Header.X,{name:"Username"},AppShell_stories_jsx(DropdownMenu.GV,{dropDownMenu:!0},AppShell_stories_jsx(DropdownMenu.Cs,{content:"Settings"}),AppShell_stories_jsx(DropdownMenu.M8,{content:"Item 1"}),AppShell_stories_jsx(DropdownMenu.M8,{content:"Item 2"}),AppShell_stories_jsx(DropdownMenu.M8,{content:"Settings",typeIcon:"settings"})))),AppShell_stories_jsx(Page.Z,{columnLayout:"1",namePage:"Page Name",buttonContentSecondary:"Button",withActionSecondary:!0,buttonContentPrimary:"Button",withActionPrimary:!0,withBackButton:!0})))}.bind({});Default.args={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [isOpenSidebar, setIsOpenSidebar] = useState(false);\n  const toggleSidebar = () => {\n    setIsOpenSidebar(!isOpenSidebar);\n  };\n  return <>\r\n      <AppShell>\r\n        <Sidebar setToggleSidebar={toggleSidebar} brand="/logo-sm.svg" toggle={isOpenSidebar}>\r\n          <SidebarList title="Sidebar">\r\n            <SidebarItem icon="settings" title="Settings" />\r\n          </SidebarList>\r\n        </Sidebar>\r\n        <Header breadcrumb={<>\r\n              <BreadcrumbRoot pageName="Breadcrumb">\r\n                <Breadcrumb pageName="Breadcrumb" />\r\n              </BreadcrumbRoot>\r\n            </>} onClick={toggleSidebar}>\r\n          <HeaderProfile name="Username">\r\n            <DropDownMenu dropDownMenu>\r\n              <DropDownMenuTitle content="Settings" />\r\n              <DropDownMenuItem content="Item 1" />\r\n              <DropDownMenuItem content="Item 2" />\r\n              <DropDownMenuItem content="Settings" typeIcon="settings" />\r\n            </DropDownMenu>\r\n          </HeaderProfile>\r\n        </Header>\r\n        <Page columnLayout="1" namePage="Page Name" buttonContentSecondary="Button" withActionSecondary buttonContentPrimary="Button" withActionPrimary withBackButton></Page>\r\n      </AppShell>\r\n    </>;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/app/components/Brand/Brand.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Brand_Brand});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Brand=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Brand/Brand.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Brand.Z,options);Brand.Z&&Brand.Z.locals&&Brand.Z.locals;var __jsx=react.createElement,Brand_Brand_Brand=function Brand(_ref){var src=_ref.src,alt=_ref.alt,size=_ref.size;return __jsx("img",{className:"brand-".concat(size),src,alt})};Brand_Brand_Brand.displayName="Brand";const components_Brand_Brand=Brand_Brand_Brand;try{Brand_Brand_Brand.displayName="Brand",Brand_Brand_Brand.__docgenInfo={description:"",displayName:"Brand",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Brand/Brand.tsx#Brand"]={docgenInfo:Brand_Brand_Brand.__docgenInfo,name:"Brand",path:"src/app/components/Brand/Brand.tsx#Brand"})}catch(__react_docgen_typescript_loader_error){}},"./src/app/components/Sidebar/Sidebar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{YE:()=>Sidebar_Sidebar_Sidebar,R6:()=>SidebarItem,wb:()=>SidebarList,Tk:()=>SidebarSubItem});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Sidebar=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Sidebar/Sidebar.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Sidebar.Z,options);Sidebar.Z&&Sidebar.Z.locals&&Sidebar.Z.locals;var Brand=__webpack_require__("./src/app/components/Brand/Brand.tsx"),Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),ButtonIcon=__webpack_require__("./src/app/components/ButtonIcon/ButtonIcon.tsx"),__jsx=react.createElement,Sidebar_Sidebar_Sidebar=function Sidebar(_ref){var brand=_ref.brand,children=_ref.children,toggle=_ref.toggle,setToggleSidebar=_ref.setToggleSidebar,closeSidebar=function closeSidebar(){setToggleSidebar(!1)};return __jsx(react.Fragment,null,__jsx("div",{className:"Sidebar ".concat(toggle?"open":"close")},__jsx("div",{className:"brand"},__jsx(Brand.Z,{src:brand,size:"sm"})),children),__jsx("div",{onClick:closeSidebar,className:"Sidebar-overlay ".concat(toggle?"open":"close")},__jsx(ButtonIcon.E,{variant:"on-color",onClick:closeSidebar,type:"plain",size:"md",typeIcon:"close"})))},SidebarList=function SidebarList(_ref2){var title=_ref2.title,children=_ref2.children;return __jsx(react.Fragment,null,__jsx("div",{className:"Sidebar-list"},__jsx("h1",{className:"Sidebar-list-title"},title),children))},SidebarItem=function SidebarItem(_ref3){var title=_ref3.title,icon=_ref3.icon,children=_ref3.children,_useState=(0,react.useState)(!1),toggleActive=_useState[0],setToggleActive=_useState[1],toggleKey=function toggleKey(){setToggleActive(!toggleActive)},handleKeyPress=function handleKeyPress(event){"Enter"===event.key&&children&&toggleKey()};return __jsx(react.Fragment,null,__jsx("div",{className:"Sidebar-item  ".concat(toggleActive&&"active"),onClick:children?toggleKey:void 0,tabIndex:0,onKeyDown:handleKeyPress},__jsx("div",{className:"Sidebar-item-header"},__jsx(Icon.Z,{size:"sm",icon,fill:1}),__jsx("div",null,title)),children&&__jsx("div",{onKeyDown:handleKeyPress,onClick:toggleKey,className:"".concat(!0===toggleActive?"Sidebar-item-with-action-open":"Sidebar-item-with-action-close")},__jsx(Icon.Z,{size:"sm",icon:"keyboard_arrow_down"}))),toggleActive&&__jsx("div",null,children))},SidebarSubItem=function SidebarSubItem(_ref4){var title=_ref4.title;return __jsx(react.Fragment,null,__jsx("div",{className:"Sidebar-sub-item",tabIndex:0},__jsx("div",null,__jsx(Icon.Z,{size:"sm",icon:"subdirectory_arrow_right",fill:1})),__jsx("div",null,title)))};try{Sidebar_Sidebar_Sidebar.displayName="Sidebar",Sidebar_Sidebar_Sidebar.__docgenInfo={description:"",displayName:"Sidebar",props:{brand:{defaultValue:null,description:"",name:"brand",required:!0,type:{name:"string"}},toggle:{defaultValue:null,description:"",name:"toggle",required:!1,type:{name:"boolean"}},setToggleSidebar:{defaultValue:null,description:"",name:"setToggleSidebar",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Sidebar/Sidebar.tsx#Sidebar"]={docgenInfo:Sidebar_Sidebar_Sidebar.__docgenInfo,name:"Sidebar",path:"src/app/components/Sidebar/Sidebar.tsx#Sidebar"})}catch(__react_docgen_typescript_loader_error){}try{SidebarList.displayName="SidebarList",SidebarList.__docgenInfo={description:"",displayName:"SidebarList",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Sidebar/Sidebar.tsx#SidebarList"]={docgenInfo:SidebarList.__docgenInfo,name:"SidebarList",path:"src/app/components/Sidebar/Sidebar.tsx#SidebarList"})}catch(__react_docgen_typescript_loader_error){}try{SidebarItem.displayName="SidebarItem",SidebarItem.__docgenInfo={description:"",displayName:"SidebarItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Sidebar/Sidebar.tsx#SidebarItem"]={docgenInfo:SidebarItem.__docgenInfo,name:"SidebarItem",path:"src/app/components/Sidebar/Sidebar.tsx#SidebarItem"})}catch(__react_docgen_typescript_loader_error){}try{SidebarSubItem.displayName="SidebarSubItem",SidebarSubItem.__docgenInfo={description:"",displayName:"SidebarSubItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Sidebar/Sidebar.tsx#SidebarSubItem"]={docgenInfo:SidebarSubItem.__docgenInfo,name:"SidebarSubItem",path:"src/app/components/Sidebar/Sidebar.tsx#SidebarSubItem"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/AppShell/AppShell.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.app-shell{display:grid;background-color:var(--s-color-background-default);justify-content:center;align-items:start;grid-template-columns:auto 4fr;grid-template-rows:auto 1fr;grid-template-areas:"aside header" "aside main"}@media screen and (max-width: 768px){.app-shell{height:100%;align-items:start;justify-content:normal;grid-template-columns:1fr;grid-template-areas:"header" "main"}}',"",{version:3,sources:["webpack://./src/app/components/AppShell/AppShell.scss"],names:[],mappings:"AAAA,WACE,YAAA,CACA,kDAAA,CACA,sBAAA,CACA,iBAAA,CACA,8BAAA,CACA,2BAAA,CACA,+CACE,CAIJ,qCACE,WACE,WAAA,CACA,iBAAA,CACA,sBAAA,CACA,yBAAA,CACA,mCACE,CAAA",sourcesContent:['.app-shell {\n  display: grid;\n  background-color: var(--s-color-background-default);\n  justify-content: center;\n  align-items: start;\n  grid-template-columns: auto 4fr;\n  grid-template-rows: auto 1fr;\n  grid-template-areas:\n    "aside header"\n    "aside main";\n}\n\n@media screen and (max-width: 768px) {\n  .app-shell {\n    height: 100%;\n    align-items: start;\n    justify-content: normal;\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      "header"\n      "main";\n  }\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Brand/Brand.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".brand{display:flex}.brand-sm{height:24px}.brand-md{height:32px}.brand-lg{height:40px}","",{version:3,sources:["webpack://./src/app/components/Brand/Brand.scss"],names:[],mappings:"AAAA,OACE,YAAA,CAGF,UACE,WAAA,CAGF,UACE,WAAA,CAGF,UACE,WAAA",sourcesContent:[".brand {\n  display: flex;\n}\n\n.brand-sm {\n  height: 24px;\n}\n\n.brand-md {\n  height: 32px;\n}\n\n.brand-lg {\n  height: 40px;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Sidebar/Sidebar.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Sidebar{position:sticky;top:0;height:100vh;width:256px;grid-area:aside;background-color:var(--s-color-fill-default);border-right:var(--s-border-width-hairline) solid var(--s-color-border-default);box-sizing:border-box;display:flex;flex-direction:column;gap:var(--s-spacing-large);padding:var(--s-spacing-medium) var(--s-spacing-xx-small);overflow-x:hidden;overflow-y:auto;transition:.3s}.Sidebar::-webkit-scrollbar{width:8px;border-radius:12px}.Sidebar::-webkit-scrollbar-thumb{background:var(--s-color-fill-default-light);border-radius:12px}.Sidebar .brand{padding:0 var(--s-spacing-xx-small)}.Sidebar .Sidebar-list{display:flex;flex-direction:column}.Sidebar .Sidebar-list .Sidebar-list-title{text-transform:uppercase;font:var(--s-typography-caption-strong);color:var(--s-color-content-light);padding:0 var(--s-spacing-xx-small)}.Sidebar .Sidebar-list .Sidebar-item{transition:.1s ease-out;cursor:pointer;display:flex;justify-content:space-between;align-items:center;padding:var(--s-spacing-xx-small);border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-default);color:var(--s-color-content-default)}.Sidebar .Sidebar-list .Sidebar-item:hover{background-color:var(--s-color-fill-default-hover)}.Sidebar .Sidebar-list .Sidebar-item:focus-visible{z-index:2;outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:-2px;outline-style:solid}.Sidebar .Sidebar-list .Sidebar-item.active{background-color:var(--s-color-fill-highlight-light);color:var(--s-color-content-highlight)}.Sidebar .Sidebar-list .Sidebar-item.active .Sidebar-item-header{color:var(--s-color-content-highlight)}.Sidebar .Sidebar-list .Sidebar-item-header{font:var(--s-typography-paragraph-strong);color:var(--s-color-content-default);display:flex;align-items:center;gap:var(--s-spacing-xx-small)}.Sidebar .Sidebar-list .Sidebar-sub-item{cursor:pointer;padding:var(--s-spacing-xx-small);display:flex;gap:var(--s-spacing-xx-small);align-items:center;padding:var(--s-spacing-xx-small);border-radius:var(--s-border-radius-small);font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);background-color:var(--s-color-fill-default)}.Sidebar .Sidebar-list .Sidebar-sub-item div:first-child{opacity:0}.Sidebar .Sidebar-list .Sidebar-sub-item:hover{background-color:var(--s-color-fill-default-hover)}.Sidebar .Sidebar-list .Sidebar-sub-item:hover div:first-child{opacity:1}.Sidebar .Sidebar-list .Sidebar-sub-item:focus-visible{z-index:2;outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:-2px;outline-style:solid}.Sidebar .Sidebar-list .Sidebar-sub-item:active{background-color:var(--s-color-fill-highlight-light);color:var(--s-color-content-highlight)}.Sidebar .Sidebar-list .Sidebar-item-with-action-open{transform:rotate(-180deg);transition:.3s ease-out}.Sidebar .Sidebar-list .Sidebar-item-with-action-close{transition:.3s ease-out}.Sidebar-overlay{display:none}@media screen and (max-width: 768px){.Sidebar.close{border:none;left:-100vw;top:0;z-index:999;position:fixed;display:flex;transition:.5s}.Sidebar.open{width:256px;top:0;left:0;z-index:999;transition:.5s;position:fixed;display:flex}.Sidebar.open::-webkit-scrollbar{width:0}.Sidebar-overlay{top:0;right:0;z-index:998;position:fixed;background-color:var(--s-color-background-overlay);height:100vh;width:100%;justify-content:end;padding:24px}.Sidebar-overlay.close{transition:.3s;opacity:0}.Sidebar-overlay.open{top:0;right:0;display:flex;transition:.3s;opacity:1}}","",{version:3,sources:["webpack://./src/app/components/Sidebar/Sidebar.scss"],names:[],mappings:"AAAA,SACE,eAAA,CACA,KAAA,CACA,YAAA,CACA,WAAA,CACA,eAAA,CACA,4CAAA,CACA,+EAAA,CAEA,qBAAA,CACA,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,yDAAA,CACA,iBAAA,CACA,eAAA,CACA,cAAA,CAEA,4BACE,SAAA,CACA,kBAAA,CAGF,kCACE,4CAAA,CACA,kBAAA,CAGF,gBACE,mCAAA,CAGF,uBACE,YAAA,CACA,qBAAA,CAEA,2CACE,wBAAA,CACA,uCAAA,CACA,kCAAA,CACA,mCAAA,CAGF,qCACE,uBAAA,CACA,cAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,iCAAA,CACA,0CAAA,CACA,4CAAA,CACA,oCAAA,CAGF,2CACE,kDAAA,CAGF,mDACE,SAAA,CACA,wCAAA,CACA,2CAAA,CACA,mBAAA,CACA,mBAAA,CAGF,4CACE,oDAAA,CACA,sCAAA,CACA,iEACE,sCAAA,CAIJ,4CACE,yCAAA,CACA,oCAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CAGF,yCACE,cAAA,CACA,iCAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,iCAAA,CACA,0CAAA,CACA,0CAAA,CACA,oCAAA,CACA,4CAAA,CAEA,yDACE,SAAA,CAIJ,+CACE,kDAAA,CACA,+DACE,SAAA,CAIJ,uDACE,SAAA,CACA,wCAAA,CACA,2CAAA,CACA,mBAAA,CACA,mBAAA,CAGF,gDACE,oDAAA,CACA,sCAAA,CAGF,sDACE,yBAAA,CACA,uBAAA,CAGF,uDACE,uBAAA,CAKN,iBACE,YAAA,CAGF,qCACE,eACE,WAAA,CACA,WAAA,CACA,KAAA,CACA,WAAA,CACA,cAAA,CACA,YAAA,CACA,cAAA,CAGF,cACE,WAAA,CACA,KAAA,CACA,MAAA,CACA,WAAA,CACA,cAAA,CACA,cAAA,CACA,YAAA,CAEA,iCACE,OAAA,CAIJ,iBACE,KAAA,CACA,OAAA,CACA,WAAA,CACA,cAAA,CACA,kDAAA,CACA,YAAA,CACA,UAAA,CACA,mBAAA,CACA,YAAA,CAGF,uBACE,cAAA,CACA,SAAA,CAGF,sBACE,KAAA,CACA,OAAA,CACA,YAAA,CACA,cAAA,CACA,SAAA,CAAA",sourcesContent:[".Sidebar {\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  width: 256px;\n  grid-area: aside;\n  background-color: var(--s-color-fill-default);\n  border-right: var(--s-border-width-hairline) solid\n    var(--s-color-border-default);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-large);\n  padding: var(--s-spacing-medium) var(--s-spacing-xx-small);\n  overflow-x: hidden;\n  overflow-y: auto;\n  transition: 0.3s;\n\n  &::-webkit-scrollbar {\n    width: 8px;\n    border-radius: 12px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: var(--s-color-fill-default-light);\n    border-radius: 12px;\n  }\n\n  .brand {\n    padding: 0 var(--s-spacing-xx-small);\n  }\n\n  .Sidebar-list {\n    display: flex;\n    flex-direction: column;\n\n    .Sidebar-list-title {\n      text-transform: uppercase;\n      font: var(--s-typography-caption-strong);\n      color: var(--s-color-content-light);\n      padding: 0 var(--s-spacing-xx-small);\n    }\n\n    .Sidebar-item {\n      transition: 0.1s ease-out;\n      cursor: pointer;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: var(--s-spacing-xx-small);\n      border-radius: var(--s-border-radius-small);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n    }\n\n    .Sidebar-item:hover {\n      background-color: var(--s-color-fill-default-hover);\n    }\n\n    .Sidebar-item:focus-visible {\n      z-index: 2;\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: -2px;\n      outline-style: solid;\n    }\n\n    .Sidebar-item.active {\n      background-color: var(--s-color-fill-highlight-light);\n      color: var(--s-color-content-highlight);\n      .Sidebar-item-header {\n        color: var(--s-color-content-highlight);\n      }\n    }\n\n    .Sidebar-item-header {\n      font: var(--s-typography-paragraph-strong);\n      color: var(--s-color-content-default);\n      display: flex;\n      align-items: center;\n      gap: var(--s-spacing-xx-small);\n    }\n\n    .Sidebar-sub-item {\n      cursor: pointer;\n      padding: var(--s-spacing-xx-small);\n      display: flex;\n      gap: var(--s-spacing-xx-small);\n      align-items: center;\n      padding: var(--s-spacing-xx-small);\n      border-radius: var(--s-border-radius-small);\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-default);\n      background-color: var(--s-color-fill-default);\n\n      div:first-child {\n        opacity: 0;\n      }\n    }\n\n    .Sidebar-sub-item:hover {\n      background-color: var(--s-color-fill-default-hover);\n      div:first-child {\n        opacity: 1;\n      }\n    }\n\n    .Sidebar-sub-item:focus-visible {\n      z-index: 2;\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: -2px;\n      outline-style: solid;\n    }\n\n    .Sidebar-sub-item:active {\n      background-color: var(--s-color-fill-highlight-light);\n      color: var(--s-color-content-highlight);\n    }\n\n    .Sidebar-item-with-action-open {\n      transform: rotate(-180deg);\n      transition: 0.3s ease-out;\n    }\n\n    .Sidebar-item-with-action-close {\n      transition: 0.3s ease-out;\n    }\n  }\n}\n\n.Sidebar-overlay {\n  display: none;\n}\n\n@media screen and (max-width: 768px) {\n  .Sidebar.close {\n    border: none;\n    left: -100vw;\n    top: 0;\n    z-index: 999;\n    position: fixed;\n    display: flex;\n    transition: 0.5s;\n  }\n\n  .Sidebar.open {\n    width: 256px;\n    top: 0;\n    left: 0;\n    z-index: 999;\n    transition: 0.5s;\n    position: fixed;\n    display: flex;\n\n    &::-webkit-scrollbar {\n      width: 0;\n    }\n  }\n\n  .Sidebar-overlay {\n    top: 0;\n    right: 0;\n    z-index: 998;\n    position: fixed;\n    background-color: var(--s-color-background-overlay);\n    height: 100vh;\n    width: 100%;\n    justify-content: end;\n    padding: 24px;\n  }\n\n  .Sidebar-overlay.close {\n    transition: 0.3s;\n    opacity: 0;\n  }\n\n  .Sidebar-overlay.open {\n    top: 0;\n    right: 0;\n    display: flex;\n    transition: 0.3s;\n    opacity: 1;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);