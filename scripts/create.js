// Создание нового элемента
let createElement = document.querySelectorAll(".create")    // Получаем все кнопки для создания текста
    createElement.forEach((el,i)=>{                 // Циклом перебираем каждую
        el.addEventListener("click", function(){    //Создаем событие для каждой кнопки
            switch (true) {                             // Проверяем на истиность
                case el.classList.contains("p"):        //Если в элементе есть класс P то в функцию передается свойство с этим тегом                      // И так для каждой кнопки свой тег
                    createNewElement("p")
                    break;
                case el.classList.contains("span"):
                    createNewElement("span")
                    break;
                case el.classList.contains("div"):
                    createNewElement("div")
                    break;
                case el.classList.contains("a"):
                    createNewElement("a")
                    break;
                case el.classList.contains("h1"):
                    createNewElement("h1")
                    break;
                case el.classList.contains("h2"):
                    createNewElement("h2")
                    break;
                case el.classList.contains("h3"):
                    createNewElement("h3")
                    break;
                case el.classList.contains("h4"):
                    createNewElement("h4")
                    break;
                case el.classList.contains("h5"):
                    createNewElement("h5")
                    break;
                case el.classList.contains("h6"):
                    createNewElement("h6")
                    break;
                case el.classList.contains("rect"):
                    createNewElement("rect")
                    break;
                default:
                    break;
            }
        })
    })

//Функция которая создает ноый элемент
function createNewElement(element){
    let newElement      //Создается пустая переменная в которую позже сохранится ссылка на новый элемент
    let layoutElementLink       //Новый элемент ссылка на созданый обьект
    let elementType  // ноый span в ссылке в котором будет показан тип элемента
    let elementContent  //новый span в котором будет краткий текст из элемента
    let date = new Date();  // Получам текущую дату и время
    let id = date.getTime();    //Создаем переменную в которую запишется текущее время в формате числа в милисекундах
    let blocks = document.querySelector(".blocks")
//Создание нового элемента
        if(element==="rect"){       //Проверим входищий параметр в функцию и если это "rect"
                newElement = document.createElement(`div`) //Создается новый элемент div
                newElement.classList.add("shape")           // задает ему новый класс shape
                newElement.classList.add("element")         //задает новый класс element
                newElement.id = id                          // задает уникальный id
                newElement.style.width = "100px"            // задает ширину
                newElement.style.height = "100px"           // задает высоту
                newElement.style.left = "40%"               // задает позиционирование с лева 40%
                newElement.style.top = "40%"                // задает позиционирование с верху 40%
                siteConstructorContainer.append(newElement) // помещает этот элемент на наш холст
                layoutElementLink = document.createElement(`div`)   // Создается новый div ссылка на созданый основной элемент
                layoutElementLink.classList.add("layout-element-link")  // задаетса класс
                layoutElementLink.id = "link-"+id                       // задается уникальный id который состоит из link- + id основного элемента
                layoutElementLink.addEventListener("click", function(){ // задается событие которое при клике на элемент ссылку имитирует клик по основному элементу
                    let el = document.getElementById(`${id}`)           // получаем элемент
                        el.click();                                     // имитируем клик
                })
                elementType = document.createElement(`span`)            // создаем span в котором будет хранится тип основного файла
                elementType.classList.add("element-type")               // задаем ему класс
                elementType.textContent = "Rectangle"                   // Задаем ему контент
                elementContent = document.createElement(`span`)         
                elementContent.classList.add("element-content")
                layoutElementLink.append(elementType,elementContent)    // помещаем созданые span элементы в элемент ссылку
                blocks.append(layoutElementLink)                           // помещаем элемент ссылку в родительский элемент блоков
        }else{      //в обратном случае выполняет другой код
                newElement = document.createElement(`${element}`) //Создается новый элемент с переданым в функцию типом
                newElement.classList.add("element")   // Задается общий тег для всех элементов
                newElement.id = id                      // задает уникальный id
                newElement.textContent = "Введите новый текст"  //задает стартовый текст
                newElement.setAttribute("contenteditable", "true") // Задается атрибут который позволяет редактировать текст
                newElement.style.left = "40%"                   // задает позиционирование с лева 40%
                newElement.style.top = "40%"                    // задает позиционирование с верху 40%
                siteConstructorContainer.append(newElement) // Элемент помещается в родительский элемент конструктор
                newElement.focus()                          //Авто выделение элемента
                layoutElementLink = document.createElement(`div`)   //  Создается новый div ссылка на созданый основной элемент
                layoutElementLink.classList.add("layout-element-link")  // Задаем новый класс
                layoutElementLink.id = "link-"+id                       // задаем уникальный id состоящий из link- + уникальный id основного элемента на который будет ссылаться
                layoutElementLink.addEventListener("click", function(){     // создаем событие клика
                    let el = document.getElementById(`${id}`)               // получаем основной элемент
                        el.click();                                         // имитируем клик по основному элементу
                })
                elementType = document.createElement(`span`)                // Создаем span 
                elementType.classList.add("element-type")                   // Задаем класс
                elementType.textContent = `${element}`                      // Задаем этому спану контент в виде название элемента на который он ссылается
                elementContent = document.createElement(`span`)             // создаем новый спан
                elementContent.classList.add("element-content")             // Задаем класс
                elementContent.textContent = "Введите новый текст"          // Задаем стартовый контент
                layoutElementLink.append(elementType,elementContent)        // Помещаем оба span в элемент ссылку
                blocks.append(layoutElementLink)                            // Помещаем ссылку в элемент с блоками ссылок
        }

//Создает событие для нового элемента
        newElement.addEventListener("mousedown",(e)=>{ // Собтие удержания элемента для перемещения
            if(e.target.hasAttribute("contenteditable")  === false && document.body.classList.contains("movable")=== false){ // проверка наличие атрибута для редактирования
                window.addEventListener("mousemove",moveElement) // событие окна для установления координат
            }
        })

        window.addEventListener("mouseup",()=>{ //Событие которое отслеживает когда отпустится кнопка мыши и элемент будет освобожден
            window.removeEventListener("mousemove", moveElement) // удаление события отслеживания координат мышки
        })
        
        function moveElement({movementX,movementY}){ // Функция на отслеживание координат мышки и перемещения элемента на экране
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
            let id = this.id
            let linkContent = document.querySelector(`#link-${id} .element-content`)
            e.target.removeAttribute("contenteditable")     // Удаляет из элемента стрибут который позволяет редактировать текст
            if( e.target.textContent.length < 1){           // проверка на длину строки
                e.target.remove()                           // Если строка короче 1 символа удаляет ее
            }
            let txt =  e.target.innerHTML                   // Создает копию содержания элемента
            let newTxt = txt.replaceAll("<div><br></div>","<br>")   // Заменяет блоки с переносом из элемента на перенос строки
            let newTxt1 = newTxt.replaceAll("<div>","<br>")         // Заменяеняет  блок на перенос
            let newTxt2 = newTxt1.replaceAll("</div>","")            // Заменяеняет  блок на перенос
            e.target.innerHTML = newTxt2                            // Задает элементу обработаный контент
            linkContent.textContent = newTxt2                       // Дублирует новый текст в span элемента ссылки для удобной навигации
        })
}