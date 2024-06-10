(self.webpackChunkdesign_system_zeroz=self.webpackChunkdesign_system_zeroz||[]).push([[3957],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/app/components/DropdownMenu/DropdownMenu.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),C_Users_metzx_Desktop_ZeroZ_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_DropdownMenu_stories_tsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/DropdownMenu/DropdownMenu.stories.tsx");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,C_Users_metzx_Desktop_ZeroZ_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_DropdownMenu_stories_tsx__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"dropdown-menu",children:"Dropdown Menu"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"índice",children:"Índice"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#vis%C3%A3o-geral",children:"Visão Geral"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#como-usar",children:"Como usar"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"visão-geral",children:"Visão Geral"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["O componente ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DropdownMenu"})," são ativadas por um botão e mostram uma lista de opções, permitindo que os usuários selecionem uma ou mais opções. Uma opção escolhida pode levar a uma página ou ser utilizada como uma ação para filtrar ou classificar o conteúdo existente."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{additionalActions:[{title:"Open in Figma",onClick:()=>{window.open("https://www.figma.com/file/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?type=design&node-id=435-10084&mode=design&t=tKh2sXjfWnqrJ4Ax-0","_blank")}},{title:"Open in GitHub",onClick:()=>{window.open("https://github.com/metzevandro/Zeroz/blob/master/src/app/components/DropdownMenu/DropdownMenu.tsx","_blank")}}],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"como-usar",children:"Como usar:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:'const [isDropDownOpen, setIsDropDownOpen] = useState(false);\n\nconst toggleDropDown = () => {\n  setIsDropDownOpen(!isDropDownOpen);\n};\nreturn (\n  <>\n    <div>\n      <Button\n        size="md"\n        variant="primary"\n        label="Click here!"\n        onClick={toggleDropDown}\n      />\n      <div>\n        <DropDownMenu dropDownMenu={isDropDownOpen}>\n          <DropDownMenuTitle content="Title" />\n          <DropDownMenuItem content="Item 1" typeIcon="ac_unit" />\n          <DropDownMenuItem content="Item 2" typeIcon="ac_unit" />\n          <DropDownMenuItem content="Item 3" typeIcon="ac_unit" />\n          <DropDownMenuTitle content="Title" />\n          <DropDownMenuItem content="Item 1" />\n          <DropDownMenuItem content="Item 2" />\n        </DropDownMenu>\n      </div>\n    </div>\n  </>\n);\n'})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,C_Users_metzx_Desktop_ZeroZ_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/app/components/DropdownMenu/DropdownMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/DropdownMenu/DropdownMenu.tsx"),_Button_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Button/Button.tsx"),_DropdownMenu_mdx__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./src/app/styles.scss"),__webpack_require__("./src/app/components/DropdownMenu/DropdownMenu.mdx"));const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Dropdown Menu",component:_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.Ay,parameters:{layout:"centered",page:_DropdownMenu_mdx__WEBPACK_IMPORTED_MODULE_5__.default}},Default=(args=>{const[isDropDownOpen,setIsDropDownOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{width:"288px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_3__.A,{size:"md",variant:"primary",label:"Click here!",onClick:()=>{setIsDropDownOpen(!isDropDownOpen)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.Ay,{dropDownMenu:isDropDownOpen,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.Hg,{content:"Title"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.iO,{content:"Item 1",typeIcon:"ac_unit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.iO,{content:"Item 2",typeIcon:"ac_unit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.iO,{content:"Item 3",typeIcon:"ac_unit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.Hg,{content:"Title"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.iO,{content:"Item 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.iO,{content:"Item 2"})]})})]})})}).bind({});Default.args={},Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'args => {\n  const [isDropDownOpen, setIsDropDownOpen] = useState(false);\n  const toggleDropDown = () => {\n    setIsDropDownOpen(!isDropDownOpen);\n  };\n  return <>\r\n      <div style={{\n      width: "288px"\n    }}>\r\n        <Button size="md" variant="primary" label="Click here!" onClick={toggleDropDown} />\r\n        <div>\r\n          <DropDownMenu dropDownMenu={isDropDownOpen}>\r\n            <DropDownMenuTitle content="Title" />\r\n            <DropDownMenuItem content="Item 1" typeIcon="ac_unit" />\r\n            <DropDownMenuItem content="Item 2" typeIcon="ac_unit" />\r\n            <DropDownMenuItem content="Item 3" typeIcon="ac_unit" />\r\n            <DropDownMenuTitle content="Title" />\r\n            <DropDownMenuItem content="Item 1" />\r\n            <DropDownMenuItem content="Item 2" />\r\n          </DropDownMenu>\r\n        </div>\r\n      </div>\r\n    </>;\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./src/app/components/DropdownMenu/DropdownMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{iO:()=>DropDownMenuItem,Hg:()=>DropDownMenuTitle,Ay:()=>app_components_DropdownMenu_DropdownMenu});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),DropdownMenu_DropdownMenu=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/DropdownMenu/DropdownMenu.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(DropdownMenu_DropdownMenu.A,options);DropdownMenu_DropdownMenu.A&&DropdownMenu_DropdownMenu.A.locals&&DropdownMenu_DropdownMenu.A.locals;__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const DropDownMenuTitle=param=>{let{content}=param;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{className:"dropdown-menu-title",children:content})})},DropDownMenuItem=param=>{let{typeIcon,content,onClick}=param;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("button",{className:"dropdown-menu-item",onClick,children:[typeIcon&&(0,jsx_runtime.jsx)(Icon.A,{size:"sm",icon:typeIcon}),content]})})},app_components_DropdownMenu_DropdownMenu=param=>{let{children,dropDownMenu}=param;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:!0===dropDownMenu&&(0,jsx_runtime.jsx)("div",{className:"dropdown-menu-root",children:(0,jsx_runtime.jsx)("div",{className:"dropdown-menu",children})})})};try{DropDownMenuTitle.displayName="DropDownMenuTitle",DropDownMenuTitle.__docgenInfo={description:"",displayName:"DropDownMenuTitle",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/DropdownMenu/DropdownMenu.tsx#DropDownMenuTitle"]={docgenInfo:DropDownMenuTitle.__docgenInfo,name:"DropDownMenuTitle",path:"src/app/components/DropdownMenu/DropdownMenu.tsx#DropDownMenuTitle"})}catch(__react_docgen_typescript_loader_error){}try{DropDownMenuItem.displayName="DropDownMenuItem",DropDownMenuItem.__docgenInfo={description:"",displayName:"DropDownMenuItem",props:{typeIcon:{defaultValue:null,description:"",name:"typeIcon",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/DropdownMenu/DropdownMenu.tsx#DropDownMenuItem"]={docgenInfo:DropDownMenuItem.__docgenInfo,name:"DropDownMenuItem",path:"src/app/components/DropdownMenu/DropdownMenu.tsx#DropDownMenuItem"})}catch(__react_docgen_typescript_loader_error){}try{DropdownMenu.displayName="DropdownMenu",DropdownMenu.__docgenInfo={description:"",displayName:"DropdownMenu",props:{dropDownMenu:{defaultValue:null,description:"",name:"dropDownMenu",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/DropdownMenu/DropdownMenu.tsx#DropdownMenu"]={docgenInfo:DropdownMenu.__docgenInfo,name:"DropdownMenu",path:"src/app/components/DropdownMenu/DropdownMenu.tsx#DropdownMenu"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/DropdownMenu/DropdownMenu.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".dropdown-menu-root{position:relative}.dropdown-menu-root .dropdown-menu{margin-top:var(--s-spacing-xx-small);z-index:10;position:absolute;width:100%;display:flex;align-items:center;flex-direction:column;border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-default);border:var(--s-border-width-hairline) solid var(--s-color-border-default);padding:var(--s-spacing-nano);box-shadow:var(--s-shadow-dropdown)}.dropdown-menu-root .dropdown-menu .dropdown-menu-title{font:var(--s-typography-paragraph-strong);padding:var(--s-spacing-xx-small) var(--s-spacing-xx-small) 0 var(--s-spacing-xx-small);border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-default);color:var(--s-color-content-default);justify-content:start;display:flex;width:100%}.dropdown-menu-root .dropdown-menu .dropdown-menu-item{justify-content:start;cursor:pointer;width:100%;font:var(--s-typography-paragraph-regular);display:flex;align-items:center;gap:var(--s-spacing-xx-small);padding:var(--s-spacing-xx-small);border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-default);color:var(--s-color-content-default)}.dropdown-menu-root .dropdown-menu .dropdown-menu-item:hover{background-color:var(--s-color-fill-default-hover)}.dropdown-menu-root .dropdown-menu .dropdown-menu-item:focus-visible{border-radius:var(--s-border-radius-small);z-index:2;outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}","",{version:3,sources:["webpack://./src/app/components/DropdownMenu/DropdownMenu.scss"],names:[],mappings:"AAAA,oBACE,iBAAA,CAEA,mCACE,oCAAA,CACA,UAAA,CACA,iBAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,qBAAA,CACA,0CAAA,CACA,4CAAA,CACA,yEAAA,CACA,6BAAA,CACA,mCAAA,CAEA,wDACE,yCAAA,CACA,uFAAA,CAEA,0CAAA,CACA,4CAAA,CACA,oCAAA,CACA,qBAAA,CACA,YAAA,CACA,UAAA,CAGF,uDACE,qBAAA,CACA,cAAA,CACA,UAAA,CACA,0CAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,iCAAA,CACA,0CAAA,CACA,4CAAA,CACA,oCAAA,CAEA,6DACE,kDAAA,CAGF,qEACE,0CAAA,CACA,SAAA,CACA,wCAAA,CACA,6CAAA,CACA,yCAAA,CACA,mBAAA",sourcesContent:[".dropdown-menu-root {\r\n  position: relative;\r\n\r\n  .dropdown-menu {\r\n    margin-top: var(--s-spacing-xx-small);\r\n    z-index: 10;\r\n    position: absolute;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    border-radius: var(--s-border-radius-small);\r\n    background-color: var(--s-color-fill-default);\r\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\r\n    padding: var(--s-spacing-nano);\r\n    box-shadow: var(--s-shadow-dropdown);\r\n\r\n    .dropdown-menu-title {\r\n      font: var(--s-typography-paragraph-strong);\r\n      padding: var(--s-spacing-xx-small) var(--s-spacing-xx-small) 0\r\n        var(--s-spacing-xx-small);\r\n      border-radius: var(--s-border-radius-small);\r\n      background-color: var(--s-color-fill-default);\r\n      color: var(--s-color-content-default);\r\n      justify-content: start;\r\n      display: flex;\r\n      width: 100%;\r\n    }\r\n\r\n    .dropdown-menu-item {\r\n      justify-content: start;\r\n      cursor: pointer;\r\n      width: 100%;\r\n      font: var(--s-typography-paragraph-regular);\r\n      display: flex;\r\n      align-items: center;\r\n      gap: var(--s-spacing-xx-small);\r\n      padding: var(--s-spacing-xx-small);\r\n      border-radius: var(--s-border-radius-small);\r\n      background-color: var(--s-color-fill-default);\r\n      color: var(--s-color-content-default);\r\n\r\n      &:hover {\r\n        background-color: var(--s-color-fill-default-hover);\r\n      }\r\n\r\n      &:focus-visible {\r\n        border-radius: var(--s-border-radius-small);\r\n        z-index: 2;\r\n        outline-width: var(--s-border-width-thin);\r\n        outline-color: var(--s-color-border-highlight);\r\n        outline-offset: var(--s-border-width-thin);\r\n        outline-style: solid;\r\n      }\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);