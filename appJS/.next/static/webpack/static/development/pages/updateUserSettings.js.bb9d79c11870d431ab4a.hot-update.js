webpackHotUpdate("static/development/pages/updateUserSettings.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./pages/updateUserSettings.js":
/*!*************************************!*\
  !*** ./pages/updateUserSettings.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/var/www/html/facial-recognition-application/shakthi.panneer/Facial-Recognition-WelcomeIn/appJS/pages/updateUserSettings.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function updateUserSettings(props) {
  {
    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
        _name = _useState[0],
        setName = _useState[1];

    var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
        _email = _useState2[0],
        setEmail = _useState2[1];

    var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
        _sms = _useState3[0],
        setSMS = _useState3[1];

    var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
        _address = _useState4[0],
        setAddress = _useState4[1];

    var _handleSubmit = function _handleSubmit(evt) {
      evt.preventDefault();
      var formData = new FormData();
      formData.append("Name", _name);
      formData.append("Email", _email);
      formData.append("SMS", _sms);
      formData.append("Address", _address);
      console.log(formData);
    };

    var _onChangeName = function _onChangeName(e) {
      setName(e.target.value);
    };

    var _onChangeEmail = function _onChangeEmail(e) {
      setEmail(e.target.value);
    };

    var _onChangeSMS = function _onChangeSMS(e) {
      setSMS(e.target.value);
    };

    var _onChangeAddress = function _onChangeAddress(e) {
      setAddress(e.target.value);
    };
  }
  return __jsx("div", {
    style: {
      paddingLeft: '8px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("div", {
    "class": " ui clearing segment",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx("h1", {
    "class": "ui header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "WelcomeIN"), __jsx("div", {
    "class": "ui inverted menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/index",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/users",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Authorized Individuals")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/footage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Footage")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/settings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "active item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "Settings"))), __jsx("div", {
    style: {
      paddingTop: '16px'
    },
    "class": "ui center aligned grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("h2", {
    "class": "ui icon header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx("i", {
    "class": "settings icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }), __jsx("div", {
    "class": "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "Update User Information", __jsx("div", {
    "class": "sub header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, "Change your account settings and e-mail preferences.")))), __jsx("div", {
    "class": "ui divider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, "Change Account Settings: "), __jsx("div", {
    style: {
      paddingLeft: '8px',
      paddingTop: '8px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("form", {
    "class": "ui form segment",
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      paddingRight: '32%',
      paddingLeft: '40%',
      paddingBottom: '8px'
    },
    "class": "field",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
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
      lineNumber: 84,
      columnNumber: 17
    }
  }))), __jsx("div", {
    style: {
      paddingRight: '32%',
      paddingLeft: '40%',
      paddingBottom: '8px'
    },
    "class": "field",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
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
      lineNumber: 89,
      columnNumber: 17
    }
  })), __jsx("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      paddingRight: '32%',
      paddingLeft: '40%',
      paddingBottom: '8px'
    },
    "class": "field",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
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
      lineNumber: 94,
      columnNumber: 17
    }
  }))), __jsx("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
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
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
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
      lineNumber: 101,
      columnNumber: 17
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/settings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx("button", {
    style: {
      marginLeft: '90%'
    },
    "class": "positive ui button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 32
    }
  }, "Save"))))) //ending page
  ;
}

/* harmony default export */ __webpack_exports__["default"] = (updateUserSettings);

/***/ })

})
//# sourceMappingURL=updateUserSettings.js.bb9d79c11870d431ab4a.hot-update.js.map