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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ingredientValidator = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({\n    ingredient: yup__WEBPACK_IMPORTED_MODULE_2__.string().required(\"An ingredient is required\").min(2, \"Too short!\")\n});\nvar IngredientForm = function() {\n    var _this1 = _this;\n    var handleChange = function handleChange(id, param, event) {\n        if (typeof param === \"number\") {\n            console.log(\"Changing the quantity\");\n            var currentList = _toConsumableArray(ingredientList);\n        }\n        if (typeof param === \"string\") {\n            console.log(\"Changing the mesurement type\");\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), ingredientList = ref[0], setIngredientList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), quantity1 = ref1[0], setQuantity = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), mesurement1 = ref2[0], setMesurement = ref2[1];\n    var handleSubmit = function(param) {\n        var ingredient = param.ingredient;\n        var currentList = _toConsumableArray(ingredientList);\n        var newIngredient = {\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),\n            mesurement: \"N/A\",\n            name: \"\".concat(ingredient),\n            quantity: 0\n        };\n        currentList.push(newIngredient);\n        setIngredientList(currentList);\n        console.log(currentList);\n    };\n    var handleDelete = function(id) {\n        var currentList = _toConsumableArray(ingredientList);\n        var newList = currentList.filter(function(elem) {\n            return elem.id !== id;\n        });\n        setIngredientList(newList);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n            lineNumber: 56,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n                enableReinitialize: true,\n                validationSchema: ingredientValidator,\n                onSubmit: function(values, param) {\n                    var resetForm = param.resetForm, setSubmitting = param.setSubmitting;\n                    handleSubmit(values);\n                    resetForm();\n                    setSubmitting(false);\n                },\n                initialValues: {\n                    ingredient: \"\"\n                },\n                __source: {\n                    fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {\n                    __source: {\n                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                            htmlFor: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Add ingredients\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {\n                            id: \"ingredient\",\n                            type: \"input\",\n                            name: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, {\n                            name: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            type: \"submit\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Add\"\n                        })\n                    ]\n                })\n            }),\n            ingredientList.map(function(param) {\n                var name = param.name, id = param.id, quantity = param.quantity, mesurement = param.mesurement;\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    },\n                    __self: _this1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"number\",\n                            defaultValue: quantity,\n                            onChange: function(event) {\n                                return handleChange(id, quantity, event);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            },\n                            __self: _this1\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"select\", {\n                            defaultValue: mesurement,\n                            onChange: function(event) {\n                                return handleChange(id, mesurement, event);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"l\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"l\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"ml\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"ml\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"ml\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"kg\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"ml\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"g\"\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            onClick: function() {\n                                return handleDelete(id);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: \"delete\"\n                        })\n                    ]\n                }, id);\n            })\n        ]\n    }));\n};\n_s(IngredientForm, \"45YooUA5gviifUzct46DkmaOAcw=\");\n_c = IngredientForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IngredientForm);\nvar _c;\n$RefreshReg$(_c, \"IngredientForm\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NyZWF0ZS1yZWNpcGUtY29tcG9uZW50cy9pbmdyZWRpZW50Rm9ybS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwRDtBQUNoQztBQUNNO0FBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU25DLEdBQUssQ0FBQ1EsbUJBQW1CLEdBQUdKLHVDQUFVLEdBQUdNLEtBQUssQ0FBQyxDQUFDO0lBQzlDQyxVQUFVLEVBQUVQLHVDQUFVLEdBQ25CUyxRQUFRLENBQUMsQ0FBMkIsNEJBQ3BDQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQVk7QUFDeEIsQ0FBQztBQUVELEdBQUssQ0FBQ0MsY0FBYyxHQUFhLFFBQ2pDLEdBRHVDLENBQUM7O1FBeUI3QkMsWUFBWSxHQUFyQixRQUFRLENBQUNBLFlBQVksQ0FBQ0MsRUFBVSxFQUFFQyxLQUFzQixFQUFFQyxLQUFVLEVBQUUsQ0FBQztRQUNyRSxFQUFFLEVBQUUsTUFBTSxDQUFDRCxLQUFLLEtBQUssQ0FBUSxTQUFFLENBQUM7WUFDOUJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQXVCO1lBQ25DLEdBQUcsQ0FBQ0MsV0FBVyxzQkFBT0MsY0FBYztRQUN0QyxDQUFDO1FBRUQsRUFBRSxFQUFFLE1BQU0sQ0FBQ0wsS0FBSyxLQUFLLENBQVEsU0FBRSxDQUFDO1lBQzlCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUE4QjtRQUM1QyxDQUFDO0lBQ0gsQ0FBQzs7SUFqQ0QsR0FBSyxDQUF1Q2hCLEdBQThCLEdBQTlCQSwrQ0FBUSxDQUFtQixDQUFDLENBQUMsR0FBbEVrQixjQUFjLEdBQXVCbEIsR0FBOEIsS0FBbkRtQixpQkFBaUIsR0FBSW5CLEdBQThCO0lBQzFFLEdBQUssQ0FBMkJBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQW5Db0IsU0FBUSxHQUFpQnBCLElBQVcsS0FBMUJxQixXQUFXLEdBQUlyQixJQUFXO0lBQzNDLEdBQUssQ0FBK0JBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxD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QUFDLENBQUU7O3FHQUNwQkQsQ0FBTTtvQ0FBQ0MsS0FBSyxFQUFDLENBQUk7Ozs7Ozs7OENBQUMsQ0FBRTs7cUdBQ3BCRCxDQUFNO29DQUFDQyxLQUFLLEVBQUMsQ0FBSTs7Ozs7Ozs4Q0FBQyxDQUFDOzs7OzZGQUdyQlIsQ0FBTTs0QkFBQ1MsT0FBTyxFQUFFLFFBQVE7Z0NBQUZ4QixNQUFNLENBQU5BLFlBQVksQ0FBQ2hCLEVBQUU7Ozs7Ozs7O3NDQUFHLENBQU07OzttQkFoQnZDQSxFQUFFOzs7O0FBc0J0QixDQUFDO0dBakZLRixjQUFjO0tBQWRBLGNBQWM7QUFtRnBCLCtEQUFlQSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcmVhdGUtcmVjaXBlLWNvbXBvbmVudHMvaW5ncmVkaWVudEZvcm0udHN4PzQ4MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCwgRXJyb3JNZXNzYWdlIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbnRlcmZhY2UgSW5ncmVkaWVudExpc3Qge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIHF1YW50aXR5OiBudW1iZXI7XG4gIG1lc3VyZW1lbnQ6IHN0cmluZztcbn1cblxuY29uc3QgaW5ncmVkaWVudFZhbGlkYXRvciA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XG4gIGluZ3JlZGllbnQ6IFl1cC5zdHJpbmcoKVxuICAgIC5yZXF1aXJlZChcIkFuIGluZ3JlZGllbnQgaXMgcmVxdWlyZWRcIilcbiAgICAubWluKDIsIFwiVG9vIHNob3J0IVwiKSxcbn0pO1xuXG5jb25zdCBJbmdyZWRpZW50Rm9ybTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtpbmdyZWRpZW50TGlzdCwgc2V0SW5ncmVkaWVudExpc3RdID0gdXNlU3RhdGU8SW5ncmVkaWVudExpc3RbXT4oW10pO1xuICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbWVzdXJlbWVudCwgc2V0TWVzdXJlbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoeyBpbmdyZWRpZW50IH0pOiB2b2lkID0+IHtcbiAgICBjb25zdCBjdXJyZW50TGlzdCA9IFsuLi5pbmdyZWRpZW50TGlzdF07XG4gICAgY29uc3QgbmV3SW5ncmVkaWVudDogSW5ncmVkaWVudExpc3QgPSB7XG4gICAgICBpZDogdXVpZHY0KCksXG4gICAgICBtZXN1cmVtZW50OiBcIk4vQVwiLFxuICAgICAgbmFtZTogYCR7aW5ncmVkaWVudH1gLFxuICAgICAgcXVhbnRpdHk6IDAsXG4gICAgfTtcbiAgICBjdXJyZW50TGlzdC5wdXNoKG5ld0luZ3JlZGllbnQpO1xuICAgIHNldEluZ3JlZGllbnRMaXN0KGN1cnJlbnRMaXN0KTtcblxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRMaXN0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaWQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBjdXJyZW50TGlzdCA9IFsuLi5pbmdyZWRpZW50TGlzdF07XG4gICAgY29uc3QgbmV3TGlzdCA9IGN1cnJlbnRMaXN0LmZpbHRlcigoZWxlbSkgPT4gZWxlbS5pZCAhPT0gaWQpO1xuICAgIHNldEluZ3JlZGllbnRMaXN0KG5ld0xpc3QpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShpZDogbnVtYmVyLCBwYXJhbTogc3RyaW5nIHwgbnVtYmVyLCBldmVudDogYW55KSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2luZyB0aGUgcXVhbnRpdHlcIik7XG4gICAgICBsZXQgY3VycmVudExpc3QgPSBbLi4uaW5ncmVkaWVudExpc3RdO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGFyYW0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdpbmcgdGhlIG1lc3VyZW1lbnQgdHlwZVwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Rm9ybWlrXG4gICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZVxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtpbmdyZWRpZW50VmFsaWRhdG9yfVxuICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyByZXNldEZvcm0sIHNldFN1Ym1pdHRpbmcgfSkgPT4ge1xuICAgICAgICAgIGhhbmRsZVN1Ym1pdCh2YWx1ZXMpO1xuICAgICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICB9fVxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XG4gICAgICAgICAgaW5ncmVkaWVudDogXCJcIixcbiAgICAgICAgfX0+XG4gICAgICAgIDxGb3JtPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5ncmVkaWVudFwiPkFkZCBpbmdyZWRpZW50czwvbGFiZWw+XG4gICAgICAgICAgPEZpZWxkIGlkPVwiaW5ncmVkaWVudFwiIHR5cGU9XCJpbnB1dFwiIG5hbWU9XCJpbmdyZWRpZW50XCIgLz5cbiAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJpbmdyZWRpZW50XCIgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9Gb3JtaWs+XG5cbiAgICAgIHtpbmdyZWRpZW50TGlzdC5tYXAoXG4gICAgICAgICh7IG5hbWUsIGlkLCBxdWFudGl0eSwgbWVzdXJlbWVudCB9OiBJbmdyZWRpZW50TGlzdCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpZH0+XG4gICAgICAgICAgICA8cD57bmFtZX08L3A+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cXVhbnRpdHl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZShpZCwgcXVhbnRpdHksIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bWVzdXJlbWVudH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGlkLCBtZXN1cmVtZW50LCBldmVudCl9PlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibFwiPmw8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1sXCI+bWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1sXCI+a2c8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1sXCI+Zzwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGlkKX0+ZGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmdyZWRpZW50Rm9ybTtcbiJdLCJuYW1lcyI6WyJGb3JtaWsiLCJGb3JtIiwiRmllbGQiLCJFcnJvck1lc3NhZ2UiLCJZdXAiLCJ1c2VTdGF0ZSIsInY0IiwidXVpZHY0IiwiaW5ncmVkaWVudFZhbGlkYXRvciIsIm9iamVjdCIsInNoYXBlIiwiaW5ncmVkaWVudCIsInN0cmluZyIsInJlcXVpcmVkIiwibWluIiwiSW5ncmVkaWVudEZvcm0iLCJoYW5kbGVDaGFuZ2UiLCJpZCIsInBhcmFtIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudExpc3QiLCJpbmdyZWRpZW50TGlzdCIsInNldEluZ3JlZGllbnRMaXN0IiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsIm1lc3VyZW1lbnQiLCJzZXRNZXN1cmVtZW50IiwiaGFuZGxlU3VibWl0IiwibmV3SW5ncmVkaWVudCIsIm5hbWUiLCJwdXNoIiwiaGFuZGxlRGVsZXRlIiwibmV3TGlzdCIsImZpbHRlciIsImVsZW0iLCJkaXYiLCJlbmFibGVSZWluaXRpYWxpemUiLCJ2YWxpZGF0aW9uU2NoZW1hIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJyZXNldEZvcm0iLCJzZXRTdWJtaXR0aW5nIiwiaW5pdGlhbFZhbHVlcyIsImxhYmVsIiwiaHRtbEZvciIsInR5cGUiLCJidXR0b24iLCJtYXAiLCJwIiwiaW5wdXQiLCJkZWZhdWx0VmFsdWUiLCJvbkNoYW5nZSIsInNlbGVjdCIsIm9wdGlvbiIsInZhbHVlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/create-recipe-components/ingredientForm.tsx\n");

/***/ })

});