"use strict";

let items = document.querySelectorAll('.item'),
    active = document.querySelector('.active'),
    counter = 0,
    interval;

items.forEach((model, index) => {
    model.addEventListener("click", () => {
        let style = window.getComputedStyle(model, false),
            url = style.backgroundImage.slice(4, -1);

        active.style.backgroundImage = `url(${url})`
        counter = index
        clearInterval(interval)
        addClass(counter)
        interval = setInterval(changeImage, 5000)
    })
})


function start() {
    items[0].classList.add('active_slider')
    let style = window.getComputedStyle(items[0], false),
        url = style.backgroundImage.slice(4, -1);

    active.style.backgroundImage = `url(${url})`
    active.classList.add('opacity_active')
}

function addClass(counter) {
    items.forEach(model => {
        model.classList.remove('active_slider')
    })
    items[counter].classList.add('active_slider')
    active.classList.remove('opacity_active')
    active.classList.add('opacity_active')
}

function changeImage() {
    counter++
    if (counter === 0){
        start()
    }
    if(counter > items.length - 1){
        counter = 0
    }
    addClass(counter)
    let style = window.getComputedStyle(items[counter], false),
        url = style.backgroundImage.slice(4, -1);

    active.style.backgroundImage = `url(${url})`

}

interval = setInterval(changeImage, 5000)
