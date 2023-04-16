window.addEventListener("keydown", function(event){
    if (event.code === 'Space') {
        document.body.classList.add("movable")
        window.addEventListener("mousedown", mouseDown)
      }
})
function mouseDown(e){
    window.addEventListener("mousemove",moveConstructorArea)
}
window.addEventListener("keyup", function(event){
    if (event.code === 'Space') {
        document.body.classList.remove("movable")
        window.removeEventListener("mousedown", mouseDown)
    }
})
window.addEventListener("mouseup", function(){
    window.removeEventListener("mousemove", moveConstructorArea) 
})

function moveConstructorArea({movementX,movementY}){ // Функция на отслеживание координат мышки и перемещения элемента на экране
    let getStyle = window.getComputedStyle(siteConstructorContainer) // Получает стили элемента
    let left = parseInt(getStyle.left) // Преобразует строковые числа из стилей в обычное число
    let top = parseInt(getStyle.top)    // Преобразует строковые числа из стилей в обычное число 
    siteConstructorContainer.style.top = `${top+movementY}px` // Просчитывает и задает параметр для движения элемента      
    siteConstructorContainer.style.left = `${left+movementX}px` // Просчитывает и задает параметр для движения элемента 
} 

