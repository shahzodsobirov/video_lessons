"use strict";

let box = document.querySelector('.box');

box.addEventListener("click", () => {
    box.classList.toggle("active-box")
    console.log(box.classList)
})