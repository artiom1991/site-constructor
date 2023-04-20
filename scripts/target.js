
siteConstructorContainer.addEventListener("click", function(e){ // Событие по клику которое  задает элементу класс target
    let targetClick = e.target      //Переменная в которой хранится ссылка на обьект по которому был клик
    let target = document.querySelectorAll(".target") // Получение всех элементов с классом target
    let selection = document.querySelector(".selection")    //Получение обьекта выделения
        if(targetClick.classList.contains("selection") == false){
            if(selection){              // проверка найден ли элемент selection
                selection.remove()  // удаляется обьект выделения
                textStyleEditor.style.display = "none"
                generalStyleEditor.style.display = "none"
                }
            target.forEach(el=>{         // перебок каждого элемента target
                el.classList.remove("target") // удаление класса target
                })
        }

        if(targetClick.classList.contains("element")){  // Проверка если у обьекта по которому кликнули есть класс element
            let targetStyle = window.getComputedStyle(targetClick)
                targetClick.classList.add("target")        //Задает цели события класс target
            if(["P", "SPAN", "B", "A", "H1", "H2", "H3", "H4", "H5", "H6"].includes(targetClick.tagName)){

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
                    letterSpacing.value = parseInt(targetStyle.letterSpacing)
                let lineHeight = document.getElementById("line-height")
                    lineHeight.value = parseInt(targetStyle.lineHeight)
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
                let background = document.getElementById("change-background")
                let border = document.getElementById("border-input")
                let borderColor = document.getElementById("border-color-input")
                let boxShadowTop = document.getElementById("box-shadow-top")
                let boxShadowLeft = document.getElementById("box-shadow-left")
                let boxShadowBlur = document.getElementById("box-shadow-blur")
                let opacity = document.getElementById("opacity-input")
                let borderRadius = document.getElementById("border-radius-input")
                let display = document.getElementById("display-select")
                let alignItems = document.getElementById("align-items-select")
                let justifyContent = document.getElementById("justify-content-select")
                let translateX = document.getElementById("translate-x-input")
                let translateY = document.getElementById("translate-y-input")
                let rotate = document.getElementById("rotate-input")





            generalStyleEditor.style.display = "block"
            if(targetClick.hasAttribute("contenteditable")  === false){ // Проверяет есть ли у элемента клика атрибут contenteditable и если он отсутствует выполняет код
                selectionElement()         // ВЫПОЛНЕНИЕ ФУНКЦИИ КОТОРАЯ СОЗДАСТ Selection
                }
        }
})