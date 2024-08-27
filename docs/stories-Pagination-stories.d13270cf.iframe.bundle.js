/*! For license information please see stories-Pagination-stories.d13270cf.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkflotiq_components_react=self.webpackChunkflotiq_components_react||[]).push([[311],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2})},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{A:()=>_toConsumableArray})},"./src/stories/Pagination.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Pagination/Pagination.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Flotiq components/Pagination",component:_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{rounded:{control:"inline-radio"}}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_1__.A,(0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.A)({},args))},Primary=Template.bind({});Primary.args=(0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.A)((0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.A)({},_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_1__.N),{},{page:1,numOfPages:10});var Secondary=Template.bind({});Secondary.args=(0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.A)((0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.A)({},_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_1__.N),{},{page:1,numOfPages:10,variant:"secondary",borderVariant:"secondary"});const __namedExportsOrder=["Primary","Secondary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <Pagination {...args} />",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"args => <Pagination {...args} />",...Secondary.parameters?.docs?.source}}}},"./src/components/Pagination/Pagination.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,N:()=>defaults});var _home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),_defaultProps_rounded__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/defaultProps/rounded.js")),_defaultProps_border__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/defaultProps/border.js"),_defaultProps_background__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/defaultProps/background.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),defaults={size:"md",variant:"primary",borderVariant:"primary",rounded:_defaultProps_rounded__WEBPACK_IMPORTED_MODULE_1__.W.defaultValue,prev:"Previous",next:"Next",baseUrl:"/",additionalClasses:[],activeAdditionalClasses:[],prevNextAdditionalClasses:[],containerAdditionalClasses:[]},Pagination=function Pagination(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?defaults.variant:_ref$variant,_ref$borderVariant=_ref.borderVariant,borderVariant=void 0===_ref$borderVariant?defaults.borderVariant:_ref$borderVariant,_ref$size=_ref.size,size=void 0===_ref$size?defaults.size:_ref$size,_ref$rounded=_ref.rounded,rounded=void 0===_ref$rounded?defaults.rounded:_ref$rounded,_ref$additionalClasse=_ref.additionalClasses,additionalClasses=void 0===_ref$additionalClasse?defaults.additionalClasses:_ref$additionalClasse,_ref$activeAdditional=_ref.activeAdditionalClasses,activeAdditionalClasses=void 0===_ref$activeAdditional?defaults.activeAdditionalClasses:_ref$activeAdditional,_ref$prevNextAddition=_ref.prevNextAdditionalClasses,prevNextAdditionalClasses=void 0===_ref$prevNextAddition?defaults.prevNextAdditionalClasses:_ref$prevNextAddition,_ref$containerAdditio=_ref.containerAdditionalClasses,containerAdditionalClasses=void 0===_ref$containerAdditio?defaults.containerAdditionalClasses:_ref$containerAdditio,_ref$prev=_ref.prev,prev=void 0===_ref$prev?defaults.prev:_ref$prev,_ref$next=_ref.next,next=void 0===_ref$next?defaults.next:_ref$next,_ref$baseUrl=_ref.baseUrl,baseUrl=void 0===_ref$baseUrl?defaults.baseUrl:_ref$baseUrl,page=_ref.page,numOfPages=_ref.numOfPages,sizeClass={sm:"w-6 h-6 md:w-8 md:h-8 text-sm",md:"w-8 h-8 md:w-10 md:h-10 text-sm md:text-base",lg:"w-10 h-10 md:w-12 md:h-12 text-md md:text-lg"},sizeClassPrevNext={sm:"w-16 h-6 md:w-20 md:h-8 text-sm",md:"w-20 h-8 md:w-24 md:h-10 text-sm md:text-base",lg:"w-24 h-10 md:w-28 md:h-12 text-md md:text-lg"},bgClasses={primary:"bg-white hover:bg-primary text-black hover:text-white",secondary:"bg-white hover:bg-secondary text-black hover:text-white",info:"bg-white hover:bg-info text-black",light:"bg-white hover:bg-light text-black",dark:"bg-white hover:bg-dark text-black hover:text-white",transparent:"bg-transparent text-black"},borderClasses={primary:["border",_defaultProps_border__WEBPACK_IMPORTED_MODULE_2__.b.classSet[borderVariant],"hover:border-primary"].join(" "),secondary:["border",_defaultProps_border__WEBPACK_IMPORTED_MODULE_2__.b.classSet[borderVariant],"hover:border-secondary"].join(" "),info:["border",_defaultProps_border__WEBPACK_IMPORTED_MODULE_2__.b.classSet[borderVariant],"hover:border-info"].join(" "),light:["border",_defaultProps_border__WEBPACK_IMPORTED_MODULE_2__.b.classSet[borderVariant],"hover:border-light"].join(" "),dark:["border",_defaultProps_border__WEBPACK_IMPORTED_MODULE_2__.b.classSet[borderVariant],"hover:border-dark"].join(" "),transparent:["border",_defaultProps_border__WEBPACK_IMPORTED_MODULE_2__.b.classSet[borderVariant],"hover:border-transparent"].join(" ")},safePage=Math.min(Math.max(page,1),numOfPages);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:["px-1","py-3","flex","items-center","justify-between","sm:px-6","mt-10"].concat((0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__.A)(containerAdditionalClasses)).join(" "),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"flex-1 flex items-center justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("nav",{className:"relative z-0 inline-flex space-x-2","aria-label":"Pagination",children:[safePage>1&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a",{href:safePage>2?"".concat(baseUrl).concat(safePage-1):baseUrl,className:["relative","inline-flex","items-center","justify-center",sizeClassPrevNext[size],bgClasses[variant],borderClasses[variant],_defaultProps_rounded__WEBPACK_IMPORTED_MODULE_1__.W.classSet[rounded],"leading-6","font-medium"].concat((0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__.A)(prevNextAdditionalClasses)).join(" "),children:prev}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a",{href:baseUrl,className:["relative","items-center","justify-center",sizeClass[size],bgClasses[variant],borderClasses[variant],_defaultProps_rounded__WEBPACK_IMPORTED_MODULE_1__.W.classSet[rounded],"leading-6","font-medium",safePage<=2?"inline-flex":"hidden","md:inline-flex"].concat((0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__.A)(additionalClasses)).join(" "),children:"1"}),safePage>4&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:["relative","items-center","justify-center",sizeClass[size],bgClasses[variant],borderClasses[variant],_defaultProps_rounded__WEBPACK_IMPORTED_MODULE_1__.W.classSet[rounded],"leading-6","font-medium","hidden","md:inline-flex"].concat((0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__.A)(additionalClasses)).join(" "),children:"..."})]}),safePage>3&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a",{href:"".concat(baseUrl).concat(safePage-2),className:["relative","items-center","justify-center",sizeClass[size],bgClasses[variant],borderClasses[variant],_defaultProps_rounded__WEBPACK_IMPORTED_MODULE_1__.W.classSet[rounded],"leading-6","font-medium","hidden","md:inline-flex"].concat((0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__.A)(additionalClasses)).join(" "),children:safePage-2}),safePage>2&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a",{href:"".concat(baseUrl).concat(safePage-1),className:["relative","inline-flex","items-center","justify-center",sizeClass[size],bgClasses[variant],borderClasses[variant],_defaultProps_rounded__WEBPACK_IMPORTED_MODULE_1__.W.classSet[rounded],"leading-6","font-medium"].concat((0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__.A)(additionalClasses)).join(" "),children:safePage-1}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{"aria-current":"page",className:["relative","inline-flex","items-center","justify-center",sizeClass[size],_defaultProps_background__WEBPACK_IMPORTED_MODULE_3__.t.classSet[variant],{primary:"border border-primary",secondary:"border border-secondary",info:"border border-info",light:"border border-light",dark:"border border-dark",transparent:"border border-transparent"}[variant],_defaultProps_rounded__WEBPACK_IMPORTED_MODULE_1__.W.classSet[rounded],"leading-6","font-medium"].concat((0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__.A)(activeAdditionalClasses)).join(" "),children:safePage}),safePage<numOfPages-1&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a",{href:"".concat(baseUrl).concat(safePage+1),className:["relative","inline-flex","items-center","justify-center",sizeClass[size],bgClasses[variant],borderClasses[variant],_defaultProps_rounded__WEBPACK_IMPORTED_MODULE_1__.W.classSet[rounded],"leading-6","font-medium"].concat((0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__.A)(additionalClasses)).join(" "),children:safePage+1}),page<numOfPages-2&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a",{href:"".concat(baseUrl).concat(safePage+2),className:["relative","items-center","justify-center",sizeClass[size],bgClasses[variant],borderClasses[variant],_defaultProps_rounded__WEBPACK_IMPORTED_MODULE_1__.W.classSet[rounded],"leading-6","font-medium","hidden","md:inline-flex"].concat((0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__.A)(additionalClasses)).join(" "),children:safePage+2}),safePage<numOfPages&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[safePage<numOfPages-3&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:["relative","items-center","justify-center",sizeClass[size],bgClasses[variant],borderClasses[variant],_defaultProps_rounded__WEBPACK_IMPORTED_MODULE_1__.W.classSet[rounded],"leading-6","font-medium","hidden","md:inline-flex"].concat((0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__.A)(additionalClasses)).join(" "),children:"..."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a",{href:"".concat(baseUrl).concat(numOfPages),className:["relative","items-center","justify-center",sizeClass[size],bgClasses[variant],borderClasses[variant],_defaultProps_rounded__WEBPACK_IMPORTED_MODULE_1__.W.classSet[rounded],"leading-6","font-medium",safePage>=numOfPages-1?"inline-flex":"hidden","md:inline-flex"].concat((0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__.A)(additionalClasses)).join(" "),children:numOfPages}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a",{href:"".concat(baseUrl).concat(safePage+1),className:["relative","inline-flex","items-center","justify-center",sizeClassPrevNext[size],bgClasses[variant],borderClasses[variant],_defaultProps_rounded__WEBPACK_IMPORTED_MODULE_1__.W.classSet[rounded],"leading-6","font-medium"].concat((0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__.A)(prevNextAdditionalClasses)).join(" "),children:next})]})]})})})};const __WEBPACK_DEFAULT_EXPORT__=Pagination;Pagination.__docgenInfo={description:"Component for pagination navigation",methods:[],displayName:"Pagination",props:{variant:{defaultValue:{value:"'primary'",computed:!1},description:"Color variant",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'info'",computed:!1},{value:"'light'",computed:!1},{value:"'dark'",computed:!1},{value:"'transparent'",computed:!1}]},required:!1},borderVariant:{defaultValue:{value:"'primary'",computed:!1},description:"Color variant for border",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'info'",computed:!1},{value:"'light'",computed:!1},{value:"'dark'",computed:!1},{value:"'transparent'",computed:!1},{value:"'black'",computed:!1},{value:"'white'",computed:!1}]},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"How large should the button be?",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1}]},required:!1},rounded:{defaultValue:{value:"'full'",computed:!1},description:"Is this the rounded button?",type:{name:"enum",value:[{value:"'none'",computed:!1},{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'full'",computed:!1}]},required:!1},additionalClasses:{defaultValue:{value:"[]",computed:!1},description:"Additional classes for pagination box",type:{name:"arrayOf",value:{name:"string"}},required:!1},activeAdditionalClasses:{defaultValue:{value:"[]",computed:!1},description:"Additional classes for active pagination box",type:{name:"arrayOf",value:{name:"string"}},required:!1},prevNextAdditionalClasses:{defaultValue:{value:"[]",computed:!1},description:"Additional classes for prev and next pagination box",type:{name:"arrayOf",value:{name:"string"}},required:!1},containerAdditionalClasses:{defaultValue:{value:"[]",computed:!1},description:"Additional classes for pagination container",type:{name:"arrayOf",value:{name:"string"}},required:!1},prev:{defaultValue:{value:"'Previous'",computed:!1},description:"Text or component for previous button",type:{name:"union",value:[{name:"string"},{name:"element"}]},required:!1},next:{defaultValue:{value:"'Next'",computed:!1},description:"Text or component for next button",type:{name:"union",value:[{name:"string"},{name:"element"}]},required:!1},baseUrl:{defaultValue:{value:"'/'",computed:!1},description:"Base url of pagination",type:{name:"string"},required:!1},page:{description:"Active page number",type:{name:"number"},required:!0},numOfPages:{description:"Number of pages",type:{name:"number"},required:!0}}}},"./src/defaultProps/background.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>backgroundProps});var classSet={primary:"bg-primary text-white",secondary:"bg-secondary text-white",success:"bg-success text-white",danger:"bg-danger text-white",warning:"bg-warning text-black",info:"bg-info text-black",light:"bg-light text-black",dark:"bg-dark text-white",transparent:"bg-transparent"},backgroundProps={classSet,defaultValue:"primary",values:Object.keys(classSet)}},"./src/defaultProps/border.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>borderProps});var classSet={primary:"border-primary",secondary:"border-secondary",success:"border-success",danger:"border-danger",warning:"border-warning",info:"border-info",light:"border-light",dark:"border-dark",transparent:"border-transparent"},borderProps={classSet,defaultValue:"primary",values:Object.keys(classSet)}},"./src/defaultProps/rounded.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>roundedProps});var classSet={none:"rounded-none",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",xl:"rounded-xl","2xl":"rounded-2xl","3xl":"rounded-3xl","4xl":"rounded-4xl",full:"rounded-full"},roundedProps={classSet,defaultValue:"full",values:Object.keys(classSet)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);