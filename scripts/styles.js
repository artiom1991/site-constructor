// Стили для текста
let font = document.getElementById("font")
    font.addEventListener("change", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        if(target){ target.style.fontFamily = `${event.target.value}` }
        if(selection){ selection.remove(), selectionElement() }
    })

let pseudeFontColor = document.querySelector(".input-color").addEventListener("click", function(){ color.click() })
let color = document.getElementById("color")
    color.addEventListener("input", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
            if(target){ target.style.color = `${event.target.value}` }
            if(selection){ selection.remove(), selectionElement() }
    })

let textDecoration = document.getElementById("text-decoration")
    textDecoration.addEventListener("change", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
            if(target){ target.style.textDecoration = `${event.target.value}` }
            if(selection){ selection.remove(), selectionElement() }
    })

let fontSizeInput = document.getElementById("font-size")
let fontSizeSelect = document.getElementById("font-px")
    fontSizeInput.addEventListener("input", changeFontSize)
    fontSizeSelect.addEventListener("change", changeFontSize)
    function changeFontSize(){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let fontSizeValue = fontSizeInput.value 
        let fontSizeUm = fontSizeSelect.value
            if(target){ target.style.fontSize = `${fontSizeValue}${fontSizeUm}` }
            if(selection){ selection.remove(), selectionElement() }
    }

let fontStyle = document.getElementById("font-style")
    fontStyle.addEventListener("change", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
            if(target){ target.style.fontStyle  = `${event.target.value}` }
            if(selection){ selection.remove(), selectionElement() }
    })

let fontWeight = document.getElementById("font-weight")
    fontWeight.addEventListener("change", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
            if(target){ target.style.fontWeight = `${event.target.value}` }
            if(selection){ selection.remove(), selectionElement() }
    })

let lineHeight  = document.getElementById("line-height")
    lineHeight.addEventListener("input", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
            if(target){ target.style.lineHeight = `${event.target.value}` }
            if(selection){ selection.remove(), selectionElement() }
    })

let letterSpacing = document.getElementById("letter-spacing")
    letterSpacing.addEventListener("input", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
            if(target){ target.style.letterSpacing  = `${event.target.value}px` }
            if(selection){ selection.remove(), selectionElement() }
    })

let textAlign = document.getElementById("text-align")
    textAlign.addEventListener("input", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
            if(target){ target.style.textAlign = `${event.target.value}` }
            if(selection){ selection.remove(), selectionElement() }
    })

let textTransform = document.getElementById("text-transform")
    textTransform.addEventListener("input", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
            if(target){ target.style.textTransform = `${event.target.value}` }
            if(selection){ selection.remove(), selectionElement() }
    })

let pseudeTextShadowColor = document.getElementById("pseudo-text-shadow-color").addEventListener("click", function(){ textShadowColor.click() })
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
            if(target){ target.style.textShadow = `${xShadow} ${yShadow} ${blurShadow} ${colorShadow}` }
            if(selection){ selection.remove(), selectionElement() }
    }

// Общие стили

let heightInput = document.getElementById("height-input")
let heightSelect = document.getElementById("height-select")
    heightInput.addEventListener("input", changeHeight)
    heightSelect.addEventListener("change", changeHeight)
    function changeHeight(){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let heightValue = heightInput.value 
        let heightUm = heightSelect.value
            if(target){ target.style.height = `${heightValue}${heightUm}` }
            if(selection){ selection.remove(), selectionElement() }
    }

let widthInput = document.getElementById("width-input")
let widthSelect = document.getElementById("width-select")
    widthInput.addEventListener("input", changeWidth)
    widthSelect.addEventListener("change", changeWidth)
    function changeWidth(){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let widthValue = widthInput.value 
        let widthUm = widthSelect.value
            if(target){ target.style.width = `${widthValue}${widthUm}` }
            if(selection){ selection.remove(), selectionElement() }
    }

let marginTopInput = document.getElementById("margin-top-input")
let marginRightInput = document.getElementById("margin-right-input")
let marginBottomInput = document.getElementById("margin-bottom-input")
let marginLeftInput = document.getElementById("margin-left-input")
    marginTopInput.addEventListener("input", changeMargin)
    marginRightInput.addEventListener("input", changeMargin)
    marginBottomInput.addEventListener("input", changeMargin)
    marginLeftInput.addEventListener("input", changeMargin)
    function changeMargin(){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let martinTopValue = marginTopInput.value 
        let martinRightValue = marginRightInput.value 
        let martinBottomValue = marginBottomInput.value 
        let martinLeftValue = marginLeftInput.value 
            if(target){ target.style.margin = `${martinTopValue}px ${martinRightValue}px ${martinBottomValue}px ${martinLeftValue}px` }
            if(selection){ selection.remove(), selectionElement() }
    }

let paddinginTopInput = document.getElementById("padding-top")
let paddingRightInput = document.getElementById("padding-right")
let paddingBottomInput = document.getElementById("padding-bottom")
let paddingLeftInput = document.getElementById("padding-left")
    paddinginTopInput.addEventListener("input", changeMargin)
    paddingRightInput.addEventListener("input", changeMargin)
    paddingBottomInput.addEventListener("input", changeMargin)
    paddingLeftInput.addEventListener("input", changeMargin)
    function changeMargin(){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let paddingTopValue = paddinginTopInput.value 
        let paddingRightValue = paddingRightInput.value 
        let paddingBottomValue = paddingBottomInput.value 
        let paddingLeftValue = paddingLeftInput.value 
            if(target){ target.style.padding = `${paddingTopValue}px ${paddingRightValue}px ${paddingBottomValue}px ${paddingLeftValue}px` }
            if(selection){ selection.remove(), selectionElement() }
    }

let positionTopInput = document.getElementById("position-top-input")
let positionTopSelect = document.getElementById("position-top-select")
    positionTopInput.addEventListener("input", changePositionTop)
    positionTopSelect.addEventListener("change", changePositionTop)
    function changePositionTop(){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let topValue = positionTopInput.value 
        let topUm = positionTopSelect.value
            if(target){ target.style.top = `${topValue}${topUm}` }
            if(selection){ selection.remove(), selectionElement() }
    }

let positionLeftInput = document.getElementById("position-left-input")
let positionLeftSelect = document.getElementById("position-left-select")
    positionLeftInput.addEventListener("input", changePositionLeft)
    positionLeftSelect.addEventListener("change", changePositionLeft)
    function changePositionLeft(){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let leftValue = positionLeftInput.value 
        let LeftUm = positionLeftSelect.value
            if(target){ target.style.left = `${leftValue}${LeftUm}` }
            if(selection){ selection.remove(), selectionElement() }
    }



    