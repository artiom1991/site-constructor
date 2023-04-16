
siteConstructorContainer.addEventListener("click", function(e){ // Событие по клику которое  задает элементу класс target
    let targetClick = e.target      //Переменная в которой хранится ссылка на обьект по которому был клик
    let target = document.querySelectorAll(".target") // Получение всех элементов с классом target
    let selection = document.querySelector(".selection")    //Получение обьекта выделения
        if(targetClick.classList.contains("selection") == false){
            if(selection){              // проверка найден ли элемент selection
                selection.remove()  // удаляется обьект выделения
            }
            target.forEach(el=>{         // перебок каждого элемента target
                el.classList.remove("target") // удаление класса target
            })
        }

        if(targetClick.classList.contains("element")){  // Проверка если у обьекта по которому кликнули есть класс element
            targetClick.classList.add("target")        //Задает цели события класс target
            if(targetClick.hasAttribute("contenteditable")  === false){ // Проверяет есть ли у элемента клика атрибут contenteditable и если он отсутствует выполняет код
                selectionElement()         // ВЫПОЛНЕНИЕ ФУНКЦИИ КОТОРАЯ СОЗДАСТ Selection
            }
        }
})