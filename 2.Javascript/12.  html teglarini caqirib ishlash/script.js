"use strict";

let main = document.querySelector('.main'),
    boxes = document.querySelectorAll('.box'),
    text = document.getElementById('text');


main.addEventListener("click", () => {
    console.log("bosildi")
})

text.addEventListener("click", () => {
    console.log("text bosildi")
})

boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log("box bosildi")
    })
})

console.log(main)
console.log(text)