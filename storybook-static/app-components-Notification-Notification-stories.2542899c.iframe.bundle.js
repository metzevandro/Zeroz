"use strict";(self.webpackChunkdesign_system_zeroz=self.webpackChunkdesign_system_zeroz||[]).push([[8289],{"./src/app/components/Notification/Notification.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dismissible:()=>Dismissible,Float:()=>Float,Inline:()=>Inline,Secondary:()=>Secondary,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Notification_stories,primary:()=>primary});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),ButtonIcon=__webpack_require__("./src/app/components/ButtonIcon/ButtonIcon.tsx"),Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Notification=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Notification/Notification.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Notification.A,options);Notification.A&&Notification.A.locals&&Notification.A.locals;var Button=__webpack_require__("./src/app/components/Button/Button.tsx");const Notification_Notification_Notification=({icon,title,description,variant,type,isOpen,dismissible,withAction,disableButton,onClickButton,buttonLabel})=>{const[isClose,setIsClose]=(0,react.useState)(!0);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:isClose&&(0,jsx_runtime.jsxs)("div",{className:`notification ${variant} ${type} ${dismissible&&"dismissible"} ${isOpen?"open":""}`,children:[(0,jsx_runtime.jsxs)("div",{className:`notification-title ${variant}`,children:[(0,jsx_runtime.jsx)(Icon.A,{icon,size:"md"}),(0,jsx_runtime.jsx)("div",{className:"title",children:title}),dismissible&&(0,jsx_runtime.jsx)(ButtonIcon.A,{variant:"on-color",size:"sm",typeIcon:"close",buttonType:"plain",onClick:()=>{setIsClose(!1)}})]}),(0,jsx_runtime.jsxs)("div",{className:"notification-content",children:[description&&(0,jsx_runtime.jsx)("div",{className:"description",children:description}),withAction&&(0,jsx_runtime.jsx)("div",{className:"notification-with-action",children:(0,jsx_runtime.jsx)(Button.A,{size:"md",variant,disabled:disableButton,label:buttonLabel,onClick:onClickButton})})]})]})})},components_Notification_Notification=Notification_Notification_Notification;try{Notification_Notification_Notification.displayName="Notification",Notification_Notification_Notification.__docgenInfo={description:"",displayName:"Notification",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"float"'},{value:'"inline"'}]}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},dismissible:{defaultValue:null,description:"",name:"dismissible",required:!1,type:{name:"boolean"}},withAction:{defaultValue:null,description:"",name:"withAction",required:!1,type:{name:"boolean"}},disableButton:{defaultValue:null,description:"",name:"disableButton",required:!1,type:{name:"boolean"}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!1,type:{name:"string"}},onClickButton:{defaultValue:null,description:"",name:"onClickButton",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Notification/Notification.tsx#Notification"]={docgenInfo:Notification_Notification_Notification.__docgenInfo,name:"Notification",path:"src/app/components/Notification/Notification.tsx#Notification"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/app/styles.scss");var dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const Notification_stories={title:"Components/Notification",component:components_Notification_Notification,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{page:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.hE,{}),(0,jsx_runtime.jsx)(dist.Pd,{children:"Component"}),(0,jsx_runtime.jsxs)("p",{children:["The ",(0,jsx_runtime.jsx)("strong",{children:"Notifications"})," are messages that share info with users. There are two types: toast notifications, which pop up briefly, and inline notifications, which appear in the same spot."]}),(0,jsx_runtime.jsx)(dist.Tn,{}),(0,jsx_runtime.jsx)(dist.H2,{}),(0,jsx_runtime.jsx)(dist.om,{})]})}},argTypes:{description:{control:"text",description:"The text content of the notification.",table:{category:"Content"}},icon:{control:"text",description:"The icon displayed in the notification.",table:{category:"Appearance"}},title:{control:"text",description:"The title of the notification.",table:{category:"Content"}},type:{control:"radio",options:["inline","float"],description:"The type of notification, determining its position and style.",table:{category:"Appearance"}},variant:{control:"radio",options:["primary","secondary","success","warning"],description:"The variant of the notification, determining its color scheme.",table:{category:"Appearance"}},dismissible:{control:"boolean",description:"If true, the notification can be dismissed by the user.",table:{category:"State"}},buttonLabel:{control:"text",description:"Label for the action button in the notification.",table:{category:"Actions"}},disableButton:{control:"boolean",description:"If true, the action button is disabled.",table:{category:"Actions"}},withAction:{control:"boolean",description:"If true, an action button is displayed in the notification.",table:{category:"Actions"}},isOpen:{control:"boolean",description:"If true, the notification is displayed.",table:{category:"State"}}}},Template=args=>(0,jsx_runtime.jsx)("div",{style:{height:"100vh",padding:"var(--s-spacing-small)"},children:(0,jsx_runtime.jsx)(components_Notification_Notification,{...args})}),Inline=Template.bind({});Inline.args={description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",icon:"ac_unit",title:"Title",type:"inline",variant:"primary",dismissible:!1,buttonLabel:"Button",disableButton:!1,withAction:!0,isOpen:!0};const Float=Template.bind({});Float.args={description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",icon:"ac_unit",title:"Title",type:"float",variant:"primary",dismissible:!1,buttonLabel:"Button",disableButton:!1,withAction:!0,isOpen:!0};const primary=Template.bind({});primary.args={description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",icon:"ac_unit",title:"Title",type:"inline",variant:"primary",dismissible:!1,buttonLabel:"Button",disableButton:!1,withAction:!1,isOpen:!0};const Secondary=Template.bind({});Secondary.args={description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",icon:"ac_unit",title:"Title",type:"inline",variant:"secondary",dismissible:!1,buttonLabel:"Button",disableButton:!1,withAction:!1,isOpen:!0};const Success=Template.bind({});Success.args={description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",icon:"ac_unit",title:"Title",type:"inline",variant:"success",dismissible:!1,buttonLabel:"Button",disableButton:!1,withAction:!1,isOpen:!0};const Warning=Template.bind({});Warning.args={description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",icon:"ac_unit",title:"Title",type:"inline",variant:"warning",dismissible:!1,buttonLabel:"Button",disableButton:!1,withAction:!1,isOpen:!0};const Dismissible=Template.bind({});Dismissible.args={description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",icon:"ac_unit",title:"Title",type:"inline",variant:"primary",dismissible:!0,buttonLabel:"Button",disableButton:!0,withAction:!1,isOpen:!0};const __namedExportsOrder=["Inline","Float","primary","Secondary","Success","Warning","Dismissible"];Inline.parameters={...Inline.parameters,docs:{...Inline.parameters?.docs,source:{originalSource:'args => {\n  return <div style={{\n    height: "100vh",\n    padding: "var(--s-spacing-small)"\n  }}>\r\n      <Notification {...args} />\r\n    </div>;\n}',...Inline.parameters?.docs?.source}}},Float.parameters={...Float.parameters,docs:{...Float.parameters?.docs,source:{originalSource:'args => {\n  return <div style={{\n    height: "100vh",\n    padding: "var(--s-spacing-small)"\n  }}>\r\n      <Notification {...args} />\r\n    </div>;\n}',...Float.parameters?.docs?.source}}},primary.parameters={...primary.parameters,docs:{...primary.parameters?.docs,source:{originalSource:'args => {\n  return <div style={{\n    height: "100vh",\n    padding: "var(--s-spacing-small)"\n  }}>\r\n      <Notification {...args} />\r\n    </div>;\n}',...primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'args => {\n  return <div style={{\n    height: "100vh",\n    padding: "var(--s-spacing-small)"\n  }}>\r\n      <Notification {...args} />\r\n    </div>;\n}',...Secondary.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:'args => {\n  return <div style={{\n    height: "100vh",\n    padding: "var(--s-spacing-small)"\n  }}>\r\n      <Notification {...args} />\r\n    </div>;\n}',...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'args => {\n  return <div style={{\n    height: "100vh",\n    padding: "var(--s-spacing-small)"\n  }}>\r\n      <Notification {...args} />\r\n    </div>;\n}',...Warning.parameters?.docs?.source}}},Dismissible.parameters={...Dismissible.parameters,docs:{...Dismissible.parameters?.docs,source:{originalSource:'args => {\n  return <div style={{\n    height: "100vh",\n    padding: "var(--s-spacing-small)"\n  }}>\r\n      <Notification {...args} />\r\n    </div>;\n}',...Dismissible.parameters?.docs?.source}}}},"./src/app/components/ButtonIcon/ButtonIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_ButtonIcon_ButtonIcon});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ButtonIcon=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonIcon/ButtonIcon.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ButtonIcon.A,options);ButtonIcon.A&&ButtonIcon.A.locals&&ButtonIcon.A.locals;var Skeleton=__webpack_require__("./src/app/components/Skeleton/Skeleton.tsx");const ButtonIcon_ButtonIcon_ButtonIcon=({size,buttonType,typeIcon,variant,disabled,skeleton,...rest})=>{const buttonRef=(0,react.useRef)(null),[dimensions,setDimensions]=(0,react.useState)(null);return(0,react.useEffect)((()=>{if(buttonRef.current){const{offsetHeight:height,offsetWidth:width}=buttonRef.current;setDimensions({height,width})}}),[size,variant]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:skeleton&&dimensions?(0,jsx_runtime.jsx)(Skeleton.A,{height:`${dimensions.height}`,width:`${dimensions.width}`}):(0,jsx_runtime.jsx)("button",{...rest,ref:buttonRef,disabled,className:`button-icon ${variant} ${size} ${buttonType}`,children:typeIcon&&(0,jsx_runtime.jsx)(Icon.A,{icon:typeIcon,size:"default"===buttonType?"md":size})})})},components_ButtonIcon_ButtonIcon=ButtonIcon_ButtonIcon_ButtonIcon;try{ButtonIcon_ButtonIcon_ButtonIcon.displayName="ButtonIcon",ButtonIcon_ButtonIcon_ButtonIcon.__docgenInfo={description:"",displayName:"ButtonIcon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"on-color"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},buttonType:{defaultValue:null,description:"",name:"buttonType",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"plain"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},typeIcon:{defaultValue:null,description:"",name:"typeIcon",required:!0,type:{name:"string"}},skeleton:{defaultValue:null,description:"",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/ButtonIcon/ButtonIcon.tsx#ButtonIcon"]={docgenInfo:ButtonIcon_ButtonIcon_ButtonIcon.__docgenInfo,name:"ButtonIcon",path:"src/app/components/ButtonIcon/ButtonIcon.tsx#ButtonIcon"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonIcon/ButtonIcon.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".button-icon{display:flex;align-items:center;justify-content:center;cursor:pointer}.button-icon:focus-visible{outline:var(--s-border-width-thin) solid var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin)}.button-icon.plain{padding:4px;border-radius:var(--s-border-radius-medium);color:var(--s-color-content-default);background-color:rgba(0,0,0,0)}.button-icon.plain:hover{background-color:var(--s-color-fill-default-hover)}.button-icon.plain.on-color{background-color:rgba(0,0,0,0);color:var(--s-color-content-on-color);box-shadow:none}.button-icon.plain.on-color:hover{background-color:rgba(255,255,255,.16)}.button-icon.sm.default{padding:4px}.button-icon.md.default{padding:8px}.button-icon.default.primary{color:var(--s-color-content-on-color);background-color:var(--s-color-fill-highlight);border-radius:var(--s-border-radius-medium);box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 1px var(--s-color-fill-highlight) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.button-icon.default.primary:hover{background-color:var(--s-color-fill-highlight-hover)}.button-icon.default.secondary{color:var(--s-color-content-default);background-color:var(--s-color-fill-default);border:var(--s-border-width-hairline) var(--s-color-border-default) solid;border-radius:var(--s-border-radius-medium)}.button-icon.default.secondary:hover{background-color:var(--s-color-fill-default-hover);border:var(--s-border-width-hairline) var(--s-color-border-default-hover) solid}.button-icon.default.success{color:var(--s-color-content-on-color);background-color:var(--s-color-fill-success);border-radius:var(--s-border-radius-medium);box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 1px var(--s-color-fill-success) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.button-icon.default.success:hover{background-color:var(--s-color-fill-success-hover)}.button-icon.default.warning{color:var(--s-color-content-on-color);background-color:var(--s-color-fill-warning);border-radius:var(--s-border-radius-medium);box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 1px var(--s-color-fill-warning) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.button-icon.default.warning:hover{background-color:var(--s-color-fill-warning-hover)}.button-icon:disabled{cursor:auto;border-radius:var(--s-border-radius-medium);background-color:var(--s-color-fill-disable) !important;color:var(--s-color-content-disable) !important;box-shadow:none !important}","",{version:3,sources:["webpack://./src/app/components/ButtonIcon/ButtonIcon.scss"],names:[],mappings:"AAAA,aACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,cAAA,CAEA,2BACE,wEAAA,CACA,yCAAA,CAGF,mBACE,WAAA,CACA,2CAAA,CACA,oCAAA,CACA,8BAAA,CAEA,yBACE,kDAAA,CAGF,4BACE,8BAAA,CACA,qCAAA,CACA,eAAA,CAEA,kCACE,sCAAA,CAMJ,wBACE,WAAA,CAKF,wBACE,WAAA,CAKF,6BACE,qCAAA,CACA,8CAAA,CACA,2CAAA,CACA,4NACE,CAMF,mCACE,oDAAA,CAIJ,+BACE,oCAAA,CACA,4CAAA,CACA,yEAAA,CACA,2CAAA,CAEA,qCACE,kDAAA,CACA,+EAAA,CAKJ,6BACE,qCAAA,CACA,4CAAA,CACA,2CAAA,CACA,0NACE,CAMF,mCACE,kDAAA,CAIJ,6BACE,qCAAA,CACA,4CAAA,CACA,2CAAA,CACA,0NACE,CAMF,mCACE,kDAAA,CAKN,sBACE,WAAA,CACA,2CAAA,CACA,uDAAA,CACA,+CAAA,CACA,0BAAA",sourcesContent:[".button-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  &:focus-visible {\n    outline: var(--s-border-width-thin) solid var(--s-color-border-highlight);\n    outline-offset: var(--s-border-width-thin);\n  }\n\n  &.plain {\n    padding: 4px;\n    border-radius: var(--s-border-radius-medium);\n    color: var(--s-color-content-default);\n    background-color: transparent;\n\n    &:hover {\n      background-color: var(--s-color-fill-default-hover);\n    }\n\n    &.on-color {\n      background-color: transparent;\n      color: var(--s-color-content-on-color);\n      box-shadow: none;\n\n      &:hover {\n        background-color: rgba(white, 0.16);\n      }\n    }\n  }\n\n  &.sm {\n    &.default {\n      padding: 4px;\n    }\n  }\n\n  &.md {\n    &.default {\n      padding: 8px;\n    }\n  }\n\n  &.default {\n    &.primary {\n      color: var(--s-color-content-on-color);\n      background-color: var(--s-color-fill-highlight);\n      border-radius: var(--s-border-radius-medium);\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 1px var(--s-color-fill-highlight) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n      &:hover {\n        background-color: var(--s-color-fill-highlight-hover);\n      }\n    }\n\n    &.secondary {\n      color: var(--s-color-content-default);\n      background-color: var(--s-color-fill-default);\n      border: var(--s-border-width-hairline) var(--s-color-border-default) solid;\n      border-radius: var(--s-border-radius-medium);\n\n      &:hover {\n        background-color: var(--s-color-fill-default-hover);\n        border: var(--s-border-width-hairline)\n          var(--s-color-border-default-hover) solid;\n      }\n    }\n\n    &.success {\n      color: var(--s-color-content-on-color);\n      background-color: var(--s-color-fill-success);\n      border-radius: var(--s-border-radius-medium);\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 1px var(--s-color-fill-success) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n      &:hover {\n        background-color: var(--s-color-fill-success-hover);\n      }\n    }\n\n    &.warning {\n      color: var(--s-color-content-on-color);\n      background-color: var(--s-color-fill-warning);\n      border-radius: var(--s-border-radius-medium);\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 1px var(--s-color-fill-warning) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n      &:hover {\n        background-color: var(--s-color-fill-warning-hover);\n      }\n    }\n  }\n\n  &:disabled {\n    cursor: auto;\n    border-radius: var(--s-border-radius-medium);\n    background-color: var(--s-color-fill-disable) !important;\n    color: var(--s-color-content-disable) !important;\n    box-shadow: none !important;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Notification/Notification.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".notification{background-color:var(--s-color-fill-default);display:flex;flex-direction:column;border-radius:var(--s-border-radius-medium);border:var(--s-border-width-hairline) solid var(--s-color-border-default);overflow:hidden}.notification.float{max-width:368px;position:fixed;right:24px;bottom:-100vw;box-shadow:var(--s-shadow-dropdown)}.notification.float.open{animation:float 5s ease-in-out}.notification .notification-content{display:flex;flex-direction:column;width:100%;padding:var(--s-spacing-small);gap:var(--s-spacing-small)}.notification .notification-content .description{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);word-break:break-all}.notification .notification-content .notification-with-action{display:flex;width:min-content}.notification .notification-title{display:flex;flex-direction:row;align-items:center;padding:var(--s-spacing-small);gap:var(--s-spacing-xx-small);color:var(--s-color-content-on-color)}.notification .notification-title .title{width:100%;font:var(--s-typography-heading-small)}.notification .notification-title.primary{background-color:var(--s-color-fill-highlight)}.notification .notification-title.secondary{background-color:var(--s-color-fill-default-light);color:var(--s-color-content-default)}.notification .notification-title.secondary .button-icon.plain.on-color{color:var(--s-color-content-default)}.notification .notification-title.secondary .button-icon.plain.on-color:hover{background-color:var(--s-color-fill-default-hover)}.notification .notification-title.warning{background-color:var(--s-color-fill-warning)}.notification .notification-title.success{background-color:var(--s-color-fill-success)}@media screen and (max-width: 490px){.notification.float{bottom:-100vw;right:24px;left:24px}.notification.float.open{animation:floatMobile 5s ease-in-out}.notification.float.dismissible{animation:floatDismissibleMobile 5s ease-in-out;animation-fill-mode:forwards}}@keyframes floatDismissibleMobile{0%{right:24px;bottom:-100vw}100%{bottom:24px;right:24px;left:24px}}@keyframes floatMobile{0%{right:24px;bottom:-100vw}20%{bottom:24px;right:24px;left:24px}80%{left:24px;bottom:24px;right:24px}100%{left:100vw;right:-85vw;bottom:24px}}@keyframes floatDismissible{0%{right:24px;bottom:-100vw}100%{bottom:24px;right:24px}}@keyframes float{0%{right:24px;bottom:-100vw}20%{bottom:24px;right:24px}80%{bottom:24px;right:24px}100%{right:-40vw;bottom:24px}}","",{version:3,sources:["webpack://./src/app/components/Notification/Notification.scss"],names:[],mappings:"AAEA,cACE,4CAAA,CACA,YAAA,CACA,qBAAA,CACA,2CAAA,CACA,yEAAA,CACA,eAAA,CAEA,oBACE,eAAA,CACA,cAAA,CACA,UAAA,CACA,aAAA,CACA,mCAAA,CACA,yBACE,8BAAA,CAIJ,oCACE,YAAA,CACA,qBAAA,CACA,UAAA,CACA,8BAAA,CACA,0BAAA,CAEA,iDACE,0CAAA,CACA,oCAAA,CACA,oBAAA,CAGF,8DACE,YAAA,CACA,iBAAA,CAIJ,kCACE,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,8BAAA,CACA,6BAAA,CACA,qCAAA,CAEA,yCACE,UAAA,CACA,sCAAA,CAGF,0CACE,8CAAA,CAGF,4CACE,kDAAA,CACA,oCAAA,CAEA,wEACE,oCAAA,CAEA,8EACE,kDAAA,CAKN,0CACE,4CAAA,CAGF,0CACE,4CAAA,CAKN,qCAEI,oBACE,aAAA,CACA,UAAA,CACA,SAAA,CACA,yBACE,oCAAA,CAEF,gCACE,+CAAA,CACA,4BAAA,CAAA,CAMR,kCACE,GACE,UAAA,CACA,aAAA,CAEF,KACE,WAAA,CACA,UAAA,CACA,SAAA,CAAA,CAIJ,uBACE,GACE,UAAA,CACA,aAAA,CAEF,IACE,WAAA,CACA,UAAA,CACA,SAAA,CAEF,IACE,SAAA,CACA,WAAA,CACA,UAAA,CAEF,KACE,UAAA,CACA,WAAA,CACA,WAAA,CAAA,CAIJ,4BACE,GACE,UAAA,CACA,aAAA,CAEF,KACE,WAAA,CACA,UAAA,CAAA,CAIJ,iBACE,GACE,UAAA,CACA,aAAA,CAEF,IACE,WAAA,CACA,UAAA,CAEF,IACE,WAAA,CACA,UAAA,CAEF,KACE,WAAA,CACA,WAAA,CAAA",sourcesContent:['@import "../../../scss/mixins/tokens.scss";\n\n.notification {\n  background-color: var(--s-color-fill-default);\n  display: flex;\n  flex-direction: column;\n  border-radius: var(--s-border-radius-medium);\n  border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n  overflow: hidden;\n\n  &.float {\n    max-width: 368px;\n    position: fixed;\n    right: 24px;\n    bottom: -100vw;\n    box-shadow: var(--s-shadow-dropdown);\n    &.open {\n      animation: float 5s ease-in-out;\n    }\n  }\n\n  .notification-content {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    padding: var(--s-spacing-small);\n    gap: var(--s-spacing-small);\n\n    .description {\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-default);\n      word-break: break-all;\n    }\n\n    .notification-with-action {\n      display: flex;\n      width: min-content;\n    }\n  }\n\n  .notification-title {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: var(--s-spacing-small);\n    gap: var(--s-spacing-xx-small);\n    color: var(--s-color-content-on-color);\n\n    .title {\n      width: 100%;\n      font: var(--s-typography-heading-small);\n    }\n\n    &.primary {\n      background-color: var(--s-color-fill-highlight);\n    }\n\n    &.secondary {\n      background-color: var(--s-color-fill-default-light);\n      color: var(--s-color-content-default);\n\n      .button-icon.plain.on-color {\n        color: var(--s-color-content-default);\n\n        &:hover {\n          background-color: var(--s-color-fill-default-hover);\n        }\n      }\n    }\n\n    &.warning {\n      background-color: var(--s-color-fill-warning);\n    }\n\n    &.success {\n      background-color: var(--s-color-fill-success);\n    }\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .notification {\n    &.float {\n      bottom: -100vw;\n      right: 24px;\n      left: 24px;\n      &.open {\n        animation: floatMobile 5s ease-in-out;\n      }\n      &.dismissible {\n        animation: floatDismissibleMobile 5s ease-in-out;\n        animation-fill-mode: forwards;\n      }\n    }\n  }\n}\n\n@keyframes floatDismissibleMobile {\n  0% {\n    right: 24px;\n    bottom: -100vw;\n  }\n  100% {\n    bottom: 24px;\n    right: 24px;\n    left: 24px;\n  }\n}\n\n@keyframes floatMobile {\n  0% {\n    right: 24px;\n    bottom: -100vw;\n  }\n  20% {\n    bottom: 24px;\n    right: 24px;\n    left: 24px;\n  }\n  80% {\n    left: 24px;\n    bottom: 24px;\n    right: 24px;\n  }\n  100% {\n    left: 100vw;\n    right: -85vw;\n    bottom: 24px;\n  }\n}\n\n@keyframes floatDismissible {\n  0% {\n    right: 24px;\n    bottom: -100vw;\n  }\n  100% {\n    bottom: 24px;\n    right: 24px;\n  }\n}\n\n@keyframes float {\n  0% {\n    right: 24px;\n    bottom: -100vw;\n  }\n  20% {\n    bottom: 24px;\n    right: 24px;\n  }\n  80% {\n    bottom: 24px;\n    right: 24px;\n  }\n  100% {\n    right: -40vw;\n    bottom: 24px;\n  }\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);