// Стили для текста

function changeStyle(event,styleName){
    let layoutStyle = window.getComputedStyle(siteConstructorContent)
    let layout = parseInt(layoutStyle.width)   
    let target = document.querySelector(".target")
    let selection = document.querySelector(".selection")
    if(target){ 
        let id = target.id  
            target.style[styleName] = `${event.target.value}`
            newLayouts.changeStyle({ [styleName] : `${event.target.value}`},id,layout)
    }   
    if(selection){ selection.remove(), selectionElement() }
}

let font = document.getElementById("font")
    font.addEventListener("change", function(event){ changeStyle(event,"font-family") })

let pseudoFontColor = document.querySelector(".input-color")
    pseudoFontColor.addEventListener("click", function(){ color.click() })
let color = document.getElementById("color")
    color.addEventListener("input", function(event){ changeStyle(event,"color") })
    color.addEventListener("input", function(event){ 
        pseudoFontColor.style.backgroundColor = `${event.target.value}`
    })

let textDecoration = document.getElementById("text-decoration")
    textDecoration.addEventListener("change", function(event){ changeStyle(event,"text-decoration") })

let fontStyle = document.getElementById("font-style")
    fontStyle.addEventListener("change", function(event){ changeStyle(event,"font-style") })

let fontWeight = document.getElementById("font-weight")
    fontWeight.addEventListener("change", function(event){ changeStyle(event,"font-weight") })

let textAlign = document.getElementById("text-align")
    textAlign.addEventListener("input", function(event){ changeStyle(event,"text-align") })


let textContent = document.getElementById("add-text")
    textContent.addEventListener("input", function(event){ 
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        if(target){ target.textContent= `${event.target.value}` }   
        if(selection){ selection.remove(), selectionElement() }
    })

let butttonLink = document.getElementById("add-link")
    butttonLink.addEventListener("input", function(event){ 
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        if(target){
            target.setAttribute('button-link', `${event.target.value}`)
            }   
        if(selection){ selection.remove(), selectionElement() }
    })


let textTransform = document.getElementById("text-transform")
    textTransform.addEventListener("input", function(event){ changeStyle(event,"text-transform") })

let pseudoBackground = document.getElementById("pseudo-background")
    pseudoBackground.addEventListener("click", function(){ changeBackground.click() })
let changeBackground = document.getElementById("change-background")
    changeBackground.addEventListener("input", function(event){ changeStyle(event,"background-color") })
    changeBackground.addEventListener("input", function(event){ pseudoBackground.style.backgroundColor = `${event.target.value}` })

let displaySelect = document.getElementById("display-select")
    displaySelect.addEventListener("change", function(event){ changeStyle(event,"display") })

let alignItemsSelect = document.getElementById("align-items-select")
    alignItemsSelect.addEventListener("change", function(event){ changeStyle(event,"align-items") })

let justifyContentSelect = document.getElementById("justify-content-select")
    justifyContentSelect.addEventListener("change", function(event){ changeStyle(event,"justify-content") })

let lineHeight  = document.getElementById("line-height")
    lineHeight.addEventListener("input", function(event){ 
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
            if(target){ 
                let id = target.id  
                    target.style.lineHeight  = `${event.target.value}px`
                    newLayouts.changeStyle({ "line-height" : `${event.target.value}px`},id,layout)
            }
            if(selection){ selection.remove(), selectionElement() }
    })

let letterSpacing = document.getElementById("letter-spacing")
    letterSpacing.addEventListener("input", function(event){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
            if(target){ 
                let id = target.id  
                    target.style.letterSpacing  = `${event.target.value}px`
                    newLayouts.changeStyle({ "letter-spacing" : `${event.target.value}px`},id,layout)
            }
            if(selection){ selection.remove(), selectionElement() }
    })

