(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(_,e,t){"use strict";var c=t(0);t(1),t(21);e.a=function(_){var e=_.type,t=_.text,n=_.clickHandler;return Object(c.jsx)("button",{className:e,onClick:function(){return n(t)},children:Object(c.jsx)("span",{children:t})})}},,,function(_,e,t){},,function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__),C_Users_USUARIO_Desktop_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),lodash_words__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),lodash_words__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(lodash_words__WEBPACK_IMPORTED_MODULE_3__),_components_functions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),_components_numbers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),_components_math_operations__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(11),_components_result__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(12),_App_css__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(5),_App_css__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_8__),App=function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState2=Object(C_Users_USUARIO_Desktop_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),stack=_useState2[0],setStack=_useState2[1],items=lodash_words__WEBPACK_IMPORTED_MODULE_3___default()(stack,/[^-^+^*^/]+/g),value=items.length>0?items[items.length-1]:"0";console.log("renderizado items",value);var clickHandlerFunction=function(_){console.log("click handler")};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main",{className:"react-calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_result__WEBPACK_IMPORTED_MODULE_7__.a,{value:value}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_numbers__WEBPACK_IMPORTED_MODULE_5__.a,{onClickNumber:function(_){setStack("".concat(stack).concat(_))}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_math_operations__WEBPACK_IMPORTED_MODULE_6__.a,{onClickOperation:function(_){setStack("".concat(stack).concat(_))},onClickEqual:function onClickEqual(equal){setStack(eval(stack).toString())}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_functions__WEBPACK_IMPORTED_MODULE_4__.a,{onContentClear:function(){setStack("")},onDelete:function(){if(stack.length>0){var _=stack.substring(0,stack.length-1);setStack(_)}}})]})};__webpack_exports__.a=App},,function(_,e,t){"use strict";var c=t(0),n=(t(1),t(2));e.a=function(_){var e=_.onContentClear,t=_.onDelete;return Object(c.jsxs)("section",{className:"functions",children:[Object(c.jsx)(n.a,{type:"button-long-text",text:"clear",clickHandler:e}),Object(c.jsx)(n.a,{text:"\u2190",clickHandler:t})]})}},function(_,e,t){"use strict";var c=t(0),n=(t(1),t(2)),a=[1,2,3,4,5,6,7,8,9,0],r=function(_){return a.map((function(e){return Object(c.jsx)(n.a,{text:e.toString(),clickHandler:_},e)}))};e.a=function(_){var e=_.onClickNumber;return Object(c.jsx)("section",{className:"numbers",children:r(e)})}},function(_,e,t){"use strict";var c=t(0),n=(t(1),t(4)),a=t.n(n),r=t(2),s=function(_){var e=_.onClickOperation,t=_.onClickEqual;return Object(c.jsxs)("section",{className:"math-operations",children:[Object(c.jsx)(r.a,{text:"+",clickHandler:e}),Object(c.jsx)(r.a,{text:"-",clickHandler:e}),Object(c.jsx)(r.a,{text:"*",clickHandler:e}),Object(c.jsx)(r.a,{text:"/",clickHandler:e}),Object(c.jsx)(r.a,{text:"=",clickHandler:t})]})};s.propsTypes={onClickOperation:a.a.func.isRequired,onClickEqual:a.a.func.isRequired},e.a=s},function(_,e,t){"use strict";var c=t(0),n=(t(1),t(5),function(_){var e=_.value;return Object(c.jsx)("div",{className:"result",children:Object(c.jsx)("span",{children:e})})});n.defaultProps={value:"0"},e.a=n},,function(_,e,t){"use strict";t.r(e);var c=t(0),n=t(1),a=t.n(n),r=t(6),s=t.n(r),o=t(7);s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(o.a,{})}),document.getElementById("root"))},,,,,,,function(_,e,t){}],[[14,1,2]]]);
//# sourceMappingURL=main.cb188609.chunk.js.map