(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module.js */ "./src/module.js");
/* harmony import */ var _command_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./command.css */ "./src/command.css");
/* harmony import */ var _same_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./same.css */ "./src/same.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _font_3207587_zixofqh46on_iconfont_ttf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./font_3207587_zixofqh46on/iconfont.ttf */ "./src/font_3207587_zixofqh46on/iconfont.ttf");
/* harmony import */ var _font_3207587_zixofqh46on_iconfont_woff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./font_3207587_zixofqh46on/iconfont.woff */ "./src/font_3207587_zixofqh46on/iconfont.woff");
/* harmony import */ var _font_3207587_zixofqh46on_iconfont_woff2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./font_3207587_zixofqh46on/iconfont.woff2 */ "./src/font_3207587_zixofqh46on/iconfont.woff2");








 // 确认状态 单页面操作

(0,_module_js__WEBPACK_IMPORTED_MODULE_2__.new_state)();

function user() {
  var user = document.querySelector(".user");

  if (localStorage.getItem("token")) {
    user.children[0].remove();
    user.children[1].remove();
    user.insertAdjacentHTML("afterbegin", " \n        \n        <li> <a href = \"javascript:;\" class = \"login_btn\" >\u6B22\u8FCE\u60A8\uFF01</a><span>|</span ></li> \n        <li><a href = \"javascript:;\" class = \"login_btn\" id=\"over\" >\u9000\u51FA</a><span>|</span ></li>");
    var over = document.querySelector("#over");
    over.addEventListener("click", function () {
      localStorage.clear();
      window.location.reload();
    });
  }
}

user(); // 购物车

function car() {
  return _car.apply(this, arguments);
} // car();
// 购物车
// // 生成 所有商品
// ;
// (async() => {
//     let goods = document.querySelector(".goods")
//     let res = await post_goods("shopData")
//     res.forEach((e, index) => {
//         goods.insertAdjacentHTML("beforeend",
//             ` <li id="${index}">
//             <a href="javascript:;"><img src="${e.imageUrl}" alt="">
//              <div class="now_buy"> 立 即 购 买</div>
//              <ul  style="display: none;">
//                 <li>${e.id}</li>
//                 <li>${e.imageUrl}</li>
//                 <li>${e.name}</li>
//                 <li>${e.brand}</li>
//                 <li>${e.sales}</li>
//                 <li>${e.color}</li>
//                 <li>${e.cost}</li>
//               </ul>
//                 <h3>商品名: ${e.name} </h3>
//                 <h3>品牌名:${e.brand}</h3>
//                 <h3>初始销量:${e.sales}</h3>
//                 <h5>颜色:${e.color}</h5>
//                 <h4>$${e.cost}</h4>
//               </a>
//            </li>`)
//     });
//     // 加入购物车
//     goods.addEventListener("click", (e) => {
//             if (e.target.className == "now_buy") {
//                 let arr_goods = [...e.target.nextElementSibling.children],
//                     data = {
//                         id: arr_goods[0].innerText,
//                         name: arr_goods[2].innerText,
//                         brand: arr_goods[3].innerText,
//                         imageUrl: arr_goods[1].innerText,
//                         sales: arr_goods[4].innerText,
//                         cost: arr_goods[6].innerText,
//                         color: arr_goods[5].innerText,
//                     }
//                 ;
//                 // (async() => {
//                 //     let res = await post_buy("addCartData", localStorage.getItem("token"), data)
//                 //     alert(res.message)
//                 //     console.log(res);
//                 // })()
//                 axios({
//                     url: "http://180.76.185.37:3000/addCartData",
//                     method: "post",
//                     data: {
//                         token: localStorage.getItem("token"),
//                         data: data
//                     },
//                 }).then((res) => {
//                     console.log(res.data);
//                     alert(res.data.message)
//                 });
//             }
//         })
//         // 加入购物车
// })()
// 生成 所有商品