let fontSizeInput = document.getElementById("font-size")
let fontSizeSelect = document.getElementById("font-px")
    fontSizeInput.addEventListener("input", changeFontSize)
    fontSizeSelect.addEventListener("change", changeFontSize)
    function changeFontSize(){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let fontSizeValue = fontSizeInput.value 
        let fontSizeUm = fontSizeSelect.value
            if(target){ 
                let id = target.id  
                    target.style.fontSize = `${fontSizeValue}${fontSizeUm}` 
                    newLayouts.changeStyle({ "font-size" : `${fontSizeValue}${fontSizeUm}`},id,layout)
            }
            if(selection){ selection.remove(), selectionElement() }
    }

let pseudeTextShadowColor = document.getElementById("pseudo-text-shadow-color")
    pseudeTextShadowColor.addEventListener("click", function(){ textShadowColor.click() })
let textShadowX = document.getElementById("text-shadow-x")
let textShadowY = document.getElementById("text-shadow-y")
let textShadowBlur = document.getElementById("text-shadow-blur")
let textShadowColor = document.getElementById("text-shadow-color")
    textShadowX.addEventListener("input", changeTextShadow)
    textShadowY.addEventListener("input", changeTextShadow)
    textShadowBlur.addEventListener("input", changeTextShadow)
    textShadowColor.addEventListener("input", changeTextShadow)
    function changeTextShadow(){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let xShadow = textShadowX.value + "px"
        let yShadow = textShadowY.value + "px"
        let blurShadow = textShadowBlur.value + "px"
        let colorShadow = textShadowColor.value
            if(target){ 
                let id = target.id 
                    target.style.textShadow = `${xShadow} ${yShadow} ${blurShadow} ${colorShadow}` 
                    pseudeTextShadowColor.style.backgroundColor = textShadowColor.value
                    newLayouts.changeStyle({ "text-shadow" : `${xShadow} ${yShadow} ${blurShadow} ${colorShadow}`},id,layout)
            }
            if(selection){ selection.remove(), selectionElement() }
    }

// Общие стили

let heightInput = document.getElementById("height-input")
let heightSelect = document.getElementById("height-select")
    heightInput.addEventListener("input", changeHeight)
    heightSelect.addEventListener("change", changeHeight)
    function changeHeight(){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let heightValue = heightInput.value 
        let heightUm = heightSelect.value
            if(target){ 
                let id = target.id 
                    target.style.height = `${heightValue}${heightUm}` 
                    newLayouts.changeStyle({ "height" : `${heightValue}${heightUm}`},id,layout)
                    if(target.tagName === "IMG"){
                        target.style.width = "auto"
                        let targetStyles = window.getComputedStyle(target)
                        let newWidth = Math.floor(parseInt(targetStyles.width))
                            widthInput.value = newWidth
                        newLayouts.changeStyle({ "width" : `${newWidth}px` },id,layout)
                    }
            }
            if(selection){ selection.remove(), selectionElement() }
    }

let widthInput = document.getElementById("width-input")
let widthSelect = document.getElementById("width-select")
    widthInput.addEventListener("input", changeWidth)
    widthSelect.addEventListener("change", changeWidth)
    function changeWidth(){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let widthValue = widthInput.value 
        let widthUm = widthSelect.value
            if(target){ 
                let id = target.id 
                    target.style.width = `${widthValue}${widthUm}` 
                    if(target.tagName === "IMG"){
                        target.style.height = "auto"
                        let targetStyles = window.getComputedStyle(target)
                        let newHeight = Math.floor(parseInt(targetStyles.height))
                        heightInput.value = newHeight
                        newLayouts.changeStyle({ "height" : `${newHeight}px` },id,layout)
                    }
                    newLayouts.changeStyle({ "width" : `${widthValue}${widthUm}` },id,layout)
            }
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
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let martinTopValue = marginTopInput.value 
        let martinRightValue = marginRightInput.value 
        let martinBottomValue = marginBottomInput.value 
        let martinLeftValue = marginLeftInput.value 
            if(target){ 
                let id = target.id 
                    target.style.margin = `${martinTopValue}px ${martinRightValue}px ${martinBottomValue}px ${martinLeftValue}px` 
                    newLayouts.changeStyle({ "margin" : `${martinTopValue}px ${martinRightValue}px ${martinBottomValue}px ${martinLeftValue}px` },id,layout)
            }
            if(selection){ selection.remove(), selectionElement() }
    }

