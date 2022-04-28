// import "./slider.css"
// import img2 from "./img/slide2.jpg"
// import img1 from "./img/slide1.jpg"
// import img3 from "./img/slide3.jpg"
// import img4 from "./img/slide4.jpg"
class PubSub {
    static = {};
    on(key, fn) {
        if (this.static[key]) {
            this.static[key].push(fn)
        } else {
            this.static[key] = [fn]
        }

    }
    emit(key, ...rest) {

        this.static[key] && this.static[key].forEach((fns) => {
            fns(...rest)
        })
    }
}



class Slider {
    constructor(id, cycle = 3000, style = {}, imgs = [], Plugins = []) {
        //获取容器的dom
        this.Plugin = Plugins
        this.key = true
        this.container = document.getElementById(id);
        this.imgs = imgs
        this.cycle = cycle;
        this.style = style
        this.registerPlugins()
        this.begin()
        this.items = Array.from(
            this.container.querySelectorAll(
                ".slider-list-item-selected, .slider-list-item"
            )
        );

    }

    registerPlugins() {

        let template = this.render()
        template = template + this.Plugin.reduce((result, items) => {
            return (result += items.render(this))
        }, "")
        this.container.innerHTML = template

    }
    render() {

        const template = this.imgs.slice(1, this.imgs.length - 1).reduce((result, item, index) => {
                return (result + `  
            <li class="slider-list-item">
             <img src="${item}" alt="" />
               </li>`)
            },
            ` <li class="slider-list-item-selected">
        <img src="${this.imgs[0]}" alt="" />
          </li>`
        )

        return ` 
        <ul class="slider-list">
        ${template}
         </ul>`
    }

    begin() {
        this.render()
        this.initStyle(this.style);
        this.Plugin && this.Plugin.forEach((fns) => {
            fns.render(this)
            fns.action(this)
        })
    }
    initStyle(style) {

            Object.keys(style).forEach((key) => {
                this.setStyleAttribute(this.container, key, style[key])
            });
            this.setStyleAttribute(this.container, "position", "relative")
                // ????????????为啥要设置相对啊  感觉应该在 css中去设置
        }
        // 设置 属性
    setStyleAttribute(el, key, value) {
        el.style[key] = value
    }

    getSelectedItemIndex() {

        return this.items.indexOf(this.getSelectedItem())
    }



    getSelectedItem() {
        //querySelectorAll会返回nodeList是一个类数组 forEach
        return this.container.querySelector(".slider-list-item-selected");
    }

    slideTo(idx) {
        const currentSelectedItem = this.getSelectedItem()
        if (currentSelectedItem) {
            currentSelectedItem.className = 'slider-list-item'
        }
        const selectedItem = this.items[idx]

        if (selectedItem) {
            selectedItem.className = "slider-list-item-selected"
        }
        // 创建自定义 事件 然后 传入参数idx  然后 dispatchEvent  执行 事件
        // this.controllers.dispatchEvent(new CustomEvent("slide", { detail: { index: idx } }))


        this.PubSub && this.PubSub.emit("slide", idx)
    }

    slideNext() {
        const currentIdx = this.getSelectedItemIndex()

        const nextIdx = currentIdx === this.items.length - 1 ? 0 : currentIdx + 1

        this.slideTo(nextIdx)
        return this
    }

    slidePrevious() {
        const currentIdx = this.getSelectedItemIndex()
        const previousIdx = currentIdx === 0 ? this.items.length - 1 : currentIdx - 1
        this.slideTo(previousIdx)
        return this
    }


    start() {


        if (!this.interval) {
            this.interval = setInterval(() => {
                this.slideNext()
            }, this.cycle);
        }

        return this
    }
    stop() {
        this.interval && clearInterval(this.interval)
        this.interval = null
        return this
    }

    //  链式 调用 直接返回 this 
}

const controlPlugin = {
    //repeat 重复
    render(Slider) {

        const template = `<span class="slider-list-control-button-selected"></span>` +
            ` <span class="slider-list-control-button"></span>`.repeat(Slider.imgs.length - 1)
        return ` <div class="slider-list-control"> ${template} </div>`
    },
    action(Slider) { // 轮播图控件 （小圆点）
        const controllers = Slider.container.querySelector(".slider-list-control")
            // 缓存 一下小圆点控件
        Slider.controllers = controllers
        if (controllers) {

            const button = [...controllers.children]

            //   监听 函数 

            Slider.container.addEventListener("mouseover", () => {
                //箭头函数 没有 this 所以 会像外面去 问一下 this 在哪 巧用箭头函数
                Slider.stop()

            })

            Slider.container.addEventListener("mouseout", () => {
                    //箭头函数 没有 this 所以 会像外面去 问一下 this 在哪 巧用箭头函数
                    Slider.start()
                })
                //  问一下 

            controllers.addEventListener("click", (e) => {

                if (e.target.tagName === "SPAN") {
                    const index = [...e.target.parentNode.children].indexOf(e.target)
                    Slider.slideTo(index)
                }
            })

            // 浏览器的 自定义事件  （控制原点）
            // controllers.addEventListener("slide", (e) => {
            //     const selected = this.controllers.querySelector(".slider-list-control-button-selected")
            //     if (selected) {
            //         selected.className = "slider-list-control-button"
            //         button[e.detail.index].className = "slider-list-control-button-selected"
            //     }

            // })

            // 订阅 模板 方法   （控制原点）
            Slider.PubSub = new PubSub()
            Slider.PubSub.on("slide", (idx) => {

                const selected = Slider.controllers.querySelector(".slider-list-control-button-selected")
                if (selected) {

                    selected.className = "slider-list-control-button"
                    button[idx].className = "slider-list-control-button-selected"
                }
            })

        }
    }
}


const nextPlugin = {
    render(Slider) {
        return `<a href="" class="slider-list-previous">
        <p>＜</p>
    </a>`
    },
    action(Slider) {
        const next = Slider.container.querySelector(".slider-list-next")
        console.log(Slider.container);
        next.addEventListener("click", (e) => {
            e.preventDefault()
            if (Slider.key) {
                Slider.stop()
                Slider.slideNext()
                Slider.start()
                Slider.key = false
                setTimeout(() => {
                    Slider.key = true
                }, 500);
            }



        })
    }

}


const previousPlugin = {
    render(Slider) {
        return `<a href="" class="slider-list-next">
        <p>＞</p>
    </a>`
    },
    action(Slider) {
        const previous = Slider.container.querySelector(".slider-list-previous")

        previous.addEventListener("click", (e) => {
            e.preventDefault()

            if (Slider.key) {
                Slider.stop()
                Slider.slidePrevious()
                Slider.start()
                Slider.key = false
                setTimeout(() => {
                    Slider.key = true
                }, 500);
            }
        })
    }
}



// require("./img/slide1.jpg")
require("./img/slide2.jpg")
    // require("./img/slide3.jpg")
    // require("./img/slide4.jpg")


// let imgs = [require("./img/slide1.jpg"),
//     require("./img/slide2.jpg"),
//     require("./img/slide3.jpg"),
//     require("./img/slide4.jpg")
// ]


// let imgs = ["./src/img/slide1.jpg",
//     "./src/img/slide2.webp",
//     "./src/img/slide3.webp",
//     "./src/img/slide4.webp"
// ]
const slider = new Slider(
    "slider",
    2000, {
        width: "975px",
        height: "460px",


    }, [...imgs], [controlPlugin, nextPlugin,
        previousPlugin
    ]

)
slider.start()