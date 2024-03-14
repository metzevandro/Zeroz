"use strict";(self.webpackChunkdesign_system_zeroz=self.webpackChunkdesign_system_zeroz||[]).push([[7745],{"./src/app/components/ColorPicker/ColorPicker.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disable:()=>Disable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,_Disable_parameters,_Disable_parameters_docs,_Disable_parameters1,_ColorPicker__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/app/components/ColorPicker/ColorPicker.tsx");__webpack_require__("./src/app/styles.scss");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Color Picker",component:_ColorPicker__WEBPACK_IMPORTED_MODULE_0__.A,tags:["autodocs"],argTypes:{}},Default={args:{label:"Label",value:"#FFFFFF",disabled:!1}},Disable={args:{label:"Label",value:"#FFFFFF",disabled:!0}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'{\n  args: {\n    label: "Label",\n    value: "#FFFFFF",\n    disabled: false\n  }\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}},Disable.parameters={...Disable.parameters,docs:{...null===(_Disable_parameters=Disable.parameters)||void 0===_Disable_parameters?void 0:_Disable_parameters.docs,source:{originalSource:'{\n  args: {\n    label: "Label",\n    value: "#FFFFFF",\n    disabled: true\n  }\n}',...null===(_Disable_parameters1=Disable.parameters)||void 0===_Disable_parameters1||null===(_Disable_parameters_docs=_Disable_parameters1.docs)||void 0===_Disable_parameters_docs?void 0:_Disable_parameters_docs.source}}};const __namedExportsOrder=["Default","Disable"]},"./src/app/components/ButtonIcon/ButtonIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_ButtonIcon_ButtonIcon});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Icon=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon/Icon.tsx")),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ButtonIcon=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonIcon/ButtonIcon.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ButtonIcon.A,options);ButtonIcon.A&&ButtonIcon.A.locals&&ButtonIcon.A.locals;const ButtonIcon_ButtonIcon_ButtonIcon=param=>{let{size,type,typeIcon,variant,onClick,disable}=param;return(0,jsx_runtime.jsx)("button",{disabled:disable,onClick,className:"button-icon ".concat(variant," ").concat(size," ").concat(type),children:typeIcon&&(0,jsx_runtime.jsx)(Icon.A,{icon:typeIcon,size})})},components_ButtonIcon_ButtonIcon=ButtonIcon_ButtonIcon_ButtonIcon;ButtonIcon_ButtonIcon_ButtonIcon.__docgenInfo={description:"",methods:[],displayName:"ButtonIcon",props:{variant:{required:!0,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "warning" | "on-color"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"on-color"'}]},description:""},disable:{required:!1,tsType:{name:"boolean"},description:""},type:{required:!0,tsType:{name:"union",raw:'"plain" | "default"',elements:[{name:"literal",value:'"plain"'},{name:"literal",value:'"default"'}]},description:""},size:{required:!0,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:""},typeIcon:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""}}}},"./src/app/components/ColorPicker/ColorPicker.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_ColorPicker_ColorPicker});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),es=__webpack_require__("./node_modules/react-color/es/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ColorPicker=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ColorPicker/ColorPicker.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ColorPicker.A,options);ColorPicker.A&&ColorPicker.A.locals&&ColorPicker.A.locals;var Button=__webpack_require__("./src/app/components/Button/Button.tsx"),ButtonIcon=__webpack_require__("./src/app/components/ButtonIcon/ButtonIcon.tsx");const ColorPicker_ColorPicker_ColorPicker=param=>{let{onChange,value,label,buttonLabel,disabled}=param;const[selectedColor,setSelectedColor]=(0,react.useState)(value.toUpperCase()),[tempColor,setTempColor]=(0,react.useState)(value.toUpperCase()),[openColorPicker,setOpenColorPicker]=(0,react.useState)(!1),colorPickerRef=(0,react.useRef)(null);(0,react.useEffect)((()=>{setSelectedColor(value.toUpperCase()),setTempColor(value.toUpperCase())}),[value]),(0,react.useEffect)((()=>{function handleClickOutside(event){colorPickerRef.current&&!colorPickerRef.current.contains(event.target)&&setOpenColorPicker(!1)}return document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)}}),[]);const toggleColorPicker=()=>{disabled||setOpenColorPicker(!openColorPicker)};return(0,jsx_runtime.jsxs)("div",{className:"color-picker-root",children:[(0,jsx_runtime.jsx)("div",{className:"color-picker-label",children:label}),(0,jsx_runtime.jsxs)("div",{className:"color-picker-input",children:[disabled?(0,jsx_runtime.jsx)(ButtonIcon.A,{variant:"secondary",disable:!0,type:"default",size:"md",typeIcon:"add"}):(0,jsx_runtime.jsx)("div",{className:"color-preview",onClick:toggleColorPicker,style:{backgroundColor:tempColor}}),(0,jsx_runtime.jsx)("input",{disabled,size:0,onClick:toggleColorPicker,value:tempColor})]}),openColorPicker&&(0,jsx_runtime.jsxs)("div",{ref:colorPickerRef,className:"color-picker",children:[(0,jsx_runtime.jsx)(es.xk,{color:selectedColor,onChange:colorResult=>{const newColor=colorResult.hex.toUpperCase();setSelectedColor(newColor)},disableAlpha:!0}),(0,jsx_runtime.jsx)(Button.A,{size:"md",variant:"primary",label:buttonLabel||"Apply",onClick:()=>{setTempColor(selectedColor),setOpenColorPicker(!1),onChange(selectedColor)}})]})]})},components_ColorPicker_ColorPicker=ColorPicker_ColorPicker_ColorPicker;ColorPicker_ColorPicker_ColorPicker.__docgenInfo={description:"",methods:[],displayName:"ColorPicker",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(color: string) => void",signature:{arguments:[{type:{name:"string"},name:"color"}],return:{name:"void"}}},description:""},value:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},buttonLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonIcon/ButtonIcon.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".button-icon{display:flex;align-items:center;border:none;padding:0;cursor:pointer;box-sizing:border-box}.button-icon.sm.plain{padding:4px;height:24px}.button-icon.md.plain{padding:4px;height:32px}.button-icon.plain{border-radius:var(--s-border-radius-small);color:var(--s-color-content-default);background-color:rgba(0,0,0,0)}.button-icon.plain:hover{background-color:var(--s-color-fill-default-hover)}.button-icon.plain.on-color{color:var(--s-color-content-on-color)}.button-icon.plain.on-color:hover{background-color:rgba(255,255,255,.16)}.button-icon.plain:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button-icon.plain:disabled{cursor:auto}.button-icon.plain:disabled:hover{color:var(--s-color-content-default);background-color:rgba(0,0,0,0)}.button-icon.sm.default>*{padding:var(--s-spacing-nano)}.button-icon.md.default>*{padding:var(--s-spacing-xx-small);font-size:24px}.button-icon.default{border-radius:4px;width:min-content;height:min-content}.button-icon.default:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button-icon.default.primary{background-color:var(--s-color-fill-highlight);color:var(--s-color-content-on-color)}.button-icon.default.primary:hover{background-color:var(--s-color-fill-highlight-hover)}.button-icon.default.primary:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}.button-icon.default.secondary{border:var(--s-border-width-hairline) solid var(--s-color-border-default);background-color:var(--s-color-fill-default);color:var(--s-color-content-default)}.button-icon.default.secondary:hover{background-color:var(--s-color-fill-default-hover)}.button-icon.default.secondary:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}.button-icon.default.success{background-color:var(--s-color-fill-success);color:var(--s-color-content-on-color)}.button-icon.default.success:hover{background-color:var(--s-color-fill-success-hover)}.button-icon.default.success:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}.button-icon.default.warning{background-color:var(--s-color-fill-warning);color:var(--s-color-content-on-color)}.button-icon.default.warning:hover{background-color:var(--s-color-fill-warning-hover)}.button-icon.default.warning:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}","",{version:3,sources:["webpack://./src/app/components/ButtonIcon/ButtonIcon.scss"],names:[],mappings:"AAAA,aACE,YAAA,CACA,kBAAA,CACA,WAAA,CACA,SAAA,CACA,cAAA,CACA,qBAAA,CAEA,sBACE,WAAA,CACA,WAAA,CAGF,sBACE,WAAA,CACA,WAAA,CAGF,mBACE,0CAAA,CACA,oCAAA,CACA,8BAAA,CAEA,yBACE,kDAAA,CAGF,4BACE,qCAAA,CAEA,kCACE,sCAAA,CAIJ,iCACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,4BACE,WAAA,CACA,kCACE,oCAAA,CACA,8BAAA,CAKN,0BACE,6BAAA,CAGF,0BACE,iCAAA,CACA,cAAA,CAGF,qBACE,iBAAA,CACA,iBAAA,CACA,kBAAA,CAEA,mCACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,6BACE,8CAAA,CACA,qCAAA,CAEA,mCACE,oDAAA,CAGF,sCACE,WAAA,CACA,4CAAA,CACA,WAAA,CAIJ,+BACE,yEAAA,CACA,4CAAA,CACA,oCAAA,CAEA,qCACE,kDAAA,CAGF,wCACE,WAAA,CACA,4CAAA,CACA,WAAA,CAIJ,6BACE,4CAAA,CACA,qCAAA,CAEA,mCACE,kDAAA,CAGF,sCACE,WAAA,CACA,4CAAA,CACA,WAAA,CAIJ,6BACE,4CAAA,CACA,qCAAA,CAEA,mCACE,kDAAA,CAGF,sCACE,WAAA,CACA,4CAAA,CACA,WAAA",sourcesContent:[".button-icon {\n  display: flex;\n  align-items: center;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  box-sizing: border-box;\n\n  &.sm.plain {\n    padding: 4px;\n    height: 24px;\n  }\n\n  &.md.plain {\n    padding: 4px;\n    height: 32px;\n  }\n\n  &.plain {\n    border-radius: var(--s-border-radius-small);\n    color: var(--s-color-content-default);\n    background-color: transparent;\n\n    &:hover {\n      background-color: var(--s-color-fill-default-hover);\n    }\n\n    &.on-color {\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: rgba(white, 0.16);\n      }\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      cursor: auto;\n      &:hover {\n        color: var(--s-color-content-default);\n        background-color: transparent;\n      }\n    }\n  }\n\n  &.sm.default > * {\n    padding: var(--s-spacing-nano);\n  }\n\n  &.md.default > * {\n    padding: var(--s-spacing-xx-small);\n    font-size: 24px;\n  }\n\n  &.default {\n    border-radius: 4px;\n    width: min-content;\n    height: min-content;\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &.primary {\n      background-color: var(--s-color-fill-highlight);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-highlight-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n\n    &.secondary {\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n\n      &:hover {\n        background-color: var(--s-color-fill-default-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n\n    &.success {\n      background-color: var(--s-color-fill-success);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-success-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n\n    &.warning {\n      background-color: var(--s-color-fill-warning);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-warning-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ColorPicker/ColorPicker.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".color-picker-root .color-picker-label{padding-bottom:var(--s-spacing-nano);font:var(--s-typography-label-medium);color:var(--s-color-content-default)}.color-picker-root .color-picker-input{display:flex;align-items:center;gap:var(--s-spacing-xx-small)}.color-picker-root .color-picker-input input{height:40px;width:100%;background-color:rgba(0,0,0,0);border:none;padding:0;color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular);border-radius:var(--s-border-radius-small);border:var(--s-border-width-hairline) solid var(--s-color-border-default);padding-left:var(--s-spacing-xx-small);background-color:var(--s-color-fill-default)}.color-picker-root .color-picker-input input:hover{background-color:var(--s-color-fill-default-hover)}.color-picker-root .color-picker-input input:focus{outline:none}.color-picker-root .color-picker-input input:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.color-picker-root .color-picker-input input:disabled{background-color:var(--s-color-fill-disable);opacity:.64}.color-picker-root .color-picker-input .color-preview{min-width:40px;cursor:pointer;height:40px;width:40px;box-sizing:border-box;border-radius:var(--s-border-radius-small);transition:.3s background ease-in-out;border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.color-picker-root .color-picker{margin-top:8px;z-index:99;position:absolute;display:flex;flex-direction:column;padding:var(--s-spacing-xx-small) !important;border-radius:var(--s-border-radius-small) !important;border:var(--s-border-width-hairline) solid var(--s-color-border-default) !important;box-shadow:var(--s-shadow-level-1) !important;width:fit-content;gap:8px;background-color:var(--s-color-fill-default)}.color-picker-root .color-picker .chrome-picker{background-color:var(--s-color-fill-default) !important;padding:0px !important;border-radius:0px !important;border:0px !important;box-shadow:none !important;gap:8px !important;display:flex;flex-direction:column}.color-picker-root .color-picker .chrome-picker .saturation-white :nth-child(2) div{background-color:rgba(0,0,0,0) !important;border:4px solid #fff !important;height:17px !important;width:17px !important;border-radius:var(--s-border-radius-pill) !important;-webkit-box-shadow:none !important;box-shadow:none !important;transform:translate(-6px, -6px)}.color-picker-root .color-picker .chrome-picker>:nth-child(1){border-radius:var(--s-border-radius-small) !important}.color-picker-root .color-picker .chrome-picker>:nth-child(2){padding:0px !important;display:flex;flex-direction:column}.color-picker-root .color-picker .chrome-picker>:nth-child(2)>:nth-child(1)>:nth-child(1){display:none}.color-picker-root .color-picker .chrome-picker>:nth-child(2)>:nth-child(2)>:nth-child(2){display:none}.color-picker-root .color-picker .chrome-picker .flexbox-fix{background-color:var(--s-color-fill-default)}.color-picker-root .color-picker .chrome-picker .flexbox-fix>:nth-child(1){padding:0px}.color-picker-root .color-picker .chrome-picker .flexbox-fix label{display:none !important}.color-picker-root .color-picker .chrome-picker input{box-shadow:none !important;margin:0;padding:0;background-color:var(--s-color-fill-default);color:var(--s-color-content-default) !important;font:var(--s-typography-paragraph-regular) !important;text-align:left !important;padding-left:var(--s-spacing-xx-small);height:40px !important;border-radius:var(--s-border-radius-small) !important;border:var(--s-border-width-hairline) solid var(--s-color-border-default) !important}.color-picker-root .color-picker .chrome-picker input:focus{outline:none}.color-picker-root .color-picker .chrome-picker input:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.color-picker-root .color-picker .hue-horizontal{border-radius:var(--s-border-radius-pill) !important;height:18px !important}.color-picker-root .color-picker .hue-horizontal div div{background-color:rgba(0,0,0,0) !important;border:4px solid #fff !important;height:17px !important;width:17px !important;border-radius:var(--s-border-radius-pill) !important;transform:translate(-6px, 0px) !important}","",{version:3,sources:["webpack://./src/app/components/ColorPicker/ColorPicker.scss"],names:[],mappings:"AACE,uCACE,oCAAA,CACA,qCAAA,CACA,oCAAA,CAEF,uCACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,6CACE,WAAA,CACA,UAAA,CACA,8BAAA,CACA,WAAA,CACA,SAAA,CACA,oCAAA,CACA,0CAAA,CACA,0CAAA,CACA,yEAAA,CACA,sCAAA,CACA,4CAAA,CAEA,mDACE,kDAAA,CAEF,mDACE,YAAA,CAGF,2DACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,sDACE,4CAAA,CACA,WAAA,CAGJ,sDACE,cAAA,CACA,cAAA,CACA,WAAA,CACA,UAAA,CACA,qBAAA,CACA,0CAAA,CACA,qCAAA,CACA,yEAAA,CAIJ,iCACE,cAAA,CACA,UAAA,CACA,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,4CAAA,CACA,qDAAA,CACA,oFAAA,CACA,6CAAA,CACA,iBAAA,CACA,OAAA,CACA,4CAAA,CAEA,gDACE,uDAAA,CACA,sBAAA,CACA,4BAAA,CACA,qBAAA,CACA,0BAAA,CACA,kBAAA,CACA,YAAA,CACA,qBAAA,CAII,oFACE,yCAAA,CACA,gCAAA,CACA,sBAAA,CACA,qBAAA,CACA,oDAAA,CACA,kCAAA,CACA,0BAAA,CACA,+BAAA,CAKN,8DACE,qDAAA,CAGF,8DACE,sBAAA,CACA,YAAA,CACA,qBAAA,CAGE,0FACE,YAAA,CAKF,0FACE,YAAA,CAKN,6DACE,4CAAA,CACA,2EACE,WAAA,CAEF,mEACE,uBAAA,CAIJ,sDACE,0BAAA,CACA,QAAA,CACA,SAAA,CACA,4CAAA,CACA,+CAAA,CACA,qDAAA,CACA,0BAAA,CACA,sCAAA,CACA,sBAAA,CACA,qDAAA,CACA,oFAAA,CAEA,4DACE,YAAA,CAEF,oEACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAKN,iDACE,oDAAA,CACA,sBAAA,CAEE,yDACE,yCAAA,CACA,gCAAA,CACA,sBAAA,CACA,qBAAA,CACA,oDAAA,CACA,yCAAA",sourcesContent:[".color-picker-root {\n  .color-picker-label {\n    padding-bottom: var(--s-spacing-nano);\n    font: var(--s-typography-label-medium);\n    color: var(--s-color-content-default);\n  }\n  .color-picker-input {\n    display: flex;\n    align-items: center;\n    gap: var(--s-spacing-xx-small);\n    input {\n      height: 40px;\n      width: 100%;\n      background-color: transparent;\n      border: none;\n      padding: 0;\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n      border-radius: var(--s-border-radius-small);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n      padding-left: var(--s-spacing-xx-small);\n      background-color: var(--s-color-fill-default);\n\n      &:hover {\n        background-color: var(--s-color-fill-default-hover);\n      }\n      &:focus {\n        outline: none;\n      }\n\n      &:focus-visible {\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-fill-highlight);\n        outline-offset: var(--s-border-width-thin);\n        outline-style: solid;\n      }\n\n      &:disabled {\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n    .color-preview {\n      min-width: 40px;\n      cursor: pointer;\n      height: 40px;\n      width: 40px;\n      box-sizing: border-box;\n      border-radius: var(--s-border-radius-small);\n      transition: 0.3s background ease-in-out;\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    }\n  }\n\n  .color-picker {\n    margin-top: 8px;\n    z-index: 99;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    padding: var(--s-spacing-xx-small) !important;\n    border-radius: var(--s-border-radius-small) !important;\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default) !important;\n    box-shadow: var(--s-shadow-level-1) !important;\n    width: fit-content;\n    gap: 8px;\n    background-color: var(--s-color-fill-default);\n\n    .chrome-picker {\n      background-color: var(--s-color-fill-default) !important;\n      padding: 0px !important;\n      border-radius: 0px !important;\n      border: 0px !important;\n      box-shadow: none !important;\n      gap: 8px !important;\n      display: flex;\n      flex-direction: column;\n\n      .saturation-white {\n        :nth-child(2) {\n          div {\n            background-color: transparent !important;\n            border: 4px solid white !important;\n            height: 17px !important;\n            width: 17px !important;\n            border-radius: var(--s-border-radius-pill) !important;\n            -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n            transform: translate(-6px, -6px);\n          }\n        }\n      }\n\n      > :nth-child(1) {\n        border-radius: var(--s-border-radius-small) !important;\n      }\n\n      > :nth-child(2) {\n        padding: 0px !important;\n        display: flex;\n        flex-direction: column;\n\n        > :nth-child(1) {\n          > :nth-child(1) {\n            display: none;\n          }\n        }\n\n        > :nth-child(2) {\n          > :nth-child(2) {\n            display: none;\n          }\n        }\n      }\n\n      .flexbox-fix {\n        background-color: var(--s-color-fill-default);\n        > :nth-child(1) {\n          padding: 0px;\n        }\n        label {\n          display: none !important;\n        }\n      }\n\n      input {\n        box-shadow: none !important;\n        margin: 0;\n        padding: 0;\n        background-color: var(--s-color-fill-default);\n        color: var(--s-color-content-default) !important;\n        font: var(--s-typography-paragraph-regular) !important;\n        text-align: left !important;\n        padding-left: var(--s-spacing-xx-small);\n        height: 40px !important;\n        border-radius: var(--s-border-radius-small) !important;\n        border: var(--s-border-width-hairline) solid\n          var(--s-color-border-default) !important;\n        &:focus {\n          outline: none;\n        }\n        &:focus-visible {\n          outline-width: var(--s-border-width-thin);\n          outline-color: var(--s-color-fill-highlight);\n          outline-offset: var(--s-border-width-thin);\n          outline-style: solid;\n        }\n      }\n    }\n\n    .hue-horizontal {\n      border-radius: var(--s-border-radius-pill) !important;\n      height: 18px !important;\n      div {\n        div {\n          background-color: transparent !important;\n          border: 4px solid white !important;\n          height: 17px !important;\n          width: 17px !important;\n          border-radius: var(--s-border-radius-pill) !important;\n          transform: translate(-6px, 0px) !important;\n        }\n      }\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);