let htmlBlock = document.querySelector(".htmlBlock")
    htmlBlock.addEventListener("click", generateHtml)

function generateHtml(){
    let styles = `body{margin:0;padding:0;width:100%;overflow:hidden;}.container{width:100%;display:flex;justify-content:center;}.containerInner{background:red;width:1200px;height:550px;position:relative;}`
    let newWindow = window.open('', '', 'width=1400px,height=900px')
    let styleElement = document.createElement("style")
    let containerInner = document.createElement('div')
    let container = document.createElement('div')
    let getLayouts = localStorage.getItem('layouts')
    let jsonParseLayouts = JSON.parse(getLayouts)
    let getElements = localStorage.getItem('elements')
    let jsonParseElements = JSON.parse(getElements)
        for(let leyout in jsonParseLayouts){
            let media
                if(leyout == "320"){media = `@media (max-width: 480px){.containerInner{width: ${leyout}px; height:${jsonParseLayouts[leyout].styles.height.count}; background-color:${jsonParseLayouts[leyout].styles["background-color"].count};}`}
                else{media = `@media (min-width: ${leyout}px){.containerInner{width: ${leyout}px; height:${jsonParseLayouts[leyout].styles.height.count};  background-color:${jsonParseLayouts[leyout].styles["background-color"].count};`}
                for(let el in jsonParseLayouts[leyout].elements){
                    media += `#e${el}{`
                    for(let style in jsonParseLayouts[leyout].elements[el]){media +=`${style}:${jsonParseLayouts[leyout].elements[el][style].count};`}
                    media += "}"
                    }
                media += "}"
                styles+=media
            }
        for(let el in jsonParseElements){
            let createELement = document.createElement(jsonParseElements[el].tagName)
                createELement.innerHTML = jsonParseElements[el].innerHTML
                createELement.src = jsonParseElements[el].src
                createELement.id = "e"+el
                containerInner.append(createELement)
                container.append(containerInner)
            }
        containerInner.classList.add("containerInner")
        container.classList.add("container")
        styleElement.innerHTML = styles
        newWindow.document.write('<html><head><title>Новое окно</title></head><body></body></html>')
        newWindow.document.body.append(styleElement,container)
}