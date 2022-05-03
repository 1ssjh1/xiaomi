import { new_state, login_or_register, post_data } from "./module.js"
import "./same.css"
import "./command.css"
import "./login&register.css"
// import "./iconfont.css"
import "./font_3207587_zixofqh46on/iconfont.ttf"
import "./font_3207587_zixofqh46on/iconfont.woff"
import "./font_3207587_zixofqh46on/iconfont.woff2"

new_state()

login_or_register()


// 注册账号
let register_list = document.querySelector("#register").querySelectorAll('input[type="text"]'),
    register_btn = document.querySelector("#register").querySelector('input[type="button"]')


register_btn.addEventListener("click", (e) => {
    console.log(1);
    e.preventDefault()
    let username = register_list[0].value,
        password = register_list[1].value,
        name = register_list[2].value

    let data = {
        username: username,
        password: password,
        name: name

    };
    (async() => {
        let res = await post_data("register", data)
        alert(res.message)
        console.log(res);
    })()

})









// 登陆账号
let login_list = document.querySelector("#login").querySelectorAll('input[type="text"]'),
    login_btn = document.querySelector("#login").querySelector('input[type="button"]'),
    login_check = document.querySelector("#login").querySelector('input[type="checkbox"]')
login_btn.addEventListener("click", (e) => {

    e.preventDefault()
    let auth = "";

    if (login_check.checked == true) {
        auth = "admin"
    } else {
        auth = "user"
    }

    let username = login_list[0].value,
        password = login_list[1].value


    let data = {
        username: username,
        password: password,
        auth: auth

    };

    (async() => {
        let res = await post_data("login", data)
        alert(res.message)
        if (res.state) {
            localStorage.setItem("token", res.token);
            localStorage.setItem("auth", res.auth);
            window.location.href = '../index.html'
        }

    })()




})