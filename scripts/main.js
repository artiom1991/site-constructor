let font = document.querySelector(".font")
    font.addEventListener("click", function(){
        let selection = document.querySelector(".selection")
        selection?selection.remove():console.log("no selections")
        let target = document.querySelector(".target")
            target.style.fontFamily = 'Arial, sans-serif';
            target.style.fontSize = '30px';
            selectionElement()
    })
let fontWeight = document.querySelector(".fontWeight")
fontWeight.addEventListener("click", function(){
        let target = document.querySelector(".target")
        const currentFontWeight = target.style.fontWeight;
        target.style.fontWeight = currentFontWeight === 'bold' ? 'normal' : 'bold';
    })


    const color = document.getElementById('color');
    color.addEventListener('input', (event) => {
      const selectedColor = event.target.value;
      let target = document.querySelector(".target")
      target.style.color = selectedColor
    });
    const background = document.getElementById('background');
    background.addEventListener('input', (event) => {
      const selectedColor = event.target.value;
      let target = document.querySelector(".target")
      target.style.background  = selectedColor
    });
    const textTransform = document.querySelector(".textTransform")
        textTransform.addEventListener("click", function(){
            let target = document.querySelector(".target")
            const currentTextTransform = target.style.textTransform;
            target.style.textTransform = currentTextTransform === 'lowercase' ? 'uppercase' : 'lowercase';
        })
        