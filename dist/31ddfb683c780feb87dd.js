import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
var withe_nav = [{
  img: "./src/img/wihtenav1.png",
  name: "小米6",
  price: "0元起送"
}, {
  img: "./src/img/wihtenav1.png",
  name: "小米6",
  price: "2499元起送"
}, {
  img: "./src/img/wihtenav1.png",
  name: "小米6",
  price: "2499元起送"
}, {
  img: "./src/img/wihtenav1.png",
  name: "小米6",
  price: "2499元起送"
}, {
  img: "./src/img/wihtenav1.png",
  name: "小米6",
  price: "2499元起送"
}, {
  img: "./src/img/wihtenav1.png",
  name: "小米6",
  price: "2499元起送"
}, {
  img: "./src/img/wihtenav1.png",
  name: "小米6",
  price: "2499元起送"
}, {
  img: "./src/img/wihtenav1.png",
  name: "小米6",
  price: "2499元起送"
}, {
  img: "./src/img/wihtenav1.png",
  name: "小米6",
  price: "2499元起送"
}, {
  img: "./src/img/wihtenav1.png",
  name: "小米6",
  price: "2499元起送"
}, {
  img: "./src/img/wihtenav1.png",
  name: "小米6",
  price: "2499元起送"
}, {
  img: "./src/img/wihtenav1.png",
  name: "小米6",
  price: "2499元起送"
}, {
  img: "./src/img/wihtenav1.png",
  name: "小米6",
  price: "2499元起送"
}, {
  img: "./src/img/wihtenav1.png",
  name: "小米6",
  price: "2499元起送"
}, {
  img: "./src/img/wihtenav1.png",
  name: "小米6",
  price: "2499元起送"
}, {
  img: "./src/img/wihtenav1.png",
  name: "小米6",
  price: "2499元起送"
}, {
  img: "./src/img/wihtenav1.png",
  name: "小米6",
  price: "2499元起送"
}, {
  img: "./src/img/wihtenav1.png",
  name: "小米6",
  price: "2499元起送"
}, {
  img: "./src/img/wihtenav1.png",
  name: "小米6",
  price: "2499元起送"
}, {
  img: "./src/img/wihtenav1.png",
  name: "小米6",
  price: "9999元起送"
}, {
  img: "./src/img/wihtenav1.png",
  name: "小米6",
  price: "9999元起送"
}];
console.log(withe_nav[0].img);

function _nav() {
  var price = withe_nav.map(function (e, i) {
    return e.price;
  });
  var name = withe_nav.map(function (e, i) {
    return e.price;
  });

  var li_list = _toConsumableArray(document.querySelectorAll(".nav_bottom"));

  console.log(li_list);
  var x = 0;
  li_list.forEach(function (e, index) {
    for (var i = 0; i < 3; i++) {
      x++;
      e.insertAdjacentHTML("beforeend", "    <li>\n            <a href=\"#\">\n                <img src=\"./src/img/wihtenav".concat(x + index, ".png\" alt=\"\">\n                <p class=\"name\">").concat(price[x + index - 1], "</p>\n                <p class=\"price\">").concat(name[x + index - 1], "</p>\n                <div class=\"new\">\u65B0\u54C1</div>\n            </a>\n        </li>\n        <div class=\"fenge\"></div>"));
    }

    x--;
  });
}

_nav();