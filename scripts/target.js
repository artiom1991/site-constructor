
siteConstructorContainer.addEventListener("click", function(e){ // Событие по клику которое  задает элементу класс target
    let target = e.target
    let allSelections = document.querySelectorAll(".target") // Получение всех элементов с классом target
        allSelections.forEach(el=>{         // перебок каждого элемента
        let selection = document.querySelector(".selection")
            selection.remove()
            el.classList.remove("target")       // удаление класса target
        })

        if(target.classList.contains("element")){
            target.classList.add("target")        //Задает цели события класс target

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

        let selectionElements = selection.querySelectorAll("div")
        selectionElements.forEach((el)=>{
            el.addEventListener("mousedown",(e)=>{ // Собтие удержания элемента для перемещения
                if(e.target.hasAttribute("contenteditable")  === false){ // проверка наличие атрибута для редактирования
                    window.addEventListener("mousemove",mousePath) // событие окна для установления координат
                }
            })
            window.addEventListener("mouseup",()=>{ //Событие которое отслеживает когда отпустится кнопка мыши и элемент будет освобожден
                window.removeEventListener("mousemove", mousePath) // удаление события отслеживания координат мышки
            })
            
            function mousePath({movementX,movementY}){ // Функция на отслеживание координат мышки и перемещения элемента на экране
                let getStyle = window.getComputedStyle(el) // Получает стили элемента
                let target = document.querySelector(".target")
                let targetStyle = window.getComputedStyle(target)
                let targetWidth = parseInt(targetStyle.width)
                let targetHeigth = parseInt(targetStyle.height)
                let left = parseInt(getStyle.left) // Преобразует строковые числа из стилей в обычное число
                let top = parseInt(getStyle.top)    // Преобразует строковые числа из стилей в обычное число
                el.style.top = `${top+movementY}px` // Просчитывает и задает параметр для движения элемента
                el.style.left = `${left+movementX}px` // Просчитывает и задает параметр для движения элемента
                target.style.height = `${targetHeigth+movementY}px`
                target.style.width = `${targetWidth+movementX}px`
                console.log(targetStyle.height)
                console.log(target.style.width)
            }
        })
        }
})