let paddinginTopInput = document.getElementById("padding-top-input")
let paddingRightInput = document.getElementById("padding-right-input")
let paddingBottomInput = document.getElementById("padding-bottom-input")
let paddingLeftInput = document.getElementById("padding-left-input")
    paddinginTopInput.addEventListener("input", changePadding)
    paddingRightInput.addEventListener("input", changePadding)
    paddingBottomInput.addEventListener("input", changePadding)
    paddingLeftInput.addEventListener("input", changePadding)
    function changePadding(){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let paddingTopValue = paddinginTopInput.value 
        let paddingRightValue = paddingRightInput.value 
        let paddingBottomValue = paddingBottomInput.value 
        let paddingLeftValue = paddingLeftInput.value 
            if(target){ 
                let id = target.id 
                    target.style.padding = `${paddingTopValue}px ${paddingRightValue}px ${paddingBottomValue}px ${paddingLeftValue}px` 
                    newLayouts.changeStyle({ "padding" : `${paddingTopValue}px ${paddingRightValue}px ${paddingBottomValue}px ${paddingLeftValue}px` },id,layout)
            }
            if(selection){ selection.remove(), selectionElement() }
    }

let positionTopInput = document.getElementById("position-top-input")
let positionTopSelect = document.getElementById("position-top-select")
    positionTopInput.addEventListener("input", changePositionTop)
    positionTopSelect.addEventListener("change", changePositionTop)
    function changePositionTop(){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let topValue = positionTopInput.value 
        let topUm = positionTopSelect.value
            if(target){ 
                let id = target.id
                    target.style.top = `${topValue}${topUm}` 
                    newLayouts.changeStyle({ "top" : `${topValue}${topUm}` },id,layout)
            }
            if(selection){ selection.remove(), selectionElement() }
    }

let positionLeftInput = document.getElementById("position-left-input")
let positionLeftSelect = document.getElementById("position-left-select")
    positionLeftInput.addEventListener("input", changePositionLeft)
    positionLeftSelect.addEventListener("change", changePositionLeft)
    function changePositionLeft(){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let leftValue = positionLeftInput.value 
        let LeftUm = positionLeftSelect.value
            if(target){ 
                let id = target.id
                    target.style.left = `${leftValue}${LeftUm}` 
                    newLayouts.changeStyle({ "left" : `${leftValue}${LeftUm}` },id,layout)
            }
            if(selection){ selection.remove(), selectionElement() }
    }

let pseudoBorderColor = document.getElementById("pseudo-border-color")
    pseudoBorderColor.addEventListener("click", function(){ borderColorInput.click() })
let borderInput = document.getElementById("border-input")
let borderColorInput = document.getElementById("border-color-input")
    borderInput.addEventListener("input", changeBorder)
    borderColorInput.addEventListener("input", changeBorder)
    function changeBorder(){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let BorderValue = borderInput.value 
        let borderColorValue = borderColorInput.value 
            if(target){ 
                let id = target.id
                    target.style.border = `${BorderValue}px ${borderColorValue} solid` 
                    pseudoBorderColor.style.backgroundColor = borderColorValue
                    newLayouts.changeStyle({ "border" : `${BorderValue}px ${borderColorValue} solid` },id,layout)
            }
            if(selection){ selection.remove(), selectionElement() }
    }

let pseudeBoxShadowColor = document.getElementById("pseudo-box-shadow-color")
    pseudeBoxShadowColor.addEventListener("click", function(){ boxShadowColor.click() })
