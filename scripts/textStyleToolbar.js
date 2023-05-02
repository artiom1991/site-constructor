let setBold = document.querySelector(".setBold");
    setBold.addEventListener("mousedown", function(event) {
      event.preventDefault();
      document.execCommand("bold");
    })
let setItalic = document.querySelector(".setItalic");
    setItalic.addEventListener("mousedown", function(event) {
      event.preventDefault();
      document.execCommand("italic");
    })
let setUndeline = document.querySelector(".setUndeline");
    setUndeline.addEventListener("mousedown", function(event) {
      event.preventDefault();
      document.execCommand("underline");
    })
let setStrikethrough = document.querySelector(".setStrikethrough");
    setStrikethrough.addEventListener("mousedown", function(event) {
      event.preventDefault();
      document.execCommand("strikeThrough");
    })
let setOl = document.querySelector(".setOl");
    setOl.addEventListener("mousedown", function(event) {
      event.preventDefault();
      document.execCommand("insertOrderedList");
    })
let setUl = document.querySelector(".setUl");
    setUl.addEventListener("mousedown", function(event) {
      event.preventDefault();
      document.execCommand("insertUnorderedList");
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
