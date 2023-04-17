let siteConstructorContent = document.querySelector(".site-constructor-content")
let vSmartphone = document.querySelector(".vertical-Smartphone")
    vSmartphone.addEventListener("click", function(){
        let selection = document.querySelector(".selection")    
        let allElements = document.querySelectorAll(".element")
            siteConstructorContent.style.width = "320px"
            siteConstructorContent.style.left = "50%"
            siteConstructorContent.style.top = "50%"
            allElements.forEach(el=>{
                el.style.width = layouts[320][el.id].width
                el.style.height = layouts[320][el.id].height
                el.style.left = layouts[320][el.id].left
                el.style.top = layouts[320][el.id].top
            })
            if(selection){   
                selection.remove() 
            }
    })
let hSmartphone = document.querySelector(".horizontal-Smartphone")
    hSmartphone.addEventListener("click", function(){
        let selection = document.querySelector(".selection") 
        let allElements = document.querySelectorAll(".element")
            siteConstructorContent.style.width = "480px"
            siteConstructorContent.style.left = "50%"
            siteConstructorContent.style.top = "50%"
            allElements.forEach(el=>{
                el.style.width = layouts[480][el.id].width
                el.style.height = layouts[480][el.id].height
                el.style.left = layouts[480][el.id].left
                el.style.top = layouts[480][el.id].top
            })
            if(selection){   
                selection.remove() 
            }
    })
let vTablet = document.querySelector(".vertical-Tablet")
    vTablet.addEventListener("click", function(){
        let selection = document.querySelector(".selection") 
        let allElements = document.querySelectorAll(".element")
            siteConstructorContent.style.width = "640px"
            siteConstructorContent.style.left = "50%"
            siteConstructorContent.style.top = "50%"
            allElements.forEach(el=>{
                el.style.width = layouts[640][el.id].width
                el.style.height = layouts[640][el.id].height
                el.style.left = layouts[640][el.id].left
                el.style.top = layouts[640][el.id].top
            })
            if(selection){   
                selection.remove() 
            }
    })

let hTablet = document.querySelector(".horizontal-Tablet")
    hTablet.addEventListener("click", function(){
        let selection = document.querySelector(".selection") 
        let allElements = document.querySelectorAll(".element")
            siteConstructorContent.style.width = "960px"
            siteConstructorContent.style.left = "50%"
            siteConstructorContent.style.top = "50%"
            allElements.forEach(el=>{
                el.style.width = layouts[960][el.id].width
                el.style.height = layouts[960][el.id].height
                el.style.left = layouts[960][el.id].left
                el.style.top = layouts[960][el.id].top
            })
            if(selection){   
                selection.remove() 
            }
    })

let hLaptop = document.querySelector(".horizontal-Laptop")
    hLaptop.addEventListener("click", function(){
        let selection = document.querySelector(".selection") 
        let allElements = document.querySelectorAll(".element")
            siteConstructorContent.style.width = "1200px"
            siteConstructorContent.style.left = "50%"
            siteConstructorContent.style.top = "50%"
            allElements.forEach(el=>{
                el.style.width = layouts[1200][el.id].width
                el.style.height = layouts[1200][el.id].height
                el.style.left = layouts[1200][el.id].left
                el.style.top = layouts[1200][el.id].top
                console.log(layouts[1200][el.id].top)
            })
            if(selection){   
                selection.remove() 
            }
    })
let layouts = {
        320:{},
        480:{},
        640:{},
        960:{},
        1200:{}
    }