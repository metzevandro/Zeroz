(self.webpackChunkdesign_system_zeroz=self.webpackChunkdesign_system_zeroz||[]).push([[5747],{"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/stories/components/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Skeleton:()=>Skeleton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,withImage:()=>withImage,withLetter:()=>withLetter});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Avatar/Avatar.tsx"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/styles.scss"),__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"));const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Avatar",component:_components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_1__.A,parameters:{layout:"centered",docs:{page:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.hE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Pd,{children:"Component"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:"Avatars"})," are used to represent a user, customer or business."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Tn,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.om,{})]})}},tags:["autodocs"],argTypes:{size:{name:"Size",description:"The size of the avatar. Can be 'sm', 'md', or 'lg'.",control:{type:"select",options:["sm","md","lg"]},table:{category:"Appearance",type:{summary:"'sm' | 'md' | 'lg'"}}},src:{name:"Source",description:"The source URL of the avatar image.",control:"text",table:{category:"Data",type:{summary:"string"}}},letter:{name:"Letter",description:"The letter to display when there is no image.",control:"text",table:{category:"Data",type:{summary:"string"}}},skeleton:{name:"Skeleton",description:"If true, the avatar will display a skeleton loading state.",control:"boolean",table:{category:"State",type:{summary:"boolean"}}}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_1__.A,{size:args.size,src:args.src,skeleton:args.skeleton,letter:args.letter}),Default=Template.bind({});Default.args={size:"md",src:"",letter:"",skeleton:!1};const withImage=Template.bind({});withImage.args={size:"md",src:"https://picsum.photos/100",skeleton:!1};const withLetter=Template.bind({});withLetter.args={size:"md",letter:"L",src:"",skeleton:!1};const Skeleton=Template.bind({});Skeleton.args={size:"md",src:"",skeleton:!0};const __namedExportsOrder=["Default","withImage","withLetter","Skeleton"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  return <Avatar size={args.size} src={args.src} skeleton={args.skeleton} letter={args.letter} />;\n}",...Default.parameters?.docs?.source}}},withImage.parameters={...withImage.parameters,docs:{...withImage.parameters?.docs,source:{originalSource:"args => {\n  return <Avatar size={args.size} src={args.src} skeleton={args.skeleton} letter={args.letter} />;\n}",...withImage.parameters?.docs?.source}}},withLetter.parameters={...withLetter.parameters,docs:{...withLetter.parameters?.docs,source:{originalSource:"args => {\n  return <Avatar size={args.size} src={args.src} skeleton={args.skeleton} letter={args.letter} />;\n}",...withLetter.parameters?.docs?.source}}},Skeleton.parameters={...Skeleton.parameters,docs:{...Skeleton.parameters?.docs,source:{originalSource:"args => {\n  return <Avatar size={args.size} src={args.src} skeleton={args.skeleton} letter={args.letter} />;\n}",...Skeleton.parameters?.docs?.source}}}},"./src/components/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>components_Avatar_Avatar});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Avatar=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Avatar/Avatar.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Avatar.A,options);Avatar.A&&Avatar.A.locals&&Avatar.A.locals;__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var Skeleton=__webpack_require__("./src/components/Skeleton/Skeleton.tsx");const Avatar_Avatar_Avatar=({size,src,skeleton,letter})=>{var _getLetter;const sizeInPixels=(size=>{switch(size){case"sm":return 24;case"md":return 40;case"lg":return 64;default:return 32}})(size);return(0,jsx_runtime.jsx)("div",{className:"avatar",children:skeleton?(0,jsx_runtime.jsx)(Skeleton.A,{height:`${sizeInPixels}`,circle:!0,width:`${sizeInPixels}`}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:src?(0,jsx_runtime.jsx)("label",{className:"avatar-image",children:(0,jsx_runtime.jsx)("img",{className:size,src,alt:"Avatar"})}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:letter?(0,jsx_runtime.jsx)("label",{className:`avatar-letter ${size}`,children:null===(_getLetter=(letter=>{if(letter&&letter.includes(" ")){const[firstName,lastName]=letter.split(" ");return`${null==firstName?void 0:firstName.charAt(0)}${null==lastName?void 0:lastName.charAt(0)}`}return letter&&letter.length>1?letter.charAt(0):letter})(letter))||void 0===_getLetter?void 0:_getLetter.toLocaleUpperCase()}):(0,jsx_runtime.jsx)("label",{className:`avatar-icon ${size}`,children:(0,jsx_runtime.jsx)(Icon.A,{size,icon:"person"})})})})})},components_Avatar_Avatar=Avatar_Avatar_Avatar;try{Avatar_Avatar_Avatar.displayName="Avatar",Avatar_Avatar_Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},skeleton:{defaultValue:null,description:"",name:"skeleton",required:!1,type:{name:"boolean"}},letter:{defaultValue:null,description:"",name:"letter",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar_Avatar_Avatar.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>components_Icon_Icon});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Icon=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Icon/Icon.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Icon.A,options);Icon.A&&Icon.A.locals&&Icon.A.locals;__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon_Icon_Icon=({size,fill,icon})=>{const sizeClass=size,fillStyle=`'FILL' ${fill?1:0},\n    'GRAD' 0,\n    'opsz' 24`;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("span",{style:{fontVariationSettings:fillStyle},className:`material-symbols-outlined ${sizeClass}`,children:icon})})},components_Icon_Icon=Icon_Icon_Icon;try{Icon_Icon_Icon.displayName="Icon",Icon_Icon_Icon.__docgenInfo={description:"",displayName:"Icon",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string | undefined"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:Icon_Icon_Icon.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Skeleton/Skeleton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Skeleton_Skeleton_Skeleton});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Skeleton=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Skeleton/Skeleton.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Skeleton.A,options);Skeleton.A&&Skeleton.A.locals&&Skeleton.A.locals;function Skeleton_Skeleton_Skeleton(props){return(0,jsx_runtime.jsx)("div",{className:"skeleton "+(!0===props.circle?"circle":"no-circle"),style:{width:`${props.width}px`,height:`${props.height}px`,borderRadius:props.circle?"var(--s-border-radius-pill)":"",backgroundSize:`${props.width}px`}})}try{Skeleton_Skeleton_Skeleton.displayName="Skeleton",Skeleton_Skeleton_Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string"}},circle:{defaultValue:null,description:"",name:"circle",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Skeleton.tsx#Skeleton"]={docgenInfo:Skeleton_Skeleton_Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/Skeleton/Skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Avatar/Avatar.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".avatar label{display:flex;align-items:center;justify-content:center;border-radius:var(--s-border-radius-pill);color:var(--s-color-content-highlight);width:fit-content}.avatar img{border-radius:var(--s-border-radius-pill);object-fit:cover;border:none}.avatar-icon,.avatar-letter{background-color:var(--s-color-fill-highlight-light)}.avatar-icon.sm,.avatar-letter.sm{padding:var(--s-spacing-nano);height:24px;width:24px}.avatar-icon.md,.avatar-letter.md{padding:var(--s-spacing-xx-small);height:40px;width:40px}.avatar-icon.lg,.avatar-letter.lg{padding:var(--s-spacing-small);height:64px;width:64px}.avatar-image .sm{height:24px;width:24px}.avatar-image .md{height:40px;width:40px}.avatar-image .lg{height:64px;width:64px}","",{version:3,sources:["webpack://./src/components/Avatar/Avatar.scss"],names:[],mappings:"AAAA,cACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,yCAAA,CACA,sCAAA,CACA,iBAAA,CAGF,YACE,yCAAA,CACA,gBAAA,CACA,WAAA,CAGF,4BAEE,oDAAA,CAEA,kCACE,6BAAA,CACA,WAAA,CACA,UAAA,CAGF,kCACE,iCAAA,CACA,WAAA,CACA,UAAA,CAGF,kCACE,8BAAA,CACA,WAAA,CACA,UAAA,CAIJ,kBACE,WAAA,CACA,UAAA,CAGF,kBACE,WAAA,CACA,UAAA,CAGF,kBACE,WAAA,CACA,UAAA",sourcesContent:[".avatar label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--s-border-radius-pill);\n  color: var(--s-color-content-highlight);\n  width: fit-content;\n}\n\n.avatar img {\n  border-radius: var(--s-border-radius-pill);\n  object-fit: cover;\n  border: none;\n}\n\n.avatar-icon,\n.avatar-letter {\n  background-color: var(--s-color-fill-highlight-light);\n\n  &.sm {\n    padding: var(--s-spacing-nano);\n    height: 24px;\n    width: 24px;\n  }\n\n  &.md {\n    padding: var(--s-spacing-xx-small);\n    height: 40px;\n    width: 40px;\n  }\n\n  &.lg {\n    padding: var(--s-spacing-small);\n    height: 64px;\n    width: 64px;\n  }\n}\n\n.avatar-image .sm {\n  height: 24px;\n  width: 24px;\n}\n\n.avatar-image .md {\n  height: 40px;\n  width: 40px;\n}\n\n.avatar-image .lg {\n  height: 64px;\n  width: 64px;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Icon/Icon.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";.material-symbols-outlined{font-weight:300;display:flex;user-select:none}.material-symbols-outlined.sm{font-size:16px}.material-symbols-outlined.md{font-size:24px}.material-symbols-outlined.lg{font-size:32px}',"",{version:3,sources:["webpack://./src/components/Icon/Icon.scss"],names:[],mappings:"AAAQ,6HAAA,CAER,2BACE,eAAA,CACA,YAAA,CACA,gBAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");\n\n.material-symbols-outlined {\n  font-weight: 300;\n  display: flex;\n  user-select: none;\n}\n\n.material-symbols-outlined.sm {\n  font-size: 16px;\n}\n\n.material-symbols-outlined.md {\n  font-size: 24px;\n}\n\n.material-symbols-outlined.lg {\n  font-size: 32px;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Skeleton/Skeleton.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.skeleton{position:relative;padding:0px;border:none;box-shadow:none;pointer-events:none;inline-size:100%;border-radius:var(--s-border-radius-medium);box-shadow:0px 1px 2px 0px rgba(14,21,36,.06)}.skeleton.no-circle::before{border-radius:var(--s-border-radius-medium);position:absolute;block-size:100%;content:"";inline-size:100%;background-color:var(--s-color-fill-default-light);background-image:linear-gradient(90deg, var(--s-color-fill-disable) 0, var(--s-color-fill-disable) 50%, var(--s-color-fill-disable) 100%);background-repeat:no-repeat;will-change:background-position;animation:skeleton ease-in-out 2000ms forwards infinite}.skeleton.circle::before{border-radius:var(--s-border-radius-pill);position:absolute;block-size:100%;content:"";inline-size:100%;background-color:var(--s-color-fill-default-light);background-image:linear-gradient(90deg, var(--s-color-fill-disable) 0, var(--s-color-fill-disable) 50%, var(--s-color-fill-disable) 100%);background-repeat:no-repeat;will-change:background-position;animation:skeleton ease-in-out 2000ms forwards infinite}@keyframes skeleton{0%{background-position:100% 0;background-size:0%}50%{background-position:100% 0;background-size:100%}100%{background-position:100% 0;background-size:0%}}',"",{version:3,sources:["webpack://./src/components/Skeleton/Skeleton.scss"],names:[],mappings:"AAmBA,UACE,iBAAA,CACA,WAAA,CACA,WAAA,CACA,eAAA,CACA,mBAAA,CACA,gBAAA,CACA,2CAAA,CACA,6CAAA,CAGF,4BACE,2CAAA,CACA,iBAAA,CACA,eAAA,CACA,UAAA,CACA,gBAAA,CAvBA,kDAZkB,CAalB,yIATkB,CAUlB,2BAAA,CACA,+BAAA,CACA,uDAAA,CAuBF,yBACE,yCAAA,CACA,iBAAA,CACA,eAAA,CACA,UAAA,CACA,gBAAA,CAhCA,kDAZkB,CAalB,yIATkB,CAUlB,2BAAA,CACA,+BAAA,CACA,uDAAA,CAgCF,oBACE,GACE,0BAAA,CACA,kBAAA,CAEF,IACE,0BAAA,CACA,oBAAA,CAEF,KACE,0BAAA,CACA,kBAAA,CAAA",sourcesContent:['$skeleton-bg-color: var(--s-color-fill-default-light);\n$skeleton-gradient-color-start: var(--s-color-fill-disable);\n$skeleton-gradient-color-mid: var(--s-color-fill-disable);\n$skeleton-gradient-color-end: var(--s-color-fill-disable);\n$skeleton-gradient: linear-gradient(\n  90deg,\n  $skeleton-gradient-color-start 0,\n  $skeleton-gradient-color-mid 50%,\n  $skeleton-gradient-color-end 100%\n);\n\n@mixin skeleton {\n  background-color: $skeleton-bg-color;\n  background-image: $skeleton-gradient;\n  background-repeat: no-repeat;\n  will-change: background-position;\n  animation: skeleton ease-in-out 2000ms forwards infinite;\n}\n\n.skeleton {\n  position: relative;\n  padding: 0px;\n  border: none;\n  box-shadow: none;\n  pointer-events: none;\n  inline-size: 100%;\n  border-radius: var(--s-border-radius-medium);\n  box-shadow: 0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n}\n\n.skeleton.no-circle::before {\n  border-radius: var(--s-border-radius-medium);\n  position: absolute;\n  block-size: 100%;\n  content: "";\n  inline-size: 100%;\n  @include skeleton;\n}\n\n.skeleton.circle::before {\n  border-radius: var(--s-border-radius-pill);\n  position: absolute;\n  block-size: 100%;\n  content: "";\n  inline-size: 100%;\n  @include skeleton;\n}\n\n@keyframes skeleton {\n  0% {\n    background-position: 100% 0;\n    background-size: 0%;\n  }\n  50% {\n    background-position: 100% 0;\n    background-size: 100%;\n  }\n  100% {\n    background-position: 100% 0;\n    background-size: 0%;\n  }\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);