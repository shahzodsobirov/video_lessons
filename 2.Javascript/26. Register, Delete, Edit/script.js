"use strict";

let main_list = document.querySelector('.main_list'),
    name = document.querySelector('.name'),
    surname = document.querySelector('.surname'),
    img_link = document.querySelector('.img'),
    popular = document.querySelector('.popular'),
    password = document.querySelector('.password'),
    register_button = document.querySelector('.register_button'),
    main_overlay = document.querySelector('.main_overlay'),
    close_icon = document.querySelector('.close_icon'),
    edit_name = document.querySelector('.edit_name'),
    edit_surname = document.querySelector('.edit_surname'),
    edit_password = document.querySelector('.edit_password'),
    edit_img = document.querySelector('.edit_img'),
    edit_checkbox = document.querySelector('.edit_checkbox'),
    edit = document.querySelector('.edit'),
    player_index = 0,
    delete_btn = document.querySelector('.delete');


let characterList = [{
    id: 1,
    name: "Lionel",
    surname: "Messi",
    password: 123,
    img: "https://www.mordeo.org/files/uploads/2018/09/Lionel-Messi-2018-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg",
    popular: true
}, {
    id: 1,
    name: "Cristiano",
    surname: "Ronaldo",
    password: 123,
    img: "https://s.hs-data.com/bilder/spieler/gross/13029.jpg",
    popular: true
}];


register_button.addEventListener("click", () => {

    let info = {
        name: name.value,
        surname: surname.value,
        password: password.value,
        img: img_link.value,
        popular: popular.checked
    }
    characterList.push(info)
    name.value = ''
    surname.value = ''
    password.value = ''
    img_link.value = ''
    console.log(characterList)
    creatPlayers()

})


function creatPlayers() {
    main_list.innerHTML = ''
    characterList.forEach((item, index) => {
        let Classname = ''
        if (item.popular === true) {
            Classname = "main_list_user popular"
        } else {
            Classname = "main_list_user"
        }
        main_list.innerHTML += `        
        <div class="${Classname}">
            <i class="edit_user fa-solid fa-pen"></i>
            <img src="${item.img}"
                 alt="">
            <h1>${item.name}</h1>
            <h2>${item.surname}</h2>
        </div>`
    })
    let editUser = document.querySelectorAll('.edit_user');

    editUser.forEach((item, index) => {
        item.addEventListener("click", () => {
            player_index = index
            main_overlay.classList.add('active')
            edit_name.value = characterList[index].name
            edit_surname.value = characterList[index].surname
            edit_password.value = characterList[index].password
            edit_img.value = characterList[index].img
            edit_checkbox.checked = characterList[index].popular
        })
    })
    close_icon.addEventListener("click", () => {
        main_overlay.classList.remove('active')
    })
}

creatPlayers()


edit.addEventListener("click", () => {
    characterList[player_index].name = edit_name.value
    characterList[player_index].surname = edit_surname.value
    characterList[player_index].password = edit_password.value
    characterList[player_index].img = edit_img.value
    characterList[player_index].popular = edit_checkbox.checked
    console.log(characterList)
    creatPlayers()
    main_overlay.classList.remove('active')
})

delete_btn.addEventListener("click", () => {
    characterList.splice(player_index, 1)
    creatPlayers()
    main_overlay.classList.remove('active')
})