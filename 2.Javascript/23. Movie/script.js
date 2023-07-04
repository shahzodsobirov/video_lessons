document.addEventListener("DOMContentLoaded", () => {
    "use strict";


    let input = document.querySelector('input'),
        button = document.querySelector('button'),
        list = document.querySelector('ul');



    const movieDB = {
        movies: [
            "avatar",
            "forsaj",
            "spider-men"
        ]
    }


    function changeMovies(movies) {
        list.innerHTML = ""

        console.log(movies)
        movies.forEach(movie => {
            list.innerHTML += `<li>${movie} <p >delete</p></li>`
        })
        const  delete_icon = document.querySelectorAll('p');
        delete_icon.forEach((item, index) => {
            item.addEventListener("click", () => {
                movieDB.movies.splice(index, 1)
                console.log(movieDB.movies)
                changeMovies(movieDB.movies)
            })
        })
    }

    function creatMovies() {
        button.addEventListener("click", () => {
            let film = input.value
            movieDB.movies.push(film)
            console.log(movieDB.movies)
            changeMovies(movieDB.movies)
        })
    }

    creatMovies()
    changeMovies(movieDB.movies)
})