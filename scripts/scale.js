let scale = 1    
let siteConstructorContainer = document.querySelector(".site-constructor-content") // Поле для элементов конструктора
    siteConstructorContainer.style.setProperty("transform", `scale(${scale})`)


let scalePlus = document.querySelector(".scalePlus")
    scalePlus.addEventListener("click", function(){
        if(scale < 3){
            scale = Math.round((scale + 0.1)*10)/10
            siteConstructorContainer.style.setProperty("transform", `scale(${scale})`)
            curentCount.textContent = Math.round(scale*100)
        }
    })
let scaleMinus = document.querySelector(".scaleMinus")
scaleMinus.addEventListener("click", function(){
    if(scale >= 0.2){
        scale = Math.round((scale-0.1)*10)/10
        siteConstructorContainer.style.setProperty("transform", `scale(${scale})`)
        curentCount.textContent = Math.round(scale*100)
    }
})
let curentCount = document.querySelector(".curentCount")

window.addEventListener('wheel', function(event) {
    let count = event.deltaY
        count = count / 1000
    if (event.ctrlKey === true) {
        event.preventDefault();
        if(count === -0.1 &&scale > 0.2){
            scale = Math.round((scale+count)*10)/10
            console.log(scale)
            siteConstructorContainer.style.setProperty("transform", `scale(${scale})`)
            curentCount.textContent = Math.round(scale*100)
        }else if(count === 0.1 &&scale < 3){
            scale = Math.round((scale+count)*10)/10
            console.log(scale)
            siteConstructorContainer.style.setProperty("transform", `scale(${scale})`)
            curentCount.textContent = Math.round(scale*100)
        }
      }
  }, { passive: false });