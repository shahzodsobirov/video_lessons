"use strict";

let text = document.querySelectorAll('.text');


function nextSlide() {
    const current = document.querySelector('.current');
    console.log(current.nextElementSibling)
    if (current.nextElementSibling){
        current.nextElementSibling.classList.toggle("current")
    }
}

function prevSlide() {
    const current = document.querySelector('.current');
    console.log(current.previousElementSibling)
    if (current.previousElementSibling){
        current.previousElementSibling.classList.toggle("current")
    }
}

nextSlide()
prevSlide()