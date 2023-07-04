"use strict";


let button = document.querySelector('button'),
    main_overlay = document.querySelector('.main_overlay'),
    close_overlay = document.querySelector('.close_overlay');


button.addEventListener("click", () => {
    main_overlay.classList.toggle("active-overlay")
})

close_overlay.addEventListener("click", () => {
    main_overlay.classList.remove("active-overlay")
})

main_overlay.addEventListener("click", (event) => {
    if (event.target === main_overlay){
        main_overlay.classList.remove("active-overlay")
    }
})