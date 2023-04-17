    document.addEventListener("keydown", function(event) {  // Создает событие для документа которое отслеживает нажатие delete
        if(event.key === "Delete" || event.key === "Del" || event.code === "46") {     //Проверяет если нажата клавиша delete
            let target = document.querySelector(".target")         // Получает все элементы с классом target
            let linkId = "link-"+target.id                          //Получаем ID ссылки на элемент
            let link = document.getElementById(linkId)              // Получаем элемент ссылку
            let selection = document.querySelector(".selection")      // Поулчает элемент selection
                if(selection){             // проверка на наличие selection  и в случае true удаление его
                    selection.remove()
                }
                target.remove()             //Удаляем target
                link.remove()               //Удаляем ссылку на элемент target
          }
      })