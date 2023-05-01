
siteConstructorContent.addEventListener("click", function(e){ 
    let targetClick = e.target   
    let target = document.querySelectorAll(".target") 
    let selectedLink = document.querySelectorAll(".selected-link") 
    let selection = document.querySelector(".selection")  
        if(targetClick.classList.contains("selection") == false){
            if(selection){     
                selection.remove()  
                textStyleEditor.style.display = "none"
                generalStyleEditor.style.display = "none"
                buttonStyleEditor.style.display = "none"
                }
            target.forEach(el=>{ 
                el.classList.remove("target") 
                })
            selectedLink.forEach(el=>{ 
                el.classList.remove("selected-link")
                })
        }
})