function _car() {
  _car = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var start, data, res, _car2, car_number, temp_number, shopping_car;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!localStorage.getItem("token")) {
              _context2.next = 16;
              break;
            }

            // 清除 原有数据
            start = document.querySelector(".start");
            start.remove(); //生成购物车

            data = {
              token: localStorage.getItem("token")
            };
            _context2.next = 6;
            return (0,_module_js__WEBPACK_IMPORTED_MODULE_2__.my_AJAX)("http://180.76.185.37:3000/shopData", "POST", data);

          case 6:
            res = _context2.sent;
            _car2 = document.querySelector(".car_goods");
            car_number = document.querySelector(".car_number");
            temp_number = 0;
            res.forEach(function (e) {
              _car2.insertAdjacentHTML("beforeend", "  <li>\n                 <span><img src=\"".concat(e.imageUrl, "\" alt=\"\"> \n                 </span> <span><i>").concat(e.name, "</i></span> \n                 <span><a href=\"javascript:void(0);\">\u5220\u9664</a></span> \n                 <span style=\"display:none\">").concat(e.id, "</span> \n                 </li>"));

              temp_number++;
            }); //生成购物车
            //购物车 数量

            car_number.innerHTML = temp_number; //购物车 数量
            //购物车  长度生成

            shopping_car = document.querySelector(".shopping_car");
            shopping_car.addEventListener("mouseenter", function demo() {
              this.children[1].style.height = temp_number * 30 + "px";
            }, false);
            shopping_car.addEventListener("mouseleave", function demo() {
              this.children[1].style.height = 0;
            }, false); //购物车  长度生成
            // 删除购物车

            _car2.addEventListener("click", function demo(e) {
              if (e.target.tagName == "A") {
                ;

                (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
                  var data, res;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          data = {
                            token: localStorage.getItem("token"),
                            id: e.target.parentElement.nextElementSibling.innerHTML
                          };
                          _context.next = 3;
                          return (0,_module_js__WEBPACK_IMPORTED_MODULE_2__.my_AJAX)('http://180.76.185.37:3000/deleteCartData', "POST", data);

                        case 3:
                          res = _context.sent;
                          console.log(res);

                          if (res.state == 1) {
                            alert(res.message);
                          }

                          e.target.parentNode.parentNode.remove();

                        case 7:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }))();
              }
            }); // 删除购物车
            //fetch  跨域为啥？
            // (async() => {
            //     let res = await post_data("getCartData", localStorage.getItem("token"))
            //     console.log(res);
            // })()


          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _car.apply(this, arguments);
}

/***/ }),

/***/ "./src/leftnav.js":
/*!************************!*\
  !*** ./src/leftnav.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");


var file = __webpack_require__("./src/img sync recursive (left_nav)");

file.keys().forEach(function (item) {
  __webpack_require__("./src sync recursive ^\\.\\/img.*$")("./img" + item.replace(/\./, ""));
});
var arr = [{
  src: "./img/left_nav1.png",
  name: "小米 5 plus max",
  number: 8
}, {
  src: "./img/left_nav2.jpg",
  name: "小米智能机顶盒",
  number: 10
}, {
  src: "./img/left_nav3.jpg",
  name: "小米笔记本电脑",
  number: 12
}, {
  src: "./img/left_nav4.png",
  name: "小米出行",
  number: 8
}, {
  src: "./img/left_nav5.jpg",
  name: "小米智能路由器",
  number: 2
}, {
  src: "./img/left_nav6.jpg",
  name: "小米 电源配件",
  number: 8
}, {
  src: "./img/left_nav7.jpg",
  name: "小米 健康儿童",
  number: 8
}, {
  src: "./img/left_nav8.jpg",
  name: "小米耳机音箱",
  number: 20
}, {
  src: "./img/left_nav9.jpg",
  name: "勤奋蜂6666",
  number: 7
}, {
  src: "./img/left_nav10.jpg",
  name: "小米生活背包",
  number: 8
}];
var name = arr.map(function (e) {
  return e.name;
});
var src = arr.map(function (e) {
  return e.src;
});
var number = arr.map(function (e) {
  return e.number;
});

var li_list = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelector(".left_nav").querySelectorAll(".left_goods"));

function insert() {
  li_list.forEach(function (e, index) {
    console.log(src[index]);

    for (var i = 0; i < number[index]; i++) {
      e.insertAdjacentHTML("afterbegin", " \n            <li>\n            <div>\n                <img src=\"".concat(src[index], "\" alt=\"\">\n                <i>").concat(name[index], "</i>\n            </div>            \n            </li>\n            "));
    }
  });
}

insert();

/***/ }),

/***/ "./src/module.js":
/*!***********************!*\
  !*** ./src/module.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "login_or_register": () => (/* binding */ login_or_register),
