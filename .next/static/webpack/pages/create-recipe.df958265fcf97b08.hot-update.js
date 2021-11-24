"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create-recipe",{

/***/ "./components/create-recipe-components/ingredientForm.tsx":
/*!****************************************************************!*\
  !*** ./components/create-recipe-components/ingredientForm.tsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ingredientValidator = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({\n    ingredient: yup__WEBPACK_IMPORTED_MODULE_2__.string().required(\"An ingredient is required\").min(2, \"Too short!\")\n});\nvar IngredientForm = function() {\n    var _this1 = _this;\n    var handleChange = function handleChange(id, param, event) {\n        var value = event.target.value;\n        if (typeof param === \"number\") {\n            console.log(\"Changing the quantity\");\n            var currentList = _toConsumableArray(ingredientList);\n            setIngredientList(currentList);\n            console.log(ingredientList);\n        }\n        if (typeof param === \"string\") {\n            console.log(\"Changing the mesurement type\");\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), ingredientList = ref[0], setIngredientList = ref[1];\n    var handleSubmit = function(param) {\n        var ingredient = param.ingredient;\n        var currentList = _toConsumableArray(ingredientList);\n        var newIngredient = {\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),\n            mesurement: \"N/A\",\n            name: \"\".concat(ingredient),\n            quantity: 0\n        };\n        currentList.push(newIngredient);\n        setIngredientList(currentList);\n        console.log(currentList);\n    };\n    var handleDelete = function(id) {\n        var currentList = _toConsumableArray(ingredientList);\n        var newList = currentList.filter(function(elem) {\n            return elem.id !== id;\n        });\n        setIngredientList(newList);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n            lineNumber: 60,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n                enableReinitialize: true,\n                validationSchema: ingredientValidator,\n                onSubmit: function(values, param) {\n                    var resetForm = param.resetForm, setSubmitting = param.setSubmitting;\n                    handleSubmit(values);\n                    resetForm();\n                    setSubmitting(false);\n                },\n                initialValues: {\n                    ingredient: \"\"\n                },\n                __source: {\n                    fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {\n                    __source: {\n                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                            htmlFor: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Add ingredients\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {\n                            id: \"ingredient\",\n                            type: \"input\",\n                            name: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, {\n                            name: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            type: \"submit\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Add\"\n                        })\n                    ]\n                })\n            }),\n            ingredientList.map(function(param) {\n                var name = param.name, id = param.id, quantity = param.quantity, mesurement = param.mesurement;\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    },\n                    __self: _this1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"number\",\n                            defaultValue: quantity,\n                            onChange: function(value) {\n                                return handleChange(id, quantity, value);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            },\n                            __self: _this1\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"select\", {\n                            defaultValue: mesurement,\n                            onChange: function(value) {\n                                return handleChange(id, mesurement, value);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"l\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"l\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"ml\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"ml\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"ml\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"kg\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"ml\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"g\"\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            onClick: function() {\n                                return handleDelete(id);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: \"delete\"\n                        })\n                    ]\n                }, id);\n            })\n        ]\n    }));\n};\n_s(IngredientForm, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = IngredientForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IngredientForm);\nvar _c;\n$RefreshReg$(_c, \"IngredientForm\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NyZWF0ZS1yZWNpcGUtY29tcG9uZW50cy9pbmdyZWRpZW50Rm9ybS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwRDtBQUNoQztBQUNNO0FBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU25DLEdBQUssQ0FBQ1EsbUJBQW1CLEdBQUdKLHVDQUFVLEdBQUdNLEtBQUssQ0FBQyxDQUFDO0lBQzlDQyxVQUFVLEVBQUVQLHVDQUFVLEdBQ25CUyxRQUFRLENBQUMsQ0FBMkIsNEJBQ3BDQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQVk7QUFDeEIsQ0FBQztBQUVELEdBQUssQ0FBQ0MsY0FBYyxHQUFhLFFBQ2pDLEdBRHVDLENBQUM7O1FBdUI3QkMsWUFBWSxHQUFyQixRQUFRLENBQUNBLFlBQVksQ0FBQ0MsRUFBVSxFQUFFQyxLQUFzQixFQUFFQyxLQUFVLEVBQUUsQ0FBQztRQUNyRSxHQUFLLENBQUNDLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUNELEtBQUs7UUFFaEMsRUFBRSxFQUFFLE1BQU0sQ0FBQ0YsS0FBSyxLQUFLLENBQVEsU0FBRSxDQUFDO1lBQzlCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUF1QjtZQUNuQyxHQUFHLENBQUNDLFdBQVcsc0JBQU9DLGNBQWM7WUFFcENDLGlCQUFpQixDQUFDRixXQUFXO1lBRTdCRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsY0FBYztRQUM1QixDQUFDO1FBRUQsRUFBRSxFQUFFLE1BQU0sQ0FBQ1AsS0FBSyxLQUFLLENBQVEsU0FBRSxDQUFDO1lBQzlCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUE4QjtRQUM1QyxDQUFDO0lBQ0gsQ0FBQzs7SUFyQ0QsR0FBSyxDQUF1Q2xCLEdBQThCLEdBQTlCQSwrQ0FBUSxDQUFtQixDQUFDLENBQUMsR0FBbEVvQixjQUFjLEdBQXVCcEIsR0FBOEIsS0FBbkRxQixpQkFBaUIsR0FBSXJCLEdBQThCO0lBRTFFLEdBQUssQ0FBQ3NCLFlBQVks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QyxDQUFNO29DQUFDbkMsS0FBSyxFQUFDLENBQUk7Ozs7Ozs7OENBQUMsQ0FBQzs7Ozs2RkFHckI0QixDQUFNOzRCQUFDUSxPQUFPLEVBQUUsUUFBUTtnQ0FBRnZCLE1BQU0sQ0FBTkEsWUFBWSxDQUFDaEIsRUFBRTs7Ozs7Ozs7c0NBQUcsQ0FBTTs7O21CQWhCdkNBLEVBQUU7Ozs7QUFzQnRCLENBQUM7R0FyRktGLGNBQWM7S0FBZEEsY0FBYztBQXVGcEIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NyZWF0ZS1yZWNpcGUtY29tcG9uZW50cy9pbmdyZWRpZW50Rm9ybS50c3g/NDgyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkLCBFcnJvck1lc3NhZ2UgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmludGVyZmFjZSBJbmdyZWRpZW50TGlzdCB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgcXVhbnRpdHk6IG51bWJlcjtcbiAgbWVzdXJlbWVudDogc3RyaW5nO1xufVxuXG5jb25zdCBpbmdyZWRpZW50VmFsaWRhdG9yID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgaW5ncmVkaWVudDogWXVwLnN0cmluZygpXG4gICAgLnJlcXVpcmVkKFwiQW4gaW5ncmVkaWVudCBpcyByZXF1aXJlZFwiKVxuICAgIC5taW4oMiwgXCJUb28gc2hvcnQhXCIpLFxufSk7XG5cbmNvbnN0IEluZ3JlZGllbnRGb3JtOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2luZ3JlZGllbnRMaXN0LCBzZXRJbmdyZWRpZW50TGlzdF0gPSB1c2VTdGF0ZTxJbmdyZWRpZW50TGlzdFtdPihbXSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKHsgaW5ncmVkaWVudCB9KTogdm9pZCA9PiB7XG4gICAgY29uc3QgY3VycmVudExpc3QgPSBbLi4uaW5ncmVkaWVudExpc3RdO1xuICAgIGNvbnN0IG5ld0luZ3JlZGllbnQ6IEluZ3JlZGllbnRMaXN0ID0ge1xuICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgbWVzdXJlbWVudDogXCJOL0FcIixcbiAgICAgIG5hbWU6IGAke2luZ3JlZGllbnR9YCxcbiAgICAgIHF1YW50aXR5OiAwLFxuICAgIH07XG4gICAgY3VycmVudExpc3QucHVzaChuZXdJbmdyZWRpZW50KTtcbiAgICBzZXRJbmdyZWRpZW50TGlzdChjdXJyZW50TGlzdCk7XG5cbiAgICBjb25zb2xlLmxvZyhjdXJyZW50TGlzdCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgY3VycmVudExpc3QgPSBbLi4uaW5ncmVkaWVudExpc3RdO1xuICAgIGNvbnN0IG5ld0xpc3QgPSBjdXJyZW50TGlzdC5maWx0ZXIoKGVsZW0pID0+IGVsZW0uaWQgIT09IGlkKTtcbiAgICBzZXRJbmdyZWRpZW50TGlzdChuZXdMaXN0KTtcbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoaWQ6IG51bWJlciwgcGFyYW06IHN0cmluZyB8IG51bWJlciwgZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2luZyB0aGUgcXVhbnRpdHlcIik7XG4gICAgICBsZXQgY3VycmVudExpc3QgPSBbLi4uaW5ncmVkaWVudExpc3RdO1xuXG4gICAgICBzZXRJbmdyZWRpZW50TGlzdChjdXJyZW50TGlzdCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGluZ3JlZGllbnRMaXN0KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHBhcmFtID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNoYW5naW5nIHRoZSBtZXN1cmVtZW50IHR5cGVcIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEZvcm1pa1xuICAgICAgICBlbmFibGVSZWluaXRpYWxpemVcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17aW5ncmVkaWVudFZhbGlkYXRvcn1cbiAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIHsgcmVzZXRGb3JtLCBzZXRTdWJtaXR0aW5nIH0pID0+IHtcbiAgICAgICAgICBoYW5kbGVTdWJtaXQodmFsdWVzKTtcbiAgICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgICAgfX1cbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgICAgIGluZ3JlZGllbnQ6IFwiXCIsXG4gICAgICAgIH19PlxuICAgICAgICA8Rm9ybT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImluZ3JlZGllbnRcIj5BZGQgaW5ncmVkaWVudHM8L2xhYmVsPlxuICAgICAgICAgIDxGaWVsZCBpZD1cImluZ3JlZGllbnRcIiB0eXBlPVwiaW5wdXRcIiBuYW1lPVwiaW5ncmVkaWVudFwiIC8+XG4gICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPVwiaW5ncmVkaWVudFwiIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkPC9idXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvRm9ybWlrPlxuXG4gICAgICB7aW5ncmVkaWVudExpc3QubWFwKFxuICAgICAgICAoeyBuYW1lLCBpZCwgcXVhbnRpdHksIG1lc3VyZW1lbnQgfTogSW5ncmVkaWVudExpc3QpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aWR9PlxuICAgICAgICAgICAgPHA+e25hbWV9PC9wPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3F1YW50aXR5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVDaGFuZ2UoaWQsIHF1YW50aXR5LCB2YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e21lc3VyZW1lbnR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZShpZCwgbWVzdXJlbWVudCwgdmFsdWUpfT5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxcIj5sPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtbFwiPm1sPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtbFwiPmtnPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtbFwiPmc8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShpZCl9PmRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5ncmVkaWVudEZvcm07XG4iXSwibmFtZXMiOlsiRm9ybWlrIiwiRm9ybSIsIkZpZWxkIiwiRXJyb3JNZXNzYWdlIiwiWXVwIiwidXNlU3RhdGUiLCJ2NCIsInV1aWR2NCIsImluZ3JlZGllbnRWYWxpZGF0b3IiLCJvYmplY3QiLCJzaGFwZSIsImluZ3JlZGllbnQiLCJzdHJpbmciLCJyZXF1aXJlZCIsIm1pbiIsIkluZ3JlZGllbnRGb3JtIiwiaGFuZGxlQ2hhbmdlIiwiaWQiLCJwYXJhbSIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudExpc3QiLCJpbmdyZWRpZW50TGlzdCIsInNldEluZ3JlZGllbnRMaXN0IiwiaGFuZGxlU3VibWl0IiwibmV3SW5ncmVkaWVudCIsIm1lc3VyZW1lbnQiLCJuYW1lIiwicXVhbnRpdHkiLCJwdXNoIiwiaGFuZGxlRGVsZXRlIiwibmV3TGlzdCIsImZpbHRlciIsImVsZW0iLCJkaXYiLCJlbmFibGVSZWluaXRpYWxpemUiLCJ2YWxpZGF0aW9uU2NoZW1hIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJyZXNldEZvcm0iLCJzZXRTdWJtaXR0aW5nIiwiaW5pdGlhbFZhbHVlcyIsImxhYmVsIiwiaHRtbEZvciIsInR5cGUiLCJidXR0b24iLCJtYXAiLCJwIiwiaW5wdXQiLCJkZWZhdWx0VmFsdWUiLCJvbkNoYW5nZSIsInNlbGVjdCIsIm9wdGlvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/create-recipe-components/ingredientForm.tsx\n");

/***/ })

});