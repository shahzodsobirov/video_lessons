"use strict";

let input = document.querySelector('input'),
    buttons = document.querySelectorAll('button');


for (let button of buttons) {
    button.addEventListener('click', () => {
        if (button.innerText !== "=" && button.innerText !== "Del") {
            input.value += button.innerText
        }
        console.log(button.innerText)
        if (button.innerText === "=") {
            input.value = eval(input.value)
        }
        if (button.innerText === "Del") {
            console.log(input.value.slice(0, -1))
        }
    })
}

