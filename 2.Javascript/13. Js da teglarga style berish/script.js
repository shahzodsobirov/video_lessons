"use strict";

let box = document.querySelector('.box'),
    text = document.querySelector('.text');


box.addEventListener('click', () => {
    box.style.backgroundColor = "crimson"
    box.style.transform = `translateX(${500}px)`
    box.style.rotate = `${90}deg`
})

text.addEventListener("click", () => {
    text.style.backgroundColor = 'red'
    text.style.fontFamily = "Bahnschrift"
})
