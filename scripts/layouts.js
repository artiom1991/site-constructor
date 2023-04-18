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
    layouts:{320:{},480:{},640:{},960:{},1200:{}},
    addElement(id){
        for(let layout in this.layouts){
            let element = document.getElementById(id)
            let newElementStyles = window.getComputedStyle(element)
            let newElement = {
                private:{
                    width:null,
                    height:null,
                    top:null,
                    left:null
                },
                inherid:{
                    width:newElementStyles.width,
                    height:newElementStyles.height,
                    top:newElementStyles.top,
                    left:newElementStyles.left
                }
            }
            this.layouts[layout][id] = {...newElement}
        }
    },
    changeStyle(styles,id,layoutActive){
        for(let layout in this.layouts){
            if(layoutActive>layout){
                for(let key in styles.inheridStyles){
                this.layouts[layout][id]["inherid"][key] = styles.inheridStyles[key]
                }
            }
            if(layoutActive == layout){
                for(let key in styles.privateStyles){
                    this.layouts[layout][id]["private"][key] = styles.privateStyles[key]
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
                for(let key in this.layouts[layout][id]["private"]){
                    if(this.layouts[layout][id]["private"][key] !== null){
                        el.style[key] = this.layouts[layout][id]["private"][key]
                    }else{
                        el.style[key] = this.layouts[layout][id]["inherid"][key]
                    }
                }
            })
            if(selection){selection.remove()}
    }
}