"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7855],{"./src/stories/Aside.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Aside_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),ButtonIcon=__webpack_require__("./src/app/components/ButtonIcon/ButtonIcon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Aside=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Aside/Aside.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Aside.Z,options);Aside.Z&&Aside.Z.locals&&Aside.Z.locals;var __jsx=react.createElement,Aside_Aside_Aside=function Aside(_ref){var title=_ref.title,isOpen=_ref.isOpen,description=_ref.description,toggleSidebar=_ref.toggleSidebar,footer=_ref.footer,content=_ref.content;return __jsx(react.Fragment,null,__jsx("div",{className:"aside-overlay ".concat(isOpen?"open":"hidden"),onClick:toggleSidebar}),__jsx("div",{className:"aside-root ".concat(isOpen?"open":"")},__jsx("div",{className:"aside"},__jsx("header",{className:"aside-header"},__jsx("div",{className:"aside-title"},__jsx("div",null,title),__jsx(ButtonIcon.E,{type:"plain",variant:"primary",typeIcon:"close",size:"md",onClick:toggleSidebar})),__jsx("div",{className:"aside-description"},description)),__jsx("main",{className:"aside-children"},content),__jsx("footer",{className:"aside-footer"},footer))))};const components_Aside_Aside=Aside_Aside_Aside;var AsideContent=function AsideContent(_ref2){var children=_ref2.children;return __jsx("div",{className:"aside-content"},children)};AsideContent.displayName="AsideContent";var AsideFooter=function AsideFooter(_ref3){var children=_ref3.children;return __jsx("div",null,children)};AsideFooter.displayName="AsideFooter";try{Aside_Aside_Aside.displayName="Aside",Aside_Aside_Aside.__docgenInfo={description:"",displayName:"Aside",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},toggleSidebar:{defaultValue:null,description:"",name:"toggleSidebar",required:!0,type:{name:"() => void"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Aside/Aside.tsx#Aside"]={docgenInfo:Aside_Aside_Aside.__docgenInfo,name:"Aside",path:"src/app/components/Aside/Aside.tsx#Aside"})}catch(__react_docgen_typescript_loader_error){}try{AsideContent.displayName="AsideContent",AsideContent.__docgenInfo={description:"",displayName:"AsideContent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Aside/Aside.tsx#AsideContent"]={docgenInfo:AsideContent.__docgenInfo,name:"AsideContent",path:"src/app/components/Aside/Aside.tsx#AsideContent"})}catch(__react_docgen_typescript_loader_error){}try{AsideFooter.displayName="AsideFooter",AsideFooter.__docgenInfo={description:"",displayName:"AsideFooter",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Aside/Aside.tsx#AsideFooter"]={docgenInfo:AsideFooter.__docgenInfo,name:"AsideFooter",path:"src/app/components/Aside/Aside.tsx#AsideFooter"})}catch(__react_docgen_typescript_loader_error){}var Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),ButtonGroup=(__webpack_require__("./src/stories/css/slot.scss"),__webpack_require__("./src/app/components/ButtonGroup/ButtonGroup.tsx")),Button=__webpack_require__("./src/app/components/Button/Button.tsx"),Aside_stories_jsx=react.createElement;const Aside_stories={title:"Components/Aside",component:components_Aside_Aside,parameters:{layout:"padded"}};var Default=function Template(args){var _useState=(0,react.useState)(!1),isOpenSideBar=_useState[0],setIsOpenSideBar=_useState[1],toggleSideBar=function toggleSideBar(){setIsOpenSideBar(!isOpenSideBar)};return Aside_stories_jsx(react.Fragment,null,Aside_stories_jsx("div",{style:{width:"min-content"}},Aside_stories_jsx(Button.Z,{size:"md",variant:"primary",label:"Click here!",onClick:toggleSideBar})),Aside_stories_jsx(components_Aside_Aside,{isOpen:isOpenSideBar,toggleSidebar:toggleSideBar,title:args.title,description:args.description,content:Aside_stories_jsx(AsideContent,null,Aside_stories_jsx("div",{className:"slot"},Aside_stories_jsx(Icon.Z,{icon:"refresh",size:"md"}),"Slot Content")),footer:Aside_stories_jsx(AsideFooter,null,Aside_stories_jsx("div",{style:{width:"min-content"}},Aside_stories_jsx(ButtonGroup.Z,{direction:"row",variantFirstButton:"primary",variantSecondButton:"secondary",contentFirstButton:"Button",contentSecondButton:"Button"})))}))}.bind({});Default.args={title:"Title aside here!",description:"Aside description"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [isOpenSideBar, setIsOpenSideBar] = useState(false);\n  const toggleSideBar = () => {\n    setIsOpenSideBar(!isOpenSideBar);\n  };\n  return <>\r\n      <div style={{\n      width: "min-content"\n    }}>\r\n        <Button size="md" variant="primary" label="Click here!" onClick={toggleSideBar} />\r\n      </div>\r\n      <Aside isOpen={isOpenSideBar} toggleSidebar={toggleSideBar} title={args.title} description={args.description} content={<AsideContent>\r\n            <div className="slot">\r\n              <Icon icon="refresh" size="md" />\r\n              Slot Content\r\n            </div>\r\n          </AsideContent>} footer={<AsideFooter>\r\n            <div style={{\n        width: "min-content"\n      }}>\r\n              <ButtonGroup direction="row" variantFirstButton="primary" variantSecondButton="secondary" contentFirstButton="Button" contentSecondButton="Button" />\r\n            </div>\r\n          </AsideFooter>} />\r\n    </>;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Aside/Aside.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@import"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap";body{--s-spacing-quarck: 2px;--s-spacing-nano: 4px;--s-spacing-xx-small: 8px;--s-spacing-x-small: 12px;--s-spacing-small: 16px;--s-spacing-medium: 24px;--s-spacing-large: 32px;--s-spacing-x-large: 40px;--s-spacing-xx-large: 48px;--s-spacing-huge: 56px;--s-border-width-none: 0;--s-border-width-hairline: 1px;--s-border-width-thin: 2px;--s-border-width-strong: 4px;--s-border-width-heavy: 8px;--s-border-radius-none: 0;--s-border-radius-small: 4px;--s-border-radius-medium: 8px;--s-border-radius-large: 16px;--s-border-radius-pill: 5000px;--s-font-size-base: 0.875rem;--s-font-weight-thin: 100;--s-font-weight-light: 300;--s-font-weight-regular: 400;--s-font-weight-medium: 500;--s-font-weight-semibold: 600;--s-font-weight-bold: 700;--s-line-height-16: 1rem;--s-line-height-20: 1.25rem;--s-line-height-24: 1.5rem;--s-line-height-32: 2rem;--s-typography-heading-x-large: 600 2.0125rem / 1rem Inter, sans-serif;--s-typography-heading-large: 600 1.4875rem / 1.5rem Inter, sans-serif;--s-typography-heading-medium: 600 1.225rem / 1.5rem Inter, sans-serif;--s-typography-heading-small: 600 0.9625rem / 1.5rem Inter, sans-serif;--s-typography-heading-x-small: 600 0.875rem / 1.5rem Inter, sans-serif;--s-typography-label-small: 500 0.7875rem / 1.5rem Inter, sans-serif;--s-typography-label-medium: 500 0.875rem / 1.5rem Inter, sans-serif;--s-typography-label-large: 500 0.9625rem / 1.5rem Inter, sans-serif;--s-typography-paragraph-regular: 400 0.875rem / 1.5rem Inter, sans-serif;--s-typography-paragraph-strong: 600 0.875rem / 1.5rem Inter, sans-serif;--s-typography-caption-regular: 400 0.7rem / 1.5rem Inter, sans-serif;--s-typography-caption-strong: 700 0.7rem / 1.5rem Inter, sans-serif;--s-shadow-level-1: 0 4px 8px 0 rgba(0, 0, 0, 0.0784313725);--s-shadow-level-2: 0 8px 16px 0 rgba(0, 0, 0, 0.0784313725);--s-shadow-level-3: 0 12px 24px 0 rgba(0, 0, 0, 0.0784313725);--s-shadow-level-4: 0 16px 32px 0 rgba(0, 0, 0, 0.0784313725)}@layer theme{:root{--s-color-background-default: #f6f7f9;--s-color-background-highlight: #873bec;--s-color-background-overlay: #000000A3;--s-color-fill-default: #ffffff;--s-color-fill-default-hover: #eceef2;--s-color-fill-default-light: #d5d9e2;--s-color-fill-disable: #eceef2;--s-color-fill-highlight: #873bec;--s-color-fill-highlight-hover: #945df5;--s-color-fill-highlight-light: #f6f3ff;--s-color-fill-success: #39814a;--s-color-fill-success-hover: #4a9d5d;--s-color-fill-success-light: #f3faf4;--s-color-fill-warning: #c8451f;--s-color-fill-warning-hover: #e4622b;--s-color-fill-warning-light: #fdf5ef;--s-color-border-default: #b1bbc8;--s-color-border-highlight: #873bec;--s-color-border-success: #39814a;--s-color-border-warning: #c8451f;--s-color-content-default: #3f495a;--s-color-content-light: #526077;--s-color-content-placeholder: #677790;--s-color-content-disable: #98a4b5;--s-color-content-on-color: #ffffff;--s-color-content-highlight: #873bec;--s-color-content-success: #39814a;--s-color-content-warning: #c8451f}:root[data-theme=dark]{--s-color-background-default: #22262f;--s-color-background-highlight: #873bec;--s-color-background-overlay: #000000A3;--s-color-fill-default: #343a46;--s-color-fill-default-hover: #3f495a;--s-color-fill-default-light: #434e61;--s-color-fill-disable: #3f495a;--s-color-fill-highlight: #873bec;--s-color-fill-highlight-hover: #945df5;--s-color-fill-highlight-light: #331065;--s-color-fill-success: #39814a;--s-color-fill-success-hover: #4a9d5d;--s-color-fill-success-light: #0f2415;--s-color-fill-warning: #c8451f;--s-color-fill-warning-hover: #e4622b;--s-color-fill-warning-light: #3d110d;--s-color-border-default: #526077;--s-color-border-highlight: #ae8cf9;--s-color-border-success: #6fb980;--s-color-border-warning: #e9824e;--s-color-content-default: #eceef2;--s-color-content-light: #b1bbc8;--s-color-content-placeholder: #98a4b5;--s-color-content-disable: #677790;--s-color-content-on-color: #ffffff;--s-color-content-highlight: #ae8cf9;--s-color-content-success: #6fb980;--s-color-content-warning: #e9824e}}*{box-sizing:border-box;border:0;margin:0;padding:0}.row::after{content:"";clear:both;display:table}[class*=col-]{float:left;padding:5px}.col-1{width:8.33%}.col-2{width:16.66%}.col-3{width:25%}.col-4{width:33.33%}.col-5{width:41.66%}.col-6{width:50%}.col-7{width:58.33%}.col-8{width:66.66%}.col-9{width:75%}.col-10{width:83.33%}.col-11{width:91.66%}.col-12{width:100%}@media screen and (max-width: 768px){.col-s-1{width:8.33%}.col-s-2{width:16.66%}.col-s-3{width:25%}.col-s-4{width:33.33%}.col-s-5{width:41.66%}.col-s-6{width:50%}.col-s-7{width:58.33%}.col-s-8{width:66.66%}.col-s-9{width:75%}.col-s-10{width:83.33%}.col-s-11{width:91.66%}.col-s-12{width:100%}}@media screen and (max-width: 600px){[class*=col-]{width:100%}}.aside-overlay{height:100vh;width:100vw;position:fixed;top:0;left:0;display:none;transition:.5s;overflow-x:hidden;z-index:1}.aside-overlay.open{display:flex;opacity:1;background-color:var(--s-color-background-overlay)}.aside-root{height:100vh;width:100vw;position:fixed;display:flex;flex-direction:column;top:0;right:-100vw;background-color:var(--s-color-fill-default);transition:.5s;z-index:2}.aside-root.open{width:50%;right:0}.aside-root .aside{display:flex;flex-direction:column;justify-content:space-between;height:100%}.aside-root .aside .aside-header{display:flex;flex-direction:column;padding:var(--s-spacing-medium);gap:var(--s-spacing-xx-small)}.aside-root .aside .aside-header .aside-title{align-items:center;color:var(--s-color-content-default);font:var(--s-typography-heading-large);display:flex;flex-direction:row;justify-content:space-between}.aside-root .aside .aside-header .aside-description{color:var(--s-color-content-light);font:var(--s-typography-paragraph-regular);word-break:break-all}.aside-root .aside .aside-children{flex-grow:1;max-height:100%;overflow:auto;display:flex;flex-direction:column;justify-content:space-between}.aside-root .aside .aside-children::-webkit-scrollbar{width:8px;border-radius:12px}.aside-root .aside .aside-children::-webkit-scrollbar-thumb{background:var(--s-color-fill-default-light);border-radius:12px}.aside-root .aside .aside-children .aside-content{display:flex;flex-direction:column;gap:var(--s-spacing-small);padding:0 var(--s-spacing-medium) var(--s-spacing-medium) var(--s-spacing-medium)}.aside-root .aside .aside-footer{padding:var(--s-spacing-medium);background-color:var(--s-color-background-default)}@media screen and (max-width: 490px){.aside-root.open{width:96%;right:0}}',"",{version:3,sources:["webpack://./src/scss/tokens/tokens.scss","webpack://./src/scss/mixins/tokens.scss","webpack://./src/app/components/Aside/Aside.scss"],names:[],mappings:"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",sourcesContent:['@use "../mixins/tokens" as tokens;\n@use "./semantics/borders" as *;\n@use "./semantics/colors" as *;\n@use "./semantics/shadows" as *;\n@use "./semantics/typographies" as *;\n@use "./semantics/spacing" as *;\n@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");\n\nbody {\n  @include tokens.generateVars($semantic-spacing, spacing);\n\n  @include tokens.generateVars($semantic-borders-width, border-width);\n\n  @include tokens.generateVars($semantic-borders-radius, border-radius);\n\n  @include tokens.generateVars($semantic-font-size, font-size);\n\n  @include tokens.generateVars($semantic-font-weight, font-weight);\n\n  @include tokens.generateVars($semantic-line-height, line-height);\n\n  @include tokens.generateVars($semantic-typographies, typography);\n\n  @include tokens.generateVars($semantic-shadows, shadow);\n}\n\n@layer theme {\n  :root {\n    @include tokens.generateVars($semantic-color-light, color);\n    &[data-theme="dark"] {\n      @include tokens.generateVars($semantic-color-dark, color);\n    }\n  }\n}\n\n* {\n  box-sizing: border-box;\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n.row::after {\n  content: "";\n  clear: both;\n  display: table;\n}\n\n[class*="col-"] {\n  float: left;\n  padding: 5px;\n}\n\n/* Para desktop */\n.col-1 {\n  width: 8.33%;\n}\n.col-2 {\n  width: 16.66%;\n}\n.col-3 {\n  width: 25%;\n}\n.col-4 {\n  width: 33.33%;\n}\n.col-5 {\n  width: 41.66%;\n}\n.col-6 {\n  width: 50%;\n}\n.col-7 {\n  width: 58.33%;\n}\n.col-8 {\n  width: 66.66%;\n}\n.col-9 {\n  width: 75%;\n}\n.col-10 {\n  width: 83.33%;\n}\n.col-11 {\n  width: 91.66%;\n}\n.col-12 {\n  width: 100%;\n}\n\n/* Para tablets */\n@media screen and (max-width: 768px) {\n  .col-s-1 {\n    width: 8.33%;\n  }\n  .col-s-2 {\n    width: 16.66%;\n  }\n  .col-s-3 {\n    width: 25%;\n  }\n  .col-s-4 {\n    width: 33.33%;\n  }\n  .col-s-5 {\n    width: 41.66%;\n  }\n  .col-s-6 {\n    width: 50%;\n  }\n  .col-s-7 {\n    width: 58.33%;\n  }\n  .col-s-8 {\n    width: 66.66%;\n  }\n  .col-s-9 {\n    width: 75%;\n  }\n  .col-s-10 {\n    width: 83.33%;\n  }\n  .col-s-11 {\n    width: 91.66%;\n  }\n  .col-s-12 {\n    width: 100%;\n  }\n}\n\n/* Para celulares */\n@media screen and (max-width: 600px) {\n  [class*="col-"] {\n    width: 100%;\n  }\n}\n','@use "sass:list";\n@use "sass:meta";\n@use "sass:map";\n@use "../constants/opacity" as *;\n\n@mixin generateVars($list, $type) {\n  @each $groupName, $groupValues in $list {\n    @if meta.type-of($groupValues) == map {\n      @each $name, $value in $groupValues {\n        --s-#{$type}-#{$groupName}-#{$name}: #{$value};\n      }\n    } @else {\n      --s-#{$type}-#{$groupName}: #{$groupValues};\n    }\n  }\n}\n\n@function getOpacity($valor) {\n  @return map-get($opacity, $valor);\n}\n\n@function getPrimitiveVar($primitiveVar, $type, $value: null, $opacity: null) {\n  $variableVariations: map.get($primitiveVar, $type);\n\n  @if not $value {\n    @if $opacity {\n      @return #{$variableVariations}#{getOpacity($opacity)};\n    }\n    @return $variableVariations;\n  }\n\n  @return map.get($variableVariations, $value);\n}\n','@import "../../../scss/tokens/tokens.scss";\n\n.aside-overlay {\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: none;\n  transition: 0.5s;\n  overflow-x: hidden;\n  z-index: 1;\n\n  &.open {\n    display: flex;\n    opacity: 1;\n    background-color: var(--s-color-background-overlay);\n  }\n}\n\n.aside-root {\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  right: -100vw;\n  background-color: var(--s-color-fill-default);\n  transition: 0.5s;\n  z-index: 2;\n\n  &.open {\n    width: 50%;\n    right: 0;\n  }\n\n  .aside {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n\n    .aside-header {\n      display: flex;\n      flex-direction: column;\n      padding: var(--s-spacing-medium);\n      gap: var(--s-spacing-xx-small);\n\n      .aside-title {\n        align-items: center;\n        color: var(--s-color-content-default);\n        font: var(--s-typography-heading-large);\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n      }\n\n      .aside-description {\n        color: var(--s-color-content-light);\n        font: var(--s-typography-paragraph-regular);\n        word-break: break-all;\n      }\n    }\n    .aside-children {\n      flex-grow: 1;\n      max-height: 100%;\n      overflow: auto;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n\n      &::-webkit-scrollbar {\n        width: 8px;\n        border-radius: 12px;\n      }\n\n      &::-webkit-scrollbar-thumb {\n        background: var(--s-color-fill-default-light);\n        border-radius: 12px;\n      }\n      .aside-content {\n        display: flex;\n        flex-direction: column;\n        gap: var(--s-spacing-small);\n        padding: 0 var(--s-spacing-medium) var(--s-spacing-medium)\n          var(--s-spacing-medium);\n      }\n    }\n\n    .aside-footer {\n      padding: var(--s-spacing-medium);\n      background-color: var(--s-color-background-default);\n    }\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .aside-root {\n    &.open {\n      width: 96%;\n      right: 0;\n    }\n  }\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);