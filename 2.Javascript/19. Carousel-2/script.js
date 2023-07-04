"use strict";

let imageContainer = document.querySelector('.image-container'),
    images = document.querySelectorAll('.image-container img'),
    leftButton = document.getElementById('left'),
    rightButton = document.getElementById('right'),
    index = 0;

console.log(images)

function changeImage() {
    if (index > images.length - 1) {
        index = 0
    }
    if (index < 0) {
        index = images.length - 1
    }
    imageContainer.style.transform = `translateX(${index * -500}px)`
}

rightButton.addEventListener('click', () => {
    index++
    changeImage()
    clearInterval(interval)
})


leftButton.addEventListener('click', () => {
    index--
    changeImage()
    clearInterval(interval)
})

function runSlider() {
    index++
    changeImage()
}
runSlider()
let interval = setInterval(runSlider, 3000)
