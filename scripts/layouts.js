let siteConstructorContent = document.querySelector(".site-constructor-content")
let vSmartphone = document.querySelector(".vertical-Smartphone")
    vSmartphone.addEventListener("click", function(){
        siteConstructorContent.style.width = "320px"
        siteConstructorContent.style.left = "50%"
        siteConstructorContent.style.top = "50%"
    })
let hSmartphone = document.querySelector(".horizontal-Smartphone")
    hSmartphone.addEventListener("click", function(){
        siteConstructorContent.style.width = "480px"
        siteConstructorContent.style.left = "50%"
        siteConstructorContent.style.top = "50%"
    })
let vTablet = document.querySelector(".vertical-Tablet")
    vTablet.addEventListener("click", function(){
        siteConstructorContent.style.width = "640px"
        siteConstructorContent.style.left = "50%"
        siteConstructorContent.style.top = "50%"
    })

let hTablet = document.querySelector(".horizontal-Tablet")
    hTablet.addEventListener("click", function(){
        siteConstructorContent.style.width = "960px"
        siteConstructorContent.style.left = "50%"
        siteConstructorContent.style.top = "50%"
    })

let hLaptop = document.querySelector(".horizontal-Laptop")
    hLaptop.addEventListener("click", function(){
        siteConstructorContent.style.width = "1200px"
        siteConstructorContent.style.left = "50%"
        siteConstructorContent.style.top = "50%"
    })
let layouts = {
        320:{},
        480:{},
        640:{},
        960:{},
        1200:{}
    }
    console.log("layouts.js",layouts)