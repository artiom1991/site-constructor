let setBold = document.querySelector(".setBold")
    setBold.addEventListener("mousedown", function(event) {
      let selection = window.getSelection()
      event.preventDefault()
      document.execCommand("bold")
      selection.anchorNode.parentElement.classList.add("text-stylize")
    })
let setItalic = document.querySelector(".setItalic");
    setItalic.addEventListener("mousedown", function(event) {
      let selection = window.getSelection()
      event.preventDefault()
      document.execCommand("italic")
      selection.anchorNode.parentElement.classList.add("text-stylize")
    })
let setUndeline = document.querySelector(".setUndeline");
    setUndeline.addEventListener("mousedown", function(event) {
      let selection = window.getSelection()
      event.preventDefault()
      document.execCommand("underline")
      selection.anchorNode.parentElement.classList.add("text-stylize")
    })
let setStrikethrough = document.querySelector(".setStrikethrough");
    setStrikethrough.addEventListener("mousedown", function(event) {
      let selection = window.getSelection()
      event.preventDefault()
      document.execCommand("strikeThrough")
      selection.anchorNode.parentElement.classList.add("text-stylize")
    })
let setOl = document.querySelector(".setOl");
    setOl.addEventListener("mousedown", function(event) {
      let selection = window.getSelection()
      event.preventDefault()
      document.execCommand("insertOrderedList")
      selection.anchorNode.parentElement.classList.add("text-stylize")
    })
let setUl = document.querySelector(".setUl")
    setUl.addEventListener("mousedown", function(event) {
      // let selection = window.getSelection()
      event.preventDefault()
      document.execCommand("insertUnorderedList");
      // let ul = selection.anchorNode.parentElement.closest("ul")
      // if (ul) {
      //     ul.classList.add("text-stylize")
      //   let lis = ul.querySelectorAll("li")
      //   for (let li of lis) {
      //     li.classList.add("text-stylize")
      //   }
      // }
    })
let textColor = document.getElementById("text-color")
    textColor.addEventListener("input", function(){
      event.preventDefault();
      document.execCommand('styleWithCSS', null, true);
      document.execCommand("foreColor", false, `${textColor.value}`);
    })
let setColor = document.querySelector(".setColor");
    setColor.addEventListener("mousedown", function(event) {
            textColor.click()
            event.preventDefault();
    })
let clearStyles = document.querySelector(".clearStyles");
    clearStyles.addEventListener("mousedown", function(event) {
      event.preventDefault();
      document.execCommand("removeFormat");
    })
