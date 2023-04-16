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
            if(!target.classList.contains("shape")){
                target.setAttribute("contenteditable", "true")  //элементу с классом target задается атрибут contenteditable со значением true чтобы его редактировать
                target.focus()                                  // создается фокус на элемент с классом target
                selection.remove()                              // удаляется элемент выделения selection
            }
        })

        selection.addEventListener("mousedown", function(){
            window.addEventListener("mousemove",moveSelection)
        })
        selection.addEventListener("mouseup", function(){
            window.removeEventListener("mousemove",moveSelection)
        })

        function moveSelection({movementX,movementY}){ 
            let getStyle = window.getComputedStyle(selection)
            let left = parseInt(getStyle.left) 
            let top = parseInt(getStyle.top)  
            selection.style.top = `${top+movementY}px` 
            selection.style.left = `${left+movementX}px` 
            target.style.top = `${top+movementY}px` 
            target.style.left = `${left+movementX}px` 
        }

                    // обработчик событий righBottomCorner
        leftBottomCorner.addEventListener("mousedown", function(event){  // создается событие для элемента управления leftBottomCorner по удержанию левой кнопки мыши
            window.addEventListener("mousemove",scaleLeftBottomCorner)  // задается событие для window которое вызывает функцию scaleLeftBottomCorner по движению мышки
            event.stopPropagation()
        })
        window.addEventListener("mouseup", function(){  // создается событие для window при отпускании левой кнопки мыши
            window.removeEventListener("mousemove", scaleLeftBottomCorner)  //удаляется событие для window
        })
        function scaleLeftBottomCorner({movementX,movementY}){  // функция которая получает координаты мышки и рассчитывает куда она движится по оси X и Y
            console.log("left-bottom")
            let targetElement = document.querySelector(".target")   // Получаем элемент с классом .target
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
                targetElement.style.width = `${targetWidth+(-movementX)}px`     //Все стили selection и target идентичные
                selection.style.left = `${selectionStyleLeft+movementX}px`       // Рассчитывает позиционирование по оси X
                targetElement.style.left = `${targetLeft+movementX}px`
                }
            if(selectionStyleHeigth+movementY>=10){
                selection.style.height = `${selectionStyleHeigth+movementY}px`  // Рассчитывает высоту
                targetElement.style.height = `${targetHeigth+movementY}px`
                }
        }


                    // обработчик событий righTopCorner
        leftTopCorner.addEventListener("mousedown", function(event){
            window.addEventListener("mousemove",scaleLeftTopCorner)
            event.stopPropagation()
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
            if(selectionStyleWidth+(-movementX)>=10){
                selection.style.width = `${selectionStyleWidth+(-movementX)}px`
                targetElement.style.width = `${targetWidth+(-movementX)}px`
                selection.style.left = `${selectionStyleLeft+movementX}px`
                targetElement.style.left = `${targetLeft+movementX}px`
                }
            if(selectionStyleHeigth+(-movementY)>=10){
                selection.style.height = `${selectionStyleHeigth+(-movementY)}px`
                targetElement.style.height = `${targetHeigth+(-movementY)}px`
                selection.style.top = `${selectionStyleTop+movementY}px`
                targetElement.style.top = `${targetTop+movementY}px`
                }
        }


                    // обработчик событий righTopCorner
        righTopCorner.addEventListener("mousedown", function(event){
            window.addEventListener("mousemove",scaleRightTopCorner)
            event.stopPropagation()
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
            if(selectionStyleHeigth+(-movementY)>=10){
                selection.style.height = `${selectionStyleHeigth+(-movementY)}px`
                targetElement.style.height = `${targetHeigth+(-movementY)}px`
                selection.style.top = `${selectionStyleTop+movementY}px`
                targetElement.style.top = `${targetTop+movementY}px`
                }
            if(selectionStyleWidth+movementX>=10){
                selection.style.width = `${selectionStyleWidth+movementX}px`
                targetElement.style.width = `${targetWidth+movementX}px`
                }
        }



            // обработчик событий righBottomCorner
        righBottomCorner.addEventListener("mousedown", function(event){
            window.addEventListener("mousemove",scaleRightBottomCorner)
            event.stopPropagation()
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
            if(selectionStyleWidth+movementX>=10){
                selection.style.width = `${selectionStyleWidth+movementX}px`
                targetElement.style.width = `${targetWidth+movementX}px`
                }
            if(targetHeigth+movementY>=10){
                targetElement.style.height = `${targetHeigth+movementY}px`
                selection.style.height = `${selectionStyleHeight+movementY}px`
                }
        }


            // обработчик событий rightSelection
        rightSelection.addEventListener("mousedown", function(event){
            window.addEventListener("mousemove",scaleRightSelection)
            event.stopPropagation()
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
            selection.style.height = targetStyle.height
                if(selectionStyleWidth+movementX>=10){
                    selection.style.width = `${selectionStyleWidth+movementX}px`
                    }
                if(targetWidth+movementX>=10){
                    targetElement.style.width = `${targetWidth+movementX}px`
                    }
        }


        // обработчик событий bottomSelection
        bottomSelection.addEventListener("mousedown", function(event){
            window.addEventListener("mousemove",scaleBottomSelection)
            event.stopPropagation()
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
                selection.style.width = targetStyle.width
                if(selectionStyleHeigth+movementY>=10){
                    selection.style.height = `${selectionStyleHeigth+movementY}px`
                    }
                if(targetHeigth+movementY>=10){
                    targetElement.style.height = `${targetHeigth+movementY}px`
                    }
        }


                // обработчик событий leftSelection
        leftSelection.addEventListener("mousedown", function(event){
            window.addEventListener("mousemove",scaleLeftSelection)
            event.stopPropagation()
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
                selection.style.height = targetStyle.height
                if(selectionStyleWidth+(-movementX)>=10){
                    selection.style.left = `${targetLeft+movementX}px`
                    selection.style.width = `${selectionStyleWidth+(-movementX)}px`
                    targetElement.style.width = `${targetWidth+(-movementX)}px`
                    targetElement.style.left = `${targetLeft+movementX}px`
                }
        }


                    // обработчик событий topSelection
        topSelection.addEventListener("mousedown", function(event){
            window.addEventListener("mousemove",scaleTopSelection)
            event.stopPropagation()
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
            let selectionStyleTop = parseInt(selectionStyle.top)
                selection.style.width = targetStyle.width
                if(selectionStyleHeigth+(-movementY)>=10){
                    selection.style.height = `${selectionStyleHeigth+(-movementY)}px`
                    selection.style.top  = `${selectionStyleTop+movementY}px`
                    targetElement.style.height = `${targetHeigth+(-movementY)}px`
                    targetElement.style.top = `${targetTop+movementY}px`
                }
        }
    }