/* harmony export */   "my_AJAX": () => (/* binding */ my_AJAX),
/* harmony export */   "new_state": () => (/* binding */ new_state),
/* harmony export */   "post_buy": () => (/* binding */ post_buy),
/* harmony export */   "post_data": () => (/* binding */ post_data),
/* harmony export */   "post_goods": () => (/* binding */ post_goods)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);




function new_state() {
  var login = document.querySelector(".login_btn"),
      register = document.querySelector(".register_btn");
  login.addEventListener("click", function () {
    localStorage.setItem("state", 1);
  });
  register.addEventListener("click", function () {
    localStorage.setItem("state", 0);
  });
}

function login_or_register() {
  var login = document.querySelectorAll(".login");

  if (localStorage.getItem("state") == 1) {
    login[0].className = "login login_enter";
  } else {
    login[1].className = "login login_enter";
  }
}

var BaseUrl = "http://180.76.185.37:3000/";

function post_goods(_x) {
  return _post_goods.apply(this, arguments);
}

function _post_goods() {
  _post_goods = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat(BaseUrl).concat(url), {
              method: "POST",
              headers: {
                // 'Content-Type': 'multipart/form-data'
                'Content-Type': "application/json" // 'Content-Type': 'application/x-www-form-urlencoded'

              }
            });

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            return _context.abrupt("return", _context.sent);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _post_goods.apply(this, arguments);
}

function post_data(_x2, _x3) {
  return _post_data.apply(this, arguments);
}

function _post_data() {
  _post_data = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(url, date) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("".concat(BaseUrl).concat(url), {
              method: "POST",
              headers: {
                // 'Content-Type': 'multipart/form-data'
                'Content-Type': "application/json" // 'Content-Type': 'application/x-www-form-urlencoded'

              },
              body: JSON.stringify(date)
            });

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return res.json();

          case 5:
            return _context2.abrupt("return", _context2.sent);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _post_data.apply(this, arguments);
}

function post_buy(_x4, _x5) {
  return _post_buy.apply(this, arguments);
}

function _post_buy() {
  _post_buy = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(url, token) {
    var data,
        res,
        _args3 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            data = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
            _context3.next = 3;
            return fetch("".concat(BaseUrl).concat(url), {
              method: "POST",
              headers: {
                'Content-Type': "application/json"
              },
              body: {
                token: token,
                data: JSON.stringify(data)
              }
            });

          case 3:
            res = _context3.sent;
            _context3.next = 6;
            return res.json();

          case 6:
            return _context3.abrupt("return", _context3.sent);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _post_buy.apply(this, arguments);
}

function my_AJAX(url, _methods, _data) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    var data = _data || null;
    var methods = _methods || "GET";

    if (methods == "GET" && data != null) {
      url += "?" + data;
    }

    xhr.open(methods, url, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(JSON.parse(xhr.responseText));
        }
      }
    };

    if (methods == "POST") {
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));
    } else {
      xhr.send();
    }
  });
}

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _slider_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider.css */ "./src/slider.css");






var PubSub = /*#__PURE__*/function () {
  function PubSub() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PubSub);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "static", {});
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PubSub, [{
    key: "on",
    value: function on(key, fn) {
      if (this["static"][key]) {
        this["static"][key].push(fn);
      } else {
        this["static"][key] = [fn];
      }
    }
  }, {
    key: "emit",
    value: function emit(key) {
      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      this["static"][key] && this["static"][key].forEach(function (fns) {
        fns.apply(void 0, rest);
      });
    }
  }]);

  return PubSub;
}();

