webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/var/www/html/facial-recognition-application/meghan.beck/Facial-Recognition-WelcomeIn/appJS/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 //import logo from './images/cloud.PNG';

function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      temperature = _useState[0],
      setTemperature = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      forecast = _useState2[0],
      setForecast = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      pic = _useState3[0],
      setPic = _useState3[1];

  var d = new Date();
  var phillyWoeId = 2471217;
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var year = d.getFullYear();
  var endURL = "" + phillyWoeId + "/" + year + "/" + month + "/" + day + "/";
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://www.metaweather.com/api/location/" + endURL).then(function (responseGet) {
    console.log(responseGet);
    setTemperature(responseGet.data[36].the_temp * (9.0 / 5) + 32.0);
    setForecast(responseGet.data[36].weather_state_name.toLowerCase());

    if (responseGet.data[36].weather_state_name.toLowerCase().includes("cloud")) {
      setPic("https://lh3.googleusercontent.com/proxy/hk9PgLyLqgM0Me1vj-EsWfAlDk2O1AYLqj1hiG-77aH-lB7oVzCUCRTgtI5FUmUG-ZURb3Y4nU3PC4cky41uuQQgj0dRNn-WNpuyXOOUkJoyaEjbX7Ne"); //setPic("https://imgur.com/8HUl7AD");
    } else if (responseGet.data[36].weather_state_name.toLowerCase().includes("rain") || responseGet.data[36].weather_state_name.toLowerCase().includes("shower")) {
      //setPic("data:image/png;base64,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");
      setPic("images/rain.jpg");
    } else if (responseGet.data[36].weather_state_name.toLowerCase().includes("clear")) {
      //setPic("data:image/png;base64,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");
      setPic("images/sun.PNG");
    }
  });
  var n = d.getHours();
  var greeting = "";

  if (n < 12) {
    greeting = "Good morning";
  } else if (n < 17) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  } //const logo = require('./images/cloud.PNG');


  return __jsx("div", {
    style: {
      paddingLeft: '8px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), __jsx("h1", {
    "class": "ui header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, "WelcomeIN"), __jsx("div", {
    "class": "ui inverted menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("a", {
    "class": "active item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Home"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/users",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, "Authroized Individuals")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/settings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "Notification Settings            ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/footage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, "Footage"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx("img", {
    style: {
      "float": 'left',
      width: '40%'
    },
    src: "https://equalrightscenter.org/wp-content/uploads/house-icon-1.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      "float": 'left'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, greeting, ", Shakthi!"), __jsx("div", {
    style: {
      marginLeft: '40px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, "The forecast is ", forecast == null ? __jsx("em", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 56
    }
  }, "Loading...") : forecast, "."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, "The temperature is ", temperature == null ? __jsx("em", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 61
    }
  }, "Loading...") : temperature, " degrees."), __jsx("img", {
    style: {
      width: '60%'
    },
    src: pic,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);
{}
/* <Link href="/footage">
<a>About Us</a>
</Link> */
// Page.getInitialProps = async ctx => {
//   const res = await fetch('http://0.0.0.0:8007/footage/')
//   console.log(res);
//   return { img }
// }
// How to get video source from server 
//<video> <source src= 'http://0.0.0.0:8007/footage/' autoplay type="video/mp4"></source></video>

/***/ })

})
//# sourceMappingURL=index.js.66131bbd562e518d6557.hot-update.js.map