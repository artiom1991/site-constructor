let siteConstructorContainer = document.querySelector(".site-constructor-content") // Поле для элементов конструктора

// Создание нового элемента
let createElement = document.querySelectorAll(".create")    // Получаем все кнопки для создания текста
    createElement.forEach((el,i)=>{                 // Циклом перебираем каждую
        el.addEventListener("click", function(){    //Создаем событие для каждой кнопки
        switch (true) {                             // Проверяем на истиность
            case el.classList.contains("p"):        //Если в элементе есть класс P то в функцию передается свойство с этим тегом
                console.log("p")                        // И так для каждой кнопки свой тег
                createNewElement("p")
                break;
            case el.classList.contains("span"):
                console.log("span")
                createNewElement("span")
                break;
            case el.classList.contains("div"):
                console.log("div")
                createNewElement("div")
                break;
            case el.classList.contains("h1"):
                console.log("h1")
                createNewElement("h1")
                break;
            case el.classList.contains("h2"):
                console.log("h2")
                createNewElement("h2")
                break;
            case el.classList.contains("h3"):
                console.log("h3")
                createNewElement("h3")
                break;
            case el.classList.contains("h4"):
                console.log("h4")
                createNewElement("h4")
                break;
            case el.classList.contains("h5"):
                console.log("h5")
                createNewElement("h5")
                break;
            case el.classList.contains("h6"):
                console.log("h6")
                createNewElement("h6")
                break;
            default:
                break;
        }
        })
    })




function createNewElement(element){
    let newElement = document.createElement(`${element}`) //Создается новый элемент с переданым в функцию типом
        newElement.classList.add("element")   // Задается общий тег для всех элементов
        newElement.setAttribute("contenteditable", "true") // Задается атрибут который позволяет редактировать текст
        siteConstructorContainer.append(newElement) // Элемент помещается в родительский элемент конструктор
        newElement.focus() //Авто выделение элемента

        newElement.addEventListener("mousedown",(e)=>{ // Собтие удержания элемента для перемещения
            if(e.target.hasAttribute("contenteditable")  === false){ // проверка наличие атрибута для редактирования
                window.addEventListener("mousemove",fn) // событие окна для установления координат
            }
        })
        window.addEventListener("mouseup",()=>{ //Событие которое отслеживает когда отпустится кнопка мыши и элемент будет освобожден
            window.removeEventListener("mousemove", fn) // удаление события отслеживания координат мышки
        })
        
        function fn({movementX,movementY}){ // Функция на отслеживание координат мышки и перемещения элемента на экране
            let getStyle = window.getComputedStyle(newElement) // Получает стили элемента
            let left = parseInt(getStyle.left) // Преобразует строковые числа из стилей в обычное число
            let top = parseInt(getStyle.top)    // Преобразует строковые числа из стилей в обычное число
            newElement.style.top = `${top+movementY}px` // Просчитывает и задает параметр для движения элемента
            newElement.style.left = `${left+movementX}px` // Просчитывает и задает параметр для движения элемента
        }


        newElement.addEventListener("dblclick",function(e){ // Задается созданому элементу событие по двойному клику
            e.target.setAttribute("contenteditable", "true") // Элементу задается атрибут который позволяет редактировать текст
            e.target.focus()                        // Создается фокус на элемент
            let range = document.createRange();     // Создает и возвращает товый фрагмент документа
            range.selectNodeContents(e.target);     // Выделяет все узлы этого элемента
            let selection = window.getSelection();  // Возвращает текущий обьект выделения из окна window
            selection.removeAllRanges();            // Удаляет все элементы выделения
            selection.addRange(range);              // Добавляет созданый ранее диапазон выделений
        })

        newElement.addEventListener("blur",function(e){    // Событие которое отслеживает прекращение выделения
            e.target.removeAttribute("contenteditable")     // Удаляет из элемента стрибут который позволяет редактировать текст
            if( e.target.textContent.length < 1){           // проверка на длину строки
                e.target.remove()                           // Если строка короче 1 символа удаляет ее
            }
            let txt =  e.target.innerHTML                   // Создает копию содержания элемента
            let newTxt = txt.replaceAll("<div><br></div>","<br>")   // Заменяет блоки с переносом из элемента на перенос строки
            let newTxt1 = newTxt.replaceAll("<div>","<br>")         // Заменяеняет  блок на перенос
            let newTxt2 = newTxt1.replaceAll("</div>","")            // Заменяеняет  блок на перенос
            e.target.innerHTML = newTxt2                            // Задает элементу обработаный контент
        })

}


siteConstructorContainer.addEventListener("click", function(e){ // Событие по клику которое  задает элементу класс target
    let allSelections = document.querySelectorAll(".target") // Получение всех элементов с классом target
        allSelections.forEach(el=>{         // перебок каждого элемента
            el.classList.remove("target")       // удаление класса target
        })
    e.target.classList.add("target")        //Задает цели события класс target
})
document.addEventListener("keydown", function(event) {  // Создает событие для документа которое отслеживает нажатие delete
    if (event.key === "Delete" || event.key === "Del" || event.code === "46") {     //Проверяет если нажата клавиша delete
      let target = document.querySelectorAll(".target")         // Получает все элементы с классом target
          target.forEach(el=>{          // Перебирает каждый элемент
            el.remove()                 // удаляет элемент
          })
    }
  });