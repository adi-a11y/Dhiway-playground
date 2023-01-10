"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/verify";
exports.ids = ["pages/verify"];
exports.modules = {

/***/ "./pages/verify.js":
/*!*************************!*\
  !*** ./pages/verify.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ \"sweetalert\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nclass Verify extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    state = {\n        vc: \"\"\n    };\n    onClick = (event)=>{\n        event.preventDefault();\n        const url = \"https://agent.demo.dhiway.com/api/v1/verify\";\n        try {\n            let vcCheck = {\n                \"vc\": JSON.parse(this.state.vc)\n            };\n            const response = fetch(url, {\n                credentials: \"include\",\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(vcCheck)\n            }).then(function(response) {\n                return response.json();\n            }).then(function(data) {\n                let count = 0;\n                if (data.signature.verified == true) count++;\n                if (data.stream.verified == true) count++;\n                if (data.digest.verified == true) count++;\n                if (count == 3) {\n                    sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({\n                        title: \"Verified!\",\n                        text: \"This credential has been verified\",\n                        icon: \"success\"\n                    });\n                } else {\n                    sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({\n                        title: \"Not verified!\",\n                        text: \"This credential has not been verified\",\n                        icon: \"error\"\n                    });\n                }\n            });\n        } catch (error) {\n            alert(\"Please make sure that you enter the VC in the correct format\");\n        }\n    };\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                textAlign: \"center\",\n                backgroundColor: \"#dededc\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        backgroundColor: \"#0A2F41\",\n                        color: \"white\",\n                        padding: \"30px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            style: {\n                                letterSpacing: \"2px\",\n                                margin: \"0px\"\n                            },\n                            children: \"Dhiway playground\"\n                        }, void 0, false, {\n                            fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"../static/dhiway-squarelogo-1664445115275-removebg-preview.png\",\n                            style: {\n                                position: \"absolute\",\n                                top: 35,\n                                left: 25\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            style: {\n                                letterSpacing: \"0.12rem\",\n                                margin: \"35px\"\n                            },\n                            children: [\n                                \"A verifiable credential (VC) is an open standard for digital credentials. \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 148\n                                }, this),\n                                \"This playground was built to enable learning and usage.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                primary: true,\n                                style: {\n                                    width: \"100px\",\n                                    height: \"35px\",\n                                    borderRadius: \"5px\",\n                                    backgroundColor: \"#3399CC\",\n                                    color: \"white\",\n                                    position: \"absolute\",\n                                    top: 15,\n                                    right: 15,\n                                    marginBottom: \"25px\"\n                                },\n                                children: \"Go to issue\"\n                            }, void 0, false, {\n                                fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                                lineNumber: 66,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                style: {\n                                    letterSpacing: \"2px\",\n                                    margin: \"20px\"\n                                },\n                                children: \"Verify Credential\"\n                            }, void 0, false, {\n                                fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                                lineNumber: 69,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            style: {\n                                fontSize: \"1.2rem\"\n                            },\n                            children: \"Enter the credential\"\n                        }, void 0, false, {\n                            fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                            lineNumber: 73,\n                            columnNumber: 78\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {\n                        onSubmit: this.onClick,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    style: {\n                                        width: \"30cm\",\n                                        height: \"8cm\"\n                                    },\n                                    value: this.state.vc,\n                                    onChange: (event)=>this.setState({\n                                            vc: event.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                                lineNumber: 77,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                                lineNumber: 84,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                primary: true,\n                                style: {\n                                    width: \"100px\",\n                                    height: \"35px\",\n                                    borderRadius: \"5px\",\n                                    backgroundColor: \"#3399CC\",\n                                    color: \"white\",\n                                    marginBottom: \"25px\"\n                                },\n                                children: \"Verify\"\n                            }, void 0, false, {\n                                fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                                lineNumber: 85,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                        lineNumber: 76,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                    lineNumber: 75,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        backgroundColor: \"#0A2F41\",\n                        height: \"90px\",\n                        padding: \"40px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                style: {\n                                    color: \"white\"\n                                },\n                                children: \"Dhayway playground\"\n                            }, void 0, false, {\n                                fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                                lineNumber: 90,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: \"white\"\n                                },\n                                children: \"Copyright \\xa9 2019 All Rights Reserved.\"\n                            }, void 0, false, {\n                                fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                                lineNumber: 91,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                        lineNumber: 89,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n                    lineNumber: 88,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/adibhagavath/blockchain/dhiway/issue-4/pages/verify.js\",\n            lineNumber: 60,\n            columnNumber: 13\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Verify);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92ZXJpZnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUM7QUFDb0I7QUFDL0I7QUFFOUIsTUFBTU8sZUFBZU4sNENBQVNBO0lBQzFCTyxRQUFRO1FBQ0pDLElBQUc7SUFDUCxFQUFFO0lBRUZDLFVBQVUsQ0FBQ0MsUUFBVTtRQUNqQkEsTUFBTUMsY0FBYztRQUNwQixNQUFNQyxNQUFNO1FBQ1osSUFBRztZQUNDLElBQUlDLFVBQVM7Z0JBQ1QsTUFBTUMsS0FBS0MsS0FBSyxDQUFDLElBQUksQ0FBQ1IsS0FBSyxDQUFDQyxFQUFFO1lBQ2xDO1lBQ0EsTUFBTVEsV0FBV0MsTUFBTUwsS0FBSztnQkFDNUJNLGFBQWE7Z0JBQ2JDLFFBQVM7Z0JBQ1RDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTVAsS0FBS1EsU0FBUyxDQUFDVDtZQUNyQixHQUNDVSxJQUFJLENBQUMsU0FBU1AsUUFBUSxFQUFDO2dCQUNwQixPQUFPQSxTQUFTUSxJQUFJO1lBQUUsR0FDekJELElBQUksQ0FBQyxTQUFTRSxJQUFJLEVBQUM7Z0JBQ2hCLElBQUlDLFFBQVE7Z0JBQ1osSUFBR0QsS0FBS0UsU0FBUyxDQUFDQyxRQUFRLElBQUksSUFBSSxFQUM5QkY7Z0JBQ0osSUFBR0QsS0FBS0ksTUFBTSxDQUFDRCxRQUFRLElBQUksSUFBSSxFQUMzQkY7Z0JBQ0osSUFBR0QsS0FBS0ssTUFBTSxDQUFDRixRQUFRLElBQUksSUFBSSxFQUMzQkY7Z0JBQ0osSUFBR0EsU0FBUSxHQUFHO29CQUNWckIsaURBQUlBLENBQUM7d0JBQ0QwQixPQUFPO3dCQUNQQyxNQUFNO3dCQUNOQyxNQUFNO29CQUNWO2dCQUNKLE9BQ0k7b0JBQ0E1QixpREFBSUEsQ0FBQzt3QkFDRDBCLE9BQU87d0JBQ1BDLE1BQU07d0JBQ05DLE1BQU07b0JBQ1Y7Z0JBQ0osQ0FBQztZQUVMO1FBQ0osRUFDQSxPQUFNQyxPQUFNO1lBQ1JDLE1BQU07UUFDVjtJQUdKLEVBQUM7SUFDREMsU0FBUTtRQUNKLHFCQUNJLDhEQUFDQztZQUFJQyxPQUFPO2dCQUFDQyxXQUFVO2dCQUFVQyxpQkFBZ0I7WUFBUzs7OEJBQ3RELDhEQUFDSDtvQkFBSUMsT0FBTzt3QkFBQ0UsaUJBQWdCO3dCQUFXQyxPQUFNO3dCQUFTQyxTQUFRO29CQUFNOztzQ0FDakUsOERBQUNDOzRCQUFHTCxPQUFPO2dDQUFDTSxlQUFjO2dDQUFPQyxRQUFPOzRCQUFLO3NDQUFHOzs7Ozs7c0NBQ2hELDhEQUFDQzs0QkFBSUMsS0FBSTs0QkFBaUVULE9BQU87Z0NBQUNVLFVBQVU7Z0NBQVlDLEtBQUk7Z0NBQUdDLE1BQUs7NEJBQUU7Ozs7OztzQ0FDdEgsOERBQUNDOzRCQUFHYixPQUFPO2dDQUFDTSxlQUFjO2dDQUFXQyxRQUFPOzRCQUFNOztnQ0FBRzs4Q0FBMEUsOERBQUNPOzs7OztnQ0FBUTs7Ozs7OztzQ0FDeEksOERBQUNDOzRCQUFFQyxNQUFLO3NDQUNSLDRFQUFDcEQscURBQU1BO2dDQUFDcUQsT0FBTztnQ0FBQ2pCLE9BQU87b0NBQUNrQixPQUFNO29DQUFTQyxRQUFPO29DQUFRQyxjQUFhO29DQUFPbEIsaUJBQWdCO29DQUFXQyxPQUFNO29DQUFTTyxVQUFVO29DQUFZQyxLQUFJO29DQUFJVSxPQUFNO29DQUFJQyxjQUFhO2dDQUFNOzBDQUFHOzs7Ozs7Ozs7OztzQ0FFbEwsOERBQUN2QjtzQ0FDRyw0RUFBQ3dCO2dDQUFHdkIsT0FBTztvQ0FBQ00sZUFBYztvQ0FBTUMsUUFBTztnQ0FBTTswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR3hELDhEQUFDUjs7c0NBQ0csOERBQUNNOzRCQUFHTCxPQUFPO2dDQUFDd0IsVUFBUzs0QkFBUTtzQ0FBRzs7Ozs7O3NDQUF5Qiw4REFBQ1Y7Ozs7Ozs7Ozs7OzhCQUU5RCw4REFBQ2Y7OEJBQ0csNEVBQUNwQyxtREFBSUE7d0JBQUM4RCxVQUFVLElBQUksQ0FBQ3RELE9BQU87OzBDQUN4Qiw4REFBQ1IseURBQVU7MENBQ1AsNEVBQUNnRTtvQ0FDRzNCLE9BQU87d0NBQUNrQixPQUFPO3dDQUFRQyxRQUFRO29DQUFLO29DQUNwQ1MsT0FBTyxJQUFJLENBQUMzRCxLQUFLLENBQUNDLEVBQUU7b0NBQ3BCMkQsVUFBVXpELENBQUFBLFFBQVMsSUFBSSxDQUFDMEQsUUFBUSxDQUFDOzRDQUFDNUQsSUFBR0UsTUFBTTJELE1BQU0sQ0FBQ0gsS0FBSzt3Q0FBQTs7Ozs7Ozs7Ozs7MENBRy9ELDhEQUFDZDs7Ozs7MENBQ0QsOERBQUNsRCxxREFBTUE7Z0NBQUNxRCxPQUFPO2dDQUFDakIsT0FBTztvQ0FBQ2tCLE9BQU07b0NBQVNDLFFBQU87b0NBQVFDLGNBQWE7b0NBQU9sQixpQkFBZ0I7b0NBQVdDLE9BQU07b0NBQVNtQixjQUFhO2dDQUFNOzBDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHbEosOERBQUN2QjtvQkFBSUMsT0FBTzt3QkFBQ0UsaUJBQWdCO3dCQUFXaUIsUUFBTzt3QkFBUWYsU0FBUTtvQkFBTTs4QkFDakUsNEVBQUM0Qjs7MENBQ0csOERBQUNUO2dDQUFHdkIsT0FBTztvQ0FBQ0csT0FBTTtnQ0FBTzswQ0FBRzs7Ozs7OzBDQUM1Qiw4REFBQzhCO2dDQUFFakMsT0FBTztvQ0FBQ0csT0FBTTtnQ0FBTzswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNL0M7QUFDSjtBQUVBLGlFQUFlbkMsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lzc3VlNC8uL3BhZ2VzL3ZlcmlmeS5qcz85OTk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Zvcm0sQnV0dG9uLElucHV0LFRleHRBcmVhfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0JztcblxuY2xhc3MgVmVyaWZ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdmM6JycsXG4gICAgfTtcbiAgICBcbiAgICBvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9hZ2VudC5kZW1vLmRoaXdheS5jb20vYXBpL3YxL3ZlcmlmeVwiO1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBsZXQgdmNDaGVjayA9e1xuICAgICAgICAgICAgICAgIFwidmNcIjogSlNPTi5wYXJzZSh0aGlzLnN0YXRlLnZjKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgICAgICAgICAgIG1ldGhvZDogICdQT1NUJywgXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2Y0NoZWNrKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSl7IFxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCl9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICBpZihkYXRhLnNpZ25hdHVyZS52ZXJpZmllZCA9PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIGlmKGRhdGEuc3RyZWFtLnZlcmlmaWVkID09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgaWYoZGF0YS5kaWdlc3QudmVyaWZpZWQgPT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICBpZihjb3VudCA9PTMgKXtcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJWZXJpZmllZCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiVGhpcyBjcmVkZW50aWFsIGhhcyBiZWVuIHZlcmlmaWVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTm90IHZlcmlmaWVkIVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJUaGlzIGNyZWRlbnRpYWwgaGFzIG5vdCBiZWVuIHZlcmlmaWVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBtYWtlIHN1cmUgdGhhdCB5b3UgZW50ZXIgdGhlIFZDIGluIHRoZSBjb3JyZWN0IGZvcm1hdFwiKTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJywgYmFja2dyb3VuZENvbG9yOicjZGVkZWRjJ319PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6JyMwQTJGNDEnLCBjb2xvcjond2hpdGUnLCBwYWRkaW5nOiczMHB4J319PlxuICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3tsZXR0ZXJTcGFjaW5nOicycHgnLCBtYXJnaW46JzBweCd9fT5EaGl3YXkgcGxheWdyb3VuZDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuLi9zdGF0aWMvZGhpd2F5LXNxdWFyZWxvZ28tMTY2NDQ0NTExNTI3NS1yZW1vdmViZy1wcmV2aWV3LnBuZycgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOjM1LGxlZnQ6MjV9fS8+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e2xldHRlclNwYWNpbmc6JzAuMTJyZW0nLCBtYXJnaW46JzM1cHgnfX0+QSB2ZXJpZmlhYmxlIGNyZWRlbnRpYWwgKFZDKSBpcyBhbiBvcGVuIHN0YW5kYXJkIGZvciBkaWdpdGFsIGNyZWRlbnRpYWxzLiA8YnI+PC9icj5UaGlzIHBsYXlncm91bmQgd2FzIGJ1aWx0IHRvIGVuYWJsZSBsZWFybmluZyBhbmQgdXNhZ2UuPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IHN0eWxlPXt7d2lkdGg6JzEwMHB4JywgaGVpZ2h0OiczNXB4JywgYm9yZGVyUmFkaXVzOic1cHgnLCBiYWNrZ3JvdW5kQ29sb3I6JyMzMzk5Q0MnLCBjb2xvcjond2hpdGUnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOjE1LCByaWdodDoxNSwgbWFyZ2luQm90dG9tOicyNXB4J319PkdvIHRvIGlzc3VlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e2xldHRlclNwYWNpbmc6JzJweCcsbWFyZ2luOicyMHB4J319PlZlcmlmeSBDcmVkZW50aWFsPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17e2ZvbnRTaXplOicxLjJyZW0nfX0+RW50ZXIgdGhlIGNyZWRlbnRpYWw8L2gxPjxici8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25DbGlja30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIzMGNtXCIsIGhlaWdodDogXCI4Y21cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7dmM6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc3R5bGU9e3t3aWR0aDonMTAwcHgnLCBoZWlnaHQ6JzM1cHgnLCBib3JkZXJSYWRpdXM6JzVweCcsIGJhY2tncm91bmRDb2xvcjonIzMzOTlDQycsIGNvbG9yOid3aGl0ZScsIG1hcmdpbkJvdHRvbTonMjVweCd9fT5WZXJpZnk8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6JyMwQTJGNDEnLCBoZWlnaHQ6JzkwcHgnLCBwYWRkaW5nOic0MHB4J319PlxuICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7Y29sb3I6J3doaXRlJ319PkRoYXl3YXkgcGxheWdyb3VuZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOid3aGl0ZSd9fT5Db3B5cmlnaHQgJmNvcHk7IDIwMTkgQWxsIFJpZ2h0cyBSZXNlcnZlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlcmlmeTsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJUZXh0QXJlYSIsInN3YWwiLCJWZXJpZnkiLCJzdGF0ZSIsInZjIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1cmwiLCJ2Y0NoZWNrIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2UiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJzdHJpbmdpZnkiLCJ0aGVuIiwianNvbiIsImRhdGEiLCJjb3VudCIsInNpZ25hdHVyZSIsInZlcmlmaWVkIiwic3RyZWFtIiwiZGlnZXN0IiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsImVycm9yIiwiYWxlcnQiLCJyZW5kZXIiLCJkaXYiLCJzdHlsZSIsInRleHRBbGlnbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwicGFkZGluZyIsImgxIiwibGV0dGVyU3BhY2luZyIsIm1hcmdpbiIsImltZyIsInNyYyIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImgzIiwiYnIiLCJhIiwiaHJlZiIsInByaW1hcnkiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInJpZ2h0IiwibWFyZ2luQm90dG9tIiwiaDIiLCJmb250U2l6ZSIsIm9uU3VibWl0IiwiRmllbGQiLCJ0ZXh0YXJlYSIsInZhbHVlIiwib25DaGFuZ2UiLCJzZXRTdGF0ZSIsInRhcmdldCIsImZvb3RlciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/verify.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "sweetalert":
/*!*****************************!*\
  !*** external "sweetalert" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("sweetalert");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/verify.js"));
module.exports = __webpack_exports__;

})();