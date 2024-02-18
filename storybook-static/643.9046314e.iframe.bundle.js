"use strict";(self.webpackChunkdesign_system_zeroz=self.webpackChunkdesign_system_zeroz||[]).push([[643],{"./src/app/components/ImageUploader/ImageUploader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_ImageUploader_ImageUploader});var toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),Loading=__webpack_require__("./src/app/components/Loading/Loading.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ImageUploader=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/ImageUploader/ImageUploader.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ImageUploader.A,options);ImageUploader.A&&ImageUploader.A.locals&&ImageUploader.A.locals;var ButtonIcon=__webpack_require__("./src/app/components/ButtonIcon/ButtonIcon.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement,ImageUploader_ImageUploader_ImageUploader=function ImageUploader(_ref){var proportion=_ref.proportion,maxFileSize=_ref.maxFileSize,description=_ref.description,title=_ref.title,disable=_ref.disable,multiple=_ref.multiple,labelDropzone=_ref.labelDropzone,iconDropzone=_ref.iconDropzone,onChange=_ref.onChange,value=_ref.value,_useState=(0,react.useState)(void 0!==value?value:null),selectedFiles=_useState[0],setSelectedFiles=_useState[1],_useState2=(0,react.useState)([]),imagePreviews=_useState2[0],setImagePreviews=_useState2[1],_useState3=(0,react.useState)(!1),isLoading=_useState3[0],setIsLoading=_useState3[1],fileInputRef=(0,react.useRef)(null),maxFileSizeBytes=void 0!==maxFileSize?1024*maxFileSize*1024:void 0,_useState4=(0,react.useState)(null),errorMessage=_useState4[0],setErrorMessage=_useState4[1],_useState5=(0,react.useState)(!1),fileRemoved=_useState5[0],setFileRemoved=_useState5[1];(0,react.useEffect)((function(){setSelectedFiles(void 0!==value?value:null)}),[value]),(0,react.useEffect)((function(){if(selectedFiles){var readerPromises=[];Array.from(selectedFiles).forEach((function(file){readerPromises.push(new Promise((function(resolve,reject){var reader=new FileReader;reader.onload=function(){"string"==typeof reader.result?resolve(reader.result):reject(new Error("Failed to convert file to data URL."))},reader.onerror=reject,reader.readAsDataURL(file)})))})),Promise.all(readerPromises).then((function(results){setImagePreviews(results)})).catch((function(error){console.error("Error loading image previews:",error),setImagePreviews([])}))}else setImagePreviews([])}),[selectedFiles]);var handleFileChange=function(){var _ref2=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee2(event){var files,updatedFiles,promises,newFileList;return regenerator_default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(files=event.target.files,setIsLoading(!0),setFileRemoved(!1),!(files&&files.length>0)){_context2.next=22;break}return updatedFiles=selectedFiles?Array.from(selectedFiles):[],_context2.prev=5,promises=Array.from(files).map(function(){var _ref3=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee(file){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!(file.size>(maxFileSizeBytes||1/0))){_context.next=3;break}return setErrorMessage("File ".concat(file.name," exceeds the maximum file size limit.")),_context.abrupt("return");case 3:return _context.next=5,handleFile(file);case 5:updatedFiles.push(file);case 6:case"end":return _context.stop()}}),_callee)})));return function(_x2){return _ref3.apply(this,arguments)}}()),_context2.next=9,Promise.all(promises);case 9:newFileList=new DataTransfer,updatedFiles.forEach((function(file){return newFileList.items.add(file)})),setSelectedFiles(newFileList.files),onChange(newFileList.files),event.target.value="",_context2.next=19;break;case 16:_context2.prev=16,_context2.t0=_context2.catch(5),setErrorMessage("Error handling files.");case 19:return _context2.prev=19,setIsLoading(!1),_context2.finish(19);case 22:case"end":return _context2.stop()}}),_callee2,null,[[5,16,19,22]])})));return function handleFileChange(_x){return _ref2.apply(this,arguments)}}(),handleFile=function(){var _ref4=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee3(file){return regenerator_default().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.abrupt("return",new Promise((function(resolve,reject){var reader=new FileReader;reader.onloadend=function(){setImagePreviews((function(prevPreviews){return[].concat((0,toConsumableArray.A)(prevPreviews),[reader.result])})),resolve()},reader.onerror=function(){reject(new Error("Failed to read the file."))},reader.readAsDataURL(file)})));case 1:case"end":return _context3.stop()}}),_callee3)})));return function handleFile(_x3){return _ref4.apply(this,arguments)}}();return __jsx("div",{className:"image-uploader",onDragOver:function handleDragOver(event){event.preventDefault()},onDrop:function handleDrop(event){event.preventDefault();var files=event.dataTransfer.files;files&&files.length>0&&handleFile(files[0])}},__jsx("p",{className:"image-uploader-title"},title),__jsx("div",{className:"image-previews"},selectedFiles&&imagePreviews&&!isLoading&&__jsx(react.Fragment,null,Array.from(selectedFiles).map((function(file,index){return __jsx("div",{key:index,className:"image-uploader-item"},__jsx("div",{className:"delete-button-container"},__jsx("div",{className:"delete-button"},__jsx(ButtonIcon.A,{size:"sm",type:"default",variant:"secondary",typeIcon:"delete",onClick:function onClick(){return function handleRemoveFile(index){var updatedFiles=Array.from(selectedFiles||[]);updatedFiles.splice(index,1);var dataTransfer=new DataTransfer;updatedFiles.forEach((function(file){return dataTransfer.items.add(file)}));var newFileList=dataTransfer.files;setSelectedFiles(newFileList),onChange(newFileList),setImagePreviews((function(prevPreviews){var newPreviews=(0,toConsumableArray.A)(prevPreviews);return newPreviews.splice(index,1),newPreviews})),setFileRemoved(!0)}(index)},disable}))),__jsx("img",{style:{aspectRatio:"calc(".concat(proportion,")")},src:imagePreviews&&imagePreviews[index]?imagePreviews[index]:"",alt:"Preview",className:"image-preview"}))}))),(multiple||!selectedFiles||0===selectedFiles.length)&&__jsx("div",{className:"image-uploader-content ".concat(disable?"image-uploader-content-disabled":""," ").concat(!multiple&&fileRemoved||multiple&&(!selectedFiles||0===selectedFiles.length)?"":"hidden"),style:{aspectRatio:"calc(".concat(proportion,")")}},__jsx("input",{type:"file",accept:"image/*",onChange:handleFileChange,ref:fileInputRef,disabled:disable,style:{display:"none"},multiple}),__jsx("div",{className:"".concat(isLoading?"hidden":"uploader-item")},__jsx("button",{onClick:function handleButtonClick(){var _fileInputRef$current;null===(_fileInputRef$current=fileInputRef.current)||void 0===_fileInputRef$current||_fileInputRef$current.click()},style:{aspectRatio:"calc(".concat(proportion,")")},className:"image-uploader-dropzone ".concat(disable?"image-uploader-dropzone-disabled":"")},__jsx(Icon.A,{icon:iconDropzone,size:"md"}),__jsx("p",null,labelDropzone))),isLoading&&__jsx("div",{className:"loading-screen"},__jsx(Loading.A,{variant:"default"})))),errorMessage&&__jsx("p",{className:"image-uploader-error-message"},errorMessage),description&&__jsx("p",{className:"image-uploader-description"},description))};ImageUploader_ImageUploader_ImageUploader.displayName="ImageUploader";const components_ImageUploader_ImageUploader=ImageUploader_ImageUploader_ImageUploader;try{ImageUploader_ImageUploader_ImageUploader.displayName="ImageUploader",ImageUploader_ImageUploader_ImageUploader.__docgenInfo={description:"",displayName:"ImageUploader",props:{proportion:{defaultValue:null,description:"",name:"proportion",required:!0,type:{name:"enum",value:[{value:'"9/16"'},{value:'"16/9"'},{value:'"1/1"'}]}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},disable:{defaultValue:null,description:"",name:"disable",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},maxFileSize:{defaultValue:null,description:"",name:"maxFileSize",required:!1,type:{name:"number"}},labelDropzone:{defaultValue:null,description:"",name:"labelDropzone",required:!0,type:{name:"string"}},iconDropzone:{defaultValue:null,description:"",name:"iconDropzone",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(files: FileList | null) => void"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"FileList | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/ImageUploader/ImageUploader.tsx#ImageUploader"]={docgenInfo:ImageUploader_ImageUploader_ImageUploader.__docgenInfo,name:"ImageUploader",path:"src/app/components/ImageUploader/ImageUploader.tsx#ImageUploader"})}catch(__react_docgen_typescript_loader_error){}},"./src/app/components/Loading/Loading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Loading_Loading});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Icon=__webpack_require__("./src/app/components/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Loading=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Loading/Loading.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Loading.A,options);Loading.A&&Loading.A.locals&&Loading.A.locals;var __jsx=react.createElement,Loading_Loading_Loading=function Loading(_ref){var variant=_ref.variant,message=_ref.message;return __jsx(react.Fragment,null,"default"===variant&&__jsx("div",{className:"loading-with-message"},__jsx("span",{className:"loading"},__jsx(Icon.A,{size:"sm",icon:"progress_activity"})),message&&__jsx("p",{className:"loading-message"},message)),"large"===variant&&__jsx("span",{className:"loading"},__jsx(Icon.A,{size:"lg",icon:"progress_activity"})),"success"===variant&&__jsx("div",{className:"loading-with-message"},__jsx("span",{className:"success"},__jsx(Icon.A,{size:"sm",icon:"check_circle"})),message&&__jsx("p",{className:"loading-message"},message)," "),"warning"===variant&&__jsx("div",{className:"loading-with-message"},__jsx("span",{className:"warning"},__jsx(Icon.A,{size:"sm",icon:"error_outline"})),message&&__jsx("p",{className:"loading-message"},message)," "))};const components_Loading_Loading=Loading_Loading_Loading;try{Loading_Loading_Loading.displayName="Loading",Loading_Loading_Loading.__docgenInfo={description:"",displayName:"Loading",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"warning"'},{value:'"large"'}]}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/Loading/Loading.tsx#Loading"]={docgenInfo:Loading_Loading_Loading.__docgenInfo,name:"Loading",path:"src/app/components/Loading/Loading.tsx#Loading"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/ImageUploader/ImageUploader.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".image-uploader{width:100%}.image-uploader .image-uploader-title{padding-bottom:var(--s-spacing-nano);font:var(--s-typography-label-medium);color:var(--s-color-content-default)}.image-uploader .image-previews{display:grid;grid-template-columns:repeat(4, 1fr);gap:var(--s-spacing-xx-small)}.image-uploader .image-previews .image-uploader-item{width:100%}.image-uploader .image-previews .image-uploader-item .image-preview{display:flex;box-sizing:border-box;width:100%;height:100%;object-fit:cover;z-index:1;cursor:pointer;border:var(--s-border-width-hairline) solid var(--s-color-border-default);border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-default)}.image-uploader .image-previews .image-uploader-item .delete-button-container{position:relative;top:0;right:0;z-index:99}.image-uploader .image-previews .image-uploader-item .delete-button-container .delete-button{position:absolute;top:8px;right:8px;z-index:9}.image-uploader .image-previews .image-uploader-content{position:relative;width:100%;height:100%}.image-uploader .image-previews .image-uploader-content.image-uploader-content-disabled{pointer-events:none}.image-uploader .image-previews .image-uploader-content .uploader-item{position:absolute;z-index:1;width:100%;height:100%}.image-uploader .image-previews .image-uploader-content .image-uploader-dropzone{width:100%;height:100%;display:flex;align-items:center;flex-direction:column;justify-content:center;color:var(--s-color-content-default);background-color:var(--s-color-fill-default);cursor:pointer;font:var(--s-typography-label-small);border:var(--s-border-width-hairline) dashed var(--s-color-border-default);border-radius:var(--s-border-radius-small)}.image-uploader .image-previews .image-uploader-content .image-uploader-dropzone.image-uploader-dropzone-disabled{display:flex;align-items:center;flex-direction:column;justify-content:center;color:var(--s-color-content-disable);background-color:var(--s-color-fill-disable);font:var(--s-typography-label-small);border:var(--s-border-width-hairline) dashed var(--s-color-border-default);border-radius:var(--s-border-radius-small)}.image-uploader .image-previews .image-uploader-content .image-uploader-dropzone:hover{background-color:var(--s-color-fill-highlight-light);color:var(--s-color-content-highlight);border:var(--s-border-width-hairline) dashed var(--s-color-border-highlight)}.image-uploader .image-previews .image-uploader-content .image-uploader-dropzone:focus-visible{background-color:var(--s-color-fill-highlight-light);color:var(--s-color-content-highlight);border:var(--s-border-width-hairline) dashed var(--s-color-border-highlight);outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.image-uploader .image-previews .image-uploader-content .loading-screen{position:absolute;z-index:999;top:0;left:0;width:100%;height:100%;background-color:var(--s-color-fill-default);display:flex;align-items:center;justify-content:center}.image-uploader .image-previews .image-uploader-content .loading-screen p{font:var(--s-typography-label-medium);color:var(--s-color-content-default)}.image-uploader .image-uploader-description{font:var(--s-typography-caption-regular);color:var(--s-color-content-light)}.image-uploader .image-uploader-error-message{color:var(--s-color-content-warning);font:var(--s-typography-caption-regular)}@media screen and (max-width: 768px){.image-uploader .image-previews{grid-template-columns:repeat(2, 1fr)}}","",{version:3,sources:["webpack://./src/app/components/ImageUploader/ImageUploader.scss"],names:[],mappings:"AAAA,gBACE,UAAA,CAEA,sCACE,oCAAA,CACA,qCAAA,CACA,oCAAA,CAGF,gCACE,YAAA,CACA,oCAAA,CACA,6BAAA,CAEA,qDACE,UAAA,CAEA,oEACE,YAAA,CACA,qBAAA,CACA,UAAA,CACA,WAAA,CACA,gBAAA,CACA,SAAA,CACA,cAAA,CACA,yEAAA,CAEA,0CAAA,CACA,4CAAA,CAGF,8EACE,iBAAA,CACA,KAAA,CACA,OAAA,CACA,UAAA,CAEA,6FACE,iBAAA,CACA,OAAA,CACA,SAAA,CACA,SAAA,CAKN,wDACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,wFACE,mBAAA,CAEF,uEACE,iBAAA,CACA,SAAA,CACA,UAAA,CACA,WAAA,CAGF,iFACE,UAAA,CACA,WAAA,CACA,YAAA,CACA,kBAAA,CACA,qBAAA,CACA,sBAAA,CACA,oCAAA,CACA,4CAAA,CACA,cAAA,CACA,oCAAA,CACA,0EAAA,CAEA,0CAAA,CAEA,kHACE,YAAA,CACA,kBAAA,CACA,qBAAA,CACA,sBAAA,CACA,oCAAA,CACA,4CAAA,CACA,oCAAA,CACA,0EAAA,CAEA,0CAAA,CAIJ,uFACE,oDAAA,CACA,sCAAA,CACA,4EAAA,CAIF,+FACE,oDAAA,CACA,sCAAA,CACA,4EAAA,CAEA,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,wEACE,iBAAA,CACA,WAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,4CAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAEA,0EACE,qCAAA,CACA,oCAAA,CAMR,4CACE,wCAAA,CACA,kCAAA,CAGF,8CACE,oCAAA,CACA,wCAAA,CAIJ,qCAEI,gCACE,oCAAA,CAAA",sourcesContent:[".image-uploader {\n  width: 100%;\n\n  .image-uploader-title {\n    padding-bottom: var(--s-spacing-nano);\n    font: var(--s-typography-label-medium);\n    color: var(--s-color-content-default);\n  }\n\n  .image-previews {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: var(--s-spacing-xx-small);\n\n    .image-uploader-item {\n      width: 100%;\n\n      .image-preview {\n        display: flex;\n        box-sizing: border-box;\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        z-index: 1;\n        cursor: pointer;\n        border: var(--s-border-width-hairline) solid\n          var(--s-color-border-default);\n        border-radius: var(--s-border-radius-small);\n        background-color: var(--s-color-fill-default);\n      }\n\n      .delete-button-container {\n        position: relative;\n        top: 0;\n        right: 0;\n        z-index: 99;\n\n        .delete-button {\n          position: absolute;\n          top: 8px;\n          right: 8px;\n          z-index: 9;\n        }\n      }\n    }\n\n    .image-uploader-content {\n      position: relative;\n      width: 100%;\n      height: 100%;\n      &.image-uploader-content-disabled {\n        pointer-events: none;\n      }\n      .uploader-item {\n        position: absolute;\n        z-index: 1;\n        width: 100%;\n        height: 100%;\n      }\n\n      .image-uploader-dropzone {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        justify-content: center;\n        color: var(--s-color-content-default);\n        background-color: var(--s-color-fill-default);\n        cursor: pointer;\n        font: var(--s-typography-label-small);\n        border: var(--s-border-width-hairline) dashed\n          var(--s-color-border-default);\n        border-radius: var(--s-border-radius-small);\n\n        &.image-uploader-dropzone-disabled {\n          display: flex;\n          align-items: center;\n          flex-direction: column;\n          justify-content: center;\n          color: var(--s-color-content-disable);\n          background-color: var(--s-color-fill-disable);\n          font: var(--s-typography-label-small);\n          border: var(--s-border-width-hairline) dashed\n            var(--s-color-border-default);\n          border-radius: var(--s-border-radius-small);\n        }\n      }\n\n      .image-uploader-dropzone:hover {\n        background-color: var(--s-color-fill-highlight-light);\n        color: var(--s-color-content-highlight);\n        border: var(--s-border-width-hairline) dashed\n          var(--s-color-border-highlight);\n      }\n\n      .image-uploader-dropzone:focus-visible {\n        background-color: var(--s-color-fill-highlight-light);\n        color: var(--s-color-content-highlight);\n        border: var(--s-border-width-hairline) dashed\n          var(--s-color-border-highlight);\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-fill-highlight);\n        outline-offset: var(--s-border-width-thin);\n        outline-style: solid;\n      }\n\n      .loading-screen {\n        position: absolute;\n        z-index: 999;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: var(--s-color-fill-default);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n        p {\n          font: var(--s-typography-label-medium);\n          color: var(--s-color-content-default);\n        }\n      }\n    }\n  }\n\n  .image-uploader-description {\n    font: var(--s-typography-caption-regular);\n    color: var(--s-color-content-light);\n  }\n\n  .image-uploader-error-message {\n    color: var(--s-color-content-warning);\n    font: var(--s-typography-caption-regular);\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .image-uploader {\n    .image-previews {\n      grid-template-columns: repeat(2, 1fr);\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/app/components/Loading/Loading.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".loading{overflow:hidden;display:flex;align-items:center;justify-content:center;color:var(--s-color-content-highlight);animation:spin 1s infinite linear}.loading-with-message{display:flex;align-items:center;gap:8px}.loading-with-message .success{color:var(--s-color-content-success)}.loading-with-message .warning{color:var(--s-color-content-warning)}.loading-with-message .loading-message{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default)}.material-symbols-outlined.extra-large{font-size:88px}@keyframes spin{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}","",{version:3,sources:["webpack://./src/app/components/Loading/Loading.scss"],names:[],mappings:"AAAA,SACE,eAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,sCAAA,CACA,iCAAA,CAGF,sBACE,YAAA,CACA,kBAAA,CACA,OAAA,CAEA,+BACE,oCAAA,CAGF,+BACE,oCAAA,CAGF,uCACE,0CAAA,CACA,oCAAA,CAIJ,uCACE,cAAA,CAGF,gBACE,GACE,uBAAA,CAEF,KACE,yBAAA,CAAA",sourcesContent:[".loading {\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--s-color-content-highlight);\n  animation: spin 1s infinite linear;\n}\n\n.loading-with-message {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  .success {\n    color: var(--s-color-content-success);\n  }\n\n  .warning {\n    color: var(--s-color-content-warning);\n  }\n\n  .loading-message {\n    font: var(--s-typography-paragraph-regular);\n    color: var(--s-color-content-default);\n  }\n}\n\n.material-symbols-outlined.extra-large {\n  font-size: 88px;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);