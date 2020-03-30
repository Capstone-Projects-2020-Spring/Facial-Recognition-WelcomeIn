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
      setPic("https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/91789275_3796902540350047_445788270698168320_n.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=gP6FPoLPhYoAX9GMdnG&_nc_ht=scontent-iad3-1.xx&oh=b2ce54fbd3be5efa69bb47af18069ba2&oe=5EA7C05C");
    } else if (responseGet.data[36].weather_state_name.toLowerCase().includes("rain") || responseGet.data[36].weather_state_name.toLowerCase().includes("shower")) {
      setPic("https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/91805606_3796902543683380_8138526403839655936_n.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_ohc=Yh7RICCEdUMAX-U9dUz&_nc_ht=scontent-iad3-1.xx&oh=b846e7f91baf2542ffa275f29a974d35&oe=5EA703D2");
    } else if (responseGet.data[36].weather_state_name.toLowerCase().includes("clear")) {
      setPic("https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/91473012_3796902630350038_6098355064940789760_n.jpg?_nc_cat=100&_nc_sid=8024bb&_nc_ohc=Wj8z1CBeJqgAX8NHVHG&_nc_ht=scontent-iad3-1.xx&oh=d01e337cbbb5bb02b7e6e2041d6c2568&oe=5EA74F93");
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
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx("h1", {
    "class": "ui header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, "WelcomeIN"), __jsx("div", {
    "class": "ui inverted menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("a", {
    "class": "active item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Home"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/users",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "Authroized Individuals")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/settings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "Notification Settings            ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/footage",
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
      columnNumber: 11
    }
  }, "Footage"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx("img", {
    style: {
      "float": 'left',
      width: '60%'
    },
    src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/91440986_3796902550350046_4463254156290818048_n.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_ohc=XSUfZwvhiRsAX-1dZ-l&_nc_ht=scontent-iad3-1.xx&oh=b00b74cf690c9c82040bdb4da31fe637&oe=5EA7AFB7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      "float": 'left'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, greeting, ", Shakthi!"), __jsx("div", {
    style: {
      marginLeft: '40px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, "The forecast is ", forecast == null ? __jsx("em", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 56
    }
  }, "Loading...") : forecast, "."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, "The temperature is ", temperature == null ? __jsx("em", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
      lineNumber: 80,
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
//# sourceMappingURL=index.js.ee8b765dc8d726ddc785.hot-update.js.map