let boxShadowLeft = document.getElementById("box-shadow-left")
let boxShadowTop = document.getElementById("box-shadow-top")
let boxShadowBlur = document.getElementById("box-shadow-blur")
let boxShadowColor = document.getElementById("box-shadow-color")
    boxShadowLeft.addEventListener("input", changeBoxShadow)
    boxShadowTop.addEventListener("input", changeBoxShadow)
    boxShadowBlur.addEventListener("input", changeBoxShadow)
    boxShadowColor.addEventListener("input", changeBoxShadow)
    function changeBoxShadow(){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let leftShadow = boxShadowLeft.value + "px"
        let topShadow = boxShadowTop.value + "px"
        let blurShadow = boxShadowBlur.value + "px"
        let colorShadow = boxShadowColor.value
            if(target){ 
                let id = target.id
                    target.style.boxShadow = `${leftShadow} ${topShadow} ${blurShadow} ${colorShadow}` 
                    pseudeBoxShadowColor.style.backgroundColor = colorShadow
                    newLayouts.changeStyle({ "box-shadow" : `${leftShadow} ${topShadow} ${blurShadow} ${colorShadow}` },id,layout)
            }
            if(selection){ selection.remove(), selectionElement() }
    }

let changeOpacity = document.getElementById("opacity-input")
    changeOpacity.addEventListener("input", function(event){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let opacityText = document.getElementById("opacity-text")
            opacityText.textContent = `${event.target.value}`
            if(target){ 
                let id = target.id
                    target.style.opacity = `${event.target.value / 100}` 
                    newLayouts.changeStyle({ "opacity" : `${event.target.value / 100}` },id,layout)
            }
            if(selection){ selection.remove(), selectionElement() }
    })

let borderRadiusInput = document.getElementById("border-radius-input")
let borderRadiusSelect = document.getElementById("border-radius-select")
    borderRadiusInput.addEventListener("input", changeBorderRadius)
    borderRadiusSelect.addEventListener("change", changeBorderRadius)
    function changeBorderRadius(){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let borderRadiusValue = borderRadiusInput.value 
        let borderRadiustUm = borderRadiusSelect.value
            if(target){ 
                let id = target.id
                    target.style.borderRadius = `${borderRadiusValue}${borderRadiustUm}` 
                    newLayouts.changeStyle({ "border-radius" : `${borderRadiusValue}${borderRadiustUm}` },id,layout)
        }
            if(selection){ selection.remove(), selectionElement() }
    }

let translateXInput = document.getElementById("translate-x-input")
let translateYInput = document.getElementById("translate-y-input")
let rotateXInput = document.getElementById("rotate-input")
    translateXInput.addEventListener("input", changeTransform)
    translateYInput.addEventListener("input", changeTransform)
    rotateXInput.addEventListener("input", changeTransform)
    function changeTransform(){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let translateXValue = translateXInput.value 
        let translateYValue = translateYInput.value 
        let rotateValue = rotateXInput.value 
            if(target){ 
                let id = target.id
                    target.style.transform  = ` translate(${translateXValue}px, ${translateYValue}px) rotate(${rotateValue}deg)` 
                    newLayouts.changeStyle({ "transform" : ` translate(${translateXValue}px, ${translateYValue}px) rotate(${rotateValue}deg)`  },id,layout)
            }
            if(selection){ selection.remove(), selectionElement() }
    }

let leftZero = document.getElementById("left-zero")
    leftZero.addEventListener("click", function(){   
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
            if(target){ 
                let id = target.id
                    target.style.left = `0px` 
                    newLayouts.changeStyle({ "left" : `0px` },id,layout)
                }
            if(selection){ selection.remove(), selectionElement() }
    })

let rightZero = document.getElementById("right-zero")
    rightZero.addEventListener("click", function(){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)    
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let targetStyles = window.getComputedStyle(target)
        let targetWidth = parseInt(targetStyles.width)
        let count = layout-targetWidth
            if(target){ 
                let id = target.id
                    target.style.left = `${count}px`
                    newLayouts.changeStyle({ "left" : `${count}px` },id,layout)
                }
            if(selection){ selection.remove(), selectionElement() }
    })

let leftCenter = document.getElementById("left-center")
    leftCenter.addEventListener("click", function(){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let targetStyles = window.getComputedStyle(target)
        let targetWidth = parseInt(targetStyles.width)
        let count = (layout/2)-(targetWidth/2)
            if(target){ 
                let id = target.id
                    target.style.left = `${count}px` 
                    newLayouts.changeStyle({ "left" : `${count}px` },id,layout)
                }
            if(selection){ selection.remove(), selectionElement() }
    })



