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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _typeof = function(obj) {\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ingredientValidator = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({\n    ingredient: yup__WEBPACK_IMPORTED_MODULE_2__.string().required(\"An ingredient is required\").min(2, \"Too short!\")\n});\nvar IngredientForm = function() {\n    var _this1 = _this;\n    var handleChange = // function handleChange(id: number, param: string | number, event: any): void {\n    //   const value = event.target.value;\n    //   const index = ingredientList.findIndex((item) => item.id == id);\n    //   console.log(typeof value);\n    //   const currentList = [...ingredientList];\n    //   if (typeof param === \"number\") {\n    //     console.log(\"Affecting quantity only\");\n    //     const ingredient = { ...currentList[index], quantity: value };\n    //     console.log(ingredient);\n    //     currentList[index] = ingredient;\n    //     return setIngredientList(currentList);\n    //   }\n    //   if (typeof param === \"string\") {\n    //     console.log(\"Wants to affect the mesurement\");\n    //     const ingredient = { ...currentList[index], mesurement: value };\n    //     console.log(ingredient);\n    //     currentList[index] = ingredient;\n    //     return setIngredientList(currentList);\n    //   }\n    // }\n    function handleChange(id, param, event) {\n        var value = event.target.value;\n        var index = ingredientList.findIndex(function(item) {\n            return item.id == id;\n        });\n        console.log(typeof value === \"undefined\" ? \"undefined\" : _typeof(value));\n        var currentList = _toConsumableArray(ingredientList);\n        if (typeof param === \"number\") {\n            console.log(\"Affecting quantity only\");\n            var ingredient = _objectSpread({\n            }, currentList[index], {\n                quantity: value\n            });\n            console.log(ingredient);\n            currentList[index] = ingredient;\n            return setIngredientList(currentList);\n        }\n        if (typeof param === \"string\") {\n            console.log(\"Affecting the mesurement only\");\n            var ingredient1 = _objectSpread({\n            }, currentList[index], {\n                mesurement: value\n            });\n            console.log(ingredient1);\n            currentList[index] = ingredient1;\n            return setIngredientList(currentList);\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), ingredientList = ref[0], setIngredientList = ref[1];\n    var handleSubmit = function(param) {\n        var ingredient = param.ingredient;\n        var currentList = _toConsumableArray(ingredientList);\n        var newIngredient = {\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),\n            mesurement: \"N/A\",\n            name: \"\".concat(ingredient),\n            quantity: 1\n        };\n        currentList.push(newIngredient);\n        setIngredientList(currentList);\n    };\n    var handleDelete = function(id) {\n        var currentList = _toConsumableArray(ingredientList);\n        var newList = currentList.filter(function(elem) {\n            return elem.id !== id;\n        });\n        setIngredientList(newList);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n            lineNumber: 88,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n                enableReinitialize: true,\n                validationSchema: ingredientValidator,\n                onSubmit: function(values, param) {\n                    var resetForm = param.resetForm, setSubmitting = param.setSubmitting;\n                    handleSubmit(values);\n                    resetForm();\n                    setSubmitting(false);\n                },\n                initialValues: {\n                    ingredient: \"\"\n                },\n                __source: {\n                    fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {\n                    __source: {\n                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                            htmlFor: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Add ingredients\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {\n                            id: \"ingredient\",\n                            type: \"input\",\n                            name: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, {\n                            name: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            type: \"submit\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Add\"\n                        })\n                    ]\n                })\n            }),\n            ingredientList.map(function(param) {\n                var name = param.name, id = param.id, quantity = param.quantity, mesurement = param.mesurement;\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 11\n                    },\n                    __self: _this1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"number\",\n                            min: \"1\",\n                            defaultValue: \"1\",\n                            onChange: function(value) {\n                                return handleChange(id, quantity, value);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            },\n                            __self: _this1\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"select\", {\n                            defaultValue: mesurement,\n                            onChange: function(value) {\n                                return handleChange(id, mesurement, value);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"l\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"l\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"ml\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"ml\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"kg\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"kg\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"g\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 124,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"g\"\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            onClick: function() {\n                                return handleDelete(id);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: \"delete\"\n                        })\n                    ]\n                }, id);\n            })\n        ]\n    }));\n};\n_s(IngredientForm, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = IngredientForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IngredientForm);\nvar _c;\n$RefreshReg$(_c, \"IngredientForm\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NyZWF0ZS1yZWNpcGUtY29tcG9uZW50cy9pbmdyZWRpZW50Rm9ybS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwRDtBQUNoQztBQUNNO0FBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVbkMsR0FBSyxDQUFDUSxtQkFBbUIsR0FBR0osdUNBQVUsR0FBR00sS0FBSyxDQUFDLENBQUM7SUFDOUNDLFVBQVUsRUFBRVAsdUNBQVUsR0FDbkJTLFFBQVEsQ0FBQyxDQUEyQiw0QkFDcENDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBWTtBQUN4QixDQUFDO0FBRUQsR0FBSyxDQUFDQyxjQUFjLEdBQWEsUUFDakMsR0FEdUMsQ0FBQzs7UUE0QzdCQyxZQUFZLEdBdkJyQixFQUFnRjtJQUNoRixFQUFzQztJQUN0QyxFQUFxRTtJQUNyRSxFQUErQjtJQUMvQixFQUE2QztJQUU3QyxFQUFxQztJQUNyQyxFQUE4QztJQUM5QyxFQUFxRTtJQUNyRSxFQUErQjtJQUMvQixFQUF1QztJQUN2QyxFQUE2QztJQUM3QyxFQUFNO0lBRU4sRUFBcUM7SUFDckMsRUFBcUQ7SUFDckQsRUFBdUU7SUFDdkUsRUFBK0I7SUFDL0IsRUFBdUM7SUFDdkMsRUFBNkM7SUFDN0MsRUFBTTtJQUNOLEVBQUk7SUFFSixRQUFRLENBQUNBLFlBQVksQ0FBSUMsRUFBVSxFQUFFQyxLQUFRLEVBQUVDLEtBQVUsRUFBUSxDQUFDO1FBQ2hFLEdBQUssQ0FBQ0MsS0FBSyxHQUFHRCxLQUFLLENBQUNFLE1BQU0sQ0FBQ0QsS0FBSztRQUNoQyxHQUFLLENBQUNFLEtBQUssR0FBR0MsY0FBYyxDQUFDQyxTQUFTLENBQUMsUUFBUSxDQUFQQyxJQUFJO1lBQUtBLE1BQU0sQ0FBTkEsSUFBSSxDQUFDUixFQUFFLElBQUlBLEVBQUU7O1FBQzlEUyxPQUFPLENBQUNDLEdBQUcsUUFBUVAsS0FBSyxpQ0FBWixPQUFZLENBQUxBLEtBQUs7UUFDeEIsR0FBSyxDQUFDUSxXQUFXLHNCQUFPTCxjQUFjO1FBRXRDLEVBQUUsRUFBRSxNQUFNLENBQUNMLEtBQUssS0FBSyxDQUFRLFNBQUUsQ0FBQztZQUM5QlEsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBeUI7WUFDckMsR0FBSyxDQUFDaEIsVUFBVTtlQUFRaUIsV0FBVyxDQUFDTixLQUFLO2dCQUFHTyxRQUFRLEVBQUVULEtBQUs7O1lBQzNETSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2hCLFVBQVU7WUFDdEJpQixXQUFXLENBQUNOLEtBQUssSUFBSVgsVUFBVTtZQUMvQixNQUFNLENBQUNtQixpQkFBaUIsQ0FBQ0YsV0FBVztRQUN0QyxDQUFDO1FBRUQsRUFBRSxFQUFFLE1BQU0sQ0FBQ1YsS0FBSyxLQUFLLENBQVEsU0FBRSxDQUFDO1lBQzlCUSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUErQjtZQUMzQyxHQUFLLENBQUNoQixXQUFVO2VBQVFpQixXQUFXLENBQUNOLEtBQUs7Z0JBQUdTLFVBQVUsRUFBRVgsS0FBSzs7WUFDN0RNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDaEIsV0FBVTtZQUN0QmlCLFdBQVcsQ0FBQ04sS0FBSyxJQUFJWCxXQUFVO1lBQy9CLE1BQU0sQ0FBQ21CLGlCQUFpQixDQUFDRixXQUFXO1FBQ3RDLENBQUM7SUFDSCxDQUFDOztJQWhFRCxHQUFLLENBQXVDdkIsR0FBOEIsR0FBOUJBLCtDQUFRLENBQW1CLENBQUMsQ0FBQyxHQUFsRWtCLGNBQWMsR0FBdUJsQixHQUE4QixLQUFuRHlCLGlCQUFpQixHQUFJekIsR0FBOEI7SUFFMUUsR0FBSyxDQUFDMkIsWUFBWSxHQUFHLFFBQVEsUUFBa0IsQ0FBQztZQUF4QnJCLFVBQVUsU0FBVkEsVUFBVTtRQUNoQyxHQUFLLENBQUNpQixXQUFXLHNCQUFPTCxjQUFjO1FBQ3RDLEdBQUssQ0FBQ1UsYUFBYSxHQUFtQixDQUFDO1lBQ3JDaEIsRUFBRSxFQUFFVix3Q0FBTTtZQUNWd0IsVUFBVSxFQUFFLENBQUs7WUFDakJHLElBQUksRUFBRyxHQUFhLE9BQVh2QixVQUFVO1lBQ25Ca0IsUUFBUSxFQUFFLENBQUM7UUFDYixDQUFDO1FBQ0RELFdBQVcsQ0FBQ08sSUFBSSxDQUFDRixhQUFhO1FBQzlCSCxpQkFBaUIsQ0FBQ0YsV0FBVztJQUMvQixDQUFDO0lBRUQsR0FBSyxDQUFDUSxZQUFZLEdBQUcsUUFBUSxDQUFQbkIsRUFBRSxFQUFXLENBQUM7UUFDbEMsR0FBSyxDQUFDVyxXQUFXLHNCQUFPTCxjQUFjO1FBQ3RDLEdBQUssQ0FBQ2MsT0FBTyxHQUFHVCxXQUFXLENBQUNVLE1BQU0sQ0FBQyxRQUFRLENBQVBDLElBQUk7WUFBS0EsTUFBTSxDQUFOQSxJQUFJLENBQUN0QixFQUFFLEtBQUtBLEVBQUU7O1FBQzNEYSxpQkFBaUIsQ0FBQ08sT0FBTztJQUMzQixDQUFDO0lBZ0RELE1BQU0sdUVBQ0hHLENBQUc7Ozs7Ozs7O2lGQUNEeEMsMENBQU07Z0JBQ0x5QyxrQkFBa0I7Z0JBQ2xCQyxnQkFBZ0IsRUFBRWxDLG1CQUFtQjtnQkFDckNtQyxRQUFRLEVBQUUsUUFBUSxDQUFQQyxNQUFNLFNBQW1DLENBQUM7d0JBQWhDQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsYUFBYSxTQUFiQSxhQUFhO29CQUMzQ2QsWUFBWSxDQUFDWSxNQUFNO29CQUNuQkMsU0FBUztvQkFDVEMsYUFBYSxDQUFDLEtBQUs7Z0JBQ3JCLENBQUM7Z0JBQ0RDLGFBQWEsRUFBRSxDQUFDO29CQUNkcEMsVUFBVSxFQUFFLENBQUU7Z0JBQ2hCLENBQUM7Ozs7Ozs7Z0dBQ0FWLHdDQUFJOzs7Ozs7Ozs2RkFDRitDLENBQUs7NEJBQUNDLE9BQU8sRUFBQyxDQUFZOzs7Ozs7O3NDQUFDLENBQWU7OzZGQUMxQy9DLHlDQUFLOzRCQUFDZSxFQUFFLEVBQUMsQ0FBWTs0QkFBQ2lDLElBQUksRUFBQyxDQUFPOzRCQUFDaEIsSUFBSSxFQUFDLENBQVk7Ozs7Ozs7OzZGQUNwRC9CLGdEQUFZOzRCQUFDK0IsSUFBSSxFQUFDLENBQVk7Ozs7Ozs7OzZGQUM5QmlCLENBQU07NEJBQUNELElBQUksRUFBQyxDQUFROzs7Ozs7O3NDQUFDLENBQUc7Ozs7O1lBSTVCM0IsY0FBYyxDQUFDNkIsR0FBRyxDQUNqQixRQUFRO29CQUFMbEIsSUFBSSxTQUFKQSxJQUFJLEVBQUVqQixFQUFFLFNBQUZBLEVBQUUsRUFBRVksUUFBUSxTQUFSQSxRQUFRLEVBQUVFLFVBQVUsU0FBVkEsVUFBVTs4QkFDL0IsTUFBTSx5REFBTFMsQ0FBRzs7Ozs7Ozs7NkZBQ0RhLENBQUM7Ozs7Ozs7c0NBQUVuQixJQUFJOzs2RkFDUG9CLENBQUs7NEJBQ0pKLElBQUksRUFBQyxDQUFROzRCQUNicEMsR0FBRyxFQUFDLENBQUc7NEJBQ1B5QyxZQUFZLEVBQUMsQ0FBRzs0QkFDaEJDLFFBQVEsRUFBRSxRQUFRLENBQVBwQyxLQUFLO2dDQUFLSixNQUFNLENBQU5BLFlBQVksQ0FBU0MsRUFBRSxFQUFFWSxRQUFRLEVBQUVULEtBQUs7Ozs7Ozs7Ozs4RkFFOURxQyxDQUFNOzRCQUNMRixZQUFZLEVBQUV4QixVQUFVOzRCQUN4QnlCLFFBQVEsRUFBRSxRQUFRLENBQVBwQyxLQUFLO2dDQUFLSixNQUFNLENBQU5BLFlBQVksQ0FBU0MsRUFBRSxFQUFFYyxVQUFVLEVBQUVYLEtBQUs7Ozs7Ozs7OztxR0FDOURzQyxDQUFNO29DQUFDdEMsS0FBSyxFQUFDLENBQUc7Ozs7Ozs7OENBQUMsQ0FBQzs7cUdBQ2xCc0MsQ0FBTTtvQ0FBQ3RDLEtBQUssRUFBQyxDQUFJOzs7Ozs7OzhDQUFDLENBQUU7O3FHQUNwQnNDLENBQU07b0NBQUN0QyxLQUFLLEVBQUMsQ0FBSTs7Ozs7Ozs4Q0FBQyxDQUFFOztxR0FDcEJzQyxDQUFNO29DQUFDdEMsS0FBSyxFQUFDLENBQUc7Ozs7Ozs7OENBQUMsQ0FBQzs7Ozs2RkFHcEIrQixDQUFNOzRCQUFDUSxPQUFPLEVBQUUsUUFBUTtnQ0FBRnZCLE1BQU0sQ0FBTkEsWUFBWSxDQUFDbkIsRUFBRTs7Ozs7Ozs7c0NBQUcsQ0FBTTs7O21CQWpCdkNBLEVBQUU7Ozs7QUF1QnRCLENBQUM7R0FqSEtGLGNBQWM7S0FBZEEsY0FBYztBQW1IcEIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NyZWF0ZS1yZWNpcGUtY29tcG9uZW50cy9pbmdyZWRpZW50Rm9ybS50c3g/NDgyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkLCBFcnJvck1lc3NhZ2UgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBIdG1sUHJvcHMgfSBmcm9tIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHNcIjtcblxuaW50ZXJmYWNlIEluZ3JlZGllbnRMaXN0IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBxdWFudGl0eTogbnVtYmVyO1xuICBtZXN1cmVtZW50OiBzdHJpbmc7XG59XG5cbmNvbnN0IGluZ3JlZGllbnRWYWxpZGF0b3IgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xuICBpbmdyZWRpZW50OiBZdXAuc3RyaW5nKClcbiAgICAucmVxdWlyZWQoXCJBbiBpbmdyZWRpZW50IGlzIHJlcXVpcmVkXCIpXG4gICAgLm1pbigyLCBcIlRvbyBzaG9ydCFcIiksXG59KTtcblxuY29uc3QgSW5ncmVkaWVudEZvcm06IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbaW5ncmVkaWVudExpc3QsIHNldEluZ3JlZGllbnRMaXN0XSA9IHVzZVN0YXRlPEluZ3JlZGllbnRMaXN0W10+KFtdKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoeyBpbmdyZWRpZW50IH0pOiB2b2lkID0+IHtcbiAgICBjb25zdCBjdXJyZW50TGlzdCA9IFsuLi5pbmdyZWRpZW50TGlzdF07XG4gICAgY29uc3QgbmV3SW5ncmVkaWVudDogSW5ncmVkaWVudExpc3QgPSB7XG4gICAgICBpZDogdXVpZHY0KCksXG4gICAgICBtZXN1cmVtZW50OiBcIk4vQVwiLFxuICAgICAgbmFtZTogYCR7aW5ncmVkaWVudH1gLFxuICAgICAgcXVhbnRpdHk6IDEsXG4gICAgfTtcbiAgICBjdXJyZW50TGlzdC5wdXNoKG5ld0luZ3JlZGllbnQpO1xuICAgIHNldEluZ3JlZGllbnRMaXN0KGN1cnJlbnRMaXN0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaWQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBjdXJyZW50TGlzdCA9IFsuLi5pbmdyZWRpZW50TGlzdF07XG4gICAgY29uc3QgbmV3TGlzdCA9IGN1cnJlbnRMaXN0LmZpbHRlcigoZWxlbSkgPT4gZWxlbS5pZCAhPT0gaWQpO1xuICAgIHNldEluZ3JlZGllbnRMaXN0KG5ld0xpc3QpO1xuICB9O1xuXG4gIC8vIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShpZDogbnVtYmVyLCBwYXJhbTogc3RyaW5nIHwgbnVtYmVyLCBldmVudDogYW55KTogdm9pZCB7XG4gIC8vICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gIC8vICAgY29uc3QgaW5kZXggPSBpbmdyZWRpZW50TGlzdC5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQgPT0gaWQpO1xuICAvLyAgIGNvbnNvbGUubG9nKHR5cGVvZiB2YWx1ZSk7XG4gIC8vICAgY29uc3QgY3VycmVudExpc3QgPSBbLi4uaW5ncmVkaWVudExpc3RdO1xuXG4gIC8vICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gXCJudW1iZXJcIikge1xuICAvLyAgICAgY29uc29sZS5sb2coXCJBZmZlY3RpbmcgcXVhbnRpdHkgb25seVwiKTtcbiAgLy8gICAgIGNvbnN0IGluZ3JlZGllbnQgPSB7IC4uLmN1cnJlbnRMaXN0W2luZGV4XSwgcXVhbnRpdHk6IHZhbHVlIH07XG4gIC8vICAgICBjb25zb2xlLmxvZyhpbmdyZWRpZW50KTtcbiAgLy8gICAgIGN1cnJlbnRMaXN0W2luZGV4XSA9IGluZ3JlZGllbnQ7XG4gIC8vICAgICByZXR1cm4gc2V0SW5ncmVkaWVudExpc3QoY3VycmVudExpc3QpO1xuICAvLyAgIH1cblxuICAvLyAgIGlmICh0eXBlb2YgcGFyYW0gPT09IFwic3RyaW5nXCIpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiV2FudHMgdG8gYWZmZWN0IHRoZSBtZXN1cmVtZW50XCIpO1xuICAvLyAgICAgY29uc3QgaW5ncmVkaWVudCA9IHsgLi4uY3VycmVudExpc3RbaW5kZXhdLCBtZXN1cmVtZW50OiB2YWx1ZSB9O1xuICAvLyAgICAgY29uc29sZS5sb2coaW5ncmVkaWVudCk7XG4gIC8vICAgICBjdXJyZW50TGlzdFtpbmRleF0gPSBpbmdyZWRpZW50O1xuICAvLyAgICAgcmV0dXJuIHNldEluZ3JlZGllbnRMaXN0KGN1cnJlbnRMaXN0KTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2U8VD4oaWQ6IG51bWJlciwgcGFyYW06IFQsIGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBpbmRleCA9IGluZ3JlZGllbnRMaXN0LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PSBpZCk7XG4gICAgY29uc29sZS5sb2codHlwZW9mIHZhbHVlKTtcbiAgICBjb25zdCBjdXJyZW50TGlzdCA9IFsuLi5pbmdyZWRpZW50TGlzdF07XG5cbiAgICBpZiAodHlwZW9mIHBhcmFtID09PSBcIm51bWJlclwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkFmZmVjdGluZyBxdWFudGl0eSBvbmx5XCIpO1xuICAgICAgY29uc3QgaW5ncmVkaWVudCA9IHsgLi4uY3VycmVudExpc3RbaW5kZXhdLCBxdWFudGl0eTogdmFsdWUgfTtcbiAgICAgIGNvbnNvbGUubG9nKGluZ3JlZGllbnQpO1xuICAgICAgY3VycmVudExpc3RbaW5kZXhdID0gaW5ncmVkaWVudDtcbiAgICAgIHJldHVybiBzZXRJbmdyZWRpZW50TGlzdChjdXJyZW50TGlzdCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc29sZS5sb2coXCJBZmZlY3RpbmcgdGhlIG1lc3VyZW1lbnQgb25seVwiKTtcbiAgICAgIGNvbnN0IGluZ3JlZGllbnQgPSB7IC4uLmN1cnJlbnRMaXN0W2luZGV4XSwgbWVzdXJlbWVudDogdmFsdWUgfTtcbiAgICAgIGNvbnNvbGUubG9nKGluZ3JlZGllbnQpO1xuICAgICAgY3VycmVudExpc3RbaW5kZXhdID0gaW5ncmVkaWVudDtcbiAgICAgIHJldHVybiBzZXRJbmdyZWRpZW50TGlzdChjdXJyZW50TGlzdCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEZvcm1pa1xuICAgICAgICBlbmFibGVSZWluaXRpYWxpemVcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17aW5ncmVkaWVudFZhbGlkYXRvcn1cbiAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIHsgcmVzZXRGb3JtLCBzZXRTdWJtaXR0aW5nIH0pID0+IHtcbiAgICAgICAgICBoYW5kbGVTdWJtaXQodmFsdWVzKTtcbiAgICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgICAgfX1cbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgICAgIGluZ3JlZGllbnQ6IFwiXCIsXG4gICAgICAgIH19PlxuICAgICAgICA8Rm9ybT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImluZ3JlZGllbnRcIj5BZGQgaW5ncmVkaWVudHM8L2xhYmVsPlxuICAgICAgICAgIDxGaWVsZCBpZD1cImluZ3JlZGllbnRcIiB0eXBlPVwiaW5wdXRcIiBuYW1lPVwiaW5ncmVkaWVudFwiIC8+XG4gICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPVwiaW5ncmVkaWVudFwiIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkPC9idXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvRm9ybWlrPlxuXG4gICAgICB7aW5ncmVkaWVudExpc3QubWFwKFxuICAgICAgICAoeyBuYW1lLCBpZCwgcXVhbnRpdHksIG1lc3VyZW1lbnQgfTogSW5ncmVkaWVudExpc3QpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aWR9PlxuICAgICAgICAgICAgPHA+e25hbWV9PC9wPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZTxudW1iZXI+KGlkLCBxdWFudGl0eSwgdmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXttZXN1cmVtZW50fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVDaGFuZ2U8c3RyaW5nPihpZCwgbWVzdXJlbWVudCwgdmFsdWUpfT5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxcIj5sPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtbFwiPm1sPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJrZ1wiPmtnPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJnXCI+Zzwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGlkKX0+ZGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmdyZWRpZW50Rm9ybTtcbiJdLCJuYW1lcyI6WyJGb3JtaWsiLCJGb3JtIiwiRmllbGQiLCJFcnJvck1lc3NhZ2UiLCJZdXAiLCJ1c2VTdGF0ZSIsInY0IiwidXVpZHY0IiwiaW5ncmVkaWVudFZhbGlkYXRvciIsIm9iamVjdCIsInNoYXBlIiwiaW5ncmVkaWVudCIsInN0cmluZyIsInJlcXVpcmVkIiwibWluIiwiSW5ncmVkaWVudEZvcm0iLCJoYW5kbGVDaGFuZ2UiLCJpZCIsInBhcmFtIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsImluZGV4IiwiaW5ncmVkaWVudExpc3QiLCJmaW5kSW5kZXgiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRMaXN0IiwicXVhbnRpdHkiLCJzZXRJbmdyZWRpZW50TGlzdCIsIm1lc3VyZW1lbnQiLCJoYW5kbGVTdWJtaXQiLCJuZXdJbmdyZWRpZW50IiwibmFtZSIsInB1c2giLCJoYW5kbGVEZWxldGUiLCJuZXdMaXN0IiwiZmlsdGVyIiwiZWxlbSIsImRpdiIsImVuYWJsZVJlaW5pdGlhbGl6ZSIsInZhbGlkYXRpb25TY2hlbWEiLCJvblN1Ym1pdCIsInZhbHVlcyIsInJlc2V0Rm9ybSIsInNldFN1Ym1pdHRpbmciLCJpbml0aWFsVmFsdWVzIiwibGFiZWwiLCJodG1sRm9yIiwidHlwZSIsImJ1dHRvbiIsIm1hcCIsInAiLCJpbnB1dCIsImRlZmF1bHRWYWx1ZSIsIm9uQ2hhbmdlIiwic2VsZWN0Iiwib3B0aW9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/create-recipe-components/ingredientForm.tsx\n");

/***/ })

});