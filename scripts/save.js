let save = document.querySelector(".saveBlock")
    save.addEventListener("click", function(){
        let constructor = document.querySelector(".site-constructor-content")
            localStorage.clear()
        let elementsStr = JSON.stringify(newLayouts.elements)
        let layoutStr = JSON.stringify(newLayouts.layouts)
        let setElements = localStorage.setItem('elements', elementsStr)
        let setLayouts = localStorage.setItem('layouts', layoutStr)
    })

let load = document.querySelector(".loadBlock")
    load.addEventListener("click", function(){
        let getLayouts = localStorage.getItem('layouts')
        let getElements = localStorage.getItem('elements')
        let jsonParseLayouts = JSON.parse(getLayouts)
        let jsonParseElements = JSON.parse(getElements)
            newLayouts.elements = {...jsonParseElements}
            for(let id in newLayouts.elements){
                let element = newLayouts.elements[id]
                    createNewElement(element.tagName,undefined,element.childElementNumber,element.innerHTML,element.src,id)
            }
            newLayouts.layouts = {...jsonParseLayouts}
            newLayouts.changeLayout(1200,"laptop")
    })