
window.addEventListener("click", function(e){ // Событие по клику которое  задает элементу класс target
    let targetClick = e.target
    let target = document.querySelectorAll(".target") // Получение всех элементов с классом target
    let selection = document.querySelector(".selection")
        target.forEach(el=>{         // перебок каждого элемента
            selection?selection.remove():console.log("no selections")
            el.classList.remove("target") // удаление класса target
        })

        if(targetClick.classList.contains("element")){
            targetClick.classList.add("target")        //Задает цели события класс target
            if(targetClick.hasAttribute("contenteditable")  === false){
                selectionElement()         // ВЫПОЛНЕНИЕ ФУНКЦИИ КОТОРАЯ СОЗДАСТ Selection
            }
        }
})
