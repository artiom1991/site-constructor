
window.addEventListener("keydown", function(event){         // Задается событие для window которое отслеживает удержание клавиши
    let target = document.querySelector(".target")
    if (event.code === 'Space') {                           // Проверяем если зажат пробел
        if(!target || target.hasAttribute("contenteditable")  === false){
            event.preventDefault();
            document.body.classList.add("movable")              // элементу body задаем красс movable
            window.addEventListener("mousedown", mouseDown)     // создается событие которое срабатывает если зажата ЛКМ
        }
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

function mouseDown(e){                                      // создается именная функция которая создает событие срабатывающее на перемещение курсора
window.addEventListener("mousemove",moveConstructorArea)
}

function moveConstructorArea({movementX,movementY}){ // Функция на отслеживание координат мышки и перемещения элемента на экране
window.scrollTo(scrollX - movementX,scrollY - movementY)
} 