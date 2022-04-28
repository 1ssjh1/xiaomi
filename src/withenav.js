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
console.log(withe_nav[0].img);

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
                <img src="./src/img/wihtenav${x+index}.png" alt="">
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