let topZero = document.getElementById("top-zero")
    topZero.addEventListener("click", function(){  
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
            if(target){ 
                let id = target.id
                    target.style.top = `0px` 
                    newLayouts.changeStyle({ "top" : `0px` },id,layout)
                }
            if(selection){ selection.remove(), selectionElement() }
    })

let bottomZero = document.getElementById("bottom-zero")
    bottomZero.addEventListener("click", function(){  
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let containerHeight = parseInt(layoutStyle.height)
        let layout = parseInt(layoutStyle.width)    
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let targetStyles = window.getComputedStyle(target)
        let targetHeight = parseInt(targetStyles.height)
        let count = containerHeight-targetHeight
            if(target){ 
                let id = target.id
                    target.style.top = `${count}px`
                    newLayouts.changeStyle({ "top" : `${count}px` },id,layout)
                }
            if(selection){ selection.remove(), selectionElement() }
    })

let topCenter = document.getElementById("top-center")
    topCenter.addEventListener("click", function(){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let containerHeight = parseInt(layoutStyle.height)
        let layout = parseInt(layoutStyle.width)
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let targetStyles = window.getComputedStyle(target)
        let targetHeight = parseInt(targetStyles.height)
        let count = (containerHeight/2)-(targetHeight/2)
            if(target){ 
                let id = target.id
                    target.style.top = `${count}px` 
                    newLayouts.changeStyle({ "top" : `${count}px` },id,layout)
                }
            if(selection){ selection.remove(), selectionElement() }
    })

let zIndexPlus = document.getElementById("z-index-plus").addEventListener("click", bringForward)
    function bringForward(){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let elements = document.getElementById("elements")
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
            if(target){
                let id = target.id
                let childelementnumber = parseInt(target.getAttribute("childelementnumber"))
                let childelementnumberAll = document.querySelectorAll('[childelementnumber]')
                    childelementnumberAll.forEach((el,i)=>{
                        let elId = el.id
                        let atributeValue = parseInt(el.getAttribute('childelementnumber'))
                        if(atributeValue === childelementnumber+1){
                            el.setAttribute("childElementNumber",`${atributeValue-1}`)
                            el.style.zIndex = atributeValue-1
                            newLayouts.changeStyle({ "z-index" : atributeValue-1 },elId,layout)
                            }
                    })
                if(elements.childNodes.length>childelementnumber){
                    target.setAttribute("childElementNumber",`${childelementnumber+1}`)
                    target.style.zIndex = childelementnumber+1
                    newLayouts.changeStyle({ "z-index" : childelementnumber+1 },id,layout)
                    newLayouts.updateElements()
                    }
                }
            if(selection){ selection.remove(), selectionElement() }
    }


let zIndexMinus = document.getElementById("z-index-minus").addEventListener("click", sendBackward)
    function sendBackward(){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let elements = document.getElementById("elements")
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        if(target){
            let id = target.id
            let childelementnumber = parseInt(target.getAttribute("childelementnumber"))
            let childelementnumberAll = document.querySelectorAll('[childelementnumber]')
                childelementnumberAll.forEach((el,i)=>{
                    let elId = el.id
            let atributeValue = parseInt(el.getAttribute('childelementnumber'))
                if(atributeValue === childelementnumber-1){
                    el.setAttribute("childElementNumber",`${atributeValue+1}`)
                    el.style.zIndex = atributeValue+1
                    newLayouts.changeStyle({ "z-index" : atributeValue+1 },elId,layout)
                    }
                })
                if(childelementnumber>1){
                    target.setAttribute("childElementNumber",`${childelementnumber-1}`)
                    target.style.zIndex = childelementnumber-1
                    newLayouts.changeStyle({ "z-index" : childelementnumber-1 },id,layout)
                    newLayouts.updateElements()
                }
            }
        if(selection){ selection.remove(), selectionElement() }
    }


