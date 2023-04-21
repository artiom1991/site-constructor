//Функция которая создает ноый элемент
function createNewElement(element,inputId){
    let date = new Date()
    let id = inputId?inputId:date.getTime()
    let blockLinks = document.querySelector(".block-links")
    let ElementLink = document.createElement(`div`)
    let elementType = document.createElement(`span`)
    let elementContent = document.createElement(`span`) 
    let newElement = document.createElement(`${element}`)
        newElement.classList.add("element")
        newElement.id = id
        newElement.style.left = "40%"      
        newElement.style.top = "40%"        
        siteConstructorContainer.style.width = "1200px"
        siteConstructorContainer.append(newElement) 
        ElementLink.classList.add("element-link")  
        ElementLink.id = "link-"+id                
        ElementLink.addEventListener("click", function(){newElement.click()})
        ElementLink.append(elementType,elementContent)
        blockLinks.append(ElementLink) 
        elementType.textContent = `${element}`
        elementType.classList.add("element-type")    
        elementContent.classList.add("element-content")

//Создание нового элемента
        if(element==="DIV"){     
                newElement.classList.add("shape")         
                newElement.style.width = "120px"          
                newElement.style.height = "200px"        
            }else if(element==="BUTTON"){                   
                newElement.textContent = "button"   
                newElement.style.padding = "20px" 
                elementContent.textContent = "button"   
             }else{     
                newElement.textContent = "Введите новый текст" 
                newElement.setAttribute("contenteditable", "true")    
                newElement.focus()            
                elementContent.textContent = "Введите новый текст"        
            }

        newLayouts.addElement(id)                       //Создаем стили новому элементу в layouts

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
                newElement.style.top =  `${top+movementY}px`             // Просчитывает и задает параметр для движения элемента
                newElement.style.left = `${left+movementX}px`            // Просчитывает и задает параметр для движения элемента
            let newStyles = { top:`${top+movementY}px`, left:`${left+movementX}px`}
                newLayouts.changeStyle(newStyles,id,layout)
        }




        if(["DIV","P", "SPAN", "B", "A", "H1", "H2", "H3", "H4", "H5", "H6"].includes(newElement.tagName)){
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
                let layoutStyle = window.getComputedStyle(siteConstructorContent)   //Получаем стили холста
                let layout = parseInt(layoutStyle.width)                            // Приводим ширину холста к числовому значению
                let id = this.id
                let linkContent = document.querySelector(`#link-${id} .element-content`)
                let link = document.querySelector(`#link-${id}`)
                    e.target.removeAttribute("contenteditable")     // Удаляет из элемента стрибут который позволяет редактировать текст
                    if( e.target.textContent.length < 1){           // проверка на длину строки
                        e.target.remove()                           // Если строка короче 1 символа удаляет ее
                        link.remove()
                    }
                let txt =  e.target.innerHTML                   // Создает копию содержания элемента
                let newTxt = txt.replaceAll("<div><br></div>","<br>")   // Заменяет блоки с переносом из элемента на перенос строки
                let newTxt1 = newTxt.replaceAll("<div>","<br>")         // Заменяеняет  блок на перенос
                let newTxt2 = newTxt1.replaceAll("</div>","")            // Заменяеняет  блок на перенос
                    e.target.innerHTML = newTxt2                            // Задает элементу обработаный контент
                    e.target.style.height = `auto`
                    linkContent.textContent = newTxt2                       // Дублирует новый текст в span элемента ссылки для удобной навигации
                    newLayouts.changeStyle({height:"auto"},id,layout)
            })

        }

}