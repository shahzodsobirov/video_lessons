"use strict";

/*
 1) Oldingi darsdagi filmlar xaqidagi foydalanuvchiga beriladigan savollarni Loop yordamida avtomatlashtirish

 2) foydalanuvchi javobni bosh qator sifatida qoldira olmasli,
    javobni bekor qilishi va 50 ta xarfdan kop film nomini toldirmasligi kerak.
    Agar shu narsalar sodir bolsa oldingi savollarga yana qaytishi kerak boladi
    (xar bir qatorga biz str.lenght bilan uni uzunligini ovosek boladi)

 3) Shartlar yordamida tekshirish kere personalMovieDB.count, agar u 10 tadan kam bosa -
    "kam kino korilgan" db soobsheniya kesin
     agar 10 va 30 orasida bolsa "siz klassicheskiy tomoshabinsiz" db soobsheniya kesin
     agar 30 tadan kop bolsa "siz kinomansiz !" db soobsheniya kesin. Agar xich qaysi variant tori kemasa
     "xatolik yuz berdi !" db soobsheniya kesin
*/

const numberOfFilms = prompt("Necta kino kordingiz?")

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}
}


for (let i = 1; i < 3; i++) {
    const film = prompt("Oxirgi korilgan kino nomi?")
    const ball = prompt("Ball?")

    if (film !== "" && ball !== "" && film !== null && ball !== null && film.length < 50) {
        personalMovieDB.movies[film] = ball
        console.log("done")
    } else {
        i--
        console.log("error")
    }
}

console.log(personalMovieDB)

if (personalMovieDB.count < 10) {
    console.log("kam kino korilgan!")
}else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
    console.log("siz klassicheski tomoshabinsiz!")
}else if(personalMovieDB.count > 30){
    console.log("siz kinomansiz")
}else {
    console.log("xatolik yuz berdi")
}