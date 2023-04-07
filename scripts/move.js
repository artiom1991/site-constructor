

// element.addEventListener("mousedown",(e)=>{
//     if(e.target.hasAttribute("contenteditable")  === false){
//         window.addEventListener("mousemove",fn)
//         console.log("down")
//     }
// })

// window.addEventListener("mouseup",()=>{
//     window.removeEventListener("mousemove", fn)
// })

// function fn({movementX,movementY}){
//     let getStyle = window.getComputedStyle(element)
//     let left = parseInt(getStyle.left)
//     let top = parseInt(getStyle.top)
//     element.style.top = `${top+movementY}px`
//     element.style.left = `${left+movementX}px`
// }