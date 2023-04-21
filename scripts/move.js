
function mouseDown(e){                                      // создается именная функция которая создает событие срабатывающее на перемещение курсора
    window.addEventListener("mousemove",moveConstructorArea)
}

    window.addEventListener("keydown", function(event){         // Задается событие для window которое отслеживает удержание клавиши
        if (event.code === 'Space') {                           // Проверяем если зажат пробел
            document.body.classList.add("movable")              // элементу body задаем красс movable
            window.addEventListener("mousedown", mouseDown)     // создается событие которое срабатывает если зажата ЛКМ
        }
    })

    window.addEventListener("keyup", function(event){       // Событие для окна window которое срабатывает при отпускании клавиши
        if (event.code === 'Space') {                           // проверяем если клавиша которую отпустили пробел
            document.body.classList.remove("movable")           // удаляется класс movable у элемента body
            window.removeEventListener("mousedown", mouseDown)  // удаляется событие срабатывающие по удержанию ЛКМ
        }
    })

    window.addEventListener("mouseup", function(){          // событие которое отслеживает отпускание ЛКМ
        window.removeEventListener("mousemove", moveConstructorArea)    // удаляется событие которое отслеживает движение курсора
    })

function moveConstructorArea({movementX,movementY}){ // Функция на отслеживание координат мышки и перемещения элемента на экране
    let getStyle = window.getComputedStyle(siteConstructorContainer) // Получает стили элемента
    let left = parseInt(getStyle.left) // Преобразует строковые числа из стилей в обычное число
    let top = parseInt(getStyle.top)    // Преобразует строковые числа из стилей в обычное число 
    siteConstructorContainer.style.top = `${top+movementY}px` // Просчитывает и задает параметр для движения элемента      
    siteConstructorContainer.style.left = `${left+movementX}px` // Просчитывает и задает параметр для движения элемента 
} 
