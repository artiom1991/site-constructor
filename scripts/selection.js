function selectionElement(){    //Функция выделения элемента с классом target
    
    let target = document.querySelector(".target")  //Получение элемента с классом target
    let styles = window.getComputedStyle(target)    //Получение стилей элемента с классом target
    let selection = document.createElement("div")   // Создает div - контейнер для элементов управления выделением
        selection.classList.add("selection")        // задается контейнеру класса selection
        selection.style.width = styles.width        // задает стили ширины, высоты и отступов как у элемента target
        selection.style.height = styles.height
        selection.style.margin = styles.margin
        selection.style.padding = styles.padding
        selection.style.left = styles.left
        selection.style.top = styles.top
    let topSelection = document.createElement("div")    //создается див который в последствии будет отвечать за разтягивание элемента по верхнему краю
        topSelection.classList.add("topSelection")      // задается класс topSelection
    let bottomSelection = document.createElement("div")
        bottomSelection.classList.add("bottomSelection")
    let leftSelection = document.createElement("div")
        leftSelection.classList.add("leftSelection")
    let leftTopCorner = document.createElement("div")
        leftTopCorner.classList.add("leftTopCorner")
    let leftBottomCorner = document.createElement("div")
        leftBottomCorner.classList.add("leftBottomCorner")
    let rightSelection = document.createElement("div")
        rightSelection.classList.add("rightSelection")
    let righTopCorner = document.createElement("div")
        righTopCorner.classList.add("righTopCorner")
    let righBottomCorner = document.createElement("div")
        righBottomCorner.classList.add("righBottomCorner")
        selection.append(topSelection,bottomSelection,leftSelection,leftTopCorner,leftBottomCorner,rightSelection,righTopCorner,righBottomCorner)   // все созданые элементы управления помещаются в родительский контейнер Selection
        siteConstructorContainer.append(selection)  // Div Selection помещается в родительский элемент siteConstructorContainer
    
        selection.addEventListener("dblclick",function(){   //создается событие по двойному клику для элемента selection
            target.setAttribute("contenteditable", "true")  //элементу с классом target задается атрибут contenteditable со значением true чтобы его редактировать
            target.focus()                                  // создается фокус на элемент с классом target
            selection.remove()                              // удаляется элемент выделения selection
        })


                    // обработчик событий righBottomCorner
        leftBottomCorner.addEventListener("mousedown", function(){  // создается событие для элемента управления leftBottomCorner по удержанию левой кнопки мыши
            window.addEventListener("mousemove",scaleLeftBottomCorner)  // задается событие для window которое вызывает функцию scaleLeftBottomCorner по движению мышки
        })
        window.addEventListener("mouseup", function(){  // создается событие для window при отпускании левой кнопки мыши
            window.removeEventListener("mousemove", scaleLeftBottomCorner)  //удаляется событие для window
        })
        function scaleLeftBottomCorner({movementX,movementY}){  // функция которая получает координаты мышки и рассчитывает куда она движится по оси X и Y
            let targetElement = document.querySelector(".target")   // Получаем элемент с классом .target
            let targetStyle = window.getComputedStyle(targetElement)    //получаем стили элемента .target
            let selectionStyle = window.getComputedStyle(selection)     //Получает стили элемента selection
            let targetWidth = parseInt(targetStyle.width)       // приводит значение ширины высоты и позицианирования из формата '100px' в численое значение 100
            let targetHeigth = parseInt(targetStyle.height)     
            let targetLeft = parseInt(targetStyle.left)
            let selectionStyleWidth = parseInt(selectionStyle.width)
            let selectionStyleHeigth = parseInt(selectionStyle.height)
            let selectionStyleLeft = parseInt(selectionStyle.left)
            selection.style.width = `${selectionStyleWidth+(-movementX)}px` // задает ширину обьекту selection (старая ширина + движение по оси X с противоположным знаком) таким образом меняет ширину выделения
            selection.style.height = `${selectionStyleHeigth+movementY}px`  // Рассчитывает высоту
            selection.style.left = `${selectionStyleLeft+movementX}px`       // Рассчитывает позиционирование по оси X
            targetElement.style.width = `${targetWidth+(-movementX)}px`     //Все стили selection и target идентичные
            targetElement.style.height = `${targetHeigth+movementY}px`
            targetElement.style.left = `${targetLeft+movementX}px`
        }


                    // обработчик событий righTopCorner
        leftTopCorner.addEventListener("mousedown", function(){
            window.addEventListener("mousemove",scaleLeftTopCorner)
        })
        window.addEventListener("mouseup", function(){
            window.removeEventListener("mousemove", scaleLeftTopCorner)
        })
        function scaleLeftTopCorner({movementX,movementY}){
            let targetElement = document.querySelector(".target")
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
            selection.style.width = `${selectionStyleWidth+(-movementX)}px`
            selection.style.height = `${selectionStyleHeigth+(-movementY)}px`
            selection.style.top = `${selectionStyleTop+movementY}px`
            selection.style.left = `${selectionStyleLeft+movementX}px`
            targetElement.style.width = `${targetWidth+(-movementX)}px`
            targetElement.style.height = `${targetHeigth+(-movementY)}px`
            targetElement.style.top = `${targetTop+movementY}px`
            targetElement.style.left = `${targetLeft+movementX}px`
        }


                    // обработчик событий righTopCorner
        righTopCorner.addEventListener("mousedown", function(){
            window.addEventListener("mousemove",scaleRightTopCorner)
        })
        window.addEventListener("mouseup", function(){
            window.removeEventListener("mousemove", scaleRightTopCorner)
        })
        function scaleRightTopCorner({movementX,movementY}){
            let targetElement = document.querySelector(".target")
            let targetStyle = window.getComputedStyle(targetElement)
            let selectionStyle = window.getComputedStyle(selection)
            let targetWidth = parseInt(targetStyle.width)
            let targetHeigth = parseInt(targetStyle.height)
            let targetTop = parseInt(targetStyle.top)
            let selectionStyleWidth = parseInt(selectionStyle.width)
            let selectionStyleHeigth = parseInt(selectionStyle.height)
            let selectionStyleTop = parseInt(selectionStyle.top)
            selection.style.height = `${selectionStyleHeigth+(-movementY)}px`
            selection.style.top = `${selectionStyleTop+movementY}px`
            targetElement.style.height = `${targetHeigth+(-movementY)}px`
            targetElement.style.top = `${targetTop+movementY}px`
            selection.style.width = `${selectionStyleWidth+movementX}px`
            targetElement.style.width = `${targetWidth+movementX}px`
        }



            // обработчик событий righBottomCorner
        righBottomCorner.addEventListener("mousedown", function(){
            window.addEventListener("mousemove",scaleRightBottomCorner)
        })
        window.addEventListener("mouseup", function(){
            window.removeEventListener("mousemove", scaleRightBottomCorner)
        })
        function scaleRightBottomCorner({movementX,movementY}){
            let targetElement = document.querySelector(".target")
            let targetStyle = window.getComputedStyle(targetElement)
            let selectionStyle = window.getComputedStyle(selection)
            let targetWidth = parseInt(targetStyle.width)
            let targetHeigth = parseInt(targetStyle.height)
            let selectionStyleWidth = parseInt(selectionStyle.width)
            let selectionStyleHeight = parseInt(selectionStyle.height)
            selection.style.width = `${selectionStyleWidth+movementX}px`
            selection.style.height = `${selectionStyleHeight+movementY}px`
            targetElement.style.width = `${targetWidth+movementX}px`
            targetElement.style.height = `${targetHeigth+movementY}px`
        }


            // обработчик событий rightSelection
        rightSelection.addEventListener("mousedown", function(){
            window.addEventListener("mousemove",scaleRightSelection)
        })
        window.addEventListener("mouseup", function(){
            window.removeEventListener("mousemove", scaleRightSelection)
        })
        function scaleRightSelection({movementX}){
            let targetElement = document.querySelector(".target")
            let targetStyle = window.getComputedStyle(targetElement)
            let selectionStyle = window.getComputedStyle(selection)
            let targetWidth = parseInt(targetStyle.width)
            let selectionStyleWidth = parseInt(selectionStyle.width)
            selection.style.width = `${selectionStyleWidth+movementX}px`
            selection.style.height = targetStyle.height
            targetElement.style.width = `${targetWidth+movementX}px`
        }


        // обработчик событий bottomSelection
        bottomSelection.addEventListener("mousedown", function(){
            window.addEventListener("mousemove",scaleBottomSelection)
        })
        window.addEventListener("mouseup", function(){
            window.removeEventListener("mousemove", scaleBottomSelection)
        })
        function scaleBottomSelection({movementY}){
            let targetElement = document.querySelector(".target")
            let targetStyle = window.getComputedStyle(targetElement)
            let selectionStyle = window.getComputedStyle(selection)
            let targetHeigth = parseInt(targetStyle.height)
            let selectionStyleHeigth = parseInt(selectionStyle.height)
            selection.style.height = `${selectionStyleHeigth+movementY}px`
            selection.style.width = targetStyle.width
            targetElement.style.height = `${targetHeigth+movementY}px`
        }


                // обработчик событий leftSelection
        leftSelection.addEventListener("mousedown", function(){
            window.addEventListener("mousemove",scaleLeftSelection)
        })
        window.addEventListener("mouseup", function(){
            window.removeEventListener("mousemove", scaleLeftSelection)
        })
        function scaleLeftSelection({movementX}){
            let targetElement = document.querySelector(".target")
            let targetStyle = window.getComputedStyle(targetElement)
            let selectionStyle = window.getComputedStyle(selection)
            let targetWidth = parseInt(targetStyle.width)
            let targetLeft = parseInt(targetStyle.left)
            let selectionStyleWidth = parseInt(selectionStyle.width)
            selection.style.width = `${selectionStyleWidth+(-movementX)}px`
            selection.style.height = targetStyle.height
            selection.style.left = targetStyle.left
            targetElement.style.width = `${targetWidth+(-movementX)}px`
            targetElement.style.left = `${targetLeft+movementX}px`
        }


                    // обработчик событий topSelection
        topSelection.addEventListener("mousedown", function(){
            window.addEventListener("mousemove",scaleTopSelection)
        })
        window.addEventListener("mouseup", function(){
            window.removeEventListener("mousemove", scaleTopSelection)
        })
        function scaleTopSelection({movementY}){
            let targetElement = document.querySelector(".target")
            let targetStyle = window.getComputedStyle(targetElement)
            let selectionStyle = window.getComputedStyle(selection)
            let targetHeigth = parseInt(targetStyle.height)
            let targetTop = parseInt(targetStyle.top)
            let selectionStyleHeigth = parseInt(selectionStyle.height)
            selection.style.height = `${selectionStyleHeigth+(-movementY)}px`
            selection.style.width = targetStyle.width
            targetElement.style.height = `${targetHeigth+(-movementY)}px`
            selection.style.top = targetStyle.top
            targetElement.style.top = `${targetTop+movementY}px`
        }
    }