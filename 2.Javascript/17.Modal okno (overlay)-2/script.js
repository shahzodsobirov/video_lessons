"use strict";


let mainBlock = document.querySelectorAll('.main_block'), mainOverlay = document.querySelector('.main_overlay'),
    name = document.querySelectorAll('.name'), overlay_name = document.querySelector('.overlay_name'),
    overlay_picture = document.querySelector('.overlay_picture'),
    overlay_surname = document.querySelector('.overlay_surname'),
    overlay_lorem = document.querySelector('.overlay_lorem'), picture = document.querySelectorAll('.picture'),
    surname = document.querySelectorAll('.surname'), lorem = document.querySelectorAll('.lorem');


mainBlock.forEach((item, index) => {
    item.addEventListener("click", () => {
        mainOverlay.classList.toggle("active")
        console.log(name[index].innerText)
        overlay_name.innerText = name[index].innerText
        overlay_surname.innerText = surname[index].innerText
        overlay_lorem.innerText = lorem[index].innerText
        overlay_picture.src = picture[index].src
    })
})


mainOverlay.addEventListener("click", (event) => {
    if (event.target === mainOverlay) {
        mainOverlay.classList.remove("active")
    }
})