
siteConstructorContainer.addEventListener("click", function(e){ 
    let targetClick = e.target      
    let target = document.querySelectorAll(".target") 
    let selectedLink = document.querySelectorAll(".selected-link") 
    let selection = document.querySelector(".selection")  
        if(targetClick.classList.contains("selection") == false){
            if(selection){     
                selection.remove()  
                textStyleEditor.style.display = "none"
                generalStyleEditor.style.display = "none"
                buttonStyleEditor.style.display = "none"
                }
            target.forEach(el=>{ 
                el.classList.remove("target") 
                })
            selectedLink.forEach(el=>{ 
                el.classList.remove("selected-link")
                })
        }

        if(targetClick.classList.contains("element")){
            let targetStyle = window.getComputedStyle(targetClick)
                targetClick.classList.add("target") 
                if(targetClick.tagName === "BUTTON"){
                    buttonStyleEditor.style.display = "block"
                }
            if(["P", "SPAN", "B", "A", "H1", "H2", "H3", "H4", "H5", "H6","BUTTON"].includes(targetClick.tagName)){
                let font = document.getElementById("font")
                font.value= targetStyle.fontFamily
                let color = document.querySelector(".input-color")
                    color.style.background = targetStyle.color
                let textDecoration = document.getElementById("text-decoration")
                    textDecoration.value= targetStyle.textDecorationLine
                let fontSize = document.getElementById("font-size")
                    fontSize.value = parseInt(targetStyle.fontSize)
                let fontStyle = document.getElementById("font-style")
                    fontStyle.value = targetStyle.fontStyle
                let fontWeight = document.getElementById("font-weight")
                    fontWeight.value = targetStyle.fontWeight
                let letterSpacing = document.getElementById("letter-spacing")
                    letterSpacing.value = parseInt(targetStyle.letterSpacing)?parseInt(targetStyle.letterSpacing):0
                let lineHeight = document.getElementById("line-height")
                    lineHeight.value = parseInt(targetStyle.lineHeight)?parseInt(targetStyle.lineHeight):0
                let textAlign = document.getElementById("text-align")
                    textAlign.value = targetStyle.textAlign
                let textTransform = document.getElementById("text-transform")
                    textTransform.value = targetStyle.textTransform
                let textShadowX = document.getElementById("text-shadow-x")
                let textShadowStyle = targetStyle.textShadow
                let textShadowSplit = textShadowStyle.split(" ")
                    textShadowX.value = textShadowSplit[3] ? parseInt(textShadowSplit[3]): 0
                let textShadowY = document.getElementById("text-shadow-y")
                    textShadowY.value = textShadowSplit[4] ? parseInt(textShadowSplit[4]): 0
                let textShadowBlur = document.getElementById("text-shadow-blur")
                    textShadowBlur.value = textShadowSplit[5] ? parseInt(textShadowSplit[5]): 0
                let pseudoTextShadowColor = document.getElementById("pseudo-text-shadow-color")
                    pseudoTextShadowColor.style.background = textShadowSplit[1]?`${textShadowSplit[0]}${textShadowSplit[1]}${textShadowSplit[2]}`: "rgb(0, 0, 0)"
                    textStyleEditor.style.display = "block"
                    }
                let height = document.getElementById("height-input")
                    height.value = parseInt(targetStyle.height)
                let width = document.getElementById("width-input")
                    width.value = parseInt(targetStyle.width)
                let marginTop = document.getElementById("margin-top-input")
                    marginTop.value = parseInt(targetStyle.marginTop)
                let marginRight = document.getElementById("margin-right-input")
                    marginRight.value = parseInt(targetStyle.marginRight)
                let marginBottom = document.getElementById("margin-bottom-input")
                    marginBottom.value = parseInt(targetStyle.marginBottom)
                let marginLeft = document.getElementById("margin-left-input")
                    marginLeft.value = parseInt(targetStyle.marginLeft)
                let paddingTop = document.getElementById("padding-top-input")
                    paddingTop.value = parseInt(targetStyle.paddingTop)
                let paddingRight = document.getElementById("padding-right-input")
                    paddingRight.value = parseInt(targetStyle.paddingRight)
                let paddingBottom = document.getElementById("padding-bottom-input")
                    paddingBottom.value = parseInt(targetStyle.paddingBottom)
                let paddingLeft = document.getElementById("padding-left-input")
                    paddingLeft.value = parseInt(targetStyle.paddingLeft)
                let positionLeft = document.getElementById("position-left-input")
                    positionLeft.value = parseInt(targetStyle.left)
                let positionTop = document.getElementById("position-top-input")
                    positionTop.value = parseInt(targetStyle.top)
                let pseudoBackground = document.getElementById("pseudo-background")
                    pseudoBackground.style.background = targetStyle.background
                let border = document.getElementById("border-input")
                    border.value = parseInt(targetStyle.borderBlockStartWidth)
                let pseudoBorderColor = document.getElementById("pseudo-border-color")
                    pseudoBorderColor.style.background = targetStyle.borderBlockColor
                let boxShadowTop = document.getElementById("box-shadow-top")
                let boxShadowStyle = targetStyle.boxShadow
                let boxShadowSplit = boxShadowStyle.split(" ")
                    boxShadowTop.value = boxShadowSplit[4] ? parseInt(boxShadowSplit[4]): 0
                let boxShadowLeft = document.getElementById("box-shadow-left")
                    boxShadowLeft.value = boxShadowSplit[3] ? parseInt(boxShadowSplit[3]): 0
                let boxShadowBlur = document.getElementById("box-shadow-blur")
                    boxShadowBlur.value = boxShadowSplit[5] ? parseInt(boxShadowSplit[5]): 0
                let pseudoBoxShadowColor = document.getElementById("pseudo-box-shadow-color")
                    pseudoBoxShadowColor.style.background = boxShadowSplit[1]?`${boxShadowSplit[0]}${boxShadowSplit[1]}${boxShadowSplit[2]}`: "rgb(0, 0, 0)"
                let opacity = document.getElementById("opacity-input")
                let opacityText = document.getElementById("opacity-text")
                    opacityText.textContent = (targetStyle.opacity*100)
                    opacity.value = (targetStyle.opacity*100)
                let borderRadius = document.getElementById("border-radius-input")
                    borderRadius.value = parseInt(targetStyle.borderRadius)
                let display = document.getElementById("display-select")
                    display.value = targetStyle.display
                let alignItems = document.getElementById("align-items-select")
                    alignItems.value = targetStyle.alignItems
                let justifyContent = document.getElementById("justify-content-select")
                    justifyContent.value = targetStyle.justifyContent
                let matrixArr = targetStyle.transform.replace(/[^\d,-.\s]/g, "").trim().split(",")
                let deg = Math.round(Math.atan2(matrixArr[2], matrixArr[0]) * 180 / Math.PI)
                let translateX = document.getElementById("translate-x-input")
                    translateX.value = matrixArr[4]?parseInt(matrixArr[4]):0
                let translateY = document.getElementById("translate-y-input")
                    translateY.value = matrixArr[5]?parseInt(matrixArr[5]):0
                let rotate = document.getElementById("rotate-input")
                    rotate.value = -deg?-deg:0
                    generalStyleEditor.style.display = "block"
            if(targetClick.hasAttribute("contenteditable")  === false){
                selectionElement()        
                }
        }
})