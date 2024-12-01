"use strict";(self.webpackChunktodo_app=self.webpackChunktodo_app||[]).push([[412],{"./src/ui/atoms/IconButton/IconButton.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,D_Documents_Projects_elegant_templates_chota_react_rtk_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_IconButton_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/ui/atoms/IconButton/IconButton.component.js");__webpack_exports__.default={title:"Atoms/IconButton",component:_IconButton_component__WEBPACK_IMPORTED_MODULE_0__.Z};var Default={args:{variant:"clear",alt:"remove",iconName:"trash-2",size:"16",children:"Sample IconButton"}};Default.parameters=(0,D_Documents_Projects_elegant_templates_chota_react_rtk_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,D_Documents_Projects_elegant_templates_chota_react_rtk_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},Default.parameters),{},{docs:(0,D_Documents_Projects_elegant_templates_chota_react_rtk_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,D_Documents_Projects_elegant_templates_chota_react_rtk_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,D_Documents_Projects_elegant_templates_chota_react_rtk_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:'{\n  args: {\n    variant: "clear",\n    alt: "remove",\n    iconName: "trash-2",\n    size: "16",\n    children: "Sample IconButton"\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/ui/atoms/Button/Button.component.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Button}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),Loader_component=__webpack_require__("./src/ui/atoms/Loader/Loader.component.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(props){var transformedProps=(0,objectSpread2.Z)({},props);return delete transformedProps.isLoading,props.isLoading?(0,jsx_runtime.jsx)("button",(0,objectSpread2.Z)((0,objectSpread2.Z)({},transformedProps),{},{className:"".concat(props.className," loading-button"),children:(0,jsx_runtime.jsx)(Loader_component.Z,{width:"2px",size:"1.2rem",color:"#fff"})})):(0,jsx_runtime.jsx)("button",(0,objectSpread2.Z)((0,objectSpread2.Z)({},transformedProps),{},{children:props.children}))}Button.__docgenInfo={description:"",methods:[],displayName:"Button"}},"./src/ui/atoms/IconButton/IconButton.component.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return IconButton}});var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),atomicContext=(0,react.createContext)(null),AtomicProvider=function AtomicProvider(_ref){var children=_ref.children,components=_ref.components,modules=_ref.modules,theme=(0,es.v9)((function(state){return state.config.theme}));return(0,jsx_runtime.jsx)(atomicContext.Provider,{value:{components:components,modules:modules,children:children,theme:theme},children:children})},useAtomicContext=function useAtomicContext(){try{var ctx=(0,react.useContext)(atomicContext);if(!ctx)throw new Error("no context");return ctx}catch(e){return console.error("Atomic context used outside Redux",e),{theme:"",components:{},modules:{}}}};AtomicProvider.__docgenInfo={description:"",methods:[],displayName:"AtomicProvider"};var Button_component=__webpack_require__("./src/ui/atoms/Button/Button.component.js"),Image_component=__webpack_require__("./src/ui/atoms/Image/Image.component.js"),_excluded=["iconName","alt","variant","size","color","onClick"];function IconButton(_ref){var iconName=_ref.iconName,alt=_ref.alt,variant=_ref.variant,size=_ref.size,color=_ref.color,onClick=_ref.onClick,props=(0,objectWithoutProperties.Z)(_ref,_excluded),themeColor="dark"===useAtomicContext().theme?"ffffff":"";return(0,jsx_runtime.jsx)(Button_component.Z,{className:"button icon-only ".concat(variant),"data-value":props["data-value"],"data-testid":props["data-testid"],onClick:onClick,children:(0,jsx_runtime.jsx)(Image_component.Z,{alt:alt,src:"https://icongr.am/feather/".concat(iconName,".svg?size=").concat(size,"&color=").concat(color||themeColor)})})}IconButton.__docgenInfo={description:"",methods:[],displayName:"IconButton"}},"./src/ui/atoms/Image/Image.component.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Image}});var D_Documents_Projects_elegant_templates_chota_react_rtk_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Image(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",(0,D_Documents_Projects_elegant_templates_chota_react_rtk_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({alt:props.alt},props))}Image.__docgenInfo={description:"",methods:[],displayName:"Image"}},"./src/ui/atoms/Loader/Loader.component.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Loader}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Loader(_ref){var size=_ref.size,width=_ref.width,color=_ref.color;return(0,jsx_runtime.jsx)("span",{class:"loader",style:{height:size||"48px",width:size||"48px",border:"".concat(width||"5px"," solid ").concat(color||"#fff"),borderBottomColor:"transparent"}})}Loader.__docgenInfo={description:"",methods:[],displayName:"Loader"}}}]);