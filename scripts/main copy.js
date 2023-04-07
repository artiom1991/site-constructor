let siteConstructorContainer = document.querySelector(".site-constructor-content")

// Создание нового элемента
let addText = document.querySelector(".add-text")
addText.addEventListener("click", function(){
    let newText = document.createElement("p")
    newText.classList.add("element")
    newText.setAttribute("contenteditable", "true")
    siteConstructorContainer.append(newText)
    newText.focus()
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
})

element.addEventListener("click",function(){
    element.setAttribute("contenteditable", "true")
    element.focus()
})

element.addEventListener("blur",function(e){
    element.removeAttribute("contenteditable")
    console.log(element.textContent.length)
    if(element.textContent.length < 1){
        element.remove()
    }
    let txt = element.innerHTML
    console.log(txt)
    let newTxt = txt.replaceAll("<div><br></div>","<br>")
    let newTxt1 = newTxt.replaceAll("<div>","<br>")
    let newTxt2 = newTxt1.replaceAll("</div>","")
        element.innerHTML = newTxt2
    console.log(newTxt2)
    console.log(element.innerHTML)
})

function fn(e){
const myDiv = e.target
const range = document.createRange();
range.selectNodeContents(myDiv);
const selection = window.getSelection();
selection.removeAllRanges();
selection.addRange(range);
}











































// const myContentEditableElement = document.getElementById("editableText");

// myContentEditableElement.addEventListener("keydown", handleEnterKeyPress);


// function handleEnterKeyPress(event) {
//     if (event.keyCode === 13) {
//       event.preventDefault();
//       console.log(event.target.innerHTML)
//       event.target.innerHTML += "<br>"
//     }
//     let selection = document.getSelection()
//     let range = new Range
//     range.setStart(event.target, 0)
//     range.setEnd(selection.anchorNode, selection.anchorOffset)
//     return range.toString().length
//   }
  














// let i = document.getElementById("editableText")
//     i.addEventListener("click", function(e){
//         console.log(e.target)
//     })
//     i.addEventListener("blur", function(e){
//         let el = e.target.innerHTML
//         console.log(el)
//         let newEl = el.replace("<div>", "<br>")
//         newEl = newEl.replace("</div>", "")
//         console.log(el)
//         e.target.innerHTML = newEl
//     })





































// function editText() {
//     var element = document.getElementById("editableText");
//     var currentText = element.innerHTML;
//     var spanElement = document.createElement("span");
//     spanElement.setAttribute("contentEditable", "true");
//     spanElement.setAttribute("class", "editable");
//     spanElement.innerHTML = currentText;
//     element.parentNode.replaceChild(spanElement, element);
//     spanElement.focus();
//     spanElement.classList.add("element")
//     const range = document.createRange();
//     range.selectNodeContents(spanElement);
//     const selection = window.getSelection();
//     selection.removeAllRanges();
//     selection.addRange(range);
//     spanElement.addEventListener("blur", function() {
//     var newText = spanElement.innerHTML;
//     var newElement = document.createElement("span");
//     newElement.classList.add("element")
//     newElement.setAttribute("id", "editableText");
//     newElement.setAttribute("onclick", "editText()");
//     newElement.innerHTML = newText;
//     spanElement.parentNode.replaceChild(newElement, spanElement);
//     console.log(newElement.innerHTML)
//     let txt = newElement.textContent
//     txt.replace("<div>","<h1>")
//     txt.replace("</div>","</h1>")
//     newElement.innerHTML = txt
//     });
// }







