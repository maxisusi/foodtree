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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ingredientValidator = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({\n    ingredient: yup__WEBPACK_IMPORTED_MODULE_2__.string().required(\"An ingredient is required\").min(2, \"Too short!\")\n});\nvar IngredientForm = function() {\n    var _this1 = _this;\n    var handleChange = function handleChange(id, param, event) {\n        var value = event.target.value;\n        var index = ingredientList.findIndex(function(item) {\n            return item.id == id;\n        });\n        var currentList = _toConsumableArray(ingredientList);\n        if (typeof param === \"number\") {\n            var ingredient = _objectSpread({\n            }, currentList[index], {\n                quantity: value\n            });\n            currentList[index] = ingredient;\n            setIngredientList(currentList);\n        }\n        if (typeof param === \"string\") {\n            var ingredient1 = _objectSpread({\n            }, currentList[index], {\n                mesurement: value\n            });\n            currentList[index] = ingredient1;\n            setIngredientList(currentList);\n        }\n        console.log(currentList);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), ingredientList = ref[0], setIngredientList = ref[1];\n    var handleSubmit = function(param) {\n        var ingredient = param.ingredient;\n        var currentList = _toConsumableArray(ingredientList);\n        var newIngredient = {\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),\n            mesurement: \"N/A\",\n            name: \"\".concat(ingredient),\n            quantity: 1\n        };\n        currentList.push(newIngredient);\n        setIngredientList(currentList);\n    };\n    var handleDelete = function(id) {\n        var currentList = _toConsumableArray(ingredientList);\n        var newList = currentList.filter(function(elem) {\n            return elem.id !== id;\n        });\n        setIngredientList(newList);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n            lineNumber: 62,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n                enableReinitialize: true,\n                validationSchema: ingredientValidator,\n                onSubmit: function(values, param) {\n                    var resetForm = param.resetForm, setSubmitting = param.setSubmitting;\n                    handleSubmit(values);\n                    resetForm();\n                    setSubmitting(false);\n                },\n                initialValues: {\n                    ingredient: \"\"\n                },\n                __source: {\n                    fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {\n                    __source: {\n                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                            htmlFor: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Add ingredients\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {\n                            id: \"ingredient\",\n                            type: \"input\",\n                            name: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, {\n                            name: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            type: \"submit\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Add\"\n                        })\n                    ]\n                })\n            }),\n            ingredientList.map(function(param) {\n                var name = param.name, id = param.id, quantity = param.quantity, mesurement = param.mesurement;\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    },\n                    __self: _this1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"number\",\n                            min: \"1\",\n                            defaultValue: quantity,\n                            onChange: function(value) {\n                                return handleChange(id, quantity, value);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            },\n                            __self: _this1\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"select\", {\n                            defaultValue: mesurement,\n                            onChange: function(value) {\n                                return handleChange(id, mesurement, value);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"l\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"l\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"ml\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"ml\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"kg\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"kg\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"g\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"g\"\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            onClick: function() {\n                                return handleDelete(id);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: \"delete\"\n                        })\n                    ]\n                }, id);\n            })\n        ]\n    }));\n};\n_s(IngredientForm, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = IngredientForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IngredientForm);\nvar _c;\n$RefreshReg$(_c, \"IngredientForm\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NyZWF0ZS1yZWNpcGUtY29tcG9uZW50cy9pbmdyZWRpZW50Rm9ybS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwRDtBQUNoQztBQUNNO0FBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTbkMsR0FBSyxDQUFDUSxtQkFBbUIsR0FBR0osdUNBQVUsR0FBR00sS0FBSyxDQUFDLENBQUM7SUFDOUNDLFVBQVUsRUFBRVAsdUNBQVUsR0FDbkJTLFFBQVEsQ0FBQyxDQUEyQiw0QkFDcENDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBWTtBQUN4QixDQUFDO0FBRUQsR0FBSyxDQUFDQyxjQUFjLEdBQWEsUUFDakMsR0FEdUMsQ0FBQzs7UUFxQjdCQyxZQUFZLEdBQXJCLFFBQVEsQ0FBQ0EsWUFBWSxDQUFDQyxFQUFVLEVBQUVDLEtBQXNCLEVBQUVDLEtBQVUsRUFBUSxDQUFDO1FBQzNFLEdBQUssQ0FBQ0MsS0FBSyxHQUFHRCxLQUFLLENBQUNFLE1BQU0sQ0FBQ0QsS0FBSztRQUNoQyxHQUFLLENBQUNFLEtBQUssR0FBR0MsY0FBYyxDQUFDQyxTQUFTLENBQUMsUUFBUSxDQUFQQyxJQUFJO1lBQUtBLE1BQU0sQ0FBTkEsSUFBSSxDQUFDUixFQUFFLElBQUlBLEVBQUU7O1FBRTlELEdBQUssQ0FBQ1MsV0FBVyxzQkFBT0gsY0FBYztRQUV0QyxFQUFFLEVBQUUsTUFBTSxDQUFDTCxLQUFLLEtBQUssQ0FBUSxTQUFFLENBQUM7WUFDOUIsR0FBSyxDQUFDUCxVQUFVO2VBQVFlLFdBQVcsQ0FBQ0osS0FBSztnQkFBR0ssUUFBUSxFQUFFUCxLQUFLOztZQUMzRE0sV0FBVyxDQUFDSixLQUFLLElBQUlYLFVBQVU7WUFDL0JpQixpQkFBaUIsQ0FBQ0YsV0FBVztRQUMvQixDQUFDO1FBRUQsRUFBRSxFQUFFLE1BQU0sQ0FBQ1IsS0FBSyxLQUFLLENBQVEsU0FBRSxDQUFDO1lBQzlCLEdBQUssQ0FB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Q0xGLFlBQVksRUFBRTFCLFVBQVU7NEJBQ3hCMkIsUUFBUSxFQUFFLFFBQVEsQ0FBUHBDLEtBQUs7Z0NBQUtKLE1BQU0sQ0FBTkEsWUFBWSxDQUFDQyxFQUFFLEVBQUVZLFVBQVUsRUFBRVQsS0FBSzs7Ozs7Ozs7O3FHQUN0RHNDLENBQU07b0NBQUN0QyxLQUFLLEVBQUMsQ0FBRzs7Ozs7Ozs4Q0FBQyxDQUFDOztxR0FDbEJzQyxDQUFNO29DQUFDdEMsS0FBSyxFQUFDLENBQUk7Ozs7Ozs7OENBQUMsQ0FBRTs7cUdBQ3BCc0MsQ0FBTTtvQ0FBQ3RDLEtBQUssRUFBQyxDQUFJOzs7Ozs7OzhDQUFDLENBQUU7O3FHQUNwQnNDLENBQU07b0NBQUN0QyxLQUFLLEVBQUMsQ0FBRzs7Ozs7Ozs4Q0FBQyxDQUFDOzs7OzZGQUdwQitCLENBQU07NEJBQUNRLE9BQU8sRUFBRSxRQUFRO2dDQUFGdkIsTUFBTSxDQUFOQSxZQUFZLENBQUNuQixFQUFFOzs7Ozs7OztzQ0FBRyxDQUFNOzs7bUJBakJ2Q0EsRUFBRTs7OztBQXVCdEIsQ0FBQztHQXhGS0YsY0FBYztLQUFkQSxjQUFjO0FBMEZwQiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY3JlYXRlLXJlY2lwZS1jb21wb25lbnRzL2luZ3JlZGllbnRGb3JtLnRzeD80ODIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQsIEVycm9yTWVzc2FnZSB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuaW50ZXJmYWNlIEluZ3JlZGllbnRMaXN0IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBxdWFudGl0eTogbnVtYmVyO1xuICBtZXN1cmVtZW50OiBzdHJpbmc7XG59XG5cbmNvbnN0IGluZ3JlZGllbnRWYWxpZGF0b3IgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xuICBpbmdyZWRpZW50OiBZdXAuc3RyaW5nKClcbiAgICAucmVxdWlyZWQoXCJBbiBpbmdyZWRpZW50IGlzIHJlcXVpcmVkXCIpXG4gICAgLm1pbigyLCBcIlRvbyBzaG9ydCFcIiksXG59KTtcblxuY29uc3QgSW5ncmVkaWVudEZvcm06IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbaW5ncmVkaWVudExpc3QsIHNldEluZ3JlZGllbnRMaXN0XSA9IHVzZVN0YXRlPEluZ3JlZGllbnRMaXN0W10+KFtdKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoeyBpbmdyZWRpZW50IH0pOiB2b2lkID0+IHtcbiAgICBjb25zdCBjdXJyZW50TGlzdCA9IFsuLi5pbmdyZWRpZW50TGlzdF07XG4gICAgY29uc3QgbmV3SW5ncmVkaWVudDogSW5ncmVkaWVudExpc3QgPSB7XG4gICAgICBpZDogdXVpZHY0KCksXG4gICAgICBtZXN1cmVtZW50OiBcIk4vQVwiLFxuICAgICAgbmFtZTogYCR7aW5ncmVkaWVudH1gLFxuICAgICAgcXVhbnRpdHk6IDEsXG4gICAgfTtcbiAgICBjdXJyZW50TGlzdC5wdXNoKG5ld0luZ3JlZGllbnQpO1xuICAgIHNldEluZ3JlZGllbnRMaXN0KGN1cnJlbnRMaXN0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaWQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBjdXJyZW50TGlzdCA9IFsuLi5pbmdyZWRpZW50TGlzdF07XG4gICAgY29uc3QgbmV3TGlzdCA9IGN1cnJlbnRMaXN0LmZpbHRlcigoZWxlbSkgPT4gZWxlbS5pZCAhPT0gaWQpO1xuICAgIHNldEluZ3JlZGllbnRMaXN0KG5ld0xpc3QpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShpZDogbnVtYmVyLCBwYXJhbTogc3RyaW5nIHwgbnVtYmVyLCBldmVudDogYW55KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgaW5kZXggPSBpbmdyZWRpZW50TGlzdC5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQgPT0gaWQpO1xuXG4gICAgY29uc3QgY3VycmVudExpc3QgPSBbLi4uaW5ncmVkaWVudExpc3RdO1xuXG4gICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgY29uc3QgaW5ncmVkaWVudCA9IHsgLi4uY3VycmVudExpc3RbaW5kZXhdLCBxdWFudGl0eTogdmFsdWUgfTtcbiAgICAgIGN1cnJlbnRMaXN0W2luZGV4XSA9IGluZ3JlZGllbnQ7XG4gICAgICBzZXRJbmdyZWRpZW50TGlzdChjdXJyZW50TGlzdCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgaW5ncmVkaWVudCA9IHsgLi4uY3VycmVudExpc3RbaW5kZXhdLCBtZXN1cmVtZW50OiB2YWx1ZSB9O1xuICAgICAgY3VycmVudExpc3RbaW5kZXhdID0gaW5ncmVkaWVudDtcbiAgICAgIHNldEluZ3JlZGllbnRMaXN0KGN1cnJlbnRMaXN0KTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhjdXJyZW50TGlzdCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Rm9ybWlrXG4gICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZVxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtpbmdyZWRpZW50VmFsaWRhdG9yfVxuICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyByZXNldEZvcm0sIHNldFN1Ym1pdHRpbmcgfSkgPT4ge1xuICAgICAgICAgIGhhbmRsZVN1Ym1pdCh2YWx1ZXMpO1xuICAgICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICB9fVxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XG4gICAgICAgICAgaW5ncmVkaWVudDogXCJcIixcbiAgICAgICAgfX0+XG4gICAgICAgIDxGb3JtPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5ncmVkaWVudFwiPkFkZCBpbmdyZWRpZW50czwvbGFiZWw+XG4gICAgICAgICAgPEZpZWxkIGlkPVwiaW5ncmVkaWVudFwiIHR5cGU9XCJpbnB1dFwiIG5hbWU9XCJpbmdyZWRpZW50XCIgLz5cbiAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJpbmdyZWRpZW50XCIgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9Gb3JtaWs+XG5cbiAgICAgIHtpbmdyZWRpZW50TGlzdC5tYXAoXG4gICAgICAgICh7IG5hbWUsIGlkLCBxdWFudGl0eSwgbWVzdXJlbWVudCB9OiBJbmdyZWRpZW50TGlzdCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpZH0+XG4gICAgICAgICAgICA8cD57bmFtZX08L3A+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3F1YW50aXR5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVDaGFuZ2UoaWQsIHF1YW50aXR5LCB2YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e21lc3VyZW1lbnR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZShpZCwgbWVzdXJlbWVudCwgdmFsdWUpfT5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxcIj5sPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtbFwiPm1sPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJrZ1wiPmtnPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJnXCI+Zzwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGlkKX0+ZGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmdyZWRpZW50Rm9ybTtcbiJdLCJuYW1lcyI6WyJGb3JtaWsiLCJGb3JtIiwiRmllbGQiLCJFcnJvck1lc3NhZ2UiLCJZdXAiLCJ1c2VTdGF0ZSIsInY0IiwidXVpZHY0IiwiaW5ncmVkaWVudFZhbGlkYXRvciIsIm9iamVjdCIsInNoYXBlIiwiaW5ncmVkaWVudCIsInN0cmluZyIsInJlcXVpcmVkIiwibWluIiwiSW5ncmVkaWVudEZvcm0iLCJoYW5kbGVDaGFuZ2UiLCJpZCIsInBhcmFtIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsImluZGV4IiwiaW5ncmVkaWVudExpc3QiLCJmaW5kSW5kZXgiLCJpdGVtIiwiY3VycmVudExpc3QiLCJxdWFudGl0eSIsInNldEluZ3JlZGllbnRMaXN0IiwibWVzdXJlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJuZXdJbmdyZWRpZW50IiwibmFtZSIsInB1c2giLCJoYW5kbGVEZWxldGUiLCJuZXdMaXN0IiwiZmlsdGVyIiwiZWxlbSIsImRpdiIsImVuYWJsZVJlaW5pdGlhbGl6ZSIsInZhbGlkYXRpb25TY2hlbWEiLCJvblN1Ym1pdCIsInZhbHVlcyIsInJlc2V0Rm9ybSIsInNldFN1Ym1pdHRpbmciLCJpbml0aWFsVmFsdWVzIiwibGFiZWwiLCJodG1sRm9yIiwidHlwZSIsImJ1dHRvbiIsIm1hcCIsInAiLCJpbnB1dCIsImRlZmF1bHRWYWx1ZSIsIm9uQ2hhbmdlIiwic2VsZWN0Iiwib3B0aW9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/create-recipe-components/ingredientForm.tsx\n");

/***/ })

});