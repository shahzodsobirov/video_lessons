"use strict";

let panel = document.querySelectorAll('.panel'),
    counter = 0;

console.log(panel)

for (let item of panel) {
    item.addEventListener("click", () => {
        removeClasses()
        item.classList.toggle("active")
    })
}

function removeClasses() {
    panel.forEach(i => {
        i.classList.remove("active")
    })
}



function hello() {
    counter++
    if(counter > panel.length - 1){
        counter = 0
    }
    console.log(counter)
    removeClasses()
    panel[counter].classList.toggle("active")
}

setInterval(hello, 3000)