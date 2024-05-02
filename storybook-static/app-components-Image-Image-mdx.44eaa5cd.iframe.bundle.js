(self.webpackChunkdesign_system_zeroz=self.webpackChunkdesign_system_zeroz||[]).push([[5823],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/app/components/Image/Image.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),C_Users_metzx_Desktop_ZeroZ_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Image_stories_tsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/Image/Image.stories.tsx");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,C_Users_metzx_Desktop_ZeroZ_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_Image_stories_tsx__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"image",children:"Image"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"índice",children:"Índice"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#vis%C3%A3o-geral",children:"Visão Geral"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#como-usar",children:"Como usar"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"visão-geral",children:"Visão Geral"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["O componente ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Image"})," serve para exibir uma visualização de imagens."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{additionalActions:[{title:"Open in Figma",onClick:()=>{window.open("https://www.figma.com/file/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?type=design&node-id=2044-19062&mode=design&t=JVfHQJ9NQ0akmOjX-0","_blank")}},{title:"Open in GitHub",onClick:()=>{window.open("https://github.com/metzevandro/Zeroz/blob/master/src/app/components/Image/Image.tsx","_blank")}}],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{name:"default",of:_Image_stories_tsx__WEBPACK_IMPORTED_MODULE_2__})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"como-usar",children:"Como usar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:'<Image alt="Image" src="https://picsum.photos/200" width="200" />\n'})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,C_Users_metzx_Desktop_ZeroZ_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/app/components/Image/Image.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Image_stories});__webpack_require__("./src/app/styles.scss");var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Image=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Image/Image.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Image.A,options);Image.A&&Image.A.locals&&Image.A.locals;__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Image_Image_Image=param=>{let{src,alt,width,...props}=param;return(0,jsx_runtime.jsx)("img",{className:"image-root",width,src,alt,...props})},components_Image_Image=Image_Image_Image;var _Default_parameters,_Default_parameters_docs,_Default_parameters1;Image_Image_Image.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""}},composes:["ImgHTMLAttributes"]};const Image_stories={title:"Components/Image",component:components_Image_Image,parameters:{layout:"centered",page:__webpack_require__("./src/app/components/Image/Image.mdx").default}},Default={args:{src:"https://picsum.photos/200",width:"200",alt:"Image"}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'{\n  args: {\n    src: "https://picsum.photos/200",\n    width: "200",\n    alt: "Image"\n  }\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Image/Image.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".image-root{border:var(--s-border-width-thin) solid var(--s-color-border-default);border-radius:var(--s-border-radius-small);object-fit:cover}","",{version:3,sources:["webpack://./src/app/components/Image/Image.scss"],names:[],mappings:"AAAA,YACE,qEAAA,CACA,0CAAA,CACA,gBAAA",sourcesContent:[".image-root {\n  border: var(--s-border-width-thin) solid var(--s-color-border-default);\n  border-radius: var(--s-border-radius-small);\n  object-fit: cover;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/styles.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";@layer brand{:root[data-company=zeroz]{--b-color-darkness: #331065;--b-color-base: #873bec;--b-color-medium: #945df5;--b-color-light: #ae8cf9;--b-color-lightness: #f6f3ff}:root[data-company=whitelabel]{--b-color-darkness: #181d53;--b-color-base: #2a47e6;--b-color-medium: #466cf2;--b-color-light: #648ef6;--b-color-lightness: #eff3ff}}:root{--s-spacing-quarck: 2px;--s-spacing-nano: 4px;--s-spacing-xx-small: 8px;--s-spacing-x-small: 12px;--s-spacing-small: 16px;--s-spacing-medium: 24px;--s-spacing-large: 32px;--s-spacing-x-large: 40px;--s-spacing-xx-large: 48px;--s-spacing-huge: 56px;--s-border-width-none: 0;--s-border-width-hairline: 1px;--s-border-width-thin: 2px;--s-border-width-strong: 4px;--s-border-width-heavy: 8px;--s-border-radius-none: 0;--s-border-radius-small: 4px;--s-border-radius-medium: 8px;--s-border-radius-large: 16px;--s-border-radius-pill: 5000px;--s-font-size-base: 0.875rem;--s-font-weight-thin: 100;--s-font-weight-light: 300;--s-font-weight-regular: 400;--s-font-weight-medium: 500;--s-font-weight-semibold: 600;--s-font-weight-bold: 700;--s-line-height-16: 1rem;--s-line-height-20: 1.25rem;--s-line-height-24: 1.5rem;--s-line-height-32: 2rem;--s-typography-heading-x-large: 600 2.0125rem / 1rem Inter, sans-serif;--s-typography-heading-large: 600 1.4875rem / 1.5rem Inter, sans-serif;--s-typography-heading-medium: 600 1.225rem / 1.5rem Inter, sans-serif;--s-typography-heading-small: 600 0.9625rem / 1.5rem Inter, sans-serif;--s-typography-heading-x-small: 600 0.875rem / 1.5rem Inter, sans-serif;--s-typography-label-small: 500 0.7875rem / 1.5rem Inter, sans-serif;--s-typography-label-medium: 500 0.875rem / 1.5rem Inter, sans-serif;--s-typography-label-large: 500 0.9625rem / 1.5rem Inter, sans-serif;--s-typography-paragraph-regular: 400 0.875rem / 1.5rem Inter, sans-serif;--s-typography-paragraph-strong: 600 0.875rem / 1.5rem Inter, sans-serif;--s-typography-caption-regular: 400 0.7rem / 1.5rem Inter, sans-serif;--s-typography-caption-strong: 700 0.7rem / 1.5rem Inter, sans-serif;--s-shadow-level-1: 0 4px 8px 0 rgba(0, 0, 0, 0.16);--s-shadow-level-2: 0 8px 16px 0 rgba(0, 0, 0, 0.16);--s-shadow-level-3: 0 12px 24px 0 rgba(0, 0, 0, 0.16);--s-shadow-level-4: 0 16px 32px 0 rgba(0, 0, 0, 0.16)}@layer theme{:root{--s-color-background-default: #f6f7f9;--s-color-background-highlight: var(--b-color-base);--s-color-background-overlay: #000000A3;--s-color-fill-default: #ffffff;--s-color-fill-default-hover: #eceef2;--s-color-fill-default-light: #d5d9e2;--s-color-fill-disable: #eceef2;--s-color-fill-highlight: var(--b-color-base);--s-color-fill-highlight-hover: var(--b-color-medium);--s-color-fill-highlight-light: var(--b-color-lightness);--s-color-fill-success: #39814a;--s-color-fill-success-hover: #4a9d5d;--s-color-fill-success-light: #f3faf4;--s-color-fill-warning: #c8451f;--s-color-fill-warning-hover: #e4622b;--s-color-fill-warning-light: #fdf5ef;--s-color-border-default: #b1bbc8;--s-color-border-highlight: var(--b-color-base);--s-color-border-success: #39814a;--s-color-border-warning: #c8451f;--s-color-content-default: #3f495a;--s-color-content-light: #526077;--s-color-content-placeholder: #677790;--s-color-content-disable: #98a4b5;--s-color-content-on-color: #ffffff;--s-color-content-highlight: var(--b-color-base);--s-color-content-success: #39814a;--s-color-content-warning: #c8451f}:root[data-theme=dark]{--s-color-background-default: #22262f;--s-color-background-highlight: var(--b-color-base);--s-color-background-overlay: #000000A3;--s-color-fill-default: #343a46;--s-color-fill-default-hover: #3f495a;--s-color-fill-default-light: #434e61;--s-color-fill-disable: #3f495a;--s-color-fill-highlight: var(--b-color-base);--s-color-fill-highlight-hover: var(--b-color-medium);--s-color-fill-highlight-light: var(--b-color-darkness);--s-color-fill-success: #39814a;--s-color-fill-success-hover: #4a9d5d;--s-color-fill-success-light: #0f2415;--s-color-fill-warning: #c8451f;--s-color-fill-warning-hover: #e4622b;--s-color-fill-warning-light: #3d110d;--s-color-border-default: #526077;--s-color-border-highlight: var(--b-color-light);--s-color-border-success: #6fb980;--s-color-border-warning: #e9824e;--s-color-content-default: #eceef2;--s-color-content-light: #b1bbc8;--s-color-content-placeholder: #98a4b5;--s-color-content-disable: #677790;--s-color-content-on-color: #ffffff;--s-color-content-highlight: var(--b-color-light);--s-color-content-success: #6fb980;--s-color-content-warning: #e9824e}}*{border:none;padding:0;margin:0;box-sizing:border-box}.slot{display:flex;align-items:center;gap:var(--s-spacing-xx-small);color:var(--s-color-content-highlight);border:var(--s-border-width-thin) solid var(--s-color-border-highlight);font:var(--s-typography-heading-small);padding:var(--s-spacing-small);border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-highlight-light)}',"",{version:3,sources:["webpack://./src/app/styles.scss","webpack://./src/scss/tokens/semantics/colors.scss","webpack://./src/scss/mixins/tokens.scss"],names:[],mappings:"AAOQ,6HAAA,CCJR,aAEI,0BACE,2BAAA,CACA,uBAAA,CACA,yBAAA,CACA,wBAAA,CACA,4BAAA,CAGF,+BACE,2BAAA,CACA,uBAAA,CACA,yBAAA,CACA,wBAAA,CACA,4BAAA,CAAA,CDTN,MEGM,uBAAA,CAAA,qBAAA,CAAA,yBAAA,CAAA,yBAAA,CAAA,uBAAA,CAAA,wBAAA,CAAA,uBAAA,CAAA,yBAAA,CAAA,0BAAA,CAAA,sBAAA,CAAA,wBAAA,CAAA,8BAAA,CAAA,0BAAA,CAAA,4BAAA,CAAA,2BAAA,CAAA,yBAAA,CAAA,4BAAA,CAAA,6BAAA,CAAA,6BAAA,CAAA,8BAAA,CAAA,4BAAA,CAAA,yBAAA,CAAA,0BAAA,CAAA,4BAAA,CAAA,2BAAA,CAAA,6BAAA,CAAA,yBAAA,CAAA,wBAAA,CAAA,2BAAA,CAAA,0BAAA,CAAA,wBAAA,CAAA,sEAAA,CAAA,sEAAA,CAAA,sEAAA,CAAA,sEAAA,CAAA,uEAAA,CAAA,oEAAA,CAAA,oEAAA,CAAA,oEAAA,CAAA,yEAAA,CAAA,wEAAA,CAAA,qEAAA,CAAA,oEAAA,CAHE,mDAAA,CAAA,oDAAA,CAAA,qDAAA,CAAA,qDAAA,CFkBR,aACE,MEnBM,qCAAA,CAAA,mDAAA,CAAA,uCAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,+BAAA,CAAA,6CAAA,CAAA,qDAAA,CAAA,wDAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,iCAAA,CAAA,+CAAA,CAAA,iCAAA,CAAA,iCAAA,CAAA,kCAAA,CAAA,gCAAA,CAAA,sCAAA,CAAA,kCAAA,CAAA,mCAAA,CAAA,gDAAA,CAAA,kCAAA,CAAA,kCAAA,CFqBJ,uBErBI,qCAAA,CAAA,mDAAA,CAAA,uCAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,+BAAA,CAAA,6CAAA,CAAA,qDAAA,CAAA,uDAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,iCAAA,CAAA,gDAAA,CAAA,iCAAA,CAAA,iCAAA,CAAA,kCAAA,CAAA,gCAAA,CAAA,sCAAA,CAAA,kCAAA,CAAA,mCAAA,CAAA,iDAAA,CAAA,kCAAA,CAAA,kCAAA,CAAA,CF2BR,EACE,WAAA,CACA,SAAA,CACA,QAAA,CACA,qBAAA,CAGF,MACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,sCAAA,CACA,uEAAA,CACA,sCAAA,CACA,8BAAA,CACA,0CAAA,CACA,oDAAA",sourcesContent:['@use "../scss/tokens/semantics/colors.scss" as *;\n@use "../scss/mixins/tokens" as tokens;\n@use "../scss/tokens/semantics/borders.scss" as *;\n@use "../scss/tokens/semantics/colors.scss" as *;\n@use "../scss/tokens/semantics/shadows.scss" as *;\n@use "../scss/tokens/semantics/typographies.scss" as *;\n@use "../scss/tokens/semantics/spacing.scss" as *;\n@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");\n\n:root {\n  @include tokens.generateVars($semantic-spacing, spacing);\n\n  @include tokens.generateVars($semantic-borders-width, border-width);\n\n  @include tokens.generateVars($semantic-borders-radius, border-radius);\n\n  @include tokens.generateVars($semantic-font-size, font-size);\n\n  @include tokens.generateVars($semantic-font-weight, font-weight);\n\n  @include tokens.generateVars($semantic-line-height, line-height);\n\n  @include tokens.generateVars($semantic-typographies, typography);\n\n  @include tokens.generateVars($semantic-shadows, shadow);\n}\n\n@layer theme {\n  :root {\n    @include tokens.generateVars($semantic-color-light, color);\n    &[data-theme="dark"] {\n      @include tokens.generateVars($semantic-color-dark, color);\n    }\n  }\n}\n\n* {\n  border: none;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.slot {\n  display: flex;\n  align-items: center;\n  gap: var(--s-spacing-xx-small);\n  color: var(--s-color-content-highlight);\n  border: var(--s-border-width-thin) solid var(--s-color-border-highlight);\n  font: var(--s-typography-heading-small);\n  padding: var(--s-spacing-small);\n  border-radius: var(--s-border-radius-small);\n  background-color: var(--s-color-fill-highlight-light);\n}\n','@use "../../mixins/tokens" as tokens;\n@use "../primitives/colors.scss" as *;\n\n@layer brand {\n  :root {\n    &[data-company="zeroz"] {\n      --b-color-darkness: #{tokens.getPrimitiveVar($p-color, purple, 950)};\n      --b-color-base: #{tokens.getPrimitiveVar($p-color, purple, 600)};\n      --b-color-medium: #{tokens.getPrimitiveVar($p-color, purple, 500)};\n      --b-color-light: #{tokens.getPrimitiveVar($p-color, purple, 400)};\n      --b-color-lightness: #{tokens.getPrimitiveVar($p-color, purple, 50)};\n    }\n\n    &[data-company="whitelabel"] {\n      --b-color-darkness: #{tokens.getPrimitiveVar($p-color, blue, 950)};\n      --b-color-base: #{tokens.getPrimitiveVar($p-color, blue, 600)};\n      --b-color-medium: #{tokens.getPrimitiveVar($p-color, blue, 500)};\n      --b-color-light: #{tokens.getPrimitiveVar($p-color, blue, 400)};\n      --b-color-lightness: #{tokens.getPrimitiveVar($p-color, blue, 50)};\n    }\n  }\n}\n\n$semantic-color-light: (\n  background: (\n    default: tokens.getPrimitiveVar($p-color, neutral, 50),\n    highlight: var(--b-color-base),\n    overlay: tokens.getPrimitiveVar($p-color, black, null, 64),\n  ),\n  fill: (\n    default: tokens.getPrimitiveVar($p-color, white),\n    default-hover: tokens.getPrimitiveVar($p-color, neutral, 100),\n    default-light: tokens.getPrimitiveVar($p-color, neutral, 200),\n    disable: tokens.getPrimitiveVar($p-color, neutral, 100),\n    highlight: var(--b-color-base),\n    highlight-hover: var(--b-color-medium),\n    highlight-light: var(--b-color-lightness),\n    success: tokens.getPrimitiveVar($p-color, green, 600),\n    success-hover: tokens.getPrimitiveVar($p-color, green, 500),\n    success-light: tokens.getPrimitiveVar($p-color, green, 50),\n    warning: tokens.getPrimitiveVar($p-color, orange, 600),\n    warning-hover: tokens.getPrimitiveVar($p-color, orange, 500),\n    warning-light: tokens.getPrimitiveVar($p-color, orange, 50),\n  ),\n  border: (\n    default: tokens.getPrimitiveVar($p-color, neutral, 300),\n    highlight: var(--b-color-base),\n    success: tokens.getPrimitiveVar($p-color, green, 600),\n    warning: tokens.getPrimitiveVar($p-color, orange, 600),\n  ),\n  content: (\n    default: tokens.getPrimitiveVar($p-color, neutral, 800),\n    light: tokens.getPrimitiveVar($p-color, neutral, 600),\n    placeholder: tokens.getPrimitiveVar($p-color, neutral, 500),\n    disable: tokens.getPrimitiveVar($p-color, neutral, 400),\n    on-color: tokens.getPrimitiveVar($p-color, white),\n    highlight: var(--b-color-base),\n    success: tokens.getPrimitiveVar($p-color, green, 600),\n    warning: tokens.getPrimitiveVar($p-color, orange, 600),\n  ),\n);\n\n$semantic-color-dark: (\n  background: (\n    default: tokens.getPrimitiveVar($p-color, neutral, 950),\n    highlight: var(--b-color-base),\n    overlay: tokens.getPrimitiveVar($p-color, black, null, 64),\n  ),\n  fill: (\n    default: tokens.getPrimitiveVar($p-color, neutral, 900),\n    default-hover: tokens.getPrimitiveVar($p-color, neutral, 800),\n    default-light: tokens.getPrimitiveVar($p-color, neutral, 700),\n    disable: tokens.getPrimitiveVar($p-color, neutral, 800),\n    highlight: var(--b-color-base),\n    highlight-hover: var(--b-color-medium),\n    highlight-light: var(--b-color-darkness),\n    success: tokens.getPrimitiveVar($p-color, green, 600),\n    success-hover: tokens.getPrimitiveVar($p-color, green, 500),\n    success-light: tokens.getPrimitiveVar($p-color, green, 950),\n    warning: tokens.getPrimitiveVar($p-color, orange, 600),\n    warning-hover: tokens.getPrimitiveVar($p-color, orange, 500),\n    warning-light: tokens.getPrimitiveVar($p-color, orange, 950),\n  ),\n  border: (\n    default: tokens.getPrimitiveVar($p-color, neutral, 600),\n    highlight: var(--b-color-light),\n    success: tokens.getPrimitiveVar($p-color, green, 400),\n    warning: tokens.getPrimitiveVar($p-color, orange, 400),\n  ),\n  content: (\n    default: tokens.getPrimitiveVar($p-color, neutral, 100),\n    light: tokens.getPrimitiveVar($p-color, neutral, 300),\n    placeholder: tokens.getPrimitiveVar($p-color, neutral, 400),\n    disable: tokens.getPrimitiveVar($p-color, neutral, 500),\n    on-color: tokens.getPrimitiveVar($p-color, white),\n    highlight: var(--b-color-light),\n    success: tokens.getPrimitiveVar($p-color, green, 400),\n    warning: tokens.getPrimitiveVar($p-color, orange, 400),\n  ),\n);\n','@use "sass:list";\n@use "sass:meta";\n@use "sass:map";\n@use "../constants/opacity" as *;\n\n@mixin generateVars($list, $type) {\n  @each $groupName, $groupValues in $list {\n    @if meta.type-of($groupValues) == map {\n      @each $name, $value in $groupValues {\n        --s-#{$type}-#{$groupName}-#{$name}: #{$value};\n      }\n    } @else {\n      --s-#{$type}-#{$groupName}: #{$groupValues};\n    }\n  }\n}\n\n@function getOpacity($valor) {\n  @return map-get($opacity, $valor);\n}\n\n@function getPrimitiveVar($primitiveVar, $type, $value: null, $opacity: null) {\n  $variableVariations: map.get($primitiveVar, $type);\n\n  @if not $value {\n    @if $opacity {\n      @return #{$variableVariations}#{getOpacity($opacity)};\n    }\n    @return $variableVariations;\n  }\n\n  @return map.get($variableVariations, $value);\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./src/app/styles.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_styles_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/styles.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_styles_scss__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_styles_scss__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_styles_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_styles_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);