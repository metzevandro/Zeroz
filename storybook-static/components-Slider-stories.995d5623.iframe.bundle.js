(self.webpackChunkdesign_system_zeroz=self.webpackChunkdesign_system_zeroz||[]).push([[1375],{"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/stories/components/Slider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_Slider_Slider__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/styles.scss"),__webpack_require__("./src/components/Slider/Slider.tsx")),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),console=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/console-browserify/index.js"));const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Slider",component:_components_Slider_Slider__WEBPACK_IMPORTED_MODULE_2__.A,tags:["autodocs"],parameters:{docs:{page:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.hE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Pd,{children:"Component"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:"Slider "})," is a input field to to choose a number within a set range of minimum and maximum values."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Tn,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.om,{})]})}},argTypes:{label:{name:"Label",description:"The label displayed for the slider.",type:{name:"string"},defaultValue:{summary:"Label"},control:{type:"text"},table:{category:"Appearance",type:{summary:"string"},defaultValue:{summary:"Label"}}},value:{name:"Value",description:"The current value of the slider.",type:{name:"string"},defaultValue:{summary:"5"},control:{type:"text"},table:{category:"Behavior",type:{summary:"string"},defaultValue:{summary:"5"}}},max:{name:"Max",description:"The maximum value of the slider.",type:{name:"number"},defaultValue:{summary:10},control:{type:"number"},table:{category:"Behavior",type:{summary:"number"}}},min:{name:"Min",description:"The minimum value of the slider.",type:{name:"number"},defaultValue:{summary:0},control:{type:"number"},table:{category:"Behavior",type:{summary:"number"}}},step:{name:"Step",description:"The step size for each increment or decrement.",type:{name:"number"},defaultValue:{summary:1},control:{type:"number"},table:{category:"Behavior",type:{summary:"number"}}},onChange:{name:"On Change",description:"Callback function that is triggered when the slider value changes.",type:{name:"function"},action:"changed",table:{category:"Events",type:{summary:"(value: string) => void"}}}}},Default={args:{label:"Label",value:"5",max:10,min:0,step:1,onChange:value=>console.log("Slider value changed:",value)}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Label",\n    value: "5",\n    max: 10,\n    min: 0,\n    step: 1,\n    onChange: (value: string) => console.log("Slider value changed:", value)\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/components/Slider/Slider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>components_Slider_Slider});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Slider=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Slider/Slider.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Slider.A,options);Slider.A&&Slider.A.locals&&Slider.A.locals;const Slider_Slider_Slider=({step,min,max,value,label,onChange})=>{const[progress,setProgress]=(0,react.useState)((parseInt(value)-min)/(max-min)*100),[currentValue,setCurrentValue]=(0,react.useState)(value),isDragging=(0,react.useRef)(!1);(0,react.useEffect)((()=>{const newValue=parseInt(value);setCurrentValue(value),setProgress((newValue-min)/(max-min)*100)}),[value,min,max]);const updateProgress=newValue=>{const clampedValue=Math.min(Math.max(newValue,min),max);setProgress((clampedValue-min)/(max-min)*100),setCurrentValue(String(clampedValue)),onChange&&onChange(String(clampedValue))},handleSliderClick=e=>{(e=>{isDragging.current=!0,window.addEventListener("mousemove",handleMouseMove),window.addEventListener("touchmove",handleTouchMove),window.addEventListener("mouseup",handleDragEnd),window.addEventListener("touchend",handleDragEnd),e instanceof MouseEvent?handleMouseMove(e):e instanceof TouchEvent&&handleTouchMove(e)})(e)},handleMouseMove=e=>{void 0!==e.clientX&&handleDragMove(e.clientX)},handleTouchMove=e=>{var _e_touches_,_e_touches__clientX;e.touches.length>0&&handleDragMove(null!==(_e_touches__clientX=null===(_e_touches_=e.touches[0])||void 0===_e_touches_?void 0:_e_touches_.clientX)&&void 0!==_e_touches__clientX?_e_touches__clientX:0)},handleDragMove=clientX=>{if(isDragging.current){const slider=document.getElementById("slider-background");if(slider){const rect=slider.getBoundingClientRect();let rawPercentage=(clientX-rect.left)/rect.width*100;rawPercentage>100?rawPercentage=100:rawPercentage<0&&(rawPercentage=0);const calculatedValue=rawPercentage/100*(max-min)+min,alignedValue=Math.round(calculatedValue/step)*step;updateProgress(alignedValue)}}},handleDragEnd=()=>{isDragging.current=!1,window.removeEventListener("mousemove",handleMouseMove),window.removeEventListener("touchmove",handleTouchMove),window.removeEventListener("mouseup",handleDragEnd),window.removeEventListener("touchend",handleDragEnd)};return(0,jsx_runtime.jsxs)("div",{className:"slider",children:[(0,jsx_runtime.jsx)("label",{className:"slider-label",htmlFor:"sliderInput",children:label}),(0,jsx_runtime.jsxs)("div",{className:"slider-container",children:[(0,jsx_runtime.jsx)("div",{className:"slider-max-min",children:min}),(0,jsx_runtime.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",cursor:"grabbing"},children:(0,jsx_runtime.jsxs)("div",{id:"slider-background",className:"slider-background",onMouseDown:e=>handleSliderClick(e),children:[(0,jsx_runtime.jsx)("div",{className:"slider-progress-bar",style:{width:`${progress}%`}}),(0,jsx_runtime.jsx)("div",{className:"slider-button",tabIndex:0,style:{left:`calc(${progress}% - 10px)`},onKeyDown:e=>{if("ArrowLeft"===e.key||"ArrowRight"===e.key){e.preventDefault();const change="ArrowLeft"===e.key?-step:step;let newValue=parseInt(currentValue)+change;const alignedValue=Math.round(newValue/step)*step;newValue=Math.min(Math.max(alignedValue,min),max),updateProgress(newValue)}}})]})}),(0,jsx_runtime.jsx)("div",{className:"slider-max-min",children:max}),(0,jsx_runtime.jsx)("input",{inputMode:"numeric",className:"slider-input",type:"number",min,max,step,value:currentValue,onChange:e=>{const newValue=parseInt(e.target.value);updateProgress(newValue)},id:"sliderInput"})]})]})},components_Slider_Slider=Slider_Slider_Slider;try{Slider_Slider_Slider.displayName="Slider",Slider_Slider_Slider.__docgenInfo={description:"",displayName:"Slider",props:{step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Slider/Slider.tsx#Slider"]={docgenInfo:Slider_Slider_Slider.__docgenInfo,name:"Slider",path:"src/components/Slider/Slider.tsx#Slider"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Slider/Slider.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".slider{display:flex;flex-direction:column;gap:var(--s-spacing-nano);min-width:250px}.slider .slider-label{font:var(--s-typography-label-medium);color:var(--s-color-content-default)}.slider .slider-container{display:flex;gap:var(--s-spacing-x-small);align-items:center}.slider .slider-container .slider-max-min{color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular)}.slider .slider-container .slider-background{width:100%;height:4px;position:relative;border-radius:var(--s-border-radius-pill);background-color:var(--s-color-border-default)}.slider .slider-container .slider-progress-bar{border-radius:var(--s-border-radius-pill);height:100%;background-color:var(--s-color-fill-highlight);transition:.01s width ease-in-out}.slider .slider-container .slider-button{cursor:grab;background-color:var(--s-color-fill-highlight);width:16px;height:16px;border-radius:var(--s-border-radius-pill);position:absolute;top:50%;transform:translateY(-50%);z-index:2;transition:.01s left ease-in-out}.slider .slider-container .slider-button:hover{width:20px;height:20px}.slider .slider-container .slider-button:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.slider .slider-container .slider-input{min-width:64px;max-height:min-content;padding:var(--s-spacing-xx-small) var(--s-spacing-x-small);text-align:left;border:var(--s-border-width-hairline) solid var(--s-color-border-default);border-radius:var(--s-border-radius-medium);font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);background-color:var(--s-color-fill-default);box-shadow:0px 1px 2px 0px rgba(14,21,36,.06)}.slider .slider-container .slider-input:hover{border-color:var(--s-color-border-default-hover)}.slider .slider-container .slider-input:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}","",{version:3,sources:["webpack://./src/components/Slider/Slider.scss"],names:[],mappings:"AAAA,QACE,YAAA,CACA,qBAAA,CACA,yBAAA,CACA,eAAA,CAEA,sBACE,qCAAA,CACA,oCAAA,CAGF,0BACE,YAAA,CACA,4BAAA,CACA,kBAAA,CAEA,0CACE,oCAAA,CACA,0CAAA,CAGF,6CACE,UAAA,CACA,UAAA,CACA,iBAAA,CACA,yCAAA,CACA,8CAAA,CAGF,+CACE,yCAAA,CACA,WAAA,CACA,8CAAA,CACA,iCAAA,CAGF,yCACE,WAAA,CACA,8CAAA,CACA,UAAA,CACA,WAAA,CACA,yCAAA,CACA,iBAAA,CACA,OAAA,CACA,0BAAA,CACA,SAAA,CACA,gCAAA,CACA,+CACE,UAAA,CACA,WAAA,CAGF,uDACE,wCAAA,CACA,6CAAA,CACA,yCAAA,CACA,mBAAA,CAIJ,wCACE,cAAA,CACA,sBAAA,CACA,0DAAA,CACA,eAAA,CACA,yEAAA,CACA,2CAAA,CACA,0CAAA,CACA,oCAAA,CACA,4CAAA,CACA,6CAAA,CAEA,8CACE,gDAAA,CAGF,sDACE,wCAAA,CACA,6CAAA,CACA,yCAAA,CACA,mBAAA",sourcesContent:[".slider {\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-nano);\n  min-width: 250px;\n\n  .slider-label {\n    font: var(--s-typography-label-medium);\n    color: var(--s-color-content-default);\n  }\n\n  .slider-container {\n    display: flex;\n    gap: var(--s-spacing-x-small);\n    align-items: center;\n\n    .slider-max-min {\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n    }\n\n    .slider-background {\n      width: 100%;\n      height: 4px;\n      position: relative;\n      border-radius: var(--s-border-radius-pill);\n      background-color: var(--s-color-border-default);\n    }\n\n    .slider-progress-bar {\n      border-radius: var(--s-border-radius-pill);\n      height: 100%;\n      background-color: var(--s-color-fill-highlight);\n      transition: 0.01s width ease-in-out;\n    }\n\n    .slider-button {\n      cursor: grab;\n      background-color: var(--s-color-fill-highlight);\n      width: 16px;\n      height: 16px;\n      border-radius: var(--s-border-radius-pill);\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      z-index: 2;\n      transition: 0.01s left ease-in-out;\n      &:hover {\n        width: 20px;\n        height: 20px;\n      }\n\n      &:focus-visible {\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-border-highlight);\n        outline-offset: var(--s-border-width-thin);\n        outline-style: solid;\n      }\n    }\n\n    .slider-input {\n      min-width: 64px;\n      max-height: min-content;\n      padding: var(--s-spacing-xx-small) var(--s-spacing-x-small);\n      text-align: left;\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n      border-radius: var(--s-border-radius-medium);\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-default);\n      background-color: var(--s-color-fill-default);\n      box-shadow: 0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n      &:hover {\n        border-color: var(--s-color-border-default-hover);\n      }\n\n      &:focus-visible {\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-border-highlight);\n        outline-offset: var(--s-border-width-thin);\n        outline-style: solid;\n      }\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);