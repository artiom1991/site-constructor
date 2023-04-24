let htmlBlock = document.querySelector(".htmlBlock")
    htmlBlock.addEventListener("click", generateHtml)

function generateHtml(){
    let container = document.createElement('div')
        container.classList.add("container")
    let getLayouts = localStorage.getItem('layouts')
    let jsonParseLayouts = JSON.parse(getLayouts)
    let styles = `body{
        margin: 0;
        padding: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        overflow: hidden;
    }
    .container{
        width: 1200px;
        height: 550px;
        background: #00000028;
        position: relative;
    }`
    for(let leyout in jsonParseLayouts){
        let media
        if(leyout == "320"){
            console.log(leyout)
            media = `@media (max-width: 480px){
                .container{
                    width: ${leyout}px;
                }`
            
        }else{
            media = `@media (min-width: ${leyout}px){
                .container{
                    width: ${leyout}px;
                }`
        }

        for(let el in jsonParseLayouts[leyout]){
            media += `#e${el}{
                position:absolute;
                width:${jsonParseLayouts[leyout][el].width.count};
                height:${jsonParseLayouts[leyout][el].height.count};
                top:${jsonParseLayouts[leyout][el].top.count};
                left:${jsonParseLayouts[leyout][el].left.count};
                font-family:${jsonParseLayouts[leyout][el].fontFamily.count};
                color:${jsonParseLayouts[leyout][el].color.count};
                font-style:${jsonParseLayouts[leyout][el].fontStyle.count};
                font-weight:${jsonParseLayouts[leyout][el].fontWeight.count};
                text-align:${jsonParseLayouts[leyout][el].textAlign.count};
                text-transform:${jsonParseLayouts[leyout][el].textTransform.count};
                background:${jsonParseLayouts[leyout][el].background.count};
                display:${jsonParseLayouts[leyout][el].display.count};
                align-items:${jsonParseLayouts[leyout][el].alignItems.count};
                justify-content:${jsonParseLayouts[leyout][el].justifyContent.count};
                letter-spacing:${jsonParseLayouts[leyout][el].letterSpacing.count};
                font-size:${jsonParseLayouts[leyout][el].fontSize.count};
                text-shadow:${jsonParseLayouts[leyout][el].textShadow.count};
                margin:${jsonParseLayouts[leyout][el].margin.count};
                padding:${jsonParseLayouts[leyout][el].padding.count};
                border:${jsonParseLayouts[leyout][el].border.count};
                box-shadow:${jsonParseLayouts[leyout][el].boxShadow.count};
                opacity:${jsonParseLayouts[leyout][el].opacity.count};
                border-radius:${jsonParseLayouts[leyout][el].borderRadius.count};
                transform:${jsonParseLayouts[leyout][el].transform.count};
                z-index:${jsonParseLayouts[leyout][el].zIndex.count};
            }`
        }
        media += "}"
        styles+=media
    }
    let getElements = localStorage.getItem('elements')
    let jsonParseElements = JSON.parse(getElements)
        for(let el in jsonParseElements){
            let createELement = document.createElement(jsonParseElements[el].tagName)
                    createELement.textContent = jsonParseElements[el].textContent
                    createELement.id = "e"+el
                    container.append(createELement)
        }
        let style = document.createElement("style")
        style.innerHTML = styles
        let newWindow = window.open('', '', 'width=1400px,height=900px')
        newWindow.document.write('<html><head><title>Новое окно</title></head><body></body></html>')
        newWindow.document.body.append(style,container);
}


