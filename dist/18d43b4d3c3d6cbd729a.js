import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { new_state, login_or_register, post_data } from "./module.js";
new_state();
login_or_register(); // 注册账号

var register_list = document.querySelector("#register").querySelectorAll('input[type="text"]'),
    register_btn = document.querySelector("#register").querySelector('input[type="button"]');
register_btn.addEventListener("click", function (e) {
  console.log(1);
  e.preventDefault();
  var username = register_list[0].value,
      password = register_list[1].value,
      name = register_list[2].value;
  var data = {
    username: username,
    password: password,
    name: name
  };

  _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var res;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return post_data("register", data);

          case 2:
            res = _context.sent;
            alert(res.message);
            console.log(res);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))();
}); // 登陆账号

var login_list = document.querySelector("#login").querySelectorAll('input[type="text"]'),
    login_btn = document.querySelector("#login").querySelector('input[type="button"]'),
    login_check = document.querySelector("#login").querySelector('input[type="checkbox"]');
login_btn.addEventListener("click", function (e) {
  e.preventDefault();
  var auth = "";

  if (login_check.checked == true) {
    auth = "admin";
  } else {
    auth = "user";
  }

  var username = login_list[0].value,
      password = login_list[1].value;
  var data = {
    username: username,
    password: password,
    auth: auth
  };

  _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
    var res;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return post_data("login", data);

          case 2:
            res = _context2.sent;
            alert(res.message);

            if (res.state) {
              localStorage.setItem("token", res.token);
              localStorage.setItem("auth", res.auth);
              window.location.href = '../index.html';
            }

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }))();
});