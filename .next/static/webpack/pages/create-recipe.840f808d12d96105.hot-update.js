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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ingredientValidator = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({\n    ingredient: yup__WEBPACK_IMPORTED_MODULE_2__.string().required(\"An ingredient is required\").min(2, \"Too short!\")\n});\nvar IngredientForm = function() {\n    var _this1 = _this;\n    var handleChange = function handleChange(id, param, event) {\n        var value = event.target.value;\n        var index = ingredientList.findIndex(function(item) {\n            return item.id == id;\n        });\n        var currentList = _toConsumableArray(ingredientList);\n        if (typeof param === \"number\") {\n            var ingredient = _objectSpread({\n            }, currentList[index], {\n                quantity: parseFloat(value)\n            });\n            currentList[index] = ingredient;\n            return setIngredientList(currentList);\n        }\n        if (typeof param === \"string\") {\n            var ingredient1 = _objectSpread({\n            }, currentList[index], {\n                mesurement: value\n            });\n            currentList[index] = ingredient1;\n            return setIngredientList(currentList);\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), ingredientList = ref[0], setIngredientList = ref[1];\n    var handleSubmit = function(param) {\n        var ingredient = param.ingredient;\n        var currentList = _toConsumableArray(ingredientList);\n        var newIngredient = {\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),\n            mesurement: \"N/A\",\n            name: \"\".concat(ingredient),\n            quantity: 1\n        };\n        currentList.push(newIngredient);\n        setIngredientList(currentList);\n    };\n    var handleDelete = function(id) {\n        var currentList = _toConsumableArray(ingredientList);\n        var newList = currentList.filter(function(elem) {\n            return elem.id !== id;\n        });\n        setIngredientList(newList);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n            lineNumber: 60,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n                enableReinitialize: true,\n                validationSchema: ingredientValidator,\n                onSubmit: function(values, param) {\n                    var resetForm = param.resetForm, setSubmitting = param.setSubmitting;\n                    handleSubmit(values);\n                    resetForm();\n                    setSubmitting(false);\n                },\n                initialValues: {\n                    ingredient: \"\"\n                },\n                __source: {\n                    fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {\n                    __source: {\n                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                            htmlFor: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Add ingredients\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {\n                            id: \"ingredient\",\n                            type: \"input\",\n                            name: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, {\n                            name: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            type: \"submit\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Add\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            type: \"button\",\n                            onClick: function() {\n                                return console.log(ingredientList);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Submit\"\n                        })\n                    ]\n                })\n            }),\n            ingredientList.map(function(param) {\n                var name = param.name, id = param.id, quantity = param.quantity, mesurement = param.mesurement;\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    },\n                    __self: _this1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"number\",\n                            min: \"1\",\n                            defaultValue: \"1\",\n                            onChange: function(elem) {\n                                return handleChange(id, quantity, elem);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            },\n                            __self: _this1\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"select\", {\n                            defaultValue: mesurement,\n                            onChange: function(elem) {\n                                return handleChange(id, mesurement, elem);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"l\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"l\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"ml\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"ml\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"kg\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"kg\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"g\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"g\"\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            onClick: function() {\n                                return handleDelete(id);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: \"delete\"\n                        })\n                    ]\n                }, id);\n            })\n        ]\n    }));\n};\n_s(IngredientForm, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = IngredientForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IngredientForm);\nvar _c;\n$RefreshReg$(_c, \"IngredientForm\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NyZWF0ZS1yZWNpcGUtY29tcG9uZW50cy9pbmdyZWRpZW50Rm9ybS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwRDtBQUNoQztBQUNNO0FBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVbkMsR0FBSyxDQUFDUSxtQkFBbUIsR0FBR0osdUNBQVUsR0FBR00sS0FBSyxDQUFDLENBQUM7SUFDOUNDLFVBQVUsRUFBRVAsdUNBQVUsR0FDbkJTLFFBQVEsQ0FBQyxDQUEyQiw0QkFDcENDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBWTtBQUN4QixDQUFDO0FBRUQsR0FBSyxDQUFDQyxjQUFjLEdBQWEsUUFDakMsR0FEdUMsQ0FBQzs7UUFxQjdCQyxZQUFZLEdBQXJCLFFBQVEsQ0FBQ0EsWUFBWSxDQUFJQyxFQUFVLEVBQUVDLEtBQVEsRUFBRUMsS0FBVSxFQUFRLENBQUM7UUFDaEUsR0FBSyxDQUFDQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxDQUFDRCxLQUFLO1FBQ2hDLEdBQUssQ0FBQ0UsS0FBSyxHQUFHQyxjQUFjLENBQUNDLFNBQVMsQ0FBQyxRQUFRLENBQVBDLElBQUk7WUFBS0EsTUFBTSxDQUFOQSxJQUFJLENBQUNSLEVBQUUsSUFBSUEsRUFBRTs7UUFDOUQsR0FBSyxDQUFDUyxXQUFXLHNCQUFPSCxjQUFjO1FBRXRDLEVBQUUsRUFBRSxNQUFNLENBQUNMLEtBQUssS0FBSyxDQUFRLFNBQUUsQ0FBQztZQUM5QixHQUFLLENBQUNQLFVBQVU7ZUFBUWUsV0FBVyxDQUFDSixLQUFLO2dCQUFHSyxRQUFRLEVBQUVDLFVBQVUsQ0FBQ1IsS0FBSzs7WUFDdEVNLFdBQVcsQ0FBQ0osS0FBSyxJQUFJWCxVQUFVO1lBQy9CLE1BQU0sQ0FBQ2tCLGlCQUFpQixDQUFDSCxXQUFXO1FBQ3RDLENBQUM7UUFFRCxFQUFFLEVBQUUsTUFBTSxDQUFDUixLQUFLLEtBQUssQ0FBUSxTQUFF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QUNoQkMsUUFBUSxFQUFFLFFBQVEsQ0FBUHBCLElBQUk7Z0NBQUt0QixNQUFNLENBQU5BLFlBQVksQ0FBU0MsRUFBRSxFQUFFVSxRQUFRLEVBQUVXLElBQUk7Ozs7Ozs7Ozs4RkFFNURxQixDQUFNOzRCQUNMRixZQUFZLEVBQUUzQixVQUFVOzRCQUN4QjRCLFFBQVEsRUFBRSxRQUFRLENBQVBwQixJQUFJO2dDQUFLdEIsTUFBTSxDQUFOQSxZQUFZLENBQVNDLEVBQUUsRUFBRWEsVUFBVSxFQUFFUSxJQUFJOzs7Ozs7Ozs7cUdBQzVEc0IsQ0FBTTtvQ0FBQ3hDLEtBQUssRUFBQyxDQUFHOzs7Ozs7OzhDQUFDLENBQUM7O3FHQUNsQndDLENBQU07b0NBQUN4QyxLQUFLLEVBQUMsQ0FBSTs7Ozs7Ozs4Q0FBQyxDQUFFOztxR0FDcEJ3QyxDQUFNO29DQUFDeEMsS0FBSyxFQUFDLENBQUk7Ozs7Ozs7OENBQUMsQ0FBRTs7cUdBQ3BCd0MsQ0FBTTtvQ0FBQ3hDLEtBQUssRUFBQyxDQUFHOzs7Ozs7OzhDQUFDLENBQUM7Ozs7NkZBR3BCOEIsQ0FBTTs0QkFBQ0MsT0FBTyxFQUFFLFFBQVE7Z0NBQUZoQixNQUFNLENBQU5BLFlBQVksQ0FBQ2xCLEVBQUU7Ozs7Ozs7O3NDQUFHLENBQU07OzttQkFqQnZDQSxFQUFFOzs7O0FBdUJ0QixDQUFDO0dBeEZLRixjQUFjO0tBQWRBLGNBQWM7QUEwRnBCLCtEQUFlQSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcmVhdGUtcmVjaXBlLWNvbXBvbmVudHMvaW5ncmVkaWVudEZvcm0udHN4PzQ4MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCwgRXJyb3JNZXNzYWdlIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgSHRtbFByb3BzIH0gZnJvbSBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzXCI7XG5cbmludGVyZmFjZSBJbmdyZWRpZW50TGlzdCB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgcXVhbnRpdHk6IG51bWJlcjtcbiAgbWVzdXJlbWVudDogc3RyaW5nO1xufVxuXG5jb25zdCBpbmdyZWRpZW50VmFsaWRhdG9yID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgaW5ncmVkaWVudDogWXVwLnN0cmluZygpXG4gICAgLnJlcXVpcmVkKFwiQW4gaW5ncmVkaWVudCBpcyByZXF1aXJlZFwiKVxuICAgIC5taW4oMiwgXCJUb28gc2hvcnQhXCIpLFxufSk7XG5cbmNvbnN0IEluZ3JlZGllbnRGb3JtOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2luZ3JlZGllbnRMaXN0LCBzZXRJbmdyZWRpZW50TGlzdF0gPSB1c2VTdGF0ZTxJbmdyZWRpZW50TGlzdFtdPihbXSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKHsgaW5ncmVkaWVudCB9KTogdm9pZCA9PiB7XG4gICAgY29uc3QgY3VycmVudExpc3QgPSBbLi4uaW5ncmVkaWVudExpc3RdO1xuICAgIGNvbnN0IG5ld0luZ3JlZGllbnQ6IEluZ3JlZGllbnRMaXN0ID0ge1xuICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgbWVzdXJlbWVudDogXCJOL0FcIixcbiAgICAgIG5hbWU6IGAke2luZ3JlZGllbnR9YCxcbiAgICAgIHF1YW50aXR5OiAxLFxuICAgIH07XG4gICAgY3VycmVudExpc3QucHVzaChuZXdJbmdyZWRpZW50KTtcbiAgICBzZXRJbmdyZWRpZW50TGlzdChjdXJyZW50TGlzdCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgY3VycmVudExpc3QgPSBbLi4uaW5ncmVkaWVudExpc3RdO1xuICAgIGNvbnN0IG5ld0xpc3QgPSBjdXJyZW50TGlzdC5maWx0ZXIoKGVsZW0pID0+IGVsZW0uaWQgIT09IGlkKTtcbiAgICBzZXRJbmdyZWRpZW50TGlzdChuZXdMaXN0KTtcbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2U8VD4oaWQ6IG51bWJlciwgcGFyYW06IFQsIGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBpbmRleCA9IGluZ3JlZGllbnRMaXN0LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PSBpZCk7XG4gICAgY29uc3QgY3VycmVudExpc3QgPSBbLi4uaW5ncmVkaWVudExpc3RdO1xuXG4gICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgY29uc3QgaW5ncmVkaWVudCA9IHsgLi4uY3VycmVudExpc3RbaW5kZXhdLCBxdWFudGl0eTogcGFyc2VGbG9hdCh2YWx1ZSkgfTtcbiAgICAgIGN1cnJlbnRMaXN0W2luZGV4XSA9IGluZ3JlZGllbnQ7XG4gICAgICByZXR1cm4gc2V0SW5ncmVkaWVudExpc3QoY3VycmVudExpc3QpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGFyYW0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnN0IGluZ3JlZGllbnQgPSB7IC4uLmN1cnJlbnRMaXN0W2luZGV4XSwgbWVzdXJlbWVudDogdmFsdWUgfTtcbiAgICAgIGN1cnJlbnRMaXN0W2luZGV4XSA9IGluZ3JlZGllbnQ7XG4gICAgICByZXR1cm4gc2V0SW5ncmVkaWVudExpc3QoY3VycmVudExpc3QpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e2luZ3JlZGllbnRWYWxpZGF0b3J9XG4gICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCB7IHJlc2V0Rm9ybSwgc2V0U3VibWl0dGluZyB9KSA9PiB7XG4gICAgICAgICAgaGFuZGxlU3VibWl0KHZhbHVlcyk7XG4gICAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgIH19XG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICBpbmdyZWRpZW50OiBcIlwiLFxuICAgICAgICB9fT5cbiAgICAgICAgPEZvcm0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbmdyZWRpZW50XCI+QWRkIGluZ3JlZGllbnRzPC9sYWJlbD5cbiAgICAgICAgICA8RmllbGQgaWQ9XCJpbmdyZWRpZW50XCIgdHlwZT1cImlucHV0XCIgbmFtZT1cImluZ3JlZGllbnRcIiAvPlxuICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cImluZ3JlZGllbnRcIiAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKGluZ3JlZGllbnRMaXN0KX0+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9Gb3JtaWs+XG5cbiAgICAgIHtpbmdyZWRpZW50TGlzdC5tYXAoXG4gICAgICAgICh7IG5hbWUsIGlkLCBxdWFudGl0eSwgbWVzdXJlbWVudCB9OiBJbmdyZWRpZW50TGlzdCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpZH0+XG4gICAgICAgICAgICA8cD57bmFtZX08L3A+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIxXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlbGVtKSA9PiBoYW5kbGVDaGFuZ2U8bnVtYmVyPihpZCwgcXVhbnRpdHksIGVsZW0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXttZXN1cmVtZW50fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGVsZW0pID0+IGhhbmRsZUNoYW5nZTxzdHJpbmc+KGlkLCBtZXN1cmVtZW50LCBlbGVtKX0+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsXCI+bDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWxcIj5tbDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia2dcIj5rZzwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZ1wiPmc8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShpZCl9PmRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5ncmVkaWVudEZvcm07XG4iXSwibmFtZXMiOlsiRm9ybWlrIiwiRm9ybSIsIkZpZWxkIiwiRXJyb3JNZXNzYWdlIiwiWXVwIiwidXNlU3RhdGUiLCJ2NCIsInV1aWR2NCIsImluZ3JlZGllbnRWYWxpZGF0b3IiLCJvYmplY3QiLCJzaGFwZSIsImluZ3JlZGllbnQiLCJzdHJpbmciLCJyZXF1aXJlZCIsIm1pbiIsIkluZ3JlZGllbnRGb3JtIiwiaGFuZGxlQ2hhbmdlIiwiaWQiLCJwYXJhbSIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJpbmRleCIsImluZ3JlZGllbnRMaXN0IiwiZmluZEluZGV4IiwiaXRlbSIsImN1cnJlbnRMaXN0IiwicXVhbnRpdHkiLCJwYXJzZUZsb2F0Iiwic2V0SW5ncmVkaWVudExpc3QiLCJtZXN1cmVtZW50IiwiaGFuZGxlU3VibWl0IiwibmV3SW5ncmVkaWVudCIsIm5hbWUiLCJwdXNoIiwiaGFuZGxlRGVsZXRlIiwibmV3TGlzdCIsImZpbHRlciIsImVsZW0iLCJkaXYiLCJlbmFibGVSZWluaXRpYWxpemUiLCJ2YWxpZGF0aW9uU2NoZW1hIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJyZXNldEZvcm0iLCJzZXRTdWJtaXR0aW5nIiwiaW5pdGlhbFZhbHVlcyIsImxhYmVsIiwiaHRtbEZvciIsInR5cGUiLCJidXR0b24iLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInAiLCJpbnB1dCIsImRlZmF1bHRWYWx1ZSIsIm9uQ2hhbmdlIiwic2VsZWN0Iiwib3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/create-recipe-components/ingredientForm.tsx\n");

/***/ })

});