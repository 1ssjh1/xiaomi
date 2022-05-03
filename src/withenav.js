// let temp = 1
// const fs = require__("fs")

// console.log(fs);
// while (fs.readFile(`./img/wihtenav${temp}.png`, (err, data) => {
//         if (err) return false
//         else return true
//     })) {
//     require(`./img/wihtenav${temp}.png`)
//     temp++;------
// }
// let str = '<h1>Hello, world!</h1>';


// let matchAll = str.match(/\/(.*?)/g);

const file = require.context("./img", true, /(wihtenav)/)
    // console.log(file);
    // console.log(file.keys().default);
    // console.log(file.keys()[0]);

// console.log("./wihtenav1.png".replace(/\./, ""))


file.keys().forEach(item => {
    require("./img" + item.replace(/\./, ""))
})
let withe_nav = [{

        img: "./src/img/wihtenav1.png",
        name: "小米6",
        price: "0元起送"
    },
    {

        img: "./src/img/wihtenav1.png",
        name: "小米6",
        price: "2499元起送"
    },
    {

        img: "./src/img/wihtenav1.png",
        name: "小米6",
        price: "2499元起送"
    },
    {

        img: "./src/img/wihtenav1.png",
        name: "小米6",
        price: "2499元起送"
    },
    {

        img: "./src/img/wihtenav1.png",
        name: "小米6",
        price: "2499元起送"
    },
    {

        img: "./src/img/wihtenav1.png",
        name: "小米6",
        price: "2499元起送"
    },
    {

        img: "./src/img/wihtenav1.png",
        name: "小米6",
        price: "2499元起送"
    },
    {

        img: "./src/img/wihtenav1.png",
        name: "小米6",
        price: "2499元起送"
    },
    {

        img: "./src/img/wihtenav1.png",
        name: "小米6",
        price: "2499元起送"
    },
    {

        img: "./src/img/wihtenav1.png",
        name: "小米6",
        price: "2499元起送"
    },
    {

        img: "./src/img/wihtenav1.png",
        name: "小米6",
        price: "2499元起送"
    },
    {

        img: "./src/img/wihtenav1.png",
        name: "小米6",
        price: "2499元起送"
    },
    {

        img: "./src/img/wihtenav1.png",
        name: "小米6",
        price: "2499元起送"
    },
    {

        img: "./src/img/wihtenav1.png",
        name: "小米6",
        price: "2499元起送"
    },
    {

        img: "./src/img/wihtenav1.png",
        name: "小米6",
        price: "2499元起送"
    },
    {

        img: "./src/img/wihtenav1.png",
        name: "小米6",
        price: "2499元起送"
    },
    {

        img: "./src/img/wihtenav1.png",
        name: "小米6",
        price: "2499元起送"
    },
    {

        img: "./src/img/wihtenav1.png",
        name: "小米6",
        price: "2499元起送"
    },
    {

        img: "./src/img/wihtenav1.png",
        name: "小米6",
        price: "2499元起送"
    },
    {

        img: "./src/img/wihtenav1.png",
        name: "小米6",
        price: "9999元起送"
    },
    {

        img: "./src/img/wihtenav1.png",
        name: "小米6",
        price: "9999元起送"
    }

]


function _nav() {
    let price = withe_nav.map((e, i) => {
        return e.price
    })

    let name = withe_nav.map((e, i) => {
        return e.price
    })
    let li_list = [...document.querySelectorAll(".nav_bottom")]
    console.log(li_list);
    let x = 0
    li_list.forEach((e, index) => {
        for (let i = 0; i < 3; i++) {
            x++
            e.insertAdjacentHTML("beforeend", `    <li>
            <a href="#">
                <img src="./img/wihtenav${x+index}.png" alt="">
                <p class="name">${price[x+index-1]}</p>
                <p class="price">${name[x+index-1]}</p>
                <div class="new">新品</div>
            </a>
        </li>
        <div class="fenge"></div>`);
        }
        x--
    })

}
_nav()