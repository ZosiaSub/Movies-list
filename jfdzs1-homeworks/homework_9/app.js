'use strict'
//tworzymy nasz obiekt - Herosa za pomocą zmiennej, deklarujemy ją
var heroes = {};

// za pomocą funkcji tworzymy bazę danych naszych 3 herosów w postaci obiektów z ich właściwościami (właściwości są stałe, natomiast zmieniamy ich wartości w zależności od obiektu)
function CreateHeroesData () {
    heroes["Batman"] = {
        name: "Batman",
        photo: "batman.jpg",
        price: 200,
        desc: "Hejka, jestem batmanem dksfjsdlkfj ldjf sldkfj sdlkjf sldkjf lskdfj lksdsd fjlds lksd"
    }

    heroes["Superman"] = {
        name: "Superman",
        photo: "superman.jpg",
        price: 500,
        desc: "Lorem ipsum..."
    }

    heroes["Thor"] = {
        name: "Thor",
        photo: "thor.jpg",
        price: 1000,
        desc: "Lorem Lorem Lorem..."
    }
//wywołujemy funkcję SaveToLocalStorage() która zapisuje nasze dane na temat herosów w Local Storage
    SaveToLocalStorage();

//tu załadowujemy nasz kod html ponownie
    window.location.href = "index.html";

}

//tu deklarujemy funkcję, która będzie nam wyświetlała listę herosów na stronie
function CreateHeroesListView () {

//deklarujemy zmienną, która posłuży nam do zdefiniowania miejsca, w którym umieścimy listę herosów na stronie w dokumencie html
    var container = document.getElementById("heroes-list-region"),
//deklarujemy zmienną, która będzie tablicą właściwości naszych obiektów
        heroesKeys;
//wywołujemy funkcję, która pobierze nam dane naszych obiektów z Local Storage
    LoadFromLocalStorage();
//pobieramy właściwości z obiektów i wyświetlamy je w konsoli
    heroesKeys = Object.keys(heroes);
    console.log(heroesKeys);
//przy użyciu pętli tworzymy naszych herosów na stronie, tworząc div'y w naszym dokumencie html
    for (var i = 0; i < heroesKeys.length; i++) {
        var newElement = document.createElement("div"),
//deklarujemy zmienną która jest pojedynczym herosem
            selectedHero = heroes[heroesKeys[i]],
//deklarujemy zmienną,która będzie zawartością div'a pojedynczego herosa
            template;
//określamy dokładnie zawartość diva poszczególnego herosa, wraz z jego poszczególnymi właściwościami i wartościami pobranymi z local storage
        template = ''
            + '<div class="hero-item">'
            + '   <div>'
            + '      <img src="images/heroes/' + selectedHero.photo + '">'
            + '   </div>'
            + '<div>'
            + '<span>' + selectedHero.name + '</span>'
            + '<span>' + selectedHero.price + ' zł/h</span>'
            + '</div>'
            + '</div>';
//umieszczamy zawartość diva w dokumencie html
        newElement.innerHTML = template;
        container.appendChild(newElement);

    }
}

//deklaracja funkcji, która zapisuje dane naszych obiektów (herosów) w Local Storage
function SaveToLocalStorage () {
// deklaracja zmiennej, która jest zmianą naszych obiektów w stringi
    var heroesToString = JSON.stringify(heroes);
//zapisanie listy herosów jako stringi w Local Storage
    localStorage.setItem("herosList", heroesToString);
}

//deklaracja funkcji, która pobiera dane na temat naszych herosów z Local Storage
function LoadFromLocalStorage () {
//deklaracja zmiennej, która jest listą naszych herosów pobraną z Local Storage
    var herosList = localStorage.getItem("herosList"),
//deklaracja zmiennej, która jest listą naszych herosów (pobraną wcześniej z Local Storage) i zmienioną ze stringu w objekty
        stringToObject = JSON.parse(herosList);
//do zmiennej określającej naszych herosów przypisujemy listę herosów pobraną z Local Storage w formie już obiektów
    heroes = stringToObject;
}

//deklarujemy funkcję, która usówa listę herosów na stronie
function ClearAllHeroesData () {

//deklarujemy zmienną, która wyświetla komunikat do potwierdzenia przez użytkownika 'Czy na pewno checesz usunąć listę herosów z Local Storage?'
    var userDecision = confirm("Hejka, czy serio chcesz usunac?");
//Jeśli użytkownik potwierdzi, że chce usunąć listę
    if (userDecision) {
//zapisujemy dane listy herosów w Local Storage po nazwą "herosList", jako obiekty
        localStorage.setItem("herosList", "{}");
//załadowujemy od początku nasz dokument html
        window.location.href = "index.html"; // to przechodzi do adresu index.html
    }


}
//wywołujemy funkcję, która wyświetla listę herosów na stronie
CreateHeroesListView();