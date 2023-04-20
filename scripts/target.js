
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
            targetClick.classList.add("target")        //Задает цели события класс target
            if(["P", "SPAN", "B", "A", "H1", "H2", "H3", "H4", "H5", "H6"].includes(targetClick.tagName)){

                let targetStyle = window.getComputedStyle(targetClick)
                let font = document.getElementById("font")
                font.value= targetStyle.fontFamily
                let color = document.querySelector(".input-color")
                    color.style.background = targetStyle.color
                let textDecoration = document.getElementById("text-decoration")
                let fontSize = document.getElementById("font-size")
                let fontStyle = document.getElementById("font-style")
                let fontWeight = document.getElementById("font-weight")
                let letterSpacing = document.getElementById("letter-spacing")
                let lineHeight = document.getElementById("line-height")
                let textAlign = document.getElementById("text-align")
                let textTransform = document.getElementById("text-transform")
                let textShadowX = document.getElementById("text-shadow-x")
                let textShadowY = document.getElementById("text-shadow-y")
                let textShadowColor = document.getElementById("text-shadow-color")
                let height = document.getElementById("height-input")
                let width = document.getElementById("width-input")
                let marginTop = document.getElementById("margin-top-input")
                let marginRight = document.getElementById("margin-right-input")
                let marginBottom = document.getElementById("margin-bottom-input")
                let marginLeft = document.getElementById("margin-left-input")
                let paddingTop = document.getElementById("padding-top-input")
                let paddingRight = document.getElementById("padding-right-input")
                let paddingBottom = document.getElementById("padding-bottom-input")
                let paddingLeft = document.getElementById("padding-left-input")
                let positionLeft = document.getElementById("position-left-input")
                let positionTop = document.getElementById("position-top-input")
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
                textStyleEditor.style.display = "block"
                }
            generalStyleEditor.style.display = "block"
            if(targetClick.hasAttribute("contenteditable")  === false){ // Проверяет есть ли у элемента клика атрибут contenteditable и если он отсутствует выполняет код
                selectionElement()         // ВЫПОЛНЕНИЕ ФУНКЦИИ КОТОРАЯ СОЗДАСТ Selection
                }
        }
})