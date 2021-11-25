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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ingredientValidator = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({\n    ingredient: yup__WEBPACK_IMPORTED_MODULE_2__.string().required(\"An ingredient is required\").min(2, \"Too short!\")\n});\nvar IngredientForm = function() {\n    var _this1 = _this;\n    var handleChange = // function handleChange(id: number, param: string | number, event: any): void {\n    //   const value = event.target.value;\n    //   const index = ingredientList.findIndex((item) => item.id == id);\n    //   console.log(typeof value);\n    //   const currentList = [...ingredientList];\n    //   if (typeof param === \"number\") {\n    //     console.log(\"Affecting quantity only\");\n    //     const ingredient = { ...currentList[index], quantity: value };\n    //     console.log(ingredient);\n    //     currentList[index] = ingredient;\n    //     return setIngredientList(currentList);\n    //   }\n    //   if (typeof param === \"string\") {\n    //     console.log(\"Wants to affect the mesurement\");\n    //     const ingredient = { ...currentList[index], mesurement: value };\n    //     console.log(ingredient);\n    //     currentList[index] = ingredient;\n    //     return setIngredientList(currentList);\n    //   }\n    // }\n    function handleChange(id, param, event) {\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), ingredientList = ref[0], setIngredientList = ref[1];\n    var handleSubmit = function(param) {\n        var ingredient = param.ingredient;\n        var currentList = _toConsumableArray(ingredientList);\n        var newIngredient = {\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),\n            mesurement: \"N/A\",\n            name: \"\".concat(ingredient),\n            quantity: 1\n        };\n        currentList.push(newIngredient);\n        setIngredientList(currentList);\n    };\n    var handleDelete = function(id) {\n        var currentList = _toConsumableArray(ingredientList);\n        var newList = currentList.filter(function(elem) {\n            return elem.id !== id;\n        });\n        setIngredientList(newList);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n            lineNumber: 67,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n                enableReinitialize: true,\n                validationSchema: ingredientValidator,\n                onSubmit: function(values, param) {\n                    var resetForm = param.resetForm, setSubmitting = param.setSubmitting;\n                    handleSubmit(values);\n                    resetForm();\n                    setSubmitting(false);\n                },\n                initialValues: {\n                    ingredient: \"\"\n                },\n                __source: {\n                    fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {\n                    __source: {\n                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                            htmlFor: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Add ingredients\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {\n                            id: \"ingredient\",\n                            type: \"input\",\n                            name: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, {\n                            name: \"ingredient\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            type: \"submit\",\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Add\"\n                        })\n                    ]\n                })\n            }),\n            ingredientList.map(function(param) {\n                var name = param.name, id = param.id, quantity = param.quantity, mesurement = param.mesurement;\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    },\n                    __self: _this1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"number\",\n                            min: \"1\",\n                            onChange: function(value) {\n                                return handleChange(id, quantity, value);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            },\n                            __self: _this1\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"select\", {\n                            defaultValue: mesurement,\n                            onChange: function(value) {\n                                return handleChange(id, mesurement, value);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"l\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"l\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"ml\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"ml\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"kg\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"kg\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                    value: \"g\",\n                                    __source: {\n                                        fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"g\"\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            onClick: function() {\n                                return handleDelete(id);\n                            },\n                            __source: {\n                                fileName: \"/Users/maxbalej/Documents/dev/foodtree/components/create-recipe-components/ingredientForm.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: \"delete\"\n                        })\n                    ]\n                }, id);\n            })\n        ]\n    }));\n};\n_s(IngredientForm, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = IngredientForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IngredientForm);\nvar _c;\n$RefreshReg$(_c, \"IngredientForm\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NyZWF0ZS1yZWNpcGUtY29tcG9uZW50cy9pbmdyZWRpZW50Rm9ybS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwRDtBQUNoQztBQUNNO0FBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVW5DLEdBQUssQ0FBQ1EsbUJBQW1CLEdBQUdKLHVDQUFVLEdBQUdNLEtBQUssQ0FBQyxDQUFDO0lBQzlDQyxVQUFVLEVBQUVQLHVDQUFVLEdBQ25CUyxRQUFRLENBQUMsQ0FBMkIsNEJBQ3BDQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQVk7QUFDeEIsQ0FBQztBQUVELEdBQUssQ0FBQ0MsY0FBYyxHQUFhLFFBQ2pDLEdBRHVDLENBQUM7O1FBNEM3QkMsWUFBWSxHQXZCckIsRUFBZ0Y7SUFDaEYsRUFBc0M7SUFDdEMsRUFBcUU7SUFDckUsRUFBK0I7SUFDL0IsRUFBNkM7SUFFN0MsRUFBcUM7SUFDckMsRUFBOEM7SUFDOUMsRUFBcUU7SUFDckUsRUFBK0I7SUFDL0IsRUFBdUM7SUFDdkMsRUFBNkM7SUFDN0MsRUFBTTtJQUVOLEVBQXFDO0lBQ3JDLEVBQXFEO0lBQ3JELEVBQXVFO0lBQ3ZFLEVBQStCO0lBQy9CLEVBQXVDO0lBQ3ZDLEVBQTZDO0lBQzdDLEVBQU07SUFDTixFQUFJO0lBRUosUUFBUSxDQUFDQSxZQUFZLENBQUlDLEVBQVUsRUFBRUMsS0FBUSxFQUFFQyxLQUFVLEVBQVEsQ0FBQztJQUFBLENBQUM7O0lBM0NuRSxHQUFLLENBQXVDZCxHQUE4QixHQUE5QkEsK0NBQVEsQ0FBbUIsQ0FBQyxDQUFDLEdBQWxFZSxjQUFjLEdBQXVCZixHQUE4QixLQUFuRGdCLGlCQUFpQixHQUFJaEIsR0FBOEI7SUFFMUUsR0FBSyxDQUFDaUIsWUFBWSxHQUFHLFFBQVEsUUFBa0IsQ0FBQztZQUF4QlgsVUFBVSxTQUFWQSxVQUFVO1FBQ2hDLEdBQUssQ0FBQ1ksV0FBVyxzQkFBT0gsY0FBYztRQUN0QyxHQUFLLENBQUNJLGFBQWEsR0FBbUIsQ0FB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O0FBc0J0QixDQUFDO0dBM0ZLRixjQUFjO0tBQWRBLGNBQWM7QUE2RnBCLCtEQUFlQSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcmVhdGUtcmVjaXBlLWNvbXBvbmVudHMvaW5ncmVkaWVudEZvcm0udHN4PzQ4MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCwgRXJyb3JNZXNzYWdlIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgSHRtbFByb3BzIH0gZnJvbSBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzXCI7XG5cbmludGVyZmFjZSBJbmdyZWRpZW50TGlzdCB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgcXVhbnRpdHk6IG51bWJlcjtcbiAgbWVzdXJlbWVudDogc3RyaW5nO1xufVxuXG5jb25zdCBpbmdyZWRpZW50VmFsaWRhdG9yID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgaW5ncmVkaWVudDogWXVwLnN0cmluZygpXG4gICAgLnJlcXVpcmVkKFwiQW4gaW5ncmVkaWVudCBpcyByZXF1aXJlZFwiKVxuICAgIC5taW4oMiwgXCJUb28gc2hvcnQhXCIpLFxufSk7XG5cbmNvbnN0IEluZ3JlZGllbnRGb3JtOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2luZ3JlZGllbnRMaXN0LCBzZXRJbmdyZWRpZW50TGlzdF0gPSB1c2VTdGF0ZTxJbmdyZWRpZW50TGlzdFtdPihbXSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKHsgaW5ncmVkaWVudCB9KTogdm9pZCA9PiB7XG4gICAgY29uc3QgY3VycmVudExpc3QgPSBbLi4uaW5ncmVkaWVudExpc3RdO1xuICAgIGNvbnN0IG5ld0luZ3JlZGllbnQ6IEluZ3JlZGllbnRMaXN0ID0ge1xuICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgbWVzdXJlbWVudDogXCJOL0FcIixcbiAgICAgIG5hbWU6IGAke2luZ3JlZGllbnR9YCxcbiAgICAgIHF1YW50aXR5OiAxLFxuICAgIH07XG4gICAgY3VycmVudExpc3QucHVzaChuZXdJbmdyZWRpZW50KTtcbiAgICBzZXRJbmdyZWRpZW50TGlzdChjdXJyZW50TGlzdCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgY3VycmVudExpc3QgPSBbLi4uaW5ncmVkaWVudExpc3RdO1xuICAgIGNvbnN0IG5ld0xpc3QgPSBjdXJyZW50TGlzdC5maWx0ZXIoKGVsZW0pID0+IGVsZW0uaWQgIT09IGlkKTtcbiAgICBzZXRJbmdyZWRpZW50TGlzdChuZXdMaXN0KTtcbiAgfTtcblxuICAvLyBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoaWQ6IG51bWJlciwgcGFyYW06IHN0cmluZyB8IG51bWJlciwgZXZlbnQ6IGFueSk6IHZvaWQge1xuICAvLyAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAvLyAgIGNvbnN0IGluZGV4ID0gaW5ncmVkaWVudExpc3QuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09IGlkKTtcbiAgLy8gICBjb25zb2xlLmxvZyh0eXBlb2YgdmFsdWUpO1xuICAvLyAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gWy4uLmluZ3JlZGllbnRMaXN0XTtcblxuICAvLyAgIGlmICh0eXBlb2YgcGFyYW0gPT09IFwibnVtYmVyXCIpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiQWZmZWN0aW5nIHF1YW50aXR5IG9ubHlcIik7XG4gIC8vICAgICBjb25zdCBpbmdyZWRpZW50ID0geyAuLi5jdXJyZW50TGlzdFtpbmRleF0sIHF1YW50aXR5OiB2YWx1ZSB9O1xuICAvLyAgICAgY29uc29sZS5sb2coaW5ncmVkaWVudCk7XG4gIC8vICAgICBjdXJyZW50TGlzdFtpbmRleF0gPSBpbmdyZWRpZW50O1xuICAvLyAgICAgcmV0dXJuIHNldEluZ3JlZGllbnRMaXN0KGN1cnJlbnRMaXN0KTtcbiAgLy8gICB9XG5cbiAgLy8gICBpZiAodHlwZW9mIHBhcmFtID09PSBcInN0cmluZ1wiKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhcIldhbnRzIHRvIGFmZmVjdCB0aGUgbWVzdXJlbWVudFwiKTtcbiAgLy8gICAgIGNvbnN0IGluZ3JlZGllbnQgPSB7IC4uLmN1cnJlbnRMaXN0W2luZGV4XSwgbWVzdXJlbWVudDogdmFsdWUgfTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGluZ3JlZGllbnQpO1xuICAvLyAgICAgY3VycmVudExpc3RbaW5kZXhdID0gaW5ncmVkaWVudDtcbiAgLy8gICAgIHJldHVybiBzZXRJbmdyZWRpZW50TGlzdChjdXJyZW50TGlzdCk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlPFQ+KGlkOiBudW1iZXIsIHBhcmFtOiBULCBldmVudDogYW55KTogdm9pZCB7fVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e2luZ3JlZGllbnRWYWxpZGF0b3J9XG4gICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCB7IHJlc2V0Rm9ybSwgc2V0U3VibWl0dGluZyB9KSA9PiB7XG4gICAgICAgICAgaGFuZGxlU3VibWl0KHZhbHVlcyk7XG4gICAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgIH19XG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICBpbmdyZWRpZW50OiBcIlwiLFxuICAgICAgICB9fT5cbiAgICAgICAgPEZvcm0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbmdyZWRpZW50XCI+QWRkIGluZ3JlZGllbnRzPC9sYWJlbD5cbiAgICAgICAgICA8RmllbGQgaWQ9XCJpbmdyZWRpZW50XCIgdHlwZT1cImlucHV0XCIgbmFtZT1cImluZ3JlZGllbnRcIiAvPlxuICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cImluZ3JlZGllbnRcIiAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZDwvYnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0Zvcm1paz5cblxuICAgICAge2luZ3JlZGllbnRMaXN0Lm1hcChcbiAgICAgICAgKHsgbmFtZSwgaWQsIHF1YW50aXR5LCBtZXN1cmVtZW50IH06IEluZ3JlZGllbnRMaXN0KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2lkfT5cbiAgICAgICAgICAgIDxwPntuYW1lfTwvcD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZShpZCwgcXVhbnRpdHksIHZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bWVzdXJlbWVudH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKGlkLCBtZXN1cmVtZW50LCB2YWx1ZSl9PlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibFwiPmw8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1sXCI+bWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImtnXCI+a2c8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImdcIj5nPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoaWQpfT5kZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZ3JlZGllbnRGb3JtO1xuIl0sIm5hbWVzIjpbIkZvcm1payIsIkZvcm0iLCJGaWVsZCIsIkVycm9yTWVzc2FnZSIsIll1cCIsInVzZVN0YXRlIiwidjQiLCJ1dWlkdjQiLCJpbmdyZWRpZW50VmFsaWRhdG9yIiwib2JqZWN0Iiwic2hhcGUiLCJpbmdyZWRpZW50Iiwic3RyaW5nIiwicmVxdWlyZWQiLCJtaW4iLCJJbmdyZWRpZW50Rm9ybSIsImhhbmRsZUNoYW5nZSIsImlkIiwicGFyYW0iLCJldmVudCIsImluZ3JlZGllbnRMaXN0Iiwic2V0SW5ncmVkaWVudExpc3QiLCJoYW5kbGVTdWJtaXQiLCJjdXJyZW50TGlzdCIsIm5ld0luZ3JlZGllbnQiLCJtZXN1cmVtZW50IiwibmFtZSIsInF1YW50aXR5IiwicHVzaCIsImhhbmRsZURlbGV0ZSIsIm5ld0xpc3QiLCJmaWx0ZXIiLCJlbGVtIiwiZGl2IiwiZW5hYmxlUmVpbml0aWFsaXplIiwidmFsaWRhdGlvblNjaGVtYSIsIm9uU3VibWl0IiwidmFsdWVzIiwicmVzZXRGb3JtIiwic2V0U3VibWl0dGluZyIsImluaXRpYWxWYWx1ZXMiLCJsYWJlbCIsImh0bWxGb3IiLCJ0eXBlIiwiYnV0dG9uIiwibWFwIiwicCIsImlucHV0Iiwib25DaGFuZ2UiLCJ2YWx1ZSIsInNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/create-recipe-components/ingredientForm.tsx\n");

/***/ })

});