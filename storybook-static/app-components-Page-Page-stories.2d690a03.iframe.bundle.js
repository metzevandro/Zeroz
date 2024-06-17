"use strict";(self.webpackChunkdesign_system_zeroz=self.webpackChunkdesign_system_zeroz||[]).push([[5253],{"./src/app/components/Page/Page.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Page__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Page/Page.tsx"),_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/Icon/Icon.tsx");__webpack_require__("./src/app/styles.scss");const __WEBPACK_DEFAULT_EXPORT__={title:"Templates/Page",component:_Page__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],argTypes:{}},Default={args:{withActionPrimary:!0,buttonContentPrimary:"Button",withActionSecondary:!0,buttonContentSecondary:"Button",namePage:"Name Page",withBackButton:!0,columnLayout:"2 - Asymmetric",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"slot",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__.A,{icon:"refresh",size:"md"}),"Slot Content"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"slot",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__.A,{icon:"refresh",size:"md"}),"Slot Content"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"slot",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__.A,{icon:"refresh",size:"md"}),"Slot Content"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"slot",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__.A,{icon:"refresh",size:"md"}),"Slot Content"]})]})}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'{\n  args: {\n    withActionPrimary: true,\n    buttonContentPrimary: "Button",\n    withActionSecondary: true,\n    buttonContentSecondary: "Button",\n    namePage: "Name Page",\n    withBackButton: true,\n    columnLayout: "2 - Asymmetric",\n    children: <>\r\n        <div className="slot">\r\n          <Icon icon="refresh" size="md" />\r\n          Slot Content\r\n        </div>\r\n        <div className="slot">\r\n          <Icon icon="refresh" size="md" />\r\n          Slot Content\r\n        </div>\r\n        <div className="slot">\r\n          <Icon icon="refresh" size="md" />\r\n          Slot Content\r\n        </div>\r\n        <div className="slot">\r\n          <Icon icon="refresh" size="md" />\r\n          Slot Content\r\n        </div>\r\n      </>\n  }\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./src/app/components/ButtonIcon/ButtonIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_ButtonIcon_ButtonIcon});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ButtonIcon=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonIcon/ButtonIcon.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ButtonIcon.A,options);ButtonIcon.A&&ButtonIcon.A.locals&&ButtonIcon.A.locals;var Skeleton=__webpack_require__("./src/app/components/Skeleton/Skeleton.tsx");const ButtonIcon_ButtonIcon_ButtonIcon=param=>{let{size,type,typeIcon,variant,onClick,disable,skeleton}=param;const buttonRef=(0,react.useRef)(null),[dimensions,setDimensions]=(0,react.useState)(null);return(0,react.useEffect)((()=>{if(buttonRef.current){const{offsetHeight:height,offsetWidth:width}=buttonRef.current;setDimensions({height,width})}}),[size,variant]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:skeleton&&dimensions?(0,jsx_runtime.jsx)(Skeleton.A,{height:"".concat(dimensions.height),width:"".concat(dimensions.width)}):(0,jsx_runtime.jsx)("button",{ref:buttonRef,disabled:disable,onClick,className:"button-icon ".concat(variant," ").concat(size," ").concat(type),children:typeIcon&&(0,jsx_runtime.jsx)(Icon.A,{icon:typeIcon,size})})})},components_ButtonIcon_ButtonIcon=ButtonIcon_ButtonIcon_ButtonIcon;try{ButtonIcon_ButtonIcon_ButtonIcon.displayName="ButtonIcon",ButtonIcon_ButtonIcon_ButtonIcon.__docgenInfo={description:"",displayName:"ButtonIcon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"on-color"'}]}},disable:{defaultValue:null,description:"",name:"disable",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"plain"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},typeIcon:{defaultValue:null,description:"",name:"typeIcon",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},skeleton:{defaultValue:null,description:"",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/ButtonIcon/ButtonIcon.tsx#ButtonIcon"]={docgenInfo:ButtonIcon_ButtonIcon_ButtonIcon.__docgenInfo,name:"ButtonIcon",path:"src/app/components/ButtonIcon/ButtonIcon.tsx#ButtonIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/app/components/Layout/Layout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Layout_Layout});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Layout=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Layout/Layout.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Layout.A,options);Layout.A&&Layout.A.locals&&Layout.A.locals;const Layout_Layout_Layout=param=>{let{children,columns,...rest}=param;const columnClassName={1:"one-column","2 - Symmetric":"two-column-symmetric","2 - Asymmetric":"two-column-asymmetric","3 - Symmetric":"three-column-symmetric"}[columns];return(0,jsx_runtime.jsx)("div",{...rest,className:"layout ".concat(columnClassName),children})},components_Layout_Layout=Layout_Layout_Layout;try{Layout_Layout_Layout.displayName="Layout",Layout_Layout_Layout.__docgenInfo={description:"",displayName:"Layout",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"enum",value:[{value:'"1"'},{value:'"2 - Symmetric"'},{value:'"2 - Asymmetric"'},{value:'"3 - Symmetric"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Layout/Layout.tsx#Layout"]={docgenInfo:Layout_Layout_Layout.__docgenInfo,name:"Layout",path:"src/app/components/Layout/Layout.tsx#Layout"})}catch(__react_docgen_typescript_loader_error){}},"./src/app/components/Page/Page.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Page_Page});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Page=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Page/Page.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Page.A,options);Page.A&&Page.A.locals&&Page.A.locals;var ButtonIcon=__webpack_require__("./src/app/components/ButtonIcon/ButtonIcon.tsx"),Button=__webpack_require__("./src/app/components/Button/Button.tsx"),Layout=__webpack_require__("./src/app/components/Layout/Layout.tsx");const Page_Page_Page=param=>{let{columnLayout,children,namePage,withBackButton,withActionPrimary,withActionSecondary,buttonContentPrimary,buttonContentSecondary,onClickActionPrimary,onClickActionSecondary,onClickBackButton,iconButtonPrimary,iconButtonSecondary,skeletonButtonPrimary,skeletonButtonSecondary}=param;return(0,jsx_runtime.jsxs)("div",{className:"page-root",children:[(0,jsx_runtime.jsxs)("div",{className:"page-header",children:[(0,jsx_runtime.jsxs)("div",{className:"page-header-title",children:[withBackButton&&(0,jsx_runtime.jsx)(ButtonIcon.A,{onClick:onClickBackButton,size:"md",type:"default",typeIcon:"arrow_back",variant:"secondary"}),(0,jsx_runtime.jsx)("h1",{children:namePage})]}),(0,jsx_runtime.jsxs)("div",{className:"page-header-actions",children:[withActionSecondary&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:"button-icon-actions",children:(0,jsx_runtime.jsx)(ButtonIcon.A,{type:"default",size:"md",typeIcon:"".concat(iconButtonSecondary||"more_vert"),variant:"secondary",onClick:onClickActionSecondary,skeleton:skeletonButtonSecondary})}),(0,jsx_runtime.jsx)("div",{className:"button-actions",children:(0,jsx_runtime.jsx)(Button.A,{size:"md",variant:"secondary",label:buttonContentSecondary,onClick:onClickActionSecondary,typeIcon:iconButtonSecondary,skeleton:skeletonButtonSecondary})})]}),withActionPrimary&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:"button-icon-actions",children:(0,jsx_runtime.jsx)(ButtonIcon.A,{type:"default",size:"md",typeIcon:"".concat(iconButtonPrimary||"add"),variant:"primary",onClick:onClickActionPrimary,skeleton:skeletonButtonPrimary})}),(0,jsx_runtime.jsx)("div",{className:"button-actions",children:(0,jsx_runtime.jsx)(Button.A,{size:"md",variant:"primary",skeleton:skeletonButtonPrimary,typeIcon:iconButtonPrimary,label:buttonContentPrimary,onClick:onClickActionPrimary})})]})]})]}),(0,jsx_runtime.jsx)(Layout.A,{columns:columnLayout,children})]})},components_Page_Page=Page_Page_Page;try{Page_Page_Page.displayName="Page",Page_Page_Page.__docgenInfo={description:"",displayName:"Page",props:{columnLayout:{defaultValue:null,description:"",name:"columnLayout",required:!0,type:{name:"enum",value:[{value:'"1"'},{value:'"2 - Symmetric"'},{value:'"2 - Asymmetric"'},{value:'"3 - Symmetric"'}]}},namePage:{defaultValue:null,description:"",name:"namePage",required:!0,type:{name:"string"}},withBackButton:{defaultValue:null,description:"",name:"withBackButton",required:!1,type:{name:"boolean"}},withActionPrimary:{defaultValue:null,description:"",name:"withActionPrimary",required:!1,type:{name:"boolean"}},withActionSecondary:{defaultValue:null,description:"",name:"withActionSecondary",required:!1,type:{name:"boolean"}},buttonContentPrimary:{defaultValue:null,description:"",name:"buttonContentPrimary",required:!1,type:{name:"string"}},buttonContentSecondary:{defaultValue:null,description:"",name:"buttonContentSecondary",required:!1,type:{name:"string"}},onClickActionPrimary:{defaultValue:null,description:"",name:"onClickActionPrimary",required:!1,type:{name:"(() => void)"}},onClickActionSecondary:{defaultValue:null,description:"",name:"onClickActionSecondary",required:!1,type:{name:"(() => void)"}},onClickBackButton:{defaultValue:null,description:"",name:"onClickBackButton",required:!1,type:{name:"(() => void)"}},iconButtonPrimary:{defaultValue:null,description:"",name:"iconButtonPrimary",required:!1,type:{name:"string"}},iconButtonSecondary:{defaultValue:null,description:"",name:"iconButtonSecondary",required:!1,type:{name:"string"}},skeletonButtonPrimary:{defaultValue:null,description:"",name:"skeletonButtonPrimary",required:!1,type:{name:"boolean"}},skeletonButtonSecondary:{defaultValue:null,description:"",name:"skeletonButtonSecondary",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Page/Page.tsx#Page"]={docgenInfo:Page_Page_Page.__docgenInfo,name:"Page",path:"src/app/components/Page/Page.tsx#Page"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonIcon/ButtonIcon.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".button-icon{display:flex;align-items:center;border:none;padding:0;cursor:pointer;box-sizing:border-box}.button-icon.sm.plain{padding:4px;height:24px}.button-icon.md.plain{padding:4px;height:32px}.button-icon.plain{border-radius:var(--s-border-radius-small);color:var(--s-color-content-default);background-color:rgba(0,0,0,0)}.button-icon.plain:hover{background-color:var(--s-color-fill-default-hover)}.button-icon.plain.on-color{color:var(--s-color-content-on-color)}.button-icon.plain.on-color:hover{background-color:rgba(255,255,255,.16)}.button-icon.plain:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button-icon.plain:disabled{cursor:auto}.button-icon.plain:disabled:hover{color:var(--s-color-content-default);background-color:rgba(0,0,0,0)}.button-icon.sm.default>*{padding:var(--s-spacing-nano)}.button-icon.md.default>*{padding:var(--s-spacing-xx-small);font-size:24px}.button-icon.default{border-radius:4px}.button-icon.default.md{height:40px}.button-icon.default:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button-icon.default.primary{background-color:var(--s-color-fill-highlight);color:var(--s-color-content-on-color)}.button-icon.default.primary:hover{background-color:var(--s-color-fill-highlight-hover)}.button-icon.default.primary:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}.button-icon.default.secondary{border:var(--s-border-width-hairline) solid var(--s-color-border-default);background-color:var(--s-color-fill-default);color:var(--s-color-content-default)}.button-icon.default.secondary:hover{background-color:var(--s-color-fill-default-hover);border-color:var(--s-color-border-default-hover)}.button-icon.default.secondary:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}.button-icon.default.success{background-color:var(--s-color-fill-success);color:var(--s-color-content-on-color)}.button-icon.default.success:hover{background-color:var(--s-color-fill-success-hover)}.button-icon.default.success:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}.button-icon.default.warning{background-color:var(--s-color-fill-warning);color:var(--s-color-content-on-color)}.button-icon.default.warning:hover{background-color:var(--s-color-fill-warning-hover)}.button-icon.default.warning:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}","",{version:3,sources:["webpack://./src/app/components/ButtonIcon/ButtonIcon.scss"],names:[],mappings:"AAAA,aACE,YAAA,CACA,kBAAA,CACA,WAAA,CACA,SAAA,CACA,cAAA,CACA,qBAAA,CAEA,sBACE,WAAA,CACA,WAAA,CAGF,sBACE,WAAA,CACA,WAAA,CAGF,mBACE,0CAAA,CACA,oCAAA,CACA,8BAAA,CAEA,yBACE,kDAAA,CAGF,4BACE,qCAAA,CAEA,kCACE,sCAAA,CAIJ,iCACE,wCAAA,CACA,6CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,4BACE,WAAA,CACA,kCACE,oCAAA,CACA,8BAAA,CAKN,0BACE,6BAAA,CAGF,0BACE,iCAAA,CACA,cAAA,CAGF,qBACE,iBAAA,CAEA,wBACE,WAAA,CAGF,mCACE,wCAAA,CACA,6CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,6BACE,8CAAA,CACA,qCAAA,CAEA,mCACE,oDAAA,CAGF,sCACE,WAAA,CACA,4CAAA,CACA,WAAA,CAIJ,+BACE,yEAAA,CACA,4CAAA,CACA,oCAAA,CAEA,qCACE,kDAAA,CACA,gDAAA,CAGF,wCACE,WAAA,CACA,4CAAA,CACA,WAAA,CAIJ,6BACE,4CAAA,CACA,qCAAA,CAEA,mCACE,kDAAA,CAGF,sCACE,WAAA,CACA,4CAAA,CACA,WAAA,CAIJ,6BACE,4CAAA,CACA,qCAAA,CAEA,mCACE,kDAAA,CAGF,sCACE,WAAA,CACA,4CAAA,CACA,WAAA",sourcesContent:[".button-icon {\n  display: flex;\n  align-items: center;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  box-sizing: border-box;\n\n  &.sm.plain {\n    padding: 4px;\n    height: 24px;\n  }\n\n  &.md.plain {\n    padding: 4px;\n    height: 32px;\n  }\n\n  &.plain {\n    border-radius: var(--s-border-radius-small);\n    color: var(--s-color-content-default);\n    background-color: transparent;\n\n    &:hover {\n      background-color: var(--s-color-fill-default-hover);\n    }\n\n    &.on-color {\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: rgba(white, 0.16);\n      }\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-border-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      cursor: auto;\n      &:hover {\n        color: var(--s-color-content-default);\n        background-color: transparent;\n      }\n    }\n  }\n\n  &.sm.default > * {\n    padding: var(--s-spacing-nano);\n  }\n\n  &.md.default > * {\n    padding: var(--s-spacing-xx-small);\n    font-size: 24px;\n  }\n\n  &.default {\n    border-radius: 4px;\n\n    &.md {\n      height: 40px;\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-border-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &.primary {\n      background-color: var(--s-color-fill-highlight);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-highlight-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n\n    &.secondary {\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n\n      &:hover {\n        background-color: var(--s-color-fill-default-hover);\n        border-color: var(--s-color-border-default-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n\n    &.success {\n      background-color: var(--s-color-fill-success);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-success-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n\n    &.warning {\n      background-color: var(--s-color-fill-warning);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-warning-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Layout/Layout.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".layout{display:grid;grid-gap:var(--s-spacing-small);height:100%}.layout.one-column{grid-template-columns:1fr;grid-auto-flow:dense}.layout.two-column-asymmetric{grid-auto-flow:dense;grid-template-columns:2fr 1fr}.layout.two-column-symmetric{grid-auto-flow:dense;grid-template-columns:repeat(2, 1fr)}.layout.three-column-symmetric{grid-auto-flow:dense;grid-template-columns:repeat(3, 1fr)}@media screen and (max-width: 490px){.layout.two-column-symmetric{grid-template-columns:1fr}.layout.two-column-asymmetric{grid-template-columns:1fr}.layout.three-column-symmetric{grid-template-columns:1fr}}","",{version:3,sources:["webpack://./src/app/components/Layout/Layout.scss"],names:[],mappings:"AAAA,QACE,YAAA,CACA,+BAAA,CACA,WAAA,CAEA,mBACE,yBAAA,CACA,oBAAA,CAGF,8BACE,oBAAA,CACA,6BAAA,CAGF,6BACE,oBAAA,CACA,oCAAA,CAGF,+BACE,oBAAA,CACA,oCAAA,CAIJ,qCAEI,6BACE,yBAAA,CAEF,8BACE,yBAAA,CAEF,+BACE,yBAAA,CAAA",sourcesContent:[".layout {\n  display: grid;\n  grid-gap: var(--s-spacing-small);\n  height: 100%;\n\n  &.one-column {\n    grid-template-columns: 1fr;\n    grid-auto-flow: dense;\n  }\n\n  &.two-column-asymmetric {\n    grid-auto-flow: dense;\n    grid-template-columns: 2fr 1fr;\n  }\n\n  &.two-column-symmetric {\n    grid-auto-flow: dense;\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  &.three-column-symmetric {\n    grid-auto-flow: dense;\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .layout {\n    &.two-column-symmetric {\n      grid-template-columns: 1fr;\n    }\n    &.two-column-asymmetric {\n      grid-template-columns: 1fr;\n    }\n    &.three-column-symmetric {\n      grid-template-columns: 1fr;\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Page/Page.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".page-root{grid-area:main;margin:var(--s-spacing-medium) var(--s-spacing-x-large);display:flex;flex-direction:column;max-width:1280px}.page-root .page-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center;box-sizing:border-box;gap:var(--s-spacing-small)}.page-root .page-header .page-header-title{display:flex;align-items:center;gap:var(--s-spacing-small);min-height:var(--s-spacing-x-large);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.page-root .page-header .page-header-title h1{font:var(--s-typography-heading-large);line-height:var(--s-line-height-32);color:var(--s-color-content-default);overflow:hidden;text-overflow:ellipsis}.page-root .page-header .page-header-actions{display:flex;gap:var(--s-spacing-xx-small)}.page-root .page-header .page-header-actions .button-icon-actions{display:none}@media screen and (max-width: 768px){.page-root{margin:var(--s-spacing-medium) var(--s-spacing-small)}.page-root .page-header .page-header-actions .button-actions{display:none}.page-root .page-header .page-header-actions .button-icon-actions{display:flex}}","",{version:3,sources:["webpack://./src/app/components/Page/Page.scss"],names:[],mappings:"AAAA,WACE,cAAA,CACA,uDAAA,CACA,YAAA,CACA,qBAAA,CACA,gBAAA,CAEA,wBACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,kBAAA,CACA,qBAAA,CACA,0BAAA,CAEA,2CACE,YAAA,CACA,kBAAA,CACA,0BAAA,CACA,mCAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CAEA,8CACE,sCAAA,CACA,mCAAA,CACA,oCAAA,CACA,eAAA,CACA,sBAAA,CAIJ,6CACE,YAAA,CAEA,6BAAA,CAEA,kEACE,YAAA,CAMR,qCACE,WACE,qDAAA,CAGI,6DACE,YAAA,CAEF,kEACE,YAAA,CAAA",sourcesContent:[".page-root {\n  grid-area: main;\n  margin: var(--s-spacing-medium) var(--s-spacing-x-large);\n  display: flex;\n  flex-direction: column;\n  max-width: 1280px;\n\n  .page-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    box-sizing: border-box;\n    gap: var(--s-spacing-small);\n\n    .page-header-title {\n      display: flex;\n      align-items: center;\n      gap: var(--s-spacing-small);\n      min-height: var(--s-spacing-x-large);\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n\n      h1 {\n        font: var(--s-typography-heading-large);\n        line-height: var(--s-line-height-32);\n        color: var(--s-color-content-default);\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n    }\n\n    .page-header-actions {\n      display: flex;\n\n      gap: var(--s-spacing-xx-small);\n\n      .button-icon-actions {\n        display: none;\n      }\n    }\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .page-root {\n    margin: var(--s-spacing-medium) var(--s-spacing-small);\n    .page-header {\n      .page-header-actions {\n        .button-actions {\n          display: none;\n        }\n        .button-icon-actions {\n          display: flex;\n        }\n      }\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);