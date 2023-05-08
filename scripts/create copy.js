//Функция которая создает ноый элемент
function createNewElement(element,elementClass,zIndex,content,src,inputId){
    let elements = document.getElementById("elements")
    let date = new Date()
    let id = inputId?inputId:date.getTime()
    let blockLinks = document.querySelector(".block-links")
    let ElementLink = document.createElement(`div`)
    let elementType = document.createElement(`span`)
    let elementContent = document.createElement(`span`) 
    let newElement = document.createElement(`${element}`)
        newElement.classList.add("element")
        newElement.id = id
        newElement.style.left = "40%"      
        newElement.style.top = "40%"   
        newElement.style.position = "absolute"     
        newLayouts.changeLayout(1200,"laptop")
        elements.append(newElement) 
        newElement.style.zIndex = zIndex? zIndex:  elements.childElementCount
        newElement.setAttribute("childElementNumber",`${zIndex?zIndex:elements.childElementCount}`) 
        ElementLink.classList.add("element-link")  
        ElementLink.id = "link-"+id                
        ElementLink.addEventListener("click", function(){newElement.click()})
        ElementLink.append(elementType,elementContent)
        blockLinks.append(ElementLink) 
        elementType.textContent = `${element}`
        elementType.classList.add("element-type")    
        elementContent.classList.add("element-content")

//Создание нового элемента
        if(elementClass==="RECTANGLE"){     
                newElement.classList.add("RECTANGLE")         
                newElement.style.width = "200px"          
                newElement.style.height = "200px"       
                newElement.style.backgroundColor = "#d1d1d1" 
                elementContent.textContent = "RECTANGLE"   
            }
            if(elementClass==="CIRCLE"){     
                newElement.classList.add("CIRCLE")         
                newElement.style.width = "200px"          
                newElement.style.height = "200px"    
                newElement.style.borderRadius = "100%"  
                newElement.style.backgroundColor = "#d1d1d1"  
                elementContent.textContent = "CIRCLE"     
            }
            if(elementClass==="LINE"){     
                newElement.classList.add("LINE")         
                newElement.style.width = "200px"          
                newElement.style.height = "1px"   
                newElement.style.minHeight = "1px" 
                newElement.style.backgroundColor = "#d1d1d1"    
                elementContent.textContent = "LINE"   
            }

            if(element==="BUTTON"){                  
                newElement.textContent = "button"   
                newElement.style.padding = "5px 10px" 
                elementContent.textContent = "button"   
                newElement.style.backgroundColor = "#d1d1d1" 
                }



            if(["P", "SPAN", "B", "A", "H1", "H2", "H3", "H4", "H5", "H6"].includes(newElement.tagName)){   
                let createElementMenu = document.querySelector(".menu-container")
                    createElementMenu.classList.toggle("menu-container-show")
                let textFocusMenu = document.querySelector(".text-focus-menu")
                    textFocusMenu.classList.add("text-focus-menu-show")  
                newElement.innerHTML = content?content:"Введите новый текст"
                newElement.setAttribute("contenteditable", "true")    
                newElement.focus()            
                elementContent.innerHTML = content?content:"Введите новый текст"   
                textStyleEditor.style.display = "block"
                generalStyleEditor.style.display = "block"   
            }
            
            if(element==="IMG"){         
                newElement.style.width = "400px"
                newElement.src = src?src:"https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
                newElement.draggable = false
                }

        newLayouts.addElement(id)                       //Создаем стили новому элементу в layouts

//Создает событие для нового элемента
        newElement.addEventListener("mousedown",(e)=>{ // Собтие удержания элемента для перемещения
            if(newElement.hasAttribute("contenteditable")  === false && document.body.classList.contains("movable")=== false){ // проверка наличие атрибута для редактирования
                window.addEventListener("mousemove",moveElement) // событие окна для установления координат
            }
        })

        window.addEventListener("mouseup",()=>{ //Событие которое отслеживает когда отпустится кнопка мыши и элемент будет освобожден
            window.removeEventListener("mousemove", moveElement) // удаление события отслеживания координат мышки
        })
        
        function moveElement({movementX,movementY}){ // Функция на отслеживание координат мышки и перемещения элемента на экране
            let layoutStyle = window.getComputedStyle(siteConstructorContent)   //Получаем стили холста
            let layout = parseInt(layoutStyle.width)                            // Приводим ширину холста к числовому значению
            let getStyle = window.getComputedStyle(newElement) // Получает стили элемента
            let left = parseInt(getStyle.left) // Преобразует строковые числа из стилей в обычное число
            let top = parseInt(getStyle.top)    // Преобразует строковые числа из стилей в обычное число
                newElement.style.top =  `${top+movementY}px`             // Просчитывает и задает параметр для движения элемента
                newElement.style.left = `${left+movementX}px`            // Просчитывает и задает параметр для движения элемента
            let newStyles = { "top":`${top+movementY}px`, "left":`${left+movementX}px`}
                newLayouts.changeStyle(newStyles,id,layout)
        }

        if(["P","H1", "H2", "H3", "H4", "H5", "H6"].includes(newElement.tagName)){
            newElement.addEventListener("blur",function(e){    // Событие которое отслеживает прекращение выделения
                let createElementMenu = document.querySelector(".menu-container")
                    createElementMenu.classList.toggle("menu-container-show")
                let textFocusMenu = document.querySelector(".text-focus-menu")
                    textFocusMenu.classList.toggle("text-focus-menu-show")
                let layoutStyle = window.getComputedStyle(siteConstructorContent)   //Получаем стили холста
                let layout = parseInt(layoutStyle.width)                            // Приводим ширину холста к числовому значению
                let id = this.id
                let linkContent = document.querySelector(`#link-${id} .element-content`)
                let link = document.querySelector(`#link-${id}`)
                    e.target.removeAttribute("contenteditable")     // Удаляет из элемента стрибут который позволяет редактировать текст
                    if( e.target.textContent.length < 1){           // проверка на длину строки
                        e.target.remove()                           // Если строка короче 1 символа удаляет ее
                        link.remove()
                    }
                let txt =  e.target.innerHTML                   // Создает копию содержания элемента
                let newTxt = txt.replaceAll("<div><br></div>","<br>")   // Заменяет блоки с переносом из элемента на перенос строки
                let newTxt1 = newTxt.replaceAll("<div>","<br>")         // Заменяеняет  блок на перенос
                let newTxt2 = newTxt1.replaceAll("</div>","")            // Заменяеняет  блок на перенос
                    e.target.innerHTML = newTxt2                            // Задает элементу обработаный контент
                    e.target.style.height = `auto`
                    linkContent.innerText = e.target.textContent                   // Дублирует новый текст в span элемента ссылки для удобной навигации
                    newLayouts.changeStyle({"height":"auto"},id,layout)
                    newLayouts.updateElements(id)
                    newLayouts.changeInnerHTML(id)
                    textStyleEditor.style.display = "none"
                    generalStyleEditor.style.display = "none"
                    layoutStylesEditor.style.display = "block"
            })
        }

        newElement.addEventListener("click", function(e){   
            e.stopPropagation()
            let targetStyle = window.getComputedStyle(newElement)
            let target = document.querySelectorAll(".target") 
            let selectedLink = document.querySelectorAll(".selected-link")
            let selection = document.querySelector(".selection")  
            let contextContainer = document.getElementById("contextContainer")
                if(contextContainer){contextContainer.remove()}
                if(selection){
                    selection.remove() 
                }
                target.forEach(el=>{ 
                    el.classList.remove("target") 
                    })

                selectedLink.forEach(el=>{ 
                    el.classList.remove("selected-link")
                    })

                newElement.classList.add("target") 

                if(newElement.tagName === "BUTTON"){buttonStyleEditor.style.display = "block"}
                    else{buttonStyleEditor.style.display = "none"}

                if(newElement.tagName === "IMG"){
                    let baseImage = "http://127.0.0.1:5500/images/image.png"
                    let imageLink = document.getElementById("image-link")
                        imageLink.value = newElement.src==baseImage?"":newElement.src
                    imageStylesEditor.style.display = "block"
                    }else{
                        imageStylesEditor.style.display = "none"
                    }

                if(["P", "H1", "H2", "H3", "H4", "H5", "H6","BUTTON"].includes(newElement.tagName)){
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
                        }else{
                            textStyleEditor.style.display = "none"
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
                        layoutStylesEditor.style.display = "none"
                if(newElement.hasAttribute("contenteditable")  === false){
                    selectionElement()        
                    }
        })
}