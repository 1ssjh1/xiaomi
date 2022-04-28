import img1 from "../src/img/left_nav1.png"
// import img2 from '../src/img/left_nav2.jpg'
// import img3 from '../src/img/left_nav3.jpg '
// import img4 from '../src/img/left_nav4.png '


let img2 = require("./img/left_nav1.png")

let img3 = require("./img/left_nav1.png")


let im4 = require("./img/left_nav1.png")

// console.log(img1, img2, img3, img4);
let arr = [{
        src: "./src/img/left_nav1.png",
        name: "小米 5 plus max",
        number: 8
    },
    {
        src: "./src/img/left_nav2.jpg",
        name: "小米智能机顶盒",
        number: 10
    },

    {
        src: "./src/img/left_nav3.jpg",
        name: "小米笔记本电脑",
        number: 12
    },

    {
        src: "./src/img/left_nav4.png",
        name: "小米出行",
        number: 8
    },

    {
        src: "./src/img/left_nav5.jpg",
        name: "小米智能路由器",
        number: 2
    },

    {
        src: "./src/img/left_nav6.jpg",
        name: "小米 电源配件",
        number: 8
    },

    {
        src: "./src/img/left_nav7.jpg",
        name: "小米 健康儿童",
        number: 8
    },

    {
        src: "./src/img/left_nav8.jpg",
        name: "小米耳机音箱",
        number: 20
    },

    {
        src: "./src/img/left_nav9.jpg",
        name: "勤奋蜂6666",
        number: 7
    },

    {
        src: "./src/img/left_nav10.jpg",
        name: "小米生活背包",
        number: 8
    }

]


let name = arr.map((e) => {
    return e.name
})

let src = arr.map((e) => {
    return e.src
})


let number = arr.map((e) => {
    return e.number
})

let li_list = [...document.querySelector(".left_nav").querySelectorAll(".left_goods")]

function insert() {
    li_list.forEach((e, index) => {
        for (let i = 0; i < number[index]; i++) {
            e.insertAdjacentHTML("afterbegin", ` 
            <li>
            <div>
                <img src="${src[index]}" alt="">
                <i>${name[index]}</i>
            </div>            
            </li>
            `)
        }

    })



}

insert()