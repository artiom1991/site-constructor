let font = document.querySelector(".font")
    font.addEventListener("click", function(){
        let selection = document.querySelector(".selection")
        let target = document.querySelector(".target")
        if(target){
            if(selection){
                selection.remove()
            }
                target.style.fontFamily = 'Arial, sans-serif';
                target.style.fontSize = '30px';
                selectionElement()
        }
    })

let fontWeight = document.querySelector(".fontWeight")
    fontWeight.addEventListener("click", function(){
        let target = document.querySelector(".target")
        if(target){
            let currentFontWeight = target.style.fontWeight;
            target.style.fontWeight = currentFontWeight === 'bold' ? 'normal' : 'bold';
        }
    })


let color = document.getElementById('color');
    color.addEventListener('input', (event) => {
        let selectedColor = event.target.value;
        let target = document.querySelector(".target")
        if(target){
            target.style.color = selectedColor
        }
    });
let background = document.getElementById('background');
    background.addEventListener('input', (event) => {
        let selectedColor = event.target.value;
        let target = document.querySelector(".target")
        if(target){
            target.style.background  = selectedColor
        }
    });
let textTransform = document.querySelector(".textTransform")
    textTransform.addEventListener("click", function(){
        let target = document.querySelector(".target")
        if(target){
            let currentTextTransform = target.style.textTransform;
            target.style.textTransform = currentTextTransform === 'lowercase' ? 'uppercase' : 'lowercase';
        }
    })


let width = document.querySelector(".width")
    width.addEventListener("click", function(){
        let selection = document.querySelector(".selection")
        let target = document.querySelector(".target")
        if(target){
            if(selection){
                selection.remove()
            }
            target.style.width = "100%"
            selectionElement()
        }
    })
let height = document.querySelector(".height")
    height.addEventListener("click", function(){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        if(target){
            if(selection){
                selection.remove()
            }
            target.style.height = "100%"
            selectionElement()
        }
    })
let flex = document.querySelector(".flex")
    flex.addEventListener("click", function(){
        let target = document.querySelector(".target")
        if(target){
            target.style.display = "flex"
        }
    })
let jcc = document.querySelector(".jcc")
    jcc.addEventListener("click", function(){
        let target = document.querySelector(".target")
        if(target){
            target.style.display = "flex"
            target.style.justifyContent = 'center';
        }
    })
let alic = document.querySelector(".alic")
    alic.addEventListener("click", function(){
        let target = document.querySelector(".target")
        if(target){
            target.style.display = "flex"
            target.style.alignItems = 'center';
        }
    })