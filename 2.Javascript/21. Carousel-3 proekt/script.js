"use strict";

let slide = document.querySelectorAll('.slide'),
    next = document.getElementById('next'),
    prev = document.getElementById('prev');


let auto_slide = true,
    slide_time = 5000,
    interval_time;


function nextSlide() {
    const current = document.querySelector('.current');
    current.classList.remove("current")
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add("current")
    } else {
        slide[0].classList.add("current")
    }
}

function prevSlide() {
    const current = document.querySelector('.current');
    current.classList.remove("current")
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add("current")
    } else {
        slide[slide.length - 1].classList.add("current")
    }
}

if (auto_slide){
    clearInterval(interval_time)
    interval_time = setInterval(nextSlide, slide_time)
}

next.addEventListener('click', () => {
    nextSlide()
})


prev.addEventListener("click", () => {
    prevSlide()
})