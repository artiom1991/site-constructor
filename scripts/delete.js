document.addEventListener("keydown", function(event) {  // Создает событие для документа которое отслеживает нажатие delete
    if(event.target.hasAttribute("contenteditable")  === false && event.key === "Delete" || event.key === "Del" || event.code === "46") {     //Проверяет если нажата клавиша delete
        let target = document.querySelector(".target")         // Получает все элементы с классом target
        let id = target.id
        newLayouts.deleteElement(id)
        let selection = document.querySelector(".selection")      // Поулчает элемент selection
            if(selection){             // проверка на наличие selection  и в случае true удаление его
                selection.remove()
            }
            if(target){
                let linkId = "link-"+target.id                          //Получаем ID ссылки на элемент
                let link = document.getElementById(linkId)              // Получаем элемент ссылку
                    target.remove()             //Удаляем target
                    textStyleEditor.style.display = "none"
                    generalStyleEditor.style.display = "none"
                    buttonStyleEditor.style.display = "none"
                    link.remove()               //Удаляем ссылку на элемент target
            }
      }
  })