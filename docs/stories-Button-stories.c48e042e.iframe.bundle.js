/*! For license information please see stories-Button-stories.c48e042e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkflotiq_components_react=self.webpackChunkflotiq_components_react||[]).push([[791],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(e,r,t){return(r=toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./src/stories/Button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,MediumSquared:()=>MediumSquared,Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Button/Button.js")),_defaultProps_rounded__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/defaultProps/rounded.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Flotiq components/Button",component:_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{label:{control:"text"},size:{control:"inline-radio"},variant:{control:"select"},rounded:{control:"inline-radio"}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__.A,(0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)({},args)),Primary=Template.bind({});Primary.args=(0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)((0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)({},_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__.N),{},{label:"Button"});const Secondary=Template.bind({});Secondary.args=(0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)((0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)({},_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__.N),{},{label:"Button",variant:"secondary"});const Large=Template.bind({});Large.args=(0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)((0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)({},_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__.N),{},{label:"Button",size:"lg",variant:"info"});const MediumSquared=Template.bind({});MediumSquared.args=(0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)((0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.A)({},_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__.N),{},{label:"Button",variant:"success",rounded:_defaultProps_rounded__WEBPACK_IMPORTED_MODULE_2__.W.values[0]});const __namedExportsOrder=["Primary","Secondary","Large","MediumSquared"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...Secondary.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...Large.parameters?.docs?.source}}},MediumSquared.parameters={...MediumSquared.parameters,docs:{...MediumSquared.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...MediumSquared.parameters?.docs?.source}}}},"./src/components/Button/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,N:()=>defaults});var _home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_defaultProps_rounded__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/defaultProps/rounded.js")),_defaultProps_background__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/defaultProps/background.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["label","onClick","variant","size","rounded","additionalClasses"],defaults={onClick:void 0,size:"md",additionalClasses:[],variant:_defaultProps_background__WEBPACK_IMPORTED_MODULE_2__.t.defaultValue,rounded:_defaultProps_rounded__WEBPACK_IMPORTED_MODULE_1__.W.defaultValue},Button=_ref=>{let{label,onClick=defaults.onClick,variant=defaults.variant,size=defaults.size,rounded=defaults.rounded,additionalClasses=defaults.additionalClasses}=_ref,props=(0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",(0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_flotiq_components_react_flotiq_components_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)({type:"button",onClick,className:["inline-flex","items-center","leading-4","font-medium",_defaultProps_rounded__WEBPACK_IMPORTED_MODULE_1__.W.classSet[rounded],"shadow-sm",_defaultProps_background__WEBPACK_IMPORTED_MODULE_2__.t.classSet[variant],{primary:"hover:bg-primary-600",secondary:"hover:bg-secondary-400",success:"hover:bg-success-600",danger:"hover:bg-danger-600",warning:"hover:bg-warning-600",info:"hover:bg-info-600",light:"hover:bg-light-600",dark:"hover:bg-dark-400",transparent:""}[variant],"transition-colors","duration-200","ease-in-out","focus:outline-none",{sm:"px-8 py-3 text-sm",md:"px-12 py-4 text-base",lg:"px-16 py-5 text-lg"}[size],...additionalClasses].join(" ")},props),{},{children:label}))},__WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{onClick:{defaultValue:{value:"undefined",computed:!0},description:"Optional click handler",type:{name:"func"},required:!1},variant:{defaultValue:{value:"'primary'",computed:!1},description:"Is this the principal call to action on the page?",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'success'",computed:!1},{value:"'danger'",computed:!1},{value:"'warning'",computed:!1},{value:"'info'",computed:!1},{value:"'light'",computed:!1},{value:"'dark'",computed:!1},{value:"'transparent'",computed:!1}]},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"How large should the button be?",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1}]},required:!1},rounded:{defaultValue:{value:"'full'",computed:!1},description:"Is this the rounded button?",type:{name:"enum",value:[{value:"'none'",computed:!1},{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'full'",computed:!1}]},required:!1},additionalClasses:{defaultValue:{value:"[]",computed:!1},description:"Additional classes for button",type:{name:"arrayOf",value:{name:"string"}},required:!1},label:{description:"Button contents",type:{name:"string"},required:!0}}}},"./src/defaultProps/background.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>backgroundProps});const classSet={primary:"bg-primary text-white",secondary:"bg-secondary text-white",success:"bg-success text-white",danger:"bg-danger text-white",warning:"bg-warning text-black",info:"bg-info text-black",light:"bg-light text-black",dark:"bg-dark text-white",transparent:"bg-transparent"},backgroundProps={classSet,defaultValue:"primary",values:Object.keys(classSet)}},"./src/defaultProps/rounded.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>roundedProps});const classSet={none:"rounded-none",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",xl:"rounded-xl","2xl":"rounded-2xl","3xl":"rounded-3xl","4xl":"rounded-4xl",full:"rounded-full"},roundedProps={classSet,defaultValue:"full",values:Object.keys(classSet)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);