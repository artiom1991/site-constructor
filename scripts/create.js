

const element = document.querySelector(".element")

// Создание нового элемента
let createElement = document.querySelectorAll(".create")
    createElement.forEach((el,i)=>{
        el.addEventListener("click", function(){
        switch (true) {
            case el.classList.contains("p"):
                console.log("p")
                createNewElement("p")
                break;
            case el.classList.contains("span"):
                console.log("span")
                createNewElement("span")
                break;
            case el.classList.contains("div"):
                console.log("div")
                createNewElement("div")
                break;
            case el.classList.contains("h1"):
                console.log("h1")
                createNewElement("h1")
                break;
            case el.classList.contains("h2"):
                console.log("h2")
                createNewElement("h2")
                break;
            case el.classList.contains("h3"):
                console.log("h3")
                createNewElement("h3")
                break;
            case el.classList.contains("h4"):
                console.log("h4")
                createNewElement("h4")
                break;
            case el.classList.contains("h5"):
                console.log("h5")
                createNewElement("h5")
                break;
            case el.classList.contains("h6"):
                console.log("h6")
                createNewElement("h6")
                break;
            default:
                break;
        }
        })
    })




function createNewElement(element){
    let siteConstructorContainer = document.querySelector(".site-constructor-content")
    let newElement = document.createElement(`${element}`)
        newElement.classList.add("element")
        newElement.setAttribute("contenteditable", "true")
        siteConstructorContainer.append(newElement)
        newElement.focus()
}