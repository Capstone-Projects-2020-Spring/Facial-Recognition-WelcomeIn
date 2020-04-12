webpackHotUpdate("static/development/pages/updateUserSettings.js",{

/***/ "./pages/updateUserSettings.js":
/*!*************************************!*\
  !*** ./pages/updateUserSettings.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/var/www/html/facial-recognition-application/shakthi.panneer/Facial-Recognition-WelcomeIn/appJS/pages/updateUserSettings.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function updateUserSettings(props) {
  {
    var _jsx, _jsx2, _jsx3;

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
        name = _useState[0],
        setName = _useState[1];

    var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
        email = _useState2[0],
        setEmail = _useState2[1];

    var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
        sms = _useState3[0],
        setSMS = _useState3[1];

    var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
        address = _useState4[0],
        setAddress = _useState4[1];

    var handleSubmit = function handleSubmit(evt) {
      evt.preventDefault();
      var formData = new FormData();
      formData.append("Name", name);
      formData.append("Email", email);
      formData.append("SMS", sms);
      formData.append("Address", address);
      console.log(formData);
    };

    var onChangeName = function onChangeName(e) {
      setName(e.target.value);
    };

    var onChangeEmail = function onChangeEmail(e) {
      setEmail(e.target.value);
    };

    var onChangeSMS = function onChangeSMS(e) {
      setSMS(e.target.value);
    };

    var onChangeAddress = function onChangeAddress(e) {
      setAddress(e.target.value);
    };

    return __jsx("div", {
      style: {
        paddingLeft: '8px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, __jsx("div", {
      "class": " ui clearing segment",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, __jsx("link", {
      rel: "stylesheet",
      href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }), __jsx("h1", {
      "class": "ui header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }, "WelcomeIN"), __jsx("div", {
      "class": "ui inverted menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/index",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/users",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: "item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, "Authorized Individuals")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/footage",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: "item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, "Footage")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/settings",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: "active item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }, "Settings"))), __jsx("div", {
      style: {
        paddingTop: '16px'
      },
      "class": "ui center aligned grid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, __jsx("h2", {
      "class": "ui icon header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }, __jsx("i", {
      "class": "settings icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }), __jsx("div", {
      "class": "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, "Update User Information", __jsx("div", {
      "class": "sub header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }, "Change your account settings and e-mail preferences.")))), __jsx("div", {
      "class": "ui divider",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }
    }, "Change Account Settings: "), __jsx("div", {
      style: {
        paddingLeft: '8px',
        paddingTop: '8px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }
    }, __jsx("form", {
      "class": "ui form segment",
      onSubmit: handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }, __jsx("div", (_jsx = {
      "class": "ui form segment",
      style: {
        paddingRight: '32%',
        paddingLeft: '40%',
        paddingBottom: '8px'
      }
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "class", "field"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }), _jsx), __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }
    }, "Name"), __jsx("input", {
      value: name,
      type: "text",
      name: "Name",
      placeholder: "Name",
      onChange: onChangeName,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }
    }))), __jsx("form", (_jsx2 = {
      "class": "ui form segment",
      style: {
        paddingRight: '32%',
        paddingLeft: '40%',
        paddingBottom: '8px'
      }
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "class", "field"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__source", {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }), _jsx2), __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }
    }, "E-mail"), __jsx("input", {
      value: email,
      type: "text",
      name: "Name",
      placeholder: "Email",
      onChange: onChangeEmail,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 21
      }
    })), __jsx("form", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    }, __jsx("div", (_jsx3 = {
      "class": "ui form segment",
      style: {
        paddingRight: '32%',
        paddingLeft: '40%',
        paddingBottom: '8px'
      }
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx3, "class", "field"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx3, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx3, "__source", {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }), _jsx3), __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      }
    }, "SMS Number"), __jsx("input", {
      type: "text",
      value: sms,
      name: "Name",
      placeholder: "Phone Number",
      onChange: onChangeSMS,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }
    }))), __jsx("form", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 13
      }
    }, __jsx("div", {
      style: {
        paddingRight: '32%',
        paddingLeft: '40%'
      },
      "class": "field",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 21
      }
    }, "Home Address"), __jsx("input", {
      value: address,
      type: "text",
      name: "Name",
      placeholder: "Address",
      onChange: onChangeAddress,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }
    }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/settings",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }
    }, __jsx("button", {
      style: {
        marginLeft: '90%'
      },
      "class": "positive ui button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 36
      }
    }, "Save"))))) //ending page
    ;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (updateUserSettings);

/***/ })

})
//# sourceMappingURL=updateUserSettings.js.b8913cf283dae2c3e16b.hot-update.js.map