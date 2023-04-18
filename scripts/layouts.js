let siteConstructorContent = document.querySelector(".site-constructor-content")
let vSmartphone = document.querySelector(".vertical-Smartphone")    
    vSmartphone.addEventListener("click", function(){
        newLayouts.changeLayout(320)
    })

let hSmartphone = document.querySelector(".horizontal-Smartphone")
    hSmartphone.addEventListener("click", function(){
        newLayouts.changeLayout(480)
    })

let vTablet = document.querySelector(".vertical-Tablet")
    vTablet.addEventListener("click", function(){
        newLayouts.changeLayout(640)
    })

let hTablet = document.querySelector(".horizontal-Tablet")
    hTablet.addEventListener("click", function(){
        newLayouts.changeLayout(960)
    })

let hLaptop = document.querySelector(".horizontal-Laptop")
    hLaptop.addEventListener("click", function(){
        newLayouts.changeLayout(1200)
    })

let newLayouts = { 
    layouts:{1200:{},960:{},640:{},480:{},320:{}},
    addElement(id){
        for(let layout in this.layouts){
            let element = document.getElementById(id)
            let newElementStyles = window.getComputedStyle(element)
            let newElement = {
                    width:{
                        count:newElementStyles.width,
                        isPrivate:false,
                        inherided:1200
                    },
                    height:{
                        count:newElementStyles.height,
                        isPrivate:false,
                        inherided:1200
                    },
                    top:{
                        count:newElementStyles.top,
                        isPrivate:false,
                        inherided:1200
                    },
                    left:{
                        count:newElementStyles.left,
                        isPrivate:false,
                        inherided:1200
                    }
            }
            this.layouts[layout][id] = {...newElement}
        }
    },
    changeStyle(styles,id,layoutActive){
        for(let layout in this.layouts){
            if(layoutActive>layout){
                for(let key in styles){
                    if(this.layouts[layout][id][key].isPrivate == false && layoutActive <= this.layouts[layout][id][key].inherided){
                        this.layouts[layout][id][key].count = styles[key]
                        this.layouts[layout][id][key].inherided = layoutActive
                    }
                }
            }
            if(layoutActive == layout){
                for(let key in styles){
                    this.layouts[layout][id][key].count = styles[key]
                    this.layouts[layout][id][key].inherided = layoutActive
                    this.layouts[layout][id][key].isPrivate = true
                }
            }
        }
    },
    changeLayout(layout){
        let selection = document.querySelector(".selection")
        let allElements = document.querySelectorAll(".element")
            siteConstructorContent.style.width = `${layout}px`
            siteConstructorContent.style.left = "50%"
            siteConstructorContent.style.top = "50%"
            allElements.forEach(el=>{
                let id = el.id
                for(let key in this.layouts[layout][id]){
                    el.style[key] =  this.layouts[layout][id][key].count
                }
            })
            if(selection){selection.remove()}
    }
}