let zIndexFirst = document.getElementById("z-index-first").addEventListener("click",bringToFront)
    function bringToFront(){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let elements = document.getElementById("elements")
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
            if(target){
                let id = target.id
                let ElementLink = document.getElementById(`link-${target.id}`)
                let childelementnumber = parseInt(target.getAttribute("childelementnumber"))  
                let childelementnumberAll = document.querySelectorAll('[childelementnumber]')
                    childelementnumberAll.forEach((el,i)=>{
                        let elId = el.id
                let atributeValue = parseInt(el.getAttribute('childelementnumber'))
                    if(atributeValue > childelementnumber){
                        el.setAttribute("childElementNumber",`${atributeValue-1}`)
                        el.style.zIndex = atributeValue-1
                        newLayouts.changeStyle({ "z-index" : atributeValue-1 },elId,layout)
                        }
                    })
                    target.setAttribute("childElementNumber",`${elements.childNodes.length}`)
                    target.style.zIndex = elements.childNodes.length
                    newLayouts.changeStyle({ "z-index" : elements.childNodes.length },id,layout)
                    newLayouts.updateElements()
                }
            if(selection){ selection.remove(), selectionElement() }
    }




let zIndexLast = document.getElementById("z-index-last").addEventListener("click", sendToBack)
    function sendToBack(){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let elements = document.getElementById("elements")
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
            if(target){
                let id = target.id
                let childelementnumber = parseInt(target.getAttribute("childelementnumber"))  
                let childelementnumberAll = document.querySelectorAll('[childelementnumber]')
                    childelementnumberAll.forEach((el,i)=>{
                        let elId = el.id
                        let atributeValue = parseInt(el.getAttribute('childelementnumber'))
                        if(atributeValue < childelementnumber){
                            el.setAttribute("childElementNumber",`${atributeValue+1}`)
                            el.style.zIndex = atributeValue+1
                            newLayouts.changeStyle({ "z-index" : atributeValue+1 },elId,layout)
                            }
                    })
                    target.setAttribute("childElementNumber",`1`)
                    target.style.zIndex = 1
                    newLayouts.changeStyle({ "z-index" : 1 },id,layout)
                    newLayouts.updateElements()
                }
            if(selection){ selection.remove(), selectionElement() }
    }



    // layoutHeight
let layoutHeightInput = document.getElementById("layout-height-input")
let layoutHeightSelect = document.getElementById("layout-height-select")
    layoutHeightInput.addEventListener("input", changeLayoutHeight)
    layoutHeightSelect.addEventListener("change", changeLayoutHeight)
    function changeLayoutHeight(){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let layoutHeightValue = layoutHeightInput.value 
        let layoutHeightUm = layoutHeightSelect.value
            siteConstructorContent.style.height = `${layoutHeightValue}${layoutHeightUm}` 
            newLayouts.setLayoutStyle({ "height" : `${layoutHeightValue}${layoutHeightUm}`},layout)
    }

let pseudoLayoutColor = document.querySelector(".input-layout-color")
    pseudoLayoutColor.addEventListener("click", function(){ layoutColor.click() })
let layoutColor = document.getElementById("layout-color")
    layoutColor.addEventListener("input", changeLayoutColor)
    function changeLayoutColor(){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        let layoutColorValue = layoutColor.value 
            siteConstructorContent.style["background-color"] = `${layoutColorValue}` 
            pseudoLayoutColor.style["background-color"] = `${layoutColorValue}` 
            newLayouts.setLayoutStyle({ "background-color" : `${layoutColorValue}`},layout)
    }

let imageLink = document.getElementById("image-link")
    imageLink.addEventListener("change", function(event){
        let layoutStyle = window.getComputedStyle(siteConstructorContent)
        let layout = parseInt(layoutStyle.width)
        const reg = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let linkValue = event.target.value
            if(reg.test(linkValue) == true){
                if(target){  
                    let id = target.id
                    let img = new Image()
                        img.src = linkValue
                        img.onload = function() {
                            target.src = linkValue
                            newLayouts.changeImageSrc(id)
                            newLayouts.changeStyle({ "width" : `${target.style.width}`,"height" : `${target.style.height}`},id,layout)
                            if(selection){selection.remove(), selectionElement() }
                            }
                    }
                }
    })
