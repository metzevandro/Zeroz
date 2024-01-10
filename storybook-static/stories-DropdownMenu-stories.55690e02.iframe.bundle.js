"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1170],{"./src/stories/DropdownMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/DropdownMenu/DropdownMenu.tsx"),_app_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/Button/Button.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Dropdown Menu",component:_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__.GV,parameters:{layout:"padded"},tags:["autodocs"]};var Default=function Template(args){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isDropDownOpen=_useState[0],setIsDropDownOpen=_useState[1];return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{style:{width:"288px"}},__jsx(_app_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Z,{size:"md",variant:"primary",label:"Click here!",onClick:function toggleDropDown(){setIsDropDownOpen(!isDropDownOpen)}}),__jsx("div",null,__jsx(_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__.GV,{dropDownMenu:isDropDownOpen},__jsx(_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__.Cs,{content:"Title"}),__jsx(_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__.M8,{content:"Item 1"}),__jsx(_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__.M8,{content:"Item 2"}),__jsx(_app_components_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__.M8,{content:"Item 3",typeIcon:"ac_unit"})))))}.bind({});Default.args={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [isDropDownOpen, setIsDropDownOpen] = useState(false);\n  const toggleDropDown = () => {\n    setIsDropDownOpen(!isDropDownOpen);\n  };\n  return <>\r\n      <div style={{\n      width: "288px"\n    }}>\r\n        <Button size="md" variant="primary" label="Click here!" onClick={toggleDropDown} />\r\n        <div>\r\n          <DropDownMenu dropDownMenu={isDropDownOpen}>\r\n            <DropDownMenuTitle content="Title" />\r\n            <DropDownMenuItem content="Item 1" />\r\n            <DropDownMenuItem content="Item 2" />\r\n            <DropDownMenuItem content="Item 3" typeIcon="ac_unit" />\r\n          </DropDownMenu>\r\n        </div>\r\n      </div>\r\n    </>;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/app/components/DropdownMenu/DropdownMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GV:()=>DropDownMenu,M8:()=>DropDownMenuItem,Cs:()=>DropDownMenuTitle});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),DropdownMenu=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/DropdownMenu/DropdownMenu.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(DropdownMenu.Z,options);DropdownMenu.Z&&DropdownMenu.Z.locals&&DropdownMenu.Z.locals;var __jsx=react.createElement,DropDownMenu=function DropDownMenu(_ref){var children=_ref.children,dropDownMenu=_ref.dropDownMenu;return __jsx(react.Fragment,null,!0===dropDownMenu&&__jsx("div",{className:"dropdown-menu-root"},__jsx("div",{className:"dropdown-menu"},children)))},DropDownMenuTitle=function DropDownMenuTitle(_ref2){var content=_ref2.content;return __jsx(react.Fragment,null,__jsx("div",{className:"dropdown-menu-title"},content))},DropDownMenuItem=function DropDownMenuItem(_ref3){var typeIcon=_ref3.typeIcon,content=_ref3.content,onClick=_ref3.onClick;return __jsx(react.Fragment,null,__jsx("button",{className:"dropdown-menu-item",onClick},typeIcon&&__jsx(Icon.Z,{size:"sm",icon:typeIcon}),content))};try{DropDownMenu.displayName="DropDownMenu",DropDownMenu.__docgenInfo={description:"",displayName:"DropDownMenu",props:{dropDownMenu:{defaultValue:null,description:"",name:"dropDownMenu",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/DropdownMenu/DropdownMenu.tsx#DropDownMenu"]={docgenInfo:DropDownMenu.__docgenInfo,name:"DropDownMenu",path:"src/app/components/DropdownMenu/DropdownMenu.tsx#DropDownMenu"})}catch(__react_docgen_typescript_loader_error){}try{DropDownMenuTitle.displayName="DropDownMenuTitle",DropDownMenuTitle.__docgenInfo={description:"",displayName:"DropDownMenuTitle",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/DropdownMenu/DropdownMenu.tsx#DropDownMenuTitle"]={docgenInfo:DropDownMenuTitle.__docgenInfo,name:"DropDownMenuTitle",path:"src/app/components/DropdownMenu/DropdownMenu.tsx#DropDownMenuTitle"})}catch(__react_docgen_typescript_loader_error){}try{DropDownMenuItem.displayName="DropDownMenuItem",DropDownMenuItem.__docgenInfo={description:"",displayName:"DropDownMenuItem",props:{typeIcon:{defaultValue:null,description:"",name:"typeIcon",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/DropdownMenu/DropdownMenu.tsx#DropDownMenuItem"]={docgenInfo:DropDownMenuItem.__docgenInfo,name:"DropDownMenuItem",path:"src/app/components/DropdownMenu/DropdownMenu.tsx#DropDownMenuItem"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/DropdownMenu/DropdownMenu.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".dropdown-menu-root{position:relative}.dropdown-menu-root .dropdown-menu{margin-top:var(--s-spacing-xx-small);z-index:999;position:absolute;width:100%;display:flex;align-items:center;flex-direction:column;border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-default);border:var(--s-border-width-hairline) solid var(--s-color-border-default);padding:var(--s-spacing-nano);box-shadow:var(--s-shadow-level-2)}.dropdown-menu-root .dropdown-menu .dropdown-menu-title{font:var(--s-typography-paragraph-strong);padding:var(--s-spacing-xx-small) var(--s-spacing-xx-small) 0 var(--s-spacing-xx-small);border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-default);color:var(--s-color-content-default);justify-content:start;display:flex;width:100%}.dropdown-menu-root .dropdown-menu .dropdown-menu-item{justify-content:start;cursor:pointer;width:100%;font:var(--s-typography-paragraph-regular);display:flex;align-items:center;gap:var(--s-spacing-xx-small);padding:var(--s-spacing-xx-small);border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-default);color:var(--s-color-content-default)}.dropdown-menu-root .dropdown-menu .dropdown-menu-item:hover{background-color:var(--s-color-fill-default-hover)}.dropdown-menu-root .dropdown-menu .dropdown-menu-item:focus-visible{border-radius:var(--s-border-radius-small);z-index:2;outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}","",{version:3,sources:["webpack://./src/app/components/DropdownMenu/DropdownMenu.scss"],names:[],mappings:"AAAA,oBACE,iBAAA,CAEA,mCACE,oCAAA,CACA,WAAA,CACA,iBAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,qBAAA,CACA,0CAAA,CACA,4CAAA,CACA,yEAAA,CACA,6BAAA,CACA,kCAAA,CAEA,wDACE,yCAAA,CACA,uFAAA,CAEA,0CAAA,CACA,4CAAA,CACA,oCAAA,CACA,qBAAA,CACA,YAAA,CACA,UAAA,CAGF,uDACE,qBAAA,CACA,cAAA,CACA,UAAA,CACA,0CAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,iCAAA,CACA,0CAAA,CACA,4CAAA,CACA,oCAAA,CAEA,6DACE,kDAAA,CAGF,qEACE,0CAAA,CACA,SAAA,CACA,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA",sourcesContent:[".dropdown-menu-root {\n  position: relative;\n\n  .dropdown-menu {\n    margin-top: var(--s-spacing-xx-small);\n    z-index: 999;\n    position: absolute;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    border-radius: var(--s-border-radius-small);\n    background-color: var(--s-color-fill-default);\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    padding: var(--s-spacing-nano);\n    box-shadow: var(--s-shadow-level-2);\n\n    .dropdown-menu-title {\n      font: var(--s-typography-paragraph-strong);\n      padding: var(--s-spacing-xx-small) var(--s-spacing-xx-small) 0\n        var(--s-spacing-xx-small);\n      border-radius: var(--s-border-radius-small);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n      justify-content: start;\n      display: flex;\n      width: 100%;\n    }\n\n    .dropdown-menu-item {\n      justify-content: start;\n      cursor: pointer;\n      width: 100%;\n      font: var(--s-typography-paragraph-regular);\n      display: flex;\n      align-items: center;\n      gap: var(--s-spacing-xx-small);\n      padding: var(--s-spacing-xx-small);\n      border-radius: var(--s-border-radius-small);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n\n      &:hover {\n        background-color: var(--s-color-fill-default-hover);\n      }\n\n      &:focus-visible {\n        border-radius: var(--s-border-radius-small);\n        z-index: 2;\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-fill-highlight);\n        outline-offset: var(--s-border-width-thin);\n        outline-style: solid;\n      }\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);