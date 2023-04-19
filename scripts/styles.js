let font = document.getElementById("font")
    font.addEventListener("change", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        if(target){
            target.style.fontFamily = `${event.target.value}`
        }
        if(selection){
            selection.remove()
            selectionElement()
        }
    })

let color = document.getElementById("color")
    color.addEventListener("input", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        if(target){
            target.style.color = `${event.target.value}`
        }
        if(selection){
            selection.remove()
            selectionElement()
        }
    })

let pseudeFontColor = document.querySelector(".input-color")
    pseudeFontColor.addEventListener("click", function(){
        color.click()
    })

let textDecoration = document.getElementById("text-decoration")
    textDecoration.addEventListener("change", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        if(target){
            target.style.textDecoration  = `${event.target.value}`
        }
        if(selection){
            selection.remove()
            selectionElement()
        }
    })

let fontSize = document.getElementById("font-size")
let fontPx = document.getElementById("font-px")
    fontSize.addEventListener("input", function(event){
        console.log("input")
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let px = fontPx.value
        if(target){
            target.style.fontSize  = `${event.target.value+px}`
        }
        if(selection){
            selection.remove()
            selectionElement()
        }
    })
    fontPx.addEventListener("change", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let fontValue = fontSize.value
        console.log(fontValue)
        if(target){
            target.style.fontSize  = `${fontValue+event.target.value}`
        }
        if(selection){
            selection.remove()
            selectionElement()
        }
    })

let fontStyle = document.getElementById("font-style")
    fontStyle.addEventListener("change", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        if(target){
            target.style.fontStyle  = `${event.target.value}`
        }
        if(selection){
            selection.remove()
            selectionElement()
        }
    })

let fontWeight = document.getElementById("font-weight")
    fontWeight.addEventListener("change", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        if(target){
            target.style.fontWeight   = `${event.target.value}`
        }
        if(selection){
            selection.remove()
            selectionElement()
        }
    })

let lineHeight  = document.getElementById("line-height")
    lineHeight.addEventListener("input", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        if(target){
            target.style.lineHeight  = `${event.target.value}`
        }
        if(selection){
            selection.remove()
            selectionElement()
        }
    })
let letterSpacing = document.getElementById("letter-spacing")
    letterSpacing.addEventListener("input", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        if(target){
            target.style.letterSpacing   = `${event.target.value}px`
        }
        if(selection){
            selection.remove()
            selectionElement()
        }
    })

let textAlign = document.getElementById("text-align")
    textAlign.addEventListener("input", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        if(target){
            target.style.textAlign   = `${event.target.value}`
        }
        if(selection){
            selection.remove()
            selectionElement()
        }
    })

let textTransform = document.getElementById("text-transform")
    textTransform.addEventListener("input", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        if(target){
            target.style.textTransform   = `${event.target.value}`
        }
        if(selection){
            selection.remove()
            selectionElement()
        }
    })


let textShadowX = document.getElementById("text-shadow-x")
let textShadowY = document.getElementById("text-shadow-y")
let textShadowBlur = document.getElementById("text-shadow-blur")
let textShadowColor = document.getElementById("text-shadow-color")
    textShadowX.addEventListener("input", changeTextShadow)
    textShadowY.addEventListener("input", changeTextShadow)
    textShadowBlur.addEventListener("input", changeTextShadow)
    textShadowColor.addEventListener("input", changeTextShadow)

function changeTextShadow(){
    let target = document.querySelector(".target")
    let selection = document.querySelector(".selection")
    let xShadow = textShadowX.value + "px"
    let yShadow = textShadowY.value + "px"
    let blurShadow = textShadowBlur.value + "px"
    let colorShadow = textShadowColor.value
    if(target){
        target.style.textShadow    = `${xShadow} ${yShadow} ${blurShadow} ${colorShadow}`
    }
    if(selection){
        selection.remove()
        selectionElement()
    }
}

let pseudeTextShadowColor = document.getElementById("pseudo-text-shadow-color")
    pseudeTextShadowColor.addEventListener("click", function(){
        textShadowColor.click()
    })