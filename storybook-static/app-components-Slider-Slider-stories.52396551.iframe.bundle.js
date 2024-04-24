"use strict";(self.webpackChunkdesign_system_zeroz=self.webpackChunkdesign_system_zeroz||[]).push([[8561],{"./src/app/components/Slider/Slider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./src/app/styles.scss");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Slider",component:__webpack_require__("./src/app/components/Slider/Slider.tsx").A,tags:["autodocs"]};var Default={args:{label:"Label",value:"5",max:10,min:0,step:1}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Label",\n    value: "5",\n    max: 10,\n    min: 0,\n    step: 1\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/app/components/Slider/Slider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Slider_Slider});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Slider=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/app/components/Slider/Slider.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Slider.A,options);Slider.A&&Slider.A.locals&&Slider.A.locals;var __jsx=react.createElement,Slider_Slider_Slider=function Slider(_ref){var step=_ref.step,min=_ref.min,max=_ref.max,value=_ref.value,label=_ref.label,onChange=_ref.onChange,_useState=(0,react.useState)((parseInt(value)-min)/(max-min)*100),progress=_useState[0],setProgress=_useState[1],_useState2=(0,react.useState)(value),currentValue=_useState2[0],setCurrentValue=_useState2[1],isDragging=(0,react.useRef)(!1);(0,react.useEffect)((function(){var newValue=parseInt(value);setCurrentValue(value),setProgress((newValue-min)/(max-min)*100)}),[value,min,max]);var updateProgress=function updateProgress(newValue){var clampedValue=Math.min(Math.max(newValue,min),max);setProgress((clampedValue-min)/(max-min)*100),setCurrentValue(String(clampedValue)),onChange&&onChange(String(clampedValue))},handleSliderClick=function handleSliderClick(e){handleDragStart(e)},handleDragStart=function handleDragStart(e){isDragging.current=!0,window.addEventListener("mousemove",handleDragMove),window.addEventListener("touchmove",handleDragMove),window.addEventListener("mouseup",handleDragEnd),window.addEventListener("touchend",handleDragEnd),handleDragMove(e.nativeEvent)},handleDragMove=function handleDragMove(e){var clientX=e instanceof MouseEvent?e.clientX:e.touches[0].clientX;e instanceof MouseEvent?e.clientY:e.touches[0].clientY;if(isDragging.current){var slider=document.getElementById("slider-background");if(slider){var rect=slider.getBoundingClientRect(),rawPercentage=(clientX-rect.left)/rect.width*100;rawPercentage>100?rawPercentage=100:rawPercentage<0&&(rawPercentage=0);var calculatedValue=rawPercentage/100*(max-min)+min,alignedValue=Math.round(calculatedValue/step)*step;updateProgress(alignedValue)}}},handleDragEnd=function handleDragEnd(){isDragging.current=!1,window.removeEventListener("mousemove",handleDragMove),window.removeEventListener("touchmove",handleDragMove),window.removeEventListener("mouseup",handleDragEnd),window.removeEventListener("touchend",handleDragEnd)};return __jsx("div",{className:"slider"},__jsx("label",{className:"slider-label",htmlFor:"sliderInput"},label),__jsx("div",{className:"slider-container"},__jsx("div",{className:"slider-max-min"},min),__jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",cursor:"grabbing"}},__jsx("div",{id:"slider-background",className:"slider-background",onMouseDown:function onMouseDown(e){return handleSliderClick(e)},onTouchStart:function onTouchStart(e){return handleSliderClick(e)}},__jsx("div",{className:"slider-progress-bar",style:{width:"".concat(progress,"%")}}),__jsx("div",{className:"slider-button",tabIndex:0,style:{left:"calc(".concat(progress,"% - 10px)")},onKeyDown:function handleArrowKeyPress(e){if("ArrowLeft"===e.key||"ArrowRight"===e.key){e.preventDefault();var change="ArrowLeft"===e.key?-step:step,newValue=parseInt(currentValue)+change,alignedValue=Math.round(newValue/step)*step;newValue=Math.min(Math.max(alignedValue,min),max),updateProgress(newValue)}}}))),__jsx("div",{className:"slider-max-min"},max),__jsx("input",{inputMode:"numeric",className:"slider-input",type:"number",min,max,step,value:currentValue,onChange:function handleInputChange(e){var newValue=parseInt(e.target.value);updateProgress(newValue)},id:"sliderInput"})))};const components_Slider_Slider=Slider_Slider_Slider;Slider_Slider_Slider.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{step:{required:!0,tsType:{name:"number"},description:""},min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},value:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/app/components/Slider/Slider.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".slider{display:flex;flex-direction:column;gap:var(--s-spacing-nano);min-width:250px}.slider .slider-label{font:var(--s-typography-label-medium);color:var(--s-color-content-default)}.slider .slider-container{display:flex;gap:var(--s-spacing-x-small);align-items:center}.slider .slider-container .slider-max-min{color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular)}.slider .slider-container .slider-background{width:100%;height:4px;position:relative;border-radius:150px;background-color:var(--s-color-fill-default-light)}.slider .slider-container .slider-progress-bar{border-radius:150px;height:100%;background-color:var(--s-color-fill-highlight);transition:.01s width ease-in-out}.slider .slider-container .slider-button{cursor:grab;background-color:var(--s-color-fill-highlight);width:16px;height:16px;border-radius:var(--s-border-radius-pill);position:absolute;top:50%;transform:translateY(-50%);z-index:2;transition:.01s left ease-in-out}.slider .slider-container .slider-button:hover{width:20px;height:20px}.slider .slider-container .slider-button:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.slider .slider-container .slider-input{min-width:64px;max-height:min-content;padding:var(--s-spacing-xx-small) var(--s-spacing-x-small);text-align:left;border:var(--s-border-width-hairline) solid var(--s-color-border-default);border-radius:var(--s-border-radius-small);font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);background-color:var(--s-color-fill-default)}.slider .slider-container .slider-input:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}","",{version:3,sources:["webpack://./src/app/components/Slider/Slider.scss"],names:[],mappings:"AAAA,QACE,YAAA,CACA,qBAAA,CACA,yBAAA,CACA,eAAA,CAEA,sBACE,qCAAA,CACA,oCAAA,CAGF,0BACE,YAAA,CACA,4BAAA,CACA,kBAAA,CAEA,0CACE,oCAAA,CACA,0CAAA,CAGF,6CACE,UAAA,CACA,UAAA,CACA,iBAAA,CACA,mBAAA,CACA,kDAAA,CAGF,+CACE,mBAAA,CACA,WAAA,CACA,8CAAA,CACA,iCAAA,CAGF,yCACE,WAAA,CACA,8CAAA,CACA,UAAA,CACA,WAAA,CACA,yCAAA,CACA,iBAAA,CACA,OAAA,CACA,0BAAA,CACA,SAAA,CACA,gCAAA,CACA,+CACE,UAAA,CACA,WAAA,CAGF,uDACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAIJ,wCACE,cAAA,CACA,sBAAA,CACA,0DAAA,CACA,eAAA,CACA,yEAAA,CACA,0CAAA,CACA,0CAAA,CACA,oCAAA,CACA,4CAAA,CAEA,sDACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA",sourcesContent:[".slider {\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-nano);\n  min-width: 250px;\n\n  .slider-label {\n    font: var(--s-typography-label-medium);\n    color: var(--s-color-content-default);\n  }\n\n  .slider-container {\n    display: flex;\n    gap: var(--s-spacing-x-small);\n    align-items: center;\n\n    .slider-max-min {\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n    }\n\n    .slider-background {\n      width: 100%;\n      height: 4px;\n      position: relative;\n      border-radius: 150px;\n      background-color: var(--s-color-fill-default-light);\n    }\n\n    .slider-progress-bar {\n      border-radius: 150px;\n      height: 100%;\n      background-color: var(--s-color-fill-highlight);\n      transition: 0.01s width ease-in-out;\n    }\n\n    .slider-button {\n      cursor: grab;\n      background-color: var(--s-color-fill-highlight);\n      width: 16px;\n      height: 16px;\n      border-radius: var(--s-border-radius-pill);\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      z-index: 2;\n      transition: 0.01s left ease-in-out;\n      &:hover {\n        width: 20px;\n        height: 20px;\n      }\n\n      &:focus-visible {\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-fill-highlight);\n        outline-offset: var(--s-border-width-thin);\n        outline-style: solid;\n      }\n    }\n\n    .slider-input {\n      min-width: 64px;\n      max-height: min-content;\n      padding: var(--s-spacing-xx-small) var(--s-spacing-x-small);\n      text-align: left;\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n      border-radius: var(--s-border-radius-small);\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-default);\n      background-color: var(--s-color-fill-default);\n\n      &:focus-visible {\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-fill-highlight);\n        outline-offset: var(--s-border-width-thin);\n        outline-style: solid;\n      }\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/app/styles.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";@layer brand{:root[data-company=zeroz]{--b-color-darkness: #331065;--b-color-base: #873bec;--b-color-medium: #945df5;--b-color-light: #ae8cf9;--b-color-lightness: #f6f3ff}:root[data-company=whitelabel]{--b-color-darkness: #181d53;--b-color-base: #2a47e6;--b-color-medium: #466cf2;--b-color-light: #648ef6;--b-color-lightness: #eff3ff}}:root{--s-spacing-quarck: 2px;--s-spacing-nano: 4px;--s-spacing-xx-small: 8px;--s-spacing-x-small: 12px;--s-spacing-small: 16px;--s-spacing-medium: 24px;--s-spacing-large: 32px;--s-spacing-x-large: 40px;--s-spacing-xx-large: 48px;--s-spacing-huge: 56px;--s-border-width-none: 0;--s-border-width-hairline: 1px;--s-border-width-thin: 2px;--s-border-width-strong: 4px;--s-border-width-heavy: 8px;--s-border-radius-none: 0;--s-border-radius-small: 4px;--s-border-radius-medium: 8px;--s-border-radius-large: 16px;--s-border-radius-pill: 5000px;--s-font-size-base: 0.875rem;--s-font-weight-thin: 100;--s-font-weight-light: 300;--s-font-weight-regular: 400;--s-font-weight-medium: 500;--s-font-weight-semibold: 600;--s-font-weight-bold: 700;--s-line-height-16: 1rem;--s-line-height-20: 1.25rem;--s-line-height-24: 1.5rem;--s-line-height-32: 2rem;--s-typography-heading-x-large: 600 2.0125rem / 1rem Inter, sans-serif;--s-typography-heading-large: 600 1.4875rem / 1.5rem Inter, sans-serif;--s-typography-heading-medium: 600 1.225rem / 1.5rem Inter, sans-serif;--s-typography-heading-small: 600 0.9625rem / 1.5rem Inter, sans-serif;--s-typography-heading-x-small: 600 0.875rem / 1.5rem Inter, sans-serif;--s-typography-label-small: 500 0.7875rem / 1.5rem Inter, sans-serif;--s-typography-label-medium: 500 0.875rem / 1.5rem Inter, sans-serif;--s-typography-label-large: 500 0.9625rem / 1.5rem Inter, sans-serif;--s-typography-paragraph-regular: 400 0.875rem / 1.5rem Inter, sans-serif;--s-typography-paragraph-strong: 600 0.875rem / 1.5rem Inter, sans-serif;--s-typography-caption-regular: 400 0.7rem / 1.5rem Inter, sans-serif;--s-typography-caption-strong: 700 0.7rem / 1.5rem Inter, sans-serif;--s-shadow-level-1: 0 4px 8px 0 rgba(0, 0, 0, 0.16);--s-shadow-level-2: 0 8px 16px 0 rgba(0, 0, 0, 0.16);--s-shadow-level-3: 0 12px 24px 0 rgba(0, 0, 0, 0.16);--s-shadow-level-4: 0 16px 32px 0 rgba(0, 0, 0, 0.16)}@layer theme{:root{--s-color-background-default: #f6f7f9;--s-color-background-highlight: var(--b-color-base);--s-color-background-overlay: #000000A3;--s-color-fill-default: #ffffff;--s-color-fill-default-hover: #eceef2;--s-color-fill-default-light: #d5d9e2;--s-color-fill-disable: #eceef2;--s-color-fill-highlight: var(--b-color-base);--s-color-fill-highlight-hover: var(--b-color-medium);--s-color-fill-highlight-light: var(--b-color-lightness);--s-color-fill-success: #39814a;--s-color-fill-success-hover: #4a9d5d;--s-color-fill-success-light: #f3faf4;--s-color-fill-warning: #c8451f;--s-color-fill-warning-hover: #e4622b;--s-color-fill-warning-light: #fdf5ef;--s-color-border-default: #b1bbc8;--s-color-border-highlight: var(--b-color-base);--s-color-border-success: #39814a;--s-color-border-warning: #c8451f;--s-color-content-default: #3f495a;--s-color-content-light: #526077;--s-color-content-placeholder: #677790;--s-color-content-disable: #98a4b5;--s-color-content-on-color: #ffffff;--s-color-content-highlight: var(--b-color-base);--s-color-content-success: #39814a;--s-color-content-warning: #c8451f}:root[data-theme=dark]{--s-color-background-default: #22262f;--s-color-background-highlight: var(--b-color-base);--s-color-background-overlay: #000000A3;--s-color-fill-default: #343a46;--s-color-fill-default-hover: #3f495a;--s-color-fill-default-light: #434e61;--s-color-fill-disable: #3f495a;--s-color-fill-highlight: var(--b-color-base);--s-color-fill-highlight-hover: var(--b-color-medium);--s-color-fill-highlight-light: var(--b-color-darkness);--s-color-fill-success: #39814a;--s-color-fill-success-hover: #4a9d5d;--s-color-fill-success-light: #0f2415;--s-color-fill-warning: #c8451f;--s-color-fill-warning-hover: #e4622b;--s-color-fill-warning-light: #3d110d;--s-color-border-default: #526077;--s-color-border-highlight: var(--b-color-light);--s-color-border-success: #6fb980;--s-color-border-warning: #e9824e;--s-color-content-default: #eceef2;--s-color-content-light: #b1bbc8;--s-color-content-placeholder: #98a4b5;--s-color-content-disable: #677790;--s-color-content-on-color: #ffffff;--s-color-content-highlight: var(--b-color-light);--s-color-content-success: #6fb980;--s-color-content-warning: #e9824e}}*{border:none;padding:0;margin:0;box-sizing:border-box}.slot{display:flex;align-items:center;gap:var(--s-spacing-xx-small);color:var(--s-color-content-highlight);border:var(--s-border-width-thin) solid var(--s-color-border-highlight);font:var(--s-typography-heading-small);padding:var(--s-spacing-small);border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-highlight-light)}',"",{version:3,sources:["webpack://./src/app/styles.scss","webpack://./src/scss/tokens/semantics/colors.scss","webpack://./src/scss/mixins/tokens.scss"],names:[],mappings:"AAOQ,6HAAA,CCJR,aAEI,0BACE,2BAAA,CACA,uBAAA,CACA,yBAAA,CACA,wBAAA,CACA,4BAAA,CAGF,+BACE,2BAAA,CACA,uBAAA,CACA,yBAAA,CACA,wBAAA,CACA,4BAAA,CAAA,CDTN,MEGM,uBAAA,CAAA,qBAAA,CAAA,yBAAA,CAAA,yBAAA,CAAA,uBAAA,CAAA,wBAAA,CAAA,uBAAA,CAAA,yBAAA,CAAA,0BAAA,CAAA,sBAAA,CAAA,wBAAA,CAAA,8BAAA,CAAA,0BAAA,CAAA,4BAAA,CAAA,2BAAA,CAAA,yBAAA,CAAA,4BAAA,CAAA,6BAAA,CAAA,6BAAA,CAAA,8BAAA,CAAA,4BAAA,CAAA,yBAAA,CAAA,0BAAA,CAAA,4BAAA,CAAA,2BAAA,CAAA,6BAAA,CAAA,yBAAA,CAAA,wBAAA,CAAA,2BAAA,CAAA,0BAAA,CAAA,wBAAA,CAAA,sEAAA,CAAA,sEAAA,CAAA,sEAAA,CAAA,sEAAA,CAAA,uEAAA,CAAA,oEAAA,CAAA,oEAAA,CAAA,oEAAA,CAAA,yEAAA,CAAA,wEAAA,CAAA,qEAAA,CAAA,oEAAA,CAHE,mDAAA,CAAA,oDAAA,CAAA,qDAAA,CAAA,qDAAA,CFkBR,aACE,MEnBM,qCAAA,CAAA,mDAAA,CAAA,uCAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,+BAAA,CAAA,6CAAA,CAAA,qDAAA,CAAA,wDAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,iCAAA,CAAA,+CAAA,CAAA,iCAAA,CAAA,iCAAA,CAAA,kCAAA,CAAA,gCAAA,CAAA,sCAAA,CAAA,kCAAA,CAAA,mCAAA,CAAA,gDAAA,CAAA,kCAAA,CAAA,kCAAA,CFqBJ,uBErBI,qCAAA,CAAA,mDAAA,CAAA,uCAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,+BAAA,CAAA,6CAAA,CAAA,qDAAA,CAAA,uDAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,+BAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,iCAAA,CAAA,gDAAA,CAAA,iCAAA,CAAA,iCAAA,CAAA,kCAAA,CAAA,gCAAA,CAAA,sCAAA,CAAA,kCAAA,CAAA,mCAAA,CAAA,iDAAA,CAAA,kCAAA,CAAA,kCAAA,CAAA,CF2BR,EACE,WAAA,CACA,SAAA,CACA,QAAA,CACA,qBAAA,CAGF,MACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,sCAAA,CACA,uEAAA,CACA,sCAAA,CACA,8BAAA,CACA,0CAAA,CACA,oDAAA",sourcesContent:['@use "../scss/tokens/semantics/colors.scss" as *;\n@use "../scss/mixins/tokens" as tokens;\n@use "../scss/tokens/semantics/borders.scss" as *;\n@use "../scss/tokens/semantics/colors.scss" as *;\n@use "../scss/tokens/semantics/shadows.scss" as *;\n@use "../scss/tokens/semantics/typographies.scss" as *;\n@use "../scss/tokens/semantics/spacing.scss" as *;\n@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");\n\n:root {\n  @include tokens.generateVars($semantic-spacing, spacing);\n\n  @include tokens.generateVars($semantic-borders-width, border-width);\n\n  @include tokens.generateVars($semantic-borders-radius, border-radius);\n\n  @include tokens.generateVars($semantic-font-size, font-size);\n\n  @include tokens.generateVars($semantic-font-weight, font-weight);\n\n  @include tokens.generateVars($semantic-line-height, line-height);\n\n  @include tokens.generateVars($semantic-typographies, typography);\n\n  @include tokens.generateVars($semantic-shadows, shadow);\n}\n\n@layer theme {\n  :root {\n    @include tokens.generateVars($semantic-color-light, color);\n    &[data-theme="dark"] {\n      @include tokens.generateVars($semantic-color-dark, color);\n    }\n  }\n}\n\n* {\n  border: none;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.slot {\n  display: flex;\n  align-items: center;\n  gap: var(--s-spacing-xx-small);\n  color: var(--s-color-content-highlight);\n  border: var(--s-border-width-thin) solid var(--s-color-border-highlight);\n  font: var(--s-typography-heading-small);\n  padding: var(--s-spacing-small);\n  border-radius: var(--s-border-radius-small);\n  background-color: var(--s-color-fill-highlight-light);\n}\n','@use "../../mixins/tokens" as tokens;\n@use "../primitives/colors.scss" as *;\n\n@layer brand {\n  :root {\n    &[data-company="zeroz"] {\n      --b-color-darkness: #{tokens.getPrimitiveVar($p-color, purple, 950)};\n      --b-color-base: #{tokens.getPrimitiveVar($p-color, purple, 600)};\n      --b-color-medium: #{tokens.getPrimitiveVar($p-color, purple, 500)};\n      --b-color-light: #{tokens.getPrimitiveVar($p-color, purple, 400)};\n      --b-color-lightness: #{tokens.getPrimitiveVar($p-color, purple, 50)};\n    }\n\n    &[data-company="whitelabel"] {\n      --b-color-darkness: #{tokens.getPrimitiveVar($p-color, blue, 950)};\n      --b-color-base: #{tokens.getPrimitiveVar($p-color, blue, 600)};\n      --b-color-medium: #{tokens.getPrimitiveVar($p-color, blue, 500)};\n      --b-color-light: #{tokens.getPrimitiveVar($p-color, blue, 400)};\n      --b-color-lightness: #{tokens.getPrimitiveVar($p-color, blue, 50)};\n    }\n  }\n}\n\n$semantic-color-light: (\n  background: (\n    default: tokens.getPrimitiveVar($p-color, neutral, 50),\n    highlight: var(--b-color-base),\n    overlay: tokens.getPrimitiveVar($p-color, black, null, 64),\n  ),\n  fill: (\n    default: tokens.getPrimitiveVar($p-color, white),\n    default-hover: tokens.getPrimitiveVar($p-color, neutral, 100),\n    default-light: tokens.getPrimitiveVar($p-color, neutral, 200),\n    disable: tokens.getPrimitiveVar($p-color, neutral, 100),\n    highlight: var(--b-color-base),\n    highlight-hover: var(--b-color-medium),\n    highlight-light: var(--b-color-lightness),\n    success: tokens.getPrimitiveVar($p-color, green, 600),\n    success-hover: tokens.getPrimitiveVar($p-color, green, 500),\n    success-light: tokens.getPrimitiveVar($p-color, green, 50),\n    warning: tokens.getPrimitiveVar($p-color, orange, 600),\n    warning-hover: tokens.getPrimitiveVar($p-color, orange, 500),\n    warning-light: tokens.getPrimitiveVar($p-color, orange, 50),\n  ),\n  border: (\n    default: tokens.getPrimitiveVar($p-color, neutral, 300),\n    highlight: var(--b-color-base),\n    success: tokens.getPrimitiveVar($p-color, green, 600),\n    warning: tokens.getPrimitiveVar($p-color, orange, 600),\n  ),\n  content: (\n    default: tokens.getPrimitiveVar($p-color, neutral, 800),\n    light: tokens.getPrimitiveVar($p-color, neutral, 600),\n    placeholder: tokens.getPrimitiveVar($p-color, neutral, 500),\n    disable: tokens.getPrimitiveVar($p-color, neutral, 400),\n    on-color: tokens.getPrimitiveVar($p-color, white),\n    highlight: var(--b-color-base),\n    success: tokens.getPrimitiveVar($p-color, green, 600),\n    warning: tokens.getPrimitiveVar($p-color, orange, 600),\n  ),\n);\n\n$semantic-color-dark: (\n  background: (\n    default: tokens.getPrimitiveVar($p-color, neutral, 950),\n    highlight: var(--b-color-base),\n    overlay: tokens.getPrimitiveVar($p-color, black, null, 64),\n  ),\n  fill: (\n    default: tokens.getPrimitiveVar($p-color, neutral, 900),\n    default-hover: tokens.getPrimitiveVar($p-color, neutral, 800),\n    default-light: tokens.getPrimitiveVar($p-color, neutral, 700),\n    disable: tokens.getPrimitiveVar($p-color, neutral, 800),\n    highlight: var(--b-color-base),\n    highlight-hover: var(--b-color-medium),\n    highlight-light: var(--b-color-darkness),\n    success: tokens.getPrimitiveVar($p-color, green, 600),\n    success-hover: tokens.getPrimitiveVar($p-color, green, 500),\n    success-light: tokens.getPrimitiveVar($p-color, green, 950),\n    warning: tokens.getPrimitiveVar($p-color, orange, 600),\n    warning-hover: tokens.getPrimitiveVar($p-color, orange, 500),\n    warning-light: tokens.getPrimitiveVar($p-color, orange, 950),\n  ),\n  border: (\n    default: tokens.getPrimitiveVar($p-color, neutral, 600),\n    highlight: var(--b-color-light),\n    success: tokens.getPrimitiveVar($p-color, green, 400),\n    warning: tokens.getPrimitiveVar($p-color, orange, 400),\n  ),\n  content: (\n    default: tokens.getPrimitiveVar($p-color, neutral, 100),\n    light: tokens.getPrimitiveVar($p-color, neutral, 300),\n    placeholder: tokens.getPrimitiveVar($p-color, neutral, 400),\n    disable: tokens.getPrimitiveVar($p-color, neutral, 500),\n    on-color: tokens.getPrimitiveVar($p-color, white),\n    highlight: var(--b-color-light),\n    success: tokens.getPrimitiveVar($p-color, green, 400),\n    warning: tokens.getPrimitiveVar($p-color, orange, 400),\n  ),\n);\n','@use "sass:list";\n@use "sass:meta";\n@use "sass:map";\n@use "../constants/opacity" as *;\n\n@mixin generateVars($list, $type) {\n  @each $groupName, $groupValues in $list {\n    @if meta.type-of($groupValues) == map {\n      @each $name, $value in $groupValues {\n        --s-#{$type}-#{$groupName}-#{$name}: #{$value};\n      }\n    } @else {\n      --s-#{$type}-#{$groupName}: #{$groupValues};\n    }\n  }\n}\n\n@function getOpacity($valor) {\n  @return map-get($opacity, $valor);\n}\n\n@function getPrimitiveVar($primitiveVar, $type, $value: null, $opacity: null) {\n  $variableVariations: map.get($primitiveVar, $type);\n\n  @if not $value {\n    @if $opacity {\n      @return #{$variableVariations}#{getOpacity($opacity)};\n    }\n    @return $variableVariations;\n  }\n\n  @return map.get($variableVariations, $value);\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./src/app/styles.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_styles_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/app/styles.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_styles_scss__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_styles_scss__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_styles_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_styles_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);