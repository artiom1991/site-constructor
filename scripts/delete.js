document.addEventListener("keydown", function(event) {  // Создает событие для документа которое отслеживает нажатие delete
    if (event.key === "Delete" || event.key === "Del" || event.code === "46") {     //Проверяет если нажата клавиша delete
      let target = document.querySelectorAll(".target")         // Получает все элементы с классом target
      let selection = document.querySelector(".selection")
      selection.remove()
          target.forEach(el=>{          // Перебирает каждый элемент
            el.remove()                 // удаляет элемент
          })
    }
  });