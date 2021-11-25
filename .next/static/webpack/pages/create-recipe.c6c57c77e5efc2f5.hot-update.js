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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ingredientValidator = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({\n    ingredient: yup__WEBPACK_IMPORTED_MODULE_2__.string().required(\"An ingredient is required\").min(2, \"Too short!\")\n});\nvar IngredientForm = function() {\n    var _this1 = _this;\n    var handleChange = function handleChange(id, param, event) {\n        var index = ingredientList.findIndex(function(item) {\n            return item.id == id;\n        });\n        console.log(event.target.value);\n        var currentList = _toConsumableArray(ingredientList);\n        if (typeof param === \"number\") {\n            console.log(\"Affecting quantity only\");\n            var ingredient = _objectSpread({\n            }, currentList[index], {\n                quantity: event\n            });\n            console.log(ingredient);\n            currentList[index] = ingredient;\n            return setIngredientList(currentList);\n        }\n        if (typeof param === \"string\") {\n            console.log(\"Wants to affect the mesurement\");\n        // const ingredient = { ...currentList[index], mesurement: value };\n        // console.log(ingredient);\n        // currentList[index] = ingredient;\n        // return setIngredientList(currentList);\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), ingredientList = ref[0], setIngredientList = ref[1];\n    var handleSubmit = function(param) {\n        var ingredient = param.ingredient;\n        var currentList = _toConsumableArray(ingredientList);\n        var newIngredient = {\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),\n            mesurement: \"N/A\",\n            name: \"\".concat(ingredient),\n            quantity: 1\n        };\n        currentList.push(newIngredient);\n        setIngredientList(currentList);\n    };\n    var handleDelete = function(id) {\n        var currentList = _toConsumableArray(ingredientList);\n        var newList = currentList.filter(function(elem) {\n            return elem.id !== id;\n        });\n        setIngredientList(newList);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n            lineNumber: 64,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n                enableReinitialize: true,\n                validationSchema: ingredientValidator,\n                onSubmit: function(values, param) {\n                    var resetForm = param.resetForm, setSubmitting = param.setSubmitting;\n                    handleSubmit(values);\n                    resetForm();\n                    setSubmitting(false);\n                },\n                initialValues: {\n                    ingredient: \"\"\n                },\n                __source: {\n                    fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {\n                    __source: {\n                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                            htmlFor: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Add ingredients\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {\n                            id: \"ingredient\",\n                            type: \"input\",\n                            name: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, {\n                            name: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            type: \"submit\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Add\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            onClick: function() {\n                                return console.log(ingredientList);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Submit\"\n                        })\n                    ]\n                })\n            }),\n            ingredientList.map(function(param) {\n                var name = param.name, id = param.id, quantity = param.quantity, mesurement = param.mesurement;\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    },\n                    __self: _this1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"number\",\n                            min: \"1\",\n                            defaultValue: \"1\",\n                            onChange: function(elem) {\n                                return handleChange(id, quantity, elem.target.value);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            },\n                            __self: _this1\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"select\", {\n                            defaultValue: mesurement,\n                            onChange: function(elem) {\n                                return handleChange(id, mesurement, elem.target.value);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"l\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"l\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"ml\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"ml\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"kg\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"kg\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"g\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"g\"\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            onClick: function() {\n                                return handleDelete(id);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: \"delete\"\n                        })\n                    ]\n                }, id);\n            })\n        ]\n    }));\n};\n_s(IngredientForm, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = IngredientForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IngredientForm);\nvar _c;\n$RefreshReg$(_c, \"IngredientForm\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NyZWF0ZS1yZWNpcGUtY29tcG9uZW50cy9pbmdyZWRpZW50Rm9ybS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwRDtBQUNoQztBQUNNO0FBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTbkMsR0FBSyxDQUFDUSxtQkFBbUIsR0FBR0osdUNBQVUsR0FBR00sS0FBSyxDQUFDLENBQUM7SUFDOUNDLFVBQVUsRUFBRVAsdUNBQVUsR0FDbkJTLFFBQVEsQ0FBQyxDQUEyQiw0QkFDcENDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBWTtBQUN4QixDQUFDO0FBRUQsR0FBSyxDQUFDQyxjQUFjLEdBQWEsUUFDakMsR0FEdUMsQ0FBQzs7UUFxQjdCQyxZQUFZLEdBQXJCLFFBQVEsQ0FBQ0EsWUFBWSxDQUFDQyxFQUFVLEVBQUVDLEtBQXNCLEVBQUVDLEtBQVUsRUFBUSxDQUFDO1FBQzNFLEdBQUssQ0FBQ0MsS0FBSyxHQUFHQyxjQUFjLENBQUNDLFNBQVMsQ0FBQyxRQUFRLENBQVBDLElBQUk7WUFBS0EsTUFBTSxDQUFOQSxJQUFJLENBQUNOLEVBQUUsSUFBSUEsRUFBRTs7UUFFOURPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixLQUFLLENBQUNPLE1BQU0sQ0FBQ0MsS0FBSztRQUM5QixHQUFLLENBQUNDLFdBQVcsc0JBQU9QLGNBQWM7UUFFdEMsRUFBRSxFQUFFLE1BQU0sQ0FBQ0gsS0FBSyxLQUFLLENBQVEsU0FBRSxDQUFDO1lBQzlCTSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUF5QjtZQUNyQyxHQUFLLENBQUNkLFVBQVU7ZUFBUWlCLFdBQVcsQ0FBQ1IsS0FBSztnQkFBR1MsUUFBUSxFQUFFVixLQUFLOztZQUMzREssT0FBTyxDQUFDQyxHQUFHLENBQUNkLFVBQVU7WUFDdEJpQixXQUFXLENBQUNSLEtBQUssSUFBSVQsVUFBVTtZQUMvQixNQUFNLENBQUNtQixpQkFBaUIsQ0FBQ0Ys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UUFBUSxDQUFQbEIsSUFBSTtnQ0FBS3ZCLE1BQU0sQ0FBTkEsWUFBWSxDQUFDQyxFQUFFLEVBQUVZLFFBQVEsRUFBRVUsSUFBSSxDQUFDYixNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs4RkFFakUrQixDQUFNOzRCQUNMRixZQUFZLEVBQUV2QixVQUFVOzRCQUN4QndCLFFBQVEsRUFBRSxRQUFRLENBQVBsQixJQUFJO2dDQUNidkIsTUFBTSxDQUFOQSxZQUFZLENBQUNDLEVBQUUsRUFBRWdCLFVBQVUsRUFBRU0sSUFBSSxDQUFDYixNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7OztxR0FFL0NnQyxDQUFNO29DQUFDaEMsS0FBSyxFQUFDLENBQUc7Ozs7Ozs7OENBQUMsQ0FBQzs7cUdBQ2xCZ0MsQ0FBTTtvQ0FBQ2hDLEtBQUssRUFBQyxDQUFJOzs7Ozs7OzhDQUFDLENBQUU7O3FHQUNwQmdDLENBQU07b0NBQUNoQyxLQUFLLEVBQUMsQ0FBSTs7Ozs7Ozs4Q0FBQyxDQUFFOztxR0FDcEJnQyxDQUFNO29DQUFDaEMsS0FBSyxFQUFDLENBQUc7Ozs7Ozs7OENBQUMsQ0FBQzs7Ozs2RkFHcEJ3QixDQUFNOzRCQUFDQyxPQUFPLEVBQUUsUUFBUTtnQ0FBRmhCLE1BQU0sQ0FBTkEsWUFBWSxDQUFDbkIsRUFBRTs7Ozs7Ozs7c0NBQUcsQ0FBTTs7O21CQW5CdkNBLEVBQUU7Ozs7QUF5QnRCLENBQUM7R0E3RktGLGNBQWM7S0FBZEEsY0FBYztBQStGcEIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NyZWF0ZS1yZWNpcGUtY29tcG9uZW50cy9pbmdyZWRpZW50Rm9ybS50c3g/NDgyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkLCBFcnJvck1lc3NhZ2UgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmludGVyZmFjZSBJbmdyZWRpZW50TGlzdCB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgcXVhbnRpdHk6IG51bWJlcjtcbiAgbWVzdXJlbWVudDogc3RyaW5nO1xufVxuXG5jb25zdCBpbmdyZWRpZW50VmFsaWRhdG9yID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgaW5ncmVkaWVudDogWXVwLnN0cmluZygpXG4gICAgLnJlcXVpcmVkKFwiQW4gaW5ncmVkaWVudCBpcyByZXF1aXJlZFwiKVxuICAgIC5taW4oMiwgXCJUb28gc2hvcnQhXCIpLFxufSk7XG5cbmNvbnN0IEluZ3JlZGllbnRGb3JtOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2luZ3JlZGllbnRMaXN0LCBzZXRJbmdyZWRpZW50TGlzdF0gPSB1c2VTdGF0ZTxJbmdyZWRpZW50TGlzdFtdPihbXSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKHsgaW5ncmVkaWVudCB9KTogdm9pZCA9PiB7XG4gICAgY29uc3QgY3VycmVudExpc3QgPSBbLi4uaW5ncmVkaWVudExpc3RdO1xuICAgIGNvbnN0IG5ld0luZ3JlZGllbnQ6IEluZ3JlZGllbnRMaXN0ID0ge1xuICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgbWVzdXJlbWVudDogXCJOL0FcIixcbiAgICAgIG5hbWU6IGAke2luZ3JlZGllbnR9YCxcbiAgICAgIHF1YW50aXR5OiAxLFxuICAgIH07XG4gICAgY3VycmVudExpc3QucHVzaChuZXdJbmdyZWRpZW50KTtcbiAgICBzZXRJbmdyZWRpZW50TGlzdChjdXJyZW50TGlzdCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgY3VycmVudExpc3QgPSBbLi4uaW5ncmVkaWVudExpc3RdO1xuICAgIGNvbnN0IG5ld0xpc3QgPSBjdXJyZW50TGlzdC5maWx0ZXIoKGVsZW0pID0+IGVsZW0uaWQgIT09IGlkKTtcbiAgICBzZXRJbmdyZWRpZW50TGlzdChuZXdMaXN0KTtcbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoaWQ6IG51bWJlciwgcGFyYW06IHN0cmluZyB8IG51bWJlciwgZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gaW5ncmVkaWVudExpc3QuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09IGlkKTtcblxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgY29uc3QgY3VycmVudExpc3QgPSBbLi4uaW5ncmVkaWVudExpc3RdO1xuXG4gICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgY29uc29sZS5sb2coXCJBZmZlY3RpbmcgcXVhbnRpdHkgb25seVwiKTtcbiAgICAgIGNvbnN0IGluZ3JlZGllbnQgPSB7IC4uLmN1cnJlbnRMaXN0W2luZGV4XSwgcXVhbnRpdHk6IGV2ZW50IH07XG4gICAgICBjb25zb2xlLmxvZyhpbmdyZWRpZW50KTtcbiAgICAgIGN1cnJlbnRMaXN0W2luZGV4XSA9IGluZ3JlZGllbnQ7XG4gICAgICByZXR1cm4gc2V0SW5ncmVkaWVudExpc3QoY3VycmVudExpc3QpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGFyYW0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiV2FudHMgdG8gYWZmZWN0IHRoZSBtZXN1cmVtZW50XCIpO1xuICAgICAgLy8gY29uc3QgaW5ncmVkaWVudCA9IHsgLi4uY3VycmVudExpc3RbaW5kZXhdLCBtZXN1cmVtZW50OiB2YWx1ZSB9O1xuICAgICAgLy8gY29uc29sZS5sb2coaW5ncmVkaWVudCk7XG4gICAgICAvLyBjdXJyZW50TGlzdFtpbmRleF0gPSBpbmdyZWRpZW50O1xuICAgICAgLy8gcmV0dXJuIHNldEluZ3JlZGllbnRMaXN0KGN1cnJlbnRMaXN0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Rm9ybWlrXG4gICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZVxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtpbmdyZWRpZW50VmFsaWRhdG9yfVxuICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyByZXNldEZvcm0sIHNldFN1Ym1pdHRpbmcgfSkgPT4ge1xuICAgICAgICAgIGhhbmRsZVN1Ym1pdCh2YWx1ZXMpO1xuICAgICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICB9fVxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XG4gICAgICAgICAgaW5ncmVkaWVudDogXCJcIixcbiAgICAgICAgfX0+XG4gICAgICAgIDxGb3JtPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5ncmVkaWVudFwiPkFkZCBpbmdyZWRpZW50czwvbGFiZWw+XG4gICAgICAgICAgPEZpZWxkIGlkPVwiaW5ncmVkaWVudFwiIHR5cGU9XCJpbnB1dFwiIG5hbWU9XCJpbmdyZWRpZW50XCIgLz5cbiAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJpbmdyZWRpZW50XCIgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKGluZ3JlZGllbnRMaXN0KX0+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvRm9ybWlrPlxuXG4gICAgICB7aW5ncmVkaWVudExpc3QubWFwKFxuICAgICAgICAoeyBuYW1lLCBpZCwgcXVhbnRpdHksIG1lc3VyZW1lbnQgfTogSW5ncmVkaWVudExpc3QpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aWR9PlxuICAgICAgICAgICAgPHA+e25hbWV9PC9wPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZWxlbSkgPT4gaGFuZGxlQ2hhbmdlKGlkLCBxdWFudGl0eSwgZWxlbS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXttZXN1cmVtZW50fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGVsZW0pID0+XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKGlkLCBtZXN1cmVtZW50LCBlbGVtLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxcIj5sPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtbFwiPm1sPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJrZ1wiPmtnPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJnXCI+Zzwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGlkKX0+ZGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmdyZWRpZW50Rm9ybTtcbiJdLCJuYW1lcyI6WyJGb3JtaWsiLCJGb3JtIiwiRmllbGQiLCJFcnJvck1lc3NhZ2UiLCJZdXAiLCJ1c2VTdGF0ZSIsInY0IiwidXVpZHY0IiwiaW5ncmVkaWVudFZhbGlkYXRvciIsIm9iamVjdCIsInNoYXBlIiwiaW5ncmVkaWVudCIsInN0cmluZyIsInJlcXVpcmVkIiwibWluIiwiSW5ncmVkaWVudEZvcm0iLCJoYW5kbGVDaGFuZ2UiLCJpZCIsInBhcmFtIiwiZXZlbnQiLCJpbmRleCIsImluZ3JlZGllbnRMaXN0IiwiZmluZEluZGV4IiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImN1cnJlbnRMaXN0IiwicXVhbnRpdHkiLCJzZXRJbmdyZWRpZW50TGlzdCIsImhhbmRsZVN1Ym1pdCIsIm5ld0luZ3JlZGllbnQiLCJtZXN1cmVtZW50IiwibmFtZSIsInB1c2giLCJoYW5kbGVEZWxldGUiLCJuZXdMaXN0IiwiZmlsdGVyIiwiZWxlbSIsImRpdiIsImVuYWJsZVJlaW5pdGlhbGl6ZSIsInZhbGlkYXRpb25TY2hlbWEiLCJvblN1Ym1pdCIsInZhbHVlcyIsInJlc2V0Rm9ybSIsInNldFN1Ym1pdHRpbmciLCJpbml0aWFsVmFsdWVzIiwibGFiZWwiLCJodG1sRm9yIiwidHlwZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJwIiwiaW5wdXQiLCJkZWZhdWx0VmFsdWUiLCJvbkNoYW5nZSIsInNlbGVjdCIsIm9wdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/create-recipe-components/ingredientForm.tsx\n");

/***/ })

});