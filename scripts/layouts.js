let siteConstructorContent = document.querySelector(".site-constructor-content")
let textStyleEditor = document.querySelector(".text-style-editor")
let generalStyleEditor = document.querySelector(".general-style-editor")
let buttonStyleEditor = document.querySelector(".button-style-editor")

let screen = document.querySelector(".screen")
let vSmartphone = document.querySelector(".vertical-Smartphone")    
    vSmartphone.addEventListener("click", function(){
        screen.style.backgroundImage = "url('../images/smartphone.png')"
        screen.style.transform = "rotate(0deg)"
        textStyleEditor.style.display = "none"
        generalStyleEditor.style.display = "none"
        buttonStyleEditor.style.display = "none"
        newLayouts.changeLayout(320)
    })

let hSmartphone = document.querySelector(".horizontal-Smartphone")
    hSmartphone.addEventListener("click", function(){
        screen.style.backgroundImage = "url('../images/smartphone.png')"
        screen.style.transform = "rotate(90deg)"
        textStyleEditor.style.display = "none"
        generalStyleEditor.style.display = "none"
        buttonStyleEditor.style.display = "none"
        newLayouts.changeLayout(480)
    })

let vTablet = document.querySelector(".vertical-Tablet")
    vTablet.addEventListener("click", function(){
        screen.style.backgroundImage = "url('../images/tablet.png')"
        screen.style.transform = "rotate(0deg)"
        textStyleEditor.style.display = "none"
        generalStyleEditor.style.display = "none"
        buttonStyleEditor.style.display = "none"
        newLayouts.changeLayout(640)
    })

let hTablet = document.querySelector(".horizontal-Tablet")
    hTablet.addEventListener("click", function(){
        screen.style.backgroundImage = "url('../images/tablet.png')"
        screen.style.transform = "rotate(90deg)"
        textStyleEditor.style.display = "none"
        generalStyleEditor.style.display = "none"
        buttonStyleEditor.style.display = "none"
        newLayouts.changeLayout(960)
    })

let hLaptop = document.querySelector(".horizontal-Laptop")
    hLaptop.addEventListener("click", function(){
        screen.style.backgroundImage = "url('../images/laptop.png')"
        screen.style.transform = "rotate(0deg)"
        textStyleEditor.style.display = "none"
        generalStyleEditor.style.display = "none"
        buttonStyleEditor.style.display = "none"
        newLayouts.changeLayout(1200)
    })

let newLayouts = { 
    layouts:{1200:{},960:{},640:{},480:{},320:{}},
    elements:{},
    addElement(id){
        for(let layout in this.layouts){
            let element = document.getElementById(id)
            let newElementStyles = window.getComputedStyle(element)
            let elementContent = {
                tagName:element.tagName,
                textContent:element.textContent
            }
            let elementStyle = {
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
                    },
                    fontFamily:{
                        count:newElementStyles.fontFamily,
                        isPrivate:false,
                        inherided:1200
                    },
                    color:{
                        count:newElementStyles.color,
                        isPrivate:false,
                        inherided:1200
                    },
                    textDecoration:{
                        count:newElementStyles.textDecoration,
                        isPrivate:false,
                        inherided:1200
                    },
                    fontStyle:{
                        count:newElementStyles.fontStyle,
                        isPrivate:false,
                        inherided:1200
                    },
                    fontWeight:{
                        count:newElementStyles.fontWeight,
                        isPrivate:false,
                        inherided:1200
                    },
                    lineHeight:{
                        count:newElementStyles.lineHeight,
                        isPrivate:false,
                        inherided:1200
                    },
                    textAlign:{
                        count:newElementStyles.textAlign,
                        isPrivate:false,
                        inherided:1200
                    },
                    textTransform:{
                        count:newElementStyles.textTransform,
                        isPrivate:false,
                        inherided:1200
                    },
                    background:{
                        count:newElementStyles.background,
                        isPrivate:false,
                        inherided:1200
                    },
                    display:{
                        count:newElementStyles.display,
                        isPrivate:false,
                        inherided:1200
                    },
                    alignItems:{
                        count:newElementStyles.alignItems,
                        isPrivate:false,
                        inherided:1200
                    },
                    justifyContent:{
                        count:newElementStyles.justifyContent,
                        isPrivate:false,
                        inherided:1200
                    },
                    letterSpacing:{
                        count:newElementStyles.letterSpacing,
                        isPrivate:false,
                        inherided:1200
                    },
                    fontSize:{
                        count:newElementStyles.fontSize,
                        isPrivate:false,
                        inherided:1200
                    },
                    textShadow:{
                        count:newElementStyles.textShadow,
                        isPrivate:false,
                        inherided:1200
                    },
                    margin:{
                        count:newElementStyles.margin,
                        isPrivate:false,
                        inherided:1200
                    },
                    padding:{
                        count:newElementStyles.padding,
                        isPrivate:false,
                        inherided:1200
                    },
                    border:{
                        count:newElementStyles.border,
                        isPrivate:false,
                        inherided:1200
                    },
                    boxShadow:{
                        count:newElementStyles.boxShadow,
                        isPrivate:false,
                        inherided:1200
                    },
                    opacity:{
                        count:newElementStyles.opacity,
                        isPrivate:false,
                        inherided:1200
                    },
                    borderRadius:{
                        count:newElementStyles.borderRadius,
                        isPrivate:false,
                        inherided:1200
                    },
                    transform:{
                        count:newElementStyles.transform,
                        isPrivate:false,
                        inherided:1200
                    }
            }
            this.layouts[layout][id] = {...elementStyle}
            this.elements[id] = {...elementContent}
            console.log()
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
    },
    deleteElement(id){
        delete this.elements[id]
        for(let layout in this.layouts){
            delete this.layouts[layout][id]
        }
    }

}