"use strict";


let image = document.querySelector('.image'),
    active = document.querySelector('.active');


image.addEventListener("click", () => {
    let style = window.getComputedStyle(image, false),
        url = style.backgroundImage.slice(4, -1);

    active.style.backgroundImage = `url(${url})`
})