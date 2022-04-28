import { new_state, post_goods, my_AJAX } from "./module.js"
import "./command.css"
import "./same.css"
import "./index.css"
import "./font_3207587_zixofqh46on/iconfont.ttf"
import "./font_3207587_zixofqh46on/iconfont.woff"
import "./font_3207587_zixofqh46on/iconfont.woff2"

// import img2 from "../src/img/slide2.jpg"
// import img1 from "../src/img/slide1.jpg"
// import img3 from "../src/img/slide3.jpg"
// import img4 from "../src/img/slide4.jpg"
// 确认状态 单页面操作
new_state();

function user() {
    let user = document.querySelector(".user")

    if (localStorage.getItem("token")) {
        user.children[0].remove()
        user.children[1].remove()
        user.insertAdjacentHTML("afterbegin", ` 
        
        <li> <a href = "javascript:;" class = "login_btn" >欢迎您！</a><span>|</span ></li> 
        <li><a href = "javascript:;" class = "login_btn" id="over" >退出</a><span>|</span ></li>`)
        let over = document.querySelector("#over")
        over.addEventListener("click", () => {
            localStorage.clear()
            window.location.reload()
        })
    }

}
user()



// 购物车
async function car() {

    if (localStorage.getItem("token")) {
        // 清除 原有数据
        let start = document.querySelector(".start")
        start.remove();
        //生成购物车
        let data = {
            token: localStorage.getItem("token")
        }
        let res = await my_AJAX("http://180.76.185.37:3000/shopData", "POST", data)
        let car = document.querySelector(".car_goods")
        let car_number = document.querySelector(".car_number")
        let temp_number = 0
        res.forEach(e => {
            car.insertAdjacentHTML("beforeend",
                `  <li>
                 <span><img src="${e.imageUrl}" alt=""> 
                 </span> <span><i>${e.name}</i></span> 
                 <span><a href="javascript:void(0);">删除</a></span> 
                 <span style="display:none">${e.id}</span> 
                 </li>`)
            temp_number++
        });
        //生成购物车
        //购物车 数量
        car_number.innerHTML = temp_number
            //购物车 数量
            //购物车  长度生成
        let shopping_car = document.querySelector(".shopping_car")

        shopping_car.addEventListener("mouseenter", function demo() {

            this.children[1].style.height = temp_number * 30 + "px"
        }, false)
        shopping_car.addEventListener("mouseleave", function demo() {

                this.children[1].style.height = 0
            }, false)
            //购物车  长度生成


        // 删除购物车
        car.addEventListener("click", function demo(e) {
                if (e.target.tagName == "A") {;
                    (async() => {
                        let data = {
                            token: localStorage.getItem("token"),
                            id: e.target.parentElement.nextElementSibling.innerHTML
                        };
                        let res = await my_AJAX('http://180.76.185.37:3000/deleteCartData', "POST", data);
                        console.log(res);
                        if (res.state == 1) {
                            alert(res.message)
                        }


                        e.target.parentNode.parentNode.remove()


                    })()



                }
            })
            // 删除购物车


        //fetch  跨域为啥？
        // (async() => {
        //     let res = await post_data("getCartData", localStorage.getItem("token"))
        //     console.log(res);
        // })()
    }
}
// car();
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