var Slider = /*#__PURE__*/function () {
  function Slider(id) {
    var cycle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;
    var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var imgs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var Plugins = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Slider);

    //获取容器的dom
    this.Plugin = Plugins;
    this.key = true;
    this.container = document.getElementById(id);
    this.imgs = imgs;
    this.cycle = cycle;
    this.style = style;
    this.registerPlugins();
    this.begin();
    this.items = Array.from(this.container.querySelectorAll(".slider-list-item-selected, .slider-list-item"));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Slider, [{
    key: "registerPlugins",
    value: function registerPlugins() {
      var _this = this;

      var template = this.render();
      template = template + this.Plugin.reduce(function (result, items) {
        return result += items.render(_this);
      }, "");
      this.container.innerHTML = template;
    }
  }, {
    key: "render",
    value: function render() {
      var template = this.imgs.slice(1, this.imgs.length - 1).reduce(function (result, item, index) {
        return result + "  \n            <li class=\"slider-list-item\">\n             <img src=\"".concat(item, "\" alt=\"\" />\n               </li>");
      }, " <li class=\"slider-list-item-selected\">\n        <img src=\"".concat(this.imgs[0], "\" alt=\"\" />\n          </li>"));
      return " \n        <ul class=\"slider-list\">\n        ".concat(template, "\n         </ul>");
    }
  }, {
    key: "begin",
    value: function begin() {
      var _this2 = this;

      this.render();
      this.initStyle(this.style);
      this.Plugin && this.Plugin.forEach(function (fns) {
        fns.render(_this2);
        fns.action(_this2);
      });
    }
  }, {
    key: "initStyle",
    value: function initStyle(style) {
      var _this3 = this;

      Object.keys(style).forEach(function (key) {
        _this3.setStyleAttribute(_this3.container, key, style[key]);
      });
      this.setStyleAttribute(this.container, "position", "relative"); // ????????????为啥要设置相对啊  感觉应该在 css中去设置
    } // 设置 属性

  }, {
    key: "setStyleAttribute",
    value: function setStyleAttribute(el, key, value) {
      el.style[key] = value;
    }
  }, {
    key: "getSelectedItemIndex",
    value: function getSelectedItemIndex() {
      return this.items.indexOf(this.getSelectedItem());
    }
  }, {
    key: "getSelectedItem",
    value: function getSelectedItem() {
      //querySelectorAll会返回nodeList是一个类数组 forEach
      return this.container.querySelector(".slider-list-item-selected");
    }
  }, {
    key: "slideTo",
    value: function slideTo(idx) {
      var currentSelectedItem = this.getSelectedItem();

      if (currentSelectedItem) {
        currentSelectedItem.className = 'slider-list-item';
      }

      var selectedItem = this.items[idx];

      if (selectedItem) {
        selectedItem.className = "slider-list-item-selected";
      } // 创建自定义 事件 然后 传入参数idx  然后 dispatchEvent  执行 事件
      // this.controllers.dispatchEvent(new CustomEvent("slide", { detail: { index: idx } }))


      this.PubSub && this.PubSub.emit("slide", idx);
    }
  }, {
    key: "slideNext",
    value: function slideNext() {
      var currentIdx = this.getSelectedItemIndex();
      var nextIdx = currentIdx === this.items.length - 1 ? 0 : currentIdx + 1;
      this.slideTo(nextIdx);
      return this;
    }
  }, {
    key: "slidePrevious",
    value: function slidePrevious() {
      var currentIdx = this.getSelectedItemIndex();
      var previousIdx = currentIdx === 0 ? this.items.length - 1 : currentIdx - 1;
      this.slideTo(previousIdx);
      return this;
    }
  }, {
    key: "start",
    value: function start() {
      var _this4 = this;

      if (!this.interval) {
        this.interval = setInterval(function () {
          _this4.slideNext();
        }, this.cycle);
      }

      return this;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.interval && clearInterval(this.interval);
      this.interval = null;
      return this;
    } //  链式 调用 直接返回 this 

  }]);

  return Slider;
}();

