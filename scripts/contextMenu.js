window.addEventListener("contextmenu", function(event){сontextMenu.createContextMenu(event)})

let сontextMenu = {
    createContextMenu(event){
        let contextContainer = document.getElementById("contextContainer")
        let targetClick = event.target
            targetClick.click()
            if(contextContainer){contextContainer.remove()}
            if(targetClick == document.body || targetClick == siteConstructorContent){
                let createContextContainer = document.createElement("div")
                    createContextContainer.id = "contextContainer"
                    createContextContainer.style.top = `${scrollY+event.clientY}px`             //Нужно предусмотреть вариант когда элемент находится низко к краю и может выйти за рамку
                    createContextContainer.style.left = `${scrollX+event.clientX}px`      
                    document.body.append(createContextContainer)
                    this.createContextBtn("Zoom In", zoomIn,createContextContainer)
                    this.createContextBtn("Zoom Out", zoomOut,createContextContainer)
                    }
            if(targetClick.classList.contains("element")  || targetClick.classList.contains("selection")){
                let createContextContainer = document.createElement("div")
                    createContextContainer.id = "contextContainer"
                    createContextContainer.style.top = `${scrollY+event.clientY}px`             //Нужно предусмотреть вариант когда элемент находится низко к краю и может выйти за рамку
                    createContextContainer.style.left = `${scrollX+event.clientX}px`      
                    document.body.append(createContextContainer)
                    this.createContextBtn("Copy", function(event){deleteElement(event)},createContextContainer)
                    this.createContextBtn("Paste", function(event){deleteElement(event)},createContextContainer)
                    this.createContextBtn("Duplicate", function(event){deleteElement(event)},createContextContainer)
                    this.createContextBtn("Delete", function(event){deleteElement(event)},createContextContainer)
                }
            event.preventDefault()
    },
    createContextBtn(textContent,method,contextContainer){ 
        let el = document.createElement("div")
            el.classList.add("context-btn")
            el.textContent = textContent
            el.addEventListener("click",method)
            contextContainer.appendChild(el)
    },
    copyPasteElement:{
        clonedNode:null,
        getCopy(target){
            let date = new Date()
            let id = date.getTime()
            let newElement = target.cloneNode(true)
                newElement.id = id
            this.clonedNode = newElement
            // console.log(this)
        },
        pasteCopy(){              //Нужно переделать  createNewElement() в метод обьекта и события для элемента сделать отдельными методами чтобы
            siteConstructorContent.appendChild(this.clonedNode)     // не писать код два раза а испозьзовать только нужную его часть
        },
        duplicate(){
            
        },
        delete(){
            
        }
    }
}