function selectionElement(){
    
    let target = document.querySelector(".target")
    let styles = window.getComputedStyle(target)
    let selection = document.createElement("div")
        selection.classList.add("selection")
        selection.style.width = styles.width
        selection.style.height = styles.height
        selection.style.margin = styles.margin
        selection.style.padding = styles.padding
        selection.style.left = styles.left
        selection.style.top = styles.top
    let topSelection = document.createElement("div")
        topSelection.classList.add("topSelection")
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
        selection.append(topSelection,bottomSelection,leftSelection,leftTopCorner,leftBottomCorner,rightSelection,righTopCorner,righBottomCorner)
        siteConstructorContainer.append(selection)
    
        selection.addEventListener("dblclick",function(){
            target.setAttribute("contenteditable", "true")
            target.focus()
            selection.remove()
        })
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




    }





            // let targetContentWidth = targetElement.scrollWidth;
            // let newWidth = targetWidth + movementX;
            // let rightSelectionStyle = window.getComputedStyle(rightSelection)
            // let righTopCornertStyle = window.getComputedStyle(righTopCorner)
            // let righBottomCornerStyle = window.getComputedStyle(righBottomCorner)
            // rightSelection.style.left = `${rightSelectionStyleLeft+movementX}px`
            // righTopCorner.style.left = `${righTopCornertStyleLeft+movementX}px`
            // righBottomCorner.style.left = `${righBottomCornertStyleLeft+movementX}px`





    


















        // el.addEventListener("mousedown",(e)=>{ // Собтие удержания элемента для перемещения
    //     if(e.target.hasAttribute("contenteditable")  === false){ // проверка наличие атрибута для редактирования
    //         window.addEventListener("mousemove",scaleElement) // событие окна для установления координат
    //     }
    // })
    
    
    // window.addEventListener("mouseup",()=>{ //Событие которое отслеживает когда отпустится кнопка мыши и элемент будет освобожден
    //     window.removeEventListener("mousemove", scaleElement) // удаление события отслеживания координат мышки
    // })
    
    // function scaleElement({movementX,movementY}){ // Функция на отслеживание координат мышки и перемещения элемента на экране
    //     let getStyle = window.getComputedStyle(el) // Получает стили элемента
    //     let target = document.querySelector(".target")
    //     let targetStyle = window.getComputedStyle(target)
    //     let targetWidth = parseInt(targetStyle.width)
    //     let targetHeigth = parseInt(targetStyle.height)
    //     let left = parseInt(getStyle.left) // Преобразует строковые числа из стилей в обычное число
    //     let top = parseInt(getStyle.top)    // Преобразует строковые числа из стилей в обычное число
    //     el.style.top = `${top+movementY}px` // Просчитывает и задает параметр для движения элемента
    //     el.style.left = `${left+movementX}px` // Просчитывает и задает параметр для движения элемента
    //     target.style.height = `${targetHeigth+movementY}px`
    //     target.style.width = `${targetWidth+movementX}px`
    //     console.log(targetStyle.height)
    //     console.log(target.style.width)
    // }