document.addEventListener("keydown", function(event) {
    if(event.target.tagName !== "INPUT" && event.target.hasAttribute("contenteditable") === false){
            if(event.key === "Delete" || event.key === "Backspace") { 
                deleteElement(event)
                }
        }
})

function deleteElement(event){
    let selection = document.querySelector(".selection")      // Поулчает элемент selection
    let target = document.querySelector(".target")         // Получает все элементы с классом target
        if(selection){             // проверка на наличие selection  и в случае true удаление его
            selection.remove()
        }
        if(target){
            let id = target.id
                newLayouts.deleteElement(id)
            let linkId = "link-"+target.id                          //Получаем ID ссылки на элемент
            let link = document.getElementById(linkId)              // Получаем элемент ссылку
                target.remove()             //Удаляем target
                textStyleEditor.style.display = "none"
                generalStyleEditor.style.display = "none"
                buttonStyleEditor.style.display = "none"
                link.remove()               //Удаляем ссылку на элемент target
        }
}

let deleteBtn = document.getElementById("delete-btn").addEventListener("click",deleteElement)