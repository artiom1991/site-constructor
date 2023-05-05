let scale = 1               //Переменная которая хранит число увеличения холста 
let curentCount = document.querySelector(".curentCount")    // Элемент который хранит визуальное отображение текущего увеличения в тексте
let siteConstructorContainer = document.querySelector(".site-constructor-content") // Поле для элементов конструктора
    siteConstructorContainer.style.setProperty("transform", `scale(${scale}) translate(-50%, -50%)`)      // Холсту задается текующее значение scale как параметр увеличения 

let scalePlus = document.querySelector(".scalePlus").addEventListener("click", zoomIn)
    function zoomIn(){         // создается событие для scalePlus по клику которое будет увеличивать текущее значение scale
        if(scale < 3){                                  // проверка если scale меньше 3 то выполняет код
            let containerWidth = siteConstructorContainer.offsetWidth / 20
            let containerHeight = siteConstructorContainer.offsetHeight / 20
                scale = Math.round((scale + 0.1)*10)/10       // задается новое значение scale. Округялется при помощи метода Math.round и добавляется десятая доля единици что равно 10%
                siteConstructorContainer.style.setProperty("transform", `scale(${scale}) translate(-50%, -50%)`)  // задается новое значение scale
                curentCount.textContent = Math.round(scale*100)                             // отображает текущее значение scale в %
                window.scrollTo(scrollX - containerWidth,scrollY - containerHeight)
        }
    }

let scaleMinus = document.querySelector(".scaleMinus").addEventListener("click", zoomOut)
    function zoomOut(){        // создается событие для scaleMinus по клику которое будет уменьшать текущее значение scale
        if(scale >= 0.2){                                   // проверка если scale меньше 0.2 что равно 20% то выполняет код
            let containerWidth = siteConstructorContainer.offsetWidth / 20
            let containerHeight = siteConstructorContainer.offsetHeight / 20
                scale = Math.round((scale-0.1)*10)/10           // задается новое значение scale. Округялется при помощи метода Math.round и отнимается десятая доля единици что равно 10%
                siteConstructorContainer.style.setProperty("transform", `scale(${scale}) translate(-50%, -50%)`)
                curentCount.textContent = Math.round(scale*100)
                window.scrollTo(scrollX + containerWidth,scrollY + containerHeight)
        }
    }

    window.addEventListener('wheel', function(event) {      // Создается событие для окна window которое отслеживает прокрутку ролика мышки
        let containerWidth = siteConstructorContainer.offsetWidth / 20
        let containerHeight = siteConstructorContainer.offsetHeight / 20
        let count 
            if(event.deltaY < 0){
                count = -0.1
            }else{
                count = 0.1
            }
                           // Полученое число делится на 1000 чтобы получить необходимое число для прокрутки равное 10% увеличения
        if (event.ctrlKey === true) {                       // проверка если зажат ctrl то выполняет код
            event.preventDefault();                         //  анулирует стандартное поведение для события
            if(count === -0.1 &&scale > 0.2){               // проверка знакаа числа + или -
                scale = Math.round((scale+count)*10)/10     // Рассчитывает новое значение scale
                siteConstructorContainer.style.setProperty("transform", `scale(${scale}) translate(-50%, -50%)`)    
                curentCount.textContent = Math.round(scale*100)      
                window.scrollTo(scrollX + containerWidth,scrollY + containerHeight)
            }else if(count === 0.1 &&scale < 3){
                scale = Math.round((scale+count)*10)/10
                siteConstructorContainer.style.setProperty("transform", `scale(${scale}) translate(-50%, -50%)`)
                curentCount.textContent = Math.round(scale*100)
                window.scrollTo(scrollX - containerWidth,scrollY - containerHeight)
            }
        }
    }, { passive: false });


    window.addEventListener('load', scrollToCnstructorContainer)
    window.addEventListener("resize", scrollToCnstructorContainer)
    function scrollToCnstructorContainer(){
        let windowHeight = window.innerHeight
        let windowWidth = window.innerWidth
        let bodyWidth = document.body.offsetWidth
        let bodyHeight = document.body.offsetHeight
        let scrollY = (bodyHeight - windowHeight) / 2
        let scrollX = (bodyWidth - windowWidth) / 2
            window.scrollTo(scrollX,scrollY);
            scale = 1
            curentCount.textContent = "100"
            siteConstructorContainer.style.setProperty("transform", `scale(${scale}) translate(-50%, -50%)`)
    }