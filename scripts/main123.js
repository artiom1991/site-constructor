let siteConstructorContainer = document.querySelector(".site-constructor-content")

// Создание нового элемента
let addText = document.querySelector(".add-text")
addText.addEventListener("click", function(){
    let newText = document.createElement("p")
    newText.classList.add("element")
    newText.setAttribute("contenteditable", "true")
    siteConstructorContainer.append(newText)
    newText.focus()
    console.log("ggwp")
})

const element = document.querySelector(".element")

function fn({movementX,movementY}){
    let getStyle = window.getComputedStyle(element)
    let left = parseInt(getStyle.left)
    let top = parseInt(getStyle.top)
    element.style.top = `${top+movementY}px`
    element.style.left = `${left+movementX}px`
}

element.addEventListener("mousedown",(e)=>{
    if(e.target.hasAttribute("contenteditable")  === false){
        window.addEventListener("mousemove",fn)
        console.log("down")
    }
})

window.addEventListener("mouseup",()=>{
    window.removeEventListener("mousemove", fn)
    // console.log("up")
})

element.addEventListener("click",function(){
    element.setAttribute("contenteditable", "true")
    element.focus()
})

element.addEventListener("blur",function(){
    element.removeAttribute("contenteditable")
    console.log(element.textContent.length)
    if(element.textContent.length < 1){
        element.remove()
    }
})


































// function editText() {
//     // Получить элемент <p> с помощью его id
//     var element = document.getElementById("editableText");
  
//     // Получить текущий текст элемента <p>
//     var currentText = element.innerHTML;
//     console.log(currentText)
  
//     // Создать элемент <span> для редактирования текста
//     var spanElement = document.createElement("span");
//     spanElement.setAttribute("contentEditable", "true");
//     spanElement.setAttribute("class", "editable");
//     spanElement.innerHTML = currentText;
  
//     // Заменить элемент <p> на элемент <span>
//     element.parentNode.replaceChild(spanElement, element);
  
//     // Назначить фокус на элемент <span>, чтобы пользователь мог сразу начать редактирование текста
//     spanElement.focus();
//     spanElement.classList.add("element")
//     const range = document.createRange();
//     range.selectNodeContents(spanElement);
//     const selection = window.getSelection();
//     selection.removeAllRanges();
//     selection.addRange(range);

  
//     // Добавить обработчик событий, чтобы сохранить изменения, когда пользователь закончит редактирование
//     spanElement.addEventListener("blur", function() {
//       var newText = spanElement.innerHTML;
//       var newElement = document.createElement("span");
//       newElement.classList.add("element")
//       newElement.setAttribute("id", "editableText");
//       newElement.setAttribute("onclick", "editText()");
//       newElement.innerHTML = newText;
//       spanElement.parentNode.replaceChild(newElement, spanElement);
//       console.log(newElement.innerHTML)
//       let txt = newElement.textContent
//       txt.replace("<div>","<h1>")
//       txt.replace("</div>","</h1>")
//       newElement.innerHTML = txt
//     });
//   }
  






