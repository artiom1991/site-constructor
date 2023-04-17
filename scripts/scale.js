let scale = 1               //Переменная которая хранит число увеличения холста 
let curentCount = document.querySelector(".curentCount")    // Элемент который хранит визуальное отображение текущего увеличения в тексте
let siteConstructorContainer = document.querySelector(".site-constructor-content") // Поле для элементов конструктора
    siteConstructorContainer.style.setProperty("transform", `scale(${scale}) translate(-50%, -50%)`)      // Холсту задается текующее значение scale как параметр увеличения 

let scalePlus = document.querySelector(".scalePlus")        // Получаем элемент с классом scalePluc который отвечает за приближение
    scalePlus.addEventListener("click", function(){         // создается событие для scalePlus по клику которое будет увеличивать текущее значение scale
        if(scale < 3){                                  // проверка если scale меньше 3 то выполняет код
            scale = Math.round((scale + 0.1)*10)/10       // задается новое значение scale. Округялется при помощи метода Math.round и добавляется десятая доля единици что равно 10%
            siteConstructorContainer.style.setProperty("transform", `scale(${scale}) translate(-50%, -50%)`)  // задается новое значение scale
            curentCount.textContent = Math.round(scale*100)                             // отображает текущее значение scale в %
        }
    })

let scaleMinus = document.querySelector(".scaleMinus")  // Получаем элемент с классом scaleMinus который отвечает за приближение
    scaleMinus.addEventListener("click", function(){        // создается событие для scaleMinus по клику которое будет уменьшать текущее значение scale
        if(scale >= 0.2){                                   // проверка если scale меньше 0.2 что равно 20% то выполняет код
            scale = Math.round((scale-0.1)*10)/10           // задается новое значение scale. Округялется при помощи метода Math.round и отнимается десятая доля единици что равно 10%
            siteConstructorContainer.style.setProperty("transform", `scale(${scale}) translate(-50%, -50%)`)
            curentCount.textContent = Math.round(scale*100)
        }
    })

    window.addEventListener('wheel', function(event) {      // Создается событие для окна window которое отслеживает прокрутку ролика мышки
        let count = event.deltaY                            //Получаем значение прокрутки 100 или -100
            count = count / 1000                            // Полученое число делится на 1000 чтобы получить необходимое число для прокрутки равное 10% увеличения
        if (event.ctrlKey === true) {                       // проверка если зажат ctrl то выполняет код
            event.preventDefault();                         //  анулирует стандартное поведение для события
            if(count === -0.1 &&scale > 0.2){               // проверка знакаа числа + или -
                scale = Math.round((scale+count)*10)/10     // Рассчитывает новое значение scale
                siteConstructorContainer.style.setProperty("transform", `scale(${scale}) translate(-50%, -50%)`)      // добавляет новое значение в стили
                curentCount.textContent = Math.round(scale*100)                 //записывает новое значение в счетчик
            }else if(count === 0.1 &&scale < 3){
                scale = Math.round((scale+count)*10)/10
                siteConstructorContainer.style.setProperty("transform", `scale(${scale}) translate(-50%, -50%)`)
                curentCount.textContent = Math.round(scale*100)
            }
        }
    }, { passive: false });