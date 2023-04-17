
// Событие которое исправляет баг copy+paste текста
    window.addEventListener("paste", function(event){   //Событие для всего окна window для paste
        event.preventDefault();                         //Отменяем стандартное поведение paste
        const text = event.clipboardData.getData('text/plain'); //Получаем данные из событие и меняем их тип из html в текст
        document.execCommand('insertText', false, text);        // Вставляет текст в место фокуса
    })


//Скрываем панель навигации по элементам
let hideBlock = document.querySelector(".hide-blocks")          // получаем элемент с классом hide-blocks
    hideBlock.addEventListener("click", function(event){        // задаем событие элементу по клику которое задает новый класс site-constructor-elements и тем самым скрывает его 
        let siteConstructorElements = document.querySelector(".site-constructor-elements")  //получаем элемент site-constructor-elements в котором хранятся ссылки на блоки
            if(event.target.classList.contains('show-blocks')){                             // проверяем если у элемента есть класс show-blocks 
                siteConstructorElements.classList.remove("site-constructor-elements-hide")     // удаляем класс site-constructor-elements-hide у site-constructor-elements
                event.target.classList.remove("show-blocks")                                    // удаляется класс show-blocks у элемента hide-blocks
            }else{
                siteConstructorElements.classList.add("site-constructor-elements-hide")         //Добавляется класс site-constructor-elements-hide окну навигации чтобы его скрыть
                event.target.classList.add("show-blocks")                                   // Добавляется класс цели события 
            }
    })

//Скрываем панель стилей
let hideStyles = document.querySelector(".hide-styles")                             // Получаем элемент который отвечает за скрытие панели стилей
    hideStyles.addEventListener("click", function(event){                           // задаем событие которое будет добавлять классы с новыми стилями
        let siteConstructorElementStyle = document.querySelector(".site-constructor-element-style")     // Получаем панель стилей
            if(event.target.classList.contains('show-blocks')){                                         // проверяем есть ли класс show-blocks и если есть то удаляем его
                siteConstructorElementStyle.classList.remove("site-constructor-element-style-hide")     // удаояем класс site-constructor-element-style-hide и возвращаем прежнее позиционирование
                event.target.classList.remove("show-blocks")
            }else{
                siteConstructorElementStyle.classList.add("site-constructor-element-style-hide")        // Добавляем новый класс с стилями которые скрывают элемент
                event.target.classList.add("show-blocks")                                           // задаем дополнительные стили кнопке
            }
    })

//Отображение скрытых меню создания элементов
let createText = document.querySelector(".createText")  // Получаем элемент меню который отвечает за создание текста
    createText.addEventListener("click", function(event){   //задаем событие клика
        let textList = document.querySelector(".textList")  //Получаем скрутый список с текстовыми элементами
        let hidenMenu = document.querySelectorAll(".hidenMenu") // Получаем все элементы имеющие класс hidenMenu
            hidenMenu.forEach(element => {                      //перебираем каждый элемент
                element.style.display = "none"                  // задаем каждому стиль который скрывает элемент
            })
            textList.style.display = "block"                    //Списку с текстовыми элементами задается display block чтобы он отображался
            event.stopPropagation();                        // Запрещаем событию спускаться в низ по DOM к родительским эелментам
    })
    window.addEventListener("click", function(){            //Создаем событие для window срабатывающее по клику которое скрывает все списки hidenMenu
        let hidenMenu = document.querySelectorAll(".hidenMenu") //Получаем все элементы hidenMenu
            hidenMenu.forEach(element => {                          // Перебираем каждый
                element.style.display = "none"                      // Задаем display none чтобы скрыть каждый
            })
    })

let createFigure = document.querySelector(".createFigure")
    createFigure.addEventListener("click", function(event){
        let figureList = document.querySelector(".figureList")
        let hidenMenu = document.querySelectorAll(".hidenMenu")
            hidenMenu.forEach(element => {
                element.style.display = "none"
            })
            figureList.style.display = "block"
            event.stopPropagation();
    })

let createForm = document.querySelector(".createForm")
    createForm.addEventListener("click", function(event){
        let formList = document.querySelector(".formList")
        let hidenMenu = document.querySelectorAll(".hidenMenu")
            hidenMenu.forEach(element => {
                element.style.display = "none"
            })
            formList.style.display = "block"
            event.stopPropagation();
    })

let createMedia = document.querySelector(".createMedia")
    createMedia.addEventListener("click", function(event){
        let mediaList = document.querySelector(".mediaList")
        let hidenMenu = document.querySelectorAll(".hidenMenu")
            hidenMenu.forEach(element => {
                element.style.display = "none"
            })
            mediaList.style.display = "block"
            event.stopPropagation();
    })

let createTable = document.querySelector(".createTable")
    createTable.addEventListener("click", function(event){
        let tableList = document.querySelector(".tableList")
        let hidenMenu = document.querySelectorAll(".hidenMenu")
            hidenMenu.forEach(element => {
                element.style.display = "none"
            })
            tableList.style.display = "block"
            event.stopPropagation();
    })

let showLayouts = document.querySelector(".showLayouts")
    showLayouts.addEventListener("click", function(event){
        let layoutList = document.querySelector(".layoutList")
        let hidenMenu = document.querySelectorAll(".hidenMenu")
            hidenMenu.forEach(element => {
                element.style.display = "none"
            })
            layoutList.style.display = "block"
            event.stopPropagation();
    })