export { new_state, login_or_register, post_goods, post_data, post_buy, my_AJAX }

function new_state() {
    let login = document.querySelector(".login_btn"),
        register = document.querySelector(".register_btn")


    login.addEventListener("click", () => {
        localStorage.setItem("state", 1)

    })

    register.addEventListener("click", () => {
        localStorage.setItem("state", 0)

    })

}


function login_or_register() {
    let login = document.querySelectorAll(".login")

    if (localStorage.getItem("state") == 1) {

        login[0].className = "login login_enter"



    } else {
        login[1].className = "login login_enter"


    }
}



const BaseUrl = "http://180.76.185.37:3000/"
async function post_goods(url) {
    const res = await fetch(`${BaseUrl}${url}`, {
        method: "POST",
        headers: {
            // 'Content-Type': 'multipart/form-data'
            'Content-Type': `application/json`
                // 'Content-Type': 'application/x-www-form-urlencoded'

        }

    })
    return await res.json()
}



async function post_data(url, date) {
    const res = await fetch(`${BaseUrl}${url}`, {
        method: "POST",
        headers: {
            // 'Content-Type': 'multipart/form-data'
            'Content-Type': `application/json`
                // 'Content-Type': 'application/x-www-form-urlencoded'

        },
        body: JSON.stringify(date)
    })
    return await res.json()
}



async function post_buy(url, token, data = {}) {

    const res = await fetch(`${BaseUrl}${url}`, {
        method: "POST",
        headers: {
            'Content-Type': `application/json`
        },
        body: {
            token: token,
            data: JSON.stringify(data)
        }
    })
    return await res.json()

}


function my_AJAX(url, _methods, _data) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        let data = _data || null
        let methods = _methods || "GET"
        if (methods == "GET" && data != null) {
            url += "?" + data
        }
        xhr.open(methods, url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject(JSON.parse(xhr.responseText))
                }
            }
        }
        if (methods == "POST") {
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.send(JSON.stringify(data))
        } else {
            xhr.send()
        }

    })

}