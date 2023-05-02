let siteConstructorContent = document.querySelector(".site-constructor-content")
let textStyleEditor = document.querySelector(".text-style-editor")
let generalStyleEditor = document.querySelector(".general-style-editor")
let buttonStyleEditor = document.querySelector(".button-style-editor")
let layoutStylesEditor = document.querySelector(".layout-style-editor")
let vSmartphone = document.querySelector(".vertical-Smartphone").addEventListener("click", function(){newLayouts.changeLayout(320,"vSmartphone")})
let hSmartphone = document.querySelector(".horizontal-Smartphone").addEventListener("click", function(){newLayouts.changeLayout(480,"hSmartphone")})
let vTablet = document.querySelector(".vertical-Tablet").addEventListener("click", function(){newLayouts.changeLayout(640,"vTablet")})
let hTablet = document.querySelector(".horizontal-Tablet").addEventListener("click", function(){newLayouts.changeLayout(960,"hTablet")})
let hLaptop = document.querySelector(".horizontal-Laptop").addEventListener("click", function(){newLayouts.changeLayout(1200,"laptop")})

let newLayouts = { 
    layouts:{
        1200:{elements:{},styles:{"height":{count:"550px",isPrivate:false,inherided:1200},"color":{count:"#fff",isPrivate:false,inherided:1200}}},
        960:{elements:{},styles:{"height":{count:"550px",isPrivate:false,inherided:1200},"color":{count:"#fff",isPrivate:false,inherided:1200}}},
        640:{elements:{},styles:{"height":{count:"550px",isPrivate:false,inherided:1200},"color":{count:"#fff",isPrivate:false,inherided:1200}}},
        480:{elements:{},styles:{"height":{count:"550px",isPrivate:false,inherided:1200},"color":{count:"#fff",isPrivate:false,inherided:1200}}},
        320:{elements:{},styles:{"height":{count:"550px",isPrivate:false,inherided:1200},"color":{count:"#fff",isPrivate:false,inherided:1200}}}
        },
    elements:{},
    addElement(id){
        for(let layout in this.layouts){
            let element = document.getElementById(id)
            let newElementStyles = window.getComputedStyle(element)
            let elementContent = {tagName:element.tagName,innerHTML:element.innerHTML,childElementNumber:element.getAttribute("childElementNumber")}
            let elementStyle = {
                    "width":{count:newElementStyles.width,isPrivate:false,inherided:1200},
                    "height":{count:newElementStyles.height,isPrivate:false,inherided:1200},
                    "top":{count:newElementStyles.top,isPrivate:false,inherided:1200},
                    "left":{count:newElementStyles.left,isPrivate:false,inherided:1200},
                    "font-family":{count:newElementStyles.fontFamily,isPrivate:false,inherided:1200},
                    "color":{count:newElementStyles.color,isPrivate:false,inherided:1200},
                    "text-decoration":{count:newElementStyles.textDecoration,isPrivate:false,inherided:1200},
                    "font-style":{count:newElementStyles.fontStyle,isPrivate:false,inherided:1200},
                    "font-weight":{count:newElementStyles.fontWeight,isPrivate:false,inherided:1200},
                    "line-height":{count:newElementStyles.lineHeight,isPrivate:false,inherided:1200},
                    "text-align":{count:newElementStyles.textAlign,isPrivate:false,inherided:1200},
                    "text-transform":{count:newElementStyles.textTransform,isPrivate:false,inherided:1200},
                    "background-color":{count:newElementStyles.backgroundColor,isPrivate:false,inherided:1200},
                    "display":{count:newElementStyles.display,isPrivate:false,inherided:1200},
                    "align-items":{count:newElementStyles.alignItems,isPrivate:false,inherided:1200},
                    "justify-content":{count:newElementStyles.justifyContent,isPrivate:false,inherided:1200},
                    "letter-spacing":{count:newElementStyles.letterSpacing,isPrivate:false,inherided:1200},
                    "font-size":{count:newElementStyles.fontSize,isPrivate:false,inherided:1200},
                    "text-shadow":{count:newElementStyles.textShadow,isPrivate:false,inherided:1200},
                    "margin":{count:newElementStyles.margin,isPrivate:false,inherided:1200},
                    "padding":{count:newElementStyles.padding,isPrivate:false,inherided:1200},
                    "border":{count:newElementStyles.border,isPrivate:false,inherided:1200},
                    "box-shadow":{count:newElementStyles.boxShadow,isPrivate:false,inherided:1200},
                    "opacity":{count:newElementStyles.opacity,isPrivate:false,inherided:1200},
                    "border-radius":{count:newElementStyles.borderRadius,isPrivate:false,inherided:1200},
                    "transform":{count:newElementStyles.transform,isPrivate:false,inherided:1200},
                    "z-index":{count:newElementStyles.zIndex,isPrivate:false,inherided:1200},
                    "position":{count:newElementStyles.position,isPrivate:false,inherided:1200}
                }
            this.layouts[layout].elements[id] = {...elementStyle}
            this.elements[id] = {...elementContent}
        }
    },
    changeStyle(styles,id,layoutActive){
        for(let layout in this.layouts){
            if(layoutActive>layout){
                for(let key in styles){
                    if(this.layouts[layout].elements[id][key].isPrivate == false && layoutActive <= this.layouts[layout].elements[id][key].inherided){
                        this.layouts[layout].elements[id][key].count = styles[key]
                        this.layouts[layout].elements[id][key].inherided = layoutActive
                    }
                }
            }
            if(layoutActive == layout){
                for(let key in styles){
                    this.layouts[layout].elements[id][key].count = styles[key]
                    this.layouts[layout].elements[id][key].inherided = layoutActive
                    this.layouts[layout].elements[id][key].isPrivate = true
                }
            }
        }
    },
    changeLayout(layout,element){
        let layoutHeight = this.layouts[layout].styles.height
        let screen = document.querySelector(".screen")
        let elementImg = document.querySelector(`.${element}`)
        let elementImgStyles = window.getComputedStyle(elementImg)
            screen.style.backgroundImage = elementImgStyles.backgroundImage
            screen.style.transform = elementImgStyles.transform
            textStyleEditor.style.display = "none"
            generalStyleEditor.style.display = "none"
            buttonStyleEditor.style.display = "none"
            layoutStylesEditor.style.display = "block"
        let selection = document.querySelector(".selection")
        let allElements = document.querySelectorAll(".element")
            siteConstructorContent.style.width = `${layout}px`
            siteConstructorContent.style.height = layoutHeight ? layoutHeight : "550px";
            siteConstructorContent.style.left = "50%"
            siteConstructorContent.style.top = "50%"
            allElements.forEach(el=>{
                let id = el.id
                for(let key in this.layouts[layout].elements[id]){
                    el.style[key] =  this.layouts[layout].elements[id][key].count
                }
            })
            if(selection){selection.remove()}
    },
    updateElements(){
        let elementsAll = document.querySelectorAll(".element")
            elementsAll.forEach(el=>{
                let id = el.id
                    this.elements[id].childElementNumber = el.getAttribute("childElementNumber")
                    this.elements[id].innerHTML = el.innerHTML
            })
    },
    deleteElement(id){
        delete this.elements[id]
        for(let layout in this.layouts){
            delete this.layouts[layout].elements[id]
        }
    },
    changeInnerHTML(id){
        let element = document.getElementById(id)
        this.elements[id].innerHTML = element.innerHTML
    },
    setLayoutStyle(styles,layoutActive){
        console.log(styles)
        // for(let layout in this.layouts){
        //     if(layoutActive>layout){
        //         if(this.layouts[layout].styles[id][key].isPrivate == false && layoutActive <= this.layouts[layout].elements[id][key].inherided){

        //         }
        //         console.log(">",layout)
        //     }
        //     if(layoutActive == layout){
        //         console.log("=",layout)
        //     }
            
        // }
        this.layouts[layoutActive].styles["height"] = styles.height
        console.log(this)
    }
}