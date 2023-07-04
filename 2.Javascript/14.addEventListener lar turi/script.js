"use strict";

let button = document.querySelector('.button'),
    input = document.querySelector('.input'),
    main = document.querySelector('.main');

button.addEventListener("mouseleave", function () {
    alert("hello")
})

input.addEventListener("input", () => {
    console.log(input.value)
})

window.addEventListener("keydown", (event) => {
    console.log(event.key)
})

main.addEventListener("click", (event) => {
    console.log(event.target)
})
