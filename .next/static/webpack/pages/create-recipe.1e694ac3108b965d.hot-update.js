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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _typeof = function(obj) {\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ingredientValidator = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({\n    ingredient: yup__WEBPACK_IMPORTED_MODULE_2__.string().required(\"An ingredient is required\").min(2, \"Too short!\")\n});\nvar IngredientForm = function() {\n    var _this1 = _this;\n    var handleChange = function handleChange(id, param, event) {\n        var value = event.target.value;\n        var index = ingredientList.findIndex(function(item) {\n            return item.id == id;\n        });\n        console.log(typeof value === \"undefined\" ? \"undefined\" : _typeof(value));\n        var currentList = _toConsumableArray(ingredientList);\n        if (typeof param === \"number\") {\n            console.log(\"Affecting quantity only\");\n            var ingredient = _objectSpread({\n            }, currentList[index], {\n                quantity: value\n            });\n            console.log(ingredient);\n            currentList[index] = ingredient;\n            return setIngredientList(currentList);\n        }\n        if (typeof param === \"string\") {\n            console.log(\"Wants to affect the mesurement\");\n            var ingredient1 = _objectSpread({\n            }, currentList[index], {\n                mesurement: value\n            });\n            console.log(ingredient1);\n            currentList[index] = ingredient1;\n            return setIngredientList(currentList);\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), ingredientList = ref[0], setIngredientList = ref[1];\n    var handleSubmit = function(param) {\n        var ingredient = param.ingredient;\n        var currentList = _toConsumableArray(ingredientList);\n        var newIngredient = {\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),\n            mesurement: \"N/A\",\n            name: \"\".concat(ingredient),\n            quantity: 1\n        };\n        currentList.push(newIngredient);\n        setIngredientList(currentList);\n    };\n    var handleDelete = function(id) {\n        var currentList = _toConsumableArray(ingredientList);\n        var newList = currentList.filter(function(elem) {\n            return elem.id !== id;\n        });\n        setIngredientList(newList);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n            lineNumber: 64,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n                enableReinitialize: true,\n                validationSchema: ingredientValidator,\n                onSubmit: function(values, param) {\n                    var resetForm = param.resetForm, setSubmitting = param.setSubmitting;\n                    handleSubmit(values);\n                    resetForm();\n                    setSubmitting(false);\n                },\n                initialValues: {\n                    ingredient: \"\"\n                },\n                __source: {\n                    fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {\n                    __source: {\n                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                            htmlFor: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Add ingredients\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {\n                            id: \"ingredient\",\n                            type: \"input\",\n                            name: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, {\n                            name: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            type: \"submit\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Add\"\n                        })\n                    ]\n                })\n            }),\n            ingredientList.map(function(param) {\n                var name = param.name, id = param.id, quantity = param.quantity, mesurement = param.mesurement;\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    },\n                    __self: _this1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"number\",\n                            min: \"1\",\n                            onChange: function(value) {\n                                return handleChange(id, quantity, value);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            },\n                            __self: _this1\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"select\", {\n                            defaultValue: mesurement,\n                            onChange: function(value) {\n                                return handleChange(id, mesurement, value);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"l\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"l\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"ml\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"ml\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"kg\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"kg\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"g\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"g\"\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            onClick: function() {\n                                return handleDelete(id);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: \"delete\"\n                        })\n                    ]\n                }, id);\n            })\n        ]\n    }));\n};\n_s(IngredientForm, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = IngredientForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IngredientForm);\nvar _c;\n$RefreshReg$(_c, \"IngredientForm\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NyZWF0ZS1yZWNpcGUtY29tcG9uZW50cy9pbmdyZWRpZW50Rm9ybS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwRDtBQUNoQztBQUNNO0FBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTbkMsR0FBSyxDQUFDUSxtQkFBbUIsR0FBR0osdUNBQVUsR0FBR00sS0FBSyxDQUFDLENBQUM7SUFDOUNDLFVBQVUsRUFBRVAsdUNBQVUsR0FDbkJTLFFBQVEsQ0FBQyxDQUEyQiw0QkFDcENDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBWTtBQUN4QixDQUFDO0FBRUQsR0FBSyxDQUFDQyxjQUFjLEdBQWEsUUFDakMsR0FEdUMsQ0FBQzs7UUFxQjdCQyxZQUFZLEdBQXJCLFFBQVEsQ0FBQ0EsWUFBWSxDQUFDQyxFQUFVLEVBQUVDLEtBQXNCLEVBQUVDLEtBQVUsRUFBUSxDQUFDO1FBQzNFLEdBQUssQ0FBQ0MsS0FBSyxHQUFHRCxLQUFLLENBQUNFLE1BQU0sQ0FBQ0QsS0FBSztRQUNoQyxHQUFLLENBQUNFLEtBQUssR0FBR0MsY0FBYyxDQUFDQyxTQUFTLENBQUMsUUFBUSxDQUFQQyxJQUFJO1lBQUtBLE1BQU0sQ0FBTkEsSUFBSSxDQUFDUixFQUFFLElBQUlBLEVBQUU7O1FBQzlEUyxPQUFPLENBQUNDLEdBQUcsUUFBUVAsS0FBSyxpQ0FBWixPQUFZLENBQUxBLEtBQUs7UUFDeEIsR0FBSyxDQUFDUSxXQUFXLHNCQUFPTCxjQUFjO1FBRXRDLEVBQUUsRUFBRSxNQUFNLENBQUNMLEtBQUssS0FBSyxDQUFRLFNBQUUsQ0FBQztZQUM5QlEsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBeUI7WUFDckMsR0FBSyxDQUFDaEIsVUFBVTtlQUFRaUIsV0FBVyxDQUFDTixLQUFLO2dCQUFHTyxRQUFRLEVBQUVULEtBQUs7O1lBQzNETSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2hCLFVBQVU7WUFDdEJp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QUs7NEJBQ0pKLElBQUksRUFBQyxDQUFROzRCQUNicEMsR0FBRyxFQUFDLENBQUc7NEJBQ1B5QyxRQUFRLEVBQUUsUUFBUSxDQUFQbkMsS0FBSztnQ0FBS0osTUFBTSxDQUFOQSxZQUFZLENBQUNDLEVBQUUsRUFBRVksUUFBUSxFQUFFVCxLQUFLOzs7Ozs7Ozs7OEZBRXREb0MsQ0FBTTs0QkFDTEMsWUFBWSxFQUFFMUIsVUFBVTs0QkFDeEJ3QixRQUFRLEVBQUUsUUFBUSxDQUFQbkMsS0FBSztnQ0FBS0osTUFBTSxDQUFOQSxZQUFZLENBQUNDLEVBQUUsRUFBRWMsVUFBVSxFQUFFWCxLQUFLOzs7Ozs7Ozs7cUdBQ3REc0MsQ0FBTTtvQ0FBQ3RDLEtBQUssRUFBQyxDQUFHOzs7Ozs7OzhDQUFDLENBQUM7O3FHQUNsQnNDLENBQU07b0NBQUN0QyxLQUFLLEVBQUMsQ0FBSTs7Ozs7Ozs4Q0FBQyxDQUFFOztxR0FDcEJzQyxDQUFNO29DQUFDdEMsS0FBSyxFQUFDLENBQUk7Ozs7Ozs7OENBQUMsQ0FBRTs7cUdBQ3BCc0MsQ0FBTTtvQ0FBQ3RDLEtBQUssRUFBQyxDQUFHOzs7Ozs7OzhDQUFDLENBQUM7Ozs7NkZBR3BCK0IsQ0FBTTs0QkFBQ1EsT0FBTyxFQUFFLFFBQVE7Z0NBQUZ2QixNQUFNLENBQU5BLFlBQVksQ0FBQ25CLEVBQUU7Ozs7Ozs7O3NDQUFHLENBQU07OzttQkFoQnZDQSxFQUFFOzs7O0FBc0J0QixDQUFDO0dBekZLRixjQUFjO0tBQWRBLGNBQWM7QUEyRnBCLCtEQUFlQSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcmVhdGUtcmVjaXBlLWNvbXBvbmVudHMvaW5ncmVkaWVudEZvcm0udHN4PzQ4MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCwgRXJyb3JNZXNzYWdlIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbnRlcmZhY2UgSW5ncmVkaWVudExpc3Qge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIHF1YW50aXR5OiBudW1iZXI7XG4gIG1lc3VyZW1lbnQ6IHN0cmluZztcbn1cblxuY29uc3QgaW5ncmVkaWVudFZhbGlkYXRvciA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XG4gIGluZ3JlZGllbnQ6IFl1cC5zdHJpbmcoKVxuICAgIC5yZXF1aXJlZChcIkFuIGluZ3JlZGllbnQgaXMgcmVxdWlyZWRcIilcbiAgICAubWluKDIsIFwiVG9vIHNob3J0IVwiKSxcbn0pO1xuXG5jb25zdCBJbmdyZWRpZW50Rm9ybTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtpbmdyZWRpZW50TGlzdCwgc2V0SW5ncmVkaWVudExpc3RdID0gdXNlU3RhdGU8SW5ncmVkaWVudExpc3RbXT4oW10pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICh7IGluZ3JlZGllbnQgfSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gWy4uLmluZ3JlZGllbnRMaXN0XTtcbiAgICBjb25zdCBuZXdJbmdyZWRpZW50OiBJbmdyZWRpZW50TGlzdCA9IHtcbiAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgIG1lc3VyZW1lbnQ6IFwiTi9BXCIsXG4gICAgICBuYW1lOiBgJHtpbmdyZWRpZW50fWAsXG4gICAgICBxdWFudGl0eTogMSxcbiAgICB9O1xuICAgIGN1cnJlbnRMaXN0LnB1c2gobmV3SW5ncmVkaWVudCk7XG4gICAgc2V0SW5ncmVkaWVudExpc3QoY3VycmVudExpc3QpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpZCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gWy4uLmluZ3JlZGllbnRMaXN0XTtcbiAgICBjb25zdCBuZXdMaXN0ID0gY3VycmVudExpc3QuZmlsdGVyKChlbGVtKSA9PiBlbGVtLmlkICE9PSBpZCk7XG4gICAgc2V0SW5ncmVkaWVudExpc3QobmV3TGlzdCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGlkOiBudW1iZXIsIHBhcmFtOiBzdHJpbmcgfCBudW1iZXIsIGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBpbmRleCA9IGluZ3JlZGllbnRMaXN0LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PSBpZCk7XG4gICAgY29uc29sZS5sb2codHlwZW9mIHZhbHVlKTtcbiAgICBjb25zdCBjdXJyZW50TGlzdCA9IFsuLi5pbmdyZWRpZW50TGlzdF07XG5cbiAgICBpZiAodHlwZW9mIHBhcmFtID09PSBcIm51bWJlclwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkFmZmVjdGluZyBxdWFudGl0eSBvbmx5XCIpO1xuICAgICAgY29uc3QgaW5ncmVkaWVudCA9IHsgLi4uY3VycmVudExpc3RbaW5kZXhdLCBxdWFudGl0eTogdmFsdWUgfTtcbiAgICAgIGNvbnNvbGUubG9nKGluZ3JlZGllbnQpO1xuICAgICAgY3VycmVudExpc3RbaW5kZXhdID0gaW5ncmVkaWVudDtcbiAgICAgIHJldHVybiBzZXRJbmdyZWRpZW50TGlzdChjdXJyZW50TGlzdCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc29sZS5sb2coXCJXYW50cyB0byBhZmZlY3QgdGhlIG1lc3VyZW1lbnRcIik7XG4gICAgICBjb25zdCBpbmdyZWRpZW50ID0geyAuLi5jdXJyZW50TGlzdFtpbmRleF0sIG1lc3VyZW1lbnQ6IHZhbHVlIH07XG4gICAgICBjb25zb2xlLmxvZyhpbmdyZWRpZW50KTtcbiAgICAgIGN1cnJlbnRMaXN0W2luZGV4XSA9IGluZ3JlZGllbnQ7XG4gICAgICByZXR1cm4gc2V0SW5ncmVkaWVudExpc3QoY3VycmVudExpc3QpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e2luZ3JlZGllbnRWYWxpZGF0b3J9XG4gICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCB7IHJlc2V0Rm9ybSwgc2V0U3VibWl0dGluZyB9KSA9PiB7XG4gICAgICAgICAgaGFuZGxlU3VibWl0KHZhbHVlcyk7XG4gICAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgIH19XG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICBpbmdyZWRpZW50OiBcIlwiLFxuICAgICAgICB9fT5cbiAgICAgICAgPEZvcm0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbmdyZWRpZW50XCI+QWRkIGluZ3JlZGllbnRzPC9sYWJlbD5cbiAgICAgICAgICA8RmllbGQgaWQ9XCJpbmdyZWRpZW50XCIgdHlwZT1cImlucHV0XCIgbmFtZT1cImluZ3JlZGllbnRcIiAvPlxuICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cImluZ3JlZGllbnRcIiAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZDwvYnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0Zvcm1paz5cblxuICAgICAge2luZ3JlZGllbnRMaXN0Lm1hcChcbiAgICAgICAgKHsgbmFtZSwgaWQsIHF1YW50aXR5LCBtZXN1cmVtZW50IH06IEluZ3JlZGllbnRMaXN0KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2lkfT5cbiAgICAgICAgICAgIDxwPntuYW1lfTwvcD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZShpZCwgcXVhbnRpdHksIHZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bWVzdXJlbWVudH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKGlkLCBtZXN1cmVtZW50LCB2YWx1ZSl9PlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibFwiPmw8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1sXCI+bWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImtnXCI+a2c8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImdcIj5nPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoaWQpfT5kZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZ3JlZGllbnRGb3JtO1xuIl0sIm5hbWVzIjpbIkZvcm1payIsIkZvcm0iLCJGaWVsZCIsIkVycm9yTWVzc2FnZSIsIll1cCIsInVzZVN0YXRlIiwidjQiLCJ1dWlkdjQiLCJpbmdyZWRpZW50VmFsaWRhdG9yIiwib2JqZWN0Iiwic2hhcGUiLCJpbmdyZWRpZW50Iiwic3RyaW5nIiwicmVxdWlyZWQiLCJtaW4iLCJJbmdyZWRpZW50Rm9ybSIsImhhbmRsZUNoYW5nZSIsImlkIiwicGFyYW0iLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwiaW5kZXgiLCJpbmdyZWRpZW50TGlzdCIsImZpbmRJbmRleCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiY3VycmVudExpc3QiLCJxdWFudGl0eSIsInNldEluZ3JlZGllbnRMaXN0IiwibWVzdXJlbWVudCIsImhhbmRsZVN1Ym1pdCIsIm5ld0luZ3JlZGllbnQiLCJuYW1lIiwicHVzaCIsImhhbmRsZURlbGV0ZSIsIm5ld0xpc3QiLCJmaWx0ZXIiLCJlbGVtIiwiZGl2IiwiZW5hYmxlUmVpbml0aWFsaXplIiwidmFsaWRhdGlvblNjaGVtYSIsIm9uU3VibWl0IiwidmFsdWVzIiwicmVzZXRGb3JtIiwic2V0U3VibWl0dGluZyIsImluaXRpYWxWYWx1ZXMiLCJsYWJlbCIsImh0bWxGb3IiLCJ0eXBlIiwiYnV0dG9uIiwibWFwIiwicCIsImlucHV0Iiwib25DaGFuZ2UiLCJzZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJvcHRpb24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/create-recipe-components/ingredientForm.tsx\n");

/***/ })

});