
document.body.addEventListener("click", function(e){ 
    let targetClick = e.target   
    let contextContainer = document.getElementById("contextContainer")
        if(contextContainer){contextContainer.remove()}
    // если кликнули непосредственно на body или на siteConstructorContent
    if ( targetClick == document.body || targetClick == siteConstructorContent) {
        let target = document.querySelectorAll(".target") 
        let selectedLink = document.querySelectorAll(".selected-link") 
        let selection = document.querySelector(".selection")  
            if(targetClick.classList.contains("selection") == false){
                if(selection){     
                    selection.remove()  
                    textStyleEditor.style.display = "none"
                    generalStyleEditor.style.display = "none"
                    buttonStyleEditor.style.display = "none"
                    imageStylesEditor.style.display = "none"
                    layoutStylesEditor.style.display = "block"
                    }
                target.forEach(el=>{ 
                    el.classList.remove("target") 
                    })
                selectedLink.forEach(el=>{ 
                    el.classList.remove("selected-link")
                    })
            }
    }
})