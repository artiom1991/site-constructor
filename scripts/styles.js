let font = document.getElementById("font")
    font.addEventListener("change", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        if(target){
            target.style.fontFamily = `${event.target.value}`
            selection.remove()
            selectionElement()
        }
    })

let color = document.getElementById("color")
    color.addEventListener("input", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        if(target){
            target.style.color = `${event.target.value}`
            selection.remove()
            selectionElement()
        }
    })

let pseudeColor = document.querySelector(".input-color")
    pseudeColor.addEventListener("click", function(){
        color.click()
    })

let textDecoration = document.getElementById("text-decoration")
    textDecoration.addEventListener("change", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        if(target){
            target.style.textDecoration  = `${event.target.value}`
            selection.remove()
            selectionElement()
        }
    })

let fontSize = document.getElementById("font-size")
let fontPx = document.getElementById("font-px")
    fontSize.addEventListener("input", function(event){
        console.log("input")
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let px = fontPx.value
        if(target){
            target.style.fontSize  = `${event.target.value+px}`
            selection.remove()
            selectionElement()
        }
    })
    fontPx.addEventListener("change", function(event){
        let target = document.querySelector(".target")
        let selection = document.querySelector(".selection")
        let fontValue = fontSize.value
        console.log(fontValue)
        if(target){
            target.style.fontSize  = `${fontValue+event.target.value}`
            selection.remove()
            selectionElement()
        }
    })

