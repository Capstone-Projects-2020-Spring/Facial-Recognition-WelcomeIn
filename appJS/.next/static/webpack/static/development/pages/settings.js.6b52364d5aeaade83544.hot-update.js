webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./pages/settings.js":
/*!***************************!*\
  !*** ./pages/settings.js ***!
  \***************************/
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
var _jsxFileName = "/var/www/html/facial-recognition-application/shakthi.panneer/Facial-Recognition-WelcomeIn/appJS/pages/settings.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function settings() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      list = _useState[0],
      setArray = _useState[1];

  var CancelToken = axios__WEBPACK_IMPORTED_MODULE_3___default.a.CancelToken;
  var source = CancelToken.source();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      StrangerDetection = _useState2[0],
      setStrangerDetection = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      AuthorizedDetection = _useState3[0],
      setAuthorizedDetection = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      SMS = _useState4[0],
      setSMS = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      Email = _useState5[0],
      setEmail = _useState5[1];

  var onChangeStrangerDetection = function onChangeStrangerDetection() {
    setStrangerDetection(!StrangerDetection);
  };

  var onChangeAuthorizedDetection = function onChangeAuthorizedDetection() {
    setAuthorizedDetection(!AuthorizedDetection);
  };

  var onChangeSMS = function onChangeSMS() {
    setSMS(!SMS);
  };

  var onChangeEmail = function onChangeEmail() {
    setEmail(!Email);
  };

  var togglerSubmit = function togglerSubmit() {
    var formData = new FormData();
    formData.append("strangernotifications", true);
    formData.append("authorizednotifications", true);
    formData.append("receivesms", true);
    formData.append("receiveemail", true);
    formData.append("user", "admin");
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://10.0.0.142:8007/usertogglesettings/", formData);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http://10.0.0.142:8007/userpersonalsettings/").then(function (responseGet) {
      return setArray(responseGet.data);
    });
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http://10.0.0.142:8007/usertogglesettings/").then(function (responseGetter) {
      console.log(responseGetter);
      setStrangerDetection(responseGetter.data.strangernotifications);
      setAuthorizedDetection(responseGetter.data.authorizednotifications);
      setSMS(responseGetter.data.receivesms);
      setEmail(responseGetter.data.receiveemail);
    });
  }, []);
  var name = list.name;
  var email = list.email;
  var sms = list.smsnumber;
  var address = list.houseaddress;
  return __jsx("div", {
    style: {
      paddingLeft: '8px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx("div", {
    "class": " ui clearing segment",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }), __jsx("h1", {
    "class": "ui header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "WelcomeIN"), __jsx("div", {
    "class": "ui inverted menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/index",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/users",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "Authorized Individuals")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/footage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "Footage")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/settings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "active item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx("h2", {
    "class": "ui icon header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx("i", {
    "class": "settings icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }), __jsx("div", {
    "class": "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, "Settings", __jsx("div", {
    "class": "sub header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, "Manage your account settings and set e-mail preferences.")))), __jsx("div", {
    "class": "ui divider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }), __jsx("div", {
    "class": "sub header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, " Notification Settings: "), __jsx("div", {
    style: {
      paddingLeft: '40%'
    },
    "class": "ui padded left aligned grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx("div", {
    "class": "white row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "ui toggle checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx("input", {
    checked: StrangerDetection,
    onChange: onChangeStrangerDetection,
    type: "checkbox",
    name: "public",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, "Receive Notifications if Strangers are detected."))), __jsx("div", {
    "class": "white row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "ui toggle checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx("input", {
    checked: AuthorizedDetection,
    onChange: onChangeAuthorizedDetection,
    type: "checkbox",
    name: "public",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, "Receive Notifications if Authroized Individuals are detected."))), __jsx("div", {
    "class": "white row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "ui toggle checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx("input", {
    checked: SMS,
    onChange: onChangeSMS,
    type: "checkbox",
    name: "public",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, "Receive Notifications via SMS"))), __jsx("div", {
    "class": "white row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "ui toggle checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("input", {
    checked: Email,
    onChange: onChangeEmail,
    type: "checkbox",
    name: "public",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, "Receive Notifications via E-Mail")))), __jsx("button", {
    onClick: togglerSubmit,
    style: {
      marginLeft: '90%'
    },
    "class": "positive ui button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, "Save Changes"), __jsx("div", {
    "class": "ui divider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, "Current Account Settings: "), __jsx("div", {
    style: {
      paddingLeft: '8px',
      paddingTop: '8px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      marginRight: '50%',
      paddingTop: '10px'
    },
    "class": "ui segment",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, "Name: ", name)), __jsx("div", {
    style: {
      marginRight: '50%',
      paddingTop: '10px'
    },
    "class": "ui segment",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, "E-Mail: ", email)), __jsx("div", {
    style: {
      marginRight: '50%',
      paddingTop: '10px'
    },
    "class": "ui segment",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, "SMS Number: ", sms)), __jsx("div", {
    style: {
      marginRight: '50%',
      paddingTop: '10px'
    },
    "class": "ui segment",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, "Address: ", address)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "updateUserSettings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
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
      lineNumber: 153,
      columnNumber: 41
    }
  }, "Update Information"))))) //ending page
  ;
}

/* harmony default export */ __webpack_exports__["default"] = (settings);

/***/ })

})
//# sourceMappingURL=settings.js.6b52364d5aeaade83544.hot-update.js.map