var controlPlugin = {
  //repeat 重复
  render: function render(Slider) {
    var template = "<span class=\"slider-list-control-button-selected\"></span>" + " <span class=\"slider-list-control-button\"></span>".repeat(Slider.imgs.length - 1);
    return " <div class=\"slider-list-control\"> ".concat(template, " </div>");
  },
  action: function action(Slider) {
    // 轮播图控件 （小圆点）
    var controllers = Slider.container.querySelector(".slider-list-control"); // 缓存 一下小圆点控件

    Slider.controllers = controllers;

    if (controllers) {
      var button = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(controllers.children); //   监听 函数 


      Slider.container.addEventListener("mouseover", function () {
        //箭头函数 没有 this 所以 会像外面去 问一下 this 在哪 巧用箭头函数
        Slider.stop();
      });
      Slider.container.addEventListener("mouseout", function () {
        //箭头函数 没有 this 所以 会像外面去 问一下 this 在哪 巧用箭头函数
        Slider.start();
      }); //  问一下 

      controllers.addEventListener("click", function (e) {
        if (e.target.tagName === "SPAN") {
          var index = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target.parentNode.children).indexOf(e.target);

          Slider.slideTo(index);
        }
      }); // 浏览器的 自定义事件  （控制原点）
      // controllers.addEventListener("slide", (e) => {
      //     const selected = this.controllers.querySelector(".slider-list-control-button-selected")
      //     if (selected) {
      //         selected.className = "slider-list-control-button"
      //         button[e.detail.index].className = "slider-list-control-button-selected"
      //     }
      // })
      // 订阅 模板 方法   （控制原点）

      Slider.PubSub = new PubSub();
      Slider.PubSub.on("slide", function (idx) {
        var selected = Slider.controllers.querySelector(".slider-list-control-button-selected");

        if (selected) {
          selected.className = "slider-list-control-button";
          button[idx].className = "slider-list-control-button-selected";
        }
      });
    }
  }
};
var nextPlugin = {
  render: function render(Slider) {
    return "<a href=\"\" class=\"slider-list-previous\">\n        <p>\uFF1C</p>\n    </a>";
  },
  action: function action(Slider) {
    var next = Slider.container.querySelector(".slider-list-next");
    console.log(Slider.container);
    next.addEventListener("click", function (e) {
      e.preventDefault();

      if (Slider.key) {
        Slider.stop();
        Slider.slideNext();
        Slider.start();
        Slider.key = false;
        setTimeout(function () {
          Slider.key = true;
        }, 500);
      }
    });
  }
};
var previousPlugin = {
  render: function render(Slider) {
    return "<a href=\"\" class=\"slider-list-next\">\n        <p>\uFF1E</p>\n    </a>";
  },
  action: function action(Slider) {
    var previous = Slider.container.querySelector(".slider-list-previous");
    previous.addEventListener("click", function (e) {
      e.preventDefault();

      if (Slider.key) {
        Slider.stop();
        Slider.slidePrevious();
        Slider.start();
        Slider.key = false;
        setTimeout(function () {
          Slider.key = true;
        }, 500);
      }
    });
  }
};
var imgs = [__webpack_require__(/*! ./img/slide1.jpg */ "./src/img/slide1.jpg"), __webpack_require__(/*! ./img/slide2.webp */ "./src/img/slide2.webp"), __webpack_require__(/*! ./img/slide3.webp */ "./src/img/slide3.webp"), __webpack_require__(/*! ./img/slide4.webp */ "./src/img/slide4.webp")];
var slider = new Slider("slider", 2000, {
  width: "975px",
  height: "460px"
}, [].concat(imgs), [controlPlugin, nextPlugin, previousPlugin]);
slider.start();

/***/ }),

/***/ "./src/command.css":
/*!*************************!*\
  !*** ./src/command.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/same.css":
/*!**********************!*\
  !*** ./src/same.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/slider.css":
/*!************************!*\
  !*** ./src/slider.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/img sync recursive (left_nav)":
/*!**********************************!*\
  !*** ./src/img/ sync (left_nav) ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./left_nav1.png": "./src/img/left_nav1.png",
	"./left_nav10.jpg": "./src/img/left_nav10.jpg",
	"./left_nav2.jpg": "./src/img/left_nav2.jpg",
	"./left_nav3.jpg": "./src/img/left_nav3.jpg",
	"./left_nav4.png": "./src/img/left_nav4.png",
	"./left_nav5.jpg": "./src/img/left_nav5.jpg",
	"./left_nav6.jpg": "./src/img/left_nav6.jpg",
	"./left_nav7.jpg": "./src/img/left_nav7.jpg",
	"./left_nav8.jpg": "./src/img/left_nav8.jpg",
	"./left_nav9.jpg": "./src/img/left_nav9.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img sync recursive (left_nav)";

/***/ }),

/***/ "./src/font_3207587_zixofqh46on/iconfont.ttf":
/*!***************************************************!*\
  !*** ./src/font_3207587_zixofqh46on/iconfont.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "font/iconfont.550aac.ttf";

/***/ }),

/***/ "./src/font_3207587_zixofqh46on/iconfont.woff":
/*!****************************************************!*\
  !*** ./src/font_3207587_zixofqh46on/iconfont.woff ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "font/iconfont.9889df.woff";

/***/ }),

/***/ "./src/font_3207587_zixofqh46on/iconfont.woff2":
/*!*****************************************************!*\
  !*** ./src/font_3207587_zixofqh46on/iconfont.woff2 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "font/iconfont.f6bd3d.woff2";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/leftnav.js"), __webpack_exec__("./src/slider.js"), __webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=main.js.map