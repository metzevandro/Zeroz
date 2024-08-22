"use strict";(self.webpackChunkdesign_system_zeroz=self.webpackChunkdesign_system_zeroz||[]).push([[7672],{"./src/stories/components/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Skeleton:()=>Skeleton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,disabled:()=>disabled,loading:()=>loading,primary:()=>primary,secondary:()=>secondary,success:()=>success,warning:()=>warning,withIcon:()=>withIcon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/Button.tsx"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./src/styles.scss"),__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"));__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Button",component:_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__.A,parameters:{layout:"centered",docs:{page:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.hE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Pd,{children:"Component"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:"Buttons"})," are used to initialize an action. The words on a button tell you what will happen when you click it."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Tn,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.om,{})]})}},tags:["autodocs"],argTypes:{size:{description:"Defines the size of the button. Options are 'small', 'medium', and 'large'.",control:{type:"select",options:["sm","md","lg"]},defaultValue:"md",table:{category:"Appearance",type:{summary:"sm | md | lg"}}},disabled:{description:"Determines if the button is disabled.",control:{type:"boolean"},defaultValue:!1,table:{category:"State",type:{summary:"boolean"}}},label:{description:"Text to be displayed inside the button.",control:{type:"text"},defaultValue:"Button",table:{category:"Content",type:{summary:"string"}}},typeIcon:{description:"Defines the type of icon to be displayed inside the button. Uses Material Icons names.",control:{type:"text"},defaultValue:"",table:{category:"Content",type:{summary:"string"}}},variant:{description:"Defines the visual style of the button. Options are 'primary', 'secondary', 'success', 'warning', and 'is-loading'.",control:{type:"select",options:["primary","secondary","success","warning","is-loading"]},defaultValue:"primary",table:{category:"Appearance",type:{summary:"primary | secondary | success | warning | is-loading"}}},skeleton:{description:"Displays the button in a skeleton loading state.",control:{type:"boolean"},defaultValue:!1,table:{category:"State",type:{summary:"boolean"}}},onClick:{description:"Callback function triggered when the button is clicked.",action:"clicked",table:{category:"Events",type:{summary:"(event: React.MouseEvent<HTMLButtonElement>) => void"}}}}},primary={args:{size:"md",disabled:!1,label:"Button",typeIcon:"",variant:"primary",skeleton:!1}},secondary={args:{size:"md",disabled:!1,label:"Button",typeIcon:"",variant:"secondary"}},success={args:{size:"md",disabled:!1,label:"Button",typeIcon:"",variant:"success"}},warning={args:{size:"md",disabled:!1,label:"Button",typeIcon:"",variant:"warning"}},withIcon={args:{size:"md",disabled:!1,label:"Button",typeIcon:"ac_unit",variant:"primary"}},disabled={args:{size:"md",disabled:!0,label:"Button",typeIcon:"ac_unit",variant:"primary"}},loading={args:{size:"md",label:"Button",variant:"is-loading"}},Skeleton={args:{size:"md",label:"Button",variant:"primary",skeleton:!0}},__namedExportsOrder=["primary","secondary","success","warning","withIcon","disabled","loading","Skeleton"];primary.parameters={...primary.parameters,docs:{...primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "md",\n    disabled: false,\n    label: "Button",\n    typeIcon: "",\n    variant: "primary",\n    skeleton: false\n  }\n}',...primary.parameters?.docs?.source}}},secondary.parameters={...secondary.parameters,docs:{...secondary.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "md",\n    disabled: false,\n    label: "Button",\n    typeIcon: "",\n    variant: "secondary"\n  }\n}',...secondary.parameters?.docs?.source}}},success.parameters={...success.parameters,docs:{...success.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "md",\n    disabled: false,\n    label: "Button",\n    typeIcon: "",\n    variant: "success"\n  }\n}',...success.parameters?.docs?.source}}},warning.parameters={...warning.parameters,docs:{...warning.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "md",\n    disabled: false,\n    label: "Button",\n    typeIcon: "",\n    variant: "warning"\n  }\n}',...warning.parameters?.docs?.source}}},withIcon.parameters={...withIcon.parameters,docs:{...withIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "md",\n    disabled: false,\n    label: "Button",\n    typeIcon: "ac_unit",\n    variant: "primary"\n  }\n}',...withIcon.parameters?.docs?.source}}},disabled.parameters={...disabled.parameters,docs:{...disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "md",\n    disabled: true,\n    label: "Button",\n    typeIcon: "ac_unit",\n    variant: "primary"\n  }\n}',...disabled.parameters?.docs?.source}}},loading.parameters={...loading.parameters,docs:{...loading.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "md",\n    label: "Button",\n    variant: "is-loading"\n  }\n}',...loading.parameters?.docs?.source}}},Skeleton.parameters={...Skeleton.parameters,docs:{...Skeleton.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "md",\n    label: "Button",\n    variant: "primary",\n    skeleton: true\n  }\n}',...Skeleton.parameters?.docs?.source}}}}}]);