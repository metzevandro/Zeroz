"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1290],{"./src/stories/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories,dismissible:()=>dismissible});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Modal=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Modal/Modal.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Modal.Z,options);Modal.Z&&Modal.Z.locals&&Modal.Z.locals;var ButtonIcon=__webpack_require__("./src/app/components/ButtonIcon/ButtonIcon.tsx"),__jsx=react.createElement,Modal_Modal_Modal=function Modal(_ref){var title=_ref.title,description=_ref.description,content=_ref.content,hideModal=_ref.hideModal,isOpen=_ref.isOpen,footer=_ref.footer,dismissible=_ref.dismissible,modalClass=isOpen?"modal-root visible":"modal-root",ghostClass=isOpen?"modal-ghost visible":"modal-ghost";return __jsx(react.Fragment,null,__jsx("div",{className:modalClass},__jsx("div",{className:"modal-header"},__jsx("div",{className:"modal-title"},__jsx("h1",null,title),__jsx("p",null,description)),__jsx("div",null,dismissible&&__jsx(ButtonIcon.E,{variant:"",size:"md",typeIcon:"close",type:"plain",onClick:hideModal}))),content,footer),__jsx("div",{className:ghostClass,onClick:dismissible?hideModal:void 0}))},ContentModal=function ContentModal(_ref2){var children=_ref2.children;return __jsx("div",{className:"modal-content"},children)};ContentModal.displayName="ContentModal";var FooterModal=function FooterModal(_ref3){var children=_ref3.children;return __jsx("div",{className:"modal-footer"},children)};FooterModal.displayName="FooterModal";const components_Modal_Modal=Modal_Modal_Modal;try{ContentModal.displayName="ContentModal",ContentModal.__docgenInfo={description:"",displayName:"ContentModal",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Modal/Modal.tsx#ContentModal"]={docgenInfo:ContentModal.__docgenInfo,name:"ContentModal",path:"src/app/components/Modal/Modal.tsx#ContentModal"})}catch(__react_docgen_typescript_loader_error){}try{FooterModal.displayName="FooterModal",FooterModal.__docgenInfo={description:"",displayName:"FooterModal",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Modal/Modal.tsx#FooterModal"]={docgenInfo:FooterModal.__docgenInfo,name:"FooterModal",path:"src/app/components/Modal/Modal.tsx#FooterModal"})}catch(__react_docgen_typescript_loader_error){}try{Modal_Modal_Modal.displayName="Modal",Modal_Modal_Modal.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},dismissible:{defaultValue:null,description:"",name:"dismissible",required:!1,type:{name:"boolean"}},hideModal:{defaultValue:null,description:"",name:"hideModal",required:!0,type:{name:"() => void"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Modal/Modal.tsx#Modal"]={docgenInfo:Modal_Modal_Modal.__docgenInfo,name:"Modal",path:"src/app/components/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/app/components/Button/Button.tsx"),Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),ButtonGroup=(__webpack_require__("./src/stories/css/slot.scss"),__webpack_require__("./src/app/components/ButtonGroup/ButtonGroup.tsx")),Modal_stories_jsx=react.createElement;const Modal_stories={title:"Components/Modal",component:components_Modal_Modal,argTypes:{},parameters:{layout:"centered"}};var Template=function Template(args){var _useState=(0,react.useState)(!1),isOpen=_useState[0],setIsOpen=_useState[1],toggleModal=function toggleModal(){setIsOpen(!isOpen)};return Modal_stories_jsx(react.Fragment,null,Modal_stories_jsx("div",{style:{width:"min-content"}},Modal_stories_jsx(Button.Z,{size:"md",variant:"primary",label:"Click here!",onClick:toggleModal})),Modal_stories_jsx(components_Modal_Modal,{dismissible:args.dismissible,description:args.description,hideModal:toggleModal,title:args.title,isOpen,content:Modal_stories_jsx(ContentModal,null,Modal_stories_jsx("div",{className:"slot"},Modal_stories_jsx(Icon.Z,{icon:"refresh",size:"md"}),"Slot Content")),footer:Modal_stories_jsx(FooterModal,null,Modal_stories_jsx("div",{style:{width:"min-content"}},Modal_stories_jsx(ButtonGroup.Z,{direction:"row",variantFirstButton:"primary",variantSecondButton:"secondary",contentFirstButton:"Button",contentSecondButton:"Button"})))}))},Default=Template.bind({});Default.args={title:"Title",description:"Description",dismissible:!1};var dismissible=Template.bind({});dismissible.args={title:"Title",description:"Description",dismissible:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [isOpen, setIsOpen] = useState(false);\n  const toggleModal = () => {\n    setIsOpen(!isOpen);\n  };\n  return <>\r\n      <div style={{\n      width: "min-content"\n    }}>\r\n        <Button size="md" variant="primary" label="Click here!" onClick={toggleModal} />\r\n      </div>\r\n\r\n      <Modal dismissible={args.dismissible} description={args.description} hideModal={toggleModal} title={args.title} isOpen={isOpen} content={<ContentModal>\r\n            <div className="slot">\r\n              <Icon icon="refresh" size="md" />\r\n              Slot Content\r\n            </div>\r\n          </ContentModal>} footer={<FooterModal>\r\n            <div style={{\n        width: "min-content"\n      }}>\r\n              <ButtonGroup direction="row" variantFirstButton="primary" variantSecondButton="secondary" contentFirstButton="Button" contentSecondButton="Button" />\r\n            </div>\r\n          </FooterModal>} />\r\n    </>;\n}',...Default.parameters?.docs?.source}}},dismissible.parameters={...dismissible.parameters,docs:{...dismissible.parameters?.docs,source:{originalSource:'args => {\n  const [isOpen, setIsOpen] = useState(false);\n  const toggleModal = () => {\n    setIsOpen(!isOpen);\n  };\n  return <>\r\n      <div style={{\n      width: "min-content"\n    }}>\r\n        <Button size="md" variant="primary" label="Click here!" onClick={toggleModal} />\r\n      </div>\r\n\r\n      <Modal dismissible={args.dismissible} description={args.description} hideModal={toggleModal} title={args.title} isOpen={isOpen} content={<ContentModal>\r\n            <div className="slot">\r\n              <Icon icon="refresh" size="md" />\r\n              Slot Content\r\n            </div>\r\n          </ContentModal>} footer={<FooterModal>\r\n            <div style={{\n        width: "min-content"\n      }}>\r\n              <ButtonGroup direction="row" variantFirstButton="primary" variantSecondButton="secondary" contentFirstButton="Button" contentSecondButton="Button" />\r\n            </div>\r\n          </FooterModal>} />\r\n    </>;\n}',...dismissible.parameters?.docs?.source}}};const __namedExportsOrder=["Default","dismissible"]},"./src/app/components/ButtonGroup/ButtonGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_ButtonGroup_ButtonGroup});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Button=__webpack_require__("./src/app/components/Button/Button.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ButtonGroup=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/ButtonGroup/ButtonGroup.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ButtonGroup.Z,options);ButtonGroup.Z&&ButtonGroup.Z.locals&&ButtonGroup.Z.locals;var __jsx=react.createElement,ButtonGroup_ButtonGroup_ButtonGroup=function ButtonGroup(_ref){var direction=_ref.direction,onClickSecondButton=_ref.onClickSecondButton,typeIconSecondButton=_ref.typeIconSecondButton,contentSecondButton=_ref.contentSecondButton,variantSecondButton=_ref.variantSecondButton,disableSecondButton=_ref.disableSecondButton,disableFirstButton=_ref.disableFirstButton,onClickFirstButton=_ref.onClickFirstButton,contentFirstButton=_ref.contentFirstButton,typeIconFirstButton=_ref.typeIconFirstButton,variantFirstButton=_ref.variantFirstButton;return __jsx(react.Fragment,null,__jsx("div",{className:"button-group ".concat(direction)},__jsx(Button.Z,{size:"md",disable:disableFirstButton,onClick:onClickFirstButton,label:contentFirstButton,typeIcon:typeIconFirstButton,variant:variantFirstButton}),__jsx(Button.Z,{size:"md",disable:disableSecondButton,onClick:onClickSecondButton,label:contentSecondButton,typeIcon:typeIconSecondButton,variant:variantSecondButton})))};const components_ButtonGroup_ButtonGroup=ButtonGroup_ButtonGroup_ButtonGroup;try{ButtonGroup_ButtonGroup_ButtonGroup.displayName="ButtonGroup",ButtonGroup_ButtonGroup_ButtonGroup.__docgenInfo={description:"",displayName:"ButtonGroup",props:{disableFirstButton:{defaultValue:null,description:"",name:"disableFirstButton",required:!1,type:{name:"boolean"}},disableSecondButton:{defaultValue:null,description:"",name:"disableSecondButton",required:!1,type:{name:"boolean"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},variantFirstButton:{defaultValue:null,description:"",name:"variantFirstButton",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'}]}},variantSecondButton:{defaultValue:null,description:"",name:"variantSecondButton",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'}]}},contentFirstButton:{defaultValue:null,description:"",name:"contentFirstButton",required:!0,type:{name:"string"}},contentSecondButton:{defaultValue:null,description:"",name:"contentSecondButton",required:!0,type:{name:"string"}},typeIconFirstButton:{defaultValue:null,description:"",name:"typeIconFirstButton",required:!1,type:{name:"string"}},typeIconSecondButton:{defaultValue:null,description:"",name:"typeIconSecondButton",required:!1,type:{name:"string"}},onClickFirstButton:{defaultValue:null,description:"",name:"onClickFirstButton",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},onClickSecondButton:{defaultValue:null,description:"",name:"onClickSecondButton",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/ButtonGroup/ButtonGroup.tsx#ButtonGroup"]={docgenInfo:ButtonGroup_ButtonGroup_ButtonGroup.__docgenInfo,name:"ButtonGroup",path:"src/app/components/ButtonGroup/ButtonGroup.tsx#ButtonGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/app/components/ButtonIcon/ButtonIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>ButtonIcon_ButtonIcon_ButtonIcon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ButtonIcon=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/ButtonIcon/ButtonIcon.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ButtonIcon.Z,options);ButtonIcon.Z&&ButtonIcon.Z.locals&&ButtonIcon.Z.locals;var __jsx=react.createElement,ButtonIcon_ButtonIcon_ButtonIcon=function ButtonIcon(_ref){var size=_ref.size,type=_ref.type,typeIcon=_ref.typeIcon,variant=_ref.variant,onClick=_ref.onClick,disable=_ref.disable;return __jsx("button",{disabled:disable,onClick,className:"button-icon ".concat(variant," ").concat(size," ").concat(type)},typeIcon&&__jsx(Icon.Z,{icon:typeIcon,size}))};ButtonIcon_ButtonIcon_ButtonIcon.displayName="ButtonIcon";try{ButtonIcon_ButtonIcon_ButtonIcon.displayName="ButtonIcon",ButtonIcon_ButtonIcon_ButtonIcon.__docgenInfo={description:"",displayName:"ButtonIcon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'""'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"on-color"'}]}},disable:{defaultValue:null,description:"",name:"disable",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"plain"'},{value:'"default"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},typeIcon:{defaultValue:null,description:"",name:"typeIcon",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/ButtonIcon/ButtonIcon.tsx#ButtonIcon"]={docgenInfo:ButtonIcon_ButtonIcon_ButtonIcon.__docgenInfo,name:"ButtonIcon",path:"src/app/components/ButtonIcon/ButtonIcon.tsx#ButtonIcon"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/ButtonGroup/ButtonGroup.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".button-group{display:flex;justify-content:space-between;width:100%}.button-group.row{display:flex;flex-direction:row;gap:var(--s-spacing-x-small)}.button-group.column{display:flex;flex-direction:column;gap:var(--s-spacing-x-small)}","",{version:3,sources:["webpack://./src/app/components/ButtonGroup/ButtonGroup.scss"],names:[],mappings:"AAAA,cACE,YAAA,CACA,6BAAA,CACA,UAAA,CAEA,kBACE,YAAA,CACA,kBAAA,CACA,4BAAA,CAGF,qBACE,YAAA,CACA,qBAAA,CACA,4BAAA",sourcesContent:[".button-group {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n  &.row {\n    display: flex;\n    flex-direction: row;\n    gap: var(--s-spacing-x-small);\n  }\n\n  &.column {\n    display: flex;\n    flex-direction: column;\n    gap: var(--s-spacing-x-small);\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/ButtonIcon/ButtonIcon.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".button-icon{display:flex;align-items:center;border:none;padding:0;cursor:pointer}.button-icon.md.plain{height:24px}.button-icon.lg.plain{height:32px}.button-icon.plain{width:min-content;height:min-content;border-radius:var(--s-border-radius-small);color:var(--s-color-content-default);background-color:rgba(0,0,0,0)}.button-icon.plain:hover{background-color:var(--s-color-fill-default-hover)}.button-icon.plain.on-color{color:var(--s-color-content-on-color)}.button-icon.plain.on-color:hover{background-color:rgba(255,255,255,.16)}.button-icon.plain:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button-icon.plain:disabled{cursor:not-allowed;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable)}.button-icon.sm.default>*{padding:var(--s-spacing-nano)}.button-icon.md.default>*{padding:var(--s-spacing-xx-small);font-size:24px}.button-icon.default{border-radius:4px;width:min-content;height:min-content}.button-icon.default:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button-icon.default:disabled{cursor:not-allowed;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable)}.button-icon.default.primary{background-color:var(--s-color-fill-highlight);color:var(--s-color-content-on-color)}.button-icon.default.primary:hover{background-color:var(--s-color-fill-highlight-hover)}.button-icon.default.secondary{border:var(--s-border-width-hairline) solid var(--s-color-border-default);background-color:var(--s-color-fill-default);color:var(--s-color-content-default)}.button-icon.default.secondary:hover{background-color:var(--s-color-fill-default-hover)}.button-icon.default.success{background-color:var(--s-color-fill-success);color:var(--s-color-content-on-color)}.button-icon.default.success:hover{background-color:var(--s-color-fill-success-hover)}.button-icon.default.warning{background-color:var(--s-color-fill-warning);color:var(--s-color-content-on-color)}.button-icon.default.warning:hover{background-color:var(--s-color-fill-warning-hover)}","",{version:3,sources:["webpack://./src/app/components/ButtonIcon/ButtonIcon.scss"],names:[],mappings:"AAAA,aACE,YAAA,CACA,kBAAA,CACA,WAAA,CACA,SAAA,CACA,cAAA,CAEA,sBACE,WAAA,CAGF,sBACE,WAAA,CAGF,mBACE,iBAAA,CACA,kBAAA,CACA,0CAAA,CACA,oCAAA,CACA,8BAAA,CAEA,yBACE,kDAAA,CAGF,4BACE,qCAAA,CAEA,kCACE,sCAAA,CAIJ,iCACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,4BACE,kBAAA,CACA,4CAAA,CACA,oCAAA,CAIJ,0BACE,6BAAA,CAGF,0BACE,iCAAA,CACA,cAAA,CAGF,qBACE,iBAAA,CACA,iBAAA,CACA,kBAAA,CAEA,mCACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,8BACE,kBAAA,CACA,4CAAA,CACA,oCAAA,CAGF,6BACE,8CAAA,CACA,qCAAA,CAEA,mCACE,oDAAA,CAIJ,+BACE,yEAAA,CACA,4CAAA,CACA,oCAAA,CAEA,qCACE,kDAAA,CAIJ,6BACE,4CAAA,CACA,qCAAA,CAEA,mCACE,kDAAA,CAIJ,6BACE,4CAAA,CACA,qCAAA,CAEA,mCACE,kDAAA",sourcesContent:[".button-icon {\n  display: flex;\n  align-items: center;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n\n  &.md.plain {\n    height: 24px;\n  }\n\n  &.lg.plain {\n    height: 32px;\n  }\n\n  &.plain {\n    width: min-content;\n    height: min-content;\n    border-radius: var(--s-border-radius-small);\n    color: var(--s-color-content-default);\n    background-color: transparent;\n\n    &:hover {\n      background-color: var(--s-color-fill-default-hover);\n    }\n\n    &.on-color {\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: rgba(white, 0.16);\n      }\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      cursor: not-allowed;\n      background-color: var(--s-color-fill-disable);\n      color: var(--s-color-content-disable);\n    }\n  }\n\n  &.sm.default > * {\n    padding: var(--s-spacing-nano);\n  }\n\n  &.md.default > * {\n    padding: var(--s-spacing-xx-small);\n    font-size: 24px;\n  }\n\n  &.default {\n    border-radius: 4px;\n    width: min-content;\n    height: min-content;\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      cursor: not-allowed;\n      background-color: var(--s-color-fill-disable);\n      color: var(--s-color-content-disable);\n    }\n\n    &.primary {\n      background-color: var(--s-color-fill-highlight);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-highlight-hover);\n      }\n    }\n\n    &.secondary {\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n\n      &:hover {\n        background-color: var(--s-color-fill-default-hover);\n      }\n    }\n\n    &.success {\n      background-color: var(--s-color-fill-success);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-success-hover);\n      }\n    }\n\n    &.warning {\n      background-color: var(--s-color-fill-warning);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-warning-hover);\n      }\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Modal/Modal.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".modal-root{position:fixed;width:488px;border-radius:var(--s-border-radius-small);left:50%;top:50%;transform:translate(-50%, -50%);background-color:var(--s-color-fill-default);z-index:99;opacity:0;visibility:hidden;transition:opacity .5s ease,visibility .5s ease}.modal-root.visible{opacity:1;visibility:visible}.modal-root .modal-header{display:flex;flex-direction:row;justify-content:space-between;padding:var(--s-spacing-medium) var(--s-spacing-medium) var(--s-spacing-small) var(--s-spacing-medium)}.modal-root .modal-header .modal-title{display:flex;flex-direction:column;gap:var(--s-spacing-nano)}.modal-root .modal-header .modal-title h1{font:var(--s-typography-heading-medium);color:var(--s-color-content-default)}.modal-root .modal-header .modal-title p{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-light)}.modal-root .modal-content{display:flex;flex-direction:column;gap:var(--s-spacing-small);padding:0 var(--s-spacing-medium) var(--s-spacing-medium) var(--s-spacing-medium)}.modal-root .modal-footer{padding:0 var(--s-spacing-medium) var(--s-spacing-medium) var(--s-spacing-medium)}.modal-ghost{width:100vw;height:100vh;z-index:98;position:fixed;top:0;left:0;background-color:var(--s-color-background-overlay);opacity:0;visibility:hidden;transition:opacity .5s ease,visibility .5s ease}.modal-ghost.visible{opacity:1;visibility:visible}@media screen and (max-width: 490px){.modal-root{position:fixed;width:88%}}","",{version:3,sources:["webpack://./src/app/components/Modal/Modal.scss"],names:[],mappings:"AAAA,YACE,cAAA,CACA,WAAA,CACA,0CAAA,CACA,QAAA,CACA,OAAA,CACA,+BAAA,CACA,4CAAA,CACA,UAAA,CACA,SAAA,CACA,iBAAA,CACA,+CAAA,CAEA,oBACE,SAAA,CACA,kBAAA,CAGF,0BACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,sGAAA,CAGA,uCACE,YAAA,CACA,qBAAA,CACA,yBAAA,CACA,0CACE,uCAAA,CACA,oCAAA,CAEF,yCACE,0CAAA,CACA,kCAAA,CAKN,2BACE,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,iFAAA,CAIF,0BACE,iFAAA,CAKJ,aACE,WAAA,CACA,YAAA,CACA,UAAA,CACA,cAAA,CACA,KAAA,CACA,MAAA,CACA,kDAAA,CACA,SAAA,CACA,iBAAA,CACA,+CAAA,CAEA,qBACE,SAAA,CACA,kBAAA,CAIJ,qCACE,YACE,cAAA,CACA,SAAA,CAAA",sourcesContent:[".modal-root {\n  position: fixed;\n  width: 488px;\n  border-radius: var(--s-border-radius-small);\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--s-color-fill-default);\n  z-index: 99;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.5s ease, visibility 0.5s ease;\n\n  &.visible {\n    opacity: 1;\n    visibility: visible;\n  }\n\n  .modal-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: var(--s-spacing-medium) var(--s-spacing-medium)\n      var(--s-spacing-small) var(--s-spacing-medium);\n\n    .modal-title {\n      display: flex;\n      flex-direction: column;\n      gap: var(--s-spacing-nano);\n      h1 {\n        font: var(--s-typography-heading-medium);\n        color: var(--s-color-content-default);\n      }\n      p {\n        font: var(--s-typography-paragraph-regular);\n        color: var(--s-color-content-light);\n      }\n    }\n  }\n\n  .modal-content {\n    display: flex;\n    flex-direction: column;\n    gap: var(--s-spacing-small);\n    padding: 0 var(--s-spacing-medium) var(--s-spacing-medium)\n      var(--s-spacing-medium);\n  }\n\n  .modal-footer {\n    padding: 0 var(--s-spacing-medium) var(--s-spacing-medium)\n      var(--s-spacing-medium);\n  }\n}\n\n.modal-ghost {\n  width: 100vw;\n  height: 100vh;\n  z-index: 98;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: var(--s-color-background-overlay);\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.5s ease, visibility 0.5s ease;\n\n  &.visible {\n    opacity: 1;\n    visibility: visible;\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .modal-root {\n    position: fixed;\n    width: 88%;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/stories/css/slot.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".slot{display:flex;align-items:center;gap:var(--s-spacing-xx-small);color:var(--s-color-content-highlight);border:var(--s-border-width-thin) solid var(--s-color-border-highlight);font:var(--s-typography-heading-small);padding:var(--s-spacing-small);border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-highlight-light)}","",{version:3,sources:["webpack://./src/stories/css/slot.scss"],names:[],mappings:"AAAA,MACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,sCAAA,CACA,uEAAA,CACA,sCAAA,CACA,8BAAA,CACA,0CAAA,CACA,oDAAA",sourcesContent:[".slot {\n  display: flex;\n  align-items: center;\n  gap: var(--s-spacing-xx-small);\n  color: var(--s-color-content-highlight);\n  border: var(--s-border-width-thin) solid var(--s-color-border-highlight);\n  font: var(--s-typography-heading-small);\n  padding: var(--s-spacing-small);\n  border-radius: var(--s-border-radius-small);\n  background-color: var(--s-color-fill-highlight-light);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/stories/css/slot.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_4_slot_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/stories/css/slot.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_4_slot_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_4_slot_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_4_slot_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_4_slot_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);