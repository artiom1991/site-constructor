let siteConstructorContent = document.querySelector(".site-constructor-content")    //Получаем холст
let vSmartphone = document.querySelector(".vertical-Smartphone")                // получаем элемент в будующем отвечающий за layout шириной 320px
    vSmartphone.addEventListener("click", function(){                           // Создаем событие клика по этому элементу
        let selection = document.querySelector(".selection")                    // Получаем элемент selection
        let allElements = document.querySelectorAll(".element")                 //Получаем все элементы с классом element
            siteConstructorContent.style.width = "320px"                        //задаем ширину для холста 320px
            siteConstructorContent.style.left = "50%"                           //Задаем позиционирование слева 50%
            siteConstructorContent.style.top = "50%"                            //Задаем позиционирование сверху 50%
            allElements.forEach(el=>{                                           //Перебираем каждый элемент с классом element
                el.style.width = layouts[320][el.id].width                      // Задаем ему стили из нашего обьекта хранящего стили для элементов layout шириной 320px ширину,высоту, и позиционирование
                el.style.height = layouts[320][el.id].height                    
                el.style.left = layouts[320][el.id].left
                el.style.top = layouts[320][el.id].top
            })
            if(selection){                          //проверяем есть ли элемент с классом select и удаляем его
                selection.remove() 
            }
    })

let hSmartphone = document.querySelector(".horizontal-Smartphone")
    hSmartphone.addEventListener("click", function(){
        let selection = document.querySelector(".selection") 
        let allElements = document.querySelectorAll(".element")
            siteConstructorContent.style.width = "480px"
            siteConstructorContent.style.left = "50%"
            siteConstructorContent.style.top = "50%"
            allElements.forEach(el=>{
                el.style.width = layouts[480][el.id].width
                el.style.height = layouts[480][el.id].height
                el.style.left = layouts[480][el.id].left
                el.style.top = layouts[480][el.id].top
            })
            if(selection){   
                selection.remove() 
            }
    })

let vTablet = document.querySelector(".vertical-Tablet")
    vTablet.addEventListener("click", function(){
        let selection = document.querySelector(".selection") 
        let allElements = document.querySelectorAll(".element")
            siteConstructorContent.style.width = "640px"
            siteConstructorContent.style.left = "50%"
            siteConstructorContent.style.top = "50%"
            allElements.forEach(el=>{
                el.style.width = layouts[640][el.id].width
                el.style.height = layouts[640][el.id].height
                el.style.left = layouts[640][el.id].left
                el.style.top = layouts[640][el.id].top
            })
            if(selection){   
                selection.remove() 
            }
    })

let hTablet = document.querySelector(".horizontal-Tablet")
    hTablet.addEventListener("click", function(){
        let selection = document.querySelector(".selection") 
        let allElements = document.querySelectorAll(".element")
            siteConstructorContent.style.width = "960px"
            siteConstructorContent.style.left = "50%"
            siteConstructorContent.style.top = "50%"
            allElements.forEach(el=>{
                el.style.width = layouts[960][el.id].width
                el.style.height = layouts[960][el.id].height
                el.style.left = layouts[960][el.id].left
                el.style.top = layouts[960][el.id].top
            })
            if(selection){   
                selection.remove() 
            }
    })

let hLaptop = document.querySelector(".horizontal-Laptop")
    hLaptop.addEventListener("click", function(){
        let selection = document.querySelector(".selection") 
        let allElements = document.querySelectorAll(".element")
            siteConstructorContent.style.width = "1200px"
            siteConstructorContent.style.left = "50%"
            siteConstructorContent.style.top = "50%"
            allElements.forEach(el=>{
                el.style.width = layouts[1200][el.id].width
                el.style.height = layouts[1200][el.id].height
                el.style.left = layouts[1200][el.id].left
                el.style.top = layouts[1200][el.id].top
            })
            if(selection){   
                selection.remove() 
            }
    })

let layouts = {     // Обьект хранящий стили для элементов отдельно для каждого из layout
        320:{},
        480:{},
        640:{},
        960:{},
        1200:{}
    }