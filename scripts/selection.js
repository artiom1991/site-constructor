function selectionElement(){    //Функция выделения элемента с классом target
    let layoutStyle = window.getComputedStyle(siteConstructorContent)   //Получаем стили холста
    let layout = parseInt(layoutStyle.width)                            // Приводим ширину холста к числовому значению
    let target = document.querySelector(".target")  //Получение элемента с классом target
    let targetLink = document.getElementById(`link-${target.id}`) 
    targetLink.classList.add("selected-link")
    let styles = window.getComputedStyle(target)    //Получение стилей элемента с классом target
    let selection = document.createElement("div")   // Создает div - контейнер для элементов управления выделением
        selection.classList.add("selection")        // задается контейнеру класса selection
        selection.style.width = styles.width        // задает стили ширины, высоты и отступов как у элемента target
        selection.style.height = styles.height
        selection.style.margin = styles.margin
        selection.style.padding = styles.padding
        selection.style.left = styles.left
        selection.style.top = styles.top
        selection.style.boxSizing = styles.boxSizing
        selection.style.border = styles.border
        selection.style.transform = styles.transform
        selection.style.translate = styles.translate
    let topSelection = document.createElement("div")    //создается див который в последствии будет отвечать за разтягивание элемента по верхнему краю
        topSelection.classList.add("topSelection")      // задается класс topSelection
    let bottomSelection = document.createElement("div")
        bottomSelection.classList.add("bottomSelection")
    let leftSelection = document.createElement("div")
        leftSelection.classList.add("leftSelection")
    let rightSelection = document.createElement("div")
        rightSelection.classList.add("rightSelection")


    let leftTopCorner = document.createElement("div")
        leftTopCorner.classList.add("leftTopCorner")
    let leftBottomCorner = document.createElement("div")
        leftBottomCorner.classList.add("leftBottomCorner")
    let righTopCorner = document.createElement("div")
        righTopCorner.classList.add("righTopCorner")
    let righBottomCorner = document.createElement("div")
        righBottomCorner.classList.add("righBottomCorner")

    let selectionSize = document.createElement("div")
    let selectionSizeH = document.createElement("span")
    let selectionSizeW = document.createElement("span")
        selectionSize.classList.add("selectionSize")
        selectionSizeH.textContent = ` : ${styles.height}`
        selectionSizeW.textContent = `${styles.width}`
        selectionSize.append(selectionSizeW,selectionSizeH)
    let targetLeft = document.createElement("span")
        targetLeft.classList.add("targetLeft")
    let targetTop = document.createElement("span")
        targetTop.classList.add("targetTop")
        targetLeft.textContent = `${styles.left}`
        targetTop.textContent = ` ${styles.top}`
        selectionSize.addEventListener('mousedown', function(event) {event.stopPropagation()})
        selection.append(topSelection,bottomSelection,leftSelection,leftTopCorner,leftBottomCorner,rightSelection,righTopCorner,righBottomCorner,selectionSize,targetTop,targetLeft)   // все созданые элементы управления помещаются в родительский контейнер Selection
        siteConstructorContainer.append(selection)  // Div Selection помещается в родительский элемент siteConstructorContainer

//Создается событие для Selection


if(["P", "SPAN", "B", "A", "H1", "H2", "H3", "H4", "H5", "H6"].includes(target.tagName)){
    selection.addEventListener("dblclick",function(){   //создается событие по двойному клику для элемента selection
        if(!target.classList.contains("shape")){        // проверка есть ли у цели события  class shape и если отсутствует выполняет код
            let createElementMenu = document.querySelector(".menu-container")
                createElementMenu.classList.toggle("menu-container-show")
            let textFocusMenu = document.querySelector(".text-focus-menu")
            textFocusMenu.classList.add("text-focus-menu-show")
            target.setAttribute("contenteditable", "true")  //элементу с классом target задается атрибут contenteditable со значением true чтобы редактировать текст
            target.focus()                                  // создается фокус на элемент с классом target
            selection.remove()                              // удаляется элемент выделения selection
        }
    })
}
        //Перенос всего элемента
        selection.addEventListener("mousedown", function(e){     // создается событие по удержанию лкм по элементу выделения selection
            if (e.button === 0){
                targetLeft.style.display = "block"
                targetTop.style.display = "block"
                selectionSize.style.display = "none"
                window.addEventListener("mousemove",moveSelection)  // задается событие окну window которое отслеживает перемещение мышки и запускает функцию moveSelection
            }
        })
        selection.addEventListener("mouseup", function(){       // создается событие по отпусканию лкм с элемента выделения selection
            targetLeft.style.display = "none"
            targetTop.style.display = "none"
            selectionSize.style.display = "block"
            window.removeEventListener("mousemove",moveSelection)   // удаляется событие которое отслеживает координаты курсора
        })


// обработчик событий leftBottomCorner
        leftBottomCorner.addEventListener("mousedown", function(event){  window.addEventListener("mousemove",scaleLeftBottomCorner),event.stopPropagation()})
        window.addEventListener("mouseup", function(){window.removeEventListener("mousemove", scaleLeftBottomCorner) })
// обработчик событий leftTopCorner
        leftTopCorner.addEventListener("mousedown", function(event){window.addEventListener("mousemove",scaleLeftTopCorner),event.stopPropagation()})
        window.addEventListener("mouseup", function(){window.removeEventListener("mousemove", scaleLeftTopCorner)})
// обработчик событий righTopCorner
        righTopCorner.addEventListener("mousedown", function(event){window.addEventListener("mousemove",scaleRightTopCorner),event.stopPropagation()})
        window.addEventListener("mouseup", function(){window.removeEventListener("mousemove", scaleRightTopCorner)})
// обработчик событий righBottomCorner
        righBottomCorner.addEventListener("mousedown", function(event){window.addEventListener("mousemove",scaleRightBottomCorner),event.stopPropagation()})
        window.addEventListener("mouseup", function(){window.removeEventListener("mousemove", scaleRightBottomCorner)})


// обработчик событий rightSelection
        rightSelection.addEventListener("mousedown", function(event){window.addEventListener("mousemove",scaleRightSelection),event.stopPropagation()})
        window.addEventListener("mouseup", function(){window.removeEventListener("mousemove", scaleRightSelection)})
 // обработчик событий bottomSelection
        bottomSelection.addEventListener("mousedown", function(event){window.addEventListener("mousemove",scaleBottomSelection),event.stopPropagation()})
        window.addEventListener("mouseup", function(){window.removeEventListener("mousemove", scaleBottomSelection)})
// обработчик событий leftSelection
        leftSelection.addEventListener("mousedown", function(event){window.addEventListener("mousemove",scaleLeftSelection),event.stopPropagation()})
        window.addEventListener("mouseup", function(){window.removeEventListener("mousemove", scaleLeftSelection)})
// обработчик событий topSelection
        topSelection.addEventListener("mousedown", function(event){window.addEventListener("mousemove",scaleTopSelection),event.stopPropagation()})
        window.addEventListener("mouseup", function(){window.removeEventListener("mousemove", scaleTopSelection)})


// Функции
    function moveSelection({movementX,movementY}){          //функция которая задает позиционирование элементу selection и target
        let layout = parseInt(layoutStyle.width)            // Приводим ширину холста к числовому значению
        let id = target.id                                  // Поулчаем id элемента target
        let getStyle = window.getComputedStyle(selection)   // получение стилей элемента selection
        let left = parseInt(getStyle.left)                  // приводит позиционирование из left="100px" в число 100
        let top = parseInt(getStyle.top)  
            selection.style.top = `${top+movementY}px`          //считает сумму прошлого позиционирования элемента и длину передвижаения курсора а так же задает новое позиционирование
            selection.style.left = `${left+movementX}px` 
            target.style.top = `${top+movementY}px` 
            target.style.left = `${left+movementX}px` 
            targetLeft.textContent = `${left+movementX}px` 
            targetTop.textContent = `${top+movementY}px` 
        let newStyles = {top:`${top+movementY}px` , left:`${left+movementX}px` }
            newLayouts.changeStyle(newStyles,id,layout)
    }

    function scaleLeftBottomCorner({movementX,movementY}){  // функция которая получает координаты мышки и рассчитывает куда она движится по оси X и Y
        let layout = parseInt(layoutStyle.width) 
        let targetElement = document.querySelector(".target")   // Получаем элемент с классом .target
        let id = targetElement.id                               //Получаем Id элемента target
        let targetStyle = window.getComputedStyle(targetElement)    //получаем стили элемента .target
        let selectionStyle = window.getComputedStyle(selection)     //Получает стили элемента selection
        let targetWidth = parseInt(targetStyle.width)       // приводит значение ширины высоты и позицианирования из формата '100px' в численое значение 100
        let targetHeigth = parseInt(targetStyle.height)     
        let targetLeft = parseInt(targetStyle.left)
        let selectionStyleWidth = parseInt(selectionStyle.width)
        let selectionStyleHeigth = parseInt(selectionStyle.height)
        let selectionStyleLeft = parseInt(selectionStyle.left)
            if(selectionStyleWidth+(-movementX)>=10){
                    selection.style.width = `${selectionStyleWidth+(-movementX)}px` // задает ширину обьекту selection (старая ширина + движение по оси X с противоположным знаком) таким образом меняет ширину выделения
                    targetElement.style.width = `${targetWidth+(-movementX)}px`     // задает ширину обьекту target (старая ширина + движение по оси X с противоположным знаком) таким образом меняет ширину выделения
                    selection.style.left = `${selectionStyleLeft+movementX}px`       // Рассчитывает позиционирование по оси X
                    targetElement.style.left = `${targetLeft+movementX}px`
                    selectionSizeW.textContent = `${targetWidth+(-movementX)}px`
                let newStyles = { width:`${targetWidth+(-movementX)}px`, left:`${targetLeft+movementX}px`}
                    newLayouts.changeStyle(newStyles,id,layout)
            }
            if(selectionStyleHeigth+movementY>=10){
                    selection.style.height = `${selectionStyleHeigth+movementY}px`  // Рассчитывает высоту
                    targetElement.style.height = `${targetHeigth+movementY}px`
                    selectionSizeH.textContent = `${targetHeigth+movementY}px`
                let newStyles = { height:`${targetHeigth+movementY}px`}
                    newLayouts.changeStyle(newStyles,id,layout)
            }
    }

    function scaleLeftTopCorner({movementX,movementY}){
        let layout = parseInt(layoutStyle.width) 
        let targetElement = document.querySelector(".target")
        let id = targetElement.id
        let targetStyle = window.getComputedStyle(targetElement)
        let selectionStyle = window.getComputedStyle(selection)
        let targetWidth = parseInt(targetStyle.width)
        let targetHeigth = parseInt(targetStyle.height)
        let targetTop = parseInt(targetStyle.top)
        let targetLeft = parseInt(targetStyle.left)
        let selectionStyleWidth = parseInt(selectionStyle.width)
        let selectionStyleHeigth = parseInt(selectionStyle.height)
        let selectionStyleTop = parseInt(selectionStyle.top)
        let selectionStyleLeft = parseInt(selectionStyle.left)
            if(selectionStyleWidth+(-movementX)>=10){
                    selection.style.width = `${selectionStyleWidth+(-movementX)}px`
                    targetElement.style.width = `${targetWidth+(-movementX)}px`
                    selection.style.left = `${selectionStyleLeft+movementX}px`
                    targetElement.style.left = `${targetLeft+movementX}px`
                    selectionSizeW.textContent = `${targetWidth+(-movementX)}px`
                let newStyles = { left:`${targetLeft+movementX}px`, width:`${targetWidth+(-movementX)}px`}
                    newLayouts.changeStyle(newStyles,id,layout)
            }
            if(selectionStyleHeigth+(-movementY)>=10){
                selection.style.height = `${selectionStyleHeigth+(-movementY)}px`
                targetElement.style.height = `${targetHeigth+(-movementY)}px`
                selection.style.top = `${selectionStyleTop+movementY}px`
                targetElement.style.top = `${targetTop+movementY}px`
                selectionSizeH.textContent = `${targetHeigth+(-movementY)}px`
                let newStyles = { height:`${targetHeigth+(-movementY)}px`, top:`${targetTop+movementY}px`}
                    newLayouts.changeStyle(newStyles,id,layout)
            }
    }

        function scaleRightTopCorner({movementX,movementY}){
            let layout = parseInt(layoutStyle.width) 
            let targetElement = document.querySelector(".target")
            let id = targetElement.id
            let targetStyle = window.getComputedStyle(targetElement)
            let selectionStyle = window.getComputedStyle(selection)
            let targetWidth = parseInt(targetStyle.width)
            let targetHeigth = parseInt(targetStyle.height)
            let targetTop = parseInt(targetStyle.top)
            let selectionStyleWidth = parseInt(selectionStyle.width)
            let selectionStyleHeigth = parseInt(selectionStyle.height)
            let selectionStyleTop = parseInt(selectionStyle.top)
            if(selectionStyleHeigth+(-movementY)>=10){
                selection.style.height = `${selectionStyleHeigth+(-movementY)}px`
                targetElement.style.height = `${targetHeigth+(-movementY)}px`
                selection.style.top = `${selectionStyleTop+movementY}px`
                targetElement.style.top = `${targetTop+movementY}px`
                selectionSizeH.textContent = `${targetHeigth+(-movementY)}px`
                let newStyles = { height:`${targetHeigth+(-movementY)}px`, top:`${targetTop+movementY}px`}
                    newLayouts.changeStyle(newStyles,id,layout)
            }
            if(selectionStyleWidth+movementX>=10){
                selection.style.width = `${selectionStyleWidth+movementX}px`
                targetElement.style.width = `${targetWidth+movementX}px`
                selectionSizeW.textContent = `${targetWidth+movementX}px`
                let newStyles = { width:`${targetWidth+movementX}px`}
                    newLayouts.changeStyle(newStyles,id,layout)
            }
        }

        function scaleRightBottomCorner({movementX,movementY}){
            let layout = parseInt(layoutStyle.width) 
            let targetElement = document.querySelector(".target")
            let id = targetElement.id
            let targetStyle = window.getComputedStyle(targetElement)
            let selectionStyle = window.getComputedStyle(selection)
            let targetWidth = parseInt(targetStyle.width)
            let targetHeigth = parseInt(targetStyle.height)
            let selectionStyleWidth = parseInt(selectionStyle.width)
            let selectionStyleHeight = parseInt(selectionStyle.height)
                if(selectionStyleWidth+movementX>=10){
                    selection.style.width = `${selectionStyleWidth+movementX}px`
                    targetElement.style.width = `${targetWidth+movementX}px`
                    selectionSizeW.textContent = `${targetWidth+movementX}px`
                    let newStyles = { width:`${targetWidth+movementX}px`}
                        newLayouts.changeStyle(newStyles,id,layout)}
                if(targetHeigth+movementY>=10){
                    targetElement.style.height = `${targetHeigth+movementY}px`
                    selection.style.height = `${selectionStyleHeight+movementY}px`
                    selectionSizeH.textContent = `${selectionStyleHeight+movementY}px`
                    let newStyles = {height:`${selectionStyleHeight+movementY}px`}
                        newLayouts.changeStyle(newStyles,id,layout)
                }
        }

    function scaleRightSelection({movementX}){
        let layout = parseInt(layoutStyle.width) 
        let targetElement = document.querySelector(".target")
        let id = targetElement.id
        let targetStyle = window.getComputedStyle(targetElement)
        let selectionStyle = window.getComputedStyle(selection)
        let targetWidth = parseInt(targetStyle.width)
        let selectionStyleWidth = parseInt(selectionStyle.width)
            selection.style.height = targetStyle.height
            if(selectionStyleWidth+movementX>=10){
                selection.style.width = `${selectionStyleWidth+movementX}px`
            }
            if(targetWidth+movementX>=10){
                    targetElement.style.width = `${targetWidth+movementX}px`
                    selectionSizeW.textContent = `${targetWidth+movementX}px`
                let newStyles = { width:`${targetWidth+movementX}px`}
                    newLayouts.changeStyle(newStyles,id,layout)
            }
    }

    function scaleTopSelection({movementY}){
        let layout = parseInt(layoutStyle.width) 
        let targetElement = document.querySelector(".target")
        let id = targetElement.id
        let targetStyle = window.getComputedStyle(targetElement)
        let selectionStyle = window.getComputedStyle(selection)
        let targetHeigth = parseInt(targetStyle.height)
        let targetTop = parseInt(targetStyle.top)
        let selectionStyleHeigth = parseInt(selectionStyle.height)
        let selectionStyleTop = parseInt(selectionStyle.top)
            selection.style.width = targetStyle.width
            if(selectionStyleHeigth+(-movementY)>=10 || selectionStyleHeigth+(-movementY)> targetHeigth){
                    selection.style.height = `${selectionStyleHeigth+(-movementY)}px`
                    selection.style.top  = `${selectionStyleTop+movementY}px`
                    targetElement.style.height = `${targetHeigth+(-movementY)}px`
                    targetElement.style.top = `${targetTop+movementY}px`
                    selectionSizeH.textContent = `${selectionStyleHeigth+(-movementY)}px`
                let newStyles = { top:`${targetTop+movementY}px`, height:`${targetHeigth+(-movementY)}px`}
                    newLayouts.changeStyle(newStyles,id,layout)
            }
    }

    function scaleLeftSelection({movementX}){
        let layout = parseInt(layoutStyle.width) 
        let targetElement = document.querySelector(".target")
        let id = targetElement.id
        let targetStyle = window.getComputedStyle(targetElement)
        let selectionStyle = window.getComputedStyle(selection)
        let targetWidth = parseInt(targetStyle.width)
        let targetLeft = parseInt(targetStyle.left)
        let selectionStyleWidth = parseInt(selectionStyle.width)
            selection.style.height = targetStyle.height
            if(selectionStyleWidth+(-movementX)>=10){
                selection.style.left = `${targetLeft+movementX}px`
                selection.style.width = `${selectionStyleWidth+(-movementX)}px`
                targetElement.style.width = `${targetWidth+(-movementX)}px`
                targetElement.style.left = `${targetLeft+movementX}px`
                selectionSizeW.textContent = `${targetWidth+(-movementX)}px`
                let newStyles = { left:`${targetLeft+movementX}px`, width:`${targetWidth+(-movementX)}px`}
                    newLayouts.changeStyle(newStyles,id,layout)
            }
    }

    function scaleBottomSelection({movementY}){
        let layout = parseInt(layoutStyle.width) 
        let targetElement = document.querySelector(".target")
        let id = targetElement.id
        let targetStyle = window.getComputedStyle(targetElement)
        let selectionStyle = window.getComputedStyle(selection)
        let targetHeigth = parseInt(targetStyle.height)
        let selectionStyleHeigth = parseInt(selectionStyle.height)
            selection.style.width = targetStyle.width
            if(selectionStyleHeigth+movementY>=10 || selectionStyleHeigth+movementY > targetHeigth){
                selection.style.height = `${selectionStyleHeigth+movementY}px`
                targetElement.style.height = `${targetHeigth+movementY}px`
                selectionSizeH.textContent = `${targetHeigth+movementY}px`
                let newStyles = { height:`${targetHeigth+movementY}px`}
                    newLayouts.changeStyle(newStyles,id,layout)
            }
    }
}
