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
                    this.createContextBtn("Paste", function(event){сontextMenu.copyPasteElement.pasteCopy()},createContextContainer)
                    this.createContextBtn("Zoom In", zoomIn,createContextContainer)
                    this.createContextBtn("Zoom Out", zoomOut,createContextContainer)
                    }
            if(targetClick.classList.contains("element")  || targetClick.classList.contains("selection")){
                let targetElement = document.querySelector(".target")
                let createContextContainer = document.createElement("div")
                    createContextContainer.id = "contextContainer"
                    createContextContainer.style.top = `${scrollY+event.clientY}px`             //Нужно предусмотреть вариант когда элемент находится низко к краю и может выйти за рамку
                    createContextContainer.style.left = `${scrollX+event.clientX}px`      
                    document.body.append(createContextContainer)
                    this.createContextBtn("Copy", function(event){сontextMenu.copyPasteElement.getCopy(targetElement)},createContextContainer)
                    this.createContextBtn("Paste", function(event){сontextMenu.copyPasteElement.pasteCopy()},createContextContainer)
                    this.createContextBtn("Duplicate", function(event){сontextMenu.copyPasteElement.duplicate(targetElement)},createContextContainer)
                    this.createContextBtn("Delete", function(event){deleteElement(event)},createContextContainer)
                    this.createContextBtn("Bring to Front", function(event){bringToFront(event)},createContextContainer)
                    this.createContextBtn("Send to Back", function(event){sendToBack(event)},createContextContainer)
                    this.createContextBtn("Bring Forward", function(event){bringForward(event)},createContextContainer)
                    this.createContextBtn("send Backward", function(event){sendBackward(event)},createContextContainer)
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
            this.clonedNode = target.cloneNode(true)
        },
        pasteCopy(){
            if(this.clonedNode){
                let className
                this.clonedNode.classList.forEach(el => {
                    if(el !== "element" && el !== "target"){
                        className = el
                    }
                })
                let newEl = createNewElement(`${this.clonedNode.tagName}`,className)
                newEl.innerHTML = this.clonedNode.innerHTML
                newEl.style.cssText = this.clonedNode.style.cssText
                newLayouts.copyElementStyles(this.clonedNode.id,newEl.id)
            }
        },
        duplicate(target){
            let className
                target.classList.forEach(el => {
                    if(el !== "element" && el !== "target"){
                        className = el
                    }
                })
                let newEl = createNewElement(`${target.tagName}`,className)
                newEl.innerHTML = target.innerHTML
                newEl.style.cssText = target.style.cssText
                newLayouts.copyElementStyles(target.id,newEl.id)
            }
        }
    }
