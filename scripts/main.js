

let createText = document.querySelector(".createText")
    createText.addEventListener("click", function(event){
        let textList = document.querySelector(".textList")
        let hidenMenu = document.querySelectorAll(".hidenMenu")
            hidenMenu.forEach(element => {
                element.style.display = "none"
            })
            textList.style.display = "block"
            event.stopPropagation();
    })
    window.addEventListener("click", function(){
        let hidenMenu = document.querySelectorAll(".hidenMenu")
            hidenMenu.forEach(element => {
                element.style.display = "none"
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



window.addEventListener("paste", function(event){
    event.preventDefault();
    const text = event.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
})

let hideBlock = document.querySelector(".hide-blocks")
    hideBlock.addEventListener("click", function(event){
        let siteConstructorElements = document.querySelector(".site-constructor-elements")
        if(event.target.classList.contains('show-blocks')){
            siteConstructorElements.classList.remove("site-constructor-elements-hide")
            event.target.classList.remove("show-blocks")
        }else{
            siteConstructorElements.classList.add("site-constructor-elements-hide")
            event.target.classList.add("show-blocks")
        }
    })

    let hideStyles = document.querySelector(".hide-styles")
        hideStyles.addEventListener("click", function(event){
            let siteConstructorElementStyle = document.querySelector(".site-constructor-element-style")
            if(event.target.classList.contains('show-blocks')){
                siteConstructorElementStyle.classList.remove("site-constructor-element-style-hide")
                event.target.classList.remove("show-blocks")
            }else{
                siteConstructorElementStyle.classList.add("site-constructor-element-style-hide")
                event.target.classList.add("show-blocks")
            }
         })











// let font = document.querySelector(".font")
//     font.addEventListener("click", function(){
//         let selection = document.querySelector(".selection")
//         let target = document.querySelector(".target")
//         if(target){
//             if(selection){
//                 selection.remove()
//             }
//                 target.style.fontFamily = 'Arial, sans-serif';
//                 target.style.fontSize = '30px';
//                 selectionElement()
//         }
//     })

// let fontWeight = document.querySelector(".fontWeight")
//     fontWeight.addEventListener("click", function(){
//         let target = document.querySelector(".target")
//         if(target){
//             let currentFontWeight = target.style.fontWeight;
//             target.style.fontWeight = currentFontWeight === 'bold' ? 'normal' : 'bold';
//         }
//     })


// let color = document.getElementById('color');
//     color.addEventListener('input', (event) => {
//         let selectedColor = event.target.value;
//         let target = document.querySelector(".target")
//         if(target){
//             target.style.color = selectedColor
//         }
//     });
// let background = document.getElementById('background');
//     background.addEventListener('input', (event) => {
//         let selectedColor = event.target.value;
//         let target = document.querySelector(".target")
//         if(target){
//             target.style.background  = selectedColor
//         }
//     });
// let textTransform = document.querySelector(".textTransform")
//     textTransform.addEventListener("click", function(){
//         let target = document.querySelector(".target")
//         if(target){
//             let currentTextTransform = target.style.textTransform;
//             target.style.textTransform = currentTextTransform === 'lowercase' ? 'uppercase' : 'lowercase';
//         }
//     })


// let width = document.querySelector(".width")
//     width.addEventListener("click", function(){
//         let selection = document.querySelector(".selection")
//         let target = document.querySelector(".target")
//         if(target){
//             if(selection){
//                 selection.remove()
//             }
//             target.style.width = "100%"
//             selectionElement()
//         }
//     })
// let height = document.querySelector(".height")
//     height.addEventListener("click", function(){
//         let target = document.querySelector(".target")
//         let selection = document.querySelector(".selection")
//         if(target){
//             if(selection){
//                 selection.remove()
//             }
//             target.style.height = "100%"
//             selectionElement()
//         }
//     })
// let flex = document.querySelector(".flex")
//     flex.addEventListener("click", function(){
//         let target = document.querySelector(".target")
//         if(target){
//             target.style.display = "flex"
//         }
//     })
// let jcc = document.querySelector(".jcc")
//     jcc.addEventListener("click", function(){
//         let target = document.querySelector(".target")
//         if(target){
//             target.style.display = "flex"
//             target.style.justifyContent = 'center';
//         }
//     })
// let alic = document.querySelector(".alic")
//     alic.addEventListener("click", function(){
//         let target = document.querySelector(".target")
//         if(target){
//             target.style.display = "flex"
//             target.style.alignItems = 'center';
//         }
//     })