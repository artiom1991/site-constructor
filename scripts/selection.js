
// element.addEventListener("dblclick",function(){
//     element.setAttribute("contenteditable", "true")
//     element.focus()
//     let range = document.createRange();
//     range.selectNodeContents(element);
//     let selection = window.getSelection();
//     selection.removeAllRanges();
//     selection.addRange(range);
// })

// element.addEventListener("blur",function(e){
//     element.removeAttribute("contenteditable")
//     console.log(element.textContent.length)
//     if(element.textContent.length < 1){
//         element.remove()
//     }
//     let txt = element.innerHTML
//     let newTxt = txt.replaceAll("<div><br></div>","<br>")
//     let newTxt1 = newTxt.replaceAll("<div>","<br>")
//     let newTxt2 = newTxt1.replaceAll("</div>","")
//         element.innerHTML = newTxt2
// })
