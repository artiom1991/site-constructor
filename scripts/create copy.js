//Функция которая создает ноый элемент
function createNewElement(element){
    // siteConstructorContent.style.width = "1200px"
    // let allElements = document.querySelectorAll(".element")
    //     allElements.forEach(el=>{
    //         if(layouts[1200][el.id].width === null){
    //             el.style.width = layouts[1200][el.id].inheridWidth 
    //         }else{
    //             el.style.width = layouts[1200][el.id].width 
    //             }
    //         if(layouts[1200][el.id].height === null){
    //             el.style.height = layouts[1200][el.id].inheridHeight
    //         }else{
    //             el.style.height = layouts[1200][el.id].height
    //             }
    //         if(layouts[1200][el.id].left === null){
    //             layouts[1200][el.id].inheridLeft
    //         }else{
    //             el.style.left = layouts[1200][el.id].left
    //             }
    //         if(layouts[1200][el.id].top === null){
    //             el.style.top = layouts[1200][el.id].inheridTop
    //         }else{
    //             el.style.top = layouts[1200][el.id].top
    //         }
    //     })
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
// Сохраняем стили в layouts
            let newElementStyles = window.getComputedStyle(newElement)      //Получаем стили нового элемента
            let newElementLayoutStyles = {                                  //В новый обьект сохраняем стили нового элемента для сохранения в layouts
                    inheridWidth:newElementStyles.width,
                    width:null,
                    inheridHeight:newElementStyles.height,
                    height:null,
                    inheridTop:newElementStyles.top,
                    top:null,
                    inheridLeft:newElementStyles.left,
                    left:null
                }
                layouts[320][id] = {...newElementLayoutStyles}       // Сохраняем стартовые стили для каждого из layouts нового элемента
                layouts[480][id] = {...newElementLayoutStyles}
                layouts[640][id] = {...newElementLayoutStyles}
                layouts[960][id] = {...newElementLayoutStyles}
                layouts[1200][id] = {...newElementLayoutStyles}
//Создаем ссылку на элемент
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
// Сохраняем стили в layouts
            let newElementStyles = window.getComputedStyle(newElement)          //Получаем стили нового элемента
            let newElementLayoutStyles = {                                  //В новый обьект сохраняем стили нового элемента для сохранения в layouts
                inheridWidth:newElementStyles.width,
                width:null,
                inheridHeight:newElementStyles.height,
                height:null,
                inheridTop:newElementStyles.top,
                top:null,
                inheridLeft:newElementStyles.left,
                left:null
                }
                layouts[320][id] = {...newElementLayoutStyles}       // Сохраняем стартовые стили для каждого из layouts нового элемента
                layouts[480][id] = {...newElementLayoutStyles}
                layouts[640][id] = {...newElementLayoutStyles}
                layouts[960][id] = {...newElementLayoutStyles}
                layouts[1200][id] = {...newElementLayoutStyles}
//Создаем ссылку на элемент
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
            let layoutStyle = window.getComputedStyle(siteConstructorContent)   //Получаем стили холста
            let layout = parseInt(layoutStyle.width)                            // Приводим ширину холста к числовому значению
            let getStyle = window.getComputedStyle(newElement) // Получает стили элемента
            let left = parseInt(getStyle.left) // Преобразует строковые числа из стилей в обычное число
            let top = parseInt(getStyle.top)    // Преобразует строковые числа из стилей в обычное число
            newElement.style.top = `${top+movementY}px` // Просчитывает и задает параметр для движения элемента
            newElement.style.left = `${left+movementX}px` // Просчитывает и задает параметр для движения элемента
            switch (layout) {                               //Событие задает стили в зависимости от ширины layout наследуемые стили для layout меньшей ширины и личные для текущего layout
                case 1200:                                  //Если ширина 1200 то применяет наследуемые стили этому элементу на layout меньшей ширины
                    layouts[960][id].inheridTop = `${top+movementY}px`
                    layouts[640][id].inheridTop = `${top+movementY}px`
                    layouts[480][id].inheridTop = `${top+movementY}px`
                    layouts[320][id].inheridTop = `${top+movementY}px`
                    layouts[960][id].inheridLeft = `${left+movementX}px`
                    layouts[640][id].inheridLeft = `${left+movementX}px`
                    layouts[480][id].inheridLeft = `${left+movementX}px`
                    layouts[320][id].inheridLeft = `${left+movementX}px`
                    layouts[1200][id].left = `${left+movementX}px`              //Элементу на текущем layout задает персональные стили которые не меняются из других layout
                    layouts[1200][id].top = `${top+movementY}px`
                    break;
                case 960:
                    layouts[640][id].inheridTop = `${top+movementY}px`
                    layouts[480][id].inheridTop = `${top+movementY}px`
                    layouts[320][id].inheridTop = `${top+movementY}px`
                    layouts[640][id].inheridLeft = `${left+movementX}px`
                    layouts[480][id].inheridLeft = `${left+movementX}px`
                    layouts[320][id].inheridLeft = `${left+movementX}px`
                    layouts[960][id].left = `${left+movementX}px`
                    layouts[960][id].top = `${top+movementY}px` 
                    break;
                case 640:
                    layouts[480][id].inheridTop = `${top+movementY}px`
                    layouts[320][id].inheridTop = `${top+movementY}px`
                    layouts[480][id].inheridLeft = `${left+movementX}px`
                    layouts[320][id].inheridLeft = `${left+movementX}px`
                    layouts[640][id].left = `${left+movementX}px`
                    layouts[640][id].top = `${top+movementY}px` 
                    break;
                case 480:
                    layouts[320][id].inheridTop = `${top+movementY}px`
                    layouts[320][id].inheridLeft = `${left+movementX}px`
                    layouts[480][id].left = `${left+movementX}px`
                    layouts[480][id].top = `${top+movementY}px` 
                    break;
                case 320:
                    layouts[320][id].left = `${left+movementX}px`
                    layouts[320][id].top = `${top+movementY}px`
                    break;
                default:
                    break;
            }
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
            e.target.style.height = `auto`
            linkContent.textContent = newTxt2                       // Дублирует новый текст в span элемента ссылки для удобной навигации
            layouts[1200][id].height = `auto`                   //При редактировании содержания текста для всех layout задается автоматическая высота
            layouts[960][id].height = `auto`
            layouts[640][id].height = `auto`
            layouts[480][id].height = `auto`
            layouts[320][id].height = `auto`
        })
}